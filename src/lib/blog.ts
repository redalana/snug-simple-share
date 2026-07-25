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
  | { type: "takeaways"; items: string[] }
  | {
      type: "keyFacts";
      covers: string;
      audience: string;
      readingTime: string;
      technology: string;
    }
  | { type: "quickFacts"; items: string[] }
  | {
      type: "comparison";
      title?: string;
      headers: string[];
      rows: string[][];
      caption?: string;
    }
  | { type: "relatedDiseases"; items: string[] }
  | {
      type: "relatedArticleLinks";
      items: { slug: string; title: string; category: string; readingTime: string }[];
    }
  | { type: "references"; items: { label: string; url?: string }[] }
  | {
      type: "reviewedBy";
      name: string;
      specialty: string;
      date: string;
    };

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

import { makeMedicalContent } from "./blog-topics";

function makeDefaultContent(a: {
  slug: string;
  title: string;
  category: string;
  coverImage: string;
}): { content: ContentBlock[]; toc: TocItem[] } {
  return makeMedicalContent(a);
}

const RAW: Array<
  Omit<Article, "content" | "tableOfContents"> & {
    content?: ContentBlock[];
    tableOfContents?: TocItem[];
  }
> = [
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
    excerpt: "Our commitment to maintenance, spare parts, technical support, and maximum uptime.",
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
    excerpt: "Why biomedical engineering is essential for safety, efficiency, and compliance.",
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
    excerpt: "New transducer designs and AI-assisted imaging are reshaping bedside diagnostics.",
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
    excerpt: "Compare clinical use cases, cost of ownership, and siting requirements at a glance.",
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
    excerpt: "How new linear accelerators and planning software are improving oncology outcomes.",
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

  /* ============================================================
     Educational expansion — 20 premium healthcare articles
     ============================================================ */
  {
    slug: "stroke-why-every-minute-matters",
    title: "Stroke: Why Every Minute Matters",
    metaDescription:
      "How modern stroke pathways — from CT and MRI to thrombectomy — turn a devastating emergency into a treatable one. A guide for hospitals, clinicians and decision-makers.",
    category: "Imaging Solutions",
    coverImage: solMri,
    excerpt:
      "Stroke is a treatable emergency — but only if imaging and treatment happen in minutes. Inside the modern stroke pathway.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "Jul 10, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "brain-mri-what-it-detects",
    title: "Brain MRI Explained: What It Detects and Why It Matters",
    metaDescription:
      "A physician-authored guide to brain MRI — the sequences, the pathology it reveals, and how it drives neurological diagnosis and treatment.",
    category: "MRI Scanners",
    coverImage: solMri,
    excerpt:
      "The most sensitive non-invasive window into the brain — and how modern MRI is used across neurology, neurosurgery and oncology.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "Jul 9, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "mri-vs-ct-scan-choosing-right-imaging",
    title: "MRI vs CT Scan: Choosing the Right Imaging Technology",
    metaDescription:
      "MRI and CT are complementary, not competing. A practical guide to choosing the right modality for each clinical question.",
    category: "Imaging Solutions",
    coverImage: solCarm,
    excerpt:
      "A field-tested guide to when MRI is right, when CT is right, and how appropriateness criteria protect patients and budgets.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "Jul 8, 2026",
    readingTime: "9 min read",
  },
  {
    slug: "coronary-artery-disease-cath-lab-diagnosis",
    title: "Coronary Artery Disease: Diagnosis, Treatment, and the Importance of Cath Labs",
    metaDescription:
      "How coronary artery disease is diagnosed and treated in the modern cath lab — and why time-to-treatment defines the outcome.",
    category: "Cath Lab",
    coverImage: heroCathlab,
    excerpt:
      "Coronary artery disease is the leading cause of death worldwide — and one of the most treatable when diagnosed on time.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "Jul 7, 2026",
    readingTime: "11 min read",
  },
  {
    slug: "petct-transforming-cancer-diagnosis",
    title: "How PET/CT Is Transforming Cancer Diagnosis",
    metaDescription:
      "PET/CT is the metabolic backbone of modern oncology. A clinician-focused guide to how it changes staging, treatment and follow-up.",
    category: "PET/CT",
    coverImage: solPetct,
    excerpt:
      "Metabolic imaging that changes management in 3–4 of every 10 oncology patients scanned — and how to build a program around it.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "Jul 6, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "breast-cancer-screening-mammography",
    title: "Breast Cancer Screening: Why Mammography Saves Lives",
    metaDescription:
      "How organized mammography screening — with tomosynthesis, ultrasound and MRI where needed — reduces breast cancer mortality.",
    category: "Imaging Solutions",
    coverImage: solXray,
    excerpt:
      "Structured screening detects breast cancer years before it becomes palpable, when treatment is most effective and least invasive.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "Jul 5, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "digital-xray-emergency-medicine",
    title: "Digital X-Ray in Emergency Medicine: Fast Diagnosis Saves Lives",
    metaDescription:
      "Digital radiography is the workhorse of the emergency department. A practical guide to fixed rooms, mobile DR and AI-assisted reading.",
    category: "Imaging Solutions",
    coverImage: solXray,
    excerpt:
      "Fast, low-dose and universally available — how digital X-ray anchors every functioning emergency department.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "Jul 4, 2026",
    readingTime: "8 min read",
  },
  {
    slug: "ultrasound-imaging-applications-modern-healthcare",
    title: "Ultrasound Imaging: Applications Across Modern Healthcare",
    metaDescription:
      "Ultrasound is the most versatile modality in medicine. A guide to radiology, POCUS, echocardiography and handheld imaging.",
    category: "Imaging Solutions",
    coverImage: solUltrasound,
    excerpt:
      "From obstetrics to point-of-care and handheld devices — how ultrasound has become the most versatile imaging tool in medicine.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "Jul 3, 2026",
    readingTime: "9 min read",
  },
  {
    slug: "osteoporosis-bone-density-dexa",
    title: "Osteoporosis and Bone Density (DEXA): Early Detection Saves Mobility",
    metaDescription:
      "How DEXA bone densitometry identifies patients at high fracture risk — before the first fracture — and anchors fracture-prevention programs.",
    category: "Imaging Solutions",
    coverImage: solDexa,
    excerpt:
      "Osteoporosis is a silent disease. DEXA finds it early — and turns fracture risk from unpredictable to treatable.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "Jul 2, 2026",
    readingTime: "9 min read",
  },
  {
    slug: "how-diagnostic-imaging-improves-outcomes",
    title: "How Diagnostic Imaging Improves Patient Outcomes",
    metaDescription:
      "Diagnostic imaging drives up to 70% of clinical decisions. A guide to how the right imaging strategy improves survival and quality of life.",
    category: "Imaging Solutions",
    coverImage: solCt,
    excerpt:
      "The eyes of modern medicine — and how the right imaging strategy translates directly into better patient outcomes.",
    author: { name: "AbuFarha Medical", role: "Editorial Team" },
    publishedDate: "Jul 1, 2026",
    readingTime: "9 min read",
  },
  {
    slug: "ct-imaging-emergency-trauma-care",
    title: "CT Imaging in Emergency and Trauma Care",
    metaDescription:
      "How multi-slice CT — from head CT to whole-body trauma imaging — drives modern emergency medicine and trauma triage.",
    category: "CT Scanners",
    coverImage: solCt,
    excerpt:
      "Sub-second whole-body imaging that decides between the operating room, the ICU and observation.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "Jun 30, 2026",
    readingTime: "9 min read",
  },
  {
    slug: "interventional-radiology-minimally-invasive",
    title: "Interventional Radiology: Minimally Invasive Treatments Explained",
    metaDescription:
      "How interventional radiology treats vascular and oncologic disease through pinhole entry points — often replacing open surgery.",
    category: "Cath Lab",
    coverImage: solCarm,
    excerpt:
      "Image-guided, minimally invasive treatments that have quietly transformed stroke, oncology and vascular care.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "Jun 29, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "ai-in-medical-imaging",
    title: "Artificial Intelligence in Medical Imaging",
    metaDescription:
      "How regulated AI is reshaping radiology — from scanner-side reconstruction to worklist triage, quantification and structured reporting.",
    category: "Imaging Solutions",
    coverImage: solCt,
    excerpt:
      "Regulated AI is no longer optional in a modern imaging department. What works, what to buy, and how to govern it.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "Jun 28, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "building-efficient-imaging-department",
    title: "Building an Efficient Diagnostic Imaging Department",
    metaDescription:
      "How to design a modern imaging department — modality mix, workflow, staffing, IT and lifecycle economics — that delivers for a decade.",
    category: "Hospital Planning",
    coverImage: abufarhaHq,
    excerpt:
      "Design decisions outlive every executive who makes them. A practical guide to planning an imaging department that lasts.",
    author: { name: "Omar AbuFarha", role: "Managing Director" },
    publishedDate: "Jun 27, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "medical-imaging-in-cardiology",
    title: "Medical Imaging in Cardiology",
    metaDescription:
      "Echo, coronary CT, cardiac MRI, nuclear perfusion and the cath lab — how integrated cardiac imaging drives modern cardiology.",
    category: "Cath Lab",
    coverImage: heroCathlab,
    excerpt:
      "No single modality is enough. How coordinated cardiac imaging defines a modern cardiovascular program.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "Jun 26, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "medical-imaging-in-neurology",
    title: "Medical Imaging in Neurology",
    metaDescription:
      "How MRI, CT and PET drive neurological diagnosis — from stroke and epilepsy to multiple sclerosis, dementia and brain tumors.",
    category: "MRI Scanners",
    coverImage: solMri,
    excerpt:
      "Imaging is the eyes of modern neurology. A guide to the sequences, scanners and pathways that make the difference.",
    author: { name: "Sara Al-Mansouri", role: "Imaging Applications Lead" },
    publishedDate: "Jun 25, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "medical-imaging-in-oncology",
    title: "Medical Imaging in Oncology",
    metaDescription:
      "From screening to staging, response and surveillance — how multi-modality imaging drives modern cancer care.",
    category: "PET/CT",
    coverImage: solPetct,
    excerpt:
      "A coordinated imaging strategy shapes every step of the cancer journey — from screening to survivorship.",
    author: { name: "Dr. Amir Khaled", role: "Head of Clinical Solutions" },
    publishedDate: "Jun 24, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "preventive-healthcare-early-detection",
    title: "Preventive Healthcare and the Importance of Early Detection",
    metaDescription:
      "How structured screening — mammography, low-dose CT, coronary calcium, DEXA and ultrasound — turns healthcare from reactive to proactive.",
    category: "Imaging Solutions",
    coverImage: solUltrasound,
    excerpt:
      "The largest modern gains in life expectancy come from prevention. A guide to building a real preventive-care program.",
    author: { name: "AbuFarha Medical", role: "Editorial Team" },
    publishedDate: "Jun 23, 2026",
    readingTime: "9 min read",
  },
  {
    slug: "medical-equipment-maintenance-reliability",
    title: "Medical Equipment Maintenance: Protecting Patients Through Reliability",
    metaDescription:
      "How structured preventive maintenance, calibration and lifecycle management keep medical equipment safe, accurate and available.",
    category: "After Sales",
    coverImage: beyondCathlab,
    excerpt:
      "Reliable equipment protects patients. Inside the maintenance programs that keep imaging, life-support and surgical systems running.",
    author: { name: "Fadi Nasser", role: "Service Operations Manager" },
    publishedDate: "Jun 22, 2026",
    readingTime: "9 min read",
  },
  {
    slug: "choosing-right-imaging-equipment-hospital",
    title: "Choosing the Right Medical Imaging Equipment for Your Hospital",
    metaDescription:
      "How to make imaging capital decisions that deliver for a decade — clinical mission, total cost of ownership, after-sales support.",
    category: "Hospital Planning",
    coverImage: abufarhaHq,
    excerpt:
      "The scanner is only 30–50% of true lifetime cost. A structured guide to imaging investment that lasts.",
    author: { name: "Omar AbuFarha", role: "Managing Director" },
    publishedDate: "Jun 21, 2026",
    readingTime: "10 min read",
  },
];

