/**
 * Drug-Eluting Stents cluster — "In-Stent Restenosis and Thrombosis"
 */

import type { ContentBlock, TocItem } from "../blog";

export const RESTENOSIS_THROMBOSIS_TOC: TocItem[] = [
  { id: "distinction", title: "Two Distinct Complications" },
  { id: "restenosis-mechanism", title: "How In-Stent Restenosis Develops" },
  { id: "thrombosis-mechanism", title: "How Stent Thrombosis Develops" },
  { id: "risk-factors", title: "Contributing Risk Factors" },
  { id: "recognition", title: "Clinical Recognition and Presentation" },
  { id: "management", title: "Management Principles" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const RESTENOSIS_THROMBOSIS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "In-stent restenosis and stent thrombosis are the two principal complications that can affect a treated coronary segment after drug-eluting stent implantation. AbuFarha Medical supplies drug-eluting stents and cath lab systems and supports interventional cardiology programmes with the training and technical understanding relevant to recognising and managing these outcomes.",
      "Although both complications result in reduced blood flow through a previously treated vessel, they arise from different biological processes, occur over different timescales, and are managed differently. Confusing the two can lead to miscommunication in clinical documentation and inappropriate assumptions about cause and urgency.",
      "This article distinguishes the two processes, explains the general mechanisms and contributing factors behind each, and outlines the principles of clinical recognition and management, complementing the companion articles on stent technology and antiplatelet therapy in this cluster.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "The distinction between in-stent restenosis and stent thrombosis, underlying mechanisms, risk factors, clinical presentation and management principles",
    audience:
      "Interventional cardiologists, cardiology ward and outpatient clinical staff, cath lab teams, clinical educators",
    readingTime: "12 min read",
    technology: "Drug-Eluting Stents",
  },
  {
    type: "h2",
    id: "distinction",
    text: "Two Distinct Complications",
    number: 1,
    body: "Restenosis is a gradual narrowing; thrombosis is an acute clot event.",
  },
  {
    type: "p",
    text: "In-stent restenosis is a gradual re-narrowing of the treated arterial segment, driven by excessive tissue growth within the stent over weeks to months. Stent thrombosis, by contrast, is an acute clot forming on or near the stent surface, which can occur suddenly and cause abrupt vessel occlusion. The two share some overlapping risk factors but differ fundamentally in mechanism, timing and clinical urgency.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Timing is a key clue distinguishing the two",
    text: "Restenosis typically presents as a gradual return of symptoms over weeks to months after the index procedure, while stent thrombosis presents acutely, often as sudden chest pain consistent with an acute coronary event.",
  },
  {
    type: "h2",
    id: "restenosis-mechanism",
    text: "How In-Stent Restenosis Develops",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "The vessel wall responds to stent implantation with a healing process that includes proliferation of smooth muscle cells within the stented segment.",
      "In a drug-eluting stent, the anti-proliferative drug is intended to limit this response; restenosis can nonetheless occur when the biological response exceeds the drug's suppressive effect.",
      "Restenosis narrows the vessel lumen progressively, reducing blood flow to the downstream myocardium.",
      "The likelihood of restenosis is influenced by lesion characteristics, vessel size, diabetes and other patient factors present before the original procedure.",
    ],
  },
  {
    type: "h2",
    id: "thrombosis-mechanism",
    text: "How Stent Thrombosis Develops",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Stent thrombosis occurs when platelets aggregate and a clot forms on the stent surface, most commonly where the vessel wall has not yet grown over the struts.",
      "Incomplete stent apposition to the vessel wall, or incomplete expansion at the time of implantation, are recognised contributing factors.",
      "Premature discontinuation of antiplatelet therapy is a well-recognised precipitant, as covered in the companion article on antiplatelet therapy after stenting.",
      "Stent thrombosis can occur acutely during or shortly after the procedure, or later, and is classified by clinicians according to the time elapsed since implantation.",
    ],
  },
  {
    type: "table",
    headers: ["Feature", "In-stent restenosis", "Stent thrombosis"],
    rows: [
      ["Underlying process", "Excessive tissue growth within the stent", "Acute clot formation on the stent surface"],
      ["Typical onset", "Weeks to months after implantation", "Can occur acutely at any point after implantation"],
      ["Clinical presentation", "Gradual return of angina-type symptoms", "Sudden, acute coronary event"],
      ["Clinical urgency", "Assessed and managed on an elective or urgent basis", "Medical emergency requiring immediate assessment"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The differing urgency of these two complications is the single most important distinction for frontline clinical staff to internalise.",
    clinicalInterpretation:
      "Sudden chest pain in a patient with a prior stent should always be treated as a possible acute event pending assessment, distinct from gradually recurring symptoms suggestive of restenosis.",
    hospitalRecommendation:
      "Clinical pathways and staff training should clearly differentiate the triage response to acute presentations from that for gradual symptom recurrence in previously stented patients.",
  },
  {
    type: "h2",
    id: "risk-factors",
    text: "Contributing Risk Factors",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Diabetes, smaller vessel diameter and longer lesion length are recognised contributors to restenosis risk.",
      "Incomplete stent expansion or malapposition at the time of implantation contributes to thrombosis risk.",
      "Interruption of antiplatelet therapy, particularly early after implantation, is a well-recognised contributor to thrombosis.",
      "Complex lesion characteristics, including bifurcations and heavily calcified segments, can influence the risk of either complication.",
      "Ongoing risk factors such as smoking and poorly controlled diabetes affect both vessel healing and long-term stent performance.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Deployment technique affects long-term outcome",
    text: "Adequate stent expansion and apposition at the time of implantation, verified with appropriate imaging or pressure technique during the procedure, materially influences the subsequent risk of both restenosis and thrombosis.",
  },
  {
    type: "h2",
    id: "recognition",
    text: "Clinical Recognition and Presentation",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Gradual recurrence of exertional chest discomfort in a previously stented patient warrants assessment for possible restenosis.",
      "Sudden onset of chest pain, particularly with acute coronary syndrome features, in a previously stented patient warrants emergency assessment for possible thrombosis.",
      "Diagnostic confirmation for either complication relies on coronary angiography, performed in the cath lab.",
      "Clear patient education on when to seek emergency care after stenting supports earlier recognition of an acute event.",
    ],
  },
  {
    type: "h2",
    id: "management",
    text: "Management Principles",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Restenosis is typically managed with repeat percutaneous intervention, guided by the treating cardiologist's assessment of the lesion.",
      "Stent thrombosis is a medical emergency managed with urgent revascularisation, following the same acute coronary syndrome pathway as any acute occlusion.",
      "Review of antiplatelet therapy adequacy and adherence is a standard part of the workup for either complication.",
      "Underlying contributing factors, including deployment technique and patient risk factors, are considered when planning further management.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supports interventional cardiology programmes with training that reinforces recognition of these two distinct complications, and supplies the cath lab imaging and device technology used both in original implantation and any subsequent re-intervention.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is in-stent restenosis an emergency?",
        a: "Not typically. It usually presents gradually and is assessed and managed on an elective or urgent basis, in contrast to stent thrombosis which is a medical emergency.",
      },
      {
        q: "Can drug-eluting stents still develop restenosis?",
        a: "Yes. The anti-proliferative drug reduces the likelihood of excessive tissue growth compared with a bare metal stent, but it does not eliminate the possibility of restenosis entirely.",
      },
      {
        q: "What is the most important modifiable risk factor for stent thrombosis?",
        a: "Adherence to prescribed antiplatelet therapy, particularly avoiding premature discontinuation, is one of the most important modifiable factors influencing thrombosis risk.",
      },
      {
        q: "How is stent thrombosis diagnosed?",
        a: "Through coronary angiography performed urgently in the cath lab following presentation with an acute coronary event in a previously stented patient.",
      },
      {
        q: "Does deployment technique at the original procedure matter for these outcomes?",
        a: "Yes. Adequate stent expansion and apposition at implantation, verified during the original procedure, influences the subsequent risk of both restenosis and thrombosis.",
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
    text: "In-stent restenosis and stent thrombosis are distinct complications with different mechanisms, timelines and clinical urgency, and correctly distinguishing between them is essential for appropriate patient management. Understanding contributing risk factors, from deployment technique to antiplatelet adherence, supports both prevention and prompt recognition when either complication occurs.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Interventional cardiology practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Cath lab systems support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Established interventional cardiology clinical practice principles",
    disclaimer:
      "Educational guidance on stent complications. It does not replace clinical judgement or emergency care pathways.",
  },
  {
    type: "references",
    items: [
      { label: "Established interventional cardiology clinical practice principles regarding stent complications." },
      { label: "Institutional acute coronary syndrome and cath lab emergency response protocols." },
      { label: "Manufacturer instructions for use for drug-eluting coronary stent systems." },
    ],
  },
];
