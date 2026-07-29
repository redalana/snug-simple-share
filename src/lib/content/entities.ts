/**
 * The entity model of the knowledge graph.
 *
 * An *entity* is any addressable node in the site's knowledge ecosystem. Two
 * families exist and both are produced from data that already exists:
 *
 *   1. Content entities  — articles, products, services, brands, FAQs and
 *      documents, i.e. the `ContentItem` registry built by `./adapters.ts`.
 *   2. Taxonomy entities — technologies, equipment categories, medical
 *      specialties, clinical applications and countries, i.e. the controlled
 *      vocabularies owned by `./taxonomy.ts`, `./specialties.ts`,
 *      `./clinical.ts` and `./geography.ts`.
 *
 * Nothing here is hand-linked. Every entity exposes the same normalised facet
 * vector, and `./graph.ts` derives all relationships from facet overlap.
 */

import { CONTENT_ITEMS } from "./adapters";
import { lazy } from "./cache";
import { CLINICAL_APPLICATIONS } from "./clinical";
import { COUNTRIES } from "./geography";
import { SPECIALTIES, normaliseSpecialty } from "./specialties";
import {
  ALL_MANUFACTURERS,
  PRIMARY_CATEGORIES,
  TECHNOLOGIES,
  normaliseManufacturer,
  normaliseTags,
} from "./taxonomy";
import type { ContentItem, ContentType } from "./types";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export const TAXONOMY_ENTITY_TYPES = [
  "technology",
  "equipment-category",
  "specialty",
  "clinical-application",
  "country",
] as const;

export type TaxonomyEntityType = (typeof TAXONOMY_ENTITY_TYPES)[number];

/** `brand` is both a content type and a taxonomy axis; it is unified here. */
export type EntityType = ContentType | TaxonomyEntityType;

/** Normalised facet vector shared by every entity in the graph. */
export type EntityFacets = {
  technologies: string[];
  brands: string[];
  equipmentCategories: string[];
  specialties: string[];
  clinicalApplications: string[];
  countries: string[];
  tags: string[];
};

export type Entity = {
  /** `${type}:${slug}` — globally unique. */
  id: string;
  type: EntityType;
  slug: string;
  label: string;
  description?: string;
  /** Canonical in-app route, when the entity has a page of its own. */
  url?: string;
  facets: EntityFacets;
  /** Present for content entities; undefined for pure taxonomy entities. */
  contentItem?: ContentItem;
  /** Back-reference to the untouched source record. */
  source: unknown;
};

export const EMPTY_FACETS: EntityFacets = {
  technologies: [],
  brands: [],
  equipmentCategories: [],
  specialties: [],
  clinicalApplications: [],
  countries: [],
  tags: [],
};

/* ------------------------------------------------------------------ */
/*  Facet normalisation                                                */
/* ------------------------------------------------------------------ */

export function brandId(value: string): string {
  return normaliseTags([normaliseManufacturer(value) ?? value])[0] ?? "";
}

export function equipmentCategoryId(value: string): string {
  return normaliseTags([value])[0] ?? "";
}

function unique(values: (string | undefined)[]): string[] {
  return [...new Set(values.filter((v): v is string => Boolean(v)))];
}

/** Project a content item onto the shared facet vector. */
export function facetsOfContentItem(item: ContentItem): EntityFacets {
  return {
    technologies: unique(item.technologies),
    brands: unique(item.manufacturers.map(brandId)),
    equipmentCategories: unique([
      ...item.equipmentTypes.map(equipmentCategoryId),
      item.type === "product" && item.primaryCategory
        ? equipmentCategoryId(item.primaryCategory)
        : undefined,
    ]),
    specialties: unique(item.specialties.map((s) => normaliseSpecialty(s) ?? normaliseTags([s])[0])),
    clinicalApplications: unique(item.clinicalApplications ?? []),
    countries: unique(item.countries ?? []),
    tags: unique(item.tags),
  };
}

/** Union of the facet vectors of a set of items, minus the entity's own axis. */
function aggregateFacets(items: readonly ContentItem[]): EntityFacets {
  const acc: EntityFacets = {
    technologies: [],
    brands: [],
    equipmentCategories: [],
    specialties: [],
    clinicalApplications: [],
    countries: [],
    tags: [],
  };
  const sets = {
    technologies: new Set<string>(),
    brands: new Set<string>(),
    equipmentCategories: new Set<string>(),
    specialties: new Set<string>(),
    clinicalApplications: new Set<string>(),
    countries: new Set<string>(),
    tags: new Set<string>(),
  };
  for (const item of items) {
    const facets = facetsOfContentItem(item);
    for (const key of Object.keys(sets) as (keyof EntityFacets)[]) {
      for (const value of facets[key]) sets[key].add(value);
    }
  }
  for (const key of Object.keys(sets) as (keyof EntityFacets)[]) acc[key] = [...sets[key]];
  return acc;
}

