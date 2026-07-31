/**
 * Drug-Eluting Stents cluster — "Drug-Eluting Stents vs Bare Metal Stents"
 */

import type { ContentBlock, TocItem } from "../blog";

export const DES_VS_BMS_TOC: TocItem[] = [
  { id: "definitions", title: "Two Device Classes, One Mechanical Job" },
  { id: "restenosis", title: "Restenosis: The Central Difference" },
  { id: "antiplatelet", title: "Antiplatelet Therapy Duration" },
  { id: "comparison", title: "Side-by-Side Comparison" },
  { id: "selection", title: "When a Bare Metal Stent Is Still Chosen" },
  { id: "inventory", title: "Inventory and Formulary Implications" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DES_VS_BMS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Bare metal stents and drug-eluting stents are both used to hold a coronary artery open after balloon angioplasty, and both remain part of the interventional cardiology device landscape even though drug-eluting stents now account for the majority of implants. AbuFarha Medical supplies drug-eluting stents and cath lab systems and supports interventional programmes in understanding how the two device classes differ so that formulary and case-planning decisions are made on a sound technical basis.",
      "The two device classes share the same underlying mechanical role — a metallic scaffold that resists elastic recoil of the treated vessel — but differ in the presence of a drug-and-polymer coating and, consequently, in restenosis rates, healing timeline and the antiplatelet therapy that follows implantation. These differences shape which patients and clinical circumstances still favour a bare metal device.",
      "This article compares the two device classes directly: what distinguishes them mechanically and pharmacologically, how restenosis risk differs, how post-implantation medication needs differ, and what a hospital should consider when deciding whether to retain bare metal stents in its formulary at all.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Structural and pharmacological differences between DES and BMS, restenosis mechanisms, antiplatelet therapy implications, and formulary considerations",
    audience:
      "Interventional cardiologists, cath lab nurses, procurement teams, biomedical engineering and clinical training staff",
    readingTime: "11 min read",
    technology: "Drug-Eluting Stents",
  },
  {
    type: "h2",
    id: "definitions",
    text: "Two Device Classes, One Mechanical Job",
    number: 1,
    body: "Both device classes hold the artery open mechanically; only one adds a controlled pharmacological effect on top of that role.",
  },
  {
    type: "p",
    text: "A bare metal stent is an expandable metallic mesh with no drug or polymer coating. It provides mechanical scaffolding against the elastic recoil of the vessel wall and nothing more. A drug-eluting stent uses essentially the same category of metallic platform but adds a polymer coating carrying an anti-proliferative drug, released into the surrounding tissue over weeks to months after implantation to suppress the excessive cellular growth that would otherwise re-narrow the treated segment.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The metallic platform alone does not decide the outcome",
    text: "A bare metal stent and a drug-eluting stent can share a very similar underlying alloy and strut architecture. The clinically significant difference between the two device classes is the coating and its pharmacological effect, not the metal itself.",
  },
  {
    type: "h2",
    id: "restenosis",
    text: "Restenosis: The Central Difference",
    number: 2,
  },
  {
    type: "p",
    text: "In-stent restenosis — re-narrowing of the treated segment due to excessive tissue growth in response to the vessel injury — occurs more frequently after bare metal stent implantation than after drug-eluting stent implantation, because the anti-proliferative drug in a DES specifically suppresses this cellular response at the treatment site. This difference is the primary clinical rationale for the shift toward drug-eluting stents as the default device across most percutaneous coronary intervention. The companion article on in-stent restenosis and thrombosis addresses the mechanisms and management of this complication in detail.",
  },
  {
    type: "h2",
    id: "antiplatelet",
    text: "Antiplatelet Therapy Duration",
    number: 3,
  },
  {
    type: "p",
    text: "Both device classes require dual antiplatelet therapy after implantation while the stented segment endothelialises, but the duration and clinical reasoning differ between the two. The treating cardiologist determines the specific regimen and duration for an individual patient based on the device implanted, the clinical indication and the patient's individual bleeding and ischaemic risk profile. The companion article on antiplatelet therapy after stenting sets out this reasoning in more depth.",
  },
  {
    type: "table",
    headers: ["Attribute", "Bare metal stent", "Drug-eluting stent"],
    rows: [
      ["Coating", "None", "Polymer-based drug coating"],
      ["Mechanism beyond scaffolding", "None", "Local anti-proliferative drug release"],
      ["Relative restenosis rate", "Higher than DES", "Lower than BMS"],
      ["Vessel healing pattern", "Generally more complete endothelial coverage over time", "Coating and drug can influence the pace of endothelial coverage"],
      ["Antiplatelet therapy planning", "Determined by treating cardiologist per patient", "Determined by treating cardiologist per patient and device"],
      ["Current usage pattern", "Selected in specific clinical circumstances", "Default device across most contemporary percutaneous coronary intervention"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The comparison is not a simple hierarchy; each device class has a role, and the clinical circumstance — not a general preference — should drive the choice in any individual case.",
    clinicalInterpretation:
      "Restenosis reduction is the primary clinical advantage of DES, but it does not eliminate every scenario in which a bare metal stent may still be selected.",
    hospitalRecommendation:
      "Maintain a small bare metal stent stock alongside the DES formulary only where a documented clinical need exists locally, rather than by default.",
  },
  {
    type: "h2",
    id: "selection",
    text: "When a Bare Metal Stent Is Still Chosen",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Where a patient has a known contraindication or intolerance to the prolonged dual antiplatelet therapy typically associated with drug-eluting stent implantation, subject to the treating cardiologist's assessment.",
      "Where an upcoming surgical procedure requiring interruption of antiplatelet therapy is anticipated in the near term, again as judged by the treating clinician.",
      "In specific anatomical or clinical scenarios where the treating interventional cardiologist determines a bare metal device is the more appropriate choice.",
      "Device selection in every case remains an individualised clinical decision made by the treating cardiologist, not a default determined by inventory availability.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Do not let stock availability drive device choice",
    text: "Cath lab inventory should be planned to support the clinical decision, not the reverse. If a particular device class is unavailable at the point of need, that is an inventory failure to be corrected, not a signal to change clinical practice.",
  },
  {
    type: "h2",
    id: "inventory",
    text: "Inventory and Formulary Implications",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Bare metal stents, where retained, typically require a smaller stocked size range and lower volume than the DES formulary, reflecting their more limited and specific use case.",
      "Storage and shelf-life considerations differ between the two device classes because a DES coating can carry specific handling requirements that a bare metal device does not.",
      "Traceability requirements — lot and serial number recording — apply equally to both device classes and should be managed through the same system.",
      "Staff training should explicitly cover the clinical circumstances distinguishing the two device classes, not only handling technique, so that operators and nursing staff understand why a particular device was selected for a given case.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies both drug-eluting and bare metal coronary stent devices and supports cath lab teams with the technical and regulatory documentation, biomedical engineering service and training needed to maintain an appropriately balanced formulary.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Are bare metal stents obsolete?",
        a: "No. They remain a valid device class used in specific clinical circumstances, though drug-eluting stents are now the default choice across most percutaneous coronary intervention because of their lower restenosis rate.",
      },
      {
        q: "Do bare metal stents require dual antiplatelet therapy?",
        a: "Yes, dual antiplatelet therapy is required after bare metal stent implantation as well, though the duration and clinical reasoning may differ from that following drug-eluting stent implantation, determined individually by the treating cardiologist.",
      },
      {
        q: "Why is restenosis lower with a drug-eluting stent?",
        a: "The anti-proliferative drug released from the polymer coating on a DES suppresses the excessive smooth muscle cell proliferation that drives in-stent restenosis, an effect a bare metal stent does not provide.",
      },
      {
        q: "Does a hospital need to stock both device classes?",
        a: "Whether to retain bare metal stents depends on the documented clinical scenarios the interventional programme actually encounters locally; some programmes maintain a small bare metal stock, others do not, based on their own case mix and clinical judgement.",
      },
      {
        q: "Is a bare metal stent cheaper than a drug-eluting stent?",
        a: "Relative pricing varies by market and supplier arrangement and is not something that can be generalised; procurement decisions should be based on documented clinical need and total cost considerations rather than an assumed price relationship.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 6,
  },
  {
    type: "p",
    text: "Bare metal and drug-eluting stents share the same mechanical purpose but differ meaningfully in restenosis rate, healing pattern and the antiplatelet therapy planning that follows implantation. Understanding these differences allows clinical teams to select the appropriate device for each patient and allows procurement and inventory teams to plan a formulary that matches genuine clinical need rather than habit.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Interventional cardiology device practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Cath lab consumables and technical support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Established interventional cardiology clinical principles and manufacturer documentation synthesis",
    disclaimer:
      "Educational comparison of drug-eluting and bare metal coronary stents. It does not replace manufacturer instructions for use or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer instructions for use for bare metal and drug-eluting coronary stent systems." },
      { label: "Institutional interventional cardiology programme device formularies and clinical protocols." },
      { label: "Established interventional cardiology clinical practice principles regarding stent selection." },
    ],
  },
];
