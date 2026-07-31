/**
 * DEXA pillar article — "What Is a DEXA Bone Densitometer?"
 */

import type { ContentBlock, TocItem } from "../blog";

export const DEXA_PILLAR_TOC: TocItem[] = [
  { id: "definition", title: "What a DEXA Bone Densitometer Is" },
  { id: "physics", title: "How Dual-Energy X-Ray Absorptiometry Works" },
  { id: "components", title: "System Components" },
  { id: "measurements", title: "What a DEXA Scan Measures" },
  { id: "clinical", title: "Clinical Applications" },
  { id: "workflow", title: "Examination Workflow" },
  { id: "quality", title: "Quality Control and Precision" },
  { id: "planning", title: "Room, Staffing and Service Planning" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DEXA_PILLAR_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A DEXA bone densitometer measures bone mineral density using two X-ray energies, producing the quantitative measurement on which osteoporosis diagnosis and fracture-risk management are based. It is the reference method for bone density assessment worldwide, and among the lowest-dose X-ray examinations performed in a hospital.",
      "Unlike most imaging systems, a densitometer's output is a number rather than a picture. That changes everything about how it must be operated: precision, calibration stability and positioning consistency matter more than image appearance, because a follow-up scan is only useful if it is comparable with the baseline.",
      "This guide explains what a DEXA system is, how it works, what it measures, how a service is planned and run, and what a hospital should understand before establishing bone densitometry.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Dual-energy absorptiometry principles, system components, bone mineral density and body composition measurements, clinical applications, examination workflow, quality control and precision, and service planning",
    audience:
      "Radiologists, rheumatologists and endocrinologists, radiographers and densitometry technologists, medical physicists, biomedical engineering teams, service planners",
    readingTime: "14 min read",
    technology: "Bone Densitometers (DEXA)",
  },
  {
    type: "h2",
    id: "definition",
    text: "What a DEXA Bone Densitometer Is",
    number: 1,
    body: "A quantitative measuring instrument that happens to use X-rays.",
  },
  {
    type: "p",
    text: "DEXA — dual-energy X-ray absorptiometry — is a scanning system that passes two distinct X-ray energies through a body region and calculates how much of each is absorbed. Because bone mineral and soft tissue attenuate the two energies differently, the system can separate their contributions and report the mineral content of the bone alone. The result is bone mineral density, expressed in grams per square centimetre, together with derived comparative scores.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The number, not the image",
    text: "DEXA images are deliberately low-resolution. They exist to confirm correct positioning and region-of-interest placement — not for anatomical diagnosis. Reading a DEXA scan means reading its measurements.",
  },
  {
    type: "h2",
    id: "physics",
    text: "How Dual-Energy X-Ray Absorptiometry Works",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Two X-ray energy levels are produced, either by rapid tube voltage switching or by filtering a single beam into two energy bands.",
      "The beam scans across the region of interest while a detector records transmitted intensity at both energies.",
      "Because attenuation differences between bone mineral and soft tissue are energy-dependent, the two measurements allow the two tissue contributions to be solved separately.",
      "The system calculates bone mineral content and divides it by the projected area of the measured region, giving areal bone mineral density.",
      "Calibration against a reference standard converts detector readings into absolute density values, which is why calibration stability is fundamental to the measurement's validity.",
    ],
  },
  {
    type: "p",
    text: "Because DEXA reports areal rather than volumetric density, bone size influences the result. This is a known and accepted characteristic of the method, and it is one reason interpretation relies on comparative scores rather than raw density alone.",
  },
  {
    type: "h2",
    id: "components",
    text: "System Components",
    number: 3,
  },
  {
    type: "table",
    headers: ["Component", "Function", "Why it matters"],
    rows: [
      ["X-ray tube and dual-energy generation", "Produces the two energy spectra", "Spectral stability underpins measurement accuracy"],
      ["Scanning arm and detector assembly", "Sweeps the region and records transmission", "Mechanical repeatability affects precision"],
      ["Patient table and positioning aids", "Standardised positioning of spine, hip and forearm", "Positioning is the largest operator-controlled precision factor"],
      ["Calibration phantom and internal reference", "Maintains absolute density calibration", "Drift invalidates comparison with prior scans"],
      ["Acquisition and analysis software", "Region-of-interest placement, scoring, reporting", "Analysis consistency determines follow-up comparability"],
      ["Reference database", "Population comparison for T-scores and Z-scores", "Determines the diagnostic classification reported"],
    ],
    caption: "Core subsystems of a DEXA bone densitometer and their contribution to measurement validity.",
  },
  {
    type: "h2",
    id: "measurements",
    text: "What a DEXA Scan Measures",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Bone mineral density at standard sites — lumbar spine, femoral neck and total hip, and forearm where axial sites are unusable.",
      "T-score: comparison against a young adult reference population, used for diagnostic classification in appropriate patient groups.",
      "Z-score: comparison against an age-matched population, used where age-relative assessment is clinically required.",
      "Change over time between comparable scans, which is the primary purpose of follow-up densitometry.",
      "Body composition — fat mass, lean mass and their distribution — on systems configured and licensed for it.",
      "Vertebral morphology assessment on systems providing lateral spine imaging, where clinically indicated.",
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "A single density value has limited value in isolation; its meaning comes from the reference comparison and from the clinical risk context of the patient.",
    clinicalInterpretation:
      "Fracture-risk decisions combine densitometry with clinical risk factors rather than treating the T-score as a standalone threshold.",
    hospitalRecommendation:
      "Agree reporting conventions, reference databases and follow-up intervals with the requesting specialties before the service opens.",
  },
  {
    type: "h2",
    id: "clinical",
    text: "Clinical Applications",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Osteoporosis diagnosis and classification in postmenopausal women and older men.",
      "Fracture-risk assessment in combination with clinical risk factor tools.",
      "Monitoring response to pharmacological treatment over appropriate intervals.",
      "Assessment of secondary bone loss in patients on long-term corticosteroids or with endocrine, renal or malabsorptive disease.",
      "Baseline and surveillance assessment in oncology patients receiving therapies affecting bone metabolism.",
      "Body composition assessment in metabolic, nutritional and sports medicine services where that capability is configured.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Follow-up intervals must respect precision",
    text: "Repeating densitometry too soon means real change is smaller than the measurement's least significant change, so the result cannot be interpreted. Intervals should be set from the service's own precision assessment.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "Examination Workflow",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Screen for recent contrast studies or nuclear medicine procedures that would interfere with measurement.",
      "Record height and weight, which are needed for interpretation and for some analyses.",
      "Position the patient using the manufacturer's standard positioning aids — this is the step that most affects reproducibility.",
      "Acquire the standard sites according to a fixed departmental protocol.",
      "Confirm region-of-interest placement matches the prior scan when a comparison is being made.",
      "Report measurements with the scan quality, positioning notes and any factors limiting interpretation.",
    ],
  },
  {
    type: "p",
    text: "Scan times are short and patient dose is very low relative to other X-ray examinations, so throughput is usually limited by patient handling and reporting rather than by acquisition. A well-run service can process a substantial daily list with a single system.",
  },
  {
    type: "h2",
    id: "quality",
    text: "Quality Control and Precision",
    number: 7,
    body: "Without quality control, DEXA numbers cannot be compared.",
  },
  {
    type: "ul",
    items: [
      "Daily phantom scan with results plotted on a control chart and reviewed against action limits.",
      "Formal precision assessment for each operator, establishing the least significant change used for follow-up interpretation.",
      "Documented recalibration and repeat baseline phantom series after any service intervention affecting the measurement chain.",
      "Cross-calibration whenever a system is replaced, relocated or a patient's follow-up moves between systems.",
      "Periodic review of reference database configuration and reporting templates.",
      "Retention of quality control records as part of the service's clinical governance evidence.",
    ],
  },
  {
    type: "h2",
    id: "planning",
    text: "Room, Staffing and Service Planning",
    number: 8,
  },
  {
    type: "ul",
    items: [
      "A dedicated room sized for the scanner footprint, scanning arm travel and assisted patient transfer, with clear access for less mobile patients.",
      "Radiation protection assessment by a medical physicist; shielding requirements are modest compared with radiography but must be formally assessed.",
      "Stable, clean electrical supply and a controlled temperature environment to protect calibration stability.",
      "Trained operators with documented precision assessment, plus a named reporting clinician and agreed reporting conventions.",
      "Network and archive integration so measurements and prior comparisons are available at reporting.",
      "A preventive maintenance agreement covering calibration verification alongside mechanical and electrical service.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies bone densitometry systems and delivers installation and commissioning, operator training, precision assessment support and ongoing preventive maintenance so that measurement quality is established at handover and sustained thereafter.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is a DEXA scan a high radiation dose examination?",
        a: "No. Patient dose is very low compared with conventional radiography or CT, which is one reason densitometry is suitable for repeated monitoring.",
      },
      {
        q: "Why must follow-up scans be performed on the same system?",
        a: "Because absolute density values differ slightly between systems and manufacturers. Comparison across systems requires formal cross-calibration; otherwise apparent change may be instrumental rather than biological.",
      },
      {
        q: "Which sites are measured?",
        a: "Lumbar spine and hip are the standard axial sites. Forearm measurement is used when the axial sites cannot be measured or interpreted.",
      },
      {
        q: "Can DEXA measure body composition?",
        a: "Yes, on systems configured and licensed for it. Body composition analysis uses the same dual-energy principle applied to soft tissue components.",
      },
      {
        q: "What most affects measurement reliability?",
        a: "Positioning consistency, analysis consistency and calibration stability — in that order for day-to-day practice. Daily phantom quality control protects the third.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "DEXA is a quantitative measuring instrument; its output is a number, not a diagnostic image.",
      "Dual X-ray energies allow bone mineral to be separated from soft tissue and quantified.",
      "T-scores and Z-scores give the measurement its diagnostic meaning through population comparison.",
      "Positioning consistency, analysis consistency and calibration stability determine whether follow-up scans are interpretable.",
      "Daily phantom quality control and documented operator precision are mandatory, not optional.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
  },
  {
    type: "p",
    text: "Bone densitometry is a low-dose, high-value service that supports fracture prevention across several specialties — but only when it is operated as a measurement service. Hospitals that establish quality control, operator precision and stable reporting conventions from day one obtain data their clinicians can act on for years.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Clinical practice and diagnosis",
        items: [
          { label: "World Health Organization — osteoporosis diagnostic criteria and fracture risk", url: "https://www.who.int/" },
          { label: "International Osteoporosis Foundation — densitometry practice resources", url: "https://www.osteoporosis.foundation/" },
        ],
      },
      {
        title: "Physics and quality control",
        items: [
          { label: "International Atomic Energy Agency — bone densitometry quality assurance guidance", url: "https://www.iaea.org/" },
          { label: "American Association of Physicists in Medicine — densitometry quality control reports", url: "https://www.aapm.org/" },
        ],
      },
    ],
    note: "Diagnostic thresholds, reference databases and quality control procedures must be applied according to national guidance and the installed system's documentation.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Bone health and diagnostic imaging practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Densitometry installation, calibration and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Clinical guidance and quality assurance practice synthesis",
    disclaimer:
      "Educational guidance. It does not replace manufacturer documentation, medical physics assessment or national clinical guidelines.",
  },
];
