/**
 * X-ray tube life and preventive maintenance — X-Ray cluster (maintenance).
 */

import type { ContentBlock, TocItem } from "../blog";

export const XRAY_MAINTENANCE_TOC: TocItem[] = [
  { id: "overview", title: "What Fails on a Radiography System" },
  { id: "tube", title: "X-Ray Tube Life and What Consumes It" },
  { id: "detectors", title: "Detector Care and Damage Prevention" },
  { id: "mechanics", title: "Mechanics, Stands and Mobile Units" },
  { id: "qa", title: "The Quality Assurance Programme" },
  { id: "contracts", title: "Service Contract Scope" },
  { id: "uptime", title: "Availability and Downtime Management" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const XRAY_MAINTENANCE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Radiography equipment is the most heavily used and least ceremonially maintained imaging technology in the hospital. It runs hundreds of exposures a day, is handled by many operators, and is frequently the last modality to receive attention in a service planning meeting.",
      "That combination produces a predictable pattern: failures concentrate in the X-ray tube, in portable detectors damaged by handling, and in mechanical assemblies worn by constant movement. All three are manageable, and all three respond to specific, unglamorous discipline.",
      "This guide covers what actually fails, how technique and handling practice extend component life, the quality assurance programme that catches drift before it affects images or dose, and how to specify a service contract that covers the components that cost money.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Radiography failure modes, X-ray tube life drivers, flat panel detector damage prevention, mechanical and mobile unit maintenance, quality assurance programme, service contract scope, downtime management",
    audience:
      "Biomedical engineering managers, radiology managers, radiographers, medical physicists and procurement teams",
    readingTime: "14 min read",
    technology: "X-Ray Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "What Fails on a Radiography System",
    number: 1,
    body: "The failure distribution is narrow, which makes maintenance planning unusually straightforward once it is written down.",
  },
  {
    type: "table",
    headers: ["Component", "Typical failure", "Operational effect"],
    rows: [
      ["X-ray tube", "End of life, arcing, bearing noise, vacuum degradation", "Room out of service until replacement; high-value part"],
      ["Flat panel detector", "Impact damage, fluid ingress, dead pixel accumulation, calibration drift", "Image artefacts or complete loss of a detector"],
      ["Detector batteries", "Capacity loss with cycling", "Reduced mobile availability; mid-round failures"],
      ["Generator", "Exposure inaccuracy, contactor and control faults", "Inconsistent density; intermittent exposure aborts"],
      ["Tube stand and rails", "Brake wear, drift, cable and bearing wear", "Positioning inaccuracy and slow examinations"],
      ["Table and wall stand", "Drive faults, detector tray wear, positional inaccuracy", "Examination delays, positioning errors"],
      ["Automatic exposure control", "Chamber drift or calibration error", "Silent dose increase across affected examinations"],
      ["Mobile unit drive and battery", "Battery pack degradation, motor and brake wear", "Unit unable to complete a ward round"],
      ["Workstation and network", "Disk, memory, software or connectivity failure", "Images acquired but not distributed"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Radiography downtime is a hospital problem, not a departmental one",
    text: "A general room is often the only route for inpatient, emergency and theatre-adjacent radiography. When it stops, discharge decisions, theatre lists and admissions slow down. Quantifying downtime in delayed patient pathways rather than in departmental revenue changes how quickly a business case for cover is approved.",
  },
  {
    type: "h2",
    id: "tube",
    text: "X-Ray Tube Life and What Consumes It",
    number: 2,
    body: "Tube life is consumed by heat and by thermal cycling. Technique discipline therefore has a direct and measurable effect on replacement intervals.",
  },
  {
    type: "ul",
    items: [
      "High mAs techniques generate more anode heat per exposure; optimising toward higher kV and lower mAs reduces thermal loading as well as patient dose.",
      "Rapid repeated exposures without adequate cooling accumulate heat; where workflow allows, sequencing examinations to avoid sustained bursts extends life.",
      "Repeat exposures consume tube life twice for one diagnostic image, which links positioning training to capital expenditure.",
      "Fluoroscopic or long-exposure functions on combined systems consume tube life far faster than radiographic exposures.",
      "Warm-up procedures specified by the manufacturer reduce stress from cold starts and should be part of the daily routine.",
      "Bearing noise, output drop and intermittent arcing are the usual warning signs; investigating them early converts an emergency into planned work.",
      "Exposure counters and thermal logs, reviewed periodically, allow replacement to be scheduled into a quiet period.",
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Levers on tube life",
    clinicalInterpretation:
      "Technique optimisation, repeat-rate reduction and adherence to warm-up routines together have more influence on tube replacement intervals than any maintenance activity performed by an engineer. They are all departmental practice rather than service tasks.",
    hospitalRecommendation:
      "Review exposure counters quarterly with biomedical engineering, treat a rising repeat rate as a maintenance issue as well as a training issue, and plan tube replacement into a scheduled window before the tube fails clinically.",
  },
  {
    type: "h2",
    id: "detectors",
    text: "Detector Care and Damage Prevention",
    number: 3,
    body: "Portable detectors are the second-largest parts cost in radiography, and they are almost always lost to handling rather than to electronics.",
  },
  {
    type: "ul",
    items: [
      "Assign detectors to rooms or teams with recorded custody, so damage has an owner and a pattern can be identified.",
      "Provide protective covers and defined transport arrangements for trolley and ward work; carrying a panel loose on a trolley invites a drop.",
      "Verify the hospital's disinfectants against the manufacturer's compatibility list; incompatible agents degrade seals and housings over months.",
      "Train staff on load limits — whether patients may be positioned directly on the panel, and with what support.",
      "Manage batteries actively: rotate packs, replace on capacity rather than on failure, and keep a charged spare on every mobile unit.",
      "Run scheduled uniformity and dead-pixel checks so gradual degradation is detected before it appears in a report.",
      "Keep a spare panel where bedside imaging is clinically essential, and confirm that damage cover with a loan arrangement is in the service contract.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Record every detector incident, even when nothing breaks",
    text: "Near-miss recording — a drop that caused no visible damage, a spill that was cleaned — reveals which workflows are damaging panels. Departments that collect this data usually find that two or three specific handling situations account for most of their detector losses, and both are fixable with equipment or process changes.",
  },
  {
    type: "h2",
    id: "mechanics",
    text: "Mechanics, Stands and Mobile Units",
    number: 4,
    body: "Mechanical maintenance is where planned service visits earn their cost, because wear is gradual and its effects show first as slower examinations.",
  },
  {
    type: "ul",
    items: [
      "Rail systems, brakes, counterweight cables and detents need scheduled inspection; drifting tube supports slow every examination and eventually become a safety issue.",
      "Table and wall stand drives, detector trays and locking mechanisms should be inspected and lubricated per manufacturer schedule.",
      "Collimator light field to radiation field congruence must be verified periodically; a drifted light field causes both repeats and unnecessary exposure.",
      "Mobile unit drive systems, brakes and castors deserve explicit attention — they are used constantly on uneven floors and in lifts.",
      "Mobile unit traction batteries are consumables with a predictable life; replacing them on schedule prevents mid-round failures.",
      "Cable management on mobile and tethered systems is a frequent failure point and an infection-control concern.",
      "Emergency stops, interlocks and warning indicators should be function-tested as part of every planned visit and recorded.",
    ],
  },
  {
    type: "h2",
    id: "qa",
    text: "The Quality Assurance Programme",
    number: 5,
    body: "Radiography quality assurance is inexpensive and highly effective, and its principal purpose is to detect silent drift.",
  },
  {
    type: "table",
    headers: ["Frequency", "Checks", "Owner"],
    rows: [
      ["Daily", "Visual and mechanical inspection, warm-up, workstation and network status, detector battery status", "Radiographer"],
      ["Weekly", "Detector uniformity check, exposure index distribution review, cleanliness and cable inspection", "Radiographer with physics oversight"],
      ["Monthly", "Repeat and reject analysis by cause, light field congruence spot check, protective equipment inspection", "Radiology management"],
      ["Quarterly / per manufacturer schedule", "Planned maintenance visit, mechanical inspection, calibration, exposure counter review", "Service engineer"],
      ["Annually", "Generator accuracy and reproducibility, AEC performance, detector performance, dose indicator accuracy, radiation protection survey, electrical safety", "Medical physics expert and service engineer"],
      ["Event-driven", "After tube, detector or software replacement: calibration, congruence, AEC and image quality verification", "Service engineer with physics sign-off"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "quick-facts",
    title: "The three checks that catch the most problems",
    text: "Detector uniformity, exposure index distribution and light field congruence together detect the majority of silent radiography faults: panel degradation, dose creep or AEC drift, and collimator misalignment. None requires specialist equipment beyond what a department already has.",
  },
  {
    type: "h2",
    id: "contracts",
    text: "Service Contract Scope",
    number: 6,
    body: "Radiography contracts are usually inexpensive relative to CT or MRI, which is exactly why their scope is often left vague.",
  },
  {
    type: "table",
    headers: ["Element", "What to require", "Common gap"],
    rows: [
      ["X-ray tube cover", "Full replacement without exposure caps, or an explicit stated cap", "Pro-rata cover that leaves most of the cost with the hospital"],
      ["Detector cover", "Electronic failure and calibration included", "Impact and fluid damage excluded entirely"],
      ["Accidental damage", "Defined cover with excess and loan-panel arrangement", "Not offered unless specifically requested"],
      ["Batteries", "Detector and mobile traction batteries included or explicitly priced", "Treated as consumables outside contract"],
      ["Planned maintenance", "Number of visits, scope and scheduling rights around clinical lists", "Visits scheduled at vendor convenience"],
      ["Response commitment", "Committed on-site response with escalation path", "Best-efforts language"],
      ["Software and cybersecurity", "Version updates and security patching for a stated period", "Support ends without notice on older platforms"],
      ["Mobile units", "Explicitly included, with drive and battery cover", "Excluded because they are not in a room"],
    ],
  },
  {
    type: "h2",
    id: "uptime",
    text: "Availability and Downtime Management",
    number: 7,
    body: "Because radiography serves the whole hospital, availability planning matters more than for higher-profile modalities.",
  },
  {
    type: "ul",
    items: [
      "Maintain a documented fallback path for each room: another room, a mobile unit, or a partner arrangement.",
      "Keep at least one functioning mobile unit available at all times where inpatient and critical care work is routine.",
      "Hold a spare detector where bedside imaging cannot be interrupted, and record where it is stored and who controls it.",
      "Schedule planned maintenance and tube replacement into the quietest identified periods rather than accepting default slots.",
      "Log every downtime event with cause, duration and examinations displaced; this record is the evidence base for contract renegotiation and for capital planning.",
      "Use remote monitoring and diagnostics where offered, and require that alerts trigger a defined action rather than only a notification.",
      "Review the failure log annually to decide whether a room needs replacement rather than another repair.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "How long does an X-ray tube last?",
        a: "Tube life is measured in exposures and accumulated heat rather than in years, so it varies widely with workload and technique. A high-volume room with heavy mAs techniques and a significant repeat rate will replace tubes considerably more often than a similar room with optimised protocols. Tracking exposure counters locally is more useful than any published average.",
      },
      {
        q: "Is accidental damage cover for detectors worth buying?",
        a: "In departments with substantial trolley, theatre and critical care work, usually yes — a single dropped portable panel can cost more than several years of the cover premium. In wholly ambulatory departments with fixed detectors, the risk is much lower and the cover is harder to justify.",
      },
      {
        q: "How often should detector uniformity be checked?",
        a: "A weekly check is a practical and widely used interval that detects dead pixel accumulation and calibration drift long before they affect reporting. Follow the manufacturer's specified test and interval, and record results as a trend rather than as a pass or fail.",
      },
      {
        q: "Do mobile units need a different maintenance approach?",
        a: "Yes. They combine radiographic components with a driven chassis, traction batteries and constant handling over uneven floors, so drive systems, brakes, castors, cables and batteries need explicit attention. They should be named in the service contract rather than assumed to be included with the rooms.",
      },
      {
        q: "When should a radiography room be replaced rather than repaired?",
        a: "When detector performance no longer supports optimised dose, when software and cybersecurity support have ended, when parts availability is uncertain, or when the accumulated downtime log shows repeated disruption to hospital pathways. Age alone is a poor criterion; these four are decisive.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Need reliable radiography service support?",
    subheading:
      "AbuFarha Medical installs, commissions and maintains digital radiography systems and mobile units, and works with hospitals on QA programmes and contract scope.",
    technology: "X-Ray Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "X-ray equipment maintenance and commissioning" },
      { role: "Operational review", name: "AbuFarha After-Sales & Support", credential: "Imaging uptime and service contract practice" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer maintenance documentation, IEC equipment standards and national radiography quality assurance guidance",
    disclaimer:
      "Maintenance intervals, tolerances and test methods are equipment-specific. Follow the manufacturer's documentation and the advice of a qualified medical physics expert for your systems.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Quality assurance",
        items: [
          { label: "National quality assurance protocols for digital radiography and mobile equipment" },
          { label: "IEC 62220 series — detector performance measurement methods" },
        ],
      },
      {
        title: "Equipment and safety standards",
        items: [
          { label: "IEC 60601-1 and the IEC 60601-2 series for diagnostic X-ray equipment" },
          { label: "IEC 60364-7-710 — electrical installations in medical locations" },
        ],
      },
      {
        title: "Radiation protection",
        items: [
          { label: "ICRP recommendations on radiological protection in medicine" },
          { label: "IAEA guidance on quality assurance and dose optimisation in radiography" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Radiography failures concentrate in the tube, portable detectors and mechanical assemblies — all manageable with routine discipline.",
      "Tube life is consumed by heat and repeats, so technique optimisation and positioning training are capital-preservation measures.",
      "Portable detectors are lost to handling, not electronics: custody, covers, cleaning compatibility and damage cover determine real lifetime.",
      "Detector uniformity, exposure index distribution and light field congruence catch most silent faults.",
      "Mobile units need explicit inclusion in contracts, including drive systems and traction batteries.",
      "Contract scope must state tube cover, detector cover, accidental damage, batteries and response commitment.",
      "Because radiography serves the whole hospital, a documented fallback path matters more than for any other modality.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "Radiography reliability comes from small habits applied consistently: warm-ups, custody of detectors, weekly uniformity checks, repeat analysis and scheduled service.",
  },
  {
    type: "p",
    text: "Departments that run this discipline replace tubes on schedule, lose fewer detectors and keep hospital pathways moving. Departments that treat the general room as maintenance-free discover its dependencies on the day it stops, when every alternative is already occupied.",
  },
];
