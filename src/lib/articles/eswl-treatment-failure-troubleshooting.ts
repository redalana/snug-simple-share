/**
 * Lithotripsy Systems cluster — "ESWL Treatment Failure Troubleshooting: A Structured Approach"
 */

import type { ContentBlock, TocItem } from "../blog";

export const ESWL_TREATMENT_TROUBLESHOOTING_TOC: TocItem[] = [
  { id: "distinction", title: "Clinical Outcome Versus Equipment Fault: Two Different Problems" },
  { id: "categories", title: "Categories of Suspected Treatment Failure" },
  { id: "localisation", title: "Localisation and Targeting Issues" },
  { id: "output", title: "Output and Generation Source Issues" },
  { id: "coupling", title: "Coupling and Mechanical Issues" },
  { id: "workflow", title: "Escalation and Diagnostic Workflow" },
  { id: "prevention", title: "Reducing Recurrence Through Documentation" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ESWL_TREATMENT_TROUBLESHOOTING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "When a lithotripsy session does not achieve the expected fragmentation, the first and most important question is whether the cause is clinical or technical — and answering that question requires a structured process, not a guess. AbuFarha Medical provides biomedical engineering support for installed lithotripsy systems, including Richard Wolf Piezolith platforms, and is frequently called in specifically to help a clinical team distinguish a genuine equipment fault from a case that was always going to be clinically difficult, such as a particularly hard or awkwardly positioned stone.",
      "Troubleshooting a suspected treatment failure on a lithotripter is different from troubleshooting a simple equipment fault, because the system can be functioning entirely within specification while still producing a poor clinical result for reasons unrelated to the machine — stone composition, position, patient body habitus, or respiratory movement, among others. A sound troubleshooting process therefore starts by separating equipment-attributable causes from case-attributable ones, and only then investigates the equipment side systematically.",
      "This guide sets out a structured approach to investigating suspected treatment failure, covering localisation, generation output and coupling mechanics, and how to escalate appropriately when the cause is not immediately apparent.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Structured troubleshooting of suspected ESWL treatment failure, distinguishing clinical from equipment-attributable causes, localisation, output and coupling issues, and escalation workflow",
    audience:
      "Urologists, radiographers and sonographers, biomedical engineering teams, clinical engineering managers",
    readingTime: "12 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "distinction",
    text: "Clinical Outcome Versus Equipment Fault: Two Different Problems",
    number: 1,
    body: "A poor treatment outcome does not, by itself, indicate an equipment problem.",
  },
  {
    type: "p",
    text: "Stone composition varies substantially in how it responds to shock wave energy, and some compositions are known clinically to be more resistant to fragmentation regardless of equipment condition. Stone position, patient body habitus affecting skin-to-stone distance, and respiratory movement during treatment can all reduce delivered effective energy at the target even when the generation source, localisation system and coupling are all performing exactly as specified. Before any equipment investigation begins, the clinical team should document the case factors that might independently explain a poor result, since this both informs the subsequent clinical decision and helps the engineering investigation focus correctly if a technical cause is still suspected.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Start with the case record, not the machine",
    text: "A brief structured review of stone characteristics, positioning difficulty and session notes, completed before calling engineering support, often resolves the question of clinical versus technical cause on its own.",
  },
  {
    type: "h2",
    id: "categories",
    text: "Categories of Suspected Treatment Failure",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Repeated failure to fragment a stone that clinical judgement would expect to respond, across more than one session, suggesting a possible systematic technical cause rather than case difficulty alone.",
      "A sudden change in apparent effectiveness compared with the system's recent typical performance, suggesting a possible equipment change rather than case mix.",
      "Difficulty maintaining stable localisation or tracking of the stone throughout the session, which may be a technique, patient or equipment issue.",
      "Reports from the treating clinician of unusual sound, vibration or visible irregularity during shock wave delivery, which should always prompt an engineering check regardless of clinical outcome.",
      "A pattern noticed only in retrospect across multiple patients and sessions, which is best identified through routine outcome and utilisation review rather than a single case in isolation.",
    ],
  },
  {
    type: "h2",
    id: "localisation",
    text: "Localisation and Targeting Issues",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Confirm imaging quality first: a stone that is poorly visualised cannot be reliably targeted regardless of generation source condition, and image quality issues should be ruled out before any assumption about the shock wave path itself.",
      "Check that localisation and treatment coordinate systems remain correctly aligned, since a calibration drift between the imaging reference and the focal point produces exactly the symptom of shock waves appearing to miss an apparently well-visualised stone.",
      "Review whether respiratory or patient movement compensation, where the system provides it, was used and functioning correctly during the session.",
      "Consider whether the specific focal geometry of the installed system leaves less tolerance for small localisation error, which is a known characteristic of tighter-focus generation principles rather than necessarily a fault.",
    ],
  },
  {
    type: "h2",
    id: "output",
    text: "Output and Generation Source Issues",
    number: 4,
  },
  {
    type: "table",
    headers: ["Suspected cause", "Investigation step"],
    rows: [
      ["Electrode wear (electrohydraulic systems)", "Check cumulative discharge count against the manufacturer's rated service life; inspect and test electrode condition."],
      ["Generation source degradation (electromagnetic or piezoelectric)", "Check cumulative impulse count and schedule an output verification test against the manufacturer's acceptance criteria."],
      ["Energy or pulse rate setting used during the session", "Review the treatment log for the settings actually applied, since operator-selected parameters affect delivered energy independently of equipment condition."],
      ["Power supply irregularity", "Check for recorded electrical supply events and verify supply stability against the manufacturer's specification."],
      ["Software or calibration fault", "Review error logs and confirm the system's current calibration status against its last verified commissioning or service record."],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Output-related causes are almost always traceable through logged discharge or impulse count and service history, provided that record has been kept consistently — which is the strongest practical argument for disciplined maintenance logging.",
    clinicalInterpretation:
      "A clinician cannot distinguish an output problem from a difficult case by observation alone; the treatment log and service record are what make the distinction possible.",
    hospitalRecommendation:
      "Require that every treatment session logs energy settings, pulse count and any operator-observed irregularity, so that a subsequent investigation has a complete record to work from.",
  },
  {
    type: "h2",
    id: "coupling",
    text: "Coupling and Mechanical Issues",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Inspect the coupling cushion or water interface for air bubbles, damage or degradation, since even a small air gap at the coupling surface can materially reduce transmitted energy.",
      "Confirm coupling gel or medium was applied correctly and in sufficient quantity according to the manufacturer's technique guidance.",
      "Check mechanical positioning accuracy of the table and gantry, including drive mechanism calibration, since a small positioning drift compounds with any localisation tolerance issue.",
      "Verify water quality and temperature within the coupling reservoir, where applicable, against the manufacturer's specified range.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "An air gap is easy to miss and easy to cause",
    text: "A trapped air bubble at the coupling interface is one of the most common preventable causes of reduced treatment effectiveness, and is often invisible to the operator during a routine session unless specifically checked.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "Escalation and Diagnostic Workflow",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Document the specific case and session details immediately, while details are fresh, including settings used, any observed irregularity, and the clinical assessment of case difficulty.",
      "Rule out coupling and technique factors first, since these are the fastest to check and the most common preventable cause.",
      "Escalate to biomedical engineering with the treatment log and service history if a technical cause remains plausible after the initial clinical and coupling review.",
      "Biomedical engineering should then perform output verification, localisation calibration checks, and a review of recent service and discharge records before concluding whether an equipment fault contributed.",
      "Where an equipment fault is confirmed, document the finding, the corrective action taken, and re-verify output before the system returns to clinical use.",
    ],
  },
  {
    type: "h2",
    id: "prevention",
    text: "Reducing Recurrence Through Documentation",
    number: 7,
  },
  {
    type: "p",
    text: "A single suspected treatment failure is often inconclusive on its own; the value of structured documentation becomes clear over a run of cases, where a pattern that would not be visible from any single session can point clearly toward a systematic cause. Departments that log session settings, case characteristics and any observed irregularity consistently are able to identify and correct systematic issues — whether clinical, technique-related or equipment-related — far more quickly than departments that rely on individual clinicians' recollection after the fact.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Pattern recognition needs a record to recognise against",
    text: "A technical cause of reduced effectiveness is usually identified not from one unusual case but from a documented pattern across several, which is only visible if session data has been consistently recorded.",
  },
  {
    type: "p",
    text: "AbuFarha Medical's biomedical engineering team supports hospitals in investigating suspected treatment failures, reviewing service and discharge history alongside session-level treatment logs to determine whether a technical cause contributed, and carrying out output verification and corrective service where required.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How do we know if a poor result is clinical or equipment-related?",
        a: "Start by documenting stone characteristics, position and session notes to rule out plausible clinical explanations, then check coupling and technique factors, and only escalate to a full equipment investigation, including output verification, if a technical cause remains plausible.",
      },
      {
        q: "What is the single most common preventable technical cause of reduced effectiveness?",
        a: "A trapped air gap at the coupling interface between the applicator and the patient, which reduces transmitted energy and is often invisible to the operator unless specifically checked during the session.",
      },
      {
        q: "Should every disappointing session trigger an engineering call-out?",
        a: "Not necessarily. A single case with plausible clinical explanations for reduced effectiveness does not automatically indicate an equipment fault, but repeated or unexplained cases, or any unusual sound or vibration reported during treatment, should always prompt an engineering review.",
      },
      {
        q: "What records does biomedical engineering need to investigate a suspected fault?",
        a: "The treatment session log, including settings used and any observed irregularity, together with the system's service history and cumulative discharge or impulse count, which together allow output-related causes to be distinguished from case-related ones.",
      },
      {
        q: "Can a tight focal volume itself cause apparent treatment failures?",
        a: "It can increase sensitivity to small localisation error or patient movement, which is a known characteristic of some generation and focusing designs rather than a fault, though it should still be checked as part of a full investigation.",
      },
      {
        q: "What should happen after an equipment fault is confirmed and corrected?",
        a: "The finding and the corrective action taken should be documented, and output should be re-verified against the manufacturer's acceptance criteria before the system returns to clinical use.",
      },
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
    text: "Investigating a suspected treatment failure on a lithotripsy system requires separating clinical case factors from equipment-attributable ones before any technical investigation begins, and then working systematically through localisation, output and coupling in that order. Consistent session documentation and service record-keeping are what make that process possible, and what allow a genuine systematic cause to be identified and corrected quickly rather than debated case by case.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy fault investigation and service practice" },
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Urology treatment service practice" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer technical documentation and field engineering troubleshooting synthesis",
    disclaimer:
      "Educational troubleshooting guidance. It does not replace manufacturer service documentation or individual clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer technical and troubleshooting documentation for lithotripsy systems." },
      { label: "AbuFarha Biomedical Engineering fault investigation and service records." },
      { label: "Institutional clinical engineering guidance on structured medical device fault investigation." },
    ],
  },
];
