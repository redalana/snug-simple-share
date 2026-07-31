/**
 * Radiation protection in the cath lab — Cath Lab cluster (supporting).
 */

import type { ContentBlock, TocItem } from "../blog";

export const CATH_LAB_RADIATION_PROTECTION_TOC: TocItem[] = [
  { id: "overview", title: "Why the Cath Lab Is Different" },
  { id: "principles", title: "The Three Principles That Govern Everything" },
  { id: "scatter", title: "Where Staff Dose Actually Comes From" },
  { id: "geometry", title: "Geometry: The Free Dose Reduction" },
  { id: "shielding", title: "Structural, Equipment and Personal Shielding" },
  { id: "monitoring", title: "Dosimetry and Dose Monitoring" },
  { id: "patient", title: "Patient Dose Management" },
  { id: "pregnancy", title: "Pregnant Staff and Vulnerable Patients" },
  { id: "governance", title: "Governance, Training and Records" },
  { id: "programme", title: "Building the Programme in a New Lab" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const CATH_LAB_RADIATION_PROTECTION_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Interventional cardiology is the highest occupational radiation exposure setting in most hospitals. Unlike diagnostic radiography, the operator stands beside the patient, inside the scatter field, for the entire duration of the procedure — and a complex case can run for hours.",
      "The consequence is that radiation protection in a cath lab is not a compliance exercise handled by a physicist once a year. It is a daily practice question about geometry, collimation, garment discipline and dose awareness, owned by the whole team.",
      "This guide covers where staff dose really originates, the geometry decisions that reduce it at no cost, how shielding and dosimetry should be structured, and what a defensible governance programme looks like in a hospital commissioning its first interventional room.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Protection principles, scatter physics, geometry, structural and personal shielding, dosimetry, patient dose management, pregnancy, governance and records",
    audience:
      "Interventional teams, cath lab nurses and radiographers, radiation protection supervisors, biomedical engineers and hospital administrators",
    readingTime: "15 min read",
    technology: "Angiography / Cath Lab Systems",
  },
  {
    type: "h2",
    id: "principles",
    text: "The Three Principles That Govern Everything",
    number: 1,
    body: "Every practical protection measure in a cath lab is an application of three principles. Teams that understand them can reason about novel situations instead of memorising rules.",
  },
  {
    type: "ul",
    items: [
      "Justification: the procedure must do more good than harm. This is a clinical decision, made before the patient enters the room.",
      "Optimisation: dose must be as low as reasonably achievable consistent with the clinical task. This is where geometry, collimation and protocol discipline live.",
      "Dose limitation: occupational exposures must remain within regulatory limits. Limits apply to staff, not to patients — patient dose is governed by optimisation, not by a limit.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "There is no dose limit for patients — and that is deliberate",
    text: "Applying a numerical limit to patient dose could deny a clinically necessary procedure. Instead, patient dose is managed by optimisation: use the lowest dose that answers the clinical question, monitor cumulative skin dose in long procedures, and follow up patients who exceed substantial-dose thresholds.",
  },
  {
    type: "h2",
    id: "scatter",
    text: "Where Staff Dose Actually Comes From",
    number: 2,
    body: "Staff are never exposed to the primary beam in normal practice. Occupational dose in a cath lab is almost entirely scattered radiation from the patient, and the patient's entrance surface is the dominant scatter source.",
  },
  {
    type: "ul",
    items: [
      "Scatter intensity falls steeply with distance from the patient — a single step back is one of the most effective interventions available.",
      "Scatter is highest on the X-ray tube side of the patient, which is why undercouch tube geometry protects the operator and overcouch geometry exposes them.",
      "Steep oblique and lateral projections raise both patient entrance dose and operator scatter substantially.",
      "Larger irradiated field size increases scatter proportionally, which is why collimation is a staff protection measure as much as a patient one.",
      "Unshielded gaps matter more than the shielding present: the eyes, the head and the upper arms are the commonly under-protected regions.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Tube position determines who gets the scatter",
    text: "In a lateral or steep oblique projection, staff standing on the tube side of the patient receive markedly higher scatter than staff on the detector side. Where the projection allows a choice, position the tube away from the operator. This is a free reduction that requires no equipment and no consumable.",
  },
  {
    type: "h2",
    id: "geometry",
    text: "Geometry: The Free Dose Reduction",
    number: 3,
    body: "Geometry changes reduce dose to patient and staff simultaneously, cost nothing, and require no additional equipment. They are the first thing to teach and the first thing to audit.",
  },
  {
    type: "table",
    headers: ["Action", "Effect on patient dose", "Effect on staff dose"],
    rows: [
      ["Bring detector close to the patient", "Reduced", "Reduced"],
      ["Increase distance from tube to patient", "Reduced entrance dose", "Reduced"],
      ["Collimate tightly to the region of interest", "Reduced integral dose", "Reduced scatter"],
      ["Use the largest useful field of view rather than magnification", "Reduced", "Reduced"],
      ["Reduce fluoroscopy pulse rate where clinically acceptable", "Reduced", "Reduced"],
      ["Use stored fluoroscopy loops instead of live screening", "Reduced", "Reduced"],
      ["Avoid steep obliquity where a shallower angle answers the question", "Reduced", "Substantially reduced"],
      ["Step back during acquisition runs", "No change", "Substantially reduced"],
      ["Keep hands out of the primary beam", "No change", "Large reduction in extremity dose"],
    ],
    caption: "Geometry and practice measures. Every row is available in every case at no cost.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Teams reach for equipment solutions before practice solutions. In audits, the largest reductions in operator dose come from collimation discipline, detector proximity and stepping back during acquisitions — none of which require capital.",
    clinicalInterpretation:
      "None of these measures compromise the clinical task when applied with judgement. Reducing pulse rate during catheter navigation and restoring it for device deployment is a normal, safe workflow.",
    hospitalRecommendation:
      "Audit these nine behaviours quarterly in live cases and feed the results back to the team by name. Behavioural audit changes dose faster than any purchase.",
  },
  {
    type: "h2",
    id: "shielding",
    text: "Structural, Equipment and Personal Shielding",
    number: 4,
    body: "Shielding works in three layers. Each layer is designed for a different exposure pathway, and none of them substitutes for the others.",
  },
  {
    type: "h3",
    text: "Structural shielding",
  },
  {
    type: "ul",
    items: [
      "Designed by a qualified medical physicist based on the specific system, workload and adjacent occupancy — never copied from another room.",
      "Covers walls, doors, the control room viewing panel and any floor or ceiling penetration.",
      "Must be verified by survey after installation and re-surveyed after any equipment change or building alteration.",
    ],
  },
  {
    type: "h3",
    text: "Equipment-mounted shielding",
  },
  {
    type: "ul",
    items: [
      "Ceiling-suspended lead-acrylic screen: the single most effective protection for the operator's head, neck and eyes when correctly positioned against the patient.",
      "Table-mounted lead skirts: protect the lower body and legs, a region personal aprons cover less reliably in the standing position.",
      "Disposable or reusable patient-mounted scatter-absorbing drapes, where local policy supports them.",
    ],
  },
  {
    type: "h3",
    text: "Personal protective equipment",
  },
  {
    type: "ul",
    items: [
      "Wrap-around lead or lead-equivalent aprons — back protection matters because operators turn away from the field.",
      "Thyroid collars for all staff in the room during exposure.",
      "Leaded eyewear with side protection, given the lens dose limit that applies to interventional operators.",
      "Correct fit: an apron that gapes at the side or is too short offers less protection than its lead equivalence implies.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Aprons fail invisibly and must be inspected",
    text: "Lead aprons crack and delaminate from folding and hanging on hooks. A defect in the material is not visible from the outside. Inspect every garment on a documented schedule using radiographic or fluoroscopic inspection, withdraw failed garments immediately, and store garments on proper hangers rather than folded.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "The protection failures we see most often",
    items: [
      "The ceiling-suspended screen parked out of the way rather than positioned against the patient.",
      "Aprons stored folded over chairs, causing cracks that nobody can see.",
      "Leaded eyewear available but not worn, despite the lens being a dose-limited organ.",
      "Collimation left wide because adjusting it interrupts workflow.",
      "Circulating staff standing close to the table during acquisitions with no reason to be there.",
      "Dosimeters left in the changing room, worn under the apron incorrectly, or never returned for reading.",
    ],
  },
  {
    type: "h2",
    id: "monitoring",
    text: "Dosimetry and Dose Monitoring",
    number: 5,
    body: "Dosimetry that is not read, trended and acted upon is a filing exercise. A functioning programme closes the loop from measurement to practice change.",
  },
  {
    type: "ul",
    items: [
      "Every person who enters the room during exposure requires personal dosimetry appropriate to local regulation.",
      "Interventional operators typically require additional monitoring beyond a single whole-body dosimeter — commonly for the lens of the eye and, where practice warrants, the extremities.",
      "Dosimeter placement follows local rules; the collar position outside the apron and the position under the apron measure different things and are not interchangeable.",
      "Read and review results on a defined cycle. Investigate outliers as practice questions, not as disciplinary matters.",
      "Real-time electronic dosimeters, where available, are powerful training tools because they connect a behaviour to a number in the moment.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Trend by operator and by procedure type",
    text: "A whole-department average hides everything. Trending dose per procedure by operator reveals technique differences that can be coached, and trending by procedure type reveals protocols that need optimisation. Both are more actionable than an annual departmental figure.",
  },
  {
    type: "h2",
    id: "patient",
    text: "Patient Dose Management",
    number: 6,
    body: "Patient dose management in interventional work is about the small number of long, complex procedures where skin dose can approach thresholds for tissue reactions.",
  },
  {
    type: "ul",
    items: [
      "Record dose indices for every procedure — dose-area product, air kerma at the reference point, and fluoroscopy time as a minimum.",
      "Set local notification levels so that the team is alerted during long procedures, not after them.",
      "Vary the beam entrance point in long procedures to avoid concentrating skin dose on one area.",
      "Define a substantial-dose threshold that triggers documented patient follow-up for skin reactions.",
      "Include dose in the procedure record so that cumulative exposure across repeat procedures is visible.",
      "Apply particular care in paediatric cases, where tissue radiosensitivity and remaining lifetime both increase the stakes.",
    ],
  },
  {
    type: "h2",
    id: "pregnancy",
    text: "Pregnant Staff and Vulnerable Patients",
    number: 7,
    body: "These situations are foreseeable and should be governed by written policy rather than improvised when they arise.",
  },
  {
    type: "ul",
    items: [
      "A declared pregnancy triggers a documented risk assessment and, commonly, additional monitoring for the dose to the fetus, following local regulation.",
      "Continued work in the cath lab is often possible with adjusted practice and monitoring — the decision is a formal assessment, not a departmental convention.",
      "For a pregnant patient requiring an interventional procedure, justification is clinical and urgent care is not withheld; optimisation and shielding are adjusted, and the case is documented.",
      "Paediatric protocols must be genuinely paediatric — adult protocols applied to children are a recurring and avoidable failure.",
    ],
  },
  {
    type: "h2",
    id: "governance",
    text: "Governance, Training and Records",
    number: 8,
    body: "Governance is what makes protection survive staff turnover. Individual good practice does not persist without it.",
  },
  {
    type: "requirements",
    checklist: [
      "Named radiation protection supervisor for the cath lab with defined authority.",
      "Access to a qualified medical physics expert for shielding design, dose audit and quality assurance.",
      "Written local rules displayed in the room and issued to all staff working in it.",
      "Documented induction and periodic refresher training for every role that enters the room.",
      "Equipment quality-assurance schedule with results retained and compared against the commissioning baseline.",
      "Garment inventory with unique identifiers and a documented inspection cycle.",
      "Dose review meeting on a defined cycle, with actions recorded and followed up.",
      "Incident reporting route for overexposures, equipment faults and protection failures.",
    ],
    specs: {
      title: "Records a cath lab should be able to produce on request",
      rows: [
        { label: "Shielding", value: "Physics design and post-installation verification survey" },
        { label: "Equipment", value: "Acceptance testing and current quality-assurance results" },
        { label: "Staff dose", value: "Dosimetry results, trends and investigation records" },
        { label: "Patient dose", value: "Per-procedure dose indices and follow-up records" },
        { label: "Garments", value: "Inventory and inspection results with withdrawal records" },
        { label: "Training", value: "Induction and refresher records per individual" },
      ],
    },
  },
  {
    type: "h2",
    id: "programme",
    text: "Building the Programme in a New Lab",
    number: 9,
    body: "In a hospital commissioning its first interventional room, the protection programme should be built alongside the room, not after the first patient.",
  },
  {
    type: "ul",
    items: [
      "At design stage: engage the medical physicist for shielding design before the walls are built and confirm control room sightlines.",
      "At procurement: specify dose-reduction features, dose reporting, ceiling-suspended screen and table skirts as part of the system, not as later accessories.",
      "Before commissioning: complete the shielding verification survey and acceptance testing, and issue the written local rules.",
      "At handover: deliver role-specific protection training and issue dosimetry to every person who will enter the room.",
      "First three months: audit collimation, screen use, garment discipline and staff positioning in live cases, and feed back results.",
      "Ongoing: quarterly dose review, annual quality assurance, documented garment inspection and refresher training.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Specify the ceiling-suspended screen in the tender",
    text: "The suspended lead-acrylic screen is the highest-value protection device in the room for the operator's eyes and head, and it is frequently omitted from tenders as an accessory. Specify it, along with table-mounted skirts, in the equipment scope so it arrives with the system and is used from the first case.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Where does staff radiation dose in a cath lab come from?",
        a: "Almost entirely from radiation scattered off the patient, not from the primary beam. That is why distance from the patient, tight collimation and correctly positioned screens are the dominant protective measures.",
      },
      {
        q: "Which single change reduces operator dose most?",
        a: "Correctly positioning the ceiling-suspended lead-acrylic screen against the patient, combined with stepping back during acquisition runs. Both are free and both are commonly neglected.",
      },
      {
        q: "Do lead aprons need to be tested?",
        a: "Yes. Lead and lead-equivalent garments crack and delaminate from folding, and the damage is invisible externally. Inspect them on a documented schedule with radiographic or fluoroscopic inspection and withdraw any garment that fails.",
      },
      {
        q: "Why are leaded glasses necessary if I wear an apron?",
        a: "The apron does not protect the eyes, and the lens of the eye is a dose-limited organ with a specific occupational limit. Interventional operators are among the few hospital staff who can approach that limit, which is why eye protection and eye dosimetry matter here.",
      },
      {
        q: "Is there a maximum radiation dose a patient may receive?",
        a: "No numerical limit applies to patient dose, because a limit could deny necessary care. Instead, dose is optimised, recorded, and long procedures are managed with notification levels and skin-dose follow-up above defined thresholds.",
      },
      {
        q: "Can a pregnant staff member continue working in the cath lab?",
        a: "Often yes, subject to a documented risk assessment, additional monitoring and any adjustments required by local regulation. It must be a formal assessment rather than an informal departmental decision.",
      },
      {
        q: "How does collimation protect staff as well as the patient?",
        a: "Scatter is produced by the irradiated volume of the patient. Reducing the field size reduces that volume, so tighter collimation lowers both the patient's integral dose and the scatter field the team stands in.",
      },
      {
        q: "Does lowering the fluoroscopy pulse rate degrade the procedure?",
        a: "Not when applied with judgement. Lower pulse rates are appropriate for catheter navigation and can be raised for device deployment or when temporal resolution genuinely matters. The key is that the choice is deliberate.",
      },
      {
        q: "Who is responsible for radiation protection in the cath lab?",
        a: "Accountability sits with the employer, exercised through a named radiation protection supervisor with access to a qualified medical physics expert. In practice, day-to-day protection is owned by every person in the room.",
      },
      {
        q: "How often should shielding be re-surveyed?",
        a: "After installation, after any equipment replacement or change of workload, and after any building alteration affecting the room's boundaries. Local regulation may also set a periodic interval.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Staff dose is scatter from the patient — distance, collimation and screens dominate everything else.",
      "Geometry improvements reduce patient and staff dose simultaneously at zero cost.",
      "The ceiling-suspended screen and table skirts are core equipment, not accessories; specify them in the tender.",
      "Lead garments fail invisibly and require a documented inspection and withdrawal cycle.",
      "Dosimetry only protects people if results are trended by operator and procedure and fed back into practice.",
    ],
  },
  {
    type: "editorialBoard",
    reviewers: [
      {
        role: "Radiation protection review",
        name: "AbuFarha Clinical Advisory Panel",
        credential: "Interventional radiation protection practice review",
      },
      {
        role: "Engineering review",
        name: "AbuFarha Biomedical Engineering Team",
        credential: "Angiography commissioning, shielding coordination and quality assurance",
      },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "International radiation protection guidance and installation practice",
    disclaimer:
      "Radiation protection is governed by national regulation. This article describes internationally recognised principles and practice; always follow your national regulatory requirements and the advice of your qualified medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "International protection guidance",
        items: [
          { label: "International Commission on Radiological Protection — avoidance of radiation injuries from interventional procedures" },
          { label: "International Atomic Energy Agency — radiation protection in interventional cardiology and radiology" },
        ],
      },
      {
        title: "Occupational dose and eye lens",
        items: [
          { label: "International Commission on Radiological Protection — statement on tissue reactions and the lens dose limit" },
        ],
      },
      {
        title: "Equipment and quality assurance",
        items: [
          { label: "International Electrotechnical Commission — interventional X-ray equipment standards" },
          { label: "Manufacturer dose management and quality-assurance documentation for the specific system" },
        ],
      },
    ],
    note: "National regulation takes precedence over international guidance wherever the two differ.",
  },
  {
    type: "articleCta",
    heading: "Commissioning a cath lab and building the protection programme?",
    subheading:
      "We coordinate shielding design, acceptance testing and staff training as part of installation. Send us your room drawings and planned case mix.",
    technology: "Cath Lab Systems",
  },
];
