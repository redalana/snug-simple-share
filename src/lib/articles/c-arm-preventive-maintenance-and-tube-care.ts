/**
 * C-arm preventive maintenance and tube care — C-Arm cluster (maintenance).
 */

import type { ContentBlock, TocItem } from "../blog";

export const C_ARM_PM_TOC: TocItem[] = [
  { id: "overview", title: "Why C-Arm Maintenance Is Different" },
  { id: "schedule", title: "A Practical Maintenance Schedule" },
  { id: "tube", title: "Tube Care and Thermal Management" },
  { id: "detector", title: "Detector and Intensifier Protection" },
  { id: "mechanics", title: "Mechanics, Brakes and Transport" },
  { id: "qa", title: "Quality Assurance and Dose Checks" },
  { id: "downtime", title: "Reducing Downtime in Theatre" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const C_ARM_PM_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A mobile C-arm is maintained in a harder environment than any fixed imaging system. It is transported between theatres, draped and undraped repeatedly, positioned by staff working sterile, cleaned with strong disinfectants and depended upon by lists that cannot start without it.",
      "Consequently its failure modes are mechanical and handling-related far more often than electronic. Brakes drift, cables strain, detector housings take impacts, and thermal limits interrupt long cases when screening habits are poor. Almost all of these are preventable through scheduled work and trained practice.",
      "This guide sets out a practical maintenance schedule, the tube and detector care that protects the two most expensive components, and the quality assurance that keeps image quality and dose within intended limits.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Maintenance scheduling, tube thermal management, detector and intensifier protection, mechanical and transport care, quality assurance checks and downtime reduction",
    audience:
      "Biomedical engineers, theatre and radiography staff, radiation protection supervisors and service managers",
    readingTime: "13 min read",
    technology: "C-Arm Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Why C-Arm Maintenance Is Different",
    number: 1,
    body: "The system has no fixed room, no dedicated operator and no quiet period, which changes what maintenance must cover.",
  },
  {
    type: "ul",
    items: [
      "Movement between theatres exposes wheels, brakes, cables and housings to constant mechanical stress.",
      "Multiple untrained-to-expert operators means practice varies far more than in a radiography department.",
      "Sterile draping conceals collision risks and complicates positioning.",
      "Repeated disinfection degrades seals, labels and cable jackets over months.",
      "Utilisation is often unmeasured, so wear is discovered rather than anticipated.",
      "Failures occur mid-case, where the clinical consequence is immediate.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Most C-arm faults are found by hand, not by software",
    text: "A five-minute physical check — brake hold at the extremes of orbital travel, cable condition at the flex points, wheel and steering behaviour, housing integrity — detects a large share of developing faults before they interrupt a list. Diagnostic logs rarely surface any of them.",
  },
  {
    type: "h2",
    id: "schedule",
    text: "A Practical Maintenance Schedule",
    number: 2,
    body: "Split the work by who can realistically do it and how often the failure mode develops.",
  },
  {
    type: "table",
    headers: ["Interval", "Task", "Owner"],
    rows: [
      ["Each use", "Visual check of housings and cables, brake function, wheel movement, monitor image on start-up", "Theatre / radiography operator"],
      ["Each use", "Cleaning per protocol with approved disinfectant; cable routed off the floor", "Theatre team"],
      ["Weekly", "Charging and battery status check where fitted; storage position confirmed", "Designated theatre owner"],
      ["Monthly", "Brake and orbital travel adjustment check, footswitch and hand control test, image quality visual review", "Biomedical engineering"],
      ["Quarterly", "Mechanical inspection, cable flex-point inspection, collimator and laser aimer alignment check", "Biomedical engineering"],
      ["Annually", "Full preventive maintenance visit, tube and detector performance review, dose output measurement", "Vendor / medical physics"],
      ["Annually", "Radiation safety review: leakage, interlocks, dose display verification, protective equipment inspection", "Medical physics"],
      ["On event", "Post-impact inspection after any collision, before further clinical use", "Biomedical engineering"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The value of the daily check",
    clinicalInterpretation:
      "Annual vendor visits find electronic drift; daily and monthly checks find the mechanical and handling faults that actually stop lists. A system maintained only annually will still fail unpredictably between visits.",
    hospitalRecommendation:
      "Assign a named theatre owner for each C-arm, with a one-page daily check and a route for reporting concerns that does not depend on the system already having failed.",
  },
  {
    type: "h2",
    id: "tube",
    text: "Tube Care and Thermal Management",
    number: 3,
    body: "The tube is consumed by screening time and heat, and both are largely under operator control.",
  },
  {
    type: "ul",
    items: [
      "Use pulsed fluoroscopy at the lowest clinically adequate pulse rate rather than continuous screening.",
      "Use last-image hold and stored reference images instead of re-screening to look again.",
      "Collimate to the region of interest, which reduces heat load, scatter and dose together.",
      "Keep the intensifier or detector close to the patient to minimise the required output.",
      "Avoid magnification modes unless clinically necessary; they increase dose rate substantially.",
      "Allow documented cool-down in long cases rather than pushing to a thermal interruption.",
      "Log fluoroscopy time per case; unexplained increases usually indicate a training need or a developing fault.",
      "Review cumulative screening time at each preventive maintenance visit to anticipate tube replacement.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Thermal interruption mid-case is a practice signal",
    text: "A C-arm that reaches its thermal limit during routine surgery is almost always being screened continuously where pulsed acquisition and last-image hold would suffice. The fix is training and protocol defaults, not a larger tube.",
  },
  {
    type: "h2",
    id: "detector",
    text: "Detector and Intensifier Protection",
    number: 4,
    body: "The imaging receptor is the most expensive single component and is damaged by contact, not by use.",
  },
  {
    type: "table",
    headers: ["Risk", "Where it happens", "Control"],
    rows: [
      ["Impact with operating table or rails", "Positioning under drape", "Trained positioning, slow orbital movement, verbal coordination"],
      ["Door frame and lift collisions", "Transport between theatres", "Two-person transport where required, parked configuration for travel"],
      ["Dropped or crushed cables", "Set-up and pack-down", "Defined cable routing and a cable hook or holder"],
      ["Disinfectant damage", "Between-case cleaning", "Only approved agents; verified compatibility with housing and seals"],
      ["Fluid ingress", "Irrigation-heavy procedures", "Correct drape use and immediate reporting of any ingress"],
      ["Progressive intensifier degradation", "Older systems, gradual", "Routine image quality QA to plan replacement"],
    ],
  },
  {
    type: "h2",
    id: "mechanics",
    text: "Mechanics, Brakes and Transport",
    number: 5,
    body: "Mechanical reliability determines whether the system is usable at the bedside geometry a surgeon needs.",
  },
  {
    type: "ul",
    items: [
      "Test every brake at the extremes of travel, not just in the neutral position; drift shows first under load.",
      "Check orbital and angular movement for smoothness and for unexpected resistance.",
      "Inspect wheels and steering; a system that will not track straight gets forced, and forcing causes collisions.",
      "Inspect cable flex points at the C-arm yoke and cart junction where conductors fail first.",
      "Confirm the parked and transport configuration is used, and that staff know it.",
      "Verify the laser aimer and collimator alignment; misalignment increases repeat screening.",
      "Keep the transport route clear and defined, including lift access, and store the system where it charges.",
    ],
  },
  {
    type: "h2",
    id: "qa",
    text: "Quality Assurance and Dose Checks",
    number: 6,
    body: "QA converts subjective impressions of image quality into a trend that can be acted on.",
  },
  {
    type: "table",
    headers: ["Check", "Frequency", "What it detects"],
    rows: [
      ["Phantom image quality — resolution and low-contrast detectability", "Monthly or quarterly", "Detector or intensifier degradation before clinical complaints"],
      ["Dose rate at the entrance surface", "Annually and after tube work", "Output drift and automatic dose rate control faults"],
      ["Dose display accuracy", "Annually", "Errors in recorded dose data and registry submissions"],
      ["Automatic brightness / dose rate control response", "Annually", "Overexposure risk in thick anatomy"],
      ["Collimation and beam alignment", "Quarterly and after service", "Unnecessary patient dose and repeat screening"],
      ["Leakage radiation and interlocks", "Annually", "Radiation safety compliance"],
      ["Monitor performance and ambient light", "Annually", "Perceived image quality problems with no equipment cause"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Treating C-arms as outside the QA programme",
    text: "Because C-arms live in theatre rather than in radiology, they are frequently excluded from the departmental quality assurance and dose review programme. This is where dose display errors, degraded receptors and unmonitored screening times accumulate unnoticed.",
  },
  {
    type: "h2",
    id: "downtime",
    text: "Reducing Downtime in Theatre",
    number: 7,
    body: "Availability is engineered through scheduling, spares and escalation, not through hoping for reliability.",
  },
  {
    type: "ul",
    items: [
      "Schedule preventive maintenance outside list hours and confirm it in the theatre timetable.",
      "Define the fallback system or loan arrangement in the service contract before it is needed.",
      "Hold local spares for the items that fail most: footswitches, hand controls, cables, fuses.",
      "Enable remote diagnostics where network policy allows; it shortens the majority of repairs.",
      "Require post-impact inspection before further clinical use, with a no-blame reporting route.",
      "Track downtime in theatre sessions lost, so the data supports the next service or capital decision.",
      "Keep a single named engineering contact per system so faults are not re-diagnosed each time.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "How often should a mobile C-arm receive preventive maintenance?",
        a: "At minimum annually by the vendor or a qualified service provider, with in-house mechanical and functional checks monthly to quarterly and an operator check at every use. High-utilisation systems in busy theatre suites justify more frequent intervention.",
      },
      {
        q: "What most often shortens tube life?",
        a: "Continuous rather than pulsed screening, unnecessary magnification, poor collimation and a large receptor-to-patient distance. All four increase heat load and patient dose simultaneously, and all four are training issues.",
      },
      {
        q: "Who should own the daily check?",
        a: "A named theatre-side owner, because the system lives in theatre. Biomedical engineering owns the scheduled technical work, and medical physics owns dose and radiation safety verification.",
      },
      {
        q: "Should a C-arm be included in the radiology QA programme?",
        a: "Yes. It is fluoroscopic equipment producing patient dose and requires phantom image quality checks, dose output verification and dose display accuracy checks like any other fluoroscopy system.",
      },
      {
        q: "What should happen after a collision?",
        a: "The system should be taken out of clinical use pending inspection, even if it appears to work. Receptor and mechanical damage frequently presents as intermittent faults or degraded image quality rather than as an obvious failure.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Need a reliable maintenance programme for your C-arm fleet?",
    subheading:
      "AbuFarha Medical provides preventive maintenance, quality assurance support and theatre training for mobile C-arm systems.",
    technology: "C-Arm Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "C-arm service and preventive maintenance" },
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Theatre fluoroscopy applications and training" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer service documentation, IEC equipment standards and national quality assurance protocols for fluoroscopy",
    disclaimer:
      "Maintenance intervals, QA protocols and dose verification requirements are jurisdiction- and manufacturer-specific. Follow the manufacturer's documentation and your medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Equipment standards",
        items: [
          { label: "IEC 60601-1 general requirements for medical electrical equipment" },
          { label: "IEC 60601-2-43 for X-ray equipment used in interventional procedures" },
        ],
      },
      {
        title: "Quality assurance and dose",
        items: [
          { label: "National quality assurance protocols for fluoroscopic and mobile imaging equipment" },
          { label: "ICRP guidance on radiological protection in fluoroscopically guided procedures" },
        ],
      },
      {
        title: "Service management",
        items: [
          { label: "WHO medical device technical series — maintenance and health technology management" },
          { label: "Manufacturer preventive maintenance schedules and component life data" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "C-arm failures are predominantly mechanical and handling-related, not electronic.",
      "A named theatre owner and a daily physical check prevent more downtime than any contract tier.",
      "Pulsed fluoroscopy, last-image hold and tight collimation extend tube life and cut dose together.",
      "Receptor damage comes from collisions and cleaning agents, not from use.",
      "Include C-arms in the departmental QA and dose review programme; they are usually omitted.",
      "Post-impact inspection before further clinical use is non-negotiable.",
      "Measure downtime in theatre sessions lost to justify service and capital decisions.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "A well-maintained C-arm is one that is checked daily, screened sparingly, transported carefully and measured objectively.",
  },
  {
    type: "p",
    text: "None of these requires exotic engineering. They require ownership in theatre, a scheduled technical programme, inclusion in quality assurance and a practice culture that treats screening time and handling as clinical skills rather than incidentals.",
  },
];
