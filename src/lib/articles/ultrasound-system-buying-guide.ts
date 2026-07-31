/**
 * Ultrasound system buying guide — Ultrasound cluster (transactional).
 */

import type { ContentBlock, TocItem } from "../blog";

export const US_BUYING_TOC: TocItem[] = [
  { id: "start", title: "Start From Casemix, Not From Feature Lists" },
  { id: "tiers", title: "System Tiers and What They Actually Buy" },
  { id: "probes", title: "The Probe Set Is Most of the Decision" },
  { id: "specification", title: "Specification Checklist" },
  { id: "evaluation", title: "Evaluating Systems Fairly" },
  { id: "integration", title: "Reporting, Archiving and IT Integration" },
  { id: "cost", title: "Cost Beyond the Purchase Price" },
  { id: "mistakes", title: "Common Procurement Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const US_BUYING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Ultrasound is the most frequently purchased imaging equipment in most hospitals and the most frequently mis-purchased. The reason is structural: systems are quoted as a console with a probe list, while clinical performance is determined by the combination of transducer set, processing, presets and the operator using them. Two quotations with similar headline specifications can deliver materially different studies.",
      "A disciplined purchase starts from the examinations the system will perform, expresses them as measurable requirements, and evaluates candidate systems on those examinations with the department's own operators. Everything else — feature counts, screen size, marketing terminology for flow imaging — is secondary.",
      "This guide sets out how to define requirements, how tiers differ, how to specify the probe set, how to run a defensible evaluation, and which costs appear after installation.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Casemix-led requirement definition, system tiers, probe set specification, technical checklist, structured evaluation, IT integration, lifetime cost and procurement pitfalls",
    audience:
      "Radiology and clinical department leads, sonographers, biomedical engineering, procurement and finance teams",
    readingTime: "15 min read",
    technology: "Ultrasound Systems",
  },
  {
    type: "h2",
    id: "start",
    text: "Start From Casemix, Not From Feature Lists",
    number: 1,
    body: "The examination mix determines every subsequent requirement.",
  },
  {
    type: "ul",
    items: [
      "List the examinations the system will perform and the approximate annual volume of each.",
      "Identify the most technically demanding routine examination — it sets the performance floor.",
      "Note patient factors: body habitus, paediatric proportion, and how many studies are performed at the bedside.",
      "Record where the system will live and whether it moves between areas during a shift.",
      "State who will operate it: dedicated sonographers, rotating clinicians, or both.",
      "Define reporting expectations: on-console reporting, structured reports, or dictation elsewhere.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "One sentence should drive the specification",
    text: "\"This system must reliably perform [most demanding routine examination] on [patient population] in [location], operated by [staff group].\" A requirement that cannot be written this way is not yet a requirement.",
  },
  {
    type: "h2",
    id: "tiers",
    text: "System Tiers and What They Actually Buy",
    number: 2,
    body: "Tier differences appear in difficult patients, not in easy demonstrations.",
  },
  {
    type: "table",
    headers: ["Tier", "Typical role", "What the extra cost delivers", "Common misuse"],
    rows: [
      ["Handheld / tablet", "Focused bedside questions, procedural guidance", "Portability and availability", "Used as a substitute for formal departmental studies"],
      ["Compact portable cart", "Ward rounds, theatre, access procedures", "Full probe options with mobility", "Bought for a high-volume department workload"],
      ["Mid-range cart", "General departmental imaging", "Better penetration, Doppler sensitivity, workflow tools", "Specified without the probes the casemix needs"],
      ["Premium cart", "Difficult patients, cardiac, advanced applications", "Low-flow sensitivity, elastography, advanced quantification", "Purchased for prestige where casemix does not require it"],
      ["Application-specific", "Cardiology, obstetrics, musculoskeletal", "Dedicated probes, measurement packages, presets", "Deployed as a general-purpose system"],
    ],
  },
  {
    type: "h2",
    id: "probes",
    text: "The Probe Set Is Most of the Decision",
    number: 3,
    body: "The transducer determines what information reaches the processing chain.",
  },
  {
    type: "p",
    text: "No console setting recovers detail the probe never acquired. A mid-range system with the correct transducers outperforms a premium console with an incomplete probe set for the examinations that matter. Probe lines also differ in availability, price and replacement lead time, which affects service continuity as much as image quality.",
  },
  {
    type: "table",
    headers: ["Probe family", "Typical use", "Specify when"],
    rows: [
      ["Curvilinear", "Abdomen, obstetrics, deep structures", "Almost always — the general workhorse"],
      ["Linear", "Vascular, musculoskeletal, superficial, access", "Vascular, MSK, procedural or bedside access work"],
      ["Phased array", "Cardiac and focused thoracic imaging", "Cardiac studies or focused critical-care assessment"],
      ["Endocavity", "Gynaecology, obstetrics, prostate", "Women's health or urology services"],
      ["Small-footprint / paediatric", "Neonatal and paediatric imaging", "Any meaningful paediatric or neonatal volume"],
      ["Specialty (intraoperative, TEE)", "Theatre and cardiac procedures", "Only where a defined procedural programme exists"],
    ],
  },
  {
    type: "h2",
    id: "specification",
    text: "Specification Checklist",
    number: 4,
    body: "Written in measurable terms so tenders can be compared.",
  },
  {
    type: "ul",
    items: [
      "Required probe set with frequency ranges, quantities and included spares.",
      "Imaging modes required: harmonic imaging, compound imaging, colour, power, pulsed and continuous-wave Doppler.",
      "Doppler low-flow sensitivity requirement, to be demonstrated on the department's own patients or a suitable phantom.",
      "Number of active probe ports and whether hot-swapping is supported.",
      "Measurement and calculation packages required per specialty, with structured report output.",
      "DICOM conformance: store, worklist, structured reporting, and archive routing behaviour on network loss.",
      "Physical requirements: weight, footprint, battery endurance, cable and connector durability.",
      "Cleaning and disinfection compatibility for every probe supplied.",
      "Training scope: number of days, on-site application training, and preset configuration.",
      "Service terms: response times, probe warranty duration, loan probe availability, software update policy.",
    ],
  },
  {
    type: "h2",
    id: "evaluation",
    text: "Evaluating Systems Fairly",
    number: 5,
    body: "Vendor demonstrations select for easy patients; evaluation should not.",
  },
  {
    type: "ul",
    items: [
      "Evaluate on the department's own examination list, including technically difficult patients.",
      "Use the department's own operators, not vendor application specialists, for at least part of each session.",
      "Score against a written matrix agreed before the first demonstration.",
      "Test the same examinations on each candidate system, in the same environment.",
      "Include workflow timing: boot time, preset switching, probe change, measurement and report completion.",
      "Verify archiving end to end into the live archive, including behaviour when the network drops.",
      "Assess cleaning and reprocessing practicality with the actual probes supplied.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Keep the scoring matrix",
    text: "A written matrix completed during evaluation is the strongest defence against a decision being reopened later, and the fastest way to justify the chosen system to finance and clinical governance.",
  },
  {
    type: "h2",
    id: "integration",
    text: "Reporting, Archiving and IT Integration",
    number: 6,
    body: "Studies that do not reach the archive reliably are clinical and legal exposure.",
  },
  {
    type: "ul",
    items: [
      "Confirm modality worklist retrieval so patient identity is not typed manually.",
      "Verify DICOM store to the production archive, including cine loops and structured measurements.",
      "Establish what happens to studies acquired while the network is unavailable, and how they are reconciled.",
      "Agree wireless coverage in every area the system will be used, including theatres and wards.",
      "Define who administers presets and user accounts after handover.",
      "Include cybersecurity requirements: patching policy, supported operating system lifetime, and access control.",
    ],
  },
  {
    type: "h2",
    id: "cost",
    text: "Cost Beyond the Purchase Price",
    number: 7,
    body: "Probes and service dominate the lifetime figure.",
  },
  {
    type: "table",
    headers: ["Cost element", "Character", "Planning note"],
    rows: [
      ["Console and initial probes", "One-off capital", "Rarely the largest lifetime element"],
      ["Probe replacement", "Recurring, damage driven", "Highest-wear item; budget replacements from year one"],
      ["Service contract", "Annual", "Confirm whether probes are included or excluded"],
      ["Consumables", "Recurring", "Gel, covers, disinfectant wipes and probe sheaths"],
      ["Reprocessing equipment", "Capital plus recurring", "Required for endocavity and high-level disinfection"],
      ["Training and competency", "Recurring", "Refresher and new-starter training as staff rotate"],
      ["Software and cybersecurity updates", "Periodic", "Check whether major versions are chargeable"],
    ],
  },
  {
    type: "h2",
    id: "mistakes",
    text: "Common Procurement Mistakes",
    number: 8,
    body: "The recurring failures are predictable and avoidable.",
  },
  {
    type: "ul",
    items: [
      "Buying the console and deferring probes, leaving the system unable to perform its intended workload.",
      "Comparing tenders on feature counts rather than on demonstrated performance in the department's own examinations.",
      "Ignoring probe replacement cost and lead time in the lifetime model.",
      "Placing a portable system in a high-volume department because it was cheaper.",
      "Accepting a demonstration on selected easy patients as evidence of performance.",
      "Omitting preset configuration and application training, so a capable system is used at default settings.",
      "Overlooking reprocessing requirements for endocavity probes until after delivery.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is a premium system always the safer choice?",
        a: "No. Premium performance benefits difficult patients and advanced applications. Where casemix is routine, the same budget spent on a mid-range system with a complete probe set, thorough training and a spare probe usually produces better service reliability.",
      },
      {
        q: "How many probes should be purchased initially?",
        a: "Every probe needed for the routine examination list, plus at least one spare of the highest-use probe type. A single damaged probe should not stop the service.",
      },
      {
        q: "Should refurbished ultrasound systems be considered?",
        a: "They can be appropriate for secondary or backup deployments where supply is documented, probes are tested individually, service support is contractually available and the software remains supported. Probe condition matters more than console hours.",
      },
      {
        q: "How long should an ultrasound system remain in service?",
        a: "Typical planning horizons run several years and are usually ended by software support limits, probe availability or workflow obsolescence rather than mechanical failure. Confirm supported software lifetime before purchase.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "Specify the examinations, buy the probes, prove the workflow.",
  },
  {
    type: "p",
    text: "A successful ultrasound purchase is decided before any system is demonstrated. Define the examination mix and the most demanding routine study, translate them into a measurable specification with a complete probe set, and evaluate candidates on those examinations with the department's own operators and a written scoring matrix. Then plan for the costs that follow: probe replacement, reprocessing, training and software support. Systems bought this way are still clinically appropriate years later; systems bought on feature lists are frequently replaced early.",
  },
  {
    type: "articleCta",
    heading: "Planning an ultrasound purchase?",
    subheading:
      "AbuFarha Medical Supplies advises on specification, supplies ultrasound systems and probe sets, and provides installation, training and biomedical service support.",
    technology: "Ultrasound Systems",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Procurement and quality frameworks",
        items: [
          { label: "World Health Organization — medical device technical series", url: "https://www.who.int/" },
          { label: "International Organization for Standardization — quality and medical device standards", url: "https://www.iso.org/" },
        ],
      },
      {
        title: "Equipment and interoperability standards",
        items: [
          { label: "International Electrotechnical Commission — ultrasonic equipment standards", url: "https://www.iec.ch/" },
          { label: "DICOM Standard — imaging interoperability", url: "https://www.dicomstandard.org/" },
        ],
      },
    ],
    note: "Configurations, probe availability and service terms are vendor and market specific and must be confirmed in writing during tender.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Diagnostic ultrasound" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Ultrasound systems and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Procurement practice synthesis",
    disclaimer:
      "Educational guidance for equipment planning. It is not a specification document and does not replace local tender, regulatory or clinical governance requirements.",
  },
];
