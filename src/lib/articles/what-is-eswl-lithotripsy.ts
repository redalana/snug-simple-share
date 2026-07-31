/**
 * Lithotripsy pillar article — "What Is ESWL (Extracorporeal Shock Wave Lithotripsy)?"
 */

import type { ContentBlock, TocItem } from "../blog";

export const ESWL_PILLAR_TOC: TocItem[] = [
  { id: "definition", title: "What ESWL Is" },
  { id: "physics", title: "How Shock Waves Fragment a Stone" },
  { id: "components", title: "System Components" },
  { id: "generators", title: "Shock Wave Generation Principles" },
  { id: "localisation", title: "Stone Localisation: Ultrasound and Fluoroscopy" },
  { id: "workflow", title: "Treatment Workflow" },
  { id: "planning", title: "Room, Staffing and Service Planning" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ESWL_PILLAR_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Extracorporeal shock wave lithotripsy (ESWL) fragments urinary stones with acoustic energy generated outside the body and focused onto the stone. It remains the only fully non-invasive treatment for upper urinary tract stones: no incision, no endoscope, and in many services no general anaesthesia.",
      "A lithotripter is therefore unusual among hospital capital equipment. Its clinical result depends less on raw output power than on the accuracy with which energy is focused, the quality of the imaging used to localise the stone, and the discipline of the treatment protocol applied by the operator.",
      "This guide explains what an ESWL system is, how it works, what its subsystems do, how a treatment session runs, and what a hospital should understand before establishing or replacing a lithotripsy service.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Shock wave physics and fragmentation mechanisms, system components, generation principles, stone localisation, treatment workflow, and service planning",
    audience:
      "Urologists and urology theatre teams, radiographers and sonographers, medical physicists, biomedical engineering teams, service planners",
    readingTime: "13 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "definition",
    text: "What ESWL Is",
    number: 1,
    body: "A focused acoustic treatment delivered entirely from outside the patient.",
  },
  {
    type: "p",
    text: "An ESWL system generates a high-amplitude, very short-duration pressure pulse in a water-coupled source, focuses that pulse to a small volume in space, and positions the patient so the target stone sits inside that focal volume. Thousands of pulses are delivered over a session, progressively fragmenting the stone into pieces small enough to pass naturally through the urinary tract.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Non-invasive does not mean effortless",
    text: "The treatment leaves no wound, but success still depends on stone composition, location, skin-to-stone distance and post-treatment stone clearance — factors assessed before treatment, not discovered during it.",
  },
  {
    type: "h2",
    id: "physics",
    text: "How Shock Waves Fragment a Stone",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Each pulse rises to peak positive pressure in well under a microsecond, then swings into a negative-pressure tail.",
      "At the stone's front surface, the impedance mismatch between fluid and stone generates compressive stress; at the rear surface, reflection produces tensile stress that stones resist poorly.",
      "The negative-pressure phase drives cavitation in the surrounding fluid; collapsing bubbles erode the stone surface and contribute substantially to fragmentation.",
      "Repeated cycles propagate microcracks along the stone's internal structure until it separates into passable fragments.",
      "Energy that misses the focal volume does no useful work but still deposits into tissue, which is why localisation accuracy governs both efficacy and safety.",
    ],
  },
  {
    type: "p",
    text: "Fragmentation is cumulative rather than instantaneous. This is why pulse rate, energy stepping and total pulse count are treatment variables in their own right: delivering the same total energy differently produces different clinical outcomes.",
  },
  {
    type: "h2",
    id: "components",
    text: "System Components",
    number: 3,
  },
  {
    type: "table",
    headers: ["Component", "Function", "Why it matters"],
    rows: [
      ["Shock wave source", "Generates the pressure pulse", "Defines available energy range and focal geometry"],
      ["Focusing element and coupling cushion", "Concentrates energy and transmits it into tissue", "Coupling faults waste energy and cause skin discomfort"],
      ["Treatment table with positioning axes", "Aligns the focal point onto the stone", "Positioning repeatability determines treatment efficiency"],
      ["Ultrasound imaging", "Real-time localisation and monitoring", "Radiation-free targeting for visible stones"],
      ["Fluoroscopic imaging (where fitted)", "Localisation of radio-opaque stones", "Needed where ultrasound access is limited"],
      ["Control console and protocol software", "Energy, rate and pulse count control", "Protocol consistency is the basis of comparable outcomes"],
      ["Impulse counter and service log", "Records cumulative pulses delivered", "The primary indicator of source-life consumption"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Cumulative impulse count is to a lithotripter what tube exposure history is to a CT scanner: the single number that predicts the next major service event.",
    clinicalInterpretation:
      "Fragmentation performance degrades gradually as the source ages, so declining session efficiency is a service signal rather than a case-selection failure.",
    hospitalRecommendation:
      "Record impulse count alongside every session and review it against the manufacturer's service interval at each preventive maintenance visit.",
  },
  {
    type: "h2",
    id: "generators",
    text: "Shock Wave Generation Principles",
    number: 4,
  },
  {
    type: "p",
    text: "Three generation principles are in clinical use. They differ in how the pressure pulse is created and, consequently, in focal size, pressure profile and consumable behaviour.",
  },
  {
    type: "table",
    headers: ["Principle", "How the pulse is created", "Practical characteristics"],
    rows: [
      ["Electrohydraulic", "Spark discharge between electrodes in water", "High peak pressures; electrode is a consumable requiring routine replacement"],
      ["Electromagnetic", "Coil drives a metallic membrane or cylinder", "Stable output over long service life; broadly used in modern systems"],
      ["Piezoelectric", "Large array of piezo elements fired simultaneously", "Very tight focal volume and low skin entry pressure; typically well tolerated with minimal anaesthesia"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Focal size is a clinical choice",
    text: "A tight focus concentrates energy and reduces the tissue volume exposed, but demands more accurate localisation and stable patient positioning. A wider focus is more forgiving of movement but spreads energy over more tissue.",
  },
  {
    type: "h2",
    id: "localisation",
    text: "Stone Localisation: Ultrasound and Fluoroscopy",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Ultrasound localisation involves no ionising radiation and allows continuous monitoring throughout the session, including observation of fragmentation progress.",
      "Fluoroscopic localisation shows radio-opaque stones independent of acoustic window, and is often preferred for ureteric stones obscured by bowel gas or bone.",
      "Systems combining both modalities cover the widest case mix, at the cost of additional room shielding, radiation protection programme scope and service complexity.",
      "Whatever the modality, localisation must be re-verified during treatment: respiration and patient movement displace the stone relative to the focal point.",
    ],
  },
  {
    type: "p",
    text: "Where fluoroscopy is fitted, the installation falls under the same radiation protection obligations as any interventional X-ray room — shielding assessment, staff dosimetry, periodic performance testing and documented quality assurance.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "Treatment Workflow",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Case selection: stone size, location, composition where known, anatomy, skin-to-stone distance and clearance prospects are reviewed against alternatives such as ureteroscopy.",
      "Preparation: analgesia or sedation as protocol requires; positioning on the treatment table.",
      "Coupling: cushion contact is established with care — trapped air bubbles are a common and avoidable cause of energy loss.",
      "Localisation: the stone is brought into the focal volume under ultrasound or fluoroscopic guidance.",
      "Treatment: energy is stepped up progressively at a controlled pulse rate, with periodic re-localisation and monitoring of fragmentation.",
      "Completion: pulse count and energy settings are recorded; fragmentation adequacy is assessed.",
      "Follow-up: stone clearance is confirmed by imaging, and retreatment or an alternative approach is planned if required.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Coupling quality is the most under-measured variable",
    text: "Poor coupling can absorb a large share of delivered energy before it ever reaches the patient. Sessions that appear to fail on power are frequently failing on contact.",
  },
  {
    type: "h2",
    id: "planning",
    text: "Room, Staffing and Service Planning",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Space for the treatment table with full positioning travel, the source arm, imaging equipment and staff working positions on both sides of the patient.",
      "Water quality and treatment-water management for the coupling and source circuits, per the manufacturer's specification.",
      "Electrical supply and environmental conditions appropriate to the generator and imaging subsystems.",
      "Radiation shielding assessment where fluoroscopy is fitted, with a documented radiation protection programme.",
      "Consumable planning — electrodes, cushions and coupling media as applicable to the generation principle in use.",
      "A preventive maintenance schedule keyed to impulse count as well as elapsed time, plus operator training and competency records.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs, commissions and supports lithotripsy systems, including the Richard Wolf Piezolith 3000 plus with integrated ultrasound localisation, and provides the biomedical engineering, spare parts and training programmes that keep a lithotripsy service running predictably.",
  },
  {
    type: "faq",
    id: "faq",
    items: [
      {
        q: "Is ESWL suitable for every urinary stone?",
        a: "No. Suitability depends on stone size, location, composition, patient anatomy and the likelihood of fragments clearing naturally. Selection is a clinical decision made before treatment, and some stones are better managed endoscopically.",
      },
      {
        q: "Does ESWL require general anaesthesia?",
        a: "Not necessarily. Requirements vary with the generation principle, entry pressure and energy protocol; piezoelectric systems in particular are often used with limited analgesia. Local clinical protocol governs the choice.",
      },
      {
        q: "How many sessions does a stone need?",
        a: "Some stones fragment adequately in one session; others require retreatment. Follow-up imaging to confirm clearance is part of the treatment pathway, not an optional extra.",
      },
      {
        q: "What limits the working life of a lithotripter?",
        a: "Cumulative impulse count consumes the shock wave source and its consumables, while imaging subsystems age on their own schedule. A system's remaining life is assessed from its impulse history and service record, not its age alone.",
      },
      {
        q: "Why does a used lithotripter's impulse count matter when buying?",
        a: "Because it indicates how much of the source's service life has already been used, and therefore what near-term service investment the system will require. It is one of the first specifications to verify on any pre-owned system.",
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
    text: "ESWL delivers a non-invasive treatment whose outcome is decided by focus accuracy, imaging quality and protocol discipline rather than by output power alone. A lithotripsy service planned around case selection, coupling technique, impulse-based maintenance and trained operators produces consistent results; one planned around the machine alone does not.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Urology treatment service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy installation and preventive maintenance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer documentation and field service practice synthesis",
    disclaimer:
      "Educational guidance on extracorporeal shock wave lithotripsy. It does not replace manufacturer documentation or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer technical documentation and operating instructions for installed lithotripsy systems." },
      { label: "Institutional urology treatment protocols and quality assurance records." },
      { label: "National radiation protection requirements applicable to fluoroscopy-equipped treatment rooms." },
    ],
  },
];
