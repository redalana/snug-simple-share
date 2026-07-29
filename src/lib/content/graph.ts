/**
 * The Enterprise Knowledge Graph engine.
 *
 * Nodes are `Entity` values (see `./entities.ts`); edges are derived, never
 * authored. Two entities are connected when their normalised facet vectors
 * overlap, and the strength of that overlap — weighted by
 * `RELATION_WEIGHTS` — becomes the edge weight. Content-to-content edges reuse
 * the existing relationship engine (`relevanceScore`) so scoring stays
 * consistent with everything already shipped.
 *
 * Everything is generated dynamically and cached: adding a product, article or
 * FAQ to its source module automatically adds it to the graph, with no manual
 * linking.
 */

import { lazy, memoize1, memoizeKeyed } from "./cache";
import {
  ENTITIES,
  ENTITIES_BY_SLUG,
  ENTITY_BY_ID,
  brandId,
  equipmentCategoryId,
  getEntitiesByType,
  type Entity,
  type EntityFacets,
  type EntityType,
} from "./entities";
import { RELATION_WEIGHTS, relevanceScore } from "./relations";
import type { ContentItem } from "./types";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type RelationKind =
  | "technology"
  | "brand"
  | "equipmentCategory"
  | "specialty"
  | "clinicalApplication"
  | "country"
  | "tag"
  | "explicit";

export type GraphEdge = {
  from: string;
  to: string;
  /** Facets responsible for the connection, strongest first. */
  via: RelationKind[];
  weight: number;
};

export type ScoredEntity = Entity & { relevance: number; via: RelationKind[] };

export type EntityRef = Entity | string;

/* ------------------------------------------------------------------ */
/*  Facet weights, expressed once                                      */
/* ------------------------------------------------------------------ */

const FACET_WEIGHTS: Record<keyof EntityFacets, { kind: RelationKind; weight: number }> = {
  technologies: { kind: "technology", weight: RELATION_WEIGHTS.technology },
  brands: { kind: "brand", weight: RELATION_WEIGHTS.manufacturer },
  clinicalApplications: {
    kind: "clinicalApplication",
    weight: RELATION_WEIGHTS.clinicalApplication,
  },
  specialties: { kind: "specialty", weight: RELATION_WEIGHTS.specialty },
  equipmentCategories: { kind: "equipmentCategory", weight: RELATION_WEIGHTS.equipmentType },
  countries: { kind: "country", weight: RELATION_WEIGHTS.country },
  tags: { kind: "tag", weight: RELATION_WEIGHTS.tag },
};

/** The facet axis a taxonomy entity type "is". */
const AXIS_OF_TYPE: Partial<Record<EntityType, keyof EntityFacets>> = {
  technology: "technologies",
  brand: "brands",
  "equipment-category": "equipmentCategories",
  specialty: "specialties",
  "clinical-application": "clinicalApplications",
  country: "countries",
};

/* ------------------------------------------------------------------ */
/*  Resolution                                                         */
/* ------------------------------------------------------------------ */

/**
 * Resolve any loose reference to an entity:
 *   getEntity("technology:mri")  getEntity("mri")  getEntity("MRI")
 *   getEntity("Philips")         getEntity("product:...")  getEntity(entity)
 */
export function getEntity(ref: EntityRef, preferredType?: EntityType): Entity | undefined {
  if (typeof ref !== "string") return ref;

  const direct = ENTITY_BY_ID().get(ref);
  if (direct) return direct;

  const raw = ref.trim();
  const slug = raw.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  const candidates = [
    ...(ENTITIES_BY_SLUG().get(slug) ?? []),
    ...(slug === raw.toLowerCase() ? [] : (ENTITIES_BY_SLUG().get(raw.toLowerCase()) ?? [])),
  ];
  if (candidates.length) {
    if (preferredType) {
      const typed = candidates.find((c) => c.type === preferredType);
      if (typed) return typed;
    }
    return candidates[0];
  }

  const lowered = raw.toLowerCase();
  return ENTITIES().find(
    (e) => e.label.toLowerCase() === lowered && (!preferredType || e.type === preferredType),
  );
}

