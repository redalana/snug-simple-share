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
  | { kind: "svg"; slug: string }  // rendered via cdn.simpleicons.org
  | { kind: "text" };               // fallback wordmark rendered as text

export type BrandEntry = {
  name: string;
  sub?: string;
  color: string;   // brand primary color (hex, no leading #)
  mark: BrandMark; // small identity mark for the dropdown
  href: string;
  logo: BrandLogo;
};

export const BRANDS_LIST: BrandEntry[] = [
  { name: "Philips",           color: "#0B5ED7", mark: "ring",   href: "/brands#philips",            logo: { kind: "text" } },
  { name: "Siemens", sub: "Healthineers", color: "#EC6602", mark: "square", href: "/brands#siemens",  logo: { kind: "svg",  slug: "siemens" } },
  { name: "GE",      sub: "HealthCare",   color: "#005EB8", mark: "ring",   href: "/brands#ge-healthcare", logo: { kind: "svg",  slug: "generalelectric" } },
  { name: "Canon Medical",     color: "#CC0000", mark: "bars",   href: "/brands#canon-medical",      logo: { kind: "text" } },
  { name: "Mindray",           color: "#005BAC", mark: "dot",    href: "/brands#mindray",            logo: { kind: "text" } },
  { name: "Esaote",            color: "#003DA5", mark: "dot",    href: "/brands#esaote",             logo: { kind: "text" } },
  { name: "Richard Wolf",      color: "#C8102E", mark: "square", href: "/brands#richard-wolf",       logo: { kind: "text" } },
  { name: "Hitachi",           color: "#E60027", mark: "square", href: "/brands#hitachi",            logo: { kind: "svg",  slug: "hitachi" } },
  { name: "Shimadzu",          color: "#C8161D", mark: "square", href: "/brands#shimadzu",           logo: { kind: "text" } },
  { name: "Abbott",            color: "#008FC7", mark: "dot",    href: "/brands#abbott",             logo: { kind: "svg",  slug: "abbott" } },
  { name: "Medtronic",         color: "#170F5F", mark: "bars",   href: "/brands#medtronic",          logo: { kind: "text" } },
  { name: "Boston Scientific", color: "#0072CE", mark: "ring",   href: "/brands#boston-scientific",  logo: { kind: "text" } },
];
