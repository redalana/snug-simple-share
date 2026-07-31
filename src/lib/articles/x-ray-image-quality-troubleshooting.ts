/**
 * Digital radiography image quality troubleshooting — X-Ray cluster.
 */

import type { ContentBlock, TocItem } from "../blog";

export const XRAY_IMAGE_QUALITY_TOC: TocItem[] = [
  { id: "method", title: "A Method for Diagnosing Image Problems" },
  { id: "noise", title: "Noisy or Mottled Images" },
  { id: "contrast", title: "Flat, Washed-Out or Overexposed Images" },
  { id: "artefacts", title: "Detector and Grid Artefacts" },
  { id: "positioning", title: "Geometry, Positioning and Collimation Faults" },
  { id: "processing", title: "Processing and Display Problems" },
  { id: "repeats", title: "Using Repeat Analysis as a Diagnostic Tool" },
  { id: "escalation", title: "When to Escalate to Service or Physics" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const XRAY_IMAGE_QUALITY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Digital radiography rarely fails outright. It degrades — a little more noise, a slightly flatter image, a faint line that was not there last month — and because the processing software is designed to produce an acceptable-looking image from a wide range of exposures, degradation can continue for a long time without anyone raising a fault.",
      "That forgiveness is why radiography troubleshooting must be systematic. The visible appearance of an image does not identify its cause: an underexposed image and a failing detector can look similar, and an overexposed image often looks excellent.",
      "This guide provides a diagnostic method, then works through the fault families a department actually encounters — noise, contrast and exposure, detector and grid artefacts, geometry and positioning, and processing and display — with clear criteria for when to escalate.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Systematic troubleshooting method, noise and exposure faults, detector and grid artefacts, geometry and collimation errors, processing and display problems, repeat analysis, escalation criteria",
    audience:
      "Radiographers, radiology managers, medical physicists and biomedical engineers",
    readingTime: "14 min read",
    technology: "X-Ray Systems",
  },
  {
    type: "h2",
    id: "method",
    text: "A Method for Diagnosing Image Problems",
    number: 1,
    body: "Before examining the image, establish its scope. Scope identifies the layer at fault faster than any appearance-based reasoning.",
  },
  {
    type: "ul",
    items: [
      "Is the problem on one image, one patient, one examination type, one detector, one room, or everywhere?",
      "One image on one patient: usually technique, positioning or patient factors.",
      "One examination type across patients: protocol, AEC setting or processing parameter.",
      "One detector across rooms: the detector or its calibration.",
      "One room across detectors: generator, collimator, grid or AEC.",
      "Everywhere including other modalities: display calibration, network or PACS processing.",
      "Did it appear suddenly or develop gradually? Sudden change follows an event — a service visit, a software update, a drop; gradual change indicates wear or drift.",
      "Reproduce it with a phantom before drawing conclusions, so patient variability is removed from the assessment.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Record the exposure parameters with every complaint",
    text: "An image quality report without kV, mAs, distance, grid use, detector identity and exposure index is not diagnosable and will usually be returned for more information. Departments that capture these fields in their reporting form resolve faults substantially faster because the first analysis can be done from the record.",
  },
  {
    type: "h2",
    id: "noise",
    text: "Noisy or Mottled Images",
    number: 2,
    body: "Noise is a signal problem. Either too few X-ray photons reached the detector, or the detector is no longer converting them efficiently.",
  },
  {
    type: "table",
    headers: ["Cause", "How to confirm", "Action"],
    rows: [
      ["Underexposure — insufficient mAs for the body part", "Exposure index below target; noise improves with correct technique", "Correct technique chart; retrain on body-part selection"],
      ["Excessive distance without technique compensation", "Distance recorded greater than protocol", "Reinforce protocol distances; verify indicators"],
      ["Grid used without technique adjustment", "Noise appears only on grid examinations", "Adjust technique for grid factor or remove grid where not indicated"],
      ["AEC chamber selection error or AEC drift", "Exposure varies unpredictably; AEC test fails", "Physics AEC verification and recalibration"],
      ["Detector gain calibration overdue or invalid", "Uniformity test abnormal; noise on one detector only", "Recalibrate per manufacturer procedure"],
      ["Detector degradation or damage", "Uniformity and DQE-equivalent tests fail after recalibration", "Service assessment; likely detector replacement"],
      ["Generator output shortfall", "Measured output below set value across the range", "Service investigation of generator and supply"],
      ["Patient factors — habitus, immobilisation, motion", "Reproducible with phantom? No", "Technique and positioning adaptation"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Separating underexposure from detector failure",
    clinicalInterpretation:
      "Both produce noise, and processing can make them look alike. The discriminator is scope and testing: underexposure follows technique and varies with the examination, while detector failure follows the panel across rooms and shows on a uniformity phantom image regardless of exposure.",
    hospitalRecommendation:
      "When noise is reported, run the detector uniformity test with a phantom before adjusting protocols. This single step prevents departments from raising technique factors — and patient dose — to compensate for a failing panel.",
  },
  {
    type: "h2",
    id: "contrast",
    text: "Flat, Washed-Out or Overexposed Images",
    number: 3,
    body: "Overexposure is the quiet fault of digital radiography, because processing normalises brightness and the resulting image looks reassuringly clean.",
  },
  {
    type: "ul",
    items: [
      "Check exposure index against target before anything else; a systematically high index is overexposure, not a display problem.",
      "Review whether technique has drifted upward over time — the classic dose creep pattern following a period of noise complaints.",
      "Verify AEC performance and chamber selection; a drifted AEC raises dose silently across every examination that uses it.",
      "Check that scatter control is appropriate: a missing grid on a thicker body part flattens contrast markedly.",
      "Confirm collimation; a wide field admits scatter and reduces contrast even at correct exposure.",
      "Check the processing algorithm applied — a mismatched body-part algorithm produces characteristically flat or over-enhanced images.",
      "Verify display calibration before concluding that acquisition is at fault, particularly when only some workstations show the problem.",
      "Look for shifted default protocols after a software update, which is a common cause of sudden department-wide appearance change.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Trend exposure index, do not sample it",
    text: "A single exposure index value tells you almost nothing. A distribution for one examination type over a month tells you whether the department is drifting high, drifting low, or inconsistent between operators — three different problems with three different remedies.",
  },
  {
    type: "h2",
    id: "artefacts",
    text: "Detector and Grid Artefacts",
    number: 4,
    body: "Structured artefacts have structured causes, and their geometry usually names the component responsible.",
  },
  {
    type: "table",
    headers: ["Appearance", "Likely cause", "Resolution"],
    rows: [
      ["Fine regular lines across the image", "Grid line aliasing or grid misalignment", "Correct grid alignment and distance; adjust grid frequency handling"],
      ["Broad dark bands or cut-off at the edges", "Grid cut-off from off-centre or angled beam", "Correct centring, distance and beam angulation"],
      ["Persistent bright or dark spots in the same location", "Dead or stuck pixels; calibration map outdated", "Recalibrate; if persistent, service assessment of the panel"],
      ["Faint image of a previous exposure", "Detector lag or ghosting", "Follow manufacturer clearing procedure; service if it recurs"],
      ["Localised blotches or irregular patches", "Fluid ingress or impact damage to the panel", "Remove from service; service assessment"],
      ["Uniform veiling and reduced contrast", "Excessive scatter or a light leak in the acquisition chain", "Collimate; investigate scatter control and housing integrity"],
      ["Sharp-edged unexplained densities", "External objects — jewellery, electrodes, bedding, cables", "Patient preparation and bedside inspection before exposure"],
      ["Half-image blank or truncated", "Detector positioning or partial field coverage", "Verify detector placement and field alignment"],
    ],
  },
  {
    type: "h2",
    id: "positioning",
    text: "Geometry, Positioning and Collimation Faults",
    number: 5,
    body: "Geometric faults are the largest single cause of repeat exposures, and most of them are correctable without any service intervention.",
  },
  {
    type: "ul",
    items: [
      "Light field to radiation field congruence: verify periodically, because a drifted collimator lamp guarantees systematic collimation errors.",
      "Centring errors, which produce grid cut-off as well as anatomical omission.",
      "Distance errors, which change exposure requirement and magnification.",
      "Rotation and obliquity from unsupported or uncooperative patients, particularly at the bedside.",
      "Beam angulation inconsistent with grid orientation, causing cut-off that looks like a detector fault.",
      "Detector orientation and side markers, which cause reporting delays even when the image is technically adequate.",
      "Anatomical clipping from over-collimation, which is a repeat cause as well as an audit finding.",
      "Motion unsharpness from exposure times that are too long for the patient's ability to cooperate.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Blaming the detector for grid cut-off",
    text: "Grid cut-off produces bands and density gradients that look convincingly like panel failure. Before removing a detector from service, repeat the examination without the grid or with verified centring and distance. A substantial proportion of suspected detector faults resolve at this step.",
  },
  {
    type: "h2",
    id: "processing",
    text: "Processing and Display Problems",
    number: 6,
    body: "A correctly acquired image can still be reported from a poor rendering, and this class of fault is frequently misattributed to acquisition.",
  },
  {
    type: "ul",
    items: [
      "Body-part algorithm mismatch, usually from an incorrect examination selection at acquisition.",
      "Processing parameters changed after a software update, which produces a sudden department-wide change in appearance.",
      "Window and level presets inappropriate for the examination or for the reading environment.",
      "Uncalibrated diagnostic displays, or reporting on a non-diagnostic monitor.",
      "Ambient lighting in the reporting area exceeding the display's assumptions.",
      "Compression or transfer settings altering the image between acquisition and PACS.",
      "Different rendering between the acquisition workstation and PACS, which should be reconciled rather than accepted.",
      "Incorrect DICOM presentation state or overlay handling obscuring image content.",
    ],
  },
  {
    type: "h2",
    id: "repeats",
    text: "Using Repeat Analysis as a Diagnostic Tool",
    number: 7,
    body: "Repeat and reject analysis is the most informative quality tool in radiography and the most commonly reduced to an unused percentage.",
  },
  {
    type: "tableInsight",
    expertCommentary: "How to make repeat analysis useful",
    clinicalInterpretation:
      "A single repeat rate figure conceals the information. Categorised repeats — positioning, exposure, motion, artefact, equipment fault, patient factors — identify whether the department has a training issue, a protocol issue or an equipment issue, and each has a different owner.",
    hospitalRecommendation:
      "Review categorised repeats monthly with radiographers and quarterly with biomedical engineering and medical physics. Treat a rising equipment-fault or exposure category as a maintenance signal rather than only as a training signal.",
  },
  {
    type: "h2",
    id: "escalation",
    text: "When to Escalate to Service or Physics",
    number: 8,
    body: "Some findings are departmental, and some should stop clinical use. The distinction should be written down rather than judged case by case.",
  },
  {
    type: "table",
    headers: ["Finding", "Escalate to", "Urgency"],
    rows: [
      ["Detector uniformity test failure after recalibration", "Service engineer", "Remove detector from service"],
      ["Exposure index systematically above target across examinations", "Medical physics", "Investigate before next audit cycle; dose implication"],
      ["Suspected AEC drift or inconsistent AEC behaviour", "Medical physics and service", "Prompt — affects dose on every AEC examination"],
      ["Generator output inaccuracy or intermittent exposure aborts", "Service engineer", "Prompt; safety and reliability implication"],
      ["Light field to radiation field misalignment beyond tolerance", "Service engineer", "Prompt; dose and repeat implication"],
      ["Persistent artefacts after clearing and recalibration", "Service engineer", "Assess before continued clinical use"],
      ["Department-wide appearance change after a software update", "Vendor application support with physics", "Prompt; verify processing parameters"],
      ["Any suspected overexposure event", "Medical physics", "Immediate, under local incident procedure"],
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Why do digital images look acceptable even when the exposure is wrong?",
        a: "Processing normalises image brightness across a wide exposure range, so overexposure produces a clean-looking, low-noise image and moderate underexposure can be partially masked. This is why the exposure index — not visual impression — must be the primary check on exposure correctness.",
      },
      {
        q: "What is dose creep and how is it detected?",
        a: "Dose creep is the gradual upward drift of technique factors as operators use higher exposures to avoid noisy images. It is detected only by trending exposure index distributions over time for specific examination types; it is invisible in individual image review.",
      },
      {
        q: "How can grid faults be distinguished from detector faults?",
        a: "Grid faults follow the grid: they appear as regular lines, bands or edge cut-off and change when the grid is removed or centring and distance are corrected. Detector faults follow the panel across rooms and appear on a uniformity phantom image irrespective of grid use.",
      },
      {
        q: "How often should light field congruence be checked?",
        a: "Periodically as part of the routine quality assurance programme and always after any collimator or tube service. A drifted collimator lamp causes systematic collimation error on every examination, so the check is high value for the effort involved.",
      },
      {
        q: "Should a detector with a few dead pixels be replaced?",
        a: "Not necessarily. Manufacturers specify acceptable defect criteria and calibration maps compensate for isolated defects. What matters is the trend: accumulating defects, clustered defects or defects in diagnostically critical regions warrant service assessment even when the total remains within specification.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Persistent radiography image quality problems?",
    subheading:
      "AbuFarha Medical's biomedical engineering and applications teams support hospitals with detector assessment, calibration, QA programmes and technique optimisation.",
    technology: "X-Ray Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Radiography technique and image quality" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "X-ray equipment calibration and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "IEC detector performance standards, national radiography quality assurance protocols and manufacturer service documentation",
    disclaimer:
      "Test methods, tolerances and acceptance criteria are equipment-specific. Follow manufacturer documentation and the guidance of a qualified medical physics expert for your systems.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Image quality and detector performance",
        items: [
          { label: "IEC 62220 series — determination of detective quantum efficiency" },
          { label: "National quality assurance protocols for digital radiography image quality" },
        ],
      },
      {
        title: "Exposure and dose monitoring",
        items: [
          { label: "IEC 62494-1 — exposure index of digital radiography systems" },
          { label: "ICRP recommendations on dose optimisation in diagnostic radiology" },
        ],
      },
      {
        title: "Display and reporting",
        items: [
          { label: "Diagnostic display quality assurance guidance (grayscale calibration and ambient conditions)" },
          { label: "Manufacturer processing and calibration documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Establish scope first — one image, one examination, one detector, one room or everywhere — before interpreting appearance.",
      "Noise is a signal problem: confirm exposure index and detector uniformity before raising technique factors.",
      "Overexposure looks excellent, so exposure index trending is the only reliable detection method.",
      "Artefact geometry names the component: regular lines and edge cut-off point to the grid, fixed spots to the panel.",
      "Geometry and positioning cause most repeats and need no service intervention to fix.",
      "Categorised repeat analysis distinguishes training issues from protocol and equipment issues.",
      "Write escalation criteria down so a failed uniformity test stops clinical use without debate.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "Radiography image quality is managed by measurement, not by impression, because the processing chain is designed to hide the very drift that matters.",
  },
  {
    type: "p",
    text: "Departments that trend exposure index, test detector uniformity on a schedule, verify collimator congruence and categorise their repeats detect problems while they are still cheap to fix. Departments that rely on image appearance find them at the annual physics visit, after months of unnecessary dose.",
  },
];
