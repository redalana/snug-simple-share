/**
 * Hospital capital equipment purchasing framework — Buyer's Guides cluster.
 */

import type { ContentBlock, TocItem } from "../blog";

export const CAPITAL_PURCHASING_FRAMEWORK_TOC: TocItem[] = [
  { id: "why-framework", title: "Why Hospitals Need a Purchasing Framework" },
  { id: "stages", title: "The Six Stages of a Capital Purchase" },
  { id: "governance", title: "Governance: Who Decides What" },
  { id: "needs", title: "Turning Clinical Need into a Specification" },
  { id: "money", title: "Funding Routes and What Each One Constrains" },
  { id: "timeline", title: "Building a Realistic Project Timeline" },
  { id: "risk", title: "Where Capital Projects Actually Fail" },
  { id: "documents", title: "The Document Set a Purchase Should Produce" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const CAPITAL_PURCHASING_FRAMEWORK_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Most hospitals do not have a problem choosing equipment. They have a problem choosing it in the right order. A scanner is selected before the room is surveyed, a budget is approved before lifecycle cost is understood, or a clinical champion commits to a configuration months before the department that will run it is consulted. The equipment arrives and works exactly as specified — and the project is still judged a failure.",
      "A capital purchasing framework exists to prevent that outcome. It does not tell a hospital which system to buy; it defines the sequence of decisions, who owns each one, and what evidence must exist before the next stage begins. The framework is deliberately independent of modality: the same structure governs an MRI scanner, a cath lab, a fleet of mobile X-ray units and a sterilisation plant.",
      "This guide sets out that structure — the six stages of a capital purchase, the governance that supports it, how clinical need becomes a defensible technical specification, how funding route constrains the decision, and the document set a well-run purchase should leave behind for the people who will operate and maintain the asset for the next decade.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Capital purchase stages, decision governance, needs analysis, specification development, funding routes, project timelines, failure modes, required documentation",
    audience:
      "Hospital executives, procurement leads, clinical directors, biomedical engineering managers and project sponsors",
    readingTime: "17 min read",
    technology: "Capital Equipment Planning",
  },
  {
    type: "h2",
    id: "why-framework",
    text: "Why Hospitals Need a Purchasing Framework",
    number: 1,
    body: "A framework converts a series of individual judgements into a repeatable process whose reasoning survives staff turnover, audit and the eventual replacement of the same asset.",
  },
  {
    type: "p",
    text: "Capital equipment differs from consumable procurement in three ways that make an ad hoc approach unsafe. First, the commitment is long: a decision made in one budget year determines operating cost, staffing pattern and clinical capability for eight to fifteen years. Second, the cost is distributed: the purchase price is visible and the service, consumables, utilities, staffing and downtime costs are not. Third, the decision is multidisciplinary in a way that no single department can resolve alone — clinicians define the requirement, engineering defines feasibility, finance defines affordability, and none of the three can approve the others' domain.",
  },
  {
    type: "p",
    text: "Without a framework, the discipline that speaks loudest wins. When a clinical department drives unopposed, hospitals acquire high specification systems that cannot be sustained. When finance drives unopposed, they acquire systems that meet the budget line and not the clinical requirement, which produces the most expensive outcome of all: an asset that is replaced early. A framework does not remove advocacy — it requires every advocate to answer the same questions in the same order.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "The framework test",
    text: "A purchasing process is adequate if a new procurement manager, given only the project file, can explain why this equipment was chosen over the alternatives, what it will cost to run, and what conditions the hospital agreed to provide. If that reconstruction is not possible, the process produced a purchase but not a decision.",
  },
  {
    type: "h2",
    id: "stages",
    text: "The Six Stages of a Capital Purchase",
    number: 2,
    body: "Each stage has an entry condition and an exit deliverable. Stages may overlap in time, but a stage may not be closed on the strength of work that belongs to a later one.",
  },
  {
    type: "table",
    headers: ["Stage", "Central question", "Exit deliverable", "Primary owner"],
    rows: [
      ["1. Need definition", "What clinical problem are we solving, and for whom?", "Signed clinical needs statement with activity data", "Clinical director"],
      ["2. Options appraisal", "What credible ways exist to solve it, including doing nothing?", "Options paper with cost and capability comparison", "Project sponsor"],
      ["3. Feasibility and site assessment", "Can this hospital host, power, cool and staff it?", "Site survey and infrastructure gap list", "Estates and biomedical engineering"],
      ["4. Specification and tender", "What exactly are we asking the market to supply?", "Technical specification and evaluation criteria", "Procurement with clinical and technical input"],
      ["5. Evaluation and award", "Which compliant offer best meets the weighted criteria?", "Scored evaluation record and award recommendation", "Evaluation panel"],
      ["6. Delivery and acceptance", "Does the installed system meet what was bought?", "Acceptance test record and asset handover file", "Biomedical engineering"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Stage 3 is the one most often skipped",
    clinicalInterpretation:
      "Feasibility and site assessment sits between two attractive activities — deciding what is wanted and going to market — and it is the stage with no visible output for the clinical team. It is also the stage that determines whether the project timeline is realistic, because structural, electrical and shielding work is almost always the critical path.",
    hospitalRecommendation:
      "Make the site survey a gate rather than a parallel activity: no tender should be issued for fixed imaging equipment before the room survey, structural assessment and utility capacity check are documented. The cost of this discipline is a few weeks; the cost of omitting it is measured in months of delay after the equipment has been delivered.",
  },
  {
    type: "h2",
    id: "governance",
    text: "Governance: Who Decides What",
    number: 3,
    body: "Most capital disputes are not disagreements about facts. They are disagreements about whose decision it was.",
  },
  {
    type: "ul",
    items: [
      "Clinical need and clinical acceptability: owned by the clinical department. No other party can declare a specification clinically sufficient.",
      "Technical feasibility and maintainability: owned by biomedical engineering with estates. Clinical enthusiasm cannot override a capacity or access constraint.",
      "Affordability across the lifecycle: owned by finance, informed by engineering's estimate of service and utility cost — not the purchase price alone.",
      "Compliance and process integrity: owned by procurement. This includes ensuring specifications are not written around a single supplier.",
      "Regulatory and radiation safety sign-off: owned by the radiation protection adviser or equivalent qualified expert, and never delegated to the project team.",
      "Final award decision: owned by the designated capital committee or board, acting on the panel's scored recommendation rather than replacing it.",
      "Post-installation benefit realisation: owned by the project sponsor, who should still be accountable twelve months after handover.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Three governance failures that recur",
    items: [
      "The clinical champion is also the evaluation chair, which makes an objective scoring record difficult to defend.",
      "Biomedical engineering is invited to comment on the specification but not to approve it, so maintainability concerns are recorded and then overtaken.",
      "The capital committee re-opens technical questions at award, because the options appraisal never explained why alternatives were excluded.",
    ],
  },
  {
    type: "h2",
    id: "needs",
    text: "Turning Clinical Need into a Specification",
    number: 4,
    body: "A specification is a translation, and translations fail in predictable ways: too literal and it names a product; too loose and it cannot be evaluated.",
  },
  {
    type: "p",
    text: "The reliable method is to move from activity to capability to requirement. Activity is what the department does and expects to do: examination counts by type, case mix, referral sources, session patterns and the growth assumption behind them. Capability is what the equipment must be able to do to serve that activity — the examinations it must support, the patient population it must accommodate, the throughput it must sustain and the integration it must achieve. Requirement is the technical statement of that capability, written so that two different manufacturers can both respond and be compared.",
  },
  {
    type: "table",
    headers: ["Layer", "Example statement", "Why this layer matters"],
    rows: [
      ["Activity", "Approximately 6,000 examinations per year, 18% cardiac, expected 5% annual growth", "Anchors the whole specification in measured demand rather than aspiration"],
      ["Capability", "Must support routine cardiac studies within a 30-minute nominal slot", "Expresses need in clinical terms both clinicians and vendors understand"],
      ["Requirement", "Cardiac gating capability with stated reconstruction throughput and workflow automation", "Can be answered, evidenced and scored"],
      ["Constraint", "Must fit the existing 34 m² room without structural alteration", "Prevents offers that are technically excellent and physically impossible"],
      ["Service condition", "Defined response and repair times with parts availability commitment", "Turns availability from an expectation into an obligation"],
      ["Training condition", "Applications training quantified in days, on site, post go-live", "Protects the clinical benefit the purchase was justified on"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Write the evaluation criteria before the specification is finalised",
    text: "If a requirement cannot be scored, it is either a pass/fail condition or it is commentary. Drafting the scoring model alongside the specification exposes requirements that sound rigorous but cannot be evidenced, and it prevents the far more damaging alternative — designing the scoring model after offers have been received.",
  },
  {
    type: "h2",
    id: "money",
    text: "Funding Routes and What Each One Constrains",
    number: 5,
    body: "The funding route is not a finance detail that follows the technical decision. It changes which options are available and how the specification must be written.",
  },
  {
    type: "table",
    headers: ["Route", "What it suits", "What it constrains"],
    rows: [
      ["Outright capital purchase", "Long-life assets in stable service lines", "Requires the full sum in one budget period; upgrade path must be specified up front"],
      ["Phased capital with staged delivery", "Multi-room or multi-site programmes", "Demands rigorous configuration control so later phases remain compatible"],
      ["Operating lease", "Technology with a short refresh cycle or uncertain demand", "Total cost is higher; end-of-term conditions and refresh rights must be negotiated precisely"],
      ["Managed equipment service", "Hospitals prioritising availability and predictable operating cost", "Transfers specification control toward the provider; requires strong performance definitions"],
      ["Donor or grant funding", "Programme expansion and capability introduction", "Frequently funds acquisition but not service, consumables or training — the sustainability gap"],
      ["Reagent or activity-linked models", "Consumable-intensive equipment", "Ties the hospital to a consumable stream; needs volume assumptions tested against reality"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The sustainability gap in grant-funded acquisition",
    clinicalInterpretation:
      "Grant and donor funding is frequently structured around the visible capital item. Service contracts, spare parts, consumables, uninterruptible power provision and applications training often fall outside the award, and the receiving hospital absorbs them from operating budget it did not plan.",
    hospitalRecommendation:
      "Require every funding proposal to include a five-year operating cost annex signed by biomedical engineering and finance. Where the funder will not cover operating cost, the hospital should approve the operating commitment explicitly as a separate decision — not inherit it as a consequence of accepting equipment.",
  },
  {
    type: "h2",
    id: "timeline",
    text: "Building a Realistic Project Timeline",
    number: 6,
    body: "Timelines fail because they are built from the manufacturer's delivery lead time instead of from the hospital's own critical path.",
  },
  {
    type: "ul",
    items: [
      "Work backwards from the required clinical go-live date, not forwards from today, so the compression points are visible early.",
      "Identify the true critical path: for fixed imaging it is usually structural or shielding work and utility upgrades, not equipment manufacture.",
      "Sequence regulatory approvals explicitly — radiation authorisation, building consent and any national registration each have their own duration.",
      "Allow for the delivery route survey: door widths, floor loading along the route, crane or lift requirements and any temporary structural opening.",
      "Plan decommissioning of the outgoing system as a project in its own right, including data migration and safe disposal.",
      "Protect a defined period between installation completion and clinical go-live for acceptance testing, calibration and applications training.",
      "Schedule training when the staff who need it are released from clinical duty; training booked but not attended is the most common silent project loss.",
      "Build contingency into the plan as a stated allowance rather than as unspoken optimism about each individual step.",
    ],
  },
  {
    type: "diagram",
    id: "hospital-workflow",
    title: "Capital project critical path",
    purpose:
      "Shows the dependency between clinical need, site works, procurement and acceptance so hospitals can see where compression is and is not possible.",
    alt: "Diagram of a hospital capital equipment project critical path from needs definition through site works, procurement, installation and acceptance to clinical go-live",
    caption:
      "Equipment lead time and site preparation run in parallel; acceptance testing and training cannot be compressed without transferring risk to the clinical service.",
  },
  {
    type: "h2",
    id: "risk",
    text: "Where Capital Projects Actually Fail",
    number: 7,
    body: "The recurring failures are not exotic. They cluster in a small number of places, which makes them straightforward to plan against.",
  },
  {
    type: "table",
    headers: ["Failure mode", "Early warning sign", "Preventive control"],
    rows: [
      ["Infrastructure discovered late", "No documented site survey at tender stage", "Make the survey a stage gate before market approach"],
      ["Operating cost unplanned", "Business case quotes purchase price only", "Mandatory five-year lifecycle cost annex"],
      ["Specification written around one product", "Requirements quote a specific model's exact figures", "Independent specification review by procurement"],
      ["Training not delivered or not attended", "Training days included but unscheduled at award", "Contract training to named dates with attendance records"],
      ["Acceptance testing waived under schedule pressure", "Clinical go-live date set before acceptance window", "Protect the acceptance window contractually"],
      ["Consumable dependency unexamined", "No consumable pricing beyond year one", "Require multi-year consumable pricing in the offer"],
      ["Data and integration gap", "No named PACS, RIS or HIS integration scope", "Include integration as a scored requirement with a test plan"],
      ["No owner after handover", "Project team disbands at installation", "Assign benefit realisation review at twelve months"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Keep a decision log, not just minutes",
    text: "Minutes record what was discussed; a decision log records what was decided, by whom, on what evidence, and what alternatives were rejected. When a project is questioned two years later — or when the same asset is replaced eight years later — the decision log is the only document that still answers the question being asked.",
  },
  {
    type: "h2",
    id: "documents",
    text: "The Document Set a Purchase Should Produce",
    number: 8,
    body: "A capital purchase is complete when the operating teams hold the documents they need, not when the invoice is paid.",
  },
  {
    type: "requirements",
    checklist: [
      "Signed clinical needs statement with the activity data it was based on",
      "Options appraisal including the do-nothing option and reasons for exclusion",
      "Site survey report with the infrastructure gap list and its resolution",
      "Final technical specification as issued, plus any clarifications",
      "Scored evaluation record and award recommendation",
      "Contract with service, training, parts and integration obligations",
      "Acceptance test results, including radiation and electrical safety testing",
      "Asset record entry with serial numbers, warranty dates and PM schedule",
      "Operator and service documentation in the working language of the staff",
      "Twelve-month benefit realisation review against the original needs statement",
    ],
    specs: {
      title: "Handover file minimum contents",
      rows: [
        { label: "Asset identification", value: "Model, serial, software version, configuration list" },
        { label: "Warranty", value: "Start date, duration, scope and exclusions" },
        { label: "Service plan", value: "PM frequency, response commitments, escalation contacts" },
        { label: "Safety records", value: "Electrical safety, radiation acceptance, protection survey" },
        { label: "Training", value: "Attendee list, dates, modules covered, follow-up entitlement" },
        { label: "Consumables", value: "Part numbers, current pricing, lead times, alternatives" },
        { label: "Integration", value: "Interface specifications and tested workflows" },
        { label: "Disposal plan", value: "Expected life, decommissioning requirements, data erasure" },
      ],
    },
  },
  {
    type: "faq",
    items: [
      {
        q: "How early should biomedical engineering be involved in a capital purchase?",
        a: "At need definition, not at specification. Engineering input at the earliest stage identifies infrastructure constraints, service history of candidate technologies and parts availability while options are still open. Involvement at specification stage limits engineering to commenting on decisions that have already narrowed the field.",
      },
      {
        q: "Should the do-nothing option really be appraised?",
        a: "Yes, because it is the baseline against which benefit is measured. Documenting what happens if no purchase is made — waiting times, referrals out, maintenance cost of the existing asset, clinical risk — is what converts a business case from an assertion into a comparison.",
      },
      {
        q: "How do we prevent a specification from being written around one manufacturer?",
        a: "Express requirements as capability and performance rather than as design or exact numerical values drawn from one product's datasheet. Have procurement review the draft specifically for single-source indicators, and require any genuinely unavoidable proprietary requirement to be justified in writing.",
      },
      {
        q: "Who should chair the evaluation panel?",
        a: "Someone without a stake in a particular outcome — typically procurement or a senior manager outside the requesting department. The clinical champion should be a scoring member, because their assessment is essential, but chairing creates a conflict that weakens the record.",
      },
      {
        q: "What is the right length for a capital equipment specification?",
        a: "Long enough that every scored requirement is unambiguous and short enough that every clause is genuinely required. Specifications inflate when teams copy previous documents; each clause should be defensible as a requirement of this project or removed.",
      },
      {
        q: "How is a purchase judged successful?",
        a: "Against the original needs statement, at a defined review point after go-live. The measures are activity delivered, availability achieved, operating cost against forecast and staff competence — not whether the installation completed on schedule.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning a capital equipment purchase?",
    subheading:
      "AbuFarha Medical supports hospitals across needs analysis, specification development, site assessment, installation and after-sales service — so the asset performs for its full working life.",
    technology: "Capital Equipment Planning",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Procurement review", name: "AbuFarha Projects & Tenders", credential: "Hospital capital equipment procurement" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Installation, commissioning and lifecycle service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel:
      "Established public-sector capital appraisal practice, medical device lifecycle management guidance and AbuFarha Medical project experience",
    disclaimer:
      "Procurement rules, approval thresholds and regulatory requirements vary by country and institution. Apply local procurement law and internal delegation policy in preference to any general framework.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Capital appraisal and business case practice",
        items: [
          { label: "Public-sector capital investment appraisal guidance (options appraisal and benefit realisation)" },
          { label: "Health technology assessment principles for equipment acquisition" },
        ],
      },
      {
        title: "Medical device lifecycle management",
        items: [
          { label: "WHO medical device technical series — needs assessment and procurement" },
          { label: "IEC 60601 general requirements for basic safety and essential performance" },
        ],
      },
      {
        title: "Acceptance and handover",
        items: [
          { label: "Manufacturer installation and acceptance documentation" },
          { label: "National radiation authorisation and acceptance testing requirements" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as guidance is revised.",
  },
  {
    type: "takeaways",
    items: [
      "A framework governs sequence and ownership, not brand preference — the same six stages apply to every modality.",
      "Site and infrastructure assessment belongs before market approach, because it usually defines the critical path.",
      "Specification quality comes from moving activity to capability to requirement, with scoring drafted in parallel.",
      "The funding route constrains the technical decision and must be settled early, not treated as a finance formality.",
      "Grant-funded acquisition frequently omits service, consumables and training; approve that operating commitment explicitly.",
      "Failures cluster in a small, well-known set of places, each of which has a cheap preventive control.",
      "A purchase is complete when the handover file exists and a benefit review is scheduled — not at installation.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "Capital equipment decisions are rarely lost at the point of choosing a system. They are lost in the order in which the questions were asked.",
  },
  {
    type: "p",
    text: "Hospitals that define need before options, assess the site before going to market, cost the lifecycle before approving the budget and protect acceptance testing before setting a go-live date consistently end up with equipment that performs as expected — often with less expensive configurations than they originally proposed. The framework is not bureaucracy. It is the mechanism by which a hospital gets what it actually needs, and can still explain why, a decade later.",
  },
];
