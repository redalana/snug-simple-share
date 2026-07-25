import type { ComponentType, SVGProps } from "react";
import {
  Facebook,
  HeartPulse,
  Activity,
  ScanLine,
  Magnet,
  Aperture,
  Radiation,
  CircleDot,
  Bone,
  Waves,
  LayoutGrid,
  Layers3,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "All Products", href: "/products", dropdown: [] },
  { label: "Services", href: "/services" },
  { label: "Turnkey", href: "/turnkey" },
  { label: "After Sales", href: "/after-sales" },
  {
    label: "Brands",
    href: "/brands",
    dropdown: [{ label: "All Brands", href: "/brands" }],
  },
  { label: "About Us", href: "/about" },

  { label: "Knowledge Center", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export type ProductCategory = {
  label: string;
  /** Full category name used by the PortfolioBrowser filter (matches PRIMARY_CATEGORIES). */
  category: string | null;
  /** SEO landing page path (kept for direct URL / search-engine access). */
  seoPath: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    label: "Cath Lab Systems",
    category: "Cath Lab Systems",
    seoPath: "/products/cath-lab",
    Icon: HeartPulse,
  },
  {
    label: "Drug-Eluting Stents (DES)",
    category: null,
    seoPath: "/products/drug-eluting-stents",
    Icon: Activity,
  },
  {
    label: "PET/CT Scanners",
    category: "PET/CT Scanners",
    seoPath: "/products/pet-ct-scanners",
    Icon: ScanLine,
  },
  {
    label: "CT Scanners",
    category: "CT Scanners",
    seoPath: "/products/ct-scanners",
    Icon: Layers3,
  },
  {
    label: "MRI Scanners",
    category: "MRI Scanners",
    seoPath: "/products/mri-scanners",
    Icon: Magnet,
  },
  {
    label: "C-Arm Systems",
    category: "C-Arms",
    seoPath: "/products/c-arm-systems",
    Icon: Aperture,
  },
  {
    label: "X-Ray Systems",
    category: "X-Ray Systems",
    seoPath: "/products/x-ray-systems",
    Icon: Radiation,
  },
  {
    label: "Mammography Systems",
    category: "Mammography",
    seoPath: "/products/mammography-systems",
    Icon: CircleDot,
  },
  {
    label: "Bone Densitometers (DEXA)",
    category: "Bone Densitometers (DEXA)",
    seoPath: "/products/bone-densitometers",
    Icon: Bone,
  },
  {
    label: "Lithotripsy (ESWL)",
    category: "Lithotripsy Systems",
    seoPath: "/products/lithotripsy-eswl",
    Icon: Waves,
  },
  { label: "Others", category: null, seoPath: "/products/others", Icon: LayoutGrid },
];

// Official social profiles. Add entries here once real URLs exist — the
// header/mobile menu iterates this array, so leaving it empty simply hides
// the group (no `href="#"` placeholders reach production).
export const SOCIALS: {
  label: string;
  href: string;
  Icon: typeof Facebook;
  hover: string;
}[] = [];

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
] as const;

// Brand roster lives in a single source of truth: src/lib/brands-data.ts
