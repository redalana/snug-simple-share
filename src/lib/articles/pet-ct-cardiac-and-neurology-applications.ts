/**
 * PET/CT cardiac and neurology applications — PET/CT cluster (supporting, clinical).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PET_CT_CARDIAC_NEURO_TOC: TocItem[] = [
  { id: "overview", title: "Beyond Oncology" },
  { id: "cardiac-viability", title: "Cardiac Viability Imaging" },
  { id: "cardiac-perfusion", title: "Myocardial Perfusion and Flow Reserve" },
  { id: "cardiac-inflammation", title: "Sarcoidosis, Endocarditis and Device Infection" },
  { id: "neuro-dementia", title: "Dementia Differentiation" },
  { id: "neuro-epilepsy", title: "Epilepsy Focus Localisation" },
  { id: "neuro-tumour", title: "Brain Tumour Assessment" },
  { id: "requirements", title: "What These Programmes Require" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PET_CT_CARDIAC_NEURO_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Most PET/CT systems are bought to serve oncology and spend their working lives doing exactly that. Yet the same hardware supports two further clinical programmes that answer questions no other modality answers as directly: cardiac viability and inflammation imaging, and metabolic brain imaging for dementia, epilepsy and tumour assessment.",
      "These programmes matter for two reasons. Clinically, they resolve decisions — whether to revascularise a poorly contracting ventricle, whether a dementia syndrome is Alzheimer type, where a seizure focus lies before surgery. Operationally, they fill capacity that oncology lists leave unused and improve the return on an expensive asset.",
      "This guide sets out the cardiac and neurological applications of PET/CT, the preparation and protocol discipline each requires, the interpretation pitfalls specific to them, and what a hospital must put in place before offering them.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Cardiac viability, perfusion and flow reserve, inflammatory and infective cardiac imaging, dementia differentiation, epilepsy localisation, brain tumour assessment, and the preparation, software and staffing each requires",
    audience:
      "Cardiologists, neurologists, nuclear medicine physicians, technologists, medical physicists and imaging service managers",
    readingTime: "16 min read",
    technology: "PET/CT Scanners",
  },
  {
    type: "h2",
    id: "overview",
    text: "Beyond Oncology",
    number: 1,
    body: "Cardiac and neurological PET studies use the same detection physics as oncology imaging but a different tracer logic, different preparation and, in most cases, different software.",
  },
  {
    type: "table",
    headers: ["Programme", "Question answered", "Alternative modality"],
    rows: [
      ["Cardiac viability", "Is poorly contracting myocardium still alive and worth revascularising?", "Late gadolinium-enhanced cardiac MRI"],
      ["Myocardial perfusion and flow reserve", "Is there haemodynamically significant ischaemia, and is flow reserve reduced globally?", "SPECT perfusion imaging, stress MRI, CT perfusion"],
      ["Cardiac sarcoidosis and inflammation", "Is there active inflammation in the myocardium?", "Cardiac MRI, endomyocardial biopsy"],
      ["Prosthetic valve and device infection", "Is there infection around a valve, graft or device?", "Echocardiography, labelled leucocyte SPECT/CT"],
      ["Dementia differentiation", "Which neurodegenerative pattern does this metabolic profile fit?", "MRI, clinical assessment, CSF or plasma biomarkers"],
      ["Epilepsy localisation", "Where is the interictal hypometabolic focus?", "MRI, EEG, ictal SPECT"],
      ["Brain tumour assessment", "Is this recurrence or treatment effect, and where is the most active tissue?", "MRI with perfusion and spectroscopy"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "These are multidisciplinary services, not extra scan codes",
    text: "Cardiac and neurological PET only produces value when a cardiologist or neurologist is part of the request and the report. Programmes launched without that clinical partnership generate studies nobody acts on, and then get blamed for low yield.",
  },
  {
    type: "h2",
    id: "cardiac-viability",
    text: "Cardiac Viability Imaging",
    number: 2,
    body: "Viability imaging separates myocardium that is hibernating — hypoperfused, poorly contracting, but metabolically alive — from myocardium that is scarred and will not recover after revascularisation.",
  },
  {
    type: "ul",
    items: [
      "The principle is a mismatch: reduced perfusion with preserved metabolic activity indicates viable, hibernating myocardium; matched reduction in both indicates scar.",
      "Preparation for FDG cardiac viability is the opposite of oncology preparation — the myocardium is deliberately driven to take up glucose, which requires a glucose-loading or insulin-based protocol rather than plain fasting.",
      "The study is reported segment by segment against a standard myocardial model, so cardiology can relate findings directly to coronary territories.",
      "The clinical output is a recommendation about revascularisation benefit in a patient whose ventricular function is impaired.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Cardiac FDG preparation inverts the oncology rule",
    text: "In oncology, fasting suppresses myocardial uptake so that tumour stands out. In viability imaging, that same suppression destroys the study. Cardiac viability requires a distinct written preparation protocol, and technologists must know from the request which protocol applies. Mixing them up wastes the dose and the appointment.",
  },
  {
    type: "h2",
    id: "cardiac-perfusion",
    text: "Myocardial Perfusion and Flow Reserve",
    number: 3,
    body: "PET perfusion imaging uses short-lived flow tracers to quantify myocardial blood flow at rest and under pharmacological stress, giving absolute flow values rather than relative distribution alone.",
  },
  {
    type: "ul",
    items: [
      "Absolute quantification allows calculation of myocardial flow reserve, which reveals balanced multi-vessel disease and microvascular dysfunction that relative imaging can miss.",
      "Acquisitions are short because the tracers are short-lived, which makes throughput high but scheduling unforgiving.",
      "Attenuation correction from the CT component reduces the artefacts that complicate SPECT perfusion imaging.",
      "Tracer availability is the practical constraint: some flow tracers require an on-site generator or a very short delivery route, and this determines whether the programme is feasible at all.",
      "Pharmacological stress requires the same monitoring, resuscitation capability and medical cover as any stress test.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Confirm the flow tracer route before promising a perfusion service",
    text: "Cardiac PET perfusion depends on tracers whose half-lives are far shorter than FDG's. Establish in writing which tracer will be used, how it will be supplied or generated on site, and what happens on a failed batch — before a cardiology business case commits to volumes.",
  },
  {
    type: "h2",
    id: "cardiac-inflammation",
    text: "Sarcoidosis, Endocarditis and Device Infection",
    number: 4,
    body: "FDG marks activated inflammatory cells, which makes PET/CT valuable where the clinical question is whether inflammation or infection is active.",
  },
  {
    type: "table",
    headers: ["Indication", "What PET/CT contributes", "Protocol requirement"],
    rows: [
      ["Cardiac sarcoidosis", "Detects active myocardial inflammation and extracardiac disease in one study", "Extended dietary preparation to suppress normal myocardial glucose uptake"],
      ["Prosthetic valve endocarditis", "Identifies perivalvular infection when echocardiography is equivocal", "Myocardial suppression preparation; careful correlation with CT and clinical criteria"],
      ["Vascular graft infection", "Localises infection along a graft and distinguishes it from adjacent inflammation", "Standard oncology-type preparation; note recent surgery timing"],
      ["Implanted device or lead infection", "Distinguishes pocket infection from lead involvement", "Attention to metal-related CT artefact and post-implant interval"],
      ["Treatment response in cardiac sarcoidosis", "Assesses whether immunosuppression has controlled activity", "Identical preparation and reconstruction to the baseline study"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Suppression preparation is the whole study",
    text: "Normal myocardium can take up glucose avidly, and an unsuppressed heart makes inflammatory imaging uninterpretable. These indications need a specific extended dietary preparation, communicated to the patient in advance and documented before injection. Poor compliance is the leading cause of non-diagnostic cardiac inflammation studies.",
  },
  {
    type: "h2",
    id: "neuro-dementia",
    text: "Dementia Differentiation",
    number: 5,
    body: "Brain FDG PET shows regional cerebral glucose metabolism, and neurodegenerative diseases produce characteristic regional patterns of reduced metabolism.",
  },
  {
    type: "ul",
    items: [
      "The clinical role is differentiation in atypical or early presentations, not screening — it is requested when the syndrome is unclear and the answer changes management.",
      "Pattern recognition is central: posterior temporoparietal, frontotemporal, occipital and posterior cingulate involvement carry different diagnostic implications.",
      "Preparation matters — a quiet, dimly lit uptake environment with minimal stimulation, because sensory and cognitive activity alters regional metabolism.",
      "Statistical comparison against a normal database improves reproducibility, and requires the software licence and the reference dataset to be in place.",
      "Amyloid and tau tracers, where available and clinically indicated, answer a different question from FDG and are governed by their own appropriate-use criteria.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Brain protocols need their own reconstruction",
    text: "A whole-body oncology reconstruction is not appropriate for brain imaging. Neurological studies use a dedicated high-resolution brain reconstruction and, usually, a separate quantitative analysis package. Both must be configured, validated and version-controlled before the service opens.",
  },
  {
    type: "h2",
    id: "neuro-epilepsy",
    text: "Epilepsy Focus Localisation",
    number: 6,
    body: "In drug-resistant focal epilepsy under evaluation for surgery, interictal FDG PET commonly shows hypometabolism in the region of the seizure focus, including in patients whose MRI appears normal.",
  },
  {
    type: "ul",
    items: [
      "The study is interictal by design, and recent seizure activity must be documented because it alters the metabolic pattern.",
      "Findings are interpreted within a multidisciplinary epilepsy surgery conference alongside MRI, EEG and neuropsychology — never in isolation.",
      "Co-registration with MRI substantially improves localisation confidence and should be part of the workflow rather than an optional extra.",
      "The clinical value is highest in MRI-negative cases, where PET may be the study that makes a surgical candidate identifiable.",
    ],
  },
  {
    type: "h2",
    id: "neuro-tumour",
    text: "Brain Tumour Assessment",
    number: 7,
    body: "High background cortical glucose metabolism limits FDG in the brain, so brain tumour PET frequently uses amino acid tracers where they are available.",
  },
  {
    type: "ul",
    items: [
      "The recurring clinical question after treatment is whether an enhancing lesion represents tumour recurrence or treatment-related change; amino acid tracers address it better than FDG.",
      "PET can identify the most metabolically active region of a heterogeneous tumour to guide biopsy targeting.",
      "Metabolic volumes contribute to radiotherapy target definition alongside MRI.",
      "Tracer availability is again decisive — amino acid tracers require a supply route that many services do not have, and the programme should not be advertised before it is secured.",
    ],
  },
  {
    type: "h2",
    id: "requirements",
    text: "What These Programmes Require",
    number: 8,
    body: "Adding cardiac and neurological PET is a service development exercise. The hardware is already installed; the surrounding capability usually is not.",
  },
  {
    type: "table",
    headers: ["Requirement", "Why", "Practical test"],
    rows: [
      ["Clinical partnership", "Requests and reports need cardiology or neurology input", "Named clinical lead in each specialty and an agreed referral pathway"],
      ["Indication-specific written protocols", "Preparation differs radically between programmes and inverts the oncology rule", "One version-controlled document per indication, visible to technologists"],
      ["Software licences and analysis packages", "Cardiac quantification and brain normal-database comparison are licensed options", "Licence present, validated and included in the QA programme"],
      ["Tracer supply for non-FDG agents", "Flow and amino acid tracers have short half-lives and restricted supply", "Written supply agreement with contingency arrangements"],
      ["Stress-testing capability", "Pharmacological stress for perfusion imaging", "Monitoring, resuscitation equipment, drugs and medical cover in the suite"],
      ["Patient preparation logistics", "Extended dietary and glucose-loading protocols need advance instruction", "Written patient instructions issued at booking and compliance recorded"],
      ["Quiet uptake environment for brain studies", "Sensory activity changes regional metabolism", "A low-stimulation uptake space available for neurology slots"],
      ["Physics and QA extension", "New reconstructions and quantitative tools need validation", "QA programme updated and re-baselined after each software change"],
      ["Reporting capacity and training", "Pattern-based cardiac and brain reporting is a distinct skill", "Named reporters with documented training and case-review arrangements"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Open one programme at a time",
    text: "Cardiac viability, cardiac inflammation, perfusion, dementia, epilepsy and brain tumour imaging each need their own protocol, preparation logistics and reporting competence. Services that open one programme, stabilise it, audit it and then open the next end up with all of them. Services that announce all six at once usually deliver none reliably.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Can the same PET/CT used for oncology do cardiac and brain studies?",
        a: "Yes. The hardware is the same. What differs is the tracer, the patient preparation, the reconstruction and the analysis software, plus the clinical partnership and reporting competence needed to make the studies useful.",
      },
      {
        q: "Why is cardiac FDG preparation different from oncology preparation?",
        a: "In oncology, fasting suppresses myocardial glucose uptake so that tumour contrast is maximised. In cardiac viability imaging the myocardium is the target, so a glucose-loading or insulin-based protocol is used to drive uptake. For cardiac inflammation imaging the requirement inverts again: an extended dietary preparation is used to suppress normal myocardial uptake so that inflammation stands out.",
      },
      {
        q: "What does PET viability imaging add over cardiac MRI?",
        a: "Both are established. PET assesses metabolic viability directly and quantifies the perfusion–metabolism mismatch, and it remains available for patients in whom MRI is difficult — for example some device recipients or patients unable to tolerate a long MRI examination. The choice is normally made locally according to available expertise and equipment.",
      },
      {
        q: "Is PET perfusion imaging better than SPECT perfusion?",
        a: "PET perfusion offers absolute flow quantification, myocardial flow reserve and robust CT-based attenuation correction, which helps in balanced multi-vessel disease and microvascular dysfunction. SPECT remains the higher-volume, more widely available and better-supplied service in most hospitals, largely because of tracer logistics.",
      },
      {
        q: "When should brain FDG PET be requested in suspected dementia?",
        a: "When the clinical syndrome is atypical or early and the metabolic pattern would change management — for example in distinguishing frontotemporal from Alzheimer-type presentations. It is a problem-solving investigation within a specialist memory pathway, not a screening test.",
      },
      {
        q: "How does PET help in epilepsy surgery planning?",
        a: "Interictal FDG PET commonly shows hypometabolism in the region of the seizure focus and can identify a candidate region even when MRI appears normal. It is interpreted alongside MRI, EEG and neuropsychology in a multidisciplinary surgical conference, ideally with PET–MRI co-registration.",
      },
      {
        q: "Why is FDG limited in brain tumours?",
        a: "Normal cortex is highly glucose-avid, so tumour-to-background contrast is poor. Amino acid tracers give better contrast and are more useful for distinguishing recurrence from treatment-related change, for biopsy targeting and for radiotherapy volume definition — where a supply route for them exists.",
      },
      {
        q: "What is the most common reason these programmes fail?",
        a: "Preparation and partnership. Non-diagnostic studies from incomplete dietary or glucose-loading preparation, and low clinical yield when cardiology or neurology were not involved in defining the pathway. Both are addressed with written indication-specific protocols, patient instructions issued at booking, and a named clinical lead in each specialty.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Extending a PET/CT service beyond oncology?",
    subheading:
      "AbuFarha Medical supplies, installs and supports PET/CT systems and works with clinical teams on software configuration, quantitative calibration and the service capability behind cardiac and neurological programmes.",
    technology: "PET/CT Scanners",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Cardiac and neurological imaging pathways" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "PET/CT configuration, quantification and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "International professional-society procedure guidelines and appropriate-use criteria",
    disclaimer:
      "This article is educational and describes internationally recognised practice. Indications, tracer availability, preparation protocols and injected activities must follow national regulation, professional-society guidance and local multidisciplinary governance.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Cardiac imaging guidance",
        items: [
          { label: "SNMMI / ASNC guidance on cardiac PET viability and perfusion imaging" },
          { label: "Joint society guidance on FDG PET in cardiac sarcoidosis and device infection" },
        ],
      },
      {
        title: "Neurological imaging guidance",
        items: [
          { label: "EANM procedure guidelines for brain FDG PET imaging" },
          { label: "Professional-society appropriate-use criteria for amyloid and amino acid tracers" },
        ],
      },
      {
        title: "Performance and quantification",
        items: [
          { label: "NEMA NU 2 — performance measurements of positron emission tomographs" },
          { label: "Manufacturer documentation for cardiac and neurological quantification packages" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as guidance is revised.",
  },
  {
    type: "takeaways",
    items: [
      "The same PET/CT supports cardiac viability, perfusion, inflammation and metabolic brain imaging alongside oncology.",
      "Cardiac viability requires glucose loading; cardiac inflammation requires extended dietary suppression — both invert the oncology fasting rule.",
      "PET perfusion adds absolute flow quantification and flow reserve, but depends on very short-lived tracer supply.",
      "Brain FDG differentiates neurodegenerative patterns in atypical presentations and localises epileptic foci, including in MRI-negative cases.",
      "Amino acid tracers, not FDG, are the appropriate agents for most brain tumour questions.",
      "Each programme needs its own written protocol, software licence, preparation logistics and reporting competence.",
      "Open one programme at a time with a named clinical lead in the referring specialty.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "Cardiac and neurological PET are the clearest opportunities to increase both the clinical contribution and the utilisation of an installed PET/CT — provided each is treated as a service development rather than an additional scan code.",
  },
  {
    type: "p",
    text: "The scanner is already capable. What decides success is written indication-specific preparation, validated software and quantification, secured tracer supply for non-FDG agents, and a cardiologist or neurologist who owns the pathway with the nuclear medicine team.",
  },
];
