/**
 * Lithotripsy Systems cluster — "ESWL Total Cost of Ownership: A Framework"
 */

import type { ContentBlock, TocItem } from "../blog";


export const ESWL_TCO_TOC: TocItem[] = [
  { id: "beyond", title: "Why Capital Price Is Only the Starting Point" },
  { id: "categories", title: "The Cost Categories That Make Up Lifetime Ownership" },
  { id: "consumables", title: "Consumables and Wear Components as a Cost Structure" },
  { id: "service", title: "Service and Maintenance Cost Models" },
  { id: "utilisation", title: "Utilisation and Its Effect on Unit Cost" },
  { id: "hidden", title: "Costs That Are Easy to Overlook" },
  { id: "framework", title: "Building a Total Cost of Ownership Model" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ESWL_TCO_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "The capital price of a lithotripsy system is the figure most visible in a procurement discussion and the least useful one for predicting what the system will actually cost a hospital over its working life. AbuFarha Medical supplies, installs, commissions and services lithotripsy systems, including Richard Wolf Piezolith platforms, and works with hospital finance teams specifically to build the total cost of ownership picture that a capital price alone cannot provide.",
      "Total cost of ownership for a lithotripter is a structure, not a number: it is the sum of capital cost, financing terms, installation and commissioning, consumables and wear components, service and maintenance, staff training and retraining, and the utilisation the system actually achieves over its working life. Two systems with identical capital prices can have materially different lifetime costs depending on how these categories are structured, which is why a genuine comparison requires the framework, not the headline figure.",
      "This guide sets out that framework — the categories that make up lifetime cost, how consumable and service cost structures should be evaluated, and the questions a hospital finance team should be asking before signing a capital commitment, without attaching invented figures to any of them, since actual costs vary by market, configuration and negotiated terms and should always be obtained directly from current supplier quotations.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Total cost of ownership framework for ESWL systems: capital, installation, consumables, service, utilisation and hidden cost categories",
    audience:
      "Hospital finance directors, procurement committees, biomedical engineering, urology service leads",
    readingTime: "13 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "beyond",
    text: "Why Capital Price Is Only the Starting Point",
    number: 1,
    body: "A lithotripter's true cost is spread across a decade or more of ownership, not concentrated in the purchase order.",
  },
  {
    type: "p",
    text: "Comparing two lithotripsy proposals on capital price alone treats the acquisition as a single transaction, when in practice it is the first instalment in a lifetime cost stream that includes installation, consumables, service, and the staff time required to keep the system running at the volume the service needs. A lower capital price attached to a higher recurring consumable or service cost structure can easily produce a higher total lifetime cost than a higher capital price attached to a more favourable service agreement. Finance teams that request a lifetime cost model from every bidder, rather than a capital price alone, are in a materially stronger position to make this comparison honestly.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The cheapest quotation is not necessarily the cheapest system",
    text: "A capital price comparison alone says nothing about consumable cost structure, service agreement terms or expected utilisation, all of which typically outweigh the capital price difference between comparable systems over a multi-year ownership period.",
  },
  {
    type: "h2",
    id: "categories",
    text: "The Cost Categories That Make Up Lifetime Ownership",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Capital acquisition cost, including any financing or leasing charges attached to the purchase structure.",
      "Site preparation, installation and commissioning cost, which varies depending on existing room readiness.",
      "Consumables and wear components, including the generation source and any coupling medium or cushion consumables specific to the system.",
      "Scheduled preventive maintenance and service agreement cost, whether structured as time-and-materials, a fixed annual contract, or bundled with the original purchase.",
      "Unplanned repair cost for events outside the scope of a preventive maintenance agreement, if any.",
      "Staff training at installation and subsequent retraining for new or rotating staff over the system's working life.",
      "Facilities costs specific to ongoing operation, such as water treatment consumables where applicable.",
    ],
  },
  {
    type: "h2",
    id: "consumables",
    text: "Consumables and Wear Components as a Cost Structure",
    number: 3,
  },
  {
    type: "p",
    text: "The generation principle installed materially shapes the consumable cost structure, as covered in detail elsewhere in this knowledge centre: electrohydraulic systems carry a recurring electrode replacement cost tied to discharge count, while electromagnetic and piezoelectric systems carry a longer-interval, higher-cost source replacement event tied to a much larger cumulative impulse count. Neither structure is inherently cheaper in absolute terms — that depends on actual unit costs obtained from the specific supplier and configuration — but the two structures behave very differently in a budgeting model: frequent, smaller consumable costs versus infrequent, larger source replacement costs. A finance team should ask each bidder to express projected consumable cost as a function of expected annual case volume, not as an isolated unit price, since that is the form in which it will actually affect the operating budget.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Ask for cost per projected treatment, not cost per unit",
    text: "A consumable unit price means little without the discharge or impulse count it delivers and the department's expected annual volume; converting to an estimated cost per treatment session is what makes different generation principles genuinely comparable in a budget model.",
  },
  {
    type: "h2",
    id: "service",
    text: "Service and Maintenance Cost Models",
    number: 4,
  },
  {
    type: "table",
    headers: ["Model", "Cost predictability", "Key question to ask"],
    rows: [
      ["Time-and-materials, no contract", "Low predictability; cost varies with actual fault frequency", "What is the typical response time and parts availability without a standing agreement?"],
      ["Fixed annual preventive maintenance contract", "High predictability for scheduled work", "What is explicitly included, and what falls outside the contract as a chargeable extra?"],
      ["Comprehensive contract including major component coverage", "Highest predictability, generally higher annual cost", "Does the contract cover the generation source replacement event, or only routine servicing?"],
      ["Bundled into a leasing or managed-equipment arrangement", "Predictable as a single recurring payment", "What happens to the payment structure if utilisation is materially lower than projected?"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The single most consequential clause in any service agreement is whether it covers the generation source replacement event, since this is typically the largest individual lifetime service cost after the original capital purchase.",
    clinicalInterpretation:
      "Clinical continuity depends on predictable service response, which a comprehensive agreement generally provides more reliably than a time-and-materials arrangement, particularly for a single-system department with no backup capacity.",
    hospitalRecommendation:
      "Request an explicit statement, in writing, of whether generation source replacement is included in any proposed service agreement before comparing its annual cost against alternative structures.",
  },
  {
    type: "h2",
    id: "utilisation",
    text: "Utilisation and Its Effect on Unit Cost",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Fixed costs — capital financing, base service contract fees — are spread over however many treatments the system actually performs, so lower-than-projected utilisation raises the effective cost per treatment even though nothing about the equipment has changed.",
      "Usage-based consumable costs, by contrast, scale down naturally with lower utilisation, which is why separating fixed and usage-based cost categories in a model is essential to understanding how sensitive total cost is to actual case volume.",
      "A realistic utilisation projection, built from the service's own referral base and clinical capacity rather than an optimistic target, produces a far more reliable total cost of ownership model than one built on assumed maximum throughput.",
      "Where utilisation is uncertain, model total cost at a conservative case volume as well as an expected one, so the acquisition decision is not built on a single optimistic scenario.",
    ],
  },
  {
    type: "h2",
    id: "hidden",
    text: "Costs That Are Easy to Overlook",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Staff downtime cost during any unplanned outage, which does not appear on an equipment invoice but represents real lost capacity and rescheduling cost.",
      "Training cost for staff turnover over the system's working life, not only the initial training delivered at installation.",
      "Software or configuration upgrade costs that may fall outside a base service agreement, depending on how the contract is written.",
      "End-of-life costs, including decommissioning and any residual value consideration if the system is later traded in or sold.",
      "Facilities running costs specific to the room, such as water treatment consumables, which are easy to omit from an equipment-focused cost model.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "An incomplete cost model is worse than an honest range",
    text: "A total cost of ownership model that omits categories such as training turnover or facilities running costs will systematically understate lifetime cost, and should be treated with more scepticism than a model that openly states its assumptions and their uncertainty.",
  },
  {
    type: "h2",
    id: "framework",
    text: "Building a Total Cost of Ownership Model",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "List every cost category set out above and require each bidder to address all of them explicitly, rather than accepting a capital price and a single annual service figure.",
      "Separate fixed and usage-based costs clearly, and model total cost against both an expected and a conservative utilisation projection.",
      "Express consumable cost as cost per projected treatment, not as a standalone unit price, so that different generation principles and service structures can be compared on a common basis.",
      "Require written confirmation of what is and is not included in any proposed service agreement, particularly regarding generation source replacement.",
      "Review the model against actual experience at a defined interval after go-live, so it can be refined for the next procurement cycle rather than treated as a one-time exercise.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical provides hospital finance and procurement teams with a structured breakdown of installation, consumable and service cost categories for the specific configuration under consideration, so that a total cost of ownership comparison can be built on the hospital's own utilisation projection rather than on capital price alone.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Why is capital price a poor basis for comparing two lithotripsy proposals?",
        a: "Because it captures only one category of lifetime cost. Consumable structure, service agreement terms and expected utilisation typically have a larger cumulative effect on total lifetime cost than the difference in capital price between comparable systems.",
      },
      {
        q: "What is the single most important clause to check in a service agreement?",
        a: "Whether generation source replacement is included in the contract or treated as a separate chargeable event, since this is generally the largest individual lifetime service cost after the original capital purchase.",
      },
      {
        q: "How does utilisation affect total cost of ownership?",
        a: "Fixed costs are spread across however many treatments the system actually performs, so lower-than-projected utilisation raises the effective cost per treatment even though the underlying fixed costs have not changed. Usage-based consumable costs, by contrast, scale down with lower utilisation.",
      },
      {
        q: "Can AbuFarha Medical provide specific price figures for a total cost of ownership model?",
        a: "Specific pricing depends on the configuration, market and negotiated commercial terms and should be requested directly for the exact system under consideration. This guide provides the cost-category framework a hospital should use to structure and compare that pricing once obtained.",
      },
      {
        q: "What costs are most commonly left out of a total cost of ownership comparison?",
        a: "Staff downtime during unplanned outages, training for staff turnover over the system's life, software or configuration upgrade costs, and facilities running costs such as water treatment consumables are all frequently omitted from equipment-focused cost models.",
      },
      {
        q: "Should a hospital model a single utilisation projection or more than one?",
        a: "More than one is preferable. Modelling total cost at both an expected and a conservative case volume avoids building the acquisition decision on a single optimistic throughput scenario.",
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
    text: "Total cost of ownership for a lithotripsy system is a structured framework of capital, installation, consumable, service, staffing and utilisation-sensitive costs, not a single figure derivable from a capital price quotation. Hospitals that require bidders to address every category explicitly, and that model cost against a realistic range of utilisation, are in a materially stronger position to make an acquisition decision that holds up over the system's full working life.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Finance review", name: "AbuFarha Commercial Engineering", credential: "Medical equipment lifetime cost modelling practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy installation and service practice" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Procurement finance methodology and field service cost-structure synthesis",
    disclaimer:
      "Educational cost-framework guidance. It does not constitute a price quotation and does not replace a hospital's own financial appraisal or supplier-specific commercial terms.",
  },
  {
    type: "references",
    items: [
      { label: "Institutional total cost of ownership methodologies for capital medical equipment." },
      { label: "AbuFarha Medical installation, consumable and service cost-structure documentation." },
      { label: "Hospital finance capital equipment lifecycle budgeting frameworks." },
    ],
  },
];
