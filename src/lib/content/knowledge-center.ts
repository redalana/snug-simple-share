/**
 * Knowledge Center query layer.
 *
 * A thin, memoised projection of the EXISTING knowledge graph for the
 * /blog surface. It introduces no new index, no new content and no new
 * relationship logic — it composes `searchContent` (existing index),
 * `expandQuery` (existing graph expansion), `getPopularArticles` (existing
 * derived reach metric) and the existing taxonomy vocabularies.
 */

import { ARTICLE_ITEMS } from "./adapters";
import { memoizeKeyed } from "./cache";
import { expandQuery } from "./graph";
import { searchContent } from "./search";
// `getPopularArticles` lives in the public API module; imported lazily at call
// time so the two modules can reference each other safely.
import { getPopularArticles } from "./index";
import { SPECIALTIES } from "./specialties";
import {
  ALL_MANUFACTURERS,
  ARTICLE_CATEGORIES,
  TECHNOLOGIES,
  type ArticleCategory,
  type Manufacturer,
  type TechnologyId,
} from "./taxonomy";
import type { ContentItem } from "./types";

export const KNOWLEDGE_SORTS = ["Latest", "Oldest", "Most Popular"] as const;
export type KnowledgeSort = (typeof KNOWLEDGE_SORTS)[number];

export const ALL_CATEGORY_ID = "all";

export type KnowledgeFilters = {
  /** Article category slug (`buying-guides`) or `all`. */
  category?: string;
  technology?: string;
  manufacturer?: string;
  specialty?: string;
  tag?: string;
  q?: string;
  sort?: KnowledgeSort;
};

export type FacetOption = { id: string; label: string; count: number };

/* ------------------------------------------------------------------ */
/*  Slug helpers — every option id is derived, never hand-written      */
/* ------------------------------------------------------------------ */

