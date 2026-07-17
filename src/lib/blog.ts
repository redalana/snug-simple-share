import heroCathlab from "@/assets/hero-cathlab.jpg";
import solMri from "@/assets/sol-mri.jpg";
import solCt from "@/assets/sol-ct.jpg";
import solPetct from "@/assets/sol-petct.jpg";
import solCarm from "@/assets/sol-carm.jpg";
import solOr from "@/assets/sol-or.jpg";
import solUltrasound from "@/assets/sol-ultrasound.jpg";
import solXray from "@/assets/sol-xray.jpg";
import solDexa from "@/assets/sol-dexa.jpg";
import beyondCathlab from "@/assets/beyond-cathlab.jpg";
import whyCathlab from "@/assets/why-cathlab.jpg";
import abufarhaHq from "@/assets/abufarha-hq.jpg";

export type TocItem = { id: string; title: string };

export type BenefitIcon = "cost" | "reliability" | "delivery" | "performance";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "intro"; paragraphs: string[]; image?: string; imageAlt?: string }
  | {
      type: "h2";
      id: string;
      text: string;
      number?: number;
      image?: string;
      imageAlt?: string;
      imagePosition?: "left" | "right";
      body?: string;
    }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | {
      type: "benefits";
      items: { icon: BenefitIcon; title: string; description: string }[];
    }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
      highlightLastColumn?: boolean;
      caption?: string;
    }
  | {
      type: "requirements";
      checklist: string[];
      specs: { title: string; rows: { label: string; value: string }[] };
    }
  | {
      type: "roi";
      paragraph: string;
      bullets: string[];
      callout: { title: string; lines: string[] };
    }
  | { type: "faq"; items: { q: string; a: string }[] }
  | {
      type: "callout";
      variant: "tip" | "note" | "important" | "clinical";
      title?: string;
      text: string;
    }
  | {
      type: "stats";
      items: { value: string; label: string; source?: string }[];
    }
  | { type: "takeaways"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription: string;
  category: string;
  coverImage: string;
  focus?: string;
  excerpt: string;
  author: { name: string; role: string; avatar?: string };
  publishedDate: string;
  lastUpdated?: string;
  readingTime: string;
  featured?: boolean;
  featuredProduct?: { name: string; slug: string; image: string };
  tableOfContents: TocItem[];
  content: ContentBlock[];
};

