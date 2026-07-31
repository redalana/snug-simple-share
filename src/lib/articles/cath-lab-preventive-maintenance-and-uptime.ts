/**
 * Cath lab preventive maintenance, uptime and service contracts — Cath Lab cluster.
 */

import type { ContentBlock, TocItem } from "../blog";

export const CATH_LAB_MAINTENANCE_TOC: TocItem[] = [
  { id: "overview", title: "Uptime Is a Clinical Requirement" },
  { id: "failure-modes", title: "What Actually Fails in a Cath Lab" },
  { id: "tube-life", title: "X-Ray Tube Life and Replacement" },
  { id: "detector", title: "Detector and Positioner Care" },
  { id: "schedule", title: "The Preventive Maintenance Schedule" },
  { id: "qa", title: "Quality Assurance and Dose Monitoring" },
  { id: "garments", title: "Protective Garment Management" },
  { id: "contracts", title: "Designing the Service Contract" },
  { id: "parts", title: "Parts Logistics in Africa and the Middle East" },
  { id: "in-house", title: "What the In-House Team Should Own" },
  { id: "downtime", title: "Planning for Downtime" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const CATH_LAB_MAINTENANCE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A cath lab that carries an emergency service has a harder availability requirement than almost any other item of hospital imaging equipment. A CT scanner that goes down for two days disrupts a schedule. A cath lab that goes down for two days in a hospital with no second room means every patient presenting with an acute coronary syndrome is transferred elsewhere.",
      "That is why maintenance of an angiography system is best treated as availability engineering rather than as equipment servicing. The objective is not simply that the system works, but that it works on the night it is needed, with a plan for the occasions when it does not.",
      "This guide covers what fails, what a preventive maintenance programme should contain, how to structure a service contract that actually delivers uptime, and how to plan for the outage that will eventually happen.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Failure modes, tube life, detector and positioner care, PM schedules, quality assurance, protective garments, service contract design, parts logistics, downtime planning",
    audience:
      "Biomedical engineers, hospital administrators, cath lab managers and procurement teams",
    readingTime: "14 min read",
    technology: "Cardiac Catheterization Laboratory (Angiography)",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "Uptime Is a Clinical Requirement",
    body: "Set an availability target from the clinical service, then buy the maintenance programme that supports it.",
  },
  {
    type: "p",
    text: "A daytime-only diagnostic room and a 24/7 primary PCI room need different service arrangements even when the equipment is identical. The first can tolerate a next-business-day response; the second cannot. Working backwards from the clinical commitment — what service does this room promise, at what hours, with what fallback? — produces a defensible specification for response times, parts coverage and spares holding. Working forwards from a contract price produces a room that is cheap to maintain and unavailable when it matters.",
  },
  {
    type: "h2",
    id: "failure-modes",
    number: 2,
    text: "What Actually Fails in a Cath Lab",
    body: "Failures cluster in a small number of predictable places, and most of them are workload-driven rather than random.",
  },
  {
    type: "table",
    headers: ["Subsystem", "Typical failure pattern", "Consequence"],
    rows: [
      ["X-ray tube", "Wear-out driven by workload and thermal cycling", "Room out of service until replaced; usually the largest single unplanned cost"],
      ["Flat-panel detector", "Pixel and calibration degradation, impact or fluid damage", "High-value replacement; image quality falls before outright failure"],
      ["C-arm positioner", "Mechanical wear in drives, brakes and cable management", "Restricted projections, collision-protection faults, eventual immobility"],
      ["Patient table", "Float, brake and height mechanism wear", "Workflow disruption and, at worst, a patient-safety issue"],
      ["Cooling circuit", "Pump, fan and coolant-level faults", "Thermal shutdown mid-case; often preventable by inspection"],
      ["Haemodynamic channels and cables", "Connector and transducer-cable wear", "Loss of pressure traces; frequently the cause of cases delayed for 'system faults'"],
      ["Displays and control room", "Backlight ageing, control-panel wear", "Degraded working conditions, rarely a hard stop"],
      ["Protective garments", "Cracking of the shielding layer, often invisible", "Silent loss of operator protection"],
    ],
    caption: "Most cath lab downtime originates in the tube, the cooling circuit or the positioner.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Logging faults by subsystem for twelve months tells a hospital more about its next service contract than any vendor presentation does.",
    clinicalInterpretation:
      "A rising rate of cooling or positioner faults is an early warning of workload exceeding what the current maintenance interval supports.",
    hospitalRecommendation:
      "Record every fault, its downtime and its cause in the asset record, and review the pattern before each contract renewal.",
  },
  {
    type: "h2",
    id: "tube-life",
    number: 3,
    text: "X-Ray Tube Life and Replacement",
    body: "The tube is a consumable with a high unit cost, and its life is largely determined by how the room is operated.",
  },
  {
    type: "ul",
    items: [
      "Life is driven by cumulative fluoroscopy and acquisition load and by thermal cycling, not by calendar age — two identical rooms with different case mixes will not reach replacement at the same time.",
      "Long, complex interventions load the tube far more heavily than routine diagnostic angiography, so a room moving into complex PCI or structural work should expect shorter tube life than its history suggests.",
      "Dose-aware practice extends tube life: lower fluoroscopy pulse rates, disciplined use of acquisition, good collimation and use of last-image-hold all reduce thermal load as well as patient dose.",
      "Modern systems expose tube-loading and usage data; trending it converts tube replacement from an emergency into a planned event.",
      "Financial planning matters as much as engineering: either include tube coverage in the service contract or provision for replacement in the capital plan. A hospital that has done neither will face an unbudgeted stop.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Plan the tube change, do not react to it",
    text: "When usage trending indicates a tube is approaching end of life, schedule replacement into a planned maintenance window with the elective list adjusted around it. A planned change costs a known day of capacity; an unplanned failure costs whatever the parts lead time turns out to be, at whatever moment it happens.",
  },
  {
    type: "h2",
    id: "detector",
    number: 4,
    text: "Detector and Positioner Care",
    body: "The two most expensive assemblies in the room are also the two most easily damaged by routine operational habits.",
  },
  {
    type: "p",
    text: "Flat-panel detectors are damaged by impact and by fluid ingress, both of which happen during ordinary clinical activity — a trolley knocked against the panel, contrast or saline spilled across the housing, an aggressive cleaning agent applied to the surface. Manufacturer-approved cleaning products, protective covers where recommended, and a habit of checking clearance before moving equipment prevent the majority of these events. Calibration should be performed to the manufacturer's schedule, and any drift in flat-field or gain behaviour investigated rather than tolerated.",
  },
  {
    type: "p",
    text: "The positioner fails mechanically, and the earliest signals are behavioural: slower motion, unexpected collision-protection triggers, drift in a parked position, new noise during rotation. Cable-management wear inside the gantry is a common and progressive fault. Reporting these observations rather than working around them is the single most useful maintenance contribution the clinical team makes.",
  },
  {
    type: "h2",
    id: "schedule",
    number: 5,
    text: "The Preventive Maintenance Schedule",
    body: "A working programme has three layers: daily user checks, periodic in-house checks, and scheduled manufacturer or accredited-partner service.",
  },
  {
    type: "comparison",
    title: "Three layers of maintenance",
    headers: ["Layer", "Owner", "Typical content"],
    rows: [
      [
        "Daily / per-session",
        "Clinical team",
        "System start-up and self-test, table and positioner movement check, emergency stop and interlock check, display and monitoring check, visual inspection of cables, drapes and shields, cleanliness of detector surfaces",
      ],
      [
        "Periodic in-house",
        "Biomedical engineering",
        "Coolant level and cooling-circuit inspection, cable and connector inspection, positioner motion and brake checks, haemodynamic transducer and cable verification, protective garment inspection, fault-log review",
      ],
      [
        "Scheduled vendor service",
        "Manufacturer or accredited partner",
        "Calibration, generator and tube performance verification, detector calibration, mechanical service of positioner and table, software and security updates, image-quality and dose-output verification against baseline",
      ],
    ],
    caption:
      "Frequencies come from the manufacturer's maintenance documentation and should be adjusted upward for high-workload rooms.",
  },
  {
    type: "h2",
    id: "qa",
    number: 6,
    text: "Quality Assurance and Dose Monitoring",
    body: "Quality assurance detects gradual degradation that no fault code reports.",
  },
  {
    type: "ul",
    items: [
      "Periodic phantom testing of spatial resolution, low-contrast detectability and geometric accuracy, compared against the acceptance-test baseline rather than against a generic pass mark.",
      "Radiation output and automatic dose-rate control verification at the intervals required locally.",
      "Per-case dose recording — air kerma and dose–area product — audited against national or professional reference levels, with outlier cases reviewed.",
      "Protocol review: default protocols and presets drift over time as staff adjust them; scheduled review keeps dose-aware defaults in place.",
      "Documentation: quality assurance records are usually a regulatory requirement and are always the evidence base for a warranty or performance dispute.",
    ],
  },
  {
    type: "h2",
    id: "garments",
    number: 7,
    text: "Protective Garment Management",
    body: "Lead-equivalent garments are safety-critical equipment that degrade invisibly.",
  },
  {
    type: "p",
    text: "The shielding layer inside an apron or thyroid collar can crack from folding, hanging incorrectly or ordinary use, with no external sign. A garment register, correct hanging storage, periodic imaging-based integrity inspection and immediate withdrawal of any garment that fails should be part of the maintenance programme, not a separate radiation-safety initiative. Personal dosimetry closes the loop: if recorded doses rise without a change in workload, garment condition and shield use are the first things to examine.",
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Ceiling and table shields only work when used",
    text: "In-room shielding delivers the largest reduction in operator dose available in a cath lab, and it is also the most frequently neglected control because positioning it takes seconds that feel spare. Maintenance of the suspension arms and drapes is part of the programme; consistent use of them is part of the room's culture.",
  },
  {
    type: "h2",
    id: "contracts",
    number: 8,
    text: "Designing the Service Contract",
    body: "Contract structure determines real availability far more than contract price does.",
  },
  {
    type: "table",
    headers: ["Term", "What to specify", "Why"],
    rows: [
      ["Coverage hours", "Match the clinical service, including nights and weekends for emergency rooms", "A weekday-only contract cannot support a 24/7 PCI commitment"],
      ["Response time", "Remote response and on-site attendance, separately defined", "Remote diagnosis resolves many faults; on-site time is what governs hard failures"],
      ["Parts inclusion", "Explicit list of included and excluded parts", "Ambiguity here is the most common source of dispute"],
      ["Tube coverage", "State whether the tube is included, capped or excluded", "It is the largest single cost event in the room's life"],
      ["Detector coverage", "State inclusion and any exclusions for impact or fluid damage", "Exclusions are common and expensive to discover after an incident"],
      ["Planned maintenance", "Number of visits per year and their scope", "Preventive frequency is what reduces unplanned events"],
      ["Uptime commitment", "Measured availability with defined exclusions and remedies", "Converts an aspiration into an obligation"],
      ["Engineer competency", "Manufacturer-trained engineers for the installed platform", "Generic cover on a specialised platform extends every repair"],
      ["Software and cybersecurity", "Included updates and patching over the term", "Security patching is now an operational requirement, not an optional upgrade"],
      ["Reporting", "Fault, downtime and PM completion reporting", "Without data, renewal negotiations are opinion-based"],
    ],
    caption: "Price the contract against these terms; comparing headline prices across different terms is meaningless.",
  },
  {
    type: "h2",
    id: "parts",
    number: 9,
    text: "Parts Logistics in Africa and the Middle East",
    body: "For many hospitals, real downtime is decided by logistics rather than by engineering.",
  },
  {
    type: "ul",
    items: [
      "In-region parts stocking: a contractual response time is irrelevant if the part ships from another continent afterwards.",
      "Customs and clearance: import documentation and clearance time can exceed the repair itself, and should be addressed in the contract rather than discovered during an outage.",
      "Engineer location and travel time: an in-country or in-region engineer changes the achievable response profile.",
      "Critical spares on site: for single-room hospitals running emergency services, holding agreed critical spares locally is often the cheapest availability improvement available.",
      "Escalation path: named contacts and defined escalation steps, agreed at contract signature rather than negotiated during a failure.",
    ],
  },
  {
    type: "h2",
    id: "in-house",
    number: 10,
    text: "What the In-House Team Should Own",
    body: "A capable biomedical engineering team shortens every fault, including the ones it cannot fix.",
  },
  {
    type: "p",
    text: "The in-house scope should cover first-line fault diagnosis and alarm interpretation, the periodic checks in the maintenance schedule, garment and accessory management, the asset and fault record, and management of the vendor relationship — including verifying that planned maintenance visits actually delivered their documented scope. Just as important is accurate escalation: a well-characterised fault report with error codes, reproduction conditions and imaging examples routinely converts a two-visit repair into one. Training for this belongs in the original project scope and should be refreshed as staff change.",
  },
  {
    type: "h2",
    id: "downtime",
    number: 11,
    text: "Planning for Downtime",
    body: "Every cath lab will be unavailable at some point. The question is whether the hospital has decided in advance what happens then.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "The outage plan a single-room hospital needs",
    items: [
      "A written transfer pathway to a partner interventional centre, agreed in advance rather than arranged during the first outage.",
      "A communication protocol so the emergency department and referring services know the room's status immediately.",
      "Rules for rescheduling elective lists that protect urgent cases first.",
      "Named vendor escalation contacts with out-of-hours coverage.",
      "A case-volume threshold at which a second room becomes the correct answer, reviewed annually.",
    ],
  },
  {
    type: "h2",
    id: "faq",
    number: 12,
    text: "Frequently Asked Questions",
  },
  {
    type: "faq",
    items: [
      {
        q: "How often should a cath lab receive planned maintenance?",
        a: "Follow the manufacturer's documented schedule for the installed platform as the baseline, and increase frequency for high-workload rooms or rooms carrying a 24/7 emergency service. The number and scope of annual visits should be an explicit contract term rather than left to the vendor's discretion.",
      },
      {
        q: "How long does an X-ray tube last in a cath lab?",
        a: "There is no generic figure, because life is driven by workload and thermal cycling rather than by calendar age. Cumulative fluoroscopy and acquisition time, protocol intensity and the proportion of long complex cases all matter. Trending the system's own tube-usage data is far more reliable than any published average.",
      },
      {
        q: "Should the service contract include the X-ray tube?",
        a: "Either include it or budget for it — but do not leave it undefined. Tube replacement is normally the largest single unplanned cost event in the room's life, and an unbudgeted tube failure in a hospital with one cath lab converts an equipment cost into a service interruption.",
      },
      {
        q: "What causes most cath lab downtime?",
        a: "In practice, tube end-of-life, cooling-circuit faults and positioner mechanical wear account for most hard stops, while haemodynamic cabling and transducer problems account for many shorter interruptions. Logging faults by subsystem for a year gives a hospital its own accurate answer for its own room.",
      },
      {
        q: "Can in-house biomedical engineers maintain an angiography system?",
        a: "They should own daily and periodic checks, first-line diagnosis, accessory and garment management, and the asset record. Calibration, generator and detector service and tube replacement require manufacturer-trained engineers, platform tools and service software, so the practical model is a defined split of scope with clear escalation rather than either extreme.",
      },
      {
        q: "How is cath lab uptime measured?",
        a: "As clinically available hours against scheduled hours, with agreed exclusions for planned maintenance. The definition must be written into the contract — including when the clock starts and stops — otherwise vendor and hospital will report different availability figures for the same year.",
      },
      {
        q: "How long can a fixed angiography system remain in service?",
        a: "Well maintained systems commonly remain clinically capable for over a decade, with software and detector upgrade paths extending useful life further. The practical limits are usually parts and software support from the manufacturer, and whether image quality and functionality still meet the case mix the hospital now performs.",
      },
      {
        q: "Do protective aprons need scheduled inspection?",
        a: "Yes. The internal shielding layer can crack with no visible external damage, so garments need a register, correct hanging storage and periodic imaging-based integrity inspection, with immediate withdrawal of any that fail. Rising personal dosimetry readings without a workload change should trigger an immediate garment and shield-use review.",
      },
      {
        q: "What quality assurance testing should be routine?",
        a: "Periodic phantom testing of resolution, low-contrast detectability and geometric accuracy compared against the acceptance baseline; radiation output and dose-rate control verification at locally required intervals; per-case dose auditing against reference levels; and scheduled review of default protocols to prevent drift away from dose-aware settings.",
      },
      {
        q: "When does a hospital need a second cath lab?",
        a: "When case volume regularly fills the available sessions, when elective work is repeatedly displaced by emergencies, or when an outage in the single room would remove regional emergency PCI capability. Setting a volume and displacement threshold in advance, and reviewing it annually, makes the case far easier to justify than reacting after an extended outage.",
      },
    ],
  },
  {
    type: "editorialBoard",
    reviewers: [
      {
        role: "Technical review",
        name: "AbuFarha Biomedical Engineering Team",
        credential: "Angiography service, maintenance and uptime management",
      },
      {
        role: "After-sales review",
        name: "AbuFarha After-Sales & Support Team",
        credential: "Service contract design and regional parts logistics",
      },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel:
      "International standards and manufacturer maintenance practice; no platform-specific service intervals",
    disclaimer:
      "This article is educational guidance for hospital maintenance planning. Maintenance intervals, calibration procedures and part-life expectations must be taken from the manufacturer's documentation for the installed system, and quality assurance requirements from the regulations in force in your jurisdiction.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Quality assurance and dose",
        items: [
          { label: "AAPM — quality assurance reports for fluoroscopic and interventional systems", url: "https://www.aapm.org" },
          { label: "IAEA — Radiation Protection of Patients (RPOP): interventional procedures", url: "https://www.iaea.org" },
          { label: "ICRP — occupational radiological protection in interventional procedures", url: "https://www.icrp.org" },
        ],
      },
      {
        title: "Equipment and asset management standards",
        items: [
          { label: "IEC 60601 series — medical electrical equipment safety and performance", url: "https://www.iec.ch" },
          { label: "WHO — medical device management and maintenance guidance", url: "https://www.who.int" },
          { label: "ISO 55000 series — asset management", url: "https://www.iso.org" },
        ],
      },
    ],
    note: "Confirm the editions and national adaptations in force in your jurisdiction before applying any standard referenced here.",
  },
  {
    type: "h2",
    id: "conclusion",
    number: 13,
    text: "Conclusion",
    body: "Availability is bought deliberately: through preventive maintenance, a contract written against the clinical service, regional parts logistics and a plan for the outage that will eventually come.",
  },
  {
    type: "p",
    text: "The hospitals whose cath labs are reliably available are not the ones with the newest equipment. They are the ones that log their faults, trend their tube usage, hold agreed critical spares, negotiate contracts against defined terms rather than headline prices, and have already decided where patients go on the day the room is down. None of that requires capital; all of it requires planning.",
  },
  {
    type: "articleCta",
    heading: "Reviewing your cath lab service contract or uptime performance?",
    subheading:
      "AbuFarha's after-sales and biomedical engineering teams support angiography maintenance, spare-parts logistics and service planning across Africa and the Middle East.",
    technology: "Cardiac Catheterization Laboratory (Angiography)",
  },
];
