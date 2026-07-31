/**
 * PET/CT detector care and preventive maintenance — PET/CT cluster (maintenance).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PET_CT_MAINTENANCE_TOC: TocItem[] = [
  { id: "overview", title: "What Fails on a PET/CT" },
  { id: "detector", title: "Detector Care and Calibration" },
  { id: "cooling", title: "Cooling: The Leading Cause of Lost Sessions" },
  { id: "ct-subsystem", title: "CT Tube and Gantry Maintenance" },
  { id: "qa-programme", title: "The Daily, Weekly and Annual QA Programme" },
  { id: "contracts", title: "Service Contract Scope" },
  { id: "uptime", title: "Managing Uptime Around Tracer Delivery" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PET_CT_MAINTENANCE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A PET/CT breakdown costs more than a lost imaging session. The tracer for that session has already been produced, delivered and paid for, and it decays whether or not the scanner is working. Maintenance on a PET/CT is therefore an economic discipline as much as a technical one.",
      "The failure profile is also distinctive. Most modalities are limited by mechanical wear and X-ray tube life; PET/CT adds a detector subsystem whose performance drifts with temperature and age, and a cooling plant whose reliability determines whether the detector can work at all.",
      "This guide sets out what actually fails, the quality assurance programme that catches problems before they cancel a list, how to specify a service contract that covers the expensive components, and how to manage uptime around a consumable that cannot wait.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "PET/CT failure modes, detector calibration and normalisation, cooling plant reliability, CT tube and gantry care, daily/weekly/annual QA programme, service contract scope, uptime management with tracer delivery",
    audience:
      "Biomedical engineering managers, nuclear medicine service leads, medical physicists, radiographers and hospital operations teams",
    readingTime: "15 min read",
    technology: "PET/CT Scanners",
  },
  {
    type: "h2",
    id: "overview",
    text: "What Fails on a PET/CT",
    number: 1,
    body: "Understanding the failure profile allows maintenance effort and contract money to be directed where downtime actually originates.",
  },
  {
    type: "table",
    headers: ["Subsystem", "Typical failure or drift", "Operational consequence"],
    rows: [
      ["PET detector blocks and electronics", "Gain drift, individual block failure, timing degradation", "Reduced sensitivity, artefacts, unreliable quantification"],
      ["Cooling plant and chiller", "Flow loss, refrigerant or pump failure, ambient overload", "Immediate shutdown; whole sessions lost"],
      ["CT X-ray tube", "End of life, arcing, thermal limits", "Scheduled or unscheduled replacement; high-cost part"],
      ["Gantry rotation and slip ring", "Bearing wear, brush and signal degradation", "Ring artefacts, data loss, eventual mechanical failure"],
      ["Patient table", "Positional accuracy drift, sag, drive faults", "Co-registration error affecting attenuation correction and SUV"],
      ["Reconstruction and workstation hardware", "Disk, memory or network failure", "Studies acquired but not reportable; workflow blockage"],
      ["Hot lab equipment", "Dose calibrator drift, ventilation faults", "Dispensing accuracy and licence compliance"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Count the cost in sessions, not hours",
    text: "A fault that removes a morning removes a whole tracer batch. When justifying maintenance investment or contract response times, express downtime in cancelled sessions and wasted activity — it is the language the finance team already understands.",
  },
  {
    type: "h2",
    id: "detector",
    text: "Detector Care and Calibration",
    number: 2,
    body: "The detector cannot be repaired by the site team, but its performance can be monitored, protected and evidenced — which is what determines whether degradation is caught early or discovered in a clinical report.",
  },
  {
    type: "ul",
    items: [
      "Environmental stability is the primary protective measure. Detector gain and timing depend on temperature; a room whose temperature swings will produce a system whose calibration drifts.",
      "Normalisation and calibration are performed at manufacturer-specified intervals and after any detector intervention. Skipping them to protect a list is a false economy.",
      "Daily quality control trends — count rate, uniformity and detector health indicators — should be plotted, not merely passed. Trends reveal drift long before a threshold failure.",
      "Timing resolution should be tracked where the platform reports it, because degradation silently erodes time-of-flight image quality.",
      "Individual failed blocks must be documented and replaced on a planned basis; running with masked blocks accumulates artefact risk and quantitative error.",
      "Dose calibrator and clock synchronisation matter for quantification: SUV depends on accurate activity, accurate time and accurate weight.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Quantification is a maintenance output",
    text: "Standardised uptake values are only comparable between studies if calibration, cross-calibration with the dose calibrator, clock alignment and CT co-registration are all under control. Serial response assessment is therefore a direct clinical consequence of the QA programme.",
  },
  {
    type: "h2",
    id: "cooling",
    text: "Cooling: The Leading Cause of Lost Sessions",
    number: 3,
    body: "In hot climates and in facilities where plant was value-engineered during construction, cooling is the most common source of avoidable PET/CT downtime.",
  },
  {
    type: "ul",
    items: [
      "Specify cooling capacity against the manufacturer's stated heat rejection at local design ambient temperature, not at a temperate reference condition.",
      "Provide redundancy or a fallback path; a single chiller with no standby converts one plant fault into a cancelled clinical day.",
      "Monitor flow, pressure and temperature continuously with alarms routed to a team that is on duty, not to an unattended panel.",
      "Keep condensers and filters on a documented cleaning schedule; fouling is gradual, so it degrades margin silently until a hot day exposes it.",
      "Confirm which party is responsible for cooling in the service contract. Cooling plant is frequently excluded, which leaves the hospital owning the most common failure.",
      "Include the reconstruction and equipment room in the cooling design, not only the scanner room.",
    ],
  },
  {
    type: "h2",
    id: "ct-subsystem",
    text: "CT Tube and Gantry Maintenance",
    number: 4,
    body: "The CT subsystem ages in the familiar pattern, and it responds well to protocol discipline as well as to planned service.",
  },
  {
    type: "ul",
    items: [
      "Tube life is consumed by heat, so protocol optimisation — appropriate kV, mA modulation and avoiding unnecessary diagnostic-quality passes — extends the interval between replacements.",
      "Track exposure counters and thermal history so replacement can be planned into a quiet period rather than discovered mid-list.",
      "Verify PET/CT alignment after any table, gantry or tube intervention; attenuation correction depends on it.",
      "Include phantom-based CT number accuracy, noise and slice geometry checks in the periodic programme.",
      "Confirm whether the CT tube is inside or outside the service contract; it is one of the largest single parts costs in the system.",
    ],
  },
  {
    type: "h2",
    id: "qa-programme",
    text: "The Daily, Weekly and Annual QA Programme",
    number: 5,
    body: "A written programme with named responsibilities and recorded results is what turns maintenance from reactive repair into predictable operation.",
  },
  {
    type: "table",
    headers: ["Frequency", "Checks", "Owner"],
    rows: [
      ["Daily", "Detector health / blank scan, count rate check, temperature and cooling status, table motion, visual inspection", "Radiographer or technologist"],
      ["Weekly", "Uniformity and sensitivity trend review, dose calibrator constancy, hot lab checks, workstation and archive status", "Technologist with physics oversight"],
      ["Quarterly", "Normalisation as specified, alignment verification, CT phantom checks, cooling plant service", "Service engineer"],
      ["Annually", "Full performance testing, cross-calibration, harmonisation review, radiation protection survey, electrical safety", "Medical physics expert and service engineer"],
      ["Event-driven", "After detector, tube, table or software intervention: alignment, calibration and phantom verification", "Service engineer with physics sign-off"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "A workable PET/CT QA structure",
    clinicalInterpretation: "The value of the programme is in the trend record. Individual passes prove nothing about tomorrow; a plotted series predicts it.",
    hospitalRecommendation: "Apply this as a documented departmental practice rather than as case-by-case judgement, and review it with medical physics and biomedical engineering at least annually.",
  },
  {
    type: "h2",
    id: "contracts",
    text: "Service Contract Scope",
    number: 6,
    body: "PET/CT service contracts differ so widely in scope that comparing prices before normalising scope is meaningless.",
  },
  {
    type: "table",
    headers: ["Contract element", "What to require", "Common exclusion to catch"],
    rows: [
      ["PET detector cover", "Blocks, electronics and detector assemblies included", "Detectors excluded or capped per year"],
      ["CT tube", "Full replacement cover with no exposure cap, or a clearly stated cap", "Pro-rata cover that transfers most cost to the hospital"],
      ["Cooling plant", "Explicit inclusion of chiller and secondary circuit", "Cooling treated as facilities, not equipment"],
      ["Response and repair commitment", "Committed on-site response and defined escalation", "Best-efforts language with no remedy"],
      ["Planned maintenance", "Number of visits, scope, and scheduling rights around clinical lists", "Visits scheduled at the vendor's convenience"],
      ["Software", "Version updates, cybersecurity patches and licence continuity", "Updates sold separately"],
      ["Uptime guarantee", "Measured uptime with credits, defined during working hours", "Uptime measured across 24 hours, diluting the metric"],
      ["Remote monitoring", "Proactive alerting with defined data handling", "Monitoring without any action commitment"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Normalise scope, then compare price",
    text: "Build a single scope sheet, send it to every bidder, and require them to price that scope with exclusions listed explicitly. A contract that appears cheaper almost always differs on detector cover, CT tube treatment or cooling responsibility.",
  },
  {
    type: "h2",
    id: "uptime",
    text: "Managing Uptime Around Tracer Delivery",
    number: 7,
    body: "Because the consumable decays, PET/CT uptime management is partly a scheduling and communication problem rather than a purely technical one.",
  },
  {
    type: "ul",
    items: [
      "Run the daily quality control before the tracer batch is committed, so a detected fault cancels an order rather than wasting a delivered dose.",
      "Agree an escalation path with the service provider that recognises the delivery window; a four-hour response is worth little if the batch expires in two.",
      "Hold a documented contingency plan: an alternative session, a partner site arrangement, or an agreed batch cancellation window with the radiopharmacy.",
      "Keep a standby patient list so a recovered fault or an unexpected cancellation does not waste dispensed activity.",
      "Plan planned-maintenance visits and tube replacements into non-delivery days.",
      "Record every downtime event with cause, duration and sessions lost; that record is the evidence base for the next contract negotiation.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "How often does a PET detector actually need replacement?",
        a: "Individual block or electronics failures occur sporadadically through the life of the system rather than on a predictable schedule, and whole-detector replacement is uncommon within a normal service life. What matters is that failures are detected by trend monitoring, documented, and covered by the service contract rather than discovered as an unbudgeted invoice.",
      },
      {
        q: "Can a PET/CT operate with a failed detector block?",
        a: "Systems can often continue clinically with a masked block, but sensitivity is reduced and artefact and quantification risk rise. It is an acceptable short-term bridge to a planned repair, not a steady state, and the decision should involve medical physics.",
      },
      {
        q: "Why is cooling such a frequent problem?",
        a: "Because heat rejection is continuous and substantial, and because cooling plant is often sized during construction against optimistic ambient assumptions or reduced during value engineering. Once margin is thin, a hot day or a fouled condenser produces a shutdown.",
      },
      {
        q: "Should the hospital buy a full-cover contract or pay per repair?",
        a: "For PET/CT, the concentration of cost in detector assemblies and the CT tube usually favours a defined-scope contract, because a single uncovered failure can exceed several years of contract premium. Pay-per-repair is defensible only where the hospital holds real engineering capability and a parts route.",
      },
      {
        q: "What is the single highest-value maintenance investment?",
        a: "Resilient, monitored cooling. It is modest in capital terms and it removes the most common cause of cancelled sessions, which in PET/CT also means the most common cause of wasted tracer.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Need dependable PET/CT service support?",
    subheading:
      "AbuFarha Medical installs, commissions and maintains PET/CT systems, and works with hospitals on QA programmes, contract scope and uptime planning.",
    technology: "PET/CT Scanners",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "PET/CT installation, commissioning and service" },
      { role: "Operational review", name: "AbuFarha After-Sales & Support", credential: "Imaging uptime and service contract practice" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer service documentation, NEMA and EANM quality assurance guidance and hospital maintenance practice",
    disclaimer:
      "Maintenance intervals, quality control tests and tolerances are platform-specific. Always follow the manufacturer's documentation and the advice of a qualified medical physics expert for your system.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Quality assurance and performance",
        items: [
          { label: "NEMA NU 2 — performance measurements of positron emission tomographs" },
          { label: "EANM / EARL guidance on PET/CT quality control and quantitative harmonisation" },
          { label: "IAEA guidance on quality assurance for PET and PET/CT systems" },
        ],
      },
      {
        title: "Radiation protection and safety",
        items: [
          { label: "IAEA guidance on radiation protection in nuclear medicine" },
          { label: "IEC 60601 series — safety and essential performance of medical electrical equipment" },
        ],
      },
      {
        title: "Installation and infrastructure",
        items: [
          { label: "IEC 60364-7-710 — electrical installations in medical locations" },
          { label: "Manufacturer cooling, environmental and planned-maintenance documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "PET/CT downtime destroys tracer as well as sessions, so uptime has a direct consumable cost.",
      "Cooling failure is the most common avoidable cause of lost PET/CT sessions; resilience and monitoring are the cheapest fixes.",
      "Detector performance drifts before it fails — plot daily QC trends rather than only recording passes.",
      "Quantitative SUV reliability depends on calibration, cross-calibration, clock accuracy and CT co-registration.",
      "Track CT tube exposure history so replacement is planned rather than discovered.",
      "Normalise service contract scope — detector cover, CT tube, cooling and response commitment — before comparing price.",
      "Run daily QC before committing the tracer order, and keep a documented contingency plan for faults inside the delivery window.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "A PET/CT service is reliable when quality assurance is trended, cooling is resilient, contract scope is explicit and maintenance is scheduled around tracer delivery.",
  },
  {
    type: "p",
    text: "None of that requires unusual resources — it requires a written programme, named owners, recorded results and a contract that covers the components which actually cost money. Services run this way lose few sessions; services run reactively pay for the same lesson repeatedly, one decayed batch at a time.",
  },
];