function makeDefaultContent(a: {
  title: string;
  category: string;
  coverImage: string;
}): { content: ContentBlock[]; toc: TocItem[] } {
  const noun = a.category;
  const toc: TocItem[] = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is", title: `What is Refurbished ${noun}?` },
    { id: "benefits", title: `Benefits of Choosing Refurbished ${noun}` },
    { id: "cost", title: `${noun} Cost: New vs Refurbished` },
    { id: "installation", title: "Installation Requirements" },
    { id: "roi", title: "ROI: Is It Worth It?" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "conclusion", title: "Conclusion" },
  ];

  const content: ContentBlock[] = [
    {
      type: "h2",
      id: "introduction",
      text: "Introduction",
    },
    {
      type: "intro",
      image: a.coverImage,
      imageAlt: a.title,
      paragraphs: [
        `${a.title} is a decision that shapes clinical services and capital budgets for years. However, the high cost of new systems can be a challenge for many hospitals and imaging centers. Refurbished platforms provide a reliable, cost-effective alternative — delivering premium performance, advanced technology and long-term value.`,
        `This guide walks you through everything you need to know before investing in a refurbished ${noun.toLowerCase()} system, including costs, popular brands, installation requirements and expected ROI.`,
      ],
    },

    {
      type: "h2",
      id: "what-is",
      text: `What is a Refurbished ${noun} System?`,
      number: 1,
      image: a.coverImage,
      imagePosition: "left",
      body: `A refurbished ${noun.toLowerCase()} system is a pre-owned platform that has been fully inspected, restored and tested by certified engineers to meet original manufacturer standards. It includes essential component replacement, software updates and quality assurance tests to ensure optimal performance and patient safety.`,
    },

    {
      type: "h2",
      id: "benefits",
      text: `Benefits of Choosing Refurbished ${noun}`,
      number: 2,
    },
    {
      type: "benefits",
      items: [
        {
          icon: "cost",
          title: "Cost Savings",
          description: "Save 30% – 60% compared to new systems.",
        },
        {
          icon: "reliability",
          title: "Proven Reliability",
          description:
            "Rigorous refurbishment & testing ensures reliable performance.",
        },
        {
          icon: "delivery",
          title: "Faster Delivery",
          description: "Shorter lead time and quicker installation.",
        },
        {
          icon: "performance",
          title: "High Performance",
          description: "Excellent image quality & clinical results.",
        },
      ],
    },

    {
      type: "h2",
      id: "cost",
      text: `${noun} Cost: New vs Refurbished`,
      number: 3,
    },
    {
      type: "table",
      headers: [
        "System Type",
        "New Price (USD)",
        "Refurbished Price (USD)",
        "Potential Savings",
      ],
      rows: [
        [
          `Entry-level ${noun}`,
          "$1,000,000 – $1,800,000",
          "$450,000 – $900,000",
          "30% – 60%",
        ],
        [
          `Mid-range ${noun}`,
          "$1,800,000 – $3,200,000",
          "$800,000 – $1,600,000",
          "30% – 55%",
        ],
        [
          `High-end ${noun}`,
          "$600,000 – $1,200,000",
          "$250,000 – $600,000",
          "40% – 60%",
        ],
      ],
      highlightLastColumn: true,
      caption:
        "Prices vary depending on brand, model, condition and configuration.",
    },

    {
      type: "h2",
      id: "installation",
      text: "Installation Requirements",
      number: 4,
    },
    {
      type: "requirements",
      checklist: [
        "Site preparation and civil works",
        "RF shielding and room compliance",
        "Power supply and grounding",
        "Cooling and ventilation system",
        "Software & network integration",
        "Regulatory compliance & safety tests",
      ],
      specs: {
        title: `Typical Room Requirements (${noun})`,
        rows: [
          { label: "Room Size (Min.)", value: "5.5m (L) × 3.5m (W) × 2.4m (H)" },
          { label: "Power Requirement", value: "60 – 80 kVA" },
          { label: "Cooling", value: "2 – 4 tons" },
          { label: "RF Shielding", value: "Required" },
          { label: "Door Width", value: "Min. 1.2m" },
        ],
      },
    },

    {
      type: "h2",
      id: "roi",
      text: "ROI: Is It Worth It?",
      number: 5,
    },
    {
      type: "roi",
      paragraph: `Investing in a refurbished ${noun.toLowerCase()} system can provide a strong return by increasing patient throughput, expanding diagnostic services and reducing operational costs.`,
      bullets: [
        "Lower initial investment",
        `High patient demand for ${noun.toLowerCase()}`,
        "Minimal downtime with proper maintenance",
        "Long service life with OEM parts & support",
      ],
      callout: {
        title: "Typical ROI Timeline",
        lines: [
          "Payback Period: 1 – 3 years",
          "Lifespan: 7 – 10 years with proper maintenance",
        ],
      },
    },

    {
      type: "h2",
      id: "faq",
      text: "Frequently Asked Questions",
      number: 6,
    },
    {
      type: "faq",
      items: [
        {
          q: `Are refurbished ${noun.toLowerCase()} systems reliable?`,
          a: "Yes — every system we supply is fully re-certified by our engineers with a warranty, spare parts and applications training.",
        },
        {
          q: "What warranty do you provide?",
          a: "Standard warranty is 12 months on parts and labour, with extended options available up to 36 months.",
        },
        {
          q: "How long does installation take?",
          a: "Typical installation takes between 3 and 8 weeks depending on site readiness and modality.",
        },
        {
          q: "Can I upgrade the system later?",
          a: "Yes — most platforms accept coil, software and workflow upgrades throughout their service life.",
        },
        {
          q: "What brands do you support?",
          a: "We support Philips, Siemens Healthineers, GE HealthCare, Canon and other leading OEMs.",
        },
      ],
    },

    {
      type: "h2",
      id: "conclusion",
      text: "Conclusion",
      number: 7,
    },
    {
      type: "p",
      text: `Refurbished ${noun.toLowerCase()} is a proven way to bring advanced diagnostic capability to hospitals without the capital burden of new equipment. With the right partner for supply, installation, training and after-sales support, the total cost of ownership drops sharply while clinical performance stays uncompromised.`,
    },
  ];
  return { content, toc };
}

