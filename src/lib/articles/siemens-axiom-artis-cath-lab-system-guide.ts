/**
 * Siemens manufacturer cluster — "Siemens Axiom Artis Cath Lab: System Guide"
 */

import type { ContentBlock, TocItem } from "../blog";

export const SIEMENS_AXIOM_TOC: TocItem[] = [
  { id: "platform", title: "What the Axiom Artis Platform Is" },
  { id: "configurations", title: "Configurations in Service" },
  { id: "subsystems", title: "Subsystems That Decide Performance" },
  { id: "clinical", title: "Clinical Fit" },
  { id: "evaluation", title: "Evaluating a Pre-Owned Axiom Artis" },
  { id: "service", title: "Service, Parts and Uptime" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const SIEMENS_AXIOM_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "The Siemens Axiom Artis family is a flat-detector angiography platform used for coronary, peripheral and interventional radiology work. AbuFarha Medical supplies, installs, commissions and services Axiom Artis rooms, including dTA, dFC and monoplane configurations.",
      "A cath lab is not evaluated as a single device. It is a room: generator and tube, flat detector, C-arm geometry, table, haemodynamic and display infrastructure, and the software that governs dose and image processing. The Axiom Artis platform is best understood subsystem by subsystem, because that is how it is specified, serviced and priced.",
      "This guide explains what the platform provides, how its common configurations differ, what to verify before acquiring a system, and what a hospital must plan for to keep an Axiom Artis room running predictably.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Platform architecture, configuration differences, subsystem evaluation, clinical fit, pre-owned assessment and service planning",
    audience:
      "Interventional cardiologists and radiologists, cath lab managers, biomedical engineering teams, capital procurement committees",
    readingTime: "12 min read",
    technology: "Cath Lab Systems",
  },
  {
    type: "h2",
    id: "platform",
    text: "What the Axiom Artis Platform Is",
    number: 1,
    body: "A flat-detector angiography system built around a floor- or ceiling-mounted C-arm.",
  },
  {
    type: "p",
    text: "Axiom Artis systems replaced image-intensifier angiography with digital flat detectors, which give a rectangular field of view, geometric distortion-free images across the detector, and stable dose-to-image-quality behaviour over the life of the detector. The C-arm provides angulation around a defined isocentre, and the table positions the patient so the region of interest stays at that isocentre through projection changes.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Isocentre discipline is the practical skill",
    text: "A room whose operators keep the anatomy at isocentre produces consistent images at lower dose across every projection. One that re-pans and re-zooms per angulation spends dose recovering geometry.",
  },
  {
    type: "h2",
    id: "configurations",
    text: "Configurations in Service",
    number: 2,
  },
  {
    type: "table",
    headers: ["Configuration", "Arrangement", "Typical use"],
    rows: [
      ["Monoplane", "Single C-arm, single detector", "Coronary and peripheral work; the mainstream configuration"],
      ["Biplane", "Frontal and lateral planes", "Neurointervention and paediatric work where two simultaneous projections reduce contrast and runs"],
      ["Floor-mounted C-arm", "Stand fixed to the floor", "Simpler civil works; well-defined access pattern around the table"],
      ["Ceiling-mounted C-arm", "Suspended on a ceiling rail", "Parking the arm clear of the table for hybrid and anaesthetised cases"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Configuration is a room decision as much as a clinical one: mounting type dictates civil works, and plane count dictates room size, shielding and service cost.",
    clinicalInterpretation:
      "A monoplane room covers the great majority of cardiac case mix; biplane earns its cost in neuro and paediatric services with real caseload.",
    hospitalRecommendation:
      "Fix the intended case mix before the configuration. Retrofitting a second plane into a room sized for one is rarely economic.",
  },
  {
    type: "h2",
    id: "subsystems",
    text: "Subsystems That Decide Performance",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "X-ray tube and generator: determine sustained fluoroscopy and acquisition capability. Tube condition and cumulative use are the single largest cost variable in any angiography room.",
      "Flat detector: defines field of view, dynamic range and low-contrast performance. Detector health is verified by measurement, not by appearance of the live image.",
      "C-arm and table: positioning repeatability, angulation range and isocentre stability decide how efficiently a case runs.",
      "Dose and image-processing software: pulsed fluoroscopy rates, collimation behaviour, stored fluoroscopy and dose reporting are what turn hardware capability into a governed dose profile.",
      "Displays and in-room integration: image latency, layout and haemodynamic integration determine whether the operator works from one coherent picture or three separate ones.",
    ],
  },
  {
    type: "h2",
    id: "clinical",
    text: "Clinical Fit",
    number: 4,
  },
  {
    type: "p",
    text: "An Axiom Artis room supports diagnostic coronary angiography, percutaneous coronary intervention, peripheral and visceral angiography, and interventional radiology procedures. Suitability for a given service is decided by field of view, table access, dose management capability and the availability of the software options a service actually uses — not by platform name.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Software options are part of the specification",
    text: "Two systems with identical hardware can behave very differently in clinic depending on which acquisition, rotational and dose-management options are licensed. Confirm the option list, not just the model.",
  },
  {
    type: "h2",
    id: "evaluation",
    text: "Evaluating a Pre-Owned Axiom Artis",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Tube history: type fitted, cumulative use and replacement record. A near-end-of-life tube is a near-term capital cost, not a service item.",
      "Detector status: measured image-quality performance and any history of detector replacement or repair.",
      "Software and licence inventory: version level, licensed options and whether they transfer with the sale.",
      "Mechanical condition: C-arm and table drives, brakes, cable management and isocentre accuracy.",
      "Service record: preventive maintenance history, fault log and parts availability for the specific generation in question.",
      "Complete configuration: displays, in-room monitors, injector interfaces and haemodynamic connectivity are frequently missing from second-hand offers.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Verify the room, not just the machine",
    text: "A pre-owned system priced attractively can still require shielding revision, power upgrades, cooling capacity and cable routing that exceed the equipment saving. Assess installation feasibility before agreeing a price.",
  },
  {
    type: "h2",
    id: "service",
    text: "Service, Parts and Uptime",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "A preventive maintenance schedule covering generator and tube performance, detector calibration, mechanical drives, and dose measurement verification.",
      "A defined spare parts strategy — which parts are held locally, which are sourced, and what the realistic lead time is for each.",
      "Radiation protection obligations: shielding assessment, staff dosimetry, periodic performance testing and documented quality assurance.",
      "Operator and engineer training, with competency records maintained per staff member rather than per department.",
      "An escalation path with defined response expectations, because an angiography room down is a service interruption, not an inconvenience.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs, commissions and supports Siemens Axiom Artis cath lab systems, and provides the biomedical engineering, spare parts and training programmes that keep an interventional service running.",
  },
  {
    type: "faq",
    items: [
      {
        q: "What is the difference between Axiom Artis dTA and dFC systems?",
        a: "They are different configurations of the same flat-detector platform, differing in mounting arrangement and intended workflow. The practical consequences are room layout, table access and civil works rather than fundamental imaging capability.",
      },
      {
        q: "Can an Axiom Artis room be used for hybrid surgical work?",
        a: "It depends on room size, mounting type, sterile-field access and anaesthetic space — a hybrid theatre is a room specification, not an equipment specification. Hybrid intent must be established before installation planning.",
      },
      {
        q: "What is the largest lifecycle cost in an Axiom Artis room?",
        a: "The X-ray tube, followed by detector service and image-chain components. Tube history is therefore the first specification to establish when assessing any angiography system.",
      },
      {
        q: "Is a biplane system worth the additional cost?",
        a: "Only where the case mix genuinely uses it — typically neurointervention and paediatric work. For adult coronary services, monoplane rooms cover the mainstream workload at lower capital and service cost.",
      },
      {
        q: "Does AbuFarha Medical service Siemens angiography systems?",
        a: "Yes. Installation, commissioning, preventive maintenance, spare parts supply and operator training are delivered by our biomedical engineering team as part of the supply relationship.",
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
    text: "The Axiom Artis platform performs to the standard of its weakest subsystem and its dose governance, not to the reputation of its badge. Specify the configuration against real case mix, verify tube and detector condition before purchase, and plan maintenance and radiation protection as part of the acquisition rather than after it.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Interventional cardiology service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Angiography installation and preventive maintenance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer documentation and field service practice synthesis",
    disclaimer:
      "Educational guidance on flat-detector angiography platforms. It does not replace manufacturer documentation or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer technical documentation and operating instructions for installed angiography systems." },
      { label: "Institutional cath lab quality assurance and dose audit records." },
      { label: "National radiation protection requirements applicable to interventional X-ray rooms." },
    ],
  },
];
