/**
 * X-ray radiation dose and patient safety — X-Ray cluster (supporting).
 */

import type { ContentBlock, TocItem } from "../blog";

export const XRAY_DOSE_SAFETY_TOC: TocItem[] = [
  { id: "overview", title: "Why Radiography Dose Governance Matters" },
  { id: "principles", title: "Justification, Optimisation and Limitation" },
  { id: "technique", title: "Technique Factors and Their Effect" },
  { id: "dose-creep", title: "Dose Creep: The Digital Failure Mode" },
  { id: "paediatric", title: "Paediatric and Pregnancy Considerations" },
  { id: "staff", title: "Staff and Occupational Protection" },
  { id: "governance", title: "Building a Dose Governance Programme" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const XRAY_DOSE_SAFETY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "An individual radiograph delivers a small dose. Radiography as a service delivers more examinations than every other imaging modality combined, which is what makes it a meaningful contributor to collective medical exposure and a legitimate target for governance.",
      "Digital radiography changed the risk profile in a subtle way. Film punished overexposure with an obviously dark image; digital processing renders an overexposed acquisition as a perfectly acceptable-looking radiograph. The feedback loop that once limited dose was quietly removed.",
      "This guide sets out the principles, the technique factors that actually change dose, the mechanism by which digital departments drift upward, and the governance programme that keeps radiography dose where it should be.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Justification and optimisation principles, kV and mAs effects, collimation, grids and filtration, exposure index monitoring, dose creep, paediatric and pregnancy practice, occupational protection, dose governance programme design",
    audience:
      "Radiographers, radiology managers, medical physicists, referring clinicians and hospital radiation protection committees",
    readingTime: "15 min read",
    technology: "X-Ray Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Why Radiography Dose Governance Matters",
    number: 1,
    body: "The argument for governance is not that any single radiograph is dangerous. It is that volume multiplies small quantities, and that unnecessary examinations and avoidable overexposure are both preventable.",
  },
  {
    type: "ul",
    items: [
      "Radiography is usually the highest-volume imaging service in a hospital, so small per-examination changes have large aggregate effects.",
      "Overexposure in digital radiography is invisible without deliberate measurement, unlike in film.",
      "Repeat examinations double the dose for that projection and are largely a positioning and process problem.",
      "Paediatric patients have greater radiosensitivity and longer remaining life expectancy, making optimisation more consequential.",
      "Dose data is now routinely available from equipment, which turns governance from opinion into measurement.",
      "Regulatory expectations in most jurisdictions require documented justification, optimisation and comparison against diagnostic reference levels.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "The largest dose reduction available is the unnecessary examination",
    text: "No technique optimisation matches the effect of not performing an examination that will not change management. Referral criteria, vetting practice and access to prior imaging are dose-reduction tools, and they belong in the radiation protection programme rather than only in clinical governance.",
  },
  {
    type: "h2",
    id: "principles",
    text: "Justification, Optimisation and Limitation",
    number: 2,
    body: "Radiation protection in medical imaging rests on three principles, applied in order.",
  },
  {
    type: "table",
    headers: ["Principle", "Meaning in radiography", "Practical mechanism"],
    rows: [
      ["Justification", "Each examination must do more good than harm", "Referral criteria, vetting by trained staff, access to prior imaging"],
      ["Optimisation", "Dose as low as reasonably achievable consistent with the clinical purpose", "Protocol governance, collimation, exposure index monitoring, equipment performance"],
      ["Dose limitation", "Applies to staff and public, not to patients receiving justified examinations", "Shielding, distance, occupancy control, personal dosimetry"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Patient dose limits do not exist — and that is deliberate",
    text: "Applying a numerical dose limit to a justified diagnostic examination could deny a patient the image their treatment depends on. Patients are protected by justification and optimisation; dose limits protect staff and the public. Diagnostic reference levels are optimisation benchmarks, not limits.",
  },
  {
    type: "h2",
    id: "technique",
    text: "Technique Factors and Their Effect",
    number: 3,
    body: "A small number of controllable factors determine both dose and image quality in radiography.",
  },
  {
    type: "table",
    headers: ["Factor", "Effect on dose", "Effect on image", "Practical guidance"],
    rows: [
      ["Tube voltage (kV)", "Higher kV allows lower mAs and reduces patient dose", "Lower subject contrast", "Use the highest kV consistent with the diagnostic question"],
      ["Tube current-time (mAs)", "Directly proportional to dose", "Controls noise", "Reduce to the level where noise remains acceptable for the task"],
      ["Collimation", "Reduces irradiated volume and scatter", "Improves contrast", "Collimate to the clinical region on every exposure"],
      ["Filtration", "Removes low-energy photons that only add skin dose", "Minimal effect on diagnostic information", "Use manufacturer-specified filtration; consider added filtration in paediatrics"],
      ["Anti-scatter grid", "Increases dose substantially", "Improves contrast in thicker anatomy", "Omit for small extremities and many paediatric examinations"],
      ["Source-to-image distance", "Greater distance lowers entrance skin dose", "Improves geometric sharpness", "Use the longest practical distance"],
      ["Automatic exposure control", "Standardises exposure to detector signal", "Consistent density", "Verify chamber selection and calibration regularly"],
      ["Detector efficiency", "Sets the achievable dose floor", "Determines noise at a given dose", "A purchasing decision with permanent dose consequences"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Where optimisation effort pays off",
    clinicalInterpretation:
      "Collimation discipline, grid selection and correct automatic exposure control use are available immediately at no capital cost and produce reliable reductions. Detector efficiency and system capability set the ceiling, but they change only at replacement.",
    hospitalRecommendation:
      "Run an annual protocol review with medical physics covering kV/mAs pairs, grid use, collimation practice and paediatric protocols, and record the agreed protocols as departmental policy.",
  },
  {
    type: "h2",
    id: "dose-creep",
    text: "Dose Creep: The Digital Failure Mode",
    number: 4,
    body: "Dose creep is the gradual upward drift of exposure factors in digital departments, driven by the fact that higher dose produces cleaner-looking images with no visible penalty.",
  },
  {
    type: "ul",
    items: [
      "Cause: noise is visible, overexposure is not. Operators resolve uncertainty by exposing slightly more, and nothing corrects them.",
      "Detection: exposure index or deviation index monitoring, reviewed as a distribution per examination type rather than per case.",
      "Trigger points: define upper and lower action thresholds so both overexposure and underexposure are investigated.",
      "Reporting: publish anonymised departmental distributions so the team can see drift rather than being told about it.",
      "Correction: protocol adjustment, refresher training on positioning and collimation, and automatic exposure control verification.",
      "Institutionalisation: include exposure index review in the departmental quality meeting agenda so it survives staff turnover.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Recording dose data without reviewing it",
    text: "Many departments collect exposure index and dose area product data faithfully and never analyse it. Data that no one reviews provides regulatory paperwork and zero patient benefit. Assign an owner, a review frequency and an action threshold.",
  },
  {
    type: "h2",
    id: "paediatric",
    text: "Paediatric and Pregnancy Considerations",
    number: 5,
    body: "Children are not small adults for imaging purposes, and pregnancy requires a defined and unembarrassed process.",
  },
  {
    type: "ul",
    items: [
      "Paediatric protocols must be built separately by age or weight band; scaling adult factors down by judgement is unreliable.",
      "Grids should usually be omitted in small children, where scatter contribution is low and the dose penalty is high.",
      "Immobilisation and parental assistance reduce motion and therefore repeats, which is a dose measure as much as a comfort measure.",
      "Collimation matters more in small bodies, where a given field margin represents a larger proportion of the patient.",
      "Pregnancy enquiry should follow a written departmental rule, applied consistently, with a documented decision pathway for justified examinations.",
      "For examinations remote from the pelvis, foetal dose is very low; the decision process should be proportionate and documented rather than avoidant.",
      "Where an examination of the abdomen or pelvis in pregnancy is justified, involve medical physics for dose estimation and record the discussion.",
    ],
  },
  {
    type: "h2",
    id: "staff",
    text: "Staff and Occupational Protection",
    number: 6,
    body: "In fixed radiography rooms staff dose is normally negligible; in mobile and theatre work it requires active management.",
  },
  {
    type: "ul",
    items: [
      "Use the protected control position for fixed-room exposures, and never hold a patient or a detector during exposure unless there is no alternative and protection is used.",
      "Apply distance rigorously in mobile radiography — scatter falls sharply with distance, and two metres plus lead protection is the practical baseline.",
      "Warn and clear the area before exposure in wards, theatres and intensive care where bystanders may be present.",
      "Provide and require personal protective equipment sized for the individual, inspected periodically for integrity.",
      "Issue personal dosimetry according to local regulation and review results with the radiation protection supervisor.",
      "Include mobile equipment in the radiation protection programme; it is often reviewed less rigorously than fixed rooms despite riskier geometry.",
    ],
  },
  {
    type: "h2",
    id: "governance",
    text: "Building a Dose Governance Programme",
    number: 7,
    body: "A programme is a small number of documented commitments with named owners, not a policy document that no one opens.",
  },
  {
    type: "ul",
    items: [
      "Written protocols per examination and per patient size band, agreed with medical physics and reviewed annually.",
      "Automated dose data collection from equipment into a registry, with local reference levels derived from the department's own data.",
      "Comparison against national diagnostic reference levels, with documented investigation where levels are exceeded.",
      "Exposure index distribution review at a defined frequency, with action thresholds in both directions.",
      "Repeat and reject analysis by cause, feeding directly into training rather than into a filing system.",
      "Equipment quality assurance including automatic exposure control performance and dose indicator accuracy.",
      "Training records covering optimisation, paediatric practice and mobile radiography protection.",
      "An annual report to the radiation protection committee summarising dose performance, incidents and actions taken.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Does raising kV always reduce patient dose?",
        a: "Raising kV allows mAs to be reduced for the same detector signal, which generally lowers patient dose, but it also lowers subject contrast. The correct technique is the highest kV that still answers the clinical question — a judgement that should be embedded in agreed protocols rather than made per examination.",
      },
      {
        q: "What is an exposure index and why does it matter?",
        a: "It is a manufacturer-reported indicator of the radiation reaching the detector, which allows exposures to be compared against a target. Because digital images look acceptable across a wide exposure range, the exposure index is the primary practical tool for detecting overexposure and dose creep.",
      },
      {
        q: "Should lead aprons still be used for patient shielding?",
        a: "Practice has shifted substantially: for most examinations, collimation and technique optimisation deliver the protection that contact shielding was intended to provide, and misplaced shielding can trigger automatic exposure control errors that increase dose. Follow current national guidance and document the departmental policy.",
      },
      {
        q: "How do we know whether our doses are reasonable?",
        a: "Collect dose data by examination type, establish local reference levels from your own distribution, and compare them with published national diagnostic reference levels. Where you sit consistently above them, investigate protocol, equipment performance and practice with medical physics support.",
      },
      {
        q: "What should be done after an overexposure incident?",
        a: "Record it, estimate the dose with medical physics support, follow local incident reporting requirements, inform the patient according to policy, and — most importantly — identify and correct the process cause so the same failure cannot recur.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Strengthening radiography dose governance?",
    subheading:
      "AbuFarha Medical supplies, installs and supports digital radiography systems and works with departments on protocol optimisation, dose reporting and quality assurance.",
    technology: "X-Ray Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Radiography protocols and optimisation" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "X-ray equipment performance and quality assurance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "ICRP and IAEA radiation protection guidance, national diagnostic reference level publications and IEC equipment standards",
    disclaimer:
      "Radiation protection requirements, shielding rules and diagnostic reference levels are jurisdiction-specific. Follow local regulation and the advice of a qualified medical physics expert and radiation protection adviser.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Radiation protection principles",
        items: [
          { label: "ICRP recommendations on radiological protection in medicine" },
          { label: "IAEA Basic Safety Standards for protection against ionizing radiation" },
        ],
      },
      {
        title: "Dose reference levels and optimisation",
        items: [
          { label: "National diagnostic reference level publications for radiography" },
          { label: "IAEA guidance on paediatric radiography dose optimisation" },
        ],
      },
      {
        title: "Equipment performance",
        items: [
          { label: "IEC 60601-2 series for diagnostic X-ray equipment" },
          { label: "Manufacturer quality assurance and dose reporting documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Radiography dose matters because of volume, not because any single examination is high-dose.",
      "Justification comes first: the unnecessary examination is the largest available dose saving.",
      "kV, mAs, collimation, grid selection, filtration and distance are the controllable dose levers; detector efficiency sets the floor.",
      "Digital systems hide overexposure, so exposure index distributions must be monitored with action thresholds in both directions.",
      "Paediatric protocols must be built by size band, usually without grids, with immobilisation to prevent repeats.",
      "Mobile and theatre radiography, not fixed rooms, is where occupational protection needs active management.",
      "Governance means named owners, reviewed data, local reference levels and repeat analysis that feeds training.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "Radiography dose is controlled by process discipline supported by measurement, not by equipment alone.",
  },
  {
    type: "p",
    text: "Departments that agree protocols with physics, monitor exposure index distributions, analyse repeats by cause and review the results in a standing meeting keep doses low and can prove it. Departments that collect the same data without reviewing it drift upward and only discover the drift during an inspection.",
  },
];
