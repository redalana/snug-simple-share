/**
 * Mammography room planning and installation — Mammography cluster (installation).
 */

import type { ContentBlock, TocItem } from "../blog";

export const MAMMO_ROOM_TOC: TocItem[] = [
  { id: "overview", title: "What the Room Has to Achieve" },
  { id: "space", title: "Space and Layout" },
  { id: "shielding", title: "Shielding and Radiation Protection" },
  { id: "services", title: "Power, Environment and Network" },
  { id: "privacy", title: "Privacy, Dignity and Access" },
  { id: "delivery", title: "Delivery and Installation Sequence" },
  { id: "commissioning", title: "Acceptance and Commissioning" },
  { id: "mistakes", title: "Common Planning Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MAMMO_ROOM_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A mammography room is one of the smallest imaging installations in a hospital and one of the most frequently compromised. Because the unit is compact and the beam energy is low, planning teams often treat the room as an ordinary consulting space with a machine in it. The result is rooms that pass a physics survey but fail the service: cramped positioning, poor reading conditions, and privacy arrangements that discourage the women the programme is meant to reach.",
      "The room has three jobs. It must allow the radiographer to position the breast correctly from both sides of the patient. It must contain the scattered radiation without over-engineering. And it must feel safe and private enough that a screening appointment is completed rather than abandoned.",
      "This guide sets out the space, shielding, services and commissioning requirements for a mammography room, and the sequence in which decisions should be made so that late changes are avoided.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Room size and layout, shielding design, electrical and environmental services, network and storage, privacy and accessibility, installation sequence, acceptance testing and common planning errors",
    audience:
      "Hospital planners, project managers, radiology managers, medical physicists, biomedical engineering and architects",
    readingTime: "14 min read",
    technology: "Mammography Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "What the Room Has to Achieve",
    number: 1,
    body: "Design against the workflow, not against the equipment footprint alone.",
  },
  {
    type: "ul",
    items: [
      "Positioning access on both sides of the patient for craniocaudal and oblique views.",
      "An operator position with a clear line of sight to the patient during exposure.",
      "Scatter containment adequate for the workload, verified by a physics survey.",
      "A changing and waiting arrangement that preserves dignity and keeps the list moving.",
      "Reading conditions — either in-room or at a nearby workstation — with controlled ambient light.",
      "Network capacity for image transfer without delaying the next patient.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Plan the patient path first",
    text: "Draw the route from waiting area to changing space to unit to exit before fixing the equipment position. Rooms that place the unit first almost always end up with the changing cubicle in the wrong place.",
  },
  {
    type: "h2",
    id: "space",
    text: "Space and Layout",
    number: 2,
    body: "The constraint is movement around the patient, not the machine footprint.",
  },
  {
    type: "table",
    headers: ["Element", "Planning requirement", "Why it matters"],
    rows: [
      ["Clear floor area", "Sufficient for the radiographer to work from both sides of the unit", "Oblique views require access from the contralateral side"],
      ["Unit position", "Away from the door swing and off the main circulation line", "Prevents interruption during compression"],
      ["Operator console", "Behind a protective screen with direct patient view", "Allows compression to be monitored during exposure"],
      ["Changing cubicle", "Adjacent or integral, lockable, with a hook and seat", "Reduces turnaround time and preserves dignity"],
      ["Accessible route", "Level access with wheelchair turning space", "Seated examinations must be possible"],
      ["Storage", "Space for paddles, face shields and biopsy accessories", "Accessories left in circulation get damaged"],
      ["Reading position", "Dimmable local lighting, no window glare", "Low-contrast lesion detection depends on viewing conditions"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The single most common shortfall is insufficient clearance on the side opposite the unit. A room that looks generous in plan becomes unworkable once the changing cubicle, chair and accessory trolley are placed.",
    clinicalInterpretation:
      "Restricted positioning access translates directly into inadequate posterior tissue inclusion and repeat views, both of which raise dose and reduce sensitivity.",
    hospitalRecommendation:
      "Mock up the room at full scale with the accessory trolley, chair and cubicle in place, and have a radiographer rehearse a full four-view examination before construction is signed off.",
  },
  {
    type: "h2",
    id: "shielding",
    text: "Shielding and Radiation Protection",
    number: 3,
    body: "Low beam energy makes shielding modest — but the design must still be calculated, not assumed.",
  },
  {
    type: "ul",
    items: [
      "Mammographic spectra are low energy, so required barrier thicknesses are far smaller than for general radiography or CT.",
      "Shielding must still be calculated from workload, occupancy and distance by a qualified expert.",
      "Standard construction materials frequently suffice for parts of the enclosure; this must be demonstrated rather than presumed.",
      "The operator protective screen and viewing window are part of the shielding design, not accessories.",
      "Penetrations for conduit, sockets and data outlets must be detailed so they do not create weak points.",
      "Doors, frames and any glazing must be specified with the same protective performance as the adjacent wall.",
      "Warning signage and interlocks follow local regulatory requirements.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Do not copy a shielding specification",
    text: "A shielding design is specific to workload, geometry and occupancy of neighbouring areas. Reusing a specification from another site is a regulatory and safety failure even when the equipment is identical.",
  },
  {
    type: "h2",
    id: "services",
    text: "Power, Environment and Network",
    number: 4,
    body: "Most late-stage installation delays are services problems, not equipment problems.",
  },
  {
    type: "table",
    headers: ["Service", "Requirement", "Typical failure"],
    rows: [
      ["Electrical supply", "Dedicated circuit sized to the manufacturer's specification, correct earthing", "Shared circuit causing generator faults during exposure"],
      ["Supply stability", "Voltage within tolerance; conditioning where the grid is unstable", "Intermittent aborted exposures blamed on the detector"],
      ["Environment", "Temperature and humidity held within the stated operating range", "Detector performance drift in an uncooled room"],
      ["Network", "Bandwidth sized for tomosynthesis volumes if fitted", "Transfer backlog delaying the next patient"],
      ["Storage", "Archive capacity planned for the full retention period", "Local disk filling within months of go-live"],
      ["Uninterruptible supply", "Protection for console and workstation", "Corrupted studies after a power dip"],
    ],
  },
  {
    type: "h2",
    id: "privacy",
    text: "Privacy, Dignity and Access",
    number: 5,
    body: "Attendance is a clinical outcome. Room design influences it.",
  },
  {
    type: "ul",
    items: [
      "Provide a lockable changing space that does not require walking through a public corridor in a gown.",
      "Position the unit so the patient is not visible from the door when it opens.",
      "Provide a seat for patients who cannot stand for the full examination.",
      "Keep the room warm; compression is less tolerable in a cold room.",
      "Allow space for a chaperone or support person without obstructing the radiographer.",
      "Ensure signage and wayfinding do not identify the room's purpose in a public area where that causes discomfort.",
    ],
  },
  {
    type: "h2",
    id: "delivery",
    text: "Delivery and Installation Sequence",
    number: 6,
    body: "Sequence errors, not equipment faults, drive most schedule slippage.",
  },
  {
    type: "table",
    headers: ["Stage", "Activity", "Gate before proceeding"],
    rows: [
      ["1", "Site survey and shielding design", "Design approved by qualified expert"],
      ["2", "Builder's work: walls, doors, screen, penetrations", "Dimensional check against equipment drawings"],
      ["3", "Services first fix: power, data, environment", "Load and earthing verification"],
      ["4", "Delivery route survey and equipment delivery", "Access dimensions confirmed, including lifts and door heights"],
      ["5", "Mechanical installation and alignment", "Manufacturer installation checklist complete"],
      ["6", "Network and archive integration", "End-to-end transfer test with correct patient identifiers"],
      ["7", "Physics acceptance and shielding survey", "Written report and regulatory sign-off"],
      ["8", "Applications training and first clinical list", "Radiographer competency confirmed"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Frequent sequencing errors",
    items: [
      "Ordering the unit before the delivery route has been surveyed.",
      "Completing decoration before shielding penetrations are sealed and surveyed.",
      "Scheduling physics acceptance after the first clinical list has been booked.",
      "Leaving archive configuration to the go-live day.",
      "Omitting the biopsy accessories from the installation scope, delaying the interventional service.",
    ],
  },
  {
    type: "h2",
    id: "commissioning",
    text: "Acceptance and Commissioning",
    number: 7,
    body: "Acceptance establishes the baseline every later quality-control test is measured against.",
  },
  {
    type: "ul",
    items: [
      "Physics acceptance testing against the manufacturer's specification and applicable national protocol.",
      "Establishment of baseline values for the routine quality-control programme.",
      "Verification of automatic exposure control behaviour across representative thicknesses.",
      "Compression force and paddle function checks.",
      "Display calibration for the reading workstation, with baseline recorded.",
      "Confirmation that images, annotations and dose data reach the archive intact.",
      "Documented handover of manuals, test reports, spare-part list and service contact route.",
    ],
  },
  {
    type: "h2",
    id: "mistakes",
    text: "Common Planning Mistakes",
    number: 8,
    body: "Each of these is inexpensive to prevent and expensive to correct after handover.",
  },
  {
    type: "ul",
    items: [
      "Sizing the room from the equipment footprint rather than the working envelope.",
      "Treating the operator screen as furniture rather than part of the shielding design.",
      "Forgetting the reading environment and leaving interpretation to a bright shared office.",
      "Ignoring tomosynthesis data volumes when specifying network and archive.",
      "Placing the changing cubicle so patients cross public circulation.",
      "Omitting accessory storage, leading to damaged paddles and face shields.",
      "Deferring quality-control training until after the service has started.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "How much space does a mammography room need?",
        a: "There is no single figure, because the requirement is set by the working envelope rather than the unit footprint. Plan for the radiographer to work freely from both sides of the patient, plus a chair, accessory storage and a changing arrangement. Confirm the final layout with a full-scale mock-up and the manufacturer's installation drawings.",
      },
      {
        q: "Does a mammography room need lead shielding?",
        a: "It needs a shielding design produced by a qualified expert. Because mammographic beam energies are low, the calculated barrier requirement is modest and in some constructions may be met by standard materials. That conclusion must be demonstrated by calculation and confirmed by survey, never assumed.",
      },
      {
        q: "Can a mammography unit be installed in an existing X-ray room?",
        a: "Often yes, but the room must be reassessed. Shielding designed for general radiography will normally be more than adequate, but positioning access, privacy provision, changing facilities and reading conditions are usually the limiting factors rather than radiation protection.",
      },
      {
        q: "What changes if tomosynthesis is included?",
        a: "The physical room requirements change little; the information-technology requirements change substantially. Reconstructed volumes are far larger than two-dimensional images, so network bandwidth, workstation specification and archive capacity must be sized for them, and reading time per case increases.",
      },
      {
        q: "When should physics acceptance testing be scheduled?",
        a: "After installation and network integration are complete, and before the first clinical list. Acceptance testing both confirms the system meets specification and establishes the baselines against which routine quality control is judged, so it cannot be retrofitted later.",
      },
      {
        q: "What should be included in the handover pack?",
        a: "Operating and service manuals, the acceptance test report, the shielding survey, baseline quality-control values, display calibration records, the accessory and spare-part list, training records and the escalation route for service faults.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "A mammography room is a small project with a large service consequence.",
  },
  {
    type: "p",
    text: "The technical requirements are modest compared with cross-sectional imaging, which is precisely why they are so often under-planned. Size the room around the working envelope, have the shielding calculated rather than assumed, size the network and archive for the data the system actually produces, and design the patient path so that attendance is comfortable. Then gate the installation sequence so that acceptance testing and training happen before the first list rather than after it.",
  },
  {
    type: "articleCta",
    heading: "Planning a mammography installation?",
    subheading:
      "AbuFarha Medical Supplies supports site survey, delivery, installation, commissioning support and biomedical training for mammography systems.",
    technology: "Mammography Systems",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Radiation protection and shielding",
        items: [
          { label: "International Atomic Energy Agency — radiation protection in diagnostic radiology", url: "https://www.iaea.org/" },
          { label: "International Commission on Radiological Protection — recommendations on medical exposure", url: "https://www.icrp.org/" },
        ],
      },
      {
        title: "Quality assurance and acceptance testing",
        items: [
          { label: "World Health Organization — quality systems for diagnostic imaging", url: "https://www.who.int/" },
          { label: "International Electrotechnical Commission — standards for mammographic X-ray equipment", url: "https://www.iec.ch/" },
        ],
      },
    ],
    note: "References are provided for orientation. Applicable national regulations and the manufacturer's installation specification take precedence.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Diagnostic imaging" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Installation and commissioning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Guidance synthesis and engineering practice",
    disclaimer:
      "This article is educational and does not replace regulatory requirements, a qualified expert's shielding design or the manufacturer's installation specification.",
  },
];
