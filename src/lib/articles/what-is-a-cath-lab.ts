/**
 * "What Is a Cath Lab?" — Cath Lab cluster pillar article content.
 */

import type { ContentBlock, TocItem } from "../blog";

export const WHAT_IS_A_CATH_LAB_TOC: TocItem[] = [
  { id: "overview", title: "Cath Lab Defined" },
  { id: "why-it-exists", title: "Why Hospitals Build Cath Labs" },
  { id: "how-it-works", title: "How a Cath Lab Works" },
  { id: "components", title: "Inside the Room: Core Components" },
  { id: "image-quality", title: "Image Quality and Radiation Dose" },
  { id: "procedures", title: "Procedures Performed in a Cath Lab" },
  { id: "team", title: "The Cath Lab Team" },
  { id: "patient-journey", title: "The Patient Journey" },
  { id: "room-planning", title: "Room Planning and Infrastructure" },
  { id: "single-vs-bi-plane", title: "Single-Plane vs Bi-Plane vs Hybrid" },
  { id: "maintenance", title: "Maintenance, Uptime and Service Life" },
  { id: "cost", title: "What a Cath Lab Programme Costs" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const WHAT_IS_A_CATH_LAB_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A cardiac catheterization laboratory — universally shortened to cath lab — is a procedure room built around a fixed angiography system: a high-output X-ray tube and flat-panel detector mounted on a motorised C-arm, a patient table designed for interventional access, and a bank of displays showing live fluoroscopy alongside haemodynamic and ECG data. It is where a clinician threads a catheter through the vascular system under X-ray guidance to diagnose and, in the same session, treat disease.",
      "The defining characteristic of a cath lab is not the imaging equipment on its own. It is the combination of real-time imaging, sterile interventional working conditions, continuous physiological monitoring and immediate access to resuscitation — in one room, at any hour. That combination is what allows a patient presenting with a heart attack to go from ambulance door to a reopened coronary artery within an hour.",
      "This guide explains what a cath lab is, what happens inside it, what equipment and infrastructure it requires, and what a hospital commits to when it decides to run one.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Cath lab definition, angiography system components, procedures, staffing, room and infrastructure requirements, dose management, service and lifecycle cost",
    audience:
      "Hospital administrators, cardiologists, radiographers, biomedical engineers and project planners",
    readingTime: "16 min read",
    technology: "Cardiac Catheterization Laboratory (Angiography)",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "Cath Lab Defined",
    body: "A cath lab is an interventional imaging suite: a fixed angiography system in a sterile procedure room, supported by haemodynamic monitoring and a trained interventional team.",
  },
  {
    type: "p",
    text: "In a diagnostic imaging room, the patient is imaged and leaves. In a cath lab, the imaging is a live navigation tool used while a procedure is under way. The operator advances catheters, wires, balloons and stents through arteries or veins — most often via the radial artery at the wrist or the femoral artery at the groin — and watches their position on continuously updated fluoroscopic images. Contrast medium injected through the catheter makes the vessel lumen visible, revealing narrowing, occlusion, aneurysm or abnormal flow.",
  },
  {
    type: "p",
    text: "Because the catheter can both diagnose and deliver treatment, a single session can move from angiography to intervention without moving the patient. This is why cath labs are described as diagnostic-and-therapeutic rooms rather than imaging rooms, and why their design, staffing and governance resemble an operating theatre more closely than a radiology suite.",
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Cath lab, angio suite or hybrid theatre?",
    text: "The terms overlap in everyday use. 'Cath lab' usually implies a cardiology-led room; 'angiography suite' or 'interventional radiology suite' implies a radiology-led room using the same class of equipment for peripheral, neurovascular or oncological work; a 'hybrid operating theatre' is a full operating theatre with a fixed angiography system installed, allowing open surgery and catheter-based intervention in the same sterile field. The imaging hardware is often near-identical — the difference lies in ventilation, sterility class, room size and the clinical service that operates it.",
  },
  {
    type: "h2",
    id: "why-it-exists",
    number: 2,
    text: "Why Hospitals Build Cath Labs",
    body: "The clinical case rests on time-critical treatment, on avoided open surgery, and on retaining patients who would otherwise be referred elsewhere.",
  },
  {
    type: "ul",
    items: [
      "ST-elevation myocardial infarction (STEMI): primary percutaneous coronary intervention (PCI) is the guideline-preferred reperfusion strategy where it can be delivered promptly, and delay is directly associated with worse outcomes. A hospital without a cath lab must transfer the patient, and transfer costs time.",
      "Diagnostic certainty: invasive coronary angiography remains the reference standard for defining coronary anatomy when non-invasive testing is inconclusive or high-risk findings need confirmation before revascularisation.",
      "Less invasive treatment: many conditions that once required open surgery — coronary disease, peripheral arterial disease, some structural heart defects, uterine fibroids, certain tumours — can be treated through a puncture site of a few millimetres, with shorter admissions and faster recovery.",
      "Service breadth: the same room supports pacemaker and defibrillator implantation, electrophysiology studies, vascular access procedures and interventional radiology work, so utilisation is rarely limited to cardiology alone.",
      "Referral retention: hospitals without interventional capability export their cardiac and vascular case load, and with it the associated inpatient activity.",
    ],
  },
  {
    type: "h2",
    id: "how-it-works",
    number: 3,
    text: "How a Cath Lab Works",
    body: "X-rays generated at the tube pass through the patient to a flat-panel detector, which produces live images at a chosen frame rate while the C-arm rotates around the anatomy of interest.",
  },
  {
    type: "diagram",
    id: "hospital-workflow",
    title: "From vascular access to closure: the cath lab imaging chain",
    purpose:
      "Shows how live fluoroscopy, contrast injection, haemodynamic monitoring and device delivery combine into one continuous procedural workflow.",
    alt: "Workflow diagram of a cath lab procedure showing vascular access, catheter navigation under fluoroscopy, contrast angiography, intervention and access-site closure",
    caption:
      "Imaging in a cath lab is continuous and interactive: every device movement is guided by the image being produced at that moment.",
  },
  {
    type: "p",
    text: "Two imaging modes run in the same room. Fluoroscopy is low-dose, continuous or pulsed imaging used for navigation — positioning a wire, advancing a catheter, checking a stent position. Acquisition (cine) is higher-dose, higher-quality recorded imaging used to document anatomy and results, typically during contrast injection. Because fluoroscopy accounts for most of the procedure time but acquisition accounts for a disproportionate share of the dose, dose management in a cath lab is largely about disciplined use of both modes.",
  },
  {
    type: "p",
    text: "The C-arm rotates and angulates so the operator can view a vessel from projections that separate overlapping branches. Coronary arteries are curved, three-dimensional structures; a lesion that looks mild in one projection may be severe in another, so multiple angulated views are standard practice rather than repetition for its own sake.",
  },
  {
    type: "h2",
    id: "components",
    number: 4,
    text: "Inside the Room: Core Components",
    body: "A cath lab is an integrated system. Weakness in any single component limits the whole room.",
  },
  {
    type: "table",
    headers: ["Component", "Function", "What matters in selection"],
    rows: [
      ["X-ray generator and tube", "Produces the X-ray beam for fluoroscopy and acquisition", "Heat capacity and cooling determine whether long, complex cases can run without thermal interruption"],
      ["Flat-panel detector", "Converts X-rays into digital image data", "Detector size and dynamic range; larger panels suit peripheral and structural work, smaller panels suit dedicated coronary rooms"],
      ["C-arm and positioner", "Angulates the beam around the patient", "Rotation speed, reachable projections, and clearance around the table for anaesthesia and surgical access"],
      ["Interventional table", "Supports and positions the patient", "Float and tilt range, radiolucent length, and weight capacity for bariatric patients"],
      ["Haemodynamic monitoring", "Records ECG, invasive pressures, saturation", "Integration with the imaging system and the hospital record, and reliability of the pressure channels"],
      ["Injector system", "Delivers contrast at controlled rate and pressure", "Manual versus automated injection, and dose-tracking integration"],
      ["Display and workstation", "Presents live and reference images plus physiology", "Large-format displays reduce head movement and support fewer, better-organised screens"],
      ["Radiation protection", "Ceiling and table shields, aprons, thyroid collars", "Operator lifetime dose depends on this more than on any other single factor"],
    ],
    caption: "Core subsystems of a fixed cath lab installation.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Procurement discussions concentrate on the imaging chain, but the components most often under-specified are the table, the shielding and the displays — precisely the items that determine how comfortably and safely a team can work through a long case.",
    clinicalInterpretation:
      "Detector size and generator heat capacity set the ceiling on which procedures a room can support; table clearance and reach set the ceiling on which patients it can support.",
    hospitalRecommendation:
      "Specify the room against the case mix planned for years three to five of ownership, not the case mix on day one, and treat operator shielding as a clinical requirement rather than an accessory line item.",
  },
  {
    type: "h2",
    id: "image-quality",
    number: 5,
    text: "Image Quality and Radiation Dose",
    body: "Every image-quality gain in a cath lab has a dose consequence, and every dose reduction has an image-quality consequence. Managing the balance is a permanent operational task.",
  },
  {
    type: "ul",
    items: [
      "Frame rate: lowering fluoroscopy pulse rate is one of the most effective dose reductions available and is often clinically acceptable for routine navigation.",
      "Collimation: restricting the beam to the region of interest reduces patient dose and scatter to staff, and improves image contrast.",
      "Table and detector position: keeping the detector close to the patient and the patient away from the tube reduces entrance dose.",
      "Angulation: steep angulated projections increase both patient and operator dose because the beam traverses more tissue and generates more scatter.",
      "Stored fluoroscopy and last-image-hold: reviewing a retained image instead of re-imaging eliminates dose entirely for that decision.",
      "Dose monitoring: modern systems record air kerma and dose–area product per case, enabling audit against national or professional reference levels.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Occupational dose is cumulative",
    text: "Interventional cardiologists and radiologists are among the most exposed medical professionals because they stand beside the patient during imaging. Personal dosimetry, correctly used ceiling-suspended and table-mounted shields, well-fitting protective garments and regular garment integrity checks are not optional extras — they are the mechanism by which a career-long dose burden stays within acceptable limits.",
  },
  {
    type: "h2",
    id: "procedures",
    number: 6,
    text: "Procedures Performed in a Cath Lab",
    body: "The procedure list is broader than coronary work, which is why utilisation planning should consider the whole hospital rather than cardiology alone.",
  },
  {
    type: "ul",
    items: [
      "Diagnostic coronary angiography and right or left heart catheterisation, including pressure and saturation studies.",
      "Percutaneous coronary intervention: balloon angioplasty and stent implantation, including primary PCI for acute myocardial infarction.",
      "Physiology and intracoronary imaging: fractional flow reserve and related indices, intravascular ultrasound and optical coherence tomography where available.",
      "Device implantation: permanent pacemakers, implantable defibrillators and cardiac resynchronisation devices.",
      "Electrophysiology studies and catheter ablation, in rooms configured for it.",
      "Peripheral vascular intervention: angioplasty, stenting and thrombectomy in limb, renal and visceral vessels.",
      "Interventional radiology: embolisation, biopsy, drainage and central venous access.",
      "Structural heart procedures in appropriately equipped hybrid rooms, where local capability and governance support them.",
    ],
  },
  {
    type: "h2",
    id: "team",
    number: 7,
    text: "The Cath Lab Team",
    body: "A cath lab is a staffing commitment before it is an equipment commitment.",
  },
  {
    type: "p",
    text: "A functioning room needs an interventional operator, a scrub assistant, a circulating nurse and a technologist or radiographer managing imaging and haemodynamics — with anaesthesia support available for structural and high-risk cases. A 24/7 primary PCI service multiplies that requirement, because an on-call rota must be able to assemble a full team, out of hours, within the time window that makes the service clinically worthwhile. Hospitals that install a cath lab without first securing that rota end up with a daytime diagnostic room rather than an emergency reperfusion service.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Four recurring planning errors",
    items: [
      "Buying the system before confirming the interventional staffing rota and on-call cover.",
      "Sizing the room to the equipment footprint rather than to the team, anaesthesia machine and equipment trolleys that must work around the table.",
      "Treating the control room and technical (equipment) room as leftover space, then discovering cable-length and cooling constraints during installation.",
      "Omitting a structured radiation protection programme — dosimetry, garment checks, staff training — from the project scope.",
    ],
  },
  {
    type: "h2",
    id: "patient-journey",
    number: 8,
    text: "The Patient Journey",
    body: "Understanding the flow through the room explains why adjacency to the emergency department and coronary care unit matters so much.",
  },
  {
    type: "diagram",
    id: "patient-journey",
    title: "Cath lab patient pathway",
    purpose:
      "Traces the patient from referral or emergency presentation through preparation, procedure, recovery and follow-up.",
    alt: "Diagram of the cath lab patient pathway from referral and preparation through the procedure to recovery and discharge planning",
    caption:
      "For emergency presentations, every step before the procedure is a candidate for time savings.",
  },
  {
    type: "ul",
    items: [
      "Preparation: consent, fasting status where applicable, renal function review, allergy and anticoagulation history, access-site assessment and monitoring lines.",
      "Procedure: local anaesthesia at the access site, catheter navigation under fluoroscopy, angiography, and intervention where indicated. Most patients remain awake and responsive.",
      "Closure: manual compression, a radial compression band, or a vascular closure device at the femoral site.",
      "Recovery: monitored bed rest with access-site and haemodynamic observation. Radial access typically permits earlier mobilisation than femoral access.",
      "Discharge and follow-up: medication review, particularly antiplatelet therapy after stenting, plus rehabilitation and secondary prevention.",
    ],
  },
  {
    type: "h2",
    id: "room-planning",
    number: 9,
    text: "Room Planning and Infrastructure",
    body: "Cath lab projects fail on infrastructure far more often than on imaging performance.",
  },
  {
    type: "table",
    headers: ["Requirement", "Why it drives the project"],
    rows: [
      ["Procedure room floor area", "Must accommodate the C-arm's full range of motion, the table at all positions, anaesthesia access at the head, and circulating staff and trolleys"],
      ["Control room", "Needs a direct, unobstructed sightline to the patient and lead-glass shielding"],
      ["Technical/equipment room", "Houses generator and distribution cabinets; requires its own cooling and is constrained by manufacturer cable-length limits"],
      ["Structural loading", "Ceiling-mounted C-arms and suspended shields transfer significant load into the slab above and require structural verification"],
      ["Radiation shielding", "Wall, door and viewing-window shielding designed by a medical physicist against the planned workload"],
      ["Power quality and continuity", "Dedicated supply sized to peak demand, with UPS and generator backup so a procedure in progress is never left unsupported"],
      ["HVAC", "Sized for equipment heat rejection and for the air quality class the intended procedures require"],
      ["Access route", "Doorway, corridor and lift dimensions and floor loading along the full delivery path, verified before a delivery date is set"],
      ["Medical gases and emergency equipment", "Oxygen, suction, defibrillator and resuscitation trolley immediately available in the room"],
    ],
    caption:
      "Infrastructure requirements are equipment-specific: always design against the selected system's manufacturer site-planning documentation.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Design adjacency deliberately",
    text: "Time-to-treatment in acute coronary syndrome is a pathway property, not an equipment property. Locating the cath lab close to the emergency department, coronary care unit and lifts — and agreeing a bypass protocol that takes the patient directly to the lab — usually yields larger time savings than any imaging feature on the specification sheet.",
  },
  {
    type: "h2",
    id: "single-vs-bi-plane",
    number: 10,
    text: "Single-Plane vs Bi-Plane vs Hybrid",
    body: "Room configuration should follow the intended case mix, because each configuration buys a different capability.",
  },
  {
    type: "comparison",
    title: "Configuration comparison",
    headers: ["Configuration", "Best suited to", "Trade-offs"],
    rows: [
      [
        "Single-plane",
        "Coronary diagnostics and PCI, pacing, peripheral and general interventional work — the standard configuration for most hospitals",
        "Multiple projections require repositioning and repeat contrast injections in complex anatomy",
      ],
      [
        "Bi-plane",
        "Neurovascular and paediatric/congenital work, where two simultaneous projections reduce contrast volume and procedure time",
        "Higher capital cost, larger room, more complex installation and service; unnecessary for routine coronary work",
      ],
      [
        "Hybrid operating theatre",
        "Structural heart and vascular programmes needing surgical conversion capability in the same sterile field",
        "Highest cost and largest footprint; requires theatre-grade ventilation and shared governance between surgery and cardiology",
      ],
    ],
    caption:
      "Configuration is difficult and expensive to change after commissioning, so it should be decided against a five-year service plan.",
  },
  {
    type: "h2",
    id: "maintenance",
    number: 11,
    text: "Maintenance, Uptime and Service Life",
    body: "A cath lab supporting an emergency service is an availability commitment, and availability is bought through service planning.",
  },
  {
    type: "ul",
    items: [
      "Preventive maintenance: scheduled manufacturer or accredited-partner servicing of the generator, tube, positioner, table and detector, with calibration and image-quality verification.",
      "Consumable-class components: X-ray tubes have finite life driven by workload and thermal cycling, and tube replacement is normally the single largest unplanned cost event in the room's life.",
      "Quality assurance: periodic image-quality and dose-output testing, plus routine checks of monitoring channels, injector and protective garments.",
      "Service contract design: response time, parts inclusion, tube coverage and planned-maintenance frequency matter more than headline contract price for a room carrying an on-call service.",
      "Spare-parts logistics: for hospitals in Africa and the Middle East, in-region parts availability and engineer travel time often determine real downtime more than the contract's stated response window.",
      "Service life: fixed angiography systems commonly remain clinically capable for well over a decade when maintained, with software and detector upgrade paths extending useful life further.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Downtime is a clinical risk, not just an inconvenience",
    text: "A hospital running the only cath lab in its region should plan explicitly for outage: an agreed transfer pathway to a partner centre, defined escalation contacts with the service provider, and — where case volume justifies it — a second room. Redundancy is easier to justify at planning stage than after the first extended outage.",
  },
  {
    type: "h2",
    id: "cost",
    number: 12,
    text: "What a Cath Lab Programme Costs",
    body: "Capital equipment is only one component of the cost of running an interventional service.",
  },
  {
    type: "p",
    text: "Prices vary widely by configuration, manufacturer, specification and market, so the useful exercise is not benchmarking a headline figure but building a full lifecycle model. That model should include: the imaging system and its options; civil works, shielding and structural reinforcement; power, UPS and HVAC provision; installation, commissioning and physics acceptance testing; training for the clinical and technical team; the annual service contract; tube replacement provisioning; recurring consumables such as catheters, wires, balloons, stents and contrast; protective garments and their periodic replacement; and staffing, including the on-call rota that makes an emergency service possible.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "What to establish before requesting quotations",
    items: [
      "Planned annual case volume and case mix, including whether 24/7 primary PCI is in scope.",
      "Room configuration decision: single-plane, bi-plane or hybrid.",
      "Site constraints: available floor area, slab capacity, delivery route, power and cooling headroom.",
      "Service expectations: required uptime, response time, tube coverage and in-region parts availability.",
      "Training scope for operators, nurses, technologists and biomedical engineering staff.",
      "Whether new or professionally refurbished equipment fits the clinical and financial plan.",
    ],
  },
  {
    type: "h2",
    id: "faq",
    number: 13,
    text: "Frequently Asked Questions",
  },
  {
    type: "faq",
    items: [
      {
        q: "What is the difference between a cath lab and an operating theatre?",
        a: "A cath lab is built around a fixed angiography imaging system for catheter-based procedures performed through small vascular punctures, and its design priorities are imaging geometry, radiation protection and haemodynamic monitoring. An operating theatre is built for open surgery, with ventilation and sterility requirements as the dominant design constraints. A hybrid theatre combines both: theatre-grade ventilation and a fixed angiography system in one room.",
      },
      {
        q: "Is a cath lab procedure performed under general anaesthesia?",
        a: "Most diagnostic angiography and coronary intervention is performed under local anaesthesia at the access site, often with light sedation, and the patient remains awake and able to follow instructions such as breath-holds. General anaesthesia is used selectively — for example in some structural heart procedures, in paediatric cases, or where a patient cannot cooperate or tolerate the procedure awake.",
      },
      {
        q: "How long does a cath lab procedure take?",
        a: "Duration depends entirely on the procedure. A straightforward diagnostic coronary angiogram is typically among the shortest cases, while complex multi-vessel intervention, chronic total occlusion work or structural procedures can run substantially longer. Hospitals should base scheduling on their own audited case times rather than generic figures, since operator experience and case mix dominate.",
      },
      {
        q: "What is the difference between fluoroscopy and cine acquisition?",
        a: "Fluoroscopy is lower-dose, real-time imaging used for navigation and device positioning; it is not routinely stored at full quality unless stored-fluoroscopy functions are used. Cine acquisition is higher-dose, higher-quality recorded imaging used to document anatomy and procedural results, usually during contrast injection. Acquisition contributes a disproportionate share of total patient dose relative to the time it occupies.",
      },
      {
        q: "Why is radial access increasingly preferred over femoral access?",
        a: "Radial artery access at the wrist is associated with fewer access-site bleeding complications and generally allows earlier patient mobilisation than femoral access, which is why many programmes have adopted it as their default approach. Femoral access remains necessary for larger-bore devices and where radial anatomy or prior use makes the radial route unsuitable — the choice is clinical and patient-specific.",
      },
      {
        q: "Does a hospital need a cardiac surgery unit on site to run a cath lab?",
        a: "Requirements are set by national regulation and professional-body standards, which differ between jurisdictions and between elective and emergency PCI. Some frameworks permit PCI without on-site surgery when defined volume, operator experience and transfer-pathway conditions are met. Any hospital planning a service must design it against the standards in force in its own jurisdiction rather than by analogy with another country.",
      },
      {
        q: "How much space does a cath lab need?",
        a: "Room dimensions are equipment-specific and are published in the manufacturer's site-planning documentation for the selected system. The procedure room must accommodate the C-arm's full motion range, the table at all positions, anaesthesia access at the patient's head, and circulating staff and trolleys — and it must be planned together with an adjacent shielded control room and a separately cooled technical room within the manufacturer's cable-length limits.",
      },
      {
        q: "Can a cath lab be used for procedures other than cardiology?",
        a: "Yes. The same class of system supports peripheral vascular intervention, interventional radiology procedures such as embolisation and drainage, vascular access, and device implantation. Sharing a room across services improves utilisation, but requires scheduling governance and agreement on emergency priority — an emergency PCI must be able to interrupt an elective list.",
      },
      {
        q: "What determines how long an X-ray tube lasts in a cath lab?",
        a: "Workload and thermal cycling are the dominant factors: total fluoroscopy and acquisition time, the intensity of the protocols used, and how heavily the tube is loaded during long complex cases. Dose-aware practice — lower pulse rates, disciplined acquisition, good collimation — reduces both patient dose and thermal stress on the tube, so it also extends tube life.",
      },
      {
        q: "Is a refurbished cath lab system a reasonable option?",
        a: "It can be, when the refurbishment is performed to a documented professional standard, the tube and detector condition are verified, software and parts support are confirmed for the intended service life, and warranty and service terms are explicit. The decision should be made on total lifecycle cost and supportability rather than purchase price alone, and it is less appropriate where the room will carry a demanding 24/7 emergency service from day one.",
      },
    ],
  },
  {
    type: "editorialBoard",
    reviewers: [
      {
        role: "Clinical review",
        name: "AbuFarha Clinical Editorial Board",
        credential: "Interventional cardiology and diagnostic imaging review",
      },
      {
        role: "Technical review",
        name: "AbuFarha Biomedical Engineering Team",
        credential: "Angiography installation, commissioning and service",
      },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel:
      "Consensus guidance and international standards; no patient-specific clinical recommendations",
    disclaimer:
      "This article is educational and intended for healthcare planning and professional reference. It does not constitute medical advice and does not replace clinical judgement, manufacturer documentation, or the standards and regulations in force in your jurisdiction.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Clinical practice guidance",
        items: [
          { label: "European Society of Cardiology — clinical practice guidelines", url: "https://www.escardio.org" },
          { label: "American College of Cardiology — clinical guidance and appropriate use criteria", url: "https://www.acc.org" },
          { label: "American Heart Association — scientific statements on cardiovascular care", url: "https://www.heart.org" },
          { label: "World Health Organization — cardiovascular disease programmes", url: "https://www.who.int" },
        ],
      },
      {
        title: "Radiation protection and equipment standards",
        items: [
          { label: "ICRP — radiological protection in interventional procedures", url: "https://www.icrp.org" },
          { label: "IAEA — Radiation Protection of Patients (RPOP): interventional procedures", url: "https://www.iaea.org" },
          { label: "IEC 60601 series — medical electrical equipment safety and performance", url: "https://www.iec.ch" },
          { label: "NCRP — structural shielding design for medical X-ray imaging facilities", url: "https://ncrponline.org" },
        ],
      },
    ],
    note: "Requirements for facility design, operator credentialing and service provision differ by jurisdiction. Confirm the editions and national adaptations currently in force before applying any of this guidance to a project.",
  },
  {
    type: "h2",
    id: "conclusion",
    number: 14,
    text: "Conclusion",
    body: "A cath lab is a service commitment expressed as a room: imaging, monitoring, sterile working conditions and a trained team, available when a patient needs them.",
  },
  {
    type: "p",
    text: "The angiography system determines what the room can see. The infrastructure determines whether the project completes on schedule. The service contract determines whether the room is available on the night it is needed. And the staffing rota determines whether the hospital has an interventional service or simply an interventional room. Hospitals that plan all four together — rather than sequencing them behind an equipment purchase — are the ones whose cath labs deliver the clinical outcomes that justified them.",
  },
  {
    type: "articleCta",
    heading: "Planning a cath lab or upgrading an existing angiography suite?",
    subheading:
      "AbuFarha's biomedical engineering and projects team supports hospitals through system selection, site survey, shielding coordination, installation, commissioning, training and long-term service across Africa and the Middle East.",
    technology: "Cardiac Catheterization Laboratory (Angiography)",
  },
];