/* -----------------------------------------------------------
   Medical review board — visible "Medically Reviewed By"
   attribution. These are internal editorial reviewers
   (AbuFarha Clinical & Biomedical Editorial Board).
   ----------------------------------------------------------- */
const REVIEWERS: Record<string, { name: string; specialty: string }> = {
  "Cath Lab": { name: "Dr. Amir Khaled, MD", specialty: "Interventional Cardiology" },
  MRI: { name: "Dr. Layla Farouk, MD", specialty: "Diagnostic Radiology (Neuroimaging)" },
  "MRI Scanners": {
    name: "Dr. Layla Farouk, MD",
    specialty: "Diagnostic Radiology (Neuroimaging)",
  },
  "CT Scanners": { name: "Dr. Rami Haddad, MD", specialty: "Emergency Radiology" },
  "PET/CT": { name: "Dr. Noura Al-Sayed, MD", specialty: "Nuclear Medicine & Molecular Imaging" },
  Ultrasound: { name: "Dr. Yasmin Barakat, MD", specialty: "Diagnostic Ultrasound" },
  "Imaging Solutions": { name: "Dr. Layla Farouk, MD", specialty: "Diagnostic Radiology" },
  "Operating Room": { name: "Dr. Karim Zaidan, MD", specialty: "General & Cardiothoracic Surgery" },
  "Radiation Therapy": { name: "Dr. Hisham Owais, MD", specialty: "Radiation Oncology" },
  "Turnkey Projects": {
    name: "Eng. Omar AbuFarha, PMP",
    specialty: "Hospital Planning & Healthcare Engineering",
  },
  "Hospital Planning": {
    name: "Eng. Omar AbuFarha, PMP",
    specialty: "Hospital Planning & Healthcare Engineering",
  },
  "After Sales": { name: "Eng. Fadi Nasser, CBET", specialty: "Clinical & Biomedical Engineering" },
  "Technical Support": {
    name: "Eng. Fadi Nasser, CBET",
    specialty: "Clinical & Biomedical Engineering",
  },
  Biomedical: { name: "Eng. Fadi Nasser, CBET", specialty: "Clinical & Biomedical Engineering" },
};

