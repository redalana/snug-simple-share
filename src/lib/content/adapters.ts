/**
 * Adapters — project each existing source of truth into the central
 * `ContentItem` model. Source arrays are read, never mutated, and no new
 * editorial content is introduced: every field is derived from data that
 * already exists in the project.
 */

import { ARTICLES, type Article } from "@/lib/blog";
import { BRANDS_LIST, type BrandEntry } from "@/lib/brands-data";
import { CATEGORY_CONTENT, CATEGORY_NAME_TO_SLUG } from "@/lib/category-content";
import { PRODUCTS, productSlug, type Product } from "@/lib/products";
import { SERVICES, type ServiceEntry } from "./services";
import {
  inferArticleCategory,
  inferManufacturers,
  inferTechnologies,
  normaliseManufacturer,
  normaliseTags,
  technologyForCategorySlug,
  technologyForProductCategory,
  type TechnologyId,
} from "./taxonomy";
import type { ContentItem } from "./types";

const LANGUAGE = "en";

function joinSearch(...parts: (string | string[] | undefined)[]): string {
  return parts
    .flatMap((p) => (Array.isArray(p) ? p : [p]))
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

/* ------------------------------- Products ------------------------------- */

function fromProduct(product: Product): ContentItem {
  const slug = productSlug(product);
  const manufacturer = normaliseManufacturer(product.brand);
  const categoryTech = technologyForProductCategory(product.category);
  const technologies = new Set<TechnologyId>(categoryTech ? [categoryTech] : []);
  for (const t of inferTechnologies(product.name, product.keywords, product.systemType)) {
    technologies.add(t);
  }

  return {
    id: `product:${slug}`,
    type: "product",
    slug,
    url: `/products/${slug}`,
    title: product.name,
    summary: product.subtitle,
    primaryCategory: product.category,
    tags: normaliseTags([
      product.category,
      product.brand,
      product.systemType,
      product.status,
      ...product.specialty,
      ...product.keywords.split(/[,;]/),
    ]),
    technologies: [...technologies],
    equipmentTypes: normaliseTags([product.category, product.systemType]).length
      ? [product.category, product.systemType].filter(Boolean)
      : [],
    specialties: product.specialty,
    manufacturers: manufacturer ? [manufacturer] : [],
    featured: false,
    language: LANGUAGE,
    image: product.image,
    relatedServices: product.services,
    searchText: joinSearch(
      product.name,
      product.model,
      product.brand,
      product.category,
      product.systemType,
      product.keywords,
      product.specialty,
      product.description,
    ),
    source: product,
  };
}

/* ------------------------------- Articles ------------------------------- */

function fromArticle(article: Article): ContentItem {
  const primaryCategory = inferArticleCategory(article);
  const technologies = inferTechnologies(
    article.category,
    article.title,
    article.excerpt,
    article.metaDescription,
  );

  return {
    id: `article:${article.slug}`,
    type: "article",
    slug: article.slug,
    url: `/blog/${article.slug}`,
    title: article.title,
    summary: article.excerpt,
    primaryCategory,
    tags: normaliseTags([article.category, primaryCategory, ...technologies]),
    technologies,
    equipmentTypes: [article.category],
    specialties: [],
    manufacturers: inferManufacturers(article.title, article.excerpt, article.metaDescription),
    featured: article.featured,
    readingTime: article.readingTime,
    language: LANGUAGE,
    author: { name: article.author.name, role: article.author.role },
    publishedDate: article.publishedDate,
    lastUpdated: article.lastUpdated,
    image: article.coverImage,
    relatedProducts: article.featuredProduct ? [article.featuredProduct.slug] : undefined,
    searchText: joinSearch(
      article.title,
      article.excerpt,
      article.metaDescription,
      article.category,
      primaryCategory,
      article.author.name,
    ),
    source: article,
  };
}

/* ------------------------------- Services ------------------------------- */

function fromService(service: ServiceEntry): ContentItem {
  const technologies = inferTechnologies(
    service.title,
    service.description,
    service.keywords.join(" "),
  );

  return {
    id: `service:${service.slug}`,
    type: "service",
    slug: service.slug,
    url: service.url,
    title: service.title,
    summary: service.description,
    primaryCategory: "Services",
    tags: normaliseTags([...service.keywords, service.title]),
    technologies,
    equipmentTypes: [],
    specialties: [],
    manufacturers: [],
    language: LANGUAGE,
    searchText: joinSearch(service.title, service.description, service.keywords),
    source: service,
  };
}

/* -------------------------------- Brands -------------------------------- */

function fromBrand(brand: BrandEntry): ContentItem {
  const manufacturer = normaliseManufacturer(brand.name);
  const products = PRODUCTS.filter((p) => normaliseManufacturer(p.brand) === manufacturer);
  const technologies = [
    ...new Set(
      products
        .map((p) => technologyForProductCategory(p.category))
        .filter((t): t is TechnologyId => Boolean(t)),
    ),
  ];

  return {
    id: `brand:${normaliseTags([brand.name])[0]}`,
    type: "brand",
    slug: normaliseTags([brand.name])[0],
    url: brand.href,
    title: [brand.name, brand.sub].filter(Boolean).join(" "),
    primaryCategory: "Manufacturers",
    tags: normaliseTags([brand.name, brand.sub]),
    technologies,
    equipmentTypes: [...new Set(products.map((p) => p.category))],
    specialties: [],
    manufacturers: manufacturer ? [manufacturer] : [],
    language: LANGUAGE,
    searchText: joinSearch(brand.name, brand.sub, [...new Set(products.map((p) => p.category))]),
    source: brand,
  };
}

/* --------------------------------- FAQs --------------------------------- */

/**
 * FAQs are already stored per product category in
 * `src/lib/category-content.ts`. Each question becomes an addressable content
 * item anchored to its category landing page.
 */
function faqItems(): ContentItem[] {
  const items: ContentItem[] = [];
  for (const [categorySlug, content] of Object.entries(CATEGORY_CONTENT)) {
    const tech = technologyForCategorySlug(categorySlug);
    content.faqs.forEach((faq, index) => {
      const slug = `${categorySlug}-${index + 1}`;
      items.push({
        id: `faq:${slug}`,
        type: "faq",
        slug,
        url: `/products/${categorySlug}`,
        title: faq.question,
        summary: faq.answer,
        primaryCategory: "FAQ",
        tags: normaliseTags([categorySlug, "faq"]),
        technologies: tech ? [tech] : inferTechnologies(faq.question, faq.answer),
        equipmentTypes: [],
        specialties: [],
        manufacturers: inferManufacturers(faq.question, faq.answer),
        language: LANGUAGE,
        searchText: joinSearch(faq.question, faq.answer, categorySlug),
        source: faq,
      });
    });
  }
  return items;
}

/* ------------------------------- Documents ------------------------------ */

/** Documents are the brochures already attached to products. */
function documentItems(): ContentItem[] {
  const items: ContentItem[] = [];
  for (const product of PRODUCTS) {
    for (const brochure of product.brochures ?? []) {
      const slug = normaliseTags([brochure.filename])[0];
      const manufacturer = normaliseManufacturer(product.brand);
      const tech = technologyForProductCategory(product.category);
      items.push({
        id: `document:${slug}`,
        type: "document",
        slug,
        url: brochure.url,
        title: brochure.filename,
        summary: `${product.name} documentation`,
        primaryCategory: "Documentation Center",
        tags: normaliseTags([product.category, product.brand, "brochure"]),
        technologies: tech ? [tech] : [],
        equipmentTypes: [product.category],
        specialties: product.specialty,
        manufacturers: manufacturer ? [manufacturer] : [],
        language: LANGUAGE,
        relatedProducts: [productSlug(product)],
        searchText: joinSearch(brochure.filename, product.name, product.brand, product.category),
        source: brochure,
      });
    }
  }
  return items;
}

/* ------------------------------ The registry ---------------------------- */

export const PRODUCT_ITEMS: ContentItem[] = PRODUCTS.map(fromProduct);
export const ARTICLE_ITEMS: ContentItem[] = ARTICLES.map(fromArticle);
export const SERVICE_ITEMS: ContentItem[] = SERVICES.map(fromService);
export const BRAND_ITEMS: ContentItem[] = BRANDS_LIST.map(fromBrand);
export const FAQ_ITEMS: ContentItem[] = faqItems();
export const DOCUMENT_ITEMS: ContentItem[] = documentItems();

/** Every content item on the site, in one flat, uniform collection. */
export const CONTENT_ITEMS: ContentItem[] = [
  ...ARTICLE_ITEMS,
  ...PRODUCT_ITEMS,
  ...SERVICE_ITEMS,
  ...BRAND_ITEMS,
  ...FAQ_ITEMS,
  ...DOCUMENT_ITEMS,
];

const BY_ID = new Map(CONTENT_ITEMS.map((i) => [i.id, i]));

export function getContentItem(id: string): ContentItem | undefined {
  return BY_ID.get(id);
}

/** Category-name → landing slug map, re-exported for consumers. */
export { CATEGORY_NAME_TO_SLUG };
