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

/** Structured data for Organization / MedicalOrganization schema. */
export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
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
  areaServed: [
    { "@type": "Place", name: "Africa" },
    { "@type": "Place", name: "Middle East" },
  ],
  description: COPY.longDescription,
} as const;
