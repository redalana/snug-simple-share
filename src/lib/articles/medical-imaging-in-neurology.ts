import type { ContentBlock, TocItem } from "@/lib/blog";
import solMri from "@/assets/sol-mri.jpg";

export const MEDICAL_IMAGING_IN_NEUROLOGY_TOC: TocItem[] = [
  { id: "overview", title: "Why MRI Is the Backbone of Neurology" },
  { id: "stroke-pathway", title: "The Acute Stroke Pathway" },
  { id: "ms-monitoring", title: "Multiple Sclerosis: Diagnosis and Longitudinal Monitoring" },
  { id: "epilepsy-protocols", title: "Epilepsy Protocols and the Search for the Focus" },
  { id: "neuro-oncology", title: "Neuro-Oncology: Characterisation, Planning and Response" },
  { id: "spine-imaging", title: "Spine Imaging" },
  { id: "functional-dti", title: "Functional MRI and Diffusion Tensor Imaging" },
  { id: "scanner-requirements", title: "Scanner Requirements for a Neuroimaging Service" },
  { id: "coil-requirements", title: "Coils and Sequence Infrastructure" },
  { id: "workflow-design", title: "Workflow Design for a Neuroimaging Service" },
  { id: "staffing", title: "Staffing a Neuroimaging Service" },
  { id: "throughput", title: "Throughput and Capacity Planning" },
  { id: "ct-integration", title: "Integration with CT" },
  { id: "cathlab-integration", title: "Integration with the Cath Lab and Thrombectomy Pathway" },
  { id: "quality-governance", title: "Quality, Protocol Governance and Reporting" },
  { id: "building-the-service", title: "Building the Service: A Practical Roadmap" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MEDICAL_IMAGING_IN_NEUROLOGY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solMri,
    imageAlt: "Neuroradiology suite with an MRI scanner used for brain and spine imaging",
    paragraphs: [
      "Neurology is arguably the specialty most dependent on a single imaging modality. Where cardiology draws on echocardiography, CT angiography and the cath lab in combination, and oncology spreads its diagnostic load across CT, ultrasound and PET, neurology's central nervous system questions are answered, overwhelmingly, by magnetic resonance imaging. A stroke thrombectomy decision, a multiple sclerosis diagnosis, an epilepsy surgery work-up, a glioma grading, a cord compression referral — in almost every case the pathway runs through an MRI scanner, and the quality of that scanner, its coils, its sequences and the team running it determines what the neurologist can actually do for the patient.",
      "This dependency means a hospital cannot simply install a general-purpose MRI system and expect it to function as a neuroimaging service. Stroke pathways need diffusion and perfusion sequences available within minutes, every hour of every day. Epilepsy protocols need dedicated high-resolution volumetric acquisitions that a routine brain protocol will never capture. Neuro-oncology needs perfusion, spectroscopy and post-contrast sequences read against prior studies with strict comparability. Each of these is a distinct clinical programme with its own sequence library, its own reporting expectations and its own demands on coil hardware — built on top of, but materially beyond, a standard MRI installation.",
      "This article sets out what a complete neuroimaging service actually requires: the clinical logic behind stroke, multiple sclerosis, epilepsy, neuro-oncology, spine, functional and diffusion tensor imaging; the scanner, coil and software specification needed to deliver them; and the staffing, workflow, throughput and cross-departmental integration — with CT and with the cath lab — that turns a scanner into a functioning neurology service rather than a room with a magnet in it.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Stroke, multiple sclerosis, epilepsy, neuro-oncology, spine, functional MRI and diffusion tensor imaging; scanner, coil, staffing and workflow requirements for a neuroimaging service",
    audience:
      "Hospital directors, neurologists, neuroradiologists, MRI technologists, biomedical engineers and procurement teams",
    readingTime: "18 min read",
    technology: "Magnetic Resonance Imaging (MRI) for Neurology",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "Why MRI Is the Backbone of Neurology",
    body: "MRI's unmatched soft-tissue contrast, its ability to detect restricted water diffusion within minutes of ischaemia, and its multiparametric character make it the definitive imaging test for almost every major neurological disease category.",
  },
  {
    type: "ul",
    items: [
      "Neurological disease is defined at the tissue and network level, not the density level — white matter plaques, cortical dysplasia, an acute infarct core and a low-grade glioma can be nearly indistinguishable on CT yet unmistakable on the correct MRI sequence, which is why CT alone cannot support most neurology decision-making beyond triage.",
      "A single neurology patient typically needs several different MRI examinations over their disease course — a diagnostic scan, then serial monitoring scans read against priors — so protocol consistency and archived comparability matter as much as the initial image quality.",
      "Neurology's imaging demand is bimodal: some of it (stroke) is the most time-critical imaging request in the entire hospital, and some of it (MS follow-up, epilepsy work-up) is precision-scheduled, low-urgency and highly protocol-sensitive — a service has to satisfy both without either compromising the other.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "Stroke, MS, epilepsy, neuro-oncology and spine are five distinct clinical programmes, each needing its own protocol, not one generic 'brain MRI'.",
      "Diffusion-weighted and perfusion imaging convert stroke from a time-window decision into a tissue-window decision — this is the single highest-impact capability in a neuroimaging service.",
      "24/7 stroke-capable MRI (or a validated CT-based fallback) is now the expectation for any hospital in a thrombectomy network, not an optional extra.",
      "Comparability across serial scans — same scanner, same protocol version, same coil — matters more in neurology than in almost any other specialty because most neurological disease is monitored, not diagnosed once.",
      "A dedicated head coil with high channel count and, ideally, a 3T system materially change diagnostic yield in epilepsy, functional and diffusion tensor imaging.",
      "The neuroimaging service lives at the intersection of radiology, neurology, the emergency department, CT and — for stroke — the cath lab or neuro-interventional suite; workflow design across that boundary is what determines clinical outcome.",
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
    version: "1.0",
    evidenceLevel:
      "Level A — international standards, peer-reviewed literature and manufacturer documentation",
    disclaimer:
      "This article is written for hospital decision-makers, clinicians and biomedical engineers as educational reference material. It is not a substitute for professional medical advice, diagnosis or treatment, nor for manufacturer instructions for use, national regulations or site-specific engineering assessment.",
  },
  {
    type: "h2",
    id: "stroke-pathway",
    number: 2,
    text: "The Acute Stroke Pathway",
    image: solMri,
    imagePosition: "right",
    imageAlt: "MRI scanner used within an acute stroke imaging pathway",
    body: "Stroke imaging exists to answer one question fast: is this tissue already dead, or can it still be saved — and MRI's diffusion and perfusion sequences answer it more precisely than any other modality.",
  },
  { type: "h3", text: "Core versus penumbra" },
  {
    type: "p",
    text: "Diffusion-weighted imaging (DWI) detects restricted water motion within minutes of arterial occlusion, marking the infarct core well before any visible change appears on CT. Perfusion-weighted imaging maps blood delivery across the wider vascular territory. Where perfusion deficit extends beyond the diffusion abnormality, the mismatch identifies salvageable penumbra — tissue that is underperfused but not yet infarcted. This mismatch model, not the clock alone, is what now determines eligibility for thrombectomy in many patients presenting beyond the traditional time window, including wake-up strokes with an unknown onset time.",
  },
  { type: "h3", text: "MRI versus CT in the hyperacute setting" },
  {
    type: "p",
    text: "CT remains faster to acquire, more widely available out of hours and better for excluding haemorrhage in the first instance, which is why most stroke pathways still triage through non-contrast CT and CT angiography. MRI's advantage is sensitivity: DWI can positively identify infarction that CT will miss for hours, and susceptibility-weighted sequences detect microbleeds and haemorrhagic transformation that change management. A mature stroke service uses both, in a defined sequence, rather than treating them as competing options.",
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Diffusion imaging turned a time-window into a tissue-window",
    text: "Before diffusion-perfusion mismatch imaging, thrombectomy eligibility was governed almost entirely by elapsed time since last known well. Mismatch imaging lets clinicians identify salvageable tissue in patients presenting many hours after onset, or on waking with unknown onset time — meaningfully expanding the population who can be treated. This is the strongest clinical argument for building 24/7 MRI access into a stroke network, not just CT.",
  },
  {
    type: "ul",
    items: [
      "A dedicated, protocolised stroke MRI sequence (DWI, ADC, FLAIR, susceptibility-weighted, time-of-flight or contrast angiography, and perfusion where available) should run in under ten minutes on the table.",
      "The single greatest determinant of a successful hyperacute MRI stroke pathway is not the scanner's field strength but whether the scanner is immediately accessible — kept clear, staffed and prioritised over routine bookings — at 3 a.m. as reliably as at 3 p.m.",
      "Stroke mimics (seizure, migraine, functional presentations, hypoglycaemia) are common; a fast, sensitive MRI protocol reduces unnecessary thrombolysis and unnecessary anxiety-driven referrals far more effectively than clinical assessment alone.",
    ],
  },
  {
    type: "diagram",
    id: "patient-journey",
    title: "Hyperacute stroke imaging pathway",
    purpose: "Shows the sequence of decisions and handovers from emergency department arrival to thrombectomy or thrombolysis decision.",
    alt: "Timeline diagram: emergency department arrival and clinical triage, immediate non-contrast CT and CT angiography to exclude haemorrhage and identify large vessel occlusion, escalation to MRI diffusion-perfusion imaging where the time window or clinical picture is ambiguous, multidisciplinary decision for thrombolysis or thrombectomy, and transfer to the neuro-interventional suite or cath lab.",
    caption: "Figure 1 — The hyperacute stroke pathway. Every handover in this chain is a point where minutes of salvageable tissue are lost or preserved.",
  },
  {
    type: "callout",
    variant: "important",
    title: "Time is tissue, but tissue is not always time",
    text: "Diffusion-perfusion mismatch imaging means eligibility for reperfusion therapy is increasingly a tissue-based decision rather than a purely clock-based one — a shift that has real implications for how a hospital staffs and schedules its stroke-capable scanner.",
  },
  {
    type: "table",
    caption: "CT versus MRI roles in the acute stroke pathway",
    headers: ["Question", "CT / CTA", "MRI (DWI / perfusion / SWI)"],
    rows: [
      ["Exclude haemorrhage", "Fast, first-line, near-universal availability", "Susceptibility-weighted imaging is more sensitive but slower to arrange"],
      ["Identify large vessel occlusion", "CT angiography, minutes, widely available", "MR angiography possible but rarely the first step"],
      ["Confirm and size infarct core", "Poor sensitivity in first hours", "DWI is the reference standard, positive within minutes"],
      ["Identify salvageable penumbra", "CT perfusion is an alternative, radiation-based option", "Perfusion-weighted MRI without added radiation, often higher contrast resolution"],
      ["Unknown onset / wake-up stroke", "Limited value", "DWI-FLAIR mismatch estimates lesion age, directly informing eligibility"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "No stroke pathway should be designed around a single modality. CT's speed and universal out-of-hours availability make it the correct first triage step almost everywhere; MRI's sensitivity is what expands the treatable population beyond the classic time window.",
    clinicalInterpretation: "Hospitals that route every stroke patient through CT alone will systematically undertreat wake-up and late-presenting strokes that MRI-based mismatch imaging would otherwise identify as salvageable.",
    hospitalRecommendation: "Build a documented, two-tier stroke imaging protocol — CT for immediate triage, MRI escalation for ambiguous or late-presenting cases — with explicit criteria for which pathway a patient follows, agreed jointly by neurology, radiology and the emergency department.",
  },
  {
    type: "h2",
    id: "ms-monitoring",
    number: 3,
    text: "Multiple Sclerosis: Diagnosis and Longitudinal Monitoring",
    body: "MS is diagnosed and, more importantly, tracked over decades by MRI, making protocol consistency and lesion comparability across serial scans the defining requirement of this programme.",
  },
  {
    type: "p",
    text: "The McDonald criteria used to diagnose multiple sclerosis rely directly on MRI demonstration of lesions disseminated in space and time — new or enlarging T2/FLAIR lesions across characteristic locations (periventricular, cortical/juxtacortical, infratentorial, spinal cord), with gadolinium enhancement distinguishing active from chronic lesions. A single, well-executed brain and spinal cord MRI can therefore establish a diagnosis that previously required extended clinical observation.",
  },
  {
    type: "p",
    text: "Once diagnosed, MS becomes a monitoring disease. Patients are rescanned at defined intervals to assess disease activity and treatment response using the 'no evidence of disease activity' framework — no new or enlarging T2 lesions, no gadolinium-enhancing lesions, no relapse, no disability progression. This only works if each follow-up scan is directly comparable to the last: same scanner field strength where possible, same slice orientation and thickness, same sequence parameters, and ideally the same physical coil.",
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Protecting comparability across an MS patient's scan history",
    items: [
      "Lock a versioned MS-specific protocol (3D FLAIR, 3D T1 pre- and post-contrast, axial T2) and change it only with documented clinical justification",
      "Record the software and reconstruction version used for each study alongside the images",
      "Flag every MS follow-up request for direct visual comparison against the prior study at reporting, not independent re-reading",
      "Where a patient must move between scanners, note the change explicitly in the report so radiologists do not misattribute technical variation to disease activity",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "quick-facts",
    title: "MS imaging in brief",
    items: [
      "Periventricular, juxtacortical, infratentorial and spinal cord lesions are the four locations used for dissemination in space",
      "Gadolinium enhancement typically resolves within weeks, so enhancing lesions indicate recent, active demyelination",
      "3D FLAIR at 3T substantially improves detection of cortical lesions compared with 2D sequences at 1.5T",
      "Annual or biennial MRI is typical for stable patients; more frequent imaging follows a relapse or treatment change",
    ],
  },
  {
    type: "h2",
    id: "epilepsy-protocols",
    number: 4,
    text: "Epilepsy Protocols and the Search for the Focus",
    body: "Epilepsy imaging is a search for subtle, often millimetre-scale structural abnormalities — hippocampal sclerosis, focal cortical dysplasia, cavernomas — that a routine brain MRI protocol is simply not designed to resolve.",
  },
  {
    type: "p",
    text: "A dedicated epilepsy protocol uses thin-slice, high-resolution 3D T1 volumetric imaging (allowing reformatting in any plane and volumetric hippocampal measurement), oblique coronal T2 and FLAIR sequences angled along the hippocampal axis, and often high-resolution imaging at 3T to improve grey-white matter contrast. Post-processing tools — hippocampal volumetry, cortical thickness mapping and voxel-based morphometry — increasingly support the radiologist in identifying subtle cortical dysplasia invisible to the naked eye on standard sequences.",
  },
  {
    type: "p",
    text: "For patients being worked up for epilepsy surgery, MRI is combined with EEG, and often with functional MRI to map eloquent cortex (language and motor areas) before resection, so the surgical team can weigh seizure freedom against the risk of new neurological deficit. A negative or equivocal standard MRI in a patient with focal epilepsy is one of the most common reasons for referral to a specialist centre with a true epilepsy protocol rather than a repeat of the same routine scan.",
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Do not repeat a routine brain protocol and call it an epilepsy work-up",
    text: "A standard brain MRI protocol optimised for stroke or tumour screening will miss a meaningful proportion of the subtle structural lesions that cause focal epilepsy. If epilepsy surgery is a realistic pathway for the patient, use — or refer to a centre that uses — a dedicated epilepsy protocol with thin-slice volumetric acquisition and hippocampal-axis oblique sequences from the outset.",
  },
  {
    type: "h2",
    id: "neuro-oncology",
    number: 5,
    text: "Neuro-Oncology: Characterisation, Planning and Response",
    body: "MRI drives every stage of the neuro-oncology pathway — detection, characterisation, surgical and radiotherapy planning, and the ongoing distinction between treatment effect and true tumour progression.",
  },
  {
    type: "p",
    text: "Standard tumour protocols combine T1 and T2, FLAIR, post-contrast T1 and diffusion imaging to characterise a lesion's likely grade and identify oedema, necrosis and mass effect. Perfusion-weighted imaging (relative cerebral blood volume) and MR spectroscopy add physiological information — high perfusion and elevated choline-to-N-acetylaspartate ratios favour higher-grade tumour — that structural sequences alone cannot provide. These advanced sequences are also the primary tool for distinguishing pseudoprogression or radiation necrosis from genuine tumour recurrence after treatment, a distinction that is clinically decisive but frequently ambiguous on structural imaging alone.",
  },
  {
    type: "p",
    text: "Functional MRI and diffusion tensor tractography are used pre-operatively to map eloquent cortex and critical white matter tracts relative to the tumour, information that is fused into neuronavigation systems in theatre. Post-operative and surveillance imaging then tracks residual tumour, response to chemoradiotherapy, and recurrence, using the same protocol and, wherever feasible, the same scanner for direct comparability across a patient's treatment course.",
  },
  {
    type: "stats",
    items: [
      { value: "~10-20 min", label: "typical additional acquisition time for perfusion and spectroscopy added to a standard tumour protocol" },
      { value: "3T", label: "field strength generally preferred for neuro-oncology perfusion and spectroscopy, for higher spectral and spatial resolution" },
      { value: "Weeks-months", label: "typical window in which pseudoprogression can mimic true recurrence after chemoradiotherapy" },
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Perfusion and spectroscopy answer the question biopsy cannot always answer safely",
    text: "Repeat biopsy of a brain lesion carries real surgical risk, and structural MRI alone often cannot distinguish treatment effect from progression. Perfusion and spectroscopy give oncologists a non-invasive, physiological answer that materially changes whether a patient continues, changes or stops treatment — provided the scanner and protocol are capable of acquiring them reliably.",
  },
  {
    type: "h2",
    id: "spine-imaging",
    number: 6,
    text: "Spine Imaging",
    body: "Spine MRI spans degenerative disease, trauma, cord compression, inflammatory and infective disease, and tumour — and it is one of the highest-volume referral categories in any neurology and neurosurgery service.",
  },
  {
    type: "ul",
    items: [
      "Degenerative disease — disc herniation, canal and foraminal stenosis, facet arthropathy — remains the single largest volume driver, and is frequently over-requested relative to its clinical yield without prior conservative management.",
      "Cord compression and myelopathy require urgent same-day or next-day imaging; a delayed diagnosis of cord compression is one of the recognised causes of avoidable permanent neurological disability.",
      "Inflammatory and demyelinating disease of the cord (including MS-related lesions) requires the same 3D, thin-slice, reproducible protocol discipline described for brain MS imaging.",
      "Infective and neoplastic spine disease (discitis-osteomyelitis, metastatic cord compression, primary cord tumours) needs post-contrast sequences and, often, whole-spine coverage rather than a single segment.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Suspected cord compression is a same-day imaging emergency",
    text: "New bilateral leg weakness, saddle anaesthesia, sphincter disturbance or a rapidly progressive myelopathy should trigger same-day whole-spine MRI, not routine outpatient booking. A neuroimaging service's escalation pathway must make this route explicit to referrers, including who can activate an out-of-hours emergency spine scan.",
  },
  {
    type: "h2",
    id: "functional-dti",
    number: 7,
    text: "Functional MRI and Diffusion Tensor Imaging",
    body: "Functional MRI maps which brain regions activate during a task, and diffusion tensor imaging maps the white matter tracts connecting them — together they let surgeons see both the map and the wiring before they operate.",
  },
  { type: "h3", text: "Functional MRI (fMRI)" },
  {
    type: "p",
    text: "Blood-oxygen-level-dependent (BOLD) fMRI detects the small local increase in oxygenated blood flow that accompanies neural activity, most commonly used clinically to map language and motor cortex before resection of a tumour or an epileptogenic focus near eloquent brain. The patient performs a structured task (finger tapping, word generation, silent naming) inside the scanner while activation maps are generated and overlaid on anatomical images.",
  },
  { type: "h3", text: "Diffusion tensor imaging (DTI) and tractography" },
  {
    type: "p",
    text: "DTI measures the directionality of water diffusion along white matter fibre bundles, since water diffuses preferentially along, rather than across, myelinated axons. Tractography reconstructs major white matter pathways — the corticospinal tract, the arcuate fasciculus, the optic radiations — from this directional data, letting a surgeon see how close a tumour sits to a critical tract that, if transected, would cause permanent deficit.",
  },
  {
    type: "diagram",
    id: "mri-signal-chain",
    title: "From BOLD signal to a surgical tractography map",
    purpose: "Shows how functional and diffusion tensor acquisitions are processed into the overlays surgeons use for pre-operative planning.",
    alt: "Flow diagram: task-based BOLD acquisition or multi-directional diffusion acquisition, statistical activation mapping or tensor fitting, fibre tract reconstruction, co-registration with the anatomical tumour-protocol MRI, and export of the fused map into the neuronavigation system used in theatre.",
    caption: "Figure 2 — Functional and diffusion tensor data only become clinically useful once fused with the anatomical scan and exported into neuronavigation.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "What a functional/DTI-capable programme requires beyond a standard scanner",
    items: [
      "Echo-planar imaging sequences with adequate multi-shell diffusion directions (typically 32 or more) for reliable tractography",
      "Task-presentation hardware — MR-compatible visual display, response pads, audio system for the patient to perform the activation task",
      "Post-processing workstation and licensed analysis software for BOLD statistical mapping and tractography reconstruction",
      "A technologist and/or physicist trained specifically in functional protocol acquisition and quality control",
      "An interface to the neurosurgical neuronavigation system so fused maps can be imported into theatre",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Patient motion is the main failure mode in functional imaging",
    text: "BOLD and diffusion tensor sequences are exquisitely sensitive to head motion, far more than a standard structural scan. Head immobilisation, patient coaching before the scan, and real-time motion monitoring during acquisition materially affect whether the resulting map is usable for surgical planning.",
  },
  {
    type: "h2",
    id: "scanner-requirements",
    number: 8,
    text: "Scanner Requirements for a Neuroimaging Service",
    body: "A neuroimaging service can be run on a well-specified 1.5T system, but 3T meaningfully improves diagnostic yield in epilepsy, functional imaging, diffusion tensor tractography and neuro-oncology perfusion.",
  },
  {
    type: "comparison",
    title: "1.5T versus 3T for a neurology-focused MRI service",
    headers: ["Requirement", "1.5T", "3T"],
    rows: [
      ["General stroke, MS and spine imaging", "Fully adequate with a well-designed protocol", "Faster acquisition or finer resolution; not clinically essential"],
      ["Epilepsy protocol (hippocampal detail, cortical dysplasia)", "Usable but lower sensitivity", "Materially improves detection of subtle structural lesions"],
      ["Functional MRI and diffusion tensor tractography", "Feasible, lower signal-to-noise", "Preferred — higher BOLD contrast and finer tract resolution"],
      ["Neuro-oncology perfusion and spectroscopy", "Usable", "Preferred for spectral and spatial resolution"],
      ["Susceptibility artefact near skull base, implants and blood products", "Lower artefact burden", "Higher susceptibility artefact requires more careful shimming"],
      ["Siting cost and implant tolerance", "Lower cost, more implant-tolerant", "Higher cost, stricter SAR and implant limits"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "There is no single correct field strength for neurology — the decision should be driven by which named clinical programmes the hospital intends to run, not by field strength as a proxy for quality.",
    clinicalInterpretation: "A hospital running only stroke, general MS follow-up and spine imaging is well served by 1.5T. A hospital adding epilepsy surgery work-up, functional pre-operative mapping or a neuro-oncology perfusion programme should budget for 3T.",
    hospitalRecommendation: "Where resources allow only one scanner, specify 3T with a full neuro sequence package if epilepsy surgery or advanced neuro-oncology are funded, named clinical programmes; otherwise a well-specified 1.5T with a strong head coil and diffusion package remains the lower-risk, lower-cost choice.",
  },
  {
    type: "requirements",
    checklist: [
      "Multi-shell diffusion-weighted imaging capability (minimum 3 b-values, ideally 32+ diffusion directions for tractography)",
      "Perfusion imaging (dynamic susceptibility contrast, and ideally arterial spin labelling for non-contrast perfusion)",
      "Single-voxel and, ideally, multi-voxel MR spectroscopy",
      "3D volumetric T1 and FLAIR sequences with sub-millimetre isotropic resolution for epilepsy and volumetric analysis",
      "Susceptibility-weighted or gradient-echo imaging for microbleed and haemorrhage detection",
      "Echo-planar imaging hardware and gradient performance adequate for functional and diffusion tensor acquisition",
      "Deep-learning or parallel imaging acceleration to keep stroke and paediatric neuro protocols short",
      "24/7 scanner availability or an agreed after-hours access protocol for stroke escalation",
    ],
    specs: {
      title: "Indicative neuro-capable MRI specification",
      rows: [
        { label: "Field strength", value: "1.5T (general) or 3T (epilepsy/functional/neuro-oncology programme)" },
        { label: "Gradient strength", value: "Minimum ~33 mT/m; 45+ mT/m preferred for diffusion tensor and functional work" },
        { label: "Head coil", value: "20-32 channel dedicated head/neck coil" },
        { label: "Diffusion capability", value: "Multi-shell, 32+ direction diffusion tensor package" },
        { label: "Reconstruction", value: "Deep-learning or advanced parallel imaging acceleration" },
      ],
    },
  },
  {
    type: "callout",
    variant: "tip",
    title: "Specify the sequence package, not just the magnet",
    text: "Two scanners of identical field strength can differ enormously in what they can actually deliver for neurology, depending on which diffusion, perfusion, spectroscopy and functional packages are licensed. Put the sequence list in the tender document, not just the tesla rating.",
  },
  {
    type: "h2",
    id: "coil-requirements",
    number: 9,
    text: "Coils and Sequence Infrastructure",
    body: "For neuroimaging, the head coil is the single hardware component with the greatest influence on image quality — more so than magnet field strength beyond a certain point.",
  },
  {
    type: "ul",
    items: [
      "A 20- to 32-channel dedicated head/neck coil is the practical minimum for a serious neuroimaging service; higher channel counts improve signal-to-noise and support faster parallel-imaging acceleration for stroke protocols.",
      "A dedicated spine coil array (or a combined head-spine array for whole-neuraxis studies) is essential for cord and whole-spine imaging, particularly in suspected metastatic cord compression or demyelinating disease requiring simultaneous brain and cord imaging.",
      "Coil condition degrades silently — a cracked element or a damaged cable reduces signal in a specific region without an obvious visual fault, which is why coil quality assurance should be a scheduled, documented task rather than a reactive one.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Coil inventory for a full neurology programme",
    items: [
      "Dedicated head/neck coil, minimum 20 channels",
      "Spine array coil covering the full neuraxis for whole-spine studies",
      "Small flexible surface coils for cranial nerve and pituitary detail where relevant",
      "A documented rotation and inspection schedule, with one spare head coil held on site given typical replacement lead times",
    ],
  },
  {
    type: "h2",
    id: "workflow-design",
    number: 10,
    text: "Workflow Design for a Neuroimaging Service",
    body: "A neuroimaging service must run two workflows in parallel on the same scanner: an interruption-ready emergency stroke pathway, and a precisely scheduled elective pathway for MS, epilepsy, tumour and spine referrals.",
  },
  {
    type: "ul",
    items: [
      "Reserve genuine emergency capacity — a protected slot or an explicit, rehearsed process for bumping a routine case — rather than treating stroke as an unplanned interruption that disrupts the whole day's schedule.",
      "Route elective neurology referrals through named, versioned protocols matched to indication (stroke, MS, epilepsy, tumour, spine, functional) rather than a single generic 'brain MRI' order that a booking clerk cannot correctly triage.",
      "Build direct communication channels between the scanner, the reporting radiologist and the referring neurologist for time-critical results, rather than relying solely on routine PACS-to-report turnaround.",
    ],
  },
  {
    type: "diagram",
    id: "hospital-workflow",
    title: "Neuroimaging department workflow — elective and emergency lanes",
    purpose: "Shows how a neuroimaging service separates protected emergency stroke capacity from scheduled elective neurology imaging on the same scanner.",
    alt: "Swimlane diagram with two parallel lanes feeding one MRI scanner: an emergency stroke lane from emergency department triage through immediate scanning to urgent neuro-interventional or neurology decision, and an elective lane from neurology or neurosurgery referral through protocol assignment, scheduling and routine reporting; both lanes converge on shared reporting and PACS/RIS delivery.",
    caption: "Figure 3 — Two lanes, one scanner. Protecting the emergency lane without collapsing elective throughput is the core workflow design problem.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Recurring workflow mistakes in neuroimaging services",
    items: [
      "Treating every stroke call as a full schedule stop rather than a protected, pre-planned interruption with a defined re-book process for displaced patients",
      "Ordering 'MRI brain' without specifying clinical indication, forcing the technologist to guess which protocol to run",
      "Allowing epilepsy and functional imaging referrals to be scanned on whichever protocol is fastest to book, rather than routing them to the correct dedicated sequence set",
      "Failing to track and flag MS and tumour follow-up scans for direct comparison against the correct prior study at the point of booking",
    ],
  },
  {
    type: "h2",
    id: "staffing",
    number: 11,
    text: "Staffing a Neuroimaging Service",
    body: "Neuroimaging quality is protocol- and operator-dependent to an unusual degree, which makes trained staffing — not just equipment — a core requirement of the service.",
  },
  {
    type: "ul",
    items: [
      "A subspecialist neuroradiologist, or a general radiologist with dedicated neuroimaging training, to report stroke, MS, epilepsy and neuro-oncology studies to the standard those pathways require.",
      "MRI technologists trained specifically in neuro protocols — hippocampal-axis angulation, functional task administration, diffusion tensor acquisition — since these are materially different skills from routine body or MSK scanning.",
      "24/7 or on-call technologist and reporting cover for the stroke pathway, agreed contractually and rehearsed, not assumed.",
      "A named clinical lead (typically a neuroradiologist or lead technologist) responsible for protocol governance across the stroke, MS, epilepsy, tumour and spine libraries.",
      "Access to a medical physicist or applications specialist for functional and diffusion tensor quality assurance, particularly where results feed directly into surgical planning.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Reporting turnaround is a clinical safety requirement, not a service metric",
    text: "A technically excellent stroke MRI protocol delivers no clinical benefit if the report does not reach the treating team within the window that keeps thrombectomy or thrombolysis on the table. Reporting turnaround for time-critical neurology studies should be governed by an explicit, monitored target — not left to routine queue order.",
  },
  {
    type: "h2",
    id: "throughput",
    number: 12,
    text: "Throughput and Capacity Planning",
    body: "Neurology imaging volume is driven by a mix of high-frequency, short-protocol studies (stroke, routine follow-up) and lower-frequency, long-protocol studies (epilepsy work-up, functional mapping) that compete for the same scanner time.",
  },
  {
    type: "p",
    text: "A stroke protocol can run in under ten minutes; a full epilepsy or functional/tractography work-up can run 45-75 minutes with task setup and quality checks. Scheduling both on one scanner without a deliberate slot strategy tends to starve one programme in favour of the other — typically elective epilepsy and functional bookings lose out to stroke and routine follow-up unless protected time is set aside.",
  },
  {
    type: "roi",
    paragraph: "Indicative capacity planning for a hospital running a full neurology MRI programme on a dedicated or near-dedicated scanner.",
    bullets: [
      "Stroke protocol: 10-15 minutes table time; must be available as an unscheduled priority slot at any hour",
      "Routine MS/spine follow-up: 20-30 minutes; batched into standard elective slots",
      "Neuro-oncology tumour protocol with perfusion/spectroscopy: 35-50 minutes",
      "Epilepsy or functional/DTI work-up: 45-75 minutes; typically requires a longer, protected slot and a trained technologist",
    ],
    callout: {
      title: "Indicative daily capacity, single dedicated neuro scanner",
      lines: [
        "A well-run scanner mixing these protocols across a single working shift typically completes 10-16 patients per day",
        "Extended hours, a second technologist shift, or AI-accelerated protocols meaningfully increase this without adding a second magnet",
        "Figures are indicative and vary by case mix, staffing model and site — not a guaranteed volume",
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Protect epilepsy and functional slots explicitly",
    text: "Because these studies are long, infrequent relative to stroke and MS volume, and easy to bump, they are the protocols most often squeezed out of a busy schedule. Ring-fence dedicated slots — for example one or two half-days per week — rather than booking them into general availability.",
  },
  {
    type: "h2",
    id: "ct-integration",
    number: 13,
    text: "Integration with CT",
    body: "CT and MRI are complementary, not competing, in neurology, and a mature service designs a single pathway that routes each patient to the right modality at the right time rather than leaving the choice to habit.",
  },
  {
    type: "p",
    text: "CT remains the fastest way to exclude intracranial haemorrhage and identify a large vessel occlusion, and it is universally available out of hours in a way that a fully staffed 24/7 MRI service often is not, particularly outside major tertiary centres. A well-integrated neurology service uses CT as the first hyperacute triage step and reserves MRI for cases needing greater sensitivity — mismatch imaging, ambiguous onset time, suspected posterior fossa or brainstem pathology that CT resolves poorly, and virtually all non-emergency neurological work-up.",
  },
  {
    type: "ul",
    items: [
      "Shared protocol governance between CT and MRI teams prevents duplicate or contradictory imaging requests for the same clinical question.",
      "A single, agreed escalation rule (for example: CT negative or equivocal in a patient with a strong clinical suspicion of stroke or posterior fossa pathology triggers immediate MRI) removes ambiguity from out-of-hours decision-making.",
      "Where CT and MRI are on separate hospital sites, a documented transfer and image-sharing protocol is as important as either scanner's own specification.",
    ],
  },
  {
    type: "callout",
    variant: "note",
    title: "AbuFarha Medical's role",
    text: "AbuFarha Medical supplies, installs, commissions, trains and services MRI, CT and related diagnostic imaging equipment — supporting hospitals in building an integrated neuroimaging pathway across modalities. AbuFarha does not construct hospital buildings; siting and construction remain the responsibility of the hospital's own architectural and construction partners.",
  },
  {
    type: "h2",
    id: "cathlab-integration",
    number: 14,
    text: "Integration with the Cath Lab and Thrombectomy Pathway",
    body: "For large vessel occlusion stroke, the imaging suite and the neuro-interventional cath lab must function as one continuous pathway, because the clinical benefit of thrombectomy erodes with every additional minute of delay.",
  },
  {
    type: "p",
    text: "Once imaging confirms a large vessel occlusion with salvageable tissue, the patient needs rapid transfer to a neuro-interventional suite — frequently the same biplane cath lab used for cardiac and peripheral interventional work, staffed by an interventional neuroradiologist or neuro-interventionalist. The efficiency of this handover, not any single piece of equipment, is usually the rate-limiting step in door-to-groin-puncture time.",
  },
  {
    type: "ul",
    items: [
      "Co-locating or closely linking the imaging suite and the neuro-interventional cath lab shortens transfer time more reliably than any single technology upgrade.",
      "A shared, real-time image transfer link between the MRI/CT workstation and the cath lab lets the interventional team review vessel anatomy before the patient even arrives in the room.",
      "A standing multidisciplinary stroke protocol — pre-agreed activation criteria, a single phone call that mobilises imaging, neurology and the cath lab team simultaneously — removes sequential handover delay.",
      "Biplane angiography systems used for thrombectomy should be maintained and serviced on the same rigorous uptime standard as the imaging equipment feeding the pathway, since a cath lab outage stalls the entire stroke service regardless of imaging performance.",
    ],
  },
  {
    type: "diagram",
    id: "exam-timeline",
    title: "Door-to-groin-puncture timeline in a large vessel occlusion stroke",
    purpose: "Breaks the stroke-to-thrombectomy interval into its component stages to show where imaging speed and cath lab integration each contribute.",
    alt: "Proportional timeline from emergency department arrival to groin puncture: initial clinical triage, non-contrast CT and CT angiography or MRI diffusion-perfusion imaging, multidisciplinary decision and consent, transfer to the neuro-interventional suite, and final positioning before groin puncture; the imaging segment and the transfer segment are highlighted as the two most modifiable intervals.",
    caption: "Figure 4 — The imaging and transfer segments are where a well-integrated pathway saves the most time.",
  },
  {
    type: "knowledgeBox",
    variant: "future-technology",
    title: "Mobile and integrated imaging-intervention suites",
    text: "Some centres now use hybrid angiography-CT suites or closely co-located imaging and neuro-interventional rooms to remove the transfer step almost entirely for suspected large vessel occlusion. This is a significant capital investment appropriate for high-volume comprehensive stroke centres rather than a general requirement, but it illustrates the direction of travel: the imaging-to-intervention interval is the target, not the imaging quality alone.",
  },
  {
    type: "h2",
    id: "quality-governance",
    number: 15,
    text: "Quality, Protocol Governance and Reporting",
    body: "Because neurology relies so heavily on serial and comparative imaging, protocol governance and structured reporting matter as much to clinical outcome as the scanner hardware itself.",
  },
  {
    type: "ul",
    items: [
      "Maintain a single, versioned protocol library for stroke, MS, epilepsy, neuro-oncology and spine, owned jointly by a lead neuroradiologist and lead technologist, reviewed on a fixed schedule.",
      "Use structured reporting templates for MS (lesion count and location by McDonald criteria region) and tumour response (RANO or equivalent criteria) so serial reports are directly comparable across radiologists and over time.",
      "Track and audit time-to-report for stroke studies against an agreed target, and review outliers as a standing quality item rather than an occasional exercise.",
      "Periodically compare scanner output against phantom-based quality assurance, particularly after any software upgrade that touches diffusion, perfusion or functional sequence packages.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "A sequence upgrade can silently break comparability",
    text: "A software or coil upgrade that changes diffusion b-values, perfusion post-processing or reconstruction algorithms can alter quantitative outputs (apparent diffusion coefficient values, relative cerebral blood volume, lesion volumes) even when the images look visually similar. Document every protocol-relevant upgrade and flag affected patients' follow-up scans for careful comparative reporting.",
  },
  {
    type: "h2",
    id: "building-the-service",
    number: 16,
    text: "Building the Service: A Practical Roadmap",
    body: "A hospital building a neuroimaging service from scratch should sequence its investment around named clinical programmes rather than acquiring capability speculatively.",
  },
  {
    type: "ul",
    items: [
      "Start with the foundation every hospital needs: a stroke-capable pathway (CT-first triage with MRI escalation), general MS and spine imaging, and a basic tumour protocol — this alone serves the majority of neurology referrals.",
      "Add epilepsy and functional/DTI capability once a genuine surgical epilepsy programme or neurosurgical case volume justifies the additional coil, sequence licensing, staff training and protected scheduling this requires.",
      "Formalise the cath lab and neuro-interventional link before, not after, expanding stroke MRI capacity — imaging speed delivers no clinical benefit if the downstream intervention pathway cannot keep pace.",
      "Invest in staff training and protocol governance in parallel with equipment, since neurology's diagnostic yield is unusually dependent on correct protocol selection and consistent execution.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Questions to ask before committing capital to a neurology programme expansion",
    items: [
      "Which named clinical programme (epilepsy surgery, functional pre-operative mapping, advanced neuro-oncology) justifies this specific capability?",
      "Is there a committed neuroradiologist or trained reporting pathway for the advanced studies this equipment will produce?",
      "Does the cath lab or neuro-interventional pathway have capacity to act on the imaging this investment will generate?",
      "What technologist training is included, and is it sufficient for functional task administration and diffusion tensor acquisition specifically?",
      "What is the realistic weekly slot allocation this programme needs, and can it be protected without starving existing stroke and routine neuro volume?",
    ],
  },
  {
    type: "h2",
    id: "faq",
    number: 17,
    text: "Frequently Asked Questions",
    body: "Common questions from hospital teams building or expanding a neuroimaging service.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Does every hospital need 3T MRI to run a neurology service?",
        a: "No. A well-specified 1.5T system with a good head coil and diffusion package covers stroke, general MS follow-up and spine imaging adequately. 3T becomes clinically important specifically for epilepsy surgery work-up, functional pre-operative mapping and advanced neuro-oncology perfusion and spectroscopy.",
      },
      {
        q: "Why does stroke imaging use both CT and MRI instead of just one?",
        a: "CT is faster, more widely available out of hours, and excellent for excluding haemorrhage and identifying large vessel occlusion. MRI's diffusion and perfusion sequences are far more sensitive for confirming infarct core and identifying salvageable tissue, particularly in patients presenting late or with unknown onset time. Most mature pathways use CT for immediate triage and MRI for escalation.",
      },
      {
        q: "How often should an MS patient be rescanned?",
        a: "Typically annually or every two years for stable patients on treatment, with more frequent imaging after a relapse or a change of disease-modifying therapy. The specific interval is a clinical decision, but every follow-up scan should use the same protocol as the prior study for direct comparability.",
      },
      {
        q: "What makes an epilepsy MRI protocol different from a routine brain scan?",
        a: "Epilepsy protocols use thin-slice, high-resolution 3D volumetric sequences and oblique coronal imaging angled along the hippocampal axis, specifically designed to detect subtle hippocampal sclerosis and focal cortical dysplasia that a routine brain protocol is not optimised to resolve.",
      },
      {
        q: "What is diffusion-perfusion mismatch and why does it matter for stroke treatment eligibility?",
        a: "Diffusion imaging shows the infarct core; perfusion imaging shows the wider area of reduced blood flow. Where the perfusion deficit is larger than the diffusion abnormality, that mismatch represents salvageable penumbra, which can extend thrombectomy eligibility to patients presenting later than the traditional time window allows.",
      },
      {
        q: "Can functional MRI replace awake craniotomy for mapping eloquent cortex?",
        a: "No. Functional MRI provides valuable pre-operative planning information but is generally used alongside, not instead of, intra-operative mapping techniques such as awake craniotomy with direct cortical stimulation, which remains more definitive for critical decisions during surgery.",
      },
      {
        q: "Why is diffusion tensor tractography important for tumour surgery?",
        a: "It reconstructs major white matter pathways, such as the corticospinal tract, so the surgical team can see how close a tumour sits to a critical tract before operating, informing the balance between maximal tumour resection and preserving neurological function.",
      },
      {
        q: "How many patients per day can a dedicated neuro MRI scanner realistically handle?",
        a: "A well-run scanner mixing stroke, MS, spine and tumour protocols across a single working shift typically completes around 10 to 16 patients per day, depending heavily on case mix, staffing and whether long epilepsy or functional studies are scheduled that day; this is indicative, not a guarantee.",
      },
      {
        q: "Does a hospital need a co-located cath lab to run a stroke thrombectomy service?",
        a: "Co-location or close proximity between imaging and the neuro-interventional suite significantly shortens transfer time and is strongly preferred, but the essential requirement is a fast, rehearsed transfer and communication pathway between imaging, neurology and the interventional team, wherever the rooms are physically located.",
      },
      {
        q: "What is the biggest cause of poor throughput in a neuroimaging service?",
        a: "Unmanaged competition between emergency stroke demand and long elective studies such as epilepsy or functional imaging on the same scanner, without protected slots for either, is the most common cause of both stroke delay and elective backlog.",
      },
      {
        q: "Is gadolinium contrast required for most neurology MRI studies?",
        a: "No — many stroke, routine MS surveillance and spine degenerative studies are performed without contrast. Gadolinium is used selectively where enhancement changes management, such as identifying active MS lesions, characterising a tumour, or assessing infective spine disease, with renal function screening and macrocyclic agent preference as standard governance.",
      },
      {
        q: "How does AbuFarha Medical support a hospital building a neuroimaging service?",
        a: "AbuFarha Medical supplies, installs, commissions, trains and provides after-sales service for MRI, CT and related diagnostic imaging equipment, and can advise on coil selection, sequence packages and integration with existing CT and cath lab infrastructure. AbuFarha does not construct hospital buildings.",
      },
      {
        q: "What is the minimum staffing needed to run a credible neuroimaging service?",
        a: "At minimum, a radiologist with genuine neuroimaging training or access to subspecialist reporting, MRI technologists trained in neuro-specific protocols, and an agreed 24-hour stroke escalation pathway. Epilepsy and functional programmes additionally need trained task-administration staff and post-processing support.",
      },
    ],
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Medical guidelines",
        items: [
          { label: "American Heart Association / American Stroke Association acute ischaemic stroke management guidelines" },
          { label: "National Institute for Health and Care Excellence (NICE) stroke and TIA guidance" },
          { label: "McDonald Criteria for the diagnosis of multiple sclerosis (revised)" },
          { label: "International League Against Epilepsy (ILAE) neuroimaging recommendations for epilepsy" },
        ],
      },
      {
        title: "Scientific publications",
        items: [
          { label: "Radiology and Neurology journal literature on diffusion-perfusion mismatch imaging in stroke" },
          { label: "American Journal of Neuroradiology (AJNR) literature on epilepsy protocol optimisation and hippocampal imaging" },
          { label: "Response Assessment in Neuro-Oncology (RANO) criteria publications" },
        ],
      },
      {
        title: "Regulatory authorities",
        items: [
          { label: "U.S. Food and Drug Administration (FDA) — MRI device clearances and safety communications" },
          { label: "UK Medicines and Healthcare products Regulatory Agency (MHRA)" },
          { label: "European Union Medical Device Regulation (EU MDR)" },
        ],
      },
      {
        title: "International standards",
        items: [
          { label: "IEC 60601-2-33 — Particular requirements for the safety of magnetic resonance equipment" },
          { label: "European Society of Radiology (ESR) imaging protocol guidance" },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          { label: "MRI system instructions for use, sequence and coil specifications from major manufacturers (GE HealthCare, Siemens Healthineers, Philips, Canon Medical)" },
        ],
      },
      {
        title: "Medical societies",
        items: [
          { label: "Radiological Society of North America (RSNA)" },
          { label: "International Society for Magnetic Resonance in Medicine (ISMRM)" },
          { label: "American Academy of Neurology (AAN)" },
          { label: "European Academy of Neurology (EAN)" },
        ],
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    number: 18,
    text: "Conclusion",
    body: "A complete neuroimaging service is built by treating stroke, MS, epilepsy, neuro-oncology, spine, and functional/diffusion tensor imaging as distinct clinical programmes, each with its own protocol, staffing and integration requirements sitting on a common, well-specified MRI platform.",
  },
  {
    type: "articleCta",
    heading: "Planning or expanding a neurology imaging service?",
    subheading: "AbuFarha Medical supplies, installs, commissions and trains staff on MRI and CT systems configured for stroke, MS, epilepsy, neuro-oncology and spine imaging, with after-sales support to keep the service running.",
    technology: "MRI",
  },
];