function requireEntity(ref: EntityRef, preferredType?: EntityType): Entity | undefined {
  return getEntity(ref, preferredType);
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

function overlapCount(a: readonly string[], b: readonly string[]): number {
  if (!a.length || !b.length) return 0;
  const set = new Set(b);
  let n = 0;
  for (const value of a) if (set.has(value)) n++;
  return n;
}

/**
 * Weighted relationship score between any two entities.
 *
 * Three cases, all consistent with each other:
 *   content ↔ content   → the existing `relevanceScore`, plus facet `via` info
 *   taxonomy ↔ content  → membership on the taxonomy axis dominates
 *   taxonomy ↔ taxonomy → shared facet overlap across the whole vector
 */
export function scoreEntities(
  subject: Entity,
  candidate: Entity,
): { relevance: number; via: RelationKind[] } {
  if (subject.id === candidate.id) return { relevance: 0, via: [] };

  const via: { kind: RelationKind; weight: number }[] = [];
  let relevance = 0;

  // Membership: is the candidate tagged with the subject's own axis (or vice versa)?
  const subjectAxis = AXIS_OF_TYPE[subject.type];
  if (subjectAxis && candidate.facets[subjectAxis].includes(subject.slug)) {
    const { kind, weight } = FACET_WEIGHTS[subjectAxis];
    relevance += weight * 2;
    via.push({ kind, weight: weight * 2 });
  }
  const candidateAxis = AXIS_OF_TYPE[candidate.type];
  if (candidateAxis && subject.facets[candidateAxis].includes(candidate.slug)) {
    const { kind, weight } = FACET_WEIGHTS[candidateAxis];
    relevance += weight * 2;
    via.push({ kind, weight: weight * 2 });
  }

  // Facet overlap across the shared vector.
  for (const key of Object.keys(FACET_WEIGHTS) as (keyof EntityFacets)[]) {
    const shared = overlapCount(subject.facets[key], candidate.facets[key]);
    if (!shared) continue;
    const { kind, weight } = FACET_WEIGHTS[key];
    // Taxonomy entities aggregate many members, so their overlap is damped to
    // stop broad hubs from swamping precise, content-level matches.
    const damping = subject.contentItem && candidate.contentItem ? 1 : 0.5;
    const contribution = shared * weight * damping;
    relevance += contribution;
    via.push({ kind, weight: contribution });
  }

  // Explicit, author-declared links always outrank inferred ones.
  if (subject.contentItem && candidate.contentItem) {
    const contentScore = relevanceScore(subject.contentItem, candidate.contentItem);
    if (contentScore > relevance) {
      via.push({ kind: "explicit", weight: contentScore - relevance });
      relevance = contentScore;
    }
  }

  const kinds = [...via]
    .sort((a, b) => b.weight - a.weight)
    .map((v) => v.kind)
    .filter((kind, index, all) => all.indexOf(kind) === index);

  return { relevance: Math.round(relevance * 100) / 100, via: kinds };
}

/* ------------------------------------------------------------------ */
/*  Graph construction                                                 */
/* ------------------------------------------------------------------ */

export type KnowledgeGraph = {
  nodes: Entity[];
  edges: GraphEdge[];
  /** Adjacency list, sorted strongest-first, keyed by entity id. */
  adjacency: Map<string, GraphEdge[]>;
  stats: {
    nodeCount: number;
    edgeCount: number;
    nodesByType: Record<string, number>;
  };
};

const MIN_EDGE_WEIGHT = 1;

/**
 * Build the whole graph once. O(n²) over ~200 entities is a few tens of
 * thousands of cheap set lookups, executed lazily on first graph query and
 * cached for the lifetime of the module.
 */
export const getKnowledgeGraph = lazy<KnowledgeGraph>(() => {
  const nodes = ENTITIES();
  const edges: GraphEdge[] = [];
  const adjacency = new Map<string, GraphEdge[]>();

  const addEdge = (edge: GraphEdge) => {
    edges.push(edge);
    const list = adjacency.get(edge.from) ?? [];
    list.push(edge);
    adjacency.set(edge.from, list);
  };

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i];
      const b = nodes[j];
      const { relevance, via } = scoreEntities(a, b);
      if (relevance < MIN_EDGE_WEIGHT) continue;
      addEdge({ from: a.id, to: b.id, via, weight: relevance });
      addEdge({ from: b.id, to: a.id, via, weight: relevance });
    }
  }

  for (const list of adjacency.values()) {
    list.sort((x, y) => y.weight - x.weight || x.to.localeCompare(y.to));
  }

  const nodesByType: Record<string, number> = {};
  for (const node of nodes) nodesByType[node.type] = (nodesByType[node.type] ?? 0) + 1;

  return {
    nodes,
    edges,
    adjacency,
    stats: { nodeCount: nodes.length, edgeCount: edges.length / 2, nodesByType },
  };
});