/* ------------------------------------------------------------------ */
/*  Content entities                                                   */
/* ------------------------------------------------------------------ */

const CONTENT_ENTITIES = lazy<Entity[]>(() =>
  CONTENT_ITEMS.map((item) => ({
    id: item.id,
    type: item.type,
    slug: item.slug,
    label: item.title,
    description: item.summary,
    url: item.url,
    facets: facetsOfContentItem(item),
    contentItem: item,
    source: item.source,
  })),
);

/* ------------------------------------------------------------------ */
/*  Taxonomy entities                                                  */
/* ------------------------------------------------------------------ */

/** Content items that carry a given facet value, per axis. */
function membersOf(axis: keyof EntityFacets, value: string): ContentItem[] {
  return CONTENT_ITEMS.filter((item) => facetIndex().get(item.id)![axis].includes(value));
}

const facetIndex = lazy(() => {
  const map = new Map<string, EntityFacets>();
  for (const item of CONTENT_ITEMS) map.set(item.id, facetsOfContentItem(item));
  return map;
});

/** Facets of a content item, memoised for the lifetime of the module. */
export function contentFacets(item: ContentItem): EntityFacets {
  return facetIndex().get(item.id) ?? facetsOfContentItem(item);
}

const TAXONOMY_ENTITIES = lazy<Entity[]>(() => {
  const entities: Entity[] = [];

  const push = (
    type: TaxonomyEntityType | "brand",
    slug: string,
    label: string,
    axis: keyof EntityFacets,
    source: unknown,
    extra?: { url?: string; description?: string },
  ) => {
    if (!slug) return;
    const members = membersOf(axis, slug);
    entities.push({
      id: `${type}:${slug}`,
      type,
      slug,
      label,
      description: extra?.description,
      url: extra?.url,
      facets: aggregateFacets(members),
      source,
    });
  };

  for (const tech of TECHNOLOGIES) {
    push("technology", tech.id, tech.label, "technologies", tech, {
      url: tech.categorySlug ? `/products/${tech.categorySlug}` : undefined,
    });
  }

  for (const manufacturer of ALL_MANUFACTURERS) {
    push("brand", brandId(manufacturer), manufacturer, "brands", manufacturer, {
      url: "/brands",
    });
  }

  for (const category of PRIMARY_CATEGORIES) {
    push("equipment-category", equipmentCategoryId(category), category, "equipmentCategories", category);
  }

  for (const specialty of SPECIALTIES) {
    push("specialty", specialty.id, specialty.label, "specialties", specialty);
  }

  for (const application of CLINICAL_APPLICATIONS) {
    push(
      "clinical-application",
      application.id,
      application.label,
      "clinicalApplications",
      application,
    );
  }

  for (const country of COUNTRIES) {
    push("country", country.id, country.label, "countries", country);
  }

  return entities;
});

/* ------------------------------------------------------------------ */
/*  The registry                                                       */
/* ------------------------------------------------------------------ */

/**
 * Every entity in the graph. Brand content items and brand taxonomy entities
 * share the `brand:` namespace on purpose — when both exist for the same
 * manufacturer the content item wins and keeps its page URL, while its facets
 * are widened with everything the manufacturer is connected to.
 */
export const ENTITIES = lazy<Entity[]>(() => {
  const byId = new Map<string, Entity>();

  for (const entity of TAXONOMY_ENTITIES()) byId.set(entity.id, entity);

  for (const entity of CONTENT_ENTITIES()) {
    const existing = byId.get(entity.id);
    if (existing) {
      byId.set(entity.id, {
        ...entity,
        facets: mergeFacets(existing.facets, entity.facets),
        url: entity.url ?? existing.url,
      });
    } else {
      byId.set(entity.id, entity);
    }
  }

  return [...byId.values()];
});

function mergeFacets(a: EntityFacets, b: EntityFacets): EntityFacets {
  const out = { ...EMPTY_FACETS };
  for (const key of Object.keys(EMPTY_FACETS) as (keyof EntityFacets)[]) {
    out[key] = [...new Set([...a[key], ...b[key]])];
  }
  return out;
}

export const ENTITY_BY_ID = lazy(() => new Map(ENTITIES().map((e) => [e.id, e])));

/** Slug → entities, used to resolve loose references such as `"mri"`. */
export const ENTITIES_BY_SLUG = lazy(() => {
  const map = new Map<string, Entity[]>();
  for (const entity of ENTITIES()) {
    const list = map.get(entity.slug) ?? [];
    list.push(entity);
    map.set(entity.slug, list);
  }
  return map;
});

export function getEntitiesByType(type: EntityType): Entity[] {
  return ENTITIES().filter((e) => e.type === type);
}
