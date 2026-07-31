/**
 * Operating Room cluster — "Operating Room Equipment Buying Guide"
 */

import type { ContentBlock, TocItem } from "../blog";

export const OR_BUYING_GUIDE_TOC: TocItem[] = [
  { id: "framework", title: "Building a Defensible Buying Framework" },
  { id: "specification", title: "From Clinical Need to Technical Specification" },
  { id: "categories", title: "Equipment Categories and Selection Criteria" },
  { id: "vendor", title: "Evaluating Vendors, Not Just Products" },
  { id: "compliance", title: "Compatibility, Compliance and Interoperability" },
  { id: "acceptance", title: "Acceptance Terms Worth Negotiating" },
  { id: "pitfalls", title: "Common Purchasing Pitfalls" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const OR_BUYING_GUIDE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Purchasing operating room equipment is a multi-year commitment to a supplier relationship, not a one-time transaction. AbuFarha Medical supplies operating room equipment together with the installation, commissioning, training and biomedical engineering support that determine whether the purchase performs as expected across its service life.",
      "A buying decision made on headline specification alone routinely underperforms one made on fit to the case list, compatibility with existing infrastructure, and the strength of the service relationship behind it. The equipment that looks identical on a data sheet can differ substantially in serviceability, spare parts availability and total disruption over a ten-year horizon.",
      "This guide sets out a structured approach to buying operating room equipment: translating clinical need into specification, evaluating vendors beyond the product itself, and negotiating the acceptance and support terms that protect the investment after the order is signed.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Buying frameworks, specification from clinical need, equipment category criteria, vendor evaluation, compatibility and compliance, acceptance terms, common pitfalls",
    audience:
      "Procurement committees, theatre managers, biomedical engineering, surgeons and clinical leads, hospital finance and capital planning teams",
    readingTime: "12 min read",
    technology: "Operating Room",
  },
  {
    type: "h2",
    id: "framework",
    text: "Building a Defensible Buying Framework",
    number: 1,
    body: "A structured framework separates clinical requirement from vendor preference before evaluation begins.",
  },
  {
    type: "p",
    text: "A defensible purchase begins with a written statement of clinical requirement, agreed by the specialties that will use the room, before any vendor is approached. This sequencing matters: once a specific product has been demonstrated to the team, requirements tend to be written around its features rather than the reverse, which narrows the field before evaluation has genuinely started.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Write the requirement before the demonstration",
    text: "Circulate a requirement document to clinical stakeholders before any vendor demonstration takes place. It anchors the evaluation criteria and makes it possible to compare competing systems against the same yardstick.",
  },
  {
    type: "h2",
    id: "specification",
    text: "From Clinical Need to Technical Specification",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Case mix and volume, since low-volume specialist procedures and high-volume general lists place different demands on the same category of equipment.",
      "Patient population, including size and positioning ranges the equipment must accommodate safely.",
      "Required imaging modalities and projections where intraoperative imaging is part of the procedure.",
      "Integration requirements with existing displays, recording and hospital information systems.",
      "Physical constraints of the room, including door widths, ceiling heights and existing service points.",
      "Anticipated growth in case complexity or volume over the equipment's expected service life.",
    ],
  },
  {
    type: "h2",
    id: "categories",
    text: "Equipment Categories and Selection Criteria",
    number: 3,
  },
  {
    type: "table",
    headers: ["Category", "Primary selection criterion", "Secondary considerations"],
    rows: [
      ["Operating tables", "Positioning range and load capacity for the case mix", "Radiolucency, accessory compatibility, battery backup"],
      ["Surgical lighting", "Illumination and shadow control at required working distances", "Camera integration, sterile handle options"],
      ["Mobile imaging (C-arm)", "Achievable projections over the intended table and positions", "Dose management features, image storage and integration"],
      ["Anaesthesia workstations", "Ventilation modes matched to case complexity", "Monitoring integration, gas monitoring, servicing network"],
      ["Electrosurgical units", "Power range and safety features for the procedure set", "Accessory ecosystem, alarm and interlock behaviour"],
      ["Integration and recording systems", "Compatibility with existing displays and network", "Vendor neutrality, future upgrade path"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Secondary considerations are frequently the differentiator once the primary criterion is met by more than one vendor, particularly around service network depth and accessory compatibility.",
    clinicalInterpretation:
      "Equipment that meets the primary clinical criterion but scores poorly on integration or servicing tends to generate workarounds that clinical staff absorb silently, masking the shortfall from procurement review.",
    hospitalRecommendation:
      "Score secondary considerations explicitly in the evaluation matrix rather than treating them as tie-breakers decided informally.",
  },
  {
    type: "h2",
    id: "vendor",
    text: "Evaluating Vendors, Not Just Products",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Local presence for installation, commissioning and service response, rather than remote support only.",
      "Depth and accessibility of the spare parts pipeline for the specific model under consideration.",
      "Training capability: whether structured operator and application training is included and how it is sequenced.",
      "Track record with comparable installations, verifiable through reference sites where possible.",
      "Responsiveness during the pre-sale process, which is a reasonable indicator of responsiveness after the sale.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "The service relationship outlasts the purchase decision",
    text: "An operating room system will be serviced, calibrated and supported for years after the purchase decision is forgotten. Vendor evaluation should weight the service relationship at least as heavily as the initial specification comparison.",
  },
  {
    type: "h2",
    id: "compliance",
    text: "Compatibility, Compliance and Interoperability",
    number: 5,
  },
  {
    type: "p",
    text: "New equipment must be assessed against what already exists in the room and the department: electrical supply and earthing arrangements, medical gas provision, existing displays and recording infrastructure, and the hospital's network and data security requirements. Compliance documentation — relevant regulatory approvals, electrical safety testing and manufacturer conformity declarations — should be requested and reviewed as part of the evaluation, not treated as a formality confirmed only at delivery.",
  },
  {
    type: "h2",
    id: "acceptance",
    text: "Acceptance Terms Worth Negotiating",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "A defined acceptance testing protocol with measurable performance criteria, agreed before delivery.",
      "Training scope, number of sessions and the roles covered, specified in the order rather than left open.",
      "Spare parts availability commitments and typical response times for the region.",
      "Warranty duration and what it covers, including planned maintenance visits within the warranty period.",
      "Documentation deliverables: user manuals, service manuals where applicable, and as-installed records.",
    ],
  },
  {
    type: "h2",
    id: "pitfalls",
    text: "Common Purchasing Pitfalls",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "Evaluating on headline specification without confirming fit to the actual room and case mix.",
      "Treating training and installation as included without specifying scope in writing.",
      "Underweighting spare parts availability for the specific model, which affects downtime years later.",
      "Allowing a vendor demonstration to substitute for a written requirement document.",
      "Failing to involve biomedical engineering in the evaluation, leaving serviceability unassessed.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supports hospitals through this process from requirement definition through vendor evaluation, and carries the resulting purchase through installation, commissioning, training and long-term biomedical engineering support.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Should the buying decision be led by clinical staff or procurement?",
        a: "Both, working from the same written requirement. Clinical staff define what the equipment must achieve; procurement evaluates vendors, terms and total commitment against that requirement so the decision is neither purely clinical preference nor purely commercial.",
      },
      {
        q: "How much weight should price carry in the evaluation?",
        a: "Price should be evaluated alongside service network depth, spare parts availability and training scope, since these determine the equipment's effective availability over its service life. A lower purchase price with weak service backing frequently costs more in disruption than it saves at order.",
      },
      {
        q: "What should be confirmed before signing, not after?",
        a: "Acceptance testing criteria, training scope and session count, spare parts commitments, and compatibility with existing room infrastructure. These are straightforward to specify in the order and difficult to add afterwards.",
      },
      {
        q: "Is a vendor demonstration a reliable basis for comparison?",
        a: "Only when demonstrations are run against the same written requirement and, where possible, on equivalent case scenarios. An unstructured demonstration favours whichever vendor demonstrates first or most persuasively rather than the best fit.",
      },
      {
        q: "How should future growth in case complexity be factored in?",
        a: "By stating anticipated changes in case mix or volume in the requirement document, so equipment is evaluated against where the department is heading, not only its current case list.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
  },
  {
    type: "p",
    text: "A sound operating room equipment purchase starts from a written clinical requirement, evaluates vendors on service capability as much as product specification, and locks in acceptance, training and spare parts commitments before signature. Decisions made this way are defensible under review and hold up over the equipment's operating life.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Theatre and interventional service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Theatre equipment installation and commissioning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Procurement and commissioning practice synthesis",
    disclaimer:
      "Educational guidance on operating room equipment purchasing. It does not replace institutional procurement policy, manufacturer documentation or local regulatory requirements.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer specification and site planning documentation for operating room equipment." },
      { label: "Institutional procurement and capital equipment evaluation frameworks." },
      { label: "Acceptance testing and commissioning records for theatre equipment installations." },
    ],
  },
];
