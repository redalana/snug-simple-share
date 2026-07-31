/**
 * GE manufacturer cluster — "GE Lunar Prodigy DEXA: System Guide"
 */

import type { ContentBlock, TocItem } from "../blog";

export const LUNAR_PRODIGY_TOC: TocItem[] = [
  { id: "platform", title: "What the Lunar Prodigy Is" },
  { id: "measurement", title: "How the Measurement Works" },
  { id: "clinical", title: "Clinical Use and Reporting" },
  { id: "precision", title: "Precision, Cross-Calibration and Comparability" },
  { id: "room", title: "Room and Service Requirements" },
  { id: "evaluation", title: "Evaluating a Pre-Owned Prodigy" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const LUNAR_PRODIGY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "The GE Lunar Prodigy is a fan-beam dual-energy X-ray absorptiometry (DEXA) system used for bone mineral density measurement and body composition assessment. AbuFarha Medical supplies, installs, commissions and services Lunar Prodigy densitometers.",
      "Densitometry is unusual among imaging services because its clinical output is a number, compared against a reference population and against the same patient's previous measurement. That makes precision and calibration stability more important than image appearance — a densitometer is a measuring instrument first.",
      "This guide explains what the platform does, how the measurement is produced, what governs comparability between scans, and what the room and service obligations are.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Fan-beam DEXA architecture, measurement principle, clinical reporting, precision and cross-calibration, room requirements and pre-owned evaluation",
    audience:
      "Rheumatologists, endocrinologists and radiologists, DEXA technologists, medical physicists, biomedical engineering teams",
    readingTime: "11 min read",
    technology: "Bone Densitometers (DEXA)",
  },
  {
    type: "h2",
    id: "platform",
    text: "What the Lunar Prodigy Is",
    number: 1,
    body: "A fan-beam densitometer measuring bone mineral density at standard skeletal sites.",
  },
  {
    type: "p",
    text: "The system scans the lumbar spine, proximal femur and, where indicated, forearm and whole body, producing bone mineral density values, T-scores and Z-scores against reference databases. Fan-beam geometry shortens acquisition time relative to older pencil-beam designs, which matters mainly for patient throughput and motion.",
  },
  {
    type: "h2",
    id: "measurement",
    text: "How the Measurement Works",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Two X-ray energies are transmitted through the region of interest; bone and soft tissue attenuate them differently.",
      "The differential attenuation allows bone mineral content to be separated from soft tissue and expressed per unit projected area.",
      "Analysis depends on correct region-of-interest placement — the single largest source of avoidable variation in reported values.",
      "Reference databases convert absolute density into T-scores and Z-scores; the database selected therefore affects the reported score.",
      "Radiation dose per examination is very low compared with diagnostic radiography, but justification and local rules still apply.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "The technologist is part of the instrument",
    text: "Region-of-interest placement and patient positioning determine reproducibility more than any hardware parameter. Precision assessment measures the technologist and the system together, which is exactly the quantity that matters clinically.",
  },
  {
    type: "h2",
    id: "clinical",
    text: "Clinical Use and Reporting",
    number: 3,
  },
  {
    type: "table",
    headers: ["Use", "What it answers", "Reporting note"],
    rows: [
      ["Osteoporosis diagnosis", "Is density below the diagnostic threshold", "T-score at the appropriate site and population reference"],
      ["Fracture risk assessment", "What is the overall risk picture", "Density is one input alongside clinical risk factors"],
      ["Treatment monitoring", "Has density changed meaningfully", "Change must exceed the least significant change for the site"],
      ["Secondary causes assessment", "How does the patient compare with age-matched peers", "Z-score is the relevant statistic in younger patients"],
      ["Body composition", "Lean and fat distribution", "Requires the relevant analysis option and protocol"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "A follow-up scan is only interpretable when the precision error of the scanning service is known; without it, small changes cannot be distinguished from noise.",
    clinicalInterpretation:
      "Reporting a density change smaller than the least significant change as \"improvement\" or \"deterioration\" is a measurement error, not a clinical finding.",
    hospitalRecommendation:
      "Establish and document in vivo precision for each technologist, and state the least significant change in the report template.",
  },
  {
    type: "h2",
    id: "precision",
    text: "Precision, Cross-Calibration and Comparability",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Daily quality control with the manufacturer's phantom, with results trended rather than merely recorded.",
      "In vivo precision assessment per technologist, producing a documented least significant change for each site.",
      "Serial scans should be performed on the same system where possible; results from different manufacturers are not directly interchangeable.",
      "Where a system is replaced, cross-calibration is required before follow-up scans are compared with historical values.",
      "Software version and reference database changes must be recorded, because they can shift reported scores without any hardware change.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Replacement breaks the series unless planned",
    text: "Installing a new densitometer without cross-calibration silently invalidates comparison with every prior scan. Plan cross-calibration into the replacement project from the outset.",
  },
  {
    type: "h2",
    id: "room",
    text: "Room and Service Requirements",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Space for the scanner table with full scan travel plus patient transfer and technologist working room on both sides.",
      "Shielding assessment per national requirements — dose is low, but the room is still an X-ray installation.",
      "Stable environmental conditions and power quality, with confirmed floor loading and access route for delivery.",
      "Network connectivity for report and image transfer to the record system.",
      "Preventive maintenance covering X-ray source and detector performance, scan mechanics and calibration verification.",
      "Technologist training and competency records, including positioning and analysis technique.",
    ],
  },
  {
    type: "h2",
    id: "evaluation",
    text: "Evaluating a Pre-Owned Prodigy",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Quality control history — a continuous phantom record is the strongest evidence of calibration stability.",
      "Software version, licensed analysis options and reference databases installed.",
      "Scan mechanics condition and detector performance verified by measurement.",
      "Completeness of positioning aids and phantoms, which are frequently missing from second-hand offers.",
      "Service record and parts supportability for the specific generation.",
      "A cross-calibration plan where the system will replace an existing densitometer with historical patient data.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs, commissions and supports GE Lunar bone densitometers, including the Lunar Prodigy, together with the preventive maintenance, spare parts and technologist training a densitometry service requires.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Can DEXA results from different manufacturers be compared directly?",
        a: "No. Absolute density values are not interchangeable between manufacturers. Serial monitoring should use the same system, and cross-calibration is required when a system changes.",
      },
      {
        q: "What is the least significant change and why does it matter?",
        a: "It is the smallest density change that can be distinguished from measurement noise for a given site and service. Without it, follow-up scans cannot be interpreted reliably.",
      },
      {
        q: "How much radiation does a DEXA scan involve?",
        a: "Very little compared with diagnostic radiography, but examinations must still be justified and the installation still falls under radiation protection requirements.",
      },
      {
        q: "Does body composition analysis require a separate option?",
        a: "It requires the relevant analysis capability and protocol. Confirm which analysis options are licensed on any specific system rather than assuming the capability is present.",
      },
      {
        q: "What quality control does a densitometer need?",
        a: "Daily phantom quality control with trended results, documented in vivo precision per technologist, and preventive maintenance including calibration verification.",
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
    text: "A Lunar Prodigy is a measuring instrument whose clinical value rests on calibration stability, positioning technique and documented precision. Run the quality control programme properly, quantify least significant change, and plan cross-calibration whenever the system changes — then the numbers can be trusted to guide treatment.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Bone densitometry service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Densitometry installation and calibration support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer documentation and field service practice synthesis",
    disclaimer:
      "Educational guidance on dual-energy X-ray absorptiometry systems. It does not replace manufacturer documentation or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer technical documentation and operating instructions for installed densitometry systems." },
      { label: "Institutional densitometry quality control and precision assessment records." },
      { label: "National radiation protection requirements applicable to densitometry installations." },
    ],
  },
];
