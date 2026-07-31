/**
 * Angiography image quality troubleshooting — Cath Lab cluster (troubleshooting).
 */

import type { ContentBlock, TocItem } from "../blog";

export const ANGIOGRAPHY_TROUBLESHOOTING_TOC: TocItem[] = [
  { id: "overview", title: "Read the Symptom Before Calling Service" },
  { id: "method", title: "A Structured Diagnostic Method" },
  { id: "noise", title: "Noisy or Grainy Fluoroscopy" },
  { id: "contrast", title: "Poor Vessel Contrast" },
  { id: "motion", title: "Motion and Misregistration Artefacts" },
  { id: "dsa", title: "Digital Subtraction Artefacts" },
  { id: "detector", title: "Detector Faults: Lines, Dropouts and Ghosting" },
  { id: "geometry", title: "Geometric and Positioner Faults" },
  { id: "dose-creep", title: "Rising Dose With Unchanged Practice" },
  { id: "escalation", title: "When to Escalate and What to Send" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ANGIOGRAPHY_TROUBLESHOOTING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Most angiography image quality complaints are not equipment faults. They are protocol, positioning, injection or patient-factor problems that present as image quality, and they can be resolved in the room within minutes if the team knows how to read the symptom.",
      "The cost of getting this wrong runs both ways. Calling service for a protocol problem wastes an engineer visit and a clinical session; treating a genuine detector fault as an operator problem lets a degrading image chain run for months while dose quietly climbs.",
      "This guide gives cath lab teams a structured diagnostic method: what each symptom looks like, which causes to exclude in the room, and the evidence to hand to a service engineer when escalation is genuinely warranted.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Diagnostic method, noise, vessel contrast, motion artefacts, subtraction artefacts, detector faults, geometry faults, dose creep, escalation evidence",
    audience: "Cath lab radiographers, interventional teams, biomedical engineers and radiation protection supervisors",
    readingTime: "13 min read",
    technology: "Angiography / Cath Lab Systems",
  },
  {
    type: "h2",
    id: "method",
    text: "A Structured Diagnostic Method",
    number: 1,
    body: "Work outward from the patient to the equipment. Nine times out of ten the cause is found before you reach the imaging chain, and the order itself is diagnostic.",
  },
  {
    type: "ul",
    items: [
      "1. Patient factors: body habitus, arm position, table height, and whether the anatomy of interest is at isocentre.",
      "2. Protocol: is the selected acquisition protocol the correct one for this procedure, and has anyone modified it?",
      "3. Geometry: source-to-image distance, detector height, magnification mode and collimation.",
      "4. Injection: contrast concentration, injection rate, catheter position and whether the injection and acquisition are synchronised.",
      "5. Post-processing: display window, edge enhancement and the subtraction mask.",
      "6. Imaging chain: only now consider tube output, detector calibration and generator behaviour.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Reproduce the fault on a phantom before escalating",
    text: "A phantom image removes every patient and operator variable. If the phantom image is normal and the patient image is not, the cause is in steps one to five. If the phantom image reproduces the fault, you have objective evidence for the service engineer and a baseline to verify the repair against.",
  },
  {
    type: "h2",
    id: "noise",
    text: "Noisy or Grainy Fluoroscopy",
    number: 2,
    body: "Quantum noise appears when too few X-ray photons reach the detector. It is the most common complaint and usually has a positioning or protocol cause.",
  },
  {
    type: "table",
    headers: ["Likely cause", "How to confirm in the room", "Action"],
    rows: [
      ["Excessive patient thickness in the beam path", "Note obliquity and patient habitus; noise worsens in steep angles", "Reduce obliquity where clinically acceptable; raise detector to the patient"],
      ["Large air gap between patient and detector", "Check detector-to-patient distance", "Bring the detector as close to the patient as safely possible"],
      ["Low-dose fluoroscopy mode selected", "Check the active fluoroscopy dose level", "Select the appropriate level for the task; return to low dose afterwards"],
      ["Excessive magnification", "Check field-of-view setting", "Use the largest field of view that answers the question"],
      ["Arms in the beam path in lateral projections", "Visual check of arm position", "Reposition arms out of the primary beam"],
      ["Genuine tube output loss", "Phantom image at fixed technique shows noise; dose indicators rise", "Escalate with phantom images and dose records"],
    ],
    caption: "Noise triage. Exhaust the first five rows before considering the sixth.",
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Never resolve noise by defeating dose management",
    text: "Increasing dose to remove noise is the wrong instinct in interventional work, where staff and patient dose accumulate across long procedures. Correct geometry, collimation and detector proximity first. Dose increase is a last resort and must be a documented, protocol-level decision, not an in-case habit.",
  },
  {
    type: "h2",
    id: "contrast",
    text: "Poor Vessel Contrast",
    number: 3,
    body: "When vessels are visible but poorly defined, the cause is usually the injection or the scatter environment rather than the detector.",
  },
  {
    type: "ul",
    items: [
      "Contrast concentration or injection rate too low for the vessel calibre and flow — verify against the protocol, not against habit.",
      "Catheter tip not selectively engaged, so contrast dilutes before reaching the target vessel.",
      "Injection and acquisition not synchronised, so the acquisition captures the wash-out rather than the peak.",
      "Excessive scatter from an open collimator, which lifts the noise floor across the whole image.",
      "Display window set for a different task — always check the window before concluding the acquisition is poor.",
    ],
  },
  {
    type: "h2",
    id: "motion",
    text: "Motion and Misregistration Artefacts",
    number: 4,
    body: "Motion presents as blurring, doubling or bright and dark edge pairs. Distinguishing patient motion from equipment motion is the whole diagnosis.",
  },
  {
    type: "ul",
    items: [
      "Patient motion: breathing, swallowing or discomfort. Affects only the acquisitions during which it occurred, and its pattern varies run to run.",
      "Cardiac and respiratory motion: intrinsic and expected; managed with acquisition timing and, where available, cardiac gating.",
      "Table motion during acquisition: reproducible, affects the whole field uniformly and correlates with table movement.",
      "Positioner drift: the C-arm moves slightly during a run. Reproducible on a phantom and a genuine equipment fault — escalate.",
      "Mechanical looseness in the suspension: presents as jitter in the same axis every time and worsens over months.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Reproducibility separates patient motion from equipment motion",
    text: "Patient motion is random across runs. Equipment motion is reproducible in the same axis under the same movement. If you can reproduce the artefact on a static phantom by repeating the same positioner movement, it is mechanical and it belongs to service.",
  },
  {
    type: "h2",
    id: "dsa",
    text: "Digital Subtraction Artefacts",
    number: 5,
    body: "Digital subtraction angiography removes a mask image from the contrast-filled series. Any change between mask and series that is not contrast becomes an artefact.",
  },
  {
    type: "table",
    headers: ["Appearance", "Cause", "Correction"],
    rows: [
      ["Bright and dark bone edges", "Patient moved between mask and contrast frames", "Re-mask, or apply pixel shift; coach the patient before the run"],
      ["Whole-image mismatch", "Table or positioner moved after the mask", "Acquire a new mask without moving anything between frames"],
      ["Bowel gas streaks in abdominal runs", "Peristalsis between mask and series", "Shorter acquisition, re-mask, consider antiperistaltic measures per local protocol"],
      ["Saturation artefact at the field edge", "Very thin or very dense region outside the useful range", "Use equalisation filters or adjust collimation and positioning"],
      ["Persistent residual image on later runs", "Detector lag or ghosting", "Phantom test; if reproducible, escalate as a detector fault"],
    ],
    caption: "Subtraction artefact triage. Only the last row is an equipment fault.",
  },
  {
    type: "h2",
    id: "detector",
    text: "Detector Faults: Lines, Dropouts and Ghosting",
    number: 6,
    body: "Flat-panel detector faults are the image quality problems that genuinely require service. They have a distinguishing feature: they are geometrically fixed in the image and reproducible on a phantom.",
  },
  {
    type: "ul",
    items: [
      "Dead lines or columns: a sharp line at the same image location in every acquisition, independent of anatomy or projection.",
      "Cluster dropouts: a localised region of missing or flat response, fixed in the image regardless of patient position.",
      "Ghosting or lag: a faint residual of a previous high-contrast image persisting into the next acquisition.",
      "Progressive non-uniformity: a gradual shading across the field, usually detected by quality-assurance testing before clinicians complain.",
      "Calibration drift: uniformity and low-contrast performance degrade together; often correctable by recalibration rather than replacement.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Detector faults are geometrically fixed. Anatomy artefacts are not.",
    text: "The single most useful test: acquire two images of a uniform phantom at different detector rotations. An artefact that stays in the same place on the image is in the detector. An artefact that moves with the object is not.",
  },
  {
    type: "h2",
    id: "geometry",
    text: "Geometric and Positioner Faults",
    number: 7,
    body: "Geometric faults are frequently reported as image quality problems when they are actually mechanical or calibration problems.",
  },
  {
    type: "ul",
    items: [
      "Isocentre drift: the anatomy leaves the centre of rotation as the C-arm angulates, which ruins rotational acquisitions and roadmapping.",
      "Bi-plane registration loss: a point identified in one plane no longer corresponds in the other. Requires geometric recalibration.",
      "Rotational angiography reconstruction failure: usually a geometry calibration issue, not a reconstruction software problem.",
      "Collimator misalignment: the radiation field does not match the displayed image field — a radiation protection issue as well as an image quality one.",
      "Detector rotation or offset: reported as distortion; confirmed with a grid phantom.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Collimator misalignment is a safety fault, not a quality complaint",
    text: "If the irradiated field is larger than the displayed image, patients and staff receive dose from a region nobody is looking at. Withdraw the system from clinical use, inform the radiation protection supervisor and escalate to service immediately.",
  },
  {
    type: "h2",
    id: "dose-creep",
    text: "Rising Dose With Unchanged Practice",
    number: 8,
    body: "The most valuable fault to detect is the one nobody sees: image quality holds steady while dose rises, because automatic exposure control compensates for a degrading imaging chain.",
  },
  {
    type: "ul",
    items: [
      "Trend dose-area product and air kerma per procedure type monthly. A rising trend at constant case mix is a diagnostic signal.",
      "Trend fluoroscopy time alongside dose so you can separate longer cases from higher output.",
      "Compare current quality-assurance results against the acceptance-testing baseline, not against last quarter.",
      "Suspect tube output loss, detector sensitivity loss or filtration changes when the trend is real.",
      "Escalate with the trend data. A dose trend is far more persuasive to a service organisation than a subjective quality complaint.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Keep the acceptance-testing baseline where the team can find it",
    text: "Every image quality argument with a service organisation is settled by comparison with the commissioning baseline. Store the acceptance-test results with the equipment record and reference them in every escalation.",
  },
  {
    type: "h2",
    id: "escalation",
    text: "When to Escalate and What to Send",
    number: 9,
    body: "Escalate when the fault is reproducible on a phantom, geometrically fixed in the image, mechanically reproducible, or when dose is trending upward at constant practice.",
  },
  {
    type: "requirements",
    checklist: [
      "Phantom images demonstrating the fault, with the exposure technique recorded.",
      "The same phantom images from the acceptance-testing baseline for comparison.",
      "System error and event logs covering the period of the fault.",
      "Dose records trended by procedure type for the preceding months.",
      "A written description of what changes the fault and what does not — projection, magnification, dose mode, detector rotation.",
      "Dates and case identifiers of clinical occurrences, so logs can be correlated.",
    ],
    specs: {
      title: "Escalation evidence pack",
      rows: [
        { label: "Objective images", value: "Phantom acquisitions, current and baseline" },
        { label: "Machine evidence", value: "Error logs, event logs, calibration history" },
        { label: "Dose evidence", value: "Trended DAP and air kerma by procedure type" },
        { label: "Reproduction steps", value: "Exact sequence that produces the fault" },
        { label: "Clinical impact", value: "Procedures affected, any deferred or transferred cases" },
      ],
    },
  },
  {
    type: "faq",
    items: [
      {
        q: "How do I know whether an artefact is in the detector or in the patient?",
        a: "Acquire a uniform phantom image and change the detector rotation or field of view. An artefact fixed at the same image location across those changes is in the detector. An artefact that moves with the object is anatomical or positional.",
      },
      {
        q: "Fluoroscopy looks noisy only in steep oblique projections. Is the system faulty?",
        a: "Almost certainly not. Steep obliquity increases the tissue thickness in the beam path, which reduces the photon count reaching the detector. Bring the detector closer to the patient, collimate tightly and reduce obliquity where clinically acceptable.",
      },
      {
        q: "What causes bright and dark bone edges on subtracted runs?",
        a: "Patient movement between the mask frames and the contrast frames. Apply pixel shift or acquire a new mask, and coach the patient to hold still and hold breath where appropriate before the run.",
      },
      {
        q: "Our dose figures are rising but the images look the same. Should we be worried?",
        a: "Yes. Automatic exposure control maintains image quality by raising output as the chain degrades, so dose creep is the earliest visible sign of tube output or detector sensitivity loss. Trend the data and escalate with it.",
      },
      {
        q: "Rotational angiography reconstructions have become unusable. Is that a software problem?",
        a: "Usually it is geometric calibration. Rotational reconstruction depends on precise knowledge of the source and detector position through the sweep; small mechanical or calibration drift destroys the reconstruction while normal fluoroscopy still looks acceptable.",
      },
      {
        q: "How often should image quality be formally tested?",
        a: "Follow the manufacturer's quality-assurance schedule and local regulatory requirements, and always test after any repair to the imaging chain. Keep the acceptance-testing baseline for comparison.",
      },
      {
        q: "Can we recalibrate the detector ourselves?",
        a: "Detector calibration is normally a service-level procedure with model-specific tooling. In-house teams should own daily and weekly quality checks, phantom imaging and record keeping, and escalate calibration to the service organisation.",
      },
      {
        q: "The lateral plane of our bi-plane system no longer lines up with the frontal plane. What now?",
        a: "That is geometric registration loss between the two planes. It requires service recalibration. Until then, do not rely on cross-plane localisation for device deployment, and inform the interventional team explicitly.",
      },
      {
        q: "Is a single dead line in the detector a reason to stop using the system?",
        a: "Not automatically. Assess whether it falls in a clinically relevant part of the field and whether the manufacturer's specification tolerates it. Document it, monitor it for growth, and raise it with service — clusters and growing defects are a different matter.",
      },
      {
        q: "Who should own image quality monitoring in the hospital?",
        a: "Biomedical engineering should own the records and the test schedule, medical physics should own dose and image quality assessment, and the cath lab team should own daily checks and first-line reporting. Ambiguity here is why faults run for months.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Work outward from patient to equipment — most complaints resolve before the imaging chain.",
      "A phantom image removes every operator and patient variable and is the basis of every credible escalation.",
      "Detector faults are geometrically fixed in the image; anatomical artefacts move with the object.",
      "Collimator misalignment is a radiation safety fault requiring immediate withdrawal from clinical use.",
      "Trended dose at constant practice is the earliest and most objective indicator of a degrading imaging chain.",
    ],
  },
  {
    type: "editorialBoard",
    reviewers: [
      {
        role: "Engineering review",
        name: "AbuFarha Biomedical Engineering Team",
        credential: "Angiography service, quality assurance and commissioning",
      },
      {
        role: "Clinical review",
        name: "AbuFarha Clinical Advisory Panel",
        credential: "Interventional cardiology and radiology practice review",
      },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Vendor service documentation, quality-assurance practice and field service experience",
    disclaimer:
      "Follow the manufacturer's service and quality-assurance documentation for your specific system. This article does not replace model-specific procedures or local radiation protection rules.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Quality assurance and dose",
        items: [
          { label: "International Atomic Energy Agency — quality assurance programme for interventional radiology" },
          { label: "International Electrotechnical Commission — standards for interventional X-ray equipment performance" },
        ],
      },
      {
        title: "Radiation protection",
        items: [
          { label: "International Commission on Radiological Protection — avoidance of radiation injuries from interventional procedures" },
        ],
      },
      {
        title: "Technical documentation",
        items: [{ label: "Manufacturer service and quality-assurance manuals for the specific system model" }],
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Image quality problem you cannot pin down?",
    subheading:
      "Send us the phantom images, error logs and dose trend. Our biomedical engineering team will help you separate protocol causes from genuine equipment faults.",
    technology: "Cath Lab Systems",
  },
];
