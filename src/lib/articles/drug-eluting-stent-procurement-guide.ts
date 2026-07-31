/**
 * Drug-Eluting Stents cluster — "Drug-Eluting Stent Procurement: A Hospital Buyer's Guide"
 */

import type { ContentBlock, TocItem } from "../blog";

export const DES_PROCUREMENT_TOC: TocItem[] = [
  { id: "scope", title: "What a DES Procurement Decision Actually Covers" },
  { id: "case-mix", title: "Starting From Case Mix, Not From a Catalogue" },
  { id: "criteria", title: "Building Defensible Evaluation Criteria" },
  { id: "formulary", title: "Rationalising the Device Formulary" },
  { id: "tender", title: "Structuring a Tender or Framework Agreement" },
  { id: "tco", title: "Thinking in Total Cost, Not Unit Price" },
  { id: "supply", title: "Supply Continuity and Contingency" },
  { id: "governance", title: "Governance and Post-Award Review" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DES_PROCUREMENT_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Procuring drug-eluting stents is a recurring decision for any hospital running an interventional cardiology programme, and it is a decision that sits across clinical, engineering and finance responsibility at once. AbuFarha Medical supplies drug-eluting stents and the cath lab imaging and haemodynamic systems used to deliver them, and supports procurement teams with the technical information needed to evaluate device families on their genuine merits.",
      "A DES purchase is not a single transaction. It is usually a standing arrangement — a tender, framework agreement or preferred-supplier list — that governs what is available in the cath lab for months or years, across a case mix the purchasing committee cannot fully predict in advance. Getting the structure of that arrangement right matters as much as getting any individual price right.",
      "This guide sets out a decision framework for DES procurement: how to start from clinical case mix rather than a supplier catalogue, how to build evaluation criteria that can actually be scored, how to think about total cost rather than unit price, and how to protect supply continuity once a device family is adopted. It deliberately avoids naming prices, discounts or specific commercial terms, since these vary by market, volume and negotiation and cannot be generalised.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Case-mix-driven specification, evaluation criteria design, formulary rationalisation, tender structuring, total cost of ownership and supply continuity planning for DES procurement",
    audience:
      "Hospital procurement leads, interventional cardiology clinical leads, cath lab managers, finance and capital committees",
    readingTime: "13 min read",
    technology: "Drug-Eluting Stents",
  },
  {
    type: "h2",
    id: "scope",
    text: "What a DES Procurement Decision Actually Covers",
    number: 1,
    body: "A stent purchase decision is really a decision about a supply relationship, a clinical formulary and a service dependency, not just a unit price.",
  },
  {
    type: "p",
    text: "A drug-eluting stent purchase decision typically has to resolve four separate questions at once: which device families should be available to operators, in what size range, from how many suppliers, and under what commercial and service terms. Treating these as one undifferentiated question — usually compressed into 'which stent is cheapest' — is the most common structural error in DES procurement, because it ignores the clinical, logistical and continuity consequences that follow from the choice.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The purchase decision outlives the purchasing committee",
    text: "A DES formulary decision typically governs cath lab stock for one to several years and shapes operator technique over that period. Committees should document the reasoning behind a formulary choice in enough detail that a successor committee can understand it without re-litigating the whole decision.",
  },
  {
    type: "h2",
    id: "case-mix",
    text: "Starting From Case Mix, Not From a Catalogue",
    number: 2,
  },
  {
    type: "p",
    text: "A defensible DES specification begins with an honest description of the cath lab's actual case mix: the range of vessel diameters and lesion lengths treated, the proportion of complex or calcified anatomy, the balance of elective and primary intervention work, and the volume of cases expected over the life of the agreement. This activity picture, not a manufacturer's catalogue, is what determines the size range, platform characteristics and stock depth the hospital actually needs.",
  },
  {
    type: "ul",
    items: [
      "Diameter and length range required, derived from a review of recent procedural data rather than assumption.",
      "Proportion of bifurcation, calcified or small-vessel lesions, which influences platform flexibility and strut thickness requirements.",
      "Split between elective and primary percutaneous coronary intervention, which affects how much stock must be held for urgent, unplanned use.",
      "Expected annual case volume and its trend, used to size the standing order and negotiate supply commitments realistically.",
      "Number of operators and their existing familiarity with specific platforms, since retraining has a real cost in procedural time and comfort.",
    ],
  },
  {
    type: "h2",
    id: "criteria",
    text: "Building Defensible Evaluation Criteria",
    number: 3,
  },
  {
    type: "p",
    text: "Evaluation criteria should be written and weighted before responses are received, and each criterion should be something a supplier's response can actually be scored against. Criteria that cannot be evidenced — vague references to 'quality' or 'innovation' without a defined measure — produce evaluations that cannot withstand later scrutiny and invite challenge from unsuccessful bidders.",
  },
  {
    type: "table",
    headers: ["Evaluation domain", "What to assess", "How it can be evidenced"],
    rows: [
      ["Clinical and technical fit", "Size range coverage against documented case mix", "Supplier's published size matrix compared against the hospital's activity data"],
      ["Deliverability and handling", "Operator familiarity and platform track record locally", "Structured feedback from a defined evaluation or trial period"],
      ["Regulatory status", "Valid local regulatory approval for the specific device and indication", "Copies of current regulatory clearance documentation"],
      ["Supply reliability", "Lead time, minimum order quantities and backorder history", "Supplier-provided service level commitments in the contract"],
      ["Service and training support", "Applications training, in-service support and technical liaison", "Named training plan and support model included in the offer"],
      ["Traceability and quality systems", "Lot tracking capability and adverse event reporting process", "Description of the supplier's traceability and vigilance systems"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Regulatory status and traceability are pass/fail conditions in practice, even when they are scored numerically; a hospital should not weight a compliance failure against a strong price offer.",
    clinicalInterpretation:
      "Clinical fit and deliverability should carry the greatest weight, since the interventional team lives with the consequences of a poorly matched platform for the life of the agreement.",
    hospitalRecommendation:
      "Publish the scoring weights alongside the specification, and record the score against each criterion in the evaluation file, not only the total, so the reasoning survives review.",
  },
  {
    type: "h2",
    id: "formulary",
    text: "Rationalising the Device Formulary",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Limit the number of concurrent DES platforms stocked to what operators can remain genuinely familiar with, rather than accumulating families over successive purchases.",
      "Where more than one platform is retained, define the clinical circumstances in which each is preferred, so choice at the table is a clinical decision rather than a stock-availability decision.",
      "Review the formulary on a fixed schedule rather than only when a supply problem forces the issue.",
      "Involve the full interventional team in formulary review, not only the clinical lead, since day-to-day handling experience is distributed across operators.",
      "Retire a platform deliberately, with a defined transition plan, rather than allowing stock to simply run down without a decision.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Formulary sprawl is a recurring, avoidable failure",
    text: "Cath labs that add a new DES family with every purchasing cycle, without retiring an older one, accumulate a formulary that no single operator is fully competent across and that inventory teams cannot manage efficiently. Formulary size should be a deliberate decision, reviewed on a schedule, not an accumulation.",
  },
  {
    type: "h2",
    id: "tender",
    text: "Structuring a Tender or Framework Agreement",
    number: 5,
  },
  {
    type: "p",
    text: "Whether the hospital runs a formal tender, a framework agreement or a direct negotiation, the same structural elements need to be present: a clear specification derived from case mix, published evaluation criteria, a defined contract term, and explicit provisions covering training, service support and supply continuity. A framework agreement with more than one awarded supplier can reduce single-source dependency, provided the clinical formulary rules for choosing between awarded suppliers are equally clear.",
  },
  {
    type: "ul",
    items: [
      "Specify the contract term and any renewal or extension mechanism explicitly, rather than leaving continuation implicit.",
      "Include a defined process for introducing a new device generation from an existing supplier during the contract term, since platform technology continues to evolve.",
      "State training and in-service support obligations as contractual commitments with named deliverables, not general assurances.",
      "Define the process for handling a supply disruption, including which alternative device family may be substituted and under what clinical sign-off.",
      "Require documentation of unit traceability data as part of the ongoing supply relationship, not only at the point of initial evaluation.",
    ],
  },
  {
    type: "h2",
    id: "tco",
    text: "Thinking in Total Cost, Not Unit Price",
    number: 6,
  },
  {
    type: "p",
    text: "Unit price is the most visible figure in any DES negotiation and the least complete one. A defensible cost comparison considers the full picture: consignment or standing-stock arrangements and their effect on working capital, wastage from expiry or damage, the operational cost of managing multiple platforms, training cost when a new platform is introduced, and the clinical cost of a mismatch between stocked sizes and actual case mix, which shows up as delayed cases or last-minute substitution. None of these figures can be stated as a universal number — they depend on local volume, contract terms and inventory practice — but a procurement committee should require each supplier response to address them explicitly rather than compare on unit price alone.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Ask for the consumption data, not just the invoice",
    text: "Inventory and case-level consumption data — which sizes are actually used, how often stock expires unused, and how often a size has to be substituted mid-procedure — is the most useful input to a re-tender. Biomedical and inventory teams should build this reporting into routine practice well before the next procurement cycle begins.",
  },
  {
    type: "h2",
    id: "supply",
    text: "Supply Continuity and Contingency",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Establish a documented minimum stock level and reorder point for each size held, agreed between the cath lab and the supplier.",
      "Confirm lead times for standard and urgent orders in writing, and test the urgent-order process periodically rather than assuming it works.",
      "Maintain an agreed contingency plan for a temporary shortage of a stocked size, including which clinically acceptable substitute may be used and who authorises the substitution.",
      "Avoid single-supplier dependency for a hospital's entire DES requirement where a credible second source exists, particularly for high-volume sizes.",
      "Review supply performance against agreed service levels on a fixed schedule as part of the standing contract relationship, not only when a problem occurs.",
    ],
  },
  {
    type: "h2",
    id: "governance",
    text: "Governance and Post-Award Review",
    number: 8,
  },
  {
    type: "p",
    text: "A procurement decision should be reviewed after it has been in effect, not only at the point of award. A structured review — drawing on consumption data, operator feedback, supply performance and any clinical concerns raised through the vigilance system — closes the loop on whether the evaluation criteria predicted real-world performance and informs how the next tender should be structured. Assigning ownership of this review to a named individual or committee, with a fixed review date, is what makes it happen in practice rather than in intention.",
  },
  {
    type: "p",
    text: "AbuFarha Medical supports hospital procurement teams throughout this process, providing technical documentation, regulatory status information and consumption and service data for the drug-eluting stents it supplies, alongside the cath lab systems, training and biomedical engineering support that keep the interventional programme running.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How many DES platforms should a cath lab stock?",
        a: "There is no universal number; the right count is the smallest formulary that covers the hospital's documented case mix while remaining something every operator stays genuinely familiar with. Most programmes find that a small number of well-understood platforms outperforms a large, under-used catalogue.",
      },
      {
        q: "Should DES procurement be based on unit price?",
        a: "Unit price is one input among several. Consumption patterns, wastage, training cost, supply reliability and clinical fit to case mix all affect the real cost of a formulary decision and should be evaluated alongside price rather than instead of it.",
      },
      {
        q: "What should a DES tender specification actually contain?",
        a: "A specification grounded in documented case mix — required size range, lesion complexity, expected volume — together with evaluation criteria covering regulatory status, deliverability, supply reliability, training support and traceability, each stated in a way that can be scored from a supplier's response.",
      },
      {
        q: "How does consignment stock affect a procurement decision?",
        a: "Consignment arrangements change working capital exposure and stock ownership timing rather than clinical suitability, and should be evaluated as a commercial and inventory-management term alongside, not instead of, the clinical evaluation. The companion article on inventory and consignment management addresses this in more detail.",
      },
      {
        q: "Should a hospital use a single supplier or a multi-supplier framework?",
        a: "This depends on local market structure, volume and the hospital's tolerance for supply-continuity risk. A framework with more than one awarded supplier can reduce single-source dependency but requires clear clinical rules for choosing between awarded platforms.",
      },
      {
        q: "How often should a DES procurement decision be reviewed?",
        a: "On a fixed schedule set at the time of award, informed by consumption data, supply performance and operator feedback, rather than only when a problem forces a review.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
  },
  {
    type: "p",
    text: "A sound DES procurement decision starts from documented case mix, builds evaluation criteria that can genuinely be scored, and weighs total cost and supply continuity alongside unit price. Treating the formulary as a deliberate, periodically reviewed decision rather than an accumulation of past purchases gives the interventional cardiology programme a stock position that matches what it actually treats.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Interventional cardiology device practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Cath lab consumables and supply support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Institutional procurement practice principles and manufacturer documentation synthesis",
    disclaimer:
      "Educational guidance on drug-eluting stent procurement. It does not replace institutional procurement policy or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Institutional capital and consumables procurement policy documentation." },
      { label: "Manufacturer regulatory clearance and technical documentation for drug-eluting coronary stent systems." },
      { label: "Institutional interventional cardiology programme device formulary and consumption records." },
    ],
  },
];
