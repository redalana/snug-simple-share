/**
 * Women's Healthcare cluster — "What Is an Obstetric Ultrasound Service?"
 */

import type { ContentBlock, TocItem } from "../blog";

export const OBSTETRIC_ULTRASOUND_TOC: TocItem[] = [
  { id: "definition", title: "What an Obstetric Ultrasound Service Is" },
  { id: "examinations", title: "Examination Types Across Pregnancy" },
  { id: "system", title: "System and Transducer Requirements" },
  { id: "room", title: "Room, Workflow and Capacity" },
  { id: "safety", title: "Acoustic Output and Safe Practice" },
  { id: "quality", title: "Quality, Probe Care and Maintenance" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const OBSTETRIC_ULTRASOUND_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "An obstetric ultrasound service uses diagnostic ultrasound to assess pregnancy: confirming viability and dating, evaluating fetal anatomy and growth, and assessing the placenta and amniotic fluid. AbuFarha Medical supplies, installs, commissions and supports the ultrasound systems these services run on.",
      "Ultrasound uses no ionising radiation, which makes it the primary imaging modality in pregnancy. That does not make it undemanding: image quality depends on transducer selection and condition, operator skill and examination time, and service capacity depends on realistic list planning rather than nominal scan durations.",
      "This guide explains what the service comprises, the examinations performed across pregnancy, the equipment and room requirements, and the safety and quality practices that keep it dependable.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Service definition, examination types by gestation, system and transducer requirements, room and capacity planning, acoustic output safety, probe care and maintenance",
    audience:
      "Obstetric and ultrasound department managers, sonographers, clinical leads, biomedical engineering teams, service planners",
    readingTime: "11 min read",
    technology: "Ultrasound Systems",
  },
  {
    type: "h2",
    id: "definition",
    text: "What an Obstetric Ultrasound Service Is",
    number: 1,
    body: "A scheduled diagnostic service, not an ad hoc use of an ultrasound machine.",
  },
  {
    type: "p",
    text: "The service consists of defined examination types, each with a purpose, an expected duration, a competency requirement and a reporting output. Where those elements are defined, capacity can be planned and quality audited. Where scanning happens opportunistically on whichever system is free, neither is possible.",
  },
  {
    type: "h2",
    id: "examinations",
    text: "Examination Types Across Pregnancy",
    number: 2,
  },
  {
    type: "table",
    headers: ["Examination", "Purpose", "Service implication"],
    rows: [
      ["Early pregnancy assessment", "Viability, location and dating", "Often requires transvaginal capability and same-day access"],
      ["Dating scan", "Establishing gestational age", "High volume; duration predictable"],
      ["Anatomy assessment", "Structured fetal anatomical survey", "Longest examination; highest competency requirement"],
      ["Growth and wellbeing", "Fetal growth, fluid, placental assessment", "Repeat attendances; comparability matters"],
      ["Doppler studies where indicated", "Vascular assessment in at-risk pregnancies", "Requires Doppler capability and specific competency"],
      ["Gynaecological studies", "Non-pregnancy pelvic assessment", "Shares equipment and room; competes for list time"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Anatomy assessment dominates list planning: it is both the longest examination and the one most sensitive to operator competency and image quality.",
    clinicalInterpretation:
      "Compressing anatomy assessment time to protect throughput degrades the examination most likely to change management.",
    hospitalRecommendation:
      "Plan lists from realistic per-examination durations by type, including reporting time, rather than from an average scan time.",
  },
  {
    type: "h2",
    id: "system",
    text: "System and Transducer Requirements",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "A curvilinear abdominal transducer as the primary probe, with frequency range appropriate across body habitus and gestation.",
      "Transvaginal capability where early pregnancy and gynaecological work is performed.",
      "Doppler capability — colour and spectral — where at-risk pregnancy assessment is in scope.",
      "Measurement and calculation packages appropriate to obstetric practice, with the reference standards the service reports against.",
      "Reporting and archiving workflow that captures images and measurements against the correct patient record.",
      "Ergonomics: obstetric lists are long, and operator musculoskeletal strain is a genuine service risk.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Transducer condition is image quality",
    text: "A damaged or degraded probe limits image quality more than any system setting. Probe inspection belongs in routine quality control, and a spare transducer is often the difference between a running list and a cancelled one.",
  },
  {
    type: "h2",
    id: "room",
    text: "Room, Workflow and Capacity",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Dimmable lighting, since ultrasound image assessment depends on viewing conditions.",
      "Visual and acoustic privacy, with space for a supporter alongside the couch.",
      "Couch access from the scanning side, with the operator able to work without reaching across.",
      "A discussion space for conveying unexpected findings, separate from the examination couch where possible.",
      "Probe cleaning and disinfection provision within the room, per the manufacturer's and local infection control requirements.",
      "Capacity planned from examination type mix, not from a single nominal scan time.",
      "Reporting capacity matched to scanning capacity.",
    ],
  },
  {
    type: "h2",
    id: "safety",
    text: "Acoustic Output and Safe Practice",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Ultrasound uses no ionising radiation, but acoustic output is not zero; practice follows the principle of using the lowest output and shortest time consistent with a diagnostic result.",
      "Thermal and mechanical index displays should be understood by operators and considered during examination, particularly with Doppler in early pregnancy.",
      "Examinations are performed for clinical indication, with local policy governing non-indicated scanning.",
      "Doppler settings warrant particular attention because output is typically higher than in B-mode imaging.",
      "Operator competency includes output awareness, not only image acquisition skill.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Doppler is the highest-output mode in routine use",
    text: "Where Doppler is used in early pregnancy, output and dwell time deserve explicit attention. Treating all modes as equivalent in output is a common gap in operator understanding.",
  },
  {
    type: "h2",
    id: "quality",
    text: "Quality, Probe Care and Maintenance",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Routine transducer inspection for lens damage, cable and connector wear and housing integrity.",
      "Cleaning and disinfection per the manufacturer's instructions — incompatible agents damage transducers and void support.",
      "Periodic image quality assessment with defined action levels, recorded rather than judged informally.",
      "Preventive maintenance scheduled per system, with acceptance-test results retained as the performance baseline.",
      "Measurement package and reference standard verification after software updates.",
      "Operator competency records by examination type, with refresher training on a defined cycle.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs, commissions and supports ultrasound systems and transducers, and provides operator training, preventive maintenance and spare parts supply for obstetric and gynaecological ultrasound services.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Which transducers does an obstetric service need?",
        a: "A curvilinear abdominal transducer as the primary probe, plus transvaginal capability where early pregnancy and gynaecological work is in scope, and Doppler capability where at-risk pregnancy assessment is performed.",
      },
      {
        q: "Is obstetric ultrasound safe?",
        a: "It uses no ionising radiation and is the primary imaging modality in pregnancy. Output is not zero, so practice uses the lowest output and shortest examination time consistent with a diagnostic result, with particular attention to Doppler.",
      },
      {
        q: "How should list capacity be planned?",
        a: "From realistic durations per examination type including reporting time. Anatomy assessment is the longest examination and should not be compressed to protect throughput.",
      },
      {
        q: "What most commonly limits image quality?",
        a: "Transducer condition and operator technique, ahead of system specification. A degraded probe cannot be compensated for by settings.",
      },
      {
        q: "Can one system cover obstetric and breast ultrasound?",
        a: "With appropriate transducers it may be technically possible, but list volumes, examination durations and distinct operator skill sets usually justify separating the services in practice.",
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
    text: "An obstetric ultrasound service is defined by examination types, competencies and capacity — with equipment chosen to serve them. Specify the transducer set from the examinations in scope, plan lists from real durations, keep probes inspected and maintained, and hold operators to output-aware competency. That is what makes the service reliable rather than merely available.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Obstetric and gynaecological ultrasound service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Ultrasound installation, transducer care and maintenance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Service planning and field practice synthesis",
    disclaimer:
      "Educational guidance on obstetric ultrasound services. It does not replace clinical guidelines, manufacturer documentation or local policy.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer ultrasound system and transducer documentation, including cleaning and disinfection instructions." },
      { label: "Institutional obstetric ultrasound examination protocols and competency frameworks." },
      { label: "Departmental quality assurance and image quality audit records." },
    ],
  },
];
