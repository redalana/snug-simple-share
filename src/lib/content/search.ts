/**
 * Search index preparation.
 *
 * No UI is wired to this yet — it exists so the existing search fields
 * (header search, portfolio search, FAQ search) can later query one index that
 * understands category, technology, manufacturer, specialty and tags instead
 * of each surface re-implementing substring matching over its own array.
 */

import { CONTENT_ITEMS } from "./adapters";
import type { Manufacturer, TechnologyId } from "./taxonomy";
import type { ContentItem, ContentType, ScoredContentItem } from "./types";

export type SearchDocument = {
  id: string;
  type: ContentType;
  title: string;
  url?: string;
  primaryCategory?: string;
  technologies: TechnologyId[];
  manufacturers: Manufacturer[];
  specialties: string[];
  tags: string[];
  /** Pre-lowercased haystack: title + summary + facets + source keywords. */
  text: string;
};

export type SearchFilters = {
  type?: ContentType | ContentType[];
  technology?: TechnologyId;
  manufacturer?: Manufacturer;
  specialty?: string;
  category?: string;
  tag?: string;
};

function toDocument(item: ContentItem): SearchDocument {
  return {
    id: item.id,
    type: item.type,
    title: item.title,
    url: item.url,
    primaryCategory: item.primaryCategory,
    technologies: item.technologies,
    manufacturers: item.manufacturers,
    specialties: item.specialties,
    tags: item.tags,
    text: [
      item.title,
      item.summary ?? "",
      item.primaryCategory ?? "",
      item.technologies.join(" "),
      item.manufacturers.join(" "),
      item.specialties.join(" "),
      item.equipmentTypes.join(" "),
      item.tags.join(" "),
      item.searchText,
    ]
      .join(" ")
      .toLowerCase(),
  };
}

/** The full search index, built once at module load from the content registry. */
export const SEARCH_INDEX: SearchDocument[] = CONTENT_ITEMS.map(toDocument);

const ITEM_BY_ID = new Map(CONTENT_ITEMS.map((i) => [i.id, i]));

function matchesFilters(doc: SearchDocument, f: SearchFilters): boolean {
  if (f.type) {
    const types = Array.isArray(f.type) ? f.type : [f.type];
    if (!types.includes(doc.type)) return false;
  }
  if (f.technology && !doc.technologies.includes(f.technology)) return false;
  if (f.manufacturer && !doc.manufacturers.includes(f.manufacturer)) return false;
  if (f.specialty && !doc.specialties.some((s) => s.toLowerCase() === f.specialty!.toLowerCase()))
    return false;
  if (f.category && doc.primaryCategory?.toLowerCase() !== f.category.toLowerCase()) return false;
  if (f.tag && !doc.tags.includes(f.tag.toLowerCase())) return false;
  return true;
}

/**
 * Token-AND search: every whitespace-separated token must appear somewhere in
 * the document. Title hits score higher than body hits.
 */
export function searchContent(
  query: string,
  filters: SearchFilters = {},
  limit = 20,
): ScoredContentItem[] {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results: ScoredContentItem[] = [];

  for (const doc of SEARCH_INDEX) {
    if (!matchesFilters(doc, filters)) continue;

    let relevance = 0;
    if (tokens.length) {
      const title = doc.title.toLowerCase();
      for (const token of tokens) {
        if (!doc.text.includes(token)) {
          relevance = -1;
          break;
        }
        relevance += title.includes(token) ? 5 : 1;
      }
      if (relevance < 0) continue;
    } else {
      relevance = 1; // filter-only query
    }

    const item = ITEM_BY_ID.get(doc.id);
    if (item) results.push({ ...item, relevance });
  }

  results.sort((a, b) => b.relevance - a.relevance || a.title.localeCompare(b.title));
  return results.slice(0, limit);
}

/** Facet counts for the current result set — ready for filter UIs. */
export function searchFacets(items: readonly ContentItem[]) {
  const count = (values: string[], map: Map<string, number>) => {
    for (const v of values) map.set(v, (map.get(v) ?? 0) + 1);
  };
  const technologies = new Map<string, number>();
  const manufacturers = new Map<string, number>();
  const specialties = new Map<string, number>();
  const categories = new Map<string, number>();

  for (const item of items) {
    count(item.technologies, technologies);
    count(item.manufacturers, manufacturers);
    count(item.specialties, specialties);
    if (item.primaryCategory) count([item.primaryCategory], categories);
  }

  return { technologies, manufacturers, specialties, categories };
}
