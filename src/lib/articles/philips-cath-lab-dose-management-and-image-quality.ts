/**
 * Philips cath lab dose management and image quality — Philips cluster (troubleshooting/safety).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PHILIPS_DOSE_QUALITY_TOC: TocItem[] = [
  { id: "overview", title: "Overview: Dose and Image Quality Are One System" },
  { id: "chain", title: "Where Dose Is Determined in an Allura Xper Room" },
  { id: "operator", title: "Operator Controls That Change Dose Immediately" },
  { id: "protocols", title: "Protocol Discipline and Preset Management" },
  { id: "monitoring", title: "Dose Monitoring and Reporting" },
  { id: "drift", title: "Diagnosing Image Quality Drift" },
  { id: "programme", title: "Building a Dose Management Programme" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PHILIPS_DOSE_QUALITY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "In interventional imaging, dose and image quality are not competing objectives to be traded against each other case by case. They are two readings of the same system state. A Philips Allura Xper room that is correctly configured, correctly maintained and correctly operated delivers diagnostic images at the lowest dose it is capable of; a room that drifts delivers either poorer images, higher dose, or both.",
      "Interventional procedures carry the highest patient doses in diagnostic imaging and expose staff repeatedly over a career. That makes dose management a permanent operational programme rather than an annual audit exercise.",
      "This guide explains where dose is determined in an Allura Xper cath lab, which controls change it immediately, how to monitor it credibly, and how to investigate image-quality drift without guesswork.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Dose determinants in the interventional imaging chain, operator-controlled factors, acquisition protocol governance, dose monitoring and reporting, structured investigation of image-quality drift, and programme design",
    audience:
      "Interventional cardiologists and radiologists, radiographers, medical physicists, biomedical engineering teams, cath lab managers",
    readingTime: "13 min read",
    technology: "Cath Lab Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Overview: Dose and Image Quality Are One System",
    number: 1,
    body: "The same chain produces both numbers.",
  },
  {
    type: "p",
    text: "Every image in an interventional room is the result of a chain: generator output, filtration, collimation, patient attenuation, detector entrance dose, automatic exposure control response, and image processing. Dose is what enters the patient; image quality is what leaves the detector. Because both depend on the same components, a change in one is nearly always a change in the other. Departments that treat dose as a compliance metric and image quality as a clinical opinion lose the ability to interpret either.",
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Rising dose with unchanged images is a warning",
    text: "If reference air kerma rates increase while image appearance stays the same, the automatic exposure control is compensating for degradation somewhere in the chain. That is a maintenance finding, not a normal variation.",
  },
  {
    type: "h2",
    id: "chain",
    text: "Where Dose Is Determined in an Allura Xper Room",
    number: 2,
    body: "Fixed, configured and operator-controlled factors.",
  },
  {
    type: "table",
    headers: ["Factor", "Type", "Effect on dose"],
    rows: [
      ["Generator and tube condition", "Fixed by maintenance state", "Degradation raises required output for the same image"],
      ["Added filtration", "Configured", "Spectral shaping reduces skin dose"],
      ["Acquisition protocol presets", "Configured", "Frame rate, pulse width and dose level per mode"],
      ["Detector calibration state", "Maintenance-dependent", "Poor calibration increases required entrance dose"],
      ["Field size and collimation", "Operator", "Direct, immediate reduction in dose-area product"],
      ["Frame rate and fluoroscopy mode", "Operator", "Among the largest single dose levers available"],
      ["Source-to-image distance and patient position", "Operator", "Inverse-square effects are substantial"],
      ["Angulation and patient thickness", "Case-dependent", "Steep angulation through thick anatomy raises dose sharply"],
    ],
    caption: "Dose determinants in an interventional angiography room, grouped by who controls them.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Operator-controlled factors usually offer larger short-term reductions than any equipment change, but they only remain effective if the maintenance state of the chain is sound.",
    clinicalInterpretation:
      "Skin dose concentration in long procedures depends heavily on angulation discipline; varying the beam entry point spreads exposure rather than concentrating it.",
    hospitalRecommendation:
      "Audit frame rate and collimation practice before investing in equipment changes, then verify the chain's maintenance state with constancy testing.",
  },
  {
    type: "h2",
    id: "operator",
    text: "Operator Controls That Change Dose Immediately",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Select the lowest fluoroscopy dose mode adequate for the task, and reserve high modes for the moments that require them.",
      "Reduce frame rate wherever anatomy and device motion allow.",
      "Collimate tightly; unnecessary field size increases both patient dose and scatter to staff.",
      "Keep the detector as close to the patient as possible and avoid unnecessary magnification.",
      "Use last-image-hold and stored fluoroscopy replay instead of repeat exposures for discussion.",
      "Vary angulation during long procedures to avoid concentrating skin dose at one entry point.",
      "Use ceiling-suspended shields and table skirts consistently; staff dose is dominated by scatter geometry.",
    ],
  },
  {
    type: "h2",
    id: "protocols",
    text: "Protocol Discipline and Preset Management",
    number: 4,
    body: "Presets are clinical governance, not engineer settings.",
  },
  {
    type: "p",
    text: "Acquisition protocols define the default dose and image quality of every case performed in the room. When individual operators modify presets informally, the department loses both comparability and control. A governed approach assigns ownership of the protocol set jointly to the clinical lead and the medical physicist, records every change with a date and a reason, and reviews the set at least annually against dose audit data.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Back up the protocol configuration",
    text: "Configuration should be exported and stored after every approved change. Rebuilding a protocol set from memory after a service intervention is a silent source of dose and image-quality inconsistency.",
  },
  {
    type: "h2",
    id: "monitoring",
    text: "Dose Monitoring and Reporting",
    number: 5,
    body: "Recorded dose is only useful when it is reviewed.",
  },
  {
    type: "ul",
    items: [
      "Record dose-area product and, where available, cumulative air kerma at the reference point for every procedure.",
      "Set and use trigger levels for procedures that exceed a defined skin dose threshold, with documented patient follow-up.",
      "Review dose distributions by procedure type and by operator at least quarterly, with the physicist present.",
      "Compare local values against published reference levels for the same procedure categories.",
      "Feed audit findings back into protocol review and training rather than filing them.",
      "Maintain staff dosimetry review alongside patient dose audit; the two tell related stories.",
    ],
  },
  {
    type: "h2",
    id: "drift",
    text: "Diagnosing Image Quality Drift",
    number: 6,
    body: "A structured investigation, in order.",
  },
  {
    type: "ul",
    items: [
      "Capture and store an example image demonstrating the problem, with the acquisition parameters visible.",
      "Establish whether the change affects one mode, one plane, one angulation range, or everything.",
      "Rule out display and viewing conditions first: monitor calibration, ambient light and reading workstation settings.",
      "Compare current constancy test values with commissioning baselines — resolution, low-contrast detectability, uniformity and dose rate.",
      "Check whether the protocol configuration has changed since the last known-good state.",
      "Review system logs for detector calibration errors, tube arcing and cooling events.",
      "Escalate to technical support with the stored image, parameters, constancy data and log extract — not with a verbal description.",
    ],
  },
  {
    type: "p",
    text: "This order matters because display problems and protocol changes are common, cheap and quick to exclude, whereas detector or tube investigations are expensive and slow. Departments that escalate before checking the first two steps routinely pay for visits that find nothing.",
  },
  {
    type: "h2",
    id: "programme",
    text: "Building a Dose Management Programme",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Named clinical owner and named physics owner, with defined responsibilities.",
      "Documented acquisition protocol set with version control and change log.",
      "Commissioning baselines and a constancy testing schedule integrated with preventive maintenance visits.",
      "Quarterly dose audit reviewed by the clinical governance route, not only by physics.",
      "Annual refresher training on dose-management practice for all operators, including new staff induction.",
      "A written escalation route for image-quality concerns with a defined response expectation.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Does reducing dose always reduce image quality?",
        a: "No. Substantial reductions are usually available through collimation, frame rate, geometry and protocol selection with no loss of diagnostic information. Quality is only compromised when dose falls below what the task requires.",
      },
      {
        q: "What is the single most effective operator action?",
        a: "Reducing fluoroscopy frame rate and collimating tightly. Both are immediate, free and apply to every case.",
      },
      {
        q: "How often should acquisition protocols be reviewed?",
        a: "At least annually, and after any service intervention that could alter configuration, with the physicist and clinical lead jointly approving changes.",
      },
      {
        q: "Who should investigate an image-quality complaint first?",
        a: "The department itself, following a fixed checklist covering display, protocol state and recent constancy results, before technical support is called.",
      },
      {
        q: "Is staff dose managed the same way as patient dose?",
        a: "It shares the same determinants but adds geometry and shielding discipline. Scatter is driven by patient dose, so patient-dose reduction is also the primary staff-protection measure.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Dose and image quality are two readings of one system state, not a trade-off to be improvised per case.",
      "Operator-controlled factors — frame rate, collimation, geometry — offer the largest immediate reductions.",
      "Acquisition protocols require formal ownership, version control and annual review.",
      "Dose audit is only valuable when it feeds protocol review and training.",
      "Image-quality drift should be investigated in a fixed order, starting with display and protocol state.",
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
    text: "A Philips Allura Xper room managed with governed protocols, documented baselines, routine dose audit and disciplined operating practice delivers consistent images at defensible dose for its whole service life. AbuFarha Medical supports that outcome through commissioning baselines, preventive maintenance with constancy testing, clinical applications training and technical support when performance deviates.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Radiation protection",
        items: [
          { label: "International Atomic Energy Agency — radiation protection of patients in interventional procedures", url: "https://www.iaea.org/" },
          { label: "International Commission on Radiological Protection — interventional procedure guidance", url: "https://www.icrp.org/" },
        ],
      },
      {
        title: "Quality control and physics",
        items: [
          { label: "American Association of Physicists in Medicine — interventional fluoroscopy quality control", url: "https://www.aapm.org/" },
          { label: "International Electrotechnical Commission — dose reporting and equipment standards", url: "https://www.iec.ch/" },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          { label: "Philips — Allura Xper dose management and system documentation", url: "https://www.philips.com/healthcare" },
        ],
      },
    ],
    note: "Dose-management features and reference values must be confirmed against the specific system's documentation and against national diagnostic reference levels.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Interventional radiation safety and imaging practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Interventional imaging service and constancy testing" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Radiation protection guidance and field service practice synthesis",
    disclaimer:
      "Educational guidance on dose and image-quality management. It does not replace manufacturer documentation, medical physics assessment or regulatory requirements.",
  },
];
