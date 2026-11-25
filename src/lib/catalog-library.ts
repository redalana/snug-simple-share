/**
 * Medical Equipment Catalog Library — informational PDF library.
 *
 * A manufacturer or product listed here does NOT mean AbuFarha sells,
 * distributes, represents or stocks it. This data is independent of the
 * commercial catalogue in src/lib/products.ts.
 *
 * Manufacturer names are normalised through the existing taxonomy
 * (normaliseManufacturer) so "Siemens Healthineers" and "Siemens" are one
 * filter value — no second brand roster is introduced.
 *
 * Zero fabrication: only add entries for real, publicly available documents
 * with a verifiable source URL. Leave optional fields out when unknown.
 */
import { normaliseManufacturer } from "@/lib/content/taxonomy";
import { PRODUCTS, type Product } from "@/lib/products";

export const CATALOG_CATEGORIES = [
  { id: "mri", label: "MRI Systems", productPath: "/products/mri-scanners" },
  { id: "ct", label: "CT Scanners", productPath: "/products/ct-scanners" },
  { id: "pet-ct", label: "PET/CT", productPath: "/products/pet-ct-scanners" },
  { id: "x-ray", label: "X-Ray Systems", productPath: "/products/x-ray-systems" },
  { id: "digital-radiography", label: "Digital Radiography" },
  { id: "c-arm", label: "C-Arms", productPath: "/products/c-arm-systems" },
  { id: "angiography", label: "Angiography Systems" },
  { id: "cath-lab", label: "Cath Lab", productPath: "/products/cath-lab" },
  { id: "mammography", label: "Mammography", productPath: "/products/mammography-systems" },
  { id: "bone-densitometry", label: "Bone Densitometry (DEXA)", productPath: "/products/bone-densitometers" },
  { id: "lithotripsy", label: "Lithotripsy (ESWL)", productPath: "/products/lithotripsy-eswl" },
  { id: "ultrasound", label: "Ultrasound" },
  { id: "laboratory", label: "Laboratory Equipment" },
  { id: "patient-monitoring", label: "Patient Monitoring" },
  { id: "ecg", label: "ECG" },
  { id: "ventilators", label: "Ventilators" },
  { id: "anesthesia", label: "Anesthesia Systems" },
  { id: "surgical", label: "Surgical Equipment" },
  { id: "icu-emergency", label: "ICU & Emergency Equipment" },
  { id: "other", label: "Other Medical Equipment" },
] as const;

export type CatalogCategoryId = (typeof CATALOG_CATEGORIES)[number]["id"];

export type CatalogDocument =
  | { kind: "file"; /** Path under /public, e.g. /catalogs/philips-ingenia.pdf */ path: string; sizeBytes?: number }
  | { kind: "external"; url: string; sizeBytes?: number };

export type CatalogEntry = {
  slug: string;
  title: string;
  manufacturer: string;
  category: CatalogCategoryId;
  /** e.g. "Brochure", "Datasheet", "Product catalog" */
  equipmentType?: string;
  model?: string;
  description?: string;
  document: CatalogDocument;
  coverImage?: { src: string; alt: string };
  /** BCP-47-ish display name, e.g. "English" */
  language?: string;
  publicationYear?: number;
  /** Original public page the document was obtained from. */
  sourceUrl: string;
  /** Only true when the source permits redistribution / direct download. */
  allowDownload: boolean;
  seoTitle?: string;
  seoDescription?: string;
  status: "published" | "draft";
  /** ISO date, YYYY-MM-DD */
  dateAdded: string;
  /**
   * Where the entry comes from. "product" entries are derived automatically
   * from brochures attached in products.ts; "independent" entries are
   * hand-added in MANUAL_CATALOGS and never touched by product changes.
   */
  origin?: "product" | "independent";
  /** Product listings that attach this exact document (product origin only). */
  linkedProducts?: { name: string; slug: string }[];
};

/** Hand-added entries (independent of the product catalogue). Real documents only. */
export const MANUAL_CATALOGS: CatalogEntry[] = [];

