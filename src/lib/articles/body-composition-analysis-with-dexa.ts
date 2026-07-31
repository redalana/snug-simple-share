/**
 * Bone Densitometers (DEXA) cluster — "Body Composition Analysis With DEXA"
 */

import type { ContentBlock, TocItem } from "../blog";

export const DEXA_BODY_COMP_TOC: TocItem[] = [
  { id: "principle", title: "The Three-Compartment Model" },
  { id: "outputs", title: "What a Body Composition Scan Reports" },
  { id: "applications", title: "Clinical and Research Applications" },
  { id: "workflow", title: "Acquisition and Protocol Requirements" },
  { id: "quality", title: "Quality Control Specific to Body Composition" },
  { id: "configuration", title: "Configuring a Service for Body Composition" },
  { id: "limitations", title: "Limitations" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DEXA_BODY_COMP_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "The same dual-energy X-ray principle that separates bone mineral from soft tissue can also separate soft tissue into fat and lean components, giving DEXA systems a body composition capability distinct from bone densitometry. AbuFarha Medical supplies, installs and commissions densitometers configured for body composition analysis, and trains operators on the additional protocol and quality control requirements this capability brings.",
      "Body composition scanning has moved from a research tool into routine use in metabolic medicine, sports science, nutrition services and, in some centres, general clinical assessment of sarcopenia and obesity-related conditions. It is a genuinely different clinical service from bone densitometry, run on the same hardware, and it deserves its own protocol, quality control and reporting discipline.",
      "This guide explains the physical basis of DEXA body composition analysis, what it reports, where it is used clinically, and what a service needs to run it reliably.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "The three-compartment body composition model, measured and derived outputs, clinical and research applications, acquisition protocol requirements, quality control specific to composition analysis, and service configuration",
    audience:
      "Endocrinologists and metabolic medicine physicians, sports and exercise scientists, dietitians, densitometry technologists, medical physicists",
    readingTime: "12 min read",
    technology: "Bone Densitometers (DEXA)",
  },
  {
    type: "h2",
    id: "principle",
    text: "The Three-Compartment Model",
    number: 1,
    body: "Separating the body into bone mineral, fat and lean tissue using the same dual-energy measurement.",
  },
  {
    type: "p",
    text: "A whole-body DEXA scan attenuates the two X-ray energies through every pixel of the body, not only through bone. Where bone is present, the system separates bone mineral from the overlying soft tissue as in a standard densitometry scan. Where no bone is present, the same dual-energy attenuation ratio is used to separate soft tissue into fat and lean (fat-free) components, because fat and lean tissue attenuate the two energies differently in a consistent, measurable way. The result is a three-compartment model of the body: bone mineral, fat mass and lean mass, mapped across the whole body or a defined region.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "One scan, two clinical services",
    text: "A whole-body DEXA acquisition can simultaneously report a total-body bone mineral density value and a full body composition breakdown, though the protocol and positioning requirements for a diagnostic-quality result of each differ.",
  },
  {
    type: "h2",
    id: "outputs",
    text: "What a Body Composition Scan Reports",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Total and regional fat mass, typically broken down by trunk, limbs and android/gynoid regions.",
      "Total and regional lean mass, including appendicular lean mass used in sarcopenia assessment.",
      "Percentage body fat, calculated from the fat and lean compartments.",
      "Fat distribution indices comparing central (android) and peripheral (gynoid) fat, used in metabolic risk assessment.",
      "Bone mineral content and density for the same whole-body acquisition, reported separately from the soft-tissue compartments.",
      "Longitudinal change in each compartment where serial scans are compared under matched protocol conditions.",
    ],
  },
  {
    type: "table",
    headers: ["Compartment", "Typical clinical use", "Reporting consideration"],
    rows: [
      ["Total and regional fat mass", "Obesity assessment, metabolic risk, nutrition monitoring", "Regional distribution often more informative than total mass alone"],
      ["Appendicular lean mass", "Sarcopenia assessment in older adults", "Usually normalised to height squared for comparison against reference cut-offs"],
      ["Android/gynoid fat ratio", "Central adiposity and metabolic risk indication", "Interpreted alongside other clinical and biochemical markers, not in isolation"],
      ["Bone mineral content (whole body)", "Paediatric growth assessment, research use", "Distinct from and not a substitute for site-specific spine and hip densitometry"],
    ],
    caption: "Principal body composition outputs and their typical clinical use.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Regional and distributional measures are frequently more clinically informative than total body fat percentage, particularly for metabolic risk assessment.",
    clinicalInterpretation:
      "Sarcopenia assessment should use appendicular lean mass indices consistent with the diagnostic framework the referring service applies, not raw lean mass alone.",
    hospitalRecommendation:
      "Agree with referring specialties in advance which composition indices will be reported routinely, to avoid inconsistent report content across operators.",
  },
  {
    type: "h2",
    id: "applications",
    text: "Clinical and Research Applications",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Sarcopenia and frailty assessment in older adults, using appendicular lean mass alongside functional measures.",
      "Nutritional status monitoring in chronic disease, including renal, hepatic and oncological conditions where wasting or fluid shifts are a concern.",
      "Metabolic and cardiovascular risk assessment using central fat distribution measures.",
      "Monitoring body composition change in structured weight management and bariatric surgery programmes.",
      "Sports science applications tracking lean mass and fat mass change through training cycles.",
      "Research studies requiring a validated, reproducible body composition method with low radiation dose.",
    ],
  },
  {
    type: "h2",
    id: "workflow",
    text: "Acquisition and Protocol Requirements",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Use the manufacturer's whole-body composition protocol and standard positioning, since composition analysis is more sensitive to positioning than a single-site bone scan.",
      "Ensure the patient is within the scanner's field of view for the whole-body scan; body habitus outside the scan width introduces measurement error.",
      "Standardise patient preparation, including fasting state and hydration where the local protocol specifies it, and record any deviation.",
      "Remove metal objects and dense clothing artefacts that can be misclassified by the tissue-separation algorithm.",
      "Keep patient positioning as close to identical as possible between serial scans to preserve comparability of regional results.",
      "Record scan mode and any manual region-of-interest adjustment, since these affect the reported regional breakdown.",
    ],
  },
  {
    type: "h2",
    id: "quality",
    text: "Quality Control Specific to Body Composition",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Use a manufacturer-specified soft-tissue or body composition phantom in addition to the standard bone density phantom, where the system provides one.",
      "Establish a separate precision assessment for body composition measurements, since precision for fat and lean mass differs from bone density precision.",
      "Verify tissue calibration after any service intervention affecting the detector chain, since this affects soft-tissue separation as well as bone measurement.",
      "Monitor for reference software or algorithm updates that change tissue-separation behaviour, and re-baseline where necessary.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Composition precision is a separate exercise",
    text: "A precision assessment performed only for bone density does not establish the least significant change for fat or lean mass. Where body composition monitoring is clinically used, run a dedicated precision study for those outputs.",
  },
  {
    type: "h2",
    id: "configuration",
    text: "Configuring a Service for Body Composition",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Confirm the system and software licence include whole-body composition analysis before assuming the capability is available.",
      "Agree the patient population and referral criteria with the requesting specialty before opening the service.",
      "Define which composition indices will be reported as standard, and in what units and normalisation.",
      "Train operators specifically on whole-body positioning, which differs from single-site scanning technique.",
      "Include body composition phantom procedures in the daily or scheduled quality control routine alongside bone density quality control.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical configures and commissions body composition capability on suitable densitometry systems, verifies tissue calibration and phantom procedures at installation, and trains operators on whole-body positioning and reporting so that the capability is used to a diagnostic standard from the outset.",
  },
  {
    type: "h2",
    id: "limitations",
    text: "Limitations",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Extreme body habitus outside the scan width or table capacity limits measurement validity.",
      "Hydration status and recent food or fluid intake can shift results and should be standardised where serial comparison is intended.",
      "Results from different manufacturers' systems are not directly interchangeable without cross-calibration, as with bone density measurements.",
      "Body composition analysis is a measurement service, not a diagnostic imaging study, and abnormal regional findings incidental to the scan require appropriate clinical correlation rather than DEXA-based diagnosis.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is body composition analysis available on every DEXA scanner?",
        a: "No. It requires the appropriate whole-body acquisition mode and software licence, which should be confirmed as part of system specification rather than assumed.",
      },
      {
        q: "How does DEXA compare with bioelectrical impedance for body composition?",
        a: "DEXA provides a regional, three-compartment breakdown with generally higher reproducibility than impedance methods, though both have a role depending on clinical setting and available equipment.",
      },
      {
        q: "Can the same scan be used for bone density and body composition?",
        a: "A whole-body scan can report both, but diagnostic-quality site-specific bone density (spine and hip) still requires the standard dedicated regional protocols.",
      },
      {
        q: "Does radiation dose increase for a body composition scan?",
        a: "Whole-body composition scans remain low-dose relative to most other imaging examinations, consistent with the low-dose characteristics of DEXA generally.",
      },
      {
        q: "What most affects the reliability of serial body composition results?",
        a: "Consistent patient positioning and standardised preparation between scans, together with stable tissue calibration, are the dominant factors in reproducibility.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Body composition analysis uses the same dual-energy principle as bone densitometry to separate fat and lean soft tissue.",
      "Regional and distributional measures, such as appendicular lean mass and android/gynoid fat ratio, are often more informative than total figures.",
      "Composition analysis requires its own precision assessment and phantom quality control, distinct from bone density quality control.",
      "Whole-body positioning technique differs from single-site scanning and must be specifically trained.",
      "Extreme body habitus and inconsistent patient preparation are the most common sources of unreliable results.",
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
    text: "Body composition analysis extends a densitometer's clinical value well beyond bone health, supporting metabolic, nutritional and sports medicine services with a low-dose, reproducible measurement method. Services that treat it as a distinct protocol, with its own training, quality control and reporting conventions, obtain results that referring clinicians can use with confidence.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Clinical practice",
        items: [
          { label: "International Osteoporosis Foundation — densitometry and body composition resources", url: "https://www.osteoporosis.foundation/" },
        ],
      },
      {
        title: "Physics and methodology",
        items: [
          { label: "American Association of Physicists in Medicine — body composition measurement guidance", url: "https://www.aapm.org/" },
          { label: "International Atomic Energy Agency — densitometry quality assurance guidance", url: "https://www.iaea.org/" },
        ],
      },
    ],
    note: "Body composition reference ranges, diagnostic cut-offs for sarcopenia and protocol requirements must follow the installed system's documentation and applicable clinical guidance.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Metabolic medicine and densitometry practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Densitometry configuration and calibration" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Clinical guidance and measurement practice synthesis",
    disclaimer:
      "Educational guidance. It does not replace manufacturer documentation, medical physics assessment or clinical judgement.",
  },
];
