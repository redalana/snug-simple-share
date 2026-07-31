/**
 * C-arm radiation safety in theatre — C-Arms cluster.
 */

import type { ContentBlock, TocItem } from "../blog";

export const C_ARM_RADIATION_SAFETY_TOC: TocItem[] = [
  { id: "problem", title: "Why Theatre Is a Distinct Radiation Environment" },
  { id: "scatter", title: "Understanding Scatter in the Room" },
  { id: "operator", title: "Operator Controls That Reduce Dose" },
  { id: "ppe", title: "Personal Protection and Shielding" },
  { id: "monitoring", title: "Dosimetry and Dose Monitoring" },
  { id: "patient", title: "Patient Dose in Long Procedures" },
  { id: "groups", title: "Pregnant Staff, Paediatric Patients and Special Cases" },
  { id: "governance", title: "Governance, Training and Local Rules" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const C_ARM_RADIATION_SAFETY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "In a diagnostic X-ray room, staff stand behind a barrier. In an operating theatre, the people most exposed to radiation are standing beside the patient with their hands in the surgical field. That single difference makes intraoperative fluoroscopy the dominant source of occupational radiation exposure in most hospitals, and it makes theatre radiation safety a matter of technique and habit rather than of building fabric alone.",
      "The physics is unambiguous and, helpfully, cooperative: almost all the radiation reaching the surgical team is scattered by the patient. Every measure that reduces the dose delivered to the patient reduces the dose received by the team in the same proportion. Patient protection and staff protection are not competing objectives — they are the same objective approached from two directions.",
      "This article sets out how scatter behaves in a theatre, which operator-controlled factors genuinely reduce dose, how personal protection and shielding should be provided and used, how dosimetry and dose monitoring should be organised, how patient skin dose is managed in prolonged procedures, and what governance a hospital must have in place.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Scatter behaviour in theatre, operator dose controls, geometry and tube position, personal protective equipment, mobile and suspended shielding, dosimetry programmes, patient skin dose in long cases, special groups, and local rules",
    audience:
      "Surgeons, theatre nurses, radiographers, radiation protection advisers, biomedical engineers and clinical governance leads",
    readingTime: "15 min read",
    technology: "C-Arms",
  },
  {
    type: "h2",
    id: "problem",
    text: "Why Theatre Is a Distinct Radiation Environment",
    number: 1,
    body: "Three features of theatre fluoroscopy combine to create a risk profile unlike any other imaging setting.",
  },
  {
    type: "table",
    headers: ["Feature", "Consequence", "Mitigation emphasis"],
    rows: [
      ["Staff remain in the room during exposure", "Occupational dose is unavoidable and cumulative", "Distance, shielding, geometry and time"],
      ["Operators are primarily surgically trained", "Radiation knowledge varies more than in radiology", "Mandatory, role-specific training and local rules"],
      ["Imaging is intermittent and unplanned", "Exposure occurs without warning to others in the room", "Audible warning, clear communication, standing protocol"],
      ["The system is shared and moved", "Settings inherited from previous cases; variable setup", "Case-start checklist for dose mode and geometry"],
      ["Cases can be long", "Cumulative patient skin dose can reach injury thresholds", "Dose monitoring during the case, beam angle variation"],
      ["The sterile field constrains movement", "Staff cannot always increase distance", "Suspended and mobile shielding, tube-side geometry"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Everyone in the room is exposed, not only the operator",
    text: "Scrub nurses, anaesthetic staff and assistants frequently stand within a metre of the patient during fluoroscopy and often have less radiation training than the surgeon. A theatre radiation protection programme that addresses only the primary operator leaves the highest-exposure group unmonitored.",
  },
  {
    type: "h2",
    id: "scatter",
    text: "Understanding Scatter in the Room",
    number: 2,
    body: "Scatter is radiation that has interacted with the patient and changed direction. Its distribution around the patient determines where it is safe to stand.",
  },
  {
    type: "ul",
    items: [
      "Scatter intensity is highest close to the beam entrance surface of the patient — that is, on the tube side.",
      "Scatter falls approximately with the square of distance, so a single step back produces a disproportionate reduction.",
      "An over-couch tube places the highest-intensity scatter at the level of the operator's head, neck and eyes; an under-couch tube directs it towards the floor and the operator's legs, which are more easily shielded.",
      "Steep oblique projections increase both patient entrance dose and the scatter reaching staff.",
      "Larger patients require higher output for the same image, so scatter rises with patient size.",
      "Wider fields scatter proportionally more, which is why collimation protects staff as well as patients.",
      "Scatter is not blocked by drapes; only lead-equivalent material and distance reduce it.",
      "The image detector itself absorbs primary beam, so keeping it close to the patient reduces the unattenuated radiation available to scatter.",
    ],
  },
  {
    type: "diagram",
    id: "safety-zones",
    title: "Scatter distribution around the operating table",
    purpose:
      "Illustrates how scattered radiation intensity varies with position around a patient during fluoroscopy, and how tube position and distance change staff exposure.",
    alt: "Diagram showing scattered radiation distribution around an operating table during C-arm fluoroscopy, with higher intensity on the tube side and reduction with distance",
    caption:
      "Position relative to the tube side and distance from the patient are the two strongest determinants of staff dose.",
  },
  {
    type: "h2",
    id: "operator",
    text: "Operator Controls That Reduce Dose",
    number: 3,
    body: "A short list of controls, all available during the case, accounts for the great majority of achievable dose reduction.",
  },
  {
    type: "table",
    headers: ["Control", "Mechanism", "Effect on staff dose"],
    rows: [
      ["Collimate to the region of interest", "Less irradiated tissue, therefore less scatter", "Reduces proportionally with field area"],
      ["Reduce pulse rate", "Fewer exposures per second", "Reduces approximately in proportion"],
      ["Use last-image hold", "Verification without new exposure", "Eliminates dose for that step"],
      ["Store reference images", "Comparison without re-screening", "Eliminates repeat runs"],
      ["Keep detector close to patient", "Lower output required; less unattenuated beam", "Reduces both patient and scatter dose"],
      ["Keep tube far from patient", "Lower entrance skin dose for same image", "Reduces scatter source intensity"],
      ["Under-couch tube position", "Directs high-intensity scatter downward", "Substantially reduces head, neck and eye dose"],
      ["Minimise obliquity", "Shorter tissue path, lower output", "Reduces scatter intensity"],
      ["Step back when not guiding", "Inverse square law", "Large reduction for a small movement"],
      ["Remove grid for thin or paediatric anatomy", "Lower output needed for adequate image", "Reduces both patient and staff dose"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "These controls compound rather than compete",
    clinicalInterpretation:
      "Halving the pulse rate, collimating to half the field area and stepping back a short distance are independent reductions. Applied together in routine practice they produce a dose profile substantially below the same case performed on default settings with the same equipment.",
    hospitalRecommendation:
      "Include a dose-setting step in the theatre case-start routine — pulse rate, dose mode and collimation confirmed for the case type — rather than relying on whatever the previous list left configured. This costs seconds and is the most reliable way to make technique gains permanent.",
  },
  {
    type: "h2",
    id: "ppe",
    text: "Personal Protection and Shielding",
    number: 4,
    body: "Protective equipment only works when it fits, covers the right anatomy, and is available in sufficient quantity for the whole team.",
  },
  {
    type: "requirements",
    checklist: [
      "Provide lead aprons in sufficient quantity and range of sizes for every member of a full theatre team",
      "Use wrap-around aprons for staff who turn away from the patient during exposure",
      "Provide thyroid shields and require their use for all staff within the scatter field",
      "Provide protective eyewear for staff performing frequent or prolonged fluoroscopic procedures",
      "Provide mobile floor and ceiling-suspended shields where the procedure mix justifies them",
      "Store aprons on proper hangers to prevent cracking, never folded over trolleys or chairs",
      "Inspect all protective garments on a documented schedule, including radiographic or fluoroscopic integrity checks",
      "Remove damaged garments from service immediately rather than annotating them for later replacement",
      "Ensure protective equipment is available at the point of use, not in a store room down the corridor",
      "Include protective equipment in the theatre's asset and inspection records",
    ],
    specs: {
      title: "Protective equipment programme elements",
      rows: [
        { label: "Aprons", value: "Sized range, wrap-around where staff rotate" },
        { label: "Thyroid shields", value: "For all staff in the scatter field" },
        { label: "Eyewear", value: "For high-volume and prolonged fluoroscopy operators" },
        { label: "Mobile shields", value: "Positioned before first exposure" },
        { label: "Suspended shields", value: "Where installed and procedure mix justifies" },
        { label: "Storage", value: "Hangers only; no folding" },
        { label: "Inspection", value: "Documented schedule with integrity testing" },
        { label: "Records", value: "Held with theatre asset records" },
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Folded aprons fail invisibly",
    text: "Lead-equivalent material cracks along fold lines, producing gaps that are invisible from outside the garment. A folded apron can lose meaningful protection over the sternum or thyroid while looking perfectly serviceable, which is why storage discipline and periodic integrity testing are part of the protection programme rather than housekeeping.",
  },
  {
    type: "h2",
    id: "monitoring",
    text: "Dosimetry and Dose Monitoring",
    number: 5,
    body: "Dose that is not measured cannot be managed, and theatre teams are the group most often left out of dosimetry programmes.",
  },
  {
    type: "ul",
    items: [
      "Issue personal dosimeters to all staff who regularly work in fluoroscopy theatres, including surgical, nursing and anaesthetic staff, not only radiographers.",
      "Wear dosimeters as instructed relative to protective garments, since incorrect placement makes results uninterpretable.",
      "Read and review results on the defined cycle, with individual follow-up for unexpected results rather than filing them.",
      "Consider additional monitoring — extremity or eye lens — for staff performing high-volume or high-dose procedures.",
      "Record fluoroscopy time and dose-area product for every case in the operative record.",
      "Aggregate case dose data by procedure type to establish local reference levels, and investigate outliers.",
      "Ensure the C-arm's dose display is visible to the operator during the case, since real-time awareness changes behaviour.",
      "Transfer structured dose reports to a dose management system where one exists, so trends are visible without manual collation.",
    ],
  },
  {
    type: "h2",
    id: "patient",
    text: "Patient Dose in Long Procedures",
    number: 6,
    body: "For most theatre cases, patient dose is modest. For prolonged interventional procedures, cumulative skin dose becomes a clinical consideration in its own right.",
  },
  {
    type: "table",
    headers: ["Situation", "Risk", "Management"],
    rows: [
      ["Long single-projection fluoroscopy", "Dose concentrated on one skin area", "Vary beam entry angle periodically"],
      ["Large patient with high output demand", "High entrance skin dose", "Optimise geometry; consider fixed lab where available"],
      ["Repeated procedures on the same patient", "Cumulative skin dose across episodes", "Record and review prior dose before repeat intervention"],
      ["Paediatric patient", "Higher tissue sensitivity", "Grid removal, lowest pulse rate, tightest collimation"],
      ["Prolonged endovascular case", "Approaching deterministic injury thresholds", "Monitor dose-area product during case; document and follow up"],
      ["Steep oblique work", "Elevated entrance dose per unit imaging", "Minimise obliquity; reposition where possible"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Vary the entry angle before the dose accumulates, not afterwards",
    clinicalInterpretation:
      "Skin injury risk is driven by dose concentrated on one skin area, not by total dose spread over several. Rotating the beam entry point periodically during a long case distributes the same total dose over more tissue.",
    hospitalRecommendation:
      "Define a local threshold of cumulative dose-area product at which the team is prompted to vary entry angle and to record the case for follow-up. This should be a routine intraoperative prompt, comparable to a blood loss threshold, rather than a retrospective audit finding.",
  },
  {
    type: "h2",
    id: "groups",
    text: "Pregnant Staff, Paediatric Patients and Special Cases",
    number: 7,
    body: "Specific groups require explicit local policy rather than case-by-case judgement.",
  },
  {
    type: "ul",
    items: [
      "Declared pregnant staff: local policy should define monitoring arrangements, dose constraints and work adjustment, developed with the radiation protection adviser.",
      "Paediatric patients: dose reduction measures should be pre-configured as a paediatric mode rather than improvised — grid removal, lowest pulse rate, tight collimation and minimal magnification.",
      "Pregnant patients requiring emergency intervention: shielding, collimation and technique are documented in a defined protocol so decisions are not made under pressure.",
      "Trainees: supervised operation with explicit competence sign-off, since inexperience typically increases screening time substantially.",
      "Visitors, observers and industry representatives: must be included in the room's protection arrangements and accounted for before exposure.",
      "Repeat interventional patients: prior procedure dose should be retrievable before planning a further procedure.",
    ],
  },
  {
    type: "h2",
    id: "governance",
    text: "Governance, Training and Local Rules",
    number: 8,
    body: "Technique persists only when governance requires it. Radiation safety in theatre is a management system, not a set of good intentions.",
  },
  {
    type: "requirements",
    checklist: [
      "Include every C-arm on the hospital's radiation authorisation and radiation risk assessment",
      "Publish local rules for each fluoroscopy theatre, stating who may operate and under what conditions",
      "Require documented radiation protection training for all theatre staff, refreshed on a defined cycle",
      "Require system-specific operator competence sign-off before independent operation",
      "Perform acceptance testing and a physics dose survey before first clinical use of any new or relocated system",
      "Maintain a scheduled quality control programme covering image quality and dose output",
      "Establish local diagnostic reference levels by procedure type and review against them",
      "Record fluoroscopy time and dose for every case and audit periodically",
      "Report and investigate unintended exposures and dose outliers through clinical governance",
      "Review the whole programme annually with the radiation protection adviser",
    ],
    specs: {
      title: "Governance responsibilities",
      rows: [
        { label: "Authorisation and risk assessment", value: "Radiation protection adviser with management" },
        { label: "Local rules", value: "Radiation protection supervisor per theatre" },
        { label: "Training records", value: "Theatre management" },
        { label: "Operator competence", value: "Clinical lead with biomedical engineering" },
        { label: "Acceptance and QC", value: "Medical physics with biomedical engineering" },
        { label: "Dose audit", value: "Medical physics with clinical governance" },
        { label: "Incident review", value: "Clinical governance" },
        { label: "Annual review", value: "Radiation safety committee" },
      ],
    },
  },
  {
    type: "faq",
    items: [
      {
        q: "Where is the safest place to stand during C-arm fluoroscopy?",
        a: "As far from the patient as the procedure allows, on the detector side rather than the tube side, and behind available shielding. Where the sterile field prevents distance, the tube position and suspended or mobile shielding become the primary protection.",
      },
      {
        q: "Does a lead apron protect against all scatter?",
        a: "No. It protects the trunk region it covers at the lead-equivalent rating specified. The head, neck, eyes and extremities are not protected by an apron, which is why thyroid shields, eyewear for high-volume operators and distance remain necessary.",
      },
      {
        q: "Is an over-couch tube position ever acceptable?",
        a: "Some projections require it, and it is used deliberately in those circumstances. It should not be the default configuration, because it places the highest-intensity scatter at head and eye level for everyone at the table.",
      },
      {
        q: "How often should lead aprons be tested?",
        a: "On a documented schedule set locally with the radiation protection adviser, and additionally whenever damage is suspected. What matters more than the interval is that the results are acted on immediately and that failed garments leave service the same day.",
      },
      {
        q: "Do theatre nurses and anaesthetists need dosimeters?",
        a: "Any staff member regularly present during fluoroscopy should be included in the monitoring programme, with the specific requirement determined by the radiation protection adviser based on measured or assessed exposure. Excluding non-radiology staff by default is a common gap.",
      },
      {
        q: "What should happen after an unusually long fluoroscopy case?",
        a: "Record the cumulative dose-area product and fluoroscopy time, document the beam entry areas used, follow the local policy for patient follow-up where thresholds are exceeded, and review the case through the dose audit process to identify technique or equipment factors.",
      },
      {
        q: "Does newer equipment remove the need for technique discipline?",
        a: "It lowers the dose required for a given image, which is a genuine and substantial benefit. It does not change the physics of scatter or the value of collimation, pulse rate reduction, geometry and distance — poor technique on modern equipment still produces avoidable dose.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Reviewing radiation safety across your fluoroscopy theatres?",
    subheading:
      "AbuFarha Medical supports hospitals with C-arm commissioning, dose performance verification, protective equipment provision and operator training programmes.",
    technology: "C-Arms",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Radiation safety review", name: "AbuFarha Medical Physics Liaison", credential: "Fluoroscopy dose and protection" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Fluoroscopy commissioning and QC" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel:
      "ICRP recommendations, IAEA occupational radiation protection guidance, IEC equipment standards and AbuFarha Medical commissioning experience",
    disclaimer:
      "Dose limits, monitoring requirements, protective equipment testing intervals and operator authorisation rules are set nationally and locally. Confirm all requirements with your radiation protection adviser and regulator.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Protection recommendations",
        items: [
          { label: "ICRP recommendations on occupational and patient radiological protection" },
          { label: "ICRP guidance on radiological protection in fluoroscopically guided procedures" },
        ],
      },
      {
        title: "International safety guidance",
        items: [
          { label: "IAEA basic safety standards and interventional protection guidance" },
        ],
      },
      {
        title: "Equipment and quality control",
        items: [
          { label: "IEC 60601-2-43 — interventional X-ray equipment requirements" },
          { label: "National quality control protocols for fluoroscopy dose and image quality" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Staff dose in theatre is scatter from the patient, so reducing patient dose protects the whole team proportionally.",
      "Collimation, pulse rate reduction and last-image hold are the three highest-yield controls and require no capital.",
      "Detector close to the patient and tube far from it improves image quality and lowers dose simultaneously.",
      "An under-couch tube keeps the highest-intensity scatter away from heads, necks and eyes.",
      "Protective equipment must fit, cover thyroid as well as trunk, be stored on hangers and be integrity-tested on schedule.",
      "Dosimetry must include surgical, nursing and anaesthetic staff, not only radiographers.",
      "In long cases, vary beam entry angle before cumulative skin dose concentrates on one area.",
      "Technique persists only where local rules, training records and dose audit require it.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "Theatre radiation safety is unusual in that almost everything that works is free.",
  },
  {
    type: "p",
    text: "Collimation, pulse rate, geometry, tube position, last-image hold and a step backwards cost nothing and, applied together, transform the dose profile of a surgical list. What they require is a hospital that trains for them, checks them, measures dose for everyone in the room, and treats an outlier case as something to understand rather than something to file. Equipment sets the floor for how low dose can go; governance and habit determine whether the hospital ever gets there.",
  },
];
