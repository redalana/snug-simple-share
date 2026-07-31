/**
 * Canon Medical (Toshiba) manufacturer cluster —
 * "Toshiba Aquilion 64 CT: System Guide"
 */

import type { ContentBlock, TocItem } from "../blog";

export const AQUILION_64_TOC: TocItem[] = [
  { id: "platform", title: "What the Aquilion 64 Is" },
  { id: "architecture", title: "Detector and Acquisition Architecture" },
  { id: "clinical", title: "Clinical Capability" },
  { id: "dose", title: "Dose Management" },
  { id: "evaluation", title: "Evaluating a Pre-Owned Aquilion 64" },
  { id: "service", title: "Service, Tube Life and Uptime" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const AQUILION_64_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "The Toshiba Aquilion 64 — now part of the Canon Medical lineage following the acquisition of Toshiba Medical Systems — is a 64-slice multidetector CT scanner used across general radiology, emergency imaging, oncology and vascular work. AbuFarha Medical supplies, installs, commissions and services Aquilion 64 systems.",
      "Sixty-four slice CT remains the practical workhorse configuration for the majority of hospital CT services. It provides sub-millimetre isotropic imaging, useful volume coverage per rotation, and reconstruction capability sufficient for angiographic and multiplanar work, without the capital and service cost of premium wide-detector platforms.",
      "This guide explains what the platform provides, what it does well clinically, what to verify before acquiring one, and what the service and lifecycle picture looks like.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Platform architecture, detector configuration, clinical capability, dose management, pre-owned evaluation and lifecycle service planning",
    audience:
      "Radiologists and radiographers, CT service managers, biomedical engineering teams, capital procurement committees",
    readingTime: "12 min read",
    technology: "CT Scanners",
  },
  {
    type: "h2",
    id: "platform",
    text: "What the Aquilion 64 Is",
    number: 1,
    body: "A 64-slice multidetector CT platform built for general-purpose hospital workload.",
  },
  {
    type: "p",
    text: "The system acquires 64 simultaneous detector rows per rotation, producing thin-slice volumetric datasets that can be reformatted in any plane without re-scanning. For most departments the meaningful consequence is not raw slice count but the combination of coverage per rotation, rotation time and reconstruction throughput, which together determine how quickly a department can move a list.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Slice count is a specification, not an outcome",
    text: "Beyond 64 slices, incremental clinical benefit concentrates in cardiac and paediatric work where temporal resolution and coverage per rotation dominate. For routine body, neuro and trauma imaging, 64-slice systems remain fully diagnostic.",
  },
  {
    type: "h2",
    id: "architecture",
    text: "Detector and Acquisition Architecture",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Detector rows and collimated width determine coverage per rotation and therefore scan time for a given anatomical range.",
      "Rotation time governs temporal resolution — the limiting factor in cardiac and uncooperative-patient imaging.",
      "Helical pitch selection trades scan speed against dose and image noise; protocol libraries should encode these decisions rather than leave them per-operator.",
      "Reconstruction capability — kernels, thin-slice sets, multiplanar and vascular reformats — decides how much diagnostic value is extracted from one acquisition.",
      "Console and workstation throughput often limits departmental productivity before the gantry does.",
    ],
  },
  {
    type: "h2",
    id: "clinical",
    text: "Clinical Capability",
    number: 3,
  },
  {
    type: "table",
    headers: ["Application", "Suitability on a 64-slice platform", "Practical note"],
    rows: [
      ["Head, spine and musculoskeletal CT", "Fully suited", "Thin-slice reformats replace repeat acquisitions"],
      ["Chest, abdomen and pelvis", "Fully suited", "Single-breath-hold coverage for routine body imaging"],
      ["Trauma and emergency whole-body", "Well suited", "Speed and protocol discipline matter more than slice count"],
      ["CT angiography (aorta, peripheral, carotid)", "Well suited", "Contrast timing is the dominant quality variable"],
      ["Cardiac CT", "Feasible with protocol control", "Heart-rate control and rotation time govern feasibility"],
      ["Oncology staging and follow-up", "Fully suited", "Protocol consistency between studies is essential for comparability"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Contrast timing, patient preparation and protocol governance produce more diagnostic difference on this class of scanner than any remaining hardware upgrade.",
    clinicalInterpretation:
      "Non-diagnostic angiographic studies are usually timing failures rather than platform limitations.",
    hospitalRecommendation:
      "Lock protocols centrally, review non-diagnostic studies weekly and treat protocol drift as a governance issue.",
  },
  {
    type: "h2",
    id: "dose",
    text: "Dose Management",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Automatic exposure control adapting technique to patient attenuation, configured per protocol rather than globally.",
      "Iterative or advanced reconstruction where available, used to reduce dose at constant diagnostic confidence — not to salvage under-exposed acquisitions after the fact.",
      "Scan-range discipline: over-ranging beyond the clinical question is the most common avoidable dose source.",
      "Dose reporting and audit against local reference levels, reviewed periodically as programme data.",
      "Paediatric and repeat-imaging protocols defined separately, with justification recorded.",
    ],
  },
  {
    type: "h2",
    id: "evaluation",
    text: "Evaluating a Pre-Owned Aquilion 64",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Tube history: cumulative usage, replacement record and remaining expectation. The tube is the dominant lifecycle cost on any CT scanner.",
      "Detector and DAS condition, with measured image-quality verification rather than visual inspection of a phantom image.",
      "Software version, licensed reconstruction options and whether they transfer with the system.",
      "Console and workstation inventory, including reconstruction capacity and network integration.",
      "Complete service history: preventive maintenance records, fault log and calibration results.",
      "Installation feasibility for the receiving room: shielding, power, cooling, floor loading and access route.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "The tube decides the deal",
    text: "A pre-owned CT with an aged tube can consume its purchase saving in one replacement. Establish tube history before negotiating price, not after.",
  },
  {
    type: "h2",
    id: "service",
    text: "Service, Tube Life and Uptime",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "A preventive maintenance schedule covering tube and generator performance, detector calibration, gantry mechanics and cooling.",
      "Environmental control: CT rooms fail on cooling and power quality more often than on gantry faults.",
      "Spare parts strategy with realistic lead times, and a defined escalation path for a scanner-down event.",
      "Radiation protection programme: shielding verification, staff dosimetry and periodic performance testing.",
      "Radiographer and engineer training with maintained competency records.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs, commissions and supports Toshiba and Canon Medical CT systems, including the Aquilion 64, with the biomedical engineering, spare parts and training programmes a CT service requires.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is Toshiba Medical the same as Canon Medical?",
        a: "Toshiba Medical Systems became Canon Medical Systems following acquisition. Installed systems continue to carry Toshiba branding while service, parts and software support follow the Canon Medical lineage.",
      },
      {
        q: "Is a 64-slice CT still clinically adequate?",
        a: "For general radiology, emergency, oncology and most vascular imaging, yes. Premium wide-detector platforms add most value in cardiac, paediatric and specialised perfusion work.",
      },
      {
        q: "What limits the lifetime of a CT scanner?",
        a: "The X-ray tube first, followed by detector electronics, gantry mechanics and software supportability. Age alone is a poor predictor; usage history and service record are better ones.",
      },
      {
        q: "What does a CT room need beyond the scanner?",
        a: "Radiation shielding, adequate power quality, dedicated cooling capacity, verified floor loading, network integration to PACS and a documented radiation protection programme.",
      },
      {
        q: "Can protocols be standardised across two different CT scanners?",
        a: "Protocols can be harmonised in intent and dose target, but not copied literally between platforms. Harmonisation is a physicist-supported exercise performed at commissioning.",
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
    text: "The Aquilion 64 remains a capable general-purpose CT platform whose clinical output is governed by protocol discipline, contrast technique and tube condition rather than slice count. Verify the tube and service history, plan the room properly, and govern protocols centrally — that combination determines what the scanner delivers.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Diagnostic CT service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "CT installation and preventive maintenance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer documentation and field service practice synthesis",
    disclaimer:
      "Educational guidance on multidetector CT platforms. It does not replace manufacturer documentation or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer technical documentation and operating instructions for installed CT systems." },
      { label: "Institutional CT protocol libraries and dose audit records." },
      { label: "National radiation protection requirements applicable to CT installations." },
    ],
  },
];
