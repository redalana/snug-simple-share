/**
 * Single source of truth for the brand roster.
 *
 * Consumed by:
 *   - Brands mega dropdown  (src/components/site/header/BrandsMegaDropdown.tsx)
 *   - Trusted Brands strip  (src/components/site/BrandsMarquee.tsx)
 *   - Brands page           (src/routes/brands.tsx)
 *
 * The canonical order defined here is the order shown in every surface.
 */

export type BrandMark = "dot" | "square" | "ring" | "bars";

export type BrandLogo =
  | { kind: "svg"; slug: string } // rendered via cdn.simpleicons.org
  | { kind: "text" }; // fallback wordmark rendered as text

export type BrandEntry = {
  name: string;
  sub?: string;
  color: string; // brand primary color (hex, no leading #)
  mark: BrandMark; // small identity mark for the dropdown
  href: string;
  logo: BrandLogo;
};

export const BRANDS_LIST: BrandEntry[] = [
  {
    name: "Philips",
    color: "#0B5ED7",
    mark: "ring",
    href: "/brands#philips",
    logo: { kind: "text" },
  },
  {
    name: "Siemens",
    sub: "Healthineers",
    color: "#EC6602",
    mark: "square",
    href: "/brands#siemens",
    logo: { kind: "svg", slug: "siemens" },
  },
  {
    name: "GE",
    sub: "HealthCare",
    color: "#005EB8",
    mark: "ring",
    href: "/brands#ge-healthcare",
    logo: { kind: "svg", slug: "generalelectric" },
  },
  {
    name: "Canon Medical",
    color: "#CC0000",
    mark: "bars",
    href: "/brands#canon-medical",
    logo: { kind: "text" },
  },
  {
    name: "Mindray",
    color: "#005BAC",
    mark: "dot",
    href: "/brands#mindray",
    logo: { kind: "text" },
  },
  { name: "Esaote", color: "#003DA5", mark: "dot", href: "/brands#esaote", logo: { kind: "text" } },
  {
    name: "Richard Wolf",
    color: "#C8102E",
    mark: "square",
    href: "/brands#richard-wolf",
    logo: { kind: "text" },
  },
  {
    name: "Hitachi",
    color: "#E60027",
    mark: "square",
    href: "/brands#hitachi",
    logo: { kind: "svg", slug: "hitachi" },
  },
  {
    name: "Shimadzu",
    color: "#C8161D",
    mark: "square",
    href: "/brands#shimadzu",
    logo: { kind: "text" },
  },
  {
    name: "Abbott",
    color: "#008FC7",
    mark: "dot",
    href: "/brands#abbott",
    logo: { kind: "svg", slug: "abbott" },
  },
  {
    name: "Medtronic",
    color: "#170F5F",
    mark: "bars",
    href: "/brands#medtronic",
    logo: { kind: "text" },
  },
  {
    name: "Boston Scientific",
    color: "#0072CE",
    mark: "ring",
    href: "/brands#boston-scientific",
    logo: { kind: "text" },
  },
];

/* -------------------------------------------------------------------------
 * Partner view of the roster (logo artwork + live product counts).
 *
 * Derived from BRANDS_LIST above so every surface — Brands page, header
 * dropdown, homepage Technology Partners marquee — stays in sync. Add or
 * remove a brand in BRANDS_LIST (plus its artwork entry below) and every
 * surface updates automatically.
 * ---------------------------------------------------------------------- */

import { PRODUCTS } from "@/lib/products";

import abbott from "@/assets/brands/abbott.png.asset.json";
import boston from "@/assets/brands/boston-scientific.png.asset.json";
import canon from "@/assets/brands/toshiba-canon.png.asset.json";
import esaote from "@/assets/brands/esaote.png.asset.json";
import ge from "@/assets/brands/ge.png.asset.json";
import hitachi from "@/assets/brands/hitachi.png.asset.json";
import medtronic from "@/assets/brands/medtronic.png.asset.json";
import mindray from "@/assets/brands/mindray.png.asset.json";
import philips from "@/assets/brands/philips.png.asset.json";
import richardWolf from "@/assets/brands/richard-wolf.png.asset.json";
import shimadzu from "@/assets/brands/shimadzu.png.asset.json";
import siemens from "@/assets/brands/siemens.png.asset.json";

/**
 * Per-brand artwork: trimmed PNG wordmark + optically calibrated render
 * height (px) so no single logo dominates. `productKey` links to
 * PRODUCTS[].brand for live counts.
 */
const BRAND_ARTWORK: Record<string, { url: string; h: number; productKey?: string }> = {
  Philips: { url: philips.url, h: 22, productKey: "Philips" },
  Siemens: { url: siemens.url, h: 20, productKey: "Siemens" },
  GE: { url: ge.url, h: 40, productKey: "GE" },
  "Canon Medical": { url: canon.url, h: 22, productKey: "Canon Medical" },
  Mindray: { url: mindray.url, h: 34 },
  Esaote: { url: esaote.url, h: 42 },
  "Richard Wolf": { url: richardWolf.url, h: 36 },
  Hitachi: { url: hitachi.url, h: 24 },
  Shimadzu: { url: shimadzu.url, h: 26 },
  Abbott: { url: abbott.url, h: 34 },
  Medtronic: { url: medtronic.url, h: 40 },
  "Boston Scientific": { url: boston.url, h: 44 },
};

export type BrandPartner = {
  /** Full display name, e.g. "Siemens Healthineers". */
  name: string;
  color: string;
  href: string;
  logoUrl: string;
  /** Calibrated optical render height in px. */
  logoHeight: number;
  /** Live count from the product catalogue; 0 when none are listed. */
  productCount: number;
};

/** Every brand of the roster, with artwork and live product counts. */
export function getBrandPartners(): BrandPartner[] {
  return BRANDS_LIST.filter((b) => BRAND_ARTWORK[b.name]).map((b) => {
    const art = BRAND_ARTWORK[b.name];
    return {
      name: b.sub ? `${b.name} ${b.sub}` : b.name,
      color: b.color,
      href: b.href,
      logoUrl: art.url,
      logoHeight: art.h,
      productCount: art.productKey
        ? PRODUCTS.filter((p) => p.brand === art.productKey).length
        : 0,
    };
  });
}
