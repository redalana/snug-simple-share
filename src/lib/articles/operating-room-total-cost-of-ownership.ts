/**
 * Operating Room cluster — "Operating Room Equipment Total Cost of Ownership"
 */

import type { ContentBlock, TocItem } from "../blog";

export const OR_TCO_TOC: TocItem[] = [
  { id: "framing", title: "Framing Cost Beyond the Purchase Price" },
  { id: "structure", title: "The Cost Structure of Theatre Equipment" },
  { id: "drivers", title: "What Drives Cost Over the Service Life" },
  { id: "downtime", title: "Downtime as a Cost Category" },
  { id: "comparison", title: "Comparing Options on a Consistent Basis" },
  { id: "planning", title: "Budgeting and Lifecycle Planning" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const OR_TCO_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "The purchase price of operating room equipment is one line in a much longer cost story that runs through installation, training, consumables, maintenance, repairs and eventual replacement. AbuFarha Medical supplies, installs, commissions and services operating room equipment, and supports hospitals in thinking through this full cost structure rather than the acquisition cost alone.",
      "Two systems with a similar purchase price can diverge substantially in total cost over a service life once installation complexity, training requirements, spare parts pricing and availability, and typical service intervals are accounted for. A capital decision made without this framework routinely underestimates what the equipment will actually cost the department to keep running.",
      "This guide sets out a cost-structure framework for operating room equipment — without invented figures, since actual costs are specific to model, region, contract and utilisation — so that decision-makers can build the comparison relevant to their own budget with confidence in what to include.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Total cost of ownership framing, cost structure categories, cost drivers over the service life, downtime as a cost category, consistent comparison methodology, lifecycle budgeting",
    audience:
      "Hospital finance and capital planning teams, procurement committees, biomedical engineering, theatre managers, executive decision-makers",
    readingTime: "12 min read",
    technology: "Operating Room",
  },
  {
    type: "h2",
    id: "framing",
    text: "Framing Cost Beyond the Purchase Price",
    number: 1,
    body: "The purchase price is the entry point to a cost structure that continues for the equipment's entire service life.",
  },
  {
    type: "p",
    text: "A total cost of ownership view treats the purchase price as the first of several cost categories rather than the decision in itself. Installation and commissioning, training, consumables, service contracts, spare parts, and the cost of downtime all accrue over years, and in many equipment categories exceed the purchase price by the time the equipment reaches replacement age. Evaluating options on purchase price alone systematically favours whichever option has deferred more of its cost into categories that were not compared.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Ask what is excluded from the quoted price",
    text: "When comparing quotations, establish explicitly what is included and what is excluded: installation, training, first-year service, spare parts pricing basis, and consumables. Two quotes at the same headline price can represent very different total commitments once exclusions are accounted for.",
  },
  {
    type: "h2",
    id: "structure",
    text: "The Cost Structure of Theatre Equipment",
    number: 2,
  },
  {
    type: "table",
    headers: ["Cost category", "Typically incurred", "Comparison question to ask"],
    rows: [
      ["Purchase price", "At acquisition", "What is included and excluded from the quoted figure"],
      ["Installation and commissioning", "At deployment", "Is site preparation, integration and acceptance testing included"],
      ["Training", "At deployment and periodically thereafter", "How many sessions, which roles, and is refresher training included"],
      ["Consumables and accessories", "Throughout operational use", "What is the expected consumption rate for the case mix"],
      ["Preventive maintenance and service contracts", "On a scheduled recurring basis", "What is covered, and what falls outside the contract"],
      ["Spare parts and repairs", "As needed, more frequent later in service life", "What is the typical availability lead time for critical parts"],
      ["Downtime", "Occasional, but potentially high impact", "What is the typical response time for a service call"],
      ["Decommissioning and replacement", "At end of service life", "Is there a trade-in or disposal pathway"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Spare parts availability lead time is rarely quoted upfront but has an outsized effect on realised downtime cost, since a part that takes weeks to arrive converts a routine repair into an extended outage.",
    clinicalInterpretation:
      "A department may not experience the cost difference between two options until several years into service, when parts availability and service response time diverge from what an early comparison assumed.",
    hospitalRecommendation:
      "Request typical spare parts lead times and service response commitments in writing during evaluation, not only at the point a fault occurs.",
  },
  {
    type: "h2",
    id: "drivers",
    text: "What Drives Cost Over the Service Life",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Utilisation intensity: equipment used across a heavier case load accumulates wear and consumable use faster than the same model used lightly.",
      "Complexity of the equipment and its integration with other systems, which affects both training depth and repair complexity.",
      "Local availability of trained service personnel and spare parts, which affects both response time and repair cost.",
      "The scope and terms of the service contract in place, including what is covered as routine versus billed separately.",
      "Software and firmware update requirements, which can carry ongoing licensing or support cost depending on the manufacturer's model.",
    ],
  },
  {
    type: "h2",
    id: "downtime",
    text: "Downtime as a Cost Category",
    number: 4,
  },
  {
    type: "p",
    text: "Downtime is a cost category in its own right, distinct from the direct cost of repair. An operating room out of service represents cancelled or delayed cases, staff time reallocated, and in some categories of equipment a loss of capability the hospital cannot readily substitute. Total cost of ownership comparisons that omit downtime risk favouring equipment with a lower direct service cost but a longer typical repair time, which can be the more expensive option once the case list impact is considered.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Availability, not just reliability, determines downtime cost",
    text: "A system that fails slightly more often but is repaired within hours because parts and technicians are locally available can produce less total downtime than a system that fails rarely but takes weeks to source a part for.",
  },
  {
    type: "h2",
    id: "comparison",
    text: "Comparing Options on a Consistent Basis",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Define the service life horizon to be compared, consistent across all options under evaluation.",
      "List every cost category above for each option, marking what is known, quoted or estimated versus genuinely unknown.",
      "Request service response time and spare parts lead time commitments in writing, not as verbal assurance.",
      "Include training refresh cadence and cost where staff turnover or software updates make periodic retraining necessary.",
      "Treat categories that cannot be quantified with confidence as qualitative risk factors in the decision, rather than assigning them an unsupported figure.",
    ],
  },
  {
    type: "h2",
    id: "planning",
    text: "Budgeting and Lifecycle Planning",
    number: 6,
  },
  {
    type: "p",
    text: "Lifecycle budgeting treats the categories above as a recurring annual commitment to plan for, not a one-time capital event. A maintenance and consumables budget line should be established at the point of purchase, informed by the manufacturer's specified maintenance schedule and the department's expected utilisation, and revisited annually as actual service history accumulates. Planning for eventual replacement — including the decommissioning pathway and the lead time to specify and install a successor — belongs in the same lifecycle plan rather than being addressed only when the equipment approaches end of service life.",
  },
  {
    type: "p",
    text: "AbuFarha Medical works with hospitals to structure this comparison at the point of purchase and supports the equipment through its service life with installation, training, preventive maintenance and spare parts provision, so the categories in a total cost of ownership assessment are backed by an active service relationship rather than an assumption.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Why does purchase price alone give an incomplete picture of cost?",
        a: "Because installation, training, consumables, maintenance, spare parts and downtime accrue over the equipment's entire service life and, in many categories, exceed the purchase price by the time the equipment is replaced. Comparing purchase price alone omits most of the actual cost commitment.",
      },
      {
        q: "How should downtime be factored into a cost comparison?",
        a: "As a distinct category alongside direct repair cost, informed by typical service response time and spare parts lead time. Equipment with a lower direct service cost but slower typical repair can represent a higher total cost once case list impact is considered.",
      },
      {
        q: "What should be requested in writing during vendor evaluation?",
        a: "What is included and excluded from the quoted price, training scope and session count, typical service response time, and typical spare parts lead time for critical components. These figures anchor the cost-structure comparison in commitments rather than assumptions.",
      },
      {
        q: "Should hospitals estimate figures for cost categories that are not quoted?",
        a: "Only with genuine supporting information. Where a category cannot be quantified with confidence, it should be treated as a qualitative risk factor in the decision rather than assigned an unsupported number, to avoid a false sense of precision in the comparison.",
      },
      {
        q: "When should replacement planning begin?",
        a: "As part of the same lifecycle plan established at purchase, revisited as service history accumulates, rather than only once the equipment approaches the end of its useful service life. This allows adequate lead time to specify, budget for and install a successor.",
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
    text: "Total cost of ownership for operating room equipment is a structured accounting of purchase price, installation, training, consumables, maintenance, spare parts, downtime and eventual replacement across a defined service life. Comparing options on this full structure, with commitments requested in writing rather than assumed, produces capital decisions that hold up once the equipment is in daily clinical use.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Theatre and interventional service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Theatre equipment lifecycle and service planning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Procurement and lifecycle planning practice synthesis",
    disclaimer:
      "Educational guidance on total cost of ownership frameworks for operating room equipment. It does not provide specific pricing and does not replace institutional financial planning or vendor-specific commercial terms.",
  },
  {
    type: "references",
    items: [
      { label: "Institutional capital equipment lifecycle and budgeting frameworks." },
      { label: "Manufacturer service contract terms and spare parts availability documentation." },
      { label: "Biomedical engineering maintenance and service history records used for lifecycle planning." },
    ],
  },
];
