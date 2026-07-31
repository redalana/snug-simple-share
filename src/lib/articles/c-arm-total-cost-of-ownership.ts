/**
 * C-arm total cost of ownership — C-Arm cluster (cost / procurement).
 */

import type { ContentBlock, TocItem } from "../blog";

export const C_ARM_TCO_TOC: TocItem[] = [
  { id: "overview", title: "Why C-Arm Cost Is Underestimated" },
  { id: "capital", title: "Capital and Acquisition Costs" },
  { id: "consumables", title: "Consumables and Wear Items" },
  { id: "service", title: "Service Contracts and Support Models" },
  { id: "indirect", title: "Indirect and Theatre-Level Costs" },
  { id: "model", title: "Building a Ten-Year Cost Model" },
  { id: "levers", title: "Where Costs Are Actually Controlled" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const C_ARM_TCO_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A mobile C-arm has one of the lowest purchase prices in an imaging fleet and one of the highest ratios of lifetime cost to purchase price. The reason is simple: it is shared between theatres, moved several times a day, operated by teams who are surgeons first and imaging users second, and depended upon by lists that cannot proceed without it.",
      "Total cost of ownership for a C-arm is therefore dominated by availability rather than by parts. A cancelled orthopaedic list costs more in a morning than a year of preventive maintenance, and the cost falls on the theatre budget rather than on the imaging budget where the purchase decision was made.",
      "This guide sets out every cost element across a realistic ten-year life, how to model them before purchase, and which levers genuinely change the outcome once the system is installed.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Capital and acquisition cost, consumables and wear items, service contract models, indirect theatre costs, ten-year cost modelling and practical cost-control levers",
    audience:
      "Procurement and finance teams, biomedical engineering, theatre managers and clinical directors",
    readingTime: "14 min read",
    technology: "C-Arm Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Why C-Arm Cost Is Underestimated",
    number: 1,
    body: "The purchase price is a small and misleading fraction of what the system will consume over its life.",
  },
  {
    type: "ul",
    items: [
      "Utilisation is high and unrecorded: shared systems are moved and used far more than their logbooks suggest.",
      "Handling damage, not electronic failure, drives most unplanned repair spend.",
      "Downtime lands on theatre productivity, which is rarely attributed back to the imaging asset.",
      "Software and cybersecurity support end at a vendor-defined date that often precedes mechanical wear-out.",
      "Training cost recurs continuously because theatre staff rotate, unlike a radiography department team.",
      "A single system with no fallback converts every service visit into a clinical capacity problem.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "The expensive number is the cancelled list",
    text: "Model downtime in theatre hours, not in engineer hours. Once a C-arm supports elective orthopaedic, spinal or endovascular lists, the cost of an unavailable system is measured in theatre sessions lost — which typically dwarfs the annual difference between service contract tiers.",
  },
  {
    type: "h2",
    id: "capital",
    text: "Capital and Acquisition Costs",
    number: 2,
    body: "The acquisition line should include everything required to make the system clinically usable, not the system alone.",
  },
  {
    type: "table",
    headers: ["Cost element", "Typical behaviour", "Modelling note"],
    rows: [
      ["System purchase", "Varies widely by class: mini, standard, flat panel, 3D", "Specify class from casemix before comparing prices"],
      ["Detector or image intensifier", "Largest single value component", "Confirm whether it is covered in warranty and in contract"],
      ["Workstation and storage", "Often quoted separately", "Include monitors, cart and image storage capacity"],
      ["PACS and worklist integration", "Frequently omitted from vendor quotes", "Without it, images are handled manually forever"],
      ["Dose reporting and structured dose data", "Sometimes a licensed option", "Required where dose registries are mandated"],
      ["Sterile drapes and positioning accessories", "Recurring but bought as capital initially", "Confirm consumable compatibility and supply routes"],
      ["Installation and acceptance testing", "Small but mandatory", "Includes medical physics acceptance and QA baseline"],
      ["Initial training", "Underfunded almost everywhere", "Budget multiple sessions across theatre shifts"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Fully loaded acquisition, not headline price",
    clinicalInterpretation:
      "Two quotations for the same system class routinely differ by a large margin once integration, dose reporting, accessories, physics acceptance and training are added. The cheaper headline is frequently the more expensive purchase.",
    hospitalRecommendation:
      "Require every bidder to quote a fully loaded acquisition package to an identical scope, and evaluate on that figure plus a ten-year running cost, never on the system price alone.",
  },
  {
    type: "h2",
    id: "consumables",
    text: "Consumables and Wear Items",
    number: 3,
    body: "C-arm running cost is concentrated in a small number of predictable items.",
  },
  {
    type: "table",
    headers: ["Item", "What drives wear", "Cost control"],
    rows: [
      ["X-ray tube", "Fluoroscopy time and heat loading", "Pulsed fluoroscopy, last-image hold and short screening habits"],
      ["Flat panel detector", "Impact and drop damage rather than age", "Handling training, positioning discipline, damage cover"],
      ["Image intensifier (older systems)", "Gradual brightness and contrast loss", "QA monitoring to plan replacement rather than react"],
      ["Batteries (where fitted)", "Charge cycling and discharge depth", "Designated charging point and a charging routine"],
      ["Monitors and cart electronics", "Movement, vibration and cable strain", "Cable management and transport discipline"],
      ["Mechanical brakes and orbital drive", "Frequent repositioning under drape", "Included preventive maintenance and brake adjustment"],
      ["Sterile drapes", "Per-case consumption", "Standardise a single compatible product across theatres"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Detector damage is a handling problem with a capital price tag",
    text: "The most common large unplanned cost on a mobile C-arm is detector or intensifier impact damage from collisions with tables, doors and lifts. It is almost entirely preventable through transport discipline and staff training, and it is the single item where accidental damage cover most often pays for itself.",
  },
  {
    type: "h2",
    id: "service",
    text: "Service Contracts and Support Models",
    number: 4,
    body: "The contract decision is a decision about availability, not about parts pricing.",
  },
  {
    type: "table",
    headers: ["Model", "What it suits", "Risk retained by the hospital"],
    rows: [
      ["Full-risk contract including tube and detector", "Single-system sites with elective dependency", "Low; premium reflects transferred risk"],
      ["Parts-and-labour excluding tube/detector", "Sites with a fallback system", "The two largest components"],
      ["Labour-only or shared risk", "Multi-system fleets with strong in-house engineering", "All major component cost"],
      ["Time-and-materials", "Low-utilisation or end-of-life systems", "Everything, including response time"],
      ["In-house first-line with vendor escalation", "Mature biomedical departments", "Diagnostic capability and parts access"],
    ],
  },
  {
    type: "ul",
    items: [
      "Specify response and resolution times against theatre list times, not calendar hours.",
      "Confirm explicitly whether tube, detector and accidental damage are included or excluded.",
      "Ask for the software support and cybersecurity patching horizon in writing; it often defines usable life.",
      "Agree the loan or fallback arrangement during extended repairs before signing.",
      "Require preventive maintenance visits scheduled outside theatre operating hours.",
      "Include remote diagnostics where the hospital's network policy permits it — it shortens most repairs.",
    ],
  },
  {
    type: "h2",
    id: "indirect",
    text: "Indirect and Theatre-Level Costs",
    number: 5,
    body: "The costs that never appear on the imaging budget are frequently the largest.",
  },
  {
    type: "ul",
    items: [
      "Theatre sessions lost to unavailability, delayed starts and mid-list failure.",
      "Staff time spent locating, moving and setting up a shared system between theatres.",
      "Repeat screening and extended fluoroscopy time caused by inadequate training.",
      "Radiation protection overhead: dosimetry, PPE inspection and physics support.",
      "Storage and transport provision — space, lift access and charging locations.",
      "Data handling effort where PACS integration was never funded.",
      "Clinical workarounds, including transferring cases to an interventional room.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Buying one system for two dependent theatres",
    text: "Where two theatres run fluoroscopy-dependent lists simultaneously or consecutively, one C-arm creates a permanent scheduling conflict and no service resilience. The second system usually costs less than a year of the resulting disruption, yet it is the most commonly deferred purchase.",
  },
  {
    type: "h2",
    id: "model",
    text: "Building a Ten-Year Cost Model",
    number: 6,
    body: "A defensible model is short, explicit about assumptions and identical across bidders.",
  },
  {
    type: "table",
    headers: ["Model input", "How to establish it", "Sensitivity"],
    rows: [
      ["Annual case volume and fluoroscopy minutes", "Theatre records by specialty, not estimates", "High — drives tube and contract cost"],
      ["Fully loaded acquisition cost", "Identical scope from every bidder", "High"],
      ["Service cost per year, escalated", "Written multi-year quotation, not indicative pricing", "High"],
      ["Tube and detector replacement probability", "Vendor life data plus local utilisation", "High if excluded from contract"],
      ["Downtime hours and theatre cost per hour", "Local finance figure for a theatre session", "Very high"],
      ["Training cost per year", "Staff turnover and session count", "Moderate"],
      ["Software support horizon", "Written vendor statement", "Defines the model's end point"],
      ["Residual or disposal value", "Realistic; usually near zero", "Low"],
    ],
  },
  {
    type: "h2",
    id: "levers",
    text: "Where Costs Are Actually Controlled",
    number: 7,
    body: "Most achievable savings come from practice and planning rather than from procurement negotiation.",
  },
  {
    type: "ul",
    items: [
      "Screening discipline: pulsed fluoroscopy, last-image hold, collimation and short exposures reduce tube consumption and dose simultaneously.",
      "Handling and transport training, which directly reduces the largest unplanned repair category.",
      "Correct class selection: a system over-specified for its casemix costs more to buy and service; one under-specified causes repeat screening and workarounds.",
      "Fleet standardisation, which reduces training burden, spare holdings and error rates.",
      "Planned fallback capacity, which converts an emergency into an inconvenience.",
      "Scheduled preventive maintenance outside list hours, protecting theatre productivity.",
      "Recording real utilisation, so the next replacement is specified from evidence rather than from memory.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is a full-risk service contract worth the premium?",
        a: "On a single-system site with elective fluoroscopy lists, usually yes, because it transfers the two largest component risks and buys defined response. On a multi-system fleet with capable in-house engineering and a fallback unit, a lower tier is often the better economic choice.",
      },
      {
        q: "How long does a mobile C-arm last?",
        a: "Mechanically, well over a decade with maintenance. In practice, usable life is normally set by software and cybersecurity support, detector availability and integration compatibility rather than by mechanical wear.",
      },
      {
        q: "Does a refurbished C-arm reduce total cost of ownership?",
        a: "It reduces acquisition cost and can be sound value where the refurbisher documents component replacement and provides a supported service path. It rarely reduces running cost, and it shortens the remaining software support horizon, so model the whole life rather than the purchase.",
      },
      {
        q: "What is the most common budgeting error?",
        a: "Omitting PACS integration, training and physics acceptance from the capital case, then discovering that the system is clinically installed but operationally incomplete and functionally unfunded.",
      },
      {
        q: "How should downtime be costed?",
        a: "In theatre sessions lost, using the hospital's own costed session figure. This is the only representation that makes the availability difference between contract tiers visible to decision-makers.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Modelling the true cost of a C-arm purchase?",
    subheading:
      "AbuFarha Medical supplies, installs and maintains mobile C-arm systems and supports hospitals with fully loaded cost modelling, service planning and theatre training.",
    technology: "C-Arm Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "C-arm installation, service and fleet management" },
      { role: "Commercial review", name: "AbuFarha Projects & Procurement", credential: "Capital equipment cost modelling" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer service documentation, published health-technology management guidance and hospital cost-modelling practice",
    disclaimer:
      "Cost figures, contract structures and theatre session costs are highly jurisdiction- and institution-specific. Use local finance and engineering data for any procurement decision.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Health technology management",
        items: [
          { label: "WHO medical device technical series — health technology management and costing" },
          { label: "National guidance on capital medical equipment replacement planning" },
        ],
      },
      {
        title: "Equipment standards and safety",
        items: [
          { label: "IEC 60601-1 and IEC 60601-2-43 for interventional X-ray equipment" },
          { label: "National radiation protection requirements for fluoroscopy in theatre" },
        ],
      },
      {
        title: "Service and quality assurance",
        items: [
          { label: "National quality assurance protocols for fluoroscopic equipment" },
          { label: "Manufacturer preventive maintenance and component life documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards and pricing evolve.",
  },
  {
    type: "takeaways",
    items: [
      "C-arm lifetime cost is dominated by availability, not by parts pricing.",
      "Evaluate a fully loaded acquisition package — integration, dose reporting, accessories, physics acceptance and training included.",
      "Detector and intensifier damage from handling is the largest preventable unplanned cost.",
      "Contract tier should follow fallback capacity: no fallback means transfer the major component risk.",
      "Cost downtime in theatre sessions; it makes the real economics visible.",
      "Software and cybersecurity support horizon usually defines usable life, not mechanical wear.",
      "Screening discipline reduces tube consumption and patient dose at the same time.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "The cheapest C-arm to own is the one that is correctly specified, well handled, properly integrated and always available.",
  },
  {
    type: "p",
    text: "Hospitals that model ten-year cost with theatre downtime included, fund integration and training at purchase, train handling deliberately and plan fallback capacity consistently spend less over the life of the asset than hospitals that negotiated a lower purchase price and absorbed the consequences in the theatre schedule.",
  },
];
