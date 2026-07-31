/**
 * "What Is a CT Scanner?" — pillar article content.
 */

import type { ContentBlock, TocItem } from "../blog";
import solCt from "@/assets/sol-ct.jpg";

export const WHAT_IS_A_CT_SCANNER_TOC: TocItem[] = [
  { id: "overview", title: "CT Defined" },
  { id: "history", title: "A Short History of CT" },
  { id: "how-it-works", title: "How a CT Scanner Works" },
  { id: "components", title: "Inside the Machine: Core Components" },
  { id: "helical-acquisition", title: "Helical Acquisition and Pitch" },
  { id: "reconstruction", title: "Reconstruction: From Raw Data to Image" },
  { id: "hounsfield-units", title: "Hounsfield Units and Windowing" },
  { id: "clinical-applications", title: "Clinical Applications by Specialty" },
  { id: "radiation-dose", title: "Radiation Dose and ALARA" },
  { id: "patient-journey", title: "The Patient Journey" },
  { id: "hospital-planning", title: "What Hospitals Must Plan For" },
  { id: "maintenance", title: "Maintenance and Service Life" },
  { id: "cost", title: "Cost of Ownership" },
  { id: "comparison", title: "CT vs MRI vs Ultrasound vs PET/CT" },
  { id: "future", title: "Where CT Is Heading" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const WHAT_IS_A_CT_SCANNER_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solCt,
    imageAlt: "Modern CT scanner installed in a hospital imaging suite",
    paragraphs: [
      "A computed tomography (CT) scanner is a diagnostic imaging system that rotates an X-ray tube and a row of detectors around a patient to acquire many two-dimensional projections from different angles, which a computer then reconstructs into cross-sectional — and ultimately three-dimensional — images of bone, soft tissue, vessels and organs. It remains the fastest way to answer the questions that dominate emergency and surgical decision-making: is there a bleed, a fracture, a bowel perforation, a pulmonary embolism, an aortic dissection?",
      "For a hospital, a CT scanner is simultaneously a clinical workhorse, a radiation-safety programme, a structural and shielding project, and a service commitment spanning a decade or more. Unlike MRI, CT does not require a magnetically shielded room or cryogens, which makes siting comparatively simpler — but it introduces its own non-negotiables: lead-lined walls calculated by a qualified medical physicist, a dedicated power supply for the X-ray generator, and a dose-management culture built around the ALARA principle (as low as reasonably achievable).",
      "This guide explains the physics in plain language, walks through every major subsystem from the gantry to the data acquisition system, describes how helical acquisition and modern reconstruction turn raw projections into diagnostic images, and then addresses the questions hospital planners actually ask: what does a CT suite need structurally, what breaks, and what does a realistic cost-of-ownership picture look like.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "CT physics, gantry and detector architecture, helical scanning, image reconstruction, Hounsfield units, radiation dose, siting and cost of ownership",
    audience:
      "Hospital directors, procurement managers, radiologists, radiographers and biomedical engineers",
    readingTime: "15 min read",
    technology: "Computed Tomography (CT)",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "CT Defined",
    body: "A CT scanner uses a rotating X-ray source and detector array to acquire multiple projection images through the body, which are mathematically reconstructed into cross-sectional slices that can be displayed, stacked and rendered in any plane.",
  },
  {
    type: "ul",
    items: [
      "It images tissue density, not tissue chemistry. Every voxel is assigned a Hounsfield Unit (HU) value describing how strongly that tissue attenuates X-rays relative to water — the same physical property a conventional X-ray measures, but captured from hundreds of angles and reconstructed into a true cross-section rather than a superimposed shadow.",
      "It is fast by design. A single rotation now takes well under a second on most clinical systems, which is why CT — not MRI — is the default modality for trauma, stroke and acute chest/abdomen presentations where speed and motion tolerance matter more than soft-tissue contrast.",
      "It uses ionising radiation. Every CT acquisition delivers a radiation dose to the patient, so protocol design, automatic exposure control and dose-tracking software are not optional extras — they are the core discipline that separates a well-run CT service from a liability.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "CT measures X-ray attenuation and expresses it in Hounsfield Units, anchored to water (0 HU) and air (-1000 HU).",
      "Helical (spiral) acquisition with continuous table movement is now the default mode for almost all clinical CT scanning.",
      "Detector rows and reconstructed slices are related but distinct concepts — more on this in the companion slice-count article.",
      "Radiation dose is manageable and shrinking through automatic exposure control and iterative/AI reconstruction, but it must be actively governed, not assumed.",
      "Siting is simpler than MRI — no magnetic shielding or cryogens — but shielding calculations, power and HVAC are still specialist civil-engineering tasks.",
      "Tube and detector wear, not software, are the dominant long-run cost and downtime drivers.",
    ],
  },
  {
    type: "editorialBoard",
    reviewers: [
      {
        role: "Medical reviewer",
        name: "AbuFarha Clinical Advisory Panel",
        credential: "Consultant radiologists advising on diagnostic imaging pathways",
      },
      {
        role: "Biomedical engineer",
        name: "AbuFarha Biomedical Engineering Team",
        credential: "Field service engineers for CT, MRI, cath lab and PET/CT installations",
      },
      {
        role: "Technical editor",
        name: "AbuFarha Knowledge Center Editorial Team",
        credential: "Medical technology editors, Amman, Jordan",
      },
      {
        role: "Radiation safety specialist",
        name: "AbuFarha Applications & Training Team",
        credential: "CT dose optimisation and protocol training",
      },
    ],
    lastReviewed: "July 2026",
    nextReview: "July 2027",
    version: "1.0",
    evidenceLevel:
      "Level A — international standards, peer-reviewed literature and manufacturer documentation",
    disclaimer:
      "This article is written for hospital decision-makers, clinicians and biomedical engineers as educational reference material. It is not a substitute for professional medical advice, diagnosis or treatment, nor for manufacturer instructions for use, national regulations or site-specific engineering assessment.",
  },
  {
    type: "h2",
    id: "history",
    number: 2,
    text: "A Short History of Computed Tomography",
    body: "The mathematics of reconstructing an image from projections dates to Johann Radon's 1917 transform, but clinical CT did not exist until computing power caught up with the theory.",
  },
  {
    type: "p",
    text: "Godfrey Hounsfield, working at EMI, and Allan Cormack, working independently on the underlying mathematics, are credited with translating theory into a working clinical scanner. The first patient head scan was performed in 1971, and Hounsfield and Cormack shared the 1979 Nobel Prize in Physiology or Medicine. Early systems took minutes per slice and acquired one slice at a time.",
  },
  {
    type: "p",
    text: "Helical (spiral) scanning, introduced commercially in the early 1990s, allowed the table to move continuously through the rotating gantry, collecting a continuous volume of data instead of discrete slices. Multi-detector-row CT followed later that decade, acquiring several slices per rotation instead of one. The 2000s and 2010s brought iterative and then deep-learning-based reconstruction, which recovers image quality at substantially lower radiation dose than the filtered back-projection methods used for the technology's first three decades.",
  },
  {
    type: "h2",
    id: "how-it-works",
    number: 3,
    text: "How a CT Scanner Works",
    image: solCt,
    imagePosition: "right",
    imageAlt: "CT gantry and patient table in a hospital imaging suite",
    body: "Four steps convert X-ray attenuation into a diagnostic image: generation, transmission, detection and reconstruction.",
  },
  { type: "h3", text: "Generation" },
  {
    type: "p",
    text: "An X-ray tube mounted inside the rotating gantry produces a fan- or cone-shaped beam of X-ray photons. The tube's kilovoltage (kVp) sets the energy — and therefore the penetrating power — of the beam, while the tube current (mA) and exposure time set how many photons are produced. Together they are the two primary levers used to balance image quality against radiation dose.",
  },
  { type: "h3", text: "Transmission and Attenuation" },
  {
    type: "p",
    text: "As the beam passes through the body, different tissues absorb and scatter photons to different degrees depending on their density and atomic composition — dense cortical bone attenuates strongly, air-filled lung attenuates almost none, and soft tissue sits in between. The beam that emerges on the far side is a projection: a single 2D shadow that, on its own, tells you nothing about depth.",
  },
  { type: "h3", text: "Detection" },
  {
    type: "p",
    text: "A curved array of solid-state detectors, mounted directly opposite the tube on the rotating gantry, measures the intensity of the transmitted beam at extremely fine angular and spatial intervals. The gantry completes a full rotation in well under a second on modern systems, and the detector array captures thousands of measurements per rotation. Each of these raw measurements passes through the data acquisition system (DAS), which digitises the detector signal and hands it to the reconstruction computer.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The DAS is where analogue becomes digital",
    text: "The data acquisition system sits physically on the rotating gantry, converting each detector's analogue current into a digital value fast enough to keep pace with sub-second rotation. It is one of the most mechanically stressed electronic subsystems in any CT scanner, spinning continuously at high g-forces, and its failure is a common cause of banding or ring artefacts in the reconstructed image.",
  },
  { type: "h3", text: "Reconstruction" },
  {
    type: "p",
    text: "With projections collected from hundreds of angles around the patient, a reconstruction algorithm — historically filtered back-projection, now typically iterative or deep-learning-based — calculates the attenuation value of every voxel in the scanned volume. The result is a 3D dataset that can be displayed as axial slices, reformatted into coronal or sagittal planes, or rendered as a 3D volume for surgical planning.",
  },
  {
    type: "diagram",
    id: "scanning-process",
    title: "From X-ray projection to diagnostic image",
    purpose: "Shows the four-stage physical chain that converts rotating X-ray projections into a reconstructed CT image.",
    alt: "Four-stage flow diagram: X-ray tube generation of the beam, transmission and attenuation through the patient, detection of transmitted photons by the detector array and data acquisition system, and computer reconstruction into cross-sectional images.",
    caption: "Figure 1 — The CT imaging chain. Rotation speed and detector configuration set the practical limits on temporal and spatial resolution.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Rotation speed drives temporal resolution",
    text: "Gantry rotation time — commonly in the 0.25 to 0.5 second range on modern systems — sets the temporal resolution of a single acquisition. This matters most for cardiac and paediatric imaging, where a moving heart or a non-cooperative child can blur an otherwise well-designed protocol. Rotation speed is fixed by the mechanical engineering of the gantry and cannot be upgraded after purchase, which is why it belongs in the tender specification, not the post-purchase wish list.",
  },
  {
    type: "h2",
    id: "components",
    number: 4,
    text: "Inside the Machine: Core Components",
    body: "A CT installation is a system of subsystems, and — as with MRI — most clinical downtime originates outside the imaging chain's headline specification.",
  },
  {
    type: "table",
    caption: "Major CT subsystems and their engineering implications",
    headers: ["Component", "Function", "Engineering note"],
    rows: [
      [
        "X-ray tube",
        "Generates the X-ray beam",
        "The single highest-wear, highest-cost consumable component; rated by heat capacity and expected exposure lifespan",
      ],
      [
        "Generator",
        "Supplies high voltage and current to the tube",
        "Determines maximum kVp/mA combinations and how fast exposure parameters can change mid-scan",
      ],
      [
        "Gantry",
        "Rotates the tube and detector array around the patient",
        "Rotation speed and bore diameter (typically 70–80 cm) are fixed at purchase and cannot be retrofitted",
      ],
      [
        "Detector array",
        "Measures transmitted X-ray intensity",
        "Number of detector rows determines how many slices are acquired per rotation — the subject of slice-count comparisons",
      ],
      [
        "Data acquisition system (DAS)",
        "Digitises detector signal on the rotating gantry",
        "Operates under continuous rotational stress; a common source of ring or banding artefacts when degraded",
      ],
      [
        "Patient table",
        "Positions and advances the patient through the bore",
        "Table speed and load capacity affect helical pitch options and bariatric capability",
      ],
      [
        "Reconstruction engine",
        "Converts raw projection data into images",
        "Increasingly runs iterative or deep-learning algorithms that materially reduce dose at equal image quality",
      ],
      [
        "Console and workstation",
        "Protocol control, review, PACS export",
        "Protocol library management here is where most avoidable dose variation actually originates",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Only two rows in this table describe the imaging chain's headline specification (tube and detector array). Generator capacity, gantry rotation speed and reconstruction software determine what a system can actually do clinically, and they are frequently under-specified in tender documents that focus only on slice count.",
    clinicalInterpretation: "A high slice-count system paired with a weak generator or slow rotation will still struggle with cardiac or trauma imaging; conversely, a modest slice-count system with strong iterative reconstruction can deliver excellent low-dose image quality for routine work.",
    hospitalRecommendation: "Specify generator power (kW), gantry rotation time and reconstruction software generation explicitly in procurement documents, and require the vendor to quote tube replacement cost and expected exposure life as a distinct line item.",
  },
  {
    type: "callout",
    variant: "important",
    title: "The X-ray tube is a wearing part, not a fixed asset",
    text: "Unlike an MRI magnet, a CT X-ray tube has a finite exposure life measured in heat units and will eventually need replacement — a planned, budgeted capital event, not a failure.",
  },
  {
    type: "h2",
    id: "helical-acquisition",
    number: 5,
    text: "Helical Acquisition and Pitch",
    body: "Almost all routine clinical CT scanning today uses helical (spiral) acquisition, in which the gantry rotates continuously while the table advances through the bore at a constant speed.",
  },
  {
    type: "p",
    text: "The relationship between table travel per rotation and beam width is described by pitch. A pitch of 1 means the table advances exactly one beam-width per rotation, giving contiguous coverage with minimal overlap. A pitch below 1 oversamples the volume, improving image quality and reducing artefact at the cost of dose; a pitch above 1 covers more anatomy faster, trading some image quality and dose efficiency for speed — useful in trauma or paediatric cases where breath-holding or sedation time is limited.",
  },
  {
    type: "p",
    text: "Helical acquisition made true volumetric imaging routine: because there is no gap between slices, the resulting dataset can be reformatted into any plane, rendered in 3D, or used to generate CT angiography and virtual endoscopy studies without re-scanning the patient. Axial (step-and-shoot) scanning still exists for specific low-dose applications such as some cardiac and paediatric protocols, but it is now the exception rather than the rule.",
  },
  {
    type: "h2",
    id: "reconstruction",
    number: 6,
    text: "Reconstruction: From Raw Data to Image",
    body: "The choice of reconstruction algorithm affects image noise, spatial resolution and radiation dose independently of the acquisition itself.",
  },
  { type: "h3", text: "Filtered Back-Projection" },
  {
    type: "p",
    text: "The original CT reconstruction method mathematically 'smears' each projection back across the image space and sums the results. It is fast and predictable but produces more image noise for a given dose than newer methods, which is why systems relying on it alone generally require higher radiation exposure to achieve equivalent diagnostic image quality.",
  },
  { type: "h3", text: "Iterative Reconstruction" },
  {
    type: "p",
    text: "Iterative algorithms compare a provisional reconstructed image against the raw projection data repeatedly, refining the result and suppressing noise that does not match the expected statistical model of the acquisition. This allows meaningfully lower radiation dose at equivalent image quality and is now standard across current-generation CT platforms, with the degree of noise suppression varying by manufacturer and software generation.",
  },
  { type: "h3", text: "Deep-Learning Reconstruction" },
  {
    type: "p",
    text: "The newest generation of reconstruction software uses trained neural networks to differentiate genuine anatomical structure from noise, further reducing dose or scan time at a given image-quality target. Performance varies by vendor and training dataset, and hospitals should request institution-relevant validation data rather than accepting marketing claims at face value.",
  },
  {
    type: "h2",
    id: "hounsfield-units",
    number: 7,
    text: "Hounsfield Units and Windowing",
    body: "Every reconstructed CT voxel carries a Hounsfield Unit value — a standardised measure of X-ray attenuation, named after Godfrey Hounsfield, anchored so that water reads 0 HU and air reads -1000 HU.",
  },
  {
    type: "table",
    caption: "Representative Hounsfield Unit ranges by tissue type",
    headers: ["Tissue / material", "Typical HU range", "Clinical relevance"],
    rows: [
      ["Air", "≈ -1000", "Lung parenchyma, bowel gas, pneumothorax"],
      ["Fat", "-120 to -90", "Fatty infiltration, lipomas"],
      ["Water", "0 (by definition)", "Calibration reference point"],
      ["Soft tissue / muscle", "10 to 40", "Most organ parenchyma"],
      ["Blood (acute)", "50 to 75", "Acute haemorrhage detection"],
      ["Cortical bone", "700 to 3000", "Fracture, calcification, dense implants"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "HU values are consistent across scanners and vendors by design, which is why CT — unlike MRI signal intensity — can be quoted as an absolute, reproducible number in a radiology report.",
    clinicalInterpretation: "A liver lesion that measures near water density is far more likely to be a simple cyst than one measuring near soft-tissue density, and HU thresholds materially change management pathways for adrenal and renal incidentalomas.",
    hospitalRecommendation: "Ensure CT systems undergo regular HU calibration as part of routine quality assurance, since drift in the scale undermines every downstream density-based clinical decision.",
  },
  {
    type: "p",
    text: "Because the HU scale spans roughly 4000 values while a display can only show a few hundred shades of grey usefully, radiologists apply a window: a centre value and a width that determine which HU range is stretched across the visible greyscale. A 'lung window' is centred low and wide to show air-filled parenchyma; a 'bone window' is centred high to reveal fine trabecular detail; a 'soft-tissue window' is centred near 40 HU to separate organs and fluid. The same raw dataset can be windowed differently for different clinical questions without re-scanning the patient.",
  },
  {
    type: "h2",
    id: "clinical-applications",
    number: 8,
    text: "Clinical Applications by Specialty",
    body: "CT's speed and volumetric coverage make it the default modality across almost every acute-care pathway.",
  },
  {
    type: "comparison",
    title: "CT applications by clinical area",
    headers: ["Specialty", "Common indications", "Why CT is preferred"],
    rows: [
      [
        "Emergency and trauma",
        "Polytrauma survey, intracranial haemorrhage, solid organ injury",
        "Whole-body coverage in minutes, high sensitivity for acute bleeding and fracture",
      ],
      [
        "Neurology and stroke",
        "Acute stroke triage, CT angiography, CT perfusion",
        "Rapid exclusion of haemorrhage before thrombolysis; perfusion maps guide intervention timing",
      ],
      [
        "Cardiology",
        "Coronary CT angiography, calcium scoring",
        "Non-invasive alternative to diagnostic catheter angiography for suitable patients, dependent on adequate temporal resolution",
      ],
      [
        "Oncology",
        "Staging, surveillance, radiotherapy planning",
        "Reproducible volumetric measurement and direct integration with radiotherapy planning systems",
      ],
      [
        "Pulmonology",
        "Pulmonary embolism, interstitial lung disease, lung cancer screening",
        "Sub-millimetre resolution of lung parenchyma and vasculature in a single breath-hold",
      ],
      [
        "Musculoskeletal / surgical planning",
        "Complex fractures, pre-operative 3D modelling",
        "Bone detail and 3D reconstruction unmatched by other modalities",
      ],
    ],
  },
  {
    type: "h2",
    id: "radiation-dose",
    number: 9,
    text: "Radiation Dose and ALARA",
    body: "CT delivers a real, cumulative radiation dose, and every credible clinical and regulatory framework requires that dose be justified, optimised and tracked.",
  },
  {
    type: "p",
    text: "The ALARA principle — as low as reasonably achievable — governs CT protocol design worldwide, reflected in guidance from bodies such as the IAEA, ICRP, IEC and, in the United States, the American College of Radiology's Dose Index Registry. Practically, dose is managed through automatic exposure control (which adjusts mA in real time as the gantry rotates around varying patient anatomy), age- and size-appropriate paediatric protocols, iterative or deep-learning reconstruction, and organ-specific shielding where clinically appropriate.",
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Dose is a departmental discipline, not a single setting",
    items: [
      "Maintain a size- and indication-specific protocol library rather than one generic adult protocol scaled up or down",
      "Track dose metrics (CTDIvol, DLP) per protocol and audit outliers regularly",
      "Apply paediatric-specific protocols and, where appropriate, weight-based dose reduction",
      "Justify every examination against clinical indication before scheduling, particularly for repeat or surveillance imaging",
    ],
  },
  {
    type: "p",
    text: "Reference dose levels — diagnostic reference levels (DRLs) published by national and international bodies — give departments a benchmark against which their own protocols can be compared, without dictating exact settings that must vary by patient size and scanner model.",
  },
  {
    type: "h2",
    id: "patient-journey",
    number: 10,
    text: "The Patient Journey",
    body: "A typical CT examination is short — often under fifteen minutes of table time — but the surrounding workflow determines throughput and safety.",
  },
  {
    type: "diagram",
    id: "patient-journey",
    title: "The CT patient journey",
    purpose: "Traces the patient's path from referral through scanning to report, highlighting where contrast screening and dose checks occur.",
    alt: "Flow diagram showing referral and clinical justification, patient check-in and screening for contrast allergy and renal function, positioning on the table, scout scan and protocol selection, contrast injection where indicated, helical acquisition, reconstruction and radiologist reporting.",
    caption: "Figure 2 — The CT patient journey. Contrast screening and protocol justification are the two steps most often rushed under throughput pressure.",
  },
  {
    type: "p",
    text: "Before scanning, staff confirm clinical indication, screen for contrast allergy and renal function where iodinated contrast is planned, and position the patient. A low-dose scout scan establishes anatomical landmarks before the diagnostic acquisition runs. Where contrast is used, a power injector delivers a precisely timed bolus synchronised to the scan to capture arterial, portal-venous or delayed phases as the clinical question requires. Reconstruction typically completes within seconds to a few minutes, after which images are transferred to PACS for radiologist review.",
  },
  {
    type: "h2",
    id: "hospital-planning",
    number: 11,
    text: "What Hospitals Must Plan For",
    body: "CT siting is structurally simpler than MRI, but it is still a specialist project, not a plug-and-play installation.",
  },
  {
    type: "requirements",
    checklist: [
      "Radiation shielding calculated by a qualified medical physicist for walls, doors, control window and adjacent occupied spaces",
      "Dedicated electrical supply sized for generator peak demand, with power quality suitable for the X-ray generator",
      "HVAC sized for gantry and generator heat load, since CT electronics are heat-sensitive even without cryogenics",
      "Floor loading assessment, particularly for upper-floor installations given gantry and table weight",
      "Delivery and rigging access for the gantry, which is typically the heaviest single component",
      "Contrast injector plumbing, storage and disposal workflow integrated into room layout",
      "PACS/RIS network connectivity and workstation placement for the control room",
    ],
    specs: {
      title: "Typical CT suite planning parameters",
      rows: [
        { label: "Room size", value: "Varies by manufacturer and configuration; typically comparable to or smaller than an MRI suite" },
        { label: "Shielding", value: "Lead-lined walls, door and viewing window per physicist calculation" },
        { label: "Ceiling height clearance", value: "Sufficient for gantry installation and servicing access" },
        { label: "Power", value: "Dedicated circuit sized to generator specification, typically requiring a transformer" },
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Shielding is a physicist's calculation, not a rule of thumb",
    text: "Required shielding thickness depends on workload, occupancy factors of adjacent areas, tube kVp range and room geometry — it varies by site and cannot be estimated from a generic wall-thickness table. Engage a qualified medical physicist or radiation protection adviser during design, before walls are built.",
  },
  {
    type: "h2",
    id: "maintenance",
    number: 12,
    text: "Maintenance and Service Life",
    body: "Preventive maintenance on a CT system centres on the two components under the greatest mechanical and thermal stress: the X-ray tube and the gantry's rotating assembly.",
  },
  {
    type: "ul",
    items: [
      "X-ray tube condition and remaining heat capacity should be tracked continuously; tube replacement is a planned capital event, not an emergency if monitored proactively.",
      "Slip-ring contacts, bearings and the DAS on the rotating gantry require scheduled inspection given continuous rotational stress at high g-forces.",
      "Detector calibration and HU accuracy should be verified on a routine quality-assurance schedule, since drift silently degrades diagnostic reliability.",
      "Cooling system performance (chiller or air-cooled heat exchanger) directly affects tube life and should be included in preventive maintenance visits.",
      "Software and reconstruction engine updates should be validated clinically before deployment, since dose and image-quality behaviour can shift with new algorithm versions.",
    ],
  },
  {
    type: "h2",
    id: "cost",
    number: 13,
    text: "Cost of Ownership",
    body: "Purchase price is the visible number; tube replacement, service contracts, contrast media, staffing and downtime determine the real ten-year cost.",
  },
  {
    type: "table",
    caption: "Representative CT cost-of-ownership categories",
    headers: ["Cost category", "Nature of the cost", "Planning note"],
    rows: [
      ["Capital purchase", "One-time", "Varies substantially by slice count, generator power and reconstruction software tier"],
      ["Site preparation and shielding", "One-time", "Depends on existing structure; new-build shell-space fit-outs are typically cheaper than retrofits"],
      ["Service contract", "Recurring, annual", "Should specify response time, parts coverage and preventive maintenance visit frequency explicitly"],
      ["X-ray tube replacement", "Periodic, capital-like", "Budget as a planned recurring expense rather than an unplanned repair"],
      ["Contrast media and injector supplies", "Recurring, consumable", "Scales directly with patient volume and protocol mix"],
      ["Staffing", "Recurring, ongoing", "Radiographer and radiologist time; throughput efficiency affects staffing ratio needs"],
      ["Software upgrades", "Periodic", "Reconstruction and dose-management software updates increasingly delivered as paid upgrade cycles"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Tube replacement is the cost category most often missing from initial hospital budgets, despite being entirely predictable from expected patient volume and protocol mix.",
    clinicalInterpretation: "Underfunded tube replacement budgets are a leading cause of unplanned CT downtime in departments with high trauma or emergency throughput.",
    hospitalRecommendation: "Request tube warranty terms, expected exposure life and replacement cost as explicit tender line items, and build a sinking fund for the expected replacement cycle rather than treating it as a surprise capital request.",
  },
  {
    type: "h2",
    id: "comparison",
    number: 14,
    text: "CT vs MRI vs Ultrasound vs PET/CT",
    body: "Each modality answers a different class of clinical question, and a well-run hospital deploys them in combination rather than treating any one as universally superior.",
  },
  {
    type: "comparison",
    title: "Modality comparison at a glance",
    headers: ["Modality", "Best for", "Key limitation"],
    rows: [
      ["CT", "Speed, trauma, bone, acute bleeding, whole-body coverage", "Ionising radiation; lower soft-tissue contrast than MRI"],
      ["MRI", "Soft-tissue contrast, neuro, MSK, no ionising radiation", "Slow, expensive to site, contraindicated for some implants"],
      ["Ultrasound", "Real-time, portable, no radiation, first-line obstetric and vascular imaging", "Operator-dependent, limited penetration through bone and gas"],
      ["PET/CT", "Functional and metabolic imaging, oncology staging", "Highest cost and complexity; requires radiotracer logistics"],
    ],
  },
  {
    type: "h2",
    id: "future",
    number: 15,
    text: "Where CT Is Heading",
    body: "Two developments are reshaping CT practice: photon-counting detector technology and AI-driven reconstruction and triage.",
  },
  {
    type: "p",
    text: "Photon-counting CT detectors count individual X-ray photons and measure their energy directly, rather than integrating charge as conventional scintillator-based detectors do. This offers improved spatial resolution, better spectral (multi-energy) discrimination between tissue types, and potential dose reduction, and is progressively entering clinical availability across manufacturers at varying pace.",
  },
  {
    type: "p",
    text: "AI is expanding beyond reconstruction into automated triage — flagging suspected intracranial haemorrhage or pulmonary embolism for urgent radiologist review — and into automated protocoling and dose optimisation. As with any AI clinical tool, deployment should be validated against local patient populations and used to support, not replace, radiologist judgement.",
  },
  {
    type: "knowledgeBox",
    variant: "future-technology",
    title: "Spectral CT is becoming mainstream, not niche",
    text: "Dual-energy and photon-counting spectral CT — which separate materials by their energy-dependent attenuation rather than density alone — are moving from specialist research platforms into routine clinical protocols for tasks such as kidney stone characterisation, gout detection and metal artefact reduction.",
  },
  { type: "h2", id: "faq", number: 16, text: "Frequently Asked Questions" },
  {
    type: "faq",
    items: [
      { q: "How long does a CT scan take?", a: "The acquisition itself is typically under a minute, often just seconds; total appointment time including positioning, contrast administration and post-scan monitoring is usually 10 to 30 minutes." },
      { q: "Is CT the same as an X-ray?", a: "Both use X-rays, but a conventional X-ray produces a single flat projection while CT rotates the source around the patient to reconstruct true cross-sectional images, at a correspondingly higher radiation dose." },
      { q: "Does every CT scan require contrast?", a: "No. Many indications — lung parenchyma assessment, skeletal trauma, kidney stones — are well evaluated without contrast; contrast is added specifically to characterise vascular, soft-tissue or perfusion questions." },
      { q: "Is CT radiation dose dangerous?", a: "Individual CT doses carry a small, statistically estimated lifetime risk that varies with age, body region and protocol; departments manage this through justification, optimisation and dose tracking rather than avoiding indicated scans." },
      { q: "What is the difference between detector rows and reconstructed slices?", a: "Detector rows are a physical hardware count; reconstructed slices are a software output that can exceed the physical row count through interpolation. This distinction is covered in depth in our companion slice-count comparison article." },
      { q: "Can CT see soft tissue as well as MRI?", a: "No. CT differentiates tissues primarily by density, so contrast between soft tissues of similar density is inherently lower than MRI, which differentiates by molecular and chemical environment." },
      { q: "How often does the X-ray tube need replacing?", a: "It varies by manufacturer, tube rating and patient volume; high-throughput trauma centres typically see shorter tube life than low-volume outpatient sites." },
      { q: "What is a scout scan?", a: "A brief, low-dose preliminary image used to plan the scan range and check patient positioning before the full diagnostic acquisition." },
      { q: "Does CT require a magnetically shielded room like MRI?", a: "No. CT has no magnetic field and no cryogens; its principal structural requirement is radiation shielding calculated by a medical physicist." },
      { q: "What is ALARA?", a: "As low as reasonably achievable — the guiding radiation-safety principle requiring that every exposure be clinically justified and optimised to the lowest dose consistent with the diagnostic task." },
      { q: "Can CT be used in pregnancy?", a: "It varies by indication and gestational stage; clinical benefit must be weighed against risk on a case-by-case basis, generally in consultation with a radiologist and referring clinician." },
      { q: "What is the role of iterative and AI reconstruction?", a: "They reduce image noise for a given radiation dose compared with older filtered back-projection methods, allowing departments to lower dose while maintaining diagnostic image quality." },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    number: 17,
    text: "Conclusion",
    body: "CT remains, decades after its invention, the fastest and most widely available route to a definitive cross-sectional diagnosis — and for hospitals, a well-planned CT service is as much about shielding, dose governance and tube-lifecycle budgeting as it is about the scanner itself.",
  },
  {
    type: "articleCta",
    heading: "Planning or upgrading a CT service?",
    subheading: "Our biomedical engineering team supports hospitals through CT specification, siting and lifecycle service planning.",
    technology: "Computed Tomography (CT)",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Radiation protection standards",
        items: [
          { label: "International Atomic Energy Agency (IAEA) — Radiation Protection in Diagnostic and Interventional Radiology", url: "https://www.iaea.org" },
          { label: "International Commission on Radiological Protection (ICRP) — Publications on diagnostic imaging dose", url: "https://www.icrp.org" },
        ],
      },
      {
        title: "Technical and equipment standards",
        items: [
          { label: "IEC 60601-2-44 — Particular requirements for the safety of X-ray equipment for computed tomography", url: "https://www.iec.ch" },
          { label: "NEMA XR standards for CT dose and performance reporting", url: "https://www.nema.org" },
        ],
      },
      {
        title: "Clinical and dose optimisation guidance",
        items: [
          { label: "American College of Radiology (ACR) — CT Accreditation Program and Dose Index Registry", url: "https://www.acr.org" },
          { label: "American Association of Physicists in Medicine (AAPM) — CT dose and protocol optimisation reports", url: "https://www.aapm.org" },
          { label: "World Health Organization (WHO) — Communicating radiation risks in paediatric imaging", url: "https://www.who.int" },
        ],
      },
    ],
    note: "Guidance and dose reference levels vary by jurisdiction; hospitals should confirm current national regulatory requirements alongside the international frameworks listed above.",
  },
];
