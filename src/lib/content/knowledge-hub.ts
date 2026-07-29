/**
 * Knowledge Hub projection.
 *
 * A presentation-agnostic view of the EXISTING Knowledge Graph, grouped into
 * the tabs shown on every product-category page. Nothing here re-implements
 * the graph, the taxonomy, the ranking engine or the article registry:
 *
 *   subject resolution → `technologyForCategorySlug()` / `equipmentCategoryId()`
 *   relationships      → `getRelatedEntities()` (graph cache + `relevanceScore`)
 *   reach ranking      → `getPopularArticles()` (existing derived metric)
 *   vocabularies       → `ARTICLE_CATEGORIES` / `TECHNOLOGIES`
 *
 * Articles are never duplicated: a tab holds references to the canonical
 * /blog article entities, nothing more. Any new category (or technology) that
 * enters the taxonomy automatically gets a fully populated hub with no new UI
 * or query code.
 */

import { memoizeKeyed } from "./cache";
import { equipmentCategoryId, type Entity } from "./entities";
import { getEntity, getRelatedEntities, type EntityRef, type ScoredEntity } from "./graph";
import { getPopularArticles } from "./index";
import { technologyForCategorySlug, type ArticleCategory } from "./taxonomy";

export type HubTabId =
  | "articles"
  | "buying-guides"
  | "comparisons"
  | "technology-explained"
  | "clinical-applications"
  | "installation-maintenance"
  | "downloads"
  | "faqs"
  | "services"
  | "brands";

export type HubGroup = {
  id: string;
  title: string;
  items: ScoredEntity[];
};

export type HubTab = {
  id: HubTabId;
  label: string;
  description: string;
  groups: HubGroup[];
  /** Total number of distinct items across the tab's groups. */
  total: number;
  viewAll?: { to: string; search?: Record<string, string> };
  /** Graph-derived cross-sell block rendered at the end of the tab. */
  recommendations: ScoredEntity[];
};

export type KnowledgeHub = {
  subject?: Entity;
  /** e.g. "MRI Knowledge Hub" — derived from the subject entity label. */
  title: string;
  tabs: HubTab[];
};

/* ------------------------------------------------------------------ */
/*  Subject resolution                                                 */
/* ------------------------------------------------------------------ */

/**
 * Resolve the graph entities a category page is "about".
 * Primary axis: the technology that owns the category route slug.
 * Secondary axis: the equipment categories the page lists.
 */
export function resolveHubSubjects(
  categorySlug: string,
  productCategories: readonly string[] = [],
): Entity[] {
  const refs: EntityRef[] = [];
  const technology = technologyForCategorySlug(categorySlug);
  if (technology) refs.push(`technology:${technology}`);
  for (const category of productCategories) {
    refs.push(`equipment-category:${equipmentCategoryId(category)}`);
  }
  if (!technology) refs.push(categorySlug);

  const seen = new Set<string>();
  const subjects: Entity[] = [];
  for (const ref of refs) {
    const entity = getEntity(ref);
    if (!entity || seen.has(entity.id)) continue;
    seen.add(entity.id);
    subjects.push(entity);
  }
  return subjects;
}

/* ------------------------------------------------------------------ */
/*  Aggregation                                                        */
/* ------------------------------------------------------------------ */