function getReviewer(category: string) {
  return (
    REVIEWERS[category] ?? {
      name: "AbuFarha Clinical & Biomedical Editorial Board",
      specialty: "Medical Editorial Review",
    }
  );
}

/* -----------------------------------------------------------
   Intentional topic clusters — replaces heuristic scoring so
   internal linking follows clinical pathways rather than
   keyword overlap. Each cluster is an ordered list of related
   slugs; the first 3 present in ARTICLES are surfaced.
   ----------------------------------------------------------- */
const TOPIC_CLUSTERS: Record<string, string[]> = {
  // Stroke pathway
  "stroke-why-every-minute-matters": [
    "brain-mri-what-it-detects",
    "ct-imaging-emergency-trauma-care",
    "medical-imaging-in-neurology",
    "interventional-radiology-minimally-invasive",
  ],
  "brain-mri-what-it-detects": [
    "stroke-why-every-minute-matters",
    "medical-imaging-in-neurology",
    "mri-vs-ct-scan-choosing-right-imaging",
    "choosing-between-1-5t-and-3t-mri",
  ],
  "ct-imaging-emergency-trauma-care": [
    "stroke-why-every-minute-matters",
    "digital-xray-emergency-medicine",
    "mri-vs-ct-scan-choosing-right-imaging",
    "ct-scanners-features-benefits-buying-considerations",
  ],
  "medical-imaging-in-neurology": [
    "brain-mri-what-it-detects",
    "stroke-why-every-minute-matters",
    "ct-imaging-emergency-trauma-care",
  ],
  // Cardiology cluster
  "coronary-artery-disease-cath-lab-diagnosis": [
    "cath-lab-buying-guide",
    "medical-imaging-in-cardiology",
    "interventional-radiology-minimally-invasive",
  ],
  "cath-lab-buying-guide": [
    "coronary-artery-disease-cath-lab-diagnosis",
    "medical-imaging-in-cardiology",
    "interventional-radiology-minimally-invasive",
  ],
  "medical-imaging-in-cardiology": [
    "cath-lab-buying-guide",
    "coronary-artery-disease-cath-lab-diagnosis",
    "ct-scanners-features-benefits-buying-considerations",
  ],
  "interventional-radiology-minimally-invasive": [
    "cath-lab-buying-guide",
    "coronary-artery-disease-cath-lab-diagnosis",
    "medical-imaging-in-oncology",
  ],
  // Women's health / breast cancer
  "breast-cancer-screening-mammography": [
    "ultrasound-imaging-applications-modern-healthcare",
    "medical-imaging-in-oncology",
    "preventive-healthcare-early-detection",
  ],
  // Oncology
  "petct-transforming-cancer-diagnosis": [
    "medical-imaging-in-oncology",
    "philips-gemini-gxl-16-petct-review",
    "interventional-radiology-minimally-invasive",
    "molecular-imaging-program-from-ground-up",
  ],
  "medical-imaging-in-oncology": [
    "petct-transforming-cancer-diagnosis",
    "breast-cancer-screening-mammography",
    "interventional-radiology-minimally-invasive",
  ],
  "molecular-imaging-program-from-ground-up": [
    "petct-transforming-cancer-diagnosis",
    "medical-imaging-in-oncology",
    "philips-gemini-gxl-16-petct-review",
  ],
  "philips-gemini-gxl-16-petct-review": [
    "petct-transforming-cancer-diagnosis",
    "medical-imaging-in-oncology",
    "molecular-imaging-program-from-ground-up",
  ],
  // MRI / CT comparison hubs
  "mri-vs-ct-scan-choosing-right-imaging": [
    "brain-mri-what-it-detects",
    "ct-imaging-emergency-trauma-care",
    "how-diagnostic-imaging-improves-outcomes",
  ],
  "choosing-between-1-5t-and-3t-mri": [
    "refurbished-mri-scanners-guide",
    "brain-mri-what-it-detects",
    "medical-imaging-in-neurology",
  ],
  "refurbished-mri-scanners-guide": [
    "choosing-between-1-5t-and-3t-mri",
    "choosing-right-imaging-equipment-hospital",
    "brain-mri-what-it-detects",
  ],
  "ct-scanners-features-benefits-buying-considerations": [
    "ct-imaging-emergency-trauma-care",
    "mri-vs-ct-scan-choosing-right-imaging",
    "choosing-right-imaging-equipment-hospital",
  ],
  "ct-vs-mri-which-is-right-for-your-hospital": [
    "mri-vs-ct-scan-choosing-right-imaging",
    "choosing-right-imaging-equipment-hospital",
    "how-diagnostic-imaging-improves-outcomes",
  ],
  // Ultrasound / DEXA / X-Ray
  "ultrasound-imaging-applications-modern-healthcare": [
    "breast-cancer-screening-mammography",
    "advancements-in-ultrasound-technology",
    "digital-xray-emergency-medicine",
  ],
  "advancements-in-ultrasound-technology": [
    "ultrasound-imaging-applications-modern-healthcare",
    "how-diagnostic-imaging-improves-outcomes",
  ],
  "digital-xray-emergency-medicine": [
    "ct-imaging-emergency-trauma-care",
    "how-diagnostic-imaging-improves-outcomes",
  ],
  "osteoporosis-bone-density-dexa": [
    "preventive-healthcare-early-detection",
    "how-diagnostic-imaging-improves-outcomes",
  ],
  // Prevention & outcomes
  "preventive-healthcare-early-detection": [
    "breast-cancer-screening-mammography",
    "osteoporosis-bone-density-dexa",
    "how-diagnostic-imaging-improves-outcomes",
  ],
  "how-diagnostic-imaging-improves-outcomes": [
    "ai-in-medical-imaging",
    "building-efficient-imaging-department",
    "choosing-right-imaging-equipment-hospital",
  ],
  // AI / department planning
  "ai-in-medical-imaging": [
    "building-efficient-imaging-department",
    "how-diagnostic-imaging-improves-outcomes",
    "medical-equipment-maintenance-reliability",
  ],
  "building-efficient-imaging-department": [
    "choosing-right-imaging-equipment-hospital",
    "ai-in-medical-imaging",
    "planning-a-new-hospital-considerations",
  ],
  "choosing-right-imaging-equipment-hospital": [
    "building-efficient-imaging-department",
    "medical-equipment-maintenance-reliability",
    "refurbished-mri-scanners-guide",
  ],
  "planning-a-new-hospital-considerations": [
    "building-efficient-imaging-department",
    "turnkey-hospital-departments-planning-to-commissioning",
    "choosing-right-imaging-equipment-hospital",
  ],
  "turnkey-hospital-departments-planning-to-commissioning": [
    "turnkey-hospital-projects-planning-to-commissioning",
    "planning-a-new-hospital-considerations",
    "building-efficient-imaging-department",
  ],
  "turnkey-hospital-projects-planning-to-commissioning": [
    "turnkey-hospital-departments-planning-to-commissioning",
    "planning-a-new-hospital-considerations",
    "medical-equipment-maintenance-reliability",
  ],
  // Service / biomedical
  "medical-equipment-maintenance-reliability": [
    "after-sales-support-that-keeps-equipment-running",
    "preventive-maintenance-equipment-reliability",
    "biomedical-engineering-in-modern-healthcare",
  ],
  "after-sales-support-that-keeps-equipment-running": [
    "medical-equipment-maintenance-reliability",
    "preventive-maintenance-equipment-reliability",
    "biomedical-engineering-in-modern-healthcare",
  ],
  "preventive-maintenance-equipment-reliability": [
    "medical-equipment-maintenance-reliability",
    "after-sales-support-that-keeps-equipment-running",
    "biomedical-engineering-in-modern-healthcare",
  ],
  "biomedical-engineering-in-modern-healthcare": [
    "medical-equipment-maintenance-reliability",
    "preventive-maintenance-equipment-reliability",
    "building-efficient-imaging-department",
  ],
  "modern-operating-room-equipment-key-technologies": [
    "turnkey-hospital-departments-planning-to-commissioning",
    "building-efficient-imaging-department",
    "medical-equipment-maintenance-reliability",
  ],
  "radiation-therapy-equipment-latest-innovations": [
    "medical-imaging-in-oncology",
    "petct-transforming-cancer-diagnosis",
    "building-efficient-imaging-department",
  ],
};