/* ------------------------------------------------------------------ */
/*  Graph queries                                                      */
/* ------------------------------------------------------------------ */

/** Every outgoing edge of an entity, strongest first. */
export function getEntityRelations(ref: EntityRef): GraphEdge[] {
  const entity = requireEntity(ref);
  if (!entity) return [];
  return getKnowledgeGraph().adjacency.get(entity.id) ?? [];
}

export type RelatedEntityOptions = {
  /** Restrict results to these entity types. */
  types?: EntityType | EntityType[];
  limit?: number;
  minScore?: number;
};

/** Related entities, strongest first, optionally filtered by entity type. */
export function getRelatedEntities(
  ref: EntityRef,
  options: RelatedEntityOptions = {},
): ScoredEntity[] {
  const entity = requireEntity(ref);
  if (!entity) return [];

  const { types, limit, minScore = MIN_EDGE_WEIGHT } = options;
  const allowed = types ? new Set(Array.isArray(types) ? types : [types]) : undefined;
  const byId = ENTITY_BY_ID();

  const results: ScoredEntity[] = [];
  for (const edge of getEntityRelations(entity)) {
    if (edge.weight < minScore) continue;
    const target = byId.get(edge.to);
    if (!target) continue;
    if (allowed && !allowed.has(target.type)) continue;
    results.push({ ...target, relevance: edge.weight, via: edge.via });
  }

  return typeof limit === "number" ? results.slice(0, limit) : results;
}

/**
 * Strict membership: content entities explicitly tagged with this taxonomy
 * entity's own axis (e.g. products whose technology *is* MRI), as opposed to
 * `getRelatedEntities`, which also returns adjacent, inferred connections.
 */
export function getEntityMembers(ref: EntityRef, type?: EntityType): ScoredEntity[] {
  const entity = requireEntity(ref, type);
  if (!entity) return [];
  const axis = AXIS_OF_TYPE[entity.type];
  if (!axis) return [];
  return getRelatedEntities(entity).filter(
    (candidate) => candidate.contentItem && candidate.facets[axis].includes(entity.slug),
  );
}

/** Related entities grouped by entity type — the standard hub payload. */
export type EntityGraphView = {
  entity: Entity;
  products: ScoredEntity[];
  articles: ScoredEntity[];
  services: ScoredEntity[];
  brands: ScoredEntity[];
  faqs: ScoredEntity[];
  documents: ScoredEntity[];
  technologies: ScoredEntity[];
  equipmentCategories: ScoredEntity[];
  specialties: ScoredEntity[];
  clinicalApplications: ScoredEntity[];
  countries: ScoredEntity[];
};

function groupRelations(entity: Entity, limitPerType?: number): EntityGraphView {
  const related = getRelatedEntities(entity);
  const take = (type: EntityType) => {
    const list = related.filter((r) => r.type === type);
    return typeof limitPerType === "number" ? list.slice(0, limitPerType) : list;
  };
  return {
    entity,
    products: take("product"),
    articles: take("article"),
    services: take("service"),
    brands: take("brand"),
    faqs: take("faq"),
    documents: take("document"),
    technologies: take("technology"),
    equipmentCategories: take("equipment-category"),
    specialties: take("specialty"),
    clinicalApplications: take("clinical-application"),
    countries: take("country"),
  };
}

const EMPTY_VIEW = (entity: Entity): EntityGraphView => groupRelations(entity);

