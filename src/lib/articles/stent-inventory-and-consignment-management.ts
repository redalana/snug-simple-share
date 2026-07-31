/**
 * Drug-Eluting Stents cluster —
 * "Stent Inventory and Consignment Management"
 */

import type { ContentBlock, TocItem } from "../blog";

export const STENT_INVENTORY_TOC: TocItem[] = [
  { id: "why", title: "Why Stent Inventory Is a Clinical Risk, Not Just a Cost" },
  { id: "models", title: "Owned Stock, Consignment and Hybrid Models" },
  { id: "sizing", title: "Sizing the Matrix: Diameters, Lengths and Depth" },
  { id: "controls", title: "Traceability and Expiry Control" },
  { id: "workflow", title: "Cath Lab Workflow and Replenishment" },
  { id: "governance", title: "Governance, Audit and Supplier Review" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const STENT_INVENTORY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Stent inventory management determines whether an interventional programme can treat the lesion in front of it. AbuFarha Medical supplies drug-eluting stents and cath lab systems, and supports interventional cardiology programmes with supply continuity, stock structuring advice, biomedical engineering support and training.",
      "A cath lab does not consume stents predictably. Demand arrives as a distribution of vessel diameters and lesion lengths that varies with case mix, referral pattern and operator preference. The inventory must therefore be broad enough to cover that distribution and shallow enough that capital is not immobilised in sizes that expire unused.",
      "This guide sets out the supply models available, how to structure a size matrix, what traceability and expiry control require, and how replenishment should be integrated into cath lab workflow rather than bolted onto it.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Consignment and owned-stock models, size matrix design, traceability and expiry control, replenishment workflow, governance and supplier review",
    audience:
      "Interventional cardiologists, cath lab managers, procurement and supply chain teams, materials management, finance and clinical governance leads",
    readingTime: "11 min read",
    technology: "Drug-Eluting Stents",
  },
  {
    type: "h2",
    id: "why",
    text: "Why Stent Inventory Is a Clinical Risk, Not Just a Cost",
    number: 1,
    body: "A missing size is a clinical event, not an administrative one.",
  },
  {
    type: "p",
    text: "When the required diameter or length is not on the shelf, the operator faces a choice between compromising on sizing, staging the procedure or transferring the patient. Each option carries clinical consequence. Inventory design is therefore a patient-safety decision expressed in commercial language, and it should be governed jointly by the interventional team and the procurement function rather than by either alone.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Measure stockouts, not just stock value",
    text: "The most useful inventory metric in a cath lab is how often the required size was unavailable at the moment it was needed. A programme that reports only stock value and expiry write-off is measuring half the problem.",
  },
  {
    type: "h2",
    id: "models",
    text: "Owned Stock, Consignment and Hybrid Models",
    number: 2,
  },
  {
    type: "table",
    headers: ["Model", "How it works", "Where it fits"],
    rows: [
      [
        "Owned stock",
        "The hospital purchases inventory outright and carries expiry and obsolescence risk",
        "High, stable volume with predictable size distribution",
      ],
      [
        "Consignment",
        "Supplier-owned stock is held on site; the hospital is invoiced on use",
        "Broad size matrices, new programmes, variable case mix",
      ],
      [
        "Hybrid",
        "Core fast-moving sizes owned; long-tail sizes held on consignment",
        "Most established programmes",
      ],
      [
        "Case-by-case supply",
        "Devices ordered per scheduled case with no resident stock",
        "Elective-only, low-volume services without emergency cover",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Consignment shifts expiry and obsolescence risk to the supplier, which is precisely why it is best applied to the long tail of infrequently used sizes rather than to the whole matrix.",
    clinicalInterpretation:
      "A programme offering primary PCI cannot operate on case-by-case supply — emergency work requires resident stock across the common size range.",
    hospitalRecommendation:
      "Define the model per size band rather than for the whole inventory, then review the split against actual usage data.",
  },
  {
    type: "p",
    text: "Consignment is not free. It carries administrative obligations: accurate usage capture, periodic reconciliation, secure storage and a clear liability position for damaged or lost stock. Those obligations should be written into the supply agreement rather than assumed, and the reconciliation cycle should be short enough that discrepancies are traceable to a period rather than to a year.",
  },
  {
    type: "h2",
    id: "sizing",
    text: "Sizing the Matrix: Diameters, Lengths and Depth",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Derive the size matrix from your own historical usage, not from a generic template — case mix drives the distribution and it differs materially between programmes.",
      "Separate breadth (how many size combinations are represented) from depth (how many units of each). Breadth prevents clinical compromise; depth prevents same-day stockout.",
      "Give greater depth to the fast-moving centre of the distribution and minimal depth to the extremes, which are the natural candidates for consignment.",
      "Hold a defined minimum for emergency cover independently of elective planning, so that scheduled activity cannot deplete the primary PCI safety net.",
      "Account for operator preference explicitly: two platforms held at half depth each can create more stockouts than one platform held at full depth.",
      "Review the matrix on a fixed cycle against actual usage, and after any change in case mix, referral pattern or operator roster.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Breadth failures and depth failures need different fixes",
    text: "If the size existed in your matrix but not on the shelf, that is a depth or replenishment failure. If the size was never stocked at all, it is a matrix design failure. Recording which one occurred is what makes the data actionable.",
  },
  {
    type: "h2",
    id: "controls",
    text: "Traceability and Expiry Control",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Implant traceability from device identifier to patient record, captured at the point of use rather than reconstructed afterwards.",
      "Lot and batch capture sufficient to support a field safety notice or recall without a manual search of paper records.",
      "First-expiry-first-out rotation enforced physically in the storage layout, not only in policy.",
      "A defined near-expiry escalation window in which stock is either redistributed, returned under the supply agreement, or accepted as write-off with a recorded reason.",
      "Storage conditions and packaging integrity checks appropriate to sterile implantable devices, with damaged packaging quarantined immediately.",
      "Periodic physical stock count reconciled against the electronic record, with variance investigated rather than adjusted silently.",
    ],
  },
  {
    type: "h2",
    id: "workflow",
    text: "Cath Lab Workflow and Replenishment",
    number: 5,
  },
  {
    type: "p",
    text: "Inventory control fails at the moment of use, not in the stockroom. If recording a used device is slower than not recording it, the record will drift — and every downstream figure, from replenishment triggers to consignment invoicing, drifts with it. Capture must therefore happen inside the procedure workflow, with a scan or equivalent single action performed by the person who opens the device.",
  },
  {
    type: "ul",
    items: [
      "Point-of-use capture as a single action, integrated with the procedure record.",
      "Automatic replenishment triggers at defined minimum levels per size, rather than a periodic manual review.",
      "A named accountable owner for cath lab stock, with a defined deputy — inventory without an owner degrades within weeks.",
      "Agreed supplier lead times and an emergency supply route documented and tested, not assumed.",
      "Visible, labelled storage organised by size so that the correct device is found under time pressure.",
      "A short daily check of the emergency cover minimum, independent of the full stock cycle.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Unrecorded usage is the root cause of most inventory failures",
    text: "Stockouts, disputed consignment invoices and unexplained variance almost always trace back to devices used but not captured. Fix capture first; every other control depends on it.",
  },
  {
    type: "h2",
    id: "governance",
    text: "Governance, Audit and Supplier Review",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "A standing forum where interventional, procurement, materials management and finance review usage, stockouts and write-off together.",
      "Platform selection governed clinically, with the number of concurrent platforms treated as an inventory decision as well as a clinical one.",
      "Supplier performance reviewed against fill rate, lead time adherence, consignment reconciliation accuracy and responsiveness to emergency requests.",
      "Clinical governance oversight of traceability completeness, since incomplete implant records are a regulatory and patient-safety exposure.",
      "Documented handling of recalls and field safety notices, exercised at least once so the process is known before it is needed.",
      "Contract terms reviewed against real usage data at renewal rather than rolled forward unchanged.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies drug-eluting stents alongside cath lab systems and service support, and works with interventional programmes on supply continuity, size-matrix structuring and the training and engineering support the lab depends on.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is consignment always better than owned stock?",
        a: "No. Consignment removes expiry and obsolescence risk but adds reconciliation and administrative obligations, and it is only as reliable as the supply agreement behind it. Most established programmes are best served by a hybrid: own the fast-moving core, consign the long tail.",
      },
      {
        q: "How many stent platforms should a lab hold at once?",
        a: "Fewer than clinical preference alone would suggest. Every additional platform divides the same shelf space and capital across more size combinations, which increases stockout risk. Platform count should be a joint clinical and inventory decision.",
      },
      {
        q: "How should near-expiry stock be handled?",
        a: "Through a defined escalation window rather than at the point of expiry. Within that window the device is redistributed, returned under the terms of the supply agreement, or accepted as write-off with a recorded reason so the pattern can be corrected in the matrix.",
      },
      {
        q: "What traceability is required for implanted stents?",
        a: "A record linking the specific device — including its identifier and lot information — to the patient, captured at the point of use. This is what allows a hospital to respond to a field safety notice or recall promptly and to answer questions during incident investigation.",
      },
      {
        q: "What is the most common cause of a stent stockout?",
        a: "Usage that was not captured at the point of use, so the replenishment trigger never fired. The second most common cause is a size matrix that was never designed around the programme's own historical case mix.",
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
    text: "Stent inventory is clinical infrastructure. Build the size matrix from your own usage data, split owned and consigned stock by size band rather than wholesale, protect the emergency minimum from elective demand, and make point-of-use capture the easiest action in the room. Programmes that do this rarely compromise on sizing; programmes that do not discover their inventory design mid-case.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      {
        role: "Clinical review",
        name: "AbuFarha Clinical Editorial Board",
        credential: "Interventional cardiology programme support",
      },
      {
        role: "Supply review",
        name: "AbuFarha Medical Supply Operations",
        credential: "Interventional consumables supply and logistics",
      },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Supply chain and interventional programme practice synthesis",
    disclaimer:
      "Educational guidance on interventional consumables inventory practice. It does not replace hospital procurement policy, supply agreement terms or regulatory traceability requirements.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer instructions for use and storage conditions for implantable coronary devices." },
      { label: "Institutional procurement, consignment and implant traceability policies." },
      { label: "Cath lab usage and stockout audit records used for size matrix review." },
    ],
  },
];
