/**
 * Portable and mobile X-ray systems — X-Ray cluster (technology / evaluation).
 */

import type { ContentBlock, TocItem } from "../blog";

export const MOBILE_XRAY_TOC: TocItem[] = [
  { id: "overview", title: "What Mobile Radiography Is For" },
  { id: "types", title: "Types of Portable and Mobile Systems" },
  { id: "specification", title: "How to Specify a Mobile Unit" },
  { id: "workflow", title: "Ward, ICU and Theatre Workflow" },
  { id: "safety", title: "Radiation Protection Outside the Room" },
  { id: "infection", title: "Infection Prevention and Cleaning" },
  { id: "ownership", title: "Ownership Costs and Fleet Planning" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MOBILE_XRAY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Mobile radiography exists because some patients cannot safely be moved. A ventilated patient in intensive care, an unstable trauma patient, a post-operative patient in recovery and a patient in isolation all need imaging where they are, not in a room down the corridor.",
      "That single clinical requirement drives every design decision in a mobile unit: battery capacity and drive assistance so it reaches the bedside, a detector that can be positioned under a patient who cannot cooperate, wireless image transfer so the examination completes without returning to the department, and construction that survives constant handling.",
      "This guide explains the categories of portable and mobile equipment, how to specify a unit against a real inpatient workload, and the operational realities — radiation protection outside a shielded room, infection prevention and fleet planning — that determine whether a mobile unit is genuinely used or parked in a corridor.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Clinical role of mobile radiography, equipment categories, specification criteria, ward and ICU workflow, radiation protection outside shielded rooms, infection prevention, ownership cost and fleet planning",
    audience:
      "Radiology managers, radiographers, intensive care and theatre teams, biomedical engineers and procurement teams",
    readingTime: "13 min read",
    technology: "X-Ray Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "What Mobile Radiography Is For",
    number: 1,
    body: "Mobile imaging is not a convenience alternative to a room; it is the correct choice for a defined set of patients.",
  },
  {
    type: "ul",
    items: [
      "Intensive care: chest radiography for line and tube position, ventilated patients, serial monitoring.",
      "Emergency and trauma: unstable patients who should not be transferred until stabilised.",
      "Post-operative recovery and theatre-adjacent imaging where transfer carries risk.",
      "Isolation and infection control situations where moving the patient risks transmission.",
      "Neonatal and paediatric units where transfer is disproportionately disruptive.",
      "Patients whose transfer requires multiple staff, hoists or interruption of therapy.",
      "Out-of-hours coverage where opening and staffing a room for one examination is not proportionate.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Transfer risk is the deciding factor, not distance",
    text: "The clinical question is not how far the patient must travel but what must be disconnected, monitored and re-established to move them. When ventilation, infusions and monitoring all have to be transferred, bedside imaging is frequently the safer examination even though its image quality is harder to achieve.",
  },
  {
    type: "h2",
    id: "types",
    text: "Types of Portable and Mobile Systems",
    number: 2,
    body: "The category names overlap in marketing use, so it is worth separating them by capability rather than by label.",
  },
  {
    type: "table",
    headers: ["Category", "Typical use", "Practical characteristics"],
    rows: [
      ["Motor-driven mobile DR unit", "ICU, wards, emergency departments in larger hospitals", "Powered drive, high generator output, integrated wireless detector, longest reach per charge"],
      ["Compact manual mobile unit", "Smaller hospitals, clinics, lower-volume wards", "Lighter and less expensive; more physical effort over long distances and inclines"],
      ["Lightweight portable unit", "Clinics, outreach, care homes, field settings", "Highly transportable, lower output, limited to less attenuating examinations"],
      ["Mobile fluoroscopy (C-arm)", "Theatre and interventional procedures", "Real-time imaging; a different modality rather than a radiography substitute"],
      ["Dental and specialist portables", "Dedicated single-purpose imaging", "Narrow application, not a general radiography solution"],
      ["Trolley-based retrofit systems", "Upgrading existing analogue mobiles", "Extends life of usable mechanics with modern detector and software"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Matching category to workload",
    clinicalInterpretation:
      "Output capability and mobility trade against each other. A lightweight portable is easy to move and inadequate for a large abdomen or a heavily built chest; a motor-driven unit handles the full inpatient range but needs storage space, charging provision and lift access.",
    hospitalRecommendation:
      "Specify from the actual inpatient examination mix and the physical route — corridor lengths, ramps, lifts and door widths — rather than from a generic category. A unit that cannot reach the ward it was bought for is a common and expensive procurement error.",
  },
  {
    type: "h2",
    id: "specification",
    text: "How to Specify a Mobile Unit",
    number: 3,
    body: "A mobile unit specification has more operational content than a room specification, because the room is the whole hospital.",
  },
  {
    type: "ul",
    items: [
      "Generator output and technique range adequate for the heaviest routine examination, not the average one.",
      "Battery capacity expressed in exposures and travel distance per charge, and the charging regime required between rounds.",
      "Drive assistance and manoeuvrability, tested on the hospital's own floor surfaces, ramps and lift thresholds.",
      "Parked footprint and collapsed height, verified against storage space and lift dimensions.",
      "Detector specification and size options, with a stated approach to positioning under uncooperative patients.",
      "Wireless performance and fallback: what happens when coverage fails mid-round, and whether images buffer locally.",
      "Tube support reach and angulation, which determines whether awkward bedside geometry is achievable.",
      "Cleanability — sealed surfaces, disinfectant compatibility and cable management.",
      "Weight and its implications for staff handling and for lift loading.",
      "Battery and detector cover in the service contract, since both are consumable in practice.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Not testing the route before purchase",
    text: "Insist on a demonstration that includes the real journey: the longest corridor, the ramp, the lift, the ward door and the space beside an occupied ICU bed. Units are frequently accepted after a demonstration in a spacious department and then found to be unusable in the confined bed spaces they were bought to serve.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "Ward, ICU and Theatre Workflow",
    number: 4,
    body: "Mobile imaging productivity depends on how the round is organised, not on the speed of the equipment.",
  },
  {
    type: "ul",
    items: [
      "Batch requests into planned rounds where clinically acceptable, with a defined urgent pathway outside them.",
      "Confirm patient identity and worklist entry at the bedside; mobile imaging is where identification errors concentrate.",
      "Agree with ward teams who prepares the patient and who clears the bed space before the unit arrives.",
      "Review each image at the unit before moving on, so repeats happen while the geometry is still set up.",
      "Verify transfer to PACS before leaving the ward, and know the recovery path if the network fails.",
      "Record exposure and dose data reliably from mobile examinations; these are the most frequently missing entries in a dose registry.",
      "Keep the unit charged in a designated location with a spare detector battery, so the next round starts ready.",
      "Define a clear escalation route when an examination cannot be achieved at the bedside and a room transfer becomes necessary.",
    ],
  },
  {
    type: "h2",
    id: "safety",
    text: "Radiation Protection Outside the Room",
    number: 5,
    body: "Mobile radiography removes the shielded room, so protection depends entirely on distance, collimation and controlled practice.",
  },
  {
    type: "table",
    headers: ["Control", "Practice", "Why it matters"],
    rows: [
      ["Distance", "Operator stands at the greatest practical distance, using the longest exposure cord or wireless control", "Scatter falls rapidly with distance; this is the single most effective control"],
      ["Collimation", "Collimate tightly to the clinical area on every exposure", "Reduces patient dose and scatter to the surrounding bed spaces"],
      ["Clearance and warning", "Announce the exposure and confirm nearby staff and visitors are clear", "Adjacent bed spaces have no shielding"],
      ["Protective equipment", "Aprons and shields available on the unit and inspected regularly", "Cannot substitute for distance and collimation, but is required for unavoidable proximity"],
      ["Beam direction", "Direct the beam away from occupied adjacent spaces where possible", "Reduces exposure to neighbouring patients"],
      ["Local rules", "Written local rules for mobile imaging in each area, understood by ward staff", "Ward teams are not radiation workers and need explicit guidance"],
      ["Dose monitoring", "Operator dosimetry and periodic review of mobile workload", "Detects practice drift before it becomes a compliance issue"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Automatic exposure control is usually unavailable at the bedside",
    text: "Most mobile examinations rely on manual technique selection, which makes technique charts, exposure index review and operator experience the only defence against both under- and overexposure. A department that monitors exposure index for mobile work separately from room work typically finds a wider distribution and a clear training opportunity.",
  },
  {
    type: "h2",
    id: "infection",
    text: "Infection Prevention and Cleaning",
    number: 6,
    body: "A mobile unit travels between the most vulnerable patients in the hospital, which makes cleaning a clinical function rather than housekeeping.",
  },
  {
    type: "ul",
    items: [
      "Define which surfaces are cleaned between every patient and which at the end of each round, in writing.",
      "Verify that the hospital's chosen disinfectants are compatible with the detector housing and unit surfaces; incompatible agents degrade seals over months.",
      "Use protective covers for detectors in isolation and wound-adjacent situations, with a defined disposal route.",
      "Manage cables deliberately — trailing cables contact floors and are difficult to decontaminate.",
      "Include the unit in the ward's cleaning audit, not only in the department's equipment log.",
      "Provide hand hygiene consumables on the unit so practice does not depend on ward supplies.",
      "Agree the process for imaging in isolation rooms in advance with infection prevention, including detector handling and unit entry.",
    ],
  },
  {
    type: "h2",
    id: "ownership",
    text: "Ownership Costs and Fleet Planning",
    number: 7,
    body: "Mobile units are inexpensive to buy relative to fixed rooms and disproportionately expensive to run badly.",
  },
  {
    type: "table",
    headers: ["Cost element", "Behaviour", "Planning implication"],
    rows: [
      ["Detector replacement or repair", "Driven by handling damage rather than by age", "Custody, covers and accidental damage cover materially change lifetime cost"],
      ["Detector batteries", "Predictable capacity loss with cycling", "Budget as a recurring consumable, not an unexpected failure"],
      ["Traction batteries", "Wear with duty cycle and charging discipline", "Scheduled replacement prevents mid-round failures"],
      ["X-ray tube", "Consumed by exposures and heat", "Lower duty than a busy room but still a planned replacement"],
      ["Mechanical and drive service", "Constant movement over uneven floors", "Requires explicit inclusion in the service contract"],
      ["Software and cybersecurity support", "Ends at a vendor-defined point", "Determines usable service life more often than mechanical wear"],
      ["Fleet resilience", "One unit means no cover during service", "Hospitals with routine ICU imaging need a documented fallback unit"],
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "How many mobile units does a hospital need?",
        a: "Size the fleet from the inpatient examination volume, the geography of the site and the resilience requirement. A hospital with routine ICU and emergency bedside imaging on a multi-building site generally cannot operate on a single unit, because service, charging and travel time all remove it from availability.",
      },
      {
        q: "Can a mobile unit replace a general radiography room?",
        a: "No. Mobile units lack the geometry, output, automatic exposure control and shielded environment for the full ambulatory examination range. They complement rooms for patients who cannot be moved; they are not a substitute for room capacity.",
      },
      {
        q: "Is image quality worse at the bedside?",
        a: "Bedside images face real constraints — limited positioning, manual technique, variable distance and the presence of lines and support equipment. Modern detectors and processing narrow the gap substantially, but positioning and technique discipline remain the dominant factors in bedside image quality.",
      },
      {
        q: "How is radiation safety managed on a ward?",
        a: "Through distance, tight collimation, verbal clearance of the area, beam direction away from occupied spaces, available protective equipment and written local rules that ward staff understand. There is no shielding, so practice is the control.",
      },
      {
        q: "What most often makes a mobile unit unpopular with staff?",
        a: "Weight and manoeuvrability, battery uncertainty and unreliable wireless transfer. All three are testable before purchase on the hospital's own routes and network, and all three are difficult to remedy afterwards.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Specifying mobile radiography for your inpatient workload?",
    subheading:
      "AbuFarha Medical supplies, installs and maintains mobile digital radiography systems and supports hospitals with route testing, training and fleet planning.",
    technology: "X-Ray Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Radiography applications and training" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Mobile X-ray installation and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "IEC equipment standards, national radiation protection guidance for mobile radiography and manufacturer documentation",
    disclaimer:
      "Local rules for mobile radiography, dosimetry requirements and infection prevention protocols are jurisdiction- and institution-specific. Follow your radiation protection adviser, medical physics expert and infection prevention team.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Radiation protection",
        items: [
          { label: "ICRP recommendations on radiological protection in medicine" },
          { label: "National guidance on radiation protection for mobile and bedside radiography" },
        ],
      },
      {
        title: "Equipment standards",
        items: [
          { label: "IEC 60601-1 and the IEC 60601-2 series for mobile diagnostic X-ray equipment" },
          { label: "IEC 62220 series — detector performance measurement methods" },
        ],
      },
      {
        title: "Infection prevention and quality assurance",
        items: [
          { label: "National infection prevention guidance for reusable medical equipment" },
          { label: "National quality assurance protocols for mobile digital radiography" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Mobile radiography is indicated by transfer risk, not by convenience or distance.",
      "Output and mobility trade against each other; specify from the heaviest routine examination and the real physical route.",
      "Test the actual journey — corridors, ramps, lifts, ward doors and bed space — before purchase.",
      "Bedside protection is distance, tight collimation, verbal clearance and written local rules; there is no shielding.",
      "Manual technique dominates bedside work, so exposure index monitoring for mobile examinations is essential.",
      "Detector handling damage and batteries, not electronics, drive real ownership cost.",
      "Routine ICU and emergency bedside imaging requires a documented fallback unit during service.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "A mobile unit succeeds when it reaches the bedside easily, images reliably and returns charged and clean for the next round.",
  },
  {
    type: "p",
    text: "Every part of that sentence is an operational requirement rather than a specification line. Hospitals that test the route, monitor bedside technique, budget batteries and detector damage as consumables and plan fleet resilience get sustained clinical value; hospitals that buy on price and output alone often find the unit parked and the patient transferred anyway.",
  },
];
