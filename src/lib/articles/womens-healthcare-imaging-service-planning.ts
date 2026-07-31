/**
 * Women's Healthcare cluster — "Women's Healthcare Imaging: Service Planning"
 */

import type { ContentBlock, TocItem } from "../blog";

export const WOMENS_HEALTHCARE_TOC: TocItem[] = [
  { id: "scope", title: "What a Women's Healthcare Imaging Service Covers" },
  { id: "equipment", title: "Equipment Set by Service Level" },
  { id: "pathways", title: "Pathways That Drive Equipment Choice" },
  { id: "facility", title: "Facility and Privacy Requirements" },
  { id: "staffing", title: "Staffing and Competency" },
  { id: "quality", title: "Quality Assurance Across the Service" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const WOMENS_HEALTHCARE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Women's healthcare imaging spans breast imaging, obstetric and gynaecological ultrasound, and bone health assessment. AbuFarha Medical supplies, installs, commissions and supports the mammography, ultrasound and bone densitometry systems these services depend on.",
      "Planned as separate equipment purchases, these services fragment: a mammography room with no assessment pathway, an ultrasound list with no biopsy capability, a densitometer without a quality control programme. Planned as one service, the equipment set follows from the pathways the hospital intends to run.",
      "This guide sets out the scope of a women's healthcare imaging service, the equipment implied at each service level, and the facility, staffing and quality requirements that determine whether the service works in practice.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Service scope, equipment sets by service level, pathway-driven selection, facility and privacy requirements, staffing and quality assurance",
    audience:
      "Service planners, radiology and obstetrics department managers, clinical leads, biomedical engineering teams, procurement committees",
    readingTime: "11 min read",
    technology: "Women's Healthcare",
  },
  {
    type: "h2",
    id: "scope",
    text: "What a Women's Healthcare Imaging Service Covers",
    number: 1,
    body: "Three linked domains, each with its own equipment and quality obligations.",
  },
  {
    type: "ul",
    items: [
      "Breast imaging: screening and diagnostic mammography, tomosynthesis where provided, breast ultrasound, and image-guided biopsy.",
      "Obstetric and gynaecological ultrasound: dating and growth assessment, anatomy scanning, and gynaecological diagnostic work.",
      "Bone health: dual-energy X-ray absorptiometry for osteoporosis assessment and fracture-risk pathways.",
      "Cross-cutting requirements: privacy, chaperoning, results communication, and recall or follow-up management.",
    ],
  },
  {
    type: "h2",
    id: "equipment",
    text: "Equipment Set by Service Level",
    number: 2,
  },
  {
    type: "table",
    headers: ["Service level", "Core equipment", "Planning implication"],
    rows: [
      ["Basic diagnostic", "Digital mammography, general ultrasound with suitable transducers", "Referral pathway required for assessment and biopsy"],
      ["Full breast service", "Mammography with tomosynthesis, dedicated breast ultrasound, biopsy capability", "Assessment room, specimen handling, multidisciplinary review"],
      ["Obstetric service", "Ultrasound with obstetric transducers and reporting workflow", "Room count driven by list volume and scan duration"],
      ["Bone health service", "DEXA densitometer with phantom quality control programme", "Daily QC and reference-database governance"],
      ["Integrated service", "All of the above in coordinated pathways", "Shared scheduling, records and results communication"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Equipment should be specified from the pathway the hospital will actually operate, not from the widest capability that could theoretically be offered.",
    clinicalInterpretation:
      "A screening capability without an assessment pathway generates findings the service cannot resolve locally.",
    hospitalRecommendation:
      "Define the intended pathways first, then confirm every step in them has both equipment and staffing.",
  },
  {
    type: "h2",
    id: "pathways",
    text: "Pathways That Drive Equipment Choice",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Screening pathway: throughput, recall handling, and where assessment takes place when a screen is abnormal.",
      "Symptomatic pathway: combined mammography and ultrasound assessment, with biopsy available in the same episode where possible.",
      "Biopsy pathway: guidance modality, specimen handling, pathology interface and results communication.",
      "Obstetric pathway: scan types by gestation, list durations, and escalation for suspected anomalies.",
      "Bone health pathway: referral criteria, scan sites, reporting standard and repeat-scan interval governance.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Repeat DEXA scans must be comparable",
    text: "Fracture-risk pathways depend on comparing scans over time, which requires the same system, consistent positioning and a maintained quality control record — a service design requirement, not just a technical one.",
  },
  {
    type: "h2",
    id: "facility",
    text: "Facility and Privacy Requirements",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Radiation shielding assessment for mammography and DEXA rooms, with a documented radiation protection programme.",
      "Changing and gowning provision within the room or immediately adjacent, so patients are not moved through public areas.",
      "Acoustic and visual privacy for examination and discussion, including space for a supporter or chaperone.",
      "A discussion space for results conversations, separate from the examination room where possible.",
      "Layout supporting the biopsy pathway: procedure space, specimen handling and recovery.",
      "Accessibility for patients with limited mobility, and space for staff to assist with positioning.",
    ],
  },
  {
    type: "h2",
    id: "staffing",
    text: "Staffing and Competency",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Mammography positioning competency, assessed and maintained — positioning is the dominant determinant of mammographic image quality.",
      "Ultrasound operator competency by scan type, since obstetric and breast ultrasound are distinct skill sets.",
      "DEXA operator competency covering positioning, analysis region placement and quality control execution.",
      "Reporting capacity matched to acquisition capacity, so throughput is not limited downstream.",
      "Chaperone availability and clear local policy.",
      "Documented training records per staff member and per system, with a refresher cycle.",
    ],
  },
  {
    type: "h2",
    id: "quality",
    text: "Quality Assurance Across the Service",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Daily and periodic quality control per modality, performed to the manufacturer's specification and recorded.",
      "Image quality review with defined action levels, so degradation triggers investigation rather than discussion.",
      "Repeat and reject rate audit, reviewed for positioning and technique trends.",
      "Dose monitoring for the modalities using ionising radiation, trended against local reference levels.",
      "Preventive maintenance scheduled per system, with acceptance-test results retained as the performance baseline.",
      "Recall and follow-up audit, confirming that findings reach a documented conclusion.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs, commissions and supports mammography systems, ultrasound systems and bone densitometers, and provides the operator training, preventive maintenance and spare parts supply a women's healthcare imaging service depends on.",
  },
  {
    type: "faq",
    items: [
      {
        q: "What equipment does a basic women's healthcare imaging service need?",
        a: "Digital mammography and an ultrasound system with appropriate transducers, plus a defined referral pathway for assessment and biopsy work the service does not perform locally.",
      },
      {
        q: "Is tomosynthesis necessary?",
        a: "It changes case handling in dense breast tissue and assessment workflows. Whether it is necessary depends on the case mix and the pathways the service runs, and it carries reporting workload implications.",
      },
      {
        q: "Can obstetric and breast ultrasound share one system?",
        a: "Technically often yes with the right transducers, but list volumes, scan durations and operator skill sets usually separate them in practice. Room and system count follow from list planning.",
      },
      {
        q: "Why is DEXA planned alongside breast and obstetric imaging?",
        a: "Bone health assessment sits in the same patient population and service structure, and shares the privacy, scheduling and quality-control requirements of the wider service.",
      },
      {
        q: "What is the most common planning omission?",
        a: "Capability without pathway: screening without a local assessment route, or imaging capacity without matching reporting capacity. Both generate findings the service cannot conclude.",
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
    text: "A women's healthcare imaging service is defined by pathways, not by equipment. Establish the pathways the hospital will run, confirm each step has equipment, space, staffing and reporting capacity, and hold every modality to a recorded quality control programme. Equipment selected that way is used to its capability; equipment selected first is not.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Breast, obstetric and bone health imaging service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Mammography, ultrasound and DEXA installation and maintenance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Service planning and field practice synthesis",
    disclaimer:
      "Educational guidance on women's healthcare imaging service planning. It does not replace clinical guidelines, manufacturer documentation or local regulatory requirements.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer technical and quality control documentation for mammography, ultrasound and DEXA systems." },
      { label: "Institutional service pathway definitions, recall procedures and audit records." },
      { label: "National radiation protection requirements applicable to mammography and densitometry rooms." },
    ],
  },
];
