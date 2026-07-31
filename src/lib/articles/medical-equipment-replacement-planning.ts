/**
 * Medical equipment replacement and upgrade planning — Buyer's Guides cluster.
 */

import type { ContentBlock, TocItem } from "../blog";

export const EQUIPMENT_REPLACEMENT_PLANNING_TOC: TocItem[] = [
  { id: "why", title: "Why Replacement Should Be Planned, Not Triggered" },
  { id: "signals", title: "The Signals That Indicate Replacement" },
  { id: "scoring", title: "A Replacement Priority Scoring Method" },
  { id: "upgrade", title: "Upgrade, Refurbish or Replace" },
  { id: "programme", title: "Building a Rolling Replacement Programme" },
  { id: "decommissioning", title: "Decommissioning the Outgoing System" },
  { id: "governance", title: "Governance and Annual Review" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const EQUIPMENT_REPLACEMENT_PLANNING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Most hospitals replace medical equipment reactively. A system fails in a way that cannot be economically repaired, a part becomes unobtainable, or a service contract is withdrawn — and an urgent capital request is prepared under time pressure, with no options appraisal, no competitive process worth the name and no opportunity to align the replacement with the department's wider plan.",
      "Reactive replacement is expensive in three separate ways. The purchase is made without competitive leverage, the clinical service absorbs an unplanned outage, and the configuration chosen is the one available quickly rather than the one the department needed. None of this is caused by a lack of money; it is caused by the absence of a plan.",
      "This guide sets out how to plan replacement as a programme: the signals that genuinely indicate a system is approaching end of useful life, a scoring method that ranks a whole fleet objectively, how to decide between upgrade, refurbishment and replacement, how to build a rolling multi-year programme that smooths capital demand, and how to decommission an outgoing system properly.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Replacement signals, fleet priority scoring, upgrade versus replace analysis, rolling replacement programmes, capital smoothing, decommissioning and data erasure, annual governance review",
    audience:
      "Biomedical engineering managers, radiology and clinical directors, capital planning and finance teams",
    readingTime: "15 min read",
    technology: "Replacement Planning",
  },
  {
    type: "h2",
    id: "why",
    text: "Why Replacement Should Be Planned, Not Triggered",
    number: 1,
    body: "Planned replacement converts an unpredictable series of emergencies into a predictable annual capital requirement.",
  },
  {
    type: "table",
    headers: ["Dimension", "Reactive replacement", "Planned replacement"],
    rows: [
      ["Commercial position", "Urgency reduces leverage; limited comparison", "Full competitive process with time to evaluate"],
      ["Clinical continuity", "Unplanned outage of uncertain duration", "Outage scheduled around clinical demand"],
      ["Configuration", "What is available soonest", "What the department's plan requires"],
      ["Infrastructure", "Discovered during installation", "Surveyed and prepared in advance"],
      ["Capital demand", "Lumpy and unforecastable", "Smoothed across a rolling programme"],
      ["Training", "Compressed or deferred", "Scheduled before go-live"],
      ["Staff experience", "Disruption and improvisation", "Managed transition"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The cost of urgency is usually larger than the cost of the plan",
    clinicalInterpretation:
      "Emergency replacement removes the two conditions that produce a good purchase — time to compare and time to prepare the site. The resulting decisions are rarely wrong in an obvious way; they are simply not the decisions the hospital would have made with three months' notice.",
    hospitalRecommendation:
      "Maintain a rolling replacement plan covering at least five years, reviewed annually, so the majority of replacements are competitive and prepared. Reserve genuine emergency capital for the small residue that cannot be foreseen, rather than treating foreseeable end of life as an emergency.",
  },
  {
    type: "h2",
    id: "signals",
    text: "The Signals That Indicate Replacement",
    number: 2,
    body: "Age alone is a poor indicator. A well-maintained system in a supported platform can serve reliably beyond its nominal life, while a poorly supported system may become untenable early.",
  },
  {
    type: "ul",
    items: [
      "Support status: the manufacturer's declared end of support or end of parts availability date is the strongest single signal, because it sets a hard limit on maintainability.",
      "Parts obtainability in practice: increasing lead times or reliance on reclaimed parts indicates the supply chain is thinning even before formal withdrawal.",
      "Fault frequency and pattern: rising corrective interventions, particularly repeat faults on the same subsystem, indicate accumulating wear rather than isolated failure.",
      "Downtime profile: total downtime matters, but the length of the longest single outage matters more to the clinical service.",
      "Maintenance cost trajectory: annual service and parts cost rising as a proportion of replacement value, especially where major component replacement is imminent.",
      "Clinical capability gap: the system cannot perform examinations the department now needs, or cannot meet current dose or image quality expectations.",
      "Software and cybersecurity status: an unsupported operating platform that cannot be patched is a governance issue independent of mechanical condition.",
      "Regulatory and standards compliance: inability to meet current safety, dose reporting or connectivity requirements.",
      "Workflow and integration limits: inability to support current PACS, RIS or reporting workflows without manual intervention.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Track the longest outage, not just total downtime",
    text: "Two systems can report the same annual availability while presenting completely different clinical risk: one loses an hour a week, the other loses three consecutive weeks waiting for a part. Replacement prioritisation should use the outage profile, because that is what the clinical service actually experiences.",
  },
  {
    type: "h2",
    id: "scoring",
    text: "A Replacement Priority Scoring Method",
    number: 3,
    body: "A scoring method allows a whole fleet to be ranked consistently, so capital is allocated to the highest risk rather than to the most persuasive department.",
  },
  {
    type: "table",
    headers: ["Factor", "What is assessed", "Data source"],
    rows: [
      ["Maintainability", "Support status, parts availability, engineer competence availability", "Manufacturer notices, service records"],
      ["Reliability", "Fault frequency, repeat faults, outage profile", "Maintenance management system"],
      ["Cost", "Annual maintenance and parts cost against replacement value", "Finance and service records"],
      ["Clinical criticality", "Consequence of unavailability, presence of alternatives", "Clinical service assessment"],
      ["Capability", "Gap between current clinical requirement and system capability", "Department clinical review"],
      ["Safety and compliance", "Ability to meet current safety, dose and cybersecurity requirements", "Physics, safety and IT assessment"],
      ["Utilisation", "Workload carried, and whether demand exceeds capability", "Activity data"],
      ["Age relative to expected life", "Position in lifecycle as context, not as a decision", "Asset register"],
    ],
  },
  {
    type: "p",
    text: "Two design rules keep such a model usable. First, weight maintainability and clinical criticality above age, because those are what convert a nominally old system into an actual service risk. Second, treat any factor that makes continued use unsafe or non-compliant as an override rather than a score — a system that cannot be made safe is replaced regardless of its total.",
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Score the fleet annually, not the request",
    text: "When each department submits individual replacement cases, capital follows advocacy. When biomedical engineering scores the entire fleet on the same factors and publishes the ranking, capital follows risk — and departments can see exactly why their system sits where it does.",
  },
  {
    type: "h2",
    id: "upgrade",
    text: "Upgrade, Refurbish or Replace",
    number: 4,
    body: "The middle options are frequently better value than either extreme, and are frequently overlooked because they are less visible.",
  },
  {
    type: "table",
    headers: ["Option", "Best suited to", "Key questions before committing"],
    rows: [
      ["Software or application upgrade", "Capability gaps on otherwise sound hardware", "Is the hardware supported for the upgrade's full expected life? What training is included?"],
      ["Subsystem replacement", "A single failing or obsolete component in a sound system", "Does this extend support status, or only mechanical function?"],
      ["Detector or tube renewal", "High-value consumable components reaching end of life", "How does the cost compare with a proportion of replacement value, and what warranty applies?"],
      ["Factory refurbishment of the existing system", "Sound platforms with cosmetic and wear issues", "What is refurbished, what is renewed, and what support term results?"],
      ["Replacement with certified refurbished equipment", "Budget-constrained replacement of a still-current platform", "Support term, warranty, parts availability and installed base"],
      ["Replacement with new equipment", "End of support, major capability change, or fleet standardisation", "Infrastructure implications and lifecycle cost of the new platform"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Upgrades extend function; support status extends life",
    clinicalInterpretation:
      "An upgrade that improves clinical capability but does not change the platform's declared end of support has bought capability, not years. Hospitals sometimes invest substantially in a system that becomes unsupportable shortly afterwards, because the two questions were never separated.",
    hospitalRecommendation:
      "Before approving any upgrade above a threshold value, require a written statement of the platform's support and parts availability horizon after the upgrade. Investment should be proportionate to the remaining supported life, not to the improvement alone.",
  },
  {
    type: "h2",
    id: "programme",
    text: "Building a Rolling Replacement Programme",
    number: 5,
    body: "A rolling programme is a live document, not an annual submission. Its purpose is to make capital demand predictable and replacement competitive.",
  },
  {
    type: "ul",
    items: [
      "Build from a complete asset register: every relevant asset with acquisition date, expected life, support status, service history and replacement value estimate.",
      "Assign each asset an indicative replacement year from the scoring model, and revise it annually rather than fixing it once.",
      "Smooth the profile deliberately: where several high-value assets fall in the same year, examine which can safely move and which cannot.",
      "Group replacements to gain procurement and standardisation benefit where the market and clinical requirement allow.",
      "Attach infrastructure implications to each entry, so estates work appears in the programme rather than surprising it.",
      "Hold a defined contingency for genuine unforeseen failure, and report against it so its size is evidence-based.",
      "Include decommissioning and disposal cost in each entry, since these are real and routinely omitted.",
      "Publish the programme to clinical departments, which converts replacement from a negotiation into a shared plan.",
    ],
  },
  {
    type: "diagram",
    id: "hospital-workflow",
    title: "Rolling replacement cycle",
    purpose:
      "Shows the annual cycle of asset scoring, programme revision, capital submission, procurement and decommissioning that keeps replacement planned rather than reactive.",
    alt: "Diagram of an annual medical equipment replacement planning cycle covering asset scoring, programme revision, capital approval, procurement, installation and decommissioning",
    caption:
      "The programme is revised every year; individual replacement years move as evidence changes.",
  },
  {
    type: "h2",
    id: "decommissioning",
    text: "Decommissioning the Outgoing System",
    number: 6,
    body: "Decommissioning is a project with safety, legal and data obligations, and it is the stage most often left to the installation week.",
  },
  {
    type: "requirements",
    checklist: [
      "Confirm the clinical cut-over date and the last examination performed on the outgoing system",
      "Export and verify all clinical data, including any studies held only locally on the modality",
      "Erase patient data from all storage in the system to a documented standard, with a certificate of erasure",
      "Retain configuration, protocol and calibration records that inform the new system's setup",
      "Remove or safely manage hazardous components — radioactive sources, cryogens, lead, batteries and electronic waste",
      "Arrange magnet ramp-down and cryogen management for MRI through the manufacturer or a qualified contractor",
      "Notify regulators where authorisation is asset-specific, and update the radiation authorisation",
      "Update the asset register, service contracts, insurance schedule and PM plan",
      "Recover or return spare parts, accessories and consumables specific to the outgoing system",
      "Document disposal or resale route with evidence of lawful disposal or transfer",
    ],
    specs: {
      title: "Decommissioning responsibilities",
      rows: [
        { label: "Clinical cut-over", value: "Department manager" },
        { label: "Data export and verification", value: "PACS administrator with clinical sign-off" },
        { label: "Data erasure certification", value: "IT and biomedical engineering" },
        { label: "Hazardous components", value: "Biomedical engineering with estates" },
        { label: "Cryogen and magnet work", value: "Manufacturer or qualified contractor only" },
        { label: "Regulatory notification", value: "Radiation protection adviser" },
        { label: "Asset and contract records", value: "Biomedical engineering and finance" },
        { label: "Disposal evidence", value: "Procurement" },
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Patient data lives on modalities",
    text: "Imaging systems commonly retain studies, worklists and patient identifiers in local storage. Removing a system from the estate without documented erasure is a data protection incident waiting to be discovered, and it is not resolved by the fact that the equipment was scrapped rather than resold.",
  },
  {
    type: "h2",
    id: "governance",
    text: "Governance and Annual Review",
    number: 7,
    body: "A replacement programme retains authority only if it is reviewed on a fixed cycle by a body that can commit capital.",
  },
  {
    type: "ul",
    items: [
      "Assign ownership of the programme to biomedical engineering, with clinical and finance membership on the reviewing group.",
      "Review annually against fresh service data, support notices and clinical requirement changes.",
      "Record every deviation — replacements deferred, brought forward or removed — with the reason, so the programme retains credibility.",
      "Report the previous year's unplanned failures against the programme, which is the most direct measure of whether the model is working.",
      "Report contingency use, and adjust the contingency provision on evidence rather than habit.",
      "Feed post-installation experience back into expected life and lifecycle cost assumptions for the same equipment class.",
      "Escalate any asset that continues in use past a safety or compliance override as a risk register entry, not as a programme line.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is there a standard replacement age for imaging equipment?",
        a: "Indicative expected lives exist by equipment class and are useful for programme building, but they are planning aids rather than decision rules. Support status, parts availability, reliability and clinical capability determine whether a specific system should be replaced; age only indicates when to look closely.",
      },
      {
        q: "How is maintenance cost compared with replacement cost fairly?",
        a: "Compare the forecast cost of keeping the system serviceable and compliant for a defined further period — including foreseeable major component replacement — against the annualised lifecycle cost of the replacement over its expected life. Comparing a single year's service cost with a purchase price is not a like-for-like comparison.",
      },
      {
        q: "Can certified refurbished equipment be part of a replacement programme?",
        a: "Yes, where support term, warranty, parts availability and installed base are acceptable for the intended service life. It is most appropriate where the platform remains current and the clinical requirement is well within the system's capability, and least appropriate where the driver for replacement was a capability gap.",
      },
      {
        q: "Who should decide replacement priority between departments?",
        a: "A cross-disciplinary group applying a published scoring method, rather than any single department. The scoring model does the comparison; the group's role is to review overrides, infrastructure dependencies and clinical risk that the model cannot capture.",
      },
      {
        q: "What should happen when a system fails before its programmed replacement year?",
        a: "It is assessed against the same options — repair, subsystem replacement, accelerated replacement — using the existing evidence base rather than starting from scratch. This is precisely the situation the programme is designed for: the analysis already exists, so only the timing decision is urgent.",
      },
      {
        q: "How long should a replacement programme look ahead?",
        a: "Far enough to smooth capital demand and prepare infrastructure, which in practice usually means five years in detail and a longer indicative view for high-value assets with major infrastructure implications.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Building a replacement programme for your imaging fleet?",
    subheading:
      "AbuFarha Medical supports hospitals with fleet assessment, upgrade and replacement options, installation planning and lifecycle service across every modality we supply.",
    technology: "Replacement Planning",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Lifecycle management and fleet service" },
      { role: "Procurement review", name: "AbuFarha Projects & Tenders", credential: "Capital replacement programmes" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel:
      "Medical device lifecycle management guidance, manufacturer support and end-of-life notices, and AbuFarha Medical service experience",
    disclaimer:
      "Expected lives, disposal obligations and data protection requirements vary by jurisdiction and equipment class. Confirm requirements with the manufacturer, your regulator and your data protection officer before decommissioning any system.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Lifecycle and asset management",
        items: [
          { label: "WHO medical device technical series — maintenance, decommissioning and disposal" },
          { label: "Healthcare asset management guidance on equipment replacement programmes" },
        ],
      },
      {
        title: "Safety and compliance",
        items: [
          { label: "IEC 60601 series — basic safety and essential performance" },
          { label: "National radiation authorisation requirements covering asset changes" },
        ],
      },
      {
        title: "Data and disposal",
        items: [
          { label: "Data protection requirements for medical device storage media" },
          { label: "Electrical and electronic equipment waste regulations applicable to medical devices" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as guidance is revised.",
  },
  {
    type: "takeaways",
    items: [
      "Reactive replacement costs more in leverage, continuity and configuration than the planning it replaces.",
      "Support status and parts availability are stronger replacement signals than age.",
      "Judge reliability by the outage profile, not only by total downtime.",
      "Score the whole fleet annually on published factors so capital follows risk rather than advocacy.",
      "Separate capability gain from support horizon before approving a major upgrade.",
      "Build a rolling five-year programme with infrastructure and disposal costs attached to each entry.",
      "Treat decommissioning as a project with data, safety and regulatory obligations of its own.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "Replacement planning is the least visible and most consistently valuable discipline in medical equipment management.",
  },
  {
    type: "p",
    text: "A hospital with a scored fleet, a rolling programme and an annual review will still have failures, but it will meet them with analysis already done and infrastructure already understood. A hospital without one will meet the same failures as emergencies, pay more for less suitable equipment, and repeat the experience on the next asset. The difference is not budget. It is whether the work was done before the phone call or after it.",
  },
];
