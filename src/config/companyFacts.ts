/**
 * Single Source of Truth for AbuFarha Medical company information.
 *
 * Every component, route, metadata tag, and structured-data block that
 * references company facts MUST import from this file. Do not hardcode
 * company statistics, descriptions, or contact details anywhere else.
 *
 * All values here are drawn from the official AbuFarha Corporate Profile.
 * Any fact not verified in that profile is marked with a
 * `// REQUIRES USER CONFIRMATION` comment and must not be published
 * without approval.
 */

/* ------------------------------------------------------------------ */
/*  COMPANY                                                            */
/* ------------------------------------------------------------------ */

export const COMPANY = {
  legalName: "AbuFarha Medical Supplies",
  shortName: "AbuFarha Medical",
  brandName: "AbuFarha",
  foundedYear: 1999,
  founder: "Dr. Walid AbuFarha",
  headquarters: {
    city: "Amman",
    country: "Jordan",
    address: "4th Floor, Complex 396, Queen Rania Street, Amman, Jordan",
    coords: { lat: 32.0239137, lng: 35.8507975 },
  },
  website: "https://snug-simple-share.lovable.app",
  phone: "+962 6 4026063",
  email: "info@abufarhamedical.com",
  hours: "Saturday to Thursday, 9:00 AM – 5:00 PM",
  region: "Africa and the Middle East",
} as const;

/* ------------------------------------------------------------------ */
/*  STATS — verified facts only                                        */
/* ------------------------------------------------------------------ */

export type CompanyStat = {
  value: number | string;
  suffix: string;
  label: string;
};

export const STATS = {
  /** yearsSince(1999) — derived, always current. */
  yearsExperience: {
    value: () => yearsSince(COMPANY.foundedYear),
    suffix: "+",
    label: "Years of Experience",
  },
  founded: { value: "Since 1999", suffix: "", label: "Established" },
  countries: { value: 10, suffix: "+", label: "Countries Served" },
  projects: { value: 30, suffix: "+", label: "Healthcare Projects" },
  engineers: { value: 5, suffix: "", label: "Biomedical Engineers" },
  support: { value: "24/7", suffix: "", label: "Technical Support" },
  oemCertified: { value: "100%", suffix: "", label: "Certified OEM Partners" },
} as const;

/** Formatted string, e.g. "27+ Years of Experience". */
export function statText(s: { value: number | string | (() => number); suffix: string }): string {
  const v = typeof s.value === "function" ? s.value() : s.value;
  return `${v}${s.suffix}`;
}

/* ------------------------------------------------------------------ */
/*  COPY — reusable marketing strings                                  */
/* ------------------------------------------------------------------ */

export const COPY = {
  /** ≤160 chars, meta description. */
  metaDescription:
    "AbuFarha Medical supplies, installs, commissions and supports advanced medical equipment across Africa and the Middle East — engineering healthcare since 1999.",
  /** Open Graph description. */
  ogDescription:
    "Supply, installation, commissioning, clinical training and lifetime technical support for advanced medical equipment across Africa and the Middle East since 1999.",
  /** Twitter description. */
  twitterDescription:
    "Advanced medical equipment supply, engineering, installation and lifetime support across Africa and the Middle East since 1999.",
  /** Short marketing tagline. */
  tagline: "Engineering healthcare since 1999.",
  /** One-line elevator description. */
  shortDescription:
    "A biomedical engineering company supplying, installing and supporting advanced medical equipment for hospitals across Africa and the Middle East.",
  /** Longer About / summary paragraph. */
  longDescription:
    "AbuFarha Medical Supplies is a biomedical engineering company founded in 1999 in Amman, Jordan. We supply, install, commission, train and support advanced medical equipment for hospitals and healthcare facilities across Africa and the Middle East — combining OEM-certified engineering with long-term clinical partnership.",
  /** Regional coverage phrase (reusable). */
  regionalCoverage: `${COMPANY.region} — 10+ countries`,
} as const;

