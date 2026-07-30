import type { ContentBlock, TocItem } from "@/lib/blog";
import solMri from "@/assets/sol-mri.jpg";

export const MRI_PREVENTIVE_MAINTENANCE_AND_SERVICE_CONTRACTS_TOC: TocItem[] = [
  { id: "overview", title: "Why Service Strategy Determines MRI Value" },
  { id: "pm-schedules", title: "Preventive Maintenance Schedules and Tasks" },
  { id: "daily-qa", title: "Daily and Weekly QA Phantom Testing" },
  { id: "cold-head-chiller", title: "Cold Head and Chiller Servicing" },
  { id: "helium-monitoring", title: "Helium Level Monitoring and Cryogen Management" },
  { id: "coil-testing", title: "Coil Testing and the Spare Coil Pool" },
  { id: "uptime-guarantees", title: "Uptime Guarantees and SLA Structure" },
  { id: "response-times", title: "Response Times and Escalation Tiers" },
  { id: "parts-stocking", title: "Parts Stocking and Logistics" },
  { id: "remote-diagnostics", title: "Remote Diagnostics and Predictive Monitoring" },
  { id: "contract-types", title: "Contract Types: Full Risk, Shared Risk, Labour-Only" },
  { id: "kpis", title: "KPIs Hospitals Should Track" },
  { id: "hospital-workflow-diagram", title: "How a Service Event Moves Through the Hospital" },
  { id: "contract-negotiation", title: "Negotiating the Contract: What to Demand" },
  { id: "end-of-support", title: "End-of-Support and Lifecycle Planning" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MRI_PREVENTIVE_MAINTENANCE_AND_SERVICE_CONTRACTS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solMri,
    imageAlt: "Biomedical engineer performing scheduled preventive maintenance on an MRI scanner cabinet",
    paragraphs: [
      "An MRI scanner is only as valuable as its uptime. A hospital can own the best magnet on the market and still deliver poor diagnostic throughput if the cold head fails without warning, a receive coil goes undetected as degraded for months, or a service call takes four days to reach site because the contract never specified a response window. Preventive maintenance and the service contract that governs it are not administrative afterthoughts bolted onto a capital purchase — they are the operational backbone that determines whether an MRI programme is clinically dependable or a recurring source of cancelled lists and frustrated referrers.",
      "Hospitals frequently under-specify service agreements at the point of purchase, when attention is focused on the scanner's clinical specification rather than the mechanics of keeping it running for the next ten to fifteen years. The result is a contract that reads well but leaves critical gaps: no defined response time, no committed parts inventory, no named spare coil pool, no clarity about who pays for a cold head replacement in year six, and no plan for what happens when the vendor stops supporting the software platform. Every one of these gaps eventually becomes a clinical and financial problem.",
      "This guide sets out what a properly engineered MRI service programme looks like — the preventive maintenance tasks that must happen on a fixed cadence, the daily quality assurance testing that catches drift before patients are affected, the mechanical realities of cryogenics and coil handling, and the contractual structures (full risk, shared risk, labour-only) that hospitals can use to align supplier incentives with clinical uptime. It is written for procurement teams, radiology directors and biomedical engineering leads negotiating a new contract or renewing an existing one.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "PM schedules and tasks, QA phantom testing, cryogenics servicing, coil management, SLA structure, contract types, KPIs and end-of-support planning for MRI",
    audience:
      "Hospital procurement and finance teams, radiology directors, biomedical/clinical engineering leads and MR technologists",
    readingTime: "16 min read",
    technology: "Magnetic Resonance Imaging (MRI) — service and maintenance",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "Why Service Strategy Determines MRI Value",
    body: "The return on an MRI investment is a function of uptime multiplied by scan quality over the life of the system, and both variables are governed almost entirely by the maintenance and service contract, not the magnet's original specification.",
  },
  {
    type: "ul",
    items: [
      "Unplanned downtime on an MRI is disproportionately expensive compared to most hospital equipment, because patients cannot easily be rescheduled onto an alternative modality — a failed MRI slot is frequently a lost referral, not a delayed one.",
      "Most catastrophic MRI failures are preceded by weeks of measurable drift — helium boil-off rate increasing, cold head cycle time lengthening, coil SNR degrading — that a disciplined PM and QA programme detects long before the system actually stops scanning.",
      "The contract type a hospital signs changes the supplier's financial incentive: a full-risk contract rewards the supplier for preventing failures, while a labour-only or time-and-materials arrangement can quietly reward slower diagnosis and higher parts turnover unless KPIs are tightly specified.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "PM is a fixed calendar of mechanical, electrical and safety tasks — not a reactive visit after something breaks.",
      "Daily QA phantom testing is the single cheapest, highest-value defence against slow image-quality drift.",
      "Cold head and chiller servicing protects the single most expensive failure mode in the system: helium loss leading to a quench.",
      "A spare coil pool and stocked parts list should be named and quantified in the contract, not left as a vague promise.",
      "Uptime guarantees are only meaningful when tied to a clear measurement method, response-time tiers and financial penalties.",
      "Full-risk contracts align incentives best but cost more; shared-risk and labour-only models can work if scoped precisely.",
      "End-of-support planning should start at year seven or eight of a system's life, not when the manufacturer's letter arrives.",
    ],
  },
  {
    type: "editorialBoard",
    reviewers: [
      {
        role: "Medical reviewer",
        name: "AbuFarha Clinical Advisory Panel",
        credential: "Consultant radiologists advising on diagnostic imaging pathways",
      },
      {
        role: "Biomedical engineer",
        name: "AbuFarha Biomedical Engineering Team",
        credential: "Field service engineers for MRI, CT, cath lab and PET/CT installations",
      },
      {
        role: "Technical editor",
        name: "AbuFarha Knowledge Center Editorial Team",
        credential: "Medical technology editors, Amman, Jordan",
      },
      {
        role: "Clinical applications specialist",
        name: "AbuFarha Applications & Training Team",
        credential: "MR applications training and protocol optimisation",
      },
    ],
    lastReviewed: "July 2026",
    nextReview: "July 2027",
    version: "1.0",
    evidenceLevel:
      "Level A — international standards, peer-reviewed literature and manufacturer documentation",
    disclaimer:
      "This article is written for hospital decision-makers, clinicians and biomedical engineers as educational reference material. It is not a substitute for professional medical advice, diagnosis or treatment, nor for manufacturer instructions for use, national regulations or site-specific engineering assessment.",
  },
  {
    type: "h2",
    id: "pm-schedules",
    number: 2,
    text: "Preventive Maintenance Schedules and Tasks",
    body: "A defensible MRI PM programme is built on manufacturer-defined intervals — typically monthly, quarterly, semi-annual and annual — each with a fixed checklist rather than a general inspection.",
  },
  { type: "h3", text: "What Belongs on the Schedule" },
  {
    type: "p",
    text: "Manufacturer PM specifications vary by platform, but the structure is consistent across vendors. Monthly tasks focus on cryogenic system health, filters and basic mechanical checks. Quarterly visits add gradient amplifier diagnostics, RF chain calibration checks and door-seal integrity tests on the shielded room. Semi-annual and annual visits are the most comprehensive: full system calibration, magnet homogeneity (shim) verification, safety interlock testing, table mechanism servicing, and a documented safety inspection covering the quench vent, emergency stop circuits and oxygen monitoring sensor.",
  },
  {
    type: "table",
    caption: "Representative MRI PM cadence and task categories",
    headers: ["Interval", "Typical tasks", "Primary risk addressed"],
    rows: [
      [
        "Monthly",
        "Cold head inspection, air/water filter checks, helium level log review, cabinet dust removal, UPS battery check",
        "Slow cryogenic drift and airflow-related overheating",
      ],
      [
        "Quarterly",
        "Gradient amplifier diagnostics, RF power calibration, door-seal and RF shielding leakage test, table mechanism lubrication",
        "Image artefact and RF interference",
      ],
      [
        "Semi-annual",
        "Full system calibration, coil performance testing across the fleet, network and PACS interface verification",
        "Progressive image-quality degradation",
      ],
      [
        "Annual",
        "Magnet shim verification, comprehensive safety inspection, quench vent and pressure relief check, emergency stop and interlock testing, electrical safety testing",
        "Catastrophic failure and patient/staff safety hazards",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The annual visit is the one hospitals are most tempted to defer when budgets tighten, yet it is the visit that verifies the safety systems — quench vent, interlocks, emergency stop — that are rarely exercised in normal operation and therefore rarely noticed when they degrade.",
    clinicalInterpretation: "Gradual calibration drift between semi-annual visits is the most common cause of subtle image-quality complaints from radiologists that never quite rise to a formal fault report.",
    hospitalRecommendation: "Require the PM schedule to be attached to the contract as an exhibit, with manufacturer task references, so completion can be audited line by line rather than accepted on trust from a generic service report.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "PM completion should be documented, not asserted",
    text: "Every PM visit should generate a signed checklist referencing the specific manufacturer task codes performed, measured values (not just pass/fail), and any deferred item with a stated remediation date. A one-line service report reading 'PM completed' is not evidence of anything and should not be accepted as a contractual deliverable.",
  },
  {
    type: "h2",
    id: "daily-qa",
    number: 3,
    text: "Daily and Weekly QA Phantom Testing",
    body: "Daily quality assurance using a manufacturer-approved phantom is the cheapest and most effective early-warning system a hospital has against slow image-quality drift.",
  },
  {
    type: "p",
    text: "Phantom testing measures signal-to-noise ratio, image uniformity, geometric distortion, ghosting and slice thickness against a documented baseline established at commissioning. NEMA MS series methods define the reference measurement approach; ACR's MR accreditation phantom protocol is widely used as the practical clinical standard. A trained MR technologist can complete the daily test in under ten minutes, and the discipline of logging it daily — not just when something looks wrong — is what turns it into an early-warning system rather than a compliance exercise performed retrospectively before an accreditation visit.",
  },
  {
    type: "ul",
    items: [
      "Daily testing should be logged on a running trend chart, not just a pass/fail tick box, so a technologist can see SNR falling 3% per week for a month before it crosses the failure threshold.",
      "Weekly testing typically adds a broader phantom set covering multiple coil channels and sequences the daily test does not exercise.",
      "A failed daily QA result should trigger an immediate call to the service provider before the next patient is scanned on the affected sequence, not a note for the next scheduled visit.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Trend the numbers, do not just pass or fail them",
    items: [
      "Record actual SNR, uniformity and distortion values, not only pass/fail outcomes",
      "Review the trend monthly with the biomedical engineering lead, not only when a threshold is breached",
      "Correlate a QA failure with recent coil handling, RF door use or nearby construction before assuming a system fault",
      "Retain QA logs for at least the accreditation body's required period, typically several years",
    ],
  },
  {
    type: "diagram",
    id: "hospital-workflow",
    title: "Where daily QA fits inside the department's operating rhythm",
    purpose: "Shows how phantom QA, PM visits and fault reporting integrate into the daily clinical workflow of the MRI suite, so quality assurance is understood as a routine operational step rather than a separate administrative task.",
    alt: "Flow diagram of a hospital MRI department's daily workflow: technologist arrives and runs the daily QA phantom test before the first patient, results are logged against baseline, the scanner proceeds to the day's patient list, any anomaly triggers an immediate call to the service provider's helpdesk, the helpdesk logs a ticket and performs remote diagnostics, and if unresolved remotely a field engineer is dispatched under the contracted response-time tier while a fallback imaging pathway is activated for patients.",
    caption: "Figure 1 — Daily QA and the escalation path integrated into hospital MRI workflow.",
  },
  {
    type: "h2",
    id: "cold-head-chiller",
    number: 4,
    text: "Cold Head and Chiller Servicing",
    body: "The cold head and its supporting chilled-water loop are mechanical wear components that keep the magnet's helium reservoir cold, and their servicing schedule directly determines the risk of an expensive, disruptive quench.",
  },
  {
    type: "p",
    text: "The cold head is a cryocooler that recondenses helium gas back into liquid inside the magnet cryostat, and it is one of the few genuinely mechanical, wearing parts in an otherwise solid-state magnet system. Cold heads typically require rebuild or replacement on a multi-year cycle depending on running hours, and a failing cold head shows measurable warning signs — rising helium boil-off, longer compressor cycle times, unusual noise — well before it stops working entirely. The chiller, usually a separate facility-side or dedicated unit, removes heat from the gradient amplifiers, RF amplifier and compressor; its failure does not immediately threaten the helium supply but does force gradient duty-cycle limits or a full system shutdown to prevent overheating.",
  },
  {
    type: "callout",
    variant: "important",
    title: "Cold head failure is a slow-motion emergency",
    text: "A failing cold head does not stop the magnet instantly. Helium boils off gradually over days to weeks, giving a window to intervene — but only if helium level is actually being monitored and reported, and only if the service contract commits to a response time that fits inside that window.",
  },
  {
    type: "h2",
    id: "helium-monitoring",
    number: 5,
    text: "Helium Level Monitoring and Cryogen Management",
    body: "Continuous or scheduled helium level monitoring, tied to an automatic alert threshold, is the practical control that prevents a slow cold-head or chiller failure from ending in an unplanned quench.",
  },
  {
    type: "p",
    text: "Modern MRI systems report helium level and boil-off rate to the console and, on most current platforms, to the manufacturer's or service provider's remote monitoring system. Sealed, low-helium-inventory magnets have substantially reduced routine top-up requirements, but they have not eliminated the need for monitoring — a small helium reservoir with an active leak or cold-head failure can reach a critical level faster than a large legacy reservoir would. Older wide-neck magnets with larger helium volumes require periodic top-ups as a normal, budgeted maintenance cost rather than a fault.",
  },
  {
    type: "knowledgeBox",
    variant: "quick-facts",
    title: "Helium monitoring essentials",
    items: [
      "Helium level and boil-off rate should be logged at every PM visit at minimum, and continuously where the platform supports remote telemetry",
      "An alert threshold should be defined in the contract with a named response action, not left to individual engineer judgement",
      "Room oxygen monitoring is a separate, life-safety system tied to the quench vent and must be tested annually regardless of helium inventory size",
      "A full re-ramp after a quench is a major cost and multi-day downtime event that a functioning monitoring programme should make rare",
    ],
  },
  {
    type: "h2",
    id: "coil-testing",
    number: 6,
    text: "Coil Testing and the Spare Coil Pool",
    body: "Receive coils fail more often than any other MRI subsystem, and a hospital's practical image quality on any given day is often determined by coil condition rather than magnet performance.",
  },
  {
    type: "p",
    text: "Coils are handled, docked, dropped and cabled dozens of times a day, and cable and connector fatigue is the leading failure mode. A cracked cable shield or a failing preamplifier channel does not always stop a coil from producing an image — it can instead produce a subtle, patchy signal drop that is easy to misattribute to patient positioning or motion. Regular coil element testing, ideally using the manufacturer's coil QA tool at a fixed interval, catches this before it affects diagnostic reports.",
  },
  {
    type: "requirements",
    checklist: [
      "Every coil serial-numbered and assigned a named storage cradle",
      "Coil QA performed at a fixed interval using the manufacturer's coil test tool",
      "A documented spare coil pool covering the highest-utilisation coil families",
      "A defined loan or pooled-coil arrangement with the service provider for low-utilisation specialty coils",
      "Cable and connector visual inspection built into technologist daily checks",
    ],
    specs: {
      title: "Typical spare coil pool composition",
      rows: [
        { label: "Head/neck coil", value: "One spare on site where lead time exceeds two weeks" },
        { label: "Spine coil", value: "One spare on site given high daily utilisation" },
        { label: "Body/torso coil array", value: "Regional pooled spare acceptable at most sites" },
        { label: "Extremity/small-part coils", value: "Pooled or loan arrangement typically sufficient" },
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Name the spare coil pool in the contract, not in conversation",
    text: "A verbal assurance that 'we can usually get you a loan coil quickly' is not a contractual commitment. The service agreement should list which coils are held on site, which are held regionally, and the maximum time to deliver a replacement for each category.",
  },
  {
    type: "h2",
    id: "uptime-guarantees",
    number: 7,
    text: "Uptime Guarantees and SLA Structure",
    body: "An uptime guarantee is only meaningful when the contract defines how uptime is measured, which hours count, and what financial remedy applies when the target is missed.",
  },
  {
    type: "p",
    text: "Vendors commonly quote uptime figures in the high nineties, but the number is only as good as its definition. Hospitals should insist the contract specify: the measurement period (monthly, not annually, so a bad month cannot be diluted across a year); the operating hours counted (clinical hours only, or 24/7); what counts as downtime (from fault report or from arrival on site); and what is excluded (scheduled PM, force majeure, facility power failure). Without these definitions, two contracts both promising '97% uptime' can represent very different levels of real protection.",
  },
  {
    type: "table",
    caption: "SLA elements that should be explicitly defined",
    headers: ["SLA element", "Why it matters", "What to request"],
    rows: [
      [
        "Uptime measurement window",
        "Monthly reporting exposes problems faster than annual averaging",
        "Monthly uptime report with rolling 12-month trend",
      ],
      [
        "Downtime clock start",
        "Determines whether slow logging understates real downtime",
        "Clock starts at fault report, not at engineer arrival",
      ],
      [
        "Excluded periods",
        "Vague exclusions can be used to hide chronic issues",
        "Exclusions limited to scheduled PM and documented force majeure",
      ],
      [
        "Remedy for missed target",
        "Without a remedy, the guarantee is aspirational only",
        "Service credit or contract extension tied to the shortfall",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The most common negotiation mistake hospitals make is accepting a headline uptime percentage without asking how it is measured, which is precisely the detail that determines whether the guarantee has any practical force.",
    clinicalInterpretation: "Radiology directors experience uptime failures as cancelled lists and diverted patients long before those failures show up in a diluted annual statistic, which is why monthly reporting matters clinically, not just contractually.",
    hospitalRecommendation: "Request a sample monthly uptime report from the supplier's existing customers before signing, and insist the definitions in this table are written into the contract body, not left in a sales presentation.",
  },
  {
    type: "h2",
    id: "response-times",
    number: 8,
    text: "Response Times and Escalation Tiers",
    body: "Response time should be tiered by fault severity, with the fastest tier reserved for total system-down faults and a clear, contractual escalation path if the first engineer cannot resolve the fault.",
  },
  {
    type: "ul",
    items: [
      "Severity 1 (system down, no scanning possible) should carry the shortest committed response — commonly measured in hours, not business days — with remote triage beginning immediately on ticket receipt.",
      "Severity 2 (degraded performance, partial capability) warrants a same-or-next-business-day response depending on clinical impact.",
      "Severity 3 (minor, non-clinical-impact issues) can reasonably wait for the next scheduled visit, provided it is tracked so it does not silently accumulate into a larger problem.",
      "Escalation should be automatic and time-bound: if a Severity 1 fault is not resolved within a defined number of hours, it escalates to a senior engineer or regional manager without the hospital having to chase it manually.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Response time without resolution time is an incomplete SLA",
    text: "A contract that only guarantees an engineer will arrive within four hours, with no commitment on how long resolution will take once they arrive, still leaves the hospital exposed to open-ended downtime. Ask for both a response-time commitment and a resolution-time target, with escalation triggered if the target is missed.",
  },
  {
    type: "h2",
    id: "parts-stocking",
    number: 9,
    text: "Parts Stocking and Logistics",
    body: "A response-time guarantee is only credible if the parts needed to fix the fault are already in the country or region, not on order from an overseas warehouse.",
  },
  {
    type: "p",
    text: "The contract should specify which parts categories are held locally, which are held regionally with a defined delivery time, and which are ordered on demand with a stated lead time. High-failure-rate items — gradient amplifier modules, RF power amplifier components, cold head assemblies, table motors, common coil connectors — belong in a local or near-site stock list. Long-lead, low-failure-rate items can reasonably be sourced on demand, provided the lead time is disclosed up front rather than discovered during an outage.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Ask for the parts stocking list as a contract exhibit",
    items: [
      "Request the named local/regional parts inventory list, not a general statement of 'good parts availability'",
      "Confirm import and customs lead time for parts not held locally, especially in markets with import licensing requirements",
      "Clarify whether consumables (RF door seals, filters, cables) are included in the contract price or billed separately",
      "Check whether obsolete-platform parts are still actively stocked or only sourced from the secondary market",
    ],
  },
  {
    type: "h2",
    id: "remote-diagnostics",
    number: 10,
    text: "Remote Diagnostics and Predictive Monitoring",
    body: "Remote connectivity lets a manufacturer or service provider triage many faults, and increasingly predict them, before an engineer is ever dispatched to site.",
  },
  {
    type: "p",
    text: "Most current MRI platforms support a secure remote connection that streams system logs, cryogenic status, gradient and RF diagnostics and error codes to the manufacturer's or service provider's monitoring centre. This allows a meaningful share of Severity 1 and 2 faults to be diagnosed, and sometimes resolved, without a site visit — a software reset, a recalibration pushed remotely, or a confirmed diagnosis that shortens the on-site repair time once an engineer does arrive. Predictive monitoring extends this further, flagging gradual trends such as rising cold-head cycle time or falling helium level before they cause a clinical fault.",
  },
  {
    type: "callout",
    variant: "clinical",
    title: "Remote access requires a clear data and security agreement",
    text: "Remote diagnostic connectivity must be governed by a documented cybersecurity and data-handling agreement covering what data leaves the site, how the connection is secured, and how it aligns with the hospital's IT security policy and applicable data protection regulation.",
  },
  {
    type: "knowledgeBox",
    variant: "future-technology",
    title: "Predictive maintenance is maturing quickly",
    text: "Manufacturers increasingly apply pattern recognition to fleet-wide telemetry — comparing a given cold head's cycle-time trend against thousands of others — to flag likely failures weeks in advance. Hospitals evaluating a new contract should ask specifically whether predictive alerts are part of the service, and how those alerts translate into a proactive parts and engineer dispatch, not just a dashboard.",
  },
  {
    type: "h2",
    id: "contract-types",
    number: 11,
    text: "Contract Types: Full Risk, Shared Risk, Labour-Only",
    body: "The three common MRI service contract structures allocate risk and cost differently between hospital and supplier, and the right choice depends on the hospital's engineering capacity, cash-flow preference and risk tolerance.",
  },
  {
    type: "comparison",
    title: "Comparing MRI service contract structures",
    headers: ["Contract type", "What it covers", "Best suited to", "Trade-off"],
    rows: [
      [
        "Full risk (comprehensive)",
        "Labour, parts, PM, and often cold head/coil replacement, for a fixed annual fee",
        "Hospitals wanting predictable budgeting and maximum incentive alignment with the supplier",
        "Highest fixed annual cost; requires careful review of exclusions (accidental damage, upgrades)",
      ],
      [
        "Shared risk",
        "PM and labour included; major parts (cold head, gradient coil, magnet) billed separately or capped",
        "Hospitals with moderate risk tolerance wanting lower fixed cost than full risk",
        "Budget exposure remains for major component failure; caps must be negotiated explicitly",
      ],
      [
        "Labour-only / time-and-materials",
        "Engineer time only; parts and consumables billed per incident",
        "Hospitals with strong internal biomedical engineering capacity or very stable, newer systems",
        "Least predictable annual cost; strongest incentive for the hospital to run its own PM discipline",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Full-risk contracts align the supplier's financial interest with uptime, because every failure the supplier prevents is a cost it avoids — which is precisely why they are usually recommended for a hospital's first few years with a new, high-utilisation MRI system.",
    clinicalInterpretation: "A shared-risk or labour-only model can work well clinically if the hospital already has a competent internal biomedical engineering team performing disciplined PM and QA, since the supplier is then only relied upon for the specialist repairs it alone can perform.",
    hospitalRecommendation: "Model the total cost of each structure over a five-year horizon using realistic failure-rate assumptions rather than comparing only the headline annual fee, and revisit the choice at the mid-life point of the system when major-component risk rises.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Common contract-negotiation mistakes",
    items: [
      "Signing a labour-only contract on a newly installed system with no internal QA discipline in place",
      "Accepting a full-risk contract without checking exclusions for cold head, coil array or software upgrade costs",
      "Failing to benchmark the annual fee against comparable regional contracts before renewal",
      "Not aligning the contract term with the manufacturer's committed software and parts support window",
    ],
  },
  {
    type: "h2",
    id: "kpis",
    number: 12,
    text: "KPIs Hospitals Should Track",
    body: "A small set of disciplined KPIs, reviewed monthly with the service provider, turns a service contract from a static document into an actively managed relationship.",
  },
  {
    type: "stats",
    items: [
      { value: "Uptime %", label: "Measured monthly against the contracted clinical-hours definition" },
      { value: "MTTR", label: "Mean time to repair, from fault report to return to clinical use" },
      { value: "First-time fix rate", label: "Share of Severity 1/2 faults resolved on the first engineer visit" },
      { value: "PM completion rate", label: "Share of scheduled PM tasks completed on time with documented checklists" },
      { value: "QA pass rate", label: "Share of daily/weekly phantom tests within tolerance without intervention" },
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Review KPIs monthly, not only at contract renewal",
    text: "A quarterly or monthly service review meeting between the hospital's biomedical engineering lead and the supplier's account manager, using the KPI set above, catches deteriorating trends — a rising MTTR, a falling first-time fix rate — long before they surface as a contract dispute at renewal time.",
  },
  {
    type: "h2",
    id: "hospital-workflow-diagram",
    number: 13,
    text: "How a Service Event Moves Through the Hospital",
    body: "Mapping the full workflow from fault detection to resolution clarifies where responsibility sits at each step and where delay typically accumulates.",
  },
  {
    type: "diagram",
    id: "hospital-workflow",
    title: "MRI fault-to-resolution workflow across hospital and service provider",
    purpose: "Traces a service event end to end so hospitals can see exactly which party is responsible for each step, and where a poorly specified contract typically introduces delay.",
    alt: "Workflow diagram showing an MRI fault detected by daily QA or a technologist report, logged with the hospital's biomedical engineering coordinator, submitted to the service provider's helpdesk with a severity classification, triaged through remote diagnostics, escalated to field engineer dispatch if unresolved remotely within the contracted response window, parts sourced from local stock or regional logistics if required, repair completed and verified against the QA phantom baseline, and the event closed with a KPI entry logged for the monthly service review.",
    caption: "Figure 2 — End-to-end MRI fault workflow, from detection to KPI logging.",
  },
  {
    type: "p",
    text: "Two points in this workflow are where hospitals lose the most time when the contract is poorly specified: the interval between fault detection and severity classification (which is why an on-site coordinator with contractual authority to classify severity matters), and the interval between remote triage failing and a field engineer actually arriving (which is exactly the response-time tier discussed earlier). A contract that names both intervals, and holds the supplier to them, closes the two biggest sources of avoidable downtime.",
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Appoint a single named coordinator",
    text: "Hospitals that name one biomedical engineering coordinator with explicit authority to log faults, classify severity and approve field engineer dispatch consistently see shorter fault-to-resolution times than departments where any technologist can informally call the vendor, because accountability and urgency are clear from the first minute.",
  },
  {
    type: "h2",
    id: "contract-negotiation",
    number: 14,
    text: "Negotiating the Contract: What to Demand",
    body: "A small number of specific, non-negotiable clauses convert a generic service agreement into one that will actually protect clinical uptime.",
  },
  {
    type: "roi",
    paragraph: "Hospitals often treat the service contract as a cost line to minimise rather than an uptime investment to structure. In practice, the incremental cost of a properly specified full-risk or well-scoped shared-risk contract is small relative to the clinical and financial cost of even a handful of extra unplanned downtime days per year — particularly where MRI referrals can be lost to a competing facility during an outage.",
    bullets: [
      "Quantify expected annual downtime under each contract type using the supplier's own historical fleet data, not marketing claims",
      "Price the cost of a cancelled scanning day (staff time, lost billing, referral impact) to weigh against the contract premium",
      "Negotiate a multi-year term with a fixed escalation cap to avoid unpredictable renewal increases",
    ],
    callout: {
      title: "Non-negotiable contract clauses",
      lines: [
        "Named PM schedule with manufacturer task references",
        "Monthly uptime reporting with a clear measurement definition",
        "Tiered response and resolution times with automatic escalation",
        "Named local/regional parts stock list and spare coil pool",
        "KPI reporting cadence with a defined review meeting",
      ],
    },
  },
  {
    type: "h2",
    id: "end-of-support",
    number: 15,
    text: "End-of-Support and Lifecycle Planning",
    body: "Manufacturer software and parts support windows are finite, and planning for end-of-support should begin years before the notice arrives, not after it.",
  },
  {
    type: "p",
    text: "Most MRI platforms receive full manufacturer software and parts support for roughly a decade from launch, with a further period of limited, parts-only support before the platform is formally end-of-life. Hospitals should establish, at the time of purchase, when the installed platform is expected to reach each stage, and build a lifecycle review into the contract renewal cycle from around year seven or eight, well before end-of-support notice is issued. Waiting for the notice itself compresses replacement or major-upgrade planning into an unnecessarily short window.",
  },
  {
    type: "ul",
    items: [
      "Confirm at purchase the manufacturer's typical full-support and extended-support windows for the specific platform generation, not the product family in general.",
      "Ask whether third-party or independent service organisations can support the platform after manufacturer end-of-support, and at what functional limitation.",
      "Budget for a mid-life refurbishment (gradient, coil fleet, software upgrade) around years six to eight as a way to extend clinical competitiveness before full replacement is required.",
      "Treat end-of-support planning as a capital planning input, feeding into the hospital's multi-year equipment replacement schedule rather than being handled as an isolated procurement event.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Do not wait for the end-of-support letter",
    text: "By the time a formal end-of-support notice arrives, the realistic replacement or major-upgrade timeline is often shorter than the capital approval and procurement cycle a hospital needs to execute it well. Build the lifecycle question into every contract renewal conversation from the mid-life point onward.",
  },
  {
    type: "h2",
    id: "faq",
    number: 16,
    text: "Frequently Asked Questions",
    body: "Practical answers to the questions procurement and biomedical engineering teams most often raise when structuring or renewing an MRI service contract.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How often should MRI preventive maintenance be performed?",
        a: "Most manufacturers specify monthly, quarterly, semi-annual and annual tasks, each with a distinct checklist. The full cadence, referenced against manufacturer task codes, should be attached to the service contract as an exhibit.",
      },
      {
        q: "What is daily QA phantom testing and why is it necessary?",
        a: "It is a short scan of a standardised test object that measures signal-to-noise ratio, uniformity, geometric accuracy and ghosting against a documented baseline. Performed daily, it catches slow image-quality drift long before it becomes a clinically visible problem.",
      },
      {
        q: "How much does an MRI cold head typically cost to replace?",
        a: "Cold head replacement is a significant cost that varies by platform and region and should be quoted as a typical indicative market range by the supplier, ideally clarified in advance as either included, capped or fully billable under the chosen contract type.",
      },
      {
        q: "Do modern MRI systems still need routine helium top-ups?",
        a: "Sealed, low-helium-inventory magnets have greatly reduced routine top-up needs, but monitoring remains essential because a small reservoir can reach a critical level faster during a cold-head or chiller fault. Older, larger-reservoir systems still require periodic top-ups as a budgeted item.",
      },
      {
        q: "What is a reasonable response time to demand in an SLA?",
        a: "A commonly used structure is a short, hours-based response window for total system-down faults, next-business-day for degraded but usable systems, and scheduled handling for minor issues. The specific hours should be negotiated against the supplier's regional coverage and stated explicitly in the contract.",
      },
      {
        q: "What is the difference between full risk and shared risk contracts?",
        a: "A full-risk contract bundles labour, parts and major component replacement into one fixed fee, maximising the supplier's incentive to prevent failures. A shared-risk contract includes labour and PM but bills or caps major parts separately, offering lower fixed cost with more budget exposure.",
      },
      {
        q: "Why does a spare coil pool matter so much?",
        a: "Receive coils are the most frequently damaged MRI accessory because of constant handling, and a damaged coil can take a specific scan type offline even though the magnet itself is fully functional. A named, quantified spare pool prevents that from becoming unplanned downtime.",
      },
      {
        q: "Can remote diagnostics really fix problems without a site visit?",
        a: "Yes, for a meaningful share of software-related faults, calibration drift and diagnostic triage. Mechanical failures such as a failed cold head or coil still require a physical engineer visit, but remote diagnostics usually shortens the time to correctly diagnose the fault before the engineer arrives.",
      },
      {
        q: "What KPIs should be reviewed with the service provider?",
        a: "Monthly uptime percentage, mean time to repair, first-time fix rate, PM completion rate and QA pass rate together give a rounded picture of service performance and should be reviewed on a regular schedule, not only at contract renewal.",
      },
      {
        q: "How should a hospital plan for MRI end-of-support?",
        a: "Establish the platform's expected full-support and extended-support windows at purchase, and begin an active lifecycle review — refurbishment versus replacement, alternative support options — around year seven or eight of the system's life, well ahead of any formal end-of-support notice.",
      },
      {
        q: "Is a labour-only contract ever a good choice?",
        a: "It can work well for hospitals with a strong internal biomedical engineering team and disciplined PM and QA practices already in place, particularly on newer, more reliable systems, but it shifts parts-cost unpredictability and PM discipline onto the hospital.",
      },
      {
        q: "What should be in the escalation clause of an SLA?",
        a: "A defined time after which an unresolved Severity 1 fault automatically escalates to a senior engineer or regional manager, without requiring the hospital to chase it manually, plus a named contact for that escalation tier.",
      },
      {
        q: "Should PM and service contracts be negotiated separately from the scanner purchase?",
        a: "They can be, but negotiating them together typically gives the hospital more leverage, since the supplier has a strong commercial interest in securing the long-term service relationship alongside the capital sale.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    number: 17,
    text: "Conclusion",
    body: "A well-structured preventive maintenance programme and service contract is what actually delivers the clinical availability a hospital paid for when it purchased the scanner.",
  },
  {
    type: "p",
    text: "The magnet's physics do not change once it is installed; what changes, year to year, is how well the cryogenics are monitored, how disciplined the daily QA programme is, how quickly a fault is diagnosed and repaired, and how honestly the contract allocates risk between hospital and supplier. Hospitals that specify PM schedules, QA discipline, response times, parts stocking, spare coil pools and KPIs explicitly in the contract — and review them monthly rather than only at renewal — consistently see higher uptime and lower total cost of ownership than those that rely on a generic service agreement and hope for the best. The single most valuable outcome of this article's checklist is a contract that reads as an operational plan, not a sales document.",
  },
  {
    type: "referenceGroups",
    note: "References are provided for professional orientation. Always follow the current edition of each standard, the applicable national regulations, and the manufacturer's instructions for use and service documentation for your specific system.",
    groups: [
      {
        title: "Medical guidelines",
        items: [
          { label: "American College of Radiology. ACR MRI Quality Control Manual — phantom testing procedures and acceptance criteria." },
          { label: "ACR MRI Accreditation Program. Quality assurance and clinical image review requirements." },
        ],
      },
      {
        title: "Scientific publications",
        items: [
          { label: "Peer-reviewed medical physics literature on MRI quality assurance, phantom-based SNR and uniformity measurement methodology." },
          { label: "Clinical engineering literature on preventive maintenance effectiveness and equipment lifecycle management in diagnostic imaging." },
        ],
      },
      {
        title: "Regulatory authorities",
        items: [
          { label: "U.S. Food and Drug Administration. Medical device servicing and quality system regulation guidance relevant to MRI maintenance." },
          { label: "MHRA (Medicines and Healthcare products Regulatory Agency, UK). Managing Medical Devices guidance on maintenance and decommissioning." },
        ],
      },
      {
        title: "International standards",
        items: [
          { label: "IEC 60601-2-33. Particular requirements for the basic safety and essential performance of magnetic resonance equipment for medical diagnosis." },
          { label: "NEMA MS series. Standards for determination of signal-to-noise ratio, image uniformity and geometric distortion in diagnostic MR imaging." },
          { label: "IEC 62353. Recurrent test and test after repair of electrical medical equipment, relevant to periodic safety testing." },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          { label: "Siemens Healthineers, GE HealthCare, Philips, Canon Medical Systems and Fujifilm Healthcare — preventive maintenance schedules, cryogen handling procedures and service bulletins for the installed platform." },
          { label: "Manufacturer end-of-support and end-of-life notification policies for the relevant MRI product generation." },
        ],
      },
      {
        title: "Medical societies",
        items: [
          { label: "International Society for Magnetic Resonance in Medicine (ISMRM) — quality assurance and technical performance resources." },
          { label: "Radiological Society of North America (RSNA) — imaging informatics and quality improvement resources." },
          { label: "European Society of Radiology (ESR) — imaging equipment quality standards and referral guidelines." },
        ],
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Ready to review your MRI service contract?",
    subheading:
      "Our biomedical engineering team helps hospitals across Africa and the Middle East benchmark PM schedules, structure SLAs and plan MRI lifecycle and end-of-support transitions.",
    technology: "MRI",
  },
];
