/**
 * Mammography system buying guide — Mammography cluster (buying).
 */

import type { ContentBlock, TocItem } from "../blog";

export const MAMMO_BUYING_TOC: TocItem[] = [
  { id: "overview", title: "Define the Service Before the System" },
  { id: "requirements", title: "Requirements That Follow From Casemix" },
  { id: "specification", title: "Writing a Specification That Cannot Be Gamed" },
  { id: "evaluation", title: "Evaluating Systems Fairly" },
  { id: "accessories", title: "Accessories, Displays and Integration" },
  { id: "cost", title: "Cost, Contracts and Refurbished Options" },
  { id: "implementation", title: "Implementation and Go-Live" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MAMMO_BUYING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Mammography procurement fails in a characteristic way: the specification concentrates on detector parameters, the evaluation happens on phantoms in a demonstration room, and the accessories that determine whether the service can actually function — magnification paddles, biopsy capability, diagnostic displays, storage capacity — arrive as unfunded surprises.",
      "A better process starts from the service being delivered. Screening and diagnostic work impose different throughput, accessory and pathway requirements. Tomosynthesis imposes reading capacity and IT requirements that dwarf the price difference in the hardware. Positioning ergonomics affect detection more than most detector specifications do.",
      "This guide sets out how to define requirements from casemix, write a testable specification, evaluate systems with your own staff and patients, and cost the whole service rather than the machine.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Service definition, casemix-driven requirements, testable specification writing, structured evaluation, accessories and integration, cost and contracts, and implementation planning",
    audience:
      "Procurement and finance teams, breast service managers, radiologists and mammographers, medical physics and biomedical engineering",
    readingTime: "15 min read",
    technology: "Mammography Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Define the Service Before the System",
    number: 1,
    body: "Answer these questions before any vendor conversation.",
  },
  {
    type: "ul",
    items: [
      "Is this a screening unit, a diagnostic unit, or both — and what is the annual volume of each?",
      "Will tomosynthesis be used, and if so with synthetic 2D or combined acquisition?",
      "Will the unit perform biopsy, and with which guidance method and platform?",
      "Who reads the images, where, and on what displays?",
      "Is the unit part of a national screening programme with mandated standards?",
      "Is the room existing or new, and what are its dimensions and shielding status?",
      "Is a mobile screening unit part of the service model?",
      "What is the expected service life and the replacement point of the current system?",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Tomosynthesis is a service decision, not a feature choice",
    text: "Adding tomosynthesis changes reading time, PACS storage, workstation requirements, biopsy needs and physics QA. If those consequences are not funded and planned, the capability is bought and then not used to its potential — a common and expensive outcome.",
  },
  {
    type: "h2",
    id: "requirements",
    text: "Requirements That Follow From Casemix",
    number: 2,
    body: "Each service model implies a different configuration.",
  },
  {
    type: "table",
    headers: ["Service model", "Configuration implications", "Frequently missed"],
    rows: [
      ["High-volume screening", "Fast workflow, robust ergonomics, worklist integration", "Throughput testing with real positioning, not phantom cycles"],
      ["Diagnostic and symptomatic clinic", "Magnification views, full paddle range, biopsy capability", "Magnification and spot compression paddles"],
      ["Combined screening and diagnostic", "Both configurations plus schedule protection", "Appointment length differences in room planning"],
      ["Tomosynthesis service", "Storage, workstation, reading capacity, guided biopsy", "PACS storage and network bandwidth"],
      ["Contrast-enhanced mammography", "Dual-energy capability, contrast pathway, adverse-reaction provision", "Clinical pathway and consent process"],
      ["Mobile screening", "Vehicle-mounted system, connectivity, robustness", "Data transfer from remote sites"],
      ["Surgical support", "Specimen radiography capability", "Intraoperative margin workflow"],
    ],
  },
  {
    type: "h2",
    id: "specification",
    text: "Writing a Specification That Cannot Be Gamed",
    number: 3,
    body: "Express requirements as measurable, testable statements tied to your own acceptance testing.",
  },
  {
    type: "ul",
    items: [
      "Detector pixel pitch and active area, stated numerically with the field sizes supported.",
      "Available target and filter combinations, and the automatic selection logic across thickness and density.",
      "Automatic exposure control performance across a stated thickness range, verified at acceptance.",
      "Average glandular dose at stated phantom thicknesses, to be measured — not quoted from brochures.",
      "Threshold contrast or contrast-detail performance against the applicable national protocol.",
      "Tomosynthesis angular range, number of projections, section spacing, dose per acquisition and acquisition time under compression.",
      "Synthetic 2D availability and its regulatory approval status in your jurisdiction.",
      "Paddle range: standard, spot compression, magnification, small-breast and implant-appropriate options.",
      "Compression force range, display accuracy and controlled-release behaviour.",
      "Biopsy platform compatibility, including tomosynthesis-guided capability and needle guides.",
      "DICOM conformance: worklist, structured dose reporting, tomosynthesis object support, secondary capture.",
      "Cybersecurity and software support horizon stated in writing.",
      "Uptime commitment, response times and inclusion or exclusion of tube, detector and paddles in the contract.",
      "Training scope: number of sessions, staff covered, radiologist reading training for tomosynthesis.",
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Tie every specification line to an acceptance test",
    clinicalInterpretation:
      "A requirement that cannot be measured at acceptance is a statement of intent. Dose, contrast-detail performance, AEC behaviour and acquisition time are all measurable, and vendors respond differently when they know the numbers will be verified in your room.",
    hospitalRecommendation:
      "Include the acceptance test protocol in the tender documentation and make payment or sign-off conditional on meeting the stated figures in situ with your medical physics service.",
  },
  {
    type: "h2",
    id: "evaluation",
    text: "Evaluating Systems Fairly",
    number: 4,
    body: "Evaluate with your staff, your patients and your reading conditions.",
  },
  {
    type: "table",
    headers: ["Evaluation element", "Method", "Why it matters"],
    rows: [
      ["Positioning ergonomics", "Your mammographers positioning real patients across body habitus", "The largest determinant of tissue coverage and repeat rate"],
      ["Patient comfort", "Structured feedback on compression and contact surfaces", "Directly affects attendance and re-attendance"],
      ["Image quality on real cases", "Blinded reading by your radiologists on your displays", "Detector data sheets do not predict reading experience"],
      ["Dose at matched image quality", "Physics measurement at equal contrast-detail performance", "The only fair dose comparison"],
      ["Throughput", "Timed simulated screening list", "Determines whether volume targets are achievable"],
      ["Tomosynthesis reading time", "Timed reading of comparable cases", "The main operational cost of adoption"],
      ["Workstation responsiveness", "Load and scroll large studies over your network", "The most common post-go-live complaint"],
      ["Service and reference sites", "Contact comparable services using the system", "Reveals uptime and support reality"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Evaluating in the vendor's room on the vendor's monitor",
    text: "Demonstration environments have ideal lighting, calibrated high-end displays and no schedule pressure. Systems must be assessed with your radiographers, your patient population, your displays and your network before any comparative judgement is meaningful.",
  },
  {
    type: "h2",
    id: "accessories",
    text: "Accessories, Displays and Integration",
    number: 5,
    body: "This is where budgets are most often incomplete.",
  },
  {
    type: "ul",
    items: [
      "Full paddle set including magnification and spot compression for diagnostic work.",
      "Biopsy platform, needle guides and vacuum-assisted device with consumable supply agreement.",
      "Specimen radiography capability where calcification retrieval must be confirmed.",
      "Two high-luminance calibrated diagnostic displays per reading position, with the reading environment addressed.",
      "Reporting workstation specified for tomosynthesis volumes, not for 2D.",
      "PACS storage capacity and retention policy sized for tomosynthesis data.",
      "Network bandwidth verified for remote or home reading if applicable.",
      "Modality worklist and structured dose reporting configuration.",
      "Screening programme data integration where a national programme applies.",
      "Physics acceptance testing and the QA test equipment the programme requires.",
      "Patient positioning aids, face shields and comfort accessories.",
      "Uninterruptible power supply where local supply quality warrants it.",
    ],
  },
  {
    type: "h2",
    id: "cost",
    text: "Cost, Contracts and Refurbished Options",
    number: 6,
    body: "Model the ten-year service cost, not the equipment price.",
  },
  {
    type: "table",
    headers: ["Cost element", "Behaviour", "Note"],
    rows: [
      ["System and detector", "Largest capital item", "Detector replacement cost dominates late-life risk"],
      ["Tomosynthesis licence", "Sometimes separable and upgradable", "Confirm upgrade path and cost if deferring"],
      ["Displays and workstations", "Frequently underfunded", "Diagnostic-grade displays are not optional"],
      ["PACS storage growth", "Steep with tomosynthesis", "Model several years of data growth"],
      ["Biopsy consumables", "Recurring, volume-driven", "Model per-case cost against expected activity"],
      ["Service contract", "Reflects uptime commitment and component cover", "Confirm tube, detector and paddle inclusion"],
      ["Physics and QA support", "Annual, mandatory", "Include in the operating budget"],
      ["Training", "Recurring with staff turnover", "Include reading training for tomosynthesis"],
      ["Refurbished systems", "Lower capital, shorter support horizon", "Verify documented refurbishment and remaining software support"],
      ["Downtime", "Lost screening or clinic capacity", "Cost it in sessions to compare contract tiers"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Ask for the software support end date in writing",
    text: "Mammography systems are frequently retired because acquisition software, cybersecurity patching or PACS compatibility ends, not because the hardware fails. A written support horizon converts an unknown into a planning input for replacement.",
  },
  {
    type: "h2",
    id: "implementation",
    text: "Implementation and Go-Live",
    number: 7,
    body: "Plan the transition as carefully as the purchase.",
  },
  {
    type: "ul",
    items: [
      "Confirm room readiness: shielding assessment, power, environment, privacy and access.",
      "Schedule physics acceptance testing before any clinical use, with results recorded as baseline.",
      "Configure and test worklist, PACS transfer and structured dose reporting from the actual room.",
      "Recalculate reading session capacity if tomosynthesis is being introduced.",
      "Deliver positioning training on the new system before the first clinical list, not during it.",
      "Deliver radiologist reading training for tomosynthesis and synthetic 2D appearances.",
      "Establish the QA programme on day one: daily, weekly and monthly tests with named owners.",
      "Plan prior image availability and hanging protocols for comparison with the previous system.",
      "Set a review point at four to eight weeks covering repeat rate, throughput and reading times.",
      "Audit recall and detection rates before and after transition to detect unintended effects.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Should we buy tomosynthesis now or upgrade later?",
        a: "If tomosynthesis is intended within the system's life, buying a tomosynthesis-capable platform and confirming the upgrade cost in writing is usually the better position. The decisive factor is whether reading capacity, storage and biopsy capability can be resourced when the capability is switched on.",
      },
      {
        q: "How do we compare dose between vendors fairly?",
        a: "Only at matched image quality. Compare measured average glandular dose at equivalent contrast-detail performance using your national protocol and your medical physics service. Quoted dose figures at unspecified image quality are not comparable.",
      },
      {
        q: "Are refurbished mammography systems appropriate?",
        a: "They can be, where the refurbisher documents component replacement, the system passes full physics acceptance, and the remaining software and cybersecurity support horizon is sufficient. In accredited screening programmes, check the programme's own position on system age and specification first.",
      },
      {
        q: "What is the most commonly underfunded item?",
        a: "Diagnostic reporting displays and the reading environment, followed by PACS storage for tomosynthesis and biopsy consumables. All three directly affect whether the clinical benefit of the system is realised.",
      },
      {
        q: "How important is positioning ergonomics really?",
        a: "Decisive. Tissue not included in the image cannot be read, regardless of detector quality. Systems that make good positioning easier reduce repeat rates and improve coverage, which is why mammographer-led evaluation with real patients is essential.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Specifying or replacing a mammography system?",
    subheading:
      "AbuFarha Medical supplies, installs and maintains digital mammography and tomosynthesis systems, with specification support, physics acceptance coordination and training.",
    technology: "Mammography Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Breast imaging applications and training" },
      { role: "Commercial review", name: "AbuFarha Projects & Procurement", credential: "Imaging capital procurement and cost modelling" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "European and national breast screening guidance, IEC equipment and acceptance testing standards, and hospital procurement practice",
    disclaimer:
      "Screening programme requirements, dose reference levels and accreditation rules are jurisdiction-specific. Involve medical physics, the screening programme and clinical leads in any procurement decision.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Programme and quality guidance",
        items: [
          { label: "European guidelines for quality assurance in breast cancer screening and diagnosis" },
          { label: "National breast screening programme equipment specification requirements" },
        ],
      },
      {
        title: "Standards and testing",
        items: [
          { label: "IEC 60601-2-45 for mammographic and tomosynthesis X-ray equipment" },
          { label: "IEC 61223-3-2 — acceptance testing for mammographic equipment" },
        ],
      },
      {
        title: "Procurement and lifecycle",
        items: [
          { label: "WHO medical device technical series — technology assessment and procurement" },
          { label: "National guidance on capital medical equipment replacement planning" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards and programmes are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Define the service — screening, diagnostic, tomosynthesis, biopsy — before specifying the system.",
      "Tie every specification line to a measurable acceptance test performed in your own room.",
      "Compare dose only at matched image quality, measured by your medical physics service.",
      "Evaluate positioning ergonomics with your mammographers and real patients; it drives coverage and repeats.",
      "Fund diagnostic displays, tomosynthesis-capable workstations, PACS storage and biopsy consumables at purchase.",
      "Obtain the software and cybersecurity support horizon in writing; it usually sets replacement timing.",
      "Plan reading capacity, training and QA before go-live, and audit recall and detection across the transition.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "The right mammography purchase is the one that equips a defined service completely.",
  },
  {
    type: "p",
    text: "A slightly more expensive system with funded displays, storage, accessories, biopsy capability and training delivers a better service than a cheaper system surrounded by gaps. Specify the service, verify the numbers in your own room, and cost ten years rather than one invoice.",
  },
];
