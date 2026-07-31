/**
 * Drug-Eluting Stents cluster — "Antiplatelet Therapy After Stenting"
 */

import type { ContentBlock, TocItem } from "../blog";

export const ANTIPLATELET_THERAPY_TOC: TocItem[] = [
  { id: "rationale", title: "Why Antiplatelet Therapy Is Needed" },
  { id: "dapt", title: "Dual Antiplatelet Therapy Explained" },
  { id: "duration", title: "Duration and the Balance of Risks" },
  { id: "adherence", title: "Adherence and the Consequences of Interruption" },
  { id: "special", title: "Special Situations Requiring Coordination" },
  { id: "team-role", title: "The Role of the Cath Lab and Ward Team" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const ANTIPLATELET_THERAPY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Antiplatelet therapy is an essential companion to drug-eluting stent implantation, not an optional add-on. AbuFarha Medical supplies drug-eluting stents and cath lab systems and supports interventional cardiology programmes with training that includes the procedural and post-procedural care pathway surrounding every stent implantation.",
      "A newly implanted stent presents a foreign metallic and polymer surface to flowing blood before the vessel wall has fully healed over it. Platelets can adhere to this surface and trigger clot formation, a process that antiplatelet medication is specifically designed to suppress during the vulnerable healing period.",
      "This article explains why antiplatelet therapy is required after stenting, what dual antiplatelet therapy involves in principle, the general considerations around its duration, and the practical coordination required between cath lab, ward and outpatient teams to keep patients on therapy through the healing period.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Rationale for antiplatelet therapy after stenting, dual antiplatelet therapy principles, duration considerations, adherence risks and care coordination",
    audience:
      "Interventional cardiologists, cath lab and ward nursing staff, pharmacists, patient education and discharge planning teams",
    readingTime: "11 min read",
    technology: "Drug-Eluting Stents",
  },
  {
    type: "h2",
    id: "rationale",
    text: "Why Antiplatelet Therapy Is Needed",
    number: 1,
    body: "Until the vessel wall covers the stent surface, platelets can trigger clot formation on it.",
  },
  {
    type: "p",
    text: "Immediately after stent implantation, the metallic struts are exposed to circulating blood. Over subsequent weeks to months, the vessel wall gradually grows a layer of tissue over the struts, a process referred to as endothelialisation. Until this coverage is established, the stent surface represents a site where platelets can aggregate and initiate clot formation, a complication known as stent thrombosis. Antiplatelet medication suppresses platelet activation and aggregation, reducing this risk during the healing window.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Endothelialisation is a biological process, not a fixed calendar date",
    text: "The pace at which a stent becomes covered by vessel wall tissue varies between patients and is influenced by the device's platform and polymer characteristics, which is one reason antiplatelet duration is individualised rather than universally fixed.",
  },
  {
    type: "h2",
    id: "dapt",
    text: "Dual Antiplatelet Therapy Explained",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Dual antiplatelet therapy combines aspirin with a second antiplatelet agent from a different drug class, targeting platelet activation through complementary pathways.",
      "The combination provides more effective suppression of platelet-driven clot formation than either agent used alone.",
      "The specific second agent and dosing regimen is determined by the treating cardiologist based on the patient's clinical presentation, bleeding risk and other individual factors.",
      "Dual therapy is typically followed by a period of single antiplatelet therapy, most commonly continued indefinitely as secondary prevention.",
    ],
  },
  {
    type: "h2",
    id: "duration",
    text: "Duration and the Balance of Risks",
    number: 3,
  },
  {
    type: "p",
    text: "The duration of dual antiplatelet therapy reflects a balance between the risk of stent thrombosis if therapy is stopped too early and the risk of bleeding if potent antiplatelet therapy is continued longer than necessary. This balance is individualised by the treating cardiologist, taking into account the clinical indication for stenting, the complexity of the intervention, and the patient's individual bleeding and ischaemic risk profile.",
  },
  {
    type: "table",
    headers: ["Consideration", "Effect of shorter dual therapy duration", "Effect of longer dual therapy duration"],
    rows: [
      ["Stent thrombosis risk", "Potentially higher during the vulnerable healing period", "Lower, as suppression continues through healing"],
      ["Bleeding risk", "Lower cumulative bleeding exposure", "Higher cumulative bleeding exposure"],
      ["Suitability", "Considered where bleeding risk is elevated", "Considered where ischaemic risk is elevated"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Duration decisions sit squarely within the treating cardiologist's clinical judgement and are made on an individual patient basis rather than a fixed institutional rule.",
    clinicalInterpretation:
      "No single duration is correct for every patient; the decision reflects a deliberate risk-benefit assessment specific to that patient's presentation.",
    hospitalRecommendation:
      "Discharge documentation should clearly record the intended duration and the plan for review, so that primary care and the patient are not left to guess when therapy may be adjusted.",
  },
  {
    type: "h2",
    id: "adherence",
    text: "Adherence and the Consequences of Interruption",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Premature discontinuation of antiplatelet therapy, particularly in the early period after implantation, is a recognised risk factor for stent thrombosis.",
      "Patients should be clearly informed before discharge not to stop antiplatelet medication without first consulting the treating cardiology team, including before other planned procedures.",
      "Any planned surgery or dental procedure requiring temporary interruption of antiplatelet therapy should involve the cardiology team in the decision.",
      "Side effects or bleeding concerns should be reported promptly rather than managed by the patient independently stopping medication.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Unplanned interruption is a recognised risk, not a minor inconvenience",
    text: "Stopping antiplatelet therapy without cardiology input, especially soon after implantation, removes a key protection during the period when the stent surface is most vulnerable to clot formation. Any interruption should be a coordinated clinical decision.",
  },
  {
    type: "h2",
    id: "special",
    text: "Special Situations Requiring Coordination",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Patients requiring anticoagulation for another condition alongside antiplatelet therapy, where combined regimens carry distinct bleeding considerations.",
      "Patients requiring non-cardiac surgery in the period following stent implantation, where the timing of surgery relative to stenting matters.",
      "Patients with a history of gastrointestinal bleeding or other bleeding risk factors, requiring individualised assessment.",
      "Patients with known or suspected difficulty adhering to medication regimens, where structured follow-up and education are particularly important.",
    ],
  },
  {
    type: "h2",
    id: "team-role",
    text: "The Role of the Cath Lab and Ward Team",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Confirming antiplatelet loading has occurred appropriately around the time of the procedure, as directed by the treating cardiologist.",
      "Providing clear, documented discharge instructions covering medication names, duration and the plan for review.",
      "Coordinating with pharmacy and primary care to ensure continuity of supply after discharge.",
      "Educating patients and, where relevant, carers on the importance of adherence and the need to consult the cardiology team before any interruption.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supports interventional cardiology programmes with training that reinforces the full care pathway around stent implantation, recognising that device performance and antiplatelet therapy management together determine the patient's outcome after the procedure.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Why is more than one antiplatelet medication needed after stenting?",
        a: "Combining aspirin with a second antiplatelet agent targets platelet activation through complementary pathways, providing more effective protection against clot formation on the stent surface than a single agent during the healing period.",
      },
      {
        q: "How long does dual antiplatelet therapy typically continue?",
        a: "Duration is individualised by the treating cardiologist based on the patient's clinical presentation and bleeding versus ischaemic risk, and is typically followed by continued single antiplatelet therapy.",
      },
      {
        q: "What happens if a patient stops antiplatelet therapy early?",
        a: "Premature discontinuation, particularly soon after implantation, is a recognised risk factor for stent thrombosis and should never occur without consulting the treating cardiology team.",
      },
      {
        q: "Does antiplatelet therapy affect the need for planned surgery after stenting?",
        a: "Yes. Any procedure requiring temporary interruption of antiplatelet therapy should involve the cardiology team in timing and management decisions, given the healing status of the stented vessel.",
      },
      {
        q: "Is stent thrombosis the same as in-stent restenosis?",
        a: "No. Stent thrombosis is an acute clot formation event, whereas restenosis is a gradual re-narrowing of the treated segment. Both are addressed in more detail in the companion article on in-stent restenosis and thrombosis.",
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
    text: "Antiplatelet therapy is an integral part of care after drug-eluting stent implantation, protecting the treated vessel during the healing period while balancing the individual patient's bleeding risk. Clear discharge communication, coordinated management of interruptions, and patient education on adherence are as important to procedural success as the device implantation itself.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Interventional cardiology and post-procedural care practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Cath lab programme support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Established interventional cardiology clinical practice principles",
    disclaimer:
      "Educational guidance on antiplatelet therapy after stenting. It does not replace individualised clinical judgement or prescribing guidance from the treating physician.",
  },
  {
    type: "references",
    items: [
      { label: "Established interventional cardiology clinical practice principles regarding post-stenting antiplatelet management." },
      { label: "Institutional discharge planning and medication reconciliation protocols." },
      { label: "Manufacturer instructions for use for drug-eluting coronary stent systems." },
    ],
  },
];
