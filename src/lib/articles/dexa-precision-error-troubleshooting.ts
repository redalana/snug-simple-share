/**
 * Bone Densitometers (DEXA) cluster — "DEXA Precision Error Troubleshooting"
 */

import type { ContentBlock, TocItem } from "../blog";

export const DEXA_PRECISION_TROUBLESHOOTING_TOC: TocItem[] = [
  { id: "precision-basics", title: "Precision, Accuracy and Why They Are Different" },
  { id: "sources", title: "Sources of Precision Error" },
  { id: "positioning", title: "Positioning-Related Errors" },
  { id: "analysis", title: "Analysis and Region-of-Interest Errors" },
  { id: "instrument", title: "Instrument-Related Errors" },
  { id: "diagnosis", title: "A Structured Troubleshooting Approach" },
  { id: "prevention", title: "Preventing Recurrence" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DEXA_PRECISION_TROUBLESHOOTING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "When a follow-up densitometry scan shows an unexpected change, the first question is not whether the patient's bone density has genuinely altered, but whether the result is even comparable with the baseline. Precision error — variation in the measurement that has nothing to do with true biological change — can come from the patient, the operator or the instrument, and each source requires a different diagnostic approach. AbuFarha Medical's biomedical engineering support for densitometry systems includes helping departments distinguish instrument-related precision problems from operator or protocol issues.",
      "Precision error is distinct from a hard equipment fault. A system can be functioning entirely within specification and still produce results that are unreliable for follow-up comparison, because the largest contributors to precision error in practice are positioning and analysis consistency rather than the instrument itself.",
      "This guide sets out where precision error originates, how to work through a structured troubleshooting process when an unexpected result appears, and how to prevent recurrence.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "The distinction between precision and accuracy, sources of precision error across patient positioning, analysis and instrument factors, a structured troubleshooting sequence, and preventive measures",
    audience:
      "Densitometry technologists, medical physicists, biomedical engineering teams, radiologists reviewing unexpected serial results",
    readingTime: "12 min read",
    technology: "Bone Densitometers (DEXA)",
  },
  {
    type: "h2",
    id: "precision-basics",
    text: "Precision, Accuracy and Why They Are Different",
    number: 1,
  },
  {
    type: "p",
    text: "Accuracy describes how close a measurement is to the true value; precision describes how reproducible repeated measurements of the same unchanged quantity are. A densitometer can be accurately calibrated and still produce imprecise serial results if positioning or analysis varies between scans. Precision, expressed as the least significant change from a formal operator precision assessment, is the figure against which any apparent change in a patient's follow-up scan must be judged. An unexpected result should therefore first be checked against this figure before it is interpreted clinically at all.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "An accurate system can still be imprecise",
    text: "Daily phantom quality control confirms instrument accuracy and stability. It does not confirm that a particular operator's positioning and analysis technique are reproducible enough for reliable patient follow-up — that requires a separate precision assessment.",
  },
  {
    type: "h2",
    id: "sources",
    text: "Sources of Precision Error",
    number: 2,
  },
  {
    type: "table",
    headers: ["Source category", "Typical contribution", "Detectability"],
    rows: [
      ["Patient positioning", "Usually the largest contributor to overall precision error", "Visible on comparison of scan images against baseline positioning"],
      ["Region-of-interest and analysis placement", "Second largest contributor in most services", "Visible on comparison of analysis overlay against baseline"],
      ["Patient-related factors (movement, body habitus change, clothing artefact)", "Variable, sometimes substantial", "Often visible on image review"],
      ["Instrument calibration drift", "Should be near zero if daily quality control is followed", "Detected through phantom control chart, not through a single patient scan"],
      ["Software or reference configuration change", "Can be substantial if undocumented", "Detected by comparing scores before and after a known software update"],
    ],
    caption: "Relative contribution and detectability of common precision error sources in densitometry.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Positioning and analysis are operator-controlled and are the sources most amenable to correction through training and protocol discipline, unlike instrument drift, which requires engineering intervention.",
    clinicalInterpretation:
      "An unexpected serial change should prompt image and analysis comparison against the baseline before any clinical significance is attributed to it.",
    hospitalRecommendation:
      "Build a standard troubleshooting checklist into the reporting workflow so that unexpected results are investigated systematically rather than reported and explained after the fact.",
  },
  {
    type: "h2",
    id: "positioning",
    text: "Positioning-Related Errors",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Rotation or tilt of the spine or hip relative to the baseline scan changes the projected area and the reported density.",
      "Inconsistent limb rotation at the hip, particularly internal rotation angle, is a well-recognised source of variability between scans.",
      "Incomplete inclusion of the region of interest within the scan field invalidates the comparison.",
      "Failure to use the manufacturer's standard positioning aids consistently introduces avoidable variation.",
      "Patient movement during acquisition produces motion artefact that can affect the measured region.",
    ],
  },
  {
    type: "h2",
    id: "analysis",
    text: "Analysis and Region-of-Interest Errors",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Manual adjustment of vertebral level boundaries that does not match the baseline scan's boundaries.",
      "Inclusion or exclusion of a vertebral level in the follow-up analysis that was treated differently at baseline, without documenting the reason.",
      "Failure to use the software's comparison or matching function where the system provides one.",
      "Incorrect identification of the femoral neck box placement relative to the baseline scan.",
      "Analysis performed by an operator without documented training in the department's positioning and analysis protocol.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Use the comparison function deliberately",
    text: "Where the analysis software offers a function to copy or match region-of-interest placement from a prior scan, use it as standard practice for follow-up examinations rather than reserving it for cases that already look unusual.",
  },
  {
    type: "h2",
    id: "instrument",
    text: "Instrument-Related Errors",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Calibration drift, which should be visible on the daily phantom control chart before it appears in a patient result.",
      "Mechanical wear affecting scanning arm repeatability, which typically manifests as increasing scatter in phantom results rather than a clean shift.",
      "Detector performance degradation, usually progressive and detectable through periodic engineering verification.",
      "Undocumented software or reference database changes following an update, which can shift reported scores without any physical change to the system.",
      "Use of a different system for the follow-up scan without cross-calibration against the baseline system.",
    ],
  },
  {
    type: "h2",
    id: "diagnosis",
    text: "A Structured Troubleshooting Approach",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Check the phantom control chart for the relevant period first — an instrument-level shift will be visible there independent of any single patient result.",
      "Compare the current scan's image and positioning directly against the baseline scan, looking for rotation, tilt or field-of-view differences.",
      "Compare the region-of-interest and analysis overlay between the two scans for placement differences.",
      "Confirm whether the same system was used for both scans, and if not, whether cross-calibration has been applied.",
      "Check whether any software update or configuration change occurred between the two scan dates.",
      "If all instrument and analysis factors are ruled out, and the change exceeds the service's documented least significant change, treat it as a candidate for genuine biological change subject to clinical correlation.",
    ],
  },
  {
    type: "h2",
    id: "prevention",
    text: "Preventing Recurrence",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Maintain a documented, standard positioning protocol and require adherence for every scan, not only follow-up examinations.",
      "Use the software's baseline-matching analysis function as routine practice for serial scans.",
      "Repeat operator precision assessment periodically and after any change in staffing or major protocol update.",
      "Escalate phantom control chart trends promptly rather than waiting for a patient result to reveal a problem.",
      "Document every software update and configuration change with its date, and verify scores are unaffected through a phantom check immediately afterward.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical's biomedical engineering team supports densitometry services in distinguishing instrument-related precision issues from operator or protocol factors, verifying calibration through phantom analysis and providing engineering intervention where the cause is mechanical or electronic rather than procedural.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How do I know if an unexpected result is instrument-related or operator-related?",
        a: "Check the phantom control chart first. An instrument-level problem will show as a shift or trend there, independent of any single patient scan; if the chart is stable, the cause is more likely positioning or analysis.",
      },
      {
        q: "Can a single unusual patient result indicate a calibration problem?",
        a: "It can prompt investigation, but calibration problems are more reliably identified through the phantom control chart than inferred from a single patient's serial change.",
      },
      {
        q: "What is the most common cause of apparent but false change on follow-up?",
        a: "Positioning differences between the baseline and follow-up scan, followed closely by inconsistent region-of-interest placement during analysis.",
      },
      {
        q: "Does a software update always require a new precision assessment?",
        a: "Not always a full new assessment, but a phantom verification is required after every update, and a new precision assessment should follow if analysis behaviour has changed.",
      },
      {
        q: "How is genuine biological change distinguished from precision error?",
        a: "By ruling out instrument, positioning and analysis factors first, and comparing the observed change against the service's documented least significant change from formal precision assessment.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Precision error can originate from the patient, the operator or the instrument, and each requires a different troubleshooting approach.",
      "Positioning and region-of-interest analysis consistency are the largest contributors to precision error in most services.",
      "The phantom control chart, not a single patient scan, is the correct first check for instrument-level problems.",
      "An unexpected serial result should be compared image-for-image against the baseline before clinical significance is assigned.",
      "Consistent protocol adherence and periodic precision reassessment prevent recurrence of avoidable precision error.",
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
    text: "Precision error troubleshooting is a structured, evidence-based process that separates true biological change from artefact of positioning, analysis or instrument variation. Services that apply this process consistently protect the clinical value of every follow-up scan they perform.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Physics and quality assurance",
        items: [
          { label: "American Association of Physicists in Medicine — densitometry precision assessment reports", url: "https://www.aapm.org/" },
          { label: "International Atomic Energy Agency — bone densitometry quality assurance", url: "https://www.iaea.org/" },
        ],
      },
      {
        title: "Clinical practice",
        items: [
          { label: "International Osteoporosis Foundation — densitometry practice resources", url: "https://www.osteoporosis.foundation/" },
        ],
      },
    ],
    note: "Troubleshooting procedures must follow the installed system's service documentation and be conducted alongside qualified medical physics support.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Densitometry reporting and quality practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Densitometry calibration and precision troubleshooting" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Quality assurance and field engineering practice synthesis",
    disclaimer:
      "Educational guidance on densitometry precision troubleshooting. It does not replace manufacturer service documentation or medical physics assessment.",
  },
];