const RAW: Array<Omit<Article, "content" | "tableOfContents"> & {
  content?: ContentBlock[];
  tableOfContents?: TocItem[];
}> = [
  {
    slug: "cath-lab-buying-guide",
    title: "Refurbished Cath Lab Systems in Africa: Complete Buyer's Guide",
    metaDescription:
      "Everything you need to know before investing in a refurbished cath lab system. Costs, benefits, installation, training, and after-sales support.",
    category: "Cath Lab",
    coverImage: heroCathlab,
    focus: "center",
    excerpt:
      "Everything you need to know before investing in a refurbished cath lab system. Costs, benefits, installation, training, and after-sales support.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "May 20, 2026",
    lastUpdated: "July 14, 2026",
    readingTime: "8 min read",
    featured: true,
  },
  {
    slug: "choosing-between-1-5t-and-3t-mri",
    title: "Choosing Between 1.5T and 3T MRI for Your Hospital",
    metaDescription:
      "Compare image quality, throughput, siting costs and clinical fit between 1.5T and 3T MRI systems.",
    category: "MRI",
    coverImage: solMri,
    excerpt:
      "A field-tested comparison of image quality, throughput, siting costs and clinical fit — so you buy the scanner your program actually needs.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "May 15, 2026",
    readingTime: "10 min read",
    featured: true,
  },
  {
    slug: "molecular-imaging-program-from-ground-up",
    title: "Building a Modern Molecular Imaging Program from the Ground Up",
    metaDescription:
      "From radiopharmacy logistics to shielded rooms and reporting workflows — what it takes to launch PET/CT successfully.",
    category: "PET/CT",
    coverImage: solPetct,
    excerpt:
      "From radiopharmacy logistics to shielded rooms and reporting workflows — what it takes to launch PET/CT successfully.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "May 10, 2026",
    readingTime: "9 min read",
    featured: true,
  },
  {
    slug: "turnkey-hospital-departments-planning-to-commissioning",
    title: "Turnkey Hospital Departments: From Planning to Commissioning",
    metaDescription:
      "How AbuFarha delivers complete departments on time, on budget and to the highest clinical standards.",
    category: "Turnkey Projects",
    coverImage: solOr,
    focus: "center 40%",
    excerpt:
      "How we deliver complete departments on time, on budget, and to the highest clinical standards across Africa and the Middle East.",
    author: { name: "Omar AbuFarha", role: "Managing Director" },
    publishedDate: "May 5, 2026",
    readingTime: "6 min read",
    featured: true,
  },
  {
    slug: "refurbished-mri-scanners-guide",
    title:
      "The Ultimate Guide to Refurbished MRI Scanners: Costs, Brands, Installation & ROI for Hospitals",
    metaDescription:
      "A complete guide for hospital administrators and investors on refurbished MRI systems — including costs, brands, installation requirements, and return on investment.",
    category: "MRI Scanners",
    coverImage: solMri,
    excerpt:
      "A complete guide for hospital administrators and investors on refurbished MRI systems — including costs, brands, installation requirements, and return on investment.",
    author: { name: "AbuFarha Medical", role: "Editorial Team" },
    publishedDate: "May 20, 2026",
    lastUpdated: "July 14, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "ct-scanners-features-benefits-buying-considerations",
    title: "CT Scanners: Key Features, Benefits & Buying Considerations",
    metaDescription:
      "A practical guide to selecting the best CT scanner for your clinical and budgetary needs.",
    category: "CT Scanners",
    coverImage: solCt,
    excerpt:
      "A practical guide to selecting the best CT scanner for your clinical and budgetary needs.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "May 16, 2026",
    readingTime: "7 min read",
  },
  {
    slug: "philips-gemini-gxl-16-petct-review",
    title: "Philips Gemini GXL 16 PET/CT Scanner: Advanced Molecular Imaging",
    metaDescription:
      "Discover the clinical benefits and performance of the Philips Gemini GXL 16 PET/CT system.",
    category: "PET/CT",
    coverImage: solPetct,
    excerpt:
      "Discover the clinical benefits and performance of the Philips Gemini GXL 16 PET/CT system.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "May 12, 2026",
    readingTime: "8 min read",
  },
  {
    slug: "turnkey-hospital-projects-planning-to-commissioning",
    title: "Turnkey Hospital Projects: From Planning to Commissioning",
    metaDescription:
      "How we deliver complete healthcare facilities on time, on budget, and to the highest standards.",
    category: "Turnkey Projects",
    coverImage: solOr,
    excerpt:
      "How we deliver complete healthcare facilities on time, on budget, and to the highest standards.",
    author: { name: "Omar AbuFarha", role: "Managing Director" },
    publishedDate: "May 10, 2026",
    readingTime: "6 min read",
  },
  {
    slug: "after-sales-support-that-keeps-equipment-running",
    title: "After-Sales Support That Keeps Your Equipment Running",
    metaDescription:
      "Our commitment to maintenance, spare parts, technical support, and maximum uptime.",
    category: "After Sales",
    coverImage: beyondCathlab,
    excerpt:
      "Our commitment to maintenance, spare parts, technical support, and maximum uptime.",
    author: { name: "Fadi Nasser", role: "Service Operations Manager" },
    publishedDate: "May 8, 2026",
    readingTime: "6 min read",
  },
  {
    slug: "biomedical-engineering-in-modern-healthcare",
    title: "The Role of Biomedical Engineering in Modern Healthcare",
    metaDescription:
      "Why biomedical engineering is essential for safety, efficiency, and compliance.",
    category: "Biomedical",
    coverImage: whyCathlab,
    excerpt:
      "Why biomedical engineering is essential for safety, efficiency, and compliance.",
    author: { name: "Fadi Nasser", role: "Service Operations Manager" },
    publishedDate: "May 6, 2026",
    readingTime: "5 min read",
  },
  {
    slug: "advancements-in-ultrasound-technology",
    title: "Advancements in Ultrasound Technology for Better Diagnosis",
    metaDescription:
      "New transducer designs and AI-assisted imaging are reshaping bedside diagnostics.",
    category: "Ultrasound",
    coverImage: solUltrasound,
    excerpt:
      "New transducer designs and AI-assisted imaging are reshaping bedside diagnostics.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "May 5, 2026",
    readingTime: "6 min read",
  },
  {
    slug: "modern-operating-room-equipment-key-technologies",
    title: "Modern Operating Room Equipment: Key Technologies",
    metaDescription:
      "From integrated OR systems to advanced surgical lights — what a modern theatre needs.",
    category: "Operating Room",
    coverImage: solOr,
    excerpt:
      "From integrated OR systems to advanced surgical lights — what a modern theatre needs.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "May 6, 2026",
    readingTime: "7 min read",
  },
  {
    slug: "ct-vs-mri-which-is-right-for-your-hospital",
    title: "CT vs MRI: Which Imaging Solution is Right for Your Hospital?",
    metaDescription:
      "Compare clinical use cases, cost of ownership, and siting requirements at a glance.",
    category: "Imaging Solutions",
    coverImage: solCarm,
    excerpt:
      "Compare clinical use cases, cost of ownership, and siting requirements at a glance.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "May 1, 2026",
    readingTime: "6 min read",
  },
  {
    slug: "preventive-maintenance-equipment-reliability",
    title: "Preventive Maintenance: The Key to Equipment Reliability",
    metaDescription:
      "A structured PM program reduces downtime, extends lifetime and protects patient safety.",
    category: "Technical Support",
    coverImage: solXray,
    excerpt:
      "A structured PM program reduces downtime, extends lifetime and protects patient safety.",
    author: { name: "Fadi Nasser", role: "Service Operations Manager" },
    publishedDate: "Apr 29, 2026",
    readingTime: "6 min read",
  },
  {
    slug: "radiation-therapy-equipment-latest-innovations",
    title: "Radiation Therapy Equipment: Latest Innovations",
    metaDescription:
      "How new linear accelerators and planning software are improving oncology outcomes.",
    category: "Radiation Therapy",
    coverImage: solDexa,
    excerpt:
      "How new linear accelerators and planning software are improving oncology outcomes.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "Apr 27, 2026",
    readingTime: "6 min read",
  },
  {
    slug: "planning-a-new-hospital-considerations",
    title: "Planning a New Hospital? Key Considerations for Success",
    metaDescription:
      "Site readiness, workflow design and technology strategy — planned together, not in silos.",
    category: "Hospital Planning",
    coverImage: abufarhaHq,
    excerpt:
      "Site readiness, workflow design and technology strategy — planned together, not in silos.",
    author: { name: "Omar AbuFarha", role: "Managing Director" },
    publishedDate: "Apr 25, 2026",
    readingTime: "6 min read",
  },
];

