import heroCathlab from "@/assets/hero-cathlab.jpg";
import solMri from "@/assets/sol-mri.jpg";
import solCt from "@/assets/sol-ct.jpg";
import solPetct from "@/assets/sol-petct.jpg";
import solMammo from "@/assets/sol-mammo.jpg";
import solCarm from "@/assets/sol-carm.jpg";
import solXray from "@/assets/sol-xray.jpg";
import beyondCathlab from "@/assets/beyond-cathlab.jpg";
import whyCathlab from "@/assets/why-cathlab.jpg";
import solDes from "@/assets/sol-des.jpg";

/**
 * Single source of truth for the AbuFarha Medical product catalog.
 *
 * Both the Medical Systems browser and the dynamic Product Details page read
 * from this module — product information is never duplicated. All derived data
 * (categories, manufacturers, filter counts, related systems, detail specs) is
 * computed from this array.
 */

// STRICT category taxonomy — the exact set of categories that exist in the
// AbuFarha Medical database.
export const PRIMARY_CATEGORIES = [
  "Cath Lab Systems",
  "MRI Scanners",
  "CT Scanners",
  "PET/CT Scanners",
  "C-Arms",
  "X-Ray Systems",
  "Mammography",
  "Ultrasound",
  "Women's Healthcare",
  "Operating Room",
  "Bone Densitometers (DEXA)",
  "Lithotripsy Systems",
] as const;

// STRICT manufacturer roster.
export const ALL_MANUFACTURERS = [
  "Philips",
  "Toshiba - Canon",
  "Siemens",
  "Mindray",
  "eSaote",
  "Richard Wolf",
  "Hitachi",
  "GE",
  "Shimadzu",
  "Abbott",
  "Medtronic",
  "Boston Scientific",
] as const;

