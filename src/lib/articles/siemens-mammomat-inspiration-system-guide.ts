/**
 * Siemens manufacturer cluster — "Siemens Mammomat Inspiration: System Guide"
 */

import type { ContentBlock, TocItem } from "../blog";

export const SIEMENS_MAMMOMAT_TOC: TocItem[] = [
  { id: "platform", title: "What the Mammomat Inspiration Is" },
  { id: "detector", title: "Detector and Image Chain" },
  { id: "workflow", title: "Screening and Diagnostic Workflow" },
  { id: "options", title: "Configuration and Options" },
  { id: "room", title: "Room and Installation Requirements" },
  { id: "qc", title: "Quality Control and Service" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const SIEMENS_MAMMOMAT_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "The Siemens Mammomat Inspiration is a full-field digital mammography platform used for screening and diagnostic breast imaging. AbuFarha Medical supplies, installs, commissions and services Mammomat Inspiration systems as part of its women's healthcare imaging portfolio.",
      "Mammography differs from most radiography in that image quality is regulated, measured and audited continuously. A mammography system is therefore acquired together with a quality control programme, a reporting workstation pathway and a trained radiographer team — never as a standalone box.",
      "This guide explains the platform's architecture, how it is used clinically, what the room requires, and what quality control and service obligations follow installation.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Platform architecture, detector and image chain, clinical workflow, configuration options, room requirements, quality control and service obligations",
    audience:
      "Breast radiologists, mammography radiographers, medical physicists, biomedical engineering teams, women's health service planners",
    readingTime: "12 min read",
    technology: "Mammography",
  },
  {
    type: "h2",
    id: "platform",
    text: "What the Mammomat Inspiration Is",
    number: 1,
    body: "A digital mammography gantry with integrated compression, positioning and acquisition control.",
  },
  {
    type: "p",
    text: "The system comprises an X-ray tube optimised for the low-energy spectrum breast tissue requires, a compression paddle assembly, a digital detector, an anti-scatter grid arrangement, and an acquisition console with automatic exposure control. Rotation of the gantry allows the standard craniocaudal and mediolateral oblique projections plus additional views as clinically indicated.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Compression is a clinical instrument",
    text: "Adequate compression reduces tissue thickness, dose and motion blur while separating overlapping structures. Most avoidable image-quality problems in mammography originate in positioning and compression rather than in the equipment.",
  },
  {
    type: "h2",
    id: "detector",
    text: "Detector and Image Chain",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "The detector determines spatial resolution and low-contrast performance — the two properties that govern microcalcification and mass visibility.",
      "Automatic exposure control adapts technique to compressed thickness and density, which is why exposure-index review is part of quality assurance rather than an optional metric.",
      "Image processing presents the acquired data; it can improve perception but cannot recover information the acquisition did not capture.",
      "The reporting environment matters as much as the acquisition: mammography requires diagnostic-grade high-luminance displays under controlled ambient lighting.",
      "Archive and prior-image retrieval must be reliable, because comparison with prior studies is central to breast reporting.",
    ],
  },
  {
    type: "h2",
    id: "workflow",
    text: "Screening and Diagnostic Workflow",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Screening: standard bilateral two-view examinations at defined intervals, with throughput governed by positioning time rather than exposure time.",
      "Diagnostic assessment: supplementary views, magnification and spot compression as indicated by findings or symptoms.",
      "Recall pathway: a defined route from a suspicious screening finding to assessment, ultrasound correlation and, where required, tissue sampling.",
      "Documented reporting workflow, including double reading where the service protocol requires it.",
      "Audit: recall rates, technical repeat rates and dose indices reviewed as a programme, not per case.",
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Mammography services are judged on programme metrics — recall rate, repeat rate, dose distribution — not on individual images.",
    clinicalInterpretation:
      "A rising technical repeat rate is usually a positioning or training signal before it is an equipment fault.",
    hospitalRecommendation:
      "Review repeat and recall statistics monthly and feed them back to the radiographer team; treat unexplained changes as an investigation trigger.",
  },
  {
    type: "h2",
    id: "options",
    text: "Configuration and Options",
    number: 4,
  },
  {
    type: "table",
    headers: ["Element", "What it affects", "Planning note"],
    rows: [
      ["Acquisition console and workstation", "Throughput and technologist workflow", "Console position determines room layout and patient privacy"],
      ["Biopsy capability", "Ability to sample findings in-department", "Requires trained staff, consumables and a defined pathway"],
      ["Magnification and spot views", "Diagnostic assessment depth", "Confirm the accessory set is complete on any pre-owned system"],
      ["Reporting displays", "Detection performance in reporting", "Diagnostic-grade displays with periodic calibration are mandatory, not optional"],
    ],
  },
  {
    type: "h2",
    id: "room",
    text: "Room and Installation Requirements",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Shielding assessment appropriate to a mammography room, with a documented radiation protection programme.",
      "Space for gantry rotation, patient positioning from both sides, and a seated examination position where required.",
      "Privacy and dignity provisions: changing space, gowning and a waiting arrangement suited to a women's health service.",
      "Electrical supply, environmental control and network connectivity for image transfer to the reporting environment.",
      "Access route verification for delivery and installation, and floor loading confirmation for the installed position.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Commission the pathway, not the gantry",
    text: "Acceptance testing should follow an image from acquisition through archive to the reporting display with prior comparison. A system that images perfectly but cannot retrieve priors is not clinically commissioned.",
  },
  {
    type: "h2",
    id: "qc",
    text: "Quality Control and Service",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Daily and weekly technologist quality control with documented action limits and escalation.",
      "Periodic physicist testing covering dose, image quality, compression force and automatic exposure control behaviour.",
      "Preventive maintenance covering tube and generator performance, detector calibration, compression mechanics and display calibration.",
      "Consumable and accessory management for paddles, face shields and biopsy items where fitted.",
      "Radiographer training and competency records, refreshed rather than recorded once at installation.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs, commissions and supports Siemens Mammomat Inspiration systems, and delivers the preventive maintenance, spare parts and radiographer training that a screening or diagnostic breast service depends on.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is the Mammomat Inspiration suitable for a screening programme?",
        a: "Yes, where it is supported by a quality control programme, diagnostic reporting displays, a defined recall pathway and trained radiographers. Screening capability is a service property, not solely an equipment property.",
      },
      {
        q: "What determines image quality in digital mammography?",
        a: "Positioning and compression, detector performance, exposure control behaviour and the reporting display environment — in roughly that order of practical impact.",
      },
      {
        q: "What quality control does a mammography system require?",
        a: "Daily and weekly technologist checks plus periodic physicist testing of dose, image quality, compression and automatic exposure control, all documented with defined action limits.",
      },
      {
        q: "Can breast biopsy be performed on the system?",
        a: "Where the biopsy option and accessories are fitted and the department has trained staff and a defined pathway. Confirm the option and accessory inventory before assuming the capability exists.",
      },
      {
        q: "What should be verified on a pre-owned mammography system?",
        a: "Tube history, detector condition and calibration, completeness of paddles and accessories, software version and licences, and the full quality control and service record.",
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
    text: "A Mammomat Inspiration installation succeeds when the gantry, the quality control programme, the reporting environment and the radiographer team are commissioned together. Specify all four at acquisition, and the imaging performance follows; specify only the first, and the programme metrics will show it.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Breast imaging service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Mammography installation and quality control support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer documentation and field service practice synthesis",
    disclaimer:
      "Educational guidance on digital mammography systems. It does not replace manufacturer documentation, national screening standards or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer technical documentation and operating instructions for installed mammography systems." },
      { label: "Institutional breast imaging quality assurance and audit records." },
      { label: "National radiation protection and breast screening quality requirements." },
    ],
  },
];
