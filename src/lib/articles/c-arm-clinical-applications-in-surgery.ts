/**
 * C-arm clinical applications in surgery — C-Arms cluster.
 */

import type { ContentBlock, TocItem } from "../blog";

export const C_ARM_SURGICAL_APPLICATIONS_TOC: TocItem[] = [
  { id: "role", title: "The Role of Intraoperative Fluoroscopy" },
  { id: "ortho", title: "Orthopaedics and Trauma" },
  { id: "spine", title: "Spinal Surgery" },
  { id: "vascular", title: "Vascular and Endovascular Work" },
  { id: "urology", title: "Urology and Hepatobiliary Procedures" },
  { id: "cardiac", title: "Cardiac Device Implantation" },
  { id: "pain", title: "Pain Management and Interventional Procedures" },
  { id: "workflow", title: "Theatre Workflow and Positioning Discipline" },
  { id: "matching", title: "Matching System Class to Specialty" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const C_ARM_SURGICAL_APPLICATIONS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Intraoperative fluoroscopy changed surgery by allowing a surgeon to confirm what is happening inside the patient while it is happening, rather than afterwards. A fracture reduction can be checked before fixation is committed; a pedicle screw trajectory can be verified before it is advanced; a guidewire can be followed into a vessel it cannot be seen entering.",
      "Different specialties, however, use the same C-arm in quite different ways. Orthopaedic trauma uses brief, frequent exposures with constant projection change. Vascular work uses sustained fluoroscopy with contrast and subtraction. Spinal surgery demands steep lateral projections through thick anatomy. Pain management uses very short exposures at high case volume where cumulative dose across a list is the concern.",
      "This article sets out how each major specialty uses intraoperative fluoroscopy, what that means for imaging demand, how theatre workflow and positioning discipline affect both dose and case time, and how to match system class to the specialties a C-arm will actually serve.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Specialty-by-specialty fluoroscopy use, imaging demand profiles, projection requirements, theatre workflow and positioning, sterile field discipline, and matching C-arm class to clinical service",
    audience:
      "Surgeons, theatre managers, radiographers, clinical directors and biomedical engineering teams",
    readingTime: "15 min read",
    technology: "C-Arms",
  },
  {
    type: "h2",
    id: "role",
    text: "The Role of Intraoperative Fluoroscopy",
    number: 1,
    body: "Fluoroscopy in theatre answers three kinds of question, and knowing which is being asked determines how the system should be used.",
  },
  {
    type: "table",
    headers: ["Question type", "Example", "Imaging implication"],
    rows: [
      ["Guidance", "Advancing a guidewire, needle or nail", "Live imaging required; low pulse rate usually sufficient"],
      ["Verification", "Confirming reduction, implant position or device placement", "Short exposures with last-image hold; no continuous screening needed"],
      ["Documentation", "Recording the final result for the operative record", "Single stored acquisitions; dose recorded"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Most avoidable dose is verification performed as guidance",
    clinicalInterpretation:
      "Continuous screening while an implant is positioned by hand, or while the team discusses the next step, delivers dose without adding information. The same confirmation is available from short exposures with last-image hold.",
    hospitalRecommendation:
      "Train theatre teams to distinguish guidance from verification explicitly, and to use last-image hold and stored reference images as the default for verification. This routinely reduces fluoroscopy time per case without altering surgical technique.",
  },
  {
    type: "h2",
    id: "ortho",
    text: "Orthopaedics and Trauma",
    number: 2,
    body: "Orthopaedic trauma is the highest-volume C-arm specialty in most hospitals and sets the baseline requirement for a general-purpose system.",
  },
  {
    type: "ul",
    items: [
      "Fracture reduction and provisional fixation: repeated short exposures in two orthogonal planes, with frequent projection change.",
      "Intramedullary nailing: distal locking in particular requires precise perfect-circle technique and generates a significant share of the case's total fluoroscopy.",
      "Dynamic hip screw and plating: alignment and screw length verification in AP and lateral projections.",
      "Joint arthroplasty: component position and limb length verification, often with limited fluoroscopy but critical accuracy.",
      "Paediatric fracture work: dose sensitivity is paramount; grid removal and low pulse rates matter more than in adult work.",
      "Extremity surgery: hand, wrist, foot and ankle procedures where a mini C-arm gives adequate field with much lower dose and footprint.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Distal locking is where the dose accumulates",
    text: "In intramedullary nailing, the perfect-circle technique needed to locate distal locking holes can account for a large fraction of the whole case's fluoroscopy time. Systems with good low-dose pulsed performance and stable image quality at low dose rates help most in exactly this task, and technique training pays for itself quickly.",
  },
  {
    type: "h2",
    id: "spine",
    text: "Spinal Surgery",
    number: 3,
    body: "Spinal work is the most demanding orthopaedic application of intraoperative fluoroscopy because of anatomy, angulation and cumulative time.",
  },
  {
    type: "ul",
    items: [
      "Pedicle screw placement requires accurate AP and true lateral projections, often through thick soft tissue at steep angulation — the highest generator demand in routine theatre work.",
      "Level identification and vertebral counting in obese patients can require substantial penetration and generates high entrance dose.",
      "Vertebroplasty and kyphoplasty involve sustained fluoroscopy with cement injection monitoring, where continuous imaging is genuinely necessary.",
      "Deformity correction generates long total fluoroscopy across multiple levels, making thermal capacity and dose management central.",
      "Volumetric cone-beam acquisition, where available, allows intraoperative confirmation of screw position that two-plane fluoroscopy cannot provide reliably.",
      "Navigation integration converts intraoperative imaging from confirmation into continuous instrument tracking, reducing repeat fluoroscopy on complex constructs.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Steep laterals expose generator limits",
    text: "A true lateral through the lumbosacral region in a large patient is the projection that separates adequately specified systems from underspecified ones. If a C-arm will be used for spinal instrumentation, test that projection on a representative patient thickness during evaluation — not the easy AP.",
  },
  {
    type: "h2",
    id: "vascular",
    text: "Vascular and Endovascular Work",
    number: 4,
    body: "Endovascular procedures use fluoroscopy for sustained periods with contrast, and they place demands closer to a fixed angiography lab than to routine theatre work.",
  },
  {
    type: "table",
    headers: ["Requirement", "Why it matters", "Consequence if absent"],
    rows: [
      ["Sustained fluoroscopy capability", "Access, navigation and device deployment take time", "Thermal interruption mid-procedure"],
      ["Digital subtraction angiography", "Removes bone and soft tissue from the vascular image", "Reduced confidence in vessel assessment"],
      ["Roadmapping", "Overlays the vascular map on live imaging", "More contrast and more fluoroscopy for the same navigation"],
      ["Adequate field size", "Covers the vascular segment of interest", "Repeated repositioning and additional runs"],
      ["Contrast injector integration", "Consistent, controlled opacification", "Variable image quality, more repeat runs"],
      ["Dose monitoring", "Long cases accumulate significant skin dose", "Unrecognised risk of skin injury in prolonged procedures"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "A mobile C-arm is a bridge to endovascular capability, not a substitute for a lab",
    clinicalInterpretation:
      "Selected endovascular procedures are performed safely with a high-specification mobile flat-panel C-arm. Sustained, complex intervention is not — generator power, cooling, detector size and positional precision are materially different in a fixed system.",
    hospitalRecommendation:
      "Where an endovascular service is intended to grow, plan the fixed angiography facility as part of the service plan and use the mobile system for the procedures it genuinely supports. Specifying a mobile C-arm as a permanent substitute constrains the service and shortens the system's life through overuse.",
  },
  {
    type: "h2",
    id: "urology",
    text: "Urology and Hepatobiliary Procedures",
    number: 5,
    body: "These procedures use fluoroscopy primarily with contrast, in moderate durations, with particular positioning demands.",
  },
  {
    type: "ul",
    items: [
      "Retrograde studies and ureteric stenting: contrast-guided imaging with moderate fluoroscopy time and frequent short exposures.",
      "Percutaneous nephrolithotomy: access establishment under fluoroscopy, sometimes with oblique projections requiring good angulation range.",
      "Stone procedures: intermittent imaging with the patient in lithotomy or prone position, where table and C-arm interaction must be planned.",
      "ERCP and biliary drainage: contrast-dependent imaging, often in a dedicated fluoroscopy room but frequently performed in theatre with a mobile system.",
      "In all of these, table radiolucency and the ability to position the C-arm around a table with attachments determines whether the intended projections are achievable.",
    ],
  },
  {
    type: "h2",
    id: "cardiac",
    text: "Cardiac Device Implantation",
    number: 6,
    body: "Pacemaker and implantable device work uses moderate fluoroscopy with high precision requirements in a small field.",
  },
  {
    type: "p",
    text: "Lead positioning requires stable image quality at low dose over several minutes, reliable last-image hold for comparison, and adequate detector coverage of the chest. Where a hospital performs device implantation in theatre rather than in a dedicated lab, a flat-panel system with good low-dose performance and clean image processing is generally worth the difference, because the task depends on discriminating fine lead tip position rather than gross anatomy.",
  },
  {
    type: "h2",
    id: "pain",
    text: "Pain Management and Interventional Procedures",
    number: 7,
    body: "Pain interventions represent the highest case volume per fluoroscopy minute of any specialty, and the dose question shifts from the individual case to the list.",
  },
  {
    type: "ul",
    items: [
      "Facet joint, epidural and nerve root injections use very short exposures, often only a few seconds per level.",
      "Because case volume is high, the operator's cumulative occupational dose across a list becomes the governing concern rather than any single patient's dose.",
      "Low pulse rates, tight collimation and last-image hold are sufficient for the great majority of these procedures.",
      "Consistent patient and C-arm positioning between cases reduces both setup time and total screening across a list.",
      "Because the anatomy is standard and the field small, image-intensifier systems perform these procedures entirely adequately.",
    ],
  },
  {
    type: "h2",
    id: "workflow",
    text: "Theatre Workflow and Positioning Discipline",
    number: 8,
    body: "Most C-arm inefficiency is workflow, not imaging. The same system in two theatres can produce very different case times and dose totals.",
  },
  {
    type: "requirements",
    checklist: [
      "Plan C-arm side, table orientation and monitor position before the patient is draped, based on the projections the case requires",
      "Confirm the table is radiolucent through the operative field and that attachments do not obstruct the intended projections",
      "Test the full range of required movements before draping, so limitations are found early",
      "Establish a sterile draping protocol for the C-arm that does not restrict rotation or angulation",
      "Position the detector close to the patient and keep the tube as far below as the geometry allows",
      "Set pulse rate and dose mode for the case type at the start rather than accepting the previous case's settings",
      "Use last-image hold and stored reference images for verification rather than continuous screening",
      "Nominate one person responsible for the C-arm during the case, with documented competence",
      "Position mobile shields and confirm all present are wearing appropriate protection before the first exposure",
      "Record fluoroscopy time and dose-area product in the operative record",
    ],
    specs: {
      title: "Positioning decisions and their effect",
      rows: [
        { label: "Detector close to patient", value: "Lower skin dose, better image quality" },
        { label: "Tube far from patient", value: "Reduced entrance skin dose" },
        { label: "Under-couch tube", value: "Substantially lower scatter to operator head and neck" },
        { label: "Tight collimation", value: "Lower patient dose and lower scatter to team" },
        { label: "Low pulse rate", value: "Proportional dose reduction with adequate guidance" },
        { label: "Last-image hold", value: "Verification without additional exposure" },
        { label: "Reduced obliquity", value: "Lower entrance dose and less scatter" },
        { label: "Increased staff distance", value: "Scatter falls with square of distance" },
      ],
    },
  },
  {
    type: "h2",
    id: "matching",
    text: "Matching System Class to Specialty",
    number: 9,
    body: "The specialty mix a C-arm will serve should determine its class before any brand comparison begins.",
  },
  {
    type: "table",
    headers: ["Predominant use", "Recommended class", "Rationale"],
    rows: [
      ["General orthopaedics and trauma", "Well-specified image intensifier or entry flat panel", "Stable requirement, high volume, value in reliability and availability"],
      ["Hand, wrist, foot and ankle only", "Mini C-arm", "Adequate field, minimal dose and footprint, lower cost"],
      ["Spinal instrumentation", "Flat panel, 3D cone beam where navigation is used", "Steep laterals, thick anatomy, volumetric confirmation"],
      ["Endovascular and vascular access", "High-specification flat panel with DSA and roadmap", "Sustained fluoroscopy, subtraction, contrast work"],
      ["Cardiac device implantation", "Flat panel with strong low-dose performance", "Fine lead position discrimination over several minutes"],
      ["High-volume pain management", "Image intensifier or mini system", "Very short exposures, standard anatomy, small field"],
      ["Mixed general surgical service", "Flat panel general-purpose system", "Breadth of use justifies distortion-free geometry and dose efficiency"],
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Can one C-arm serve all surgical specialties in a hospital?",
        a: "It can serve most, but not equally well. A general-purpose flat-panel system covers orthopaedics, urology, pain work and basic vascular access competently. Complex endovascular work and navigation-guided spinal surgery have requirements that a general-purpose system meets only partially, and high-volume services usually justify a second system for availability alone.",
      },
      {
        q: "Does 3D cone-beam imaging replace intraoperative CT or navigation?",
        a: "It complements them. Cone-beam acquisition gives volumetric confirmation within the theatre and can feed navigation, but its image quality and field of view differ from diagnostic CT. Where implants must be confirmed before closure, it addresses that question directly; it does not replace diagnostic imaging.",
      },
      {
        q: "How much does technique training reduce dose?",
        a: "Collimation, pulse rate selection and replacing continuous screening with last-image hold each produce substantial reductions independently, and they compound. Training theatre teams in these three habits is consistently the highest-yield dose reduction intervention available, and it requires no capital.",
      },
      {
        q: "Should the C-arm be operated by the surgeon or a radiographer?",
        a: "Local rules and national requirements govern this and vary by jurisdiction. What matters clinically is that the operator holds documented competence in the system and in radiation protection, and that responsibility is assigned explicitly for each case rather than assumed.",
      },
      {
        q: "Why do some projections fail in theatre despite an adequate system?",
        a: "Usually table geometry and attachments rather than the C-arm. Non-radiolucent table sections, side supports and traction attachments block projections that the C-arm itself could achieve. Testing the required movements before draping identifies this while it can still be corrected.",
      },
      {
        q: "How is patient skin dose managed in long cases?",
        a: "By monitoring cumulative dose-area product during the procedure, varying beam entry angle so dose is not concentrated on one skin area, using the lowest adequate dose rate, and recording totals so prolonged cases can be followed up according to local policy.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning intraoperative imaging across your theatres?",
    subheading:
      "AbuFarha Medical helps hospitals match C-arm class to surgical casemix, integrate systems into theatre workflow, and train teams in dose-efficient technique.",
    technology: "C-Arms",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Surgical and interventional imaging" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Fluoroscopy systems and theatre integration" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel:
      "ICRP and IAEA interventional radiation protection guidance, surgical specialty society imaging guidance, and AbuFarha Medical clinical applications experience",
    disclaimer:
      "Clinical technique remains the responsibility of the operating surgeon and local governance. This article describes imaging requirements and does not prescribe surgical practice.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Radiation protection in procedures",
        items: [
          { label: "ICRP guidance on radiological protection in fluoroscopically guided interventions" },
          { label: "IAEA guidance on occupational radiation protection in interventional procedures" },
        ],
      },
      {
        title: "Equipment standards",
        items: [
          { label: "IEC 60601-2-43 — interventional X-ray equipment requirements" },
        ],
      },
      {
        title: "Specialty guidance",
        items: [
          { label: "Orthopaedic and spinal society guidance on intraoperative imaging" },
          { label: "Vascular society guidance on endovascular imaging requirements" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as guidance is revised.",
  },
  {
    type: "takeaways",
    items: [
      "Guidance, verification and documentation are different tasks; treating verification as guidance is the largest source of avoidable dose.",
      "Orthopaedic trauma sets the baseline requirement; distal locking accounts for a disproportionate share of case fluoroscopy.",
      "Spinal instrumentation demands steep laterals through thick anatomy — the projection that exposes underspecified generators.",
      "Sustained endovascular work needs a fixed lab; a mobile flat-panel system bridges to it rather than replacing it.",
      "In high-volume pain work, cumulative operator dose across the list governs rather than single-case dose.",
      "Most C-arm inefficiency is workflow: side, table, drape and movement planning before the patient is draped.",
      "Specialty mix should determine system class before any brand comparison starts.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 10,
    body: "The clinical value of a C-arm is realised in how it is specified for the service and how it is used in the room.",
  },
  {
    type: "p",
    text: "A system chosen against the hospital's real specialty mix, positioned deliberately for each case, operated by teams who distinguish guidance from verification, and supported well enough to be available when a trauma list needs it, will change surgical practice for the better. A system chosen on price and used on default settings will deliver more dose for less information — with the same equipment on the same list.",
  },
];
