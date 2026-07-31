/**
 * Lithotripsy maintenance article — preventive maintenance and quality assurance.
 */

import type { ContentBlock, TocItem } from "../blog";

export const ESWL_MAINTENANCE_TOC: TocItem[] = [
  { id: "why", title: "Why Lithotripsy Degrades Silently" },
  { id: "impulse", title: "Impulse Count as the Master Metric" },
  { id: "schedule", title: "Preventive Maintenance Scope" },
  { id: "coupling", title: "Coupling and Source Care" },
  { id: "imaging", title: "Imaging Subsystem Maintenance" },
  { id: "qa", title: "Performance Verification and QA Records" },
  { id: "uptime", title: "Protecting Uptime" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ESWL_MAINTENANCE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A lithotripter rarely announces that it is underperforming. It keeps firing, the console keeps reporting the requested energy, and the only visible symptom is that stones take more sessions to fragment than they used to.",
      "That is a maintenance failure presenting as a clinical one. Without an impulse-based service schedule and a habit of recording session performance, the drift is attributed to case mix for months before anyone tests the machine.",
      "This guide sets out how to maintain a lithotripsy system so performance loss is detected as an engineering signal, not inferred from disappointing outcomes.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Silent performance degradation, impulse-count-driven servicing, preventive maintenance scope, coupling and source care, imaging subsystem upkeep, and QA records",
    audience:
      "Biomedical engineering teams, ESWL operators, urology service managers, medical physicists, service contract owners",
    readingTime: "12 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "why",
    text: "Why Lithotripsy Degrades Silently",
    number: 1,
    body: "The console reports the setting, not the energy that reaches the stone.",
  },
  {
    type: "p",
    text: "Between the console setting and the stone lie the source, the focusing element, the coupling interface and the patient's tissue. Losses anywhere along that chain reduce delivered energy without changing the displayed value. Source ageing, coupling degradation, water quality problems and localisation drift all produce the same clinical picture: more pulses required for the same fragmentation.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Trend the sessions",
    text: "Average pulses per successful fragmentation is a serviceable performance indicator. When it rises across a mixed caseload, suspect the system before the case mix.",
  },
  {
    type: "h2",
    id: "impulse",
    text: "Impulse Count as the Master Metric",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Cumulative impulse count is the consumption metric for the shock wave source, in the same way exposure history is for an X-ray tube.",
      "Manufacturer service intervals for source and consumables are specified in impulses, not months — a low-volume service and a high-volume one reach the same service point at very different dates.",
      "Record impulse count at every preventive maintenance visit and at each source or consumable replacement, building a lifetime ledger for the system.",
      "Use the ledger to forecast the next major service event and budget for it before it becomes an unplanned outage.",
      "On pre-owned systems, the impulse count carried over from the previous owner is part of the asset's remaining life.",
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "A calendar-only maintenance plan either over-services a low-volume lithotripter or under-services a busy one. Impulse count is what the equipment actually experiences.",
    clinicalInterpretation:
      "Sessions become progressively less efficient as the source nears end of life, which affects clinical throughput before anything fails outright.",
    hospitalRecommendation:
      "Run a dual trigger: whichever comes first between the impulse threshold and the elapsed-time interval.",
  },
  {
    type: "h2",
    id: "schedule",
    text: "Preventive Maintenance Scope",
    number: 3,
  },
  {
    type: "table",
    headers: ["Area", "Typical activity", "Why it is included"],
    rows: [
      ["Shock wave source", "Inspection, consumable replacement, output verification", "Directly determines delivered energy"],
      ["Coupling assembly", "Cushion condition, membrane integrity, seal inspection", "Coupling losses waste delivered energy"],
      ["Water and fluid circuit", "Water quality, degassing and circuit servicing per specification", "Air and contamination attenuate and scatter energy"],
      ["Localisation alignment", "Verification that imaging targets coincide with the focal point", "Misalignment treats tissue instead of stone"],
      ["Treatment table and axes", "Mechanical inspection, travel and repeatability checks", "Positioning repeatability drives session efficiency"],
      ["Electrical safety", "Routine electrical safety testing", "Regulatory and patient safety requirement"],
      ["Imaging subsystem", "Ultrasound probe and, where fitted, fluoroscopy performance checks", "Ages independently of the shock wave source"],
    ],
  },
  {
    type: "h2",
    id: "coupling",
    text: "Coupling and Source Care",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Inspect coupling cushions and membranes for wear, deformation and leakage before each treatment list, not only at scheduled service.",
      "Follow the manufacturer's specification for coupling media and application technique — trapped air is the most common avoidable energy loss.",
      "Maintain treatment water to specification; dissolved gas and particulate contamination both degrade energy transmission.",
      "Replace source consumables on the specified impulse interval rather than on failure, since drifting output is not visible at the console.",
      "Record every consumable change with date, impulse count and part reference.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "A pre-list check that takes two minutes",
    text: "Cushion condition, coupling media availability, imaging function and impulse counter reading. Four checks before the first patient prevent most avoidable session failures.",
  },
  {
    type: "h2",
    id: "imaging",
    text: "Imaging Subsystem Maintenance",
    number: 5,
  },
  {
    type: "p",
    text: "Localisation quality sets the ceiling on treatment accuracy. Ultrasound probes require the same care as those on any diagnostic system — cleaning and disinfection to protocol, inspection for lens and cable damage, and replacement when image quality degrades. Where fluoroscopy is fitted, the subsystem falls under the hospital's radiation protection programme, with periodic performance testing, dose monitoring and documented quality assurance alongside the lithotripter's own service schedule.",
  },
  {
    type: "h2",
    id: "qa",
    text: "Performance Verification and QA Records",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Verify localisation-to-focus alignment after any service work touching the source, the arm or the imaging system.",
      "Keep a QA file containing service reports, alignment verification, electrical safety results and consumable history.",
      "Log session data — energy protocol, pulse count, fragmentation outcome — so clinical performance can be correlated with service events.",
      "Review the pulses-per-fragmentation trend at each service visit; treat an upward trend as an investigation trigger.",
      "Confirm and document performance before returning the system to clinical use after any intervention.",
    ],
  },
  {
    type: "h2",
    id: "uptime",
    text: "Protecting Uptime",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Hold critical consumables locally: a system waiting on a cushion or electrode is an avoidable outage.",
      "Contract service response times against the clinical impact of an outage, not against a generic tier.",
      "Schedule preventive maintenance around treatment lists, so planned work never competes with booked patients.",
      "Maintain trained cover: single-operator dependency is an availability risk as real as a hardware fault.",
      "Forecast the next source replacement from the impulse ledger and budget it as planned capital, not an emergency.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical provides preventive maintenance, spare parts supply, technical support and operator training for lithotripsy systems, with service planning built around impulse history rather than calendar assumption.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How do we know a lithotripter is losing performance?",
        a: "Track pulses required per successful fragmentation across a mixed caseload. A sustained rise, combined with a high impulse count since the last source service, points to the system rather than case selection.",
      },
      {
        q: "Should maintenance follow a calendar or the impulse count?",
        a: "Both. Use whichever trigger arrives first, because elapsed time captures ageing and environmental effects while impulse count captures actual use.",
      },
      {
        q: "Is the imaging system covered by the lithotripsy service contract?",
        a: "Not always. Confirm explicitly whether ultrasound and any fluoroscopy subsystem are within scope, since they age and fail on their own schedule.",
      },
      {
        q: "What must be verified after service work?",
        a: "At minimum, that the imaging localisation target still coincides with the shock wave focal point, plus electrical safety and functional checks, all recorded in the QA file before clinical use resumes.",
      },
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
    text: "Lithotripsy performance is maintained by an impulse-driven service schedule, disciplined coupling care, verified localisation alignment and a QA record that links clinical outcomes to service events. Together they turn silent degradation into a detectable, plannable engineering signal.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Urology treatment service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy preventive maintenance and performance verification" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Field service and quality assurance practice synthesis",
    disclaimer:
      "Educational maintenance guidance. It does not replace manufacturer service documentation or medical physics assessment.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer service and maintenance documentation for installed lithotripsy systems." },
      { label: "AbuFarha Medical preventive maintenance and field service records." },
      { label: "National radiation protection requirements for fluoroscopy-equipped treatment rooms." },
    ],
  },
];
