/**
 * CR vs DR radiography comparison — X-Ray cluster (comparison).
 */

import type { ContentBlock, TocItem } from "../blog";

export const CR_VS_DR_TOC: TocItem[] = [
  { id: "overview", title: "Two Routes to a Digital Radiograph" },
  { id: "how-they-work", title: "How Each Technology Works" },
  { id: "workflow", title: "Workflow and Throughput" },
  { id: "dose", title: "Dose and Image Quality" },
  { id: "cost", title: "Cost Structure Over Ten Years" },
  { id: "resilience", title: "Reliability and Operational Resilience" },
  { id: "decision", title: "Choosing Between Them" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const CR_VS_DR_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Computed radiography and digital radiography both produce digital images, and both eliminate film. That similarity conceals a fundamental difference in how they behave in a working department: one requires a cassette to be carried to a reader, the other produces the image where the exposure happened.",
      "For hospitals still operating computed radiography, or planning a phased conversion, the question is not which technology is more modern. It is which combination delivers the required throughput, dose performance and resilience within the available capital envelope.",
      "This guide compares the two technologies on the dimensions that decide the answer: workflow, dose, cost structure over a decade, and what happens when something breaks.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Computed radiography and digital radiography operating principles, workflow and throughput differences, dose efficiency, ten-year cost structure, failure modes and resilience, phased conversion strategy",
    audience:
      "Radiology managers, hospital administrators, procurement teams, biomedical engineers and healthcare planners",
    readingTime: "14 min read",
    technology: "X-Ray Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Two Routes to a Digital Radiograph",
    number: 1,
    body: "Both technologies replaced film, but they did so a decade apart and with very different implications for how a department is organised.",
  },
  {
    type: "table",
    headers: ["", "Computed radiography (CR)", "Digital radiography (DR)"],
    rows: [
      ["Image capture", "Reusable photostimulable phosphor plate in a cassette", "Flat panel detector"],
      ["Image availability", "After the cassette is read in a separate reader", "Seconds after exposure, at the console"],
      ["Consumables", "Plates and cassettes wear and are replaced", "No routine consumable"],
      ["Capital cost", "Lower per room, especially when retrofitting", "Higher per room"],
      ["Typical dose efficiency", "Lower than modern flat panels", "Higher, particularly with structured caesium iodide"],
      ["Positioning feedback", "Delayed", "Immediate"],
      ["Failure impact", "Reader failure affects all rooms sharing it", "Detector failure affects one room or one panel"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The cassette is the workflow",
    text: "Almost every operational difference between the two technologies follows from one fact: computed radiography separates exposure from image readout in space and time. Every extra minute of walking, queuing at the reader and returning to the patient accumulates across hundreds of examinations a week.",
  },
  {
    type: "h2",
    id: "how-they-work",
    text: "How Each Technology Works",
    number: 2,
    body: "The physics of the exposure is identical; the difference is entirely in the capture and readout stage.",
  },
  {
    type: "ul",
    items: [
      "In computed radiography, X-rays excite electrons in a storage phosphor plate, which holds a latent image. A laser in the reader stimulates the plate, the emitted light is collected and digitised, and the plate is erased for reuse.",
      "In digital radiography, X-rays are converted to charge within the flat panel — either indirectly via a scintillator and photodiode array, or directly via a photoconductor — and read out electronically within seconds.",
      "Computed radiography plates degrade with use and handling, accumulating scratches, dust artefacts and sensitivity loss that require monitoring and eventual replacement.",
      "Digital radiography panels require periodic calibration but no per-examination handling in fixed installations.",
      "Both technologies use the same tubes, generators and stands, which is why a computed radiography room can often be converted to digital radiography without replacing the whole system.",
    ],
  },
  {
    type: "h2",
    id: "workflow",
    text: "Workflow and Throughput",
    number: 3,
    body: "Throughput differences are the most consistently reported and most easily measured advantage of digital radiography.",
  },
  {
    type: "ul",
    items: [
      "Immediate image review allows positioning and exposure errors to be corrected while the patient is still positioned, which reduces recalls and repeat attendances.",
      "Removing the walk-and-read cycle shortens examination time materially, with the largest gains in multi-projection studies and in trolley-based work.",
      "Single-reader dependency in computed radiography creates queues at peak times and a single point of failure.",
      "Digital radiography reduces cassette handling, which lowers infection-control burden and physical strain on staff.",
      "Protocol-driven acquisition and automatic collimation on digital systems improve consistency between operators.",
      "Computed radiography retains one workflow advantage: cassettes fit awkward positions and improvised geometries where a rigid panel and its cabling are cumbersome.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Measure your own cycle time before deciding",
    text: "Time twenty consecutive examinations of each type in your department, including patient movement and reader queueing. The result converts an abstract technology comparison into a capacity figure that a business case can use.",
  },
  {
    type: "h2",
    id: "dose",
    text: "Dose and Image Quality",
    number: 4,
    body: "Modern flat panel detectors are generally more dose-efficient than storage phosphor plates, but practice governance determines whether that potential is realised.",
  },
  {
    type: "table",
    headers: ["Aspect", "Computed radiography", "Digital radiography"],
    rows: [
      ["Dose efficiency", "Lower; typically requires more exposure for equivalent image quality", "Higher, especially structured caesium iodide panels"],
      ["Spatial resolution", "Adequate for general radiography; limited by laser scan and light spread", "Generally better, and consistent across the panel"],
      ["Consistency", "Varies with plate condition and handling", "Consistent while calibration is maintained"],
      ["Artefacts", "Plate scratches, dust, incomplete erasure, ghosting", "Dead pixels, calibration artefacts, panel damage"],
      ["Dose creep risk", "Present; wide latitude masks overexposure", "Present; requires exposure index monitoring"],
      ["Paediatric imaging", "Achievable but dose penalty is more significant", "Preferred where the lowest achievable dose matters most"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Where the dose difference matters most",
    clinicalInterpretation:
      "The dose advantage of digital radiography compounds with volume and matters most in paediatric imaging and in high-throughput chest and skeletal work. In a low-volume clinic the absolute collective difference is small; in a busy hospital department it is substantial.",
    hospitalRecommendation:
      "If conversion must be phased, convert the highest-volume and paediatric rooms first, and run exposure index monitoring on all rooms regardless of technology.",
  },
  {
    type: "h2",
    id: "cost",
    text: "Cost Structure Over Ten Years",
    number: 5,
    body: "Comparing purchase prices favours computed radiography; comparing ten-year cost often does not.",
  },
  {
    type: "table",
    headers: ["Cost element", "Computed radiography", "Digital radiography"],
    rows: [
      ["Initial capital", "Lower — reader plus cassettes, often reusing the existing room", "Higher — detector, workstation and integration"],
      ["Recurring consumables", "Plate and cassette replacement on a rolling basis", "None in normal operation"],
      ["Detector or plate replacement", "Frequent, low unit cost", "Infrequent, high unit cost"],
      ["Reader service", "Mechanical and laser subsystem requires regular service", "Not applicable"],
      ["Staff time per examination", "Higher — handling and reader cycle", "Lower"],
      ["Repeat and recall rate", "Higher without immediate feedback", "Lower"],
      ["Dose-related governance effort", "Similar", "Similar"],
      ["Support horizon", "Shrinking; parts and software support are being withdrawn", "Long, with active development"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "The support horizon is now a decisive factor",
    text: "Computed radiography is a mature technology whose parts availability, software support and cybersecurity maintenance are contracting. A ten-year plan built on it should confirm in writing how long the vendor will support the reader platform, because the answer increasingly governs the decision.",
  },
  {
    type: "h2",
    id: "resilience",
    text: "Reliability and Operational Resilience",
    number: 6,
    body: "Resilience differs in structure rather than in degree, and the difference should be designed for explicitly.",
  },
  {
    type: "ul",
    items: [
      "A computed radiography reader failure can stop imaging in every room that depends on it, which makes a second reader or a partner arrangement important.",
      "A digital radiography detector failure typically affects one room, and a spare portable panel can restore service quickly.",
      "Computed radiography cassettes are individually cheap, so damage is a nuisance rather than a crisis.",
      "Digital radiography portable panels are expensive and vulnerable to drop damage, which makes explicit damage cover important.",
      "Hybrid departments retain a computed radiography reader as a fallback path during conversion, which is a reasonable transitional strategy but adds two support contracts.",
      "In both cases, the resilience question is the same: what is the documented plan when the primary imaging path is unavailable during a working day?",
    ],
  },
  {
    type: "h2",
    id: "decision",
    text: "Choosing Between Them",
    number: 7,
    body: "The decision is contextual, and in most hospitals the honest answer is a phased conversion rather than a single choice.",
  },
  {
    type: "tableInsight",
    expertCommentary: "Situation to recommendation",
    clinicalInterpretation:
      "High-volume, paediatric and emergency-facing rooms favour digital radiography on dose, throughput and resilience grounds. Low-volume outpatient rooms, remote clinics and short-horizon interim solutions can still be served by computed radiography, provided the vendor's support horizon is confirmed in writing.",
    hospitalRecommendation:
      "Plan a phased conversion ordered by examination volume and paediatric proportion, keeping one computed radiography path as a documented fallback until the last room is converted.",
  },
  {
    type: "ul",
    items: [
      "Convert first where volume, paediatric proportion and repeat rates are highest.",
      "Consider retrofit detectors where the generator and stand are mechanically sound and supported — the cheapest route to digital radiography performance.",
      "Retain computed radiography only where the room's workload genuinely does not justify conversion, and confirm the support horizon.",
      "Do not run two technologies indefinitely without a documented end date; dual support and dual training are a recurring overhead.",
      "Include exposure index monitoring and dose registry integration in every conversion, so the dose benefit is measured rather than assumed.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is computed radiography obsolete?",
        a: "It is a mature technology in decline rather than an unusable one. Many installations continue to deliver diagnostic imaging safely, but parts, software and cybersecurity support are contracting, so a long-term plan built on computed radiography should confirm the vendor's support horizon before committing.",
      },
      {
        q: "Can we convert our existing rooms without replacing the whole system?",
        a: "Frequently yes. If the generator is accurate and supported and the mechanics are sound, a retrofit flat panel detector and workstation can deliver most of the workflow and dose benefit at a fraction of full replacement cost. Automatic exposure control integration and parts support duration are the limiting factors.",
      },
      {
        q: "Does digital radiography really reduce repeat rates?",
        a: "Immediate image review removes the delay between exposure and error detection, so positioning problems are corrected during the same visit rather than causing a recall. The measurable benefit varies by department, which is why baseline repeat-rate data collected before conversion is worth having.",
      },
      {
        q: "Which is better for portable and bedside imaging?",
        a: "Digital radiography with a wireless panel is generally superior because the image is available at the bedside, allowing immediate confirmation of line and tube position. Computed radiography cassettes remain useful in awkward geometries and where the cost of damaging a portable panel is a genuine concern.",
      },
      {
        q: "How should a phased conversion be sequenced?",
        a: "By workload and dose sensitivity: highest-volume rooms first, paediatric and emergency-facing rooms next, low-volume outpatient rooms last. Keep one functioning fallback path throughout, and set an explicit end date for retiring the last computed radiography reader.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning a conversion to digital radiography?",
    subheading:
      "AbuFarha Medical supplies, installs and supports digital radiography systems and retrofit detectors, and advises hospitals on phased conversion and service planning.",
    technology: "X-Ray Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "X-ray installation, commissioning and service" },
      { role: "Commercial review", name: "AbuFarha Projects & Procurement", credential: "Imaging capital project scoping" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "IEC equipment and detector standards, IAEA and ICRP dose optimisation guidance, and hospital operational practice",
    disclaimer:
      "No prices are quoted because equipment, consumable and labour costs vary by market and configuration. Dose comparisons are general; local performance must be verified by a qualified medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Detector and equipment performance",
        items: [
          { label: "IEC 62220 series — detective quantum efficiency of digital X-ray imaging devices" },
          { label: "IEC 60601-2 series for diagnostic X-ray equipment" },
        ],
      },
      {
        title: "Dose optimisation",
        items: [
          { label: "ICRP recommendations on radiological protection in medicine" },
          { label: "IAEA guidance on diagnostic reference levels in radiography" },
        ],
      },
      {
        title: "Quality assurance",
        items: [
          { label: "National quality assurance guidance for computed and digital radiography" },
          { label: "Manufacturer acceptance testing and calibration documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "Computed radiography separates exposure from readout; digital radiography produces the image at the point of exposure, and almost every practical difference follows from that.",
      "Digital radiography is generally more dose-efficient, with the greatest benefit in high-volume and paediatric work.",
      "Immediate image review reduces repeats and recalls, shortening examination cycle time.",
      "Computed radiography has lower capital cost but recurring plate replacement, reader service and higher staff time per examination.",
      "Reader failure in computed radiography is a departmental outage; detector failure in digital radiography is usually a single-room problem.",
      "A contracting support horizon now weighs heavily against new computed radiography commitments.",
      "Retrofit detectors are often the most cost-effective conversion route where generators and stands are sound.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "The comparison is no longer close for high-volume hospital radiography, but it remains genuine for low-volume and interim settings.",
  },
  {
    type: "p",
    text: "The practical decision for most hospitals is sequencing rather than selection: convert the rooms where volume and dose sensitivity concentrate, use retrofit detectors where the room hardware allows, keep a documented fallback during transition, and set an explicit date for retiring the last reader.",
  },
];
