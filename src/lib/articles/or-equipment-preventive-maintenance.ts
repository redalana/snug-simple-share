/**
 * Operating Room cluster — "Operating Room Equipment Preventive Maintenance"
 */

import type { ContentBlock, TocItem } from "../blog";

export const OR_PREVENTIVE_MAINTENANCE_TOC: TocItem[] = [
  { id: "case", title: "The Case for Scheduled Maintenance in Theatre" },
  { id: "scope", title: "What a Preventive Maintenance Programme Covers" },
  { id: "scheduling", title: "Scheduling Around Theatre Utilisation" },
  { id: "tasks", title: "Typical Maintenance Tasks by Equipment Category" },
  { id: "records", title: "Records, Traceability and Compliance" },
  { id: "roles", title: "Roles: In-House Team and External Service Provider" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const OR_PREVENTIVE_MAINTENANCE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Preventive maintenance is the scheduled work that keeps operating room equipment performing to specification between faults, rather than the reactive repair that follows a breakdown. AbuFarha Medical provides preventive maintenance for operating room equipment as part of its biomedical engineering service, alongside the supply, installation, commissioning and training it delivers at purchase.",
      "A theatre that runs a full case list has little tolerance for unplanned downtime: a delayed start affects every case behind it that day, and equipment failure mid-procedure carries clinical risk that a scheduled maintenance visit does not. Preventive maintenance exists to move failure modes from the middle of a case to a planned service window.",
      "This guide sets out what a preventive maintenance programme for operating room equipment should cover, how it is scheduled against theatre utilisation, typical tasks by equipment category, and the records that make the programme auditable.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Preventive maintenance rationale, programme scope, scheduling against theatre use, tasks by equipment category, records and traceability, in-house and external service roles",
    audience:
      "Biomedical engineering teams, theatre managers, hospital facilities and estates, clinical engineering leadership, procurement and service contract owners",
    readingTime: "11 min read",
    technology: "Operating Room",
  },
  {
    type: "h2",
    id: "case",
    text: "The Case for Scheduled Maintenance in Theatre",
    number: 1,
    body: "Scheduled maintenance converts unpredictable downtime into planned service windows.",
  },
  {
    type: "p",
    text: "Every item of operating room equipment has components and performance parameters that drift or wear with use: mechanical joints, calibration accuracy, filter loading, connector integrity, battery capacity. Left unchecked, these drift toward failure at a time the schedule does not choose. A preventive maintenance programme intervenes on a fixed schedule, before drift becomes failure, and creates a documented record of the equipment's condition over time.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Preventive maintenance protects the room's schedule, not only the equipment",
    text: "The primary benefit of a preventive programme in a theatre is scheduling certainty: cases proceed as booked because equipment condition has been verified in advance, rather than discovered to be faulty at the start of the first case of the day.",
  },
  {
    type: "h2",
    id: "scope",
    text: "What a Preventive Maintenance Programme Covers",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Manufacturer-specified maintenance tasks and intervals for each item, as the baseline the programme is built from.",
      "Performance verification against the equipment's original acceptance baseline, so drift is measured, not assumed.",
      "Safety testing, including electrical safety checks and, for imaging equipment, radiation output verification.",
      "Consumable and wear-part replacement on a scheduled basis rather than waiting for failure.",
      "Software and firmware update management, applied in a controlled manner that preserves clinical configuration.",
      "A critical spare parts list held against likely failure modes for equipment where downtime has high clinical impact.",
    ],
  },
  {
    type: "h2",
    id: "scheduling",
    text: "Scheduling Around Theatre Utilisation",
    number: 3,
  },
  {
    type: "p",
    text: "Preventive maintenance intervals are set from the manufacturer's specification, but the timing of each visit should be planned against the theatre's actual utilisation pattern. High-utilisation rooms need maintenance windows built into the booking calendar rather than negotiated case by case, and equipment shared across multiple rooms needs its maintenance sequenced so at least one unit remains available at all times.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Book maintenance windows into the theatre calendar in advance",
    text: "A maintenance visit negotiated a week ahead competes with clinical bookings and tends to be deferred repeatedly. Fixed maintenance windows agreed annually and entered into the theatre booking system are far more reliably completed on schedule.",
  },
  {
    type: "h2",
    id: "tasks",
    text: "Typical Maintenance Tasks by Equipment Category",
    number: 4,
  },
  {
    type: "table",
    headers: ["Category", "Typical scheduled tasks", "Failure mode addressed"],
    rows: [
      ["Operating tables", "Mechanical function check, battery test, load verification", "Positioning failure or unexpected movement during a case"],
      ["Surgical lighting", "Bulb or LED module check, focus and intensity calibration", "Illumination degradation at the operative field"],
      ["Mobile imaging (C-arm)", "Image quality and dose calibration, mechanical arm inspection", "Image degradation or arm travel restriction"],
      ["Anaesthesia workstations", "Gas delivery calibration, ventilator performance check, leak testing", "Inaccurate gas delivery or ventilation failure"],
      ["Electrosurgical units", "Output verification, accessory interface and alarm testing", "Incorrect power delivery or failure to alarm on fault"],
      ["Integration and recording systems", "Signal path testing, software update verification", "Loss of display or recording during a procedure"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Battery and gas delivery checks are frequently deferred because equipment appears to function normally on the day, while the parameter that has drifted is not visible without instrumented testing.",
    clinicalInterpretation:
      "A subtle drift in gas delivery accuracy or a partially degraded battery may not present as an obvious fault until the equipment is placed under the specific demand of a long or complex procedure.",
    hospitalRecommendation:
      "Treat instrumented calibration checks as mandatory on schedule, independent of whether the equipment appears to be functioning normally during routine use.",
  },
  {
    type: "h2",
    id: "records",
    text: "Records, Traceability and Compliance",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "A maintenance record for each item, including date, tasks performed, measured results and the technician responsible.",
      "Trend records comparing successive measurements against the acceptance baseline, to identify gradual drift before it reaches a failure threshold.",
      "Fault and repair history linked to the same equipment record, so recurring issues are visible rather than treated as isolated events.",
      "Documentation retained in a format accessible for internal audit and, where applicable, external accreditation review.",
    ],
  },
  {
    type: "h2",
    id: "roles",
    text: "Roles: In-House Team and External Service Provider",
    number: 6,
  },
  {
    type: "p",
    text: "Hospitals typically split responsibility between an in-house biomedical engineering team, which handles first-line checks and coordination, and an external service provider, which delivers manufacturer-specified maintenance, calibration and repairs requiring specific tooling, training or spare parts access. AbuFarha Medical's biomedical engineering service operates in the latter role for the operating room equipment it maintains, working to a schedule agreed with the hospital's own engineering team and theatre management, and holding the spare parts and technical documentation the programme depends on.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How often should operating room equipment be serviced?",
        a: "At the intervals specified by the manufacturer for each item, which vary by equipment type and usage intensity. A maintenance programme should schedule to the manufacturer specification rather than an arbitrary uniform interval across all equipment.",
      },
      {
        q: "Can preventive maintenance be scheduled without disrupting the theatre list?",
        a: "Yes, when maintenance windows are booked into the theatre calendar well in advance rather than negotiated close to the visit date. For equipment shared across multiple rooms, sequencing so one unit remains available at all times avoids a complete loss of capability.",
      },
      {
        q: "What happens if a scheduled maintenance visit is repeatedly deferred?",
        a: "Deferred maintenance allows drift to accumulate undetected, increasing the likelihood of an unplanned failure at an unpredictable time, including during a procedure. Deferred visits should be rescheduled at the earliest available window rather than absorbed into the next scheduled cycle.",
      },
      {
        q: "What records should a hospital expect from a maintenance visit?",
        a: "A record showing the date, tasks performed, measured results against the equipment's baseline, and the technician responsible. These records should be retained and available for internal audit and equipment lifecycle decisions.",
      },
      {
        q: "Does preventive maintenance eliminate the need for reactive repair?",
        a: "No. A well-run preventive programme substantially reduces the frequency of unplanned failures but does not eliminate them entirely. It should be paired with a defined fault escalation route and spare parts availability for when reactive repair is still needed.",
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
    text: "A preventive maintenance programme scheduled to manufacturer specification, booked into the theatre calendar in advance, and backed by consistent records converts unpredictable equipment failure into planned, low-disruption service work. It is the mechanism by which theatre equipment sustains its acceptance-day performance over years of clinical use.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Theatre and interventional service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Theatre equipment maintenance and calibration" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Biomedical engineering maintenance practice synthesis",
    disclaimer:
      "Educational guidance on preventive maintenance for operating room equipment. It does not replace manufacturer maintenance documentation or local regulatory and accreditation requirements.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer preventive maintenance schedules and calibration procedures for theatre equipment." },
      { label: "Institutional biomedical engineering maintenance records and equipment lifecycle policies." },
      { label: "Applicable electrical safety and radiation protection testing standards for theatre equipment." },
    ],
  },
];
