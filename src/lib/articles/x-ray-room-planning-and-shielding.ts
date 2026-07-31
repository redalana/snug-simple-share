/**
 * X-ray room planning and shielding — X-Ray cluster (installation).
 */

import type { ContentBlock, TocItem } from "../blog";

export const XRAY_ROOM_PLANNING_TOC: TocItem[] = [
  { id: "overview", title: "What an X-Ray Room Installation Involves" },
  { id: "dimensions", title: "Room Dimensions and Geometry" },
  { id: "shielding", title: "Shielding Design" },
  { id: "structure", title: "Structural and Ceiling Requirements" },
  { id: "services", title: "Electrical, Cooling and Network Services" },
  { id: "control", title: "Control Area and Workflow Design" },
  { id: "commissioning", title: "Commissioning and Acceptance" },
  { id: "programme", title: "Programme and Common Delays" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const XRAY_ROOM_PLANNING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A general radiography room is the least complex imaging installation a hospital builds, which is precisely why its requirements are the most frequently underestimated. There is no magnet, no cryogen and no hot lab — so the room is often treated as a decorated office with a machine in it.",
      "In practice, the room has hard constraints: a shielding design derived from workload and beam direction, a ceiling capable of carrying a suspended tube support, dimensions that allow the required source-to-image distances, and a control position with a genuine view of the patient.",
      "This guide sets out what an X-ray room installation actually requires, in the order the project needs it, and identifies the omissions that most often cause rework after the equipment has arrived.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Room dimensions and geometry, shielding design inputs, ceiling and structural verification, electrical and network services, control area design, commissioning and acceptance testing, project programme and common delays",
    audience:
      "Healthcare planners, project managers, radiology managers, biomedical engineers, architects and medical physicists",
    readingTime: "14 min read",
    technology: "X-Ray Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "What an X-Ray Room Installation Involves",
    number: 1,
    body: "The installation is a coordinated set of building works, services and regulatory steps whose sequence matters as much as their content.",
  },
  {
    type: "ul",
    items: [
      "Equipment selection and configuration, which fixes the geometric and structural requirements.",
      "Shielding design by a qualified expert, based on planned workload, beam directions and adjacent occupancy.",
      "Structural verification for the tube support and, where applicable, the floor loading of table and stands.",
      "Electrical supply design matched to generator demand, with correct earthing for a medical location.",
      "Room construction, shielding installation, finishes and door interlocks or warning systems as required.",
      "Network, PACS, worklist and dose registry integration.",
      "Equipment delivery, installation, calibration and manufacturer commissioning.",
      "Radiation protection survey, acceptance testing and medical physics sign-off before first clinical use.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Order the shielding design before the room layout is frozen",
    text: "Shielding requirements depend on where the beam points and what is on the other side of each wall. Producing the layout first and asking for a shielding design afterwards frequently results in a wall that cannot be economically shielded — or a layout change after tender.",
  },
  {
    type: "h2",
    id: "dimensions",
    text: "Room Dimensions and Geometry",
    number: 2,
    body: "Room size is dictated by the imaging geometry and by patient handling, not by the footprint of the equipment.",
  },
  {
    type: "table",
    headers: ["Requirement", "Driver", "Consequence if inadequate"],
    rows: [
      ["Source-to-image distance for chest imaging", "Standard erect chest technique", "Compromised technique or non-standard distances affecting image quality"],
      ["Tube travel range along the table and to the wall stand", "Examination mix", "Repositioning of the patient instead of the tube; slower throughput"],
      ["Clearance around the table", "Trolley transfers, hoists and staff access", "Unsafe transfers and staff strain"],
      ["Trolley and bed turning space", "Inpatient and emergency workload", "Delays and door damage"],
      ["Wall stand position and access", "Erect examinations", "Awkward positioning, repeat exposures"],
      ["Door width and route", "Beds, bariatric patients, equipment delivery", "Equipment cannot be delivered or patients cannot be admitted"],
      ["Bariatric provision", "Patient population", "Examinations refused or performed unsafely"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Designing for the equipment but not for the trolley",
    text: "The most common practical failure in radiography room design is a room in which the equipment fits comfortably but a trolley cannot be turned and parked beside the table. Test the layout against a real trolley footprint at design stage, including the space staff occupy during a transfer.",
  },
  {
    type: "h2",
    id: "shielding",
    text: "Shielding Design",
    number: 3,
    body: "Shielding is a calculation performed by a qualified expert, and it needs specific inputs that the hospital must supply honestly.",
  },
  {
    type: "ul",
    items: [
      "Planned workload — number of examinations by type, with expected growth, not current volume alone.",
      "Technique factors — typical kV and mAs ranges for the intended examination mix.",
      "Beam directions and primary barriers — where the beam points during each standard projection.",
      "Occupancy of adjacent areas, including corridors, offices, waiting areas and rooms above and below.",
      "Construction details — wall build-up, penetrations for services, door construction and frame detailing.",
      "Viewing window specification, where a leaded window is used at the control position.",
      "Design dose constraints for staff and members of the public, according to local regulation.",
      "Any planned mobile equipment use in adjacent spaces, which can change the assessment.",
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Shielding details that cause site problems",
    clinicalInterpretation:
      "Failures rarely occur in the middle of a wall. They occur at penetrations, at door frames, at the junction between shielding and structural slab, and at ceiling or floor voids where the design assumed continuity that construction did not deliver.",
    hospitalRecommendation:
      "Require the shielding expert to inspect during construction, before finishes are applied, and retain photographic records of penetrations and junction detailing for the final radiation protection survey.",
  },
  {
    type: "h2",
    id: "structure",
    text: "Structural and Ceiling Requirements",
    number: 4,
    body: "Ceiling-suspended tube supports are the element most often discovered to be impossible after equipment has been ordered.",
  },
  {
    type: "ul",
    items: [
      "Obtain the manufacturer's rail loading and fixing requirements and have them verified in writing by a structural engineer for the specific slab.",
      "Confirm slab-to-slab height, because rail systems and their travel require clearance above the finished ceiling.",
      "Coordinate rail routes with services in the ceiling void — lighting, ductwork, sprinklers and cable trays — before installation, not during it.",
      "Verify floor loading for the table, wall stand and any bariatric provision.",
      "Where structure will not permit a ceiling-suspended system, decide early: floor-mounted or U-arm configurations change the equipment specification and the room layout.",
      "Retain the structural verification documentation; it is required at commissioning and useful at every future replacement.",
    ],
  },
  {
    type: "h2",
    id: "services",
    text: "Electrical, Cooling and Network Services",
    number: 5,
    body: "Radiography has modest service requirements compared with CT or MRI, but the requirements are specific and unforgiving.",
  },
  {
    type: "table",
    headers: ["Service", "Requirement", "Note"],
    rows: [
      ["Electrical supply", "Rated for generator peak demand and inrush, with stated impedance limits", "Undersized supply causes exposure faults that appear intermittently"],
      ["Earthing and bonding", "Compliant with medical location requirements", "Non-compliance is a commissioning failure, not a snag"],
      ["Uninterruptible or protected supply", "For workstation and network where continuity is required", "Prevents study loss during transient interruptions"],
      ["Ventilation and cooling", "Comfort cooling for room and equipment cabinet", "Heat load is small but cabinets have stated environmental limits"],
      ["Network", "Adequate bandwidth and resilience for image transfer", "Large radiographs at high volume can saturate a poorly planned link"],
      ["PACS, worklist and dose registry integration", "Configured and tested before go-live", "Integration testing is frequently deferred and then rushed"],
      ["Wireless coverage", "Reliable inside a shielded room for wireless detectors", "Shielding attenuates wireless signal; verify during commissioning"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Shielded rooms attenuate more than X-rays",
    text: "Lead-lined walls and doors also attenuate wireless signals. Where wireless flat panel detectors are used, in-room access point provision must be designed deliberately and tested with the door closed — not assumed from a general hospital coverage survey.",
  },
  {
    type: "h2",
    id: "control",
    text: "Control Area and Workflow Design",
    number: 6,
    body: "The control area determines both staff protection and how quickly patients move through the room.",
  },
  {
    type: "ul",
    items: [
      "A protected control position with an unobstructed view of the patient — a leaded window or a mirror arrangement that genuinely works from the operating position.",
      "Console placement that allows the radiographer to review images without leaving the protected area.",
      "Patient changing and preparation provision adjacent to the room, so gowning does not consume room time.",
      "Sub-waiting space so the next patient is ready as the current one leaves.",
      "Warning lights and, where required, door interlocks or audible warnings, positioned to be seen from the approach.",
      "Storage for detectors, grids, positioning aids and protective equipment inside the room.",
      "Hand hygiene provision and cleanable surfaces throughout, particularly where trolley work is frequent.",
      "Privacy and dignity considerations in the layout, including door positioning and sight lines from corridors.",
    ],
  },
  {
    type: "h2",
    id: "commissioning",
    text: "Commissioning and Acceptance",
    number: 7,
    body: "Commissioning is the point at which claims become verified facts, and it should be contractually linked to payment.",
  },
  {
    type: "ul",
    items: [
      "Radiation protection survey of the completed room by a qualified expert, with the results retained.",
      "Electrical safety testing and confirmation of compliance for the medical location.",
      "Generator accuracy and reproducibility testing across the kV and mAs range in use.",
      "Automatic exposure control performance across body-region settings and attenuation thicknesses.",
      "Detector uniformity, calibration and image quality against phantom criteria, compared with tendered performance.",
      "Geometric accuracy — light field to radiation field congruence, alignment and distance indicators.",
      "Dose indicator accuracy and verification that dose data reaches the registry.",
      "End-to-end workflow test: worklist retrieval, acquisition, processing, PACS transfer and reporting availability.",
      "Staff training and handover documentation, with protocols loaded and reviewed by medical physics.",
    ],
  },
  {
    type: "h2",
    id: "programme",
    text: "Programme and Common Delays",
    number: 8,
    body: "Radiography projects rarely fail on the equipment. They slip on approvals, structure and integration.",
  },
  {
    type: "tableInsight",
    expertCommentary: "Where radiography room projects lose time",
    clinicalInterpretation:
      "The critical path usually runs through shielding design approval, structural verification for ceiling supports and PACS integration testing — not through equipment lead time. Each of these depends on a third party responding, which is why they should be started before the equipment order rather than after it.",
    hospitalRecommendation:
      "Start shielding design and structural verification at the specification stage, book the radiation protection survey and physics acceptance slots at order confirmation, and schedule integration testing at least two weeks before the planned go-live date.",
  },
  {
    type: "ul",
    items: [
      "Late shielding design, forcing layout changes after the room has been tendered.",
      "Structural verification discovered to be negative after a ceiling-suspended system has been ordered.",
      "Ceiling void congestion identified during rail installation.",
      "Electrical supply capacity or earthing non-compliance found at commissioning.",
      "Wireless coverage failure inside the shielded room, identified on the first clinical day.",
      "PACS and worklist integration left until the final week.",
      "Medical physics availability for acceptance testing not booked in advance.",
      "Door and route dimensions preventing delivery of the equipment itself.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "How large should a general radiography room be?",
        a: "The room must accommodate the required source-to-image distances for erect and table work, tube travel across the examination range, trolley turning and parking, and safe staff access on both sides of the table. Rather than adopting a single figure, derive dimensions from the equipment manufacturer's geometry data and a trolley-based layout test.",
      },
      {
        q: "Who is responsible for the shielding design?",
        a: "A qualified expert — typically a medical physics expert or radiation protection adviser depending on jurisdiction — using the hospital's workload data, planned techniques, beam directions and adjacent occupancy. The design should be documented, followed during construction and verified by survey before clinical use.",
      },
      {
        q: "Can an existing room be reused for new equipment?",
        a: "Often yes, but three things must be re-verified rather than assumed: shielding adequacy against the new workload and techniques, structural capacity for the new tube support, and electrical supply adequacy for the new generator. Reuse is common and sensible; unverified reuse is where projects fail at commissioning.",
      },
      {
        q: "What is the most frequently missed requirement?",
        a: "In-room wireless coverage for wireless detectors, followed closely by trolley circulation space. Both are inexpensive to design in and disruptive to fix once the room is finished and shielded.",
      },
      {
        q: "When can the room be used clinically?",
        a: "After manufacturer commissioning, the radiation protection survey, electrical safety verification, acceptance testing with medical physics sign-off, verified PACS and dose registry integration and completed staff training. Clinical use before physics sign-off is a governance failure even when the equipment appears to work perfectly.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning or refurbishing an X-ray room?",
    subheading:
      "AbuFarha Medical supplies, installs and commissions digital radiography systems and works with hospital projects teams on room planning, services coordination and acceptance.",
    technology: "X-Ray Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "X-ray installation, commissioning and service" },
      { role: "Project review", name: "AbuFarha Projects & Turnkey", credential: "Imaging facility planning and delivery" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "IEC installation and equipment standards, national radiation protection guidance and manufacturer pre-installation documentation",
    disclaimer:
      "Shielding requirements, survey obligations and electrical standards are jurisdiction-specific. Always work from the manufacturer's pre-installation documentation and the design of a qualified medical physics expert or radiation protection adviser.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Radiation protection and shielding",
        items: [
          { label: "IAEA guidance on radiation protection in diagnostic radiology facility design" },
          { label: "National shielding design and radiation survey guidance for radiography rooms" },
        ],
      },
      {
        title: "Installation standards",
        items: [
          { label: "IEC 60364-7-710 — electrical installations in medical locations" },
          { label: "IEC 60601-2 series for diagnostic X-ray equipment" },
        ],
      },
      {
        title: "Acceptance and quality assurance",
        items: [
          { label: "National acceptance testing and quality assurance protocols for digital radiography" },
          { label: "Manufacturer pre-installation, structural loading and commissioning documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Commission the shielding design before freezing the room layout; beam direction and adjacent occupancy drive the walls.",
      "Verify ceiling structure in writing before ordering a ceiling-suspended tube support.",
      "Size the room from imaging geometry and trolley circulation, not from the equipment footprint.",
      "Electrical supply capacity and medical-location earthing are commissioning pass/fail items.",
      "Shielded rooms attenuate wireless signals — design in-room coverage for wireless detectors deliberately.",
      "The control position must offer real protection and a genuine view of the patient.",
      "Acceptance requires a radiation survey, generator and AEC testing, detector performance verification, integration testing and physics sign-off.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "Radiography rooms reward early coordination between the shielding expert, the structural engineer, the equipment supplier and the IT team.",
  },
  {
    type: "p",
    text: "Projects that sequence shielding design, structural verification and integration testing ahead of the equipment order open on time and pass acceptance first time. Projects that treat the room as a decorated space discover the constraints in the last two weeks, when every remedy is expensive.",
  },
];
