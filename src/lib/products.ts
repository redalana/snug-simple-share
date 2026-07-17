/**
 * Single source of truth for the AbuFarha Medical product catalog.
 *
 * Data migrated from the live AbuFarha catalog (abufarhamedical.com/en/products).
 * Technical specifications are preserved verbatim from the source; fields that
 * are not published on the source (warranty, install/training availability,
 * services) are left empty rather than invented.
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
  "Canon Medical",
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

export type ProductBrochure = { filename: string; url: string };

export type Product = {
  name: string;
  /** URL slug — preserved from the source catalog so historical links keep working. */
  slug: string;
  brand: string;
  category: string;
  image: string;
  /** Additional gallery angles shown as thumbnails on the detail page. */
  gallery?: string[];
  specs: [string, string];
  /** Professional condition label. */
  status: "Certified Refurbished" | "Brand New" | "Factory Certified" | "Used";
  /** True when the source catalog marks the unit as sold. */
  sold?: boolean;
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
  /** Up to six technical highlights parsed from the source specification list. */
  snapshot: { label: string; value: string }[];
  /** Plain-text long description migrated from the source catalog. */
  description?: string;
  /** Brochures / PDFs published for this product on the source catalog. */
  brochures?: ProductBrochure[];
  /** SEO overrides migrated from the source. */
  seoTitle?: string;
  seoDescription?: string;
  /** Alt text for the primary image, migrated from the source. */
  imageAlt?: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Siemens Mammomat Inspiration Mammography",
    slug: "siemens-mammomat-inspiration-mammography",
    brand: "Siemens",
    category: "Mammography",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-mammomat-inspiration-mammography-3b181062.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-mammomat-inspiration-mammography-3b181062.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-mammomat-inspiration-mammography-54c7e056.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-mammomat-inspiration-mammography-f7958399.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-mammomat-inspiration-mammography-cb7a9707.jpg"
    ],
    specs: [
      "Mammography",
      "YOM 2013"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Germany",
    year: 2013,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Women's Health",
      "Radiology",
      "Oncology"
    ],
    keywords: "mammography siemens used women's health radiology oncology",
    addedOrder: 23,
    subtitle: "Used 2013 Mammography",
    model: "Siemens Mammomat Inspiration",
    snapshot: [
      {
        label: "System Model",
        value: "Siemens Mammomat Inspiration"
      },
      {
        label: "Date of Manufacture (DOM)",
        value: "2013"
      },
      {
        label: "Tube",
        value: "2020"
      },
      {
        label: "Software",
        value: "WH AWS/ syngo VE33A SL75P85 VB41B (VX18B13P13)"
      },
      {
        label: "Upgrade",
        value: "New Host PC (2022)"
      }
    ],
    description: "The Siemens Mammomat Inspiration (DOM 2013) is a digital mammography system featuring a 2020 tube replacement. Operating on software version WH AWS/ syngo VE33A SL75P85 VB41B (VX18B13P13), this system includes a new Host PC upgrade installed in 2022. System Model: Siemens Mammomat Inspiration Date of Manufacture (DOM): 2013 Tube: 2020 Software: WH AWS/ syngo VE33A SL75P85 VB41B (VX18B13P13) Upgrade: New Host PC (2022)",
    brochures: [],
    seoTitle: "Siemens Mammomat Inspiration Mammography System | Pre-Owned",
    seoDescription: "Pre-owned Siemens Mammomat Inspiration mammography system. Includes 2020 tube and 2022 Host PC upgrade. High-quality breast imaging equipment. Request a quote!",
    imageAlt: "Siemens Mammomat Inspiration digital mammography system with 2022 Host PC upgrade and 2020 tube for breast cancer screening"
  },
  {
    name: "Philips Gemini GXL 16 PET/CT Scanner",
    slug: "philips-gemini-gxl-16-pet-ct-scanner",
    brand: "Philips",
    category: "PET/CT Scanners",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-gemini-gxl-16-pet-ct-scanner-9327e8f7.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-gemini-gxl-16-pet-ct-scanner-9327e8f7.jpg"
    ],
    specs: [
      "PET/CT Scanners",
      "YOM 2008"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2008,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Oncology",
      "Radiology"
    ],
    keywords: "pet/ct scanners philips used oncology radiology",
    addedOrder: 22,
    subtitle: "Used 2008 PET/CT Scanners",
    model: "Gemini 16 GXL",
    snapshot: [
      {
        label: "Modality",
        value: "PET/CT"
      },
      {
        label: "System Model",
        value: "Gemini 16 GXL"
      },
      {
        label: "Date of Manufacture (DOM)",
        value: "2008"
      },
      {
        label: "Tube Model",
        value: "MRC (DOM 2008)"
      },
      {
        label: "Tube Usage",
        value: "187,304 exposure counts; 124 h total scan time"
      },
      {
        label: "Software",
        value: "PET/CT Software Release 3.3 (2004); EBW Nextstar (2009)"
      }
    ],
    description: "The Philips PET/CT Gemini GXL 16 (DOM 2008) is a high-performance imaging system for PET/CT modality. It features an MRC X-ray tube (DOM 2008) with 187,304 exposure counts and operates on PET/CT Software Release 3.3. Modality: PET/CT System Model: Gemini 16 GXL Date of Manufacture (DOM): 2008 Tube Model: MRC (DOM 2008) Tube Usage: 187,304 exposure counts; 124 h total scan time Software: PET/CT Software Release 3.3 (2004); EBW Nextstar (2009) Generator: Brilliance V:480 Hz:50/60 Phase:3 Patient Support: Gemini PET/CT Options: Respiratory triggering system, radiotherapy table, SUV, CT, Alignment, and Water Phantoms.",
    brochures: [],
    seoTitle: "Philips Gemini GXL 16 PET/CT Scanner | PET-CT Systems",
    seoDescription: "Pre-owned Philips Gemini GXL 16 PET/CT scanner. Features MRC tube, Release 3.3 software, and respiratory triggering. Advanced PET-CT imaging. Request a quote!",
    imageAlt: "Philips Gemini GXL 16 PET/CT scanner system with patient support and respiratory triggering for oncology imaging"
  },
  {
    name: "Toshiba Aquilion 64 Slices CT Scanner",
    slug: "toshiba-aquilion-64-slices-ct-scanner",
    brand: "Canon Medical",
    category: "CT Scanners",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-aquilion-64-slices-ct-scanner-a4a38968.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-aquilion-64-slices-ct-scanner-a4a38968.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-aquilion-64-slices-ct-scanner-1e5f6ed6.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-aquilion-64-slices-ct-scanner-b46c2b12.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-aquilion-64-slices-ct-scanner-e6cbc1e4.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-aquilion-64-slices-ct-scanner-c67c9d20.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-aquilion-64-slices-ct-scanner-d98c4e21.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-aquilion-64-slices-ct-scanner-b4ee4db0.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-aquilion-64-slices-ct-scanner-d9db5173.jpg"
    ],
    specs: [
      "CT Scanners",
      "YOM 2009"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Japan",
    year: 2009,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Oncology",
      "Radiology"
    ],
    keywords: "pet/ct scanners canon medical used oncology radiology",
    addedOrder: 21,
    subtitle: "Used 2009 PET/CT Scanners",
    model: "Toshiba Aquilion 64 Slices",
    snapshot: [
      {
        label: "System Model",
        value: "Toshiba Aquilion 64 Slices"
      },
      {
        label: "Date of Manufacture (DOM)",
        value: "2009"
      },
      {
        label: "Software Version",
        value: "BASE V6.10*R001, Aquilion64 V3.35JR007"
      },
      {
        label: "Tube",
        value: "15,000 sec. / 20,584 count (Since 2022, DOM 2021)"
      },
      {
        label: "System Usage",
        value: "1,178,600.4 sec. / 1,273,606 count"
      },
      {
        label: "Gantry",
        value: "CGGT-021A, HV: CXXG-012A (Up-grade: CXGS-012A)"
      }
    ],
    description: "The Toshiba Aquilion 64 Slices CT Scanner (DOM 2009) is a complete diagnostic imaging system. This configuration operates on version BASE V6.10*R001 and Aquilion64 V3.35JR007, featuring a 2021 tube installed in 2022 with 15,000 sec. / 20,584 count. System Model: Toshiba Aquilion 64 Slices Date of Manufacture (DOM): 2009 Software Version: BASE V6.10*R001, Aquilion64 V3.35JR007 Tube: 15,000 sec. / 20,584 count (Since 2022, DOM 2021) System Usage: 1,178,600.4 sec. / 1,273,606 count Gantry: CGGT-021A, HV: CXXG-012A (Up-grade: CXGS-012A) Patient Couch: CBTB-019A Console: Included ECG Monitor: NihonKoden, BSM-2400 Injector: Nemoto, ceiling, dual",
    brochures: [],
    seoTitle: "Toshiba Aquilion 64 Slices CT Scanner | Medical Imaging",
    seoDescription: "Pre-owned Toshiba Aquilion 64 slices CT scanner. Includes 2021 tube, dual Nemoto injector, and ECG monitor. High-resolution diagnostic imaging. Get a quote!",
    imageAlt: "Toshiba Aquilion 64 slices CT scanner system with patient couch and Nemoto dual injector for diagnostic imaging"
  },
  {
    name: "Toshiba Infinix INFX-8000C Cath Lab",
    slug: "toshiba-infinix-infx-8000c-cath-lab",
    brand: "Canon Medical",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-infinix-infx-8000c-cath-lab-c864c2dd.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-infinix-infx-8000c-cath-lab-c864c2dd.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-infinix-infx-8000c-cath-lab-364bd9db.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-infinix-infx-8000c-cath-lab-11d6598c.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-infinix-infx-8000c-cath-lab-2f3d766b.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-infinix-infx-8000c-cath-lab-b1a02c5c.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-infinix-infx-8000c-cath-lab-9b717519.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-infinix-infx-8000c-cath-lab-d544baa7.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/toshiba-infinix-infx-8000c-cath-lab-55bda3af.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2013"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Japan",
    year: 2013,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems canon medical used cardiology radiology",
    addedOrder: 20,
    subtitle: "Used 2013 Cath Lab Systems",
    model: "Toshiba Infinix INFX-8000C",
    snapshot: [
      {
        label: "System Model",
        value: "Toshiba Infinix INFX-8000C"
      },
      {
        label: "System Configuration",
        value: "Monoplane"
      },
      {
        label: "Date of Manufacture (DOM)",
        value: "2013"
      },
      {
        label: "Display",
        value: "Large display 56”"
      }
    ],
    description: "The Toshiba Infinix INFX-8000C (DOM 2013) is a monoplane cath lab system. This monoplane configuration features a large display 56”. System Model: Toshiba Infinix INFX-8000C System Configuration: Monoplane Date of Manufacture (DOM): 2013 Display: Large display 56”",
    brochures: [],
    seoTitle: "Toshiba Infinix INFX-8000C Monoplane Cath Lab | Pre-Owned",
    seoDescription: "Pre-owned Toshiba Infinix INFX-8000C monoplane cath lab system. Features a large 56-inch display and high-resolution imaging. Request a quote today!",
    imageAlt: "Toshiba Infinix INFX-8000C monoplane cath lab system featuring a large 56 inch high resolution clinical display monitor"
  },
  {
    name: "Siemens Axiom Artis dTA Cath Lab",
    slug: "siemens-axiom-artis-dta-cath-lab",
    brand: "Siemens",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dta-cath-lab-f2fd68d1.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dta-cath-lab-f2fd68d1.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dta-cath-lab-b2666d66.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dta-cath-lab-ca96faa4.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dta-cath-lab-a1e845bc.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dta-cath-lab-1299d0a7.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dta-cath-lab-38aab98f.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dta-cath-lab-fa7d7383.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dta-cath-lab-5c6b5c62.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2007"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Germany",
    year: 2007,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems siemens used cardiology radiology",
    addedOrder: 19,
    subtitle: "Used 2007 Cath Lab Systems",
    model: "Siemens Axiom Artis dTA",
    snapshot: [
      {
        label: "System Model",
        value: "Siemens Axiom Artis dTA"
      },
      {
        label: "System Configuration",
        value: "Monoplane"
      },
      {
        label: "Date of Manufacture (DOM)",
        value: "2007"
      },
      {
        label: "Tube",
        value: "2020"
      }
    ],
    description: "The Siemens Axiom Artis dTA (DOM 2007) is a Monoplane system. This Monoplane configuration features a 2020 tube. System Model: Siemens Axiom Artis dTA System Configuration:  Monoplane Date of Manufacture (DOM): 2007 Tube: 2020",
    brochures: [],
    seoTitle: "Siemens Axiom Artis dTA Monoplane Cath Lab | Pre-Owned",
    seoDescription: "Pre-owned Siemens Axiom Artis dTA monoplane cath lab system. This reliable medical imaging equipment features a 2020 tube. Request a quote today!",
    imageAlt: "Pre-owned Siemens Axiom Artis dTA monoplane cath lab system featuring a 2020 tube for medical imaging"
  },
  {
    name: "Siemens Axiom Artis Cath Lab",
    slug: "siemens-axiom-artis-cath-lab",
    brand: "Siemens",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-cath-lab-25a90511.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-cath-lab-25a90511.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-cath-lab-40013802.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-cath-lab-04c5f351.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-cath-lab-4e4c8c9a.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-cath-lab-59655a56.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-cath-lab-092c572a.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-cath-lab-8298294b.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-cath-lab-e548b745.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2005"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Germany",
    year: 2005,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems siemens used cardiology radiology",
    addedOrder: 18,
    subtitle: "Used 2005 Cath Lab Systems",
    model: "Siemens Axiom Artis",
    snapshot: [
      {
        label: "System Model",
        value: "Siemens Axiom Artis"
      },
      {
        label: "System Configuration",
        value: "Monoplane"
      },
      {
        label: "Date of Manufacture (DOM)",
        value: "2005"
      },
      {
        label: "Tube",
        value: "2020"
      },
      {
        label: "Software",
        value: "VB35E"
      }
    ],
    description: "The Siemens Axiom Artis (DOM 2005) is a monoplane system. Operating on Software VB35E, this monoplane configuration features a 2020 tube. System Model: Siemens Axiom Artis System Configuration: Monoplane Date of Manufacture (DOM): 2005 Tube: 2020 Software: VB35E",
    brochures: [],
    seoTitle: "Siemens Axiom Artis Monoplane Cath Lab | Pre-Owned",
    seoDescription: "Pre-owned Siemens Axiom Artis monoplane cath lab system. Equipped with Software VB35E and a 2020 tube. High-quality imaging equipment. Request a quote today!",
    imageAlt: "Pre-owned Siemens Axiom Artis monoplane cath lab system equipped with Software VB35E and 2020 tube for medical imaging"
  },
  {
    name: "Siemens Axiom Artis dFC Monoplane Cath Lab",
    slug: "siemens-axiom-artis-dfc-monoplane-cath-lab",
    brand: "Siemens",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dfc-monoplane-cath-lab-3a42bb72.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dfc-monoplane-cath-lab-3a42bb72.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dfc-monoplane-cath-lab-377f201d.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dfc-monoplane-cath-lab-59c1e63b.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dfc-monoplane-cath-lab-704107ef.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dfc-monoplane-cath-lab-f13bb38b.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dfc-monoplane-cath-lab-3e9d47cb.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/siemens-axiom-artis-dfc-monoplane-cath-lab-e19a87f1.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2008"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Germany",
    year: 2008,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems siemens used cardiology radiology",
    addedOrder: 17,
    subtitle: "Used 2008 Cath Lab Systems",
    model: "SIEMENS Axiom Artis dFC",
    snapshot: [
      {
        label: "System Model",
        value: "SIEMENS Axiom Artis dFC"
      },
      {
        label: "System Configuration",
        value: "Monoplane"
      },
      {
        label: "Date of Manufacture (DOM)",
        value: "2008"
      },
      {
        label: "System Scope",
        value: "Complete System"
      },
      {
        label: "Tube",
        value: "2018"
      },
      {
        label: "Detector",
        value: "Flat Panel Detector"
      }
    ],
    description: "The SIEMENS Axiom Artis dFC (DOM 2008) is a complete monoplane cath lab system. This monoplane configuration features a 2018 tube, a flat panel detector, and flat monitors. System Model: SIEMENS Axiom Artis dFC System Configuration: Monoplane Date of Manufacture (DOM): 2008 System Scope: Complete System Tube: 2018 Detector: Flat Panel Detector Display: Flat Monitors",
    brochures: [],
    seoTitle: "Siemens Axiom Artis dFC Monoplane Cath Lab | Pre-Owned",
    seoDescription: "Pre-owned Siemens Axiom Artis dFC complete monoplane cath lab system. Features a flat panel detector, flat monitors, and a 2018 tube. Request a quote!",
    imageAlt: "Siemens Axiom Artis dFC complete monoplane cath lab system equipped with flat panel detector and flat monitors"
  },
  {
    name: "Philips Allura Xper FD20 Monoplane Cath Lab",
    slug: "philips-allura-xper-fd20-monoplane-cath-lab-3",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-af40a9b5.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-af40a9b5.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-a962ca30.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-89d0c44a.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-ab6d3e19.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-5c1e2b0d.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-aa1d6cf7.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-08e85798.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-3e1ce90e.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2005"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2005,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems philips used cardiology radiology",
    addedOrder: 16,
    subtitle: "Used 2005 Cath Lab Systems",
    model: "Philips Allura Xper FD20",
    snapshot: [
      {
        label: "System Model",
        value: "Philips Allura Xper FD20"
      },
      {
        label: "System Configuration",
        value: "Monoplane"
      },
      {
        label: "Date of Manufacture (DOM)",
        value: "2005"
      },
      {
        label: "System Scope",
        value: "Complete X-ray system"
      },
      {
        label: "Software Version",
        value: "7.2.1"
      },
      {
        label: "Serial Number",
        value: "124"
      }
    ],
    description: "The Philips Allura Xper FD20 (DOM 2005) is a complete monoplane X-ray system. Operating on Software 7.2.1, this monoplane configuration features an MRC200 0407 GS-ROT 1004 tube from March 2012. System Model: Philips Allura Xper FD20 System Configuration: Monoplane Date of Manufacture (DOM): 2005 System Scope: Complete X-ray system Software Version: 7.2.1 Serial Number: 124 Tube: MRC200 0407 GS-ROT 1004, March 2012",
    brochures: [
      {
        filename: "Philips Cath lab Allura Xper FD20 Brochure.pdf",
        url: "https://www.abufarhamedical.com/storage/medical-platform/models/pdfs/8b2e86c7174548b8a4335b759bf51f2f.pdf"
      }
    ],
    seoTitle: "Philips Allura Xper FD20 Monoplane Cath Lab | 2005",
    seoDescription: "Pre-owned 2005 Philips Allura Xper FD20 complete monoplane X-ray system. Features Software 7.2.1 and a March 2012 MRC200 tube. Request a quote today!",
    imageAlt: "Philips Allura Xper FD20 Monoplane X-ray system"
  },
  {
    name: "Philips Allura Xper FD20 Monoplane Cath Lab",
    slug: "philips-allura-xper-fd20-monoplane-cath-lab-2",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-e9b0ce5c.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-e9b0ce5c.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-64bb8c61.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-9795b18e.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2011"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2011,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems philips used cardiology radiology",
    addedOrder: 15,
    subtitle: "Used 2011 Cath Lab Systems",
    model: "Philips Allura Xper FD20",
    snapshot: [
      {
        label: "System Model",
        value: "Philips Allura Xper FD20"
      },
      {
        label: "System Configuration",
        value: "Monoplane (Floor mounted)"
      },
      {
        label: "Date of Manufacture (DOM)",
        value: "2008"
      },
      {
        label: "System Options",
        value: "Full option"
      },
      {
        label: "Tube",
        value: "2019"
      },
      {
        label: "Detector",
        value: "Flat Detector Technology with 2k imaging resolution"
      }
    ],
    description: "The Philips Allura Xper FD20 (DOM 2008) is a full option, floor mounted monoplane cath lab system. This monoplane configuration features a 2019 tube and utilizes Flat Detector Technology with 2k imaging resolution. System Model: Philips Allura Xper FD20 System Configuration: Monoplane (Floor mounted) Date of Manufacture (DOM): 2008 System Options: Full option Tube: 2019 Detector: Flat Detector Technology with 2k imaging resolution",
    brochures: [
      {
        filename: "Philips Cath lab Allura Xper FD20 Brochure.pdf",
        url: "https://www.abufarhamedical.com/storage/medical-platform/models/pdfs/8b2e86c7174548b8a4335b759bf51f2f.pdf"
      }
    ],
    seoTitle: "Philips Allura Xper FD20 Monoplane Cath Lab | 2008",
    seoDescription: "Pre-owned 2008 Philips Allura Xper FD20 floor mounted monoplane cath lab. Full option system with a 2019 tube and 2k imaging resolution. Request a quote!",
    imageAlt: "Philips Allura Xper FD20 floor mounted monoplane cath lab system"
  },
  {
    name: "Philips Allura Xper FD20 Monoplane Cath Lab",
    slug: "philips-allura-xper-fd20-monoplane-cath-lab",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-3dffc3d6.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-3dffc3d6.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-3805e4cf.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-f8b3121f.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-16ba611c.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-535e346e.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-41a2bf50.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd20-monoplane-cath-lab-41addc23.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2005"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2005,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems philips used cardiology radiology",
    addedOrder: 14,
    subtitle: "Used 2005 Cath Lab Systems",
    model: "Philips Allura Xper FD20",
    snapshot: [
      {
        label: "System Model",
        value: "Philips Allura Xper FD20"
      },
      {
        label: "System Configuration",
        value: "Monoplane"
      },
      {
        label: "Date of Manufacture (DOM)",
        value: "2005"
      },
      {
        label: "System Scope",
        value: "Complete X-ray system"
      },
      {
        label: "Software Version",
        value: "7.2.1"
      },
      {
        label: "Serial Number",
        value: "124"
      }
    ],
    description: "The Philips Allura Xper FD20 (DOM 2005) is a complete monoplane X-ray system. Operating on Software 7.2.1, this monoplane configuration features an MRC200 0407 GS-ROT 1004 tube from March 2012. System Model: Philips Allura Xper FD20 System Configuration: Monoplane Date of Manufacture (DOM): 2005 System Scope: Complete X-ray system Software Version: 7.2.1 Serial Number: 124 Tube: MRC200 0407 GS-ROT 1004, March 2012",
    brochures: [
      {
        filename: "Philips Cath lab Allura Xper FD20 Brochure.pdf",
        url: "https://www.abufarhamedical.com/storage/medical-platform/models/pdfs/8b2e86c7174548b8a4335b759bf51f2f.pdf"
      }
    ],
    seoTitle: "Philips Allura Xper FD20 Monoplane Cath Lab | 2005",
    seoDescription: "Pre-owned 2005 Philips Allura Xper FD20 complete monoplane X-ray system. Features Software 7.2.1 and March 2012 MRC200 tube. Request a quote today!",
    imageAlt: "Philips Allura Xper FD20 Monoplane X-ray system"
  },
  {
    name: "Philips Allura Xper FD10/10 Biplane Cath Lab",
    slug: "philips-allura-xper-fd10-10-biplane-cath-lab-3",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-affde3b7.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-affde3b7.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-2cf9a585.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-01038aae.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-fb17e5e1.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-5946bcdd.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-62cd2b56.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-1c1c0be2.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-446de654.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2008"
    ],
    status: "Certified Refurbished",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2008,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems philips refurbished cardiology radiology",
    addedOrder: 13,
    subtitle: "Refurbished 2008 Cath Lab Systems",
    model: "Philips Allura Xper FD10/10",
    snapshot: [
      {
        label: "System Model",
        value: "Philips Allura Xper FD10/10"
      },
      {
        label: "System Configuration",
        value: "Biplane"
      },
      {
        label: "Date of Manufacture (DOM)",
        value: "2008"
      },
      {
        label: "System Status",
        value: "Upgraded in 2015"
      },
      {
        label: "Software Version",
        value: "Release 8.1.17.2"
      },
      {
        label: "Tube Replacement 1",
        value: "2020-08"
      }
    ],
    description: "The Philips Allura Xper FD10/10 (DOM 2008, Upgraded in 2015) is a biplane angiography system. Operating on Release 8.1.17.2, this biplane configuration features a 58-inch big monitor and includes X-ray tubes that were replaced in March 2018 and August 2020. System Model: Philips Allura Xper FD10/10 System Configuration: Biplane Date of Manufacture (DOM): 2008 System Status: Upgraded in 2015 Software Version: Release 8.1.17.2 Tube Replacement 1: 2020-08 Tube Replacement 2: 2018-03 Display: Big monitor 58 inch",
    brochures: [
      {
        filename: "FD10-10 Philips Cath lab Allura Xper Brochure.pdf",
        url: "https://www.abufarhamedical.com/storage/medical-platform/models/pdfs/50a8722a8a3447ec81df514c23d67131.pdf"
      }
    ],
    seoTitle: "Philips Allura Xper FD10/10 Biplane Cath Lab | 2008",
    seoDescription: "Pre-owned 2008 Philips Allura Xper FD10/10 Biplane Cath Lab (Upgraded 2015). Features Release 8.1.17.2, 58-inch monitor & 2020 tube replacement. Request a quote",
    imageAlt: "Philips Allura Xper FD10/10 Biplane Cath Lab system with 58-inch monitor"
  },
  {
    name: "Philips Allura Xper FD10 Monoplane Cath Lab",
    slug: "philips-allura-xper-fd10-monoplane-cath-lab-2",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-81f69b67.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-81f69b67.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-2ba84b7c.png",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-2316d38b.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-1a0c21a4.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-9ac7fffc.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-4ba7bc25.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-763d644f.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-88f7c727.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2012"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2012,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems philips used cardiology radiology",
    addedOrder: 12,
    subtitle: "Used 2012 Cath Lab Systems",
    model: "Allura Xper FD10",
    snapshot: [
      {
        label: "Manufacturer",
        value: "Philips"
      },
      {
        label: "Model",
        value: "Allura Xper FD10"
      },
      {
        label: "System Configuration",
        value: "Monoplane (Ceiling Mounted)"
      },
      {
        label: "Year of Manufacture (YOM)",
        value: "Aug-12"
      },
      {
        label: "Software Version",
        value: "8.1.17.2"
      },
      {
        label: "Tube REF/Model",
        value: "9890 000 85142"
      }
    ],
    description: "This August 2012 Philips Allura Xper FD10 is a ceiling-mounted monoplane angiography system. Operating on software version 8.1.17.2, this monoplane configuration features an August 2012 X-ray tube and a 10x10 inch flat panel detector, integrated with an Xper flex cardio set hemodynamic system. Manufacturer: Philips Model: Allura Xper FD10 System Configuration: Monoplane (Ceiling Mounted) Year of Manufacture (YOM): Aug-12 Software Version: 8.1.17.2 Tube REF/Model: 9890 000 85142 Tube REF/Model SN: 39453 M 130400 Tube Manufacturer Date: Aug-12 Detector: Flat Panel Detector 10x10 inch Image Receptor: 9896 001 85005 Image Receptor YOM: Jul-12 Hemodynamic: Xper flex cardio set",
    brochures: [
      {
        filename: "Philips Cath lab Allura Xper FD10 Brochure.pdf",
        url: "https://www.abufarhamedical.com/storage/medical-platform/models/pdfs/eb5e3c4aeac84453ab093159a7e96cd1.pdf"
      }
    ],
    seoTitle: "Philips Allura Xper FD10 Monoplane Cath Lab | 2012",
    seoDescription: "Pre-owned 2012 Philips Allura Xper FD10 Monoplane Cath Lab. Ceiling-mounted system, 10x10 detector, and software 8.1.17.2. Request a quote today!",
    imageAlt: "Philips Allura Xper FD10 Monoplane Cath Lab system front view"
  },
  {
    name: "Hitachi Aperto Inspire MRI",
    slug: "hitachi-aperto-inspire-mri",
    brand: "Hitachi",
    category: "MRI Scanners",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/hitachi-aperto-inspire-mri-a46712ed.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/hitachi-aperto-inspire-mri-a46712ed.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/hitachi-aperto-inspire-mri-f95cd49f.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/hitachi-aperto-inspire-mri-7db03912.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/hitachi-aperto-inspire-mri-dcf5c164.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/hitachi-aperto-inspire-mri-14440e23.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/hitachi-aperto-inspire-mri-e965df44.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/hitachi-aperto-inspire-mri-5515e009.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/hitachi-aperto-inspire-mri-34c6eedf.jpg"
    ],
    specs: [
      "MRI Scanners",
      "YOM 2009"
    ],
    status: "Certified Refurbished",
    sold: false,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Japan",
    year: 2009,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Radiology",
      "Neurology",
      "Oncology"
    ],
    keywords: "mri scanners hitachi refurbished radiology neurology oncology",
    addedOrder: 11,
    subtitle: "Refurbished 2009 MRI Scanners",
    model: "Aperto Inspire",
    snapshot: [
      {
        label: "System Model",
        value: "Aperto Inspire"
      },
      {
        label: "Tesla",
        value: "0.4 Tesla"
      },
      {
        label: "Year of Manufacture (YOM)",
        value: "2009"
      },
      {
        label: "Refurbished Year",
        value: "2019"
      },
      {
        label: "Software Version",
        value: "Ver. V5.1H"
      },
      {
        label: "Magnet/Gantry",
        value: "MR-WS-13B"
      }
    ],
    description: "This 2009 Aperto Inspire is an MRI system that was refurbished in 2019 and operates on software Ver. V5.1H. The system includes the Magnet/Gantry, Table, MRI Cabinet, Filtering box, Noise canceller, Console, Phantom, Software disc, and is equipped with a set of six coils. System Model: Aperto Inspire Tesla: 0.4 Tesla Year of Manufacture (YOM): 2009 Refurbished Year: 2019 Software Version: Ver. V5.1H Magnet/Gantry: MR-WS-13B Table: MR-TB-14 MRI Cabinet: MR-RGP-2C Filtering Box: MR-FB-8B Noise Canceller: MR-FC-3A Additional Components: Console, Phantom, Software disc Included Coils (6): QD Head (MR-QHC-81) Breast (MR-SBC-81) Body M (MR-QFC-82AN) Body S (MR-QFC-81AN) Knee (MR-QKC-83) Joint (MR-JCR-82)",
    brochures: [],
    seoTitle: "Hitachi Aperto Inspire MRI 0.4 Tesla | Refurbished 2019",
    seoDescription: "Refurbished 2019 Hitachi Aperto Inspire 0.4 Tesla MRI (YOM 2009). Features Ver. V5.1H and 6 coils (Head, Breast, Body, Knee). Request a quote today!",
    imageAlt: "Hitachi Aperto Inspire 0.4 Tesla MRI System front view"
  },
  {
    name: "Richard Wolf Piezolith 3000 Plus Lithotripsy",
    slug: "richard-wolf-piezolith-3000-plus-lithotripsy",
    brand: "Richard Wolf",
    category: "Lithotripsy Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-plus-lithotripsy-3274ea01.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-plus-lithotripsy-3274ea01.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-plus-lithotripsy-633c10d3.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-plus-lithotripsy-52e0f6ee.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-plus-lithotripsy-3d1b22ec.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-plus-lithotripsy-0e70d834.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-plus-lithotripsy-ae6358ce.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-plus-lithotripsy-feb933e2.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-plus-lithotripsy-73732c1c.jpg"
    ],
    specs: [
      "Lithotripsy Systems",
      "YOM 2014"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Germany",
    year: 2014,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Urology"
    ],
    keywords: "lithotripsy systems richard wolf used urology",
    addedOrder: 10,
    subtitle: "Used 2014 Lithotripsy Systems",
    model: "Piezolith 3000 plus",
    snapshot: [
      {
        label: "Model",
        value: "Piezolith 3000 plus"
      },
      {
        label: "Equipment Type",
        value: "Lithotripsy System"
      },
      {
        label: "Year of Manufacture (YOM)",
        value: "2014"
      },
      {
        label: "Total Impulse Count",
        value: "1,500,000"
      },
      {
        label: "Imaging Equipment",
        value: "Samsung ultrasound"
      }
    ],
    description: "This 2014 Piezolith 3000 plus is a lithotripsy system equipped with a Samsung ultrasound. It operates with a total impulse count of 1,500,000. Model: Piezolith 3000 plus Equipment Type: Lithotripsy System Year of Manufacture (YOM): 2014 Total Impulse Count: 1,500,000 Imaging Equipment: Samsung ultrasound",
    brochures: [],
    seoTitle: "Richard Wolf Piezolith 3000 Plus Lithotripsy System | 2014",
    seoDescription: "Pre-owned 2014 Richard Wolf Piezolith 3000 Plus lithotripsy system. Features 1,500,000 total impulse count and a Samsung ultrasound. Request a quote today!",
    imageAlt: "Richard Wolf Piezolith 3000 Plus Lithotripsy system front view"
  },
  {
    name: "Richard Wolf Piezolith 3000 Portable Lithotripsy",
    slug: "richard-wolf-piezolith-3000-portable-lithotripsy",
    brand: "Richard Wolf",
    category: "Lithotripsy Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-portable-lithotripsy-b2eadf2e.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-portable-lithotripsy-b2eadf2e.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-portable-lithotripsy-380864bc.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-portable-lithotripsy-b861255d.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/richard-wolf-piezolith-3000-portable-lithotripsy-c7f67d9f.jpg"
    ],
    specs: [
      "Lithotripsy Systems",
      "YOM 2007"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Germany",
    year: 2007,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Urology"
    ],
    keywords: "lithotripsy systems richard wolf used urology",
    addedOrder: 9,
    subtitle: "Used 2007 Lithotripsy Systems",
    model: "Piezolith 3000",
    snapshot: [
      {
        label: "Manufacturer",
        value: "Richard Wolf"
      },
      {
        label: "Model",
        value: "Piezolith 3000"
      },
      {
        label: "Equipment Type",
        value: "Portable lithotripsy"
      },
      {
        label: "Year of Manufacture (YOM)",
        value: "2007"
      },
      {
        label: "System Scope",
        value: "Complete system"
      },
      {
        label: "Condition",
        value: "Good working condition"
      }
    ],
    description: "This 2007 Richard Wolf Piezolith 3000 is a complete portable lithotripsy system. It is maintained in good working condition to provide reliable performance for your clinical needs. Manufacturer: Richard Wolf Model: Piezolith 3000 Equipment Type: Portable lithotripsy Year of Manufacture (YOM): 2007 System Scope: Complete system Condition: Good working condition",
    brochures: [],
    seoTitle: "Richard Wolf Piezolith 3000 Portable Lithotripsy | 2007",
    seoDescription: "Pre-owned 2007 Richard Wolf Piezolith 3000 portable lithotripsy. Complete system in good working condition. Contact us for more details and request a quote!",
    imageAlt: "Richard Wolf Piezolith 3000 Portable Lithotripsy system"
  },
  {
    name: "GE Lunar Prodigy Bone Densitometer",
    slug: "ge-lunar-prodigy-bone-densitometer",
    brand: "GE",
    category: "Bone Densitometers (DEXA)",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/ge-lunar-prodigy-bone-densitometer-c3f1f093.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/ge-lunar-prodigy-bone-densitometer-c3f1f093.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/ge-lunar-prodigy-bone-densitometer-2f6aac77.jpeg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/ge-lunar-prodigy-bone-densitometer-bc124b80.jpeg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/ge-lunar-prodigy-bone-densitometer-3167fce6.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/ge-lunar-prodigy-bone-densitometer-32eeb637.jpg"
    ],
    specs: [
      "Bone Densitometers (DEXA)",
      "YOM 2003"
    ],
    status: "Used",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "USA",
    year: 2003,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Orthopedics",
      "Radiology"
    ],
    keywords: "bone densitometers (dexa) ge used orthopedics radiology",
    addedOrder: 8,
    subtitle: "Used 2003 Bone Densitometers (DEXA)",
    model: "Lunar Prodigy",
    snapshot: [
      {
        label: "Brand",
        value: "GE"
      },
      {
        label: "Model",
        value: "Lunar Prodigy"
      },
      {
        label: "Equipment Type",
        value: "Bone Densitometer ( DEXA )"
      },
      {
        label: "Year of Manufacture (YOM)",
        value: "2003"
      },
      {
        label: "System Scope",
        value: "Full system"
      },
      {
        label: "Condition",
        value: "Excellent working conditions"
      }
    ],
    description: "This 2003 GE Lunar Prodigy is a full system bone densitometer. It is in excellent working condition and is ready to ship. Brand: GE Model: Lunar Prodigy Equipment Type: Bone Densitometer ( DEXA ) Year of Manufacture (YOM): 2003 System Scope: Full system Condition: Excellent working conditions",
    brochures: [],
    seoTitle: "GE Lunar Prodigy Bone Densitometer (DEXA) | 2003",
    seoDescription: "Pre-owned 2003 GE Lunar Prodigy Bone Densitometer (DEXA) full system. Excellent working conditions and ready to ship. Request a quote today!",
    imageAlt: "GE Lunar Prodigy Bone Densitometer system front view"
  },
  {
    name: "Philips Allura FD20/10 Biplane Cath Lab",
    slug: "philips-allura-fd20-10-biplane-cath-lab",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-fd20-10-biplane-cath-lab-1d8f8f03.png",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-fd20-10-biplane-cath-lab-1d8f8f03.png",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-fd20-10-biplane-cath-lab-bb9b80f3.png",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-fd20-10-biplane-cath-lab-336ee74b.png",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-fd20-10-biplane-cath-lab-43a1a637.png",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-fd20-10-biplane-cath-lab-426c4d81.png",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-fd20-10-biplane-cath-lab-e1fb2c55.png",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-fd20-10-biplane-cath-lab-c87a2507.png",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-fd20-10-biplane-cath-lab-ed92040d.png"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2020"
    ],
    status: "Certified Refurbished",
    sold: true,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2020,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems philips refurbished cardiology radiology",
    addedOrder: 7,
    subtitle: "Refurbished 2020 Cath Lab Systems",
    model: "Philips Allura FD20/10",
    snapshot: [
      {
        label: "System Model",
        value: "Philips Allura FD20/10"
      },
      {
        label: "System Configuration",
        value: "Biplane"
      },
      {
        label: "System Status",
        value: "Upgraded 2020"
      },
      {
        label: "Maintenance",
        value: "Under Philips service contract"
      },
      {
        label: "Table Type",
        value: "Patient Table-AD7"
      },
      {
        label: "Options",
        value: "Full options for vascular, Full options for cardiac"
      }
    ],
    description: "This upgraded 2020 Philips Allura FD20/10 is a biplane system equipped with full options for vascular and cardiac procedures. Maintained under a Philips service contract, this biplane configuration features a Patient Table-AD7 and supports adult coronary interventional, pediatric congenital, neurovascular interventional, and peripheral interventional procedures. System Model: Philips Allura FD20/10 System Configuration: Biplane System Status: Upgraded 2020 Maintenance: Under Philips service contract Table Type: Patient Table-AD7 Options: Full options for vascular, Full options for cardiac Supported Procedures: Adult coronary interventional, Pediatric congenital procedures, Neurovascular interventional, Peripheral interventional procedures",
    brochures: [],
    seoTitle: "Philips Allura FD20/10 Biplane Cath Lab | Upgraded 2020",
    seoDescription: "Pre-owned Philips Allura FD20/10 Biplane Cath Lab (Upgraded 2020). Features AD7 table, full cardiac & vascular options. Under OEM service. Request a quote!",
    imageAlt: "Philips Allura FD20/10 Biplane Cath Lab system front view"
  },
  {
    name: "Philips Allura Xper FD10 Monoplane Cath Lab",
    slug: "philips-allura-xper-fd10-monoplane-cath-lab",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-f1e43aa4.jpeg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-f1e43aa4.jpeg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-99d6e3a7.jpeg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-78cf5082.jpeg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-7acb82c5.jpeg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-865061e3.jpeg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-d4fde648.jpeg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-monoplane-cath-lab-a6bac25a.jpeg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2010"
    ],
    status: "Used",
    sold: false,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2010,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems philips used cardiology radiology",
    addedOrder: 6,
    subtitle: "Used 2010 Cath Lab Systems",
    model: "Philips Allura Xper FD10",
    snapshot: [
      {
        label: "System Model",
        value: "Philips Allura Xper FD10"
      },
      {
        label: "System Configuration",
        value: "Monoplane"
      },
      {
        label: "Installation Date",
        value: "21.12.2010"
      },
      {
        label: "Software Version",
        value: "SW Release 7.2.16"
      },
      {
        label: "Table Type",
        value: "AD7 table"
      }
    ],
    description: "This Philips Allura Xper FD10 is a monoplane angiography system. Installed on 21.12.2010, this system operates on SW Release 7.2.16 and features an AD7 table. System Model: Philips Allura Xper FD10 System Configuration: Monoplane Installation Date: 21.12.2010 Software Version: SW Release 7.2.16 Table Type: AD7 table",
    brochures: [
      {
        filename: "Philips Cath lab Allura Xper FD10 Brochure.pdf",
        url: "https://www.abufarhamedical.com/storage/medical-platform/models/pdfs/eb5e3c4aeac84453ab093159a7e96cd1.pdf"
      }
    ],
    seoTitle: "Philips Allura Xper FD10 Monoplane Cath Lab | 2010",
    seoDescription: "Pre-owned Philips Allura Xper FD10 Monoplane Cath Lab (Installed 2010). Features an AD7 table and SW Release 7.2.16. Request a quote today!",
    imageAlt: "Philips Allura Xper FD10 Monoplane Cath Lab system front view"
  },
  {
    name: "Philips Allura Xper FD10/10 Biplane Cath Lab",
    slug: "philips-allura-xper-fd10-10-biplane-cath-lab-2",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-46d58403.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-46d58403.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-45c8acf9.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-686b00b0.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-5ba1df7c.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-2dc7f54b.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-a082ff2a.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-5eebd0b5.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-3373353d.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2012"
    ],
    status: "Used",
    sold: false,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2012,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems philips used cardiology radiology",
    addedOrder: 5,
    subtitle: "Used 2012 Cath Lab Systems",
    model: "Philips Allura Xper FD10/10",
    snapshot: [
      {
        label: "System Model",
        value: "Philips Allura Xper FD10/10"
      },
      {
        label: "System Configuration",
        value: "Biplane"
      },
      {
        label: "Year of Manufacture",
        value: "2012"
      },
      {
        label: "Software Version",
        value: "R7.2.16"
      },
      {
        label: "Front X-Ray Tube",
        value: "Replaced Aug, 2021"
      },
      {
        label: "Lateral X-Ray Tube",
        value: "Replaced Aug, 2021"
      }
    ],
    description: "This 2012 Philips Allura Xper FD10/10 is a biplane angiography system designed for cardiovascular imaging. Operating on software version R7.2.16, this biplane configuration features an AD7 table and includes both front and lateral X-ray tubes that were replaced in August 2021. System Model: Philips Allura Xper FD10/10 System Configuration: Biplane Year of Manufacture: 2012 Software Version: R7.2.16 Front X-Ray Tube: Replaced Aug, 2021 Lateral X-Ray Tube: Replaced Aug, 2021 Table Type: AD7",
    brochures: [
      {
        filename: "FD10-10 Philips Cath lab Allura Xper Brochure.pdf",
        url: "https://www.abufarhamedical.com/storage/medical-platform/models/pdfs/50a8722a8a3447ec81df514c23d67131.pdf"
      }
    ],
    seoTitle: "Philips Allura Xper FD10/10 Biplane Cath Lab | 2012",
    seoDescription: "Pre-owned 2012 Philips Allura Xper FD10/10 Biplane Cath Lab. Features an AD7 table, R7.2.16 software, and tubes replaced in Aug 2021. Request a quote today!",
    imageAlt: "Philips Allura Xper FD10/10 Biplane Cath Lab system front view"
  },
  {
    name: "Philips Allura Xper FD10/10 Biplane Cath Lab",
    slug: "philips-allura-xper-fd10-10-biplane-cath-lab",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-c05f8fc4.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-c05f8fc4.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-e63b3765.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-5d6ed2d5.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-93c1e7f4.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-d5d6ab77.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-53421b74.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-894ba3a4.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-10-biplane-cath-lab-40e223af.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2010"
    ],
    status: "Certified Refurbished",
    sold: false,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2010,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems philips refurbished cardiology radiology",
    addedOrder: 4,
    subtitle: "Refurbished 2010 Cath Lab Systems",
    model: "Philips Allura Xper FD10/10",
    snapshot: [
      {
        label: "System Model",
        value: "Philips Allura Xper FD10/10"
      },
      {
        label: "System Configuration",
        value: "Biplane"
      },
      {
        label: "Year of Manufacture",
        value: "2010"
      },
      {
        label: "Front X-Ray Tube",
        value: "Model MRC2000508ROT-GS 1003, replaced June 2021 (2,301,000 LU as of Oct, 2023)"
      },
      {
        label: "Lateral X-Ray Tube",
        value: "Model MRC2000508ROT-GS 1003, never replaced (726,000 LU as of Oct, 2023)"
      },
      {
        label: "Bed Type",
        value: "AD7 Pivot"
      }
    ],
    description: "This 2010 Philips Allura Xper FD10/10 is a biplane angiography system designed for cardiovascular procedures. The configuration includes an AD7 Pivot bed and a roof monitor setup featuring small monitors, supported by detailed X-ray tube replacement and usage metrics. System Model: Philips Allura Xper FD10/10 System Configuration: Biplane Year of Manufacture: 2010 Front X-Ray Tube: Model MRC2000508ROT-GS 1003, replaced June 2021 (2,301,000 LU as of Oct, 2023) Lateral X-Ray Tube: Model MRC2000508ROT-GS 1003, never replaced (726,000 LU as of Oct, 2023) Bed Type: AD7 Pivot Roof Monitor Type: Small monitors",
    brochures: [
      {
        filename: "FD10-10 Philips Cath lab Allura Xper Brochure.pdf",
        url: "https://www.abufarhamedical.com/storage/medical-platform/models/pdfs/50a8722a8a3447ec81df514c23d67131.pdf"
      }
    ],
    seoTitle: "Philips Allura Xper FD10/10 Biplane Cath Lab | 2010",
    seoDescription: "Pre-owned 2010 Philips Allura Xper FD10/10 Biplane Cath Lab. Features an AD7 Pivot bed and updated front tube (June 2021). Request a quote today!",
    imageAlt: "Philips Allura Xper FD10/10 Biplane Cath Lab system"
  },
  {
    name: "Philips Allura Xper FD10 Biplane Cath Lab",
    slug: "philips-allura-xper-fd10-biplane-cath-lab",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-biplane-cath-lab-c2100143.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-biplane-cath-lab-c2100143.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-biplane-cath-lab-a1c42f9e.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-biplane-cath-lab-2e0f859c.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-biplane-cath-lab-348b0243.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-biplane-cath-lab-d1013873.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-biplane-cath-lab-757b26cc.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-biplane-cath-lab-3d64bd44.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-allura-xper-fd10-biplane-cath-lab-29851a43.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2010"
    ],
    status: "Certified Refurbished",
    sold: false,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2010,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems philips refurbished cardiology radiology",
    addedOrder: 3,
    subtitle: "Refurbished 2010 Cath Lab Systems",
    model: "Philips Allura Xper FD10",
    snapshot: [
      {
        label: "System Model",
        value: "Philips Allura Xper FD10"
      },
      {
        label: "System Configuration",
        value: "Low dose biplane cardiovascular X-ray system"
      },
      {
        label: "Year of Manufacture",
        value: "October 2010 (Installed June 2011)"
      },
      {
        label: "Condition",
        value: "OEM maintained in excellent condition"
      },
      {
        label: "X-Ray Tube",
        value: "New tube replaced in Dec 2019"
      },
      {
        label: "Imaging Technology",
        value: "Flat panel detector system (high quality frontal & lateral plane image quality)"
      }
    ],
    description: "This OEM maintained Philips Allura Xper FD10 is a biplane cardiovascular X-ray system featuring a flat panel detector system. Manufactured in October 2010 and installed in June 2011, this cath lab provides high quality frontal and lateral plane image quality and is equipped with an X-ray tube replaced in December 2019. System Model: Philips Allura Xper FD10 System Configuration: Low dose biplane cardiovascular X-ray system Year of Manufacture: October 2010 (Installed June 2011) Condition: OEM maintained in excellent condition X-Ray Tube: New tube replaced in Dec 2019 Imaging Technology: Flat panel detector system (high quality frontal & lateral plane image quality) Dose Management: DoseWise offers low X-ray dose and excellent image quality Software Version: Allura xper 8.1.17.2 Software Details: Ventricular quantification, coronary quantification, Vascular quantification, Xcelara R3.1 core software Clinical Settings: Dedicated Pediatric & EP settings, two times diagnostic quality with a single contrast injection (pediatrics) Positioning & Tools: Xper customizable settings for complex positioning, Xper - personalize X-Ray settings, automatic positioning, three-dimensional tools",
    brochures: [
      {
        filename: "Philips Cath lab Allura Xper FD10 Brochure.pdf",
        url: "https://www.abufarhamedical.com/storage/medical-platform/models/pdfs/eb5e3c4aeac84453ab093159a7e96cd1.pdf"
      }
    ],
    seoTitle: "Philips Allura Xper FD10 Biplane Cath Lab | 2010",
    seoDescription: "Pre-owned 2010 Philips Allura Xper FD10 Biplane Cath Lab. OEM maintained with a 2019 tube, DoseWise tech & R8.1.17.2 software. Request a quote today!",
    imageAlt: "Philips Allura Xper FD10 Biplane Cath Lab system"
  },
  {
    name: "Philips Cath lab Allura Xper FD10/10",
    slug: "philips-cath-lab-allura-xper-fd10-10",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-cath-lab-allura-xper-fd10-10-06833dad.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-cath-lab-allura-xper-fd10-10-06833dad.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-cath-lab-allura-xper-fd10-10-dae5b911.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-cath-lab-allura-xper-fd10-10-f51d5a11.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-cath-lab-allura-xper-fd10-10-0759811a.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2009"
    ],
    status: "Used",
    sold: false,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2009,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems philips used cardiology radiology",
    addedOrder: 2,
    subtitle: "Used 2009 Cath Lab Systems",
    model: "Philips Allura FD10/10 Biplane",
    snapshot: [
      {
        label: "System Model",
        value: "Philips Allura FD10/10 Biplane"
      },
      {
        label: "Year of Manufacture (YOM)",
        value: "2009"
      },
      {
        label: "System Configuration",
        value: "Biplane (Dual 10-inch flat detectors)"
      },
      {
        label: "Software Version",
        value: "R7.2.9"
      },
      {
        label: "Front X-Ray Tube",
        value: "YOM 2021-11 (Model: MRC 200 0508 ROT-GS 1003)"
      },
      {
        label: "Lateral X-Ray Tube",
        value: "YOM 2016-09 (Model: MRC 200 0508 ROT-GS 1003)"
      }
    ],
    description: "This pre-owned 2009 Philips Allura FD10/10 is a high-performance biplane angiography system designed for advanced cardiovascular and interventional imaging. Equipped with dual flat-panel detectors and updated X-ray tubes, this system ensures reliable diagnostic precision and efficient clinical workflow. System Model: Philips Allura FD10/10 Biplane Year of Manufacture (YOM): 2009 System Configuration: Biplane (Dual 10-inch flat detectors) Software Version: R7.2.9 Front X-Ray Tube: YOM 2021-11 (Model: MRC 200 0508 ROT-GS 1003) Lateral X-Ray Tube: YOM 2016-09 (Model: MRC 200 0508 ROT-GS 1003) Patient Table Type: AD7 Bed",
    brochures: [
      {
        filename: "FD10-10 Philips Cath lab Allura Xper Brochure.pdf",
        url: "https://www.abufarhamedical.com/storage/medical-platform/models/pdfs/50a8722a8a3447ec81df514c23d67131.pdf"
      }
    ],
    seoTitle: "Philips Allura FD10/10 Biplane Cath Lab | 2009 System",
    seoDescription: "Pre-owned 2009 Philips Allura FD10/10 Biplane Cath Lab. Includes R7.2.9 software, AD7 bed, and updated MRC 200 tubes (Front 2021, Lateral 2016). Request quote!",
    imageAlt: "Philips Allura FD10/10 Biplane Cath Lab system front view"
  },
  {
    name: "Philips Cath lab Allura Xper FD10",
    slug: "philips-cath-lab-allura-xper-fd10",
    brand: "Philips",
    category: "Cath Lab Systems",
    image: "https://www.abufarhamedical.com/storage/medical-platform/products/philips-cath-lab-allura-xper-fd10-19abddab.jpg",
    gallery: [
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-cath-lab-allura-xper-fd10-19abddab.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-cath-lab-allura-xper-fd10-f81e82a6.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-cath-lab-allura-xper-fd10-3f0c156f.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-cath-lab-allura-xper-fd10-a896d6d3.jpg",
      "https://www.abufarhamedical.com/storage/medical-platform/products/philips-cath-lab-allura-xper-fd10-d71aa9c7.jpg"
    ],
    specs: [
      "Cath Lab Systems",
      "YOM 2005"
    ],
    status: "Used",
    sold: false,
    warranty: "Warranty terms are provided upon quotation and may vary depending on the system configuration and destination.",
    installation: false,
    training: false,
    country: "Netherlands",
    year: 2005,
    systemType: "Fixed",
    services: [],
    specialty: [
      "Cardiology",
      "Radiology"
    ],
    keywords: "cath lab systems philips used cardiology radiology",
    addedOrder: 1,
    subtitle: "Used 2005 Cath Lab Systems",
    model: "Allura Xper FD10 ( Floor-Mounted )",
    snapshot: [
      {
        label: "Manufacturer",
        value: "Philips"
      },
      {
        label: "Model",
        value: "Allura Xper FD10 ( Floor-Mounted )"
      },
      {
        label: "System Configuration",
        value: "Floor-Mounted Monoplane"
      },
      {
        label: "System Year of Manufacture (YOM)",
        value: "2005"
      },
      {
        label: "X-Ray Tube Year of Manufacture (YOM)",
        value: "2013"
      },
      {
        label: "Patient Table Type",
        value: "AD5"
      }
    ],
    description: "This pre-owned 2005 Philips Allura Xper FD10 is a reliable floor-mounted monoplane angiography system designed for high-quality cardiovascular imaging. Featuring a compact floor-mounted configuration and an updated X-ray tube, this system provides efficient performance for interventional cardiology and vascular procedures. Manufacturer: Philips Model: Allura Xper FD10 ( Floor-Mounted ) System Configuration: Floor-Mounted Monoplane System Year of Manufacture (YOM): 2005 X-Ray Tube Year of Manufacture (YOM): 2013 Patient Table Type: AD5",
    brochures: [
      {
        filename: "Philips Cath lab Allura Xper FD10 Brochure.pdf",
        url: "https://www.abufarhamedical.com/storage/medical-platform/models/pdfs/eb5e3c4aeac84453ab093159a7e96cd1.pdf"
      }
    ],
    seoTitle: "Philips Allura Xper FD10 Cath Angio Lab Floor Mounted System",
    seoDescription: "Pre-owned Philips Allura Xper FD10 Cath Lab. Floor-mounted angiography system (YOM 2005) with an updated 2013 X-ray tube and AD5 table. Request a quote today!",
    imageAlt: "Philips Allura Xper FD10 Cath Lab floor mounted system front view"
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
  return product.slug ?? slugify(product.name);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => productSlug(p) === slug);
}

/** Previous / next product for detail-page navigation (wraps around). */
export function getAdjacentProducts(slug: string): {
  prev: Product;
  next: Product;
} | null {
  const idx = PRODUCTS.findIndex((p) => productSlug(p) === slug);
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
