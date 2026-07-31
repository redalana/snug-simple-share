/**
 * What is a PET/CT scanner — PET/CT cluster (pillar).
 */

import type { ContentBlock, TocItem } from "../blog";

export const WHAT_IS_A_PET_CT_SCANNER_TOC: TocItem[] = [
  { id: "overview", title: "What a PET/CT Scanner Is" },
  { id: "physics", title: "The Physics: Positrons, Annihilation and Coincidence" },
  { id: "components", title: "Inside the System: Detectors, CT and Gantry" },
  { id: "workflow", title: "The Patient Journey, Step by Step" },
  { id: "suv", title: "Reading a PET/CT: SUV and Quantification" },
  { id: "clinical", title: "Clinical Applications" },
  { id: "comparison", title: "PET/CT Compared With Other Modalities" },
  { id: "infrastructure", title: "What a Hospital Must Provide" },
  { id: "buying", title: "Specification and Buying Considerations" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const WHAT_IS_A_PET_CT_SCANNER_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A PET/CT scanner is a single device that performs two complementary scans in one session: positron emission tomography, which maps metabolic and molecular activity, and computed tomography, which maps anatomy. The two datasets are acquired in the same reference frame and displayed fused, so a region of abnormal metabolism can be localised precisely to an anatomical structure.",
      "That combination is why PET/CT became the reference standard for staging and treatment response assessment in much of oncology. PET alone shows that something is metabolically active but localises it poorly; CT alone shows structure but cannot reliably distinguish viable tumour from scar tissue. Together they answer questions neither can answer alone.",
      "This guide explains how PET/CT works, what is inside the gantry, how a patient study proceeds from radiotracer injection to report, how standardised uptake values are used and misused, and what a hospital must provide in infrastructure, radiopharmacy and staffing before a PET/CT programme is viable.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "PET physics, detector and CT subsystems, patient workflow, SUV quantification, oncology, cardiac and neurology applications, infrastructure requirements and buying considerations",
    audience:
      "Oncologists, nuclear medicine and radiology teams, hospital administrators, medical physicists, biomedical engineers and healthcare planners",
    readingTime: "18 min read",
    technology: "PET/CT Scanners",
  },
  {
    type: "h2",
    id: "overview",
    text: "What a PET/CT Scanner Is",
    number: 1,
    body: "Physically, a PET/CT is two rings in one housing sharing one patient table, one control system and one coordinate frame. Clinically, it is a functional imaging device with anatomical context built in.",
  },
  {
    type: "ul",
    items: [
      "PET subsystem — a full ring of scintillation detectors that record pairs of annihilation photons emitted from an injected radiotracer.",
      "CT subsystem — a diagnostic multi-slice CT that provides anatomical localisation and the attenuation map needed to correct the PET data quantitatively.",
      "Shared patient table — a single-axis table that moves the patient through both rings without repositioning, which is what makes accurate fusion possible.",
      "Reconstruction and fusion workstation — hardware and software producing PET, CT and fused datasets, plus quantitative measurements.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The CT is not just for pictures",
    text: "Before PET/CT, PET attenuation correction relied on slow transmission scans using a rotating rod source. Using CT for attenuation correction cut acquisition time dramatically and improved quantitative accuracy — one of the main reasons the hybrid design displaced stand-alone PET almost completely.",
  },
  {
    type: "h2",
    id: "physics",
    text: "The Physics: Positrons, Annihilation and Coincidence",
    number: 2,
    body: "PET does not detect the radiotracer directly. It detects the pair of photons produced when a positron emitted by the tracer meets an electron in tissue.",
  },
  {
    type: "ul",
    items: [
      "A positron-emitting radionuclide is attached to a biologically active molecule — most commonly fluorine-18 attached to a glucose analogue.",
      "After injection, the molecule distributes according to biology: FDG accumulates where glucose consumption is high, including most malignant tumours, inflammation and normally avid tissues such as brain and myocardium.",
      "Each emitted positron travels a short distance, then annihilates with an electron, converting mass into two 511 keV photons that travel in almost exactly opposite directions.",
      "Detectors on opposite sides of the ring that register photons within a very short coincidence window define a line of response through the body.",
      "Millions of such lines are reconstructed into a three-dimensional map of tracer concentration.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Why PET resolution has a physical floor",
    text: "Two effects limit PET spatial resolution regardless of detector quality: the distance a positron travels before annihilation, and the small deviation from exactly 180° between the two photons. This is why PET resolution is measured in millimetres while CT resolution is measured in fractions of a millimetre — and why anatomical localisation comes from the CT, not the PET.",
  },
  {
    type: "h2",
    id: "components",
    text: "Inside the System: Detectors, CT and Gantry",
    number: 3,
    body: "Three specification areas determine how a PET/CT performs in practice: the scintillator and photodetector, whether time-of-flight is supported, and the axial field of view.",
  },
  {
    type: "table",
    headers: ["Subsystem", "What it does", "Why it matters clinically"],
    rows: [
      ["Scintillation crystals", "Convert 511 keV photons into visible light", "Crystal material and size govern sensitivity, timing performance and small-lesion detectability"],
      ["Photodetectors", "Convert light into an electrical signal", "Silicon photomultipliers enable time-of-flight and are compatible with MR environments; older designs use photomultiplier tubes"],
      ["Time-of-flight (TOF)", "Uses the tiny arrival-time difference between the two photons", "Narrows the likely annihilation position along the line of response, improving contrast — most valuable in larger patients"],
      ["Axial field of view", "Length of body covered per bed position", "Longer coverage means fewer bed positions, shorter scans or lower injected activity"],
      ["CT subsystem", "Anatomical imaging and attenuation correction", "Slice count and dose-reduction features determine whether the CT can also serve as a diagnostic or radiotherapy-planning study"],
      ["Reconstruction", "Iterative and resolution-modelled algorithms", "Determines quantitative stability, noise and how comparable follow-up studies are"],
    ],
    caption: "Core PET/CT subsystems and their clinical consequences.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Sensitivity, timing resolution and axial coverage form a trade space. Improving any one of them can be spent as shorter scans, lower injected activity, or better small-lesion detection.",
    clinicalInterpretation:
      "For oncology staging, small-lesion detectability and reproducible SUV matter most. For high-throughput services, axial coverage and scan time dominate.",
    hospitalRecommendation:
      "Decide in advance how the performance gain will be spent — throughput, dose or detectability — and write that intention into the tender so bidders are compared on the same basis.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "The Patient Journey, Step by Step",
    number: 4,
    body: "A PET/CT study is a scheduled, preparation-dependent procedure. Most quality failures originate in preparation, not in the scanner.",
  },
  {
    type: "ul",
    items: [
      "Preparation: fasting for a defined period, blood glucose check, hydration, and avoidance of strenuous exercise. Diabetic patients need a specific protocol agreed with the referring team.",
      "Injection: the radiotracer is administered in a shielded uptake room, with activity and injection time recorded precisely because SUV depends on both.",
      "Uptake period: the patient rests quietly, usually around an hour for FDG, avoiding muscular activity and cold exposure that alter distribution.",
      "Acquisition: a low-dose CT for attenuation and localisation, then PET acquired bed position by bed position, typically from skull base to mid-thigh, extended when clinically indicated.",
      "Reconstruction and review: attenuation-corrected PET, CT and fused series are produced, with quantitative measurements and comparison to any prior study.",
      "Reporting: a nuclear medicine physician or dual-trained radiologist reports the study, ideally with access to the clinical question and prior imaging.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Preparation errors that waste a scan",
    items: [
      "Recent meal or intravenous glucose — raises blood glucose and suppresses tumour FDG uptake.",
      "Recent strenuous exercise — diffuse muscle uptake obscures disease.",
      "Cold environment before injection — activates brown fat, producing striking uptake that mimics nodal disease.",
      "Inaccurate recording of injected activity or injection time — makes SUV meaningless and follow-up comparison impossible.",
      "Recent chemotherapy or growth-factor therapy without an agreed interval — causes marrow and inflammatory uptake that can be misread as progression.",
    ],
  },
  {
    type: "h2",
    id: "suv",
    text: "Reading a PET/CT: SUV and Quantification",
    number: 5,
    body: "The standardised uptake value normalises measured tracer concentration to injected activity and body size, giving a semi-quantitative number that can be tracked over time.",
  },
  {
    type: "ul",
    items: [
      "SUVmax — the single hottest voxel in a lesion. Simple and reproducible in reporting, but noise-sensitive.",
      "SUVpeak — the mean of a small fixed volume around the hottest region. More stable than SUVmax and increasingly preferred for response assessment.",
      "SUVmean — mean value within a defined volume. Depends heavily on how the boundary is drawn.",
      "Metabolic tumour volume and total lesion glycolysis — volumetric measures that capture disease burden rather than intensity alone.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "SUV is only comparable under identical conditions",
    text: "SUV depends on uptake time, injected activity accuracy, patient weight, blood glucose, reconstruction algorithm and scanner calibration. Comparing SUVs across scanners, or across reconstruction settings, without harmonisation is a common source of incorrect response assessment. Departments performing response assessment must fix and document their protocol.",
  },
  {
    type: "h2",
    id: "clinical",
    text: "Clinical Applications",
    number: 6,
    body: "Oncology dominates PET/CT workload, but cardiac and neurological indications are clinically important and often justify the service in mixed-case hospitals.",
  },
  {
    type: "table",
    headers: ["Field", "Typical questions answered", "Value added over CT or MRI alone"],
    rows: [
      ["Oncology staging", "Nodal and distant disease, single versus multiple sites", "Detects metabolically active disease in structurally normal tissue"],
      ["Treatment response", "Is the residual mass viable tumour or fibrosis?", "Metabolic change precedes size change, allowing earlier decisions"],
      ["Radiotherapy planning", "Which volume should receive dose?", "Biological target definition on top of anatomical contouring"],
      ["Recurrence and surveillance", "Is rising tumour marker explained by a lesion?", "Whole-body survey in a single session"],
      ["Cardiology", "Myocardial viability, sarcoid and infection imaging", "Distinguishes viable from scarred myocardium and active inflammation"],
      ["Neurology", "Dementia patterns, epilepsy focus localisation, tumour grading", "Metabolic pattern recognition where structure is preserved"],
    ],
    caption: "Principal PET/CT clinical applications.",
  },
  {
    type: "h2",
    id: "comparison",
    text: "PET/CT Compared With Other Modalities",
    number: 7,
    body: "PET/CT is a problem-solving and staging tool, not a first-line imaging modality. Its role is defined by what the alternatives cannot do.",
  },
  {
    type: "table",
    headers: ["Modality", "Primary information", "Best used for"],
    rows: [
      ["PET/CT", "Metabolic activity with anatomical localisation", "Whole-body staging, response assessment, occult disease"],
      ["Diagnostic CT", "High-resolution anatomy", "First-line assessment, size measurement, acute presentations"],
      ["MRI", "Soft-tissue contrast and tissue characterisation", "Brain, liver, pelvis, musculoskeletal and local staging"],
      ["SPECT/CT", "Functional imaging with single-photon tracers", "Bone, thyroid, parathyroid, perfusion and sentinel node studies"],
      ["PET/MR", "Metabolism with superior soft-tissue anatomy", "Selected neurological, paediatric and pelvic indications; limited availability"],
    ],
    caption: "How PET/CT relates to neighbouring modalities.",
  },
  {
    type: "h2",
    id: "infrastructure",
    text: "What a Hospital Must Provide",
    number: 8,
    body: "PET/CT is the most infrastructure-dependent imaging modality after MRI, and the dependency is regulatory as much as physical.",
  },
  {
    type: "ul",
    items: [
      "Radiopharmaceutical supply — either a reliable delivery contract from a cyclotron within practical transport distance of the tracer half-life, or an on-site production facility with its own licensing burden.",
      "Licensed radioactive-materials handling — regulatory authorisation, a radiation protection programme, a qualified expert, and waste storage for decay.",
      "Room layout — shielded hot lab, shielded uptake rooms, patient toilet dedicated to injected patients, controlled circulation separating injected and non-injected patients, scanner room and technical room.",
      "Structural and services — floor loading for the gantry, shielding designed by a physicist, cooling for both PET and CT subsystems, stable power and UPS.",
      "Staffing — nuclear medicine physician or dual-trained radiologist, technologists trained in radiopharmaceutical handling, medical physicist, and radiopharmacy staff where tracers are prepared on site.",
      "Quality assurance — daily and periodic detector QC, calibration traceable for quantification, and documented dose-calibrator checks.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Solve tracer supply before ordering the scanner",
    text: "Fluorine-18 has a short half-life, so the whole service model depends on transport time and delivery reliability. Hospitals that install a PET/CT before securing a dependable tracer supply chain end up with an under-used asset. Confirm the supply contract, delivery schedule and contingency arrangements first.",
  },
  {
    type: "h2",
    id: "buying",
    text: "Specification and Buying Considerations",
    number: 9,
    body: "The specification questions that matter are about the service you intend to run, not about headline numbers.",
  },
  {
    type: "ul",
    items: [
      "Case mix — an oncology-only service has different priorities from one supporting cardiology and neurology, particularly in gating and cardiac software.",
      "CT specification — decide whether the CT must serve as a diagnostic study or radiotherapy planning tool, because that changes slice count, dose features and table specification.",
      "Time-of-flight and digital detectors — worth specifying where small-lesion detectability, larger patients or shorter scan times matter.",
      "Axial coverage and throughput — model realistic daily patient numbers including preparation and uptake time, not just scan duration.",
      "Quantitative harmonisation — if the service will support multicentre trials or cross-site response assessment, require documented harmonisation capability.",
      "Service and lifecycle — detector and electronics cover, guaranteed response times, uptime commitment, and software upgrade policy over ten years.",
      "Refurbished options — a professionally refurbished system with documented detector performance and a full service contract can be an appropriate entry route for a first PET/CT service.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "PET/CT fuses metabolic and anatomical imaging in one session and one coordinate frame; the CT also provides attenuation correction.",
      "PET resolution is physically limited, so localisation comes from CT — the two subsystems are complementary by design.",
      "Most study quality problems come from patient preparation and activity recording, not from the scanner.",
      "SUV is only comparable when uptake time, activity, reconstruction and calibration are held constant.",
      "Tracer supply, licensing and shielded room design decide programme viability before equipment choice does.",
      "Specify the CT, gating and quantification features around the clinical service you intend to run.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "What is a PET/CT scanner?",
        a: "A PET/CT scanner is a single system that performs positron emission tomography and computed tomography in one session. PET maps metabolic activity from an injected radiotracer, CT maps anatomy and provides the attenuation correction PET needs, and the two datasets are displayed fused so abnormal activity can be localised precisely.",
      },
      {
        q: "How does a PET scan actually work?",
        a: "A positron-emitting radiotracer is injected and distributes according to biology. Each emitted positron annihilates with an electron, producing two 511 keV photons travelling in opposite directions. Detectors that register both photons within a very short coincidence window define a line through the body, and millions of such lines are reconstructed into a 3D map of tracer concentration.",
      },
      {
        q: "What is FDG and why is it used?",
        a: "FDG is a glucose analogue labelled with fluorine-18. Because many malignant tumours consume glucose at a high rate, FDG accumulates in them and makes them visible against surrounding tissue. Inflammation, infection and normally avid tissues such as brain and myocardium also take up FDG, which is why interpretation requires clinical context.",
      },
      {
        q: "How long does a PET/CT scan take?",
        a: "The scan itself commonly takes 15 to 30 minutes depending on axial coverage and scanner generation, but the appointment is longer: preparation and glucose check, injection, and an uptake period of roughly an hour for FDG before acquisition begins.",
      },
      {
        q: "What does SUV mean on a PET report?",
        a: "SUV, the standardised uptake value, normalises measured tracer concentration to injected activity and body size, giving a semi-quantitative measure of uptake intensity. SUVmax is the hottest voxel, SUVpeak a small averaged region, and SUVmean the average within a drawn volume. Values are only comparable when protocol and calibration are held constant.",
      },
      {
        q: "How much radiation does a PET/CT involve?",
        a: "A PET/CT delivers dose from both the injected radiotracer and the CT component, so the combined dose is higher than a CT alone. Dose is managed by using the lowest appropriate injected activity, low-dose CT settings when the CT is only for attenuation and localisation, and by ensuring each study is clinically justified.",
      },
      {
        q: "Is PET/CT better than MRI?",
        a: "Neither replaces the other. PET/CT is the stronger tool for whole-body staging, treatment response and detecting metabolically active disease in structurally normal tissue. MRI offers superior soft-tissue detail for local staging in the brain, liver, pelvis and musculoskeletal system. Many oncology pathways use both.",
      },
      {
        q: "What infrastructure does a hospital need for PET/CT?",
        a: "A reliable radiotracer supply within transport distance of the tracer half-life, a licence to handle radioactive materials with a radiation protection programme, a shielded hot lab and uptake rooms with dedicated patient facilities, adequate floor loading and cooling, and trained nuclear medicine, physics and technologist staffing.",
      },
      {
        q: "Can a refurbished PET/CT be a sound purchase?",
        a: "Yes, when it is professionally refurbished with documented detector performance testing, a verified calibration baseline, replaced consumable components and a full service contract with detector cover. For a hospital establishing its first PET service, this can be a lower-risk entry route than an over-specified new system.",
      },
      {
        q: "What is the difference between PET/CT and SPECT/CT?",
        a: "PET uses positron-emitting tracers detected in coincidence, giving higher sensitivity and better quantification. SPECT uses single-photon tracers and a rotating gamma camera, is more widely available and less costly, and remains standard for bone, thyroid, perfusion and sentinel node studies.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning a PET/CT or molecular imaging service?",
    subheading:
      "AbuFarha Medical supplies, installs, commissions and supports PET/CT systems, and works with hospital teams on room planning, radiopharmacy layout and long-term service cover.",
    technology: "PET/CT Scanners",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Nuclear medicine and oncology imaging practice" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "PET/CT installation, calibration and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "International nuclear medicine guidance, physics standards and installation practice",
    disclaimer:
      "This article is educational and does not provide medical advice. Radiopharmaceutical handling and radiation protection are governed by national regulation; always follow your national requirements and your qualified medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Procedure and reporting guidance",
        items: [
          { label: "European Association of Nuclear Medicine — FDG PET/CT procedure guidelines for tumour imaging" },
          { label: "Society of Nuclear Medicine and Molecular Imaging — appropriate use and procedure standards" },
        ],
      },
      {
        title: "Quantification and harmonisation",
        items: [
          { label: "EANM Research Ltd (EARL) — accreditation and quantitative harmonisation programme" },
          { label: "NEMA NU 2 — performance measurements of positron emission tomographs" },
        ],
      },
      {
        title: "Radiation protection and safety",
        items: [
          { label: "International Atomic Energy Agency — radiation protection in nuclear medicine" },
          { label: "International Commission on Radiological Protection — radiological protection in medicine" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as guidance is revised.",
  },
];
