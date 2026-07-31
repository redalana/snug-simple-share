/**
 * Doppler and vascular ultrasound — Ultrasound cluster (supporting).
 */

import type { ContentBlock, TocItem } from "../blog";

export const US_DOPPLER_TOC: TocItem[] = [
  { id: "principle", title: "The Doppler Principle in Practice" },
  { id: "modes", title: "Doppler Modes and What Each Answers" },
  { id: "settings", title: "Settings That Decide Whether the Trace Is Usable" },
  { id: "examinations", title: "Core Vascular Examinations" },
  { id: "equipment", title: "Equipment and Probe Requirements" },
  { id: "artefacts", title: "Doppler Artefacts and Their Causes" },
  { id: "programme", title: "Running a Vascular Ultrasound Service" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const US_DOPPLER_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Doppler ultrasound turns a grey-scale anatomical image into a haemodynamic measurement. It answers questions grey-scale imaging cannot: is this vessel patent, in which direction is blood moving, how fast, and does the waveform shape indicate an obstruction upstream or downstream of the sampling point.",
      "It is also the part of ultrasound most sensitive to operator technique and console configuration. The same vessel, examined with the same system minutes apart, can produce a confident diagnostic trace or an uninterpretable one depending on angle, gate size, scale and filter settings. Doppler failures are therefore rarely equipment failures — they are usually configuration and technique failures that the operator can correct at the console.",
      "This guide explains the modes, the settings that determine whether a measurement is valid, the core vascular examinations, and the equipment a department needs to run a credible vascular service.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Doppler physics in practical terms, colour and spectral modes, angle and scale settings, arterial and venous examinations, probe and system requirements, artefact recognition, service governance",
    audience:
      "Sonographers, vascular technologists, radiologists, vascular surgeons, biomedical engineers and procurement teams",
    readingTime: "15 min read",
    technology: "Ultrasound Systems",
  },
  {
    type: "h2",
    id: "principle",
    text: "The Doppler Principle in Practice",
    number: 1,
    body: "Motion changes the frequency of returning echoes; that shift becomes velocity.",
  },
  {
    type: "p",
    text: "When sound reflects from a moving target, the returning frequency differs from the transmitted frequency. The size of that shift is proportional to the velocity of the target and to the cosine of the angle between the beam and the direction of motion. The consequence for practice is direct: velocity accuracy depends on knowing that angle. At angles approaching 90 degrees the cosine approaches zero and measured velocity collapses towards nothing even though flow is unchanged.",
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Angle is not a preference — it is part of the measurement",
    text: "Spectral velocities should be acquired at an insonation angle of roughly 60 degrees or less, with the angle-correction cursor aligned to the vessel axis. A velocity recorded at a steep angle is not a conservative estimate; it is an invalid number that may reclassify a stenosis.",
  },
  {
    type: "h2",
    id: "modes",
    text: "Doppler Modes and What Each Answers",
    number: 2,
    body: "Each mode trades sensitivity, directional information and quantification differently.",
  },
  {
    type: "table",
    headers: ["Mode", "What it shows", "Primary use", "Main limitation"],
    rows: [
      ["Colour Doppler", "Mean velocity and direction mapped over the image", "Locating flow and screening for occlusion", "Angle dependent; aliases at high velocity"],
      ["Power Doppler", "Amplitude of the Doppler signal, no direction", "Detecting slow or low-volume flow", "No direction or velocity information"],
      ["Pulsed-wave spectral", "Velocity against time in a defined sample gate", "Quantification, waveform analysis, stenosis grading", "Aliasing above the velocity scale limit"],
      ["Continuous-wave", "All velocities along the beam", "Very high velocities without aliasing", "No depth resolution"],
      ["Directional power / advanced flow", "Sensitive flow maps with directional coding", "Small vessels, low-flow states", "Vendor-specific implementation and naming"],
    ],
  },
  {
    type: "h2",
    id: "settings",
    text: "Settings That Decide Whether the Trace Is Usable",
    number: 3,
    body: "Six controls account for most of the difference between a diagnostic and a discarded study.",
  },
  {
    type: "ul",
    items: [
      "Velocity scale (pulse repetition frequency): too low causes aliasing, too high hides slow flow.",
      "Angle correction: aligned with the vessel axis, at an insonation angle of 60 degrees or less.",
      "Sample gate size and position: sized to the lumen and centred where flow is representative.",
      "Wall filter: high settings remove wall motion but also remove genuine low-velocity diastolic flow.",
      "Colour gain: raised until noise just appears, then reduced — undergained colour mimics occlusion.",
      "Baseline position: shifted to display the full waveform rather than a truncated peak.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "The two errors that change management",
    text: "An undergained colour box or an over-aggressive wall filter can make a patent vessel look occluded. An uncorrected steep angle can under-read peak systolic velocity enough to downgrade a significant stenosis. Both are console settings, not machine faults.",
  },
  {
    type: "h2",
    id: "examinations",
    text: "Core Vascular Examinations",
    number: 4,
    body: "The standard workload of a vascular ultrasound service.",
  },
  {
    type: "table",
    headers: ["Examination", "Clinical question", "Technique emphasis"],
    rows: [
      ["Carotid and vertebral duplex", "Degree and character of extracranial stenosis", "Spectral velocities with angle correction; plaque assessment"],
      ["Lower-limb venous duplex", "Deep vein thrombosis, patency and competence", "Compression, augmentation and reflux timing"],
      ["Lower-limb arterial duplex", "Site and severity of arterial disease", "Segmental velocities and waveform change across lesions"],
      ["Venous mapping", "Vein suitability for grafting or access", "Diameter, depth and course documentation"],
      ["Dialysis access surveillance", "Fistula maturation, stenosis, flow volume", "Flow volume calculation and inflow/outflow survey"],
      ["Abdominal vessels", "Renal, portal and mesenteric flow", "Deep penetration; respiration and fasting preparation"],
      ["Graft and stent surveillance", "Patency and developing stenosis", "Consistent protocol and comparison with baseline"],
    ],
  },
  {
    type: "h2",
    id: "equipment",
    text: "Equipment and Probe Requirements",
    number: 5,
    body: "Vascular work has specific hardware requirements beyond a general imaging system.",
  },
  {
    type: "ul",
    items: [
      "A linear probe in the approximate 5–12 MHz range for superficial arteries, veins and access work.",
      "A curvilinear probe for abdominal vessels and deep or oedematous limbs.",
      "Sensitive low-flow Doppler performance, not just high frame-rate grey-scale imaging.",
      "Steerable colour and spectral beam steering on the linear probe, so angle can be achieved in straight superficial vessels.",
      "Automated or semi-automated velocity measurement tools with reproducible calliper behaviour.",
      "Structured reporting with protocol-driven measurement fields for surveillance comparability.",
      "A height-adjustable examination couch and reliable acoustic gel warming for reflux and compression work.",
    ],
  },
  {
    type: "h2",
    id: "artefacts",
    text: "Doppler Artefacts and Their Causes",
    number: 6,
    body: "Recognising the pattern usually identifies the setting that produced it.",
  },
  {
    type: "table",
    headers: ["Appearance", "Likely cause", "Correction"],
    rows: [
      ["Waveform peaks wrap to the opposite side", "Aliasing: scale below the true velocity", "Raise velocity scale, shift baseline, or use continuous-wave"],
      ["Colour absent in a patent vessel", "Low colour gain, high wall filter, or steep angle", "Increase gain, lower filter, angle the beam"],
      ["Colour spilling beyond the vessel wall", "Excess colour gain or motion", "Reduce gain; steady the probe and ask for breath-hold"],
      ["Mirror-image spectrum on both sides of baseline", "Beam near perpendicular, or excessive gain", "Improve angle; reduce spectral gain"],
      ["Colour throughout surrounding tissue", "Tissue vibration near a high-grade stenosis or fistula", "Recognise as a genuine sign; interrogate the source"],
      ["Flow appearing beyond a strong reflector", "Mirror artefact", "Change window and confirm anatomy on grey-scale"],
    ],
  },
  {
    type: "h2",
    id: "programme",
    text: "Running a Vascular Ultrasound Service",
    number: 7,
    body: "Reproducibility across operators is the defining quality requirement.",
  },
  {
    type: "ul",
    items: [
      "Written protocols per examination, specifying the images and measurements required.",
      "Agreed velocity criteria for stenosis grading, applied consistently and stated in the report.",
      "Preset management: locked departmental presets so studies are comparable between operators.",
      "Competency framework separating general ultrasound skills from vascular technique.",
      "Periodic audit against surgical, CT or angiographic findings where available.",
      "Probe care and reprocessing discipline, given the volume of contact examinations.",
      "Planned probe replacement budget — vascular linear probes are the highest-wear item in the service.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Why does a vessel appear occluded on colour but patent on power Doppler?",
        a: "Power Doppler is more sensitive to low-amplitude, slow flow and is not angle dependent in the same way. Discrepancy usually means colour settings were suppressing genuine slow flow — check gain, wall filter, scale and angle before reporting occlusion.",
      },
      {
        q: "Does a higher-frequency probe always give better vascular images?",
        a: "Only within its depth range. Higher frequency improves resolution but attenuates faster, so deep or oedematous limbs and abdominal vessels need a lower-frequency curvilinear probe even though the near-field image looks worse.",
      },
      {
        q: "How much does the system matter compared with the operator?",
        a: "Both matter, but in a specific order. A poor operator on an excellent system produces unreliable studies; a skilled operator on a system with weak low-flow Doppler sensitivity will still fail in low-flow states. Specify Doppler sensitivity explicitly during evaluation rather than judging on grey-scale demonstrations.",
      },
      {
        q: "Can handheld systems perform vascular studies?",
        a: "They are useful for focused questions such as vessel localisation for access. Formal duplex studies requiring angle-corrected velocities, calibrated measurement tools and structured reporting are generally performed on cart-based systems.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "Doppler quality is created at the console, then protected by protocol.",
  },
  {
    type: "p",
    text: "Doppler ultrasound provides physiological information no other bedside modality supplies at comparable cost and speed. Its weakness is that a plausible-looking trace can be numerically wrong. Departments that produce dependable vascular reports do three things consistently: they control insonation angle and scale as measurement parameters, they lock protocols and presets so studies are comparable, and they specify low-flow Doppler sensitivity when purchasing rather than assuming it.",
  },
  {
    type: "articleCta",
    heading: "Specifying an ultrasound system for vascular work?",
    subheading:
      "AbuFarha Medical Supplies supplies ultrasound systems with vascular probe sets, preset configuration support and biomedical service coverage.",
    technology: "Ultrasound Systems",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Practice and safety guidance",
        items: [
          { label: "World Federation for Ultrasound in Medicine and Biology — practice statements", url: "https://wfumb.info/" },
          { label: "World Health Organization — diagnostic imaging services", url: "https://www.who.int/" },
        ],
      },
      {
        title: "Equipment and measurement standards",
        items: [
          { label: "International Electrotechnical Commission — ultrasonic equipment standards", url: "https://www.iec.ch/" },
          { label: "International Organization for Standardization — medical device standards", url: "https://www.iso.org/" },
        ],
      },
    ],
    note: "Stenosis-grading velocity criteria vary between published schemes and must be adopted locally with agreed thresholds; this article is orientation only.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Vascular imaging" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Ultrasound systems" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Guidance synthesis and applied physics",
    disclaimer:
      "Educational content for equipment planning and technique orientation. It does not replace formal vascular ultrasound training or local diagnostic criteria.",
  },
];
