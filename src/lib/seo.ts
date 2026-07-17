/**
 * Centralized SEO metadata helpers.
 * Single source of truth for the site URL and per-page open-graph images.
 * Used by route `head()` functions to keep canonical / og:url / og:image
 * consistent and maintainable.
 */
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

export const SITE_URL = "https://snug-simple-share.lovable.app";

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
  blog: absUrl(heroCathlab),
  productsIndex: absUrl(solMri),
  productCategory: {
    "mri-scanners": absUrl(solMri),
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
