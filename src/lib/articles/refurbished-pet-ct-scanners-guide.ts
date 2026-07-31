/**
 * Refurbished PET/CT scanners — PET/CT cluster (buying).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PET_CT_REFURBISHED_TOC: TocItem[] = [
  { id: "overview", title: "Why Refurbished PET/CT Is Considered" },
  { id: "what-refurbished-means", title: "What Refurbishment Actually Includes" },
  { id: "detector", title: "Detector Condition: The Decisive Question" },
  { id: "ct-subsystem", title: "The CT Subsystem" },
  { id: "software", title: "Software, Licences and Quantification" },
  { id: "due-diligence", title: "Supplier and Parts Due Diligence" },
  { id: "installation", title: "Installation Realities" },
  { id: "decision", title: "When Refurbished Is the Right Choice" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PET_CT_REFURBISHED_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A refurbished PET/CT system can open a nuclear medicine service that would otherwise remain a line in a five-year plan. It can also become the most expensive imaging decision a hospital ever makes, because PET/CT contains one component whose ageing is neither visible on inspection nor cheap to correct: the detector.",
      "Refurbished PET/CT is therefore not a smaller version of the new-equipment decision. It is a different decision, dominated by remaining detector life, parts availability, software entitlement and the credibility of the supplier's commissioning evidence.",
      "This guide sets out what refurbishment should include, what to verify before signing, and the circumstances in which a refurbished PET/CT is genuinely the right answer for a hospital.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Refurbishment grades and scope, detector condition assessment, CT subsystem checks, software entitlement, parts availability, supplier due diligence, installation and acceptance evidence",
    audience:
      "Hospital procurement teams, nuclear medicine service leads, biomedical engineering managers, finance directors and healthcare planners",
    readingTime: "15 min read",
    technology: "PET/CT Scanners",
  },
  {
    type: "h2",
    id: "overview",
    text: "Why Refurbished PET/CT Is Considered",
    number: 1,
    body: "The motivation is almost always the same: the clinical case for PET/CT is established, but the capital envelope for a new flagship system is not available in the current budget cycle.",
  },
  {
    type: "ul",
    items: [
      "Lower capital entry, which can bring a service forward by several budget cycles.",
      "Proven configuration — a system whose clinical performance is already documented in the literature and in service.",
      "Faster availability, where lead times for new systems are long.",
      "A route to establishing referral volume before committing to a flagship replacement.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "The capital saving is not the whole saving",
    text: "Refurbished PET/CT reduces capital cost. It does not reduce shielding, uptake room construction, hot lab, decay store, cooling, physics support, licensing or tracer supply cost — and those are the items that most often delay a project. Compare total project cost, not scanner price.",
  },
  {
    type: "h2",
    id: "what-refurbished-means",
    text: "What Refurbishment Actually Includes",
    number: 2,
    body: "\"Refurbished\" is a commercial word, not a technical standard. The only meaningful description is a written scope of work, item by item.",
  },
  {
    type: "table",
    headers: ["Scope item", "What a credible scope states", "Warning sign"],
    rows: [
      ["De-installation", "Performed by qualified engineers with documented shutdown and crating procedure", "Collected as-is with no de-installation record"],
      ["Detector assessment", "Block-by-block performance data before and after refurbishment", "\"Detectors tested and functional\""],
      ["Replaced components", "Named parts list with new/used status for each item", "General statement that worn parts were replaced"],
      ["CT tube", "Documented exposure history and remaining life estimate, or new tube supplied", "No tube history available"],
      ["Cooling and chiller", "Serviced or replaced, with pressure and flow verification", "Not mentioned"],
      ["Software", "Version stated, licences transferred in writing by the manufacturer", "\"Latest software installed\""],
      ["Acceptance testing", "NEMA NU 2 performance measurements after installation on site", "Factory test report only"],
      ["Warranty", "Defined duration, parts scope and response time", "Warranty on parts only, excluding detector"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Insist on post-installation performance testing",
    text: "A factory test proves the system worked in the refurbisher's bay. Only on-site NEMA NU 2 measurements — sensitivity, spatial resolution, noise-equivalent count rate, scatter fraction and image quality phantom — prove the system works after transport, re-assembly and in your room. Make payment contingent on those results.",
  },
  {
    type: "h2",
    id: "detector",
    text: "Detector Condition: The Decisive Question",
    number: 3,
    body: "In PET/CT the detector is both the performance-defining component and the most expensive to replace. Everything else in a refurbishment scope is secondary to its condition.",
  },
  {
    type: "ul",
    items: [
      "Scintillator and photodetector performance degrade gradually, so a system can pass a basic functional check while delivering measurably worse sensitivity and timing performance than it did when new.",
      "Failed or drifting detector blocks reduce count sensitivity and can create ring or streak artefacts that survive reconstruction correction.",
      "Timing performance determines whether time-of-flight reconstruction remains usable — a substantial factor in image quality at practical injected activity.",
      "Detector electronics and cooling stability affect drift between calibrations, and therefore the reliability of quantitative values.",
      "Replacement blocks for older generations may be scarce, refurbished themselves, or unavailable at any price.",
    ],
  },
  {
    type: "table",
    headers: ["Evidence", "Why it matters"],
    rows: [
      ["Number of detector blocks replaced during refurbishment", "Indicates the extent of ageing found"],
      ["Current sensitivity measured against the original NEMA specification", "Direct measure of remaining detector performance"],
      ["Coincidence timing resolution", "Determines whether time-of-flight capability is intact"],
      ["Calibration drift history from service logs", "Predicts stability and quantitative reliability"],
      ["Parts availability statement for detector assemblies", "Determines whether a future failure is repairable"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Detector evidence to request before purchase",
    clinicalInterpretation: "A refurbished PET/CT without measured sensitivity and timing data is an unquantified risk. Ask for the numbers; a serious supplier already has them.",
    hospitalRecommendation: "Apply this as a documented departmental practice rather than as case-by-case judgement, and review it with medical physics and biomedical engineering at least annually.",
  },
  {
    type: "h2",
    id: "ct-subsystem",
    text: "The CT Subsystem",
    number: 4,
    body: "The CT half of the system ages in the familiar way, which makes it easier to assess — and easier to negotiate.",
  },
  {
    type: "ul",
    items: [
      "Tube exposure history and estimated remaining life; a tube nearing end of life should be priced into the transaction or replaced before handover.",
      "Slice count and reconstruction capability, which determine whether the CT can serve as a diagnostic study or only as attenuation correction and localisation.",
      "Dose-reduction features — iterative reconstruction and automatic exposure control — because their absence raises patient dose for every combined study.",
      "Detector row condition and calibration stability, verified by phantom measurement rather than by inspection.",
      "Gantry mechanics, slip ring and table accuracy, all of which affect co-registration between the PET and CT datasets.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Misregistration is a clinical problem, not a cosmetic one",
    text: "Attenuation correction uses the CT dataset. Table sag, mechanical wear or calibration error that shifts alignment introduces both artefacts and quantitative error in standardised uptake values. Alignment verification belongs in acceptance testing.",
  },
  {
    type: "h2",
    id: "software",
    text: "Software, Licences and Quantification",
    number: 5,
    body: "Software entitlement is where refurbished purchases most frequently disappoint, because the licence and the hardware do not always travel together.",
  },
  {
    type: "table",
    headers: ["Item", "Question to answer in writing"],
    rows: [
      ["Reconstruction software version", "Which version is installed, and is it still supported by the manufacturer?"],
      ["Time-of-flight and advanced reconstruction", "Is the licence present, transferable and functional on this serial number?"],
      ["Quantitative harmonisation tools", "Can the system be harmonised for accreditation and serial response reporting?"],
      ["Cardiac and neurology packages", "Are they licensed, or would they need separate purchase at new-system prices?"],
      ["Upgrade path", "What future software versions remain available for this platform, and for how long?"],
      ["Cybersecurity posture", "Is the operating system still receiving security updates, and how will the system be segmented if not?"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Get licence transfer confirmed by the manufacturer, not the reseller",
    text: "A reseller can promise licence transfer in good faith and still be unable to deliver it. Written confirmation from the original manufacturer, referencing the specific serial number, is the only evidence worth relying on.",
  },
  {
    type: "h2",
    id: "due-diligence",
    text: "Supplier and Parts Due Diligence",
    number: 6,
    body: "With refurbished PET/CT the supplier is part of the product. The hospital is buying an ongoing capability to keep an ageing system working.",
  },
  {
    type: "ul",
    items: [
      "Engineering capability — does the supplier employ engineers trained on this platform, and where are they based relative to the hospital?",
      "Parts holding — is there a stocked inventory of critical parts, including detector assemblies, or only a brokerage arrangement?",
      "Response commitment — a written response time with a defined escalation path, not a best-efforts statement.",
      "Reference sites — installed refurbished systems of the same generation that the hospital can contact.",
      "Physics and QA support — availability of qualified support for acceptance, harmonisation and annual testing.",
      "Documentation — complete service history, refurbishment records, regulatory documentation and manuals in a language the team can use.",
    ],
  },
  {
    type: "h2",
    id: "installation",
    text: "Installation Realities",
    number: 7,
    body: "A refurbished system is installed into the same suite a new one would need, and to the same standards.",
  },
  {
    type: "ul",
    items: [
      "Shielding is designed for 511 keV photons and planned workload, independent of the scanner's age.",
      "Uptake rooms, hot lab, injected-patient toilet and decay store remain regulatory and operational requirements.",
      "Structural load verification must be obtained for the specific system, not inferred from a similar model.",
      "Cooling capacity must match the system's heat rejection, which for older platforms is often higher than for current ones.",
      "Delivery route survey — crate dimensions for older gantries can be larger than for modern equivalents.",
      "Licensing and physics review timelines are unchanged, and usually set the critical path.",
    ],
  },
  {
    type: "h2",
    id: "decision",
    text: "When Refurbished Is the Right Choice",
    number: 8,
    body: "The decision is rarely about the scanner in isolation. It is about matching risk to the clinical and financial position of the service.",
  },
  {
    type: "table",
    headers: ["Situation", "Indication"],
    rows: [
      ["First PET/CT, uncertain referral volume, constrained capital", "Refurbished can be sound — provided detector evidence and parts support are strong"],
      ["Established high-volume oncology service", "New system usually wins on throughput, uptime and cost per study"],
      ["Second scanner for redundancy or overflow", "Refurbished is often an efficient use of capital"],
      ["Service requiring quantitative harmonisation for trials or accreditation", "Only acceptable with proven harmonisation capability and supported software"],
      ["Cardiac and neurology ambitions from day one", "Verify licences and preparation infrastructure before committing"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Matching the decision to the situation",
    clinicalInterpretation: "Refurbished PET/CT rewards hospitals that do technical due diligence and punishes hospitals that buy on price and specification sheet alone.",
    hospitalRecommendation: "Apply this as a documented departmental practice rather than as case-by-case judgement, and review it with medical physics and biomedical engineering at least annually.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How long can a refurbished PET/CT be expected to serve?",
        a: "It depends on detector condition, parts availability and software support rather than on age alone. A well-refurbished system with documented detector performance and a stocked parts supply can serve for years; an unassessed system of the same age can fail expensively within months. Ask for the measurements, not the model year.",
      },
      {
        q: "Is image quality worse on a refurbished system?",
        a: "Not necessarily worse than the system's original specification, but that specification may be below current systems — particularly in timing performance, axial coverage and reconstruction. The practical question is whether the measured performance supports the clinical indications the hospital intends to report.",
      },
      {
        q: "Can quantitative SUV reporting be trusted on refurbished equipment?",
        a: "Yes, if the system holds calibration, the CT alignment is verified and the site runs a disciplined quality assurance programme with physics support. Quantitative reliability is a function of calibration and QA practice, not of purchase route.",
      },
      {
        q: "Should the CT tube always be replaced before handover?",
        a: "Not always, but its exposure history must be known. A tube close to end of life should either be replaced before handover or reflected in the price, because its replacement is a significant unplanned cost in the first years of service.",
      },
      {
        q: "What single item should never be waived?",
        a: "On-site NEMA NU 2 acceptance testing after installation, with payment linked to the results. It is the only objective evidence that the delivered system performs as promised in the hospital's own room.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Evaluating a refurbished PET/CT?",
    subheading:
      "AbuFarha Medical supplies, installs, commissions and supports PET/CT systems and advises hospitals on configuration, detector due diligence, infrastructure scope and long-term service planning.",
    technology: "PET/CT Scanners",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "PET/CT installation, commissioning and service" },
      { role: "Commercial review", name: "AbuFarha Projects & Procurement", credential: "Imaging capital project scoping" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer refurbishment and installation documentation, NEMA performance standards and hospital procurement practice",
    disclaimer:
      "This article describes assessment discipline for refurbished PET/CT systems. It does not quote prices or endorse specific platforms; all technical evidence must be obtained for the specific serial number under consideration.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Performance and quality assurance",
        items: [
          { label: "NEMA NU 2 — performance measurements of positron emission tomographs" },
          { label: "EANM / EARL guidance on quantitative harmonisation and accreditation" },
        ],
      },
      {
        title: "Facility and radiation protection",
        items: [
          { label: "IAEA guidance on nuclear medicine facility design and radiation protection" },
          { label: "National radiation protection guidance on PET facility shielding and licensing" },
        ],
      },
      {
        title: "Equipment lifecycle",
        items: [
          { label: "IEC 62667 and manufacturer refurbishment documentation practice" },
          { label: "Manufacturer pre-installation, structural load and cooling documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Detector condition — measured sensitivity and timing performance — decides whether a refurbished PET/CT is a bargain or a liability.",
      "\"Refurbished\" has no standard meaning; only a written, itemised scope of work does.",
      "Software licences must be confirmed transferable in writing by the original manufacturer, referencing the serial number.",
      "The CT subsystem needs documented tube history and verified alignment for reliable attenuation correction.",
      "Suite construction, shielding, uptake rooms, licensing and cooling costs are unchanged by buying refurbished.",
      "The supplier's engineering capability and parts holding are part of the product.",
      "Make payment contingent on on-site NEMA NU 2 acceptance results.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "Refurbished PET/CT is a legitimate route into nuclear medicine imaging when it is bought on evidence rather than on price.",
  },
  {
    type: "p",
    text: "The hospitals that succeed with refurbished PET/CT treat the purchase as an engineering assessment with a commercial wrapper: they demand detector data, confirm licences at source, verify parts support and hold payment against on-site performance. Handled that way, a refurbished system can carry a service until volume justifies a flagship replacement.",
  },
];
