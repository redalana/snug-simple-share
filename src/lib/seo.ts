/**
 * Centralized SEO metadata helpers.
 * Single source of truth for the site URL and per-page open-graph images.
 * Used by route `head()` functions to keep canonical / og:url / og:image
 * consistent and maintainable.
 */
import { COMPANY } from "@/config/companyFacts";
import heroCathlab from "@/assets/hero-cathlab.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import abufarhaHq from "@/assets/abufarha-hq.jpg";
import aftersalesHero from "@/assets/aftersales-hero.jpg";
import turnkeyHero from "@/assets/turnkey-hero.jpg";
import strokeBrainHero from "@/assets/stroke-brain-hero.jpg";
import solMri from "@/assets/sol-mri.jpg";
import solPetct from "@/assets/sol-petct.jpg";
import solCarm from "@/assets/sol-carm.jpg";
import solXray from "@/assets/sol-xray.jpg";
import solMammo from "@/assets/sol-mammo.jpg";
import solDexa from "@/assets/sol-dexa.jpg";
import solEswl from "@/assets/sol-eswl.jpg";
import solDes from "@/assets/sol-des.jpg";
import solOr from "@/assets/sol-or.jpg";
import whyCathlab from "@/assets/why-cathlab.jpg";
import clinicalNeuroIcu from "@/assets/clinical-neuro-icu.jpg";
import clinicalRehab from "@/assets/clinical-rehabilitation.jpg";

/**
 * Production site URL. Overridable at build time via VITE_SITE_URL so
 * canonical / og:url / sitemap / JSON-LD all point at the real production
 * domain. Fallback is COMPANY.website (companyFacts.ts) so canonicals,
 * sitemap, robots and JSON-LD share one source.
 */
export const SITE_URL: string =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") || COMPANY.website;

/** Absolute URL helper — pass a relative path or a full URL. */
export function absUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

/** Sitewide default open-graph image (used when a page lacks a hero image). */
export const DEFAULT_OG_IMAGE = absUrl(abufarhaHq);

/**
 * Per-route open-graph images. Keys mirror the route path.
 * Every value is an absolute URL — social crawlers require absolute og:image.
 */
export const OG_IMAGES = {
  home: absUrl(heroCathlab),
  about: absUrl(aboutHero),
  services: absUrl(turnkeyHero),
  afterSales: absUrl(aftersalesHero),
  turnkey: absUrl(turnkeyHero),
  brands: absUrl(abufarhaHq),
  categories: absUrl(solMri),
  projects: absUrl(turnkeyHero),
  contact: absUrl(abufarhaHq),
  hospitalReadiness: absUrl(turnkeyHero),
  strokeCare: absUrl(strokeBrainHero),
  neuroImaging: absUrl(solMri),
  interventionalNeurology: absUrl(whyCathlab),
  neuroIcu: absUrl(clinicalNeuroIcu),
  rehabilitation: absUrl(clinicalRehab),
  blog: absUrl(heroCathlab),
  productsIndex: absUrl(solMri),
  productCategory: {
    "mri-scanners": absUrl(solMri),
    "ct-scanners": absUrl(solPetct),
    "pet-ct-scanners": absUrl(solPetct),
    "cath-lab": absUrl(heroCathlab),
    "c-arm-systems": absUrl(solCarm),
    "x-ray-systems": absUrl(solXray),
    "mammography-systems": absUrl(solMammo),
    "bone-densitometers": absUrl(solDexa),
    "lithotripsy-eswl": absUrl(solEswl),
    "drug-eluting-stents": absUrl(solDes),
    others: absUrl(solOr),
  },
} as const;

/**
 * Normalize a human-readable date string ("May 20, 2026") to an ISO-8601
 * date ("2026-05-20"). Returns undefined when the input cannot be parsed —
 * never guesses a date.
 */
export function isoDate(value?: string): string | undefined {
  if (!value) return undefined;
  const t = Date.parse(value);
  return Number.isFinite(t) ? new Date(t).toISOString().slice(0, 10) : undefined;
}

/** Schema.org BreadcrumbList with absolute `item` URLs. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

/**
 * Serialise JSON-LD for a <script type="application/ld+json"> body.
 * Escapes <, >, & and line separators so text taken from URLs or data can
 * never close the script tag or inject markup.
 */
export function safeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
