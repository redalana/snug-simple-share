/**
 * Lithotripsy Systems cluster — "ESWL Room Planning and Installation: A Site Readiness Guide"
 */

import type { ContentBlock, TocItem } from "../blog";

export const ESWL_ROOM_PLANNING_TOC: TocItem[] = [
  { id: "sequence", title: "Why Site Planning Must Precede Equipment Delivery" },
  { id: "space", title: "Room Dimensions and Layout" },
  { id: "structural", title: "Structural and Floor Loading Considerations" },
  { id: "electrical", title: "Electrical Supply and Shielding" },
  { id: "environment", title: "Water, Coupling and Environmental Control" },
  { id: "workflow", title: "Workflow and Adjacent Space Planning" },
  { id: "commissioning", title: "Delivery, Installation and Commissioning Sequence" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ESWL_ROOM_PLANNING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A lithotripsy room that has not been properly planned before the equipment arrives is the single most common cause of installation delay. AbuFarha Medical supplies, installs and commissions lithotripsy systems, including Richard Wolf Piezolith platforms, and runs a site survey as a standard first step precisely because so many of the constraints that determine a successful installation — floor loading, electrical supply, door and access routing, water quality — are architectural facts that cannot be changed once a system has been delivered to site.",
      "Room planning for a lithotripter is not a construction exercise; it is a coordination exercise between the equipment manufacturer's siting requirements, the hospital's existing building fabric, and the clinical workflow the room is meant to support. AbuFarha Medical's role is to interpret manufacturer siting documentation against the specific site, identify what the existing space can and cannot accommodate, and sequence delivery, installation and commissioning so that go-live happens on schedule.",
      "This guide sets out the site readiness considerations that matter for an ESWL installation — space, structure, electrical supply, water and environment, and adjacent workflow — and the sequence in which they should be addressed relative to equipment delivery.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Room dimensions, structural loading, electrical supply, water and coupling medium requirements, workflow adjacency, and the installation and commissioning sequence for ESWL systems",
    audience:
      "Facilities and estates teams, biomedical engineering, hospital project managers, urology service planners",
    readingTime: "12 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "sequence",
    text: "Why Site Planning Must Precede Equipment Delivery",
    number: 1,
    body: "Manufacturer siting requirements are fixed; the building is what has to be checked against them.",
  },
  {
    type: "p",
    text: "Every lithotripsy manufacturer publishes siting and pre-installation documentation covering dimensions, clearances, electrical supply, environmental tolerances and structural loading for its systems. That documentation is the reference point; the purpose of a site survey is to establish, room by room, whether the proposed space meets it, and if not, what remedial work is required and how long that work will take. Doing this before the system is ordered — not after it arrives at the port — is what keeps an installation on schedule. AbuFarha Medical conducts this survey as a distinct engagement, separate from the commercial procurement process, and provides the hospital with a written readiness report against the manufacturer's requirements for the specific model under consideration.",
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Do not order before the survey is complete",
    text: "Confirming a purchase order before the site survey identifies structural or electrical gaps risks a system arriving at site with nowhere ready to receive it, incurring storage cost and delaying clinical service start.",
  },
  {
    type: "h2",
    id: "space",
    text: "Room Dimensions and Layout",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Confirm the manufacturer's minimum room dimensions for the specific configuration, including clearance around the treatment table for staff access on both sides and at the foot.",
      "Verify door width and any corridor turns along the delivery route, since the gantry and table assemblies are frequently the largest single components to move into position.",
      "Allow for the control console and any separate imaging workstation, positioned so the operator retains a clear line of sight to the patient and treatment field where the design requires it.",
      "Plan for an adjacent changing or preparation area appropriate to the anaesthesia model the service intends to run.",
      "Confirm ceiling height where an overhead-mounted imaging arm or lighting system is part of the configuration.",
    ],
  },
  {
    type: "h2",
    id: "structural",
    text: "Structural and Floor Loading Considerations",
    number: 3,
  },
  {
    type: "p",
    text: "Lithotripsy tables and integrated imaging gantries represent a concentrated point load that most general clinical room floors are not automatically rated to carry without verification. A structural engineer should confirm floor loading capacity against the manufacturer's stated equipment weight and footprint before installation is scheduled, particularly on upper floors or in buildings not originally designed for heavy diagnostic or interventional equipment. Where the existing floor requires reinforcement, this is structural building work outside AbuFarha Medical's scope and should be commissioned from the hospital's own facilities contractor, coordinated against the equipment delivery date.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Floor loading checks are cheaper before delivery than after",
    text: "A structural assessment carried out during site survey costs little in time; discovering a floor loading shortfall after the system has arrived on a delivery truck is materially more disruptive and costly to resolve.",
  },
  {
    type: "h2",
    id: "electrical",
    text: "Electrical Supply and Shielding",
    number: 4,
  },
  {
    type: "table",
    headers: ["Consideration", "Why it matters"],
    rows: [
      ["Dedicated circuit and rated capacity", "Shock wave generation and integrated imaging draw significant instantaneous current; shared or undersized circuits can trip or degrade output."],
      ["Voltage stability and conditioning", "Generation electronics are sensitive to supply fluctuation; conditioning equipment may be specified depending on local supply quality."],
      ["Earthing and equipotential bonding", "Required for patient and staff electrical safety around any high-voltage generation source."],
      ["Backup power provisioning", "Determines whether a treatment in progress can be safely completed or must be aborted during a mains interruption."],
      ["Radiation shielding, where fluoroscopic localisation is included", "Room shielding must be verified by a qualified radiation physicist before a system with X-ray localisation is commissioned."],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Electrical supply issues are among the most common causes of intermittent, hard-to-diagnose faults reported on newly installed systems, and are far easier to prevent at survey stage than to trace afterwards.",
    clinicalInterpretation:
      "Clinical staff experience an unstable supply as unexplained treatment interruptions, which erodes confidence in the equipment even when the equipment itself is functioning correctly.",
    hospitalRecommendation:
      "Commission an independent electrical supply verification against the manufacturer's specification as part of the site survey, before the installation date is fixed.",
  },
  {
    type: "h2",
    id: "environment",
    text: "Water, Coupling and Environmental Control",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Confirm the water quality and supply requirements for the coupling medium reservoir or cushion system used by the specific generation principle installed.",
      "Provide drainage appropriate to periodic reservoir changes or maintenance draining, so this does not become an ad hoc task for clinical staff.",
      "Maintain room temperature and humidity within the manufacturer's specified operating range, since generation electronics and imaging components have defined environmental tolerances.",
      "Plan for water treatment or filtration equipment where local supply quality does not meet the manufacturer's stated requirement, and site that equipment with the same rigour as the lithotripter itself.",
    ],
  },
  {
    type: "h2",
    id: "workflow",
    text: "Workflow and Adjacent Space Planning",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Position the room relative to anaesthesia recovery or observation space appropriate to the sedation model in use, minimising transfer distance for patients recovering from sedation or light anaesthesia.",
      "Plan storage for consumables, coupling gel or cushions, and spare parts within or immediately adjacent to the room, rather than requiring staff to retrieve them from a distant store during a session.",
      "Confirm patient flow does not cross unrelated departmental traffic, particularly where outpatient throughput is a service priority.",
      "Involve infection prevention and control in room layout review where shared equipment or coupling medium handling raises cleaning workflow considerations.",
    ],
  },
  {
    type: "h2",
    id: "commissioning",
    text: "Delivery, Installation and Commissioning Sequence",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Site survey and readiness report, conducted well ahead of the planned delivery date.",
      "Remedial building, electrical or structural work, completed and independently verified before delivery.",
      "Equipment delivery, positioned according to the confirmed access route and layout plan.",
      "Mechanical and electrical installation by qualified engineers, followed by functional testing of each subsystem.",
      "Commissioning and acceptance testing against the manufacturer's protocol, with output verification and safety interlock checks, signed off jointly by the engineering team and the hospital.",
      "Staff training, scheduled to complete before first clinical use, not treated as a task to be finished afterwards.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Commissioning is a documented event, not an informal handover",
    text: "A proper commissioning record — output verification, interlock testing, and sign-off against the manufacturer's protocol — is the reference document biomedical engineering will rely on for every subsequent service visit.",
  },
  {
    type: "p",
    text: "AbuFarha Medical carries out the site survey, coordinates installation and commissioning against the manufacturer's protocol, and delivers staff training as part of a single managed installation programme for every lithotripsy system it supplies, so that room readiness, delivery and go-live are planned as one sequence rather than as separate, loosely coordinated events.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How far in advance should a site survey be carried out?",
        a: "As early as possible in the planning process, ideally before the purchase order is finalised, so that any structural, electrical or spatial gap can be identified and resolved without delaying the equipment delivery date.",
      },
      {
        q: "Does AbuFarha Medical carry out structural building work?",
        a: "No. AbuFarha Medical identifies structural and electrical requirements against the manufacturer's siting documentation and coordinates the installation, but any structural reinforcement or building work itself is commissioned through the hospital's own facilities contractor.",
      },
      {
        q: "What is the most commonly underestimated site requirement?",
        a: "Electrical supply quality and capacity. Shared or undersized circuits, and inadequate earthing or bonding, are among the most frequent causes of avoidable installation delay and post-installation intermittent faults.",
      },
      {
        q: "Is shielding always required?",
        a: "Only where the specific configuration includes fluoroscopic localisation. Systems relying solely on ultrasound localisation do not carry the same radiation shielding requirement, but this must be confirmed against the exact configuration being installed.",
      },
      {
        q: "When should staff training take place relative to installation?",
        a: "Training should be scheduled to conclude before first clinical use of the system, and treated as a condition of go-live rather than an optional follow-up activity after installation is complete.",
      },
      {
        q: "Who verifies that commissioning has been completed correctly?",
        a: "Commissioning is verified jointly by the installing engineering team and the hospital's own biomedical engineering or clinical engineering representative, against the manufacturer's acceptance testing protocol, with a signed record retained by both parties.",
      },
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
    text: "A successful lithotripsy installation is decided largely before the equipment ever arrives on site, in the site survey and readiness work that confirms space, structure, electrical supply and environmental conditions against the manufacturer's requirements. Sequencing that work correctly, and treating commissioning and training as documented conditions of go-live rather than afterthoughts, is what keeps an installation on schedule and the resulting service reliable from its first day of clinical use.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy installation and commissioning practice" },
      { role: "Facilities review", name: "AbuFarha Project Engineering", credential: "Medical equipment site planning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer siting documentation and field installation practice synthesis",
    disclaimer:
      "Educational site planning guidance. It does not replace manufacturer siting documentation, structural engineering assessment or local building regulation.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer pre-installation and siting documentation for lithotripsy systems." },
      { label: "AbuFarha Medical site survey and installation project records." },
      { label: "Institutional facilities and estates guidance for medical equipment room planning." },
    ],
  },
];