export function slugifyFacet(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const CATEGORY_BY_SLUG = new Map<string, ArticleCategory>(
  ARTICLE_CATEGORIES.map((c) => [slugifyFacet(c), c]),
);
const MANUFACTURER_BY_SLUG = new Map<string, Manufacturer>(
  ALL_MANUFACTURERS.map((m) => [slugifyFacet(m), m]),
);

export function categoryFromSlug(slug?: string): ArticleCategory | undefined {
  return slug ? CATEGORY_BY_SLUG.get(slug.toLowerCase()) : undefined;
}

export function categorySlug(category: ArticleCategory): string {
  return slugifyFacet(category);
}

export function technologyFromSlug(slug?: string): TechnologyId | undefined {
  if (!slug) return undefined;
  const s = slug.toLowerCase();
  return TECHNOLOGIES.find((t) => t.id === s)?.id;
}

export function manufacturerFromSlug(slug?: string): Manufacturer | undefined {
  return slug ? MANUFACTURER_BY_SLUG.get(slug.toLowerCase()) : undefined;
}

export function specialtyFromSlug(slug?: string): string | undefined {
  if (!slug) return undefined;
  const s = slug.toLowerCase();
  return SPECIALTIES.find((sp) => sp.id === s || slugifyFacet(sp.label) === s)?.label;
}

export function technologyLabel(id: TechnologyId): string {
  return TECHNOLOGIES.find((t) => t.id === id)?.label ?? id;
}

/* ------------------------------------------------------------------ */
/*  Search — reuses the existing index + graph expansion               */
/* ------------------------------------------------------------------ */

/**
 * Relationship-aware article search: direct index hits first, then articles
 * the graph connects to the entities named by the query (typing "Stroke"
 * surfaces MRI / CT / neurology articles).
 */
function searchArticleIds(query: string): Map<string, number> {
  const scores = new Map<string, number>();
  for (const hit of searchContent(query, { type: "article" }, ARTICLE_ITEMS.length)) {
    scores.set(hit.id, hit.relevance + 100);
  }
  for (const entity of expandQuery(query)) {
    if (entity.type !== "article") continue;
    if (!scores.has(entity.id)) scores.set(entity.id, entity.relevance);
  }
  return scores;
}

/* ------------------------------------------------------------------ */
/*  Filtering + sorting                                                */
/* ------------------------------------------------------------------ */

function matchesFacets(item: ContentItem, f: KnowledgeFilters): boolean {
  const category = categoryFromSlug(f.category);
  if (category && item.primaryCategory !== category) return false;

  const technology = technologyFromSlug(f.technology);
  if (technology && !item.technologies.includes(technology)) return false;

  const manufacturer = manufacturerFromSlug(f.manufacturer);
  if (manufacturer && !item.manufacturers.includes(manufacturer)) return false;

  const specialty = specialtyFromSlug(f.specialty);
  if (
    specialty &&
    !item.specialties.some((s) => s.toLowerCase() === specialty.toLowerCase()) &&
    !item.tags.includes(specialty.toLowerCase())
  ) {
    return false;
  }

  if (f.tag && !item.tags.includes(f.tag.toLowerCase())) return false;
  return true;
}

const POPULARITY = () => {
  const map = new Map<string, number>();
  getPopularArticles(ARTICLE_ITEMS.length).forEach((a: ContentItem, i: number) =>
    map.set(a.id, -i),
  );
  return map;
};
let popularityCache: Map<string, number> | undefined;
function popularity(id: string): number {
  popularityCache ??= POPULARITY();
  return popularityCache.get(id) ?? -Infinity;
}

function timestamp(item: ContentItem): number {
  const value = item.lastUpdated ?? item.publishedDate;
  const parsed = value ? Date.parse(value) : NaN;
  return Number.isNaN(parsed) ? 0 : parsed;
}

function sortArticles(
  items: ContentItem[],
  sort: KnowledgeSort,
  relevance?: Map<string, number>,
): ContentItem[] {
  const sorted = [...items];
  sorted.sort((a, b) => {
    if (sort === "Most Popular") return popularity(b.id) - popularity(a.id);
    if (sort === "Oldest") return timestamp(a) - timestamp(b);
    if (relevance) {
      const diff = (relevance.get(b.id) ?? 0) - (relevance.get(a.id) ?? 0);
      if (diff) return diff;
    }
    return timestamp(b) - timestamp(a);
  });
  return sorted;
}

const filterKey = (f: KnowledgeFilters) =>
  [f.category, f.technology, f.manufacturer, f.specialty, f.tag, f.q?.trim().toLowerCase(), f.sort]
    .map((v) => v ?? "")
    .join("|");

/** The filtered, sorted article list for the current filter state. */
export const queryArticles = memoizeKeyed(
  (filters: KnowledgeFilters): ContentItem[] => {
    const query = filters.q?.trim();
    const relevance = query ? searchArticleIds(query) : undefined;
    const base = relevance
      ? ARTICLE_ITEMS.filter((a) => relevance.has(a.id))
      : (ARTICLE_ITEMS as ContentItem[]);
    const filtered = base.filter((item) => matchesFacets(item, filters));
    return sortArticles(filtered, filters.sort ?? "Latest", relevance);
  },
  filterKey,
);

/* ------------------------------------------------------------------ */
/*  Counters + facet options — always derived from the graph           */
/* ------------------------------------------------------------------ */

/**
 * Category tabs with live counts. Counts respect every OTHER active filter,
 * so the numbers always describe what selecting the tab would show.
 */
export const getCategoryTabs = memoizeKeyed(
  (filters: KnowledgeFilters): FacetOption[] => {
    const withoutCategory = { ...filters, category: undefined };
    const pool = queryArticles(withoutCategory);
    const counts = new Map<string, number>();
    for (const item of pool) {
      if (!item.primaryCategory) continue;
      counts.set(item.primaryCategory, (counts.get(item.primaryCategory) ?? 0) + 1);
    }
    return [
      { id: ALL_CATEGORY_ID, label: "All", count: pool.length },
      ...ARTICLE_CATEGORIES.map((category) => ({
        id: categorySlug(category),
        label: category,
        count: counts.get(category) ?? 0,
      })),
    ];
  },
  (f) => filterKey({ ...f, category: undefined }),
);

function facetOptions(
  filters: KnowledgeFilters,
  axis: "technology" | "manufacturer" | "specialty",
): FacetOption[] {
  const pool = queryArticles({ ...filters, [axis]: undefined });
  const counts = new Map<string, number>();
  const labels = new Map<string, string>();
  for (const item of pool) {
    const values =
      axis === "technology"
        ? item.technologies.map((t) => [t as string, technologyLabel(t)] as const)
        : axis === "manufacturer"
          ? item.manufacturers.map((m) => [slugifyFacet(m), m] as const)
          : item.specialties.map((s) => [slugifyFacet(s), s] as const);
    for (const [id, label] of values) {
      counts.set(id, (counts.get(id) ?? 0) + 1);
      labels.set(id, label);
    }
  }
  return [...counts.entries()]
    .map(([id, count]) => ({ id, label: labels.get(id) ?? id, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

/** Technology / manufacturer / specialty options, each with live counts. */
export const getFacetOptions = memoizeKeyed(
  (filters: KnowledgeFilters) => ({
    technologies: facetOptions(filters, "technology"),
    manufacturers: facetOptions(filters, "manufacturer"),
    specialties: facetOptions(filters, "specialty"),
  }),
  filterKey,
);

/** Heading + count for the dynamic page header. */
export function getResultsHeading(filters: KnowledgeFilters, total: number) {
  const category = categoryFromSlug(filters.category);
  return { title: category ?? "All Articles", count: total };
}
