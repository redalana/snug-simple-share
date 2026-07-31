/**
 * Drug-Eluting Stents cluster — "What Are Drug-Eluting Stents?"
 */

import type { ContentBlock, TocItem } from "../blog";

export const WHAT_ARE_DES_TOC: TocItem[] = [
  { id: "definition", title: "What a Drug-Eluting Stent Is" },
  { id: "components", title: "The Three Components: Platform, Polymer, Drug" },
  { id: "mechanism", title: "How Restenosis Prevention Works" },
  { id: "indications", title: "Where DES Are Used" },
  { id: "generations", title: "Generations of DES Development" },
  { id: "considerations", title: "Clinical and Procurement Considerations" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const WHAT_ARE_DES_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Drug-eluting stents (DES) are the dominant device class used in percutaneous coronary intervention to keep a treated artery open after balloon angioplasty. AbuFarha Medical supplies drug-eluting stents and the supporting cath lab systems used to deliver them, alongside installation, commissioning, biomedical engineering support and training for interventional cardiology programmes.",
      "A DES is a metallic scaffold coated with a polymer that releases an anti-proliferative drug into the vessel wall over weeks to months. The device combines mechanical support — holding the artery open against elastic recoil — with a pharmacological effect that suppresses the excessive tissue growth that otherwise narrows the treated segment again.",
      "This article sets out what a drug-eluting stent is, how its components work together, where it is used, and what a hospital or cath lab team should understand before stocking or selecting a device family. Related decisions on antiplatelet therapy, restenosis management and platform selection are addressed in companion articles in this cluster.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Stent construction, drug-elution mechanism, clinical indications, generational development and procurement-relevant considerations",
    audience:
      "Interventional cardiologists, cath lab managers and nurses, hospital procurement teams, biomedical engineering staff",
    readingTime: "12 min read",
    technology: "Drug-Eluting Stents",
  },
  {
    type: "h2",
    id: "definition",
    text: "What a Drug-Eluting Stent Is",
    number: 1,
    body: "A metallic scaffold that mechanically supports a coronary artery while releasing a drug that limits re-narrowing.",
  },
  {
    type: "p",
    text: "A drug-eluting stent is a small expandable mesh tube, usually made from a metallic alloy, delivered on a balloon catheter to the site of a coronary narrowing and expanded to restore vessel diameter. Unlike a bare metal stent, its surface carries a drug reservoir — typically embedded in or bonded to a polymer coating — that releases an anti-proliferative agent into the surrounding tissue over a defined period after implantation.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The stent is a delivery platform, not just a scaffold",
    text: "A DES performs two separate jobs at once: it is a permanent mechanical support and, for a limited window after implantation, a local drug-delivery device. Once the drug elutes fully, only the mechanical role remains.",
  },
  {
    type: "h2",
    id: "components",
    text: "The Three Components: Platform, Polymer, Drug",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "The metallic platform provides radial strength, deliverability through tortuous vessels and long-term structural support of the artery wall.",
      "The polymer coating controls the rate and duration of drug release and, in many contemporary designs, is intended to be biocompatible or fully absorbed over time.",
      "The anti-proliferative drug suppresses the smooth muscle cell proliferation and neointimal growth that drive in-stent restenosis.",
      "The strut design and thickness influence deliverability, vessel healing and the surface area available for drug elution.",
      "The delivery system — balloon and catheter — determines how the device is advanced and deployed at the lesion site.",
    ],
  },
  {
    type: "h2",
    id: "mechanism",
    text: "How Restenosis Prevention Works",
    number: 3,
  },
  {
    type: "p",
    text: "After any stent is implanted, the vessel wall responds to the mechanical injury with a healing process that includes proliferation of smooth muscle cells. Left unchecked, this proliferation can re-narrow the treated segment, a process known as in-stent restenosis. The anti-proliferative drug released from a DES limits this cellular response locally, at the site where it is needed, without the systemic exposure that oral administration of the same class of drug would produce.",
  },
  {
    type: "table",
    headers: ["Device element", "Primary function", "Clinical relevance"],
    rows: [
      ["Metallic platform", "Mechanical support and deliverability", "Determines radial strength and how well the device tracks to the lesion"],
      ["Polymer coating", "Controls drug release kinetics", "Influences vessel healing and duration of anti-proliferative effect"],
      ["Anti-proliferative drug", "Suppresses neointimal growth", "Primary determinant of restenosis reduction versus bare metal stents"],
      ["Strut thickness and design", "Affects deliverability and endothelial coverage", "Thinner struts are generally associated with more favourable healing profiles"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "None of the three components works in isolation; a well-performing DES is a system-level design outcome rather than the sum of any single feature.",
    clinicalInterpretation:
      "Device selection should consider platform, polymer and drug together rather than any one attribute in isolation.",
    hospitalRecommendation:
      "Cath labs should maintain a rationalised set of DES families that the interventional team is familiar with, rather than stocking against isolated marketing claims.",
  },
  {
    type: "h2",
    id: "indications",
    text: "Where DES Are Used",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Treatment of significant coronary artery narrowing identified on diagnostic angiography, where percutaneous revascularisation is the chosen strategy.",
      "Both single-vessel and multi-vessel coronary disease, subject to the treating team's assessment of lesion complexity and overall revascularisation strategy.",
      "A wide range of lesion types and vessel sizes, with device selection guided by vessel diameter, lesion length and calcification.",
      "Both elective and urgent procedures, including primary intervention for acute coronary presentations.",
    ],
  },
  {
    type: "h2",
    id: "generations",
    text: "Generations of DES Development",
    number: 5,
  },
  {
    type: "p",
    text: "Drug-eluting stent design has evolved over successive generations, generally trending toward thinner struts, more biocompatible or bioabsorbable polymers, and refined drug-release profiles. This evolution has been driven by efforts to reduce long-term complications associated with earlier designs, including delayed vessel healing. Contemporary devices in routine use reflect this iterative refinement rather than a single fixed design.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Generational change affects storage and handling, not just clinical performance",
    text: "Newer platforms and coatings can carry different shelf-life, storage temperature or handling instructions. Inventory teams should track device generation alongside size and length when managing stock, not treat all DES as interchangeable for storage purposes.",
  },
  {
    type: "h2",
    id: "considerations",
    text: "Clinical and Procurement Considerations",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Device sizing range: a usable DES inventory must cover the diameter and length range the cath lab's case mix actually requires.",
      "Deliverability in tortuous or calcified anatomy, which affects procedural success and total procedure time.",
      "Consistency of supply, since interrupted availability of a familiar device family disrupts operator technique and case planning.",
      "Post-implantation antiplatelet therapy requirements, which must be planned for and communicated at the point of implantation.",
      "Traceability: lot and serial number recording for every implanted device, supporting recall management and long-term outcome tracking.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies drug-eluting stents alongside cath lab imaging and haemodynamic monitoring systems, and supports interventional cardiology programmes with installation, commissioning, biomedical engineering service and staff training so that device selection and procedural capability are planned together rather than separately.",
  },
  {
    type: "faq",
    items: [
      {
        q: "What is the difference between a bare metal stent and a drug-eluting stent?",
        a: "A bare metal stent provides only mechanical support, while a drug-eluting stent adds a polymer-based drug coating that releases an anti-proliferative agent to reduce the rate of in-stent restenosis. This distinction is addressed in detail in the dedicated comparison article in this cluster.",
      },
      {
        q: "How long does the drug in a DES continue to release?",
        a: "Release duration varies by device design, generally spanning weeks to a few months after implantation, after which the stent continues to function purely as a mechanical scaffold.",
      },
      {
        q: "Do all coronary lesions require a drug-eluting stent?",
        a: "The treating interventional cardiologist selects the device based on lesion characteristics, vessel size, patient factors and procedural strategy; not every case is identical, and device choice is a clinical judgement made at the time of the procedure.",
      },
      {
        q: "Is medication required after a DES is implanted?",
        a: "Yes. Dual antiplatelet therapy is a standard part of care after DES implantation to reduce the risk of stent thrombosis while the vessel heals, as covered in the companion article on antiplatelet therapy after stenting.",
      },
      {
        q: "How should a hospital plan its DES inventory?",
        a: "By matching stocked sizes and device families to the actual case mix and lesion complexity treated locally, maintaining traceability for every implanted device, and coordinating with suppliers on lead times, as discussed in the procurement and inventory management articles in this cluster.",
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
    text: "A drug-eluting stent combines a mechanical scaffold, a controlled-release polymer and an anti-proliferative drug to treat coronary narrowing while limiting the vessel's tendency to re-narrow. Understanding how the platform, polymer and drug work together helps clinical and procurement teams make informed device and inventory decisions, and sets the foundation for the more detailed technical, clinical and operational topics covered elsewhere in this cluster.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Interventional cardiology device practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Cath lab systems and consumables support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Established interventional cardiology principles and manufacturer documentation synthesis",
    disclaimer:
      "Educational guidance on drug-eluting stent technology. It does not replace manufacturer instructions for use or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer instructions for use and technical documentation for drug-eluting coronary stent systems." },
      { label: "Institutional interventional cardiology programme protocols and device formularies." },
      { label: "Established interventional cardiology clinical practice principles regarding percutaneous coronary intervention." },
    ],
  },
];
