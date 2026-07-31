/**
 * Lithotripsy clinical article — ESWL indications and case selection.
 */

import type { ContentBlock, TocItem } from "../blog";

export const ESWL_INDICATIONS_TOC: TocItem[] = [
  { id: "why", title: "Why Case Selection Decides Outcome" },
  { id: "factors", title: "The Selection Factors That Matter" },
  { id: "location", title: "Stone Location" },
  { id: "composition", title: "Stone Composition and Density" },
  { id: "patient", title: "Patient Factors" },
  { id: "alternatives", title: "ESWL Versus Endoscopic Alternatives" },
  { id: "pathway", title: "Building a Defensible Selection Pathway" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ESWL_INDICATIONS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Lithotripsy services rarely underperform because of the machine. They underperform because stones that were never good ESWL candidates were treated with ESWL, and because clearance was never confirmed afterwards.",
      "Case selection is the highest-leverage variable in a lithotripsy programme. It determines single-session success rates, retreatment burden, patient experience and the credibility of the service inside the hospital.",
      "This guide sets out the factors that govern ESWL suitability, how they interact, and how to build a selection pathway that produces consistent, auditable decisions.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Case selection logic, stone location and composition, patient factors, comparison with endoscopic options, and a documented selection pathway",
    audience:
      "Urologists, urology nurse specialists, ESWL operators, service managers, clinical governance leads",
    readingTime: "12 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "why",
    text: "Why Case Selection Decides Outcome",
    number: 1,
    body: "The same system produces very different results across different case mixes.",
  },
  {
    type: "p",
    text: "ESWL fragments a stone; the patient must then clear the fragments. Both halves must be plausible before treatment begins. A stone that fragments beautifully but sits where fragments cannot pass produces a failed episode of care despite technically successful treatment. Selection therefore assesses fragmentation likelihood and clearance likelihood as two separate questions.",
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Two questions, not one",
    text: "Ask first whether this stone will fragment, then whether these fragments will clear. A yes to only one of them is not an indication for ESWL.",
  },
  {
    type: "h2",
    id: "factors",
    text: "The Selection Factors That Matter",
    number: 2,
  },
  {
    type: "table",
    headers: ["Factor", "What it influences", "Practical consequence"],
    rows: [
      ["Stone size", "Fragment burden and clearance time", "Larger stones raise retreatment and residual-fragment risk"],
      ["Stone location", "Energy access and drainage", "Determines whether fragments have a viable path out"],
      ["Stone density and composition", "Resistance to fragmentation", "Very hard stones may resist ESWL regardless of settings"],
      ["Skin-to-stone distance", "Energy delivered at the target", "Greater distance attenuates energy before it reaches the focus"],
      ["Collecting system anatomy", "Fragment transit", "Obstruction or unfavourable anatomy impedes clearance"],
      ["Patient body habitus", "Positioning and localisation", "Affects imaging access and repeatable targeting"],
      ["Coagulation and comorbidity status", "Safety", "Some conditions contraindicate treatment"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "No single factor decides suitability; the combination does. Two stones of identical size can have opposite recommendations once location, density and anatomy are added.",
    clinicalInterpretation:
      "Selection should be recorded as a combination of factors rather than a size threshold, so decisions remain reviewable after the fact.",
    hospitalRecommendation:
      "Capture the factor set on the treatment record. It converts individual judgement into service-level audit data.",
  },
  {
    type: "h2",
    id: "location",
    text: "Stone Location",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Renal pelvis and upper-tract stones generally offer favourable energy access and, where drainage is unobstructed, a workable clearance path.",
      "Lower-pole calyceal stones may fragment well but clear poorly, because fragments must travel against gravity and calyceal geometry.",
      "Ureteric stones may be obscured on ultrasound by bowel gas or bony structures, which is where fluoroscopic localisation becomes decisive.",
      "Stones distal to an obstruction should not be treated until drainage is addressed; fragments cannot clear through an obstructed system.",
    ],
  },
  {
    type: "h2",
    id: "composition",
    text: "Stone Composition and Density",
    number: 4,
  },
  {
    type: "p",
    text: "Stones differ substantially in mechanical resistance. Where prior imaging or previous stone analysis indicates a particularly dense, homogeneous stone, ESWL is more likely to require multiple sessions or to fail outright — and an endoscopic approach may be the shorter route to a stone-free patient. Where composition is unknown, attenuation characteristics on prior CT provide a useful surrogate.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Treating harder with more energy",
    text: "Escalating energy on a stone that is not fragmenting increases tissue exposure without improving the result. Two non-productive sessions are a reason to change approach, not to increase power.",
  },
  {
    type: "h2",
    id: "patient",
    text: "Patient Factors",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Skin-to-stone distance: energy is attenuated on its way to the focus, so deeper targets receive less than the console setting suggests.",
      "Body habitus and mobility: positioning must be repeatable for the whole session, not just at the start.",
      "Coagulation status and relevant medication: reviewed before treatment in line with institutional protocol.",
      "Pregnancy and uncontrolled infection: recognised contraindications in standard urological practice.",
      "Patient tolerance and analgesia requirements, which vary with the generation principle and energy protocol in use.",
    ],
  },
  {
    type: "h2",
    id: "alternatives",
    text: "ESWL Versus Endoscopic Alternatives",
    number: 6,
  },
  {
    type: "comparison",
    title: "Choosing a treatment route",
    headers: ["Consideration", "ESWL", "Endoscopic approach"],
    rows: [
      ["Invasiveness", "Fully non-invasive, no instrumentation", "Requires instrumentation of the urinary tract"],
      ["Anaesthesia", "Often analgesia or sedation only", "Typically general or regional anaesthesia"],
      ["Stone clearance", "Depends on patient passing fragments", "Fragments can be retrieved directly"],
      ["Hard, dense stones", "Less predictable", "Generally more reliable"],
      ["Theatre and recovery resource", "Outpatient-oriented", "Theatre time and recovery capacity required"],
      ["Retreatment likelihood", "Higher for larger or dense stones", "Lower for equivalent stones"],
    ],
    caption: "Route selection follows the case, not the department's equipment inventory.",
  },
  {
    type: "h2",
    id: "pathway",
    text: "Building a Defensible Selection Pathway",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Define the imaging required before any treatment decision, including what must be known about stone size, location and attenuation.",
      "State the factor combinations that make ESWL the preferred route, and those that trigger referral to an endoscopic approach.",
      "Set a retreatment ceiling and a review trigger, so unproductive repeat sessions are escalated rather than repeated.",
      "Mandate follow-up imaging to confirm clearance, and record the outcome as stone-free, residual fragments, or failure.",
      "Review outcomes by factor group periodically; selection criteria should be adjusted from your own data, not from assumption.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supports lithotripsy services with system supply, installation and commissioning, operator training, and preventive maintenance — so that when selection is correct, the equipment performs as the protocol assumes.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is there a stone size above which ESWL should not be used?",
        a: "Practice thresholds exist, but size alone is not decisive. A moderate stone in an unfavourable location with poor clearance prospects may be a worse ESWL candidate than a slightly larger stone in a favourable one.",
      },
      {
        q: "Why is follow-up imaging mandatory?",
        a: "Because fragmentation is not the clinical endpoint. Residual fragments can regrow or obstruct, so the episode is only complete when clearance has been confirmed.",
      },
      {
        q: "How many ESWL sessions are reasonable before changing approach?",
        a: "Services should set an explicit ceiling and review trigger in protocol. Repeating sessions indefinitely on a stone that is not responding exposes the patient without a proportionate expected benefit.",
      },
      {
        q: "Does a lithotripter's imaging modality affect case selection?",
        a: "Yes. An ultrasound-only system limits reliable targeting of stones without an acoustic window, whereas fluoroscopic capability widens the treatable case mix.",
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
    text: "ESWL performance is a selection discipline before it is a technology question. Services that define selection factors explicitly, cap unproductive retreatment and confirm clearance produce dependable outcomes from the same equipment that disappoints services which do not.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Urology treatment service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy system performance and support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Clinical practice and manufacturer documentation synthesis",
    disclaimer:
      "Educational guidance on lithotripsy case selection. It does not replace clinical judgement or institutional treatment protocol.",
  },
  {
    type: "references",
    items: [
      { label: "Institutional urology treatment and stone management protocols." },
      { label: "Manufacturer operating instructions for installed lithotripsy systems." },
      { label: "Service-level outcome audit records for stone clearance and retreatment." },
    ],
  },
];
