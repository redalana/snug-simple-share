/**
 * Breast imaging quality assurance programme — Mammography cluster (quality).
 */

import type { ContentBlock, TocItem } from "../blog";

export const BREAST_QA_TOC: TocItem[] = [
  { id: "overview", title: "Why Mammography QA Is Different" },
  { id: "structure", title: "Structure of a QA Programme" },
  { id: "daily", title: "Daily and Weekly Tests" },
  { id: "physics", title: "Monthly, Annual and Physics Testing" },
  { id: "clinical", title: "Clinical Image Quality Audit" },
  { id: "indicators", title: "Service Performance Indicators" },
  { id: "governance", title: "Governance, Records and Escalation" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const BREAST_QA_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Breast imaging quality assurance is the most prescriptive programme in diagnostic radiology, and for a specific reason: mammography is applied to large numbers of asymptomatic people, and its failures are invisible. A system drifting outside tolerance does not produce obviously defective images — it produces plausible images that detect slightly fewer cancers.",
      "A proper programme therefore has three layers: technical testing of the equipment, audit of clinical image quality and positioning, and monitoring of service outcome indicators such as recall and detection rates. Any one layer alone leaves a substantial blind spot.",
      "This guide sets out how to structure and run that programme, who owns each element, what the tests actually detect, and how deviations should be escalated rather than normalised.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Programme structure and ownership, daily to annual technical testing, clinical image and positioning audit, service performance indicators, and governance and escalation",
    audience:
      "Mammographers and radiologists, medical physics, biomedical engineering, breast service and quality managers",
    readingTime: "14 min read",
    technology: "Mammography Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Why Mammography QA Is Different",
    number: 1,
    body: "The population, the stakes and the invisibility of failure all justify a prescriptive regime.",
  },
  {
    type: "ul",
    items: [
      "The examination is offered to asymptomatic people, so the benefit-risk balance is narrow and dose-constrained.",
      "Diagnostic targets are small and low in contrast, so modest performance loss changes detection.",
      "Deterioration is gradual and does not present as visible image failure.",
      "Screening programmes are population interventions with formal quality standards and accreditation.",
      "Positioning quality is as influential as equipment performance and requires separate audit.",
      "Outcome indicators — recall, detection, interval cancers — are the only true measure of programme quality.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Three layers, not one",
    text: "Equipment QA confirms the system can produce good images. Clinical image audit confirms that good images are actually being produced on real patients. Outcome indicators confirm the whole service detects disease. Programmes that run only the first layer are common and insufficient.",
  },
  {
    type: "h2",
    id: "structure",
    text: "Structure of a QA Programme",
    number: 2,
    body: "Assign every element an owner, a frequency, a tolerance and an escalation route.",
  },
  {
    type: "table",
    headers: ["Layer", "Owner", "Frequency"],
    rows: [
      ["Daily equipment and detector checks", "Mammographers", "Every operating day"],
      ["Weekly image quality and artefact checks", "Designated QA mammographer", "Weekly"],
      ["Monthly technical checks", "Biomedical engineering / QA lead", "Monthly"],
      ["Physics testing and dose measurement", "Medical physics", "Annually and after major service"],
      ["Acceptance and post-service testing", "Medical physics with engineering", "At installation and after major intervention"],
      ["Display quality assurance", "QA lead with medical physics", "Daily visual, annual calibration verification"],
      ["Clinical image and positioning audit", "Radiologists and mammographers", "Continuous sampling, periodic review"],
      ["Service outcome indicators", "Service and programme management", "Quarterly and annually"],
      ["Records and escalation", "Quality manager", "Continuous"],
    ],
  },
  {
    type: "h2",
    id: "daily",
    text: "Daily and Weekly Tests",
    number: 3,
    body: "These tests exist to catch problems before a clinical list runs on a degraded system.",
  },
  {
    type: "table",
    headers: ["Test", "Frequency", "Detects"],
    rows: [
      ["Detector calibration / flat field check", "Daily", "Detector drift, dead pixels, non-uniformity"],
      ["Uniformity and artefact review", "Daily to weekly", "Grid lines, dust, detector damage, processing artefacts"],
      ["Signal-to-noise and contrast-to-noise on phantom", "Weekly", "Gradual performance loss before it is visible clinically"],
      ["Automatic exposure control consistency", "Weekly", "Dose creep or inconsistent technique selection"],
      ["Compression force indication check", "Weekly to monthly", "Force display errors affecting technique and comfort"],
      ["Display visual check with test pattern", "Daily", "Monitor drift, ambient light problems, calibration loss"],
      ["Mechanical and safety inspection", "Daily", "Paddle damage, movement faults, safety features"],
      ["Cleaning of paddle, bucky and detector cover", "Between patients and daily", "Artefacts and infection control"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Daily tests only work if deviations stop the list",
    clinicalInterpretation:
      "The commonest failure of a QA programme is not omitted testing but recorded out-of-tolerance results with no consequence. Once a deviation is logged and the list proceeds unchanged, the programme has become documentation rather than control.",
    hospitalRecommendation:
      "Define explicit action levels: what is recorded, what triggers an engineering call, and what stops clinical use. Make the stop authority clear and support the staff who exercise it.",
  },
  {
    type: "h2",
    id: "physics",
    text: "Monthly, Annual and Physics Testing",
    number: 4,
    body: "Physics testing establishes and re-verifies the quantitative performance of the system.",
  },
  {
    type: "ul",
    items: [
      "Average glandular dose measurement across a range of simulated breast thicknesses and densities.",
      "Comparison of measured dose against national diagnostic reference levels and against the system's own baseline.",
      "Automatic exposure control performance across thickness, including behaviour at the extremes.",
      "Threshold contrast visibility or contrast-detail performance against defined tolerances.",
      "Spatial resolution and, where applicable, tomosynthesis reconstruction performance.",
      "Beam quality, half-value layer and target/filter selection verification.",
      "Compression force accuracy and paddle alignment measurement.",
      "Detector uniformity, ghosting and defective pixel mapping.",
      "Leakage radiation, tube output reproducibility and safety interlock verification.",
      "Display calibration verification against the applicable grayscale standard.",
      "Post-service testing after tube, detector, paddle or software changes — not deferred to the annual visit.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Software updates require re-verification",
    text: "Processing and reconstruction updates can change image appearance and, occasionally, automatic exposure control behaviour. Treat any acquisition or processing software change as a trigger for physics verification and for a documented reader review, rather than as routine IT maintenance.",
  },
  {
    type: "h2",
    id: "clinical",
    text: "Clinical Image Quality Audit",
    number: 5,
    body: "Equipment within tolerance does not guarantee adequate clinical images.",
  },
  {
    type: "table",
    headers: ["Audit element", "What is assessed", "Why it matters"],
    rows: [
      ["Posterior tissue inclusion", "Adequacy of tissue captured on each projection", "Excluded tissue cannot be read; a leading cause of missed disease"],
      ["Nipple in profile", "Correct positioning on standard views", "Affects assessment of retroareolar tissue"],
      ["Symmetry and pectoral muscle demonstration", "Standard view criteria", "Indicates correct positioning technique"],
      ["Skin folds and artefacts", "Presence and impact", "Can obscure findings or mimic pathology"],
      ["Compression adequacy", "Thickness achieved and evenness", "Affects contrast, dose and motion"],
      ["Motion", "Blur assessment across views", "More consequential in tomosynthesis"],
      ["Repeat and technical recall rate", "Proportion and reasons", "The most actionable single indicator of positioning quality"],
      ["Individual and team feedback", "Structured, non-punitive review", "Positioning improves with feedback, not with instruction alone"],
    ],
  },
  {
    type: "h2",
    id: "indicators",
    text: "Service Performance Indicators",
    number: 6,
    body: "Outcome indicators are the only measure of whether the whole service works.",
  },
  {
    type: "table",
    headers: ["Indicator", "Interpretation", "Typical action when adverse"],
    rows: [
      ["Recall rate", "Too high wastes capacity and causes anxiety; too low may indicate under-reading", "Reader audit and reading conditions review"],
      ["Cancer detection rate", "Programme sensitivity relative to expected incidence", "Reader performance, image quality and positioning review"],
      ["Repeat / technical recall rate", "Positioning and equipment reliability", "Targeted positioning training"],
      ["Interval cancer rate", "Sensitivity and screening interval adequacy", "Programme-level review with reader audit"],
      ["Biopsy positive predictive value", "Appropriateness of recall and biopsy thresholds", "Multidisciplinary review of criteria"],
      ["Average glandular dose distribution", "Dose optimisation across the caseload", "Physics review of protocols and AEC"],
      ["Reading time and session throughput", "Capacity sustainability, especially with tomosynthesis", "Session and staffing planning"],
      ["Attendance and re-attendance rate", "Patient experience and access", "Comfort, communication and scheduling review"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Treating recall rate as a radiologist scorecard",
    text: "Recall rate reflects image quality, positioning, prior availability, reading conditions and case mix as much as reader threshold. Used punitively it drives under-recall; used diagnostically it identifies where the service needs support.",
  },
  {
    type: "h2",
    id: "governance",
    text: "Governance, Records and Escalation",
    number: 7,
    body: "A QA programme is only as good as its records and its consequences.",
  },
  {
    type: "ul",
    items: [
      "Maintain a single QA record per system, accessible to mammographers, engineering, physics and quality management.",
      "Record baseline values from acceptance and trend results against them rather than against tolerance limits alone.",
      "Define action levels with explicit responses: record, investigate, call engineering, suspend clinical use.",
      "Name the individual with authority to suspend clinical use, and support that decision.",
      "Review QA trends at a regular multidisciplinary meeting, not only when a test fails.",
      "Include the reporting displays and reading environment in the programme; they are frequently omitted.",
      "Link equipment QA, clinical image audit and outcome indicators in one governance report.",
      "Retain records for the period required by the programme or regulator, and make them available for accreditation.",
      "Re-verify after every major service intervention and software change, with the result recorded before clinical use resumes.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Who is responsible for mammography quality assurance?",
        a: "Responsibility is shared: mammographers perform daily and weekly tests, biomedical engineering handles technical maintenance and monthly checks, medical physics performs quantitative and dose testing, and the service management owns outcome indicators and governance.",
      },
      {
        q: "What happens if a daily test fails?",
        a: "The programme should define it in advance. Typically a repeat test after cleaning and re-calibration, then escalation to engineering, with suspension of clinical use if the deviation exceeds the defined action level. Proceeding with an unresolved failure defeats the programme.",
      },
      {
        q: "Do reporting displays need their own QA?",
        a: "Yes. High-luminance displays drift, ambient reading conditions change, and low-contrast detection depends on both. Daily visual test patterns and annual calibration verification should be part of the programme.",
      },
      {
        q: "How does tomosynthesis change the QA programme?",
        a: "It adds reconstruction performance, tomosynthesis-specific dose measurement and artefact assessment, and it increases the importance of motion audit. It does not remove any of the 2D requirements, since synthetic or true 2D images remain in use.",
      },
      {
        q: "Is clinical image audit really necessary if equipment tests pass?",
        a: "Yes. Positioning is the largest single determinant of whether disease is included in the image at all, and no phantom test detects a positioning problem. Equipment QA and clinical audit answer different questions.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Building a robust breast imaging QA programme?",
    subheading:
      "AbuFarha Medical supports mammography services with acceptance testing, preventive maintenance, QA programme design and mammographer training.",
    technology: "Mammography Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Breast imaging quality assurance and training" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Mammography testing, service and dose verification" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "European and national breast screening quality assurance guidelines, IEC testing standards and manufacturer QA documentation",
    disclaimer:
      "Test frequencies, tolerances and accreditation requirements are jurisdiction-specific and often mandatory. Follow your national screening programme, regulator and medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Screening quality assurance",
        items: [
          { label: "European guidelines for quality assurance in breast cancer screening and diagnosis" },
          { label: "National breast screening programme quality standards and accreditation requirements" },
        ],
      },
      {
        title: "Testing standards",
        items: [
          { label: "IEC 61223-3-2 — acceptance testing for mammographic X-ray equipment" },
          { label: "IEC 60601-2-45 for mammographic and tomosynthesis equipment" },
        ],
      },
      {
        title: "Dose and display",
        items: [
          { label: "National diagnostic reference levels for mammography" },
          { label: "AAPM and national guidance on display performance and viewing conditions" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards and programmes are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Mammography QA has three layers: equipment testing, clinical image audit and outcome indicators.",
      "Failure is silent — gradual performance loss produces plausible but less sensitive images.",
      "Define action levels with real consequences, including the authority to suspend clinical use.",
      "Trend results against acceptance baselines, not only against tolerance limits.",
      "Positioning audit and repeat-rate monitoring detect what no phantom test can.",
      "Include reporting displays and reading conditions in the programme.",
      "Re-verify after every major service intervention and software update before clinical use resumes.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "Quality assurance in breast imaging is the mechanism that keeps an invisible failure mode visible.",
  },
  {
    type: "p",
    text: "A programme with clear ownership, baseline trending, enforced action levels, positioning audit and outcome monitoring protects the sensitivity of the whole service. A programme that records results without consequence protects nothing but the paperwork.",
  },
];