function aggregate(subjects: readonly Entity[]): ScoredEntity[] {
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

const categoryOf = (entity: ScoredEntity) => entity.contentItem?.primaryCategory;

function byCategory(pool: readonly ScoredEntity[], category: ArticleCategory): ScoredEntity[] {
  return pool.filter((entity) => entity.type === "article" && categoryOf(entity) === category);
}

function publishedTime(entity: ScoredEntity): number {
  const date = entity.contentItem?.publishedDate ?? entity.contentItem?.lastUpdated;
  const time = date ? Date.parse(date) : NaN;
  return Number.isNaN(time) ? 0 : time;
}

/** Derived reach ranking, reusing the existing `getPopularArticles` metric. */
function reachRank(): Map<string, number> {
  const map = new Map<string, number>();
  const popular = getPopularArticles(Number.MAX_SAFE_INTEGER);
  popular.forEach((item, index) => map.set(item.id, popular.length - index));
  return map;
}

function dedupe(groups: HubGroup[]): number {
  const ids = new Set<string>();
  for (const group of groups) for (const item of group.items) ids.add(item.id);
  return ids.size;
}

function nonEmpty(groups: HubGroup[]): HubGroup[] {
  return groups.filter((g) => g.items.length > 0);
}

/* ------------------------------------------------------------------ */
/*  Tab construction                                                   */
/* ------------------------------------------------------------------ */

const TAB_META: Record<HubTabId, { label: string; description: string; viewAll?: HubTab["viewAll"] }> = {
  articles: {
    label: "Articles",
    description: "Clinical and editorial reading, ranked by the knowledge graph.",
    viewAll: { to: "/blog" },
  },
  "buying-guides": {
    label: "Buying Guides",
    description: "Procurement, budgeting, planning and selection guidance.",
    viewAll: { to: "/blog", search: { category: "buying-guides" } },
  },
  comparisons: {
    label: "Comparisons",
    description: "Side-by-side technology and manufacturer comparisons.",
    viewAll: { to: "/blog", search: { category: "product-comparisons" } },
  },
  "technology-explained": {
    label: "Technology Explained",
    description: "How the technology works, in plain clinical language.",
    viewAll: { to: "/blog", search: { category: "technology-explained" } },
  },
  "clinical-applications": {
    label: "Clinical Applications",
    description: "Clinical use cases and specialties served by this technology.",
  },
  "installation-maintenance": {
    label: "Installation & Maintenance",
    description: "Room planning, installation, preventive maintenance and QA.",
    viewAll: { to: "/blog", search: { category: "installation-and-maintenance" } },
  },
  downloads: {
    label: "Downloads",
    description: "Brochures, datasheets, technical and certification documents.",
  },
  faqs: {
    label: "FAQs",
    description: "The questions our engineers answer most often.",
    viewAll: { to: "/faqs" },
  },
  services: {
    label: "Services",
    description: "Installation, training, maintenance and turnkey support.",
    viewAll: { to: "/services" },
  },
  brands: {
    label: "Brands",
    description: "Manufacturers we supply and service in this modality.",
    viewAll: { to: "/brands" },
  },
};

const TAB_ORDER: HubTabId[] = [
  "articles",
  "buying-guides",
  "comparisons",
  "technology-explained",
  "clinical-applications",
  "installation-maintenance",
  "downloads",
  "faqs",
  "services",
  "brands",
];

function buildGroups(id: HubTabId, pool: readonly ScoredEntity[], limit: number): HubGroup[] {
  const articles = pool.filter((e) => e.type === "article");
  const rank = id === "articles" ? reachRank() : undefined;

  switch (id) {
    case "articles": {
      const latest = [...articles].sort(
        (a, b) => publishedTime(b) - publishedTime(a) || a.label.localeCompare(b.label),
      );
      const reach = [...articles].sort(
        (a, b) =>
          (rank!.get(b.id) ?? 0) - (rank!.get(a.id) ?? 0) || b.relevance - a.relevance,
      );
      const trending = [...articles].sort(
        (a, b) =>
          (rank!.get(b.id) ?? 0) + b.relevance - ((rank!.get(a.id) ?? 0) + a.relevance) ||
          publishedTime(b) - publishedTime(a),
      );
      return nonEmpty([
        { id: "latest", title: "Latest Articles", items: latest.slice(0, limit) },
        { id: "trending", title: "Trending Articles", items: trending.slice(0, limit) },
        {
          id: "editors-picks",
          title: "Editor's Picks",
          items: articles.filter((a) => a.contentItem?.featured).slice(0, limit),
        },
        { id: "most-read", title: "Most Read", items: reach.slice(0, limit) },
      ]);
    }
    case "buying-guides":
      return nonEmpty([
        { id: "guides", title: "Buying Guides", items: byCategory(articles, "Buying Guides").slice(0, limit * 2) },
      ]);
    case "comparisons":
      return nonEmpty([
        {
          id: "comparisons",
          title: "Comparisons",
          items: byCategory(articles, "Product Comparisons").slice(0, limit * 2),
        },
      ]);
    case "technology-explained":
      return nonEmpty([
        {
          id: "explained",
          title: "Technology Explained",
          items: byCategory(articles, "Technology Explained").slice(0, limit * 2),
        },
      ]);
    case "clinical-applications":
      return nonEmpty([
        {
          id: "applications",
          title: "Clinical Applications",
          items: pool.filter((e) => e.type === "clinical-application").slice(0, limit * 2),
        },
        {
          id: "specialties",
          title: "Medical Specialties",
          items: pool.filter((e) => e.type === "specialty").slice(0, limit * 2),
        },
        {
          id: "clinical-reading",
          title: "Clinical Resources",
          items: byCategory(articles, "Clinical Resources").slice(0, limit),
        },
      ]);
    case "installation-maintenance":
      return nonEmpty([
        {
          id: "guides",
          title: "Planning, Installation & Maintenance",
          items: byCategory(articles, "Installation & Maintenance").slice(0, limit * 2),
        },
        {
          id: "support-services",
          title: "Support Services",
          items: pool.filter((e) => e.type === "service").slice(0, limit),
        },
      ]);
    case "downloads":
      return nonEmpty([
        {
          id: "documents",
          title: "Documents & Brochures",
          items: pool.filter((e) => e.type === "document").slice(0, limit * 2),
        },
        {
          id: "documentation",
          title: "Documentation Center",
          items: byCategory(articles, "Documentation Center").slice(0, limit),
        },
      ]);
    case "faqs":
      return nonEmpty([
        { id: "faqs", title: "Frequently Asked Questions", items: pool.filter((e) => e.type === "faq").slice(0, limit * 2) },
        { id: "faq-articles", title: "In-depth Answers", items: byCategory(articles, "FAQ").slice(0, limit) },
      ]);
    case "services":
      return nonEmpty([
        { id: "services", title: "Services", items: pool.filter((e) => e.type === "service").slice(0, limit * 2) },
      ]);
    case "brands":
      return nonEmpty([
        { id: "brands", title: "Brands", items: pool.filter((e) => e.type === "brand").slice(0, limit * 2) },
      ]);
  }
}

const build = memoizeKeyed(
  (key: string, categorySlug: string, productCategories: readonly string[], limit: number) => {
    void key;
    const subjects = resolveHubSubjects(categorySlug, productCategories);
    if (!subjects.length) return { title: "Knowledge Hub", tabs: [] } as KnowledgeHub;

    const pool = aggregate(subjects);
    const subject = subjects[0];
    const tabs: HubTab[] = [];

    for (const id of TAB_ORDER) {
      const groups = buildGroups(id, pool, limit);
      if (!groups.length) continue;
      const shown = new Set(groups.flatMap((g) => g.items.map((i) => i.id)));
      tabs.push({
        id,
        ...TAB_META[id],
        groups,
        total: dedupe(groups),
        recommendations: pool.filter((entity) => !shown.has(entity.id)).slice(0, limit),
      });
    }

    return { subject, title: `${subject.label} Knowledge Hub`, tabs };
  },
  (key) => key,
);

/**
 * The complete Knowledge Hub for a product-category page.
 * Memoised per (slug, categories, limit); the graph itself is built once.
 */
export function getKnowledgeHub(
  categorySlug: string,
  productCategories: readonly string[] = [],
  options: { limit?: number } = {},
): KnowledgeHub {
  const limit = options.limit ?? 6;
  return build(
    `${categorySlug}|${[...productCategories].sort().join(",")}|${limit}`,
    categorySlug,
    productCategories,
    limit,
  );
}
