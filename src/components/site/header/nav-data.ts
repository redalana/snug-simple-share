import type { ComponentType, SVGProps } from "react";
import {
  Facebook,
  Linkedin,
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
  { label: "Cath Lab Systems", category: "Cath Lab Systems", seoPath: "/products/cath-lab", Icon: HeartPulse },
  { label: "Drug-Eluting Stents (DES)", category: null, seoPath: "/products/drug-eluting-stents", Icon: Activity },
  { label: "PET/CT Scanners", category: "PET/CT Scanners", seoPath: "/products/pet-ct-scanners", Icon: ScanLine },
  { label: "CT Scanners", category: "CT Scanners", seoPath: "/products/ct-scanners", Icon: Layers3 },
  { label: "MRI Scanners", category: "MRI Scanners", seoPath: "/products/mri-scanners", Icon: Magnet },
  { label: "C-Arm Systems", category: "C-Arms", seoPath: "/products/c-arm-systems", Icon: Aperture },
  { label: "X-Ray Systems", category: "X-Ray Systems", seoPath: "/products/x-ray-systems", Icon: Radiation },
  { label: "Mammography Systems", category: "Mammography", seoPath: "/products/mammography-systems", Icon: CircleDot },
  { label: "Bone Densitometers (DEXA)", category: "Bone Densitometers (DEXA)", seoPath: "/products/bone-densitometers", Icon: Bone },
  { label: "Lithotripsy (ESWL)", category: "Lithotripsy Systems", seoPath: "/products/lithotripsy-eswl", Icon: Waves },
  { label: "Others", category: null, seoPath: "/products/others", Icon: LayoutGrid },
];

export const SOCIALS = [
  { label: "Facebook", href: "#", Icon: Facebook, hover: "hover:text-[#1877F2]" },
  { label: "LinkedIn", href: "#", Icon: Linkedin, hover: "hover:text-[#0A66C2]" },
];

export const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
] as const;

export type BrandItem = {
  name: string;
  sub?: string;
  color: string;
  mark: "dot" | "square" | "ring" | "bars";
  href: string;
};

export const BRAND_ITEMS: BrandItem[] = [
  { name: "Philips", color: "#0B5ED7", mark: "ring", href: "/brands/philips" },
  { name: "Canon Medical", color: "#CC0000", mark: "bars", href: "/brands/canon-medical" },
  { name: "Siemens", sub: "Healthineers", color: "#EC6602", mark: "square", href: "/brands/siemens" },
  { name: "Mindray", color: "#005BAC", mark: "dot", href: "/brands/mindray" },
  { name: "Esaote", color: "#003DA5", mark: "dot", href: "/brands/esaote" },
  { name: "Richard Wolf", color: "#C8102E", mark: "square", href: "/brands/richard-wolf" },
  { name: "Hitachi", color: "#E60027", mark: "square", href: "/brands/hitachi" },
  { name: "GE", sub: "HealthCare", color: "#005EB8", mark: "ring", href: "/brands/ge-healthcare" },
  { name: "Shimadzu", color: "#C8161D", mark: "square", href: "/brands/shimadzu" },
  { name: "Abbott", color: "#008FC7", mark: "dot", href: "/brands/abbott" },
  { name: "Medtronic", color: "#170F5F", mark: "bars", href: "/brands/medtronic" },
  { name: "Boston Scientific", color: "#0072CE", mark: "ring", href: "/brands/boston-scientific" },
];
