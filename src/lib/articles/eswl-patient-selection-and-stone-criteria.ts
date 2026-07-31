/**
 * Lithotripsy Systems cluster — "ESWL Patient Selection and Stone Criteria"
 */

import type { ContentBlock, TocItem } from "../blog";

export const ESWL_PATIENT_SELECTION_TOC: TocItem[] = [
  { id: "framing", title: "Patient Criteria as a Distinct Filter" },
  { id: "contraindications", title: "Absolute and Relative Contraindications" },
  { id: "anticoagulation", title: "Anticoagulation and Bleeding Risk" },
  { id: "special", title: "Special Populations" },
  { id: "consent", title: "Consent and Shared Decision-Making" },
  { id: "checklist", title: "A Pre-Treatment Screening Checklist" },
  { id: "documentation", title: "Documentation and Governance" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ESWL_PATIENT_SELECTION_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Stone criteria decide whether a stone is a good candidate for shock wave lithotripsy. Patient criteria decide whether this particular patient can safely receive it. AbuFarha Medical supports lithotripsy services with system supply, installation, commissioning and biomedical engineering training, but the screening decision itself sits with the clinical team and depends on a distinct, patient-centred set of factors that is easy to overlook when attention is focused on the stone.",
      "Two patients with identical, favourably located stones can have opposite treatment plans once bleeding risk, pregnancy status, implanted devices, body habitus and comorbidity are considered. Treating patient screening as a formality after stone assessment is a recognised source of avoidable complications and cancelled or repeated sessions.",
      "This guide sets out the patient-side factors that govern ESWL suitability, the special populations that require particular caution, and how to build a pre-treatment screening process that is consistent and auditable rather than dependent on individual recall.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Patient-side screening criteria, contraindications, anticoagulation management, special populations, consent practice and a documented screening pathway",
    audience:
      "Urologists, urology nurse specialists, anaesthesia teams, ESWL operators, clinical governance leads",
    readingTime: "12 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "framing",
    text: "Patient Criteria as a Distinct Filter",
    number: 1,
    body: "Stone suitability and patient suitability are separate questions that must both be answered yes.",
  },
  {
    type: "p",
    text: "A stone-selection pathway typically asks whether this stone will fragment and whether the fragments will clear. Patient screening asks a different question: can this patient tolerate shock wave delivery, the positioning it requires, and the physiological effects of cavitation and mechanical stress on adjacent tissue. The two assessments are complementary, not substitutable, and services that fold patient screening into a single generic checklist tend to miss the factors that matter most in individual cases.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The patient, not only the stone, sets the energy ceiling",
    text: "Skin-to-stone distance, tissue tolerance and bleeding risk can all cap the usable energy independently of what the stone itself would otherwise fragment at.",
  },
  {
    type: "h2",
    id: "contraindications",
    text: "Absolute and Relative Contraindications",
    number: 2,
  },
  {
    type: "table",
    headers: ["Condition", "Status", "Reasoning"],
    rows: [
      ["Pregnancy", "Absolute contraindication", "Risk to the fetus from acoustic energy and positioning is not acceptable"],
      ["Untreated bleeding disorder or uncorrected anticoagulation", "Absolute until corrected", "Cavitation and tissue stress raise bleeding risk at the treatment site"],
      ["Untreated urinary tract infection or sepsis", "Absolute until treated", "Fragmentation can liberate infected material into the circulation"],
      ["Uncontrolled arrhythmia", "Relative, cardiology input required", "Some generation principles and gating protocols interact with cardiac rhythm"],
      ["Aortic or renal artery aneurysm near the treatment path", "Relative, case-by-case", "Mechanical stress near a vascular abnormality carries additional risk"],
      ["Severe obesity beyond table or focal depth limits", "Relative, device-dependent", "May exceed effective skin-to-stone distance or table weight limits"],
      ["Orthopaedic prosthesis or spinal hardware in the beam path", "Relative, positioning-dependent", "May be manageable by repositioning; assessed case by case"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Most contraindications are correctable or manageable rather than permanent — anticoagulation can be adjusted, infection treated, positioning modified. The screening process exists to catch them before the session, not during it.",
    clinicalInterpretation:
      "A contraindication identified on the treatment table costs a cancelled slot and an anxious patient; identified at booking it costs a phone call.",
    hospitalRecommendation:
      "Screen for contraindications at the point of listing, not only immediately before treatment, so corrective action has time to occur.",
  },
  {
    type: "h2",
    id: "anticoagulation",
    text: "Anticoagulation and Bleeding Risk",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Anticoagulant and antiplatelet therapy should be reviewed against institutional protocol well before the scheduled session, not on the day of treatment.",
      "Where therapy is indicated for a separate condition, treatment timing should be coordinated with the prescribing team rather than decided unilaterally by the lithotripsy service.",
      "Bridging strategies, where used, follow the same governance as for any other procedure carrying bleeding risk and should be documented in the same way.",
      "Renal and hepatic function affecting clotting should be checked where clinically indicated, particularly in patients with existing renal impairment from the stone disease itself.",
      "A resumption plan for anticoagulation after treatment should be agreed and documented before the session, not improvised afterwards.",
    ],
  },
  {
    type: "h2",
    id: "special",
    text: "Special Populations",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Paediatric patients: smaller focal-to-skin distances and different energy tolerances apply; treatment should follow paediatric-specific protocol and typically involves anaesthesia support suited to the child's age.",
      "Patients with cardiac implantable electronic devices: pacemakers and defibrillators require device-specific guidance, often coordinated with cardiology or the device manufacturer, particularly regarding gating and proximity of the treatment field.",
      "Solitary kidney: retreatment thresholds and complication tolerance are typically more conservative, since there is no contralateral reserve.",
      "Musculoskeletal deformity or inability to maintain the required position: assessed individually, since positioning repeatability affects both efficacy and safety.",
      "Patients with a history of poor tolerance or high anxiety: analgesia, sedation strategy and pacing of the session should be planned in advance rather than adjusted reactively mid-session.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Implanted cardiac devices are a coordination task, not a checkbox",
    text: "A pacemaker or defibrillator does not automatically exclude ESWL, but proceeding without confirmed, documented guidance from the relevant specialty is not an acceptable shortcut.",
  },
  {
    type: "h2",
    id: "consent",
    text: "Consent and Shared Decision-Making",
    number: 5,
  },
  {
    type: "p",
    text: "Consent for ESWL should cover the realistic prospect of retreatment, the possibility that an alternative approach may later be required if fragmentation or clearance is inadequate, and the recognised risks specific to shock wave treatment such as haematuria, renal colic from passing fragments, and rarely subcapsular haematoma. Patients should understand that a single session may not achieve stone clearance and that follow-up imaging is part of the pathway rather than an optional extra. Shared decision-making is particularly relevant where an endoscopic alternative exists and the choice between routes depends on the patient's own tolerance for anaesthesia, recovery time and number of hospital visits.",
  },
  {
    type: "h2",
    id: "checklist",
    text: "A Pre-Treatment Screening Checklist",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Pregnancy status confirmed where clinically relevant.",
      "Anticoagulation and antiplatelet status reviewed against protocol and, where indicated, adjusted in advance.",
      "Urine screened for infection, with treatment completed before listing if positive.",
      "Cardiac history reviewed, including any implanted device, with specialty input documented if required.",
      "Body habitus assessed against the system's effective treatment range and table specification.",
      "Positioning feasibility confirmed for the specific stone location and patient anatomy.",
      "Consent discussion completed and documented, including retreatment likelihood and alternative routes.",
    ],
  },
  {
    type: "h2",
    id: "documentation",
    text: "Documentation and Governance",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Record the screening outcome against each criterion, not only a summary judgement of fitness for treatment.",
      "Where a relative contraindication is accepted after specialty input, document the reasoning and the sign-off.",
      "Audit cancelled or deferred sessions by cause; a recurring cause points to a gap in the booking-stage screening process.",
      "Review the screening protocol periodically against the service's own incident and near-miss data, not only against published guidance.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supports lithotripsy services with equipment supply, installation, commissioning and operator training so that when patient screening correctly identifies a suitable case, the equipment and imaging configuration deliver the treatment as planned.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is pregnancy always an absolute contraindication to ESWL?",
        a: "Yes. Pregnancy is treated as an absolute contraindication because of the risk that acoustic energy and required positioning pose to the fetus, regardless of stone characteristics.",
      },
      {
        q: "Can a patient on anticoagulants ever receive ESWL?",
        a: "Only after the anticoagulation status has been reviewed and, where indicated, corrected or bridged according to institutional protocol in coordination with the prescribing team. Uncorrected anticoagulation is a contraindication.",
      },
      {
        q: "Does an implanted pacemaker rule out ESWL?",
        a: "Not automatically, but it requires device-specific guidance, often with cardiology or manufacturer input, documented before treatment. Proceeding without that guidance is not appropriate.",
      },
      {
        q: "Why is urinary infection screened for before treatment?",
        a: "Fragmenting a stone in the presence of untreated infection can liberate infected material into the circulation, with a risk of sepsis. Infection is treated and resolved before listing for ESWL.",
      },
      {
        q: "What should consent for ESWL specifically cover?",
        a: "The realistic chance that more than one session will be needed, the possibility of switching to an alternative approach if fragmentation or clearance is inadequate, and the recognised risks of shock wave treatment such as haematuria and passing-fragment colic.",
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
    text: "Patient screening for ESWL is a distinct clinical discipline from stone selection, covering contraindications, bleeding risk, special populations and consent. A documented, booking-stage screening checklist catches issues while there is still time to correct them, rather than on the treatment table where the only options are to proceed against advice or cancel.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Urology treatment service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy system supply and support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Clinical practice and institutional governance synthesis",
    disclaimer:
      "Educational guidance on ESWL patient screening. It does not replace clinical judgement, anaesthetic assessment or institutional treatment protocol.",
  },
  {
    type: "references",
    items: [
      { label: "Institutional urology treatment and pre-procedure screening protocols." },
      { label: "Manufacturer operating instructions for installed lithotripsy systems." },
      { label: "Departmental consent and clinical governance frameworks." },
    ],
  },
];
