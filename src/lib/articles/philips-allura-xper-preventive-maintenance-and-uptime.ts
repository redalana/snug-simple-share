/**
 * Philips Allura Xper preventive maintenance and uptime — Philips cluster (maintenance).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PHILIPS_ALLURA_PM_TOC: TocItem[] = [
  { id: "overview", title: "Overview: Uptime Is a Managed Outcome" },
  { id: "chain", title: "The Components That Decide Availability" },
  { id: "schedule", title: "What a Preventive Maintenance Visit Covers" },
  { id: "constancy", title: "Dose and Image Quality Constancy Testing" },
  { id: "contracts", title: "Choosing a Service Scope" },
  { id: "daily", title: "Daily Practice That Extends Component Life" },
  { id: "parts", title: "Spare Parts and Response Time" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PHILIPS_ALLURA_PM_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "An interventional room that is unavailable does not merely delay a list; it diverts emergency work to another hospital. For a Philips Allura Xper cath lab, availability is not a property of the equipment — it is the product of a maintenance schedule, a spare-parts arrangement, a response-time commitment and the daily behaviour of the clinical team.",
      "The Allura Xper systems in service in the AbuFarha portfolio range from FD10 monoplane rooms to FD20/10 biplane rooms. Their maintenance logic is the same: protect the imaging chain, detect drift early, and never let an image-quality change go unreported because the room still switches on.",
      "This guide sets out the preventive maintenance scope, the constancy testing that makes drift visible, and the service arrangements that actually determine uptime.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Imaging chain components and failure exposure, preventive maintenance scope, dose and image-quality constancy testing, service agreement structure, spare parts and response time, and daily practice for Philips Allura Xper cath labs",
    audience:
      "Biomedical engineering teams, cath lab managers, medical physicists, hospital technical directors, finance and procurement",
    readingTime: "13 min read",
    technology: "Cath Lab Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Overview: Uptime Is a Managed Outcome",
    number: 1,
    body: "Rooms do not fail suddenly; they degrade and then fail.",
  },
  {
    type: "p",
    text: "Almost every unplanned interventional room closure has a history: increasing noise in fluoroscopy, an intermittent positioner fault, a warning log nobody read, a cooling alarm dismissed for weeks. Preventive maintenance exists to convert that history into scheduled work. Where a room is maintained reactively, the same components still fail — but at the worst moment, and usually with longer downtime because the part was not anticipated.",
  },
  {
    type: "h2",
    id: "chain",
    text: "The Components That Decide Availability",
    number: 2,
    body: "Concentrate attention where failure is expensive.",
  },
  {
    type: "table",
    headers: ["Component", "Why it matters", "Failure signature"],
    rows: [
      ["X-ray tube", "Highest-value consumable; life is workload-driven", "Rising exposure factors, arcing, thermal alarms"],
      ["Flat detector", "Largest unplanned cost in the room", "Dead lines or pixels, uniformity loss, calibration failures"],
      ["High-voltage generator", "Determines exposure consistency", "Inconsistent brightness, dose variation between runs"],
      ["Positioner and table", "Mechanical availability and safety", "Drift, noisy motion, collision-protection faults"],
      ["Cooling system", "Protects tube and electronics", "Temperature alarms, reduced sustained fluoroscopy time"],
      ["Monitors and image processing chain", "Clinical usability", "Visible artefacts, latency, calibration drift"],
    ],
    caption: "Component risk map for an interventional angiography room; biplane rooms carry two of the imaging-chain items.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Tube and detector together dominate lifetime service cost. Everything else in the room is comparatively cheap to keep running.",
    clinicalInterpretation:
      "A degraded detector or drifting generator produces images that look acceptable in isolation but reduce confidence in borderline findings — the failure mode that harms patients without triggering an alarm.",
    hospitalRecommendation:
      "Negotiate tube and detector cover explicitly, and require documented constancy results at every preventive maintenance visit so degradation is evidenced rather than debated.",
  },
  {
    type: "h2",
    id: "schedule",
    text: "What a Preventive Maintenance Visit Covers",
    number: 3,
    body: "A structured visit, not an inspection walkaround.",
  },
  {
    type: "ul",
    items: [
      "Review of system logs and error history since the previous visit, with trend analysis rather than clearing.",
      "Generator and tube performance checks against the commissioning baseline.",
      "Detector calibration and uniformity verification, per plane in biplane rooms.",
      "Mechanical inspection of positioner, table, brakes, cable management and collision protection.",
      "Cooling circuit inspection, filter service and temperature verification under load.",
      "Collimator, shutter and geometric alignment verification.",
      "Monitor calibration check and image chain latency verification.",
      "Safety systems: emergency stops, interlocks, dose-rate limits and alarm functions.",
      "Software and configuration state recorded, with backup of system configuration.",
      "Written report listing findings, actions, deviations from baseline and recommended follow-up.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "A visit without numbers is not maintenance",
    text: "Insist that each report includes measured values against baseline, not tick boxes. Trend data is what allows a tube or detector replacement to be budgeted a quarter in advance rather than declared an emergency.",
  },
  {
    type: "h2",
    id: "constancy",
    text: "Dose and Image Quality Constancy Testing",
    number: 4,
    body: "The mechanism that makes slow degradation visible.",
  },
  {
    type: "p",
    text: "Constancy testing repeats a fixed measurement protocol at defined intervals and compares results with the baselines recorded at acceptance. Typical measures include reference air kerma rate for each fluoroscopy and acquisition mode, high-contrast resolution, low-contrast detectability, uniformity, and automatic exposure control response. A change in dose rate without a corresponding change in image quality — or the reverse — is an early indicator that something in the chain has shifted.",
  },
  {
    type: "p",
    text: "Constancy testing sits at the boundary between engineering and medical physics. In well-run departments the physicist owns the protocol and the service engineer performs and documents the measurements at every preventive maintenance visit, with the physicist reviewing trends annually.",
  },
  {
    type: "h2",
    id: "contracts",
    text: "Choosing a Service Scope",
    number: 5,
    body: "The clauses that decide annual cost and real availability.",
  },
  {
    type: "comparison",
    title: "Typical service scopes compared",
    headers: ["Feature", "Preventive maintenance only", "Comprehensive cover"],
    rows: [
      ["Scheduled visits", "Included", "Included"],
      ["Corrective labour", "Charged per incident", "Included"],
      ["X-ray tube", "Excluded", "Usually included or capped"],
      ["Flat detector", "Excluded", "Negotiated — confirm explicitly"],
      ["Response time commitment", "Best effort", "Contractual"],
      ["Annual cost predictability", "Low", "High"],
      ["Best suited to", "Low-workload rooms with strong in-house engineering", "High-workload and emergency-facing rooms"],
    ],
  },
  {
    type: "ul",
    items: [
      "Confirm response and restoration times separately; a fast response with slow parts supply does not reopen the room.",
      "Establish whether workload assumptions in the contract match your projected caseload.",
      "Clarify remote diagnostics access, which shortens fault identification substantially.",
      "Agree how planned maintenance is scheduled around clinical lists.",
      "Define escalation and reporting so recurring faults are visible to management.",
    ],
  },
  {
    type: "h2",
    id: "daily",
    text: "Daily Practice That Extends Component Life",
    number: 6,
    body: "Behaviour is a maintenance variable.",
  },
  {
    type: "ul",
    items: [
      "Use the lowest adequate fluoroscopy mode and frame rate; tube loading follows usage directly.",
      "Collimate to the region of interest, which reduces both dose and scatter-related image degradation.",
      "Store last-image-hold and use replay instead of repeating exposures.",
      "Move the positioner deliberately; repeated collision-protection events accelerate mechanical wear.",
      "Report image-quality changes on the day they are noticed, in writing, with a stored example image.",
      "Keep cooling intakes clear and never obstruct equipment-room ventilation with stored consumables.",
    ],
  },
  {
    type: "h2",
    id: "parts",
    text: "Spare Parts and Response Time",
    number: 7,
    body: "Availability is a logistics question.",
  },
  {
    type: "p",
    text: "For systems of Allura Xper generation, parts strategy matters as much as engineering skill. Hospitals should confirm which critical parts are held regionally, which are ordered on demand, and what the realistic lead time is for a tube or detector. Where a room supports an emergency service, holding or guaranteeing critical spares is usually cheaper than the clinical cost of extended downtime. AbuFarha Medical provides preventive maintenance, technical support, remote diagnostics where supported and spare-part supply for Philips Allura Xper systems across their installed life.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How often should a Philips Allura Xper cath lab receive preventive maintenance?",
        a: "Scheduled visits are typically planned two to four times per year depending on workload and contract scope, with the interval justified by caseload rather than convention. Manufacturer documentation defines the minimum schedule.",
      },
      {
        q: "What is the most common expensive failure?",
        a: "X-ray tube replacement is the most frequent high-value event; flat detector failure is less frequent but more costly. Both are workload-related and both should be addressed explicitly in the service agreement.",
      },
      {
        q: "Can image quality drift without any fault appearing?",
        a: "Yes, and this is the main reason constancy testing exists. Gradual changes in dose rate, uniformity or low-contrast detectability rarely generate error messages.",
      },
      {
        q: "Does remote diagnostics reduce downtime?",
        a: "Materially, where the system supports it. Remote log analysis often identifies the required part before an engineer travels, which removes an entire visit from the repair cycle.",
      },
      {
        q: "Is in-house engineering enough for an interventional room?",
        a: "In-house teams are essential for first-line response and daily oversight, but interventional imaging chains require calibrated test equipment, manufacturer procedures and parts access, so they work best alongside a formal service agreement.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Interventional room availability is engineered through scheduled maintenance, not hoped for.",
      "Tube and flat detector dominate lifetime service cost and must be addressed explicitly in contracts.",
      "Constancy testing against commissioning baselines is the only reliable way to see slow degradation.",
      "Response time without parts availability does not restore clinical service.",
      "Daily dose and handling discipline measurably extends component life.",
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
    text: "A Philips Allura Xper room that is maintained to schedule, measured against its own baselines and supported by a realistic parts arrangement remains clinically dependable for many years. The failure mode to guard against is not dramatic breakdown but quiet degradation accepted as normal. Documented maintenance is what prevents it.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Quality control and physics",
        items: [
          { label: "American Association of Physicists in Medicine — interventional fluoroscopy quality control", url: "https://www.aapm.org/" },
          { label: "International Atomic Energy Agency — quality assurance in interventional radiology", url: "https://www.iaea.org/" },
        ],
      },
      {
        title: "Equipment standards",
        items: [
          { label: "International Electrotechnical Commission — IEC 60601 series", url: "https://www.iec.ch/" },
          { label: "World Health Organization — medical device maintenance guidance", url: "https://www.who.int/" },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          { label: "Philips — Allura Xper service and maintenance documentation", url: "https://www.philips.com/healthcare" },
        ],
      },
    ],
    note: "Maintenance intervals, test methods and part specifications must be confirmed against the manufacturer's service documentation for the installed configuration.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Interventional imaging service and maintenance" },
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Cath lab operations and radiation safety practice" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer service documentation and field maintenance practice synthesis",
    disclaimer:
      "Educational maintenance guidance. It does not replace manufacturer service documentation, medical physics assessment or regulatory requirements.",
  },
];
