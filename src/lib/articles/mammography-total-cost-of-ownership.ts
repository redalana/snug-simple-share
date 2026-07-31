/**
 * Mammography total cost of ownership — Mammography cluster (cost).
 */

import type { ContentBlock, TocItem } from "../blog";

export const MAMMO_TCO_TOC: TocItem[] = [
  { id: "overview", title: "Why Purchase Price Misleads" },
  { id: "structure", title: "The Cost Structure" },
  { id: "capital", title: "Capital and Project Costs" },
  { id: "recurring", title: "Recurring Operating Costs" },
  { id: "tomo", title: "The Cost of Adding Tomosynthesis" },
  { id: "biopsy", title: "Interventional Capability Costs" },
  { id: "utilisation", title: "Utilisation and Cost Per Examination" },
  { id: "model", title: "Building the Ten-Year Model" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MAMMO_TCO_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Mammography systems are among the least expensive imaging installations to buy and among the easiest to under-budget. The unit itself is a modest capital item compared with computed tomography or magnetic resonance. What surprises finance teams is everything attached to it: reading workstations, archive growth, accessories, quality-control time, and — if tomosynthesis is included — a substantial and permanent increase in reading workload and data storage.",
      "A total cost of ownership model exists to make those consequences visible at the point of decision rather than at the first budget review after go-live. It also settles arguments that specification documents cannot: whether tomosynthesis is affordable for this service, whether a second unit is cheaper than extended sessions, and whether the biopsy capability is being funded or merely assumed.",
      "This guide sets out the cost structure over a realistic ten-year horizon and the method for building a model that survives scrutiny.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Cost structure over ten years, capital and project costs, recurring operating costs, the incremental cost of tomosynthesis, interventional capability costs, utilisation effects and a modelling method",
    audience:
      "Procurement and finance teams, radiology and breast service managers, hospital planners, biomedical engineering leadership",
    readingTime: "14 min read",
    technology: "Mammography Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Why Purchase Price Misleads",
    number: 1,
    body: "The purchase price is the smallest reliably known number in the decision.",
  },
  {
    type: "ul",
    items: [
      "The unit price excludes the room works, shielding design, displays and archive expansion the service actually needs.",
      "Reading time is the dominant recurring cost in a screening service and it is a staffing cost, not an equipment cost.",
      "Consumables and wear parts — paddles, face shields, detector recalibration — are predictable and frequently unbudgeted.",
      "Archive growth is permanent and compounds; tomosynthesis multiplies it.",
      "Quality control consumes staff time every working day for the life of the system.",
      "Interventional capability requires accessories, training and additional room time that are often excluded from the original business case.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Compare offers on the same scope",
    text: "Two quotations for a mammography system are rarely for the same thing. Normalise them for accessories, displays, workstation licences, service term and training days before comparing a single figure.",
  },
  {
    type: "h2",
    id: "structure",
    text: "The Cost Structure",
    number: 2,
    body: "Group costs by behaviour, because they respond differently to volume.",
  },
  {
    type: "table",
    headers: ["Category", "Behaviour", "Examples"],
    rows: [
      ["One-off capital", "Fixed at purchase", "Unit, detector, workstation, displays, accessories"],
      ["Project costs", "Fixed, site-specific", "Room works, shielding design and survey, electrical, network"],
      ["Fixed recurring", "Annual regardless of volume", "Service contract, physics testing, software subscriptions"],
      ["Volume-linked recurring", "Rises with examinations", "Reading time, consumables, archive growth, tube wear"],
      ["Step costs", "Jump at capacity thresholds", "Second workstation, additional unit, extended sessions"],
      ["End-of-life", "Late in the horizon", "Detector or tube replacement, decommissioning, replacement planning"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "In screening services the largest ten-year cost is almost never the equipment. It is professional reading time, followed by the archive and then the service contract.",
    clinicalInterpretation:
      "Because reading capacity dominates, a technology choice that increases reading time per case has a bigger financial consequence than a materially higher purchase price.",
    hospitalRecommendation:
      "Model reading capacity explicitly alongside equipment cost. If the reading workforce cannot absorb the additional time, the technology decision must change or the workforce plan must be funded.",
  },
  {
    type: "h2",
    id: "capital",
    text: "Capital and Project Costs",
    number: 3,
    body: "Everything needed to reach the first clinical examination.",
  },
  {
    type: "ul",
    items: [
      "Mammography unit with detector and generator, in the configuration actually required.",
      "Acquisition workstation and reporting workstation with diagnostic-specification displays.",
      "Full accessory set: paddles across the required sizes, face shields, magnification and specimen accessories where used.",
      "Room works: builder's work, operator screen, doors and finishes.",
      "Shielding design by a qualified expert and post-installation survey.",
      "Electrical works including dedicated circuit and earthing verification.",
      "Network provisioning and archive capacity expansion.",
      "Delivery, rigging, installation and physics acceptance testing.",
      "Applications training for radiographers and reporting staff, and biomedical familiarisation.",
      "Contingency for site conditions discovered during the works.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Costs most often omitted at business-case stage",
    items: [
      "Diagnostic reporting displays and their calibration hardware.",
      "Archive expansion for the full retention period.",
      "Physics acceptance testing and the annual physics programme.",
      "The second and third paddle sizes needed for real casemix.",
      "Training backfill — the staff time to attend training, not just the trainer's fee.",
      "Tomosynthesis-guided biopsy accessories where tomosynthesis is purchased.",
    ],
  },
  {
    type: "h2",
    id: "recurring",
    text: "Recurring Operating Costs",
    number: 4,
    body: "The costs that determine whether the service is sustainable.",
  },
  {
    type: "table",
    headers: ["Item", "Driver", "Planning note"],
    rows: [
      ["Service contract", "Coverage level and response time", "Compare inclusions: detector, tube, software, uptime commitment"],
      ["Radiographer time", "Examinations per session", "Includes positioning, quality control and patient management"],
      ["Reading time", "Examinations and technique", "The dominant cost; increases substantially with tomosynthesis"],
      ["Medical physics", "Regulatory and protocol requirement", "Annual programme plus post-repair testing"],
      ["Consumables and wear parts", "Volume and handling", "Paddles and face shields are consumables, not capital"],
      ["Detector recalibration", "Manufacturer schedule", "Confirm whether included in the contract"],
      ["X-ray tube", "Cumulative exposures", "Plan a replacement point within the ten-year horizon"],
      ["Archive and storage", "Data volume per examination", "Permanent, compounding cost across the retention period"],
      ["Software licences and updates", "Vendor model", "Check whether reading software is subscription-based"],
      ["Quality-control time", "Daily and weekly programme", "Real staff cost every working day"],
    ],
  },
  {
    type: "h2",
    id: "tomo",
    text: "The Cost of Adding Tomosynthesis",
    number: 5,
    body: "The capital increment is the smaller half of the decision.",
  },
  {
    type: "ul",
    items: [
      "Capital increment for the tomosynthesis capability and the associated licences.",
      "Substantially higher data volume per examination, driving network and archive costs for the full retention period.",
      "Higher workstation specification to read reconstructed volumes at acceptable speed.",
      "A material increase in reading time per case, repeated for every examination for the life of the service.",
      "Additional quality-control tests covering reconstruction performance.",
      "Tomosynthesis-guided biopsy capability, without which findings visible only on tomosynthesis cannot be sampled.",
      "Additional training for radiographers and reporting staff.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Fund the whole pathway or do not buy the capability",
    text: "Purchasing tomosynthesis without guided biopsy capability and without additional reading capacity creates findings the service cannot resolve. The correct decision is either to fund the whole pathway or to defer the capability.",
  },
  {
    type: "h2",
    id: "biopsy",
    text: "Interventional Capability Costs",
    number: 6,
    body: "Interventional breast services have their own cost base.",
  },
  {
    type: "table",
    headers: ["Element", "Cost type", "Note"],
    rows: [
      ["Stereotactic or tomosynthesis-guided biopsy accessory", "Capital", "Verify compatibility with the purchased unit"],
      ["Biopsy devices and needles", "Consumable", "Per-procedure cost driven by casemix"],
      ["Specimen radiography capability", "Capital or shared", "Needed to confirm sampling"],
      ["Room and staff time", "Recurring", "Procedures occupy substantially more room time than screening"],
      ["Training and competency maintenance", "Recurring", "Applies to radiologists and assisting staff"],
      ["Pathology interface", "Operational", "Turnaround affects pathway performance, not equipment cost"],
    ],
  },
  {
    type: "h2",
    id: "utilisation",
    text: "Utilisation and Cost Per Examination",
    number: 7,
    body: "Fixed costs dominate at low volume; staffing dominates at high volume.",
  },
  {
    type: "ul",
    items: [
      "At low utilisation, service contract and physics costs per examination are high and the unit looks expensive.",
      "As volume rises, fixed costs dilute rapidly and reading and radiographer time become the dominant components.",
      "Cost per examination therefore falls steeply at first and then flattens.",
      "Beyond a threshold, additional volume requires step investment — extended sessions, a second workstation, or a second unit.",
      "The cheapest configuration is usually the one that matches capacity to demand without crossing a step threshold unnecessarily.",
      "Model at least three volume scenarios so the step points are visible before purchase.",
    ],
  },
  {
    type: "h2",
    id: "model",
    text: "Building the Ten-Year Model",
    number: 8,
    body: "A defensible model is transparent about assumptions rather than precise about numbers.",
  },
  {
    type: "table",
    headers: ["Step", "Action", "Output"],
    rows: [
      ["1", "Define annual examination volume and casemix, including interventional work", "Demand baseline"],
      ["2", "Cost the full capital and project scope, including displays and archive", "Year-zero cost"],
      ["3", "List fixed recurring costs by year", "Annual fixed line"],
      ["4", "Model volume-linked costs, including reading time", "Annual variable line"],
      ["5", "Place wear-part and tube replacement points in the horizon", "Lumpy cost events"],
      ["6", "Add archive growth cumulatively across the retention period", "Compounding storage line"],
      ["7", "Identify step thresholds and their trigger volumes", "Capacity risk map"],
      ["8", "Run low, expected and high volume scenarios", "Cost per examination range"],
      ["9", "Document every assumption with its source", "Auditable business case"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "State assumptions, not certainties",
    text: "A ten-year model is a decision tool, not a forecast. Its value comes from making assumptions explicit and testable, so that when volume or workforce changes the model can be re-run rather than rebuilt.",
  },
  {
    type: "faq",
    items: [
      {
        q: "What is the largest ten-year cost of a mammography service?",
        a: "In a screening service it is normally professional reading time, followed by data storage across the retention period and the service contract. The equipment purchase price is typically a smaller share of the total than most business cases assume.",
      },
      {
        q: "Why does tomosynthesis cost more than the price difference suggests?",
        a: "Because the capital increment is accompanied by permanent recurring costs: larger data volumes for the whole retention period, higher workstation requirements, additional quality-control tests, and a significant increase in reading time on every examination.",
      },
      {
        q: "Should storage be treated as a capital or recurring cost?",
        a: "Recurring and compounding. Each year's examinations add to an archive that must be retained for the full statutory period, so storage cost accumulates rather than resetting. Model it cumulatively, not as a single year-zero purchase.",
      },
      {
        q: "Is a second unit cheaper than extending sessions?",
        a: "It depends on where the demand sits relative to the step thresholds. Extended sessions add staffing cost without capital; a second unit adds capital and a second fixed cost base but relieves capacity permanently. Model both against your expected volume before deciding.",
      },
      {
        q: "How should service contracts be compared?",
        a: "By inclusions rather than headline price. Confirm whether detector and tube are covered, what response and uptime commitments apply, whether software updates and detector recalibration are included, and what the escalation route is. A cheaper contract that excludes the detector is not cheaper.",
      },
      {
        q: "What horizon should be used?",
        a: "Ten years is a reasonable default because it captures at least one major wear-part event and a realistic archive accumulation. Shorter horizons systematically flatter the decision by excluding the costs that arrive late.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "The equipment decision and the workforce decision are the same decision.",
  },
  {
    type: "p",
    text: "A mammography business case that considers only the unit price will be wrong in a predictable direction. Cost the whole scope needed to reach the first examination, model the recurring costs that scale with volume — reading time above all — place the wear-part events inside the horizon, and accumulate archive growth rather than treating it as a one-off. Then test the model at low, expected and high volume so the capacity step points are visible before the order is placed rather than after.",
  },
  {
    type: "articleCta",
    heading: "Building a mammography business case?",
    subheading:
      "AbuFarha Medical Supplies can support scope definition, configuration comparison, service planning and lifecycle cost input for mammography projects.",
    technology: "Mammography Systems",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Health technology assessment and planning",
        items: [
          { label: "World Health Organization — medical device technical series", url: "https://www.who.int/" },
          { label: "World Health Organization — health technology assessment resources", url: "https://www.who.int/" },
        ],
      },
      {
        title: "Quality and regulatory context",
        items: [
          { label: "International Atomic Energy Agency — quality assurance programmes", url: "https://www.iaea.org/" },
          { label: "International Electrotechnical Commission — mammographic equipment standards", url: "https://www.iec.ch/" },
        ],
      },
    ],
    note: "No prices are quoted here. Costs are structural categories to be populated with local, quoted figures.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Commercial review", name: "AbuFarha Procurement Advisory", credential: "Capital equipment planning" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lifecycle and service planning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Planning framework and service practice",
    disclaimer:
      "This article provides a cost framework only. It contains no price estimates and does not constitute financial advice.",
  },
];
