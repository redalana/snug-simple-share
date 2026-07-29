/**
 * The central content model.
 *
 * Every content type on the site is projected into a single `ContentItem`
 * shape so that relationships, queries and search can be computed uniformly.
 * Source records are NEVER mutated — adapters in `./adapters.ts` read the
 * existing single sources of truth (src/lib/products.ts, src/lib/blog.ts,
 * src/lib/brands-data.ts, src/lib/content/services.ts) and project them.
 */

import type { ArticleCategory, Manufacturer, TechnologyId } from "./taxonomy";

export type ContentType = "article" | "product" | "service" | "brand" | "faq" | "document";

export type ContentAuthor = {
  name: string;
  role?: string;
};

export type ContentItem = {
  /** Globally unique id: `${type}:${slug}`. */
  id: string;
  type: ContentType;
  /** Type-local slug (matches the source record's slug where one exists). */
  slug: string;
  /** Canonical in-app route for this item, when it has a page of its own. */
  url?: string;
  title: string;
  /** Short plain-text summary used for search snippets and related cards. */
  summary?: string;

  /** Exactly one primary category. Articles use ArticleCategory; other types
   *  use their own domain category (e.g. product category name). */
  primaryCategory?: ArticleCategory | string;

  /* --- Taxonomy facets (all optional, all normalised) --- */
  tags: string[];
  technologies: TechnologyId[];
  /** Equipment type in the source vocabulary (product category / system type). */
  equipmentTypes: string[];
  specialties: string[];
  manufacturers: Manufacturer[];
  /**
   * Knowledge-graph facets (optional so every existing consumer keeps working).
   * Populated by the adapters via `inferClinicalApplications` / `inferCountries`.
   */
  clinicalApplications?: string[];
  countries?: string[];

  /* --- Editorial metadata --- */
  featured?: boolean;
  readingTime?: string;
  /** BCP-47 language tag. The site is currently English-only. */
  language: string;
  author?: ContentAuthor;
  publishedDate?: string;
  lastUpdated?: string;
  image?: string;

  /* --- Explicit relations (optional, additive to the automatic engine) --- */
  relatedProducts?: string[];
  relatedServices?: string[];
  relatedArticles?: string[];

  /** Free-text blob used to build the search index. */
  searchText: string;

  /** Back-reference to the untouched source record. */
  source: unknown;
};

/** A content item scored by the relationship engine. */
export type ScoredContentItem = ContentItem & { relevance: number };