/* ------------------------------------------------------------------ */
/*  HELPERS                                                            */
/* ------------------------------------------------------------------ */

/** Auto-updating years experience — no annual maintenance needed. */
export function yearsSince(year: number): number {
  return new Date().getUTCFullYear() - year;
}

/**
 * Structured data — combined MedicalOrganization / MedicalBusiness /
 * LocalBusiness schema. A single JSON-LD block covers every entity type
 * Google and AI answer engines look for.
 *
 * `sameAs` is intentionally omitted — no verified social profile URLs are
 * available in the Corporate Profile. Add here once user-approved.
 */
export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["MedicalOrganization", "MedicalBusiness", "LocalBusiness"],
  "@id": `${COMPANY.website}/#organization`,
  name: COMPANY.legalName,
  alternateName: COMPANY.shortName,
  foundingDate: String(COMPANY.foundedYear),
  founder: { "@type": "Person", name: COMPANY.founder },
  url: COMPANY.website,
  email: COMPANY.email,
  telephone: COMPANY.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Floor, Complex 396, Queen Rania Street",
    addressLocality: COMPANY.headquarters.city,
    addressCountry: COMPANY.headquarters.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.headquarters.coords.lat,
    longitude: COMPANY.headquarters.coords.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "Place", name: "Africa" },
    { "@type": "Place", name: "Middle East" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: COMPANY.phone,
      email: COMPANY.email,
      areaServed: ["Africa", "Middle East"],
      availableLanguage: ["en", "fr", "ar"],
    },
    {
      "@type": "ContactPoint",
      contactType: "technical support",
      telephone: COMPANY.phone,
      email: COMPANY.email,
      areaServed: ["Africa", "Middle East"],
      availableLanguage: ["en", "fr", "ar"],
    },
  ],
  knowsAbout: [
    "Medical imaging equipment",
    "Cath lab systems",
    "MRI scanners",
    "CT scanners",
    "PET/CT scanners",
    "C-arm systems",
    "X-ray systems",
    "Mammography systems",
    "Bone densitometry (DEXA)",
    "Lithotripsy (ESWL)",
    "Drug-eluting stents",
    "Biomedical engineering",
    "Medical equipment installation and commissioning",
    "Clinical applications training",
    "Preventive maintenance and after-sales service",
    "Turnkey hospital department delivery",
  ],
  description: COPY.longDescription,
} as const;

/**
 * WebSite entity + SearchAction. The site search is the product catalog
 * browser at /products, which reads the `q` query parameter.
 */
export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${COMPANY.website}/#website`,
  url: COMPANY.website,
  name: COMPANY.shortName,
  alternateName: COMPANY.legalName,
  description: COPY.shortDescription,
  inLanguage: "en",
  publisher: { "@id": `${COMPANY.website}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${COMPANY.website}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
} as const;


/** Person schema for the founder. Referenced from /about via JSON-LD. */
export const FOUNDER_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: COMPANY.founder,
  jobTitle: "Founder",
  worksFor: { "@id": `${COMPANY.website}/#organization` },
  nationality: { "@type": "Country", name: "Jordan" },
} as const;

/** Utility — Schema.org FAQPage block. */
export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

/** Utility — Schema.org ItemList block for category / product listings. */
export function itemListJsonLd(items: { name: string; url: string }[], listName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(listName ? { name: listName } : {}),
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  };
}

/** Utility — Schema.org Service block for one offered service. */
export function serviceJsonLd(input: {
  name: string;
  description: string;
  url?: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    ...(input.url ? { url: input.url } : {}),
    ...(input.serviceType ? { serviceType: input.serviceType } : {}),
    provider: { "@id": `${COMPANY.website}/#organization` },
    areaServed: [
      { "@type": "Place", name: "Africa" },
      { "@type": "Place", name: "Middle East" },
    ],
  };
}
