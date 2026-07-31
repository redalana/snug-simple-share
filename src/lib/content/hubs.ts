/**
 * Knowledge Hub layer.
 *
 * Four hub families — Technology, Manufacturer, Product and Service — give the
 * Knowledge Center a dedicated, indexable landing page for every axis the
 * `/blog` filters expose. Hubs are DERIVED entirely from the existing single
 * sources of truth (products, articles, services, taxonomy), so they invent no
 * facts and can never drift from published content.
 */

import { ARTICLE_ITEMS, CONTENT_ITEMS, PRODUCT_ITEMS, SERVICE_ITEMS } from "./adapters";
import { rankRelated } from "./relations";
import { SERVICES } from "./services";
import {
  ALL_MANUFACTURERS,
  PRIMARY_CATEGORIES,
  TECHNOLOGIES,
  getTechnology,
  inferTechnologies,
  technologyForProductCategory,
  type Manufacturer,
  type TechnologyId,
} from "./taxonomy";
import type { ContentItem } from "./types";

export const HUB_KINDS = ["technology", "manufacturer", "product", "service"] as const;
export type HubKind = (typeof HUB_KINDS)[number];

export const HUB_BASE_PATH: Record<HubKind, string> = {
  technology: "/knowledge/technologies",
  manufacturer: "/knowledge/manufacturers",
  product: "/knowledge/products",
  service: "/knowledge/services",
};

export const HUB_FAMILY_LABEL: Record<HubKind, string> = {
  technology: "Technology Hubs",
  manufacturer: "Manufacturer Hubs",
  product: "Product Hubs",
  service: "Service Hubs",
};

export type HubDef = {
  kind: HubKind;
  /** URL slug within the hub family. */
  slug: string;
  /** Canonical path. */
  path: string;
  /** Short entity name, e.g. "MRI Scanners" or "Philips". */
  name: string;
  /** Page H1. */
  heading: string;
  /** <title> value (without the site suffix). */
  metaTitle: string;
  /** Meta description — factual, derived from the entity itself. */
  metaDescription: string;
  /** Lead paragraph shown under the H1. */
  intro: string;
  /** Related route on the commercial side of the site, when one exists. */
  catalogPath?: string;
  technology?: TechnologyId;
};

export function hubSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* ------------------------------------------------------------------ */
/*  Definitions                                                        */
/* ------------------------------------------------------------------ */

const TECHNOLOGY_HUBS: HubDef[] = TECHNOLOGIES.map((tech) => ({
  kind: "technology" as const,
  slug: tech.id,
  path: `${HUB_BASE_PATH.technology}/${tech.id}`,
  name: tech.label,
  heading: `${tech.label} — Technology Hub`,
  metaTitle: `${tech.label} Technology Hub | AbuFarha Medical`,
  metaDescription: `Everything AbuFarha Medical publishes on ${tech.label.toLowerCase()}: technology explainers, buying and procurement guides, installation and maintenance resources, systems and support services.`,
  intro: `A single entry point to every ${tech.label.toLowerCase()} resource we publish — how the technology works, how to evaluate and procure it, how it is installed, and how it is kept clinically available.`,
  catalogPath: tech.categorySlug ? `/products/${tech.categorySlug}` : undefined,
  technology: tech.id,
}));

const MANUFACTURER_HUBS: HubDef[] = ALL_MANUFACTURERS.map((name) => ({
  kind: "manufacturer" as const,
  slug: hubSlug(name),
  path: `${HUB_BASE_PATH.manufacturer}/${hubSlug(name)}`,
  name,
  heading: `${name} — Manufacturer Hub`,
  metaTitle: `${name} Systems & Knowledge Hub | AbuFarha Medical`,
  metaDescription: `${name} systems supplied, installed and supported by AbuFarha Medical, with the technical articles, buying guides and service resources that relate to them.`,
  intro: `${name} equipment supplied, installed, commissioned and supported by AbuFarha Medical — together with every published article, guide and service that relates to it.`,
  catalogPath: "/brands",
}));

