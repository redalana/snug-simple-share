/**
 * Central taxonomy for the AbuFarha Medical content architecture.
 *
 * This module owns the controlled vocabularies that every content type
 * (articles, products, services, brands, FAQs, documents) is normalised
 * against. It contains NO UI and NO new content — every vocabulary term is
 * derived from data that already exists in the project:
 *
 *   - Technologies  → PRIMARY_CATEGORIES in src/lib/products.ts + article categories
 *   - Manufacturers → ALL_MANUFACTURERS in src/lib/products.ts
 *   - Specialties   → Product.specialty values in src/lib/products.ts
 *
 * Normalisation is what makes the relationship engine work: "MRI",
 * "MRI Scanners", "Imaging Solutions / MRI" and a product in category
 * "MRI Scanners" all resolve to the single technology id `mri`.
 */

import { ALL_MANUFACTURERS, PRIMARY_CATEGORIES } from "@/lib/products";

/* ------------------------------------------------------------------ */
/*  Article categories — exactly one primary category per article      */
/* ------------------------------------------------------------------ */

export const ARTICLE_CATEGORIES = [
  "Medical Articles",
  "Buying Guides",
  "Product Comparisons",
  "Technology Explained",
  "Clinical Resources",
  "Installation & Maintenance",
  "Documentation Center",
  "FAQ",
  "Industry News",
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

/** Fallback used when an article's intent cannot be inferred from its data. */
export const DEFAULT_ARTICLE_CATEGORY: ArticleCategory = "Medical Articles";

/**
 * Infer the single primary category of an article from its existing fields.
 * The legacy `Article.category` field is a modality label ("MRI", "Cath Lab"),
 * not an editorial category — so intent is inferred from title + slug and the
 * modality is preserved separately as a technology.
 */
export function inferArticleCategory(input: {
  slug: string;
  title: string;
  category?: string;
  excerpt?: string;
}): ArticleCategory {
  const t = `${input.slug} ${input.title} ${input.excerpt ?? ""}`.toLowerCase();

  if (/\bvs\.?\b|versus|compare|comparison|choosing between/.test(t)) return "Product Comparisons";
  if (/buyer|buying|guide to buying|procurement|cost|roi|investment|price/.test(t))
    return "Buying Guides";
  if (/install|commission|maintenance|preventive|uptime|service|spare part|downtime/.test(t))
    return "Installation & Maintenance";
  if (/faq|frequently asked/.test(t)) return "FAQ";
  if (/brochure|datasheet|documentation|manual|specification sheet/.test(t))
    return "Documentation Center";
  if (/news|announce|launch|partnership|award|expansion/.test(t)) return "Industry News";
  if (/how it works|explained|technology|what is|understanding|principles/.test(t))
    return "Technology Explained";
  if (/protocol|clinical|patient|diagnosis|treatment|workflow|program/.test(t))
    return "Clinical Resources";
  if (/guide/.test(t)) return "Buying Guides";

  return DEFAULT_ARTICLE_CATEGORY;
}

/* ------------------------------------------------------------------ */
/*  Technologies (modalities / equipment types)                        */
/* ------------------------------------------------------------------ */

export type TechnologyId =
  | "cath-lab"
  | "mri"
  | "ct"
  | "pet-ct"
  | "c-arm"
  | "x-ray"
  | "mammography"
  | "ultrasound"
  | "dexa"
  | "lithotripsy"
  | "operating-room"
  | "womens-health"
  | "stents"
  | "turnkey"
  | "after-sales"
  | "radiation-therapy";

export type TechnologyDef = {
  id: TechnologyId;
  /** Human label used for display and search. */
  label: string;
  /** Product categories (from PRIMARY_CATEGORIES) that belong to this technology. */
  productCategories: string[];
  /** Category landing route slug, when one exists. */
  categorySlug?: string;
  /** Free-text matchers used to normalise legacy labels and infer from prose. */
  aliases: string[];
};

export const TECHNOLOGIES: TechnologyDef[] = [
  {
    id: "cath-lab",
    label: "Cath Lab Systems",
    productCategories: ["Cath Lab Systems"],
    categorySlug: "cath-lab",
    aliases: ["cath lab", "cathlab", "catheterization", "angiography", "interventional cardiology"],
  },
  {
    id: "mri",
    label: "MRI Scanners",
    productCategories: ["MRI Scanners"],
    categorySlug: "mri-scanners",
    aliases: ["mri", "magnetic resonance", "1.5t", "3t"],
  },
  {
    id: "ct",
    label: "CT Scanners",
    productCategories: ["CT Scanners"],
    categorySlug: "ct-scanners",
    aliases: ["ct scanner", "ct scan", "computed tomography", "ct "],
  },
  {
    id: "pet-ct",
    label: "PET/CT Scanners",
    productCategories: ["PET/CT Scanners"],
    categorySlug: "pet-ct-scanners",
    aliases: ["pet/ct", "pet ct", "petct", "molecular imaging", "nuclear medicine"],
  },
  {
    id: "c-arm",
    label: "C-Arm Systems",
    productCategories: ["C-Arms"],
    categorySlug: "c-arm-systems",
    aliases: ["c-arm", "c arm", "carm", "mobile fluoroscopy"],
  },
  {
    id: "x-ray",
    label: "X-Ray Systems",
    productCategories: ["X-Ray Systems"],
    categorySlug: "x-ray-systems",
    aliases: ["x-ray", "x ray", "xray", "radiography", "fluoroscopy"],
  },
  {
    id: "mammography",
    label: "Mammography Systems",
    productCategories: ["Mammography"],
    categorySlug: "mammography-systems",
    aliases: ["mammography", "mammogram", "breast imaging", "tomosynthesis"],
  },
  {
    id: "ultrasound",
    label: "Ultrasound Systems",
    productCategories: ["Ultrasound"],
    aliases: ["ultrasound", "sonography", "echo", "doppler"],
  },
  {
    id: "dexa",
    label: "Bone Densitometers (DEXA)",
    productCategories: ["Bone Densitometers (DEXA)"],
    categorySlug: "bone-densitometers",
    aliases: ["dexa", "dxa", "bone density", "densitometer", "osteoporosis"],
  },
  {
    id: "lithotripsy",
    label: "Lithotripsy (ESWL) Systems",
    productCategories: ["Lithotripsy Systems"],
    categorySlug: "lithotripsy-eswl",
    aliases: ["lithotripsy", "eswl", "shock wave", "kidney stone"],
  },
  {
    id: "operating-room",
    label: "Operating Room",
    productCategories: ["Operating Room"],
    aliases: ["operating room", "operating theatre", "surgical suite", "hybrid or"],
  },
  {
    id: "womens-health",
    label: "Women's Healthcare",
    productCategories: ["Women's Healthcare"],
    aliases: ["women's health", "womens healthcare", "obstetric", "gynecolog"],
  },
  {
    id: "stents",
    label: "Drug-Eluting Stents",
    productCategories: [],
    categorySlug: "drug-eluting-stents",
    aliases: ["stent", "drug-eluting", "des ", "balloon catheter"],
  },
  {
    id: "turnkey",
    label: "Turnkey Projects",
    productCategories: [],
    aliases: ["turnkey", "hospital planning", "commissioning", "department build"],
  },
  {
    id: "after-sales",
    label: "After-Sales & Service",
    productCategories: [],
    aliases: [
      "after sales",
      "after-sales",
      "preventive maintenance",
      "technical support",
      "biomedical",
      "spare part",
      "uptime",
      "remote diagnostics",
    ],
  },
  {
    id: "radiation-therapy",
    label: "Radiation Therapy",
    productCategories: [],
    aliases: ["radiation therapy", "radiotherapy", "linac", "oncology treatment"],
  },
];

const TECH_BY_ID = new Map<TechnologyId, TechnologyDef>(TECHNOLOGIES.map((t) => [t.id, t]));

export function getTechnology(id: TechnologyId): TechnologyDef | undefined {
  return TECH_BY_ID.get(id);
}

/** Resolve a product category name (e.g. "MRI Scanners") to a technology id. */
export function technologyForProductCategory(category: string): TechnologyId | undefined {
  const c = category.trim().toLowerCase();
  return TECHNOLOGIES.find((t) => t.productCategories.some((p) => p.toLowerCase() === c))?.id;
}

/** Resolve a category landing route slug to a technology id. */
export function technologyForCategorySlug(slug: string): TechnologyId | undefined {
  return TECHNOLOGIES.find((t) => t.categorySlug === slug)?.id;
}

/**
 * Extract every technology mentioned in a block of free text.
 * Used to derive technologies for articles, services and FAQs, which have no
 * explicit technology field of their own.
 */
export function inferTechnologies(...parts: (string | undefined)[]): TechnologyId[] {
  const haystack = ` ${parts.filter(Boolean).join(" ").toLowerCase()} `;
  const found: TechnologyId[] = [];
  for (const tech of TECHNOLOGIES) {
    const terms = [tech.label.toLowerCase(), ...tech.aliases, ...tech.productCategories.map((c) => c.toLowerCase())];
    if (terms.some((term) => haystack.includes(term))) found.push(tech.id);
  }
  return found;
}

/* ------------------------------------------------------------------ */
/*  Manufacturers                                                      */
/* ------------------------------------------------------------------ */

export type Manufacturer = (typeof ALL_MANUFACTURERS)[number];

/** Alternate spellings that appear in prose but not in the strict roster. */
const MANUFACTURER_ALIASES: Record<string, Manufacturer> = {
  "siemens healthineers": "Siemens",
  "ge healthcare": "GE",
  "general electric": "GE",
  toshiba: "Canon Medical",
  "toshiba medical": "Canon Medical",
  canon: "Canon Medical",
  esaote: "eSaote",
};

/** Normalise a free-text brand string to the canonical manufacturer name. */
export function normaliseManufacturer(value: string): Manufacturer | undefined {
  const v = value.trim().toLowerCase();
  const exact = ALL_MANUFACTURERS.find((m) => m.toLowerCase() === v);
  if (exact) return exact;
  return MANUFACTURER_ALIASES[v];
}

/** Extract every manufacturer mentioned in free text. */
export function inferManufacturers(...parts: (string | undefined)[]): Manufacturer[] {
  const haystack = ` ${parts.filter(Boolean).join(" ").toLowerCase()} `;
  const found = new Set<Manufacturer>();
  for (const m of ALL_MANUFACTURERS) {
    if (haystack.includes(m.toLowerCase())) found.add(m);
  }
  for (const [alias, canonical] of Object.entries(MANUFACTURER_ALIASES)) {
    if (haystack.includes(alias)) found.add(canonical);
  }
  return [...found];
}

/* ------------------------------------------------------------------ */
/*  Tags                                                               */
/* ------------------------------------------------------------------ */

/** Lowercase, hyphenated, de-duplicated tag list. */
export function normaliseTags(values: (string | undefined)[]): string[] {
  const out = new Set<string>();
  for (const v of values) {
    if (!v) continue;
    const tag = v
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    if (tag) out.add(tag);
  }
  return [...out];
}

/** The strict product category roster, re-exported for consumers of this layer. */
export { PRIMARY_CATEGORIES, ALL_MANUFACTURERS };
