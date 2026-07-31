/**
 * Service knowledge — "Remote Diagnostics vs On-Site Service"
 */

import type { ContentBlock, TocItem } from "../blog";

export const REMOTE_DIAGNOSTICS_TOC: TocItem[] = [
  { id: "what", title: "What Remote Diagnostics Provides" },
  { id: "comparison", title: "Remote and On-Site Compared" },
  { id: "suited", title: "What Remote Handles Well" },
  { id: "onsite", title: "What Still Requires an Engineer" },
  { id: "requirements", title: "Connectivity, Security and Governance" },
  { id: "hybrid", title: "Designing the Hybrid Model" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const REMOTE_DIAGNOSTICS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Remote diagnostics allows a service engineer to read system logs, error histories and performance data without travelling to the site. AbuFarha Medical uses remote diagnostics alongside on-site field service, preventive maintenance and spare parts supply.",
      "The question is not which is better. Remote access compresses diagnosis time and determines the correct part before an engineer travels; physical intervention, calibration and verification still require presence. Treating them as alternatives wastes the advantage of both.",
      "This guide sets out what each approach handles well, the connectivity and governance requirements remote support depends on, and how to design a hybrid service model around them.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Remote diagnostic capability, comparison with on-site service, suitability by fault type, connectivity and security requirements, hybrid service design",
    audience:
      "Biomedical engineering teams, IT and information security, department managers, service contract owners, procurement committees",
    readingTime: "10 min read",
    technology: "Remote Diagnostics",
  },
  {
    type: "h2",
    id: "what",
    text: "What Remote Diagnostics Provides",
    number: 1,
    body: "Access to the evidence a diagnosis needs, without waiting for travel.",
  },
  {
    type: "ul",
    items: [
      "System log and error history review, including events preceding the reported fault.",
      "Configuration and software version verification against the expected baseline.",
      "Performance and calibration data trends, which often reveal gradual degradation before failure.",
      "Guided first-line resolution with the on-site operator or engineer in real time.",
      "Pre-visit part identification, so the engineer arrives with the correct component.",
      "Software configuration corrections where the fault is not physical.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The biggest gain is often the part, not the fix",
    text: "Even when a visit is unavoidable, remote diagnosis identifies the failing component in advance — converting two visits into one and removing a parts-ordering cycle from the outage.",
  },
  {
    type: "h2",
    id: "comparison",
    text: "Remote and On-Site Compared",
    number: 2,
  },
  {
    type: "table",
    headers: ["Dimension", "Remote diagnostics", "On-site service"],
    rows: [
      ["Time to engage", "Minutes, within coverage hours", "Travel-dependent"],
      ["Evidence access", "Logs, configuration, performance data", "Logs plus physical inspection and measurement"],
      ["Physical intervention", "None", "Full — parts, mechanics, calibration"],
      ["Performance verification", "Data review only", "Measured verification and clinical release"],
      ["Prerequisites", "Connectivity and security approval", "Access, permits and scheduling"],
      ["Best role", "Diagnosis, triage, part identification, software fixes", "Repair, calibration, verification, planned maintenance"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Remote access changes when diagnosis happens; it does not change who must be present to complete a physical repair.",
    clinicalInterpretation:
      "Departments with remote support enabled typically see shorter outages for the same faults, because the diagnosis phase no longer waits on travel.",
    hospitalRecommendation:
      "Enable remote access under a governed agreement, and keep on-site provision for repair, calibration and verification.",
  },
  {
    type: "h2",
    id: "suited",
    text: "What Remote Handles Well",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Software, configuration and protocol faults with no physical cause.",
      "Intermittent faults, where log history is more informative than a single site visit.",
      "Distinguishing an operator or workflow issue from an equipment fault.",
      "Verifying whether a fault is genuinely resolved after an intervention.",
      "Preventive review of performance trends between scheduled maintenance visits.",
      "Deciding urgency: whether a fault warrants an immediate visit or the next planned one.",
    ],
  },
  {
    type: "h2",
    id: "onsite",
    text: "What Still Requires an Engineer",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Any part replacement, mechanical adjustment or physical access to a subsystem.",
      "Calibration and measured performance verification before clinical release.",
      "Preventive maintenance tasks involving inspection, cleaning and mechanical checks.",
      "Safety-system testing, and any work where a measurement instrument must be applied to the system.",
      "Faults where physical condition — coupling, cabling, contamination, environment — is the suspected cause.",
      "Installation, commissioning and acceptance work.",
    ],
  },
  {
    type: "h2",
    id: "requirements",
    text: "Connectivity, Security and Governance",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "A network path approved by hospital IT and information security, with defined scope and no broader access than the service requires.",
      "Explicit governance on patient data: remote service work should operate on technical data, with any access to clinical images controlled and documented.",
      "Authentication and session control, with access initiated or approved by the hospital rather than permanently open.",
      "An audit trail of remote sessions: who connected, when, and what was done.",
      "Documented alignment with local data protection obligations.",
      "A named internal owner for the arrangement, so it is reviewed rather than forgotten.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Approve remote access before the first fault",
    text: "Security review under outage pressure is the worst time to start. Departments that arrange connectivity at installation gain its benefit from day one; those that do not usually lose the first major outage to paperwork.",
  },
  {
    type: "h2",
    id: "hybrid",
    text: "Designing the Hybrid Model",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Route every fault through remote triage first, unless the cause is plainly physical or the system is unsafe.",
      "Define the escalation trigger from remote to on-site, with a time limit rather than an open-ended attempt.",
      "Require the part decision to be made during remote diagnosis wherever possible.",
      "Keep preventive maintenance on-site and scheduled, using remote trend data to adjust its focus.",
      "Report remote and on-site activity together, so availability is measured across the whole service rather than per channel.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical combines remote diagnostics with on-site field service, preventive maintenance, spare parts supply and technical support, so diagnosis begins immediately while physical repair and verification remain the work of an attending engineer.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Does remote diagnostics replace on-site service?",
        a: "No. It compresses the diagnosis phase and identifies the correct part in advance. Repair, calibration, measured verification and preventive maintenance still require an engineer on site.",
      },
      {
        q: "What connectivity is required?",
        a: "A network path approved by hospital IT and information security, scoped to the service function, with authentication, session control and an audit trail.",
      },
      {
        q: "Does remote access expose patient data?",
        a: "Remote service work should operate on technical data. Any access to clinical images must be controlled, documented and consistent with local data protection obligations.",
      },
      {
        q: "When should remote diagnostics be set up?",
        a: "At installation. Arranging security approval during an outage adds delay at precisely the moment the capability would have saved time.",
      },
      {
        q: "Can remote monitoring prevent faults rather than just diagnose them?",
        a: "Performance and calibration trends often show gradual degradation before failure, which allows a component to be replaced at a planned visit instead of during an unplanned outage.",
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
    text: "Remote diagnostics and on-site service solve different halves of the same problem. Remote access removes travel from diagnosis and gets the right part moving; the engineer completes the repair and verifies performance. Arrange the connectivity and governance at installation, and the hybrid model shortens outages without weakening verification.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Remote diagnostics and field service practice" },
      { role: "Operational review", name: "AbuFarha Service Operations", credential: "Service model design and uptime governance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Field service practice synthesis",
    disclaimer:
      "Educational guidance on remote and on-site service models. It does not replace manufacturer service documentation or local information security policy.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer remote service documentation and connectivity requirements for installed systems." },
      { label: "Institutional information security and data protection policies governing supplier access." },
      { label: "Service logs comparing remote and on-site resolution outcomes." },
    ],
  },
];