export type Product = {
  name: string;
  brand: string;
  category: string;
  image: string;
  /** Additional gallery angles shown as thumbnails on the detail page. */
  gallery?: string[];
  specs: [string, string];
  /** Professional condition label — never a stock/inventory status. */
  status: "Certified Refurbished" | "Brand New" | "Factory Certified";
  warranty: string;
  installation: boolean;
  training: boolean;
  /** Country of manufacture. */
  country: string;
  /** Manufacturing / production year. */
  year: number;
  /** Physical installation type. */
  systemType: string;
  /** Service & support capabilities offered with the system. */
  services: string[];
  /** Clinical specialties the system serves. */
  specialty: string[];
  /** Extra searchable terms: technology + clinical keywords. */
  keywords: string;
  /** Monotonic order used for "Newest" / "Recently Added" sorting. */
  addedOrder: number;
  /** Short marketing subtitle shown under the product name on the detail page. */
  subtitle: string;
  /** Model identifier for the Quick Facts card. */
  model: string;
  /** Six most important technical highlights for the System Snapshot. */
  snapshot: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  {
    name: "Philips Achieva 1.5T MRI",
    brand: "Philips",
    category: "MRI Scanners",
    image: solMri,
    gallery: [solMri, solCt, solPetct],
    specs: ["1.5 Tesla", "Whole Body"],
    status: "Certified Refurbished",
    warranty: "1-Year Warranty",
    installation: true,
    training: true,
    country: "Netherlands",
    year: 2019,
    systemType: "Fixed",
    services: [
      "Installation Available",
      "Commissioning Available",
      "Clinical Training",
      "Preventive Maintenance",
      "Spare Parts Available",
      "Remote Support",
      "Technical Support",
      "Warranty Included",
    ],
    specialty: ["Radiology", "Neurology", "Oncology"],
    keywords: "neuro stroke oncology imaging magnetic resonance diagnostic",
    addedOrder: 6,
    subtitle: "Whole-Body 1.5T MRI System",
    model: "Achieva 1.5T",
    snapshot: [
      { label: "Field Strength", value: "1.5 Tesla" },
      { label: "Bore Size", value: "60 cm" },
      { label: "Coverage", value: "Whole Body" },
      { label: "Gradient", value: "33 mT/m" },
      { label: "Cooling", value: "Helium" },
      { label: "Year", value: "2019" },
    ],
  },
  {
    name: "Philips Allura Xper FD20",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: heroCathlab,
    gallery: [heroCathlab, whyCathlab, beyondCathlab],
    specs: ["Biplane", "Interventional"],
    status: "Certified Refurbished",
    warranty: "1-Year Warranty",
    installation: true,
    training: true,
    country: "Netherlands",
    year: 2018,
    systemType: "Ceiling Mounted",
    services: [
      "Installation Available",
      "Commissioning Available",
      "Clinical Training",
      "Preventive Maintenance",
      "Technical Support",
      "Warranty Included",
    ],
    specialty: ["Cardiology", "Radiology"],
    keywords: "cardiology interventional angiography neurovascular catheterization",
    addedOrder: 8,
    subtitle: "Biplane Cath Lab System",
    model: "Allura Xper FD20",
    snapshot: [
      { label: "Technology", value: "Biplane" },
      { label: "Detector Type", value: "Flat Panel" },
      { label: "Detector Size", value: "30 x 40 cm" },
      { label: "Generator Power", value: "80 kW" },
      { label: "Tube Voltage", value: "40 – 125 kV" },
      { label: "Year", value: "2018" },
    ],
  },
  {
    name: "Siemens SOMATOM Definition",
    brand: "Siemens",
    category: "CT Scanners",
    image: solCt,
    gallery: [solCt, solPetct, solMri],
    specs: ["128 Slice", "Dual Source"],
    status: "Certified Refurbished",
    warranty: "1-Year Warranty",
    installation: true,
    training: true,
    country: "Germany",
    year: 2020,
    systemType: "Fixed",
    services: [
      "Installation Available",
      "Commissioning Available",
      "Clinical Training",
      "Preventive Maintenance",
      "Spare Parts Available",
      "Technical Support",
      "Warranty Included",
    ],
    specialty: ["Radiology", "Oncology", "Cardiology"],
    keywords: "computed tomography stroke cardiac oncology imaging diagnostic",
    addedOrder: 5,
    subtitle: "128-Slice Dual Source CT Scanner",
    model: "SOMATOM Definition",
    snapshot: [
      { label: "Slices", value: "128 Slice" },
      { label: "Source", value: "Dual Source" },
      { label: "Rotation", value: "0.30 s" },
      { label: "Detector", value: "Adaptive" },
      { label: "Tube Voltage", value: "70 – 140 kV" },
      { label: "Year", value: "2020" },
    ],
  },
  {
    name: "GE Discovery MI PET/CT",
    brand: "GE",
    category: "PET/CT Scanners",
    image: solPetct,
    gallery: [solPetct, solCt, solMri],
    specs: ["16 Slice", "Digital PET"],
    status: "Factory Certified",
    warranty: "1-Year Warranty",
    installation: true,
    training: true,
    country: "USA",
    year: 2021,
    systemType: "Fixed",
    services: [
      "Installation Available",
      "Commissioning Available",
      "Clinical Training",
      "Preventive Maintenance",
      "Remote Support",
      "Technical Support",
      "Warranty Included",
    ],
    specialty: ["Oncology", "Radiology"],
    keywords: "pet oncology nuclear molecular imaging cancer diagnostic",
    addedOrder: 7,
    subtitle: "Digital PET/CT Molecular Imaging System",
    model: "Discovery MI",
    snapshot: [
      { label: "PET Detector", value: "Digital SiPM" },
      { label: "CT Slices", value: "16 Slice" },
      { label: "Axial FOV", value: "20 cm" },
      { label: "Time of Flight", value: "Yes" },
      { label: "Bore Size", value: "70 cm" },
      { label: "Year", value: "2021" },
    ],
  },
  {
    name: "Siemens Mammomat Revelation",
    brand: "Siemens",
    category: "Mammography",
    image: solMammo,
    gallery: [solMammo, solXray, solCarm],
    specs: ["3D Tomosynthesis", "50µm"],
    status: "Brand New",
    warranty: "2-Year Warranty",
    installation: true,
    training: true,
    country: "Germany",
    year: 2022,
    systemType: "Floor Mounted",
    services: [
      "Installation Available",
      "Commissioning Available",
      "Clinical Training",
      "Preventive Maintenance",
      "Spare Parts Available",
      "Remote Support",
      "Technical Support",
      "Warranty Included",
    ],
    specialty: ["Women's Health", "Radiology", "Oncology"],
    keywords: "women health breast screening tomosynthesis mammography diagnostic",
    addedOrder: 4,
    subtitle: "3D Tomosynthesis Mammography System",
    model: "Mammomat Revelation",
    snapshot: [
      { label: "Technology", value: "3D Tomosynthesis" },
      { label: "Detector", value: "Direct a-Se" },
      { label: "Pixel Size", value: "50 µm" },
      { label: "Angle", value: "50°" },
      { label: "Biopsy", value: "Integrated" },
      { label: "Year", value: "2022" },
    ],
  },
  {
    name: "Philips Zenition 70 C-Arm",
    brand: "Philips",
    category: "C-Arms",
    image: solCarm,
    gallery: [solCarm, solXray, solMammo],
    specs: ["Mobile", "Flat Detector"],
    status: "Brand New",
    warranty: "2-Year Warranty",
    installation: true,
    training: true,
    country: "Netherlands",
    year: 2023,
    systemType: "Mobile",
    services: [
      "Installation Available",
      "Clinical Training",
      "Preventive Maintenance",
      "Technical Support",
      "Warranty Included",
    ],
    specialty: ["Radiology", "Orthopedics"],
    keywords: "surgical mobile fluoroscopy orthopedic interventional operating room",
    addedOrder: 3,
    subtitle: "Mobile Flat Detector C-Arm",
    model: "Zenition 70",
    snapshot: [
      { label: "Type", value: "Mobile C-Arm" },
      { label: "Detector Type", value: "Flat Detector" },
      { label: "Detector Size", value: "30 x 30 cm" },
      { label: "Generator", value: "20 kW" },
      { label: "Tube Voltage", value: "40 – 120 kV" },
      { label: "Year", value: "2023" },
    ],
  },
  {
    name: "Canon Radrex Digital X-Ray",
    brand: "Toshiba - Canon",
    category: "X-Ray Systems",
    image: solXray,
    gallery: [solXray, solCarm, solMammo],
    specs: ["Digital", "Ceiling-Mounted"],
    status: "Factory Certified",
    warranty: "1-Year Warranty",
    installation: true,
    training: true,
    country: "Japan",
    year: 2022,
    systemType: "Ceiling Mounted",
    services: [
      "Installation Available",
      "Commissioning Available",
      "Clinical Training",
      "Spare Parts Available",
      "Technical Support",
      "Warranty Included",
    ],
    specialty: ["Radiology"],
    keywords: "radiography digital imaging chest bone diagnostic",
    addedOrder: 2,
    subtitle: "Digital Ceiling-Mounted X-Ray System",
    model: "Radrex",
    snapshot: [
      { label: "Technology", value: "Digital DR" },
      { label: "Detector Type", value: "Flat Panel" },
      { label: "Detector Size", value: "43 x 43 cm" },
      { label: "Generator Power", value: "65 kW" },
      { label: "Tube Voltage", value: "40 – 150 kV" },
      { label: "Year", value: "2022" },
    ],
  },
  {
    name: "GE Innova IGS 530 Cath Lab",
    brand: "GE",
    category: "Cath Lab Systems",
    image: beyondCathlab,
    gallery: [beyondCathlab, heroCathlab, whyCathlab],
    specs: ["Single Plane", "Cardiac"],
    status: "Certified Refurbished",
    warranty: "1-Year Warranty",
    installation: true,
    training: true,
    country: "USA",
    year: 2020,
    systemType: "Fixed",
    services: [
      "Installation Available",
      "Commissioning Available",
      "Clinical Training",
      "Preventive Maintenance",
      "Remote Support",
      "Technical Support",
      "Warranty Included",
    ],
    specialty: ["Cardiology", "Radiology"],
    keywords: "cardiology cardiac interventional angiography catheterization",
    addedOrder: 1,
    subtitle: "Single Plane Cardiac Cath Lab System",
    model: "Innova IGS 530",
    snapshot: [
      { label: "Technology", value: "Single Plane" },
      { label: "Detector Type", value: "Flat Panel" },
      { label: "Detector Size", value: "30 x 30 cm" },
      { label: "Generator Power", value: "100 kW" },
      { label: "Tube Voltage", value: "40 – 125 kV" },
      { label: "Year", value: "2020" },
    ],
  },
];

/** URL-safe slug from a product name, e.g. "Philips Allura Xper FD20" -> "philips-allura-xper-fd20". */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function productSlug(product: Product): string {
  return slugify(product.name);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => slugify(p.name) === slug);
}

/** Previous / next product for detail-page navigation (wraps around). */
export function getAdjacentProducts(slug: string): {
  prev: Product;
  next: Product;
} | null {
  const idx = PRODUCTS.findIndex((p) => slugify(p.name) === slug);
  if (idx === -1) return null;
  const prev = PRODUCTS[(idx - 1 + PRODUCTS.length) % PRODUCTS.length];
  const next = PRODUCTS[(idx + 1) % PRODUCTS.length];
  return { prev, next };
}

/** Related systems: same category first, then same manufacturer, max `limit`. */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const others = PRODUCTS.filter((p) => p.name !== product.name);
  const sameCategory = others.filter((p) => p.category === product.category);
  const sameBrand = others.filter(
    (p) => p.category !== product.category && p.brand === product.brand,
  );
  const rest = others.filter(
    (p) => p.category !== product.category && p.brand !== product.brand,
  );
  return [...sameCategory, ...sameBrand, ...rest].slice(0, limit);
}
