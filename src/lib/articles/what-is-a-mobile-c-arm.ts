/**
 * What is a mobile C-arm? — C-Arms cluster pillar.
 */

import type { ContentBlock, TocItem } from "../blog";

export const WHAT_IS_A_MOBILE_C_ARM_TOC: TocItem[] = [
  { id: "what", title: "What a Mobile C-Arm Is" },
  { id: "components", title: "The Imaging Chain, Component by Component" },
  { id: "types", title: "Types of Mobile C-Arm" },
  { id: "specs", title: "The Specifications That Actually Matter" },
  { id: "clinical", title: "Where C-Arms Are Used" },
  { id: "dose", title: "Dose and Radiation Safety in Theatre" },
  { id: "requirements", title: "Siting and Infrastructure Requirements" },
  { id: "lifecycle", title: "Service Life and Ownership" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const WHAT_IS_A_MOBILE_C_ARM_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A mobile C-arm is a wheeled fluoroscopy system that brings live X-ray imaging to the operating theatre, the emergency department and the interventional suite. Its name describes its shape: a C-shaped arm carrying an X-ray tube at one end and a detector at the other, arranged so the beam passes through the anatomy of interest and the surgeon can position the imaging around a patient who does not move.",
      "That single design decision — moving the imaging rather than the patient — is what makes the C-arm the most widely used interventional imaging system in a hospital. Orthopaedic fracture fixation, spinal instrumentation, urology, vascular access, pain management, cardiac pacing and trauma surgery all depend on it, and in most hospitals a small number of C-arms support a far larger number of theatres.",
      "This article explains what a mobile C-arm is, how its imaging chain works, how flat-panel and image-intensifier systems differ, which specifications determine clinical capability, how dose is controlled in a theatre environment, and what the system requires from the hospital in siting, power and service terms.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "C-arm architecture and imaging chain, flat-panel versus image intensifier, mini and 3D cone-beam systems, specifications that determine capability, clinical applications, theatre dose management, siting and service requirements",
    audience:
      "Surgeons, theatre managers, radiographers, biomedical engineers and hospital procurement teams",
    readingTime: "16 min read",
    technology: "C-Arms",
  },
  {
    type: "h2",
    id: "what",
    text: "What a Mobile C-Arm Is",
    number: 1,
    body: "A C-arm is a complete fluoroscopy system compressed into a movable form: generator, tube, collimator, detector, image processing and display, all supported on a single mobile base with a second mobile monitor cart.",
  },
  {
    type: "p",
    text: "Two capabilities distinguish it from a radiographic X-ray system. First, it produces continuous or pulsed live imaging, so the surgeon sees an instrument, implant or contrast bolus moving in real time rather than in a series of still exposures. Second, the C geometry allows the beam to be rotated, angled and slid around the patient — orbital rotation, angulation, wig-wag, vertical lift and horizontal travel — so the required projection is obtained without repositioning a draped, anaesthetised patient in a sterile field.",
  },
  {
    type: "p",
    text: "The consequence is that a C-arm is a surgical instrument as much as an imaging device. It is operated within a sterile environment, under time pressure, by teams whose primary training is surgical rather than radiographic. Almost every practical question about C-arm selection, dose management and service reliability follows from that context.",
  },
  {
    type: "h2",
    id: "components",
    text: "The Imaging Chain, Component by Component",
    number: 2,
    body: "Image quality and dose are determined by the whole chain, not by any single component. Understanding what each element contributes makes specification comparisons meaningful.",
  },
  {
    type: "diagram",
    id: "mri-signal-chain",
    title: "C-arm imaging chain",
    purpose:
      "Traces the path from generator and X-ray tube through collimation, patient attenuation, detector, image processing and display, showing where dose and image quality are determined.",
    alt: "Diagram of a mobile C-arm imaging chain from generator and X-ray tube through collimator, patient, detector, image processing and monitor display",
    caption:
      "Every element between generator and monitor contributes to the dose required for a usable image.",
  },
  {
    type: "table",
    headers: ["Component", "Function", "Why it matters clinically"],
    rows: [
      ["High-frequency generator", "Produces controlled kV and mA for the exposure", "Output and stability set the maximum patient thickness the system can penetrate"],
      ["X-ray tube and anode", "Generates the X-ray beam", "Heat capacity determines how long continuous fluoroscopy can run before thermal limits interrupt the case"],
      ["Collimator", "Restricts the beam to the region of interest", "The single most effective dose reduction tool available to the operator"],
      ["Anti-scatter grid", "Removes scattered radiation reaching the detector", "Improves contrast in thicker anatomy; removable for paediatric and thin-part imaging"],
      ["Detector", "Converts X-rays to an electronic image", "Determines dose efficiency, geometric fidelity and field size"],
      ["Automatic dose rate control", "Adjusts exposure factors to anatomy in real time", "Maintains image quality across patient sizes without manual technique changes"],
      ["Image processing", "Noise reduction, contrast enhancement, edge definition", "Allows lower dose for the same diagnostic confidence — and can mask degradation"],
      ["Display and workstation", "Live and reference image presentation", "Reference image hold and roadmap reduce repeat fluoroscopy"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Tube heat capacity is the specification that ends cases early",
    clinicalInterpretation:
      "Long orthopaedic and vascular cases, obese patients and steep angulations all raise the fluoroscopy demand on the tube. A system with limited anode heat capacity reaches a thermal limit and forces a cooling pause — which happens at the worst possible moment, mid-procedure.",
    hospitalRecommendation:
      "Specify tube heat capacity and continuous fluoroscopy duration against the hospital's actual longest and heaviest cases, not against an average. Where vascular, spinal or bariatric work is planned, this specification deserves more weight than detector marketing claims.",
  },
  {
    type: "h2",
    id: "types",
    text: "Types of Mobile C-Arm",
    number: 3,
    body: "Four distinct classes of system exist, and they are not interchangeable. Selecting the wrong class is the most common and most expensive C-arm procurement error.",
  },
  {
    type: "table",
    headers: ["Class", "Typical use", "Practical characteristics"],
    rows: [
      ["Image-intensifier C-arm", "General orthopaedics, trauma, pain management, urology", "Proven and economical; curved input field with some geometric distortion; larger detector housing"],
      ["Flat-panel C-arm", "Vascular, spinal, cardiac pacing, high-volume theatres", "Distortion-free rectangular field, greater dose efficiency, more compact detector, higher acquisition cost"],
      ["Mini C-arm", "Hand, wrist, foot and ankle surgery", "Small field, low output, minimal footprint and dose; unsuitable for body imaging"],
      ["3D / cone-beam C-arm", "Spinal instrumentation, complex trauma, navigation-guided surgery", "Adds rotational volumetric acquisition and navigation integration; heavier, greater infrastructure demand"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Flat panel is not automatically the right answer",
    text: "Flat-panel detectors offer distortion-free geometry and better dose efficiency, which matters for vascular work, long spinal cases and quantitative measurement. For routine fracture fixation in a district hospital, a well-specified image-intensifier system with good dose control and reliable service support may deliver more clinical value per unit of capital — and remain serviceable longer.",
  },
  {
    type: "h2",
    id: "specs",
    text: "The Specifications That Actually Matter",
    number: 4,
    body: "C-arm specification sheets are long. A short list of parameters explains most of the difference in clinical performance.",
  },
  {
    type: "ul",
    items: [
      "Generator output in kW, and the maximum kV and mA available — the determinant of penetration in large patients and steep obliquity.",
      "Anode heat capacity and continuous fluoroscopy duration before thermal limitation.",
      "Detector type and field size, and whether magnification modes are electronic or true detector zoom.",
      "Free space (the gap between tube and detector) and depth of the C, which together determine whether the system can encircle a large patient or reach a lateral spinal projection.",
      "Orbital rotation and angulation range, which determine achievable projections without patient repositioning.",
      "Pulsed fluoroscopy rates available, including low pulse rates for dose-sensitive work.",
      "Last-image hold, reference image display, roadmapping and digital subtraction where vascular work is planned.",
      "Dose display, dose-area product recording and structured dose reporting to the hospital's dose management system.",
      "Storage capacity, DICOM connectivity and PACS integration, including whether images are archived reliably rather than kept on the trolley.",
      "Weight, footprint and turning circle relative to the actual theatres and corridors the system must serve.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Measure the doorways before you specify the system",
    text: "C-arms are moved between theatres daily. Weight, wheel design, turning circle and door widths determine whether the system is genuinely shared or effectively fixed to one room. This is measured in an hour and is regularly discovered after delivery.",
  },
  {
    type: "h2",
    id: "clinical",
    text: "Where C-Arms Are Used",
    number: 5,
    body: "The breadth of C-arm use is why utilisation is usually underestimated during procurement.",
  },
  {
    type: "table",
    headers: ["Specialty", "Typical procedures", "Imaging demand"],
    rows: [
      ["Orthopaedics and trauma", "Fracture reduction, intramedullary nailing, plating, joint replacement verification", "Short bursts, frequent projection changes, high case volume"],
      ["Spinal surgery", "Pedicle screw placement, vertebroplasty, deformity correction", "Steep laterals, thick anatomy, high cumulative time; 3D benefit"],
      ["Vascular and endovascular", "Access, angioplasty, stenting, embolisation", "Long fluoroscopy, subtraction and roadmap, high generator demand"],
      ["Urology", "Ureteric stenting, PCNL, stone procedures", "Contrast studies with moderate fluoroscopy time"],
      ["Cardiology", "Pacemaker and device implantation", "Moderate fluoroscopy with precise lead positioning"],
      ["Pain management", "Nerve blocks, facet and epidural injections", "Very short exposures, high case volume, dose sensitivity"],
      ["Gastrointestinal and hepatobiliary", "ERCP, biliary drainage", "Contrast-dependent, moderate duration"],
      ["Emergency medicine", "Reduction and line placement", "Unscheduled, availability-critical"],
    ],
  },
  {
    type: "h2",
    id: "dose",
    text: "Dose and Radiation Safety in Theatre",
    number: 6,
    body: "The C-arm is the largest source of occupational radiation exposure for surgical teams, because the operator stands beside the beam rather than behind a control barrier.",
  },
  {
    type: "ul",
    items: [
      "Collimate to the region of interest for every projection; nothing else reduces both patient and scatter dose as effectively.",
      "Use pulsed fluoroscopy at the lowest clinically adequate rate, and use last-image hold instead of continuous screening while planning the next step.",
      "Keep the detector as close to the patient as possible and the tube as far from the patient as the geometry allows — this reduces skin dose and improves image quality simultaneously.",
      "Prefer the under-couch tube position; an over-couch tube substantially increases scatter to the operator's head and neck.",
      "Avoid steep obliquity where possible, since it raises both patient entrance dose and scatter.",
      "Wear correctly fitted lead aprons and thyroid shields, use ceiling-suspended or mobile shields where available, and consider protective eyewear for high-volume interventionalists.",
      "Increase distance whenever imaging is not being actively guided — scatter falls with the square of distance.",
      "Ensure personal dosimetry is worn and read for every regular theatre team member, not only for radiographers.",
      "Record dose-area product and fluoroscopy time for each case, and review outliers as a quality process rather than an incident.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "The dose the surgeon receives is scatter from the patient",
    text: "Occupational dose in theatre comes overwhelmingly from radiation scattered by the patient, not from the tube directly. Every measure that lowers patient dose lowers staff dose in the same proportion — which is why collimation, pulse rate and tube-side geometry are safety decisions for the whole team, not only for the patient.",
  },
  {
    type: "h2",
    id: "requirements",
    text: "Siting and Infrastructure Requirements",
    number: 7,
    body: "Mobile does not mean requirement-free. A C-arm imposes real conditions on the theatres it serves and on the hospital's radiation governance.",
  },
  {
    type: "requirements",
    checklist: [
      "Confirm structural shielding adequacy for fluoroscopy in every theatre where the system will be used, assessed for the intended workload",
      "Verify dedicated electrical supply with adequate capacity and appropriate protective earthing in each theatre",
      "Confirm door widths, corridor turning circles, thresholds and any lift dimensions on the intended travel route",
      "Provide secure, level parking space with charging where applicable, out of the sterile traffic path",
      "Provide adequate mobile protective shielding and sufficient lead aprons for full theatre teams",
      "Establish network connectivity and PACS integration, including wireless coverage if used for image transfer",
      "Register the system with the hospital radiation authorisation and update the radiation risk assessment",
      "Arrange acceptance testing and a physics dose survey before first clinical use",
      "Provide documented operator training and a local rule set covering who may operate the system",
      "Include the system in the preventive maintenance schedule and quality control programme from commissioning",
    ],
    specs: {
      title: "Typical mobile C-arm planning data",
      rows: [
        { label: "System class", value: "Image intensifier, flat panel, mini or 3D cone beam" },
        { label: "Generator output", value: "Specified in kW against intended casemix" },
        { label: "Power supply", value: "Dedicated theatre circuit, capacity confirmed by manufacturer data" },
        { label: "Shielding assessment", value: "Required per theatre, per intended workload" },
        { label: "Radiation authorisation", value: "System-specific registration and risk assessment" },
        { label: "Acceptance testing", value: "Physics survey and dose measurement before clinical use" },
        { label: "Quality control", value: "Scheduled image quality and dose checks" },
        { label: "Training", value: "Documented operator competence for surgical and nursing teams" },
      ],
    },
  },
  {
    type: "h2",
    id: "lifecycle",
    text: "Service Life and Ownership",
    number: 8,
    body: "C-arms live harder lives than fixed imaging systems: they are moved daily, operated by many users, and exposed to spills, impacts and cable damage.",
  },
  {
    type: "ul",
    items: [
      "Cable and connector damage from wheels and traffic is one of the most common causes of unplanned downtime and is largely preventable through handling discipline.",
      "Tube replacement is the dominant single lifecycle cost; usage pattern matters more than age in predicting it.",
      "Image intensifiers degrade gradually in brightness and resolution, which routine quality control detects before users complain.",
      "Flat-panel detectors are high-value and impact-sensitive; damage is expensive and rarely covered as wear.",
      "Battery-supported systems require battery replacement as a planned consumable.",
      "Because one system typically serves many theatres, downtime cost is concentrated — a single failure can affect several lists.",
      "Service response time and parts availability therefore deserve more weight in a C-arm contract than in a lower-utilisation asset.",
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Utilisation is the specification hospitals most often get wrong",
    clinicalInterpretation:
      "Because C-arms are shared, their true workload is spread across specialties and rarely visible in one department's activity data. Systems specified against one theatre's needs are then used at three times that intensity, and reliability suffers accordingly.",
    hospitalRecommendation:
      "Before specifying, count intended cases across every specialty that will use the system, and specify generator, tube and service response against that total. Where the count justifies it, two appropriately specified systems provide greater clinical availability than one premium system.",
  },
  {
    type: "faq",
    items: [
      {
        q: "What is the difference between a C-arm and a fixed angiography system?",
        a: "A mobile C-arm delivers fluoroscopy wherever it is needed and is shared across theatres. A fixed angiography system offers substantially higher generator power, better cooling for sustained fluoroscopy, larger detectors, integrated haemodynamics and greater positional precision — at the cost of being confined to one purpose-built room. Sustained, complex interventional work belongs in a fixed lab.",
      },
      {
        q: "Do we need a radiographer to operate a C-arm?",
        a: "Requirements are set nationally and locally, and vary. What is universal is that operation requires documented competence in radiation protection and in the specific system, whoever performs it, and that the hospital's local rules must state clearly who is authorised to operate.",
      },
      {
        q: "Does a mobile C-arm need a shielded room?",
        a: "It needs an environment whose shielding has been assessed as adequate for the fluoroscopy workload intended there. Many theatres are already adequate; some are not, particularly for high-volume or high-dose work. This is a physics assessment, not an assumption.",
      },
      {
        q: "Is a 3D cone-beam C-arm worth the additional cost?",
        a: "It is where volumetric confirmation changes decisions during surgery — most clearly in spinal instrumentation, complex trauma and navigation-guided work. Where cases are predominantly routine fracture fixation, the additional capability is used rarely and the capital is usually better spent on availability and dose performance.",
      },
      {
        q: "How long does a mobile C-arm last?",
        a: "Service life depends far more on support status, utilisation and handling than on age. Indicative planning lives are useful for capital programmes, but replacement should be driven by parts availability, reliability, dose performance and clinical capability.",
      },
      {
        q: "Can certified refurbished C-arms be a sound purchase?",
        a: "Yes, where the platform remains supported, the detector or intensifier condition is documented, tube usage is disclosed and a genuine warranty with parts availability is provided. C-arms are among the modalities where refurbished systems most often represent good value, precisely because the clinical requirement in general theatre work is stable.",
      },
      {
        q: "What causes most C-arm downtime?",
        a: "In practice, mechanical and cable damage from daily movement, followed by tube and detector or intensifier issues. Handling training and a defined transport route reduce the first category substantially.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Specifying mobile C-arms for your theatres?",
    subheading:
      "AbuFarha Medical supplies, installs, commissions and services mobile C-arm systems, with theatre integration planning, operator training and lifecycle support.",
    technology: "C-Arms",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Interventional and surgical imaging" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Fluoroscopy installation and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel:
      "IEC fluoroscopy safety and performance standards, ICRP interventional radiation protection guidance, manufacturer technical documentation and AbuFarha Medical field experience",
    disclaimer:
      "Operator authorisation, shielding assessment and dose reporting requirements vary by jurisdiction. Confirm requirements with your radiation protection adviser and regulator before clinical use.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Safety and performance standards",
        items: [
          { label: "IEC 60601-2-43 — particular requirements for interventional X-ray equipment" },
          { label: "IEC 60601-1-3 — general requirements for radiation protection in diagnostic X-ray equipment" },
        ],
      },
      {
        title: "Radiation protection guidance",
        items: [
          { label: "ICRP guidance on radiological protection in fluoroscopically guided procedures" },
          { label: "IAEA guidance on occupational radiation protection in interventional procedures" },
        ],
      },
      {
        title: "Quality assurance",
        items: [
          { label: "National quality control protocols for fluoroscopy and mobile fluoroscopy systems" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "A mobile C-arm brings live fluoroscopy to the patient, allowing projection changes without moving a draped patient.",
      "Generator output and anode heat capacity, not detector marketing, determine whether long and heavy cases complete without interruption.",
      "Flat panel, image intensifier, mini and 3D systems serve genuinely different casemixes and are not interchangeable.",
      "Collimation, pulse rate and tube-side geometry are the three most effective dose controls available to the operator.",
      "Occupational dose in theatre is scatter from the patient, so patient dose reduction protects the whole team.",
      "Mobility imposes real requirements: shielding assessment per theatre, door and corridor clearances, dedicated power and handling discipline.",
      "Because one C-arm serves many theatres, service response time and parts availability carry unusual weight.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "The mobile C-arm is the most heavily shared imaging asset in most hospitals and the one most often specified against a single department's expectations.",
  },
  {
    type: "p",
    text: "Systems that serve well are those specified against the hospital's real combined casemix, sited in theatres whose shielding and power have been assessed, operated by teams trained in dose control, and supported by a service arrangement that recognises how many lists a single failure affects. Those conditions are decided during procurement and commissioning — long before the first case — and they determine whether the C-arm becomes the department's most reliable instrument or its most frequent constraint.",
  },
];
