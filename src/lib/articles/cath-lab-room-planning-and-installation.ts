/**
 * Cath lab room planning, installation and commissioning — Cath Lab cluster.
 */

import type { ContentBlock, TocItem } from "../blog";

export const CATH_LAB_ROOM_PLANNING_TOC: TocItem[] = [
  { id: "overview", title: "Why Cath Lab Projects Slip" },
  { id: "room-layout", title: "The Three-Room Layout" },
  { id: "dimensions", title: "Space and Clearance Planning" },
  { id: "structural", title: "Structural and Ceiling Loading" },
  { id: "shielding", title: "Radiation Shielding Design" },
  { id: "power", title: "Power, UPS and Earthing" },
  { id: "hvac", title: "Cooling and Ventilation" },
  { id: "delivery", title: "Delivery Route and Rigging" },
  { id: "timeline", title: "Project Timeline and Sequence" },
  { id: "commissioning", title: "Commissioning and Acceptance Testing" },
  { id: "handover", title: "Training and Clinical Handover" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const CATH_LAB_ROOM_PLANNING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Installing a fixed angiography system is a construction project with an imaging system inside it. The equipment order is rarely what delays a cath lab: the delays come from slab strength that has not been verified, a technical room placed beyond the manufacturer's cable-length limit, a shielding design signed off after the walls went up, or a lift that cannot take the generator cabinet.",
      "This guide sets out what a hospital must plan, in what order, to bring a cath lab from empty shell to clinical use — and what acceptance testing has to prove before the first patient enters the room.",
      "Every dimension, load and clearance figure in a real project comes from the selected system's manufacturer site-planning documentation. This guide describes what to plan for and the sequence to plan it in; it does not substitute for that documentation.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Room layout, space and clearance, structural loading, shielding design, power and UPS, HVAC, delivery route, project sequence, commissioning and acceptance testing",
    audience:
      "Hospital project managers, biomedical engineers, architects, MEP consultants and interventional teams",
    readingTime: "14 min read",
    technology: "Cardiac Catheterization Laboratory (Angiography)",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "Why Cath Lab Projects Slip",
    body: "Almost every avoidable delay traces back to a decision taken before the site survey, or a survey performed after construction had already committed the space.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "The five recurring causes of delay",
    items: [
      "Equipment selected after the room was designed, so the room does not match the system's published clearances.",
      "Slab load capacity assumed rather than verified by a structural engineer for a ceiling-mounted C-arm.",
      "Technical room located too far from the procedure room for the manufacturer's fixed cable lengths.",
      "Shielding design commissioned from a medical physicist after blockwork was complete.",
      "Delivery route surveyed only when the crates arrived on site.",
    ],
  },
  {
    type: "p",
    text: "The correct sequence is: define the clinical service and case mix, select the system, commission the manufacturer site survey and the physicist's shielding design, complete the detailed design against both, then build. Reversing any two of those steps introduces rework.",
  },
  {
    type: "h2",
    id: "room-layout",
    number: 2,
    text: "The Three-Room Layout",
    body: "A cath lab is not one room. It is a procedure room, a shielded control room and a cooled technical room, planned together.",
  },
  {
    type: "table",
    headers: ["Space", "Purpose", "Key design requirement"],
    rows: [
      ["Procedure room", "Patient, table, C-arm, sterile field, team", "Full C-arm motion range plus anaesthesia access at the patient's head and clear circulation for staff and trolleys"],
      ["Control room", "Image and system operation, physiology monitoring, documentation", "Direct lead-glass sightline to the patient and to the door; workstation ergonomics for long lists"],
      ["Technical/equipment room", "Generator, distribution and control cabinets", "Dedicated cooling, service access on all specified sides, and location inside the manufacturer's cable-length limit"],
      ["Scrub and prep area", "Hand scrub, gowning, sterile stock", "Adjacent to the procedure room without crossing the patient route"],
      ["Recovery / monitored bay", "Post-procedure access-site and haemodynamic observation", "Immediate proximity to the lab and to nursing observation"],
      ["Store", "Catheters, wires, balloons, stents, contrast", "Sized for the consignment stock the case mix requires, temperature controlled"],
    ],
    caption: "Plan all six spaces at concept stage; retro-fitting any of them is disruptive and expensive.",
  },
  {
    type: "diagram",
    id: "room-planning",
    title: "Cath lab suite layout relationships",
    purpose:
      "Shows how the procedure room, shielded control room, technical room and support spaces relate, and where sightlines and cable runs constrain the layout.",
    alt: "Layout diagram of a cath lab suite showing procedure room, control room with shielded viewing window, technical equipment room, scrub area and recovery bay",
    caption:
      "Sightline from control room to patient, and cable distance from technical room to gantry, are the two relationships that fix the layout.",
  },
  {
    type: "h2",
    id: "dimensions",
    number: 3,
    text: "Space and Clearance Planning",
    body: "Room area is a function of the equipment's motion envelope, not of the equipment's footprint.",
  },
  {
    type: "ul",
    items: [
      "Establish the C-arm's full rotation, angulation and parking envelope from the manufacturer drawings, including the swept volume above the table.",
      "Add the table's full longitudinal float and lateral travel at every height, not just the parked position.",
      "Reserve working space at the patient's head for the anaesthesia machine, ventilator and airway access.",
      "Reserve floor area for the resuscitation trolley, injector, ultrasound cart and any intracoronary imaging console, all of which live in the room.",
      "Allow circulation for a scrub assistant, circulating nurse and technologist to move without breaking the sterile field.",
      "Confirm door width and swing for bed and trolley transfer, and confirm ceiling height before selecting ceiling-suspended shields and monitor suspensions.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Test the layout with the clinical team, on paper",
    text: "Before design freeze, walk the intended layout with an interventional operator, a scrub nurse and an anaesthetist using a full-size floor mark-up. Fifteen minutes of that exercise routinely finds problems — a monitor suspension that blocks a projection, a trolley position that obstructs the door — that no drawing review catches.",
  },
  {
    type: "h2",
    id: "structural",
    number: 4,
    text: "Structural and Ceiling Loading",
    body: "Ceiling-mounted positioners, monitor suspensions and radiation shields transfer significant load into the structure above the room.",
  },
  {
    type: "p",
    text: "Ceiling-suspended equipment requires a verified load path: the slab or an installed steel support frame must carry static load plus the dynamic load of a moving gantry, and deflection limits must be met so image geometry stays stable. This is a structural engineer's calculation against the manufacturer's published load data — never an assumption, and never a decision taken on site during installation. Where the existing slab is insufficient, reinforcement or a support frame must be designed and installed before equipment delivery, which is why structural verification belongs at the front of the programme.",
  },
  {
    type: "p",
    text: "Floor-mounted configurations shift the constraint rather than removing it: they need verified floor loading, a level tolerance across the mounting area, and floor-void routing for cabling. Retrofits into existing rooms also need the current slab condition confirmed, not just its original design capacity.",
  },
  {
    type: "h2",
    id: "shielding",
    number: 5,
    text: "Radiation Shielding Design",
    body: "Shielding is designed against the planned workload by a qualified medical physicist, and it must be designed before the walls are built.",
  },
  {
    type: "ul",
    items: [
      "The design inputs are the system's output characteristics, the planned annual workload and case mix, occupancy of adjacent spaces, and the dose constraints in force in the jurisdiction.",
      "The design outputs cover walls, floor and ceiling where relevant, the control-room viewing window, door leaf and frame, and every penetration.",
      "Penetrations are the usual failure point: conduits, ducts, sockets and cable trays must be detailed as shielded penetrations, not resolved on site.",
      "In-room protection — ceiling-suspended screens, table-mounted drapes, mobile screens — is specified alongside structural shielding; it is what protects the operator.",
      "Post-construction shielding verification and a radiation survey are part of acceptance, and are typically required before regulatory authorisation to operate.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Regulatory authorisation is a project milestone",
    text: "In most jurisdictions a cath lab cannot be used clinically until the regulator has accepted the shielding verification, the radiation safety programme, dosimetry arrangements and operator credentialing. Treat authorisation as a gated milestone with its own lead time in the programme, not as paperwork that follows commissioning.",
  },
  {
    type: "h2",
    id: "power",
    number: 6,
    text: "Power, UPS and Earthing",
    body: "The room must be able to complete a procedure that has already started, whatever the supply does.",
  },
  {
    type: "table",
    headers: ["Requirement", "Why it matters"],
    rows: [
      ["Dedicated supply sized to peak demand", "Angiography generators draw high short-duration current during acquisition; sharing a circuit causes voltage dips and image artefacts"],
      ["Supply impedance within manufacturer limits", "Exceeding the specified impedance degrades image quality and can prevent the system from accepting installation"],
      ["UPS coverage", "Keeps imaging, monitoring and lighting alive through a transfer so a case in progress is never left unsupported"],
      ["Generator backup", "Sustains the room through extended outage — essential for any 24/7 primary PCI service"],
      ["Medical earthing and equipotential bonding", "Patient safety requirement for a room where invasive lines contact the patient"],
      ["Isolated power / IT system where required locally", "Some jurisdictions mandate it for interventional and operating rooms; confirm national rules early"],
    ],
    caption: "Electrical requirements are system-specific and must be taken from the manufacturer's pre-installation data.",
  },
  {
    type: "h2",
    id: "hvac",
    number: 7,
    text: "Cooling and Ventilation",
    body: "Two separate cooling problems: keeping the technical room within tolerance, and keeping the procedure room within its air-quality class.",
  },
  {
    type: "p",
    text: "The technical room rejects continuous heat from the generator and control cabinets and needs cooling sized to that load, with an alarm on failure — an over-temperature technical room shuts a cath lab down as effectively as a component fault. The procedure room needs the air-change rate, filtration and pressure regime appropriate to the procedures planned, and a hybrid theatre intended for open surgical conversion carries theatre-grade ventilation requirements that a standard cath lab does not. Deciding late that a room must support surgical conversion is one of the most expensive changes available in the whole project.",
  },
  {
    type: "h2",
    id: "delivery",
    number: 8,
    text: "Delivery Route and Rigging",
    body: "Verify the full path from the loading point to the room, with actual dimensions, before a delivery date is agreed.",
  },
  {
    type: "ul",
    items: [
      "Crate dimensions and weights for every component, from the manufacturer's shipping data.",
      "Gate, door, corridor and lift dimensions along the whole route, measured rather than taken from drawings.",
      "Lift capacity and cabin internal dimensions, or an alternative rigging plan where the lift cannot take a component.",
      "Floor loading along the route, including any temporary protection required.",
      "Turning radii at corners — the constraint is usually a corner, not a doorway.",
      "For upper-floor or constrained sites, a crane or hoist plan agreed before shipment, and where necessary a temporary structural opening designed into the build.",
    ],
  },
  {
    type: "h2",
    id: "timeline",
    number: 9,
    text: "Project Timeline and Sequence",
    body: "Durations vary by site and jurisdiction; the sequence does not.",
  },
  {
    type: "comparison",
    title: "Project phases and gates",
    headers: ["Phase", "Work", "Gate to pass before proceeding"],
    rows: [
      ["Definition", "Case mix, service model, on-call staffing, configuration decision", "Clinical service plan and staffing rota confirmed"],
      ["Selection and survey", "System selection, manufacturer site survey, physicist shielding design", "Site survey report and shielding design issued"],
      ["Detailed design", "Architectural, structural, MEP and shielding coordination", "Design signed against manufacturer pre-installation requirements"],
      ["Construction", "Civil works, shielding, power, HVAC, structural support", "Shielding verification and services readiness certificate"],
      ["Delivery and installation", "Rigging, mechanical installation, cabling, power-up", "Manufacturer installation checklist complete"],
      ["Commissioning", "Calibration, image quality and dose testing, physics acceptance", "Acceptance test report and regulatory authorisation"],
      ["Handover", "Clinical and technical training, protocol setup, first-case planning", "Team signed off as competent on the installed system"],
    ],
    caption: "Each gate exists because passing it late costs more than passing it on time.",
  },
  {
    type: "h2",
    id: "commissioning",
    number: 10,
    text: "Commissioning and Acceptance Testing",
    body: "Acceptance is where the hospital proves the room performs as specified — and establishes the baseline against which all future quality assurance is judged.",
  },
  {
    type: "ul",
    items: [
      "Mechanical and safety checks: positioner motion and collision protection, table movement and load, emergency stops, interlocks.",
      "Electrical safety and earthing verification to the applicable IEC 60601 requirements.",
      "Radiation output and dose verification: tube output, automatic dose-rate control behaviour, and recorded dose indicators.",
      "Image quality testing with phantoms: spatial resolution, low-contrast detectability, geometric accuracy and distortion, across fluoroscopy and acquisition modes.",
      "Shielding verification and a full radiation survey of adjacent occupied areas.",
      "Integration testing: haemodynamic monitoring channels, injector interface, dose reporting, and image transfer to PACS with correct patient identifiers.",
      "Baseline documentation: every acceptance result recorded as the reference for periodic quality assurance for the life of the room.",
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Acceptance testing is frequently compressed to release the room for clinical use, and the cost of that compression appears years later when a performance dispute has no baseline to argue from.",
    clinicalInterpretation:
      "Baseline image-quality and dose data is what later distinguishes a genuine degradation from normal variation, and what supports a warranty or service claim.",
    hospitalRecommendation:
      "Make the physics acceptance report a contractual condition of final payment, and store it with the asset record rather than in the project file.",
  },
  {
    type: "h2",
    id: "handover",
    number: 11,
    text: "Training and Clinical Handover",
    body: "A commissioned room is not a working service until the team is competent on it.",
  },
  {
    type: "p",
    text: "Handover should cover operators, nurses, technologists and biomedical engineering staff, and it should be scheduled so training lands close to first clinical use rather than months before. Protocol and preset configuration is part of handover, not an afterthought: dose-aware default protocols, sensible fluoroscopy pulse rates and correctly configured acquisition presets shape every case the room will ever run. Biomedical engineering needs first-line fault-finding, alarm interpretation, escalation contacts and access to service documentation from day one, plus the asset record, warranty terms and planned-maintenance schedule loaded into the hospital's maintenance system.",
  },
  {
    type: "h2",
    id: "faq",
    number: 12,
    text: "Frequently Asked Questions",
  },
  {
    type: "faq",
    items: [
      {
        q: "How much space does a cath lab procedure room need?",
        a: "The figure is system-specific and is published in the manufacturer's site-planning documentation. The room must accommodate the C-arm's full motion envelope, the table at all positions and travels, anaesthesia access at the patient's head, and circulation for staff, trolleys and ancillary equipment — and it must be planned together with a shielded control room and a separately cooled technical room.",
      },
      {
        q: "Can a cath lab be installed on an upper floor?",
        a: "Yes, provided the structural engineer verifies the slab against the manufacturer's static and dynamic load data — including deflection limits for ceiling-mounted positioners — and provided the delivery route can physically accept the crates. Upper-floor installations more often require a crane or hoist plan, and sometimes a temporary structural opening designed into the build.",
      },
      {
        q: "Who designs the radiation shielding?",
        a: "A qualified medical physicist or radiation protection expert, working from the system's output characteristics, the planned workload and case mix, adjacent-area occupancy and the dose constraints in force in the jurisdiction. The design must be issued before blockwork begins, and its post-construction verification is normally a condition of regulatory authorisation.",
      },
      {
        q: "Why does the technical room have to be close to the procedure room?",
        a: "Manufacturers supply fixed-length cable sets between the generator and control cabinets and the gantry, table and detector. Exceeding the specified length is not a matter of adding cable — it affects performance and voids the installation specification. The distance limit is published in the pre-installation data and constrains the layout from the outset.",
      },
      {
        q: "Does a cath lab need a UPS and a generator?",
        a: "For any lab supporting emergency or unscheduled work, yes. A UPS keeps imaging, monitoring and lighting alive through a supply transfer so a procedure already under way is never left unsupported, while generator backup sustains the room through an extended outage. Local regulations for interventional rooms may mandate specific arrangements — confirm them during design.",
      },
      {
        q: "How long does a cath lab project take from order to first patient?",
        a: "It depends on the site's starting condition, whether structural reinforcement is needed, the regulatory authorisation process and equipment lead time, so a generic duration is not useful. What is consistent is the sequence and its gates: definition, selection and site survey, detailed design, construction, installation, commissioning, then handover. Projects that attempt to overlap gates are the ones that overrun.",
      },
      {
        q: "What is the difference between installing a cath lab and a hybrid theatre?",
        a: "The imaging installation is similar; the room is not. A hybrid theatre must meet operating-theatre ventilation, sterility and space standards so open surgical conversion is possible in the same sterile field, which increases room size, HVAC provision and cost. This decision must be taken at concept stage — converting a standard cath lab into a hybrid theatre later is effectively a new project.",
      },
      {
        q: "What should acceptance testing include before clinical use?",
        a: "Mechanical and safety verification, electrical safety and earthing checks, radiation output and dose verification, phantom-based image-quality testing across fluoroscopy and acquisition modes, shielding verification with a radiation survey, integration testing of monitoring and PACS, and a documented baseline of every result for future quality assurance.",
      },
      {
        q: "Can an existing angiography room be reused for a new system?",
        a: "Often, but it must be re-verified rather than assumed: the new system's load, clearance, cable-length, power and cooling requirements will differ from the outgoing one, and shielding must be re-assessed against the new output characteristics and workload. A manufacturer site survey of the existing room is the correct starting point.",
      },
      {
        q: "Who should own the project on the hospital side?",
        a: "A single named project owner with authority over clinical, engineering and construction inputs. Cath lab projects fail at the interfaces — between the imaging vendor, the builder, the MEP contractor, the physicist and the clinical team — so the decisive factor is that one person is accountable for keeping those interfaces coordinated against the gates.",
      },
    ],
  },
  {
    type: "editorialBoard",
    reviewers: [
      {
        role: "Technical review",
        name: "AbuFarha Biomedical Engineering Team",
        credential: "Angiography installation, commissioning and service",
      },
      {
        role: "Projects review",
        name: "AbuFarha Turnkey Projects Team",
        credential: "Imaging department design, build coordination and handover",
      },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel:
      "International standards and manufacturer pre-installation practice; no site-specific engineering values",
    disclaimer:
      "This article is educational guidance for healthcare project planning. All dimensions, loads, clearances, electrical and cooling requirements must be taken from the selected system's manufacturer documentation and from a qualified engineer or medical physicist for your specific site and jurisdiction.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Shielding and radiation protection",
        items: [
          { label: "NCRP — structural shielding design for medical X-ray imaging facilities", url: "https://ncrponline.org" },
          { label: "IAEA — Radiation Protection of Patients (RPOP)", url: "https://www.iaea.org" },
          { label: "ICRP — radiological protection in interventional procedures", url: "https://www.icrp.org" },
        ],
      },
      {
        title: "Equipment, safety and facility standards",
        items: [
          { label: "IEC 60601 series — medical electrical equipment safety and performance", url: "https://www.iec.ch" },
          { label: "AAPM — quality assurance and acceptance testing reports", url: "https://www.aapm.org" },
          { label: "ASHRAE — ventilation of health care facilities", url: "https://www.ashrae.org" },
          { label: "WHO — health facility infrastructure guidance", url: "https://www.who.int" },
        ],
      },
    ],
    note: "Confirm the editions and national adaptations in force in your jurisdiction before applying any standard referenced here.",
  },
  {
    type: "h2",
    id: "conclusion",
    number: 13,
    text: "Conclusion",
    body: "Cath lab projects are won or lost in the design phase, on decisions that cost nothing to get right and a great deal to correct.",
  },
  {
    type: "p",
    text: "Select the system before designing the room. Commission the site survey and the shielding design before building. Verify the structure, the power, the cooling and the delivery route against the manufacturer's data rather than against assumptions. Then let acceptance testing prove performance and set the baseline the room will be measured against for the next decade. A project run in that order arrives on time; a project run in any other order pays for the difference.",
  },
  {
    type: "articleCta",
    heading: "Planning a cath lab installation or replacement?",
    subheading:
      "AbuFarha coordinates site survey, shielding, structural and MEP requirements, installation, commissioning and clinical handover for angiography suites across Africa and the Middle East.",
    technology: "Cardiac Catheterization Laboratory (Angiography)",
  },
];
