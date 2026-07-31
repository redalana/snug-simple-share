/**
 * DEXA buying guide article.
 */

import type { ContentBlock, TocItem } from "../blog";

export const DEXA_BUYING_TOC: TocItem[] = [
  { id: "start", title: "Start With the Service, Not the Scanner" },
  { id: "capability", title: "Capability Decisions That Matter" },
  { id: "specifications", title: "Specifications Worth Comparing" },
  { id: "software", title: "Software, Reference Data and Reporting" },
  { id: "infrastructure", title: "Infrastructure and Installation Scope" },
  { id: "lifecycle", title: "Lifecycle Cost and Service" },
  { id: "tender", title: "Tender Requirements and Evaluation" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DEXA_BUYING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Bone densitometers are among the least expensive imaging systems a hospital buys and among the easiest to specify badly. Because the capital cost is modest, procurement often skips the analysis it would apply to a CT or MRI purchase — and the result is a system whose configuration does not match the clinical service it was bought to run.",
      "The decisions that determine value are not headline specifications. They are which sites and analyses the service needs, which reference databases and reporting conventions it will use, how follow-up comparability will be preserved, and what the service arrangement covers.",
      "This guide sets out how to specify, compare and tender a densitometry system so that the purchased configuration supports the intended clinical pathway from day one.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Service-led requirement definition, capability and configuration decisions, specifications that genuinely differentiate systems, software and reference data considerations, installation scope, lifecycle cost and tender evaluation criteria",
    audience:
      "Procurement committees, radiology and rheumatology service leads, medical physicists, biomedical engineering teams, finance planners",
    readingTime: "13 min read",
    technology: "Bone Densitometers (DEXA)",
  },
  {
    type: "h2",
    id: "start",
    text: "Start With the Service, Not the Scanner",
    number: 1,
  },
  {
    type: "ul",
    items: [
      "Which specialties will refer, and for which indications — osteoporosis diagnosis, treatment monitoring, secondary bone loss surveillance, paediatric assessment, body composition?",
      "Projected annual volume and its split between baseline and follow-up examinations.",
      "Whether paediatric measurement is in scope, since that affects reference data and analysis requirements.",
      "Whether body composition analysis is a genuine clinical requirement or an aspiration.",
      "Who will report, under what conventions, and whether an existing service already sets reporting standards the new system must match.",
      "Whether the system replaces an existing scanner whose patients need comparable follow-up — a decisive constraint discussed below.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Replacement is a continuity problem",
    text: "When a densitometer is replaced, every patient under monitoring loses direct comparability with their baseline. Cross-calibration arrangements must be specified in the procurement, not discovered afterwards.",
  },
  {
    type: "h2",
    id: "capability",
    text: "Capability Decisions That Matter",
    number: 2,
  },
  {
    type: "table",
    headers: ["Decision", "Options", "How to decide"],
    rows: [
      ["Measurement sites", "Axial (spine, hip) with or without forearm", "Axial is essential; forearm capability is needed for patients whose axial sites are unusable"],
      ["Body composition", "Included or not configured", "Only specify where a named clinical service will use it routinely"],
      ["Vertebral morphology imaging", "Available or not", "Valuable where the service assesses vertebral fracture; adds reporting workload"],
      ["Paediatric analysis", "Configured or not", "Mandatory if children are in scope; requires appropriate reference data"],
      ["Table access and capacity", "Standard or wide/high-capacity", "Driven by patient population mobility and weight distribution"],
      ["Throughput features", "Scan speed and workflow automation", "Matters only at genuinely high volume; rarely the binding constraint"],
    ],
    caption: "Configuration decisions that shape clinical usefulness more than headline performance figures.",
  },
  {
    type: "h2",
    id: "specifications",
    text: "Specifications Worth Comparing",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Stated in-vivo precision at the sites your service measures — this determines how small a real change can be detected.",
      "Patient dose per examination for each site and protocol.",
      "Scan times for the standard protocols actually used, not the fastest available mode.",
      "Table weight capacity and scan field dimensions relative to your patient population.",
      "Calibration approach and frequency of required phantom procedures.",
      "Data export and archive integration capabilities, including structured reporting output.",
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Precision is the specification that translates directly into clinical capability, because it sets the least significant change against which follow-up is interpreted.",
    clinicalInterpretation:
      "Better precision means shorter defensible follow-up intervals and earlier detection of treatment failure.",
    hospitalRecommendation:
      "Require vendors to state site-specific in-vivo precision and to support a local precision assessment during commissioning.",
  },
  {
    type: "h2",
    id: "software",
    text: "Software, Reference Data and Reporting",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Which reference databases are supplied, which are selectable, and how selection is documented and locked.",
      "Whether analysis can be matched precisely to a prior scan's region-of-interest placement.",
      "Fracture risk tool integration, where local pathways use one.",
      "Reporting template configurability and whether output meets the department's reporting conventions.",
      "Archive and information system integration, including how measurements are stored for future comparison.",
      "Software update policy, cost, and whether updates can alter reported scores.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Ask what an update can change",
    text: "Some software updates change reference data or analysis behaviour. Procurement should require the vendor to disclose, in writing, whether an update can alter previously reported values.",
  },
  {
    type: "h2",
    id: "infrastructure",
    text: "Infrastructure and Installation Scope",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Room size allowing scanning arm travel and assisted patient transfer, with accessible entry for less mobile patients.",
      "Radiation protection assessment by a medical physicist, even though shielding demands are modest.",
      "Stable electrical supply and controlled room temperature to protect calibration stability.",
      "Delivery route, floor loading and installation access confirmed before order.",
      "Network drops and archive configuration completed before commissioning, not after.",
      "Commissioning scope covering acceptance testing, baseline phantom series, operator precision assessment and training.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical delivers densitometry installation and commissioning including acceptance testing, baseline quality control establishment, operator training and precision assessment support, so the service starts with defensible measurement quality.",
  },
  {
    type: "h2",
    id: "lifecycle",
    text: "Lifecycle Cost and Service",
    number: 6,
  },
  {
    type: "table",
    headers: ["Cost element", "Behaviour", "Procurement action"],
    rows: [
      ["Preventive maintenance", "Annual, predictable", "Specify scope including calibration verification"],
      ["X-ray tube and detector", "Long-life but eventual replacement", "Confirm expected life and replacement cost"],
      ["Software updates and support", "Periodic, sometimes chargeable", "Price multi-year support at tender stage"],
      ["Quality control consumables and phantoms", "Low, continuous", "Confirm phantom supply and replacement policy"],
      ["Staff quality control time", "Daily, small", "Build into staffing model, not ignored"],
      ["Cross-calibration on replacement", "One-off, at end of life", "Specify support obligation in contract"],
    ],
    caption: "Densitometry lifecycle cost elements; total cost is dominated by service and support rather than consumables.",
  },
  {
    type: "h2",
    id: "tender",
    text: "Tender Requirements and Evaluation",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "State site-specific precision, dose and scan time requirements as mandatory disclosures rather than optional claims.",
      "Require the configuration list to be explicit: sites, analyses, reference databases, reporting output.",
      "Require installation, commissioning, acceptance testing and training scope to be itemised.",
      "Require a priced multi-year maintenance option with defined response and availability expectations.",
      "Require confirmation of local engineering and applications support presence.",
      "Score on total cost of ownership over the intended service life, not on capital price alone.",
      "Where replacing a system, require a documented cross-calibration approach for patients under follow-up.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is a more expensive densitometer clinically better?",
        a: "Not necessarily. Configuration match, precision at the measured sites and support quality determine clinical value more than capital price.",
      },
      {
        q: "Should body composition analysis always be specified?",
        a: "Only where a named service will use it routinely. Unused capability adds cost, training burden and reporting complexity.",
      },
      {
        q: "How important is table weight capacity?",
        a: "It can be decisive. A system that cannot accommodate part of the referred population creates an unmanageable clinical gap.",
      },
      {
        q: "What is the most commonly overlooked procurement item?",
        a: "Cross-calibration support when replacing an existing system, which protects every patient currently under monitoring.",
      },
      {
        q: "Does the reference database choice need to be in the tender?",
        a: "Yes. It determines reported classifications and should be an explicit, documented configuration decision rather than a default.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Specify from the clinical service definition, not from vendor feature lists.",
      "Site-specific in-vivo precision is the specification that translates into clinical capability.",
      "Reference database and reporting configuration are procurement decisions, not installation details.",
      "Replacement purchases must include cross-calibration support for patients under follow-up.",
      "Evaluate on total cost of ownership and support presence, not capital price alone.",
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
    text: "A well-specified densitometer is a low-cost, high-return investment that supports fracture prevention across several specialties for a decade or more. Getting the configuration, precision expectations, reporting conventions and service arrangement right at tender stage is what separates a productive service from an underused room.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Clinical and quality guidance",
        items: [
          { label: "World Health Organization — osteoporosis diagnostic criteria", url: "https://www.who.int/" },
          { label: "International Osteoporosis Foundation — service and densitometry resources", url: "https://www.osteoporosis.foundation/" },
        ],
      },
      {
        title: "Physics and procurement",
        items: [
          { label: "International Atomic Energy Agency — equipment specification and QA guidance", url: "https://www.iaea.org/" },
          { label: "American Association of Physicists in Medicine — densitometry acceptance testing", url: "https://www.aapm.org/" },
        ],
      },
    ],
    note: "System capabilities, precision figures and configuration options must be confirmed against vendor documentation for the exact model offered.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Bone health service planning" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Densitometry procurement, installation and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Procurement and quality assurance practice synthesis",
    disclaimer:
      "Educational procurement guidance. It does not replace vendor documentation, medical physics assessment or local procurement regulations.",
  },
];
