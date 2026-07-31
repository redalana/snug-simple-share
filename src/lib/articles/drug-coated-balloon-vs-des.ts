/**
 * Drug-Eluting Stents cluster — "Drug-Coated Balloons vs Drug-Eluting Stents"
 */

import type { ContentBlock, TocItem } from "../blog";

export const DCB_VS_DES_TOC: TocItem[] = [
  { id: "definitions", title: "Two Different Approaches to Local Drug Delivery" },
  { id: "mechanism", title: "How a Drug-Coated Balloon Works" },
  { id: "leave-nothing", title: "The \"Leave Nothing Behind\" Principle" },
  { id: "comparison", title: "Side-by-Side Comparison" },
  { id: "indications", title: "Where Each Technology Is Typically Considered" },
  { id: "combined-use", title: "Combined and Sequential Use" },
  { id: "inventory", title: "Inventory and Procurement Implications" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DCB_VS_DES_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Drug-coated balloons and drug-eluting stents are both used to deliver an anti-proliferative drug locally to the vessel wall during percutaneous coronary intervention, but they achieve it through fundamentally different mechanisms. AbuFarha Medical supplies both drug-eluting stents and drug-coated balloon technology alongside cath lab systems, and supports interventional teams in understanding how the two approaches differ so device selection is made on sound technical grounds.",
      "A drug-eluting stent leaves a permanent metallic scaffold in the vessel, coated with a polymer that releases drug over time. A drug-coated balloon delivers its drug during a brief inflation and is then withdrawn entirely, leaving no permanent implant behind. This distinction — a permanent device versus a transient drug-delivery instrument — has consequences for vessel healing, follow-up antiplatelet therapy and the clinical scenarios in which each is considered.",
      "This article compares the two technologies directly: how a drug-coated balloon works, the reasoning behind leaving no permanent implant, where each technology is typically considered by treating cardiologists, and what the distinction means for cath lab inventory and procurement planning.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Mechanism of drug-coated balloon therapy, comparison with drug-eluting stents, clinical decision considerations, and inventory implications",
    audience:
      "Interventional cardiologists, cath lab staff, procurement teams, biomedical engineering and clinical training staff",
    readingTime: "11 min read",
    technology: "Drug-Eluting Stents",
  },
  {
    type: "h2",
    id: "definitions",
    text: "Two Different Approaches to Local Drug Delivery",
    number: 1,
    body: "One technology implants a permanent scaffold; the other delivers a drug and withdraws.",
  },
  {
    type: "p",
    text: "A drug-eluting stent is a permanently implanted metallic scaffold whose polymer coating releases an anti-proliferative drug into the vessel wall over an extended period. A drug-coated balloon is an angioplasty balloon whose surface is coated with the same broad category of anti-proliferative drug, formulated with an excipient that allows rapid transfer of the drug to the vessel wall during a short inflation, after which the balloon is withdrawn and no metallic implant remains in the artery.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Contact time, not stent presence, delivers the drug",
    text: "A drug-coated balloon relies on rapid drug transfer during a single, typically brief, inflation. The excipient formulation and inflation technique used by the operator both influence how effectively the drug is delivered to the vessel wall in that short window.",
  },
  {
    type: "h2",
    id: "mechanism",
    text: "How a Drug-Coated Balloon Works",
    number: 2,
  },
  {
    type: "p",
    text: "During balloon inflation, direct contact between the coated balloon surface and the vessel wall allows the anti-proliferative drug to transfer into the tissue. Because this transfer happens over a short inflation rather than a prolonged elution period, the drug and excipient formulation are specifically designed for rapid uptake. The balloon is then deflated and withdrawn, leaving the treated segment without a permanent metallic scaffold, though the vessel itself may still require pre-treatment such as balloon angioplasty to prepare the lesion before drug-coated balloon use.",
  },
  {
    type: "h2",
    id: "leave-nothing",
    text: "The \"Leave Nothing Behind\" Principle",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Avoiding a permanent metallic implant preserves the native vessel anatomy, which can matter in vessels where future access or bypass surgery may be needed.",
      "No permanent implant means no long-term stent-related complications such as stent fracture or late stent thrombosis at that treatment site.",
      "The absence of a permanent metallic scaffold is a central rationale for using drug-coated balloon technology in small-vessel disease and in-stent restenosis, subject to the treating cardiologist's assessment of the individual lesion.",
      "The vessel retains its own healing and remodelling capacity without a mechanical scaffold constraining it, which is a different biological pathway from that of a drug-eluting stent.",
    ],
  },
  {
    type: "table",
    headers: ["Attribute", "Drug-coated balloon", "Drug-eluting stent"],
    rows: [
      ["Permanent implant", "No", "Yes"],
      ["Drug delivery duration", "Single brief inflation", "Weeks to months of elution"],
      ["Mechanical scaffolding", "None after withdrawal", "Ongoing, permanent"],
      ["Typical consideration", "In-stent restenosis, small vessels, selected lesions", "De novo lesions requiring mechanical support"],
      ["Lesion preparation requirement", "Often requires separate pre-dilation", "May be delivered directly in suitable lesions"],
      ["Long-term stent-related complications", "Not applicable, no implant remains", "Possible, as with any permanent implant"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The two technologies are frequently complementary tools in the same interventional programme rather than direct substitutes for one another.",
    clinicalInterpretation:
      "Lesion characteristics and clinical context, not a general preference for one technology, should determine which is selected for an individual patient.",
    hospitalRecommendation:
      "Cath labs offering both technologies should ensure operators are trained in the distinct technique each requires, since drug-coated balloon delivery depends more heavily on operator inflation technique than stent deployment does.",
  },
  {
    type: "h2",
    id: "indications",
    text: "Where Each Technology Is Typically Considered",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Drug-coated balloons are often considered for in-stent restenosis, where implanting a further permanent scaffold inside an already-stented segment may not be the preferred approach.",
      "Drug-coated balloons are also considered in small-vessel coronary disease, where the treating cardiologist judges that a permanent stent may carry a less favourable risk profile in that vessel size.",
      "Drug-eluting stents remain the standard approach for most de novo lesions requiring mechanical support against elastic recoil.",
      "Bifurcation lesions may involve either or both technologies depending on the specific anatomy and the treating cardiologist's chosen strategy.",
      "In every case, the choice between the two technologies, or their combined use, is an individualised decision made by the treating interventional cardiologist based on the lesion and the patient.",
    ],
  },
  {
    type: "h2",
    id: "combined-use",
    text: "Combined and Sequential Use",
    number: 5,
  },
  {
    type: "p",
    text: "The two technologies are not mutually exclusive within a single procedure or a single patient's overall treatment course. A lesion may be prepared with balloon angioplasty, treated with a drug-coated balloon, and in some cases a drug-eluting stent may still be required if the result of balloon-only treatment is not adequate. The treating cardiologist determines this strategy at the time of the procedure based on the angiographic result achieved at each step.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Stock both technologies with separate sizing logic",
    text: "Drug-coated balloon and drug-eluting stent inventories are sized against different demand drivers — DCB stock tends to track restenosis and small-vessel case volume, while DES stock tracks overall de novo case volume. Managing them under a single undifferentiated stent inventory line tends to produce mismatched stock.",
  },
  {
    type: "h2",
    id: "inventory",
    text: "Inventory and Procurement Implications",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Drug-coated balloons typically require their own diameter and length matrix distinct from the stent size range, and should be tracked as a separate line in the inventory system.",
      "Storage and shelf-life handling for coated balloon products should follow the specific manufacturer instructions for that product, which may differ from stent storage requirements.",
      "Traceability recording — lot and serial number at the point of use — applies to drug-coated balloons in the same way it applies to implanted stents.",
      "Procurement planning for drug-coated balloons should be informed by the programme's in-stent restenosis and small-vessel case volume specifically, rather than derived from overall DES volume.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies both drug-eluting stents and drug-coated balloon technology and supports interventional cardiology programmes with the technical documentation, biomedical engineering service and operator training needed to use both technologies appropriately.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is a drug-coated balloon a type of stent?",
        a: "No. A drug-coated balloon is an angioplasty balloon that delivers drug to the vessel wall and is then withdrawn, leaving no permanent implant, unlike a stent which remains in the vessel permanently.",
      },
      {
        q: "Can a drug-coated balloon replace a drug-eluting stent in every case?",
        a: "No. The two technologies are suited to different clinical circumstances, and the treating interventional cardiologist selects between them, or uses them together, based on the specific lesion and patient.",
      },
      {
        q: "Why would a physician choose not to leave a stent behind?",
        a: "Avoiding a permanent implant can be preferred in scenarios such as in-stent restenosis or small-vessel disease, where the treating cardiologist judges that the risk profile of an additional permanent scaffold is less favourable than a drug-coated balloon approach.",
      },
      {
        q: "Does a drug-coated balloon still require antiplatelet therapy afterward?",
        a: "Antiplatelet therapy requirements following drug-coated balloon use are determined by the treating cardiologist based on the clinical scenario, including whether any stent was also placed during the same procedure.",
      },
      {
        q: "Should a cath lab stock both technologies?",
        a: "Many interventional programmes stock both, since they serve different clinical scenarios; the decision should be based on the hospital's documented case mix, including its volume of in-stent restenosis and small-vessel disease.",
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
    text: "Drug-coated balloons and drug-eluting stents deliver the same broad category of anti-proliferative drug through fundamentally different mechanisms — one transient, one permanent — and are suited to different clinical circumstances rather than being interchangeable alternatives. Understanding this distinction supports better clinical decision-making and a more accurately sized cath lab inventory across both technologies.",
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
      "Educational comparison of drug-coated balloon and drug-eluting stent technology. It does not replace manufacturer instructions for use or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer instructions for use for drug-coated balloon and drug-eluting stent systems." },
      { label: "Institutional interventional cardiology programme clinical protocols and device formularies." },
      { label: "Established interventional cardiology clinical practice principles regarding local drug delivery." },
    ],
  },
];
