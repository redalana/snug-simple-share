/**
 * Single-plane vs bi-plane angiography systems — Cath Lab cluster (comparison).
 */

import type { ContentBlock, TocItem } from "../blog";

export const SINGLE_VS_BIPLANE_TOC: TocItem[] = [
  { id: "overview", title: "The Decision in One Paragraph" },
  { id: "what-differs", title: "What Physically Differs" },
  { id: "clinical-case", title: "Where Bi-Plane Changes Clinical Outcomes" },
  { id: "single-plane-case", title: "Where Single-Plane Is the Correct Choice" },
  { id: "comparison", title: "Side-by-Side Comparison" },
  { id: "room", title: "Room, Power and Structural Consequences" },
  { id: "cost", title: "Cost Difference Over Ten Years" },
  { id: "staffing", title: "Staffing and Training Implications" },
  { id: "decision", title: "A Decision Framework" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const SINGLE_VS_BIPLANE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Single-plane and bi-plane angiography systems answer different clinical questions. A single-plane system carries one C-arm and one detector; a bi-plane system adds a second, independently positioned C-arm so that two projections of the same anatomy are acquired from a single contrast injection.",
      "That single architectural difference propagates into room size, structural loading, power, capital cost, service cost, staffing and case mix. Hospitals that choose bi-plane for prestige rather than for a neuro-interventional or paediatric programme pay for capability they never bill, while hospitals that choose single-plane for a neuro programme force operators into repeat injections that raise dose and contrast load.",
      "This guide sets out where each configuration is clinically correct, what the true ten-year cost difference looks like, and how to defend the decision in a tender document.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Architecture, clinical indications, room and structural consequences, capital and lifecycle cost, staffing, decision framework",
    audience:
      "Interventional cardiologists, neuro-interventionalists, biomedical engineers, hospital planners and procurement committees",
    readingTime: "13 min read",
    technology: "Angiography / Cath Lab Systems",
  },
  {
    type: "h2",
    id: "what-differs",
    text: "What Physically Differs",
    number: 1,
    body: "A bi-plane suite is not two single-plane labs in one room. The two planes share one generator concept, one table, one injector interface and one acquisition workstation, and they are geometrically calibrated to each other so that a point identified in one plane can be located in the other.",
  },
  {
    type: "ul",
    items: [
      "Frontal plane: usually a floor- or ceiling-mounted C-arm carrying the primary flat-panel detector, used as it would be in a single-plane lab.",
      "Lateral plane: a second C-arm, typically ceiling-suspended on a longitudinal rail so it can be parked clear of the table when not in use.",
      "Shared table: a floating or robotic table with the travel range to serve both planes without repositioning the patient.",
      "Dual acquisition chain: two generators or one high-capacity generator with dual outputs, two detector chains and synchronised pulsed fluoroscopy to avoid cross-scatter.",
      "Single control point: one operator console displaying both planes, plus a shared large-format in-room display wall.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Cross-scatter is the reason bi-plane costs more than two detectors",
    text: "When both planes expose simultaneously, radiation from one plane reaches the other detector as scatter, degrading contrast. Bi-plane systems interleave the pulses of the two planes in time so that each detector only integrates its own beam. That synchronisation is a large part of the price premium and it is also why third-party detector substitution on a bi-plane system is rarely viable.",
  },
  {
    type: "h2",
    id: "clinical-case",
    text: "Where Bi-Plane Changes Clinical Outcomes",
    number: 2,
    body: "Bi-plane earns its cost wherever the anatomy is three-dimensional, the vessel is small, and every millilitre of contrast or every second of procedure time carries risk.",
  },
  {
    type: "ul",
    items: [
      "Neuro-intervention: aneurysm coiling, flow-diverter placement and arteriovenous malformation embolisation require simultaneous frontal and lateral views to confirm coil position and parent-vessel patency. This is the strongest indication.",
      "Paediatric and congenital cardiology: a small patient with complex anatomy cannot tolerate repeated contrast loads; two projections per injection roughly halves contrast volume for the same information.",
      "Complex structural heart work: some centres value bi-plane for transcatheter valve and septal work, though many perform these successfully single-plane with echocardiographic fusion.",
      "Peripheral embolisation in tortuous anatomy, where losing the wire tip in a single projection costs time and dose.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "The contrast argument is the quantitative one",
    text: "In procedures where diagnostic certainty requires two orthogonal projections, single-plane acquisition needs two injections. Bi-plane needs one. For a paediatric or renally impaired patient this is not a convenience — it is the difference between completing the case and staging it.",
  },
  {
    type: "h2",
    id: "single-plane-case",
    text: "Where Single-Plane Is the Correct Choice",
    number: 3,
    body: "For the overwhelming majority of adult coronary work, single-plane is not a compromise. Diagnostic coronary angiography and percutaneous coronary intervention are performed single-plane in most high-volume centres worldwide.",
  },
  {
    type: "ul",
    items: [
      "Adult diagnostic coronary angiography and PCI, including primary PCI for ST-elevation myocardial infarction.",
      "Peripheral arterial and venous intervention in adults.",
      "Interventional radiology: biliary, urological, oncological embolisation and port placement.",
      "Any first cath lab in a hospital building an interventional service from zero, where breadth of access matters more than depth of capability.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Two single-plane rooms usually beat one bi-plane room",
    items: [
      "Capacity: two rooms can run two cases at once. A bi-plane room runs one.",
      "Resilience: if one room is down, the service continues. A single bi-plane room down means transfer.",
      "Cost: two well-specified single-plane labs are frequently comparable in capital cost to one premium bi-plane suite.",
      "Exception: if the clinical mandate is neuro-intervention, capacity arguments do not substitute for the missing lateral plane.",
    ],
  },
  {
    type: "comparison",
    title: "Single-Plane vs Bi-Plane: the practical differences",
    headers: ["Dimension", "Single-plane", "Bi-plane"],
    rows: [
      ["Projections per injection", "One", "Two (orthogonal)"],
      ["Primary indication", "Adult coronary, peripheral, IR", "Neuro-intervention, paediatric/congenital"],
      ["Typical procedure room area", "Smaller footprint", "Larger footprint — lateral plane needs park space"],
      ["Ceiling and structural demand", "Moderate", "High — second suspended C-arm and rail"],
      ["Contrast per diagnostic sequence", "Higher in 3D anatomy", "Lower in 3D anatomy"],
      ["Capital cost", "Lower", "Substantially higher"],
      ["Annual service cost", "Lower", "Higher — two acquisition chains, two tubes"],
      ["Staffing", "Standard team", "Standard team plus deeper operator training"],
      ["Resilience of the service", "Easier to duplicate", "Single point of failure if it is the only room"],
    ],
    caption:
      "Configuration comparison. Read it as a clinical-mandate decision, not a quality ranking — a bi-plane system is not a better single-plane system.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The most common procurement error is treating bi-plane as the premium tier of the same product. It is a different instrument for a different case mix, and its cost premium is only recovered by a case mix that needs two simultaneous projections.",
    clinicalInterpretation:
      "If your planned annual neuro-interventional and paediatric-congenital volume is close to zero, bi-plane adds dose-management complexity and service cost without changing a single clinical decision.",
    hospitalRecommendation:
      "Write the configuration decision into the clinical service plan before the tender. State the projected annual volume of procedures that require orthogonal simultaneous imaging; let that number, not vendor positioning, select the configuration.",
  },
  {
    type: "h2",
    id: "room",
    text: "Room, Power and Structural Consequences",
    number: 4,
    body: "The lateral plane is the constraint that surprises project teams. It needs ceiling structure, a longitudinal park position, and clearance that does not conflict with the surgical lighting, the anaesthesia pendant or the monitor suspension.",
  },
  {
    type: "requirements",
    checklist: [
      "Confirm the slab can carry the second suspended C-arm plus its rail with the vendor's stated dynamic load factor.",
      "Model the lateral plane's park position against anaesthesia access at the patient's head.",
      "Verify the ceiling grid does not collide with monitor suspension or surgical lights across the full travel range.",
      "Size the electrical supply for simultaneous dual-plane acquisition, not for one plane.",
      "Recalculate room shielding: two beam directions change the primary and secondary barrier calculation.",
      "Confirm cooling capacity for two acquisition chains and the additional in-room heat load.",
    ],
    specs: {
      title: "Planning deltas versus a single-plane room",
      rows: [
        { label: "Procedure room area", value: "Larger — allow for lateral plane park space" },
        { label: "Ceiling structure", value: "Second suspension rail with dynamic loading" },
        { label: "Electrical supply", value: "Sized for dual-plane simultaneous acquisition" },
        { label: "Shielding calculation", value: "Two primary beam directions modelled" },
        { label: "HVAC", value: "Higher in-room and technical-room heat load" },
        { label: "Delivery route", value: "Second C-arm and rail must reach the room intact" },
      ],
    },
  },
  {
    type: "h2",
    id: "cost",
    text: "Cost Difference Over Ten Years",
    number: 5,
    body: "Capital price is the smaller half of the difference. A bi-plane system carries two X-ray tubes, two detector chains and a more complex service contract, so the annual cost of ownership diverges every year of the life of the system.",
  },
  {
    type: "ul",
    items: [
      "Capital: the bi-plane premium is significant and varies by vendor tier and configuration; treat vendor quotations as the only reliable figure.",
      "Service contract: expect a materially higher annual figure, driven by two acquisition chains and a second tube in the coverage scope.",
      "Consumable tubes: two tubes age independently. A high-volume programme should budget for both across a ten-year life.",
      "Infrastructure: the room, ceiling structure and shielding delta is a one-off capital cost that is easy to omit from the equipment budget.",
      "Revenue: only a case mix requiring orthogonal projections converts the premium into billable capability.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Mistakes we see in cath lab configuration decisions",
    items: [
      "Specifying bi-plane in a tender without a neuro or paediatric service plan behind it.",
      "Budgeting the bi-plane capital cost but not the room, ceiling and shielding delta.",
      "Assuming the service contract scales linearly from the single-plane quotation.",
      "Choosing one bi-plane room over two single-plane rooms in a hospital whose real constraint is throughput.",
      "Buying single-plane for a committed neuro-interventional programme and expecting rotational angiography to substitute for a lateral plane.",
    ],
  },
  {
    type: "h2",
    id: "staffing",
    text: "Staffing and Training Implications",
    number: 6,
    body: "A bi-plane suite does not require more staff in the room, but it does require deeper competency. Two planes mean two dose contributions, two collimation decisions and two positioning tasks under time pressure.",
  },
  {
    type: "ul",
    items: [
      "Operator training must cover dual-plane dose management, not only positioning; a poorly collimated lateral plane is a large and invisible dose contributor.",
      "Radiographers need competence in the geometric calibration workflow and in recognising when the two planes have drifted out of registration.",
      "Biomedical staff must maintain quality-assurance records per plane, because the two chains degrade independently.",
      "Radiation protection supervision should review dual-plane protocols separately from single-plane protocols.",
    ],
  },
  {
    type: "h2",
    id: "decision",
    text: "A Decision Framework",
    number: 7,
    body: "Answer these five questions in order. The first affirmative answer at questions one or two selects bi-plane; otherwise single-plane is correct.",
  },
  {
    type: "ul",
    items: [
      "1. Will the hospital run a neuro-interventional service with an interventional neuroradiologist on staff? If yes, specify bi-plane.",
      "2. Will the hospital perform paediatric or congenital cardiac intervention as a routine service? If yes, specify bi-plane.",
      "3. Is the binding constraint on the interventional service throughput or resilience rather than case complexity? If yes, specify two single-plane rooms.",
      "4. Is this the hospital's first interventional room? If yes, specify single-plane and design the room so a future bi-plane upgrade or second room is not structurally excluded.",
      "5. Can the hospital fund the higher annual service contract for ten years without displacing maintenance elsewhere? If no, specify single-plane.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Our standing recommendation",
    text: "Design every new cath lab shell so that a lateral plane could be added later — ceiling structure, electrical capacity and shielding headroom — even when the first system installed is single-plane. The structural provision is inexpensive at construction and prohibitively expensive as a retrofit.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is a bi-plane system better than a single-plane system?",
        a: "No. It is a different configuration for a different case mix. For adult coronary intervention a modern single-plane system delivers equivalent clinical performance, and a bi-plane system adds cost, room complexity and dose-management burden without changing clinical decisions.",
      },
      {
        q: "Can a single-plane system be upgraded to bi-plane later?",
        a: "Sometimes, but only if the room was designed for it. The lateral plane needs ceiling structure, a rail, electrical capacity and a revised shielding calculation. Where those were not provided at construction, the upgrade becomes a room rebuild rather than an equipment addition.",
      },
      {
        q: "Does bi-plane increase patient radiation dose?",
        a: "It can, because two beams contribute. Well-managed bi-plane practice frequently reduces total dose for complex three-dimensional work, because it eliminates repeat acquisitions. The determining factor is protocol discipline and collimation, not the configuration itself.",
      },
      {
        q: "Does bi-plane reduce contrast volume?",
        a: "For anatomy that requires two orthogonal projections, yes — one injection produces both views. For routine adult coronary work, where a single projection answers the question, there is no contrast benefit.",
      },
      {
        q: "How much more does a bi-plane service contract cost?",
        a: "Materially more, because the contract covers two acquisition chains and two X-ray tubes. Ask each vendor to quote both configurations on the same coverage terms so the delta is visible rather than inferred.",
      },
      {
        q: "Can rotational angiography or 3D reconstruction replace a lateral plane?",
        a: "It complements but does not replace it. Rotational acquisition produces a volume from a sweep, which is valuable for roadmapping, but it does not give the operator two live orthogonal projections during device deployment.",
      },
      {
        q: "Is bi-plane required for structural heart procedures?",
        a: "Not generally. Many high-volume structural heart programmes operate single-plane with transoesophageal echocardiography and fusion imaging. Some centres prefer bi-plane; it is a preference rather than a requirement.",
      },
      {
        q: "How much larger does the room need to be?",
        a: "There is no single figure — it depends on the vendor's lateral plane geometry and park position. Obtain the manufacturer's room-planning drawings for the exact model before the architect fixes the room, and verify anaesthesia access at the head of the table.",
      },
      {
        q: "What happens to the service if the only bi-plane room goes down?",
        a: "The service stops unless there is a second room or a transfer agreement. This is the strongest argument for two single-plane rooms in hospitals whose case mix does not require dual-plane imaging.",
      },
      {
        q: "Which configuration suits a refurbished purchase?",
        a: "Single-plane refurbished systems are widely available and well supported. Refurbished bi-plane suites exist but the market is thinner, the geometric calibration is more demanding to re-establish, and parts availability for both planes must be confirmed before purchase.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Bi-plane is a clinical-mandate decision driven by neuro-interventional and paediatric-congenital volume — not a premium tier.",
      "For adult coronary and peripheral intervention, single-plane is the correct and sufficient configuration.",
      "Two single-plane rooms usually beat one bi-plane room when throughput and resilience are the binding constraints.",
      "The room, ceiling structure and shielding delta is a real capital cost that belongs in the equipment business case.",
      "Design every cath lab shell so a lateral plane remains possible; retrofitting structure is far more expensive than providing it.",
    ],
  },
  {
    type: "editorialBoard",
    reviewers: [
      {
        role: "Clinical review",
        name: "AbuFarha Clinical Advisory Panel",
        credential: "Interventional cardiology and radiology practice review",
      },
      {
        role: "Engineering review",
        name: "AbuFarha Biomedical Engineering Team",
        credential: "Angiography installation and lifecycle service",
      },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Vendor technical documentation, installation experience and published interventional practice",
    disclaimer:
      "This article is written for hospital planning and procurement. It is not clinical guidance for individual patient care and does not replace the manufacturer's technical documentation for a specific system.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Radiation protection and dose management",
        items: [
          { label: "International Atomic Energy Agency — radiation protection in interventional procedures" },
          { label: "International Commission on Radiological Protection — interventional fluoroscopy guidance" },
        ],
      },
      {
        title: "Interventional practice",
        items: [
          { label: "Society for Cardiovascular Angiography and Interventions — cath lab standards" },
          { label: "Society of NeuroInterventional Surgery — practice standards for neuro-interventional suites" },
        ],
      },
      {
        title: "Technical documentation",
        items: [{ label: "Manufacturer room-planning and pre-installation manuals for the specific system model" }],
      },
    ],
    note: "Always plan against the manufacturer's documentation for the exact configuration being purchased.",
  },
  {
    type: "articleCta",
    heading: "Deciding between single-plane and bi-plane?",
    subheading:
      "Send us your projected case mix and room drawings. We will model both configurations, including infrastructure and ten-year service cost, before you write the tender.",
    technology: "Cath Lab Systems",
  },
];
