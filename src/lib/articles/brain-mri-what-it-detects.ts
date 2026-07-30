import type { ContentBlock, TocItem } from "@/lib/blog";
import solMri from "@/assets/sol-mri.jpg";

export const BRAIN_MRI_WHAT_IT_DETECTS_TOC: TocItem[] = [
  { id: "overview", title: "Brain MRI Defined" },
  { id: "indications", title: "Why a Brain MRI Is Ordered" },
  { id: "core-sequences", title: "Core Sequences and What Each One Answers" },
  { id: "diffusion-perfusion", title: "Diffusion, ADC and Perfusion" },
  { id: "swi-mra", title: "Susceptibility and Angiographic Sequences" },
  { id: "spectroscopy", title: "MR Spectroscopy" },
  { id: "stroke", title: "Stroke Imaging" },
  { id: "tumour", title: "Brain Tumour Imaging" },
  { id: "ms", title: "Multiple Sclerosis and Demyelination" },
  { id: "epilepsy", title: "Epilepsy Protocols" },
  { id: "dementia", title: "Dementia and Neurodegeneration" },
  { id: "infection-trauma", title: "Infection and Trauma" },
  { id: "protocol-design", title: "Building a Brain MRI Protocol" },
  { id: "contrast", title: "Contrast Use in Neuroimaging" },
  { id: "reporting", title: "Reporting and Structured Output" },
  { id: "equipment", title: "Equipment and Coil Requirements" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const BRAIN_MRI_WHAT_IT_DETECTS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solMri,
    imageAlt: "Axial brain MRI images displayed on a radiology workstation",
    paragraphs: [
      "Brain MRI is the most information-dense non-invasive test available for the central nervous system. A single appointment can combine structural anatomy, water diffusion, blood product sensitivity, vascular flow and, when needed, tissue chemistry — each sequence answering a different clinical question about the same volume of tissue. No other modality assembles that breadth of physiological information in one sitting, which is why brain MRI sits at the centre of stroke, tumour, epilepsy, multiple sclerosis and dementia pathways across neurology, neurosurgery and emergency medicine.",
      "That breadth is also brain MRI's operational challenge. Unlike a chest X-ray or a non-contrast CT head, a brain MRI is not one image type but a designed sequence of acquisitions, each with its own timing, contrast weighting and diagnostic purpose. Ordering the wrong protocol, or a generic one, routinely returns a scan that is technically adequate but clinically unanswered — the sequence that would have shown restricted diffusion, a susceptibility blooming microbleed or a mesial temporal signal abnormality simply was not acquired. Protocol design is therefore as clinically consequential as the acquisition itself.",
      "This guide sets out what each core brain sequence detects, how protocols are built around the specific clinical question — stroke, tumour, epilepsy, MS, dementia, infection or trauma — and what a hospital needs in equipment, coil configuration and reporting workflow to deliver definitive neuroimaging rather than a partial answer that has to be repeated.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Brain MRI indications, core pulse sequences, diffusion and perfusion imaging, disease-specific protocols, contrast governance, structured reporting and equipment requirements",
    audience:
      "Neurologists, neurosurgeons, radiologists, MRI technologists, hospital procurement teams and biomedical engineers",
    readingTime: "16 min read",
    technology: "Magnetic Resonance Imaging (MRI) — neuroimaging",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "Brain MRI Defined",
    body: "Brain MRI uses a set of complementary pulse sequences — not a single image type — to characterise brain anatomy, tissue water behaviour, blood products and, where indicated, vascular flow and metabolite concentration.",
  },
  {
    type: "ul",
    items: [
      "A brain MRI report is only as good as the protocol behind it. The same anatomy scanned with a stroke protocol, an epilepsy protocol and a routine headache protocol can yield three materially different diagnostic yields, because each protocol emphasises different sequences and slice orientations.",
      "Contrast is not a default add-on. Roughly half of clinically indicated brain MRIs are appropriately performed without gadolinium; contrast should be justified by the specific differential, not applied reflexively to every study.",
      "Sequence sensitivity is time-dependent. Diffusion restriction in acute infarction, susceptibility blooming from a microbleed and FLAIR hyperintensity from oedema each evolve over different timescales, so the same lesion can look very different depending on how many hours or days have elapsed since onset.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "Brain MRI is multiparametric by design — T1, T2, FLAIR, DWI/ADC, SWI, MRA, perfusion and spectroscopy each answer a distinct clinical question.",
      "Diffusion-weighted imaging detects acute ischaemic infarction within minutes, well before CT or even T2/FLAIR change.",
      "Protocol must be matched to the clinical question at the point of referral — a generic brain protocol under-detects epilepsy, early MS and small tumours.",
      "Contrast use should follow a documented indication and renal-function screening, not a blanket default.",
      "Structured, comparative reporting against prior studies is what actually drives clinical decisions in chronic disease follow-up.",
      "A dedicated head/neurovascular coil and a technologist trained in neuro-specific angulation matter as much as field strength for diagnostic yield.",
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
    text: "Why a Brain MRI Is Ordered",
    body: "Brain MRI is indicated whenever the clinical question depends on soft-tissue contrast, functional information or radiation avoidance that CT cannot provide.",
  },
  {
    type: "ul",
    items: [
      "Suspected acute ischaemic stroke, particularly wake-up stroke or unclear onset time, where diffusion-perfusion mismatch can guide reperfusion therapy",
      "New focal neurological deficit, seizure, or unexplained encephalopathy",
      "Suspected demyelinating disease (multiple sclerosis, neuromyelitis optica spectrum disorder)",
      "Known or suspected primary or metastatic brain tumour, and post-treatment surveillance",
      "Refractory or new-onset epilepsy requiring an epilepsy-protocol search for a structural focus",
      "Cognitive decline and suspected dementia, to exclude structural and vascular contributors and assess atrophy pattern",
      "Suspected intracranial infection — meningitis, encephalitis, abscess",
      "Traumatic brain injury with a clinical course inconsistent with CT findings, or suspected diffuse axonal injury",
      "Pre-surgical planning and intra-operative neuronavigation, including functional and tractography mapping",
      "Congenital and developmental anomalies in paediatric neuroimaging, where radiation avoidance is a priority",
    ],
  },
  {
    type: "relatedDiseases",
    items: [
      "Ischaemic stroke",
      "Multiple sclerosis",
      "Epilepsy",
      "Glioma and metastatic brain tumours",
      "Alzheimer's disease and vascular dementia",
      "Intracranial abscess and encephalitis",
      "Traumatic brain injury",
      "Normal pressure hydrocephalus",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "The referral question decides the protocol, not the diagnosis",
    text: "A referral that states \"query stroke\" and one that states \"headache, exclude structural cause\" should never receive the same protocol. Stroke protocols prioritise diffusion and time-resolved perfusion within minutes of table time; a headache work-up prioritises a broader anatomical survey. Radiology departments that let the referring clinical question — not a single default template — drive protocol selection consistently report higher diagnostic yield and fewer repeat studies.",
  },
  {
    type: "h2",
    id: "core-sequences",
    number: 3,
    text: "Core Sequences and What Each One Answers",
    image: solMri,
    imagePosition: "right",
    imageAlt: "MRI console displaying multiple brain sequence acquisitions",
    body: "Every brain protocol is built from a small library of core sequences, each weighted to make a different tissue property visible.",
  },
  { type: "h3", text: "T1-weighted imaging" },
  {
    type: "p",
    text: "T1-weighted sequences provide the clearest anatomical map: grey and white matter differentiate well, fat and subacute blood appear bright, and cerebrospinal fluid appears dark. T1 is the workhorse for anatomical localisation, for assessing atrophy pattern, and — after gadolinium — for demonstrating blood-brain barrier breakdown in tumours, infection and active demyelinating plaques.",
  },
  { type: "h3", text: "T2-weighted imaging" },
  {
    type: "p",
    text: "T2-weighted sequences make fluid and oedema bright, which is why they are highly sensitive — though non-specific — to almost any pathological process that increases tissue water: tumour, infarction, infection, inflammation and trauma all show as T2 hyperintensity. T2 is usually paired with FLAIR to separate parenchymal disease from adjacent CSF signal.",
  },
  { type: "h3", text: "FLAIR" },
  {
    type: "p",
    text: "Fluid-attenuated inversion recovery suppresses the normally bright CSF signal on a T2-weighted image, which unmasks periventricular and juxtacortical lesions that would otherwise be obscured by adjacent ventricular signal. FLAIR is the single most useful sequence for multiple sclerosis plaque detection, subacute infarction, and encephalitis, and it is included in essentially every brain protocol regardless of indication.",
  },
  {
    type: "knowledgeBox",
    variant: "quick-facts",
    title: "Core sequence cheat sheet",
    items: [
      "T1 — anatomy, atrophy, post-contrast enhancement",
      "T2 — sensitive, non-specific fluid and oedema detector",
      "FLAIR — unmasks periventricular and juxtacortical lesions by suppressing CSF signal",
      "DWI/ADC — acute ischaemia within minutes; also restricts in abscess pus and dense tumour",
      "SWI — microbleeds, calcification, venous structures",
      "MRA — vessel patency and morphology, usually without contrast",
      "Perfusion (DSC/ASL) — tissue viability, tumour grade, penumbra mapping",
      "Spectroscopy — metabolite ratios distinguishing tumour, infection and necrosis",
    ],
  },
  {
    type: "h2",
    id: "diffusion-perfusion",
    number: 4,
    text: "Diffusion, ADC and Perfusion",
    body: "Diffusion-weighted imaging and its quantitative counterpart, the apparent diffusion coefficient map, together with perfusion imaging, turn brain MRI from an anatomical test into a physiological one.",
  },
  {
    type: "p",
    text: "Diffusion-weighted imaging (DWI) measures the random Brownian motion of water molecules. In acute ischaemic stroke, cytotoxic oedema restricts this motion within minutes of vessel occlusion, producing bright DWI signal and a corresponding low signal on the ADC map — the combination that confirms true restriction rather than the T2 shine-through artefact that DWI alone can produce. This restriction is detectable long before any change appears on CT or even on T2/FLAIR, which is why DWI is the physiological foundation of hyperacute stroke imaging.",
  },
  {
    type: "p",
    text: "Restricted diffusion is not specific to stroke: it also appears in the pus of a brain abscess, in some highly cellular tumours, in herpes encephalitis and in the acute phase of diffuse axonal injury — each context distinguished by the accompanying sequences and clinical picture. Perfusion imaging, most commonly dynamic susceptibility contrast (DSC) or non-contrast arterial spin labelling (ASL), maps cerebral blood flow and volume. In stroke, comparing the perfusion deficit to the diffusion core identifies the penumbra — tissue that is under-perfused but not yet infarcted, and therefore potentially salvageable with reperfusion therapy. In tumour imaging, perfusion helps grade gliomas and distinguish recurrent tumour from post-radiation change.",
  },
  {
    type: "diagram",
    id: "mri-signal-chain",
    title: "From diffusion restriction to a treatment decision",
    purpose: "Shows how DWI, ADC and perfusion maps are combined into the core-penumbra assessment that underpins acute stroke treatment decisions.",
    alt: "Flow diagram showing acute vessel occlusion leading to cytotoxic oedema, which restricts water diffusion, producing bright DWI signal and dark ADC signal; a parallel perfusion acquisition maps the wider hypoperfused territory; the mismatch between the diffusion core and the perfusion deficit defines the potentially salvageable penumbra used to guide thrombectomy or thrombolysis decisions.",
    caption: "Figure 1 — Core-penumbra assessment. The mismatch volume, not the clock alone, increasingly determines eligibility for reperfusion therapy.",
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "ADC confirms what DWI suggests",
    text: "A bright DWI signal without a corresponding dark ADC signal is usually T2 shine-through, not true restricted diffusion — a common misread that can wrongly suggest acute infarction in chronic lesions with high T2 signal. Reporting radiologists should always confirm restriction on the ADC map before committing to an acute ischaemic diagnosis.",
  },
  {
    type: "h2",
    id: "swi-mra",
    number: 5,
    text: "Susceptibility and Angiographic Sequences",
    body: "Susceptibility-weighted imaging and MR angiography extend brain MRI into blood product detection and vessel assessment, both without requiring intravenous contrast in most cases.",
  },
  {
    type: "p",
    text: "Susceptibility-weighted imaging (SWI) exploits local magnetic field distortion caused by paramagnetic substances — deoxygenated blood, haemosiderin and calcium — making them appear as pronounced signal loss, or blooming. This makes SWI the most sensitive sequence for cerebral microbleeds, haemorrhagic transformation of infarcts, diffuse axonal injury and venous thrombosis, frequently detecting abnormalities invisible on any other sequence including CT.",
  },
  {
    type: "p",
    text: "Time-of-flight MR angiography (TOF-MRA) generates a vascular map using flow-related signal enhancement, requiring no contrast injection, and is the standard non-invasive method for screening the circle of Willis for aneurysm, stenosis or occlusion. Contrast-enhanced MRA offers wider coverage and higher fidelity for extracranial vessels when a broader vascular survey is needed, at the cost of a gadolinium injection.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "SWI is a post-processing sequence, not a raw acquisition",
    text: "SWI images are reconstructed by combining magnitude and phase information from a 3D gradient-echo acquisition — the phase data is what makes paramagnetic substances visible. Correct shimming and adequate field homogeneity around the skull base and sinuses materially affect SWI quality; poor shimming produces phase artefact that can mimic or mask true microbleeds.",
  },
  {
    type: "h2",
    id: "spectroscopy",
    number: 6,
    text: "MR Spectroscopy",
    body: "Proton MR spectroscopy adds a chemistry layer to brain imaging, measuring relative metabolite concentrations within a defined voxel rather than producing an anatomical image.",
  },
  {
    type: "p",
    text: "Spectroscopy quantifies peaks for N-acetylaspartate (NAA, a neuronal marker), choline (a marker of membrane turnover and cellularity), creatine (an internal reference), lactate (anaerobic metabolism) and lipid. A raised choline-to-NAA ratio with reduced NAA suggests tumour; a dominant lactate peak with minimal choline change favours infection, necrosis or severe ischaemia. Spectroscopy is most useful as a problem-solving adjunct — distinguishing recurrent tumour from radiation necrosis, or supporting a diagnosis of low-grade versus high-grade glioma — rather than as a routine screening sequence.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Spectroscopy needs a clean voxel, not just a clean magnet",
    text: "Spectroscopic quality depends heavily on voxel placement away from bone, air and blood products, and on shimming specifically over that voxel rather than the whole head. A voxel straddling the skull base or a haemorrhagic focus routinely produces uninterpretable spectra regardless of scanner quality — this is one of the few sequences where technologist judgement outweighs hardware.",
  },
  {
    type: "h2",
    id: "stroke",
    number: 7,
    text: "Stroke Imaging",
    body: "In hyperacute stroke, brain MRI protocol design is compressed to the minimum sequence set that answers the treatment-relevant questions inside a few minutes of table time.",
  },
  {
    type: "table",
    caption: "A typical hyperacute stroke MRI protocol",
    headers: ["Sequence", "Purpose", "Approx. time"],
    rows: [
      ["DWI/ADC", "Confirm and localise acute infarction", "1–2 min"],
      ["SWI or T2*", "Exclude haemorrhage, detect microbleeds and clot sign", "1–2 min"],
      ["FLAIR", "Estimate lesion age (DWI-FLAIR mismatch for unknown onset time)", "2–3 min"],
      ["TOF-MRA (circle of Willis)", "Identify large-vessel occlusion", "3–4 min"],
      ["Perfusion (DSC or ASL)", "Map penumbra for mismatch-based treatment selection", "2–4 min"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Every sequence in this protocol earns its place by changing a treatment decision within minutes — this is the tightest, most time-critical protocol in neuroimaging, and the one where departmental workflow discipline matters most.",
    clinicalInterpretation: "DWI-FLAIR mismatch — restricted diffusion without corresponding FLAIR hyperintensity — implies the infarct is likely under 4.5 hours old, which has been used to extend thrombolysis eligibility to patients with unknown or wake-up onset.",
    hospitalRecommendation: "Stroke MRI should run on a dedicated, pre-configured one-click protocol activated directly from the emergency department pathway, bypassing routine scheduling, with a documented door-to-image target time.",
  },
  {
    type: "diagram",
    id: "exam-timeline",
    title: "Hyperacute stroke MRI door-to-image timeline",
    purpose: "Illustrates why a pre-configured, single-click stroke protocol is a workflow requirement, not a convenience.",
    alt: "Timeline showing emergency department arrival, rapid clinical triage, direct activation of a pre-loaded stroke MRI protocol, and completion of diffusion, susceptibility, FLAIR, angiographic and perfusion sequences within an approximately ten to fifteen minute table time target, followed by immediate radiologist review to inform thrombolysis or thrombectomy decisions.",
    caption: "Figure 2 — Stroke MRI timeline. Protocol activation delay, not scanner speed, is the most common source of lost minutes.",
  },
  {
    type: "callout",
    variant: "clinical",
    title: "MRI complements, not replaces, CT in acute stroke",
    text: "Most stroke pathways still use non-contrast CT first to exclude haemorrhage rapidly, reserving MRI for mismatch assessment, unclear onset time, posterior fossa symptoms, or to characterise a small or early infarct that CT may miss.",
  },
  {
    type: "h2",
    id: "tumour",
    number: 8,
    text: "Brain Tumour Imaging",
    body: "Tumour protocols combine anatomical, contrast-enhanced, perfusion and, where needed, spectroscopic sequences to characterise, stage, plan surgery for and follow up intracranial neoplasms.",
  },
  {
    type: "ul",
    items: [
      "Pre- and post-contrast T1 defines enhancement pattern — ring-enhancing, homogeneous, non-enhancing — a key discriminator between tumour types and grades",
      "T2/FLAIR delineates the extent of peritumoral oedema and infiltrative non-enhancing tumour margin, which frequently extends beyond the enhancing component",
      "Perfusion imaging estimates relative cerebral blood volume, which correlates with tumour grade and vascularity, and helps distinguish recurrence from radiation necrosis",
      "Diffusion and ADC can flag highly cellular, aggressive tumour components as areas of restricted diffusion",
      "Spectroscopy adds a metabolic signature (raised choline, reduced NAA) when the differential includes tumour versus infection or post-treatment change",
      "Susceptibility imaging identifies intratumoural haemorrhage, common in glioblastoma and metastases from certain primaries",
      "Functional MRI and diffusion tensor tractography map eloquent cortex and white matter tracts relative to the lesion for surgical planning",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Pre-surgical tumour protocols need a named neurosurgical stakeholder",
    text: "Functional mapping and tractography sequences add meaningful table time and require task-based patient cooperation. These sequences should only be added when a named neurosurgeon has specified the lesion location and the functional questions that surgical planning actually needs answered — added routinely, they lengthen every tumour scan without benefit.",
  },
  {
    type: "h2",
    id: "ms",
    number: 9,
    text: "Multiple Sclerosis and Demyelination",
    body: "MS protocols are built to detect, count and track plaques over time using standardised sequences and slice positioning that must remain reproducible across follow-up studies.",
  },
  {
    type: "p",
    text: "FLAIR remains the primary detection sequence for periventricular, juxtacortical, infratentorial and spinal cord plaques, following the diagnostic criteria that require lesion dissemination in space and time. Post-contrast T1 identifies actively enhancing lesions, distinguishing recent inflammatory activity from chronic, burnt-out plaques — a distinction with direct treatment implications. 3D FLAIR and 3D T1 acquisitions are increasingly preferred over 2D sequences because they allow precise multiplanar reformatting and more reliable lesion-by-lesion comparison between scans separated by months or years.",
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "MS follow-up scans must be geometrically reproducible",
    items: [
      "Use the same field strength, coil and protocol version for every follow-up scan on a given patient where possible",
      "Angle slices to a consistent anatomical reference (e.g. the anterior-posterior commissure line) at every visit",
      "Store the acquisition parameters with the study so lesion counts are genuinely comparable over time",
      "Flag any new enhancing lesion explicitly in the report rather than only describing overall burden",
    ],
  },
  {
    type: "h2",
    id: "epilepsy",
    number: 10,
    text: "Epilepsy Protocols",
    body: "Epilepsy imaging is a targeted search for a structural cause — most often mesial temporal sclerosis or a subtle cortical malformation — that a routine brain protocol will frequently miss.",
  },
  {
    type: "p",
    text: "A dedicated epilepsy protocol adds thin-slice, high-resolution coronal T2 and FLAIR sequences angled perpendicular to the long axis of the hippocampus, specifically to detect hippocampal atrophy and internal architecture loss characteristic of mesial temporal sclerosis. Volumetric T1 sequences allow hippocampal volumetry and can reveal focal cortical dysplasia, a common and easily missed cause of drug-resistant epilepsy, particularly at 3T where the additional signal-to-noise ratio improves detection of subtle grey-white matter blurring.",
  },
  {
    type: "callout",
    variant: "important",
    title: "A negative standard brain MRI does not exclude an epileptogenic lesion",
    text: "A significant proportion of focal cortical dysplasias are missed on routine brain protocols and only identified when a dedicated epilepsy protocol, ideally read alongside EEG localisation, is performed. Persistent drug-resistant focal epilepsy with a normal standard MRI warrants referral for a dedicated epilepsy-protocol re-scan, preferably at a centre with epilepsy imaging expertise.",
  },
  {
    type: "h2",
    id: "dementia",
    number: 11,
    text: "Dementia and Neurodegeneration",
    body: "Dementia protocols combine structural assessment of atrophy pattern with vascular and susceptibility sequences to distinguish neurodegenerative from vascular and other reversible contributors.",
  },
  {
    type: "ul",
    items: [
      "Volumetric T1 assesses regional atrophy pattern — medial temporal lobe atrophy supports Alzheimer's disease; frontotemporal atrophy suggests frontotemporal dementia",
      "FLAIR quantifies white matter hyperintensity burden, a marker of small vessel disease and vascular contribution to cognitive decline",
      "SWI/T2* detects microbleeds and superficial siderosis, relevant to cerebral amyloid angiopathy and to anticoagulation decisions",
      "DWI helps exclude subacute infarction and identifies the rare but treatable restricted-diffusion pattern of Creutzfeldt-Jakob disease",
      "The overall pattern — not any single sequence — differentiates Alzheimer's disease, vascular dementia, Lewy body dementia and normal pressure hydrocephalus",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Dementia MRI is a test of exclusion as much as detection",
    text: "A large part of the clinical value of dementia MRI lies in excluding a structural, vascular or treatable cause of cognitive decline — subdural haematoma, normal pressure hydrocephalus, tumour — rather than in positively confirming Alzheimer's pathology, which remains fundamentally a clinical and biomarker diagnosis.",
  },
  {
    type: "h2",
    id: "infection-trauma",
    number: 12,
    text: "Infection and Trauma",
    body: "Suspected intracranial infection and traumatic brain injury both rely heavily on diffusion and susceptibility sequences to detect findings that structural sequences alone would miss.",
  },
  {
    type: "p",
    text: "In suspected abscess, restricted diffusion within a ring-enhancing lesion is a strong discriminator from a necrotic or cystic tumour, which typically does not restrict. In encephalitis, particularly herpes simplex encephalitis, asymmetric T2/FLAIR signal and swelling in the medial temporal lobes and insular cortex is a recognised early pattern that should prompt urgent empirical treatment pending confirmation. In trauma, susceptibility-weighted imaging detects the microhaemorrhages of diffuse axonal injury far more sensitively than CT or conventional T2, often days after an injury whose severity CT alone would understate.",
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Do not delay empirical treatment for imaging confirmation in suspected encephalitis",
    text: "Suspected herpes simplex encephalitis is a treatment emergency. Empirical aciclovir should begin on clinical suspicion; MRI findings support and refine the diagnosis but confirmatory imaging or CSF PCR results must never delay treatment initiation.",
  },
  {
    type: "h2",
    id: "protocol-design",
    number: 13,
    text: "Building a Brain MRI Protocol",
    body: "Protocol design translates a clinical question into a specific, time-bounded sequence of acquisitions — the single decision with the greatest influence on diagnostic yield.",
  },
  {
    type: "table",
    caption: "Indication-based brain MRI protocol summary",
    headers: ["Indication", "Core added sequences", "Contrast"],
    rows: [
      ["Hyperacute stroke", "DWI/ADC, SWI, FLAIR, TOF-MRA, perfusion", "Usually not required"],
      ["Tumour work-up", "Pre/post-contrast T1, perfusion, DWI, spectroscopy as needed", "Required"],
      ["Multiple sclerosis", "3D FLAIR, post-contrast 3D T1, spinal cord sequences", "Required at diagnosis and relapse"],
      ["Epilepsy", "Thin coronal T2/FLAIR through hippocampi, volumetric T1", "Usually not required"],
      ["Dementia", "Volumetric T1, FLAIR, SWI/T2*", "Usually not required"],
      ["Infection", "DWI/ADC, post-contrast T1, FLAIR", "Required"],
      ["Trauma", "SWI or T2*, DWI, FLAIR, thin-slice T1", "Usually not required"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The contrast column is the most operationally significant one — roughly half of these indications do not require gadolinium at all, yet contrast is frequently given by default rather than by indication.",
    clinicalInterpretation: "Protocols built around the clinical question, rather than a single institutional default, materially reduce both non-diagnostic scans and unnecessary repeat imaging.",
    hospitalRecommendation: "Maintain a versioned, radiologist-owned protocol library mapped directly to referral indications, and require the ordering clinician to select an indication rather than a generic 'brain MRI' request.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Build protocols around the report, not the acquisition",
    text: "Start protocol design by asking what sentence the report needs to contain — 'no evidence of large-vessel occlusion', 'mesial temporal sclerosis present or absent', 'new enhancing demyelinating lesion' — and work backwards to the sequences that produce that sentence. This discipline prevents both under-protocolling and unnecessary sequence creep.",
  },
  {
    type: "h2",
    id: "contrast",
    number: 14,
    text: "Contrast Use in Neuroimaging",
    body: "Gadolinium-based contrast is essential for specific indications and should never be applied as an automatic default across all brain MRI studies.",
  },
  {
    type: "ul",
    items: [
      "Screen renal function before contrast administration, particularly in patients with known renal impairment",
      "Prefer macrocyclic gadolinium agents, which have a substantially lower association with nephrogenic systemic fibrosis and free gadolinium deposition than older linear agents",
      "Document a specific clinical indication for contrast rather than a blanket departmental default",
      "Explain to patients that gadolinium retention in brain tissue has been observed with repeated dosing, with no established clinical harm identified to date, as part of informed consent for studies requiring multiple contrast administrations",
      "Avoid contrast in pregnancy unless the diagnostic benefit clearly outweighs the theoretical risk",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Contrast is not a substitute for a better non-contrast protocol",
    text: "A common and avoidable error is adding gadolinium to compensate for an inadequate non-contrast protocol rather than fixing the sequence selection itself. If FLAIR, DWI or thin-slice coronal sequences were never acquired, contrast will not recover the missing information.",
  },
  {
    type: "h2",
    id: "reporting",
    number: 15,
    text: "Reporting and Structured Output",
    body: "A brain MRI report drives clinical decisions only when it is structured, comparative and specific — vague descriptive reporting undermines even a well-acquired study.",
  },
  {
    type: "ul",
    items: [
      "Compare explicitly against the most recent prior study, stating whether findings are new, stable, improved or progressed",
      "State restricted diffusion status (present/absent, with ADC confirmation) explicitly in any report where ischaemia is a differential",
      "Use standardised lexicons where they exist — PI-RADS for prostate is the model; neuro-oncology increasingly uses RANO criteria for tumour response and standardised lesion counting for MS",
      "Quantify, do not just describe, where possible — lesion count, largest lesion diameter, white matter hyperintensity burden grade",
      "State clearly whether the protocol performed was adequate to answer the clinical question, and recommend a repeat or dedicated protocol scan when it was not",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Recurring reporting pitfalls in brain MRI",
    items: [
      "Describing a lesion without stating whether it restricts diffusion when ischaemia is in the differential",
      "Omitting explicit comparison with the prior study, forcing the referring clinician to interpret change themselves",
      "Reporting 'non-specific white matter changes' without a severity grade or a differential context (age-appropriate versus concerning)",
      "Failing to flag when the protocol acquired was inadequate for the clinical question asked",
    ],
  },
  {
    type: "h2",
    id: "equipment",
    number: 16,
    text: "Equipment and Coil Requirements",
    body: "Neuroimaging quality depends more on coil design, gradient performance and technologist positioning discipline than on field strength alone.",
  },
  {
    type: "requirements",
    checklist: [
      "A dedicated multichannel head or head-and-neck coil, not a generic body coil, for adequate signal-to-noise ratio",
      "Gradient performance sufficient to support diffusion imaging with low distortion and adequate b-values",
      "3D acquisition capability for MS and epilepsy protocols requiring high-resolution isotropic imaging",
      "SWI/T2* sequence availability, with adequate shimming performance around the skull base",
      "TOF and, ideally, contrast-enhanced MRA capability",
      "Perfusion imaging capability (DSC and/or ASL) for stroke and tumour work",
      "A workstation and PACS capable of multiplanar reformatting, side-by-side prior comparison and volumetric analysis",
      "A radiologist workflow allowing rapid, prioritised review of stroke-protocol studies ahead of routine reporting queues",
    ],
    specs: {
      title: "Typical neuro-capable brain MRI configuration",
      rows: [
        { label: "Field strength", value: "1.5T (routine); 3T preferred for epilepsy and detailed tumour/functional work" },
        { label: "Head coil channels", value: "16–64 channel multichannel head/neck coil" },
        { label: "Gradient strength", value: "≥33 mT/m, with slew rate sufficient for diffusion and EPI-based sequences" },
        { label: "Sequence package", value: "DWI/ADC, SWI, TOF-MRA, DSC/ASL perfusion, single-voxel and multi-voxel spectroscopy" },
        { label: "Reconstruction", value: "AI-accelerated reconstruction beneficial for stroke door-to-image time" },
      ],
    },
  },
  {
    type: "diagram",
    id: "room-planning",
    title: "Neuro-capable MRI suite equipment placement",
    purpose: "Shows how coil storage, stroke-pathway access and reporting workstation placement support a fast, high-yield neuroimaging service.",
    alt: "Floor plan diagram showing the magnet room with a dedicated head coil storage rack near the table, a direct corridor route from the emergency department entrance to the scanner for stroke-pathway patients bypassing general waiting areas, and an adjacent reporting workstation room with PACS access for immediate radiologist review of stroke and epilepsy protocol studies.",
    caption: "Figure 3 — Suite layout for neuroimaging. A short, dedicated stroke-pathway route materially affects door-to-image time.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Questions to ask before specifying a neuro-capable MRI system",
    items: [
      "Does the head coil configuration support parallel imaging factors adequate for diffusion and 3D FLAIR without excessive noise penalty?",
      "Is a validated, regulator-cleared perfusion analysis package included or a separate licence?",
      "What is the vendor's stroke one-click protocol offering, and can it be customised to local pathway timing?",
      "Is spectroscopy post-processing software included, and does it require an additional licence?",
      "What applications training is included specifically for neuro protocols, not just general system operation?",
    ],
  },
  {
    type: "h2",
    id: "faq",
    number: 17,
    text: "Frequently Asked Questions",
    body: "Practical answers to the questions clinicians, patients and procurement teams most often ask about brain MRI.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How long does a brain MRI take?",
        a: "A routine brain protocol typically takes 20–30 minutes. A stroke protocol is compressed to around 10–15 minutes of table time, while a detailed tumour or epilepsy protocol with contrast, perfusion or functional sequences can run 40–60 minutes.",
      },
      {
        q: "Does every brain MRI require contrast?",
        a: "No. Stroke, epilepsy, dementia and most trauma protocols are typically performed without gadolinium. Contrast is generally required for tumour characterisation, infection work-up and MS diagnosis, where enhancement patterns carry direct diagnostic meaning.",
      },
      {
        q: "Can brain MRI detect a stroke immediately?",
        a: "Yes. Diffusion-weighted imaging detects acute ischaemic changes within minutes of vessel occlusion, well before CT typically shows any abnormality, which is why MRI is central to modern hyperacute stroke pathways.",
      },
      {
        q: "Why does a brain MRI sometimes need to be repeated with a different protocol?",
        a: "Different clinical questions require different sequences — a routine brain protocol frequently lacks the thin-slice hippocampal views epilepsy imaging needs, or the perfusion sequences tumour grading requires. A repeat scan with the correct dedicated protocol is often necessary rather than a failure of the original study.",
      },
      {
        q: "What is the difference between DWI and ADC?",
        a: "DWI is the raw diffusion-weighted image, which can show bright signal from both true restriction and normal T2 shine-through. The ADC map is calculated to remove that ambiguity — true restricted diffusion appears dark on ADC, confirming acute ischaemia or another restricting process.",
      },
      {
        q: "Is brain MRI safe for patients with metal implants?",
        a: "Many modern implants are MR-conditional and can be safely scanned under specific documented conditions. Some older devices, certain aneurysm clips and specific neurostimulators are contraindicated. Implant documentation must always be verified before scanning.",
      },
      {
        q: "Can brain MRI diagnose Alzheimer's disease directly?",
        a: "Not definitively on its own. Brain MRI shows a supportive atrophy pattern and, importantly, excludes other structural and vascular causes of cognitive decline. Alzheimer's diagnosis combines clinical assessment, cognitive testing and, where available, biomarker or PET data alongside MRI.",
      },
      {
        q: "Why is a dedicated epilepsy protocol different from a standard brain MRI?",
        a: "Epilepsy protocols use thin, angled coronal slices through the hippocampi and higher-resolution volumetric sequences specifically to detect mesial temporal sclerosis and subtle cortical dysplasia, findings that a standard brain protocol frequently misses.",
      },
      {
        q: "What does susceptibility-weighted imaging show that other sequences miss?",
        a: "SWI is the most sensitive sequence for small blood products — microbleeds, haemosiderin deposits and diffuse axonal injury — because it exploits the local magnetic field distortion these substances cause, which other sequences are not designed to detect.",
      },
      {
        q: "How is a brain tumour distinguished from an abscess on MRI?",
        a: "Diffusion is often the key discriminator: abscess pus typically shows marked restricted diffusion within a ring-enhancing lesion, while necrotic tumour cores usually do not restrict to the same degree. Clinical context and spectroscopy can add further support.",
      },
      {
        q: "Is MR spectroscopy used routinely?",
        a: "No, spectroscopy is a problem-solving adjunct rather than a routine sequence. It is most valuable when differentiating tumour recurrence from radiation necrosis, or supporting tumour grading when the anatomical and perfusion findings are ambiguous.",
      },
      {
        q: "How often should MS patients have follow-up brain MRI?",
        a: "Follow-up intervals depend on disease activity and treatment, but many centres perform surveillance imaging roughly annually, or sooner with a clinical relapse, using a standardised protocol so lesion counts remain genuinely comparable across scans.",
      },
      {
        q: "Can children safely have brain MRI?",
        a: "Yes, and it is often preferred over CT specifically to avoid ionising radiation in paediatric patients. Younger children may require sedation or motion-robust sequences to obtain diagnostic-quality images.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    number: 18,
    text: "Conclusion",
    body: "Brain MRI's diagnostic power comes from matching the right sequence combination to the right clinical question, not from any single acquisition.",
  },
  {
    type: "p",
    text: "The clinical value of brain MRI is realised only when protocol, contrast use and reporting are all deliberately aligned to the referring question — a stroke pathway built around a one-click diffusion-and-perfusion protocol, an epilepsy service with dedicated hippocampal sequences, a tumour pathway with perfusion and spectroscopy available when needed. Hospitals that invest in a neuro-capable coil configuration, a disciplined protocol library and a reporting workflow that prioritises time-critical studies convert brain MRI from a generic anatomical test into the diagnostic backbone of neurology, neurosurgery and emergency stroke care.",
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
              "American College of Radiology. ACR–ASNR–ASHNR–SPR Practice Parameter for the Performance of Neuroimaging with MRI.",
          },
          {
            label:
              "American Heart Association / American Stroke Association. Guidelines for the Early Management of Patients with Acute Ischemic Stroke.",
          },
          {
            label:
              "National Institute for Health and Care Excellence (NICE). Multiple sclerosis in adults: management (NG220).",
          },
        ],
      },
      {
        title: "Scientific publications",
        items: [
          {
            label:
              "Thompson A.J. et al. Diagnosis of multiple sclerosis: 2017 revisions of the McDonald criteria. Lancet Neurology.",
          },
          {
            label:
              "Wintermark M. et al. Acute ischemic stroke imaging: perfusion and diffusion mismatch concepts in patient selection for reperfusion therapy. Peer-reviewed stroke imaging literature.",
          },
          {
            label:
              "Bernasconi A. et al. Recommendations for the use of structural MRI in the care of patients with epilepsy: a consensus report from the ILAE Neuroimaging Task Force.",
          },
        ],
      },
      {
        title: "Regulatory authorities",
        items: [
          {
            label:
              "U.S. Food and Drug Administration. Gadolinium-based contrast agents — safety communications and labelling requirements.",
          },
          {
            label:
              "Medicines and Healthcare products Regulatory Agency (MHRA). Safety guidance on gadolinium-based contrast agents.",
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
              "NEMA MS series. Standards for determination of signal-to-noise ratio, image uniformity and geometric distortion in diagnostic MR imaging.",
          },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          {
            label:
              "Siemens Healthineers, GE HealthCare, Philips and Canon Medical Systems — neuro protocol libraries, coil specifications and instructions for use for the installed platform.",
          },
          {
            label:
              "Manufacturer stroke and epilepsy one-click protocol packages and applications guides.",
          },
        ],
      },
      {
        title: "Medical societies",
        items: [
          {
            label:
              "International League Against Epilepsy (ILAE). Neuroimaging Task Force recommendations.",
          },
          {
            label:
              "Radiological Society of North America (RSNA). Clinical neuroimaging education material.",
          },
          {
            label:
              "European Society of Radiology (ESR) / European Society of Neuroradiology (ESNR). Imaging referral guidelines and quality standards.",
          },
          {
            label:
              "International Society for Magnetic Resonance in Medicine (ISMRM). Neuroimaging methodology resources.",
          },
        ],
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning or upgrading a neuroimaging service?",
    subheading:
      "Our clinical applications team and biomedical engineers advise hospitals across Africa and the Middle East on neuro-capable MRI configuration, coil selection, protocol libraries and stroke-pathway workflow design.",
    technology: "MRI",
  },
];
