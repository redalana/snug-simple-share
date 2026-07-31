/**
 * Bone Densitometers (DEXA) cluster — "DEXA Room Planning and Installation"
 */

import type { ContentBlock, TocItem } from "../blog";

export const DEXA_ROOM_INSTALL_TOC: TocItem[] = [
  { id: "planning-early", title: "Why Room Planning Starts Before Equipment Selection" },
  { id: "space", title: "Space, Access and Patient Flow" },
  { id: "radiation", title: "Radiation Protection Requirements" },
  { id: "environment", title: "Electrical Supply and Environmental Control" },
  { id: "data", title: "Network, Archive and Data Integration" },
  { id: "sequence", title: "Installation and Commissioning Sequence" },
  { id: "handover", title: "Acceptance and Handover" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DEXA_ROOM_INSTALL_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A bone densitometer is a compact, low-dose X-ray system, and it is tempting to treat its room requirements as an afterthought compared with CT or MRI installation. That assumption causes avoidable delay and rework, because densitometry rooms have their own access, radiation protection, environmental and data integration requirements that must be resolved before the equipment arrives. AbuFarha Medical plans, installs and commissions bone densitometry rooms as part of its supply and service offering, working alongside hospital estates and physics teams from the early planning stage.",
      "Because the scanning arm requires specific travel clearance and patient transfer often involves less mobile individuals, room layout affects both workflow efficiency and patient safety in ways that are easy to overlook on a floor plan drawn without densitometry-specific input.",
      "This guide sets out what a hospital or clinic needs to plan for room space, radiation protection, environmental stability, data integration and the installation sequence itself, so that a densitometry service opens on schedule and without avoidable retrofits.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Room space and access planning, patient flow considerations, radiation protection requirements, electrical and environmental specifications, network and archive integration, and the installation and commissioning sequence",
    audience:
      "Hospital estates and capital projects teams, radiology service planners, medical physicists, biomedical engineering teams, procurement committees",
    readingTime: "12 min read",
    technology: "Bone Densitometers (DEXA)",
  },
  {
    type: "h2",
    id: "planning-early",
    text: "Why Room Planning Starts Before Equipment Selection",
    number: 1,
  },
  {
    type: "p",
    text: "Room and infrastructure requirements should be established as part of the procurement specification, not deferred until after a system is selected. A room designed around generic X-ray room assumptions can be undersized for scanning arm travel, positioned without adequate patient transfer space, or wired without the stable supply the system's calibration depends on. Resolving these issues after delivery causes schedule slippage that is entirely avoidable with earlier planning input.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Modest shielding, not modest planning",
    text: "Densitometry's radiation protection requirements are genuinely modest compared with general radiography, but that does not mean the assessment can be skipped. A qualified medical physicist must still formally confirm shielding adequacy for the specific room and adjacent occupancy.",
  },
  {
    type: "h2",
    id: "space",
    text: "Space, Access and Patient Flow",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Allow sufficient room footprint for full scanning arm travel across all standard examination sites without obstruction.",
      "Plan a clear path for patient transfer, including wheelchair and trolley access, given that many patients referred for densitometry have reduced mobility.",
      "Include space for a changing area or private preparation space appropriate to the patient population and local practice.",
      "Position the control area to allow the operator to observe the patient throughout the scan while operating the acquisition console.",
      "Plan storage for the calibration phantom in a location that is both secure and close to the point of daily use.",
      "Confirm door widths and corridor access accommodate the delivery of the system itself, not only day-to-day patient traffic.",
    ],
  },
  {
    type: "h2",
    id: "radiation",
    text: "Radiation Protection Requirements",
    number: 3,
  },
  {
    type: "table",
    headers: ["Requirement", "Typical consideration", "Responsible party"],
    rows: [
      ["Room shielding assessment", "Determined by workload, room layout and adjacent occupancy", "Qualified medical physicist"],
      ["Structural shielding, if required", "Often minimal for densitometry compared with general radiography", "Estates team, on physicist's specification"],
      ["Warning signage and controlled area definition", "Required at the room entrance per local regulation", "Radiation protection adviser"],
      ["Operator position and shielding", "Protected control position or barrier as specified", "Physicist and installer jointly"],
      ["Local rules and equipment-specific protocols", "Documented before clinical use begins", "Radiation protection supervisor"],
    ],
    caption: "Radiation protection elements requiring formal assessment before a densitometry room is commissioned.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Densitometry shielding requirements are modest, but the formal assessment step itself is not optional and should be scheduled early enough that its outcome does not delay installation.",
    clinicalInterpretation:
      "Adjacent room occupancy, including whether neighbouring spaces are staff or public areas, is often the deciding factor in whether any structural shielding is needed at all.",
    hospitalRecommendation:
      "Commission the physicist's shielding assessment at the design stage, using the specific room drawings, rather than relying on a generic assumption carried over from a different room type.",
  },
  {
    type: "h2",
    id: "environment",
    text: "Electrical Supply and Environmental Control",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Provide a stable, dedicated electrical supply meeting the manufacturer's specification, since calibration stability depends on consistent power quality.",
      "Maintain the room within the manufacturer's specified temperature range, since detector and calibration stability are temperature-sensitive.",
      "Avoid locating the room where temperature fluctuates significantly between day and night operation, such as spaces with intermittent air conditioning.",
      "Confirm uninterruptible power provision where local policy requires it for diagnostic equipment.",
      "Plan cable routing and containment during the design stage rather than as a retrofit after equipment delivery.",
    ],
  },
  {
    type: "h2",
    id: "data",
    text: "Network, Archive and Data Integration",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Provision network connectivity for the acquisition workstation to the hospital's information and archive systems before installation begins.",
      "Confirm the reporting and archive systems can receive and store densitometry-specific outputs, including scores and region-of-interest data, not only images.",
      "Plan for retrieval of prior scans at the point of reporting, since follow-up interpretation depends on ready access to baseline data.",
      "Agree data backup and retention arrangements consistent with the service's clinical governance requirements.",
      "Test connectivity and data flow during commissioning, before the first clinical patient is scanned.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Test data flow before the first patient, not after",
    text: "Confirm that scores, not only images, are correctly transmitted and stored in the archive during commissioning. A system that appears to work but fails to store structured measurement data creates a reporting problem discovered only at follow-up.",
  },
  {
    type: "h2",
    id: "sequence",
    text: "Installation and Commissioning Sequence",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Confirm room readiness — electrical, network, environmental and radiation protection sign-off — before delivery.",
      "Deliver and position the system, followed by mechanical and electrical installation checks.",
      "Perform manufacturer acceptance testing, verifying mechanical function, X-ray output and detector performance against specification.",
      "Establish the baseline phantom quality control series before any clinical scanning begins.",
      "Conduct operator training and initial precision assessment for each operator.",
      "Verify network, archive and reporting data flow end to end.",
      "Complete formal handover documentation before the service accepts its first clinical referral.",
    ],
  },
  {
    type: "h2",
    id: "handover",
    text: "Acceptance and Handover",
    number: 7,
  },
  {
    type: "p",
    text: "Formal acceptance should confirm that the system meets specification, that baseline quality control has been established, that operators have completed training and initial precision assessment, and that data flow to the archive and reporting system is verified. A service that begins clinical scanning before these steps are complete risks results that cannot later be validated against a proper baseline.",
  },
  {
    type: "p",
    text: "AbuFarha Medical manages the full installation and commissioning sequence for bone densitometry systems, coordinating with hospital estates and medical physics teams on room readiness, and delivering acceptance testing, baseline quality control establishment and operator training before formal handover.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Does a DEXA room need the same shielding as a general X-ray room?",
        a: "Usually less, given the low dose and beam characteristics of densitometry, but a formal assessment by a qualified medical physicist for the specific room and its occupancy is still required.",
      },
      {
        q: "How much space does a scanning arm actually need?",
        a: "Enough for full unobstructed travel across all standard examination positions, which should be confirmed against the specific system's footprint rather than assumed from a generic room template.",
      },
      {
        q: "Can a densitometer be installed in a room with variable temperature control?",
        a: "It is not advisable. Detector and calibration stability are temperature-sensitive, and significant fluctuation can affect measurement reliability.",
      },
      {
        q: "What happens if data integration is not tested before opening?",
        a: "Structured measurement data may fail to reach the archive or reporting system even when images appear to transmit correctly, creating problems only discovered when a follow-up comparison is attempted.",
      },
      {
        q: "When should the radiation protection assessment be commissioned?",
        a: "At the design stage, using the specific room drawings, so its outcome does not create late-stage delays to installation.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Room and infrastructure requirements should be part of the procurement specification, not resolved after equipment selection.",
      "Scanning arm travel clearance and patient transfer access are common sources of avoidable rework if not planned early.",
      "Radiation protection assessment is required by a qualified medical physicist even though densitometry shielding demands are modest.",
      "Environmental and electrical stability directly affect calibration stability and measurement validity.",
      "Data flow to archive and reporting systems must be tested during commissioning, before clinical scanning begins.",
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
    text: "A well-planned densitometry room supports efficient patient flow, protects the calibration stability the service depends on, and integrates cleanly into the hospital's data systems from day one. Addressing space, radiation protection, environment and data integration during design rather than after delivery is what allows a densitometry service to open on schedule.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Physics and installation guidance",
        items: [
          { label: "International Atomic Energy Agency — radiation protection and installation guidance", url: "https://www.iaea.org/" },
          { label: "American Association of Physicists in Medicine — densitometry acceptance testing", url: "https://www.aapm.org/" },
        ],
      },
      {
        title: "Clinical practice",
        items: [
          { label: "International Osteoporosis Foundation — densitometry service resources", url: "https://www.osteoporosis.foundation/" },
        ],
      },
    ],
    note: "Room specifications, shielding requirements and installation sequencing must follow the manufacturer's site planning documentation and applicable national regulation.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Bone health service planning" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Densitometry installation and commissioning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Installation and commissioning practice synthesis",
    disclaimer:
      "Educational guidance on densitometry room planning and installation. It does not replace manufacturer site planning documentation or medical physics assessment.",
  },
];
