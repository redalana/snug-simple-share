/**
 * Lithotripsy Systems cluster — "ESWL System Buying Guide: A Decision Framework"
 */

import type { ContentBlock, TocItem } from "../blog";

export const ESWL_DECISION_FRAMEWORK_TOC: TocItem[] = [
  { id: "framing", title: "A Decision Framework, Not a Specification Sheet" },
  { id: "stakeholders", title: "Assembling the Right Stakeholders" },
  { id: "needs", title: "Needs Assessment Before Market Engagement" },
  { id: "newvpreowned", title: "New Versus Pre-Owned: A Structured Comparison" },
  { id: "funding", title: "Funding and Risk Allocation Models" },
  { id: "evaluation", title: "Structuring Supplier Evaluation" },
  { id: "governance", title: "Governance After Award" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ESWL_DECISION_FRAMEWORK_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Acquiring a lithotripsy system is a governance exercise before it is a technical one. AbuFarha Medical supplies, installs, commissions, trains and services lithotripsy systems, and works with hospital committees at exactly the stage this guide addresses: the point where a clinical need has been agreed but the acquisition process itself has not yet been structured.",
      "A poorly structured process produces a decision defensible only by capital price, made by whoever happened to attend the final meeting. A well-structured process produces a decision defensible on clinical fit, lifetime cost and service capability, made by the people who will actually operate and pay for the system for the next decade.",
      "This guide sets out a decision framework — stakeholder assembly, needs assessment, the new-versus-pre-owned decision, funding and risk allocation, and supplier evaluation structure — expressed as a process rather than as a technical specification, since the technical specification itself is properly the output of this process, not its starting point.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Acquisition governance, stakeholder assembly, needs assessment, new versus pre-owned decision structure, funding and risk allocation, and supplier evaluation process",
    audience:
      "Hospital administrators, procurement and tender committees, finance directors, urology service leads",
    readingTime: "12 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "framing",
    text: "A Decision Framework, Not a Specification Sheet",
    number: 1,
    body: "The process by which a decision is reached shapes the decision as much as the options being compared.",
  },
  {
    type: "p",
    text: "Technical specification documents describe generation principle, imaging configuration and consumable cost — all of which matter and are covered elsewhere in this knowledge centre. This guide addresses the layer above that: how a hospital structures the decision itself so that the eventual specification reflects genuine clinical need, honest lifetime cost, and an accountable evaluation process, rather than the preferences of whichever stakeholder was loudest in the room.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The specification is an output, not an input",
    text: "A technical specification written before stakeholder needs assessment is complete tends to encode one department's assumptions as if they were the whole service's requirements.",
  },
  {
    type: "h2",
    id: "stakeholders",
    text: "Assembling the Right Stakeholders",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Urology clinical leadership, to define the intended case mix and clinical service model.",
      "Nursing and radiographer or sonographer representation, since day-to-day workflow and localisation quality depend on their input.",
      "Anaesthesia representation, where the service model anticipates anything beyond light analgesia.",
      "Biomedical engineering, to assess installation feasibility, service requirements and lifetime maintenance implications.",
      "Finance, to own the total cost of ownership analysis rather than reviewing it only at the final approval stage.",
      "Procurement, to run a compliant and comparable tender process.",
      "Facilities or estates, where room modification or new-build is involved.",
    ],
  },
  {
    type: "h2",
    id: "needs",
    text: "Needs Assessment Before Market Engagement",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Document expected annual treatment volume and the anticipated split between renal and ureteric stones.",
      "State the intended anaesthesia and outpatient model, since this materially affects which configurations are appropriate.",
      "Confirm what alternative stone-management routes exist in the hospital, since a strong endoscopic service changes what the lithotripter needs to cover.",
      "Identify the receiving room, or the room-planning constraints if a new space is being built, before engaging suppliers.",
      "Agree the service's tolerance for retreatment burden versus session invasiveness, since this shapes generation-principle preference.",
      "Only once this is documented should the committee move to market engagement and specification drafting.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Write the needs assessment down before the first supplier meeting",
    text: "A documented needs assessment prevents supplier presentations from setting the requirements agenda, and gives the committee a fixed reference point to score proposals against.",
  },
  {
    type: "h2",
    id: "newvpreowned",
    text: "New Versus Pre-Owned: A Structured Comparison",
    number: 4,
  },
  {
    type: "table",
    headers: ["Consideration", "New system", "Pre-owned system"],
    rows: [
      ["Capital outlay", "Higher upfront cost", "Lower upfront cost"],
      ["Remaining source life", "Full rated life available", "Depends on cumulative impulse history; must be verified"],
      ["Warranty and support terms", "Full manufacturer warranty typically included", "Terms vary; must be negotiated and documented explicitly"],
      ["Software and configuration currency", "Current software and full configuration options", "May run an earlier version; confirm upgrade path"],
      ["Time to clinical availability", "Subject to manufacturing and delivery lead time", "Often faster if refurbishment is already complete"],
      ["Risk profile", "Lower near-term service risk", "Requires verified service history to manage risk"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "A pre-owned system with a well-documented service history and clear impulse count can be a sound acquisition; one without that documentation is a source of risk regardless of its price.",
    clinicalInterpretation:
      "Clinical staff experience only the working system, not its price tag — service reliability is what determines their confidence in either route.",
    hospitalRecommendation:
      "Require full documented service and impulse history as a condition of any pre-owned offer, before capital price comparison begins.",
  },
  {
    type: "h2",
    id: "funding",
    text: "Funding and Risk Allocation Models",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Outright capital purchase places asset ownership, and full lifetime service risk, with the hospital from day one.",
      "Structured multi-year service and support agreements bundled with the capital purchase can shift predictable maintenance risk to the supplier for the contract term.",
      "Leasing or managed-equipment arrangements shift asset ownership risk to the provider in exchange for a recurring cost, and should be evaluated on total contract cost, not headline monthly figures.",
      "Whatever the model, define explicitly who bears the cost and downtime risk of an out-of-cycle major component failure, since this is the scenario that most often surfaces a gap in the contract later.",
      "Cost-structure decisions of this kind should be modelled by finance against the service's own projected volume, not assumed from a generic funding template.",
    ],
  },
  {
    type: "h2",
    id: "evaluation",
    text: "Structuring Supplier Evaluation",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Score proposals against the documented needs assessment, with weighted criteria agreed before proposals are received.",
      "Separate clinical capability scoring from commercial scoring, so a strong price cannot mask a poor clinical-fit proposal or vice versa.",
      "Require explicit statements of installation, commissioning, training and support scope in every proposal, not assumed inclusions.",
      "Request reference sites operating at a comparable volume and case mix, and follow up with them directly.",
      "Document the scoring and the reasoning for the final decision, both for governance and for future procurement cycles.",
    ],
  },
  {
    type: "h2",
    id: "governance",
    text: "Governance After Award",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Confirm installation, commissioning and acceptance testing scope in writing before delivery, with defined sign-off criteria.",
      "Schedule training for all relevant roles and record it as a condition of go-live, not as an optional extra.",
      "Establish the preventive maintenance and consumable supply arrangement from day one, rather than reactively once the first fault occurs.",
      "Review the acquisition against the original needs assessment at an agreed interval, to inform the next procurement cycle.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical works with hospital committees throughout this process — supplying documented service history on pre-owned equipment, structuring installation, commissioning and training scope explicitly in every proposal, and supporting the acquisition with ongoing biomedical engineering and spare parts service after award.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Who should lead a lithotripsy acquisition decision?",
        a: "No single stakeholder should lead it in isolation. Clinical leadership defines need, finance owns lifetime cost analysis, biomedical engineering assesses service feasibility, and procurement runs the compliant process — the decision should reflect all four.",
      },
      {
        q: "Should needs assessment happen before or after talking to suppliers?",
        a: "Before. A documented needs assessment gives the committee a fixed reference point to evaluate proposals against, rather than letting supplier presentations set the requirements agenda.",
      },
      {
        q: "Is a pre-owned lithotripter a reasonable option?",
        a: "It can be, provided full documented service history and cumulative impulse count are verified before purchase and warranty or support terms are negotiated explicitly rather than assumed.",
      },
      {
        q: "What is the biggest gap in typical funding agreements?",
        a: "Ambiguity over who bears the cost and downtime risk of an out-of-cycle major component failure. This should be defined explicitly in the contract rather than left to be negotiated during an actual outage.",
      },
      {
        q: "How should training be treated in the acquisition decision?",
        a: "As a condition of the contract and of go-live, with scope and roles specified in writing at the point of order, since training terms are far harder to secure after the equipment has already been delivered.",
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
    text: "A defensible lithotripsy acquisition is the product of a structured process — the right stakeholders, a documented needs assessment, an honest new-versus-pre-owned comparison, clear risk allocation and disciplined supplier evaluation — applied before the technical specification is finalised, not after.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Urology service planning practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy installation, commissioning and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Procurement governance and field service practice synthesis",
    disclaimer:
      "Educational procurement guidance. It does not replace institutional procurement policy, legal advice or local regulation.",
  },
  {
    type: "references",
    items: [
      { label: "Institutional capital equipment procurement governance frameworks." },
      { label: "AbuFarha Medical installed-base commissioning and service records." },
      { label: "Hospital finance total cost of ownership evaluation methodologies." },
    ],
  },
];
