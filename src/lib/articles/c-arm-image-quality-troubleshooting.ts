/**
 * C-arm image quality troubleshooting — C-Arm cluster (troubleshooting).
 */

import type { ContentBlock, TocItem } from "../blog";

export const C_ARM_IMAGE_QUALITY_TOC: TocItem[] = [
  { id: "overview", title: "A Structured Approach" },
  { id: "noise", title: "Noisy or Grainy Images" },
  { id: "contrast", title: "Poor Contrast and Washed-Out Images" },
  { id: "motion", title: "Blur, Lag and Motion Artefacts" },
  { id: "artefacts", title: "Artefacts and Geometric Distortion" },
  { id: "display", title: "Display and Environment Problems" },
  { id: "matrix", title: "Fault-Finding Matrix" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const C_ARM_IMAGE_QUALITY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Image quality complaints about C-arms are unusually difficult to resolve because the reported symptom is almost always the same — \"the picture is poor\" — while the cause may be positioning, technique, patient size, receptor degradation, monitor set-up or theatre lighting.",
      "The diagnostic advantage is that most causes are separable with two simple tests: image the same phantom that was imaged when the system was accepted, and view the resulting image on a known-good display. If the phantom image is good, the equipment is largely exonerated and the investigation moves to practice and environment.",
      "This guide gives a structured sequence for each symptom family, with the practical checks that resolve the majority of complaints before an engineer is required.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Structured triage, noise, contrast loss, motion blur and lag, artefacts and distortion, display and theatre environment factors, and a fault-finding matrix",
    audience:
      "Radiographers, theatre teams, biomedical engineers and medical physics staff",
    readingTime: "13 min read",
    technology: "C-Arm Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "A Structured Approach",
    number: 1,
    body: "Separate equipment faults from practice and environment before investigating components.",
  },
  {
    type: "ul",
    items: [
      "Reproduce the complaint: which procedure, which projection, which operator, which theatre.",
      "Image the acceptance phantom under the documented technique and compare with the baseline image.",
      "View that image on a diagnostic-quality display as well as on the theatre monitor.",
      "Check the geometry used clinically: receptor-to-patient distance, magnification mode, collimation.",
      "Check the operating mode: pulse rate, dose setting, anatomical programme selected.",
      "Confirm no recent service, software update or configuration change coincides with the complaint.",
      "Only then escalate to receptor, tube, generator or automatic dose rate control investigation.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "The phantom test settles most disputes",
    text: "A stored baseline phantom image from acceptance testing is the single most useful troubleshooting asset a theatre suite can hold. Without it, every complaint becomes a subjective argument; with it, degradation is demonstrable in minutes.",
  },
  {
    type: "h2",
    id: "noise",
    text: "Noisy or Grainy Images",
    number: 2,
    body: "Noise means too few X-ray photons reached the receptor for the anatomy being imaged.",
  },
  {
    type: "table",
    headers: ["Cause", "How to recognise it", "Action"],
    rows: [
      ["Low dose mode or low pulse rate for the anatomy", "Noise appears only in thick anatomy or obese patients", "Select the appropriate anatomical programme and dose level"],
      ["Excessive receptor-to-patient distance", "Noise with a visibly enlarged field", "Bring the receptor close to the patient; raise the table instead of lowering the receptor"],
      ["Magnification mode in use unnecessarily", "Noise plus reduced field of view", "Return to full field of view where clinically acceptable"],
      ["Automatic dose rate control not reaching demand", "Noise at maximum output indication", "Engineer check of generator output and ADRC calibration"],
      ["Receptor degradation", "Phantom image noisier than baseline at the same technique", "Receptor performance test; plan replacement"],
      ["Grid mismatch or missing grid", "Noise with poor contrast in large patients", "Confirm correct grid fitted for the examination"],
      ["Scatter dominance in lateral projections", "Noise and haze together in laterals", "Collimate tightly; accept higher technique for laterals"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Geometry before technique",
    clinicalInterpretation:
      "In theatre, a large air gap between patient and receptor is the most common single cause of noisy images, because the receptor is often kept clear of the sterile field. It degrades image quality and increases patient entrance dose at the same time.",
    hospitalRecommendation:
      "Train the team to close the receptor-to-patient distance and raise the table rather than lowering the receptor, and to verify sterile clearance by drape management rather than by adding air gap.",
  },
  {
    type: "h2",
    id: "contrast",
    text: "Poor Contrast and Washed-Out Images",
    number: 3,
    body: "Contrast loss is usually scatter, processing or display — rarely the tube.",
  },
  {
    type: "ul",
    items: [
      "Collimation: an open field floods the receptor with scatter and flattens contrast immediately.",
      "Grid: absent, incorrect or mispositioned grids show as low contrast in larger anatomy.",
      "Anatomical programme: a soft-tissue programme used for bony work produces flat images.",
      "Excessive kV for the task, often selected automatically when the field includes dense metal.",
      "Metalwork in the field driving automatic dose rate control to raise kV; collimate away from it where possible.",
      "Image processing preset: check whether the edge enhancement and contrast preset match the procedure.",
      "Display: theatre monitors with high ambient light and wrong brightness settings look exactly like equipment contrast loss.",
      "Intensifier ageing on older systems: progressive contrast loss that phantom QA identifies objectively.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Blaming the C-arm for the theatre lights",
    text: "Fluoroscopy monitors are frequently positioned facing theatre lighting or windows, at factory brightness settings, and are often the actual cause of complaints about \"grey, flat images\". Always review the same image on a known-good display before escalating.",
  },
  {
    type: "h2",
    id: "motion",
    text: "Blur, Lag and Motion Artefacts",
    number: 4,
    body: "Blur has three separable sources: patient movement, system movement and temporal processing.",
  },
  {
    type: "table",
    headers: ["Symptom", "Likely source", "Resolution"],
    rows: [
      ["Uniform blur across the whole image", "Patient or table movement during acquisition", "Immobilisation and shorter acquisition; coordinate with anaesthesia"],
      ["Blur only when the C-arm is moved", "Mechanical instability or brakes not applied", "Apply brakes; engineer check of brake hold and orbital stiffness"],
      ["Smearing trails behind moving instruments", "Frame averaging / noise reduction set too high", "Reduce temporal filtering for dynamic work; raise pulse rate"],
      ["Blur with a stationary sharp background", "Instrument or contrast movement — expected", "None; a real dynamic finding, not an artefact"],
      ["Loss of sharpness in magnification mode", "Geometric magnification with a large air gap", "Reduce receptor-to-patient distance"],
      ["Sudden overall softness after service", "Focal spot or receptor configuration change", "Compare with baseline phantom; engineer investigation"],
    ],
  },
  {
    type: "h2",
    id: "artefacts",
    text: "Artefacts and Geometric Distortion",
    number: 5,
    body: "Artefact patterns are highly diagnostic, so describe the pattern precisely when logging a fault.",
  },
  {
    type: "ul",
    items: [
      "Fixed bright or dark pixels and lines that persist across images: receptor defect requiring calibration or replacement.",
      "Persistent structured pattern that does not move with the patient: dirty or damaged receptor cover, or grid line aliasing.",
      "Ghost of a previous high-contrast object: receptor lag; confirm against baseline and report if worsening.",
      "S-shaped or barrel distortion at the field edge on image intensifier systems: normal characteristic, but progressive change needs assessment.",
      "Vignetting or edge brightness fall-off: intensifier ageing or receptor calibration drift.",
      "Saturation white-out adjacent to metal implants: automatic dose rate control responding to dense material; collimate and reposition.",
      "Streaks or banding synchronised with movement: cable or connector fault at a flex point.",
      "Flickering or intermittent dropout: power, cable or interface fault — record the frequency and circumstances for the engineer.",
    ],
  },
  {
    type: "h2",
    id: "display",
    text: "Display and Environment Problems",
    number: 6,
    body: "The theatre viewing environment is part of the imaging chain and is the least maintained part of it.",
  },
  {
    type: "table",
    headers: ["Factor", "Effect", "Control"],
    rows: [
      ["Ambient theatre lighting on the monitor", "Apparent contrast and low-contrast detail loss", "Reposition the monitor; dim local lighting during screening"],
      ["Monitor brightness and contrast settings", "Flat or over-bright images", "Set up to a documented standard and check annually"],
      ["Viewing distance and angle", "Detail loss and perceived blur", "Position for the primary operator's working position"],
      ["Monitor ageing", "Gradual, unnoticed brightness loss", "Include theatre monitors in the QA programme"],
      ["Screen soiling under drapes", "Localised haze mistaken for artefact", "Cleaning protocol for monitor surfaces"],
      ["Secondary monitors and video routing", "Signal degradation on relayed displays", "Verify the primary display before diagnosing a system fault"],
    ],
  },
  {
    type: "h2",
    id: "matrix",
    text: "Fault-Finding Matrix",
    number: 7,
    body: "Use this as a first pass before raising a service call.",
  },
  {
    type: "table",
    headers: ["Complaint", "Check first", "Escalate when"],
    rows: [
      ["Images noisy in large patients only", "Receptor distance, programme, magnification, grid", "Phantom image is noisier than baseline"],
      ["All images flat and grey", "Monitor set-up, ambient light, collimation, processing preset", "Phantom contrast is degraded on a good display"],
      ["Poor images in laterals only", "Collimation, scatter, technique, receptor position", "Automatic dose rate control cannot reach demand"],
      ["Smearing during instrument movement", "Frame averaging and pulse rate settings", "Symptom persists at low filtering and high pulse rate"],
      ["Fixed lines or spots", "Receptor cover cleanliness", "Pattern persists after cleaning — receptor fault"],
      ["Sudden change after a service visit", "Configuration and preset comparison", "Baseline phantom comparison fails"],
      ["Intermittent dropout when repositioning", "Cable routing and connectors", "Any reproducible dropout — stop clinical use"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Record the projection, not just the complaint",
    text: "C-arm image quality is projection-dependent. A fault report that states the procedure, projection, patient habitus, mode and settings is usually resolved on the first visit; \"poor image quality\" alone frequently results in a no-fault-found outcome and a repeat complaint.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Why do lateral projections look so much worse?",
        a: "Lateral projections traverse far more tissue, generate more scatter and demand higher output. Tight collimation, close receptor positioning and appropriate technique selection recover most of the loss; the remainder is physics, not a fault.",
      },
      {
        q: "Can image quality be improved without increasing dose?",
        a: "Yes, substantially. Reducing receptor-to-patient distance, collimating tightly, avoiding unnecessary magnification and selecting the correct anatomical programme all improve the image while reducing patient entrance dose.",
      },
      {
        q: "How do we tell receptor degradation from a technique problem?",
        a: "Image the acceptance phantom at the documented technique and compare against the stored baseline on a good display. Degradation visible on the phantom is an equipment issue; a good phantom image points to practice, geometry or display.",
      },
      {
        q: "Is receptor lag a fault?",
        a: "A small amount of lag is a normal characteristic. Increasing lag, or lag that persists across many frames and interferes with dynamic work, should be measured against baseline and reported.",
      },
      {
        q: "Should theatre monitors be in the QA programme?",
        a: "Yes. Monitor brightness, contrast and ambient light conditions are part of the imaging chain, are the least monitored element and are a frequent root cause of complaints attributed to the C-arm.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Persistent C-arm image quality problems in theatre?",
    subheading:
      "AbuFarha Medical provides applications support, quality assurance testing and service for mobile C-arm systems.",
    technology: "C-Arm Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "C-arm service and image quality testing" },
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Theatre fluoroscopy applications and training" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer service documentation, IEC equipment standards and national fluoroscopy quality assurance protocols",
    disclaimer:
      "Troubleshooting steps are generic. Follow the manufacturer's service documentation and involve medical physics and qualified service engineers for any dose- or safety-related investigation.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Equipment standards",
        items: [
          { label: "IEC 60601-2-43 for interventional X-ray equipment" },
          { label: "IEC 61223 series — evaluation and routine testing in medical imaging departments" },
        ],
      },
      {
        title: "Quality assurance and dose",
        items: [
          { label: "National quality assurance protocols for fluoroscopic equipment" },
          { label: "ICRP guidance on radiological protection in fluoroscopically guided procedures" },
        ],
      },
      {
        title: "Display and viewing conditions",
        items: [
          { label: "AAPM and national guidance on display performance and viewing conditions" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Triage with a baseline phantom image and a known-good display before investigating components.",
      "Air gap between patient and receptor is the most common cause of noisy theatre images.",
      "Contrast loss is usually scatter, processing or the monitor — rarely the tube.",
      "Smearing during instrument movement is normally excessive temporal filtering, not a fault.",
      "Describe the projection, mode and settings in the fault report to avoid no-fault-found visits.",
      "Better geometry and collimation improve the image and lower patient dose simultaneously.",
      "Include theatre monitors and ambient lighting in the quality assurance programme.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "C-arm image quality is a chain, and the equipment is only one link in it.",
  },
  {
    type: "p",
    text: "Teams that hold a baseline phantom image, train geometry and collimation, keep theatre displays in the QA programme and report faults with the projection and settings attached resolve most complaints locally — and get faster, more accurate service on the minority that genuinely need an engineer.",
  },
];
