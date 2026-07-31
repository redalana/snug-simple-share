/**
 * Cart-based vs handheld ultrasound — Ultrasound cluster (comparison).
 */

import type { ContentBlock, TocItem } from "../blog";

export const US_CART_VS_HANDHELD_TOC: TocItem[] = [
  { id: "framing", title: "The Decision Is About Role, Not Size" },
  { id: "comparison", title: "Direct Comparison" },
  { id: "handheld", title: "Where Handheld Systems Win" },
  { id: "cart", title: "Where Cart-Based Systems Are Required" },
  { id: "hidden", title: "Costs and Risks That Are Easy to Miss" },
  { id: "decision", title: "A Decision Framework" },
  { id: "combination", title: "Using Both Together" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const US_CART_VS_HANDHELD_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Handheld ultrasound has changed where imaging happens. A probe connected to a tablet or phone can be carried to any bedside, which removes the delay between forming a question and answering it. That capability is genuine, and it is also frequently over-extended: handheld systems are sometimes purchased as replacements for departmental systems rather than as additions to them.",
      "The right comparison is not handheld against cart-based in the abstract. It is which system suits a defined role — focused bedside answers versus complete, reportable diagnostic studies. Once the role is stated, most of the specification follows, and so does the answer.",
      "This guide compares the two on capability, workflow, governance and lifetime cost, and sets out a framework for choosing between them or deploying both.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Role-based framing, capability and workflow comparison, strengths of each format, hidden costs and governance risks, decision framework and combined deployment",
    audience:
      "Clinical department leads, radiology managers, emergency and critical care clinicians, biomedical engineering and procurement teams",
    readingTime: "13 min read",
    technology: "Ultrasound Systems",
  },
  {
    type: "h2",
    id: "framing",
    text: "The Decision Is About Role, Not Size",
    number: 1,
    body: "Define what the system must produce before comparing formats.",
  },
  {
    type: "p",
    text: "A focused bedside examination answers a narrow question and is used immediately. A formal diagnostic study surveys a region, generates measurements, and produces a report that others rely on. These are different products of the same technology, with different requirements for probe range, measurement calibration, archiving and operator training. Choosing a format before naming the product is the source of most disappointment.",
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Write the role down first",
    text: "If the intended output is a reported diagnostic study that other clinicians will act on without repeating, the requirement points to a cart-based system. If it is an immediate answer to a defined question by the treating clinician, handheld is a reasonable candidate.",
  },
  {
    type: "h2",
    id: "comparison",
    text: "Direct Comparison",
    number: 2,
    body: "Where the two formats genuinely differ.",
  },
  {
    type: "table",
    headers: ["Dimension", "Handheld", "Cart-based"],
    rows: [
      ["Availability", "Carried on the person; always to hand", "Must be moved to the patient or the patient to it"],
      ["Probe options", "Limited; often one probe per device", "Multiple probes, hot-swapped during a study"],
      ["Penetration and difficult patients", "Adequate for many focused questions; limited in large habitus", "Substantially stronger, particularly deep abdominal work"],
      ["Doppler capability", "Basic to moderate; varies widely", "Full colour, power, pulsed and continuous-wave options"],
      ["Measurement and calculation packages", "Limited", "Comprehensive, specialty specific"],
      ["Ergonomics for long studies", "Poor: small screen, hand-held display", "Designed for repeated full-length examinations"],
      ["Archiving and reporting", "App and network dependent; often needs configuration", "Native DICOM worklist, store and structured reporting"],
      ["Battery and endurance", "Session limited; charging discipline needed", "Mains with battery transfer capability"],
      ["Capital cost", "Low", "Moderate to high"],
      ["Governance exposure", "Higher: distributed devices, informal use", "Lower: managed in a department with protocols"],
    ],
  },
  {
    type: "h2",
    id: "handheld",
    text: "Where Handheld Systems Win",
    number: 3,
    body: "Situations where availability outweighs capability.",
  },
  {
    type: "ul",
    items: [
      "Procedural guidance: vascular access, drainage and nerve blocks at the bedside.",
      "Focused emergency and critical-care questions that change immediate management.",
      "Rapid triage and repeated reassessment where the same question is asked over minutes to hours.",
      "Ward rounds, remote or outreach clinics, and prehospital or transfer environments.",
      "Teaching anatomy and probe handling at scale, where cart availability is the limiting factor.",
      "Bridging a gap while a departmental system is out of service, within a stated scope.",
    ],
  },
  {
    type: "h2",
    id: "cart",
    text: "Where Cart-Based Systems Are Required",
    number: 4,
    body: "Work that depends on probe range, calibrated measurement and reporting.",
  },
  {
    type: "ul",
    items: [
      "Complete departmental studies that produce a report others will rely on.",
      "Vascular duplex requiring angle-corrected velocities and consistent stenosis criteria.",
      "Obstetric and gynaecological studies with biometry and growth calculations.",
      "Cardiac studies requiring phased-array imaging and full quantification packages.",
      "Difficult body habitus or deep abdominal imaging where penetration decides diagnostic yield.",
      "High-volume lists where ergonomics and workflow speed determine throughput.",
      "Any examination where regulatory or accreditation requirements specify calibrated measurement and archiving.",
    ],
  },
  {
    type: "h2",
    id: "hidden",
    text: "Costs and Risks That Are Easy to Miss",
    number: 5,
    body: "Distributed devices create obligations a single cart does not.",
  },
  {
    type: "table",
    headers: ["Area", "Handheld consideration", "Cart-based consideration"],
    rows: [
      ["Fleet management", "Many devices to inventory, track and locate", "Single asset, easy to account for"],
      ["Archiving", "Requires deliberate network and app configuration per device", "Native DICOM path once configured"],
      ["Cybersecurity", "Mobile devices, app updates, account control", "Managed endpoint within the department"],
      ["Infection control", "Cleaning between uses across many users", "Protocolised in a controlled environment"],
      ["Probe damage", "Carried in pockets and bags; loss and drops", "Damage occurs but within a managed area"],
      ["Subscription and licences", "Recurring software or cloud fees are common", "Usually capital plus service contract"],
      ["Documentation", "Risk of examinations that are never recorded", "Study is archived as part of workflow"],
      ["Scope creep", "Focused devices used for de facto diagnostic studies", "Scope defined by department protocol"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "The largest handheld risk is documentation, not image quality",
    text: "Undocumented bedside examinations that influence decisions leave no record of what was seen or of the study's stated limitations. Any handheld deployment needs an archiving route and a documentation rule agreed before devices are distributed.",
  },
  {
    type: "h2",
    id: "decision",
    text: "A Decision Framework",
    number: 6,
    body: "Five questions that usually settle the format.",
  },
  {
    type: "ul",
    items: [
      "Will the output be a reported diagnostic study? If yes, cart-based.",
      "Does the workload need more than one probe type within a single examination? If yes, cart-based.",
      "Are angle-corrected velocities, biometry or cardiac quantification required? If yes, cart-based.",
      "Is the binding constraint availability at the bedside within minutes? If yes, handheld is a strong candidate.",
      "Is there an agreed scope, credentialing route and archiving path for distributed devices? If not, resolve this before purchasing handheld units.",
    ],
  },
  {
    type: "h2",
    id: "combination",
    text: "Using Both Together",
    number: 7,
    body: "In most hospitals the formats are complements, not alternatives.",
  },
  {
    type: "p",
    text: "The common mature pattern is a cart-based system per diagnostic area sized to its casemix, plus handheld devices allocated to teams that need immediate focused answers. The combination works when the boundary is explicit: which questions handheld devices may answer, when a formal study must be requested, how findings are documented, and who maintains and reprocesses the devices. Written boundaries also protect the departmental service from absorbing repeat studies generated by inconclusive bedside examinations.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Can handheld ultrasound replace a departmental system?",
        a: "Not for reported diagnostic work. It lacks the probe range, measurement packages, ergonomics and reporting integration that formal studies require. It substitutes for the delay in reaching a bedside, not for the departmental study itself.",
      },
      {
        q: "Is image quality on modern handheld devices comparable?",
        a: "For superficial and moderately deep focused questions, contemporary devices can be entirely adequate. Differences appear in difficult body habitus, deep abdominal imaging and sensitive low-flow Doppler, which are precisely the situations where diagnostic confidence matters most.",
      },
      {
        q: "How should handheld devices be maintained?",
        a: "Enter them in the asset inventory, assign ownership to a named team, define cleaning and charging routines, include app and operating-system updates in the cybersecurity process, and budget for probe replacement — handheld probes are exposed to more physical risk than cart probes.",
      },
      {
        q: "What is the biggest procurement mistake with this decision?",
        a: "Buying handheld devices from a capital budget intended to replace an ageing departmental system. The result is broad availability of focused imaging alongside deteriorating capability for the studies the hospital is accountable for reporting.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "Match the format to the product the clinician needs to deliver.",
  },
  {
    type: "p",
    text: "Handheld ultrasound removes distance and delay; cart-based ultrasound delivers complete, measurable, reportable studies. Departments that state the intended output first — focused answer or formal report — choose correctly and are rarely disappointed. Where both roles exist, deploy both, but publish the boundary between them together with the documentation and archiving rules that make distributed imaging defensible.",
  },
  {
    type: "articleCta",
    heading: "Deciding between portable and departmental ultrasound?",
    subheading:
      "AbuFarha Medical Supplies supplies handheld, portable and cart-based ultrasound systems with probe sets, training and biomedical service support.",
    technology: "Ultrasound Systems",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Practice and governance",
        items: [
          { label: "World Federation for Ultrasound in Medicine and Biology — practice statements", url: "https://wfumb.info/" },
          { label: "World Health Organization — medical device management", url: "https://www.who.int/" },
        ],
      },
      {
        title: "Standards and interoperability",
        items: [
          { label: "International Electrotechnical Commission — ultrasonic equipment standards", url: "https://www.iec.ch/" },
          { label: "DICOM Standard — imaging interoperability", url: "https://www.dicomstandard.org/" },
        ],
      },
    ],
    note: "Device capabilities vary substantially between models and generations; confirm performance against the intended examination list before procurement.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Diagnostic and point-of-care ultrasound" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Ultrasound systems and fleet management" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Comparative practice synthesis",
    disclaimer:
      "Educational guidance for equipment planning. It does not replace local clinical governance, credentialing or regulatory requirements.",
  },
];
