/**
 * Philips Gemini GXL 16 PET/CT system guide — Philips cluster (technology + procurement).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PHILIPS_GEMINI_GXL_TOC: TocItem[] = [
  { id: "overview", title: "Overview: What the Gemini GXL 16 Is" },
  { id: "architecture", title: "System Architecture: PET Ring and 16-Slice CT" },
  { id: "clinical", title: "Clinical Capability and Casemix Fit" },
  { id: "workflow", title: "Daily Workflow and Throughput" },
  { id: "infrastructure", title: "Room, Radiopharmacy and Infrastructure" },
  { id: "service", title: "Service, Consumables and Lifecycle" },
  { id: "suitability", title: "Who the System Suits" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PHILIPS_GEMINI_GXL_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "The Philips Gemini GXL 16 is a hybrid PET/CT system that pairs a dedicated PET detector ring with a 16-slice CT scanner in a single gantry arrangement. It belongs to the generation of PET/CT platforms that established molecular imaging as routine oncology practice, and systems of this class remain in productive clinical service in many hospitals.",
      "For a hospital establishing or expanding a molecular imaging service, the relevant questions are not marketing ones. They are: what clinical work can this configuration support, what does the CT component contribute, what infrastructure does the installation require, and what does it cost to keep running.",
      "This guide describes the Philips Gemini GXL 16 as it exists in the AbuFarha Medical portfolio, and how to assess its fit against a defined clinical programme.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "PET/CT hybrid architecture, the role of the 16-slice CT component, oncology and non-oncology clinical capability, throughput and workflow, radiopharmacy and shielding requirements, and lifecycle service considerations",
    audience:
      "Nuclear medicine physicians and radiologists, medical physicists, oncology service planners, biomedical engineering teams, procurement committees",
    readingTime: "14 min read",
    technology: "PET/CT Scanners",
  },
  {
    type: "h2",
    id: "overview",
    text: "Overview: What the Gemini GXL 16 Is",
    number: 1,
    body: "One patient position, two complementary datasets.",
  },
  {
    type: "p",
    text: "PET/CT exists because functional and anatomical information answer different halves of the same clinical question. PET shows metabolic activity — where tracer uptake is abnormal. CT shows anatomy — precisely where that activity sits, and it supplies the attenuation map required to make PET quantification meaningful. The Gemini GXL 16 combines a PET detector ring with a 16-slice CT in one examination, so both datasets are acquired in a single patient position and fused without repositioning error.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The CT is not only for pictures",
    text: "In hybrid imaging the CT dataset performs attenuation correction for the PET data. Without it, standardised uptake values would not be quantitatively usable — which is why CT quality directly affects PET reliability.",
  },
  {
    type: "h2",
    id: "architecture",
    text: "System Architecture: PET Ring and 16-Slice CT",
    number: 2,
    body: "Understanding what each half contributes.",
  },
  {
    type: "table",
    headers: ["Subsystem", "Function", "What it determines clinically"],
    rows: [
      ["PET detector ring", "Detects coincident annihilation photons", "Sensitivity, lesion detectability, acquisition time per bed position"],
      ["16-slice CT", "Anatomical localisation and attenuation correction", "Localisation accuracy, diagnostic CT capability, attenuation map quality"],
      ["Patient handling system", "Single-position transfer between modalities", "Registration accuracy between PET and CT datasets"],
      ["Reconstruction and workstation chain", "Image formation, fusion and quantification", "SUV consistency, reading efficiency, reporting quality"],
    ],
    caption: "Functional breakdown of a hybrid PET/CT platform of the Gemini GXL 16 class.",
  },
  {
    type: "p",
    text: "A 16-slice CT component is appropriate for localisation and attenuation correction and is capable of diagnostic-quality body CT for many indications. It is not intended to replace a high-slice cardiac CT scanner, and hospitals should not plan coronary CT angiography services around a PET/CT platform's CT component.",
  },
  {
    type: "h2",
    id: "clinical",
    text: "Clinical Capability and Casemix Fit",
    number: 3,
    body: "Where the platform delivers most value.",
  },
  {
    type: "ul",
    items: [
      "Oncology staging and restaging across the common solid tumour groups, which typically forms the large majority of PET/CT workload.",
      "Treatment response assessment, where consistent acquisition and reconstruction protocols matter more than raw performance.",
      "Radiotherapy planning support, providing metabolic target information alongside anatomy.",
      "Recurrence assessment where anatomical imaging alone is equivocal.",
      "Selected neurological and cardiac applications, subject to tracer availability and protocol validation.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Protocol consistency outranks system generation",
    text: "For treatment response assessment, comparability between the baseline and the follow-up study is the clinical requirement. A well-standardised older platform delivers more usable response data than a newer one operated inconsistently.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "Daily Workflow and Throughput",
    number: 4,
    body: "Throughput is governed by tracer logistics as much as by scan time.",
  },
  {
    type: "p",
    text: "A PET/CT day is shaped by tracer delivery or production, patient preparation including fasting and glucose checks, uptake time, and scan duration across bed positions. Departments new to molecular imaging routinely underestimate the preparation and uptake component and overestimate the impact of scan speed. Realistic scheduling is built backwards from tracer availability, with injection slots as the fixed points of the day.",
  },
  {
    type: "ul",
    items: [
      "Confirm the tracer supply model — regional delivery or on-site production — before modelling capacity.",
      "Plan uptake rooms and patient flow so injected patients wait in controlled, shielded space.",
      "Build a fixed daily protocol set rather than allowing per-case improvisation, so quantification stays comparable.",
      "Schedule quality control at the start of the day, before the first injected patient arrives.",
    ],
  },
  {
    type: "h2",
    id: "infrastructure",
    text: "Room, Radiopharmacy and Infrastructure",
    number: 5,
    body: "A PET/CT installation is a nuclear medicine project.",
  },
  {
    type: "ul",
    items: [
      "Shielding designed by a qualified medical physicist covering the scanner room, uptake rooms, injection area and adjacent occupied spaces.",
      "Controlled areas, radioactive waste handling and monitoring arrangements aligned with national regulations.",
      "Radiopharmacy or tracer receipt facilities appropriate to the supply model, with dose calibration equipment.",
      "Floor loading, delivery route and technical room provision for the gantry and computing chain.",
      "Clean, stable electrical supply with uninterruptible provision for the computing chain, plus cooling sized for continuous list operation.",
      "Archive and reporting integration capable of handling fused datasets and quantification data.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical delivers installation and commissioning for PET/CT systems including Philips Gemini platforms, coordinating with hospital physics on shielding verification, acceptance testing and baseline quality control.",
  },
  {
    type: "h2",
    id: "service",
    text: "Service, Consumables and Lifecycle",
    number: 6,
    body: "The cost profile of hybrid imaging.",
  },
  {
    type: "table",
    headers: ["Cost element", "Behaviour", "Management approach"],
    rows: [
      ["PET detector electronics", "Low-frequency, high-value events", "Explicit service cover; documented daily quality control"],
      ["CT X-ray tube", "Workload-driven consumable", "Track exposures; budget replacement from trend data"],
      ["Radiotracer supply", "Largest recurring operating cost", "Supply agreement with realistic activity scheduling"],
      ["Quality control time", "Daily and periodic staff time", "Fixed daily slot before clinical list"],
      ["Preventive maintenance", "Scheduled, predictable", "Contract covering both PET and CT subsystems"],
    ],
    caption: "Recurring cost structure of a PET/CT service; tracer supply usually dominates operating expenditure.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Hospitals model capital cost carefully and tracer logistics loosely, which is the wrong way round. Tracer supply and utilisation determine whether a PET/CT service is financially sustainable.",
    clinicalInterpretation:
      "Under-utilised PET/CT services still incur full quality control and maintenance obligations, so low volume raises cost per study sharply.",
    hospitalRecommendation:
      "Secure a written tracer supply arrangement and a realistic referral projection before committing to any PET/CT platform.",
  },
  {
    type: "h2",
    id: "suitability",
    text: "Who the System Suits",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Hospitals establishing a first oncology-focused molecular imaging service with predictable staging and restaging volume.",
      "Cancer centres needing additional capacity alongside an existing higher-specification platform.",
      "Services where reliable, standardised oncology PET/CT is the requirement rather than research-grade quantification.",
      "Departments with access to competent medical physics support and a formal maintenance arrangement.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is a 16-slice CT component sufficient for PET/CT?",
        a: "For attenuation correction, localisation and many diagnostic body CT indications, yes. It is not a substitute for a dedicated high-slice CT scanner for cardiac or advanced vascular work.",
      },
      {
        q: "What determines PET image quality most in practice?",
        a: "Consistent protocols, correct patient preparation, accurate dose calibration and current detector calibration. Daily quality control protects all of these.",
      },
      {
        q: "Can this platform support radiotherapy planning?",
        a: "It can provide metabolic information used in planning, subject to protocol agreement with the radiotherapy service and appropriate patient positioning arrangements.",
      },
      {
        q: "What is the biggest operational risk in a new PET/CT service?",
        a: "Tracer supply interruption. A scanner without tracer is idle regardless of its condition, so supply resilience should be contracted before installation.",
      },
      {
        q: "How is long-term reliability managed?",
        a: "Through a preventive maintenance agreement covering both PET and CT subsystems, documented daily and periodic quality control, and prompt technical support when quality control results move away from baseline.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "The Gemini GXL 16 pairs a PET detector ring with a 16-slice CT for single-position hybrid imaging.",
      "The CT component provides attenuation correction and localisation, and is capable of diagnostic body CT.",
      "Clinical value concentrates in oncology staging, restaging and treatment response assessment.",
      "Throughput is governed by tracer logistics and patient preparation more than scan speed.",
      "Tracer supply, physics support and a maintenance agreement determine service sustainability.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
  },
  {
    type: "p",
    text: "A Philips Gemini GXL 16 remains a capable oncology PET/CT platform where it is installed into a properly planned nuclear medicine service, supported by physics and maintained to schedule. Hospitals that get molecular imaging right treat the scanner as one component of a service — tracer supply, preparation space, protocol discipline, quality control and maintenance being the rest.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Nuclear medicine practice",
        items: [
          { label: "International Atomic Energy Agency — PET/CT quality assurance and clinical practice", url: "https://www.iaea.org/" },
          { label: "World Health Organization — cancer diagnosis and imaging capacity guidance", url: "https://www.who.int/" },
        ],
      },
      {
        title: "Physics and quality control",
        items: [
          { label: "American Association of Physicists in Medicine — PET/CT acceptance testing and QC reports", url: "https://www.aapm.org/" },
          { label: "International Electrotechnical Commission — nuclear medicine imaging equipment standards", url: "https://www.iec.ch/" },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          { label: "Philips — Gemini PET/CT system documentation", url: "https://www.philips.com/healthcare" },
        ],
      },
    ],
    note: "System specifications and quality control procedures must be confirmed against the manufacturer's documentation for the installed configuration.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Nuclear medicine and oncology imaging practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "PET/CT installation, commissioning and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer documentation and clinical practice synthesis",
    disclaimer:
      "Educational guidance for service planning. It does not replace manufacturer documentation, medical physics assessment or national radiation regulations.",
  },
];
