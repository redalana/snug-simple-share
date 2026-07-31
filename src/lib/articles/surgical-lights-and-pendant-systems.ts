/**
 * Operating Room cluster — "Surgical Lights and Pendant Systems"
 */

import type { ContentBlock, TocItem } from "../blog";

export const SURGICAL_LIGHTS_TOC: TocItem[] = [
  { id: "role", title: "The Role of Lighting and Pendants in a Theatre" },
  { id: "components", title: "Light Heads, Booms and Ceiling Mounts" },
  { id: "selection", title: "Selecting Lights and Pendants for a Theatre" },
  { id: "coordination", title: "Coordinating Booms With Other Ceiling Services" },
  { id: "maintenance", title: "Maintenance and Common Failure Modes" },
  { id: "installation", title: "Installation and Commissioning Considerations" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const SURGICAL_LIGHTS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Surgical lights and the pendant systems that carry them, along with monitors and equipment shelves, are among the most physically constraining elements of an operating room. AbuFarha Medical supplies, installs, commissions and services surgical lighting and ceiling pendant systems, and provides the calibration, preventive maintenance and spare parts support these systems require over their operating life.",
      "A light head is only as useful as the boom that positions it. Illumination performance is frequently discussed in isolation, but the boom's reach, rotation and load capacity, and its coordination with other ceiling-mounted equipment such as anaesthesia and imaging pendants, determine whether the light can actually reach the operative field for every position the surgical team requires.",
      "This guide covers what surgical lighting and pendant systems consist of, how they are selected against a theatre's case mix, how they must be coordinated with other ceiling services, and what maintenance and commissioning steps keep them reliable in daily use.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Surgical light and pendant components, selection criteria, coordination with ceiling services, maintenance and failure modes, installation and commissioning",
    audience:
      "Theatre managers, surgeons, facilities and estates teams, biomedical engineering staff, procurement teams",
    readingTime: "11 min read",
    technology: "Surgical Lighting",
  },
  {
    type: "h2",
    id: "role",
    text: "The Role of Lighting and Pendants in a Theatre",
    number: 1,
    body: "Illumination and ceiling-mounted equipment support share the same mechanical constraint: reach without obstruction.",
  },
  {
    type: "p",
    text: "Surgical lighting exists to provide focused, shadow-free illumination of the operative field regardless of the surgeon's position, the patient's positioning, or obstructions created by the surgical team, drapes and other equipment. The light head is the visible element, but it is mounted on a boom or pendant arm that must be able to position it precisely and hold it stable without drift throughout a procedure.",
  },
  {
    type: "p",
    text: "Ceiling pendant systems more broadly also carry equipment shelves, monitors, anaesthesia gas and electrical outlets, and sometimes integration or imaging displays. Their positioning interacts directly with the surgical light boom: two or more pendants sharing the same ceiling area must be able to move through their full range without colliding with each other or with the imaging equipment used in the room.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Colour rendering and shadow management are distinct performance factors",
    text: "Surgical light performance is generally described in terms of illuminance, colour temperature, colour rendering and shadow dilution. Manufacturers publish specific figures for their models; these should be obtained from the manufacturer's documentation for the model under consideration rather than assumed from a general figure.",
  },
  {
    type: "h2",
    id: "components",
    text: "Light Heads, Booms and Ceiling Mounts",
    number: 2,
  },
  {
    type: "table",
    headers: ["Component", "Function", "Planning consideration"],
    rows: [
      ["Light head", "Produces the illumination pattern over the operative field", "Number of heads (single or dual) depends on specialty and field size"],
      ["Suspension arm / boom", "Positions and holds the light head", "Reach and rotation must clear the table, imaging arm and other pendants"],
      ["Ceiling mount and rail", "Anchors the boom system to the structural ceiling", "Load rating and structural coordination fixed at construction stage"],
      ["Control handle / sterile handle", "Allows the surgical team to reposition the light without breaking sterility", "Sterile handle covers or touchless controls depending on infection-control policy"],
      ["Camera or recording module (where fitted)", "Captures the surgical field view for integration or teaching", "Requires cabling to the integration platform, addressed separately in this cluster"],
      ["Equipment pendant (separate arm)", "Carries monitors, shelves, gas and electrical outlets", "Must share ceiling space and movement envelope with the light booms"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The ceiling mount and structural coordination are decided earliest in a project and are the most expensive element to alter once installed.",
    clinicalInterpretation:
      "When boom reach is inadequate for a required table position, staff typically compensate by repositioning the table or the patient rather than reporting the constraint, which quietly limits the procedures the room can support.",
    hospitalRecommendation:
      "Confirm boom reach and rotation against the specific table positions the specialty mix requires before ceiling mounts are finalised, not after installation.",
  },
  {
    type: "h2",
    id: "selection",
    text: "Selecting Lights and Pendants for a Theatre",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Case mix and field depth: deep cavity procedures place different demands on shadow management and focal range than superficial procedures.",
      "Number and configuration of light heads needed for the largest anticipated surgical team and field size.",
      "Boom reach and rotation checked against the specific operating table and the patient positions the specialty requires.",
      "Compatibility with an integrated camera module if intraoperative video capture is planned, coordinated with the OR integration platform.",
      "Sterile handling method — detachable sterile handles or touchless sensor control — matched to the department's infection-control practice.",
      "Backup and redundancy: battery backup for the light in the event of a mains interruption, and a documented response if a light head fails mid-procedure.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Specify against the room's tallest and shortest surgeon",
    text: "Boom height and light head positioning should accommodate the full range of surgeon heights and working postures likely to use the room, not an average. A boom that requires an uncomfortable reach for shorter staff, or forces taller staff to stoop, is a workflow defect that surfaces only after installation.",
  },
  {
    type: "h2",
    id: "coordination",
    text: "Coordinating Booms With Other Ceiling Services",
    number: 4,
  },
  {
    type: "p",
    text: "In a theatre with multiple ceiling-mounted systems — surgical lights, an equipment pendant, an anaesthesia pendant, and in some rooms an imaging arm or integration display — the movement envelope of each system has to be modelled together, not independently. A boom specified purely on its own reach can still create a collision risk once its swing is checked against a second pendant occupying the same ceiling zone.",
  },
  {
    type: "p",
    text: "This coordination is typically carried out during the design phase using the manufacturers' clearance and swing-radius documentation for each system, cross-checked against the finalised table position and the room's structural ceiling grid. Changes to table position, boom length or an added pendant after this stage should trigger a re-check rather than being treated as a minor adjustment.",
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Retrofitting a second pendant into an existing theatre needs a full clearance check",
    text: "Adding an integration display pendant or a second equipment arm to an existing room is not simply a matter of available ceiling space. The full swing radius of the new pendant against every existing boom must be verified before installation to avoid a collision risk discovered during a live case.",
  },
  {
    type: "h2",
    id: "maintenance",
    text: "Maintenance and Common Failure Modes",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Boom drift or failure to hold position, usually related to the friction or counterbalance mechanism and requiring adjustment or servicing.",
      "Light head output degradation over time, checked against manufacturer-specified performance during preventive maintenance.",
      "Sterile handle attachment wear, affecting the secure fit of detachable sterile covers.",
      "Electrical and control faults in touchless or intensity-control systems, typically diagnosed through the manufacturer's service interface.",
      "Battery backup failure, which should be tested on a defined schedule rather than assumed functional.",
      "Cable and connector wear at the ceiling mount, relevant where an integrated camera or recording module is fitted.",
    ],
  },
  {
    type: "h2",
    id: "installation",
    text: "Installation and Commissioning Considerations",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Structural verification of the ceiling mounting point against the boom and light head weight before installation.",
      "Full swing-radius testing against the final table position and any other ceiling-mounted equipment in the room.",
      "Illuminance and colour performance verification against the manufacturer's specification, recorded as the commissioning baseline.",
      "Sterile handle and control function tested by the clinical team before clinical release.",
      "Battery backup function tested under a simulated mains interruption.",
      "Operator training for the surgical and nursing staff who will position and control the light during cases.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies and installs surgical lighting and pendant systems, coordinates their commissioning against the room's other ceiling-mounted equipment, and provides the preventive maintenance, calibration checks and spare parts support that keep them reliable throughout their service life.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How many light heads does an operating room need?",
        a: "It depends on the specialty and typical field size; many general theatres use a dual-head configuration for flexibility, while some specialties are adequately served by a single head. The choice should follow the case mix rather than a default assumption.",
      },
      {
        q: "Can surgical lights be retrofitted with a camera module?",
        a: "Many surgical light manufacturers offer an integrated camera option, but retrofitting one into an existing light head depends on the specific model and requires cabling coordination with the integration platform. This should be confirmed against the installed model before assuming compatibility.",
      },
      {
        q: "Why does boom coordination matter more in rooms with imaging equipment?",
        a: "An imaging arm or a fixed imaging system occupies significant ceiling and floor space during use, and its movement envelope must be checked against every light and equipment pendant boom to avoid collision, particularly during dynamic imaging where the arm moves during the procedure.",
      },
      {
        q: "What is the most common reason a surgical light underperforms after installation?",
        a: "Inadequate boom reach or rotation for the table positions actually used in practice, rather than a fault with the light head itself. This is typically a planning oversight rather than an equipment defect.",
      },
      {
        q: "How often should surgical lights be serviced?",
        a: "On a preventive maintenance schedule set by the manufacturer's recommendations and the room's usage intensity, with battery backup and mechanical boom function checked at each visit alongside illuminance performance.",
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
    text: "Surgical lighting performance depends as much on boom reach, coordination with other ceiling services and structural mounting as it does on the light head itself. Selecting and commissioning lights and pendants against the theatre's actual case mix and ceiling layout, and maintaining them on a defined schedule, keeps illumination reliable across the full range of positions a surgical team requires.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Theatre and perioperative service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Theatre equipment installation and commissioning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Project delivery and commissioning practice synthesis",
    disclaimer:
      "Educational guidance on surgical lighting and pendant systems. It does not replace manufacturer site planning documentation, clinical guidelines or local regulatory requirements.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer site planning and clearance documentation for surgical lighting and ceiling pendant systems." },
      { label: "Institutional theatre design standards and commissioning records." },
      { label: "Manufacturer preventive maintenance and calibration procedures for surgical light systems." },
    ],
  },
];
