/**
 * Hybrid operating theatre planning guide — Cath Lab cluster (supporting).
 */

import type { ContentBlock, TocItem } from "../blog";

export const HYBRID_OT_PLANNING_TOC: TocItem[] = [
  { id: "overview", title: "What a Hybrid Theatre Actually Is" },
  { id: "case", title: "When a Hybrid Theatre Is Justified" },
  { id: "imaging", title: "Choosing the Imaging Platform" },
  { id: "space", title: "Space, Structure and Ceiling Strategy" },
  { id: "services", title: "Ventilation, Power and Infection Control" },
  { id: "workflow", title: "Workflow and Team Design" },
  { id: "radiation", title: "Radiation Protection in a Sterile Environment" },
  { id: "cost", title: "Budget Structure and Common Omissions" },
  { id: "commissioning", title: "Commissioning and Acceptance" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const HYBRID_OT_PLANNING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A hybrid operating theatre is a fully compliant surgical operating room that also contains fixed, high-specification interventional imaging. It allows a team to move between endovascular and open surgery without moving the patient, and to image intra-operatively at diagnostic quality rather than with a mobile C-arm.",
      "It is also one of the most demanding rooms a hospital can build. The room must satisfy surgical ventilation and sterility standards, structural loads for ceiling- or floor-mounted angiography, radiation shielding, and the workflow needs of two clinical cultures that historically worked in separate departments.",
      "This guide covers when a hybrid theatre is genuinely justified, how to choose the imaging platform, the structural and engineering constraints that decide the room size, and the budget lines that projects most often omit.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Definition and scope, clinical justification, imaging platform selection, structural and ceiling strategy, ventilation and infection control, workflow, radiation protection, budget and commissioning",
    audience:
      "Cardiac and vascular surgeons, interventional cardiologists, theatre managers, hospital project teams, biomedical engineers and healthcare planners",
    readingTime: "16 min read",
    technology: "Angiography / Cath Lab Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "What a Hybrid Theatre Actually Is",
    number: 1,
    body: "The defining test is that both halves are uncompromised: a real operating theatre by ventilation, sterility and anaesthetic standards, and a real interventional suite by imaging performance.",
  },
  {
    type: "ul",
    items: [
      "Fixed angiography system — floor-, ceiling- or rail-mounted flat-panel C-arm with full interventional software, not a mobile unit parked in a theatre.",
      "Operating-theatre ventilation — laminar or turbulent-flow ultra-clean air handling meeting the national surgical standard, achieved with imaging equipment inside the clean zone.",
      "Surgical table compatibility — a carbon-fibre, radiolucent, fully articulating table that supports both open surgery positioning and imaging travel.",
      "Integrated control — in-room and control-room workstations, video-over-IP routing, haemodynamics, anaesthesia and surgical displays on a shared ceiling suspension.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "The most common failure is calling a compromise a hybrid",
    text: "Placing a mobile C-arm in a standard theatre gives intra-operative fluoroscopy but not the image quality, dose efficiency, table travel or software required for endovascular work. Conversely, adding a scrub sink to a cath lab does not create a theatre if the ventilation cannot meet surgical standards. Decide which capability the clinical programme actually needs before committing capital.",
  },
  {
    type: "h2",
    id: "case",
    text: "When a Hybrid Theatre Is Justified",
    number: 2,
    body: "Hybrid theatres earn their cost where procedures genuinely need both capabilities in one session, or where conversion risk must be managed without patient transfer.",
  },
  {
    type: "table",
    headers: ["Programme", "Typical procedures", "Hybrid benefit"],
    rows: [
      ["Vascular surgery", "EVAR, TEVAR, complex aortic repair, hybrid debranching", "Precise stent-graft deployment plus immediate open conversion capability"],
      ["Structural heart", "TAVI, mitral and tricuspid intervention, closure devices", "Diagnostic-quality imaging with surgical backup in one room"],
      ["Cardiac surgery", "Hybrid coronary revascularisation, lead extraction", "Combined surgical and catheter-based treatment in a single anaesthetic"],
      ["Neurosurgery / neurointervention", "Aneurysm and AVM treatment, stroke thrombectomy support", "Intra-operative angiography without transfer of an unstable patient"],
      ["Trauma", "Resuscitative endovascular procedures, embolisation", "Haemorrhage control and definitive surgery without moving the patient"],
    ],
    caption: "Clinical programmes that most often justify hybrid capability.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Hybrid theatres are justified by procedure mix and conversion risk, not by prestige. A room used for two or three qualifying cases per week will not recover its capital and maintenance cost.",
    clinicalInterpretation:
      "The strongest indications are structural heart and complex aortic work, where imaging precision changes the technical result and where open conversion, though rare, must be immediately available.",
    hospitalRecommendation:
      "Build a defensible case volume forecast per programme before sizing the room. If the forecast is thin, a high-specification cath lab with theatre-grade ventilation is often the better first step.",
  },
  {
    type: "h2",
    id: "imaging",
    text: "Choosing the Imaging Platform",
    number: 3,
    body: "Mounting choice is a workflow decision with structural consequences, and it is difficult to reverse after the shell is built.",
  },
  {
    type: "table",
    headers: ["Mounting", "Strengths", "Trade-offs"],
    rows: [
      ["Ceiling-mounted rail", "Large coverage, C-arm can be parked clear of the surgical field, flexible head/foot access", "Heaviest structural demand; competes with ventilation and pendant space in the ceiling"],
      ["Floor-mounted", "Simpler structure, lower cost, predictable ventilation layout", "Fixed pivot limits access angles; footprint intrudes on the surgical circulation zone"],
      ["Robotic / multi-axis arm", "Widest range of projections, CT-like cone-beam acquisitions, minimal parked footprint", "Highest capital and service cost; needs the largest clear floor envelope"],
    ],
    caption: "Angiography mounting options for hybrid theatres.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Cone-beam CT is the feature that changes the room",
    text: "If the clinical programme needs intra-operative 3D — aortic stent-graft assessment, neurovascular work, or fusion overlay onto a pre-operative CT — specify cone-beam capability at tender. Retrofitting it later can require a different C-arm generation, additional reconstruction hardware and re-acceptance testing.",
  },
  {
    type: "h2",
    id: "space",
    text: "Space, Structure and Ceiling Strategy",
    number: 4,
    body: "Hybrid theatres are substantially larger than either a standard theatre or a cath lab, because both equipment sets and both teams must coexist without breaking sterile circulation.",
  },
  {
    type: "ul",
    items: [
      "Procedure room: plan for a materially larger clear area than a conventional theatre — typically in the region of 65–100 m² depending on mounting choice and vendor envelope. Always design to the vendor's issued room layout drawing.",
      "Ceiling height: sufficient structural and service zone above the finished ceiling for the C-arm rail, ventilation plenum, surgical lights, monitor suspensions and anaesthetic pendants without collision.",
      "Structural loads: ceiling-mounted systems impose concentrated dynamic loads that must be verified by a structural engineer against the vendor load schedule before slab design is frozen.",
      "Adjacent spaces: control room with direct view, technical/equipment room with its own cooling, scrub area, sterile store, anaesthetic and recovery access, and a patient route that never crosses the sterile corridor.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Run a 3D coordination model before construction",
    text: "The single most valuable planning step is a clash-detection model combining the C-arm sweep envelope, ventilation plenum, lights, monitors and pendants. Collisions discovered on site cost weeks; collisions discovered in the model cost an afternoon.",
  },
  {
    type: "h2",
    id: "services",
    text: "Ventilation, Power and Infection Control",
    number: 5,
    body: "The engineering conflict at the heart of a hybrid theatre is that imaging hardware occupies the ceiling that ultra-clean ventilation wants to use.",
  },
  {
    type: "ul",
    items: [
      "Ventilation: the clean-air supply must be designed around the C-arm rail and suspensions, with airflow modelling confirming that the sterile field remains protected through the full range of C-arm movement.",
      "Surfaces and cleanability: all imaging equipment inside the theatre must be specified with cleanable, disinfectant-resistant surfaces and cable management that does not trap contamination.",
      "Electrical: medical IT (isolated) supply for patient-connected equipment, uninterruptible power for imaging and haemodynamics, and separately assessed supply capacity for the generator and cooling plant.",
      "Cooling: the technical room housing generator and reconstruction hardware needs continuous cooling with its own resilience — a common single point of failure in hot climates.",
      "Medical gases and suction: full anaesthetic provision at the head end, coordinated with pendant positions that do not obstruct the C-arm.",
    ],
  },
  {
    type: "h2",
    id: "workflow",
    text: "Workflow and Team Design",
    number: 6,
    body: "Most hybrid theatre disappointments are organisational rather than technical: the room works, but the two teams never agree on how to use it.",
  },
  {
    type: "ul",
    items: [
      "Single scheduling authority: one booking list, one owner. Rooms shared informally between departments end up under-used and resented by both.",
      "Defined roles: who drives the table, who operates the imaging system, who controls injection, and who is responsible for radiation protection during each phase of the case.",
      "Cross-training: theatre nurses need interventional and radiation awareness training; radiographers need sterile-field discipline. Neither is optional.",
      "Emergency conversion drills: rehearse the transition from endovascular to open surgery, including C-arm parking, light deployment and instrument availability, against a stopwatch.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Governance before go-live",
    text: "Agree the case-mix policy, escalation pathway and radiation protection responsibilities in writing before the first patient. Hybrid rooms with a written operating policy achieve materially higher utilisation than rooms commissioned without one.",
  },
  {
    type: "h2",
    id: "radiation",
    text: "Radiation Protection in a Sterile Environment",
    number: 7,
    body: "Hybrid theatres combine the highest occupational exposure setting in the hospital with the constraints of a sterile field, so standard cath lab measures need adaptation.",
  },
  {
    type: "ul",
    items: [
      "Structural shielding must be calculated by a qualified medical physics expert for the actual workload, including walls, doors, the control-room window and any ceiling or floor transmission paths.",
      "Ceiling-suspended screens and table-side drapes must be positioned so they protect without breaching the sterile field — usually meaning drapes and screen covers are part of the sterile set-up.",
      "Personal protection: aprons and thyroid shields for all in-room staff, eye protection for the primary operator, and a garment inventory with inspection records.",
      "Dosimetry: over- and under-apron dosimeters as required by regulation, with results reviewed by the radiation protection committee, not filed unread.",
      "Dose awareness: live dose display in the room and cumulative air kerma recorded in the procedure record for long cases.",
    ],
  },
  {
    type: "h2",
    id: "cost",
    text: "Budget Structure and Common Omissions",
    number: 8,
    body: "Imaging equipment is a minority of a hybrid theatre project. Civil works, services and the theatre fit-out routinely exceed it.",
  },
  {
    type: "table",
    headers: ["Cost category", "What it includes", "Frequently omitted"],
    rows: [
      ["Imaging system", "C-arm, detector, generator, workstations, cone-beam software", "Advanced application licences and later software upgrades"],
      ["Civil and structural", "Slab and ceiling strengthening, shielding, finishes, doors", "Structural verification and shielding design fees"],
      ["Theatre fit-out", "Ventilation, lights, pendants, surgical table, monitors", "Radiolucent table and its dedicated accessories"],
      ["Engineering services", "Medical IT power, UPS, cooling, gases, IT and video routing", "Technical-room cooling resilience"],
      ["Service and lifecycle", "Full-service contract, tube and detector reserve, QA testing", "Annual physics testing and garment replacement"],
      ["Enablement", "Training, drills, decant of existing services during works", "Lost theatre income during construction"],
    ],
    caption: "Hybrid theatre budget structure and the lines most often missing from first drafts.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Tender the room, not the scanner",
    text: "Require every bidder to submit a room layout drawing, structural load schedule, ventilation coordination, cooling load, and a ten-year service price with tube and detector cover. Comparing headline equipment prices without these documents compares nothing useful.",
  },
  {
    type: "h2",
    id: "commissioning",
    text: "Commissioning and Acceptance",
    number: 9,
    body: "Acceptance for a hybrid theatre is a two-track exercise: the imaging system must pass interventional performance testing, and the room must pass theatre validation.",
  },
  {
    type: "ul",
    items: [
      "Imaging acceptance: dose rate and image quality tests at defined phantom conditions, geometric accuracy, cone-beam reconstruction verification, and a physics baseline report retained for future comparison.",
      "Radiation protection survey: shielding verification with the room in its final configuration, including door and window transmission.",
      "Ventilation validation: air change rates, pressure differentials, particle counts and recovery time measured with the imaging equipment installed and in its parked and deployed positions.",
      "Integration testing: table–C-arm interlocks, video routing to every display, haemodynamics and anaesthesia recording, and image transfer to PACS with correct dose reporting.",
      "Clinical dry runs: full simulated cases for each programme, including an emergency open-conversion drill, before the first live list.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "A hybrid theatre is only hybrid if both halves are uncompromised — real theatre ventilation and real interventional imaging.",
      "Mounting choice drives structure, ventilation and workflow, and is difficult to change after the shell is built.",
      "Specify cone-beam CT and advanced application licences at tender rather than as later upgrades.",
      "The room is larger than either parent room type; design to the vendor layout and run 3D clash detection first.",
      "Utilisation depends on governance: one scheduling authority, defined roles, cross-training and conversion drills.",
      "Budget the room, not the scanner — civil works, ventilation, cooling and service often exceed the imaging price.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "What is the difference between a hybrid operating theatre and a cath lab?",
        a: "A cath lab is an interventional imaging room designed for catheter-based procedures. A hybrid operating theatre is a full operating theatre — with surgical ventilation, sterility standards and anaesthetic provision — that also contains fixed interventional imaging, so open and endovascular procedures can be performed in one session without moving the patient.",
      },
      {
        q: "Can a mobile C-arm create a hybrid theatre?",
        a: "No. A mobile C-arm provides intra-operative fluoroscopy but not the image quality, dose efficiency, table travel, 3D acquisition or interventional software that endovascular work requires. It is a valid solution for orthopaedic and general surgical guidance, not a substitute for a fixed hybrid installation.",
      },
      {
        q: "How much space does a hybrid theatre need?",
        a: "Substantially more than a conventional theatre — commonly in the region of 65–100 m² of clear procedure area plus a control room and a technical equipment room. The exact figure must come from the chosen vendor's room layout drawing, because the C-arm sweep envelope differs between floor-, ceiling- and robot-mounted systems.",
      },
      {
        q: "Should the imaging system be ceiling- or floor-mounted?",
        a: "Ceiling-mounted rails allow the C-arm to park clear of the surgical field and give the widest access, which suits mixed open and endovascular work, but impose the greatest structural and ceiling-coordination demands. Floor-mounted systems are simpler and cheaper but occupy circulation space permanently. The decision should follow the dominant procedure mix.",
      },
      {
        q: "How is ventilation maintained with imaging equipment in the ceiling?",
        a: "The clean-air supply is designed around the imaging rail and suspensions, and airflow performance is validated with the equipment installed and moved through its full range. This coordination must happen at design stage; it cannot be resolved after the ceiling is built.",
      },
      {
        q: "What are the main radiation protection differences from a cath lab?",
        a: "The measures are the same in principle but must work inside a sterile field: ceiling-suspended screens and table drapes need sterile covers, garments must be worn under theatre clothing, and responsibility for dose during each phase of a combined case must be explicitly assigned between surgical and interventional teams.",
      },
      {
        q: "What utilisation does a hybrid theatre need to be viable?",
        a: "Viability depends on local cost structures, but the room must carry a regular qualifying case list rather than occasional use. Hospitals should forecast case volume per programme before committing capital, and consider a high-specification cath lab first if the forecast is thin.",
      },
      {
        q: "What should be tested before the first clinical case?",
        a: "Imaging acceptance and physics baseline, radiation shielding survey in the final room configuration, ventilation validation with equipment installed, full integration testing of table, displays, haemodynamics and PACS, and simulated clinical cases including an emergency open-conversion drill.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning a hybrid theatre or interventional suite?",
    subheading:
      "AbuFarha Medical supplies, installs, commissions and supports angiography and hybrid theatre imaging systems, and works alongside hospital project teams from room layout to acceptance testing.",
    technology: "Cath Lab & Hybrid Theatre",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Interventional and surgical imaging practice" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Angiography installation and commissioning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "International planning guidance, vendor installation practice and project experience",
    disclaimer:
      "Operating theatre ventilation, shielding and electrical standards are set by national regulation. This article describes internationally recognised planning practice; always design to your national standards and to the equipment vendor's issued documentation.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Theatre and ventilation standards",
        items: [
          { label: "International standards for heating, ventilation and air conditioning in healthcare facilities" },
          { label: "National health building guidance on operating theatre design and ultra-clean ventilation" },
        ],
      },
      {
        title: "Radiation protection",
        items: [
          { label: "International Atomic Energy Agency — radiation protection in interventional procedures" },
          { label: "International Commission on Radiological Protection — avoidance of radiation injuries from interventional procedures" },
        ],
      },
      {
        title: "Electrical safety and installation",
        items: [
          { label: "IEC 60364-7-710 — electrical installations in medical locations" },
          { label: "Manufacturer pre-installation, structural load and cooling documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
];
