/**
 * Operating Room cluster — "Operating Room Equipment Fault Troubleshooting"
 */

import type { ContentBlock, TocItem } from "../blog";

export const OR_FAULT_TROUBLESHOOTING_TOC: TocItem[] = [
  { id: "principle", title: "First Principle: Patient Safety Before Diagnosis" },
  { id: "triage", title: "Triage: Deciding Whether to Continue, Substitute or Abort" },
  { id: "categories", title: "Common Fault Categories and First Checks" },
  { id: "escalation", title: "Escalation and When to Call for Support" },
  { id: "documentation", title: "Documenting a Fault for Effective Repair" },
  { id: "prevention", title: "Reducing Recurrence After the Fault Is Resolved" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const OR_FAULT_TROUBLESHOOTING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A fault on operating room equipment during a case demands a different response from a fault discovered during routine checks: the first decision is about patient safety and case continuity, not root cause. AbuFarha Medical provides technical support and biomedical engineering service for the operating room equipment it supplies, including fault diagnosis, repair and the escalation route theatre staff use when a fault occurs.",
      "Theatre teams are not expected to repair equipment; they are expected to recognise a fault promptly, make a safe decision about the case in progress, and communicate the fault accurately to the engineering team that will diagnose and resolve it. Confusing these responsibilities — clinical staff attempting deep diagnosis, or engineering being called without the information needed to respond effectively — slows resolution in both directions.",
      "This guide sets out how to triage an equipment fault during a case, first checks for common fault categories, when and how to escalate, and the documentation that turns a one-off fault into a resolved and, where possible, prevented recurrence.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Fault triage and patient safety decisions, common fault categories and first checks, escalation routes, fault documentation, recurrence prevention",
    audience:
      "Theatre nursing and technical staff, anaesthetists and surgeons, biomedical engineering teams, on-call technical support",
    readingTime: "11 min read",
    technology: "Operating Room",
  },
  {
    type: "h2",
    id: "principle",
    text: "First Principle: Patient Safety Before Diagnosis",
    number: 1,
    body: "The first response to any equipment fault during a case is a safety decision, not a technical one.",
  },
  {
    type: "p",
    text: "When equipment behaves unexpectedly during a procedure, the immediate question is whether the case can continue safely with the equipment as it is, whether a substitute or backup should be brought in, or whether the case must be paused or aborted. This decision belongs to the clinical team in the room and should be made before any attempt at technical diagnosis. Diagnosis is the engineering team's role and should not delay the safety decision.",
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Do not attempt repair on equipment in clinical use",
    text: "Clinical staff should isolate or substitute faulty equipment and continue the case safely, then report the fault. Attempting to open, reset or repair equipment mid-procedure risks both patient safety and destroys diagnostic evidence the engineering team needs.",
  },
  {
    type: "h2",
    id: "triage",
    text: "Triage: Deciding Whether to Continue, Substitute or Abort",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Confirm whether the fault affects a function currently required for the case, or a function not presently in use.",
      "Check for an immediately available backup or substitute unit within the room or department before deciding to pause the case.",
      "Assess whether the fault presents any immediate patient safety risk, which takes priority over case continuity.",
      "Communicate the decision clearly to the whole team, including the reason, so everyone understands the plan going forward.",
      "Isolate the faulty equipment from further use once a decision is made, to avoid confusion about which unit is safe to use.",
    ],
  },
  {
    type: "h2",
    id: "categories",
    text: "Common Fault Categories and First Checks",
    number: 3,
  },
  {
    type: "table",
    headers: ["Fault category", "Safe first checks by clinical staff", "Not to be attempted by clinical staff"],
    rows: [
      ["No power or unexpected shutdown", "Confirm mains connection, check for an obvious tripped socket or UPS alarm", "Opening equipment casing or resetting internal circuit breakers"],
      ["Unexpected alarm or error code", "Note the exact code or message displayed, check if a simple acknowledged reset is provided in the user manual", "Overriding or disabling an alarm without engineering advice"],
      ["Image or display quality loss", "Check cable connections at accessible points, confirm correct display input selected", "Adjusting internal calibration settings"],
      ["Mechanical movement fault (table, arm, pendant)", "Stop movement, check for an obvious physical obstruction", "Forcing manual movement against resistance"],
      ["Gas or suction delivery irregularity", "Switch to backup supply per department protocol", "Investigating the gas supply system itself"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The exact error code or alarm message is the single most useful piece of information for remote or telephone-based first diagnosis, and is frequently omitted from fault reports in favour of a general description.",
    clinicalInterpretation:
      "A report describing only 'the machine stopped working' extends time to resolution because the engineering team must first re-establish what happened before diagnosis can begin.",
    hospitalRecommendation:
      "Train theatre staff to record the exact displayed code or message, and the sequence of events immediately before the fault, as a standard part of fault reporting.",
  },
  {
    type: "h2",
    id: "escalation",
    text: "Escalation and When to Call for Support",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Any fault affecting patient safety or case continuity should be escalated immediately, not held for the next routine report.",
      "The escalation contact and out-of-hours route should be displayed at the point of use, not only in a departmental policy document.",
      "Provide the equipment identification, the exact fault behaviour or code, and what has already been tried when making contact.",
      "Where the fault is resolved by a simple action described by the support team, the action taken should still be documented and reported.",
      "Repeated intermittent faults that do not individually justify an urgent call should still be escalated as a pattern, since intermittent faults often precede a more serious failure.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Intermittent faults are a warning, not a reassurance",
    text: "A fault that clears itself after equipment is switched off and on again has not been resolved; the underlying cause remains until diagnosed. Report intermittent faults with the same rigour as a fault that persists.",
  },
  {
    type: "h2",
    id: "documentation",
    text: "Documenting a Fault for Effective Repair",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Date, time and the specific procedure or case stage during which the fault occurred.",
      "The exact displayed error code, alarm or symptom, described as precisely as possible.",
      "What action was taken by the clinical team, including any substitution or workaround used.",
      "Whether the fault has occurred before on the same or similar equipment.",
      "The equipment identification: model and, where available, serial or asset number.",
    ],
  },
  {
    type: "h2",
    id: "prevention",
    text: "Reducing Recurrence After the Fault Is Resolved",
    number: 6,
  },
  {
    type: "p",
    text: "Once a fault is diagnosed and repaired, the engineering team should confirm with the theatre whether the fault has occurred previously on the same equipment or category, and whether a pattern across multiple units suggests a systematic cause rather than an isolated failure. Faults with a clear preventable cause should feed back into the preventive maintenance schedule or, where relevant, into refresher training for staff on correct use of the equipment.",
  },
  {
    type: "p",
    text: "AbuFarha Medical operates a fault escalation and technical support route for the operating room equipment it supplies, staffed by biomedical engineering personnel who diagnose and repair faults and hold the spare parts and manufacturer documentation the diagnosis depends on.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Should theatre staff try to fix a fault themselves?",
        a: "No. Theatre staff should isolate or substitute faulty equipment, make the safety decision about the case, and report the fault accurately. Attempting repair mid-procedure risks patient safety and can complicate the engineering team's later diagnosis.",
      },
      {
        q: "What is the single most useful piece of information to record when a fault occurs?",
        a: "The exact displayed error code or alarm message, together with what the equipment was doing immediately before the fault. This narrows diagnosis significantly compared with a general description of the symptom.",
      },
      {
        q: "How should an intermittent fault that seems to resolve itself be treated?",
        a: "As seriously as a persistent fault. An intermittent fault indicates an underlying cause that has not been diagnosed and often precedes a more disruptive failure, so it should be reported and investigated rather than dismissed.",
      },
      {
        q: "Who decides whether a case continues after an equipment fault?",
        a: "The clinical team present in the room, based on whether the affected function is required for the remainder of the case and whether a safe substitute is available. This decision is made before, and independently of, any technical diagnosis.",
      },
      {
        q: "What happens after a fault is repaired?",
        a: "The engineering team should check whether the fault has occurred before on the same or similar equipment, and where a pattern is found, feed the finding back into preventive maintenance scheduling or staff training to reduce recurrence.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 7,
  },
  {
    type: "p",
    text: "Effective fault response in the operating room separates the clinical safety decision from the technical diagnosis, equips staff with safe first checks and clear escalation routes, and captures precise fault information that shortens repair time and reduces recurrence. Getting this sequence right protects both the patient and the case list.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Theatre and interventional service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Theatre equipment fault diagnosis and repair" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Biomedical engineering service practice synthesis",
    disclaimer:
      "Educational guidance on operating room equipment fault response. It does not replace manufacturer troubleshooting documentation, departmental protocols or local regulatory requirements.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer user manuals and troubleshooting guidance for theatre equipment." },
      { label: "Institutional equipment fault reporting and escalation protocols." },
      { label: "Biomedical engineering service and repair records for theatre equipment." },
    ],
  },
];
