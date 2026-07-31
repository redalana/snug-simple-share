/**
 * Medical equipment evaluation methodology — Buyer's Guides cluster.
 */

import type { ContentBlock, TocItem } from "../blog";

export const EQUIPMENT_EVALUATION_METHODOLOGY_TOC: TocItem[] = [
  { id: "problem", title: "Why Equipment Evaluation Goes Wrong" },
  { id: "axes", title: "The Six Evaluation Axes" },
  { id: "weighting", title: "Building a Defensible Weighting Model" },
  { id: "evidence", title: "What Counts as Evidence" },
  { id: "demonstrations", title: "Site Visits, Demonstrations and Trials" },
  { id: "scoring", title: "Scoring Discipline and Panel Behaviour" },
  { id: "commercial", title: "Separating Technical Merit from Commercial Terms" },
  { id: "record", title: "The Evaluation Record" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const EQUIPMENT_EVALUATION_METHODOLOGY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Evaluation is the stage of a purchase where hospitals are most confident and least rigorous. Offers are compared feature by feature, a favourite emerges, and the scoring sheet is completed afterwards to support a conclusion the panel has already reached. The outcome may be correct. The process cannot demonstrate it, which matters when the decision is challenged, and matters more when the equipment underperforms and nobody can reconstruct what was promised.",
      "A structured evaluation methodology does something specific: it forces the panel to state what it values before it sees what is offered, then to score each offer against those stated values using evidence rather than impression. Feature counting is replaced by capability assessment, and the vendor with the longest datasheet loses its natural advantage.",
      "This guide sets out a methodology that works across modalities — the six axes on which medical equipment should be assessed, how to weight them without inventing false precision, what qualifies as evidence for each axis, how to run demonstrations and site visits so they inform rather than persuade, and how to keep technical merit separate from commercial terms until both are properly understood.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Evaluation axes, weighting models, evidence standards, demonstration and site visit protocol, scoring discipline, technical versus commercial separation, evaluation records",
    audience:
      "Evaluation panel members, procurement leads, clinical directors and biomedical engineering managers",
    readingTime: "16 min read",
    technology: "Equipment Evaluation",
  },
  {
    type: "h2",
    id: "problem",
    text: "Why Equipment Evaluation Goes Wrong",
    number: 1,
    body: "The failure modes are cognitive rather than technical, which is why better datasheets do not fix them.",
  },
  {
    type: "ul",
    items: [
      "Feature dominance: the offer with more listed features scores higher even where the additional features serve no requirement in the specification.",
      "Anchoring on the familiar: the incumbent's design conventions become the implicit standard, and different approaches are penalised for being unfamiliar rather than inferior.",
      "Demonstration bias: a well-run demonstration on a vendor's optimised system displaces months of measured evidence about routine performance.",
      "Specification drift during evaluation: the panel starts valuing something the specification never asked for, which quietly disadvantages compliant offers.",
      "Single-voice capture: one authoritative panel member's view becomes the panel view because scoring is discussed before it is recorded.",
      "Price contamination: knowing the price changes technical scoring, usually in favour of the cheapest offer or the most expensive one, depending on the institution's culture.",
      "Post-hoc rationalisation: scores are entered after the conclusion is reached, so the record shows agreement but not reasoning.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "The clearest symptom of a weak evaluation",
    text: "Every offer scores within a few points of the others on technical criteria, and the decision is made on price. This usually means the criteria were not discriminating — they described the category rather than the requirement — and the panel had no basis on which offers could genuinely differ.",
  },
  {
    type: "h2",
    id: "axes",
    text: "The Six Evaluation Axes",
    number: 2,
    body: "Every medical equipment decision reduces to six assessable dimensions. Criteria that do not belong to one of them are usually preferences.",
  },
  {
    type: "table",
    headers: ["Axis", "What it assesses", "Typical evidence"],
    rows: [
      ["Clinical capability", "Whether the system performs the examinations and procedures the department must deliver, at the required quality", "Protocol lists, image or output samples, clinical references, published performance"],
      ["Workflow and usability", "Time and effort per case, staffing implication, automation and error resistance", "Observed use at a comparable site, structured usability walkthrough, step counts"],
      ["Infrastructure fit", "Space, loading, power, cooling, shielding, access route and environmental tolerance", "Manufacturer site planning documents checked against the hospital's own survey"],
      ["Serviceability and support", "Uptime achievable in this location — parts, engineer coverage, diagnostics, response commitments", "Contract terms, local engineer numbers, parts stocking, reference availability data"],
      ["Lifecycle economics", "Total cost over the intended life including service, consumables, utilities and upgrade path", "Multi-year priced schedules from the offer, not indicative estimates"],
      ["Training and adoption", "Whether the department can reach competence and retain it through staff turnover", "Named training plan with days, modules, location and refresher entitlement"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Serviceability is the axis hospitals under-weight most",
    clinicalInterpretation:
      "Clinical capability and price are visible at the point of decision; serviceability becomes visible in year three. A system with excellent specifications and no local engineer coverage delivers less clinical activity than a modest system that is always available.",
    hospitalRecommendation:
      "Score serviceability on verifiable local facts — number of qualified engineers within reach, parts held in region, contracted response and repair commitments, and remote diagnostics capability — rather than on corporate statements about global support. Ask for reference sites in comparable settings and speak to their biomedical engineering teams, not only their clinical leads.",
  },
  {
    type: "h2",
    id: "weighting",
    text: "Building a Defensible Weighting Model",
    number: 3,
    body: "Weighting expresses hospital priorities. It should be argued, agreed and published before offers are opened, and then left alone.",
  },
  {
    type: "p",
    text: "Two principles keep a weighting model honest. First, weights should differ between projects, because priorities genuinely differ: a tertiary centre buying a research-capable system and a district hospital replacing a workhorse do not value the same things, and identical weightings across both suggest the model was copied rather than considered. Second, precision should match the quality of the underlying judgement. Weights expressed to a single decimal place imply a confidence no panel possesses; rounded weights in steps of five are easier to defend and produce the same ranking.",
  },
  {
    type: "table",
    headers: ["Project type", "Weighting emphasis", "Reasoning"],
    rows: [
      ["Replacement of a high-volume workhorse", "Serviceability and workflow lead; capability sufficient rather than maximal", "Availability and throughput determine service delivery"],
      ["New capability introduction", "Clinical capability and training lead", "The hospital is buying a competence it does not yet have"],
      ["Constrained existing room", "Infrastructure fit as pass/fail, then workflow", "Physical constraint removes options rather than scoring them"],
      ["Remote or logistically difficult site", "Serviceability and robustness dominate", "Distance converts minor faults into long outages"],
      ["Programme with fixed operating budget", "Lifecycle economics weighted heavily and scrutinised", "Affordability risk sits in operating cost, not purchase price"],
      ["Fleet standardisation", "Interoperability, training transferability and parts commonality", "Value comes from fleet effects rather than individual unit merit"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Use pass/fail for constraints and scoring for merit",
    text: "Anything that would make an offer unusable — it does not fit the room, it cannot meet a mandatory safety standard, it cannot integrate with the existing PACS — belongs in a compliance gate, not in a scored criterion. Scoring a constraint allows a non-viable offer to compensate elsewhere and win.",
  },
  {
    type: "h2",
    id: "evidence",
    text: "What Counts as Evidence",
    number: 4,
    body: "An evaluation is only as good as its evidence standard. Setting that standard in advance is what prevents marketing material from doing the work.",
  },
  {
    type: "table",
    headers: ["Evidence class", "Strength", "Appropriate use"],
    rows: [
      ["Contractual commitment in the offer", "Strongest — enforceable", "Response times, training days, parts availability, priced schedules"],
      ["Independent standard or third-party test result", "Strong", "Safety compliance, measured performance parameters"],
      ["Verified reference site experience in comparable setting", "Strong for serviceability and workflow", "Availability history, support responsiveness, adoption experience"],
      ["Structured hands-on assessment by hospital staff", "Moderate to strong for usability", "Workflow step counts, control ergonomics, error recovery"],
      ["Manufacturer technical documentation", "Moderate", "Site planning data, configuration detail, specification confirmation"],
      ["Vendor demonstration on their own system", "Weak alone", "Familiarisation and question generation, not comparative scoring"],
      ["Marketing literature and unquantified claims", "Not evidence", "Excluded from scoring entirely"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Move claims into the contract or drop them from the score",
    clinicalInterpretation:
      "Any statement that materially affects the score — availability, training, upgrade path, consumable pricing — should be capable of appearing in the contract. If a vendor will not commit to it contractually, the panel is scoring an aspiration.",
    hospitalRecommendation:
      "Run a pre-award check in which every scored claim above a defined weight is traced to a contractual clause. Claims that cannot be traced are either removed from the evaluation or converted into contract conditions before award.",
  },
  {
    type: "h2",
    id: "demonstrations",
    text: "Site Visits, Demonstrations and Trials",
    number: 5,
    body: "These activities are valuable and easily corrupted. The difference lies entirely in who controls the agenda.",
  },
  {
    type: "ul",
    items: [
      "Write the observation protocol before the visit: the tasks to be observed, the questions to be asked and the fields to be recorded on every visit.",
      "Use the hospital's own cases and workflows where possible, not the vendor's prepared demonstration set.",
      "Send the same team to every visit; different observers across different vendors produce non-comparable notes.",
      "Include a biomedical engineer on every visit, and give them time alone with the host site's engineering team.",
      "Ask the host site what they would specify differently and what surprised them after installation — the two most informative questions available.",
      "Record time and step counts for two or three routine tasks; these are the only workflow numbers that transfer between sites.",
      "Debrief immediately and score independently before discussion, so the first strong opinion does not become the panel's memory.",
      "Treat any offer of hospitality or unrelated benefit as a governance matter under the institution's conflict of interest policy.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "The question that reveals real serviceability",
    text: "Ask a reference site: what was your longest single unplanned outage on this system, and what caused it? Availability percentages hide the outage profile — a hospital can lose two weeks to one parts delay and still report high annual availability. The shape of downtime matters more to a clinical service than its total.",
  },
  {
    type: "h2",
    id: "scoring",
    text: "Scoring Discipline and Panel Behaviour",
    number: 6,
    body: "The mechanics of scoring determine whether the record reflects the panel's judgement or the loudest member's.",
  },
  {
    type: "table",
    headers: ["Practice", "Purpose", "Failure it prevents"],
    rows: [
      ["Independent scoring before panel discussion", "Captures each member's own assessment", "Single-voice capture and anchoring"],
      ["Defined scale descriptors for every score point", "Makes a 3 mean the same thing to everyone", "Score inflation and inconsistent ranges"],
      ["Written justification required for extreme scores", "Surfaces the reasoning behind outliers", "Unexplained scores that cannot be defended later"],
      ["Moderation meeting that adjusts by argument only", "Resolves genuine differences of interpretation", "Averaging away substantive disagreement"],
      ["Technical scoring completed before commercial disclosure", "Protects technical judgement", "Price contamination of capability assessment"],
      ["Non-participation on any criterion outside a member's competence", "Keeps scores expert", "Uninformed scoring diluting expert assessment"],
      ["Declared conflicts recorded before scoring begins", "Preserves integrity of the record", "Late challenge to the whole process"],
    ],
  },
  {
    type: "h2",
    id: "commercial",
    text: "Separating Technical Merit from Commercial Terms",
    number: 7,
    body: "Technical and commercial assessment answer different questions and should be conducted in that order, then combined explicitly.",
  },
  {
    type: "p",
    text: "The technical assessment establishes which offers are capable of meeting the requirement and how well. The commercial assessment establishes what each capable offer costs across its life, on comparable terms. Combining them prematurely produces the two familiar errors: the cheapest offer wins because technical differences were never quantified, or the most capable offer wins because cost was only ever assessed as purchase price.",
  },
  {
    type: "ul",
    items: [
      "Normalise commercial offers before comparison: same contract duration, same service scope, same training scope, same consumable volumes.",
      "Compare lifecycle cost over a stated period rather than purchase price, and state the period in the evaluation record.",
      "Price the exclusions: what each offer does not cover is often where the real difference lies.",
      "Test the sensitivity of the ranking to reasonable changes in volume and service assumptions before award.",
      "Treat currency, escalation and indexation terms as part of the commercial score, not as small print.",
      "Where a technically superior offer costs more, state what the additional expenditure buys in the hospital's own terms.",
    ],
  },
  {
    type: "h2",
    id: "record",
    text: "The Evaluation Record",
    number: 8,
    body: "The record is the deliverable. Everything else is process.",
  },
  {
    type: "requirements",
    checklist: [
      "Published criteria and weightings dated before offer opening",
      "Compliance gate results with reasons for any exclusion",
      "Individual scores with written justification for outliers",
      "Moderated scores with a note of what changed and why",
      "Site visit and demonstration notes on the common protocol",
      "Normalised lifecycle cost comparison with stated assumptions",
      "Sensitivity check on the leading assumptions",
      "Traceability of scored claims to contract clauses",
      "Declared conflicts of interest",
      "Award recommendation with the reasoning stated in full sentences",
    ],
    specs: {
      title: "Record quality tests",
      rows: [
        { label: "Reconstructability", value: "A non-participant can follow the reasoning end to end" },
        { label: "Discrimination", value: "Criteria produced meaningful differences between offers" },
        { label: "Traceability", value: "Every scored claim maps to evidence and, where material, to contract" },
        { label: "Independence", value: "Scores recorded before group discussion" },
        { label: "Separation", value: "Technical scoring dated before commercial disclosure" },
        { label: "Completeness", value: "Excluded offers have documented reasons" },
      ],
    },
  },
  {
    type: "faq",
    items: [
      {
        q: "Should evaluation criteria be shared with vendors in advance?",
        a: "The criteria and their weightings should normally be published with the tender, because doing so improves the quality of responses and is required by many procurement regimes. Detailed scale descriptors used internally by the panel may remain internal, provided they do not introduce requirements the criteria did not state.",
      },
      {
        q: "How many evaluation criteria are appropriate?",
        a: "Enough to cover the six axes with the detail the project requires — commonly between eight and twenty scored criteria. Very long criteria sets dilute weight so thinly that no criterion can influence the outcome, which is functionally the same as having none.",
      },
      {
        q: "Can a vendor demonstration be scored at all?",
        a: "It can be scored for usability and workflow when it follows a common protocol using the hospital's own tasks and the same observers attend every demonstration. A demonstration conducted on the vendor's terms, with different observers each time, is not comparable evidence and should inform questions rather than scores.",
      },
      {
        q: "What if the clinical team strongly prefers an offer that scores lower?",
        a: "Investigate why. Either the preference reflects a genuine requirement the criteria failed to capture — in which case the omission should be documented and, if material, the process reconsidered — or it reflects familiarity. The one unacceptable response is to adjust scores until the preferred offer wins.",
      },
      {
        q: "How should upgrade path be evaluated?",
        a: "As a priced, dated commitment rather than a statement of intent. Ask what specific upgrades are available for the offered configuration, at what price, with what infrastructure implication and for how long the platform will be supported. An unpriced upgrade path is not comparable between vendors.",
      },
      {
        q: "Is a two-stage evaluation worthwhile for smaller purchases?",
        a: "For lower-value, well-understood equipment a single-stage evaluation with a compliance gate is usually proportionate. Two-stage evaluation earns its administrative cost where the market is diverse, the requirement is complex, or the lifecycle cost is dominated by service and consumables.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Building an evaluation model for a live tender?",
    subheading:
      "AbuFarha Medical works with hospital evaluation panels on technical specifications, comparative assessment and lifecycle cost analysis across every imaging modality we supply.",
    technology: "Equipment Evaluation",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Procurement review", name: "AbuFarha Projects & Tenders", credential: "Tender evaluation and specification development" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Serviceability assessment and lifecycle support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel:
      "Established public procurement evaluation practice, medical device assessment guidance and AbuFarha Medical tender experience",
    disclaimer:
      "Evaluation rules are governed by applicable procurement law and institutional policy. Where this guidance differs from local requirements, local requirements prevail.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Procurement and evaluation practice",
        items: [
          { label: "Public procurement guidance on award criteria and most economically advantageous tender assessment" },
          { label: "WHO medical device technical series — procurement process and assessment" },
        ],
      },
      {
        title: "Device performance and safety standards",
        items: [
          { label: "IEC 60601 series — basic safety and essential performance" },
          { label: "Modality-specific performance standards used to substantiate technical claims" },
        ],
      },
      {
        title: "Usability assessment",
        items: [
          { label: "IEC 62366 — application of usability engineering to medical devices" },
          { label: "Manufacturer usability and human factors documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as guidance is revised.",
  },
  {
    type: "takeaways",
    items: [
      "State what you value, in writing, before you see what is offered — then do not change it mid-evaluation.",
      "Assess six axes: clinical capability, workflow, infrastructure fit, serviceability, lifecycle economics and training.",
      "Constraints belong in a pass/fail gate; only merit should be scored.",
      "Rank evidence explicitly, and treat vendor demonstrations as question generators rather than comparative data.",
      "Score technical criteria independently and before commercial disclosure.",
      "Trace every material scored claim to a contract clause before award.",
      "The evaluation record, not the meeting, is the deliverable — it must be reconstructable by an outsider.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "Good evaluation does not require more meetings. It requires the panel to commit to its values before it is exposed to persuasion.",
  },
  {
    type: "p",
    text: "Hospitals that publish weightings in advance, gate constraints, insist on an evidence hierarchy, score independently and separate technical from commercial assessment reach decisions they can defend and, more importantly, decisions that hold up in service. When the same asset is replaced years later, the evaluation record becomes the starting point for the next specification — which is the quiet, compounding return on doing it properly the first time.",
  },
];
