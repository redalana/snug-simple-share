/**
 * C-arm commissioning and theatre integration — C-Arm cluster (installation).
 */

import type { ContentBlock, TocItem } from "../blog";

export const C_ARM_COMMISSIONING_TOC: TocItem[] = [
  { id: "overview", title: "Why Commissioning Matters for a Mobile System" },
  { id: "pre", title: "Pre-Delivery Preparation" },
  { id: "acceptance", title: "Acceptance and Physics Testing" },
  { id: "integration", title: "Theatre and Table Integration" },
  { id: "it", title: "Network, PACS and Data Integration" },
  { id: "safety", title: "Radiation Safety Setup" },
  { id: "training", title: "Training and Handover" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const C_ARM_COMMISSIONING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Because a mobile C-arm needs no construction, it is often treated as a delivery rather than an installation. The system arrives, someone demonstrates the controls, and it enters clinical use the same week. Months later the hospital discovers images are not reaching PACS, dose data is not recorded, the drapes do not fit, the table interferes with lateral projections and half the theatre teams have never been trained.",
      "Proper commissioning prevents all of that. It establishes that the system performs to specification, that it physically and digitally integrates with the theatres it will serve, that radiation protection provision is complete, and that the people who will use it can use it well.",
      "This guide sets out a practical commissioning sequence from pre-delivery preparation to clinical handover, including the baseline measurements that make future troubleshooting possible.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Pre-delivery preparation, acceptance and physics testing, theatre and table integration, PACS and dose data integration, radiation safety setup and structured training handover",
    audience:
      "Biomedical engineers, medical physics, theatre managers, radiographers and project teams",
    readingTime: "13 min read",
    technology: "C-Arm Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Why Commissioning Matters for a Mobile System",
    number: 1,
    body: "No building work does not mean no integration work.",
  },
  {
    type: "ul",
    items: [
      "The system must be verified against the specification the hospital paid for, not simply switched on.",
      "Baseline image quality and dose measurements are the reference for every future complaint.",
      "Physical fit with existing tables, drapes and theatre layouts is not guaranteed by the purchase.",
      "Digital integration — worklist, PACS, dose reporting — almost never configures itself.",
      "Radiation protection provision, local rules and dosimetry must exist before clinical use.",
      "Training must reach multiple theatre teams across shifts, not just the staff present at delivery.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "The baseline is the deliverable",
    text: "The single most valuable output of commissioning is a stored set of baseline measurements and phantom images at documented techniques. Without them, every later image quality dispute is subjective and every service visit starts from zero.",
  },
  {
    type: "h2",
    id: "pre",
    text: "Pre-Delivery Preparation",
    number: 2,
    body: "Most commissioning problems are created before the system arrives.",
  },
  {
    type: "table",
    headers: ["Item", "Confirm before delivery", "Why"],
    rows: [
      ["Storage and charging location", "Space identified, power available, route agreed", "Determines whether the system is ready when needed"],
      ["Transport route", "Corridor widths, door widths, lift dimensions and load", "A system that cannot reach a theatre is unusable"],
      ["Table compatibility", "Radiolucent range and clearance for planned projections", "Table conflicts are the most common physical surprise"],
      ["Sterile drape supply", "Correct part numbers ordered and stocked", "Cases cannot proceed without compatible drapes"],
      ["Network provision", "Wireless coverage or connection points in each theatre", "Determines whether PACS transfer works in practice"],
      ["PACS and worklist configuration", "AE titles, modality worklist, dose reporting destination", "Requires IT scheduling ahead of delivery"],
      ["Radiation protection provision", "Mobile shields, PPE, dosimetry, draft local rules", "Must be in place for first clinical use"],
      ["Training plan", "Sessions scheduled across theatre shifts", "Delivery-day training reaches too few staff"],
      ["Acceptance test booking", "Medical physics availability confirmed", "Avoids clinical use before acceptance"],
    ],
  },
  {
    type: "h2",
    id: "acceptance",
    text: "Acceptance and Physics Testing",
    number: 3,
    body: "Acceptance confirms specification compliance and establishes the baseline.",
  },
  {
    type: "ul",
    items: [
      "Mechanical inspection: all movements, brake hold at extremes of travel, wheel and steering behaviour.",
      "Electrical safety testing to the applicable standard before clinical use.",
      "Radiation output and dose rate measurement at reference conditions for each mode.",
      "Automatic dose rate control performance across a range of phantom thicknesses.",
      "Maximum dose rate verification against regulatory limits, including magnification modes.",
      "Image quality baseline: spatial resolution, low-contrast detectability, uniformity on the acceptance phantom.",
      "Dose display accuracy verification against measurement.",
      "Collimation and beam alignment, including laser aimer alignment where fitted.",
      "Leakage radiation measurement and confirmation of all safety interlocks and warning indicators.",
      "3D sweep verification where fitted: volume dimensions, dose per sweep, reconstruction integrity.",
      "Documented sign-off before first clinical use, with baseline images and measurements stored.",
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Acceptance is a gate, not a formality",
    clinicalInterpretation:
      "Systems entering clinical use before acceptance testing frequently operate for months with incorrect dose display, mis-set protocols or an unverified automatic dose rate control response, and every image produced in that period is difficult to defend.",
    hospitalRecommendation:
      "Make first clinical use conditional on documented acceptance by medical physics and biomedical engineering, with a copy of the baseline record held locally and in the equipment file.",
  },
  {
    type: "h2",
    id: "integration",
    text: "Theatre and Table Integration",
    number: 4,
    body: "Verify the system in each theatre it will serve, with the equipment it will work alongside.",
  },
  {
    type: "table",
    headers: ["Check", "Method", "Failure consequence"],
    rows: [
      ["Access and manoeuvring in each theatre", "Move the system into position with theatre furniture in place", "Delayed starts and forced positioning"],
      ["Lateral and oblique projection clearance", "Rehearse projections on the actual table", "Projections unobtainable mid-case"],
      ["Table radiolucent range", "Image the phantom along the table length", "Attenuating structures in the field"],
      ["3D sweep clearance where applicable", "Radiation-free dry run with drapes and retractors", "Aborted sweeps after dose delivery"],
      ["Monitor position and sightlines", "Check from the primary operator's working position", "Perceived image quality problems"],
      ["Cable routing and power provision", "Confirm socket positions and cable paths", "Trip hazards and cable damage"],
      ["Drape fit and sterile technique", "Trial draping with theatre staff", "Contamination risk and wasted drapes"],
      ["Storage and charging in situ", "Confirm the parked position and charging routine", "Flat batteries at the start of a list"],
    ],
  },
  {
    type: "h2",
    id: "it",
    text: "Network, PACS and Data Integration",
    number: 5,
    body: "The system is not commissioned until images and dose data reliably leave it.",
  },
  {
    type: "ul",
    items: [
      "Modality worklist query working in every theatre, so patient identity is selected rather than typed.",
      "PACS transfer verified from each theatre location, including on wireless where used.",
      "Local buffering behaviour understood: what happens when the network drops mid-case, and how to recover.",
      "Structured dose report export configured to the dose management system where one exists.",
      "3D volume export tested end to end, including that PACS can display it usefully.",
      "Naming, accession and procedure code conventions agreed so theatre studies are findable.",
      "Cybersecurity requirements met: patching route, access control, vendor remote access policy.",
      "A written recovery procedure for the day PACS transfer fails during an active list.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Commissioning in one theatre only",
    text: "Wireless coverage, table geometry and access differ between theatres. Testing in a single room and declaring the system commissioned is why teams routinely discover, weeks later, that images will not transfer from a specific theatre or that a lateral projection is impossible on one table.",
  },
  {
    type: "h2",
    id: "safety",
    text: "Radiation Safety Setup",
    number: 6,
    body: "Protection provision must be complete and specific to each theatre.",
  },
  {
    type: "table",
    headers: ["Element", "Requirement", "Owner"],
    rows: [
      ["Local rules for fluoroscopy in theatre", "Written, theatre-specific, accessible", "Radiation protection supervisor"],
      ["Controlled area definition", "Defined and understood by theatre staff", "Radiation protection adviser"],
      ["Mobile shielding", "Available in each theatre, in serviceable condition", "Theatre management"],
      ["Protective garments", "Correctly sized, inspected, stored on hangers", "Theatre management"],
      ["Dosimetry", "Issued to all regularly exposed staff, including surgeons", "Radiation protection supervisor"],
      ["Warning signage and indicators", "Present and functional at theatre entrances", "Estates / theatre"],
      ["Dose recording and review", "Dose data captured per case and reviewed periodically", "Medical physics"],
      ["Pregnancy and staff protection procedures", "Documented and communicated", "Occupational health"],
    ],
  },
  {
    type: "h2",
    id: "training",
    text: "Training and Handover",
    number: 7,
    body: "Training is the commissioning step most often abbreviated and most consequential.",
  },
  {
    type: "ul",
    items: [
      "Deliver multiple sessions across shifts so all theatre teams and rotating staff are reached.",
      "Cover practical positioning, projection technique, brakes and transport handling explicitly.",
      "Teach dose-saving practice directly: pulsed fluoroscopy, last-image hold, collimation, receptor proximity.",
      "Include the surgeons who control the footswitch, not only the radiographers.",
      "Train the daily operator check and the fault reporting route.",
      "Train the PACS transfer workflow and the network failure recovery procedure.",
      "Provide quick-reference guidance mounted on the system itself.",
      "Record who has been trained, and repeat the programme with staff turnover rather than once at delivery.",
      "Schedule a review at four to eight weeks to catch practical issues that only appear in real use.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Does a mobile C-arm really need formal commissioning?",
        a: "Yes. It produces patient dose, requires acceptance and baseline testing, needs digital integration and demands radiation protection provision. The absence of construction work does not remove any of those obligations.",
      },
      {
        q: "Who should sign off first clinical use?",
        a: "Medical physics for radiation performance and dose display accuracy, and biomedical engineering for electrical and mechanical safety, with theatre management confirming that drapes, shielding, training and storage arrangements are in place.",
      },
      {
        q: "How long should commissioning take?",
        a: "Acceptance testing is typically a day; integration, training across shifts and PACS verification realistically span two to four weeks. Planning that period into the project avoids the common pattern of clinical use starting before integration is finished.",
      },
      {
        q: "What is most often missed?",
        a: "PACS and dose data integration, drape supply, training coverage across all theatre teams, and verification in every theatre the system will serve rather than in one.",
      },
      {
        q: "Why store baseline phantom images?",
        a: "Because every future image quality complaint is resolved by comparison. A baseline turns a subjective argument into a five-minute objective test and makes service visits far more productive.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Commissioning a new C-arm across your theatres?",
    subheading:
      "AbuFarha Medical delivers installation, acceptance support, PACS integration and structured theatre training for mobile C-arm systems.",
    technology: "C-Arm Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "C-arm installation, acceptance and integration" },
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Theatre fluoroscopy training and workflow" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "IEC equipment standards, national acceptance testing and quality assurance protocols, and manufacturer installation documentation",
    disclaimer:
      "Acceptance testing requirements, local rules and sign-off responsibilities are jurisdiction-specific. Follow your regulator, radiation protection adviser and medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Acceptance and quality assurance",
        items: [
          { label: "IEC 61223 series — evaluation and routine testing in medical imaging departments" },
          { label: "National acceptance testing protocols for fluoroscopic equipment" },
        ],
      },
      {
        title: "Safety standards",
        items: [
          { label: "IEC 60601-1 and IEC 60601-2-43 for interventional X-ray equipment" },
          { label: "National electrical safety testing requirements for medical devices" },
        ],
      },
      {
        title: "Radiation protection and data",
        items: [
          { label: "ICRP guidance on radiological protection in fluoroscopically guided procedures" },
          { label: "DICOM structured dose reporting and dose management guidance" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "No construction does not mean no commissioning; acceptance, integration and training are all required.",
      "Store baseline phantom images and dose measurements — they are the reference for all future disputes.",
      "Verify the system in every theatre it will serve, on the tables it will work with.",
      "Configure and test worklist, PACS transfer and structured dose reporting before clinical use.",
      "Confirm drape supply, mobile shielding, PPE and dosimetry are in place on day one.",
      "Train across shifts and include the surgeons controlling the footswitch.",
      "Review at four to eight weeks to capture practical issues that only appear in live use.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "A commissioned C-arm is one that performs to specification, fits its theatres, moves its data and is used well by trained teams.",
  },
  {
    type: "p",
    text: "The two to four weeks invested in structured commissioning prevents years of workarounds — manual image handling, missing dose data, impossible projections and uneven operator practice — and gives engineering an objective baseline to defend image quality against for the life of the system.",
  },
];