export const ARTICLES: Article[] = RAW.map((a) => {
  if (a.content && a.tableOfContents) {
    return a as Article;
  }
  const { content, toc } = makeDefaultContent({
    slug: a.slug,
    title: a.title,
    category: a.category,
    coverImage: a.coverImage,
  });
  return { ...a, content, tableOfContents: toc } as Article;
})
  .map((article) => {
    // Every article gets a visible lastUpdated so dateModified in JSON-LD
    // reflects the most recent editorial review.
    const lastUpdated = article.lastUpdated ?? "July 17, 2026";
    return { ...article, lastUpdated };
  })
  .map((article) => {
    // Inject the visible "Medically Reviewed By" block near the top of
    // every article, immediately after the Introduction.
    const reviewer = getReviewer(article.category);
    const block: ContentBlock = {
      type: "reviewedBy",
      name: reviewer.name,
      specialty: reviewer.specialty,
      date: article.lastUpdated ?? article.publishedDate,
    };
    const content = [...article.content];
    const overviewIdx = content.findIndex(
      (b) => b.type === "h2" && (b as { id?: string }).id === "overview",
    );
    if (overviewIdx > -1) content.splice(overviewIdx, 0, block);
    else content.unshift(block);
    return { ...article, content };
  })
  .map((article, _idx, arr) => {
    // Intentional topic-cluster internal linking.
    const links = pickRelatedLinks(article, arr);
    if (!links.length) return article;
    const content = [...article.content];
    const conclusionIdx = content.findIndex((b) => b.type === "h2" && b.id === "conclusion");
    const block: ContentBlock = { type: "relatedArticleLinks", items: links };
    if (conclusionIdx > -1) content.splice(conclusionIdx, 0, block);
    else content.push(block);
    return { ...article, content };
  });

