/**
 * Mobile C-arm vs fixed angiography system — C-Arm cluster (comparison).
 */

import type { ContentBlock, TocItem } from "../blog";

export const C_ARM_VS_FIXED_TOC: TocItem[] = [
  { id: "overview", title: "Two Different Answers to One Question" },
  { id: "comparison", title: "Direct Capability Comparison" },
  { id: "clinical", title: "Which Procedures Need Which System" },
  { id: "facility", title: "Facility and Infrastructure Demands" },
  { id: "economics", title: "Economics and Utilisation" },
  { id: "hybrid", title: "Hybrid Theatres and the Middle Ground" },
  { id: "decision", title: "A Decision Framework" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const C_ARM_VS_FIXED_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Hospitals expanding image-guided intervention repeatedly face the same decision: buy a high-specification mobile C-arm for an existing theatre, or build a fixed angiography suite. The systems overlap enough to make the comparison tempting and differ enough to make the wrong choice expensive.",
      "The distinction is not simply image quality. It is procedure duration, thermal capacity, table integration, radiation protection design, staffing model and whether the room can be dedicated to interventional work. A mobile C-arm buys flexibility across many theatres; a fixed system buys sustained capability in one.",
      "This guide compares the two honestly across capability, clinical scope, infrastructure and economics, and gives a decision framework based on casemix rather than on aspiration.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Capability comparison, procedure suitability, infrastructure requirements, utilisation economics, hybrid theatre positioning and a casemix-led decision framework",
    audience:
      "Clinical directors, interventionalists and surgeons, theatre and imaging managers, projects and procurement teams",
    readingTime: "14 min read",
    technology: "C-Arm Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Two Different Answers to One Question",
    number: 1,
    body: "Both systems provide real-time fluoroscopy; they are designed for different durations, workloads and environments.",
  },
  {
    type: "ul",
    items: [
      "A mobile C-arm is a shared, transportable system optimised for intermittent intraoperative screening.",
      "A fixed angiography system is a dedicated, room-integrated system optimised for sustained interventional imaging.",
      "The difference that matters most clinically is sustained output and thermal capacity over long procedures.",
      "The difference that matters most operationally is dedication: a fixed room cannot be shared, a mobile system must be.",
      "The difference that matters most financially is infrastructure: rooms require construction, shielding and downtime to build.",
    ],
  },
  {
    type: "h2",
    id: "comparison",
    text: "Direct Capability Comparison",
    number: 2,
    body: "Compare on the attributes that change clinical scope, not on marketing specifications.",
  },
  {
    type: "table",
    headers: ["Attribute", "Mobile C-arm", "Fixed angiography system"],
    rows: [
      ["Generator output and sustained duty", "Adequate for intermittent screening; thermal limits in long cases", "High sustained output designed for continuous interventional workloads"],
      ["Receptor size and field of view", "Smaller field; adequate for focal anatomy", "Large field with multiple formats; whole-region coverage"],
      ["Positioning and reproducibility", "Manual, operator-dependent, flexible", "Motorised, programmable, repeatable projections"],
      ["Table integration", "Uses the theatre table; limited pan and float", "Dedicated floating table with integrated control"],
      ["Advanced applications", "Basic roadmapping; 3D on higher-class systems", "Full roadmap, DSA, 3D rotational, fusion and overlay tools"],
      ["Dose management tooling", "Present but limited on lower classes", "Comprehensive dose control, reporting and skin dose mapping"],
      ["Radiation protection", "Depends on mobile shields and practice", "Room shielding plus integrated table and ceiling shields"],
      ["Staffing model", "Theatre team with radiographer support", "Dedicated interventional team"],
      ["Flexibility", "Serves multiple theatres and specialties", "Serves one room; cannot be relocated"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Thermal capacity is the real boundary",
    clinicalInterpretation:
      "Most attempts to run true endovascular or interventional lists on a mobile C-arm fail on sustained output and thermal limits rather than on baseline image quality. Long procedures require continuous high-quality fluoroscopy and digital subtraction, which mobile platforms are not designed to deliver session after session.",
    hospitalRecommendation:
      "Define the longest and most demanding procedure the service intends to perform routinely. If that procedure requires prolonged subtraction imaging over a large field, specify a fixed system; the mobile route will underperform and consume tubes.",
  },
  {
    type: "h2",
    id: "clinical",
    text: "Which Procedures Need Which System",
    number: 3,
    body: "Procedure duration, field size and subtraction requirements determine the platform.",
  },
  {
    type: "table",
    headers: ["Clinical area", "Appropriate platform", "Rationale"],
    rows: [
      ["Trauma and fracture fixation", "Mobile C-arm", "Short intermittent screening of focal anatomy in a general theatre"],
      ["Spinal instrumentation", "Mobile C-arm; 3D-capable for complex deformity", "Positional verification rather than sustained imaging"],
      ["Urology stone and stent work", "Mobile C-arm", "Brief screening integrated with endoscopic workflow"],
      ["Pain management and injections", "Mobile C-arm, including mini systems", "Very short screening of small fields"],
      ["Cardiac device implantation", "Mobile C-arm acceptable; fixed preferred at volume", "Moderate duration; fixed improves ergonomics and dose at volume"],
      ["Coronary angiography and PCI", "Fixed cath lab", "Sustained imaging, cine, dedicated table and dose tooling"],
      ["Peripheral and visceral endovascular", "Fixed angiography suite", "Digital subtraction over large fields and long durations"],
      ["Neurointervention", "Fixed, typically bi-plane", "High spatial and temporal demands with prolonged imaging"],
      ["Complex aortic and hybrid vascular surgery", "Hybrid theatre with fixed system", "Requires both surgical sterility and interventional imaging"],
    ],
  },
  {
    type: "h2",
    id: "facility",
    text: "Facility and Infrastructure Demands",
    number: 4,
    body: "This is where the two options diverge most sharply in project terms.",
  },
  {
    type: "ul",
    items: [
      "A mobile C-arm needs storage, charging, transport routes and lift access — not construction.",
      "A fixed system requires a designed room: shielding, structural provision, power, cooling, cabling and control area.",
      "Fixed installations require a construction programme and a period of lost clinical capacity.",
      "Hybrid theatres add operating-theatre air handling and sterility requirements to interventional imaging demands.",
      "Fixed rooms require medical physics shielding design and formal acceptance before clinical use.",
      "Mobile systems still require radiation protection provision: mobile shields, PPE, dosimetry and local rules.",
      "Mobile systems create a scheduling dependency across theatres that must be actively managed.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Buying a mobile system to defer a room decision",
    text: "A high-specification mobile C-arm is often purchased as an interim measure for a service that genuinely needs a fixed suite. The result is a compromised service, high tube consumption, frustrated clinicians and a fixed room purchased two years later anyway. Use the mobile route as a deliberate scope decision, not as a postponement.",
  },
  {
    type: "h2",
    id: "economics",
    text: "Economics and Utilisation",
    number: 5,
    body: "Cost per procedure depends far more on utilisation than on purchase price.",
  },
  {
    type: "table",
    headers: ["Factor", "Mobile C-arm", "Fixed system"],
    rows: [
      ["Capital cost", "Low to moderate", "High, plus construction"],
      ["Construction and downtime", "None", "Significant; weeks to months of lost room capacity"],
      ["Annual service cost", "Moderate", "High, reflecting complexity and availability requirements"],
      ["Utilisation flexibility", "Spread across specialties and theatres", "Only what the dedicated room can list"],
      ["Cost per procedure at low volume", "Favourable", "Poor — fixed cost across few cases"],
      ["Cost per procedure at high volume", "Rises through tube consumption and theatre inefficiency", "Favourable — designed for throughput"],
      ["Resilience", "Fleet can cover itself if more than one system exists", "Single-room services stop entirely during service"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Volume, not ambition, justifies a fixed suite",
    text: "A fixed interventional suite requires a credible, referenced case volume and a staffed team to be economically and clinically defensible. Below that threshold, a well-specified mobile system in a well-organised theatre delivers more value than an underused room.",
  },
  {
    type: "h2",
    id: "hybrid",
    text: "Hybrid Theatres and the Middle Ground",
    number: 6,
    body: "Between the two options sit hybrid theatres and higher-class mobile platforms.",
  },
  {
    type: "ul",
    items: [
      "Hybrid theatres combine a fixed imaging system with full operating theatre standards — the correct answer for services that need both surgery and intervention in one case.",
      "They are the most expensive and most complex option and require genuine multi-specialty scheduling to be viable.",
      "High-specification flat panel mobile C-arms with 3D capability materially narrow the gap for orthopaedic, spinal and some vascular work.",
      "They do not close the gap for sustained digital subtraction angiography over large fields.",
      "A fixed system in a conventional interventional room remains the most cost-effective route for a dedicated interventional service without surgical conversion requirements.",
      "Fleet strategy matters: two capable mobile systems often serve a general hospital better than one underused fixed room.",
    ],
  },
  {
    type: "h2",
    id: "decision",
    text: "A Decision Framework",
    number: 7,
    body: "Answer these questions with data before comparing quotations.",
  },
  {
    type: "table",
    headers: ["Question", "If yes", "If no"],
    rows: [
      ["Does the service require sustained digital subtraction over large fields?", "Fixed system", "Mobile is viable"],
      ["Are procedures routinely longer than an hour of screening?", "Fixed system", "Mobile is viable"],
      ["Can a room be dedicated, staffed and filled with referenced volume?", "Fixed system justified", "Mobile or shared capacity"],
      ["Must surgical and interventional work occur in the same case?", "Hybrid theatre", "Conventional room or mobile"],
      ["Do multiple theatres and specialties need intermittent fluoroscopy?", "Mobile fleet", "Single system may suffice"],
      ["Is construction capacity and downtime available now?", "Fixed feasible", "Mobile as a scoped decision, revisited"],
      ["Is there resilience if the single system is unavailable?", "Proceed", "Add fallback capacity to the plan"],
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Can a mobile C-arm perform angiography?",
        a: "Higher-specification mobile systems can perform limited angiographic and roadmapping work, and are used successfully for selected peripheral procedures. They are not designed for sustained digital subtraction angiography over large fields, and a dedicated endovascular service will outgrow them quickly.",
      },
      {
        q: "Is image quality much better on a fixed system?",
        a: "Baseline image quality on a modern flat panel mobile system is good. The differences that matter clinically are sustained output, larger field of view, dedicated table geometry, advanced subtraction and 3D tooling, and integrated dose management over long procedures.",
      },
      {
        q: "Is a hybrid theatre always the safest choice?",
        a: "No. It is the most capable and the most expensive, and it requires genuine multi-specialty utilisation. Built without a credible shared schedule, it becomes an underused theatre with a high service cost.",
      },
      {
        q: "How many mobile C-arms replace a fixed room?",
        a: "None, in capability terms. Mobile systems add flexibility across theatres; they do not replicate a dedicated interventional suite. The comparison is about which service model the hospital is building, not about equivalence.",
      },
      {
        q: "What is the most defensible way to make this decision?",
        a: "Count the intended procedures by type and duration for the next five years, identify which of them genuinely require sustained subtraction imaging over a large field, and let that subset determine whether a fixed system is required.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Deciding between a mobile C-arm and a fixed interventional suite?",
    subheading:
      "AbuFarha Medical supplies both mobile C-arm systems and fixed angiography suites, and supports hospitals with casemix analysis, room planning, installation and training.",
    technology: "C-Arm Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Interventional and theatre imaging applications" },
      { role: "Technical review", name: "AbuFarha Projects & Engineering", credential: "Interventional room planning and installation" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "IEC equipment standards, published interventional imaging guidance and hospital project planning practice",
    disclaimer:
      "Platform selection depends on local casemix, staffing, facility constraints and regulatory requirements. Decisions should involve clinical leads, medical physics and estates.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Equipment standards",
        items: [
          { label: "IEC 60601-2-43 for X-ray equipment used in interventional procedures" },
          { label: "IEC 60601-1 general requirements for medical electrical equipment" },
        ],
      },
      {
        title: "Radiation protection",
        items: [
          { label: "ICRP guidance on radiological protection in fluoroscopically guided procedures" },
          { label: "National shielding design and radiation protection requirements for interventional rooms" },
        ],
      },
      {
        title: "Service planning",
        items: [
          { label: "National guidance on interventional and hybrid theatre facility planning" },
          { label: "WHO medical device technical series — technology assessment and selection" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "The boundary is sustained output, field size and subtraction capability, not baseline image quality.",
      "Mobile systems buy flexibility across theatres; fixed systems buy sustained capability in one room.",
      "Fixed suites need referenced volume, a dedicated team and a construction programme to be defensible.",
      "Hybrid theatres are the right answer only when surgery and intervention must occur in the same case.",
      "Do not buy a mobile system to postpone a fixed-room decision — scope the decision deliberately.",
      "At low volume, mobile wins on cost per procedure; at high volume, fixed wins decisively.",
      "Let the subset of procedures requiring prolonged large-field subtraction decide the platform.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "The right platform follows from the service the hospital intends to run, not from the specification sheet.",
  },
  {
    type: "p",
    text: "Count the procedures, measure their duration and imaging demands, confirm the staffing and the room, and the choice usually becomes obvious. Hospitals that make this decision from casemix data rarely regret it; hospitals that make it from ambition or from deferral usually buy twice.",
  },
];
