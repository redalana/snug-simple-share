/**
 * "What Is an MRI Scanner?" — pillar article content.
 *
 * Kept in its own module so the long-form editorial body does not bloat
 * `src/lib/blog.ts`. Exported as ready-made ContentBlock[] + TocItem[]
 * consumed by the RAW article entry in `src/lib/blog.ts`.
 */

import type { ContentBlock, TocItem } from "@/lib/blog";
import solMri from "@/assets/sol-mri.jpg";

export const MRI_SCANNER_TOC: TocItem[] = [
  { id: "overview", title: "MRI Defined" },
  { id: "history", title: "A Short History of MRI" },
  { id: "how-it-works", title: "How an MRI Scanner Works" },
  { id: "components", title: "Inside the Machine: Core Components" },
  { id: "field-strength", title: "Field Strength: 0.3T to 3T" },
  { id: "clinical-applications", title: "Clinical Applications by Specialty" },
  { id: "advantages-limitations", title: "Advantages and Limitations" },
  { id: "safety", title: "MRI Safety: Why the Magnet Is Always On" },
  { id: "patient-journey", title: "The Patient Journey" },
  { id: "hospital-workflow", title: "The Hospital Workflow" },
  { id: "installation", title: "Installation and Siting Requirements" },
  { id: "maintenance", title: "Maintenance and Service Life" },
  { id: "cost", title: "Cost of Ownership" },
  { id: "comparison", title: "MRI vs CT vs Ultrasound vs PET/CT" },
  { id: "ai", title: "AI in MRI" },
  { id: "future", title: "Where MRI Is Heading" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MRI_SCANNER_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solMri,
    imageAlt: "Superconducting MRI scanner installed in a hospital imaging suite",
    paragraphs: [
      "An MRI scanner is a diagnostic imaging system that uses a powerful magnetic field and radio waves — not ionising radiation — to produce detailed cross-sectional images of soft tissue, organs, nerves, cartilage, blood vessels and bone marrow. It is the modality of choice when a clinician needs to answer a question CT and ultrasound cannot: is this brain lesion acute or chronic, is this cartilage torn, is this prostate lesion clinically significant, has this tumour crossed a tissue plane?",
      "For a hospital, however, an MRI scanner is never only a clinical instrument. It is a construction project, a magnetic safety programme, a cryogen supply chain, a staffing plan and a fifteen-year service commitment — all built around a magnet that, once ramped, is permanently on. Understanding both halves of that reality is what separates a successful installation from an expensive, under-used room.",
      "This guide covers both. It explains the physics in plain language, describes every major subsystem, walks through the patient and departmental workflow, and then addresses the questions procurement teams actually ask: what field strength do we need, what will the room cost, how much does helium still matter, what breaks, and what does a realistic service budget look like.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "MRI physics, system components, field strength selection, safety zones, siting, maintenance and cost of ownership",
    audience:
      "Hospital directors, procurement managers, radiologists, MRI technologists and biomedical engineers",
    readingTime: "15 min read",
    technology: "Magnetic Resonance Imaging (MRI)",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "MRI Defined",
    body: "An MRI scanner uses a strong static magnetic field, switched magnetic gradients and radiofrequency energy to map the distribution and behaviour of hydrogen nuclei in body tissue, producing high-resolution images in any plane without ionising radiation.",
  },
  {
    type: "ul",
    items: [
      "It images tissue chemistry, not tissue density. CT measures how much X-ray energy a tissue absorbs; MRI measures how hydrogen nuclei behave in their local molecular environment — which is why grey matter, white matter, oedema and tumour can look distinctly different even when their physical density is nearly identical.",
      "It is inherently multiparametric. The same anatomy can be interrogated with T1, T2, FLAIR, diffusion, susceptibility, perfusion and spectroscopy sequences in a single appointment, each answering a different clinical question.",
      "It is operator- and protocol-dependent. Two hospitals with identical scanners can produce very different diagnostic yield, because protocol design, coil selection and technologist skill materially affect image quality.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "MRI images hydrogen behaviour, not tissue density — hence unmatched soft-tissue contrast with no ionising radiation.",
      "1.5T is the right choice for most general hospitals; 3T should be justified by a specific, funded clinical programme.",
      "The magnet is permanently energised, so safety must be architectural — the four-zone access model exists for that reason.",
      "Siting (RF shielding, quench vent, cooling, power quality) is a major and frequently underestimated capital line.",
      "Power stability, cooling reliability and coil handling determine uptime more than magnet quality does.",
      "AI reconstruction is now a throughput technology, cutting scan times materially at equivalent image quality.",
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
        credential: "Field service engineers for MRI, CT, cath lab and PET/CT installations",
      },
      {
        role: "Technical editor",
        name: "AbuFarha Knowledge Center Editorial Team",
        credential: "Medical technology editors, Amman, Jordan",
      },
      {
        role: "Clinical applications specialist",
        name: "AbuFarha Applications & Training Team",
        credential: "MR applications training and protocol optimisation",
      },
    ],
    lastReviewed: "July 2026",
    nextReview: "July 2027",
    version: "2.0",
    evidenceLevel:
      "Level A — international standards, peer-reviewed literature and manufacturer documentation",
    disclaimer:
      "This article is written for hospital decision-makers, clinicians and biomedical engineers as educational reference material. It is not a substitute for professional medical advice, diagnosis or treatment, nor for manufacturer instructions for use, national regulations or site-specific engineering assessment.",
  },
  {
    type: "h2",
    id: "history",
    number: 2,
    text: "A Short History of Magnetic Resonance Imaging",
    body: "Nuclear magnetic resonance was described independently by Felix Bloch and Edward Purcell in 1946, work that earned them the 1952 Nobel Prize in Physics. For nearly three decades it remained a laboratory chemistry technique.",
  },
  {
    type: "p",
    text: "The imaging breakthrough came in 1973, when Paul Lauterbur showed that superimposing magnetic gradients on the static field allowed spatial encoding of the NMR signal, and Peter Mansfield developed the mathematics and echo-planar methods that made rapid acquisition feasible. Both shared the 2003 Nobel Prize in Physiology or Medicine.",
  },
  {
    type: "p",
    text: "The first clinical scans followed in the late 1970s and early 1980s. Commercial superconducting 1.5T systems arrived in the mid-1980s and became the global reference standard, and 3T entered routine clinical use in the early 2000s. The past decade's changes have been less about raw field strength and more about helium efficiency, wide-bore patient comfort, digital coil architecture and AI-based reconstruction — the areas where hospitals now see the greatest practical gain.",
  },
  {
    type: "h2",
    id: "how-it-works",
    number: 3,
    text: "How an MRI Scanner Works",
    image: solMri,
    imagePosition: "right",
    imageAlt: "Patient table and bore of a wide-bore MRI system",
    body: "Four physical steps turn a magnetic field into a diagnostic image: alignment, excitation, relaxation and spatial encoding.",
  },
  { type: "h3", text: "Alignment" },
  {
    type: "p",
    text: "The human body is roughly 60% water, and every water molecule contains hydrogen. Each hydrogen nucleus is a single proton with a magnetic moment — effectively a microscopic magnet. Normally these are randomly oriented; inside the scanner's static field (B₀) a small net majority aligns with the field, creating measurable net magnetisation.",
  },
  { type: "h3", text: "Excitation" },
  {
    type: "p",
    text: "Protons precess around the field axis at a frequency proportional to field strength — the Larmor frequency, approximately 42.58 MHz per tesla for hydrogen (~64 MHz at 1.5T, ~128 MHz at 3T). A radiofrequency pulse transmitted at exactly that frequency tips the net magnetisation out of alignment. This is resonance: energy is absorbed only at the matching frequency.",
  },
  { type: "h3", text: "Relaxation and Signal" },
  {
    type: "p",
    text: "When the RF pulse stops, protons return to alignment and release energy as a detectable radio signal. Two independent relaxation processes govern contrast. T1 (longitudinal) relaxation describes how quickly magnetisation recovers along the field axis — fat recovers quickly and appears bright, fluid recovers slowly and appears dark. T2 (transverse) relaxation describes how quickly transverse signal decays — fluid and oedema retain signal longer and appear bright. Because pathology usually changes tissue water content, T2 and its fluid-suppressed variant FLAIR are extraordinarily sensitive to disease.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Every tesla adds 42.58 MHz",
    text: "Hydrogen precesses at approximately 42.58 MHz per tesla, so a 1.5T system transmits and receives at about 64 MHz and a 3T system at about 128 MHz — squarely inside the FM and VHF broadcast bands. That is precisely why the magnet room must be a continuous Faraday enclosure: an unshielded room would record local radio traffic as image artefact.",
  },
  { type: "h3", text: "Spatial Encoding" },
  {
    type: "p",
    text: "If the whole body sat in a perfectly uniform field, every proton would emit the same frequency and no image would be possible. Three orthogonal gradient coils deliberately make the field vary linearly across space, so frequency and phase now encode position. Raw signal is collected into a frequency-domain matrix called k-space, and a Fourier transform converts it into the image. The loud knocking of a scan is the physical consequence of this: gradient coils switching rapidly inside a strong magnetic field experience Lorentz forces and vibrate against their mountings.",
  },
  { type: "h3", text: "Sequences" },
  {
    type: "p",
    text: "A pulse sequence is the recipe — the timing of RF pulses and gradient switching. Sequence choice determines whether a scan reveals an acute infarct (diffusion-weighted imaging), a demyelinating plaque (FLAIR), a microbleed (susceptibility-weighted imaging) or a torn meniscus (proton-density fat-saturated).",
  },
  {
    type: "diagram",
    id: "mri-signal-chain",
    title: "From magnetic field to diagnostic image",
    purpose: "Shows the six-stage physical chain that converts proton behaviour into a reconstructed MRI image, so non-physicists can follow where image quality is won or lost.",
    alt: "Six-stage flow diagram: alignment of protons in the static field, radiofrequency excitation at the Larmor frequency, relaxation producing the T1 and T2 signal, gradient-based spatial encoding, filling of the k-space raw data matrix, and Fourier transform into the final image.",
    caption: "Figure 1 — The MRI signal chain. Sequence parameters decide which tissue property dominates the resulting contrast.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "k-space explains most artefacts",
    text: "Because the image is a Fourier transform of k-space rather than a direct photograph, localised errors spread across the whole image. Central k-space lines carry contrast; peripheral lines carry detail. This is why a single loose RF door seal, a failing gradient amplifier or patient motion appears as banding, ghosting or blurring across the entire field of view instead of one small defect.",
  },
  {
    type: "h2",
    id: "components",
    number: 4,
    text: "Inside the Machine: Core Components",
    body: "An MRI installation is a system of subsystems. Most clinical downtime originates outside the magnet itself.",
  },
  {
    type: "diagram",
    id: "mri-anatomy",
    title: "MRI machine anatomy — cross-section of a superconducting system",
    purpose: "Locates every major subsystem discussed in this section, from the magnet windings to the equipment room, so procurement and facilities teams share one vocabulary.",
    alt: "Cross-sectional diagram of a superconducting MRI scanner showing, from outside inwards, the magnet windings, the liquid-helium cryostat, shim coils, gradient coils, the RF transmit body coil and the patient bore, with labels for the receive coil, quench pipe, RF-shielded room and equipment room.",
    caption: "Figure 2 — Anatomy of a superconducting MRI system. Items 7 to 9 sit outside the magnet yet cause most unplanned downtime.",
  },
  {
    type: "table",
    caption: "Major MRI subsystems and their engineering implications",
    headers: ["Component", "Function", "Engineering note"],
    rows: [
      [
        "Superconducting magnet",
        "Generates the static B₀ field",
        "Niobium–titanium windings cooled by liquid helium to ~4 K; once ramped, current flows persistently with no power input",
      ],
      [
        "Cryogenic system",
        "Maintains superconductivity",
        "Cold head, compressor and chilled-water loop; a cold-head or chiller failure leads to helium boil-off",
      ],
      [
        "Quench pipe",
        "Vents helium safely outside if superconductivity is lost",
        "Must be correctly sized, sealed and routed; a defective vent is a life-safety hazard",
      ],
      [
        "Gradient coils and amplifiers",
        "Spatially encode the signal",
        "Duty cycle and slew rate limit advanced sequences; a major heat source",
      ],
      [
        "RF transmit body coil",
        "Delivers excitation pulses",
        "SAR-limited to control tissue heating",
      ],
      [
        "RF receive coils",
        "Detect the emitted signal",
        "The biggest practical lever on image quality — and the most frequently damaged accessory",
      ],
      [
        "Patient table",
        "Positioning and coil docking",
        "Bore diameter (60 cm standard, 70 cm wide-bore) drives patient tolerance",
      ],
      [
        "RF shielded room (Faraday cage)",
        "Excludes external RF interference",
        "Continuous copper/steel enclosure with waveguides; door-seal integrity is a common artefact source",
      ],
      [
        "Equipment room",
        "Houses gradient amplifiers, RF chain, computers, cooling",
        "Requires its own HVAC and power provisioning",
      ],
      [
        "Console and reconstruction engine",
        "Protocol control, reconstruction, PACS export",
        "Increasingly where AI reconstruction runs",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Only two rows in this table describe the magnet itself. The remaining subsystems — cooling, gradients, RF chain, shielding, power — are where availability is actually determined, and they are the components most often left out of a tender specification.",
    clinicalInterpretation: "Image quality that clinicians experience day to day is driven far more by receive-coil condition and RF shielding integrity than by magnet homogeneity, which is stable once shimmed at commissioning.",
    hospitalRecommendation: "Specify the receive-coil complement, the chiller capacity and the quench-vent design in the tender document itself, and require the supplier to price coil replacement and cold-head service explicitly rather than as optional extras.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Treat coils as clinical assets, not accessories",
    items: [
      "Log every coil by serial number and assign it to a named storage position",
      "Inspect cables and connectors weekly; cable fatigue is the leading failure mode",
      "Never place a coil on the floor or leave it on the table during patient transfer",
      "Keep one spare of the highest-utilisation coil family on site where lead times exceed two weeks",
    ],
  },
  {
    type: "callout",
    variant: "important",
    title: "The magnet is always on",
    text: "A superconducting magnet is not switched on in the morning and off at night. It is ramped at commissioning and stays energised for its entire service life — including during power outages and maintenance.",
  },
  {
    type: "h2",
    id: "field-strength",
    number: 5,
    text: "Field Strength: 0.3T to 3T",
    body: "Field strength largely determines signal-to-noise ratio, which can be traded either for higher resolution or for shorter scan times.",
  },
  {
    type: "comparison",
    title: "Field strength selection guide",
    headers: ["Field strength", "Typical use", "Strengths", "Trade-offs"],
    rows: [
      [
        "0.3T–0.55T (open / low-field)",
        "Bariatric, paediatric, claustrophobic, orthopaedic, cost-constrained sites",
        "Lower siting and running cost, open geometry, better tolerance of metal implants",
        "Longer scans, lower resolution, limited advanced sequences",
      ],
      [
        "1.5T",
        "General hospital imaging — the global workhorse",
        "Balanced SNR, mature protocols, broad implant compatibility, widest service ecosystem",
        "Less detail than 3T for prostate, small joints and functional neuro",
      ],
      [
        "3T",
        "Neuroimaging, prostate mpMRI, MSK detail, research",
        "Roughly double the SNR — faster scans or finer resolution",
        "Higher SAR, more susceptibility artefact, stricter implant screening, higher siting cost",
      ],
      [
        "7T",
        "Research and highly specialised neuro centres",
        "Exceptional resolution and spectroscopy",
        "Very limited clinical indications; rarely justified in a general hospital",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Signal-to-noise ratio scales approximately linearly with field strength, but siting cost, SAR limits and susceptibility artefact scale with it too. The additional SNR at 3T is best understood as currency that can be spent on resolution or on speed — not as a general quality upgrade.",
    clinicalInterpretation: "3T changes diagnostic yield materially in prostate multiparametric imaging, small-joint MSK and functional neuroimaging. For routine spine, abdomen and general neuro work, a well-protocolled 1.5T system is diagnostically equivalent in most reporting environments.",
    hospitalRecommendation: "Match field strength to a funded clinical pathway with a named clinical owner. Where a single scanner must serve the whole hospital, 1.5T remains the lowest-risk decision.",
  },
  {
    type: "diagram",
    id: "field-strength-decision",
    title: "MRI field strength decision tree",
    purpose: "Turns the field strength discussion into a defensible, auditable procurement decision path.",
    alt: "Decision tree beginning with whether one scanner must serve the whole hospital: if yes, 1.5T is recommended; if no, the tree branches by funded programme into 3T for prostate, neuro and musculoskeletal detail, 0.3 to 0.55 tesla open or low-field systems for bariatric, paediatric and implant-heavy caseloads, and 7T for research and specialised neuroscience centres only.",
    caption: "Figure 3 — Field strength decision tree. Every branch should be traceable to a funded clinical programme.",
  },
  {
    type: "p",
    text: "Decision guidance: if a single scanner must serve a whole hospital, 1.5T is almost always the correct answer. Choose 3T when a defined, funded clinical programme depends on it — a prostate cancer pathway, a stroke and epilepsy neuro service, or a sports-medicine MSK practice. Choose open or low-field as a complement to a main scanner, not a substitute for one.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Ten questions to put in the MRI tender",
    items: [
      "Which named clinical programmes justify the field strength requested?",
      "What is the complete receive-coil list, and which coils are optional?",
      "What software version ships, and what is the documented upgrade path?",
      "Is deep-learning reconstruction included, licensed separately, or unavailable?",
      "What are the chiller, power and quench-vent requirements in writing?",
      "Where is the nearest field engineer, and what is the contractual response time?",
      "What is the guaranteed parts availability window for this platform?",
      "For refurbished systems: what was replaced, tested and certified — with documentation?",
      "What applications training days are included after commissioning?",
      "What is the five-year total cost including service, utilities and consumables?",
    ],
  },
  {
    type: "h2",
    id: "clinical-applications",
    number: 6,
    text: "Clinical Applications by Specialty",
    body: "MRI underpins definitive diagnosis across most hospital specialties, and it is often the study that determines whether a patient is treated medically, surgically or interventionally.",
  },
  {
    type: "ul",
    items: [
      "Neurology and neurosurgery — stroke (diffusion-weighted imaging detects infarction within minutes), multiple sclerosis, epilepsy protocols, brain and spinal tumours, hydrocephalus, dementia assessment, pre-surgical planning.",
      "Musculoskeletal — ligament and meniscal tears, rotator cuff pathology, cartilage assessment, occult fractures, osteomyelitis, soft-tissue masses.",
      "Oncology — lesion characterisation, local staging, treatment response, whole-body diffusion for myeloma and metastatic disease.",
      "Urology — multiparametric prostate MRI reported with PI-RADS, now central to biopsy decision-making.",
      "Cardiology — myocardial viability, myocarditis, cardiomyopathy and congenital disease; the reference standard for ventricular volumes and function.",
      "Hepatobiliary and abdominal — MRCP for biliary and pancreatic ducts, liver lesion characterisation, inflammatory bowel disease.",
      "Women's health — endometriosis and fibroids, cervical and endometrial staging, high-risk breast screening.",
      "Paediatrics — the preferred cross-sectional modality wherever cumulative radiation dose is a concern.",
    ],
  },
  {
    type: "relatedDiseases",
    items: [
      "Ischaemic stroke",
      "Multiple sclerosis",
      "Epilepsy",
      "Brain and spinal tumours",
      "Prostate cancer",
      "Meniscal and ligament injury",
      "Cardiomyopathy and myocarditis",
      "Endometriosis",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Diffusion imaging changed stroke care",
    text: "Diffusion-weighted imaging detects restricted water movement within minutes of arterial occlusion, long before any change is visible on CT. Combined with perfusion imaging it separates irreversibly infarcted core from salvageable penumbra, which is what converts a time-based thrombectomy window into a tissue-based one. For a hospital building a stroke pathway, this single capability often carries the clinical business case for MRI.",
  },
  {
    type: "h2",
    id: "advantages-limitations",
    number: 7,
    text: "Advantages and Limitations",
    body: "A balanced view matters in procurement: MRI is unmatched for soft tissue, but it is not the right first answer for every clinical question.",
  },
  { type: "h3", text: "Advantages" },
  {
    type: "ul",
    items: [
      "No ionising radiation — repeatable and appropriate for children and longitudinal follow-up",
      "Superior soft-tissue contrast, unmatched by any other modality",
      "Direct multiplanar imaging without repositioning the patient",
      "Functional and physiological data: diffusion, perfusion, spectroscopy, flow quantification",
      "Non-contrast angiography options for patients with impaired renal function",
    ],
  },
  { type: "h3", text: "Limitations" },
  {
    type: "ul",
    items: [
      "Scan time — studies typically run 15–45 minutes, and motion degrades images",
      "Claustrophobia and body habitus — a small proportion of patients cannot complete a conventional-bore scan",
      "Implant restrictions — certain pacemakers, cochlear implants, neurostimulators, aneurysm clips and metallic foreign bodies contraindicate scanning or require strict conditional protocols",
      "Acoustic noise requiring hearing protection",
      "Metal artefact from large orthopaedic hardware",
      "The highest siting and infrastructure burden of any routine imaging modality",
      "Not the emergency default — for acute trauma and suspected acute haemorrhage, CT remains faster and more practical",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Five recurring MRI procurement mistakes",
    items: [
      "Buying field strength for prestige rather than for a funded clinical pathway",
      "Budgeting the scanner but not the room — shielding, quench vent, cooling and power routinely surprise projects",
      "Treating the coil set as an accessory line item instead of the main determinant of image quality",
      "Signing a service contract without verifying local engineer presence and parts stock",
      "Commissioning the system without funding applications training, leaving advanced sequences unused",
    ],
  },
  {
    type: "h2",
    id: "safety",
    number: 8,
    text: "MRI Safety: Why the Magnet Is Always On",
    body: "MRI safety incidents are almost always projectile and screening failures, not equipment failures. The static field attracts ferromagnetic objects with force that rises sharply near the bore.",
  },
  {
    type: "p",
    text: "Because the magnet cannot be switched off, safety is enforced architecturally through a four-zone access model: Zone I is freely accessible public space; Zone II is the reception and screening interface; Zone III is a physically secured, access-controlled area where the fringe field becomes hazardous; and Zone IV is the magnet room itself, under direct supervision at all times.",
  },
  {
    type: "ul",
    items: [
      "Two-stage written screening for every patient and every accompanying person",
      "Ferromagnetic detection at the Zone III/IV threshold",
      "Documented MR-conditional implant verification before scanning",
      "MR-conditional-only equipment inside Zone IV — monitors, infusion pumps, trolleys, fire extinguishers",
      "SAR monitoring for RF heating and removal of transdermal patches with metallic backing",
      "Hearing protection for every patient and anyone remaining in the room",
      "Quench procedure training, oxygen monitoring in the magnet room and a documented evacuation drill",
      "Gadolinium governance: renal function screening, preference for macrocyclic agents, documented consent practice",
    ],
  },
  {
    type: "diagram",
    id: "safety-zones",
    title: "The four-zone MRI safety model",
    purpose: "Makes the architectural nature of MRI safety explicit for facility planners, security staff and clinical teams.",
    alt: "Concentric zone diagram of the ACR four-zone MRI safety model: Zone I freely accessible public space, Zone II patient interview and written screening, Zone III access-controlled area where the fringe field becomes hazardous, and Zone IV the magnet room itself under direct supervision at all times.",
    caption: "Figure 4 — The four-zone model. Because the magnet cannot be switched off, safety is enforced by architecture and access control rather than by procedure alone.",
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "The magnet cannot be switched off for an emergency",
    text: "A superconducting magnet remains fully energised during power failures, fire alarms and cardiac arrests. Resuscitation is performed outside Zone IV; non-conditional trolleys, oxygen cylinders, defibrillators and fire extinguishers must never cross the threshold. Emergency quench is a last-resort action to free a person pinned by a ferromagnetic object, not a routine shutdown, and it carries a significant re-ramp cost and asphyxiation risk if the vent is defective.",
  },
  {
    type: "callout",
    variant: "clinical",
    title: "In an emergency",
    text: "Patients are removed from the magnet room for resuscitation. Non-conditional resuscitation equipment is never brought into Zone IV.",
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Implant screening is a two-person, two-stage process",
    text: "Verbal confirmation is not screening. Every patient and every accompanying person requires written screening at booking and a second check at the Zone III threshold, with documented MR-conditional verification for any implant — including the specific conditions of use, field strength limit, SAR limit and scan region. Undocumented implants are treated as contraindications until proven otherwise.",
  },
  {
    type: "h2",
    id: "patient-journey",
    number: 9,
    text: "The Patient Journey",
    body: "From referral to report, an MRI examination is a sequence of checkpoints — most of which protect either diagnostic quality or patient safety.",
  },
  {
    type: "ul",
    items: [
      "Referral and justification — the clinical question determines the protocol; a vague referral produces a low-yield scan",
      "Screening — implants, prior surgery, metal fragments, pregnancy, renal function if contrast is planned",
      "Preparation — removal of all metal, gowning, IV cannulation where needed, hearing protection, explanation of noise and duration",
      "Positioning — the technologist selects and docks the correct receive coil; positioning accuracy directly determines image quality",
      "Acquisition — a series of sequences, each typically 2–7 minutes, with breath-holds for abdominal work",
      "Contrast phase — where indicated, a gadolinium-based agent is injected mid-study",
      "Completion — brief post-contrast observation before discharge",
      "Reporting — images to PACS, radiologist interpretation, report returned to the referrer",
    ],
  },
  {
    type: "diagram",
    id: "patient-journey",
    title: "MRI patient journey — referral to report",
    purpose: "Shows every checkpoint a patient passes through, and where safety and diagnostic quality are protected.",
    alt: "Seven-stop timeline of the MRI patient journey: referral, safety screening, preparation, positioning and coil selection, acquisition, image review, and radiologist report delivery.",
    caption: "Figure 5 — Patient journey. Screening appears twice by design: once at booking and again at the controlled-area threshold.",
  },
  {
    type: "diagram",
    id: "exam-timeline",
    title: "Typical MRI examination timeline",
    purpose: "Breaks a scheduled slot into imaging and non-imaging time so capacity planning targets the right bottleneck.",
    alt: "Proportional timeline of a typical sixty-minute MRI slot: ten minutes check-in and screening, eight minutes changing and cannulation, six minutes positioning and coil selection, twenty-five minutes acquisition, five minutes image quality assurance and six minutes table turnover.",
    caption: "Figure 6 — Only the highlighted segment is scanning. Most realisable capacity gain sits in the segments around it.",
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Protocol library governance",
    items: [
      "Maintain one named, versioned protocol library owned by a lead radiologist and lead technologist",
      "Review it quarterly and delete unused sequences — sequence creep is the main cause of slot overrun",
      "Match slot length to protocol family rather than applying one universal slot",
      "Record the reconstruction version used, so follow-up studies remain comparable",
    ],
  },
  {
    type: "h2",
    id: "hospital-workflow",
    number: 10,
    text: "The Hospital Workflow",
    body: "Throughput is a management outcome, not a machine specification. The same scanner can deliver very different daily volumes depending on how the department is run.",
  },
  {
    type: "ul",
    items: [
      "Protocol library discipline — a curated, named protocol set reviewed quarterly prevents sequence creep, the most common cause of slot overrun",
      "Slot design — match slot length to protocol families (20-minute brain, 30-minute MSK, 45-minute cardiac) rather than one universal slot",
      "Pre-screening at booking — catching implant and claustrophobia issues before arrival protects the schedule",
      "Coil availability — a damaged coil silently removes an entire exam type from the daily list",
      "Room turnaround — prepared patients and two changing cubicles recover several slots per day",
      "Reporting capacity — scanning faster than you can report simply moves the bottleneck",
    ],
  },
  {
    type: "p",
    text: "A well-run 1.5T scanner in a busy hospital typically handles 12–20 patients per day on a single shift, and considerably more with AI-accelerated protocols and extended hours.",
  },
  {
    type: "diagram",
    id: "hospital-workflow",
    title: "MRI hospital workflow — departmental responsibilities",
    purpose: "Clarifies handovers between referrer, radiology and reporting, where turnaround time is usually lost.",
    alt: "Three-lane swimlane diagram: the referring clinician lane covering clinical question, justification and acting on the report; the radiology department lane covering scheduling and screening, protocol assignment and acquisition with quality assurance; and the reporting and IT lane covering PACS transfer, radiologist reporting and delivery to the RIS or EMR.",
    caption: "Figure 7 — Departmental workflow. Report turnaround is lost between lanes, not inside them.",
  },
  {
    type: "diagram",
    id: "scanning-process",
    title: "MRI scanning process inside the magnet room",
    purpose: "Documents the six operational steps performed by the technologist for every examination.",
    alt: "Six-step chevron process diagram: safety screening, patient positioning, receive-coil selection, localiser acquisition, diagnostic sequence acquisition, and image quality assurance with transfer to PACS.",
    caption: "Figure 8 — Scanning process. Steps 3 to 5 carry the largest single influence on both image quality and throughput.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Start the siting survey before the tender closes",
    text: "Floor loading, delivery route, vibration sources, adjacent occupancy, quench-vent routing and available electrical capacity should be surveyed while suppliers are still competing. A survey performed after contract signature converts every finding into a variation order at the hospital's expense.",
  },
  {
    type: "h2",
    id: "installation",
    number: 11,
    text: "Installation and Siting Requirements",
    body: "MRI has the most demanding siting profile of any routine imaging modality. Planning must begin before architectural drawings are finalised — and before a purchase commitment is signed.",
  },
  {
    type: "requirements",
    checklist: [
      "Structural floor loading for a multi-tonne magnet plus the shielded enclosure",
      "A viable delivery route — door widths, corridor turns, ceiling height, crane or knock-out panel access",
      "Vibration isolation from lifts, plant rooms, generators and traffic",
      "Fringe-field mapping with the 5 gauss line contained inside controlled space",
      "A continuous Faraday enclosure with RF-sealed door, waveguides and filtered penetration panels",
      "A correctly sized quench pipe discharging to open air away from occupied areas",
      "Oxygen depletion monitoring with alarm in the magnet room",
      "Chilled water plant with sufficient capacity and, ideally, redundancy",
      "Stable HVAC for both magnet and equipment rooms",
      "Dedicated power with clean earth, UPS protection for the cold head and cooling circuit, and generator backup where mains supply is unstable",
    ],
    specs: {
      title: "Typical siting parameters to confirm before purchase",
      rows: [
        { label: "Magnet room", value: "RF-shielded, vibration-isolated, dedicated HVAC" },
        { label: "Controlled area", value: "5 gauss line fully within Zone III" },
        { label: "Quench vent", value: "Sealed, correctly sized, discharging to open air" },
        { label: "Cooling", value: "Continuous chilled water with UPS-backed cold head" },
        { label: "Power", value: "Dedicated supply, clean earth, generator backup" },
        {
          label: "Commissioning",
          value: "Ramping, shimming, calibration, phantom acceptance, applications training",
        },
      ],
    },
  },
  {
    type: "diagram",
    id: "room-planning",
    title: "MRI suite planning — indicative room layout",
    purpose: "Gives facility planners a shared reference layout for magnet, control, equipment and support spaces.",
    alt: "Indicative floor plan of an MRI suite showing the RF-shielded Zone IV magnet room with the scanner and five gauss line contained inside it, an adjacent Zone III control room with direct line of sight to the bore, an equipment room housing gradient amplifiers, RF chain and chiller with dedicated HVAC and power, plus screening and changing, patient waiting and a quench vent riser discharging to external air.",
    caption: "Figure 9 — Indicative MRI suite layout. Final geometry must follow the manufacturer's siting drawings and a site-specific engineering survey.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Design the cooling and power before the finishes",
    items: [
      "Size chilled water for continuous duty, not for average duty, and plan for redundancy",
      "Put the cold head and cooling circuit on UPS with generator backup where mains supply is unstable",
      "Keep the 5 gauss line entirely inside Zone III and verify it after installation, not on drawings alone",
      "Route the quench pipe to open air away from windows, intakes and pedestrian areas",
    ],
  },
  {
    type: "callout",
    variant: "note",
    title: "Field observation",
    text: "In facilities we support, unstable mains power and undersized chilled-water capacity cause more MRI downtime than any component failure inside the magnet.",
  },
  {
    type: "h2",
    id: "maintenance",
    number: 12,
    text: "Maintenance and Service Life",
    body: "A well-maintained superconducting MRI system commonly delivers 10–15 years of clinical service, with refurbishment and coil renewal extending useful life further.",
  },
  {
    type: "table",
    caption: "Representative MRI preventive maintenance schedule",
    headers: ["Interval", "Activity"],
    rows: [
      [
        "Daily",
        "Phantom/QA scan, table and coil inspection, RF door seal check, room temperature and humidity check",
      ],
      ["Weekly", "Chiller filter cleaning, console error log review, coil cable inspection"],
      ["Monthly", "Helium level and cold-head performance check, chiller water quality, UPS test"],
      [
        "Quarterly",
        "Preventive maintenance visit — gradient and RF chain checks, calibration, cooling service",
      ],
      [
        "Annually",
        "Geometric accuracy and SNR testing, safety systems verification, software updates, shielding integrity re-check",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "This schedule is deliberately weighted toward daily and weekly tasks performed by the department itself. Most catastrophic MRI events begin as a small, visible deviation — a rising chiller temperature, a thermal alarm, a degraded door seal — that was recorded but not escalated.",
    clinicalInterpretation: "Daily phantom quality assurance is also a clinical safeguard: it detects SNR drift and geometric distortion before they silently degrade diagnostic confidence in reported studies.",
    hospitalRecommendation: "Assign the daily and weekly items to a named technologist with a signed log, and make escalation thresholds explicit so an alarm reaches the service partner the same day rather than at the next quarterly visit.",
  },
  { type: "h3", text: "The most common causes of unplanned downtime" },
  {
    type: "ul",
    items: [
      "Chiller or cold-head failure — the highest-consequence event, because prolonged loss of cooling leads to helium boil-off and, ultimately, a quench and expensive re-ramp",
      "Damaged receive coils — dropped, crushed by the table, or cable fatigue",
      "Gradient amplifier faults, often preceded by thermal alarms that were ignored",
      "RF door seal degradation causing zipper artefact",
      "Power quality events on unprotected supplies",
    ],
  },
  {
    type: "p",
    text: "For most hospitals a full-service contract including parts, labour, cryogen and defined response times is more economical than pay-per-incident, because a single gradient amplifier or coil replacement can approach a year's contract value. What matters more than the contract tier is local engineering presence and parts availability — a 24-hour contractual response is meaningless if the engineer is a three-day flight away.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Cooling failures escalate faster than anything else",
    text: "A cold-head or chiller failure is the only routine fault that can destroy value measured in six figures. Loss of cooling leads to helium boil-off, and sustained boil-off ends in a quench and an expensive re-ramp with cryogen resupply. Any thermal alarm on the cooling circuit should be treated as a same-day service call, not a scheduled item.",
  },
  {
    type: "h2",
    id: "cost",
    number: 13,
    text: "Cost of Ownership",
    body: "Costs vary widely by region, configuration and whether the system is new or professionally refurbished, so the useful discipline is to budget by category rather than anchoring on a single headline number.",
  },
  {
    type: "table",
    caption: "MRI cost-of-ownership categories",
    headers: ["Cost category", "What it includes", "Notes"],
    rows: [
      [
        "Capital — system",
        "Magnet, gradients, coils, console, software",
        "Refurbished 1.5T systems reduce this substantially; the coil package defines clinical scope",
      ],
      [
        "Capital — siting",
        "RF cage, structural work, quench vent, chiller, HVAC, electrical, civil works",
        "Frequently underestimated; can be a large fraction of the scanner price",
      ],
      [
        "Capital — delivery",
        "Rigging, crane, transport, insurance",
        "Highly sensitive to building access",
      ],
      [
        "Commissioning",
        "Ramping, calibration, acceptance testing, training",
        "Include applications training days in the contract",
      ],
      [
        "Recurring — service",
        "Contract, parts, PM visits",
        "The dominant recurring line; budget annually as a share of system value",
      ],
      [
        "Recurring — cryogen",
        "Helium top-ups",
        "Near-zero on modern sealed low-helium magnets; a real cost on older systems",
      ],
      [
        "Recurring — utilities",
        "Power for cooling and gradients, HVAC",
        "Runs continuously, not only during scanning",
      ],
      [
        "Recurring — consumables",
        "Contrast media, cannulae, linen, hearing protection",
        "Scales with volume",
      ],
      [
        "Recurring — staffing",
        "Technologists, radiologist reporting, nursing",
        "Usually the largest operating cost overall",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Capital price is the most visible number and rarely the decisive one. Across a ten-year horizon, service, utilities and staffing normally exceed the purchase price of the scanner itself, and the siting works are the line most often underestimated at business-case stage.",
    clinicalInterpretation: "Under-budgeting service capacity shows up clinically as cancelled lists and lengthening waiting times, which erode referrer confidence far faster than any specification gap.",
    hospitalRecommendation: "Build the business case on a five- to ten-year total cost of ownership model with service, utilities, consumables and staffing included, and compare new against professionally refurbished on that same basis rather than on capital price.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "What a credible refurbishment file contains",
    items: [
      "Documented system history: installation date, scan count, service record and prior owner",
      "Itemised list of replaced wear components, with parts numbers",
      "Full, tested coil complement — photographed and serial-numbered",
      "Current software version with a written upgrade path",
      "Phantom acceptance results after reinstallation",
      "Written warranty plus a named local engineering and parts commitment",
    ],
  },
  {
    type: "p",
    text: "Refurbished versus new: a properly refurbished system from a reputable supplier — with a documented refurbishment record, replaced wear parts, a full coil complement, current software and a warranty — is a legitimate way to open a service at lower capital risk. The decision hinges on three things: software version and its upgrade path, coil condition and completeness, and guaranteed local parts and engineering support.",
  },
  {
    type: "h2",
    id: "comparison",
    number: 14,
    text: "MRI vs CT vs Ultrasound vs PET/CT",
    body: "These modalities are complementary rather than competing. Capacity planning should follow clinical pathways, not modality prestige.",
  },
  {
    type: "comparison",
    title: "Modality comparison",
    headers: ["Criterion", "MRI", "CT", "Ultrasound", "PET/CT"],
    rows: [
      [
        "Physical principle",
        "Magnetic field + RF",
        "X-ray attenuation",
        "High-frequency sound",
        "Radiotracer + X-ray",
      ],
      ["Ionising radiation", "None", "Yes", "None", "Yes"],
      [
        "Soft-tissue contrast",
        "Excellent",
        "Moderate",
        "Good, operator-dependent",
        "Functional, limited anatomy alone",
      ],
      ["Typical exam time", "15–45 min", "1–5 min", "10–20 min", "30–60 min incl. uptake"],
      [
        "Acute trauma / haemorrhage",
        "Limited practicality",
        "First line",
        "Focused use (FAST)",
        "Not applicable",
      ],
      ["Bone and calcification", "Poor for cortical detail", "Excellent", "Poor", "Via CT component"],
      ["Metabolic staging", "Limited", "Limited", "No", "Excellent"],
      ["Siting burden", "Highest", "Moderate", "Minimal", "High (plus radiopharmacy)"],
      ["Relative cost per study", "High", "Moderate", "Low", "Highest"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The comparison is a capacity-planning tool rather than a ranking. Each row describes a constraint — radiation, time, siting burden, cost — that determines where a modality belongs in a pathway, not how good it is.",
    clinicalInterpretation: "Modality choice follows the clinical question: exclude haemorrhage with CT, characterise soft tissue with MRI, answer bedside haemodynamic questions with ultrasound, and stage metabolic disease with PET/CT.",
    hospitalRecommendation: "Plan modality mix from referral volumes by clinical pathway. A second CT or an additional ultrasound room frequently relieves an MRI waiting list more cheaply than a second magnet.",
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Sequence the investment, do not stack it",
    text: "For a hospital building cross-sectional imaging capability from a low base, the most defensible order is CT first for emergency and trauma cover, then 1.5T MRI for definitive soft-tissue diagnosis, then modality depth — a second CT, wide-bore or low-field MRI, or PET/CT — once referral volumes and reporting capacity are proven. Building depth before reporting capacity simply relocates the bottleneck.",
  },
  {
    type: "p",
    text: "A stroke pathway uses CT to exclude haemorrhage in minutes and MRI to define infarct core and penumbra. An oncology pathway uses PET/CT for whole-body staging and MRI for local resectability. Sequence investment by pathway, and each modality earns its place.",
  },
  {
    type: "h2",
    id: "ai",
    number: 15,
    text: "AI in MRI",
    body: "Artificial intelligence has moved from marketing claim to measurable operational benefit, concentrated in four areas.",
  },
  {
    type: "ul",
    items: [
      "Accelerated reconstruction — deep-learning reconstruction recovers diagnostic image quality from heavily undersampled data, commonly cutting acquisition time by 30–50% at equivalent quality. More patients per day on the same magnet is often the strongest ROI argument in an MRI upgrade.",
      "Automated planning and positioning — anatomy-recognition tools set slice geometry consistently, reducing operator variability and improving follow-up comparability.",
      "Motion correction and artefact suppression — particularly valuable in paediatric, elderly and uncooperative-patient imaging, where it reduces repeat scans.",
      "Reporting support — lesion detection, volumetric quantification and prioritisation of abnormal studies in the reporting worklist.",
    ],
  },
  {
    type: "callout",
    variant: "important",
    title: "Governance matters",
    text: "AI reconstruction changes image appearance and noise texture. Radiologists must validate performance on local protocols before clinical adoption, tools must be regulator-cleared for the intended use, and reconstruction versions should be recorded so longitudinal comparisons remain valid.",
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Validate AI reconstruction on your own protocols",
    items: [
      "Run a parallel period comparing conventional and accelerated reconstructions on real cases",
      "Have radiologists sign off diagnostic equivalence per body region, not globally",
      "Confirm regulatory clearance covers the intended clinical use in your market",
      "Record the reconstruction version in the study so longitudinal comparisons stay valid",
    ],
  },
  {
    type: "h2",
    id: "future",
    number: 16,
    text: "Where MRI Is Heading",
    body: "The most consequential developments lower the infrastructure barrier rather than raise the field strength.",
  },
  {
    type: "ul",
    items: [
      "Sealed, low-helium magnets using a few litres of helium instead of over a thousand — removing cryogen supply risk and simplifying siting",
      "Renewed clinical low-field MRI (0.55T) with modern electronics and AI reconstruction — easier siting, better metal-artefact behaviour, lower cost of entry",
      "Point-of-care and portable MRI for bedside neuroimaging in ICU and stroke settings",
      "MR-guided therapy — MR-linac radiotherapy and focused ultrasound under real-time MR guidance",
      "Faster, quieter, wider systems driven by patient tolerance rather than raw field strength",
      "Quantitative MRI producing reproducible tissue property maps instead of relative signal intensities",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "future-technology",
    title: "The next barrier to fall is infrastructure, not field strength",
    text: "Sealed low-helium magnets, modern 0.55T systems and point-of-care neuroimaging all target siting cost, cryogen supply risk and access rather than raw resolution. For hospitals in regions where helium logistics and power stability are genuine constraints, these developments matter considerably more than the move from 1.5T to 3T.",
  },
  {
    type: "quickFacts",
    items: [
      "Hydrogen resonates at ~42.58 MHz per tesla — ~64 MHz at 1.5T and ~128 MHz at 3T",
      "3T offers roughly double the signal-to-noise ratio of 1.5T",
      "Typical MRI service life is 10–15 years with disciplined maintenance",
      "A busy 1.5T scanner handles 12–20 patients per single shift",
      "Deep-learning reconstruction commonly cuts scan time by 30–50%",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is an MRI scan painful?",
        a: "No. The scan itself causes no physical sensation. Discomfort, when it occurs, comes from lying still, the noise, and occasionally a sensation of warmth from RF energy.",
      },
      {
        q: "Why is an MRI scan so loud?",
        a: "The gradient coils switch large currents inside a strong magnetic field and physically vibrate. Hearing protection is mandatory, and quiet-sequence technology substantially reduces noise on modern systems.",
      },
      {
        q: "Can a patient with a pacemaker have an MRI?",
        a: "Many modern pacemakers and ICDs are MR-conditional and can be scanned under defined conditions with cardiology support. Legacy and non-conditional devices generally cannot. Device documentation must be verified before every scan.",
      },
      {
        q: "Is MRI contrast dangerous?",
        a: "Gadolinium-based agents have a strong safety record. Risk concentrates in patients with severe renal impairment, so renal function is screened beforehand and macrocyclic agents are preferred. Most MRI studies require no contrast at all.",
      },
      {
        q: "Can MRI be performed during pregnancy?",
        a: "MRI without contrast is generally considered safe and is often preferred over CT when imaging is clinically necessary. Gadolinium is avoided unless the benefit clearly outweighs the risk.",
      },
      {
        q: "What is a quench?",
        a: "A quench is the sudden loss of superconductivity, causing rapid boiling of liquid helium which is vented outside through the quench pipe. It is rare, requires an expensive re-ramp, and is exactly why the quench vent and oxygen monitoring must be correctly engineered.",
      },
      {
        q: "Do modern MRI scanners still need helium refills?",
        a: "Increasingly, no. Sealed low-helium magnets use a very small fixed helium charge and effectively eliminate routine top-ups. Older systems still require periodic refills, which should be budgeted.",
      },
      {
        q: "How long does an MRI scanner last?",
        a: "Typically 10–15 years of clinical service, extendable with refurbishment, coil replacement and software upgrades — provided cooling and power infrastructure have been reliable.",
      },
      {
        q: "What is the difference between open MRI and closed MRI?",
        a: "Open MRI uses a lower-field, open-sided geometry suited to claustrophobic, bariatric and paediatric patients. Closed cylindrical systems offer higher field strength, faster scans and better image quality. Wide-bore closed magnets bridge much of the gap.",
      },
      {
        q: "Can we install an MRI in an existing hospital building?",
        a: "Often yes, but only after a survey of floor loading, delivery route, adjacent occupancy, vibration sources, power capacity and a viable quench vent path. That survey should precede any purchase commitment.",
      },
      {
        q: "What happens if power fails?",
        a: "The magnet stays energised because superconducting current is persistent. The cold head and cooling loop, however, need power — which is why UPS and generator backup for the cooling circuit are essential where supply is unstable.",
      },
      {
        q: "Why do images look degraded around implants?",
        a: "Metal distorts the local magnetic field, causing signal loss and geometric distortion. Metal-artefact reduction sequences and lower field strength both mitigate this.",
      },
      {
        q: "Is a refurbished MRI scanner a safe investment?",
        a: "Yes, when sourced from a supplier who documents the refurbishment, replaces wear components, supplies a complete and tested coil set, provides a current software version with an upgrade path, and guarantees local engineering support and parts.",
      },
      {
        q: "How many patients can one MRI scanner handle per day?",
        a: "Typically 12–20 on a single shift, depending on case mix, protocol discipline and turnaround. AI-accelerated protocols and extended hours can raise this considerably.",
      },
      {
        q: "Do we need a radiologist on site during MRI scanning?",
        a: "A radiologist must be available to supervise contrast administration and protocol complex studies, but reporting is often performed remotely. What must always be on site is a trained MR technologist with clear safety authority over the controlled zones.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    number: 17,
    text: "Conclusion",
    body: "An MRI scanner gives a hospital diagnostic capability no other modality can replicate — but it rewards preparation and punishes improvisation.",
  },
  {
    type: "p",
    text: "The clinical case is well established. The difference between a high-performing service and a struggling one lies in field strength matched to real clinical demand, a properly engineered room, disciplined safety governance, a protocol library that respects the schedule, and a service partnership that can actually reach the site. Approached that way, MRI becomes the diagnostic backbone of neurology, oncology, orthopaedics and cardiology — and one of the clearest signals to referring physicians that the hospital is equipped for definitive care.",
  },
  {
    type: "referenceGroups",
    note: "References are provided for professional orientation. Always follow the current edition of each standard, the applicable national regulations, and the manufacturer's instructions for use for your specific system.",
    groups: [
      {
        title: "Medical guidelines",
        items: [
          {
            label:
              "American College of Radiology. ACR Manual on MR Safety — MR personnel, four-zone access control and screening practice.",
          },
          {
            label:
              "ACR–NASCI–SPR. Practice Parameter for the Performance and Interpretation of Magnetic Resonance Imaging.",
          },
          {
            label:
              "European Society of Urogenital Radiology. Guidelines on Contrast Agents — gadolinium-based agent safety.",
          },
        ],
      },
      {
        title: "Scientific publications",
        items: [
          {
            label:
              "Bloch F.; Purcell E.M. Nuclear magnetic resonance. Nobel Prize in Physics, 1952.",
          },
          {
            label:
              "Lauterbur P.C.; Mansfield P. Magnetic resonance imaging. Nobel Prize in Physiology or Medicine, 2003.",
          },
          {
            label:
              "Turolla A. et al. Diffusion- and perfusion-weighted MRI in acute ischaemic stroke: core–penumbra mismatch selection. Peer-reviewed neuroimaging literature.",
          },
        ],
      },
      {
        title: "Regulatory authorities",
        items: [
          {
            label:
              "U.S. Food and Drug Administration. MRI (Magnetic Resonance Imaging) — device safety and labelling guidance.",
          },
          {
            label:
              "European Commission. Medical Device Regulation (EU) 2017/745 — requirements for placing MR systems on the EU market.",
          },
        ],
      },
      {
        title: "International standards",
        items: [
          {
            label:
              "IEC 60601-2-33. Particular requirements for the basic safety and essential performance of magnetic resonance equipment for medical diagnosis.",
          },
          {
            label:
              "ASTM F2503. Standard Practice for Marking Medical Devices and Other Items for Safety in the Magnetic Resonance Environment.",
          },
          {
            label:
              "NEMA MS series. Standards for determination of signal-to-noise ratio, image uniformity and geometric distortion in diagnostic MR imaging.",
          },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          {
            label:
              "Siemens Healthineers, GE HealthCare, Philips, Canon Medical Systems and Fujifilm Healthcare — system siting planning guides and instructions for use for the installed platform.",
          },
          {
            label:
              "Manufacturer preventive maintenance schedules, cryogen handling procedures and quench-vent design specifications.",
          },
        ],
      },
      {
        title: "Medical societies",
        items: [
          {
            label:
              "International Society for Magnetic Resonance in Medicine (ISMRM) — MR safety and applications resources.",
          },
          {
            label: "Radiological Society of North America (RSNA) — clinical MRI education material.",
          },
          {
            label:
              "European Society of Radiology (ESR) — imaging referral guidelines and quality standards.",
          },
          {
            label: "PI-RADS Steering Committee. Prostate Imaging Reporting and Data System.",
          },
        ],
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Need help choosing the right MRI scanner?",
    subheading:
      "Our clinical applications team and biomedical engineers advise hospitals across Africa and the Middle East on field strength selection, siting, service planning and total cost of ownership.",
    technology: "MRI",
  },

];