const PRODUCT_HUBS: HubDef[] = PRIMARY_CATEGORIES.map((category) => {
  const technology = technologyForProductCategory(category);
  const tech = technology ? getTechnology(technology) : undefined;
  return {
    kind: "product" as const,
    slug: hubSlug(category),
    path: `${HUB_BASE_PATH.product}/${hubSlug(category)}`,
    name: category,
    heading: `${category} — Product Hub`,
    metaTitle: `${category} Product Hub | AbuFarha Medical`,
    metaDescription: `${category} available through AbuFarha Medical, with the specifications, comparison guides, planning resources and maintenance documentation that support each system.`,
    intro: `Every ${category.toLowerCase()} system in our portfolio, mapped to the technology explainers, comparisons, planning notes and service resources a hospital needs before it buys.`,
    catalogPath: tech?.categorySlug ? `/products/${tech.categorySlug}` : "/products",
    technology,
  };
});

const SERVICE_HUBS: HubDef[] = SERVICES.map((service) => ({
  kind: "service" as const,
  slug: service.slug,
  path: `${HUB_BASE_PATH.service}/${service.slug}`,
  name: service.title,
  heading: `${service.title} — Service Hub`,
  metaTitle: `${service.title} | AbuFarha Medical Service Hub`,
  metaDescription: `${service.description} Scope, covered technologies and related technical resources from AbuFarha Medical.`,
  intro: service.description,
  catalogPath: service.url,
}));

const HUBS_BY_KIND: Record<HubKind, HubDef[]> = {
  technology: TECHNOLOGY_HUBS,
  manufacturer: MANUFACTURER_HUBS,
  product: PRODUCT_HUBS,
  service: SERVICE_HUBS,
};

export const ALL_HUBS: HubDef[] = HUB_KINDS.flatMap((kind) => HUBS_BY_KIND[kind]);

export function listHubs(kind: HubKind): HubDef[] {
  return HUBS_BY_KIND[kind];
}

