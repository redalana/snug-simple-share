/**
 * Philips Allura Xper installation and room requirements — Philips cluster (installation).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PHILIPS_ALLURA_INSTALL_TOC: TocItem[] = [
  { id: "overview", title: "Overview: Why Installation Determines Room Life" },
  { id: "site", title: "Site Survey and Structural Requirements" },
  { id: "shielding", title: "Radiation Shielding and Physics Sign-Off" },
  { id: "power", title: "Power, Earthing and Cooling" },
  { id: "workflow", title: "Layout, Sightlines and Clinical Workflow" },
  { id: "commissioning", title: "Commissioning and Acceptance Testing" },
  { id: "handover", title: "Training and Handover" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PHILIPS_ALLURA_INSTALL_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "An interventional room is the most infrastructure-dependent installation in a hospital after an MRI suite. A Philips Allura Xper cath lab — whether an FD10 monoplane, an FD10/10 biplane, an FD20 monoplane or an FD20/10 biplane — depends on structural provision, shielding, clean power, cooling and workflow geometry that must all be correct before the system arrives.",
      "Most avoidable problems in interventional rooms are not equipment faults. They are installation compromises: a ceiling that cannot take the rail load, shielding designed for the wrong workload, a supply that browns out during acquisition, or a control room with no sightline to the patient.",
      "This guide describes what AbuFarha Medical verifies when planning and commissioning a Philips Allura Xper installation, and what a hospital project team should have in place before delivery.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Site survey, structural and ceiling provision, radiation shielding design, electrical supply and earthing, cooling, room layout, acceptance testing and clinical handover for Philips Allura Xper cath labs",
    audience:
      "Hospital project managers, biomedical engineering teams, medical physicists, cath lab managers, facilities and civil contractors",
    readingTime: "14 min read",
    technology: "Cath Lab Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Overview: Why Installation Determines Room Life",
    number: 1,
    body: "Nearly every long-term constraint is fixed during installation.",
  },
  {
    type: "p",
    text: "Detector class, plane count, table travel, monitor position, shielding adequacy and access routes for future component replacement are all decided before the first case. A room installed with clearances that only just work will remain a difficult room for its whole service life, and a room whose shielding was calculated for optimistic workload will require rework once real caseload arrives. Installation and commissioning is therefore the highest-leverage phase of the entire investment.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Plan the exit route for the detector",
    text: "Ask during design how a flat detector, tube or table component will be brought in and out. Rooms built without a viable component route turn a two-day repair into a construction event.",
  },
  {
    type: "h2",
    id: "site",
    text: "Site Survey and Structural Requirements",
    number: 2,
    body: "Confirm the building before confirming the order.",
  },
  {
    type: "ul",
    items: [
      "Floor loading for the table, positioner base and generator cabinet, verified against structural drawings rather than assumed.",
      "Ceiling structure and slab-to-slab height sufficient for ceiling-suspended monitor supports and, in biplane rooms, the lateral plane provision.",
      "Delivery route dimensions from the loading bay to the room, including door widths, lift capacity and corner radii.",
      "Adjacent space for the technical or equipment room, with adequate ventilation and service access.",
      "Location of the control area with a direct sightline to the patient and to the monitors.",
      "Confirmed cable routes and floor trenching or trunking for the imaging chain and control interconnects.",
    ],
  },
  {
    type: "h2",
    id: "shielding",
    text: "Radiation Shielding and Physics Sign-Off",
    number: 3,
    body: "Shielding is calculated from workload, not copied from another hospital.",
  },
  {
    type: "p",
    text: "A qualified medical physicist must produce a shielding design based on expected annual workload, case mix, projected fluoroscopy time, geometry and occupancy of adjacent areas. A long peripheral vascular programme and a short coronary diagnostic list produce very different scatter profiles. The design covers walls, doors, viewing windows, floor and ceiling where relevant, and it must be signed off before construction rather than validated afterwards.",
  },
  {
    type: "table",
    headers: ["Item", "Who is responsible", "When it must be complete"],
    rows: [
      ["Workload and casemix statement", "Clinical department", "Before shielding design"],
      ["Shielding calculation and drawings", "Qualified medical physicist", "Before civil works"],
      ["Shielding construction", "Civil contractor", "Before system delivery"],
      ["Radiation survey after installation", "Medical physicist", "Before first clinical case"],
      ["Dose and image quality baselines", "Installing engineers with physics", "At acceptance testing"],
    ],
    caption: "Responsibility matrix for the radiation protection chain in an interventional room project.",
  },
  {
    type: "h2",
    id: "power",
    text: "Power, Earthing and Cooling",
    number: 4,
    body: "Interventional systems are sensitive to supply quality, not just supply capacity.",
  },
  {
    type: "p",
    text: "High-frequency generators draw large, short-duration currents during acquisition. A supply that is nominally adequate but electrically weak produces voltage sag, which appears clinically as inconsistent image quality and, over time, as premature component stress. Requirements to verify include dedicated supply capacity, permissible voltage deviation and impedance, protective earthing to the manufacturer's specification, uninterruptible supply for the control and imaging computing chain, and cooling capacity sized for continuous list operation rather than average load.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Measure the supply, do not accept a rating",
    text: "Record supply voltage, deviation under load and earth resistance during the site survey. A measured baseline is the only way to distinguish a later equipment fault from a facility problem.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "Layout, Sightlines and Clinical Workflow",
    number: 5,
    body: "Geometry that works on paper can fail at the table.",
  },
  {
    type: "ul",
    items: [
      "Full C-arm rotation and table travel simulated against final room dimensions, including anaesthetic equipment positions.",
      "Monitor suspension positioned for the primary operator's working stance in the projections most frequently used.",
      "Ceiling-suspended radiation shields and lead screens placed where staff actually stand, not where the drawing is tidy.",
      "Clear circulation for emergency access and patient transfer without moving the positioner.",
      "Storage for catheters and consumables inside the room, so staff do not repeatedly cross the radiation field.",
    ],
  },
  {
    type: "h2",
    id: "commissioning",
    text: "Commissioning and Acceptance Testing",
    number: 6,
    body: "Handover is a measured event with documented baselines.",
  },
  {
    type: "ul",
    items: [
      "Mechanical verification: positioner movements, table travel and load, collision protection and emergency stops.",
      "Generator and tube performance verification against specification.",
      "Dose measurement at defined geometries and documented reference air kerma rates for each acquisition mode.",
      "Image quality baselines — resolution, low contrast detectability and uniformity — recorded per plane.",
      "Radiation survey of the completed room under representative workload conditions.",
      "Network, archive and reporting integration verified end to end with a real study.",
      "In biplane rooms, all of the above performed independently on each plane and then in combined operation.",
    ],
  },
  {
    type: "p",
    text: "These baselines are not paperwork. They are the reference against which every future preventive maintenance visit compares the room, and without them image-quality drift cannot be proven or attributed.",
  },
  {
    type: "h2",
    id: "handover",
    text: "Training and Handover",
    number: 7,
    body: "A commissioned room still needs competent users.",
  },
  {
    type: "p",
    text: "Applications training should cover acquisition protocol selection, dose-management features, collimation and shutter discipline, table and positioner handling, and image transfer and archiving. Biomedical engineering should receive first-line fault recognition, escalation routes and the maintenance schedule. AbuFarha Medical delivers installation and commissioning, clinical training, preventive maintenance and technical support for Philips Allura Xper systems so that the same organisation is accountable across the whole lifecycle.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How long does a Philips Allura Xper installation take?",
        a: "System installation and commissioning is typically measured in weeks, but the determining factor is site readiness — shielding, power and structural work — which is usually measured in months.",
      },
      {
        q: "Can shielding be added after the room is built?",
        a: "It can, but retrofitting is disruptive and expensive, and it may reduce usable room dimensions. Shielding should always follow a physicist's design completed before construction.",
      },
      {
        q: "Is an uninterruptible power supply necessary?",
        a: "For the control and imaging computing chain it is strongly advisable: an unplanned shutdown mid-procedure is both a clinical and a data-integrity event. Scope should be confirmed against the system's technical documentation.",
      },
      {
        q: "What must exist before the first clinical case?",
        a: "A completed radiation survey, documented dose and image-quality baselines, verified archive integration, trained clinical users and a signed maintenance arrangement.",
      },
      {
        q: "Who signs off the room?",
        a: "Acceptance is joint: the installing engineering team for system performance, the medical physicist for radiation protection, and the clinical department for workflow suitability.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Site readiness, not equipment delivery, is the critical path in a cath lab project.",
      "Shielding must be designed by a physicist from real workload and signed off before civil works.",
      "Supply quality and earthing should be measured and recorded during the site survey.",
      "Acceptance testing must produce documented dose and image-quality baselines per plane.",
      "Clinical and engineering training completes commissioning; a room is not handed over without it.",
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
    text: "A Philips Allura Xper room performs for a decade or more when its installation was disciplined, and it frustrates its users for the same decade when it was not. Treat the site survey, shielding design, power verification and acceptance testing as clinical quality activities rather than construction formalities, and the room will remain predictable for its whole life.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Radiation protection and physics",
        items: [
          { label: "International Atomic Energy Agency — radiation protection in interventional procedures", url: "https://www.iaea.org/" },
          { label: "American Association of Physicists in Medicine — shielding design and acceptance testing reports", url: "https://www.aapm.org/" },
        ],
      },
      {
        title: "Equipment and electrical standards",
        items: [
          { label: "International Electrotechnical Commission — IEC 60601 medical electrical equipment standards", url: "https://www.iec.ch/" },
          { label: "World Health Organization — health facility infrastructure guidance", url: "https://www.who.int/" },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          { label: "Philips — Allura Xper pre-installation and technical documentation", url: "https://www.philips.com/healthcare" },
        ],
      },
    ],
    note: "Site requirements must be confirmed against the pre-installation documentation for the specific system configuration ordered.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Cath lab installation, commissioning and acceptance testing" },
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Interventional workflow and radiation safety practice" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer pre-installation documentation and field commissioning practice",
    disclaimer:
      "Educational planning guidance. It does not replace manufacturer pre-installation documentation, medical physics assessment or national regulatory requirements.",
  },
];
