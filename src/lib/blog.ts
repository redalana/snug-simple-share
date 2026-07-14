import heroCathlab from "@/assets/hero-cathlab.jpg";
import solMri from "@/assets/sol-mri.jpg";
import solCt from "@/assets/sol-ct.jpg";
import solPetct from "@/assets/sol-petct.jpg";
import solCarm from "@/assets/sol-carm.jpg";
import solOr from "@/assets/sol-or.jpg";
import solUltrasound from "@/assets/sol-ultrasound.jpg";
import solMammo from "@/assets/sol-mammo.jpg";
import solXray from "@/assets/sol-xray.jpg";
import solDexa from "@/assets/sol-dexa.jpg";
import solEswl from "@/assets/sol-eswl.jpg";
import solDes from "@/assets/sol-des.jpg";
import beyondCathlab from "@/assets/beyond-cathlab.jpg";
import whyCathlab from "@/assets/why-cathlab.jpg";
import abufarhaHq from "@/assets/abufarha-hq.jpg";

export type TocItem = { id: string; title: string };

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
      caption?: string;
    }
  | { type: "faq"; items: { q: string; a: string }[] };

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
  const toc: TocItem[] = [
    { id: "overview", title: "Overview" },
    { id: "why-it-matters", title: "Why it matters" },
    { id: "what-to-look-for", title: "What to look for" },
    { id: "installation", title: "Installation & commissioning" },
    { id: "support", title: "After-sales support" },
    { id: "faq", title: "Frequently asked questions" },
  ];
  const content: ContentBlock[] = [
    { type: "h2", id: "overview", text: "Overview" },
    {
      type: "p",
      text: `${a.title} is a core topic for hospital leaders planning capital investments across ${a.category.toLowerCase()}. This guide brings together the operational, clinical and commercial considerations we see every week working with hospitals across Africa and the Middle East.`,
    },
    {
      type: "p",
      text: "AbuFarha Medical Equipment supplies, installs, commissions and supports the platforms discussed here — so the guidance below is grounded in field experience, not brochures.",
    },
    { type: "h2", id: "why-it-matters", text: "Why it matters" },
    {
      type: "p",
      text: "The right platform pays back through throughput, uptime and clinical confidence. The wrong one drains budgets on service contracts, spare parts and unplanned downtime — long after the invoice is closed.",
    },
    {
      type: "ul",
      items: [
        "Clinical fit — does the system support the studies you actually run?",
        "Total cost of ownership over 7–10 years, not just capital price",
        "Serviceability and spare-parts availability in your region",
        "Training and workflow readiness for your team",
      ],
    },
    { type: "h2", id: "what-to-look-for", text: "What to look for" },
    {
      type: "p",
      text: "Every specification matters, but a handful of decisions drive most of the outcome. Prioritise these before comparing brochures line-by-line.",
    },
    {
      type: "table",
      headers: ["Criterion", "What good looks like", "Common mistake"],
      rows: [
        [
          "Clinical protocols",
          "Vendor demos on your case mix",
          "Trusting generic sample images",
        ],
        [
          "Siting",
          "Structural, power and HVAC survey up front",
          "Discovering constraints during install",
        ],
        [
          "Training",
          "Applications training on-site, in your workflow",
          "One-day handover at go-live",
        ],
        [
          "Support",
          "Local engineers with parts stocked in-region",
          "Cross-continent parts logistics",
        ],
      ],
    },
    {
      type: "image",
      src: a.coverImage,
      alt: a.title,
      caption: `${a.category} — installation and commissioning by AbuFarha Medical.`,
    },
    { type: "h2", id: "installation", text: "Installation & commissioning" },
    {
      type: "p",
      text: "Installation is where projects quietly succeed or fail. Site readiness, RF shielding, gas & power, floor loading and workflow simulation should be signed off before the crate arrives.",
    },
    {
      type: "quote",
      text: "A commissioning plan is a clinical document, not a logistics checklist. Treat it that way and go-live becomes uneventful.",
      cite: "AbuFarha Field Engineering",
    },
    { type: "h2", id: "support", text: "After-sales support" },
    {
      type: "p",
      text: "Uptime is a discipline. We staff regional engineers, hold critical spares in-country and run preventive maintenance on a fixed cadence so your team never has to chase the next service visit.",
    },
    { type: "h2", id: "faq", text: "Frequently asked questions" },
    {
      type: "faq",
      items: [
        {
          q: "Do you supply refurbished as well as new systems?",
          a: "Yes — refurbished platforms are fully re-certified with warranty, parts and training, and are often the fastest path to a modern imaging capability.",
        },
        {
          q: "How long does a typical installation take?",
          a: "Between 3 and 12 weeks depending on modality and site readiness. We share a detailed schedule after the site survey.",
        },
        {
          q: "Do you provide clinical applications training?",
          a: "Every project includes on-site applications training for radiographers, physicists and physicians, plus refresher visits in the first year.",
        },
      ],
    },
  ];
  return { content, toc };
}

const RAW: Array<Omit<Article, "content" | "tableOfContents"> & {
  content?: ContentBlock[];
  tableOfContents?: TocItem[];
}> = [
  {
    slug: "refurbished-cath-lab-systems-africa-buyers-guide",
    title:
      "Refurbished Cath Lab Systems in Africa: Complete Buyer's Guide",
    metaDescription:
      "Everything you need to know before investing in a refurbished cath lab system. Costs, benefits, installation, training, and after-sales support.",
    category: "Cath Lab",
    coverImage: heroCathlab,
    focus: "center",
    excerpt:
      "Everything you need to know before investing in a refurbished cath lab system. Costs, benefits, installation, training, and after-sales support.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "May 20, 2026",
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
    readingTime: "7 min read",
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
    title:
      "Turnkey Hospital Departments: From Planning to Commissioning",
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
    slug: "mri-technology-explained-guide-for-providers",
    title:
      "MRI Technology Explained: A Complete Guide for Healthcare Providers",
    metaDescription:
      "Understand MRI technology, applications, and how to choose the right system for your hospital.",
    category: "MRI",
    coverImage: solMri,
    excerpt:
      "Understand MRI technology, applications, and how to choose the right system for your hospital.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "May 18, 2026",
    readingTime: "7 min read",
  },
  {
    slug: "ct-scanners-features-benefits-buying-considerations",
    title: "CT Scanners: Key Features, Benefits & Buying Considerations",
    metaDescription:
      "A practical guide to selecting the best CT scanner for your clinical and budgetary needs.",
    category: "CT Scan",
    coverImage: solCt,
    excerpt:
      "A practical guide to selecting the best CT scanner for your clinical and budgetary needs.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "May 15, 2026",
    readingTime: "7 min read",
  },
  {
    slug: "philips-gemini-gxl-16-petct-review",
    title:
      "Philips Gemini GXL 16 PET/CT Scanner: Advanced Molecular Imaging",
    metaDescription:
      "Discover the clinical benefits and performance of the Philips Gemini GXL 16 PET/CT system.",
    category: "PET/CT",
    coverImage: solPetct,
    excerpt:
      "Discover the clinical benefits and performance of the Philips Gemini GXL 16 PET/CT system.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "May 12, 2026",
    readingTime: "6 min read",
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
    publishedDate: "May 3, 2026",
    readingTime: "6 min read",
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
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelated(slug: string, limit = 3): Article[] {
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
