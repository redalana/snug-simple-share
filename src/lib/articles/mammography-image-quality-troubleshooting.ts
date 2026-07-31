/**
 * Mammography image quality troubleshooting — Mammography cluster (troubleshooting).
 */

import type { ContentBlock, TocItem } from "../blog";

export const MAMMO_TROUBLESHOOT_TOC: TocItem[] = [
  { id: "overview", title: "A Structured Approach" },
  { id: "triage", title: "First Triage: One Patient or Every Patient" },
  { id: "positioning", title: "Positioning and Compression Faults" },
  { id: "exposure", title: "Exposure and Contrast Problems" },
  { id: "detector", title: "Detector and Uniformity Artefacts" },
  { id: "mechanical", title: "Grid, Paddle and Mechanical Artefacts" },
  { id: "tomo", title: "Tomosynthesis-Specific Artefacts" },
  { id: "display", title: "When the Image Is Fine and the Display Is Not" },
  { id: "matrix", title: "Fault-to-Cause Matrix" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MAMMO_TROUBLESHOOT_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Most mammography image quality complaints are resolved before an engineer is called, because most of them are not equipment faults. They are positioning problems, compression problems, patient motion, or viewing conditions. The purpose of a troubleshooting protocol is to separate those causes quickly, so that genuine hardware faults get service attention and non-hardware causes get the correction that actually fixes them.",
      "The separation is straightforward if the first question is asked in the right order: does the problem appear on one image, on all images of one patient, or on every patient since a defined point in time? That single question routes the investigation correctly in the majority of cases.",
      "This guide gives a structured triage sequence, the characteristic appearances of the common fault families, and a fault-to-cause matrix for use at the console.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Triage logic, positioning and compression faults, exposure and contrast problems, detector uniformity artefacts, grid and paddle artefacts, tomosynthesis-specific artefacts, display-related problems and a fault-to-cause matrix",
    audience:
      "Radiographers, breast imaging radiologists, medical physicists, biomedical engineers and service coordinators",
    readingTime: "15 min read",
    technology: "Mammography Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "A Structured Approach",
    number: 1,
    body: "Troubleshooting fails when it starts with the component instead of the pattern.",
  },
  {
    type: "ul",
    items: [
      "Characterise the appearance precisely before forming a hypothesis.",
      "Establish whether the fault is patient-specific, view-specific or system-wide.",
      "Check whether the routine quality-control trend already shows the change.",
      "Reproduce the fault with a phantom before escalating to service where possible.",
      "Record examples; artefacts described verbally are frequently misidentified.",
      "Do not adjust processing to hide an artefact whose cause has not been established.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Reproduce with a phantom",
    text: "A phantom image removes positioning, compression and motion from the equation. If the artefact persists on a phantom exposure, it is a system problem; if it disappears, it is an acquisition-technique problem.",
  },
  {
    type: "h2",
    id: "triage",
    text: "First Triage: One Patient or Every Patient",
    number: 2,
    body: "Scope determines which of three very different investigations to run.",
  },
  {
    type: "table",
    headers: ["Scope of the problem", "Most likely family", "First action"],
    rows: [
      ["One view of one patient", "Positioning, compression or motion", "Review positioning criteria; repeat only if clinically necessary"],
      ["All views of one patient", "Patient factors — density, implants, limited mobility", "Adapt technique; consider supplementary imaging"],
      ["All patients, appeared suddenly", "Hardware fault or calibration loss", "Phantom test; stop list if uniformity fails; call service"],
      ["All patients, appeared gradually", "Drift — detector, tube output or AEC", "Review QC trend; physics investigation"],
      ["Only at the reporting station", "Display calibration or ambient light", "Compare on a second calibrated display"],
      ["Only after a software update", "Processing or display configuration change", "Verify configuration against pre-update baseline"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The single most common misclassification is treating a systemic uniformity artefact as a positioning problem, because it was first noticed on a difficult examination. Scope testing prevents weeks of unnecessary repeat imaging.",
    clinicalInterpretation:
      "Systemic artefacts are the more serious category clinically, because they affect every examination acquired since onset and may mimic or obscure calcifications.",
    hospitalRecommendation:
      "Make a phantom exposure the mandatory first step whenever an artefact is reported on more than one patient, and keep the phantom at the console so the test takes minutes rather than being deferred.",
  },
  {
    type: "h2",
    id: "positioning",
    text: "Positioning and Compression Faults",
    number: 3,
    body: "The largest single cause of inadequate mammograms, and entirely correctable.",
  },
  {
    type: "table",
    headers: ["Appearance", "Likely cause", "Correction"],
    rows: [
      ["Posterior tissue excluded", "Insufficient tissue pulled forward; unit height wrong", "Re-position with attention to unit height and patient stance"],
      ["Nipple not in profile", "Rotation during positioning", "Adjust rotation; document if anatomically unavoidable"],
      ["Skin folds obscuring tissue", "Tissue not smoothed before compression applied", "Smooth tissue during compression application"],
      ["Blurring of fine detail", "Motion during exposure, often from inadequate compression", "Increase compression within tolerance; shorten exposure where possible"],
      ["Unequal appearance between sides", "Inconsistent positioning technique", "Standardise technique; peer review of positioning"],
      ["Pectoral muscle inadequately included on oblique view", "Angle or arm position incorrect", "Adjust gantry angle to the patient's build"],
      ["Patient unable to tolerate compression", "Pain, anxiety or limited mobility", "Explain procedure, adjust rate of compression, consider seated examination"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Compression is an image-quality control",
    text: "Adequate compression reduces thickness and therefore dose, separates overlapping tissue, and reduces motion blur. Under-compression degrades all three at once, which is why it presents as several apparently unrelated quality problems.",
  },
  {
    type: "h2",
    id: "exposure",
    text: "Exposure and Contrast Problems",
    number: 4,
    body: "Distinguish an inappropriate exposure from a system that no longer selects correctly.",
  },
  {
    type: "ul",
    items: [
      "Noisy images across all thicknesses suggest a systemic exposure or detector gain problem rather than technique.",
      "Noise only in thick or dense breasts may be an automatic exposure control limitation reaching its ceiling.",
      "Flat, low-contrast appearance may indicate incorrect target and filter selection or processing configuration.",
      "Saturation in thin breasts suggests automatic exposure control over-exposure or manual technique error.",
      "Sudden changes in average exposure across the workload point to generator or detector calibration drift.",
      "Where implants are present, exposure behaviour differs and requires an adapted technique rather than a fault report.",
      "Always compare against the automatic exposure control results recorded in periodic physics testing before adjusting technique charts.",
    ],
  },
  {
    type: "h2",
    id: "detector",
    text: "Detector and Uniformity Artefacts",
    number: 5,
    body: "The artefact family with the greatest potential to mimic pathology.",
  },
  {
    type: "table",
    headers: ["Appearance", "Likely cause", "Response"],
    rows: [
      ["Fixed bright or dark pixels or clusters", "Dead or drifting detector elements", "Uniformity test; service if confirmed; withdraw from clinical use if in a diagnostic region"],
      ["Fixed line or column defect", "Detector readout channel fault", "Stop clinical use; service"],
      ["Broad shading across the field", "Gain calibration drift or collimation issue", "Recalibrate per manufacturer; physics verification"],
      ["Speckled pattern reproducing on every image", "Dust or contamination on the detector cover or paddle", "Clean per manufacturer instruction only; re-test"],
      ["Ghosting of a previous image", "Detector lag or insufficient inter-exposure interval", "Follow recommended interval; service if persistent"],
      ["Grid line pattern", "Grid damage or synchronisation fault", "Service inspection of grid assembly"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Never clean a detector surface improvisationally",
    text: "Detector covers and compression paddles have specified cleaning agents and methods. Using anything else can permanently damage the surface and convert a cleaning task into a component replacement.",
  },
  {
    type: "h2",
    id: "mechanical",
    text: "Grid, Paddle and Mechanical Artefacts",
    number: 6,
    body: "Mechanical causes produce distinctive, reproducible geometry.",
  },
  {
    type: "ul",
    items: [
      "Cracked or crazed compression paddles project as fine linear densities that can be mistaken for calcification.",
      "A non-parallel paddle produces uneven thickness and consequently uneven exposure across the image.",
      "Damaged anti-scatter grids produce periodic line patterns unrelated to anatomy.",
      "Loose gantry locks produce blur that varies with view rather than with patient cooperation.",
      "Face shield scratches can superimpose fine lines near the chest wall.",
      "Any accessory in the beam path is a potential artefact source and should be inspected when artefacts are reported.",
    ],
  },
  {
    type: "h2",
    id: "tomo",
    text: "Tomosynthesis-Specific Artefacts",
    number: 7,
    body: "Reconstruction introduces artefact classes that do not exist in two-dimensional imaging.",
  },
  {
    type: "table",
    headers: ["Artefact", "Mechanism", "Practical response"],
    rows: [
      ["Ripple or streak from a dense structure", "Limited-angle reconstruction of high-attenuation material", "Recognise as expected; correlate with two-dimensional or synthetic images"],
      ["Out-of-plane replication of calcifications", "Incomplete depth resolution inherent to limited angle", "Interpret across slices rather than on a single section"],
      ["Motion-related blurring across the stack", "Movement during the longer acquisition", "Ensure adequate compression and clear breath-hold instruction"],
      ["Artefacts around implants or markers", "Very high attenuation objects in the volume", "Use appropriate views and correlate with other modalities"],
      ["Synthetic two-dimensional image differences", "Image is generated, not acquired", "Understand its limitations before using it as the sole two-dimensional record"],
    ],
  },
  {
    type: "h2",
    id: "display",
    text: "When the Image Is Fine and the Display Is Not",
    number: 8,
    body: "Always exclude the reading environment before escalating to acquisition service.",
  },
  {
    type: "ul",
    items: [
      "Compare the study on a second calibrated diagnostic display.",
      "Verify display calibration status and the date of the last check.",
      "Check ambient illumination; reading rooms drift brighter over time as lamps and blinds change.",
      "Confirm that the correct presentation state and processing were applied at the workstation.",
      "Check that the full-resolution data reached the workstation rather than a compressed or downsampled version.",
      "Exclude a recent software or configuration update on the workstation before blaming the acquisition unit.",
    ],
  },
  {
    type: "h2",
    id: "matrix",
    text: "Fault-to-Cause Matrix",
    number: 9,
    body: "A console-side reference for the most frequently reported presentations.",
  },
  {
    type: "table",
    headers: ["Reported problem", "Check first", "Then", "Escalate if"],
    rows: [
      ["Blurred fine detail", "Compression adequacy and motion", "Gantry locks; phantom resolution test", "Phantom test shows resolution loss"],
      ["Noisy images", "Breast thickness and density; AEC mode", "Exposure trend against QC baseline", "Noise present on phantom at baseline technique"],
      ["Fixed spots on every image", "Cleanliness of paddle and detector cover", "Uniformity test", "Uniformity failure confirmed"],
      ["Line artefacts", "Paddle and face shield inspection", "Grid inspection", "Artefact persists with accessories removed"],
      ["Uneven brightness across image", "Paddle parallelism and positioning", "Gain calibration and collimation", "Shading persists on phantom"],
      ["Inconsistent appearance between units", "Display calibration at the reporting station", "Cross-unit physics comparison", "Measured performance differs between units"],
      ["Tomosynthesis streaking", "Presence of dense structures in the volume", "Review across the whole stack", "Streaking appears without a dense source"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Keep an artefact library",
    text: "Save an anonymised example of each artefact your service has diagnosed, with its confirmed cause. It shortens future investigations dramatically and is the fastest way to train new staff in recognition.",
  },
  {
    type: "faq",
    items: [
      {
        q: "What is the most common cause of poor mammographic image quality?",
        a: "Positioning and compression technique. Inadequate inclusion of posterior tissue, skin folds and insufficient compression account for the majority of inadequate examinations, and all are correctable without any equipment intervention.",
      },
      {
        q: "How can I tell an equipment artefact from a positioning problem?",
        a: "By scope and reproducibility. Acquire a phantom image using the standard technique. If the appearance persists on the phantom, it is a system problem; if it disappears, the cause lies in patient positioning, compression or motion.",
      },
      {
        q: "Can a cracked compression paddle mimic calcifications?",
        a: "Yes. Fine cracks or crazing in a paddle project as sharp linear or punctate densities in a fixed position relative to the image, which is why they can be confused with calcification. Their fixed position across consecutive patients is the distinguishing feature, and the paddle should be withdrawn immediately.",
      },
      {
        q: "Should processing be adjusted to remove an artefact?",
        a: "No, not before the cause is identified. Adjusting processing to mask an artefact can also suppress genuine low-contrast findings and it removes the evidence needed to diagnose the underlying fault.",
      },
      {
        q: "Are tomosynthesis streak artefacts a fault?",
        a: "Usually not. Limited-angle reconstruction inherently produces out-of-plane replication and streaking around high-attenuation structures. These are expected characteristics to be recognised during interpretation, not equipment faults — unless they appear without any dense structure to explain them.",
      },
      {
        q: "When should the clinical list be stopped?",
        a: "When a confirmed uniformity or resolution failure is present, when an artefact could obscure or mimic pathology in the diagnostic field, or when a quality-control result falls outside the defined suspension limit. In those cases, escalate to service and physics before further screening.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 10,
    body: "Order of investigation matters more than depth of technical knowledge.",
  },
  {
    type: "p",
    text: "Characterise the appearance, establish the scope, reproduce with a phantom, and only then decide whether the problem belongs to technique, hardware, reconstruction or the reading environment. That sequence resolves most reported problems at the console within minutes, routes real hardware faults to service with evidence attached, and prevents the two costly errors: repeating patients for a systemic fault, and calling out an engineer for a positioning issue.",
  },
  {
    type: "articleCta",
    heading: "Persistent mammography image quality problem?",
    subheading:
      "AbuFarha Medical Supplies provides applications support, physics liaison and field service for mammography systems across supported brands.",
    technology: "Mammography Systems",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Image quality and artefacts",
        items: [
          { label: "International Atomic Energy Agency — quality assurance in diagnostic radiology", url: "https://www.iaea.org/" },
          { label: "World Health Organization — diagnostic imaging quality guidance", url: "https://www.who.int/" },
        ],
      },
      {
        title: "Equipment and display standards",
        items: [
          { label: "International Electrotechnical Commission — mammographic equipment standards", url: "https://www.iec.ch/" },
          { label: "DICOM Standard — grayscale display function", url: "https://www.dicomstandard.org/" },
        ],
      },
    ],
    note: "Manufacturer service documentation and your national quality-control protocol take precedence for specific tolerances and procedures.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Breast imaging" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Field service and applications" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Guidance synthesis and field service practice",
    disclaimer:
      "Educational content only. Do not perform service interventions outside your competence or outside the manufacturer's documented procedures.",
  },
];