export function getHubDef(kind: HubKind, slug: string): HubDef | undefined {
  return HUBS_BY_KIND[kind].find((h) => h.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  Resolution                                                         */
/* ------------------------------------------------------------------ */

export type ResolvedHub = {
  def: HubDef;
  articles: ContentItem[];
  products: ContentItem[];
  services: ContentItem[];
  /** Manufacturers represented in this hub's products. */
  manufacturers: Manufacturer[];
  /** Technologies represented in this hub's content. */
  technologies: TechnologyId[];
  /** Sibling hubs of the same family, for lateral internal linking. */
  siblings: HubDef[];
  /** Cross-family hubs this hub connects to (technology ↔ product ↔ service). */
  crossLinks: HubDef[];
};

const byTechnology = (items: readonly ContentItem[], technology: TechnologyId) =>
  items.filter((i) => i.technologies.includes(technology));

const byManufacturer = (items: readonly ContentItem[], manufacturer: Manufacturer) =>
  items.filter((i) => i.manufacturers.includes(manufacturer));

const byCategory = (items: readonly ContentItem[], category: string) =>
  items.filter(
    (i) =>
      i.primaryCategory === category ||
      i.equipmentTypes.some((t) => t.toLowerCase() === category.toLowerCase()),
  );

function uniqueTechnologies(items: readonly ContentItem[]): TechnologyId[] {
  return [...new Set(items.flatMap((i) => i.technologies))];
}

function uniqueManufacturers(items: readonly ContentItem[]): Manufacturer[] {
  return [...new Set(items.flatMap((i) => i.manufacturers))];
}

function hubsForTechnologies(technologies: readonly TechnologyId[], exclude: string): HubDef[] {
  return [
    ...TECHNOLOGY_HUBS.filter((h) => technologies.includes(h.slug as TechnologyId)),
    ...PRODUCT_HUBS.filter((h) => h.technology && technologies.includes(h.technology)),
  ].filter((h) => h.path !== exclude);
}

export function resolveHub(kind: HubKind, slug: string): ResolvedHub | undefined {
  const def = getHubDef(kind, slug);
  if (!def) return undefined;

  let articles: ContentItem[] = [];
  let products: ContentItem[] = [];
  let services: ContentItem[] = [];

  if (kind === "technology") {
    const tech = def.slug as TechnologyId;
    articles = byTechnology(ARTICLE_ITEMS, tech);
    products = byTechnology(PRODUCT_ITEMS, tech);
    services = byTechnology(SERVICE_ITEMS, tech);
  } else if (kind === "manufacturer") {
    const name = def.name as Manufacturer;
    articles = byManufacturer(ARTICLE_ITEMS, name);
    products = byManufacturer(PRODUCT_ITEMS, name);
    const techs = uniqueTechnologies(products);
    services = SERVICE_ITEMS.filter((s) => s.technologies.some((t) => techs.includes(t)));
    if (articles.length === 0 && techs.length > 0) {
      // No article names this manufacturer directly — surface the technology
      // knowledge that applies to the systems we supply from it instead.
      articles = ARTICLE_ITEMS.filter((a) => a.technologies.some((t) => techs.includes(t)));
    }
  } else if (kind === "product") {
    products = byCategory(PRODUCT_ITEMS, def.name);
    const tech = def.technology;
    articles = tech ? byTechnology(ARTICLE_ITEMS, tech) : byCategory(ARTICLE_ITEMS, def.name);
    services = tech ? byTechnology(SERVICE_ITEMS, tech) : [];
  } else {
    const item = SERVICE_ITEMS.find((s) => s.slug === def.slug);
    if (item) {
      services = SERVICE_ITEMS.filter((s) => s.slug !== def.slug && s.technologies.some((t) => item.technologies.includes(t)));
      articles = rankRelated(item, ARTICLE_ITEMS, { limit: 12 });
      products = rankRelated(item, PRODUCT_ITEMS, { limit: 8 });
      if (articles.length === 0) {
        const techs = inferTechnologies(def.name, def.intro);
        articles = ARTICLE_ITEMS.filter((a) => a.technologies.some((t) => techs.includes(t))).slice(0, 12);
      }
    }
  }

  const technologies = [...new Set([...uniqueTechnologies(articles), ...uniqueTechnologies(products)])];
  const manufacturers =
    kind === "manufacturer" ? [def.name as Manufacturer] : uniqueManufacturers(products);

  const siblings = HUBS_BY_KIND[kind].filter((h) => h.slug !== def.slug);
  const crossLinks =
    kind === "manufacturer"
      ? hubsForTechnologies(technologies, def.path)
      : [
          ...hubsForTechnologies(technologies, def.path),
          ...MANUFACTURER_HUBS.filter((h) => manufacturers.includes(h.name as Manufacturer)),
        ];

  return {
    def,
    articles: dedupe(articles),
    products: dedupe(products),
    services: dedupe(services),
    manufacturers,
    technologies,
    siblings,
    crossLinks: dedupeHubs(crossLinks),
  };
}

function dedupe(items: readonly ContentItem[]): ContentItem[] {
  const seen = new Set<string>();
  return items.filter((i) => (seen.has(i.id) ? false : (seen.add(i.id), true)));
}

function dedupeHubs(hubs: readonly HubDef[]): HubDef[] {
  const seen = new Set<string>();
  return hubs.filter((h) => (seen.has(h.path) ? false : (seen.add(h.path), true)));
}

/** Every hub an article/product/service belongs to — used for in-page linking. */
export function hubsForContentItem(item: ContentItem): HubDef[] {
  return dedupeHubs([
    ...TECHNOLOGY_HUBS.filter((h) => item.technologies.includes(h.slug as TechnologyId)),
    ...MANUFACTURER_HUBS.filter((h) => item.manufacturers.includes(h.name as Manufacturer)),
    ...PRODUCT_HUBS.filter(
      (h) =>
        item.primaryCategory === h.name ||
        item.equipmentTypes.some((t) => t.toLowerCase() === h.name.toLowerCase()),
    ),
  ]);
}

/** Coverage snapshot used by the hub directory and the content roadmap. */
export function hubCoverage() {
  return ALL_HUBS.map((def) => {
    const resolved = resolveHub(def.kind, def.slug);
    return {
      kind: def.kind,
      name: def.name,
      path: def.path,
      articles: resolved?.articles.length ?? 0,
      products: resolved?.products.length ?? 0,
      services: resolved?.services.length ?? 0,
    };
  });
}

/** Total content items reachable from the hub layer (sanity/reporting only). */
export function hubReachableItems(): number {
  const ids = new Set<string>();
  for (const def of ALL_HUBS) {
    const r = resolveHub(def.kind, def.slug);
    for (const i of [...(r?.articles ?? []), ...(r?.products ?? []), ...(r?.services ?? [])]) {
      ids.add(i.id);
    }
  }
  return Math.min(ids.size, CONTENT_ITEMS.length);
}
