/**
 * PET/CT room planning and radiopharmacy — PET/CT cluster (installation).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PET_CT_ROOM_PLANNING_TOC: TocItem[] = [
  { id: "overview", title: "Why PET/CT Planning Differs" },
  { id: "suite", title: "The Suite: Rooms and Adjacencies" },
  { id: "flow", title: "Patient Flow and the Controlled Area" },
  { id: "shielding", title: "Shielding Design" },
  { id: "structure", title: "Structure, Access and Delivery Route" },
  { id: "services", title: "Power, Cooling and Environment" },
  { id: "hotlab", title: "Hot Lab and Waste Management" },
  { id: "licensing", title: "Licensing, Physics and Staffing" },
  { id: "commissioning", title: "Installation, Acceptance and Handover" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PET_CT_ROOM_PLANNING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Installing a PET/CT is not a scanner project. It is the creation of a controlled radiation area in which patients themselves become sources of radiation, unsealed radioactive materials are dispensed daily, and radioactive waste must be stored until it decays.",
      "That reality drives the room programme. A PET/CT suite needs a shielded hot lab, shielded uptake rooms, a toilet dedicated to injected patients, a circulation pattern that keeps injected patients away from staff and waiting relatives, and a technical room able to reject the heat of two imaging subsystems continuously.",
      "This guide sets out the suite layout and adjacencies, the shielding logic, structural and delivery constraints, hot lab and waste requirements, and the licensing and acceptance steps that must complete before the first clinical patient.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Suite layout and adjacencies, patient flow, shielding design, structural and delivery route, power and cooling, hot lab and waste, licensing and staffing, acceptance and handover",
    audience:
      "Hospital project teams, healthcare planners, medical physicists, nuclear medicine managers, biomedical engineers and architects",
    readingTime: "16 min read",
    technology: "PET/CT Scanners",
  },
  {
    type: "h2",
    id: "overview",
    text: "Why PET/CT Planning Differs",
    number: 1,
    body: "In CT or angiography, radiation exists only while the beam is on and only inside one room. In PET/CT, activity arrives in a delivery vehicle, is dispensed in a hot lab, walks around inside patients, and leaves as waste.",
  },
  {
    type: "ul",
    items: [
      "Injected patients emit 511 keV photons — a far more penetrating energy than diagnostic X-rays, so shielding calculations and material thicknesses are different in kind, not just degree.",
      "Unsealed sources require a licence, a radiation protection programme, contamination control and monitored waste storage.",
      "The suite must physically separate injected patients from non-injected patients, staff bases and public waiting areas.",
      "Throughput depends on uptake room count and tracer delivery times, so the room programme determines clinical capacity as much as the scanner does.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "511 keV changes the shielding arithmetic",
    text: "Because annihilation photons are far more penetrating than diagnostic X-rays, PET shielding often relies on concrete thickness and careful layout as much as on lead sheet, and the patient — not the gantry — is frequently the dominant source. Shielding must be designed by a qualified medical physics expert using the planned workload, not copied from a CT room specification.",
  },
  {
    type: "h2",
    id: "suite",
    text: "The Suite: Rooms and Adjacencies",
    number: 2,
    body: "A functioning PET/CT suite is a set of rooms with a specific relationship to each other. Omitting any of them shows up later as a workflow or dose problem.",
  },
  {
    type: "table",
    headers: ["Space", "Function", "Planning notes"],
    rows: [
      ["Scanner room", "Houses the PET/CT gantry and patient table", "Sized to the vendor layout drawing with clearance for table travel, patient handling and service access on all sides"],
      ["Control room", "Operator console and image review", "Direct line of sight to the patient through a shielded window; keep the operator position outside the highest-dose zone"],
      ["Technical / equipment room", "Reconstruction hardware, power distribution, cooling plant interface", "Independent, resilient cooling; noise separation from clinical spaces"],
      ["Hot lab", "Receipt, dispensing, assay and record-keeping of radiopharmaceuticals", "Shielded, with fume or laminar dispensing facility, dose calibrator, L-block and lockable storage"],
      ["Uptake rooms", "Injected patients rest during uptake", "One per concurrent patient stream at minimum; shielded partitions, call bell, reclining seating, staff observation without prolonged proximity"],
      ["Dedicated patient toilet", "Voiding before scanning", "Directly accessible from uptake rooms; cleanable surfaces and contamination monitoring provision"],
      ["Waste / decay store", "Holds radioactive waste until it can be cleared", "Shielded, access-controlled, with inventory records"],
      ["Changing and preparation", "Patient preparation, glucose check, cannulation", "Kept on the non-injected side of the flow"],
    ],
    caption: "Minimum room programme for a clinical PET/CT suite.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The uptake room count, not the scanner, usually sets the maximum daily patient number, because uptake takes roughly an hour while acquisition takes minutes.",
    clinicalInterpretation:
      "A suite with one uptake room can rarely exceed a handful of patients a day regardless of scanner speed, which undermines the business case for a high-specification system.",
    hospitalRecommendation:
      "Plan uptake rooms against the target daily throughput at design stage. Adding them after construction is usually impossible without taking the service offline.",
  },
  {
    type: "h2",
    id: "flow",
    text: "Patient Flow and the Controlled Area",
    number: 3,
    body: "The layout should make correct behaviour the easy behaviour: an injected patient should never need to walk past waiting relatives or a staff base to reach the scanner or the toilet.",
  },
  {
    type: "ul",
    items: [
      "Entry and preparation on the clean side: reception, changing, glucose check and cannulation.",
      "Injection at the boundary: administration in a shielded position adjacent to the uptake rooms, not in the main corridor.",
      "Uptake in a controlled zone with the dedicated toilet directly accessible.",
      "Short, direct route from uptake to the scanner room, ideally not shared with non-injected traffic.",
      "Post-scan release route back to the clean side, with written advice given at the exit point.",
      "Separate provision for inpatients, stretcher patients and wheelchair users along the same controlled route.",
      "Signage, controlled-area demarcation and door interlocks or warning lights per regulation.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Design out prolonged staff proximity",
    text: "Most staff dose in PET services comes from being near injected patients, especially during positioning and cannula management. Shielded uptake room partitions, remote observation, and workflows that minimise time spent beside the patient reduce dose more effectively than additional lead in the walls.",
  },
  {
    type: "h2",
    id: "shielding",
    text: "Shielding Design",
    number: 4,
    body: "Shielding is calculated, not chosen from a catalogue. The design depends on planned workload, activity handled, occupancy of adjacent spaces and the building geometry.",
  },
  {
    type: "ul",
    items: [
      "Source inventory: delivered batch activity, activity per patient, patients per day, and residual activity held in the decay store.",
      "Adjacency assessment: occupancy factors for every neighbouring space including rooms above and below — annihilation photons do not respect floor slabs.",
      "Barrier design: concrete thickness, lead where concrete is impractical, shielded hot lab surfaces, and shielded uptake partitions.",
      "Penetrations: doors, windows, ducts, conduit and cable routes must all be assessed; unshielded penetrations defeat an otherwise sound design.",
      "CT component: the CT subsystem shielding requirement is separate and typically less demanding, but must still be included.",
      "Verification: a post-installation survey with the system operational and the decay store loaded, documented and retained.",
    ],
  },
  {
    type: "h2",
    id: "structure",
    text: "Structure, Access and Delivery Route",
    number: 5,
    body: "A PET/CT gantry is heavy, and shielding adds substantially more load. Both must be confirmed before the slab and route are frozen.",
  },
  {
    type: "ul",
    items: [
      "Floor loading: verify gantry and table point loads plus shielding mass against the structural design; obtain written structural sign-off.",
      "Delivery route: measure door widths, corridor turning circles, lift capacity and dimensions along the whole path from the loading bay. Plan a temporary opening if the route cannot take the gantry.",
      "Site access: crane or hoist provision, protection of finished areas, and out-of-hours delivery windows in an operating hospital.",
      "Room finishes: cleanable, non-porous surfaces in the hot lab, uptake rooms and dedicated toilet to allow contamination monitoring and decontamination.",
      "Ceiling coordination: lighting, ventilation and any patient monitoring provision routed clear of gantry service access panels.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Survey the delivery route before contract signature",
    text: "Gantry delivery failures are among the most expensive avoidable errors in imaging projects. Walk the full route with the vendor's dimensions and weights in hand, including the loading bay, lift and every doorway, and record the survey in writing before the equipment is ordered.",
  },
  {
    type: "h2",
    id: "services",
    text: "Power, Cooling and Environment",
    number: 6,
    body: "A PET/CT contains two imaging subsystems and their reconstruction hardware. Heat rejection is continuous, and quantitative stability depends on a stable environment.",
  },
  {
    type: "ul",
    items: [
      "Electrical supply per the vendor specification, with correct earthing, isolation and protection for medical locations.",
      "Uninterruptible power for the console, reconstruction hardware and network so a supply interruption does not corrupt an acquisition or lose patient data.",
      "Dedicated, resilient cooling for the technical room. In hot climates this is the most common cause of unplanned downtime, so specify redundancy.",
      "Temperature and humidity held inside the vendor's stated envelope, with monitoring and alarms, because detector performance and calibration stability depend on it.",
      "Network capacity for large fused datasets, with PACS integration and dose reporting tested before go-live.",
      "Ventilation for the hot lab appropriate to the preparation activities carried out, with air handling assessed as part of the licence application.",
    ],
  },
  {
    type: "h2",
    id: "hotlab",
    text: "Hot Lab and Waste Management",
    number: 7,
    body: "The hot lab is a small room with a disproportionate influence on staff dose, quantitative accuracy and regulatory compliance.",
  },
  {
    type: "ul",
    items: [
      "Shielded dispensing position with L-block, syringe shields and tungsten vial containers; automated dispensing for higher workloads.",
      "Calibrated dose calibrator with documented constancy, accuracy and linearity checks — SUV accuracy begins here.",
      "Contamination monitoring equipment, spill kit, written spill procedure and defined decontamination responsibility.",
      "Secure, shielded storage for delivered activity, with an inventory record reconciled against deliveries and dispensed doses.",
      "Decay store for solid waste and sharps, held until activity falls below the clearance level set in the licence, with disposal records retained.",
      "Separate handling and drainage arrangements for liquid waste in line with national requirements.",
    ],
  },
  {
    type: "h2",
    id: "licensing",
    text: "Licensing, Physics and Staffing",
    number: 8,
    body: "The regulatory pathway usually takes longer than construction, and it cannot be compressed at the end of a project.",
  },
  {
    type: "ul",
    items: [
      "Radioactive-materials licence or authorisation covering the tracers, activities and procedures intended.",
      "Appointed qualified medical physics expert and radiation protection supervisor, with defined responsibilities.",
      "Local rules, controlled area designation, contingency plans and staff dose monitoring arrangements in place before commissioning.",
      "Trained staffing: reporting physician with nuclear medicine competence, technologists trained in radiopharmaceutical handling, physics support and, where tracers are prepared on site, radiopharmacy staff.",
      "Quality system: written protocols per indication, QC schedules, calibration records, incident reporting and audit.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Start the licence application with the design, not with the install",
    text: "Regulators typically want to see the shielding design, room layout, waste arrangements, staffing and local rules. Submitting early lets regulator comments shape the design cheaply, instead of forcing rework after construction.",
  },
  {
    type: "h2",
    id: "commissioning",
    text: "Installation, Acceptance and Handover",
    number: 9,
    body: "Acceptance for PET/CT is broader than image quality: it establishes the quantitative baseline against which every future patient study will be measured.",
  },
  {
    type: "ul",
    items: [
      "Mechanical and electrical installation, then vendor calibration and normalisation of the PET detectors.",
      "Performance testing against a recognised standard: sensitivity, spatial resolution, count-rate performance, scatter fraction and image quality phantom.",
      "Quantitative calibration verification with a traceable source, establishing the SUV baseline and, where relevant, harmonisation for multicentre work.",
      "CT subsystem acceptance: dose indices, image quality, and accuracy of the attenuation correction pathway.",
      "Radiation survey of the completed suite with the system operational and the decay store loaded.",
      "Integration testing: worklist, PACS transfer of PET, CT and fused series, dose reporting, and comparison against a prior study.",
      "Clinical dry runs across the full workflow — delivery, dispensing, injection, uptake, scan, report — before the first patient list.",
      "Handover pack: physics baseline report, survey report, QC schedule, service contract, spares and consumables list, and staff training records.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "PET/CT planning is the creation of a controlled area for unsealed sources, not a single-room equipment installation.",
      "511 keV photons require shielding designed by a physicist from the planned workload; CT room specifications do not transfer.",
      "Uptake room count and tracer delivery times, not scan duration, set daily throughput.",
      "Layout should separate injected from non-injected flows and minimise staff proximity to injected patients.",
      "Verify floor loading and the full delivery route in writing before ordering the system.",
      "Resilient technical-room cooling and a stable environment protect uptime and quantitative stability.",
      "Begin licensing at design stage; acceptance must establish the quantitative SUV baseline, not just image quality.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "What rooms does a PET/CT suite need?",
        a: "As a minimum: a scanner room sized to the vendor layout, a control room with a shielded viewing window, a technical equipment room with dedicated cooling, a shielded hot lab, uptake rooms matched to intended throughput, a toilet dedicated to injected patients, a shielded waste decay store, and preparation and changing space on the non-injected side of the flow.",
      },
      {
        q: "Why is PET shielding different from CT shielding?",
        a: "PET involves 511 keV annihilation photons, which are far more penetrating than diagnostic X-rays, and the injected patient is itself a mobile source. Shielding therefore often relies on concrete thickness and layout as much as lead, must account for rooms above and below, and must be calculated for the actual workload by a qualified medical physics expert.",
      },
      {
        q: "How many uptake rooms are needed?",
        a: "Enough to match the intended daily patient number, because uptake takes roughly an hour per patient while acquisition takes minutes. A single uptake room limits a service to a small daily list regardless of how fast the scanner is, so uptake capacity should be sized against the throughput assumed in the business case.",
      },
      {
        q: "Does the suite need a dedicated patient toilet?",
        a: "Yes. Injected patients void before scanning, and their urine contains activity. A dedicated, cleanable toilet directly accessible from the uptake area is a standard requirement, and it must be included in the contamination monitoring and cleaning regime.",
      },
      {
        q: "What structural checks are needed before installation?",
        a: "Written verification that the floor can carry the gantry and table point loads plus the mass of any shielding, and a documented survey of the full delivery route — loading bay, corridors, turning circles, lift dimensions and capacity, and every doorway — against the vendor's crate dimensions and weights.",
      },
      {
        q: "How is radioactive waste handled?",
        a: "Solid waste and sharps are held in a shielded, access-controlled decay store with inventory records until activity falls below the clearance level defined in the site licence, after which they are disposed of under those licence conditions. Liquid waste follows national requirements for drainage and record keeping.",
      },
      {
        q: "When should the licence application start?",
        a: "At design stage. Regulators typically review the shielding design, room layout, waste arrangements, staffing and local rules, and their comments are far cheaper to accommodate on drawings than after construction. Licensing frequently takes longer than the building works.",
      },
      {
        q: "What must acceptance testing cover?",
        a: "Vendor calibration and detector normalisation, performance testing against a recognised standard for sensitivity, resolution, count-rate behaviour and image quality, quantitative calibration verification with a traceable source to establish the SUV baseline, CT subsystem acceptance, a radiation survey of the finished suite, PACS and dose-reporting integration, and full clinical dry runs.",
      },
      {
        q: "What causes most PET/CT downtime after go-live?",
        a: "In hot climates, technical-room cooling failure is a leading cause, followed by tracer delivery disruption and detector or electronics faults. Specifying cooling resilience, agreeing supplier contingency arrangements and holding a service contract with detector cover address the three directly.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning a PET/CT suite?",
    subheading:
      "AbuFarha Medical supplies, installs and commissions PET/CT systems and supports hospital project teams from room layout and delivery route survey through acceptance testing and long-term service.",
    technology: "PET/CT Scanners",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Nuclear medicine service planning" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "PET/CT installation, commissioning and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "International radiation protection guidance, performance standards and installation practice",
    disclaimer:
      "Shielding, licensing and waste requirements are set by national regulation. This article describes internationally recognised planning practice; always design to your national requirements, your qualified medical physics expert's assessment and the vendor's issued pre-installation documentation.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Radiation protection and facility design",
        items: [
          { label: "International Atomic Energy Agency — nuclear medicine facility design and radiation protection guidance" },
          { label: "National radiation protection guidance on PET facility shielding and controlled areas" },
        ],
      },
      {
        title: "Performance and acceptance",
        items: [
          { label: "NEMA NU 2 — performance measurements of positron emission tomographs" },
          { label: "EANM / EARL guidance on quantitative harmonisation and accreditation" },
        ],
      },
      {
        title: "Installation and electrical standards",
        items: [
          { label: "IEC 60364-7-710 — electrical installations in medical locations" },
          { label: "Manufacturer pre-installation, structural load, cooling and delivery documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
];
