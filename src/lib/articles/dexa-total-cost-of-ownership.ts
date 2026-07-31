/**
 * Bone Densitometers (DEXA) cluster — "DEXA Total Cost of Ownership"
 */

import type { ContentBlock, TocItem } from "../blog";

export const DEXA_TCO_TOC: TocItem[] = [
  { id: "beyond-capital", title: "Why Capital Price Is a Poor Guide to Cost" },
  { id: "cost-elements", title: "The Full Cost Structure" },
  { id: "utilisation", title: "Utilisation and Revenue Considerations" },
  { id: "lifecycle", title: "Lifecycle Stages and Their Cost Profile" },
  { id: "hidden-costs", title: "Costs Frequently Left Out of the Budget" },
  { id: "modelling", title: "Building a Total Cost of Ownership Model" },
  { id: "negotiation", title: "What to Negotiate at Procurement" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DEXA_TCO_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A bone densitometer's purchase price is a small fraction of what it costs a hospital to run the service over its working life, yet budgeting frequently stops at the capital line. AbuFarha Medical supplies, installs and maintains densitometry systems, and works with procurement and finance teams to build a realistic total cost of ownership picture that includes the maintenance, staffing, consumable and lifecycle elements that determine a service's real economics.",
      "Densitometry is a comparatively low-capital-cost modality, which makes it easy to underinvest in the ongoing elements — service contracts, quality control time, training and eventual replacement planning — that actually determine whether the service functions reliably for its intended lifespan.",
      "This guide sets out the full cost structure of a densitometry service across its lifecycle, the elements most often omitted from initial budgets, and what to negotiate at procurement to control long-term cost.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "The full cost structure of a densitometry service beyond capital price, utilisation and revenue considerations, lifecycle cost stages, commonly omitted budget items, and a total cost of ownership modelling approach",
    audience:
      "Procurement and finance teams, radiology service managers, biomedical engineering leadership, hospital capital planning committees",
    readingTime: "12 min read",
    technology: "Bone Densitometers (DEXA)",
  },
  {
    type: "h2",
    id: "beyond-capital",
    text: "Why Capital Price Is a Poor Guide to Cost",
    number: 1,
  },
  {
    type: "p",
    text: "Because densitometry systems have a relatively low capital cost compared with CT, MRI or ultrasound platforms, procurement processes sometimes apply less financial scrutiny to them than to higher-value equipment. This is a mistake: over a working life of many years, service and support costs, staff time and eventual replacement expenditure accumulate to a total that can exceed the original purchase price several times over. A total cost of ownership view, built at the point of procurement, gives a realistic basis for comparing options and for planning the service's ongoing budget.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Low capital cost, real ongoing cost",
    text: "A densitometer's modest purchase price can make its ongoing costs proportionally larger relative to capital than for more expensive imaging modalities, which is exactly why total cost of ownership analysis matters here rather than less.",
  },
  {
    type: "h2",
    id: "cost-elements",
    text: "The Full Cost Structure",
    number: 2,
  },
  {
    type: "table",
    headers: ["Cost element", "Timing", "Nature of cost"],
    rows: [
      ["Capital purchase price", "One-off, at acquisition", "Fixed, known at procurement"],
      ["Installation and commissioning", "One-off, at acquisition", "Should be itemised in the procurement contract"],
      ["Preventive maintenance and service contract", "Annual, recurring", "Predictable if contracted; variable if ad hoc"],
      ["Software support and updates", "Periodic, sometimes chargeable", "Varies by vendor licensing model"],
      ["Consumables (phantoms, positioning aids)", "Low, ongoing", "Small but continuous"],
      ["Staff time for quality control and training", "Daily and periodic, ongoing", "Real cost, rarely separately budgeted"],
      ["X-ray tube and component replacement", "Occasional, end-of-life for the component", "Should be estimated from expected component life"],
      ["End-of-life replacement and cross-calibration", "One-off, at replacement", "Often omitted from initial budget entirely"],
    ],
    caption: "Full cost structure of a densitometry service across its lifecycle.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Staff time for daily quality control and periodic precision reassessment is a genuine cost that rarely appears explicitly in a departmental budget, even though it is a recurring operational requirement of running the service correctly.",
    clinicalInterpretation:
      "Underfunding quality control time does not reduce the true cost of the service; it shifts the cost into the risk of undetected calibration drift and unusable follow-up scans.",
    hospitalRecommendation:
      "Include quality control and precision assessment staff time explicitly in the departmental staffing model and budget, rather than assuming it is absorbed within existing capacity.",
  },
  {
    type: "h2",
    id: "utilisation",
    text: "Utilisation and Revenue Considerations",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Densitometry has a short per-patient scan time relative to other imaging modalities, so a single system can typically support a substantial referral base.",
      "Utilisation projections should be built from realistic referral pathway volumes across the specialties expected to use the service, not from theoretical scanner throughput alone.",
      "Under-referral is a common cause of poor return on investment for a densitometer, independent of the equipment's own performance.",
      "Where a service model includes billing or reimbursement for the examination, this should be modelled against realistic utilisation, not maximum theoretical capacity.",
      "A system installed without an established referral pathway carries the same fixed maintenance cost as a fully utilised one, so referral pathway development should be part of the business case.",
    ],
  },
  {
    type: "h2",
    id: "lifecycle",
    text: "Lifecycle Stages and Their Cost Profile",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Acquisition and commissioning: capital cost, installation, acceptance testing, baseline quality control and initial training.",
      "Steady-state operation: predictable annual maintenance, consumables and staff time, plus occasional component replacement.",
      "Mid-life: potential software or hardware upgrade decisions, and reassessment of whether the service scope has grown beyond the original specification.",
      "End of life: replacement planning, including the cross-calibration exercise needed to preserve comparability for patients under active monitoring.",
      "Each stage has a distinct cost profile, and a total cost of ownership model should reflect all four rather than only the acquisition stage.",
    ],
  },
  {
    type: "h2",
    id: "hidden-costs",
    text: "Costs Frequently Left Out of the Budget",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Staff time for daily phantom quality control and periodic operator precision assessment.",
      "Training time and cost for new operators joining after the initial installation.",
      "Software update costs that may not be included in a base maintenance contract.",
      "End-of-life cross-calibration cost when a system is eventually replaced, needed to preserve follow-up comparability for existing patients.",
      "Room environmental control costs, where the installation site did not already meet the system's temperature stability requirements.",
      "The opportunity cost of downtime during unplanned repairs, if no service level agreement specifies response times.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Cross-calibration is not a discretionary cost",
    text: "Omitting cross-calibration cost from replacement planning leaves every patient under active monitoring without a valid comparison point on the new system. This should be budgeted as part of the replacement project, not treated as an optional extra.",
  },
  {
    type: "h2",
    id: "modelling",
    text: "Building a Total Cost of Ownership Model",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Start from the expected service life of the system and build cost projections for each lifecycle stage across that period.",
      "Use vendor-quoted figures for maintenance and component replacement rather than estimating from unrelated equipment types.",
      "Include staff time at a realistic hourly cost for quality control, precision assessment and training activities.",
      "Model utilisation realistically against expected referral volume, not theoretical maximum throughput.",
      "Include an explicit end-of-life replacement and cross-calibration line, even though it falls outside the immediate budget cycle.",
      "Compare competing procurement options on this full lifecycle basis rather than on capital price or annual maintenance cost alone.",
    ],
  },
  {
    type: "h2",
    id: "negotiation",
    text: "What to Negotiate at Procurement",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "A multi-year maintenance contract with defined scope, response times and pricing agreed at the point of purchase.",
      "Clarity on which software updates are included in the base contract and which are separately chargeable.",
      "Itemised installation, commissioning, acceptance testing and initial training scope, so nothing is assumed to be included when it is not.",
      "A stated expected component life for the X-ray tube and detector, to inform mid-life budget planning.",
      "A commitment to support cross-calibration at eventual replacement, even if the replacement itself is years away.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical provides transparent, itemised costing for densitometry installation, maintenance and support, and works with hospital finance and procurement teams to build realistic total cost of ownership models covering the system's full service life.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Why does total cost of ownership matter more for a low-cost modality like densitometry?",
        a: "Because ongoing costs — maintenance, staff time and eventual replacement — represent a proportionally larger share of the total spend relative to the modest capital price than for higher-cost imaging modalities.",
      },
      {
        q: "What is the most commonly underfunded ongoing cost?",
        a: "Staff time for daily quality control and periodic precision assessment, which is a real recurring cost rarely reflected explicitly in departmental budgets.",
      },
      {
        q: "Should utilisation be modelled from maximum scanner throughput?",
        a: "No. Realistic referral pathway volume from the specialties expected to use the service is a far better basis than theoretical maximum capacity.",
      },
      {
        q: "What should be budgeted for at end of life that is often missed?",
        a: "Cross-calibration cost, which is needed to preserve follow-up comparability for patients under active monitoring when the system is replaced.",
      },
      {
        q: "How should software update costs be handled at procurement?",
        a: "Clarify at the outset which updates are included in the base maintenance contract and which are separately chargeable, since this materially affects the multi-year cost picture.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Capital price is a small part of a densitometer's real lifetime cost and should not be the primary procurement comparison criterion.",
      "The full cost structure includes maintenance, consumables, staff time, component replacement and end-of-life cross-calibration.",
      "Staff time for quality control and precision assessment is a genuine recurring cost that is frequently left out of budgets.",
      "Utilisation should be modelled from realistic referral volume, not theoretical throughput.",
      "Cross-calibration cost at replacement should be planned for from the outset, not treated as a later discretionary expense.",
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
    text: "A realistic total cost of ownership model turns a densitometer's low capital price into an informed long-term budget decision rather than an underfunded ongoing commitment. Hospitals that plan maintenance, staff time and eventual replacement costs from the outset run services that remain financially and clinically sustainable for their full working life.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Procurement and quality guidance",
        items: [
          { label: "American Association of Physicists in Medicine — densitometry acceptance testing and service life guidance", url: "https://www.aapm.org/" },
          { label: "International Atomic Energy Agency — equipment lifecycle and quality assurance guidance", url: "https://www.iaea.org/" },
        ],
      },
      {
        title: "Clinical practice",
        items: [
          { label: "International Osteoporosis Foundation — densitometry service resources", url: "https://www.osteoporosis.foundation/" },
        ],
      },
    ],
    note: "Cost figures, maintenance scope and component life must be confirmed with the specific vendor and contract terms applicable to the system offered; no prices are stated here.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Bone health service planning" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Densitometry lifecycle service and maintenance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Procurement and lifecycle cost practice synthesis",
    disclaimer:
      "Educational guidance on densitometry total cost of ownership. It does not replace vendor quotations, contract terms or local procurement regulations.",
  },
];
