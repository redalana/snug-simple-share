/**
 * PET/CT radiotracers and FDG explained — PET/CT cluster (supporting).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PET_CT_RADIOTRACERS_TOC: TocItem[] = [
  { id: "overview", title: "What a Radiotracer Is" },
  { id: "fdg", title: "FDG: Why Glucose Metabolism Works" },
  { id: "pitfalls", title: "FDG Pitfalls: False Positives and Negatives" },
  { id: "beyond", title: "Beyond FDG: The Modern Tracer Portfolio" },
  { id: "halflife", title: "Half-Life, Supply Logistics and Scheduling" },
  { id: "dosing", title: "Activity, Dosimetry and Patient Safety" },
  { id: "handling", title: "Hot Lab Handling and Quality Control" },
  { id: "programme", title: "Building a Tracer Programme" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PET_CT_RADIOTRACERS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A PET/CT scanner produces no image of its own. It measures where an injected radiotracer has gone, so the tracer — not the scanner — determines what the study can answer. Two patients scanned on the same system minutes apart can be investigated for entirely different diseases purely because a different molecule was injected.",
      "For most services, that molecule is FDG, a glucose analogue labelled with fluorine-18. But the modern portfolio now extends to prostate-specific membrane antigen ligands, somatostatin-receptor tracers, amino-acid tracers for brain tumours, bone-seeking fluoride and amyloid and tau tracers in neurology.",
      "This guide explains how tracers work, where FDG succeeds and misleads, what the non-FDG portfolio adds, and how half-life and supply logistics shape the practical service a hospital can actually deliver.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Tracer principles, FDG biology and pitfalls, non-FDG tracers, half-life and supply logistics, injected activity and dosimetry, hot lab handling and quality control",
    audience:
      "Nuclear medicine physicians, radiopharmacists, technologists, medical physicists, oncologists and hospital planners",
    readingTime: "15 min read",
    technology: "PET/CT Scanners",
  },
  {
    type: "h2",
    id: "overview",
    text: "What a Radiotracer Is",
    number: 1,
    body: "A PET radiotracer has two parts: a biologically active molecule that goes where the disease process is, and a positron-emitting label that lets the scanner see where the molecule went.",
  },
  {
    type: "ul",
    items: [
      "The tracer is administered in a quantity far too small to have any pharmacological effect — it traces biology without altering it.",
      "The label must emit positrons and have a half-life long enough for delivery and uptake, but short enough to limit patient dose.",
      "Image contrast comes from biological differences in uptake, not from tissue density, which is why PET can show disease in structurally normal tissue.",
      "Because the signal is biological, the clinical question must be chosen before the tracer, not after.",
    ],
  },
  {
    type: "table",
    headers: ["Radionuclide", "Approximate half-life", "Practical consequence"],
    rows: [
      ["Fluorine-18", "About 110 minutes", "Can be produced centrally and delivered to hospitals within a few hours' transport"],
      ["Gallium-68", "About 68 minutes", "Generator-produced on site or from a regional supplier; short delivery radius"],
      ["Carbon-11", "About 20 minutes", "Requires an on-site cyclotron; research and specialist centres only"],
      ["Nitrogen-13", "About 10 minutes", "On-site production only; used for myocardial perfusion"],
      ["Rubidium-82", "About 75 seconds", "Generator at the scanner; cardiac perfusion services"],
      ["Zirconium-89", "About 78 hours", "Long half-life supports antibody imaging over days; specialist use"],
    ],
    caption: "Common PET radionuclides and what their half-life means for service design.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Half-life is the single most decisive practical property of a PET tracer, because it determines whether the hospital can buy the tracer or must manufacture it.",
    clinicalInterpretation:
      "Fluorine-18 tracers underpin routine clinical PET precisely because their half-life tolerates transport. Shorter-lived tracers deliver valuable clinical information but only where production is on site.",
    hospitalRecommendation:
      "Start a PET service on delivered fluorine-18 tracers. Consider generator-based or on-site production only once workload, staffing and licensing can support it.",
  },
  {
    type: "h2",
    id: "fdg",
    text: "FDG: Why Glucose Metabolism Works",
    number: 2,
    body: "FDG enters cells through the same transporters as glucose and is phosphorylated, but it cannot proceed further down the glycolytic pathway, so it accumulates inside metabolically active cells.",
  },
  {
    type: "ul",
    items: [
      "Many malignant tumours upregulate glucose transport and glycolysis, so they trap FDG at a higher rate than surrounding tissue.",
      "Brain, myocardium under certain conditions, liver, renal collecting system and bowel show physiological uptake that must be recognised as normal.",
      "Activated inflammatory and immune cells are also glucose-avid, which makes FDG valuable in infection and inflammation imaging and simultaneously a source of oncological false positives.",
      "Because uptake is a rate, uptake time matters: images acquired too early or too late are not comparable with prior studies.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Blood glucose is part of the protocol, not a formality",
    text: "Elevated blood glucose competes with FDG for the same transporters and suppresses tumour uptake, reducing lesion conspicuity. This is why fasting and a documented glucose measurement precede injection, and why diabetic patients need an agreed protocol rather than a cancelled appointment.",
  },
  {
    type: "h2",
    id: "pitfalls",
    text: "FDG Pitfalls: False Positives and Negatives",
    number: 3,
    body: "FDG is sensitive but not specific. Competent reporting depends on knowing the recurring traps.",
  },
  {
    type: "table",
    headers: ["Pattern", "Mechanism", "How it is resolved"],
    rows: [
      ["Brown fat uptake", "Cold exposure activates thermogenic fat in the neck and supraclavicular region", "Warm the patient before and after injection; recognise the symmetrical fat-density distribution on CT"],
      ["Diffuse muscle uptake", "Recent exercise or tension", "Rest instructions before the appointment"],
      ["Post-treatment inflammation", "Surgery, radiotherapy or ablation causes reactive uptake", "Respect the minimum interval after treatment before response assessment"],
      ["Marrow and splenic uptake", "Growth-factor therapy or chemotherapy recovery", "Document therapy timing; interpret against the treatment record"],
      ["Infection and sarcoid", "Activated immune cells are glucose-avid", "Correlate clinically; consider a non-FDG tracer if the question is oncological"],
      ["Low-avidity tumours", "Some tumours — well-differentiated neuroendocrine, some prostate and renal cancers, mucinous tumours — consume little glucose", "Use a receptor- or antigen-targeted tracer instead"],
      ["Hyperglycaemia", "Competing glucose reduces tumour uptake", "Reschedule or follow the diabetic protocol"],
    ],
    caption: "Recurring FDG interpretation pitfalls and their remedies.",
  },
  {
    type: "h2",
    id: "beyond",
    text: "Beyond FDG: The Modern Tracer Portfolio",
    number: 4,
    body: "Where FDG is insensitive or non-specific, targeted tracers answer a narrower question with much higher specificity.",
  },
  {
    type: "table",
    headers: ["Tracer class", "Target", "Principal indications"],
    rows: [
      ["PSMA ligands", "Prostate-specific membrane antigen", "Prostate cancer staging, biochemical recurrence, therapy selection"],
      ["Somatostatin-receptor tracers", "Somatostatin receptors", "Neuroendocrine tumour staging and radioligand therapy eligibility"],
      ["Sodium fluoride", "Bone mineral turnover", "Skeletal metastases and benign bone disease"],
      ["Amino-acid tracers", "Amino-acid transport", "Brain tumour grading, recurrence versus treatment change"],
      ["Amyloid and tau tracers", "Protein deposition in the brain", "Investigation of cognitive impairment in selected pathways"],
      ["Perfusion tracers", "Myocardial blood flow", "Quantitative cardiac perfusion and flow reserve"],
      ["Choline and fibroblast-activation tracers", "Membrane synthesis; tumour stroma", "Selected prostate and multi-tumour indications"],
    ],
    caption: "Non-FDG PET tracer classes and their clinical roles.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Theranostics changes the business case",
    text: "Receptor-targeted tracers do more than diagnose: they identify patients eligible for matched radioligand therapy. A hospital planning a neuroendocrine or prostate therapy service should plan the diagnostic tracer, the therapy pathway, licensing and shielded therapy accommodation together rather than sequentially.",
  },
  {
    type: "h2",
    id: "halflife",
    text: "Half-Life, Supply Logistics and Scheduling",
    number: 5,
    body: "Tracer decay imposes an unforgiving timetable. Every hour between production and injection halves the useful activity of a fluorine-18 batch roughly once.",
  },
  {
    type: "ul",
    items: [
      "Delivery windows: batches are calibrated for a stated activity at a stated time. Late patients waste activity; early patients cannot be scanned before delivery.",
      "Slot design: build the list around delivery times, with uptake room capacity matched to scanner throughput so injected patients are never waiting for a busy gantry.",
      "Contingency: agree with the supplier what happens on a failed synthesis or transport delay, and hold a documented cancellation and recall procedure.",
      "Batch sharing: multiple patients from a single batch require accurate dispensing and precise recording of activity and time per patient.",
      "Waste: residual activity, syringes and patient waste decay in a shielded store until they can be cleared under the licence conditions.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Model the day, not the scan",
    text: "PET/CT throughput is limited by uptake room capacity and tracer delivery, not by acquisition time. When planning a service, model a full clinical day including injection intervals, uptake periods and toilet facilities for injected patients — this usually determines how many patients per day the department can genuinely handle.",
  },
  {
    type: "h2",
    id: "dosing",
    text: "Activity, Dosimetry and Patient Safety",
    number: 6,
    body: "Injected activity is a clinical optimisation decision: enough to produce diagnostic image quality, no more than that.",
  },
  {
    type: "ul",
    items: [
      "Activity is normally scaled to body weight and to the scanner's sensitivity and acquisition time, following national or professional guidance.",
      "More sensitive scanners — digital detectors, time-of-flight, extended axial coverage — allow lower activity or shorter scans for equal image quality.",
      "Paediatric activity must follow weight-based paediatric dosage guidance, never adult activity scaled by eye.",
      "Total study dose includes the CT component; use low-dose CT settings when the CT serves only attenuation correction and localisation.",
      "Pregnancy must be excluded per local policy; breastfeeding requires documented interruption and close-contact advice.",
      "Post-injection advice: hydration, voiding, and time-limited distance from infants and pregnant contacts, given in writing.",
    ],
  },
  {
    type: "h2",
    id: "handling",
    text: "Hot Lab Handling and Quality Control",
    number: 7,
    body: "The hot lab is where activity is received, dispensed and recorded. Its discipline determines both staff dose and quantitative accuracy.",
  },
  {
    type: "ul",
    items: [
      "Shielded dispensing: L-blocks, syringe shields, tungsten vial pots and, for higher workloads, automated dispensing systems.",
      "Dose calibrator: calibrated and checked routinely for constancy, accuracy, linearity and geometry — quantification depends entirely on it.",
      "Records: batch identity, activity, calibration time, dispensed activity, residual activity and injection time for every patient.",
      "Contamination control: surface monitoring, spill procedure, dedicated waste routes and a decay store with access control.",
      "Staff dosimetry: whole-body and extremity monitoring, with finger doses reviewed because dispensing dominates hand exposure.",
      "Scanner QC: daily detector checks, periodic normalisation and calibration against a traceable source so SUVs remain comparable over time.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Quantification is a chain, not a setting",
    text: "An SUV is only as good as the weakest link between the dose calibrator, the recorded injection time, the patient weight, the scanner calibration and the reconstruction settings. Departments doing response assessment should audit that whole chain periodically, not just the scanner.",
  },
  {
    type: "h2",
    id: "programme",
    text: "Building a Tracer Programme",
    number: 8,
    body: "A tracer portfolio should expand with clinical demand and licensing capacity, in a deliberate order.",
  },
  {
    type: "ul",
    items: [
      "Phase 1 — FDG only, delivered from a reliable supplier, with fixed protocols and documented quantification.",
      "Phase 2 — add one targeted tracer aligned to the hospital's strongest clinical programme, typically PSMA or a somatostatin-receptor tracer.",
      "Phase 3 — add cardiac or neurology tracers if those services exist and can interpret them.",
      "Phase 4 — consider generator-based or on-site production, and matched radioligand therapy, only with the licensing, physics and radiopharmacy staffing to support it.",
      "Throughout — maintain a written formulary of approved tracers, indications, activity ranges, uptake times and reporting templates.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "The tracer, not the scanner, decides what a PET/CT study can answer.",
      "FDG is highly sensitive but non-specific; recognising its physiological and inflammatory patterns is core reporting competence.",
      "Targeted tracers such as PSMA and somatostatin-receptor ligands answer questions FDG cannot, and open matched therapy pathways.",
      "Half-life governs logistics: fluorine-18 can be delivered, shorter-lived tracers require on-site production.",
      "Throughput is limited by uptake capacity and delivery schedules, not acquisition time.",
      "Quantitative accuracy depends on the whole chain from dose calibrator to reconstruction settings.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "What is a PET radiotracer?",
        a: "A PET radiotracer is a biologically active molecule labelled with a positron-emitting radionuclide. It is given in a quantity too small to have any pharmacological effect, and the scanner images where the molecule accumulates, revealing a biological process rather than anatomy.",
      },
      {
        q: "Why is FDG the most common PET tracer?",
        a: "FDG is a glucose analogue that is taken up by cells and then trapped, so it accumulates wherever glucose consumption is high — including most malignant tumours. Its fluorine-18 label has a half-life long enough to allow central production and delivery, making it practical for routine hospital services.",
      },
      {
        q: "What causes false positive findings on an FDG PET/CT?",
        a: "The commonest causes are activated brown fat after cold exposure, diffuse muscle uptake after exercise, post-surgical or post-radiotherapy inflammation, infection or granulomatous disease, and marrow or splenic activation after chemotherapy or growth-factor therapy. Correlating with the CT appearance and the treatment record usually resolves them.",
      },
      {
        q: "Which cancers may not show up on FDG PET?",
        a: "Tumours with low glucose metabolism can be inconspicuous — well-differentiated neuroendocrine tumours, some prostate and renal cancers, mucinous tumours and some low-grade lymphomas. These are the indications where receptor- or antigen-targeted tracers such as somatostatin-receptor or PSMA ligands are used instead.",
      },
      {
        q: "What is PSMA PET used for?",
        a: "PSMA PET targets prostate-specific membrane antigen and is used for staging higher-risk prostate cancer, investigating biochemical recurrence when conventional imaging is negative, and selecting patients for matched radioligand therapy.",
      },
      {
        q: "Why does tracer half-life matter so much?",
        a: "Half-life determines whether a tracer can be transported. Fluorine-18, at about 110 minutes, tolerates a few hours of transport, so it can be produced centrally. Gallium-68 requires an on-site or nearby generator, and carbon-11 or nitrogen-13 require an on-site cyclotron.",
      },
      {
        q: "How is the injected activity decided?",
        a: "Activity is scaled to patient weight, scanner sensitivity and acquisition time following national or professional guidance, with the aim of achieving diagnostic image quality at the lowest reasonable dose. More sensitive scanners allow lower activity or shorter scans, and paediatric patients follow dedicated weight-based dosage guidance.",
      },
      {
        q: "Does a hospital need its own cyclotron for a PET service?",
        a: "No. Most clinical PET services run entirely on delivered fluorine-18 tracers from a regional production site. On-site production is only necessary for very short-lived tracers or where transport distance makes delivery unreliable, and it carries substantial licensing, staffing and capital burdens.",
      },
      {
        q: "What safety advice do patients receive after a PET scan?",
        a: "Patients are typically advised to drink fluids and void frequently to clear residual tracer, and to keep a short period of distance from infants and pregnant contacts. Breastfeeding may require a documented interruption. Advice should be given in writing and follows local radiation protection policy.",
      },
      {
        q: "What quality control keeps SUV values reliable?",
        a: "A calibrated dose calibrator with constancy, accuracy and linearity checks; accurate recording of activity, injection time and patient weight; routine scanner normalisation and calibration against a traceable source; and fixed reconstruction settings. Changing any link in that chain without revalidation breaks comparability with prior studies.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Setting up or expanding a PET/CT tracer programme?",
    subheading:
      "AbuFarha Medical supports hospitals with PET/CT equipment supply, hot lab and uptake room planning, commissioning and long-term biomedical service cover.",
    technology: "PET/CT Scanners",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Nuclear medicine and molecular imaging practice" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "PET/CT calibration, QC and radiopharmacy infrastructure" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "International nuclear medicine procedure guidance and radiopharmacy practice",
    disclaimer:
      "This article is educational and does not provide medical advice or dosing instructions. Radiopharmaceutical use is governed by national regulation and local licensing; always follow your national requirements and your qualified experts.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Procedure and tracer guidance",
        items: [
          { label: "European Association of Nuclear Medicine — FDG PET/CT tumour imaging procedure guidelines" },
          { label: "EANM / SNMMI joint practice guidelines for PSMA and somatostatin-receptor PET" },
        ],
      },
      {
        title: "Dosage and paediatric practice",
        items: [
          { label: "EANM paediatric dosage card" },
          { label: "SNMMI procedure standards for administered activity" },
        ],
      },
      {
        title: "Radiopharmacy and radiation protection",
        items: [
          { label: "International Atomic Energy Agency — operational guidance on hospital radiopharmacy and nuclear medicine protection" },
          { label: "Pharmacopoeial standards for radiopharmaceutical preparations" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as guidance is revised.",
  },
];
