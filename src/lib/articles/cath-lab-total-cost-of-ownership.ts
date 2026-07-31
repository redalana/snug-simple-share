/**
 * Cath lab total cost of ownership — Cath Lab cluster (cost / procurement).
 */

import type { ContentBlock, TocItem } from "../blog";

export const CATH_LAB_TCO_TOC: TocItem[] = [
  { id: "overview", title: "Why the Purchase Price Misleads" },
  { id: "structure", title: "The Five Cost Categories" },
  { id: "capital", title: "Capital: System and Configuration" },
  { id: "infrastructure", title: "Infrastructure and Construction" },
  { id: "service", title: "Service Contracts and Tube Replacement" },
  { id: "consumables", title: "Consumables and Clinical Supplies" },
  { id: "staffing", title: "Staffing and Competency" },
  { id: "model", title: "Building the Ten-Year Model" },
  { id: "refurbished", title: "Where Refurbished Changes the Numbers" },
  { id: "mistakes", title: "The Omissions That Break Budgets" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const CATH_LAB_TCO_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A cath lab is one of the few hospital investments where the equipment price is a minority of the ten-year cost. The room, the shielding, the service contract, the X-ray tube replacements, the consumables and the trained team together outweigh the system itself.",
      "Business cases that quote only the equipment price fail in year two, when the service contract begins and the first tube approaches end of life. Boards then discover that the cheapest system to buy was not the cheapest system to run.",
      "This guide sets out the complete cost structure of an interventional cardiology room over a ten-year life, the questions that expose hidden cost in a vendor quotation, and the omissions that most frequently break a cath lab budget.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Capital cost, infrastructure and construction, service contracts, tube replacement, consumables, staffing, ten-year modelling, refurbished economics",
    audience:
      "Hospital finance directors, procurement committees, biomedical engineering managers and cardiology service leads",
    readingTime: "14 min read",
    technology: "Angiography / Cath Lab Systems",
  },
  {
    type: "h2",
    id: "structure",
    text: "The Five Cost Categories",
    number: 1,
    body: "Every credible cath lab business case separates cost into five categories. Mixing them is how infrastructure disappears from a budget.",
  },
  {
    type: "ul",
    items: [
      "Capital: the angiography system, configuration options, haemodynamic monitoring, injector, displays and the physiological measurement package.",
      "Infrastructure: civil works, structural reinforcement, shielding, electrical supply, HVAC, medical gases, control and technical rooms, and the delivery route.",
      "Service: the annual maintenance contract, X-ray tube replacement, detector coverage, software updates and quality-assurance testing.",
      "Consumables: catheters, wires, sheaths, balloons, stents, contrast media and protective garments.",
      "People: interventional and nursing staff, radiographers, biomedical engineering time and continuing competency training.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "The single most useful procurement question",
    text: "Ask every vendor for a ten-year cost schedule on the same template: annual service contract, tube replacement assumptions, detector coverage, software update policy and the price of the three most commonly replaced parts. Vendors quote capital competitively and recover margin over the life of the system. A ten-year schedule makes that visible.",
  },
  {
    type: "h2",
    id: "capital",
    text: "Capital: System and Configuration",
    number: 2,
    body: "Configuration decisions made in the tender fix cost for a decade. The largest levers are plane count, detector size, and how much of the haemodynamic and physiology package is bought from the imaging vendor rather than separately.",
  },
  {
    type: "ul",
    items: [
      "Plane count: bi-plane carries a substantial capital premium and a higher annual service cost. Specify it only where neuro-interventional or paediatric-congenital volume requires it.",
      "Detector size and type: larger flat-panel detectors extend the anatomical coverage useful for peripheral and structural work but raise both capital and replacement cost.",
      "Advanced applications: rotational angiography, 3D reconstruction, fusion imaging and dose-reduction packages are frequently licensed rather than owned. Confirm whether the licence is perpetual.",
      "Haemodynamic and physiology systems: often the cheapest line to under-specify and the most disruptive to replace later.",
      "Displays and in-room integration: a large-format display wall is a meaningful cost item and an ergonomic decision, not an accessory.",
    ],
  },
  {
    type: "h2",
    id: "infrastructure",
    text: "Infrastructure and Construction",
    number: 3,
    body: "Infrastructure is the category most often absent from an equipment business case and most often responsible for a project overrun. It is incurred once, before the first patient, and it cannot be deferred.",
  },
  {
    type: "requirements",
    checklist: [
      "Structural survey and any slab or ceiling reinforcement for floor- or ceiling-mounted C-arms.",
      "Radiation shielding designed by a qualified medical physicist and verified after installation.",
      "Electrical supply sized for peak acquisition load, with an uninterruptible supply for the monitoring and control chain.",
      "HVAC for the procedure room and a separate technical room with its own cooling load.",
      "Medical gases, suction and scavenging appropriate to sedation or anaesthesia practice.",
      "Control room with unobstructed sightline and lead-glass viewing panel.",
      "Delivery route survey — door widths, corridor turns, lift capacity and floor loading en route.",
      "Post-installation acceptance testing and commissioning by physics and biomedical engineering.",
    ],
    specs: {
      title: "Infrastructure line items that belong in the capital budget",
      rows: [
        { label: "Civil and structural works", value: "Slab and ceiling reinforcement, penetrations" },
        { label: "Radiation shielding", value: "Physics design, materials, installation, verification" },
        { label: "Electrical", value: "Supply upgrade, distribution, UPS, earthing" },
        { label: "Mechanical", value: "Procedure room and technical room cooling" },
        { label: "Finishes", value: "Cleanable surfaces, lead-glass viewing panel, doors" },
        { label: "Commissioning", value: "Acceptance testing, physics survey, staff orientation" },
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Sequence the physics survey before the finishes",
    text: "Shielding verification after the walls are decorated is how projects lose weeks. Schedule the physicist's verification survey while remedial shielding work is still cheap, and hold the finishing trades until the survey passes.",
  },
  {
    type: "h2",
    id: "service",
    text: "Service Contracts and Tube Replacement",
    number: 4,
    body: "The annual service contract is the dominant recurring cost. Two contracts with the same headline figure can differ by a full outage in what they actually deliver.",
  },
  {
    type: "table",
    headers: ["Contract element", "What to specify", "Why it matters"],
    rows: [
      ["Response time", "Hours to remote diagnosis and hours to on-site attendance", "An emergency service cannot wait days for a first response"],
      ["Uptime commitment", "Percentage availability with a defined measurement window", "Uptime without a measurement definition is unenforceable"],
      ["X-ray tube", "Explicitly included or explicitly excluded, with replacement terms", "The tube is the single largest replacement cost"],
      ["Detector", "Included, with a stated replacement path", "Detector failure without coverage can approach a new-system decision"],
      ["Parts stock", "In-country or regional stock for high-failure items", "Air-freighting a positioner part across continents is measured in days"],
      ["Software", "Update and cybersecurity patch policy for the contract term", "Unpatched clinical systems become a governance problem"],
      ["Quality assurance", "Scheduled dose and image-quality testing", "Regulatory and dose-management obligation"],
      ["Engineer competency", "Trained and certified on the specific model", "Generalist coverage extends every outage"],
    ],
    highlightLastColumn: false,
    caption: "Service contract specification checklist. Score tenders on these elements, not on the annual figure alone.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Tube and detector coverage are where service contracts differ most and where quotations are least comparable. A contract that excludes the tube is not cheaper; it defers a large, certain cost to an unbudgeted year.",
    clinicalInterpretation:
      "Downtime in a cath lab with emergency responsibility transfers patients out. The clinical cost of a slow response is not measured in repair invoices.",
    hospitalRecommendation:
      "Require every vendor to quote the same coverage scope, including tube and detector, and to state regional parts-stock locations. Normalise the quotations before comparing them.",
  },
  {
    type: "h2",
    id: "consumables",
    text: "Consumables and Clinical Supplies",
    number: 5,
    body: "Consumables scale with case volume and are usually the largest single operating cost of the service — often exceeding the service contract in a busy room.",
  },
  {
    type: "ul",
    items: [
      "Catheters, guidewires, sheaths and balloons per case, driven by case complexity as much as case count.",
      "Coronary stents and structural devices, which dominate consumable cost in an interventional programme.",
      "Contrast media and the injector consumable set.",
      "Protective garments: aprons, thyroid shields and lead glass require inspection and periodic replacement.",
      "Sterile drapes, dressings and pressure-closure devices.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Model consumables per case, not per year",
    text: "Consumable cost is the only category that scales directly with activity. Modelling it per case makes the business case robust to volume assumptions and lets finance see the marginal cost of additional throughput rather than an opaque annual figure.",
  },
  {
    type: "h2",
    id: "staffing",
    text: "Staffing and Competency",
    number: 6,
    body: "A cath lab is a team instrument. The staffing model, not the imaging chain, determines whether the room can carry an emergency service.",
  },
  {
    type: "ul",
    items: [
      "Interventional operators with sufficient volume to maintain competency, plus a rota that supports out-of-hours cover if the service is on call.",
      "Cath lab nurses and scrub staff trained in interventional practice and emergency response.",
      "Radiographers or technologists competent in dose management and equipment operation.",
      "Biomedical engineering time for first-line response, quality assurance records and garment inspection.",
      "Continuing competency: recurring training cost across the life of the system, not a one-off at handover.",
    ],
  },
  {
    type: "h2",
    id: "model",
    text: "Building the Ten-Year Model",
    number: 7,
    body: "A defensible model is a simple spreadsheet with explicit assumptions. Complexity hides error; a board can only challenge assumptions it can see.",
  },
  {
    type: "roi",
    paragraph:
      "Build the model year by year across a ten-year life. Enter capital and infrastructure in year zero, service from the end of the warranty period, tube replacement in the years your volume assumption implies, consumables as a per-case figure multiplied by projected volume, and staffing as a fully loaded annual cost. Then state, on the same page, the assumptions each figure depends on.",
    bullets: [
      "Year zero: system, configuration, infrastructure, commissioning and initial training.",
      "Warranty period: service cost near zero — do not extrapolate this across the model.",
      "Post-warranty years: full annual service contract, escalating by the contract's stated indexation.",
      "Tube replacement years: derived from projected fluoroscopy time, not from a fixed calendar interval.",
      "Every year: consumables per case multiplied by projected case volume, plus fully loaded staffing.",
      "Year ten: residual value, replacement or refurbishment decision point.",
    ],
    callout: {
      title: "State these four assumptions explicitly",
      lines: [
        "Projected annual case volume and case mix.",
        "Fluoroscopy minutes per case, which drives tube life.",
        "Service contract escalation rate over the term.",
        "Consumable cost per case by procedure type.",
      ],
    },
  },
  {
    type: "h2",
    id: "refurbished",
    text: "Where Refurbished Changes the Numbers",
    number: 8,
    body: "A professionally refurbished angiography system reduces the capital line without reducing infrastructure, service, consumable or staffing cost. It changes one of five categories.",
  },
  {
    type: "ul",
    items: [
      "Capital reduction is real and can be substantial, which matters most when infrastructure is already consuming the project budget.",
      "Infrastructure cost is unchanged — the room, shielding and power requirement is a function of the technology, not the system's age.",
      "Service cost may be higher if parts availability for the model is thinning; confirm the manufacturer's declared support horizon before purchase.",
      "Tube condition at handover is the decisive commercial question. A system supplied with a nearly exhausted tube is not a bargain.",
      "Software licences and application packages must be confirmed as transferable, in writing, before contract.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Never accept a refurbished cath lab without documented tube condition",
    text: "Require the tube's usage record, the refurbisher's test results and a written warranty position on the tube. The tube is the largest single replacement cost in the system; buying one at the end of its life converts a capital saving into an early unbudgeted expense.",
  },
  {
    type: "h2",
    id: "mistakes",
    text: "The Omissions That Break Budgets",
    number: 9,
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "What is missing from most cath lab business cases",
    items: [
      "Infrastructure and construction cost, treated as a facilities matter rather than a project cost.",
      "Service contract cost from the end of warranty, extrapolated from the warranty period instead.",
      "X-ray tube replacement, omitted because the year it falls due is beyond the planning horizon.",
      "Protective garment inspection and replacement, a recurring safety-critical cost.",
      "Continuing competency training beyond the handover training included in the purchase.",
      "The cost of downtime — transfers, cancelled lists and reputational effect — in a single-room service.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "What proportion of the ten-year cost is the equipment itself?",
        a: "It varies with case volume and configuration, but in a busy room the equipment is routinely a minority of the ten-year total once infrastructure, service, consumables and staffing are counted. That is why capital-only comparisons mislead.",
      },
      {
        q: "How long does an X-ray tube last in a cath lab?",
        a: "Tube life is driven by fluoroscopy time and case mix, not by calendar age. Ask the vendor for the expected life in the units they warrant it in, then convert that to years using your own projected fluoroscopy minutes per case.",
      },
      {
        q: "Should the service contract include the X-ray tube?",
        a: "In almost all cases, yes. Excluding the tube lowers the annual figure and creates a large, certain, unbudgeted cost in a future year. If it is excluded, budget for the replacement explicitly in the model.",
      },
      {
        q: "Is a full-cover contract better than a labour-only contract?",
        a: "For a single-room service with emergency responsibility, full cover with a defined response time is usually the right risk transfer. Labour-only contracts can be economic in multi-room hospitals with a strong in-house biomedical team and access to parts.",
      },
      {
        q: "How do we compare service quotations that are structured differently?",
        a: "Normalise them. Issue one coverage template — response time, uptime definition, tube, detector, software, quality assurance, parts stock — and require every vendor to price that template. Then compare.",
      },
      {
        q: "What is the largest recurring cost in a busy cath lab?",
        a: "Clinical consumables, especially stents and structural devices, typically exceed the service contract in a high-volume interventional programme. This is why consumables should be modelled per case.",
      },
      {
        q: "Does a dose-reduction package pay for itself?",
        a: "It reduces patient and staff dose, which is a safety benefit rather than a cash return. In tube-life terms, lower fluoroscopy output can extend tube life, but the primary justification is radiation protection, not payback.",
      },
      {
        q: "How should we budget for protective garments?",
        a: "As a recurring line. Aprons and thyroid shields require periodic inspection for cracks and delamination and must be withdrawn when they fail. Treating them as a one-off purchase creates a safety gap.",
      },
      {
        q: "When should we plan to replace the system?",
        a: "Plan the decision, not the date. Set a review point around year eight to assess parts availability, the manufacturer's declared support horizon, tube and detector condition, and whether the clinical service has outgrown the configuration.",
      },
      {
        q: "Does buying refurbished reduce the ten-year cost?",
        a: "It reduces the capital category and leaves the other four essentially unchanged. It is the right decision when capital is the binding constraint and when tube condition, parts availability and licence transfer are all documented.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Model cost in five categories — capital, infrastructure, service, consumables, people — and never merge them.",
      "Infrastructure is incurred once, cannot be deferred, and is the most commonly omitted line.",
      "Normalise vendor service quotations against one coverage template before comparing them.",
      "X-ray tube replacement is a certain cost; derive its timing from fluoroscopy minutes, not calendar years.",
      "Refurbished reduces one of five categories — confirm tube condition, parts horizon and licence transfer in writing.",
    ],
  },
  {
    type: "editorialBoard",
    reviewers: [
      {
        role: "Commercial review",
        name: "AbuFarha Procurement & Projects Team",
        credential: "Angiography tendering and lifecycle cost modelling",
      },
      {
        role: "Engineering review",
        name: "AbuFarha Biomedical Engineering Team",
        credential: "Installation, commissioning and service contract execution",
      },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Vendor technical and commercial documentation, project delivery experience",
    disclaimer:
      "Cost structures in this article are described qualitatively. No pricing figures are stated because they vary by vendor, configuration, market and year — obtain current quotations for your own model.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Lifecycle and asset management",
        items: [
          { label: "World Health Organization — medical device technical series, procurement and management" },
          { label: "International Atomic Energy Agency — quality assurance for interventional radiology" },
        ],
      },
      {
        title: "Interventional practice standards",
        items: [{ label: "Society for Cardiovascular Angiography and Interventions — cath lab standards" }],
      },
      {
        title: "Technical documentation",
        items: [{ label: "Manufacturer service, pre-installation and quality-assurance manuals for the specific model" }],
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Need a ten-year cath lab cost model?",
    subheading:
      "Send us your projected case volume and room drawings. We will return a category-by-category ten-year model you can put in front of a board.",
    technology: "Cath Lab Systems",
  },
];
