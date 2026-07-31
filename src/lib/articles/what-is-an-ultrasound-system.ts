/**
 * What is an ultrasound system — Ultrasound cluster (pillar).
 */

import type { ContentBlock, TocItem } from "../blog";

export const US_PILLAR_TOC: TocItem[] = [
  { id: "overview", title: "What an Ultrasound System Is" },
  { id: "physics", title: "How Ultrasound Imaging Works" },
  { id: "components", title: "The Components of a System" },
  { id: "modes", title: "Imaging Modes" },
  { id: "transducers", title: "Transducers and Their Roles" },
  { id: "applications", title: "Clinical Applications" },
  { id: "advantages", title: "Strengths and Limitations" },
  { id: "quality", title: "What Determines Image Quality" },
  { id: "service", title: "Safety, Cleaning and Service" },
  { id: "choosing", title: "Choosing a System" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const US_PILLAR_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "An ultrasound system creates images by sending short pulses of high-frequency sound into the body and measuring the echoes that return from tissue interfaces. Because it uses mechanical waves rather than ionising radiation, it can be repeated freely, used at the bedside, and applied safely in pregnancy — which is why it is the most widely performed imaging examination in the world.",
      "It is also the most operator-dependent. A computed tomography scanner produces broadly the same dataset regardless of who presses the button; an ultrasound examination is created in real time by the person holding the transducer. Two examinations of the same patient on the same machine can differ in diagnostic value entirely because of scanning technique, probe selection and system optimisation.",
      "This guide explains what an ultrasound system is, how the image is formed, what each part of the system contributes, which modes and transducers exist and why, and what genuinely determines image quality when comparing systems.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Imaging principles, system components, imaging modes, transducer types, clinical applications, strengths and limitations, image quality determinants, safety and cleaning, and system selection",
    audience:
      "Clinicians new to ultrasound, sonographers, biomedical engineers, hospital planners and procurement teams",
    readingTime: "16 min read",
    technology: "Ultrasound Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "What an Ultrasound System Is",
    number: 1,
    body: "A real-time imaging system built around a transmit-and-listen cycle.",
  },
  {
    type: "ul",
    items: [
      "It transmits pulses of sound at frequencies far above the audible range and detects returning echoes.",
      "Echo arrival time gives depth; echo strength gives brightness; the assembled lines give an image.",
      "Imaging is real time, so anatomy is assessed dynamically rather than as a static dataset.",
      "It uses no ionising radiation, which shapes its role in obstetrics, paediatrics and repeated follow-up.",
      "It is portable in a way no other cross-sectional modality is, from cart-based systems to handheld devices.",
      "Its performance is inseparable from the skill of the operator and the appropriateness of the probe.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The image is built line by line",
    text: "A conventional two-dimensional ultrasound image is assembled from many individual scan lines acquired in rapid sequence. Frame rate, line density and depth are therefore always in competition with one another — improving one costs another.",
  },
  {
    type: "h2",
    id: "physics",
    text: "How Ultrasound Imaging Works",
    number: 2,
    body: "Three physical facts explain almost every behaviour of the modality.",
  },
  {
    type: "table",
    headers: ["Principle", "Consequence for imaging", "Practical implication"],
    rows: [
      ["Echoes arise at acoustic impedance mismatches", "Tissue interfaces are what is visualised", "Boundaries are seen better than tissue interiors"],
      ["Attenuation increases with frequency", "High frequency gives resolution but poor penetration", "Probe frequency is chosen by target depth"],
      ["Sound travels poorly through gas and is strongly reflected by bone", "Air and bone create shadows", "Bowel gas and ribs limit access windows"],
      ["Echo timing maps to depth", "Depth accuracy depends on assumed speed of sound", "Errors appear where tissue speed differs from the assumption"],
      ["Moving reflectors shift returning frequency", "Flow can be measured", "Doppler modes derive velocity and direction"],
      ["Beams can be steered and focused electronically", "Beam shape is under system control", "Focus and aperture settings change resolution"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The frequency-versus-penetration trade-off is the single most consequential fact in practical scanning. Most images described as poor are simply the wrong probe frequency for the depth of the target.",
    clinicalInterpretation:
      "Superficial structures reward high frequency; deep abdominal and cardiac structures require lower frequency and accept reduced resolution.",
    hospitalRecommendation:
      "Specify probe sets by the depth range of the intended casemix rather than by count, and confirm that each department has the frequencies its examinations actually require.",
  },
  {
    type: "h2",
    id: "components",
    text: "The Components of a System",
    number: 3,
    body: "Each subsystem contributes to a different aspect of the final image.",
  },
  {
    type: "table",
    headers: ["Component", "Function", "Why it matters"],
    rows: [
      ["Transducer (probe)", "Transmits pulses and receives echoes", "The dominant determinant of achievable resolution"],
      ["Transmit and receive electronics", "Drive elements and amplify returning signals", "Sets sensitivity and dynamic range"],
      ["Beamformer", "Focuses and steers the beam, forms scan lines", "Governs spatial resolution and frame rate"],
      ["Signal and image processor", "Filtering, harmonic processing, speckle reduction, compounding", "Determines the clinical look of the image"],
      ["Display and controls", "Presents the image and provides real-time adjustment", "Affects usability and examination time"],
      ["Measurement and reporting software", "Calculations, protocols, structured reports", "Determines documentation quality and consistency"],
      ["Connectivity", "Archive and worklist integration", "Determines whether studies are retained and retrievable"],
      ["Cart or mobile platform", "Positioning, battery, storage", "Determines where the system can actually be used"],
    ],
  },
  {
    type: "h2",
    id: "modes",
    text: "Imaging Modes",
    number: 4,
    body: "Modes are different ways of interrogating the same returning echoes.",
  },
  {
    type: "table",
    headers: ["Mode", "What it shows", "Primary use"],
    rows: [
      ["B-mode (two-dimensional)", "Grayscale anatomical section", "Core structural imaging in every application"],
      ["M-mode", "Motion of structures along one line against time", "Timing of cardiac and valve motion"],
      ["Colour Doppler", "Direction and mean velocity of flow overlaid on B-mode", "Detecting and localising flow"],
      ["Spectral (pulsed-wave) Doppler", "Velocity waveform at a sample location", "Quantifying velocity and waveform shape"],
      ["Continuous-wave Doppler", "High velocities without range resolution", "High-velocity cardiac jets"],
      ["Power Doppler", "Amplitude of flow signal, direction-insensitive", "Low-flow and perfusion assessment"],
      ["Harmonic imaging", "Image from harmonic frequencies generated in tissue", "Improved contrast and reduced clutter"],
      ["Elastography", "Relative tissue stiffness", "Characterisation in liver and superficial organs"],
      ["Three- and four-dimensional imaging", "Volume acquisition, rendered or dynamic", "Obstetric and selected structural assessment"],
      ["Contrast-enhanced ultrasound", "Microbubble contrast behaviour", "Lesion characterisation where available"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Doppler is angle-dependent",
    text: "Doppler measures the component of motion along the beam. A vessel scanned perpendicular to the beam can show almost no flow signal despite normal flow, which is why beam-to-flow angle is part of technique rather than an optional refinement.",
  },
  {
    type: "h2",
    id: "transducers",
    text: "Transducers and Their Roles",
    number: 5,
    body: "The probe set defines what the system can actually do clinically.",
  },
  {
    type: "table",
    headers: ["Transducer type", "Typical field", "Typical application"],
    rows: [
      ["Curvilinear (convex)", "Wide field at depth", "Abdominal, obstetric, general imaging"],
      ["Linear", "Rectangular field, high frequency", "Vascular, musculoskeletal, superficial structures, procedures"],
      ["Phased array", "Sector field from a small footprint", "Cardiac imaging and intercostal access"],
      ["Endocavity", "High frequency, close approach", "Transvaginal and transrectal imaging"],
      ["Transoesophageal", "Intracorporeal cardiac windows", "Detailed cardiac assessment and intra-procedural guidance"],
      ["Volume / matrix", "Electronically acquired volumes", "Three- and four-dimensional imaging"],
      ["Intraoperative and specialised", "Purpose-shaped footprints", "Surgical and interventional guidance"],
    ],
  },
  {
    type: "h2",
    id: "applications",
    text: "Clinical Applications",
    number: 6,
    body: "Few technologies are used across as many specialties.",
  },
  {
    type: "ul",
    items: [
      "Obstetrics: pregnancy dating, fetal anatomy and growth assessment, and wellbeing.",
      "Gynaecology: pelvic structural assessment, commonly with an endocavity approach.",
      "Abdominal imaging: liver, biliary system, kidneys, pancreas, spleen and aorta.",
      "Cardiology: echocardiography for chamber function, valves and haemodynamics.",
      "Vascular: arterial and venous assessment, including thrombosis and stenosis.",
      "Musculoskeletal: tendons, ligaments, muscles, joints and dynamic assessment.",
      "Small parts: thyroid, breast, testes, salivary glands and superficial nodes.",
      "Point-of-care: focused assessment in emergency, critical care and anaesthesia.",
      "Interventional guidance: vascular access, drainage, biopsy and regional anaesthesia.",
      "Paediatrics and neonatology, where the absence of ionising radiation is decisive.",
    ],
  },
  {
    type: "h2",
    id: "advantages",
    text: "Strengths and Limitations",
    number: 7,
    body: "Balanced expectations prevent both over-referral and under-use.",
  },
  {
    type: "table",
    headers: ["Strengths", "Limitations"],
    rows: [
      ["No ionising radiation; repeatable and safe in pregnancy", "Highly operator-dependent"],
      ["Real-time dynamic assessment", "Limited penetration in large body habitus"],
      ["Portable to the patient", "Bone and gas block the beam"],
      ["Excellent for guiding procedures", "Restricted acoustic windows in some regions"],
      ["Relatively low cost per examination", "Field of view is smaller than cross-sectional modalities"],
      ["Immediate results at the bedside", "Documentation depends on what the operator chose to record"],
      ["Functional information through Doppler", "Quantification is technique-sensitive"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "A negative ultrasound is not always a negative examination",
    text: "Where acoustic access is limited, a normal ultrasound may simply mean the region could not be adequately assessed. Reports should distinguish between structures seen and reported normal and structures that could not be visualised.",
  },
  {
    type: "h2",
    id: "quality",
    text: "What Determines Image Quality",
    number: 8,
    body: "In order of practical impact, not in order of marketing emphasis.",
  },
  {
    type: "ul",
    items: [
      "Operator technique: window selection, probe pressure, angle and patient positioning.",
      "Probe selection: frequency and footprint appropriate to the target depth and access.",
      "System optimisation: depth, gain, time-gain compensation, focus and frequency setting.",
      "Transducer condition: a damaged or delaminated probe cannot be compensated for by settings.",
      "Processing: harmonic imaging, compounding and speckle reduction change conspicuity.",
      "Patient factors: habitus, bowel gas, cooperation and ability to hold position.",
      "Display and ambient light in the scanning environment.",
      "Preset design: well-built presets shorten examinations and improve consistency.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Test the probes, not just the system",
    text: "When evaluating systems, scan the same volunteers with the exact probe models you intend to buy. System comparisons made with different probe sets tell you nothing about the configuration you will actually receive.",
  },
  {
    type: "h2",
    id: "service",
    text: "Safety, Cleaning and Service",
    number: 9,
    body: "The recurring risks in ultrasound are infection control and probe damage.",
  },
  {
    type: "table",
    headers: ["Area", "Requirement", "Failure consequence"],
    rows: [
      ["Probe cleaning and disinfection", "Level determined by contact type, per manufacturer instructions", "Infection risk or probe damage from incorrect agents"],
      ["Endocavity probe reprocessing", "High-level disinfection with documented process", "Regulatory and patient safety failure"],
      ["Probe handling", "Support cables, avoid dropping and strain relief damage", "Element loss requiring probe replacement"],
      ["Acoustic output awareness", "Use the lowest output consistent with diagnostic need", "Unnecessary exposure, particularly in obstetric imaging"],
      ["Electrical safety testing", "Scheduled biomedical testing", "Regulatory non-compliance"],
      ["Preventive maintenance", "Per manufacturer schedule, including cooling and battery checks", "Unplanned downtime"],
      ["Software and preset management", "Controlled updates and preset backups", "Loss of departmental configuration"],
    ],
  },
  {
    type: "h2",
    id: "choosing",
    text: "Choosing a System",
    number: 10,
    body: "Specify the examinations first; the configuration follows.",
  },
  {
    type: "ul",
    items: [
      "Define the casemix, the departments served and the depth range required.",
      "Derive the probe set from that casemix, then confirm each probe is included in the offer.",
      "Decide whether the platform must be cart-based, portable or handheld based on where scanning happens.",
      "Confirm which modes and quantification packages are licensed rather than merely demonstrated.",
      "Test on real patients or volunteers with the intended probe set before deciding.",
      "Verify archive and worklist integration end to end, not on a slide.",
      "Cost the probe replacement cycle: probes are consumable in practice, not permanent.",
      "Confirm service coverage for probes specifically, since probe failure is the most common downtime cause.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is ultrasound safe?",
        a: "Ultrasound uses mechanical sound waves rather than ionising radiation and has an excellent safety record in routine diagnostic use, including in pregnancy. Standard practice is nonetheless to use the lowest acoustic output and shortest exposure consistent with obtaining the diagnostic information required.",
      },
      {
        q: "Why does image quality vary so much between operators?",
        a: "Because the operator creates the image. Window selection, probe angle, pressure, patient positioning and system optimisation are all decided in real time, and the recorded images are only those the operator chose to capture. Training and standardised protocols are therefore as important as the hardware.",
      },
      {
        q: "What is the difference between a cart-based and a handheld system?",
        a: "Cart-based systems offer the fullest probe range, processing power, quantification packages and ergonomics for high-volume departmental work. Handheld and portable systems trade some of that capability for immediate availability at the point of care. Most hospitals need both rather than one or the other.",
      },
      {
        q: "How many transducers does a department need?",
        a: "As many as its casemix requires — typically at least a curvilinear probe for abdominal and obstetric work, a linear probe for superficial and vascular imaging and procedures, and a phased array where cardiac imaging is performed, with endocavity probes for pelvic services. Specify from examination types, not from a target number.",
      },
      {
        q: "Why can't ultrasound image through bone or gas?",
        a: "Both create severe acoustic mismatch. Gas reflects and scatters the beam almost completely, and bone both reflects strongly and attenuates heavily, so structures beyond them are shadowed. This is why intercostal windows are used for cardiac imaging and why bowel gas limits abdominal assessment.",
      },
      {
        q: "How long do transducers last?",
        a: "There is no fixed lifespan; probe life is dominated by handling. Dropped probes, cable strain and incorrect cleaning agents are the usual causes of premature failure. Treat probes as a recurring replacement cost within the lifecycle plan rather than as permanent capital.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 11,
    body: "The most accessible imaging modality is also the most technique-dependent.",
  },
  {
    type: "p",
    text: "Ultrasound earns its position through immediacy, safety and versatility: real-time imaging with no ionising radiation, delivered wherever the patient is. Those advantages come with real constraints — acoustic access, penetration limits and profound operator dependence. Services that get the most from ultrasound do three things consistently: they specify probe sets from casemix rather than from headline system features, they invest in operator training and standardised protocols, and they treat probes as maintained, replaceable assets rather than accessories.",
  },
  {
    type: "articleCta",
    heading: "Planning an ultrasound purchase or upgrade?",
    subheading:
      "AbuFarha Medical Supplies supplies, installs and supports ultrasound systems with applications training and biomedical engineering service.",
    technology: "Ultrasound Systems",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Safety and clinical use",
        items: [
          { label: "World Health Organization — diagnostic imaging and medical devices", url: "https://www.who.int/" },
          { label: "World Federation for Ultrasound in Medicine and Biology — safety statements", url: "https://wfumb.info/" },
        ],
      },
      {
        title: "Equipment and reprocessing standards",
        items: [
          { label: "International Electrotechnical Commission — ultrasonic equipment standards", url: "https://www.iec.ch/" },
          { label: "World Health Organization — infection prevention and control guidance", url: "https://www.who.int/" },
        ],
      },
    ],
    note: "Follow manufacturer instructions for probe reprocessing and applicable national guidance for clinical protocols.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Diagnostic ultrasound" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Imaging equipment support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Educational synthesis of established physics and clinical practice",
    disclaimer:
      "Educational content. It does not replace formal ultrasound training, professional guidelines or manufacturer instructions.",
  },
];