export const ARTICLES: Article[] = RAW.map((a) => {
  if (a.content && a.tableOfContents) {
    return a as Article;
  }
  const { content, toc } = makeDefaultContent({
    title: a.title,
    category: a.category,
    coverImage: a.coverImage,
  });
  return { ...a, content, tableOfContents: toc } as Article;
});

export const FEATURED_ARTICLES = ARTICLES.filter((a) => a.featured);
export const LATEST_ARTICLES = ARTICLES.slice(0, 9);
export const MORE_ARTICLES = ARTICLES.slice(9);

export function getArticle(slug: string): Article | undefined {
  const aliases: Record<string, string> = {
    "mri-technology-explained-guide-for-providers": "refurbished-mri-scanners-guide",
    "refurbished-cath-lab-systems-africa-buyers-guide": "cath-lab-buying-guide",
  };
  return ARTICLES.find((a) => a.slug === (aliases[slug] ?? slug));
}

export function getRelated(slug: string, limit = 4): Article[] {
  const current = getArticle(slug);
  if (!current) return ARTICLES.slice(0, limit);
  const sameCategory = ARTICLES.filter(
    (a) => a.slug !== slug && a.category === current.category,
  );
  const others = ARTICLES.filter(
    (a) => a.slug !== slug && a.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getPrevNext(slug: string) {
  const idx = ARTICLES.findIndex((a) => a.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  return {
    prev: idx > 0 ? ARTICLES[idx - 1] : undefined,
    next: idx < ARTICLES.length - 1 ? ARTICLES[idx + 1] : undefined,
  };
}
