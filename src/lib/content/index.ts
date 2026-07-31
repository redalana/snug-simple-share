/**
 * Public API of the content architecture layer.
 *
 * Import from `@/lib/content` everywhere. Nothing here renders UI; it is a
 * pure query layer over the existing single sources of truth.
 */

export * from "./types";
export * from "./taxonomy";
export * from "./services";
export * from "./relations";
export * from "./search";
/* Knowledge graph layer (additive — nothing above changed behaviour). */
export * from "./cache";
export * from "./specialties";
export * from "./clinical";
export * from "./geography";
export * from "./entities";
export * from "./graph";
export * from "./related-sections";
export {
  CONTENT_ITEMS,
  ARTICLE_ITEMS,
  PRODUCT_ITEMS,
  SERVICE_ITEMS,
  BRAND_ITEMS,
  FAQ_ITEMS,
  DOCUMENT_ITEMS,
  getContentItem,
} from "./adapters";

import {
  ARTICLE_ITEMS,
  BRAND_ITEMS,
  CONTENT_ITEMS,
  DOCUMENT_ITEMS,
  FAQ_ITEMS,
  PRODUCT_ITEMS,
  SERVICE_ITEMS,
} from "./adapters";
import { rankRelated } from "./relations";
import type { ArticleCategory, Manufacturer, TechnologyId } from "./taxonomy";
import type { ContentItem, ScoredContentItem } from "./types";

/* ------------------------------------------------------------------ */
/*  Lookup                                                             */
/* ------------------------------------------------------------------ */

export function getArticleItem(slug: string): ContentItem | undefined {
  return ARTICLE_ITEMS.find((a) => a.slug === slug);
}

export function getProductItem(slug: string): ContentItem | undefined {
  return PRODUCT_ITEMS.find((p) => p.slug === slug);
}

export function getServiceItem(slug: string): ContentItem | undefined {
  return SERVICE_ITEMS.find((s) => s.slug === slug);
}

export function getBrandItem(slug: string): ContentItem | undefined {
  return BRAND_ITEMS.find((b) => b.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  Global query helpers                                               */
/* ------------------------------------------------------------------ */

export function getArticlesByCategory(category: ArticleCategory): ContentItem[] {
  return ARTICLE_ITEMS.filter((a) => a.primaryCategory === category);
}

export function getArticlesByTechnology(technology: TechnologyId): ContentItem[] {
  return ARTICLE_ITEMS.filter((a) => a.technologies.includes(technology));
}

export function getArticlesByManufacturer(manufacturer: Manufacturer): ContentItem[] {
  return ARTICLE_ITEMS.filter((a) => a.manufacturers.includes(manufacturer));
}

export function getArticlesByTag(tag: string): ContentItem[] {
  const t = tag.toLowerCase();
  return ARTICLE_ITEMS.filter((a) => a.tags.includes(t));
}

export function getProductsByTechnology(technology: TechnologyId): ContentItem[] {
  return PRODUCT_ITEMS.filter((p) => p.technologies.includes(technology));
}

export function getProductsByManufacturer(manufacturer: Manufacturer): ContentItem[] {
  return PRODUCT_ITEMS.filter((p) => p.manufacturers.includes(manufacturer));
}

export function getProductsBySpecialty(specialty: string): ContentItem[] {
  const s = specialty.toLowerCase();
  return PRODUCT_ITEMS.filter((p) => p.specialties.some((v) => v.toLowerCase() === s));
}

export function getServicesByTechnology(technology: TechnologyId): ContentItem[] {
  return SERVICE_ITEMS.filter((s) => s.technologies.includes(technology));
}

export function getFaqsByTechnology(technology: TechnologyId): ContentItem[] {
  return FAQ_ITEMS.filter((f) => f.technologies.includes(technology));
}

export function getDocumentsByTechnology(technology: TechnologyId): ContentItem[] {
  return DOCUMENT_ITEMS.filter((d) => d.technologies.includes(technology));
}

export function getBrandsByTechnology(technology: TechnologyId): ContentItem[] {
  return BRAND_ITEMS.filter((b) => b.technologies.includes(technology));
}

export function getFeaturedArticles(limit?: number): ContentItem[] {
  const items = ARTICLE_ITEMS.filter((a) => a.featured);
  return typeof limit === "number" ? items.slice(0, limit) : items;
}

/**
 * "Popular" is derived, not tracked: an article's reach is how many other
 * content items it connects to across the graph, with featured articles
 * boosted. No analytics dependency, no invented metrics.
 */
export function getPopularArticles(limit = 6): ScoredContentItem[] {
  return ARTICLE_ITEMS.map((article) => ({
    ...article,
    relevance:
      rankRelated(article, CONTENT_ITEMS, { minScore: 1 }).length + (article.featured ? 10 : 0),
  }))
    .sort((a, b) => b.relevance - a.relevance || a.title.localeCompare(b.title))
    .slice(0, limit);
}

/* ------------------------------------------------------------------ */
/*  Relationship helpers — accept an item or any `${type}:${slug}` id  */
/* ------------------------------------------------------------------ */

function resolve(subject: ContentItem | string): ContentItem | undefined {
  if (typeof subject !== "string") return subject;
  return CONTENT_ITEMS.find((i) => i.id === subject || i.slug === subject);
}

export function getRelatedArticles(
  subject: ContentItem | string,
  limit = 4,
): ScoredContentItem[] {
  const item = resolve(subject);
  return item ? rankRelated(item, ARTICLE_ITEMS, { limit }) : [];
}

export function getRelatedProductItems(
  subject: ContentItem | string,
  limit = 4,
): ScoredContentItem[] {
  const item = resolve(subject);
  return item ? rankRelated(item, PRODUCT_ITEMS, { limit }) : [];
}

export function getRelatedServices(
  subject: ContentItem | string,
  limit = 4,
): ScoredContentItem[] {
  const item = resolve(subject);
  return item ? rankRelated(item, SERVICE_ITEMS, { limit }) : [];
}

export function getRelatedFaqs(subject: ContentItem | string, limit = 5): ScoredContentItem[] {
  const item = resolve(subject);
  return item ? rankRelated(item, FAQ_ITEMS, { limit }) : [];
}

export function getRelatedDocuments(subject: ContentItem | string, limit = 5): ScoredContentItem[] {
  const item = resolve(subject);
  return item ? rankRelated(item, DOCUMENT_ITEMS, { limit }) : [];
}

/** Everything related to an item, grouped by content type. */
export function getRelatedContent(subject: ContentItem | string, limitPerType = 4) {
  const item = resolve(subject);
  if (!item) {
    return { articles: [], products: [], services: [], faqs: [], documents: [], brands: [] };
  }
  return {
    articles: rankRelated(item, ARTICLE_ITEMS, { limit: limitPerType }),
    products: rankRelated(item, PRODUCT_ITEMS, { limit: limitPerType }),
    services: rankRelated(item, SERVICE_ITEMS, { limit: limitPerType }),
    faqs: rankRelated(item, FAQ_ITEMS, { limit: limitPerType }),
    documents: rankRelated(item, DOCUMENT_ITEMS, { limit: limitPerType }),
    brands: rankRelated(item, BRAND_ITEMS, { limit: limitPerType }),
  };
}
export * from "./knowledge-center";
export * from "./knowledge-hub";
/* Technology / Manufacturer / Product / Service hub layer. */
export * from "./hubs";
/* Persistent Article Registry — production source of truth (§52). */
export * from "./registry";

