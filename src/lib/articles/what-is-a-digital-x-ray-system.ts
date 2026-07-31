/**
 * What is a digital X-ray system — X-Ray cluster (pillar).
 */

import type { ContentBlock, TocItem } from "../blog";

export const WHAT_IS_DIGITAL_XRAY_TOC: TocItem[] = [
  { id: "overview", title: "What a Digital X-Ray System Is" },
  { id: "physics", title: "How X-Ray Imaging Works" },
  { id: "components", title: "Core Components" },
  { id: "configurations", title: "System Configurations" },
  { id: "workflow", title: "Clinical Workflow and Applications" },
  { id: "dose", title: "Dose, Image Quality and Safety" },
  { id: "planning", title: "Room Planning and Installation" },
  { id: "lifecycle", title: "Lifecycle, Service and Cost" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const WHAT_IS_DIGITAL_XRAY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Radiography is the highest-volume imaging service in almost every hospital in the world. A general X-ray room quietly performs more examinations in a week than the CT and MRI suites combined, and it is usually the first imaging any patient receives.",
      "Digital radiography replaced film and, later, computed radiography cassettes with flat panel detectors that convert X-rays into a digital image within seconds. That change did more than remove the darkroom: it altered workflow, dose management, image processing and the economics of running a radiography department.",
      "This guide explains how a digital X-ray system works, what its components do, how configurations differ, and what a hospital commits to in room planning, dose governance, service and lifecycle cost when it installs one.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "X-ray physics fundamentals, tube and generator design, flat panel detector technology, fixed and mobile configurations, clinical applications, dose optimisation, room planning and shielding, lifecycle and service considerations",
    audience:
      "Hospital administrators, radiology managers, radiographers, biomedical engineers, procurement teams and healthcare planners",
    readingTime: "16 min read",
    technology: "X-Ray Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "What a Digital X-Ray System Is",
    number: 1,
    body: "A digital X-ray system is a controlled X-ray source, a positioning structure and a digital detector, linked by an acquisition workstation that processes and distributes images.",
  },
  {
    type: "ul",
    items: [
      "The generator and tube produce a short, precisely controlled X-ray exposure.",
      "The patient attenuates the beam differently according to tissue density and thickness.",
      "A flat panel detector captures the transmitted pattern and converts it to a digital signal.",
      "Processing software applies corrections and presentation settings, producing the image the radiographer reviews within seconds.",
      "The image is sent to PACS with dose and technique data attached, and the examination is closed on the worklist.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Why digital changed practice, not just media",
    text: "Immediate image review means positioning errors are corrected while the patient is still in the room, which reduces repeat attendance. Digital processing also allows a wide range of exposures to produce a diagnostic image — which is a benefit for retake rates and a risk for dose creep, because overexposure no longer looks obviously wrong.",
  },
  {
    type: "h2",
    id: "physics",
    text: "How X-Ray Imaging Works",
    number: 2,
    body: "Radiography is a transmission technique: it maps how much of a beam survives its passage through the body.",
  },
  {
    type: "ul",
    items: [
      "X-rays are produced when high-energy electrons strike a metal anode inside the tube, generating both a continuous spectrum and characteristic radiation.",
      "Tube voltage (kV) determines beam energy and penetration, and therefore image contrast; tube current and time (mAs) determine the number of photons, and therefore image noise.",
      "Attenuation depends on tissue density, atomic number and thickness — bone attenuates far more than soft tissue, and air almost none.",
      "Scattered radiation degrades contrast; grids, collimation and air gaps reduce its contribution to the image.",
      "Filtration removes low-energy photons that would be absorbed in the patient without contributing to the image, lowering skin dose.",
      "The detector converts the transmitted photon pattern into an electrical signal, which is digitised and processed into the displayed radiograph.",
    ],
  },
  {
    type: "diagram",
    id: "mri-signal-chain",
    title: "The radiographic imaging chain",
    purpose: "Shows how a controlled X-ray exposure becomes a distributed digital radiograph, from generator and tube through the patient, grid and flat panel detector to processing and PACS.",
    alt: "Diagram of the radiographic imaging chain from generator and X-ray tube through patient, anti-scatter grid and flat panel detector to image processing and PACS distribution.",
    caption: "Each stage of the radiographic chain influences dose and image quality independently.",
  },
  {
    type: "h2",
    id: "components",
    text: "Core Components",
    number: 3,
    body: "The differences between systems that appear similar on a specification sheet usually lie in these components.",
  },
  {
    type: "table",
    headers: ["Component", "Function", "What matters in selection"],
    rows: [
      ["High-frequency generator", "Delivers accurate, reproducible exposures", "Power output, exposure reproducibility, shortest achievable exposure time"],
      ["X-ray tube", "Produces the beam", "Focal spot sizes, anode heat capacity, expected life at planned workload"],
      ["Collimator", "Restricts the beam to the region of interest", "Accuracy of light field, automatic collimation to detector size"],
      ["Flat panel detector", "Captures the image", "Conversion type, pixel pitch, detective quantum efficiency, size, wired or wireless"],
      ["Anti-scatter grid", "Improves contrast", "Grid ratio, removability, availability of software scatter correction"],
      ["Automatic exposure control", "Terminates exposure at target detector signal", "Chamber configuration, calibration stability across body regions"],
      ["Tube stand, table and wall stand", "Positioning geometry", "Range of movement, autopositioning, load capacity, bariatric provision"],
      ["Acquisition workstation", "Processing, review and distribution", "Processing quality, protocol management, DICOM and worklist integration"],
      ["Dose reporting", "Records exposure data", "Dose area product output, exposure index, structured dose reports to a registry"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Detector choice dominates image quality",
    text: "For a given exposure, detector efficiency determines how much dose is required to reach a target image quality. A more efficient panel allows lower technique factors for the same result — which is why detector specification, not generator power, is usually the decisive image quality parameter.",
  },
  {
    type: "h2",
    id: "configurations",
    text: "System Configurations",
    number: 4,
    body: "Radiography equipment is configured around where the patient is, and how many patients pass through per day.",
  },
  {
    type: "table",
    headers: ["Configuration", "Typical use", "Considerations"],
    rows: [
      ["Fixed ceiling-suspended system with table and wall stand", "High-volume general radiography", "Highest throughput and positioning flexibility; requires ceiling structure and full room build"],
      ["Fixed floor-mounted system", "General radiography where ceiling support is limited", "Lower structural demand; slightly reduced positioning range"],
      ["Straight-arm or U-arm system", "Compact departments, outpatient and screening clinics", "Smaller footprint, fast standard projections, less flexible for complex views"],
      ["Mobile radiography unit", "Intensive care, theatre, emergency, isolation", "Brings imaging to the patient; battery, manoeuvrability and infection control matter most"],
      ["Retrofit digital detector into an existing room", "Upgrading a functioning analogue or CR room", "Lowest capital route to digital; limited by the age of the generator and stand"],
      ["Dedicated chest unit", "Very high chest volumes, occupational screening", "Extremely fast for a narrow indication set"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Size the room to the workload, not the brochure",
    text: "A department performing two hundred examinations a day needs positioning speed, automatic tube tracking and robust detectors far more than it needs an unusual projection capability. Specify from an examination mix audit, not from a feature list.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "Clinical Workflow and Applications",
    number: 5,
    body: "General radiography carries the broadest indication range in imaging, which is why room availability affects the whole hospital.",
  },
  {
    type: "ul",
    items: [
      "Chest imaging for infection, cardiac failure, effusion, device position and pre-operative assessment.",
      "Skeletal imaging for trauma, fracture follow-up, arthritis and alignment assessment.",
      "Abdominal imaging for obstruction, perforation screening and foreign body localisation.",
      "Paediatric imaging, where dose optimisation and immobilisation practice matter most.",
      "Portable imaging in critical care and theatre, where the study is often the only imaging available at the bedside.",
      "Long-length and stitched imaging for spine and lower limb alignment on systems that support it.",
      "Occupational health and screening programmes, where throughput and consistency dominate.",
    ],
  },
  {
    type: "h2",
    id: "dose",
    text: "Dose, Image Quality and Safety",
    number: 6,
    body: "Radiography delivers low doses per examination, but its volume makes it a significant contributor to collective medical exposure — so optimisation matters at scale.",
  },
  {
    type: "ul",
    items: [
      "Justification and referral criteria come first: the largest dose saving is the examination that was not needed.",
      "Collimate to the clinical region. Over-collimation risks missing anatomy; under-collimation increases dose and scatter for no benefit.",
      "Use exposure index or deviation index monitoring to detect dose creep, which digital systems conceal because overexposed images still look acceptable.",
      "Set and audit body-region and paediatric protocols rather than relying on operator judgement per examination.",
      "Apply appropriate filtration and grid selection; using a grid where it is unnecessary raises dose without improving diagnosis.",
      "Maintain automatic exposure control calibration; a drifted chamber quietly raises dose on every examination it controls.",
      "Record dose data to a registry and review against national diagnostic reference levels with medical physics support.",
    ],
  },
  {
    type: "table",
    headers: ["Lever", "Effect on dose", "Effect on image quality"],
    rows: [
      ["Higher kV with reduced mAs", "Lower patient dose", "Lower contrast, adequate for many indications"],
      ["Detector with higher efficiency", "Lower dose for equal quality", "Maintained or improved"],
      ["Correct collimation", "Lower dose and less scatter", "Improved contrast"],
      ["Grid removal where appropriate (e.g. small extremities)", "Lower dose", "Acceptable; scatter contribution is small"],
      ["Increased source-to-image distance", "Lower entrance skin dose", "Neutral to improved geometry"],
      ["Repeat examination", "Doubles dose for that projection", "Only justified where the first was non-diagnostic"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Levers on radiographic dose and quality",
    clinicalInterpretation: "Dose optimisation in radiography is mostly protocol governance and positioning discipline, not equipment purchase — but detector efficiency sets the floor of what is achievable.",
    hospitalRecommendation: "Apply this as a documented departmental practice rather than as case-by-case judgement, and review it with medical physics and biomedical engineering at least annually.",
  },
  {
    type: "h2",
    id: "planning",
    text: "Room Planning and Installation",
    number: 7,
    body: "Radiography rooms are the simplest imaging installations, which is exactly why their requirements are sometimes underestimated.",
  },
  {
    type: "ul",
    items: [
      "Shielding designed by a qualified expert against planned workload, beam directions and occupancy of adjacent areas — including rooms above and below.",
      "Room dimensions that allow the required source-to-image distances, trolley access and staff movement around the patient.",
      "Ceiling structure verification for ceiling-suspended tube supports, obtained in writing before order confirmation.",
      "Control area with a protected viewing position and clear sight of the patient.",
      "Electrical supply matched to generator inrush demand, with correct earthing for a medical location.",
      "Doorway and route dimensions for trolleys, beds and bariatric patients.",
      "Network and PACS integration, worklist connectivity and dose registry configuration tested before go-live.",
      "Acceptance testing and a radiation protection survey before first clinical use, with the results retained.",
    ],
  },
  {
    type: "h2",
    id: "lifecycle",
    text: "Lifecycle, Service and Cost",
    number: 8,
    body: "Radiography has the lowest capital cost of the major modalities and the highest utilisation, so availability and consumable-free reliability drive its economics.",
  },
  {
    type: "ul",
    items: [
      "The X-ray tube is the principal wear item; its life depends on workload and technique discipline.",
      "Flat panel detectors are the highest-value replaceable component, and portable detectors are vulnerable to drop damage — a dedicated damage cover clause is worth pricing.",
      "Service contract scope should state detector cover, tube cover, software updates and response time explicitly.",
      "Software and cybersecurity support duration determines how long the system can remain on the hospital network safely.",
      "Because a general room may be the department's only route for inpatient and emergency radiography, downtime cost is measured in hospital-wide delays rather than in departmental revenue.",
      "Planned replacement should be driven by detector condition, software support status and dose performance rather than by age alone.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "What is the difference between digital radiography and computed radiography?",
        a: "Computed radiography uses a reusable storage phosphor cassette that must be carried to a reader, while digital radiography uses a flat panel detector that produces the image directly at the point of exposure. Digital radiography is faster, generally more dose-efficient and better integrated into workflow; computed radiography survives mainly as a low-cost or transitional solution.",
      },
      {
        q: "How many examinations can one general radiography room perform per day?",
        a: "Throughput depends on examination mix, positioning complexity, patient mobility and staffing rather than on the equipment alone. Simple ambulatory chest and extremity work is very fast; trolley-based inpatient and trauma work is several times slower. Capacity planning should be built from a local examination mix audit.",
      },
      {
        q: "Is a wireless detector better than a wired one?",
        a: "Wireless detectors improve positioning freedom and are essential for mobile and trolley work, but they add battery management and a higher risk of drop damage. Many departments use a fixed detector in the table and wall stand plus a wireless panel for flexible and bedside work.",
      },
      {
        q: "Does digital radiography reduce patient dose?",
        a: "It can, because modern detectors are more dose-efficient and immediate review reduces repeats. However, digital processing masks overexposure, so without exposure index monitoring and protocol governance doses can drift upward over time. The technology enables lower dose; the department's practice delivers it.",
      },
      {
        q: "Can an existing analogue room be upgraded rather than replaced?",
        a: "Often yes — a retrofit detector and workstation can digitise a mechanically sound room at a fraction of the cost of a full replacement. The limits are generator age and accuracy, mechanical condition, availability of automatic exposure control integration and how long parts support will continue.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning a digital radiography room?",
    subheading:
      "AbuFarha Medical supplies, installs, commissions and supports digital X-ray systems, and advises hospitals on configuration, room planning and long-term service.",
    technology: "X-Ray Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Radiography protocols and workflow" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "X-ray installation, commissioning and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "IEC equipment standards, ICRP and IAEA radiation protection guidance, and manufacturer installation documentation",
    disclaimer:
      "Technique factors, dose reference levels and shielding requirements are jurisdiction- and system-specific. Follow local regulation, manufacturer documentation and the advice of a qualified medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Radiation protection and dose",
        items: [
          { label: "ICRP recommendations on radiological protection in medicine" },
          { label: "IAEA guidance on diagnostic reference levels and radiography dose optimisation" },
        ],
      },
      {
        title: "Equipment standards",
        items: [
          { label: "IEC 60601-1 and the IEC 60601-2 series for diagnostic X-ray equipment" },
          { label: "IEC 62220 series — determination of detective quantum efficiency for digital detectors" },
        ],
      },
      {
        title: "Installation and facilities",
        items: [
          { label: "IEC 60364-7-710 — electrical installations in medical locations" },
          { label: "Manufacturer pre-installation, structural and shielding documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "A digital X-ray system is a generator, tube, positioning structure, flat panel detector and acquisition workstation working as one imaging chain.",
      "kV governs contrast and penetration; mAs governs noise; collimation and grids govern scatter.",
      "Detector efficiency sets the achievable dose floor for a given image quality — it is the decisive specification.",
      "Configuration should follow an examination mix audit: fixed, compact, mobile or retrofit.",
      "Digital systems hide overexposure, so exposure index monitoring and protocol governance are essential to prevent dose creep.",
      "Room planning requires expert shielding design, verified ceiling structure, adequate dimensions and tested PACS integration.",
      "Lifecycle cost is dominated by tube and detector replacement, service scope and software support duration.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "Radiography is the workhorse of hospital imaging, and its quality depends on unglamorous discipline: detector choice, protocol governance, positioning practice and reliable service.",
  },
  {
    type: "p",
    text: "A well-specified digital X-ray room delivers more diagnostic value per unit of capital than any other imaging installation in the hospital. Getting it right means specifying the detector carefully, planning the room properly, governing dose actively and contracting for the components that actually fail.",
  },
];
