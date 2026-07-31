/**
 * Service knowledge — "Turnkey Project Delivery"
 */

import type { ContentBlock, TocItem } from "../blog";

export const TURNKEY_DELIVERY_TOC: TocItem[] = [
  { id: "definition", title: "What Turnkey Delivery Means" },
  { id: "scope", title: "Scope Boundaries That Must Be Explicit" },
  { id: "phases", title: "Delivery Phases" },
  { id: "interfaces", title: "The Interfaces Where Projects Fail" },
  { id: "acceptance", title: "Acceptance and Handover" },
  { id: "risks", title: "Common Failure Modes" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const TURNKEY_DELIVERY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Turnkey delivery means a hospital receives a working clinical service rather than a delivered box. AbuFarha Medical supplies, installs, commissions, trains and supports medical equipment, coordinating the technical scope required to bring a room into clinical use.",
      "Equipment projects rarely fail on the equipment. They fail at interfaces: a room not ready for the delivery date, a power or cooling provision that does not match the specification, shielding assessed too late, or training scheduled after the staff who needed it had moved on.",
      "This guide sets out how turnkey scope should be defined, the phases of delivery, the interfaces that decide the schedule, and what acceptance and handover must include before a room is declared clinically live.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Turnkey scope definition, delivery phases, interface management, acceptance and handover criteria, and common project failure modes",
    audience:
      "Project managers, hospital estates and facilities teams, biomedical engineering, department managers, procurement committees",
    readingTime: "11 min read",
    technology: "Turnkey Projects",
  },
  {
    type: "h2",
    id: "definition",
    text: "What Turnkey Delivery Means",
    number: 1,
    body: "A coordinated path from specification to a clinically released room.",
  },
  {
    type: "p",
    text: "A turnkey project runs from technical specification through room requirements, delivery, installation, commissioning, acceptance testing and training to formal clinical release and ongoing support. The defining characteristic is coordination: one party is accountable for the sequence rather than each participant being accountable only for their own task.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Turnkey is a coordination commitment, not a scope list",
    text: "Two projects with identical scope can differ entirely in outcome depending on whether someone owns the sequence between the trades, the equipment and the clinical team.",
  },
  {
    type: "h2",
    id: "scope",
    text: "Scope Boundaries That Must Be Explicit",
    number: 2,
  },
  {
    type: "table",
    headers: ["Area", "Question to settle before order", "Consequence if left vague"],
    rows: [
      ["Civil and building works", "Who executes structural, finishes and door works?", "Delivery arrives at an unfinished room"],
      ["Power and earthing", "Who provides supply to the specified point and to what tolerance?", "Installation halts at energisation"],
      ["Cooling and ventilation", "Who sizes and installs to the equipment's heat load?", "System derates or faults in service"],
      ["Radiation shielding", "Who assesses, who installs, who verifies?", "Room cannot be clinically released"],
      ["Network and archive integration", "Who configures connectivity and validates workflow?", "Working system with no clinical workflow"],
      ["Transport and rigging", "Who moves the equipment to the room?", "Access discovered too late to be solved cheaply"],
      ["Training", "Which roles, how many sessions, and when?", "Capability installed but unused"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Almost every disputed project cost sits in one of these rows, and almost always because the boundary was assumed rather than written.",
    clinicalInterpretation:
      "Clinical go-live dates slip on building and utility readiness far more often than on equipment availability.",
    hospitalRecommendation:
      "Agree a written responsibility matrix covering each row before the order is placed, not during mobilisation.",
  },
  {
    type: "h2",
    id: "phases",
    text: "Delivery Phases",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Specification and site survey: clinical requirement, system selection, and a survey of the intended room including access route.",
      "Design and room requirements: layout, utilities, environmental conditions, shielding assessment where applicable, and the responsibility matrix.",
      "Site preparation: building works, power, cooling, shielding installation and network provision, with readiness verified against the equipment specification.",
      "Delivery and rigging: transport, access and placement, scheduled against verified room readiness rather than an assumed date.",
      "Installation and mechanical assembly by qualified engineers.",
      "Commissioning: calibration, performance verification, safety testing and, where applicable, radiation protection verification.",
      "Acceptance testing against defined criteria, with results recorded.",
      "Training and clinical release, followed by the handover into preventive maintenance and support.",
    ],
  },
  {
    type: "h2",
    id: "interfaces",
    text: "The Interfaces Where Projects Fail",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Room readiness versus delivery date — the single most common cause of schedule loss.",
      "Utility provision tolerance: supply that exists but does not meet the specified stability, capacity or earthing requirement.",
      "Access route: door widths, lift capacity, corridor turns and floor loading, all cheap to solve at survey and expensive on delivery day.",
      "Shielding sign-off timing, which gates clinical release regardless of equipment status.",
      "Network and archive configuration, frequently treated as post-installation work and then blocking go-live.",
      "Training scheduling against the actual staff roster rather than an abstract date.",
      "Decommissioning of a replaced system, including removal access and continuity of clinical service during changeover.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Verify readiness before releasing the delivery",
    text: "A documented readiness check against the equipment specification, performed before transport is released, prevents the most expensive category of project delay.",
  },
  {
    type: "h2",
    id: "acceptance",
    text: "Acceptance and Handover",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Performance verified against defined acceptance criteria, with measured results recorded as the reference baseline for future maintenance.",
      "Safety systems tested, and radiation protection verification completed where the installation involves ionising radiation.",
      "Workflow validated end to end: patient identification, acquisition, archiving, retrieval and reporting.",
      "Documentation handed over: operating instructions, service documentation, test results, configuration record and asset details.",
      "Training completed and competency recorded for the staff who will operate the system.",
      "Support arrangements active: maintenance schedule, escalation route, critical-parts list and contract start date.",
      "Formal clinical release, signed, with any outstanding items listed and owned.",
    ],
  },
  {
    type: "h2",
    id: "risks",
    text: "Common Failure Modes",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Ordering equipment before surveying the room, so the specification and the space are reconciled late.",
      "Assuming an existing room is suitable because it previously held a similar system.",
      "Treating shielding, network integration or training as follow-on work rather than as gating items.",
      "No single accountable owner for the sequence, leaving each participant correct within their own scope while the project stalls.",
      "Acceptance without recorded measurements, which removes the baseline that future service work depends on.",
      "Going clinically live with outstanding items that are neither listed nor owned.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical delivers supply, installation, commissioning, training and ongoing biomedical engineering support as a coordinated programme, working from site survey and room requirements through acceptance testing to clinical release and the maintenance relationship that follows.",
  },
  {
    type: "faq",
    items: [
      {
        q: "What makes a project turnkey rather than a supply contract?",
        a: "Accountability for the sequence. A supply contract ends at delivery; turnkey delivery covers coordination through installation, commissioning, acceptance, training and clinical release.",
      },
      {
        q: "When should the site survey happen?",
        a: "Before the order is finalised. The survey determines whether the room, utilities and access route can accommodate the system, and it is the cheapest point at which to discover that they cannot.",
      },
      {
        q: "What most often delays clinical go-live?",
        a: "Room and utility readiness, shielding sign-off, and network or archive integration — rarely the equipment itself.",
      },
      {
        q: "Why do acceptance measurements matter after installation?",
        a: "They become the performance baseline. Future maintenance and troubleshooting compare against it, so an acceptance without recorded results permanently weakens the service record.",
      },
      {
        q: "Should the replaced system's removal be part of the project?",
        a: "Yes. Decommissioning, removal access and continuity of clinical service during changeover belong in the plan, not in an unassigned gap after go-live.",
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
    text: "Turnkey delivery succeeds on written scope boundaries, a verified readiness check before delivery, gating items treated as gating, and acceptance recorded with measurements. Projects run that way go clinically live on schedule; projects that rely on assumed interfaces lose time at every one of them.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Installation, commissioning and acceptance practice" },
      { role: "Project review", name: "AbuFarha Project Delivery", credential: "Turnkey equipment project coordination" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Project delivery and commissioning practice synthesis",
    disclaimer:
      "Educational guidance on turnkey equipment project delivery. It does not replace manufacturer site planning documentation or local regulatory requirements.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer site planning and pre-installation requirement documentation." },
      { label: "Institutional project responsibility matrices and acceptance test records." },
      { label: "National radiation protection requirements applicable to equipment installations." },
    ],
  },
];
