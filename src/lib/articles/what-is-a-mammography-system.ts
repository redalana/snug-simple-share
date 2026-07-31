/**
 * What is a mammography system — Mammography cluster (pillar).
 */

import type { ContentBlock, TocItem } from "../blog";

export const WHAT_IS_MAMMOGRAPHY_TOC: TocItem[] = [
  { id: "overview", title: "What a Mammography System Is" },
  { id: "how", title: "How Mammographic Imaging Works" },
  { id: "components", title: "Key Components" },
  { id: "types", title: "System Types and Capabilities" },
  { id: "clinical", title: "Clinical Uses: Screening and Diagnosis" },
  { id: "quality", title: "Image Quality, Dose and Compression" },
  { id: "requirements", title: "What a Mammography Service Requires" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const WHAT_IS_MAMMOGRAPHY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A mammography system is a dedicated low-energy X-ray imaging device designed for one task: detecting small differences in soft-tissue attenuation within the breast, including calcifications measured in fractions of a millimetre. Nothing about it is general purpose — the tube target and filtration, the compression paddle, the anti-scatter grid, the detector and the display are all optimised for that single low-contrast, high-resolution problem.",
      "It is also the imaging modality with the most tightly regulated quality assurance regime anywhere in radiology, because it is used on asymptomatic people at population scale. A system that drifts slightly in dose or contrast does not produce an obviously broken image; it produces a subtly less sensitive screening programme.",
      "This guide explains how mammographic imaging works, what the components do, how system types differ, and what a hospital must provide — physically, technically and organisationally — to run a mammography service properly.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Imaging principles, system components, digital and tomosynthesis system types, screening and diagnostic use, image quality and dose control, and service requirements",
    audience:
      "Hospital managers, radiologists and radiographers, biomedical engineers, procurement and project teams",
    readingTime: "15 min read",
    technology: "Mammography Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "What a Mammography System Is",
    number: 1,
    body: "A purpose-built low-energy radiography system optimised for soft-tissue contrast and fine detail.",
  },
  {
    type: "ul",
    items: [
      "Operates at low tube voltages, typically in the region of 25–35 kV, where soft-tissue contrast is greatest.",
      "Uses specialised target and filter combinations rather than the tungsten-aluminium combination of general radiography.",
      "Applies controlled compression to reduce thickness, separate overlapping tissue and lower dose.",
      "Uses a high-resolution detector with small pixel pitch to resolve microcalcifications.",
      "Requires diagnostic-grade high-luminance displays for reporting; a general monitor is not adequate.",
      "Operates under a mandatory quality assurance regime with defined tolerances and test frequencies.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "The clinical target is contrast, not penetration",
    text: "Most radiography problems are about penetrating tissue. Mammography is the opposite: the challenge is distinguishing tissues whose attenuation differs very slightly, while still resolving calcifications a few hundred micrometres across. Every design decision follows from that.",
  },
  {
    type: "h2",
    id: "how",
    text: "How Mammographic Imaging Works",
    number: 2,
    body: "Low-energy X-rays, compression and a high-resolution detector combine to make small differences visible.",
  },
  {
    type: "table",
    headers: ["Stage", "What happens", "Why it matters"],
    rows: [
      ["Positioning", "The breast is positioned to include as much tissue as possible in the field", "Positioning quality is the largest determinant of screening sensitivity"],
      ["Compression", "The paddle applies controlled force to reduce and even out thickness", "Reduces dose, motion and tissue overlap; improves contrast"],
      ["Low-energy exposure", "A specialised target/filter beam is selected automatically for the thickness and density", "Optimises the contrast-to-dose balance"],
      ["Scatter rejection", "Grid or scatter-correction processing removes scattered radiation", "Scatter is the main contrast-destroying factor"],
      ["Detection", "A small-pixel digital detector records the transmitted beam", "Determines resolution and dose efficiency"],
      ["Processing", "Presentation processing renders the image for reading", "Affects perceived contrast and calcification conspicuity"],
      ["Reading", "Images are reported on high-luminance diagnostic displays", "Display performance is part of diagnostic accuracy"],
    ],
  },
  {
    type: "h2",
    id: "components",
    text: "Key Components",
    number: 3,
    body: "Each component exists to protect either contrast or spatial resolution.",
  },
  {
    type: "table",
    headers: ["Component", "Function", "Specification consequence"],
    rows: [
      ["X-ray tube with small focal spot", "Produces the low-energy beam and limits geometric blur", "Focal spot size affects fine detail and magnification work"],
      ["Target and filter combination", "Shapes the spectrum for the tissue being imaged", "Multiple combinations allow optimisation across breast densities"],
      ["Automatic exposure control", "Selects technique from measured thickness and attenuation", "Determines dose consistency across patients"],
      ["Compression paddle and force control", "Reduces thickness and immobilises tissue", "Paddle range and flexibility affect comfort and coverage"],
      ["Anti-scatter provision", "Grid or software scatter correction", "Directly determines achievable contrast"],
      ["Digital detector", "Converts X-rays to the image; small pixel pitch", "Sets spatial resolution and dose efficiency"],
      ["Acquisition workstation", "Technique control, quality checks and image handling", "Workflow speed in a screening list"],
      ["Reporting displays", "High-luminance, high-resolution, calibrated", "Non-negotiable for diagnostic reading"],
      ["Biopsy and localisation accessories", "Stereotactic or tomosynthesis-guided sampling", "Determines diagnostic self-sufficiency"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The detector is not the whole system",
    clinicalInterpretation:
      "Procurement discussions concentrate on detector specifications, but positioning ergonomics, paddle design, automatic exposure control behaviour across densities and reporting display quality influence real-world detection at least as much.",
    hospitalRecommendation:
      "Evaluate systems with your own radiographers positioning real patients and your own radiologists reading on the intended displays. Detector data sheets do not predict either experience.",
  },
  {
    type: "h2",
    id: "types",
    text: "System Types and Capabilities",
    number: 4,
    body: "Modern mammography is digital; the meaningful distinctions are in acquisition capability.",
  },
  {
    type: "table",
    headers: ["Type", "Capability", "Where it fits"],
    rows: [
      ["Full-field digital mammography (2D)", "Standard digital projection imaging", "Baseline screening and diagnostic capability"],
      ["Digital breast tomosynthesis", "Multiple low-dose projections reconstructed into thin sections", "Reduces tissue overlap; improves lesion characterisation"],
      ["Combined 2D + tomosynthesis with synthetic 2D", "Tomosynthesis plus a reconstructed 2D image", "Avoids the dose of two separate acquisitions"],
      ["Contrast-enhanced mammography", "Dual-energy imaging after iodinated contrast", "Problem-solving where MRI is unavailable or unsuitable"],
      ["Stereotactic biopsy capable systems", "Guided needle sampling on the mammography unit", "Diagnostic self-sufficiency"],
      ["Mobile screening units", "Vehicle-mounted systems for outreach", "Population coverage in dispersed geographies"],
      ["Specimen radiography", "Imaging of excised tissue", "Intraoperative margin confirmation"],
    ],
  },
  {
    type: "h2",
    id: "clinical",
    text: "Clinical Uses: Screening and Diagnosis",
    number: 5,
    body: "Screening and diagnostic mammography share equipment and differ in almost everything else.",
  },
  {
    type: "table",
    headers: ["Aspect", "Screening", "Diagnostic"],
    rows: [
      ["Population", "Asymptomatic individuals in a defined age range", "Symptomatic patients or recalled screening findings"],
      ["Views", "Standard projections, protocol-driven", "Tailored additional and magnified views"],
      ["Reading model", "High volume, often double reading or arbitration", "Immediate correlation with ultrasound and clinical findings"],
      ["Objective", "Maximum sensitivity at acceptable recall rates", "Characterisation and definitive management"],
      ["Throughput", "High; workflow efficiency is critical", "Lower; time per patient is longer"],
      ["Additional modalities", "Referral onward if recalled", "Ultrasound, biopsy and MRI in the same pathway"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Buying a screening system for a diagnostic service",
    text: "A high-throughput screening configuration without magnification views, biopsy capability or integration with ultrasound cannot complete a diagnostic pathway. Define whether the unit serves screening, diagnosis or both before specifying, because the accessory and workflow requirements differ substantially.",
  },
  {
    type: "h2",
    id: "quality",
    text: "Image Quality, Dose and Compression",
    number: 6,
    body: "Mammography operates in a narrow band where quality and dose are tightly coupled.",
  },
  {
    type: "ul",
    items: [
      "Dose is constrained by regulation and by the fact that the population is asymptomatic; quality cannot simply be bought with dose.",
      "Compression reduces dose and improves contrast, but excessive force reduces attendance and repeat participation.",
      "Automatic exposure control behaviour across dense and thick breasts is a critical, testable performance characteristic.",
      "Positioning errors — inadequate posterior tissue, nipple not in profile, skin folds — are the leading cause of repeats and missed tissue.",
      "Quality assurance is mandatory and prescriptive: daily, weekly, monthly and annual tests with defined tolerances.",
      "Reporting display calibration and reading room lighting materially affect detection of low-contrast findings.",
      "Repeat and recall rates should be monitored as service quality indicators, not treated as radiographer performance measures alone.",
      "Breast density affects sensitivity and is a factor in supplementary imaging decisions, not a system deficiency.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Quality assurance failure is silent",
    text: "Unlike CT or fluoroscopy, a mammography system operating outside tolerance rarely produces obviously abnormal images. It produces images that look acceptable and detect slightly less. This is why the prescribed QA programme is not optional and why deviations must be investigated rather than normalised.",
  },
  {
    type: "h2",
    id: "requirements",
    text: "What a Mammography Service Requires",
    number: 7,
    body: "The equipment is a fraction of what the service needs.",
  },
  {
    type: "ul",
    items: [
      "A dedicated room with appropriate shielding, privacy, changing provision and a dignified patient environment.",
      "Trained mammographers, with positioning competency assessed and maintained — the highest-value investment in the service.",
      "Radiologists trained and reading sufficient volume to maintain performance, with double reading where the programme requires it.",
      "High-luminance calibrated reporting displays in a controlled reading environment.",
      "A medical physics service to deliver acceptance and the ongoing QA programme.",
      "Ultrasound and biopsy capability in the same pathway for diagnostic work.",
      "PACS and reporting integration, plus screening programme data management where applicable.",
      "A recall, results and audit process, with performance indicators reviewed regularly.",
      "Preventive maintenance and a service contract that accounts for tube, detector and paddle wear.",
      "Patient information and comfort measures, which directly influence attendance and re-attendance.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is tomosynthesis now the standard of care?",
        a: "It is widely adopted and improves lesion characterisation and reduces recall in many settings, particularly in denser breasts. Whether it is mandated depends on the screening programme; the practical questions are reading time, storage volume and radiologist training capacity.",
      },
      {
        q: "Why does mammography need such specific X-ray energies?",
        a: "Because breast tissues differ only slightly in attenuation. Low tube voltages with specialised target and filter combinations maximise that small difference, which higher-energy general radiography beams would wash out entirely.",
      },
      {
        q: "Does compression have to be uncomfortable?",
        a: "Compression is necessary — it lowers dose, reduces motion and separates overlapping tissue — but force should be applied to adequacy rather than to maximum. Technique, paddle design and communication substantially affect the experience, and comfort affects re-attendance.",
      },
      {
        q: "Can one system serve both screening and diagnosis?",
        a: "Yes, provided it is specified with magnification views, appropriate paddles and biopsy capability, and provided the schedule protects both high-throughput screening lists and longer diagnostic appointments.",
      },
      {
        q: "What limits mammographic sensitivity?",
        a: "Breast density is the dominant factor, followed by positioning quality and reading conditions. Dense tissue reduces conspicuity, which is why supplementary imaging pathways exist rather than higher doses.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning or upgrading a mammography service?",
    subheading:
      "AbuFarha Medical supplies, installs and maintains digital mammography and tomosynthesis systems, with room planning, quality assurance support and mammographer training.",
    technology: "Mammography Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Breast imaging applications and training" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Mammography installation, QA and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "IEC equipment standards, European and national breast screening quality assurance guidelines, and manufacturer documentation",
    disclaimer:
      "Screening intervals, age ranges, dose limits and quality assurance requirements are jurisdiction-specific. Follow your national screening programme, regulator and medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Screening quality assurance",
        items: [
          { label: "European guidelines for quality assurance in breast cancer screening and diagnosis" },
          { label: "National breast screening programme quality standards" },
        ],
      },
      {
        title: "Equipment standards",
        items: [
          { label: "IEC 60601-2-45 for mammographic X-ray equipment" },
          { label: "IEC 61223-3-2 — acceptance testing for mammographic equipment" },
        ],
      },
      {
        title: "Dose and protection",
        items: [
          { label: "ICRP recommendations on radiological protection in medicine" },
          { label: "National diagnostic reference levels for mammography" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards and programmes are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Mammography is a low-energy, high-resolution modality built for very small attenuation differences.",
      "Compression, spectrum selection and scatter rejection exist to protect contrast at low dose.",
      "Positioning competency and reporting display quality influence detection as much as detector specifications.",
      "Tomosynthesis reduces tissue overlap but adds reading time, training and storage requirements.",
      "Screening and diagnostic services need different accessories, scheduling and pathway integration.",
      "Quality assurance failures are silent — prescribed testing with defined tolerances is mandatory.",
      "The service, not the machine, determines outcomes: staff, physics support, pathways and audit.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "A mammography system is one component of a tightly governed clinical service.",
  },
  {
    type: "p",
    text: "Hospitals that fund positioning training, diagnostic displays, medical physics support and audit alongside the equipment get the sensitivity the technology is capable of. Hospitals that buy the unit alone typically own a modern system delivering a service that quietly underperforms.",
  },
];
