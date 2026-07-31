/**
 * Operating Room cluster — "Operating Room Equipment Planning"
 */

import type { ContentBlock, TocItem } from "../blog";

export const OR_PLANNING_TOC: TocItem[] = [
  { id: "principle", title: "Planning From Procedures, Not Product Lists" },
  { id: "categories", title: "Equipment Categories in a Theatre" },
  { id: "imaging", title: "Intraoperative Imaging Requirements" },
  { id: "layout", title: "Layout, Circulation and Ceiling Services" },
  { id: "utilities", title: "Utilities and Environmental Provision" },
  { id: "commissioning", title: "Commissioning and Clinical Release" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const OR_PLANNING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Operating room equipment planning determines whether a theatre can run its intended case list safely and efficiently. AbuFarha Medical supplies, installs, commissions and supports theatre equipment including mobile C-arm systems and interventional imaging, alongside the biomedical engineering that keeps them available.",
      "Theatres fail on geometry and workflow far more often than on equipment specification: a C-arm that cannot reach the required projection over the table in use, cables crossing the sterile circulation route, or a ceiling service layout that puts the imaging arm where the surgeon needs to stand.",
      "This guide sets out how to plan theatre equipment from the procedures the room will host, the categories involved, the intraoperative imaging requirements that drive layout, and what commissioning must confirm before clinical release.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Procedure-driven equipment planning, theatre equipment categories, intraoperative imaging requirements, layout and circulation, utilities, commissioning and clinical release",
    audience:
      "Theatre managers and clinical leads, surgeons, estates and facilities teams, biomedical engineering, project and procurement teams",
    readingTime: "11 min read",
    technology: "Operating Room",
  },
  {
    type: "h2",
    id: "principle",
    text: "Planning From Procedures, Not Product Lists",
    number: 1,
    body: "The case list defines the equipment, the layout and the utilities.",
  },
  {
    type: "p",
    text: "Every planning decision follows from the procedures the theatre will host: which specialties, which patient positions, which access routes, whether intraoperative imaging is required and in which projections. A room planned from a generic equipment list will meet the list on paper and obstruct it in practice.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Plan the movement, not just the footprint",
    text: "Equipment fits almost any room when static. The planning question is whether it can be positioned, rotated and withdrawn during a case without breaching the sterile field or blocking a working position.",
  },
  {
    type: "h2",
    id: "categories",
    text: "Equipment Categories in a Theatre",
    number: 2,
  },
  {
    type: "table",
    headers: ["Category", "Planning driver", "Common oversight"],
    rows: [
      ["Operating table", "Patient positions and imaging compatibility", "Table not radiolucent where imaging is required"],
      ["Surgical lighting", "Access to the operative field by position", "Conflict with imaging arm or pendant travel"],
      ["Intraoperative imaging", "Required projections and access geometry", "Insufficient clearance for the arm's travel"],
      ["Anaesthesia and monitoring", "Head-end access and gas provision", "Circulation conflict at the head of the table"],
      ["Ceiling pendants and service supply", "Position of power, gases and data at point of use", "Layout fixed before equipment positions are known"],
      ["Displays and integration", "Sightlines from working positions", "Screens visible to some team members only"],
      ["Storage and stock", "Consumables at point of use", "Stock stored outside the room, extending case turnaround"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Ceiling service positions are the least reversible decision in the room and are frequently fixed before the equipment layout is settled.",
    clinicalInterpretation:
      "Circulation conflicts show up as extended case times and repositioning during procedures, which is rarely attributed back to room design.",
    hospitalRecommendation:
      "Settle equipment positions and movement envelopes before committing ceiling service and pendant locations.",
  },
  {
    type: "h2",
    id: "imaging",
    text: "Intraoperative Imaging Requirements",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Required projections per procedure type, since these determine the clearance the imaging arm needs around the table.",
      "Table compatibility: radiolucent surface, carbon-fibre extensions where required, and unobstructed arm approach along the intended axis.",
      "Radiation protection: shielding assessment, protective equipment provision, staff dosimetry and a documented radiation protection programme.",
      "Display positioning so the surgeon and the imaging operator can both see the image from their working positions.",
      "Image archiving and record integration, so intraoperative imaging reaches the patient record.",
      "Where a fixed interventional system is planned rather than a mobile C-arm, structural, shielding and control-room requirements change substantially.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Verify arm travel against the actual table",
    text: "Mobile C-arm reach is specified in isolation; what matters is whether the required projections are achievable over the specific table, with the patient in the specific position the case demands. Confirm this before purchase, not on the first case.",
  },
  {
    type: "h2",
    id: "layout",
    text: "Layout, Circulation and Ceiling Services",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Sterile field boundaries and the scrub team's working positions, defined before equipment is positioned.",
      "Circulation routes for staff, patient transfer and equipment entry that do not cross the sterile field.",
      "Cable and hose management, so floor routes do not create trip hazards or obstruct imaging arm travel.",
      "Pendant and ceiling service positions aligned to the point of use for each working position.",
      "Door widths and access route for delivering and removing the largest item of equipment.",
      "Parking positions for mobile equipment when not in use, inside the room rather than in the corridor.",
    ],
  },
  {
    type: "h2",
    id: "utilities",
    text: "Utilities and Environmental Provision",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Electrical supply capacity, distribution and earthing to the specification of each item, at the positions where they are used.",
      "Medical gas and suction provision matched to the anaesthetic and surgical requirement.",
      "Ventilation and air handling to the standard required for the procedures hosted, with heat load from equipment accounted for.",
      "Temperature and humidity control within the operating range of the installed electronics.",
      "Data network provision for imaging, integration and record systems.",
      "Uninterruptible supply provision for equipment where an interruption during a procedure is unacceptable.",
    ],
  },
  {
    type: "h2",
    id: "commissioning",
    text: "Commissioning and Clinical Release",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Equipment installed, calibrated and performance-verified with measured results recorded as the baseline.",
      "Radiation protection verification completed where imaging is installed, with shielding sign-off before clinical use.",
      "A dry-run rehearsal of representative procedures with the full team, confirming geometry, sightlines and circulation in practice.",
      "Safety and emergency systems tested, including power failure behaviour.",
      "Training completed for surgical, anaesthetic, nursing and radiography staff, with competency recorded.",
      "Maintenance schedule, escalation route and critical-parts list active before the first case.",
      "Formal clinical release, with outstanding items listed and owned.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs, commissions and supports theatre imaging and equipment — including mobile C-arm systems and interventional imaging — and provides the operator training, preventive maintenance, spare parts and technical support the room depends on afterwards.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Where does operating room equipment planning most often go wrong?",
        a: "In geometry and circulation rather than specification: imaging arm travel over the actual table, ceiling service positions fixed too early, and cable routes crossing working or sterile areas.",
      },
      {
        q: "What determines whether a mobile C-arm or a fixed system is appropriate?",
        a: "Case mix, procedure complexity and volume. A fixed interventional system brings substantially greater structural, shielding and control-room requirements, and is justified by the procedures it enables rather than by capability alone.",
      },
      {
        q: "Why does table compatibility matter so much?",
        a: "Intraoperative imaging requires a radiolucent surface and an unobstructed approach along the imaging axis. An incompatible table can make required projections unachievable regardless of the imaging system.",
      },
      {
        q: "Should a rehearsal be part of commissioning?",
        a: "Yes. A dry run of representative procedures with the full team is the only reliable way to confirm geometry, sightlines and circulation before real cases expose them.",
      },
      {
        q: "When should ceiling service positions be decided?",
        a: "After equipment positions and movement envelopes are settled. Pendant and ceiling service locations are among the least reversible decisions in the room.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 7,
  },
  {
    type: "p",
    text: "Theatre equipment planning is procedure-led geometry. Define the case list, derive the equipment and its movement envelopes, settle those before ceiling services, provide utilities at the point of use, and commission with a full-team rehearsal. Rooms planned that way support the list; rooms planned from equipment lists constrain it.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Theatre and interventional service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Theatre equipment installation and commissioning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Project delivery and commissioning practice synthesis",
    disclaimer:
      "Educational guidance on operating room equipment planning. It does not replace manufacturer site planning documentation, clinical guidelines or local regulatory requirements.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer site planning and pre-installation documentation for theatre equipment and imaging systems." },
      { label: "Institutional theatre design standards, ventilation requirements and commissioning records." },
      { label: "National radiation protection requirements applicable to intraoperative imaging." },
    ],
  },
];