/** Product catalogue category label → library category. Unmapped → "other". */
const PRODUCT_CATEGORY_MAP: Record<string, CatalogCategoryId> = {
  "Cath Lab Systems": "cath-lab",
  "CT Scanners": "ct",
  "MRI Scanners": "mri",
  "PET/CT Scanners": "pet-ct",
  "C-Arm Systems": "c-arm",
  "X-Ray Systems": "x-ray",
  Mammography: "mammography",
  "Mammography Systems": "mammography",
  "Bone Densitometers (DEXA)": "bone-densitometry",
  "Lithotripsy Systems": "lithotripsy",
};

const LIBRARY_ADDED = "2026-11-25";

/**
 * Automatic sync with the product catalogue: every PDF attached to a product
 * in products.ts becomes a library entry at build time — new products, new
 * PDFs and replaced PDFs appear with no library edits. Identity is the
 * document URL (never the title), so a PDF shared by several listings is one
 * entry linked to all of them, and two different PDFs never merge. Products
 * without a PDF create nothing.
 */
export function productBrochureCatalogs(products: Product[] = PRODUCTS): CatalogEntry[] {
  const byUrl = new Map<string, CatalogEntry>();
  const usedSlugs = new Set(MANUAL_CATALOGS.map((e) => e.slug));
  for (const p of products) {
    for (const b of p.brochures ?? []) {
      const url = b.url?.trim();
      if (!url || !isValidHttpsUrl(url) || !/\.pdf($|[?#])/i.test(url)) continue;
      const existing = byUrl.get(url);
      if (existing) {
        if (!existing.linkedProducts?.some((lp) => lp.slug === p.slug)) {
          existing.linkedProducts?.push({ name: p.name, slug: p.slug });
        }
        continue;
      }
      const category = PRODUCT_CATEGORY_MAP[p.category] ?? "other";
      const raw = b.filename.replace(/\.pdf$/i, "").trim();
      const fd = /FD\d+(?:-\d+)?/i.exec(raw)?.[0]?.toUpperCase().replace("-", "/");
      const family = /Allura Xper/i.test(raw) ? "Allura Xper" : undefined;
      const modelName = family && fd ? `${family} ${fd}` : undefined;
      const model = modelName ? `${p.brand} ${modelName}` : undefined;
      const title = model ? `${model} ${categoryLabel(category)} Brochure` : raw;
      let slug = slugifyCatalog(title) || "catalog";
      for (let n = 2; usedSlugs.has(slug); n++) slug = `${slugifyCatalog(title)}-${n}`;
      usedSlugs.add(slug);
      byUrl.set(url, {
        slug,
        title,
        manufacturer: p.brand,
        category,
        equipmentType: "Brochure",
        ...(model ? { model } : {}),
        description: `Manufacturer brochure for the ${model ?? raw}, as published with the matching equipment listings on this site.`,
        document: { kind: "external", url },
        // Real photo of the first listing that carries this PDF.
        ...(p.image ? { coverImage: { src: p.image, alt: p.imageAlt ?? p.name } } : {}),
        sourceUrl: url,
        allowDownload: true,
        status: "published",
        dateAdded: LIBRARY_ADDED,
        origin: "product",
        linkedProducts: [{ name: p.name, slug: p.slug }],
      });
    }
  }
  return [...byUrl.values()];
}

function slugifyCatalog(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

/** Independent entries win when the same document URL is also attached to a product. */
function mergeSources(manual: CatalogEntry[], derived: CatalogEntry[]): CatalogEntry[] {
  const manualUrls = new Set(manual.map((e) => documentKey(e)));
  return [
    ...manual.map((e) => ({ ...e, origin: "independent" as const })),
    ...derived.filter((e) => !manualUrls.has(documentKey(e))),
  ];
}

function documentKey(e: CatalogEntry): string {
  return e.document.kind === "external" ? e.document.url : e.document.path;
}

export const CATALOGS: CatalogEntry[] = mergeSources(MANUAL_CATALOGS, productBrochureCatalogs());

export const MAX_CATALOG_FILE_BYTES = 25 * 1024 * 1024;

export function isValidHttpsUrl(value: string): boolean {
  try {
    const u = new URL(value);
    return u.protocol === "https:" && !!u.hostname;
  } catch {
    return false;
  }
}

/** Structural validation; invalid entries are never shown publicly. */
export function validateCatalog(e: CatalogEntry): string[] {
  const errors: string[] = [];
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(e.slug)) errors.push("slug");
  if (!e.title.trim()) errors.push("title");
  if (!e.manufacturer.trim()) errors.push("manufacturer");
  if (!isValidHttpsUrl(e.sourceUrl)) errors.push("sourceUrl");
  if (e.document.kind === "external" && !isValidHttpsUrl(e.document.url)) errors.push("document.url");
  if (e.document.kind === "file" && !/^\/catalogs\/[a-z0-9-]+\.pdf$/.test(e.document.path)) errors.push("document.path");
  if (e.document.sizeBytes !== undefined && e.document.sizeBytes > MAX_CATALOG_FILE_BYTES) errors.push("document.size");
  if (e.publicationYear !== undefined && (e.publicationYear < 1950 || e.publicationYear > 2100)) errors.push("publicationYear");
  return errors;
}

export function documentHref(e: CatalogEntry): string {
  return e.document.kind === "file" ? e.document.path : e.document.url;
}

export function canonicalManufacturer(name: string): string {
  return normaliseManufacturer(name) ?? name.trim();
}

export function categoryLabel(id: CatalogCategoryId): string {
  return CATALOG_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

export function publishedCatalogs(entries: CatalogEntry[] = CATALOGS): CatalogEntry[] {
  return entries
    .filter((e) => e.status === "published" && validateCatalog(e).length === 0)
    .sort((a, b) => b.dateAdded.localeCompare(a.dateAdded) || a.title.localeCompare(b.title));
}

export function getPublishedCatalog(slug: string, entries: CatalogEntry[] = CATALOGS) {
  return publishedCatalogs(entries).find((e) => e.slug === slug);
}

export type CatalogFilters = {
  q: string;
  category: CatalogCategoryId | "";
  manufacturer: string;
  equipmentType: string;
  language: string;
  year: string;
};

export const EMPTY_FILTERS: CatalogFilters = {
  q: "",
  category: "",
  manufacturer: "",
  equipmentType: "",
  language: "",
  year: "",
};

const norm = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function filterCatalogs(entries: CatalogEntry[], f: CatalogFilters): CatalogEntry[] {
  const terms = norm(f.q).split(/\s+/).filter(Boolean);
  return entries.filter((e) => {
    if (f.category && e.category !== f.category) return false;
    if (f.manufacturer && canonicalManufacturer(e.manufacturer) !== f.manufacturer) return false;
    if (f.equipmentType && e.equipmentType !== f.equipmentType) return false;
    if (f.language && e.language !== f.language) return false;
    if (f.year && String(e.publicationYear ?? "") !== f.year) return false;
    if (terms.length) {
      const hay = norm(
        [e.title, e.manufacturer, canonicalManufacturer(e.manufacturer), e.model, e.equipmentType, categoryLabel(e.category)]
          .filter(Boolean)
          .join(" "),
      );
      if (!terms.every((t) => hay.includes(t))) return false;
    }
    return true;
  });
}

const uniqSorted = (xs: (string | undefined)[]) =>
  [...new Set(xs.filter((x): x is string => !!x))].sort((a, b) => a.localeCompare(b));

export function catalogFacets(entries: CatalogEntry[]) {
  return {
    manufacturers: uniqSorted(entries.map((e) => canonicalManufacturer(e.manufacturer))),
    equipmentTypes: uniqSorted(entries.map((e) => e.equipmentType)),
    languages: uniqSorted(entries.map((e) => e.language)),
    years: uniqSorted(entries.map((e) => (e.publicationYear ? String(e.publicationYear) : undefined))).reverse(),
    categoryCounts: Object.fromEntries(
      CATALOG_CATEGORIES.map((c) => [c.id, entries.filter((e) => e.category === c.id).length]),
    ) as Record<CatalogCategoryId, number>,
  };
}

export function formatBytes(n?: number): string | undefined {
  if (!n) return undefined;
  if (n < 1024 * 1024) return `${Math.round(n / 1024)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}
