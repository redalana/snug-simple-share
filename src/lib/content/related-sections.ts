/**
 * Presentation-agnostic projection of the Knowledge Graph into "related"
 * sections for any page.
 *
 * Nothing here re-implements the graph, the taxonomy or the ranking engine:
 * every section is a filtered view over `getRelatedEntities()` (which already
 * reuses `relevanceScore` / `RELATION_WEIGHTS` and the module-level graph
 * cache). Results are memoised per (refs, preset, limit) so a page renders
 * many sections from a single graph traversal per subject entity.
 */

import { memoizeKeyed } from "./cache";
import type { Entity, EntityType } from "./entities";
import { getRelatedEntities, type EntityRef, type ScoredEntity } from "./graph";
import { getEntity } from "./graph";
import type { ArticleCategory } from "./taxonomy";

export type RelatedSectionId =
  | "articles"
  | "buying-guides"
  | "technology-explained"
  | "clinical-resources"
  | "news"
  | "faqs"
  | "documents"
  | "services"
  | "products"
  | "technologies"
  | "brands"
  | "clinical-applications"
  | "specialties";

export type RelatedSection = {
  id: RelatedSectionId;
  title: string;
  description: string;
  /** Items to display, strongest-first (already limited). */
  items: ScoredEntity[];
  /** How many related items exist in total for this section. */
  total: number;
  /** Present when more items exist than are displayed. */
  viewAll?: { to: string; search?: Record<string, string> };
};

export type RelatedSectionsPreset =
  | "product"
  | "service"
  | "brand"
  | "technology"
  | "clinical"
  | "faq"
  | "document"
  | "article";

/* ------------------------------------------------------------------ */
/*  Section definitions                                                */
/* ------------------------------------------------------------------ */

type SectionSpec = {
  id: RelatedSectionId;
  title: string;
  description: string;
  type: EntityType;
  /** Extra filter for article sub-categories. */
  articleCategory?: ArticleCategory;
  viewAll?: { to: string; search?: Record<string, string> };
};

const SECTIONS: Record<RelatedSectionId, SectionSpec> = {
  articles: {
    id: "articles",
    title: "Related Articles",
    description: "Editorial and clinical reading connected to this topic.",
    type: "article",
    viewAll: { to: "/blog" },
  },
  "buying-guides": {
    id: "buying-guides",
    title: "Buying Guides",
    description: "Procurement, budgeting and selection guidance.",
    type: "article",
    articleCategory: "Buying Guides",
    viewAll: { to: "/blog", search: { category: "Buying Guides" } },
  },
  "technology-explained": {
    id: "technology-explained",
    title: "Technology Explained",
    description: "How the underlying technology works.",
    type: "article",
    articleCategory: "Technology Explained",
    viewAll: { to: "/blog", search: { category: "Technology Explained" } },
  },
  "clinical-resources": {
    id: "clinical-resources",
    title: "Clinical Resources",
    description: "Clinical protocols, workflows and programme material.",
    type: "article",
    articleCategory: "Clinical Resources",
    viewAll: { to: "/blog", search: { category: "Clinical Resources" } },
  },
  news: {
    id: "news",
    title: "Latest News",
    description: "Announcements and industry updates.",
    type: "article",
    articleCategory: "Industry News",
    viewAll: { to: "/blog", search: { category: "Industry News" } },
  },
  faqs: {
    id: "faqs",
    title: "Related FAQs",
    description: "Questions our engineers answer most often.",
    type: "faq",
    viewAll: { to: "/faqs" },
  },
  documents: {
    id: "documents",
    title: "Related Documents",
    description: "Brochures, datasheets and documentation.",
    type: "document",
  },
  services: {
    id: "services",
    title: "Related Services",
    description: "Engineering, installation and support services.",
    type: "service",
    viewAll: { to: "/services" },
  },
  products: {
    id: "products",
    title: "Related Products",
    description: "Systems connected to this topic.",
    type: "product",
    viewAll: { to: "/products" },
  },
  technologies: {
    id: "technologies",
    title: "Related Technologies",
    description: "Modalities and equipment technologies involved.",
    type: "technology",
    viewAll: { to: "/products" },
  },
  brands: {
    id: "brands",
    title: "Related Brands",
    description: "Manufacturers we represent in this area.",
    type: "brand",
    viewAll: { to: "/brands" },
  },
  "clinical-applications": {
    id: "clinical-applications",
    title: "Clinical Applications",
    description: "Clinical use cases served by this technology.",
    type: "clinical-application",
  },
  specialties: {
    id: "specialties",
    title: "Medical Specialties",
    description: "Departments and specialties this serves.",
    type: "specialty",
  },
};