function viewFor(
  ref: EntityRef,
  type: EntityType,
  limitPerType?: number,
): EntityGraphView | undefined {
  const entity = requireEntity(ref, type);
  if (!entity) return undefined;
  return groupRelations(entity, limitPerType);
}

/** Build a memoised graph-view accessor for one taxonomy entity type. */
function graphViewAccessor(type: EntityType, normalise: (ref: string) => string = (r) => r) {
  const cached = memoizeKeyed(
    (ref: string, limitPerType: number | undefined) =>
      viewFor(normalise(ref) || ref, type, limitPerType),
    (ref, limit) => `${ref}|${limit ?? "all"}`,
  );
  return (ref: string, limitPerType?: number) => cached(ref, limitPerType);
}

export const getTechnologyGraph = graphViewAccessor("technology");
export const getBrandGraph = graphViewAccessor("brand", brandId);
export const getSpecialtyGraph = graphViewAccessor("specialty");
export const getClinicalApplicationGraph = graphViewAccessor("clinical-application");
export const getEquipmentCategoryGraph = graphViewAccessor("equipment-category", equipmentCategoryId);
export const getCountryGraph = graphViewAccessor("country");

/** Graph view for any entity, whatever its type. */
export function getEntityGraph(ref: EntityRef, limitPerType?: number): EntityGraphView | undefined {
  const entity = requireEntity(ref);
  if (!entity) return undefined;
  return limitPerType === undefined ? EMPTY_VIEW(entity) : groupRelations(entity, limitPerType);
}

/* ------------------------------------------------------------------ */
/*  Global query API                                                   */
/* ------------------------------------------------------------------ */

/** Unwrap graph entities back to their content items, where they have one. */
export function toContentItems(entities: readonly ScoredEntity[]): ContentItem[] {
  return entities
    .map((e) => e.contentItem)
    .filter((item): item is ContentItem => Boolean(item));
}

export const getEverythingAboutTechnology = memoize1((technology: string) =>
  getTechnologyGraph(technology),
);
export const getEverythingAboutBrand = memoize1((brand: string) => getBrandGraph(brand));
export const getEverythingAboutSpecialty = memoize1((specialty: string) =>
  getSpecialtyGraph(specialty),
);
export const getEverythingAboutClinicalApplication = memoize1((application: string) =>
  getClinicalApplicationGraph(application),
);
export const getEverythingAboutCountry = memoize1((country: string) => getCountryGraph(country));

/** All entities of a type, for future hub pages and sitemaps. */
export { getEntitiesByType };

/* ------------------------------------------------------------------ */
/*  Semantic search preparation                                        */
/* ------------------------------------------------------------------ */

/**
 * Expand a query into the entity ids it refers to, so search can rank by
 * relationship rather than keyword. This is the hook a future semantic /
 * vector search plugs into: resolve the query to entities, then walk the graph.
 */
export function resolveQueryEntities(query: string, limit = 5): Entity[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);

  const scored = ENTITIES()
    .filter((e) => AXIS_OF_TYPE[e.type])
    .map((entity) => {
      const haystack = `${entity.label.toLowerCase()} ${entity.slug.replace(/-/g, " ")}`;
      let score = 0;
      if (haystack === q) score += 20;
      if (haystack.includes(q)) score += 10;
      for (const token of tokens) if (haystack.includes(token)) score += 3;
      return { entity, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || a.entity.label.localeCompare(b.entity.label));

  return scored.slice(0, limit).map((s) => s.entity);
}

/**
 * Relationship-aware expansion of a query: the entities it names plus their
 * strongest neighbours. Feeds a future semantic search ranker.
 */
export function expandQuery(query: string, perEntity = 8): ScoredEntity[] {
  const seeds = resolveQueryEntities(query);
  const merged = new Map<string, ScoredEntity>();
  for (const seed of seeds) {
    for (const related of getRelatedEntities(seed, { limit: perEntity })) {
      const existing = merged.get(related.id);
      if (!existing || existing.relevance < related.relevance) merged.set(related.id, related);
    }
  }
  return [...merged.values()].sort(
    (a, b) => b.relevance - a.relevance || a.label.localeCompare(b.label),
  );
}
