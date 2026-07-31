/**
 * Operating Room cluster — "What Is a Modern Operating Room?"
 */

import type { ContentBlock, TocItem } from "../blog";

export const MODERN_OR_TOC: TocItem[] = [
  { id: "definition", title: "Defining the Modern Operating Room" },
  { id: "systems", title: "The Core Systems That Make Up a Theatre" },
  { id: "workflow", title: "Workflow-Centred Design" },
  { id: "environment", title: "Environmental Control and Infection Prevention" },
  { id: "digital", title: "Integration, Data and Digital Documentation" },
  { id: "lifecycle", title: "Lifecycle: Planning Through to Servicing" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MODERN_OR_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A modern operating room is a coordinated set of clinical, environmental and information systems built around a single case list rather than a collection of independently purchased equipment. AbuFarha Medical supplies, installs, commissions and services the equipment that makes up these theatres — from surgical lighting and tables to integration and imaging systems — and provides the biomedical engineering support, spare parts and staff training that keep them running.",
      "The term 'modern operating room' is often used loosely to mean a room with new equipment. In practice, what distinguishes a modern theatre from an older one is not any single device but how the lighting, table, integration platform, air handling and information systems are specified and installed to work together, and how well the equipment supports the way the surgical team actually moves and communicates.",
      "This guide sets out what a modern operating room actually consists of, how its core systems relate to one another, and where AbuFarha Medical's role sits across the planning, installation and servicing of that equipment. It is intended as the entry point to the rest of the operating room content on this site, covering lighting, integration, air quality and hybrid theatres in more detail elsewhere.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Definition of a modern operating room, core equipment systems, workflow-centred design principles, environmental control, integration and digital documentation, and lifecycle from planning to servicing",
    audience:
      "Hospital administrators, theatre managers, surgeons, facilities and estates teams, procurement committees, biomedical engineering staff",
    readingTime: "12 min read",
    technology: "Operating Room",
  },
  {
    type: "h2",
    id: "definition",
    text: "Defining the Modern Operating Room",
    number: 1,
    body: "A theatre defined by coordinated systems, not by any single piece of equipment.",
  },
  {
    type: "p",
    text: "A modern operating room is best understood as an integrated clinical environment: surgical lighting and a pendant system positioned around the working field, an operating table selected for the specialty's patient positions, an audiovisual integration platform that routes and displays imaging and endoscopic sources, an environmental system that controls air quality and temperature, and a documentation system that captures the case record. None of these elements is unique to a 'modern' theatre; what is distinctive is that they are specified together, installed to a coordinated layout, and commissioned as a working system rather than as separate purchases arriving on separate delivery dates.",
  },
  {
    type: "p",
    text: "This matters because theatres are unusually unforgiving of poor coordination. A pendant boom installed without reference to the final table position, or an integration system specified after the room's cabling is already fixed, produces a room that technically contains modern equipment but does not function as a modern theatre. The distinction is functional, not aesthetic.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "\"Modern\" is a systems description, not an age description",
    text: "A theatre refurbished five years ago with well-coordinated lighting, integration and air handling can function better than a theatre with newer individual devices installed piecemeal. Coordination, not purchase date, is the differentiator.",
  },
  {
    type: "h2",
    id: "systems",
    text: "The Core Systems That Make Up a Theatre",
    number: 2,
  },
  {
    type: "table",
    headers: ["System", "Function", "Coordination dependency"],
    rows: [
      ["Operating table", "Patient positioning and access for the procedure", "Radiolucency and geometry must match imaging equipment"],
      ["Surgical lights and pendants", "Illumination of the operative field from the working position", "Boom reach and rotation must clear the imaging arm and monitors"],
      ["OR integration and video management", "Routing, recording and display of imaging and camera sources", "Cabling and display positions fixed at construction or renovation stage"],
      ["Air handling and filtration", "Particulate and microbial control of the theatre environment", "Duct and diffuser layout fixed early, difficult to alter later"],
      ["Anaesthesia workstation and monitoring", "Airway management, ventilation and physiological monitoring", "Head-end access and gas outlet positions"],
      ["Documentation and data systems", "Case record capture, image archiving, network connectivity", "Network provision and integration platform interoperability"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The systems with the longest lead times and least reversibility — air handling ductwork and integration cabling — are frequently finalised before the equipment they must serve is selected.",
    clinicalInterpretation:
      "When sequencing runs the other way, the room ends up with equipment adapted to the building rather than a building adapted to the equipment, which shows up later as compromised sightlines or restricted boom travel.",
    hospitalRecommendation:
      "Involve the equipment supplier and biomedical engineering team at the design stage, before ductwork and cable containment are fixed, not after.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "Workflow-Centred Design",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "The scrub team's working positions and sterile field boundaries are established before equipment positions, not after.",
      "Circulation for staff, patient transfer and equipment movement is separated from the sterile field wherever the room geometry allows.",
      "Instrument and consumable storage is positioned at the point of use to reduce movement during a case.",
      "Boom and pendant reach is checked against the specific table and patient positions the specialty requires, not against generic room dimensions.",
      "Communication systems — intercom, telemetry and remote viewing — are planned so that team members outside the sterile field can participate without entering it.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Design reviews should include a walk-through with the actual team",
    text: "Drawings and 3D models identify gross clashes, but a walk-through with the surgical, anaesthetic and nursing staff who will use the room routinely surfaces workflow issues that plans do not, such as a monitor visible from the surgeon's position but not the scrub nurse's.",
  },
  {
    type: "h2",
    id: "environment",
    text: "Environmental Control and Infection Prevention",
    number: 4,
  },
  {
    type: "p",
    text: "Air handling in a modern theatre is designed to maintain a controlled, positive-pressure environment that limits the ingress of contaminated air and manages particulate levels around the surgical field. The specific air-change rates, filtration grades and pressure differentials appropriate to a given theatre are set by national or institutional building and infection-control standards and vary by procedure type and jurisdiction; they should always be confirmed against the applicable local code rather than a generic figure, and are addressed in more detail in the dedicated air-quality guide in this cluster.",
  },
  {
    type: "p",
    text: "Temperature and humidity control also affect equipment: imaging electronics, integration hardware and monitoring systems have defined operating ranges, and sustained operation outside them can affect reliability and shorten service intervals between preventive maintenance visits.",
  },
  {
    type: "h2",
    id: "digital",
    text: "Integration, Data and Digital Documentation",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Routing of imaging, endoscopic and monitoring sources to displays positioned for each working position in the room.",
      "Recording and archiving of case video and images for teaching, quality review and the patient record where policy requires it.",
      "Remote viewing for teaching or consultation without additional personnel inside the sterile field.",
      "Network connectivity between the integration platform, hospital imaging archive and electronic patient record.",
      "Access control and audit logging appropriate to clinical data handled within the room.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Integration platforms are not interchangeable with source equipment",
    text: "An integration system's compatibility with existing endoscopy towers, imaging systems and displays should be confirmed before procurement. Retrofitting compatibility after installation is materially more disruptive than specifying it at the outset.",
  },
  {
    type: "h2",
    id: "lifecycle",
    text: "Lifecycle: Planning Through to Servicing",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Planning: case list, specialty mix and imaging requirements defined before equipment selection begins.",
      "Specification and procurement: equipment chosen against the defined workflow, with coordination between suppliers of lighting, integration, tables and imaging.",
      "Installation and commissioning: equipment installed, calibrated and verified, with a full-team rehearsal before clinical release.",
      "Training: operator and application training for surgical, anaesthetic, nursing and technical staff, with competency recorded.",
      "Ongoing service: preventive maintenance, spare parts availability and biomedical engineering support across the equipment's operating life.",
      "Review and upgrade: periodic reassessment as case mix or equipment condition changes, informing the next capital cycle.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supports this lifecycle by supplying and installing the equipment that makes up a modern theatre, commissioning it against a documented plan, training the clinical and technical staff who operate it, and providing the biomedical engineering service and spare parts support the room depends on throughout its working life. AbuFarha Medical supplies and services this equipment; it does not undertake hospital construction or building works.",
  },
  {
    type: "faq",
    items: [
      {
        q: "What makes a theatre 'modern' rather than simply new?",
        a: "Coordination between its systems — lighting, integration, air handling, tables and documentation — planned and installed to work together, rather than the age of the individual devices installed in it.",
      },
      {
        q: "Which theatre systems are hardest to change after installation?",
        a: "Air handling ductwork and integration cabling, both of which are typically fixed during construction or major renovation and are costly to alter afterward. These should be planned with the final equipment layout in mind.",
      },
      {
        q: "Does a modern operating room require a hybrid imaging system?",
        a: "No. Most modern theatres do not include fixed imaging; hybrid theatres are a distinct category built for a defined set of image-guided procedures, discussed separately in this cluster's comparison article.",
      },
      {
        q: "Who should be involved when designing a new or renovated theatre?",
        a: "Surgical, anaesthetic and nursing staff who will use the room, alongside estates and facilities teams, biomedical engineering, and the equipment supplier, ideally from the design stage rather than after construction is underway.",
      },
      {
        q: "What role does AbuFarha Medical play in a theatre project?",
        a: "AbuFarha Medical supplies, installs and commissions theatre equipment such as lighting, integration systems and imaging, and provides training and ongoing biomedical engineering support. It does not carry out building construction.",
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
    text: "A modern operating room is defined by the coordination of its core systems around the procedures it hosts, not by the novelty of any individual device. Treating lighting, integration, environmental control and documentation as a single planned system, sequenced correctly against construction and commissioned with the full team, produces a theatre that supports its case list rather than constraining it.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Theatre and perioperative service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Theatre equipment installation and commissioning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Project delivery and commissioning practice synthesis",
    disclaimer:
      "Educational guidance on operating room design and equipment. It does not replace manufacturer site planning documentation, clinical guidelines or local regulatory requirements.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer site planning and pre-installation documentation for theatre equipment and integration systems." },
      { label: "Institutional theatre design standards and commissioning records." },
      { label: "National building and infection-control standards applicable to operating room environments." },
    ],
  },
];