const PRESETS: Record<RelatedSectionsPreset, RelatedSectionId[]> = {
  product: [
    "articles",
    "buying-guides",
    "technology-explained",
    "clinical-resources",
    "faqs",
    "documents",
    "services",
    "products",
    "technologies",
    "brands",
  ],
  service: ["products", "articles", "technologies", "faqs", "brands", "documents"],
  brand: [
    "products",
    "articles",
    "buying-guides",
    "technologies",
    "services",
    "faqs",
    "news",
  ],
  technology: [
    "products",
    "articles",
    "services",
    "faqs",
    "clinical-applications",
    "specialties",
    "brands",
  ],
  clinical: ["products", "articles", "technologies", "faqs", "services", "brands"],
  faq: ["products", "articles", "technologies", "services"],
  document: ["products", "articles", "services", "technologies"],
  article: [
    "articles",
    "products",
    "services",
    "faqs",
    "documents",
    "technologies",
    "brands",
  ],
};

/* ------------------------------------------------------------------ */
/*  Aggregation                                                        */
/* ------------------------------------------------------------------ */

function normaliseRefs(refs: EntityRef | readonly EntityRef[]): Entity[] {
  const list = Array.isArray(refs) ? refs : [refs];
  const resolved: Entity[] = [];
  const seen = new Set<string>();
  for (const ref of list as readonly EntityRef[]) {
    const entity = getEntity(ref);
    if (!entity || seen.has(entity.id)) continue;
    seen.add(entity.id);
    resolved.push(entity);
  }
  return resolved;
}

/**
 * Related entities for one or more subjects, merged by strongest score.
 * One traversal per subject; the graph itself is built once and cached.
 */
function aggregateRelated(subjects: readonly Entity[]): ScoredEntity[] {
  const own = new Set(subjects.map((s) => s.id));
  const merged = new Map<string, ScoredEntity>();
  for (const subject of subjects) {
    for (const related of getRelatedEntities(subject)) {
      if (own.has(related.id)) continue;
      const existing = merged.get(related.id);
      if (!existing || existing.relevance < related.relevance) merged.set(related.id, related);
    }
  }
  return [...merged.values()].sort(
    (a, b) => b.relevance - a.relevance || a.label.localeCompare(b.label),
  );
}

function articleCategoryOf(entity: ScoredEntity): string | undefined {
  return entity.contentItem?.primaryCategory;
}

const build = memoizeKeyed(
  (key: string, refs: readonly EntityRef[], preset: RelatedSectionsPreset, limit: number) => {
    void key;
    const subjects = normaliseRefs(refs);
    if (!subjects.length) return [] as RelatedSection[];

    const related = aggregateRelated(subjects);
    const sections: RelatedSection[] = [];

    for (const id of PRESETS[preset]) {
      const spec = SECTIONS[id];
      let pool = related.filter((entity) => entity.type === spec.type);

      if (spec.type === "article") {
        pool = spec.articleCategory
          ? pool.filter((entity) => articleCategoryOf(entity) === spec.articleCategory)
          : // The generic "Related Articles" section excludes the categories that
            // get a dedicated section of their own in this preset.
            pool.filter((entity) => {
              const category = articleCategoryOf(entity);
              return !PRESETS[preset].some(
                (other) => other !== id && SECTIONS[other].articleCategory === category,
              );
            });
      }

      if (!pool.length) continue;

      const items = pool.slice(0, limit);
      sections.push({
        id: spec.id,
        title: spec.title,
        description: spec.description,
        items,
        total: pool.length,
        viewAll: pool.length > items.length ? spec.viewAll : undefined,
      });
    }

    return sections;
  },
  (key) => key,
);

/**
 * Graph-driven "related" sections for any page.
 *
 * @param refs   One or more entity references (`"product:mri-1"`, `"mri"`, an
 *               `Entity`, …) — the page's subject(s).
 * @param preset Which sections to emit, in which order.
 */
export function getRelatedSections(
  refs: EntityRef | readonly EntityRef[],
  preset: RelatedSectionsPreset,
  options: { limit?: number } = {},
): RelatedSection[] {
  const list = (Array.isArray(refs) ? refs : [refs]) as readonly EntityRef[];
  const limit = options.limit ?? 6;
  const key = `${preset}|${limit}|${list
    .map((ref) => (typeof ref === "string" ? ref : ref.id))
    .join(",")}`;
  return build(key, list, preset, limit);
}
