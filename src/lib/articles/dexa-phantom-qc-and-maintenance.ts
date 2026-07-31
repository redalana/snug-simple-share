/**
 * DEXA maintenance article — phantom QC and preventive maintenance.
 */

import type { ContentBlock, TocItem } from "../blog";

export const DEXA_QC_TOC: TocItem[] = [
  { id: "why", title: "Why Densitometry Quality Control Is Different" },
  { id: "daily", title: "Daily Phantom Quality Control" },
  { id: "charts", title: "Control Charts and Action Limits" },
  { id: "precision", title: "Operator Precision Assessment" },
  { id: "maintenance", title: "Preventive Maintenance Scope" },
  { id: "interventions", title: "After Service Interventions and Software Updates" },
  { id: "records", title: "Records and Governance" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DEXA_QC_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A bone densitometer's clinical output is a measurement, so quality control is not an assurance activity layered on top of the service — it is the thing that makes the service's results valid. A densitometer whose calibration has drifted still produces confident-looking numbers. Only phantom quality control reveals that they are no longer comparable with the values reported last year.",
      "The consequence of neglect is not an obvious breakdown. It is a slow loss of the ability to interpret follow-up scans, which is the primary clinical purpose of densitometry.",
      "This guide sets out the daily, periodic and event-driven quality control that a densitometry service requires, together with the preventive maintenance scope that supports it.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Rationale for measurement-based quality control, daily phantom procedure, control charting and action limits, operator precision assessment, preventive maintenance scope, post-service verification and governance records",
    audience:
      "Densitometry technologists, medical physicists, biomedical engineering teams, radiology managers, clinical governance leads",
    readingTime: "12 min read",
    technology: "Bone Densitometers (DEXA)",
  },
  {
    type: "h2",
    id: "why",
    text: "Why Densitometry Quality Control Is Different",
    number: 1,
  },
  {
    type: "p",
    text: "In most imaging modalities, degradation eventually becomes visible: images look noisier, artefacts appear, clinicians complain. In densitometry the output is a number, and a drifting number looks exactly like a valid one. The scan appears normal, the report generates normally, and the error only surfaces when a patient's follow-up shows change that did not happen — or hides change that did. Quality control is therefore the only mechanism that detects the failure mode that matters.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Drift is silent by design",
    text: "Nothing in normal clinical operation reveals calibration drift. That is the whole reason a daily phantom scan and a control chart are mandatory rather than advisory.",
  },
  {
    type: "h2",
    id: "daily",
    text: "Daily Phantom Quality Control",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Scan the manufacturer's calibration phantom at the start of each clinical day, before the first patient.",
      "Use the same phantom, the same positioning and the same protocol every time — the procedure's value depends on its invariance.",
      "Record the reported values and enter them on the control chart immediately rather than retrospectively.",
      "Compare the result against the established baseline mean and action limits.",
      "If the result falls outside limits, repeat once; if it remains outside, stop clinical scanning and escalate before scanning patients.",
      "Keep the phantom stored safely and inspect it periodically for damage, since a damaged phantom invalidates the entire quality control history.",
    ],
  },
  {
    type: "h2",
    id: "charts",
    text: "Control Charts and Action Limits",
    number: 3,
  },
  {
    type: "p",
    text: "A control chart plots daily phantom values against the baseline established at commissioning, with limits derived from the observed variability of that baseline series. Charts detect two distinct failure patterns: an abrupt shift, which usually follows a service intervention, software change or phantom problem; and a slow trend, which indicates progressive drift. Both invalidate comparison with historical patient results, but they require different investigation.",
  },
  {
    type: "table",
    headers: ["Chart pattern", "Likely cause", "Action"],
    rows: [
      ["Single outlier, repeat normal", "Positioning or procedural error", "Document; continue with attention to procedure"],
      ["Abrupt step change", "Service intervention, software change, phantom substitution", "Stop scanning; verify configuration and phantom identity; escalate"],
      ["Slow upward or downward trend", "Progressive calibration or detector drift", "Escalate to service; do not rely on follow-up comparisons until resolved"],
      ["Increasing scatter without a shift", "Mechanical repeatability or environmental instability", "Check room temperature stability and mechanical service state"],
      ["Values outside limits after a repair", "Incomplete recalibration", "Require baseline re-establishment before clinical use"],
    ],
    caption: "Interpreting densitometry control chart patterns and the corresponding response.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The chart is more informative than any single value. Departments that record results without plotting them lose the ability to see trends, which is the pattern that most threatens follow-up validity.",
    clinicalInterpretation:
      "Until a shift or trend is resolved, change measured in patients cannot be attributed to biology, so treatment decisions based on it should be deferred.",
    hospitalRecommendation:
      "Assign named responsibility for reviewing the chart weekly and require physics sign-off on any escalation and its resolution.",
  },
  {
    type: "h2",
    id: "precision",
    text: "Operator Precision Assessment",
    number: 4,
  },
  {
    type: "p",
    text: "Phantom quality control confirms the instrument is stable. It says nothing about how reproducibly a particular operator positions patients and places regions of interest — which is the dominant source of variability in real follow-up scans. A formal precision assessment, performed by each operator using the manufacturer's recommended repeat-scan methodology, produces the least significant change that the service uses to judge whether a patient's result has genuinely altered.",
  },
  {
    type: "ul",
    items: [
      "Perform a precision assessment for every operator during commissioning and for each new operator before independent practice.",
      "Repeat the assessment periodically and after any substantial change in practice or equipment.",
      "Derive and publish the service's least significant change per site and apply it in reporting.",
      "Where precision is poor, retrain on positioning and analysis before accepting the value as the service standard.",
    ],
  },
  {
    type: "h2",
    id: "maintenance",
    text: "Preventive Maintenance Scope",
    number: 5,
  },
  {
    type: "table",
    headers: ["Area", "Activity", "Purpose"],
    rows: [
      ["Mechanical", "Scanning arm travel, drive and table function inspection", "Protects mechanical repeatability and precision"],
      ["X-ray subsystem", "Output stability and safety checks", "Maintains measurement accuracy and dose consistency"],
      ["Detector chain", "Verification and calibration procedures", "Prevents progressive drift"],
      ["Electrical safety", "Periodic verification to applicable standards", "Regulatory and patient safety compliance"],
      ["Software and configuration", "Version, reference database and template verification", "Prevents silent reporting changes"],
      ["Quality control review", "Joint review of chart history with the department", "Detects trends that daily review may miss"],
    ],
    caption: "Preventive maintenance scope appropriate to a bone densitometry system.",
  },
  {
    type: "p",
    text: "AbuFarha Medical provides preventive maintenance for densitometry systems including calibration verification, mechanical inspection, electrical safety testing and joint quality control review, with technical support when phantom results move away from baseline.",
  },
  {
    type: "h2",
    id: "interventions",
    text: "After Service Interventions and Software Updates",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Perform a phantom scan immediately after any intervention affecting the measurement chain, before resuming clinical work.",
      "Where a shift is confirmed, establish a new baseline series and document the transition date in the quality control record.",
      "After software updates, verify the reference database version, analysis behaviour and reporting templates.",
      "Record in the patient's report where a baseline transition affects comparability with prior scans.",
      "Retain the pre-intervention baseline data; it is required to interpret historical results.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Document baseline transitions",
    text: "A documented baseline change lets a reporting clinician interpret an apparent step in a patient's series correctly. An undocumented one produces an unexplained clinical finding.",
  },
  {
    type: "h2",
    id: "records",
    text: "Records and Governance",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Retained control charts covering the whole service history, not only the current year.",
      "Documented baseline series, action limits and every baseline transition with its cause.",
      "Operator precision assessments with derived least significant change values.",
      "Preventive maintenance and repair records, including configuration verification.",
      "Reference database and software version history.",
      "A written escalation procedure specifying who stops scanning and who authorises resumption.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "How often must the phantom be scanned?",
        a: "At the start of each clinical day, and additionally after any intervention affecting the measurement chain.",
      },
      {
        q: "What if the phantom result is outside limits?",
        a: "Repeat once. If it remains outside, clinical scanning should stop until the cause is identified, because patient measurements cannot be trusted for comparison.",
      },
      {
        q: "Is operator precision assessment really necessary?",
        a: "Yes. Without it there is no defensible least significant change, so follow-up scans cannot be interpreted as showing real change.",
      },
      {
        q: "Can quality control history be discarded after a system replacement?",
        a: "No. Historical baselines and charts are needed to interpret prior patient results and to support cross-calibration.",
      },
      {
        q: "Do software updates require verification?",
        a: "Always. Updates can alter reference data, analysis behaviour or reporting templates, all of which change reported values without any physical change to the system.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Calibration drift in densitometry is silent — only phantom quality control detects it.",
      "Daily phantom scans must be plotted on a control chart with defined action limits.",
      "Operator precision assessment produces the least significant change used in follow-up reporting.",
      "Any service intervention or software update requires phantom verification before clinical use.",
      "Quality control records, baselines and transitions must be retained for the service's lifetime.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
  },
  {
    type: "p",
    text: "Densitometry quality control is inexpensive, quick and entirely determines whether the service's numbers mean anything over time. A department that scans a phantom every morning, charts the result, knows its own precision and documents every baseline transition can defend every measurement it reports.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Quality assurance guidance",
        items: [
          { label: "International Atomic Energy Agency — bone densitometry quality assurance", url: "https://www.iaea.org/" },
          { label: "American Association of Physicists in Medicine — densitometry QC and precision reports", url: "https://www.aapm.org/" },
        ],
      },
      {
        title: "Clinical practice",
        items: [
          { label: "International Osteoporosis Foundation — densitometry service resources", url: "https://www.osteoporosis.foundation/" },
        ],
      },
    ],
    note: "Phantom procedures, action limits and precision methodology must follow the installed system's documentation and applicable national guidance.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Densitometry service quality practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Densitometry calibration and preventive maintenance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Quality assurance and field service practice synthesis",
    disclaimer:
      "Educational guidance on densitometry quality control. It does not replace manufacturer documentation or medical physics assessment.",
  },
];