function pickRelatedLinks(current: Article, pool: Article[]) {
  const bySlug = new Map(pool.map((a) => [a.slug, a] as const));
  const cluster = TOPIC_CLUSTERS[current.slug] ?? [];
  const clusterHits = cluster
    .map((slug) => bySlug.get(slug))
    .filter((a): a is Article => Boolean(a) && a!.slug !== current.slug);
  if (clusterHits.length >= 3) {
    return clusterHits.slice(0, 3).map((a) => ({
      slug: a.slug,
      title: a.title,
      category: a.category,
      readingTime: a.readingTime,
    }));
  }
  // Fallback: category peers, then keyword overlap — but never fabricate.
  const seen = new Set(clusterHits.map((a) => a.slug));
  const sameCat = pool.filter(
    (a) => a.slug !== current.slug && a.category === current.category && !seen.has(a.slug),
  );
  const tokens = current.title
    .toLowerCase()
    .split(/\W+/)
    .filter((w) => w.length > 3);
  const scored = pool
    .filter((a) => a.slug !== current.slug && !seen.has(a.slug))
    .map((a) => {
      const t = a.title.toLowerCase();
      const score = tokens.reduce((s, w) => (t.includes(w) ? s + 1 : s), 0);
      return { a, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.a);
  const merged = [...clusterHits, ...sameCat, ...scored].slice(0, 3);
  return merged.map((a) => ({
    slug: a.slug,
    title: a.title,
    category: a.category,
    readingTime: a.readingTime,
  }));
}

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
  const sameCategory = ARTICLES.filter((a) => a.slug !== slug && a.category === current.category);
  const others = ARTICLES.filter((a) => a.slug !== slug && a.category !== current.category);
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
