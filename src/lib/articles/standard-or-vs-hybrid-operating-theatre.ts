/**
 * Operating Room cluster — "Standard Operating Room vs Hybrid Operating Theatre"
 */

import type { ContentBlock, TocItem } from "../blog";

export const STANDARD_VS_HYBRID_OR_TOC: TocItem[] = [
  { id: "distinction", title: "What Distinguishes a Hybrid Theatre" },
  { id: "comparison", title: "Standard OR and Hybrid Theatre Compared" },
  { id: "cases", title: "Case Mix and Clinical Justification" },
  { id: "infrastructure", title: "Infrastructure and Structural Requirements" },
  { id: "staffing", title: "Staffing, Workflow and Radiation Protection" },
  { id: "decision", title: "Deciding Which a Facility Needs" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const STANDARD_VS_HYBRID_OR_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A standard operating room and a hybrid operating theatre share the same core equipment categories — table, lighting, integration, anaesthesia and environmental control — but differ fundamentally in the fixed imaging capability a hybrid theatre adds and the structural, staffing and workflow consequences that follow. AbuFarha Medical supplies, installs and commissions equipment for both room types, including fixed interventional imaging systems for hybrid theatres, and provides the training and biomedical engineering support both require.",
      "The decision between building or converting to a hybrid theatre rather than continuing to rely on standard theatres with mobile imaging is a significant capital and clinical planning decision, driven by the procedures a hospital intends to perform rather than by the imaging technology in isolation. Understanding what a hybrid theatre actually requires, beyond the imaging system itself, is central to making that decision well.",
      "This guide compares the two room types directly, sets out the case mix considerations that justify a hybrid theatre, and details the additional infrastructure, staffing and workflow requirements a hybrid conversion or new build brings.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Definition of a hybrid operating theatre, direct comparison with a standard OR, case mix justification, structural and infrastructure requirements, staffing and radiation protection, decision criteria",
    audience:
      "Hospital administrators, theatre and interventional service managers, surgeons and interventional cardiologists/radiologists, estates and facilities teams, procurement committees",
    readingTime: "12 min read",
    technology: "Hybrid Operating Theatre",
  },
  {
    type: "h2",
    id: "distinction",
    text: "What Distinguishes a Hybrid Theatre",
    number: 1,
    body: "A hybrid theatre is a standard OR plus a fixed interventional imaging system and its supporting infrastructure.",
  },
  {
    type: "p",
    text: "A hybrid operating theatre is, at its core, an operating room built to full surgical standards — sterile field, environmental control, anaesthesia and surgical equipment — with a fixed interventional imaging system, most commonly a ceiling- or floor-mounted angiography system, permanently installed and integrated into the room. This allows advanced image guidance to be available for the same procedure as open or minimally invasive surgery, without moving the patient between rooms.",
  },
  {
    type: "p",
    text: "The distinction is not simply the presence of imaging in a theatre: a standard OR with a mobile C-arm also provides intraoperative imaging. What defines a hybrid theatre is the fixed, high-specification imaging system and the structural, shielding, control-room and workflow infrastructure it requires, which is substantially greater than what a mobile C-arm needs.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "A mobile C-arm does not make a theatre 'hybrid'",
    text: "Many standard operating rooms use mobile C-arm imaging routinely without being described as hybrid theatres. The term is generally reserved for rooms with a fixed, high-specification interventional imaging system and the dedicated infrastructure that accompanies it.",
  },
  {
    type: "h2",
    id: "comparison",
    text: "Standard OR and Hybrid Theatre Compared",
    number: 2,
  },
  {
    type: "table",
    headers: ["Attribute", "Standard operating room", "Hybrid operating theatre"],
    rows: [
      ["Imaging capability", "Mobile C-arm or none, brought in as required", "Fixed, high-specification interventional imaging system, permanently installed"],
      ["Structural requirements", "Standard theatre construction", "Reinforced floor or ceiling mounting, dedicated shielding and often a separate control room"],
      ["Radiation protection scope", "Task-based, around the mobile unit when in use", "Comprehensive room shielding and continuous radiation safety programme"],
      ["Typical case types", "General, orthopaedic and specialty surgery without continuous advanced image guidance", "Complex cardiovascular, structural heart, aortic and combined surgical-endovascular procedures"],
      ["Staffing", "Surgical, anaesthetic and nursing team, with radiography support for mobile imaging as needed", "Additional interventional radiography or cardiac catheterisation staff integrated into the surgical team"],
      ["Capital and space requirement", "Standard theatre footprint and budget", "Larger footprint and substantially greater capital cost for imaging, shielding and control room"],
      ["Utilisation model", "Scheduled across a broad general case list", "Typically scheduled for a defined set of complex or combined procedures to justify the additional infrastructure"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The capital and structural gap between the two room types is driven almost entirely by the fixed imaging system's shielding and mounting requirements, not by the surgical equipment, which is broadly comparable between the two.",
    clinicalInterpretation:
      "A hybrid theatre's clinical value is realised only when its case list genuinely requires combined image-guided and open or endovascular access in the same setting; used for procedures that do not need this, its additional infrastructure sits idle relative to its cost.",
    hospitalRecommendation:
      "Base the decision to build or convert a hybrid theatre on a documented forecast of the specific procedures that require combined imaging and surgical access, not on general capability aspiration.",
  },
  {
    type: "h2",
    id: "cases",
    text: "Case Mix and Clinical Justification",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Structural heart procedures such as transcatheter valve implantation, which combine catheter-based delivery with a surgical standby or access capability.",
      "Complex aortic and vascular procedures requiring high-quality fluoroscopic or angiographic guidance alongside open surgical access.",
      "Combined surgical-endovascular procedures where conversion from a minimally invasive to an open approach may be required intraoperatively.",
      "Certain complex neurosurgical or orthopaedic procedures where advanced intraoperative imaging materially changes surgical decision-making.",
      "A documented, realistic forecast of procedure volume in these categories, since the case for a hybrid theatre rests on sustained utilisation of its imaging capability rather than occasional use.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Forecast utilisation before forecasting capability",
    text: "The clinical case for a hybrid theatre should be built from a documented forecast of qualifying procedures and their expected volume, cross-checked against the specialties and referral base actually available to the facility, rather than from a general ambition to offer advanced capability.",
  },
  {
    type: "h2",
    id: "infrastructure",
    text: "Infrastructure and Structural Requirements",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Structural floor or ceiling reinforcement to support the fixed imaging system's mounting, assessed against the specific system's manufacturer specifications.",
      "Radiation shielding for the room, assessed by a qualified radiation protection specialist against the imaging system, workload and adjacent occupied areas.",
      "A dedicated control room or console area for the imaging system, separated from the sterile field as required by the imaging modality.",
      "Increased electrical capacity, cooling and heat load provision for the imaging equipment, coordinated with the room's general ventilation design.",
      "Table compatibility between the fixed imaging system and the surgical table, including any hybrid table designed to interface directly with the imaging system's positioning.",
      "Integration platform capable of handling the additional imaging sources and displays a hybrid room requires, discussed in more detail in the OR integration article in this cluster.",
    ],
  },
  {
    type: "h2",
    id: "staffing",
    text: "Staffing, Workflow and Radiation Protection",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Interventional radiography or cardiac catheterisation laboratory staff integrated into the surgical team's workflow, with clearly defined roles during combined procedures.",
      "Radiation protection training for all staff working in the room, alongside dosimetry monitoring appropriate to the modality and workload.",
      "Joint scheduling protocols between surgical and interventional teams to manage the room's higher case complexity and setup time.",
      "A defined radiation safety programme, including shielding verification, quality assurance testing and a documented radiation protection lead for the facility.",
      "Cross-training so that surgical, anaesthetic and imaging staff understand each other's equipment and emergency procedures within the shared room.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Radiation protection scope is materially greater in a hybrid theatre",
    text: "A hybrid theatre's fixed imaging system requires comprehensive room shielding and a continuous radiation safety programme, distinct from the task-based protection used around a mobile C-arm in a standard OR. This should be planned and budgeted as a dedicated workstream, not treated as an extension of standard theatre radiation practice.",
  },
  {
    type: "h2",
    id: "decision",
    text: "Deciding Which a Facility Needs",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Document the specific procedures that would require combined imaging and surgical access, and forecast their realistic volume against the facility's referral base and specialty mix.",
      "Compare that forecast against the capital, structural and staffing cost of a hybrid conversion or new build versus continuing with standard theatres and mobile imaging.",
      "Assess whether existing standard theatres could be adapted, or whether a purpose-built hybrid room is required given structural and shielding constraints.",
      "Involve interventional and surgical specialties, radiation protection, estates and the equipment supplier jointly in the planning process from the outset.",
      "Plan staffing, training and radiation protection programmes alongside the infrastructure project, not as a following phase after construction.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs and commissions equipment for both standard operating rooms and hybrid theatres, including fixed interventional imaging systems, and supports the joint planning process between clinical, radiation protection and estates teams, alongside the training and ongoing biomedical engineering support both room types require. AbuFarha Medical supplies and installs this equipment; it does not undertake the structural or building construction work involved in a hybrid theatre project.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is a hybrid theatre simply a standard OR with a permanent imaging system?",
        a: "The imaging system is the defining feature, but a hybrid theatre also requires structural reinforcement, dedicated shielding, often a separate control room, and a radiation safety programme that go well beyond what a standard OR with mobile imaging needs.",
      },
      {
        q: "When is a mobile C-arm in a standard OR sufficient instead of a hybrid theatre?",
        a: "When the procedure mix does not require sustained, high-specification image guidance combined with open surgical access as a routine part of the case list. Occasional intraoperative imaging needs are generally served well by a mobile C-arm in a standard theatre.",
      },
      {
        q: "What is the biggest driver of cost difference between the two room types?",
        a: "The fixed imaging system's structural mounting, shielding requirements and control room, rather than the general surgical equipment, which is broadly comparable between a standard OR and a hybrid theatre.",
      },
      {
        q: "Can an existing standard OR be converted into a hybrid theatre?",
        a: "In some cases, subject to a structural and shielding assessment confirming the existing room can support the fixed imaging system's requirements; in many cases, a purpose-built room is more practical than a retrofit.",
      },
      {
        q: "What staffing changes come with a hybrid theatre?",
        a: "Interventional radiography or catheterisation laboratory staff integrated into the surgical workflow, radiation protection training and dosimetry for all staff in the room, and joint scheduling protocols between surgical and interventional teams.",
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
    text: "A hybrid operating theatre differs from a standard OR principally in its fixed interventional imaging system and the structural, radiation protection and staffing infrastructure that comes with it, not in its general surgical equipment. The decision to build or convert one should rest on a documented forecast of the specific procedures that need combined imaging and surgical access, planned jointly by clinical, radiation protection, estates and equipment teams from the outset.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Theatre and interventional service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Theatre and hybrid imaging equipment installation and commissioning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Project delivery and commissioning practice synthesis",
    disclaimer:
      "Educational guidance comparing standard operating rooms and hybrid operating theatres. It does not replace manufacturer site planning documentation, clinical guidelines or local regulatory and radiation protection requirements.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer site planning and pre-installation documentation for fixed interventional imaging systems." },
      { label: "National radiation protection requirements applicable to fixed interventional imaging installations." },
      { label: "Institutional hybrid theatre planning and commissioning records." },
    ],
  },
];
