/**
 * Lithotripsy procurement article — buying guide.
 */

import type { ContentBlock, TocItem } from "../blog";

export const ESWL_BUYING_TOC: TocItem[] = [
  { id: "start", title: "Start From the Case Mix, Not the Catalogue" },
  { id: "generation", title: "Shock Wave Generation Principle" },
  { id: "imaging", title: "Imaging and Localisation Configuration" },
  { id: "table", title: "Table, Positioning and Ergonomics" },
  { id: "consumables", title: "Consumables and Cost Per Treatment" },
  { id: "preowned", title: "Evaluating a Pre-Owned System" },
  { id: "tender", title: "Tender and Award Criteria" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ESWL_BUYING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A lithotripter is a modest capital purchase with an outsized dependence on configuration. Two systems at similar price points can differ enormously in treatable case mix, per-treatment consumable cost and anaesthesia requirement — none of which appears in a headline energy specification.",
      "Procurement that starts from the clinical case mix and works backwards to configuration produces a system the service can actually use. Procurement that starts from a price comparison usually produces a system that treats a narrower case mix than expected.",
      "This guide sets out the specification decisions that matter, how to evaluate a pre-owned system, and the award criteria that separate a defensible tender from a purchase decision made on capital cost alone.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Case-mix-led specification, generation principles, imaging configuration, positioning ergonomics, consumable economics, pre-owned evaluation, and tender criteria",
    audience:
      "Urologists, procurement and tender committees, biomedical engineering teams, finance and service planners",
    readingTime: "13 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "start",
    text: "Start From the Case Mix, Not the Catalogue",
    number: 1,
    body: "Specification is a translation of expected caseload into configuration.",
  },
  {
    type: "ul",
    items: [
      "Expected annual treatment volume, and the proportion of renal versus ureteric stones.",
      "How many cases require fluoroscopic localisation because ultrasound access is unreliable.",
      "Whether the service intends to operate as an outpatient pathway with minimal anaesthesia support.",
      "Which alternative routes exist in the hospital, since a strong endoscopic service changes what the lithotripter must cover.",
      "Who will operate the system, and what training and competency framework will support them.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Write the case mix into the specification",
    text: "A specification that states the intended case mix lets suppliers propose the right configuration — and lets the committee reject configurations that cannot serve it.",
  },
  {
    type: "h2",
    id: "generation",
    text: "Shock Wave Generation Principle",
    number: 2,
  },
  {
    type: "table",
    headers: ["Principle", "Procurement implications", "Watch for"],
    rows: [
      ["Electrohydraulic", "Lower entry cost historically; high peak pressures", "Electrode consumable cost and replacement frequency"],
      ["Electromagnetic", "Long, stable source life; broad clinical coverage", "Source replacement cost and interval at high volume"],
      ["Piezoelectric", "Tight focus and low skin entry pressure; often minimal anaesthesia", "Confirm energy range suits your stone mix"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The generation principle sets the anaesthesia model, the consumable cost line and the localisation accuracy required — three things that dominate the operating budget.",
    clinicalInterpretation:
      "A system that treats comfortably with light analgesia changes staffing and pathway design, not just patient experience.",
    hospitalRecommendation:
      "Evaluate generation principle against your anaesthesia support and consumable budget before comparing capital prices.",
  },
  {
    type: "h2",
    id: "imaging",
    text: "Imaging and Localisation Configuration",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Integrated ultrasound provides radiation-free targeting and continuous monitoring of fragmentation during the session.",
      "Fluoroscopy extends reliable localisation to stones without a usable acoustic window, particularly in the ureter.",
      "Dual-modality systems cover the widest case mix but bring room shielding, radiation protection programme and dosimetry obligations.",
      "Confirm the imaging subsystem's own service and parts position: on many systems it ages and fails independently of the shock wave source.",
      "Verify how localisation is re-checked mid-session, since respiration and movement shift the target relative to the focus.",
    ],
  },
  {
    type: "h2",
    id: "table",
    text: "Table, Positioning and Ergonomics",
    number: 4,
  },
  {
    type: "p",
    text: "Positioning determines how quickly a stone is brought into the focal volume and how reliably it stays there. Assess the range and repeatability of table travel, how the source arm is positioned for both renal and ureteric targets, staff access to the patient during treatment, and whether positioning can be reproduced for a retreatment session weeks later.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Watch the session, not the brochure",
    text: "A reference-site visit during live treatment reveals positioning friction, coupling handling and workflow speed that no specification document communicates.",
  },
  {
    type: "h2",
    id: "consumables",
    text: "Consumables and Cost Per Treatment",
    number: 5,
  },
  {
    type: "table",
    headers: ["Cost element", "Driver", "How to quantify at tender"],
    rows: [
      ["Shock wave source life", "Cumulative impulse count", "Ask for source life in impulses and replacement price"],
      ["Electrodes (electrohydraulic)", "Treatments performed", "Cost per treatment at your expected volume"],
      ["Coupling cushions and media", "Sessions and handling", "Annual consumption estimate at expected volume"],
      ["Treatment water management", "Manufacturer specification", "Consumables and servicing scope required"],
      ["Imaging subsystem service", "Usage and age", "Parts availability and contract cost, quoted separately"],
      ["Preventive maintenance", "Impulses and elapsed time", "Multi-year contract pricing with response commitments"],
    ],
    highlightLastColumn: true,
  },
  {
    type: "p",
    text: "Cost per treatment, not capital cost, is the number that determines whether the service is sustainable at the volume it plans to run.",
  },
  {
    type: "h2",
    id: "preowned",
    text: "Evaluating a Pre-Owned System",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Cumulative impulse count — the primary indicator of how much source life has been consumed.",
      "Documented service history, including source and consumable replacements and any imaging subsystem work.",
      "Condition and generation of the integrated imaging system, and whether its parts remain available.",
      "Software version and what upgrade path, if any, is supported.",
      "Confirmed scope of installation, commissioning, acceptance testing and warranty on the pre-owned system.",
      "Availability of local engineering support and spare parts for the specific model and configuration.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Impulse count is the first question",
    text: "On any pre-owned lithotripter, ask for the impulse count and the source replacement interval in the same sentence. Together they tell you the near-term service liability.",
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies and supports lithotripsy systems including the Richard Wolf Piezolith 3000 plus with integrated ultrasound, with published impulse counts, installation and commissioning, operator training and ongoing biomedical engineering support.",
  },
  {
    type: "h2",
    id: "tender",
    text: "Tender and Award Criteria",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Clinical coverage against the stated case mix, evidenced rather than asserted.",
      "Localisation configuration and its suitability for ureteric cases.",
      "Cost per treatment across a defined multi-year volume, including consumables and service.",
      "Installation, commissioning, acceptance testing and handover scope stated explicitly.",
      "Training and competency programme for operators, with refresher provision.",
      "Service response commitments, escalation path and parts availability.",
      "For pre-owned systems: impulse count, service history and refurbishment scope, in writing.",
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
    text: "A lithotripsy purchase succeeds when the configuration matches the case mix, the cost per treatment is understood before award, and the service scope is contracted rather than assumed. Those three checks matter more than any headline specification on the datasheet.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Urology service planning practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy installation, commissioning and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Procurement and field service practice synthesis",
    disclaimer:
      "Educational procurement guidance. It does not replace manufacturer documentation, local regulation or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer technical specifications and service documentation for lithotripsy systems." },
      { label: "AbuFarha Medical installed-base service and commissioning records." },
      { label: "Institutional procurement and capital equipment evaluation frameworks." },
    ],
  },
];
