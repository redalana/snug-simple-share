/**
 * Point-of-care ultrasound in emergency care — Ultrasound cluster (supporting).
 */

import type { ContentBlock, TocItem } from "../blog";

export const POCUS_TOC: TocItem[] = [
  { id: "overview", title: "What Point-of-Care Ultrasound Is" },
  { id: "difference", title: "How It Differs from a Departmental Study" },
  { id: "applications", title: "Core Emergency Applications" },
  { id: "equipment", title: "Equipment Requirements" },
  { id: "governance", title: "Training, Competency and Governance" },
  { id: "documentation", title: "Documentation and Archiving" },
  { id: "pitfalls", title: "Pitfalls and Limitations" },
  { id: "programme", title: "Building a Programme" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const POCUS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Point-of-care ultrasound is a focused examination performed and interpreted by the treating clinician to answer a specific question at the bedside. It is not a miniature version of a departmental ultrasound study; it is a different investigation with a different purpose. A departmental study surveys anatomy comprehensively and produces a report. A point-of-care examination asks one binary or near-binary question — is there free fluid, is the ventricle contracting, is the vein patent — and uses the answer immediately.",
      "That distinction determines everything else: the equipment needed, the training required, how findings are documented, and where the clinical and governance risks lie. Programmes that blur the distinction tend to fail in one of two directions. Either the focused examination is treated as a full study and generates unsupported diagnostic claims, or it is treated as informal and never documented, leaving decisions unrecorded.",
      "This guide sets out the core emergency applications, the equipment and governance requirements, and a practical route to building a defensible programme.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Definition and scope, differences from departmental studies, core emergency applications, equipment specification, training and governance, documentation requirements, pitfalls and programme implementation",
    audience:
      "Emergency and critical care clinicians, anaesthetists, radiology leadership, clinical governance leads and procurement teams",
    readingTime: "14 min read",
    technology: "Ultrasound Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "What Point-of-Care Ultrasound Is",
    number: 1,
    body: "Focused, question-driven imaging integrated into the clinical encounter.",
  },
  {
    type: "ul",
    items: [
      "Performed by the treating clinician rather than referred to another service.",
      "Directed at a predefined question with an immediate management consequence.",
      "Interpreted in real time and combined with the rest of the clinical assessment.",
      "Repeatable, so change over minutes or hours can be assessed.",
      "Bounded in scope: findings outside the question require a formal study.",
      "Documented as a focused examination, with its limitations stated.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Scope is the safety mechanism",
    text: "A focused examination is safe because its scope is explicit. The risk arises when a clinician trained to answer one question is assumed — by themselves or by colleagues reading the notes — to have excluded everything else.",
  },
  {
    type: "h2",
    id: "difference",
    text: "How It Differs from a Departmental Study",
    number: 2,
    body: "Different purpose, different scope, different accountability.",
  },
  {
    type: "table",
    headers: ["Dimension", "Point-of-care examination", "Departmental study"],
    rows: [
      ["Purpose", "Answer a specific clinical question", "Comprehensive anatomical assessment"],
      ["Operator", "Treating clinician", "Sonographer or radiologist"],
      ["Timing", "Immediate, at the bedside", "Scheduled or urgent within a service"],
      ["Scope", "Deliberately narrow", "Complete for the region requested"],
      ["Interpretation", "Real time, by the operator", "Formal report by a reporting clinician"],
      ["Output", "Immediate management decision", "Written report in the record"],
      ["Repeatability", "Frequently repeated to track change", "Usually a single timed study"],
      ["Documentation", "Focused record with stated limitations", "Full report and image set"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Conflict between emergency and radiology services almost always traces back to ambiguity about scope. Where the boundary is written down and agreed, the two services complement each other rather than compete.",
    clinicalInterpretation:
      "A focused examination can change management within minutes; it cannot substitute for a comprehensive study when the clinical question broadens.",
    hospitalRecommendation:
      "Agree a written scope document jointly between emergency, critical care and radiology, listing which focused examinations are in scope, who may perform them, and when a formal study must be requested.",
  },
  {
    type: "h2",
    id: "applications",
    text: "Core Emergency Applications",
    number: 3,
    body: "Established applications with clear, actionable questions.",
  },
  {
    type: "table",
    headers: ["Application", "Question answered", "Typical probe"],
    rows: [
      ["Focused assessment in trauma", "Is there free intraperitoneal or pericardial fluid?", "Curvilinear or phased array"],
      ["Focused cardiac assessment", "Is there gross contractile impairment, effusion or tamponade physiology?", "Phased array"],
      ["Lung and pleural assessment", "Is there pneumothorax, pleural fluid or interstitial pattern?", "Linear and curvilinear"],
      ["Aortic assessment", "Is the abdominal aorta aneurysmal?", "Curvilinear"],
      ["Deep vein assessment", "Is the vein compressible at the assessed sites?", "Linear"],
      ["Volume and fluid status", "Are there supportive signs of volume state?", "Phased array or curvilinear"],
      ["Hydronephrosis and bladder", "Is there obstruction or urinary retention?", "Curvilinear"],
      ["Vascular access guidance", "Where is the vessel and is the needle in it?", "Linear"],
      ["Regional anaesthesia guidance", "Where is the nerve and where is the needle tip?", "Linear"],
      ["Procedural guidance for drainage", "Where is the collection and what is the safe route?", "Curvilinear or linear"],
      ["Early pregnancy assessment", "Is there an intrauterine pregnancy?", "Curvilinear or endocavity, within agreed scope"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Procedural guidance is the highest-yield use",
    text: "Ultrasound guidance for vascular access and regional anaesthesia has the most direct and immediate benefit, because it converts a blind procedure into a visualised one. Many programmes are best started here.",
  },
  {
    type: "h2",
    id: "equipment",
    text: "Equipment Requirements",
    number: 4,
    body: "Availability and durability matter more than premium image processing.",
  },
  {
    type: "ul",
    items: [
      "Immediate availability at the bedside; a system stored elsewhere will not be used in a resuscitation.",
      "Rapid start-up from standby, since the decision window is short.",
      "A probe set covering the intended applications — typically phased array, curvilinear and linear.",
      "Robust construction and simple controls that work under time pressure and with gloved hands.",
      "Battery endurance sufficient for a shift, with a reliable charging arrangement.",
      "Surfaces and cables compatible with the department's cleaning agents.",
      "Presets built for the specific focused examinations in use.",
      "Image and clip storage with a route into the patient record.",
      "Needle-guidance features where procedural use is planned.",
    ],
  },
  {
    type: "table",
    headers: ["Platform", "Strengths", "Trade-offs"],
    rows: [
      ["Cart-based portable", "Full probe range, best image quality, integrated archiving", "Bulkier; may be shared between areas"],
      ["Laptop-style portable", "Good balance of capability and mobility", "Fewer ports; battery-dependent"],
      ["Handheld", "Always available, easily carried", "Reduced probe options and processing"],
      ["Multiple handheld plus one cart", "Availability with a departmental reference system", "Higher device count to manage and clean"],
    ],
  },
  {
    type: "h2",
    id: "governance",
    text: "Training, Competency and Governance",
    number: 5,
    body: "The programme, not the device, is what makes point-of-care ultrasound safe.",
  },
  {
    type: "ul",
    items: [
      "Define which focused examinations are within the programme's scope.",
      "Require documented training for each examination type, not a single global sign-off.",
      "Set a supervised practice requirement with a logbook before independent practice.",
      "Provide an accessible route for image review and second opinion.",
      "Audit a sample of examinations against subsequent formal imaging or clinical outcome.",
      "Maintain a register of credentialed practitioners and the examinations each may perform.",
      "Define an escalation pathway when the focused examination is indeterminate.",
      "Review discrepancies as a learning process rather than an individual performance issue.",
      "Include device cleaning and infection control in the competency requirement.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Credential by examination, not by clinician",
    text: "Competence in focused cardiac assessment does not imply competence in early pregnancy assessment. Credentialing by individual examination type keeps the scope honest and makes audit meaningful.",
  },
  {
    type: "h2",
    id: "documentation",
    text: "Documentation and Archiving",
    number: 6,
    body: "An undocumented examination that changed management is a governance gap.",
  },
  {
    type: "table",
    headers: ["Requirement", "Why", "Practical approach"],
    rows: [
      ["Record the clinical question", "Defines the scope of what was assessed", "Structured entry template"],
      ["Record the findings for that question", "Supports the decision taken", "Short structured statement, not a narrative report"],
      ["State the limitations", "Prevents over-interpretation by others", "Standard wording about focused scope"],
      ["Store representative images or clips", "Enables review and audit", "Archive integration or defined local store"],
      ["Identify the operator and credential status", "Accountability and audit", "Captured automatically where possible"],
      ["Time-stamp the examination", "Focused studies are often repeated", "System clock synchronised to the record"],
      ["Note if a formal study was requested", "Closes the pathway", "Linked request in the record"],
    ],
  },
  {
    type: "h2",
    id: "pitfalls",
    text: "Pitfalls and Limitations",
    number: 7,
    body: "The known failure modes are predictable and mostly avoidable.",
  },
  {
    type: "ul",
    items: [
      "Scope creep: answering questions the operator is not credentialed to answer.",
      "Treating a negative focused examination as exclusion of disease.",
      "Over-reliance on a single view where technique requires multiple windows.",
      "Failing to recognise inadequate acoustic access and reporting a normal result instead.",
      "Under-documentation, leaving management decisions unsupported in the record.",
      "Infection control lapses from rapid reuse between patients.",
      "Device attrition from handling in high-pressure environments without holders or protection.",
      "Skill decay when an examination type is rarely performed and never audited.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "A focused examination cannot exclude",
    text: "Most focused examinations are designed to detect a specific abnormality quickly. Their negative predictive value for the broader differential is limited, and a negative result should never be recorded as if a comprehensive study had been performed.",
  },
  {
    type: "h2",
    id: "programme",
    text: "Building a Programme",
    number: 8,
    body: "Sequence the programme so governance exists before volume grows.",
  },
  {
    type: "table",
    headers: ["Stage", "Action", "Completion criterion"],
    rows: [
      ["1", "Agree scope jointly with radiology and critical care", "Written scope document approved"],
      ["2", "Select the first two or three examination types", "Clear clinical rationale for each"],
      ["3", "Specify and procure devices with the required probe set", "Devices available where care is delivered"],
      ["4", "Deliver training and supervised practice", "Logbooks complete for the first cohort"],
      ["5", "Establish documentation templates and archiving", "Examinations discoverable in the record"],
      ["6", "Credential the first cohort", "Register published"],
      ["7", "Begin audit and discrepancy review", "First audit cycle reported"],
      ["8", "Expand scope incrementally", "Each new examination type governed as above"],
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "How is point-of-care ultrasound different from a formal ultrasound scan?",
        a: "A point-of-care examination is performed and interpreted by the treating clinician to answer one specific question with immediate management consequences, and its scope is deliberately narrow. A formal departmental study is a comprehensive assessment of a region, performed by a sonographer or radiologist and issued as a report.",
      },
      {
        q: "Who can perform point-of-care ultrasound?",
        a: "Clinicians who have completed documented training and supervised practice for the specific examination type, and who are credentialed within the hospital's programme. Credentialing should be examination-specific rather than a single blanket authorisation.",
      },
      {
        q: "Does a handheld device provide adequate image quality?",
        a: "For many focused questions, yes — availability at the bedside often matters more than incremental image quality. However, handheld devices offer fewer probe options and less processing, so departments performing a wide range of focused examinations usually pair handheld devices with at least one fuller portable system.",
      },
      {
        q: "Must point-of-care examinations be documented and archived?",
        a: "Yes. If an examination influenced a management decision, the question asked, the findings, the operator and the limitations should be recorded, with representative images stored. Undocumented examinations that changed care are a governance risk regardless of how they were performed.",
      },
      {
        q: "Can a focused examination rule out a diagnosis?",
        a: "Generally no. Focused examinations are designed for rapid detection of specific findings, and their ability to exclude disease is limited — particularly where acoustic access is poor. A negative focused examination should prompt consideration of formal imaging when clinical suspicion persists.",
      },
      {
        q: "How should infection control be managed with shared devices?",
        a: "By defining cleaning requirements per probe and contact type, ensuring the approved agents are compatible with the device surfaces, and including cleaning competence in the credentialing requirement. Rapid patient turnover is precisely when reprocessing lapses occur.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "The clinical value is real; the governance has to be real too.",
  },
  {
    type: "p",
    text: "Point-of-care ultrasound shortens the distance between question and answer in the situations where that distance matters most. Realising that benefit safely depends on three things that have nothing to do with image quality: a written scope agreed with radiology, examination-specific credentialing with audit, and documentation that records both the finding and its limitations. Equip for availability and durability, train by examination type, and expand the scope only as governance keeps pace.",
  },
  {
    type: "articleCta",
    heading: "Equipping a point-of-care ultrasound programme?",
    subheading:
      "AbuFarha Medical Supplies supplies portable and handheld ultrasound systems with probe sets, training support and biomedical service.",
    technology: "Ultrasound Systems",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Clinical practice and safety",
        items: [
          { label: "World Health Organization — diagnostic imaging services", url: "https://www.who.int/" },
          { label: "World Federation for Ultrasound in Medicine and Biology — practice and safety statements", url: "https://wfumb.info/" },
        ],
      },
      {
        title: "Infection prevention",
        items: [
          { label: "World Health Organization — infection prevention and control", url: "https://www.who.int/" },
          { label: "International Electrotechnical Commission — ultrasonic equipment standards", url: "https://www.iec.ch/" },
        ],
      },
    ],
    note: "Local credentialing frameworks, specialty society guidance and manufacturer instructions govern practice; this article is orientation only.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Acute care imaging" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Portable imaging equipment" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Guidance synthesis and clinical practice",
    disclaimer:
      "Educational content. It does not confer competence and does not replace formal training, credentialing or local governance policy.",
  },
];
