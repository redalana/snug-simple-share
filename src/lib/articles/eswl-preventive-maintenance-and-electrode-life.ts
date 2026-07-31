/**
 * Lithotripsy Systems cluster — "ESWL Preventive Maintenance and Electrode Life Management"
 */

import type { ContentBlock, TocItem } from "../blog";

export const ESWL_MAINTENANCE_ELECTRODE_TOC: TocItem[] = [
  { id: "case", title: "Why Preventive Maintenance Matters More on a Lithotripter" },
  { id: "schedule", title: "Structuring a Preventive Maintenance Schedule" },
  { id: "electrode", title: "Understanding Electrode and Source Wear" },
  { id: "monitoring", title: "Monitoring Output Rather Than Guessing at Life" },
  { id: "other", title: "Consumables and Wear Items Beyond the Source" },
  { id: "records", title: "Service Records and Traceability" },
  { id: "partnership", title: "In-House Capability Versus Manufacturer-Aligned Service" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ESWL_MAINTENANCE_ELECTRODE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A lithotripsy system that has not received disciplined preventive maintenance rarely fails suddenly; it degrades gradually, in output and reliability, in ways that are easy to miss until treatment outcomes or downtime start to reflect it. AbuFarha Medical provides biomedical engineering support and spare parts service for installed lithotripsy systems, including Richard Wolf Piezolith platforms, and structures preventive maintenance around the manufacturer's own service schedule rather than around a reactive call-when-broken model.",
      "Maintenance on a lithotripter differs from maintenance on most other diagnostic equipment because the shock wave generation source itself is a wear component with a defined service interval, expressed by manufacturers in terms such as cumulative discharge or impulse count rather than calendar time alone. Managing that wear correctly — through scheduled checks rather than through waiting for a visible performance drop — is the difference between planned, budgeted replacement and unplanned downtime during a clinical session.",
      "This guide sets out how a structured preventive maintenance programme should be built for an ESWL system, how electrode and source wear should be tracked and interpreted, and what documentation a hospital should expect to receive from its service provider.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Preventive maintenance scheduling, electrode and generation source wear management, output monitoring, consumable tracking, and service documentation for ESWL systems",
    audience:
      "Biomedical engineering teams, clinical engineering managers, urology department leads, hospital maintenance planners",
    readingTime: "12 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "case",
    text: "Why Preventive Maintenance Matters More on a Lithotripter",
    number: 1,
    body: "The generation source is a wear component, not a fixed piece of hardware, and treats every session slightly differently as it ages.",
  },
  {
    type: "p",
    text: "Diagnostic imaging equipment tends to fail in a binary way: it works, or a clearly identifiable fault stops it working. A lithotripsy generation source instead ages progressively — output characteristics shift gradually as an electrode gap widens with use, or as a piezoelectric element array approaches the upper end of its rated impulse life — and that progressive change can be invisible to clinical staff until fragmentation performance is already noticeably affected. Preventive maintenance exists to catch that drift through scheduled objective checks, rather than relying on clinical impression, which is an unreliable early-warning signal for gradual output change.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Gradual drift is harder to notice than sudden failure",
    text: "A system that fails outright prompts an immediate service call. A system whose output has quietly drifted downward over months prompts nothing, until someone asks why retreatment rates have been trending upward.",
  },
  {
    type: "h2",
    id: "schedule",
    text: "Structuring a Preventive Maintenance Schedule",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Follow the manufacturer's published preventive maintenance schedule as the baseline, since it reflects the specific engineering tolerances of that generation principle and configuration.",
      "Distinguish between calendar-based checks, such as safety interlock and electrical safety testing, and usage-based checks, such as source condition assessment tied to cumulative discharge count.",
      "Log every treatment session's impulse or discharge count so that usage-based maintenance triggers are based on actual recorded use, not estimated averages.",
      "Include coupling medium system checks, water quality verification and mechanical positioning accuracy in every scheduled visit, not only the generation source itself.",
      "Build the schedule into the department's operating calendar in advance, rather than scheduling each visit reactively once it becomes due.",
    ],
  },
  {
    type: "h2",
    id: "electrode",
    text: "Understanding Electrode and Source Wear",
    number: 3,
  },
  {
    type: "p",
    text: "For electrohydraulic systems, the electrode is the component that most directly determines output consistency: each spark discharge slightly erodes the electrode tips, gradually changing the gap and therefore the pressure profile generated. Manufacturers specify electrode condition checks and a service life expressed in discharge count, and replacement should be planned against that count rather than deferred until a clinical operator reports reduced apparent effectiveness. For electromagnetic and piezoelectric systems, there is no discrete spark electrode, but the generation source — coil-and-membrane assembly or piezoelectric element array — still carries a manufacturer-specified rated life expressed in cumulative impulse count, and periodic output verification remains the correct way to track its condition over that life, since the underlying wear mechanism is different but the principle of scheduled verification is the same.",
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Never estimate electrode life from calendar time alone",
    text: "Two identical systems with very different case volumes will reach a given discharge count at very different calendar dates. Scheduling electrode inspection by calendar interval alone, without reference to logged discharge count, risks either premature replacement or running past the manufacturer's specified service life.",
  },
  {
    type: "h2",
    id: "monitoring",
    text: "Monitoring Output Rather Than Guessing at Life",
    number: 4,
  },
  {
    type: "table",
    headers: ["Monitoring approach", "What it captures", "Limitation if used alone"],
    rows: [
      ["Cumulative discharge or impulse logging", "Objective usage tracking against manufacturer-rated source life", "Does not by itself confirm actual output quality at a given point in that life"],
      ["Scheduled output verification testing", "Direct measurement of pressure or energy output against the manufacturer's acceptance criteria", "Only as good as the frequency at which it is performed"],
      ["Clinical impression of treatment effectiveness", "Real-world feedback from operating staff", "Highly subjective, and typically lags well behind the actual point at which output has already drifted"],
      ["Fault log and downtime review", "Identifies recurring or emerging component issues over time", "Reactive by nature; identifies problems only after they have already occurred"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "No single monitoring method is sufficient in isolation; a sound programme combines objective usage logging with scheduled output verification and treats clinical impression as a secondary check, not the primary signal.",
    clinicalInterpretation:
      "Clinical staff are well placed to flag a suspected problem quickly, but should not be relied upon as the primary detection method for gradual output drift, since that drift is precisely the kind of change that is hardest to perceive session to session.",
    hospitalRecommendation:
      "Require documented cumulative discharge logging and scheduled output verification testing as a contractual condition of the maintenance agreement, rather than accepting calendar-only servicing.",
  },
  {
    type: "h2",
    id: "other",
    text: "Consumables and Wear Items Beyond the Source",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Coupling cushions or membranes, which are subject to their own wear and periodic replacement schedule independent of the generation source.",
      "Water treatment or filtration cartridges, where fitted, which require replacement on a schedule tied to local water quality and usage volume.",
      "Mechanical positioning components, such as table or gantry drive mechanisms, which benefit from scheduled lubrication and calibration checks.",
      "Imaging system components, where fluoroscopic or ultrasound localisation is integrated, each carrying their own manufacturer-specified maintenance requirements.",
      "Cabling, connectors and interlock switches, which are simple items individually but are frequent sources of intermittent faults if not inspected on schedule.",
    ],
  },
  {
    type: "h2",
    id: "records",
    text: "Service Records and Traceability",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Maintain a complete, continuous service history for each system, including every preventive visit, output verification result, and component replacement with its associated discharge or impulse count at the time of replacement.",
      "This record is essential not only for day-to-day servicing but for any future decision about system replacement, resale or upgrade, since a documented service history materially affects the confidence with which a pre-owned system can later be evaluated.",
      "Retain records in a format accessible to both the servicing engineering team and the hospital's own biomedical engineering department, not solely in the service provider's internal system.",
      "Use the service history to inform budgeting for planned consumable and component replacement, rather than treating each replacement as an unplanned cost when it occurs.",
    ],
  },
  {
    type: "h2",
    id: "partnership",
    text: "In-House Capability Versus Manufacturer-Aligned Service",
    number: 7,
  },
  {
    type: "p",
    text: "Some hospitals maintain in-house biomedical engineering capability sufficient for routine checks, while relying on the manufacturer or an authorised service partner for source-level work and output verification requiring calibrated test equipment and manufacturer-specific training. This split arrangement is common and workable provided the division of responsibility is documented clearly, so that neither party assumes the other is covering a given check. Whichever model is used, source-level work and output verification should be carried out only by engineers trained and equipped to the manufacturer's specification, since incorrect handling of the generation source can itself introduce faults or safety risks.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "A maintenance contract is only as good as its documentation requirement",
    text: "The practical value of a maintenance agreement is best judged by whether it specifies documented output verification and discharge logging, not by its visit frequency alone.",
  },
  {
    type: "p",
    text: "AbuFarha Medical provides preventive maintenance, output verification and spare parts service for installed lithotripsy systems, maintaining complete discharge-logged service records for each system it supports and coordinating electrode and source replacement against manufacturer-specified service intervals rather than reactive fault response.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How is electrode replacement timing decided?",
        a: "Against the manufacturer's specified service life, expressed as a discharge count, combined with periodic output verification testing. It should not be decided by calendar time alone or by waiting for a noticeable drop in clinical effectiveness.",
      },
      {
        q: "Do electromagnetic and piezoelectric systems need the same kind of preventive maintenance as electrohydraulic systems?",
        a: "The specific wear mechanism differs, since neither has a spark electrode, but both still have a generation source with a manufacturer-rated impulse life, and both benefit from the same principle of scheduled usage logging and output verification.",
      },
      {
        q: "What is the biggest risk of deferring preventive maintenance?",
        a: "Gradual, unnoticed output drift that affects treatment effectiveness before it produces an obvious fault, combined with the risk of a wear component failing during a clinical session rather than being replaced on a planned schedule.",
      },
      {
        q: "Should a hospital keep its own copy of the service history?",
        a: "Yes. A complete, accessible service history supports internal biomedical engineering oversight, informs replacement budgeting, and materially affects the system's future evaluation if it is ever considered for resale or trade-in.",
      },
      {
        q: "Can hospital biomedical engineering staff carry out all maintenance in-house?",
        a: "Routine checks are often within reach of a competent in-house team, but source-level work and calibrated output verification should be carried out only by engineers trained and equipped to the manufacturer's specification.",
      },
      {
        q: "How often should output verification testing be performed?",
        a: "According to the manufacturer's specified schedule for the exact system and configuration installed, which should be documented in the maintenance agreement rather than left to informal judgement.",
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
    text: "Preventive maintenance on a lithotripsy system is fundamentally about tracking a wear component's condition against objective usage data, rather than reacting once a fault or a decline in clinical effectiveness becomes apparent. A disciplined schedule of discharge logging, output verification and documented service history is what turns electrode and source replacement into a planned, budgeted event rather than an unplanned interruption to clinical service.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy preventive maintenance and service practice" },
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Urology treatment service practice" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer service documentation and field engineering practice synthesis",
    disclaimer:
      "Educational maintenance guidance. It does not replace manufacturer service documentation or a system-specific maintenance agreement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer preventive maintenance and service documentation for lithotripsy systems." },
      { label: "AbuFarha Biomedical Engineering service and discharge-logging records." },
      { label: "Institutional clinical engineering guidance on medical device wear-component management." },
    ],
  },
];
