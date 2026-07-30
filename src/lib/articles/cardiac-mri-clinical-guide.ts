/**
 * "Cardiac MRI: Clinical Value, Protocols and Equipment Requirements" — pillar article content.
 */

import type { ContentBlock, TocItem } from "@/lib/blog";
import solMri from "@/assets/sol-mri.jpg";

export const CARDIAC_MRI_CLINICAL_GUIDE_TOC: TocItem[] = [
  { id: "overview", title: "Cardiac MRI Defined" },
  { id: "indications", title: "Core Clinical Indications" },
  { id: "sequences", title: "The Core Sequence Toolkit" },
  { id: "cine-imaging", title: "Cine SSFP: Function and Volumes" },
  { id: "lge", title: "Late Gadolinium Enhancement" },
  { id: "mapping", title: "T1 and T2 Mapping" },
  { id: "perfusion", title: "Stress Perfusion Imaging" },
  { id: "flow", title: "Flow Quantification" },
  { id: "gating", title: "ECG Gating and Breath-Holding" },
  { id: "arrhythmia", title: "Arrhythmia and the Difficult Patient" },
  { id: "scanner-requirements", title: "Scanner and Coil Requirements" },
  { id: "staffing", title: "Staffing and Training" },
  { id: "integration", title: "Integration with Echo, CT and the Cath Lab" },
  { id: "throughput", title: "Throughput and Scheduling" },
  { id: "reporting", title: "Reporting and Structured Output" },
  { id: "cost", title: "Cost of a Cardiac MRI Programme" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const CARDIAC_MRI_CLINICAL_GUIDE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solMri,
    imageAlt: "Cardiac MRI examination in progress with ECG gating leads on the patient",
    paragraphs: [
      "Cardiac magnetic resonance (CMR) is the reference-standard technique for ventricular volumes, mass and ejection fraction, and it is the only routine imaging modality that combines function, tissue characterisation, perfusion and flow in a single non-ionising examination. Where echocardiography answers most bedside questions quickly and CT coronary angiography excludes obstructive disease efficiently, CMR is what a cardiology service reaches for when the question is about the myocardium itself: is this dilated cardiomyopathy ischaemic or non-ischaemic, is this chest pain with normal coronaries actually myocarditis, is this hibernating segment worth revascularising, and is this thickened septum hypertrophic cardiomyopathy or an infiltrative disease masquerading as it.",
      "For a hospital, however, cardiac MRI is a materially harder capability to stand up than general-purpose MRI. It demands reliable ECG gating on a magnet, breath-hold cooperation from often breathless patients, dedicated cardiac coils and sequences, a technologist who can react to arrhythmia in real time, and a radiologist or cardiologist trained specifically in CMR interpretation — a skill set distinct from general body or neuro reporting. Programmes that treat cardiac MRI as an add-on protocol on a general scanner, without the staffing and workflow behind it, typically produce long, non-diagnostic studies that referrers stop ordering.",
      "This guide sets out the clinical indications that justify a CMR service, the core sequence toolkit that every programme must master, the physiological gating challenges unique to the heart, and the equipment, staffing and workflow requirements that determine whether a cardiac MRI programme becomes a genuine referral driver or an underused room. It closes with how CMR fits alongside echocardiography, cardiac CT and the cath lab in a coherent diagnostic pathway.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "CMR indications, cine and tissue-characterisation sequences, ECG gating, arrhythmia management, scanner and coil requirements, staffing, and integration with echo, CT and cath lab pathways",
    audience:
      "Cardiologists, radiologists, MRI technologists, hospital directors and biomedical procurement teams",
    readingTime: "17 min read",
    technology: "Cardiac Magnetic Resonance Imaging (CMR)",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "Cardiac MRI Defined",
    body: "Cardiac MRI applies ECG-synchronised acquisition and cardiac-specific pulse sequences to a standard MRI platform to produce reproducible measures of ventricular function, myocardial tissue composition, perfusion and blood flow in a single study.",
  },
  {
    type: "ul",
    items: [
      "It is the reference standard for ventricular volumes, mass and ejection fraction, against which echocardiography and CT-derived measurements are routinely validated — a fact that matters directly for serial chemotherapy cardiotoxicity monitoring, where reproducibility between visits determines whether a treatment decision is trustworthy.",
      "Its tissue-characterisation sequences — late gadolinium enhancement and parametric mapping — answer questions no other modality can: they distinguish ischaemic from non-ischaemic scar, quantify diffuse fibrosis without a fixed threshold, and detect oedema and inflammation in myocarditis days before ejection fraction changes.",
      "It is exceptionally sensitive to physiological timing. Unlike neuro or MSK MRI, image quality depends on second-by-second synchronisation with the cardiac cycle and on breath-hold cooperation, which means arrhythmia and patient fitness change the achievable protocol in ways that simply do not apply elsewhere in the scanner's workload.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "CMR is the reference standard for ventricular volumes, mass and ejection fraction — more reproducible than echo for serial follow-up.",
      "Late gadolinium enhancement and T1/T2 mapping give tissue diagnoses (scar pattern, fibrosis, oedema) that no other single modality provides.",
      "ECG gating quality, not magnet field strength, is usually the first thing that limits a CMR programme's diagnostic yield.",
      "Arrhythmia is the most common reason a cardiac study fails; a documented real-time contingency protocol is essential, not optional.",
      "A dedicated cardiac coil, vector ECG gating hardware and a CMR-trained technologist matter more than 1.5T versus 3T for most programmes.",
      "CMR should be positioned in a pathway alongside echo, CT and the cath lab, not run as a standalone service competing for the same referrals.",
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
    id: "indications",
    number: 2,
    text: "Core Clinical Indications",
    body: "CMR earns its place in a diagnostic pathway when the clinical question is about myocardial tissue, function reproducibility, or a structural detail that echo and CT cannot resolve reliably.",
  },
  { type: "h3", text: "Cardiomyopathy" },
  {
    type: "p",
    text: "In dilated, hypertrophic and restrictive cardiomyopathy, CMR provides accurate volumes and mass, identifies the scar pattern that separates ischaemic from non-ischaemic aetiology, and detects infiltrative disease — amyloidosis, sarcoidosis, iron overload — that can mimic hypertrophic cardiomyopathy on echo alone. The scar pattern on late gadolinium enhancement carries independent prognostic value in dilated cardiomyopathy, informing decisions about implantable defibrillator therapy.",
  },
  { type: "h3", text: "Myocarditis" },
  {
    type: "p",
    text: "CMR is central to the diagnosis of acute myocarditis, most often using the Lake Louise criteria, which combine T2-weighted oedema imaging, T1-based hyperaemia and capillary leak markers, and late gadolinium enhancement for necrosis and fibrosis. It is frequently the deciding study in patients presenting with chest pain, raised troponin and unobstructed coronary arteries.",
  },
  { type: "h3", text: "Myocardial viability" },
  {
    type: "p",
    text: "Late gadolinium enhancement quantifies transmural scar extent segment by segment, which predicts whether a hypokinetic segment will recover function after revascularisation. This directly changes surgical and interventional decision-making in ischaemic cardiomyopathy and is one of the strongest evidence-based indications for referral.",
  },
  { type: "h3", text: "Congenital heart disease" },
  {
    type: "p",
    text: "CMR provides comprehensive anatomical and functional assessment of complex congenital anatomy without ionising radiation, which matters for patients who require repeated imaging across a lifetime. Flow quantification is central to shunt assessment, valve regurgitation grading and post-surgical follow-up such as repaired tetralogy of Fallot or coarctation.",
  },
  { type: "h3", text: "Arrhythmogenic right ventricular cardiomyopathy (ARVC)" },
  {
    type: "p",
    text: "CMR assesses right ventricular volumes, regional wall motion and fibrofatty replacement, forming part of the Task Force diagnostic criteria for ARVC. Because right ventricular assessment is intrinsically difficult on echocardiography, CMR is often the deciding investigation in a family being screened for this heritable arrhythmia risk.",
  },
  { type: "h3", text: "Iron overload cardiomyopathy" },
  {
    type: "p",
    text: "T2* mapping quantifies myocardial iron loading in transfusion-dependent conditions such as thalassaemia major, guiding chelation therapy before irreversible heart failure develops. This is one of the few CMR applications where a single quantitative number directly drives a treatment threshold.",
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Viability assessment changed revascularisation decisions",
    text: "Before late gadolinium enhancement became routine, viability was inferred indirectly from nuclear perfusion or dobutamine echo. Transmural scar extent on LGE gives a segment-by-segment probability of functional recovery after revascularisation, and it is now one of the most defensible reasons a cardiology service commissions a CMR programme rather than relying solely on nuclear or echo viability testing.",
  },
  {
    type: "h2",
    id: "sequences",
    number: 3,
    text: "The Core Sequence Toolkit",
    body: "A complete cardiac MRI study is built from a small number of sequence families, each answering a distinct clinical question, acquired in a fixed and rehearsed order.",
  },
  {
    type: "diagram",
    id: "mri-signal-chain",
    title: "Cardiac MRI sequence toolkit and the question each answers",
    purpose: "Maps the five core CMR sequence families to the specific clinical question each one resolves, so referrers and trainees understand why a full study takes the time it does.",
    alt: "Flow diagram showing five cardiac MRI sequence families in sequence: cine SSFP for function and volumes, late gadolinium enhancement for scar and fibrosis, T1 and T2 mapping for diffuse disease and oedema, stress perfusion for ischaemia, and phase-contrast flow quantification for shunts and valve disease, each linked to its primary clinical question.",
    caption: "Figure 1 — The CMR sequence toolkit. Each family is ECG-gated but interrogates a different physical property of the myocardium.",
  },
  {
    type: "table",
    caption: "Core CMR sequence families and their clinical role",
    headers: ["Sequence family", "What it measures", "Primary clinical use"],
    rows: [
      [
        "Cine SSFP",
        "Bright-blood dynamic images across the cardiac cycle",
        "Ventricular volumes, mass, ejection fraction, wall motion, valve morphology",
      ],
      [
        "Late gadolinium enhancement (LGE)",
        "Regional gadolinium retention in scarred or infiltrated tissue",
        "Infarct scar, viability, non-ischaemic fibrosis pattern, infiltrative disease",
      ],
      [
        "T1 mapping (native and post-contrast)",
        "Quantitative T1 relaxation time and derived extracellular volume",
        "Diffuse fibrosis, amyloidosis, myocarditis, iron overload screening",
      ],
      [
        "T2 mapping",
        "Quantitative T2 relaxation time",
        "Myocardial oedema in acute myocarditis and infarction",
      ],
      [
        "T2* mapping",
        "Signal decay sensitive to iron and susceptibility",
        "Quantification of myocardial iron loading",
      ],
      [
        "Stress perfusion",
        "First-pass gadolinium transit under pharmacological stress",
        "Inducible myocardial ischaemia",
      ],
      [
        "Phase-contrast flow",
        "Velocity-encoded blood flow through a chosen plane",
        "Shunt quantification (Qp:Qs), valve regurgitation, aortic flow",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "No single sequence in this table replaces another; a diagnostic CMR study is built by selecting the subset relevant to the clinical question, not by running every sequence on every patient. Over-protocolling is the most common cause of slot overrun in cardiac MRI.",
    clinicalInterpretation: "Cine and LGE together answer the majority of cardiomyopathy and viability referrals. Mapping is added when diffuse or inflammatory disease is suspected, and perfusion or flow only when ischaemia or a shunt/valve question is explicitly being asked.",
    hospitalRecommendation: "Build a small number of named, indication-specific protocols (cardiomyopathy, viability, myocarditis, congenital, iron overload) rather than one universal 90-minute study, and require the referrer to select one at the point of request.",
  },
  {
    type: "h2",
    id: "cine-imaging",
    number: 4,
    text: "Cine SSFP: Function and Volumes",
    body: "Balanced steady-state free precession (SSFP) cine imaging is the functional backbone of every cardiac MRI study, providing the bright-blood, high-contrast dynamic images from which volumes and ejection fraction are measured.",
  },
  {
    type: "p",
    text: "A standard cine stack covers the left and right ventricles in contiguous short-axis slices from base to apex, supplemented by long-axis two-, three- and four-chamber views. Each slice is acquired as a breath-hold cine of 20–30 cardiac phases, retrospectively or prospectively gated to the ECG, giving a smooth loop of the beating heart from which endocardial and epicardial contours are traced to derive end-diastolic and end-systolic volumes, stroke volume, ejection fraction and myocardial mass.",
  },
  {
    type: "p",
    text: "Because contours are traced on the same bright-blood/dark-myocardium contrast at every centre and vendor, cine SSFP volumetry is highly reproducible between studies and between institutions — the property that makes it the reference standard against which echocardiographic and CT-derived ejection fraction are validated, and the reason it is the preferred technique for serial monitoring such as chemotherapy cardiotoxicity surveillance.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "SSFP banding is a field-homogeneity artefact, not a coil fault",
    text: "SSFP sequences are exquisitely sensitive to local field inhomogeneity, which produces dark banding artefact, often worsened by metallic implants, poor shimming, or an off-isocentre patient position. On 3T systems, banding is more prominent because of shorter T2* effects, which is one practical reason many cardiac programmes still favour 1.5T for routine cine and LGE work.",
  },
  {
    type: "h2",
    id: "lge",
    number: 5,
    text: "Late Gadolinium Enhancement",
    body: "Late gadolinium enhancement identifies areas of myocardium with expanded extracellular space — scar, necrosis or infiltration — as regions of abnormal gadolinium retention roughly ten to twenty minutes after contrast injection.",
  },
  {
    type: "p",
    text: "Normal myocardium clears gadolinium quickly through its dense capillary network; scarred, necrotic or infiltrated tissue retains it because of an expanded extracellular volume and delayed washout, appearing bright on an inversion-recovery sequence tuned to null normal myocardium. The distribution pattern is diagnostic in itself: subendocardial or transmural enhancement respecting a coronary territory indicates ischaemic scar, while mid-wall, subepicardial or patchy non-coronary patterns point toward non-ischaemic causes such as myocarditis, sarcoidosis or dilated cardiomyopathy.",
  },
  {
    type: "p",
    text: "Correct inversion-time selection — the point at which normal myocardium is nulled to black — is technique-dependent and drifts as contrast washes out during the scan, so most protocols use a Look-Locker or automated inversion-time scout immediately before acquisition, repeated if the study runs long.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Frequent errors in LGE acquisition",
    items: [
      "Using a fixed inversion time from an earlier scan instead of re-scouting as contrast washes out",
      "Scanning too soon after injection, before non-viable tissue has fully differentiated from normal myocardium",
      "Failing to image in two orthogonal planes, which can miss small or subendocardial scar",
      "Not screening renal function before gadolinium administration in at-risk patients",
    ],
  },
  {
    type: "h2",
    id: "mapping",
    number: 6,
    text: "T1 and T2 Mapping",
    body: "Parametric mapping replaces the qualitative bright-versus-dark judgement of conventional sequences with an actual quantitative measurement in milliseconds for every myocardial pixel.",
  },
  {
    type: "p",
    text: "Native T1 mapping (acquired without contrast) is elevated in diffuse fibrosis, oedema and infiltrative disease such as amyloidosis, and reduced in iron overload and Fabry disease — giving each condition a distinguishable signature that LGE alone cannot provide, because LGE depends on a normal reference region that may not exist when fibrosis is diffuse rather than focal. Combining native and post-contrast T1 values with the patient's haematocrit yields extracellular volume fraction, a quantitative surrogate for diffuse interstitial fibrosis that is reproducible enough to track disease progression or regression over time.",
  },
  {
    type: "p",
    text: "T2 mapping quantifies myocardial water content directly, making it a more robust marker of acute oedema than conventional T2-weighted imaging, which suffers from signal inhomogeneity and surface-coil intensity variation. It is a core component of the updated Lake Louise criteria for myocarditis, typically paired with T1-based markers of hyperaemia and capillary leak.",
  },
  {
    type: "knowledgeBox",
    variant: "quick-facts",
    title: "Mapping values at a glance",
    items: [
      "Native T1 at 1.5T is typically around 950–1050 ms in normal myocardium; values are field-strength and vendor sequence dependent",
      "Elevated native T1 and extracellular volume suggest diffuse fibrosis, oedema or infiltration",
      "Reduced native T1 suggests iron overload or Fabry disease — direction of change is diagnostic",
      "T2 mapping elevation indicates acute oedema and is part of the updated Lake Louise myocarditis criteria",
      "T2* below approximately 20 ms indicates myocardial iron loading requiring chelation review",
    ],
  },
  {
    type: "callout",
    variant: "important",
    title: "Mapping values are sequence- and vendor-specific",
    text: "Native T1 and T2 values differ meaningfully between vendors, field strengths and even software versions. Every site must establish its own local normal reference range at commissioning and whenever a sequence or software version changes, rather than relying on published literature values from a different platform.",
  },
  {
    type: "h2",
    id: "perfusion",
    number: 7,
    text: "Stress Perfusion Imaging",
    body: "First-pass perfusion imaging under pharmacological stress detects inducible myocardial ischaemia by tracking the transit of a gadolinium bolus through the myocardium during peak vasodilator or inotropic stress.",
  },
  {
    type: "p",
    text: "A vasodilator agent such as adenosine or regadenoson maximises blood flow through normal coronary segments; a haemodynamically significant stenosis limits the flow reserve of the territory it supplies, producing a visibly delayed or reduced signal-intensity upslope on the first pass of contrast through that segment compared with normally perfused myocardium. A matched rest perfusion acquisition, or comparison against the LGE scar map, distinguishes true ischaemia from a fixed infarct-related perfusion defect.",
  },
  {
    type: "p",
    text: "Stress perfusion CMR has a strong evidence base against invasive fractional flow reserve and nuclear perfusion imaging for detecting significant coronary artery disease, without the radiation dose of either nuclear imaging or invasive angiography, which is a meaningful advantage for younger patients or those requiring repeated testing.",
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Stress perfusion needs resuscitation-ready staffing in the room",
    text: "Vasodilator stress agents can cause bronchospasm, heart block or symptomatic hypotension. Stress CMR must be performed with a physician or advanced practitioner present, full resuscitation equipment and reversal agents (such as aminophylline for adenosine) immediately available outside the controlled zone, and continuous ECG and blood-pressure monitoring throughout the stress phase.",
  },
  {
    type: "h2",
    id: "flow",
    number: 8,
    text: "Flow Quantification",
    body: "Phase-contrast flow imaging encodes blood velocity directly into the MR signal, allowing quantitative measurement of flow through any plane the operator chooses to prescribe.",
  },
  {
    type: "p",
    text: "By applying a bipolar gradient that produces a phase shift proportional to velocity, phase-contrast sequences generate a velocity map alongside the anatomical image. Placing the imaging plane across the aorta, pulmonary trunk or a shunt jet allows calculation of stroke volume, regurgitant fraction, pulmonary-to-systemic flow ratio (Qp:Qs) and peak velocity across a stenotic valve — all without the acoustic window limitations that constrain Doppler echocardiography.",
  },
  {
    type: "p",
    text: "This makes flow quantification particularly valuable in congenital heart disease follow-up, where shunt sizing and post-surgical valve or conduit assessment often cannot be answered reliably by echo alone, and in valvular regurgitation grading where CMR provides a direct volumetric quantity rather than a semi-quantitative echo grade.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Plan flow imaging perpendicular to the vessel, not the body axis",
    text: "Velocity accuracy depends on the imaging plane being genuinely perpendicular to the vessel of interest at the moment of acquisition, which for the aortic root often means an oblique plane rather than a simple axial slice. Poor plane prescription is the single most common cause of inaccurate flow quantification and should be checked against a perpendicular localiser before acquisition, not corrected retrospectively.",
  },
  {
    type: "h2",
    id: "gating",
    number: 9,
    text: "ECG Gating and Breath-Holding",
    body: "Cardiac MRI is only possible because the acquisition is synchronised to the electrical and respiratory cycle; poor gating is the single most common cause of a non-diagnostic cardiac study.",
  },
  {
    type: "p",
    text: "Inside a strong static magnetic field, blood flow through the aortic arch generates a magnetohydrodynamic voltage that distorts the ST segment and T wave on a standard ECG trace, and RF pulses induce further electrical interference. Dedicated MR-conditional vector ECG systems compensate for this distortion algorithmically to reliably detect the R wave, which triggers each cardiac-phase acquisition. Poor electrode placement, inadequate skin preparation or a weak signal are the most common preventable causes of mistriggering.",
  },
  {
    type: "p",
    text: "Retrospective gating acquires data continuously through the whole cardiac cycle and reconstructs it against the recorded ECG afterward, capturing late-diastolic filling but requiring a regular rhythm; prospective triggering acquires only a defined window after each R wave, reducing radiofrequency and gradient exposure and helium/gradient heat load but truncating late diastole. Breath-holding, typically 8–15 seconds per acquisition, eliminates respiratory motion during the acquisition window; patients who cannot sustain a breath-hold require free-breathing techniques with respiratory navigators or averaging, which lengthen the study and reduce spatial resolution.",
  },
  {
    type: "diagram",
    id: "scanning-process",
    title: "Cardiac MRI acquisition cycle: ECG trigger to breath-hold acquisition",
    purpose: "Shows how ECG triggering and breath-holding combine within a single cardiac MRI acquisition, clarifying why arrhythmia and poor breath-hold both directly degrade image quality.",
    alt: "Cyclical diagram showing the R-wave detected on a vector ECG triggering a cardiac-phase acquisition window, synchronised with a patient breath-hold instruction, repeated across a short-axis or long-axis stack until the full ventricular coverage is acquired.",
    caption: "Figure 2 — The gating cycle. Every irregular R-R interval or missed breath-hold degrades a different part of this loop.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Electrode placement determines gating reliability",
    text: "Shave and abrade the skin, use MR-conditional electrodes placed on the left side of the chest away from the direct field of view where possible, and route leads to avoid loops that can cause RF heating. A trace that looks acceptable on the console preview can still mistrigger during a long breath-hold acquisition if lead contact degrades mid-scan, so the technologist should recheck the trace between sequences, not only at setup.",
  },
  {
    type: "h2",
    id: "arrhythmia",
    number: 10,
    text: "Arrhythmia and the Difficult Patient",
    body: "Irregular rhythm is the most common reason a cardiac MRI study is degraded or aborted, and every programme needs a rehearsed, real-time contingency protocol rather than an improvised response.",
  },
  {
    type: "p",
    text: "Atrial fibrillation, frequent ectopy and variable heart block all disrupt the R-R interval that gating depends on, causing arrhythmia-rejection algorithms to discard beats and prolong acquisition, or producing blurred, banded cine images if rejection is disabled. Free-breathing real-time cine sequences, which do not require breath-holding or strict ECG triggering, are the practical fallback for patients in atrial fibrillation or those who cannot cooperate with breath-holds, at some cost to spatial and temporal resolution.",
  },
  {
    type: "ul",
    items: [
      "Widen the arrhythmia-rejection window before starting if a pre-scan ECG shows an irregular baseline rhythm, rather than discovering the problem mid-sequence",
      "Switch to real-time, non-gated cine sequences for patients in persistent atrial fibrillation or with frequent ectopic beats",
      "Shorten breath-holds and split long acquisitions into two shorter ones for breathless or heart-failure patients",
      "Use free-breathing navigator-gated techniques for children, sedated patients and anyone who cannot reliably hold their breath",
      "Document the gating strategy actually used in the report, since it materially affects the confidence of volumetric measurements",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Build the arrhythmia pathway into the booking process",
    text: "Ask the referrer for the patient's known rhythm at the point of scheduling, and flag known atrial fibrillation or frequent ectopy so the technologist prepares a real-time protocol in advance rather than improvising after the patient is already on the table. This single scheduling change materially reduces both wasted slots and non-diagnostic studies.",
  },
  {
    type: "h2",
    id: "scanner-requirements",
    number: 11,
    text: "Scanner and Coil Requirements",
    body: "Cardiac MRI can be performed on most modern 1.5T and 3T platforms, but a genuine cardiac capability depends on dedicated hardware and software beyond a standard body MRI configuration.",
  },
  {
    type: "requirements",
    checklist: [
      "MR-conditional vector ECG gating hardware validated for cardiac triggering, not a generic peripheral pulse unit",
      "A dedicated multi-channel cardiac phased-array receive coil sized and shaped for anterior chest coverage",
      "Cine SSFP, LGE, T1/T2/T2* mapping and phase-contrast flow sequence packages licensed and installed",
      "Stress perfusion sequence package with vendor-validated first-pass timing",
      "Sufficient gradient slew rate and amplitude for short breath-hold cine and perfusion acquisitions",
      "Contrast injector compatible with the timed bolus requirements of first-pass perfusion imaging",
      "Reliable respiratory bellows or navigator hardware for free-breathing sequences",
      "Post-processing workstation with validated volumetric, LGE quantification and mapping analysis software",
    ],
    specs: {
      title: "Typical cardiac-capable platform baseline",
      rows: [
        { label: "Field strength", value: "1.5T (most common) or 3T (higher SNR, more banding artefact)" },
        { label: "Gradient performance", value: "High slew rate sufficient for sub-15-second breath-hold cine" },
        { label: "Cardiac coil", value: "Dedicated 16–32 channel anterior cardiac phased array" },
        { label: "Gating", value: "MR-conditional vector ECG with real-time trace display" },
        { label: "Software", value: "Cine, LGE, T1/T2/T2* mapping, perfusion and 2D/4D flow packages" },
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Cardiac-specific questions to add to an MRI tender",
    items: [
      "Is the vector ECG gating system included, or a separately licensed and priced option?",
      "Which mapping sequences (T1, T2, T2*) are licensed, and are normal reference ranges vendor-supplied or site-derived?",
      "What is the validated minimum breath-hold duration for the cine and LGE packages offered?",
      "Is a dedicated cardiac coil included, and is it compatible with the current coil generation on this platform?",
      "Does the platform support 4D flow, and is quantitative post-processing software included or separately licensed?",
      "What applications training specific to cardiac protocols is included after installation, beyond general MRI training?",
    ],
  },
  {
    type: "h2",
    id: "staffing",
    number: 12,
    text: "Staffing and Training",
    body: "Cardiac MRI is one of the most operator-dependent MRI subspecialties; equipment alone does not produce a diagnostic service without trained people running and reading it.",
  },
  {
    type: "ul",
    items: [
      "A technologist specifically trained in cardiac protocols, plane prescription and real-time arrhythmia management — general MRI competency is necessary but not sufficient",
      "A radiologist or cardiologist with dedicated CMR training and a documented case-volume pathway to accreditation, since interpretation of scar pattern, mapping values and perfusion defects requires specific expertise",
      "A physician or advanced practitioner present for stress perfusion studies, given the cardiovascular risk of pharmacological stress agents",
      "Nursing or physician support for intravenous access, contrast administration and monitoring throughout the study",
      "A defined escalation pathway to cardiology for abnormal findings identified during the scan itself, such as a new arrhythmia or haemodynamic instability during stress",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Build competency before opening the referral pathway",
    items: [
      "Start with cine and LGE studies for viability and cardiomyopathy referrals before adding stress perfusion",
      "Have every early case double-read by a CMR-trained reader against local governance standards",
      "Track a minimum supervised case volume before independent reporting, consistent with recognised professional-body guidance",
      "Revisit protocols quarterly with both the reporting clinician and lead technologist present",
    ],
  },
  {
    type: "callout",
    variant: "clinical",
    title: "Interpretation is a distinct skill from acquisition",
    text: "A technically excellent cardiac MRI study still requires a reader trained specifically in CMR pattern recognition — scar distribution, mapping value interpretation and perfusion defect timing are not skills transferable from general body or neuro MRI reporting.",
  },
  {
    type: "h2",
    id: "integration",
    number: 13,
    text: "Integration with Echo, CT and the Cath Lab",
    body: "Cardiac MRI works best as one stage in a coordinated cardiac imaging pathway, not as a competing modality vying for the same referral.",
  },
  {
    type: "comparison",
    title: "Cardiac imaging modality roles",
    headers: ["Modality", "Primary strength", "Where CMR complements it"],
    rows: [
      [
        "Echocardiography",
        "Fast, bedside, first-line function and valve assessment",
        "CMR confirms borderline ejection fraction, resolves poor acoustic windows, and adds tissue characterisation echo cannot provide",
      ],
      [
        "Cardiac CT",
        "Rapid, high-resolution coronary anatomy and calcium scoring",
        "CMR follows a positive or equivocal CT finding with functional and viability assessment before an intervention decision",
      ],
      [
        "Invasive angiography / cath lab",
        "Definitive anatomical assessment and immediate revascularisation capability",
        "CMR viability data informs whether a segment identified angiographically is worth revascularising",
      ],
      [
        "Nuclear perfusion imaging",
        "Established ischaemia detection, wide availability",
        "CMR stress perfusion offers comparable diagnostic accuracy without ionising radiation, useful for repeat testing and younger patients",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "None of these modalities should be read in isolation from the others in a mature cardiac programme; the strongest pathways route patients through the fastest, lowest-risk test first and reserve CMR for the questions it uniquely answers.",
    clinicalInterpretation: "A typical pathway starts with echo for initial function and valve screening, adds CT when coronary anatomy needs rapid clarification, and calls on CMR when tissue characterisation, viability or precise volumetric quantification will change management.",
    hospitalRecommendation: "Establish a joint cardiology–radiology multidisciplinary review for complex cardiomyopathy and viability cases so CMR findings are acted on directly, rather than filed as an isolated report disconnected from the cath lab and surgical decision.",
  },
  {
    type: "p",
    text: "In practice this means booking systems, referral forms and multidisciplinary team meetings should treat CMR as a step that follows echo and precedes or informs a cath lab decision, with a named cardiology contact who reviews CMR viability and scar findings before a revascularisation decision is finalised.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "CMR volumes are the reference echo is validated against",
    text: "Because trabeculation and foreshortening make ventricular border definition harder on echocardiography, most contemporary echo ejection-fraction algorithms and normal ranges have themselves been validated against CMR-derived volumes, which is part of why CMR is treated as the arbiter when echo and clinical impression disagree.",
  },
  {
    type: "h2",
    id: "throughput",
    number: 14,
    text: "Throughput and Scheduling",
    body: "A cardiac MRI slot is inherently longer and more variable than a general MRI appointment, and scheduling that does not account for this variability is the most common operational failure point.",
  },
  {
    type: "p",
    text: "A focused cardiomyopathy or viability study (cine plus LGE) typically requires 30–45 minutes of table time; adding mapping, stress perfusion or flow quantification extends this to 60–75 minutes. Patients with arrhythmia, breathlessness or poor breath-hold tolerance routinely run longer than the booked slot, so a schedule built entirely on best-case durations will progressively slip through the day.",
  },
  {
    type: "ul",
    items: [
      "Slot by indication-specific protocol family rather than a single universal cardiac slot length",
      "Build a short buffer after stress perfusion studies for post-stress monitoring before the patient leaves the department",
      "Pre-screen rhythm and breath-hold capacity at booking so technologists can select the right protocol strategy in advance",
      "Route straightforward function-only referrals (where echo has already answered the volumetric question) back to echo rather than consuming CMR capacity",
    ],
  },
  {
    type: "diagram",
    id: "exam-timeline",
    title: "Typical cardiac MRI slot breakdown",
    purpose: "Breaks a scheduled cardiac MRI slot into its component stages to show where variability and overrun risk concentrate.",
    alt: "Proportional timeline of a typical seventy-five minute cardiac MRI slot: ten minutes check-in, screening and ECG electrode placement, five minutes coil positioning and localisers, forty minutes cine, mapping and LGE acquisition with breath-hold coaching, fifteen minutes stress perfusion including post-stress monitoring, and five minutes image quality review and PACS transfer.",
    caption: "Figure 3 — Slot breakdown. Electrode placement and breath-hold coaching are the stages most sensitive to individual patient cooperation.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "A well-run cardiac MRI list is smaller than a general list, by design",
    text: "A dedicated cardiac MRI slot typically supports 6–10 patients per single shift depending on protocol mix, considerably fewer than a general MRI list. Programmes that try to match general MRI throughput on a cardiac list usually do so by truncating protocols, which erodes diagnostic yield rather than genuinely improving efficiency.",
  },
  {
    type: "h2",
    id: "reporting",
    number: 15,
    text: "Reporting and Structured Output",
    body: "A cardiac MRI report is a quantitative document as much as a descriptive one, and structured, standardised reporting materially improves its clinical usefulness.",
  },
  {
    type: "p",
    text: "A complete report states biventricular volumes, mass and ejection fraction against age- and sex-matched normal ranges, describes wall motion by segment using a standard 16- or 17-segment model, characterises any late gadolinium enhancement by location, pattern and transmurality, reports native T1, extracellular volume and T2 values against the local reference range where mapping was performed, and gives an explicit clinical impression that answers the referring question directly rather than listing findings without synthesis.",
  },
  {
    type: "ul",
    items: [
      "Use a consistent segmental model (typically the American Heart Association 17-segment model) for wall motion and scar location so serial studies remain comparable",
      "Report mapping values against the site's own validated normal range, not a published literature range from a different vendor or field strength",
      "State the gating strategy used (breath-hold versus free-breathing, prospective versus retrospective) where it affects confidence in the measurement",
      "Include a direct answer to the referring clinical question in the impression, not only a list of measurements",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Structured reporting supports serial comparison",
    text: "Because CMR is frequently used for longitudinal monitoring — chemotherapy cardiotoxicity, transplant surveillance, iron chelation response — a structured, templated report format that captures the same fields every time makes trend comparison across studies dramatically more reliable than free-text narrative reporting.",
  },
  {
    type: "h2",
    id: "cost",
    number: 16,
    text: "Cost of a Cardiac MRI Programme",
    body: "The capital cost of the scanner itself is a modest part of what a genuine cardiac MRI programme requires; most of the investment sits in software licensing, coils, gating hardware and training.",
  },
  {
    type: "table",
    caption: "Where cardiac MRI programme costs concentrate",
    headers: ["Cost category", "What it covers", "Planning note"],
    rows: [
      [
        "Base scanner platform",
        "1.5T or 3T system with standard body coils",
        "Often already present in general radiology; cardiac capability is added, not built from scratch",
      ],
      [
        "Cardiac software licensing",
        "Cine, LGE, T1/T2/T2* mapping, perfusion, flow packages",
        "Frequently priced as separate optional licences — confirm what is bundled before signing",
      ],
      [
        "Cardiac coil and gating hardware",
        "Dedicated cardiac receive coil, MR-conditional vector ECG system",
        "A generic peripheral gating unit is not adequate for diagnostic cardiac gating",
      ],
      [
        "Post-processing workstation",
        "Volumetric, LGE quantification and mapping analysis software",
        "Often licensed per-seat; confirm concurrent-user terms for a shared reporting environment",
      ],
      [
        "Applications training",
        "Cardiac-specific protocol and interpretation training beyond general MRI training",
        "Should be a contracted, itemised line, not assumed to be included in standard commissioning",
      ],
      [
        "Ongoing staffing",
        "CMR-trained technologist time, physician supervision for stress studies, dedicated reporting time",
        "Usually the largest recurring cost once the programme is running",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The line items most often missing from an initial cardiac MRI business case are the cardiac-specific software licences and the training budget, both of which are frequently treated as optional add-ons rather than core requirements.",
    clinicalInterpretation: "A cardiac programme launched without the mapping and perfusion software licensed, or without dedicated reporting training, will still produce cine and LGE studies but will be unable to offer myocarditis or ischaemia assessment — a materially narrower service than referrers expect from a cardiac MRI programme.",
    hospitalRecommendation: "Cost the full cardiac software suite, dedicated coil, gating hardware and a named training plan into the original business case, presented as typical indicative market ranges rather than fixed prices, and validate them against current supplier quotations before committing capital.",
  },
  {
    type: "knowledgeBox",
    variant: "future-technology",
    title: "Free-breathing and AI-accelerated cardiac protocols are shortening studies",
    text: "Compressed-sensing and deep-learning reconstruction now allow diagnostic-quality free-breathing cine and mapping in a fraction of the conventional breath-hold time, which is materially improving feasibility in breathless heart-failure patients and arrhythmia cases that previously produced degraded studies. These techniques are becoming a genuine access-and-throughput lever for cardiac MRI programmes rather than a research curiosity.",
  },
  {
    type: "quickFacts",
    items: [
      "CMR is the reference standard for ventricular volumes, mass and ejection fraction",
      "LGE transmurality predicts the likelihood a hypokinetic segment recovers after revascularisation",
      "T2* below approximately 20 ms indicates myocardial iron loading requiring chelation review",
      "A focused cine-plus-LGE study typically takes 30–45 minutes; a full multiparametric study 60–75 minutes",
      "A dedicated cardiac MRI list typically supports 6–10 patients per single shift",
    ],
  },
  {
    type: "h2",
    id: "faq",
    number: 17,
    text: "Frequently Asked Questions",
    body: "Common questions from referrers, patients and departments planning a cardiac MRI service.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How long does a cardiac MRI take?",
        a: "A focused cardiomyopathy or viability study with cine and late gadolinium enhancement typically takes 30–45 minutes. Adding mapping, stress perfusion or flow quantification extends this to 60–75 minutes, and arrhythmia or poor breath-hold tolerance can lengthen it further.",
      },
      {
        q: "Does cardiac MRI use radiation?",
        a: "No. Cardiac MRI uses magnetic fields and radio waves, not ionising radiation, which makes it particularly suitable for children, young adults and patients requiring repeated lifelong imaging such as those with congenital heart disease.",
      },
      {
        q: "Why does the patient need to hold their breath?",
        a: "Breath-holding removes respiratory motion during the acquisition window, which is essential for sharp cine and late gadolinium enhancement images. Patients who cannot hold their breath reliably are imaged with free-breathing techniques instead, at some cost to acquisition time and resolution.",
      },
      {
        q: "Can patients with atrial fibrillation have a cardiac MRI?",
        a: "Yes, but conventional ECG-gated breath-hold cine is degraded by irregular rhythm. Most programmes switch to real-time, non-gated cine sequences for patients in persistent atrial fibrillation, which sacrifices some image quality but remains diagnostic.",
      },
      {
        q: "Is gadolinium contrast required for every cardiac MRI?",
        a: "No. Function-only studies using cine imaging require no contrast at all. Contrast is needed for late gadolinium enhancement, extracellular volume calculation and stress perfusion, and renal function is screened beforehand where contrast is planned.",
      },
      {
        q: "What is the difference between cardiac MRI and a cardiac CT scan?",
        a: "Cardiac CT is faster and excels at coronary artery anatomy and calcium scoring, using ionising radiation. Cardiac MRI is slower but provides superior tissue characterisation, function reproducibility and viability assessment without radiation. The two are complementary rather than interchangeable.",
      },
      {
        q: "Can patients with pacemakers undergo cardiac MRI?",
        a: "Many modern pacemakers and defibrillators are MR-conditional and can be scanned under defined conditions with cardiology and MR safety support, though ECG gating quality can be affected by device-related artefact. Non-conditional legacy devices generally cannot be scanned and device documentation must always be verified beforehand.",
      },
      {
        q: "What is stress perfusion cardiac MRI used for?",
        a: "It detects inducible myocardial ischaemia by tracking gadolinium transit through the heart muscle under pharmacological stress, identifying territories supplied by a significant coronary stenosis. It requires a physician present and full resuscitation support because of the cardiovascular effects of stress agents.",
      },
      {
        q: "Why do different hospitals report different normal T1 mapping values?",
        a: "Native T1 and T2 values are sequence-, vendor- and field-strength-dependent, so every site must establish its own local normal reference range at commissioning rather than relying on published values from a different platform.",
      },
      {
        q: "How does cardiac MRI help decide whether to revascularise a segment?",
        a: "Late gadolinium enhancement quantifies the transmural extent of scar in a hypokinetic segment. Segments with limited transmural scar have a meaningfully higher probability of recovering function after revascularisation than segments with extensive transmural scar, directly informing surgical and interventional decisions.",
      },
      {
        q: "Is cardiac MRI safe for pregnant patients?",
        a: "MRI without gadolinium contrast is generally considered safe in pregnancy when clinically necessary, and is often preferred over CT to avoid ionising radiation. Gadolinium is avoided in pregnancy unless the diagnostic benefit clearly outweighs the theoretical risk.",
      },
      {
        q: "What training does a radiologist need to report cardiac MRI independently?",
        a: "Beyond general MRI training, CMR reporting requires dedicated training in scar and mapping pattern recognition and a documented supervised case volume consistent with recognised professional-body guidance before independent reporting begins.",
      },
      {
        q: "Can a general MRI scanner be upgraded to perform cardiac studies?",
        a: "Often yes, provided the platform supports the necessary gradient performance and can be licensed for cine, LGE, mapping and flow software, and is fitted with a dedicated cardiac coil and MR-conditional vector ECG gating hardware. A generic body-MRI configuration alone is not sufficient.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    number: 18,
    text: "Conclusion",
    body: "Cardiac MRI gives a cardiology and radiology service a diagnostic depth that echo and CT alone cannot reach — but only when equipment, staffing and workflow are all built specifically for the heart.",
  },
  {
    type: "p",
    text: "The clinical case for cardiac MRI is unusually strong: reproducible volumetric function, tissue-specific diagnosis in cardiomyopathy and myocarditis, viability data that changes revascularisation decisions, and radiation-free surveillance for congenital and iron-overload disease. What separates a genuinely useful programme from an underused room is whether the scanner has real cardiac gating hardware and coils, whether the sequence licences actually cover mapping and perfusion, whether staff are trained specifically in cardiac acquisition and interpretation, and whether the service is built into a coordinated pathway with echocardiography, CT and the cath lab rather than run in isolation. Built that way, cardiac MRI becomes one of the clearest markers that a hospital's cardiology service can answer the diagnostic questions its referrers actually have.",
  },
  {
    type: "referenceGroups",
    note: "References are provided for professional orientation. Always follow the current edition of each guideline, the applicable national regulations, and the manufacturer's instructions for use for your specific system.",
    groups: [
      {
        title: "Medical guidelines",
        items: [
          {
            label:
              "Society for Cardiovascular Magnetic Resonance (SCMR). Standardized cardiovascular magnetic resonance imaging (CMR) protocols and post-processing recommendations.",
          },
          {
            label:
              "American Heart Association. Standardized myocardial segmentation and nomenclature for tomographic imaging of the heart (17-segment model).",
          },
          {
            label:
              "American College of Radiology. ACR–ACC–AHA–NASCI–SCMR Appropriate Use Criteria for cardiac MRI.",
          },
        ],
      },
      {
        title: "Scientific publications",
        items: [
          {
            label:
              "Ferreira V.M. et al. Cardiovascular magnetic resonance in nonischemic myocardial inflammation: expert recommendations (updated Lake Louise criteria). Peer-reviewed cardiovascular imaging literature.",
          },
          {
            label:
              "Kim R.J. et al. The use of contrast-enhanced magnetic resonance imaging to identify reversible myocardial dysfunction. Peer-reviewed cardiology literature.",
          },
          {
            label:
              "Marcus F.I. et al. Diagnosis of arrhythmogenic right ventricular cardiomyopathy/dysplasia: Task Force criteria. Peer-reviewed cardiology literature.",
          },
        ],
      },
      {
        title: "Regulatory authorities",
        items: [
          {
            label:
              "U.S. Food and Drug Administration. MRI (Magnetic Resonance Imaging) — device safety and gadolinium-based contrast agent labelling guidance.",
          },
          {
            label:
              "Medicines and Healthcare products Regulatory Agency (MHRA). Safety guidance for magnetic resonance imaging equipment in clinical use.",
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
              "EU Medical Device Regulation (EU) 2017/745 — requirements for placing MR systems and software on the EU market.",
          },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          {
            label:
              "Manufacturer instructions for use for cardiac coil systems, MR-conditional ECG gating hardware and cardiac sequence software packages — consult the specific platform documentation before clinical use.",
          },
        ],
      },
      {
        title: "Medical societies",
        items: [
          {
            label:
              "European Society of Cardiology (ESC) and European Association of Cardiovascular Imaging (EACVI). Guidelines referencing cardiac MRI in cardiomyopathy, myocarditis and congenital heart disease pathways.",
          },
          {
            label:
              "International Society for Magnetic Resonance in Medicine (ISMRM). Cardiovascular MR study group technical resources.",
          },
        ],
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Building or upgrading a cardiac MRI programme?",
    subheading:
      "AbuFarha Medical supplies, installs, commissions and trains teams on MRI systems configured for cardiac imaging — from cardiac coils and gating hardware to applications training on cine, LGE, mapping and perfusion protocols.",
    technology: "MRI",
  },
];
