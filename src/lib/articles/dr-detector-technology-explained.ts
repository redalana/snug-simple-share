/**
 * DR detector technology explained — X-Ray cluster (supporting).
 */

import type { ContentBlock, TocItem } from "../blog";

export const DR_DETECTOR_TECH_TOC: TocItem[] = [
  { id: "overview", title: "Why the Detector Decides Everything" },
  { id: "conversion", title: "Direct and Indirect Conversion" },
  { id: "materials", title: "Scintillators and Photoconductors" },
  { id: "performance", title: "Performance Metrics That Matter" },
  { id: "formats", title: "Panel Formats and Portability" },
  { id: "durability", title: "Durability, Batteries and Damage" },
  { id: "selection", title: "Selecting a Detector for a Department" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DR_DETECTOR_TECH_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "In digital radiography, the detector is the component that determines how much radiation a patient receives for a given image quality. Generators and tube stands affect workflow and reliability; the detector sets the physical limit of what the system can achieve.",
      "That makes detector specification the single most consequential technical decision in a radiography purchase — and the one most often reduced on a tender document to a size and a pixel count, neither of which predicts clinical performance.",
      "This guide explains how flat panel detectors convert X-rays into images, which performance metrics actually matter, how formats and portability affect practice, and how to specify a detector for a department's real examination mix.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Direct and indirect conversion, caesium iodide and gadolinium oxysulfide scintillators, amorphous selenium photoconductors, DQE and MTF, pixel pitch, panel formats, wireless and portable detectors, durability and selection criteria",
    audience:
      "Radiology managers, radiographers, medical physicists, biomedical engineers and procurement teams",
    readingTime: "14 min read",
    technology: "X-Ray Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Why the Detector Decides Everything",
    number: 1,
    body: "A radiographic image is built from the photons that reach the detector. How efficiently those photons are converted into usable signal determines the dose required to produce a diagnostic image.",
  },
  {
    type: "ul",
    items: [
      "A more efficient detector produces the same image quality at lower technique factors, which lowers patient dose on every examination for the life of the system.",
      "Detector efficiency also determines performance in the hardest cases — large patients, lateral projections and bedside imaging where geometry is compromised.",
      "Detector size and format determine which projections can be performed without repositioning, which affects throughput.",
      "Detector robustness determines replacement frequency, which is the largest recurring parts cost in radiography after the tube.",
      "Detector calibration stability determines how often images drift toward inconsistency between rooms.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Ask for measured DQE, not marketing categories",
    text: "Detective quantum efficiency measured to the IEC 62220 series, at stated beam qualities and spatial frequencies, is the comparable figure. Terms like \"premium detector\" or \"advanced panel\" carry no technical meaning and cannot be evaluated in a tender.",
  },
  {
    type: "h2",
    id: "conversion",
    text: "Direct and Indirect Conversion",
    number: 2,
    body: "All flat panel detectors turn X-rays into electrical charge, but they do so by one of two routes, and the route has practical consequences.",
  },
  {
    type: "table",
    headers: ["Approach", "How it works", "Practical characteristics"],
    rows: [
      ["Indirect conversion", "A scintillator converts X-rays to light; a photodiode array converts light to charge", "Dominant in general radiography; high efficiency with structured scintillators; slight light spread affects sharpness"],
      ["Direct conversion", "A photoconductor converts X-rays straight to charge with no light stage", "Excellent spatial resolution and no light spread; historically favoured in mammography; more temperature-sensitive"],
    ],
  },
  {
    type: "ul",
    items: [
      "Indirect detectors using structured caesium iodide achieve high efficiency because the needle-like crystal structure channels light toward the photodiode, limiting lateral spread.",
      "Indirect detectors using gadolinium oxysulfide are more economical and mechanically robust, but generally less dose-efficient than structured caesium iodide.",
      "Direct conversion using amorphous selenium avoids the light stage entirely, which preserves fine detail — valuable where very high spatial resolution is the priority.",
      "Readout electronics — thin film transistor arrays or complementary metal-oxide-semiconductor arrays — affect noise floor, readout speed and panel thickness.",
      "The distinction matters less than the measured result: two detectors of the same type can differ substantially in efficiency and noise.",
    ],
  },
  {
    type: "h2",
    id: "materials",
    text: "Scintillators and Photoconductors",
    number: 3,
    body: "Within indirect detectors, the scintillator material is the strongest determinant of dose efficiency in general radiography.",
  },
  {
    type: "table",
    headers: ["Material", "Typical position", "Trade-off"],
    rows: [
      ["Structured caesium iodide", "Higher-efficiency general radiography and portable panels", "Best dose efficiency; higher cost; hygroscopic, so sealing quality matters"],
      ["Gadolinium oxysulfide", "Cost-sensitive rooms and high-abuse environments", "Lower cost and robust; requires more dose for equivalent image quality"],
      ["Amorphous selenium (direct)", "High-resolution applications", "Excellent sharpness; temperature-dependent behaviour requires stable environment"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Buying the cheapest panel for the busiest room",
    text: "Detector cost is one-off; dose and repeat rates are recurring. Placing the least efficient panel in the highest-volume room maximises the lifetime dose consequence of the saving. Where budget forces a mix, put the most efficient detector where the volume is.",
  },
  {
    type: "h2",
    id: "performance",
    text: "Performance Metrics That Matter",
    number: 4,
    body: "A small set of measured parameters describes detector performance completely enough for procurement decisions.",
  },
  {
    type: "table",
    headers: ["Metric", "What it describes", "Why it matters"],
    rows: [
      ["Detective quantum efficiency (DQE)", "How efficiently incident photons become image information", "The best single predictor of achievable dose reduction"],
      ["Modulation transfer function (MTF)", "Contrast transfer at increasing spatial frequency", "Predicts visibility of fine structures such as trabecular detail and lines"],
      ["Pixel pitch", "Physical spacing of detector elements", "Sets the sampling limit; smaller is not automatically better if noise rises"],
      ["Noise power spectrum", "How noise is distributed across frequencies", "Explains image texture and low-contrast detectability"],
      ["Dynamic range", "Range of exposures rendered usefully", "Tolerance for technique variation and mixed-density anatomy"],
      ["Lag and ghosting", "Residual signal from previous exposures", "Affects rapid sequential imaging"],
      ["Uniformity and calibration stability", "Consistency across the panel and over time", "Determines recalibration frequency and image consistency"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Reading a detector specification correctly",
    clinicalInterpretation:
      "Pixel pitch is frequently used as a proxy for quality, but a finer pitch on a less efficient detector can deliver noisier images at the same dose. DQE and MTF together, measured under stated conditions, describe what the panel will actually do in the room.",
    hospitalRecommendation:
      "Require IEC 62220-series measurements with beam qualities stated, and have medical physics review the submitted data as part of tender evaluation rather than after installation.",
  },
  {
    type: "h2",
    id: "formats",
    text: "Panel Formats and Portability",
    number: 5,
    body: "Format decisions are workflow decisions: they determine how many patients can be imaged per hour and which examinations need repositioning.",
  },
  {
    type: "table",
    headers: ["Format", "Typical use", "Considerations"],
    rows: [
      ["Large fixed panel in table and wall stand", "General radiography", "Best throughput; no batteries; protected from handling damage"],
      ["Large portable wireless panel", "Trolley, theatre, intensive care and flexible positioning", "Essential for bedside work; battery and drop-damage management required"],
      ["Smaller portable panel", "Extremity, paediatric and incubator imaging", "Lighter and easier to position; limited coverage for large anatomy"],
      ["Tethered portable panel", "Cost-sensitive mobile use", "Lower cost and no battery concerns; cable is a handling and infection-control issue"],
      ["Long-length or stitching capability", "Spine and lower-limb alignment", "Requires system support for stitched acquisition and geometry correction"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Match panel inventory to the examination mix",
    text: "Departments with substantial critical care and theatre workload need at least one spare portable panel, because a single damaged detector otherwise removes bedside imaging entirely. Departments that are almost exclusively ambulatory can invest that money in detector efficiency instead.",
  },
  {
    type: "h2",
    id: "durability",
    text: "Durability, Batteries and Damage",
    number: 6,
    body: "Portable detectors fail from handling, not from physics. Their practical lifetime is a function of departmental discipline and of what the contract covers.",
  },
  {
    type: "ul",
    items: [
      "Drop and load ratings should be stated and matched to actual use, including whether patients will be positioned on top of the panel.",
      "Sealing against fluid ingress matters in critical care and theatre, and hygroscopic scintillators depend on it for long-term stability.",
      "Cleaning compatibility with the hospital's disinfectants must be verified; incompatible agents degrade seals and housings.",
      "Battery strategy — number of batteries, charge time, hot-swap capability and expected battery life in cycles — determines mobile availability.",
      "Wireless reliability inside shielded rooms and across the hospital network needs testing during commissioning, not after.",
      "Damage cover should be explicit in the service contract, with a stated excess and a replacement or loan arrangement, because a lost portable panel stops a service.",
    ],
  },
  {
    type: "h2",
    id: "selection",
    text: "Selecting a Detector for a Department",
    number: 7,
    body: "Detector selection follows from workload, patient population and case mix — in that order.",
  },
  {
    type: "ul",
    items: [
      "Audit the examination mix first: proportion of chest, extremity, spine, abdomen, paediatric, trolley-based and theatre work.",
      "Prioritise dose efficiency where volume and paediatric proportion are high.",
      "Prioritise robustness and sealing where portable use dominates.",
      "Prioritise resolution where fine skeletal detail or specialist applications drive reporting.",
      "Specify format count and spares to match availability requirements, not just the minimum to operate.",
      "Require calibration stability and remote diagnostics information as part of the technical submission.",
      "Confirm that detector replacement, damage and battery replacement are covered explicitly in the service agreement.",
      "Verify performance on site during acceptance testing against the submitted figures, with medical physics sign-off.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is caesium iodide always better than gadolinium oxysulfide?",
        a: "Structured caesium iodide is generally more dose-efficient, which matters most in high-volume and paediatric work. Gadolinium oxysulfide remains a defensible choice where budget is constrained or where handling conditions are severe, provided the dose consequence is understood and protocols are optimised accordingly.",
      },
      {
        q: "Does a smaller pixel pitch mean a better image?",
        a: "Not on its own. Finer sampling improves the theoretical resolution limit but can increase noise per pixel, so a detector with a finer pitch and lower efficiency may produce worse clinical images at the same dose. Evaluate DQE and MTF together rather than pixel pitch in isolation.",
      },
      {
        q: "How long does a flat panel detector last?",
        a: "Fixed panels commonly serve for the useful life of the room, while portable panels are usually retired because of accumulated handling damage rather than electronic wear. Local lifetime is therefore driven by handling practice, cleaning protocols and whether damage cover encourages prompt replacement.",
      },
      {
        q: "Can detectors from one vendor be used on another vendor's system?",
        a: "Sometimes, through third-party retrofit solutions, but integration with automatic exposure control, protocol management and dose reporting is often limited. Verify the exact functional integration in writing before assuming a cross-vendor panel is equivalent.",
      },
      {
        q: "What should be tested at acceptance?",
        a: "Uniformity, calibration, geometric accuracy, automatic exposure control behaviour, dose indicator accuracy and image quality against phantom criteria — compared with the performance figures submitted at tender. Medical physics sign-off before clinical use is the point at which claims become verified.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Specifying detectors for a radiography department?",
    subheading:
      "AbuFarha Medical supplies, installs and supports digital radiography systems and advises hospitals on detector selection, dose performance and service scope.",
    technology: "X-Ray Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "X-ray installation, commissioning and service" },
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Radiography protocols and workflow" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "IEC detector performance standards, medical physics literature and manufacturer technical documentation",
    disclaimer:
      "Detector performance figures are measurement-condition dependent. Compare only measurements made to the same standard and beam qualities, and have submissions reviewed by a qualified medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Detector performance standards",
        items: [
          { label: "IEC 62220 series — determination of detective quantum efficiency for digital X-ray imaging devices" },
          { label: "IEC 61267 — radiation conditions for use in the determination of imaging performance" },
        ],
      },
      {
        title: "Dose and optimisation",
        items: [
          { label: "ICRP recommendations on radiological protection in medicine" },
          { label: "IAEA guidance on diagnostic reference levels and radiography optimisation" },
        ],
      },
      {
        title: "Equipment and acceptance",
        items: [
          { label: "IEC 60601-2 series for diagnostic X-ray equipment" },
          { label: "Manufacturer detector, calibration and acceptance test documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "The detector sets the dose required for a given image quality, making it the decisive specification in a radiography purchase.",
      "Indirect conversion with structured caesium iodide leads general radiography efficiency; gadolinium oxysulfide trades efficiency for cost and robustness.",
      "Direct conversion offers excellent sharpness and is more sensitive to environmental stability.",
      "Compare measured DQE and MTF to IEC standards; pixel pitch alone predicts little.",
      "Format and spare-panel strategy should follow the examination mix, especially where bedside imaging matters.",
      "Portable panels fail from handling — sealing, drop rating, cleaning compatibility and damage cover determine real lifetime.",
      "Verify submitted performance during on-site acceptance testing with medical physics sign-off.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "Detector selection is where radiography dose performance is decided for the next decade of a room's operation.",
  },
  {
    type: "p",
    text: "Departments that specify detectors on measured performance, match formats to their real workload and contract explicitly for damage and replacement get lower doses, fewer repeats and fewer service surprises. Departments that specify a size and a pixel count discover the difference one busy year at a time.",
  },
];
