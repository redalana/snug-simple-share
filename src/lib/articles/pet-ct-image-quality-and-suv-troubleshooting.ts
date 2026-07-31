/**
 * PET/CT image quality and SUV troubleshooting — PET/CT cluster (troubleshooting).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PET_CT_TROUBLESHOOTING_TOC: TocItem[] = [
  { id: "overview", title: "How to Approach a PET/CT Quality Problem" },
  { id: "noise", title: "Noisy or Grainy Images" },
  { id: "artefacts", title: "Artefacts and Their Origins" },
  { id: "misregistration", title: "Misregistration and Attenuation Errors" },
  { id: "suv", title: "When SUV Values Look Wrong" },
  { id: "preparation", title: "Patient Preparation Failures" },
  { id: "workflow", title: "A Structured Triage Workflow" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PET_CT_TROUBLESHOOTING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "PET/CT image quality problems are rarely caused by the detector. In practice, the large majority originate in patient preparation, injection technique, timing, positioning or the CT dataset used for attenuation correction — all of which are correctable by the site team without a service call.",
      "The same is true of suspicious standardised uptake values. SUV is a calculation, and it depends on activity, time, weight, calibration and co-registration. When a number looks wrong, one of those inputs usually is.",
      "This guide provides a structured way to separate physics from process: what each artefact pattern indicates, how to test SUV inputs in order, and when the problem genuinely belongs to engineering rather than to workflow.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Image noise causes, artefact patterns and origins, PET/CT misregistration, attenuation correction errors, SUV input verification, patient preparation failures, structured triage workflow",
    audience:
      "Nuclear medicine technologists, radiographers, medical physicists, reporting physicians and biomedical engineers",
    readingTime: "15 min read",
    technology: "PET/CT Scanners",
  },
  {
    type: "h2",
    id: "overview",
    text: "How to Approach a PET/CT Quality Problem",
    number: 1,
    body: "The first question is not \"what is wrong with the scanner?\" but \"is this one patient or every patient?\" The answer separates two entirely different investigations.",
  },
  {
    type: "table",
    headers: ["Pattern", "Most likely domain", "First action"],
    rows: [
      ["One patient, otherwise normal day", "Preparation, injection, positioning or motion", "Review preparation record, injection site and patient factors"],
      ["Every patient today", "Tracer batch, calibration, dose calibrator or scanner state", "Check daily QC, batch record and dose calibrator constancy"],
      ["Gradual change over weeks", "Detector drift, calibration ageing, cooling margin", "Review QC trend charts and environmental logs"],
      ["Only in specific body regions", "Attenuation correction, metal, arm position, truncation", "Inspect the CT dataset and the fused overlay"],
      ["Only quantitative values, images look fine", "SUV inputs — activity, time, weight, cross-calibration", "Verify each input in order"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Always look at the non-attenuation-corrected images",
    text: "Comparing corrected and uncorrected reconstructions is the fastest single diagnostic step in PET/CT troubleshooting. A finding that exists only on the corrected series is an attenuation correction artefact, not physiology.",
  },
  {
    type: "h2",
    id: "noise",
    text: "Noisy or Grainy Images",
    number: 2,
    body: "PET is a counting technique: image quality tracks the number of coincidence events collected, which depends on activity delivered, uptake time, acquisition duration and patient size.",
  },
  {
    type: "ul",
    items: [
      "Insufficient administered activity — verify the dispensed and residual activity, not the intended dose. Extravasation or a partial injection removes counts from the whole study.",
      "Decay between dispensing and injection — a delayed patient means less activity at injection, and therefore fewer counts.",
      "Acquisition time too short for patient habitus — larger patients attenuate more and need longer per bed position or a weight-based protocol.",
      "Uptake interval too short or inconsistent, which lowers lesion-to-background contrast as well as count statistics.",
      "Reconstruction settings mismatched to the acquisition — iteration count, filtering and matrix size chosen for a different protocol.",
      "Reduced detector sensitivity from failed or masked blocks, which shows as a system-wide count deficit on QC trends.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Weight-based protocols exist for a reason",
    text: "Applying a single fixed activity and a single fixed time per bed position to every patient produces excellent images in small patients and inadequate ones in large patients. Scaling activity or acquisition duration with body habitus is the most reliable way to standardise image quality.",
  },
  {
    type: "h2",
    id: "artefacts",
    text: "Artefacts and Their Origins",
    number: 3,
    body: "Most PET/CT artefacts have a characteristic appearance that points directly to a cause.",
  },
  {
    type: "table",
    headers: ["Appearance", "Likely cause", "Correction"],
    rows: [
      ["Intense focal activity at the injection site or along a vein", "Extravasation or partial injection", "Document, note reduced systemic activity, consider repeat scheduling"],
      ["Halo or banding at the diaphragm", "Respiratory mismatch between CT and PET", "Adjust breathing instruction; use a mid-expiration or averaged CT technique"],
      ["Photopenic regions adjacent to dense metal", "CT attenuation overcorrection around implants", "Compare with uncorrected images; use metal artefact reduction if available"],
      ["Streaks and dark bands in the CT component", "Metal, contrast bolus or patient motion in the CT pass", "Repeat CT, adjust arm position or contrast timing"],
      ["Apparent uptake outside the body contour", "Truncation from arms outside the CT field of view", "Reposition arms; apply truncation correction"],
      ["Ring or arc pattern", "Detector block failure or normalisation error", "Service investigation and re-normalisation"],
      ["Diffuse blurring of small lesions", "Patient motion or long uptake with poor immobilisation", "Immobilisation, shorter bed positions, motion correction if available"],
      ["Bladder or ureteric activity obscuring pelvic findings", "Excreted tracer without voiding or hydration", "Hydration and voiding protocol, delayed pelvic imaging"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Artefact pattern to cause",
    clinicalInterpretation: "If the artefact appears in the CT dataset, it will propagate into the attenuation-corrected PET. Fixing PET quality often means fixing the CT acquisition.",
    hospitalRecommendation: "Apply this as a documented departmental practice rather than as case-by-case judgement, and review it with medical physics and biomedical engineering at least annually.",
  },
  {
    type: "h2",
    id: "misregistration",
    text: "Misregistration and Attenuation Errors",
    number: 4,
    body: "PET and CT are acquired sequentially, so any movement between them introduces a spatial mismatch that the correction algorithm applies faithfully — and wrongly.",
  },
  {
    type: "ul",
    items: [
      "Respiratory mismatch is the most common source, particularly at the lung bases, liver dome and cardiac apex, and it can create or erase apparent lesions.",
      "Gross patient movement between passes shifts whole regions; check the fused overlay before reporting any borderline finding.",
      "Table sag or mechanical drift produces a systematic offset across all patients and is a service issue, verified with an alignment phantom.",
      "Arm position changes between CT and PET introduce both truncation and attenuation error.",
      "Contrast-enhanced CT used for attenuation correction can overestimate attenuation in vessels and the bowel, elevating apparent uptake locally.",
      "Cardiac and respiratory gating, where available, addresses physiological mismatch but does not compensate for gross patient movement.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Make overlay review part of reporting, not troubleshooting",
    text: "Sites that routinely inspect the fused overlay and the uncorrected series catch misregistration in the reporting session. Sites that only look when something seems odd catch it after the report has left the department.",
  },
  {
    type: "h2",
    id: "suv",
    text: "When SUV Values Look Wrong",
    number: 5,
    body: "SUV is a ratio of measured concentration to administered activity normalised by body size. Every term in that expression is a potential error source, and they should be checked in a fixed order.",
  },
  {
    type: "table",
    headers: ["Input", "Failure mode", "Verification"],
    rows: [
      ["Administered activity", "Residual activity in the syringe or line not subtracted; extravasation", "Recorded dispensed minus residual, injection site inspection"],
      ["Injection time", "Manually entered incorrectly; clock mismatch between hot lab and scanner", "Synchronise all clocks; audit entered times against records"],
      ["Dose calibrator accuracy", "Calibrator drift or wrong isotope setting", "Constancy checks and periodic accuracy testing"],
      ["Scanner cross-calibration", "Scanner and dose calibrator not cross-calibrated", "Scheduled cross-calibration with physics oversight"],
      ["Patient weight or height", "Estimated rather than measured; stale value reused", "Measure on the day and record"],
      ["Uptake interval", "Variation between patients or against prior studies", "Standardise and document the interval"],
      ["Attenuation correction quality", "Misregistration or contrast effects", "Compare corrected and uncorrected series"],
      ["Reconstruction settings", "Different algorithm or iterations from the prior study", "Harmonise reconstruction for serial comparison"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Serial comparison requires harmonisation, not just consistency",
    text: "Comparing SUV between studies is only valid when activity, uptake time, reconstruction and calibration are equivalent. Where response assessment matters clinically, adopt a harmonised reconstruction for follow-up and state it in the report.",
  },
  {
    type: "h2",
    id: "preparation",
    text: "Patient Preparation Failures",
    number: 6,
    body: "Preparation determines what the tracer distribution looks like before the scanner is involved at all, and it is the largest single lever on interpretable image quality.",
  },
  {
    type: "ul",
    items: [
      "Inadequate fasting or recent carbohydrate intake raises blood glucose and insulin, driving tracer into muscle and reducing lesion conspicuity.",
      "Uncontrolled hyperglycaemia produces studies that may be non-diagnostic; a documented glucose threshold and rescheduling rule prevents wasted dose.",
      "Recent exercise or muscular tension increases skeletal muscle uptake; a rested, warm uptake room reduces brown fat activation in cool climates.",
      "Cold exposure activates brown adipose tissue, producing symmetric supraclavicular and paravertebral uptake that can mimic disease.",
      "Recent chemotherapy, radiotherapy, surgery, biopsy or infection produces inflammatory uptake; timing rules must be defined and enforced at booking.",
      "Failure to void before acquisition leaves bladder activity that obscures pelvic structures.",
      "Cardiac and neurology protocols carry their own preparation rules — dietary preparation for cardiac viability, quiet environment for brain studies.",
    ],
  },
  {
    type: "h2",
    id: "workflow",
    text: "A Structured Triage Workflow",
    number: 7,
    body: "A short written workflow prevents both premature service calls and unnecessary patient recalls.",
  },
  {
    type: "ul",
    items: [
      "Step 1 — Establish scope: one patient, today's list, or a gradual trend. This selects the investigation path.",
      "Step 2 — Review daily QC and environmental logs before touching anything else.",
      "Step 3 — Inspect the CT dataset and the fused overlay; compare corrected with uncorrected PET.",
      "Step 4 — Audit the study record: dispensed and residual activity, injection time, uptake interval, weight, injection site.",
      "Step 5 — Check protocol conformity: acquisition time per bed position, reconstruction settings, patient positioning.",
      "Step 6 — Verify calibration chain: dose calibrator constancy, clock synchronisation, most recent cross-calibration.",
      "Step 7 — Escalate to service with evidence: phantom images, QC trends, alignment results and example datasets rather than a verbal description.",
      "Step 8 — Record the outcome so that recurring causes become visible and correctable at the process level.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "A lesion appears on the corrected images but not on the uncorrected series. What does that mean?",
        a: "It is very likely an attenuation correction artefact rather than a real finding — most often respiratory mismatch or a metal-related CT error. Inspect the fused overlay at that level, and where the finding is clinically important consider a repeat acquisition with adjusted breathing instructions.",
      },
      {
        q: "Why do SUVs on our system read consistently higher than at the referring centre?",
        a: "Systematic offsets usually come from the calibration chain or from reconstruction differences rather than from the detector. Verify dose calibrator accuracy, scanner cross-calibration and clock synchronisation first, then compare reconstruction parameters and uptake intervals between the two sites.",
      },
      {
        q: "How much does extravasation affect the study?",
        a: "Activity retained at the injection site never reaches the tissues being imaged, so counts fall across the whole study and quantitative values are underestimated. Document the event, record the estimated retained activity, and interpret quantitative values with caution or reschedule.",
      },
      {
        q: "Symmetric supraclavicular uptake keeps appearing. Is the scanner at fault?",
        a: "No — that pattern is characteristic of brown adipose tissue activation from cold exposure. Warming the uptake room and the patient, and controlling ambient temperature in the waiting area, resolves it far more effectively than any scanner adjustment.",
      },
      {
        q: "When should engineering be involved rather than the clinical team?",
        a: "When the problem affects every patient and the QC trend, alignment phantom or detector health indicators are abnormal; when a ring or arc artefact appears; or when environmental and calibration checks are clean and the deficit persists. Escalate with data attached, not with a description.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Need support with PET/CT image quality?",
    subheading:
      "AbuFarha Medical installs, commissions and supports PET/CT systems and works with nuclear medicine teams on protocol optimisation, QA programmes and fault investigation.",
    technology: "PET/CT Scanners",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Nuclear medicine imaging protocols" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "PET/CT installation, commissioning and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "EANM and IAEA procedure and quality assurance guidance, NEMA performance standards and manufacturer documentation",
    disclaimer:
      "Protocols, tolerances and preparation rules are platform- and indication-specific. Follow local clinical protocols, manufacturer documentation and the advice of a qualified medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Procedure and preparation guidance",
        items: [
          { label: "EANM procedure guidelines for tumour imaging with FDG PET/CT" },
          { label: "IAEA guidance on clinical PET/CT practice and quality assurance" },
        ],
      },
      {
        title: "Quantification and harmonisation",
        items: [
          { label: "EANM / EARL guidance on quantitative harmonisation and accreditation" },
          { label: "NEMA NU 2 — performance measurements of positron emission tomographs" },
        ],
      },
      {
        title: "Equipment and safety",
        items: [
          { label: "IEC 60601 series — safety and essential performance of medical electrical equipment" },
          { label: "Manufacturer quality control, alignment and reconstruction documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Establish first whether a problem affects one patient, one day or a trend — the paths diverge completely.",
      "Comparing attenuation-corrected with uncorrected images is the fastest way to identify correction artefacts.",
      "Most PET/CT artefacts originate in the CT dataset, patient motion or respiration rather than in the detector.",
      "SUV errors are usually input errors: activity, residual, injection time, clock, calibration, weight or uptake interval.",
      "Serial SUV comparison requires harmonised reconstruction, not merely a consistent operator.",
      "Preparation — fasting, glucose, rest, warmth, voiding and treatment timing — is the largest lever on interpretability.",
      "Escalate to service with QC trends, phantom results and example datasets rather than descriptions.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "PET/CT quality is a process outcome. The scanner contributes less variance than preparation, timing, positioning and the calibration chain.",
  },
  {
    type: "p",
    text: "Departments that troubleshoot in a fixed order — scope, QC, CT and overlay, study record, protocol, calibration — resolve most problems the same day and without a service visit. They also accumulate the evidence that makes genuine engineering faults easy to prove when they do occur.",
  },
];
