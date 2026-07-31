/**
 * Mobile C-arm buying guide — C-Arms cluster.
 */

import type { ContentBlock, TocItem } from "../blog";

export const MOBILE_C_ARM_BUYING_GUIDE_TOC: TocItem[] = [
  { id: "start", title: "Start With Casemix, Not Catalogues" },
  { id: "class", title: "Choosing the System Class" },
  { id: "spec", title: "Writing a Specification That Cannot Be Gamed" },
  { id: "evaluation", title: "Evaluating Systems Fairly" },
  { id: "cost", title: "Cost of Ownership Beyond the Purchase" },
  { id: "refurbished", title: "New Versus Certified Refurbished" },
  { id: "delivery", title: "Delivery, Commissioning and Training" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MOBILE_C_ARM_BUYING_GUIDE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A mobile C-arm is a deceptively difficult purchase. It is not the most expensive imaging system a hospital buys, but it is the one used by the largest number of different clinical teams, in the most varied conditions, under the greatest time pressure. A poor choice does not fail dramatically — it simply makes every list slightly slower, every difficult projection slightly harder, and every service call slightly more disruptive because several theatres depend on it.",
      "The recurring error is procedural rather than technical. Specifications are written from a brochure that a single specialty found impressive, evaluation is decided by image quality on a thin volunteer, and the shared nature of the asset — the very thing that determines the requirement — is never quantified.",
      "This guide sets out how to buy a mobile C-arm properly: how to define casemix first, how to choose the correct system class, how to write a specification that cannot be satisfied by marketing language, how to evaluate systems on the projections that matter, how to compare total cost of ownership, when certified refurbished equipment is appropriate, and what commissioning and training must be secured before payment.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Casemix-led requirement definition, system class selection, specification writing, structured evaluation, total cost of ownership, refurbished options, and commissioning and training obligations",
    audience:
      "Procurement teams, theatre and clinical managers, biomedical engineering and finance",
    readingTime: "16 min read",
    technology: "C-Arms",
  },
  {
    type: "h2",
    id: "start",
    text: "Start With Casemix, Not Catalogues",
    number: 1,
    body: "The single most useful document in a C-arm purchase is a count of intended cases by specialty across every theatre the system will serve.",
  },
  {
    type: "table",
    headers: ["Question", "Why it drives the specification", "Where the answer comes from"],
    rows: [
      ["Which specialties will use the system, and how many cases each?", "Determines class, generator sizing and availability need", "Theatre activity data across all lists"],
      ["What is the heaviest patient and thickest projection expected?", "Sets generator output and penetration requirement", "Clinical review, bariatric and spinal caseload"],
      ["What is the longest continuous fluoroscopy case?", "Sets anode heat capacity requirement", "Vascular, spinal and complex trauma cases"],
      ["Is vascular or subtraction work intended?", "Determines need for DSA, roadmap and larger field", "Service development plan"],
      ["Is navigation or 3D confirmation planned?", "Determines cone-beam and navigation interface need", "Spinal and neurosurgical plans"],
      ["How many theatres, and how far apart?", "Determines mobility, weight and quantity", "Estates plan and measured routes"],
      ["What is the tolerable downtime?", "Determines service response level and spares strategy", "Clinical risk assessment"],
      ["What existing systems are in the fleet?", "Determines standardisation and training benefit", "Asset register"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Shared assets are systematically underspecified",
    clinicalInterpretation:
      "Because a C-arm's workload is spread across specialties, no single department sees the total. Requirements written from one department's activity therefore describe perhaps a third of the real duty cycle, and the system is bought for a workload it will never actually experience.",
    hospitalRecommendation:
      "Require the combined case count across all intended users as a mandatory input to the business case. Where the total is high, evaluate two appropriately specified systems against one premium system — clinical availability is usually better served by the pair.",
  },
  {
    type: "h2",
    id: "class",
    text: "Choosing the System Class",
    number: 2,
    body: "Class selection precedes brand comparison and eliminates most of the market immediately, which is a benefit rather than a limitation.",
  },
  {
    type: "table",
    headers: ["Casemix", "Appropriate class", "Why"],
    rows: [
      ["Routine orthopaedics and trauma, pain work, urology", "Well-specified image intensifier or entry flat panel", "Stable requirement; value lies in reliability, dose control and availability"],
      ["Extremity surgery only", "Mini C-arm", "Adequate field with much lower dose, cost and footprint"],
      ["Mixed general surgical service including some vascular access", "General-purpose flat panel", "Distortion-free geometry, dose efficiency, breadth of use"],
      ["Spinal instrumentation with navigation", "Flat panel with 3D cone beam and navigation interface", "Volumetric confirmation and instrument tracking"],
      ["Sustained endovascular intervention", "High-specification flat panel — with a fixed lab in the service plan", "Mobile systems bridge to, rather than replace, a fixed lab"],
      ["Cardiac device implantation in theatre", "Flat panel with strong low-dose performance", "Fine lead position discrimination over minutes"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Decide class in a clinical meeting, not in a tender document",
    text: "Class selection is a clinical judgement about what the hospital does. Once it is agreed and recorded with its rationale, the tender becomes a comparison of comparable systems — and later challenges about excluded products have a documented clinical answer.",
  },
  {
    type: "h2",
    id: "spec",
    text: "Writing a Specification That Cannot Be Gamed",
    number: 3,
    body: "A weak specification invites compliant answers to questions the hospital did not mean to ask. Specify measurable parameters and required demonstrations rather than adjectives.",
  },
  {
    type: "ul",
    items: [
      "State generator output in kW with the maximum kV and mA required, rather than asking for a 'powerful generator'.",
      "State anode heat capacity and the required continuous fluoroscopy duration at a defined dose rate.",
      "State detector type, active field dimensions and whether magnification must be true detector zoom rather than electronic.",
      "State the required free space between tube and detector, and the C depth, in millimetres against your largest expected patient.",
      "State orbital rotation and angulation ranges required, and the specific projections that must be demonstrated.",
      "State the pulsed fluoroscopy rates required, including the lowest rate available and the dose reduction it delivers.",
      "Require last-image hold, reference image display, and where applicable subtraction and roadmapping as named functions.",
      "Require dose-area product display, structured dose reporting and DICOM export to the hospital's PACS, tested at acceptance.",
      "State weight and footprint limits and require confirmation against your measured door and corridor dimensions.",
      "Require the manufacturer's declared support and parts availability horizon in writing.",
      "State the required service response time, uptime commitment and spares strategy, with the remedy for non-performance.",
      "Require named training deliverables with numbers of staff, sessions and post-installation follow-up.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Ask for the support horizon in writing, every time",
    text: "The manufacturer's declared end of support and parts availability determines how long the asset can be maintained, and therefore its real cost per year. It is rarely volunteered and almost never refused when asked as a formal specification response.",
  },
  {
    type: "h2",
    id: "evaluation",
    text: "Evaluating Systems Fairly",
    number: 4,
    body: "Evaluation should reproduce the hospital's hardest routine task, not the vendor's best demonstration.",
  },
  {
    type: "requirements",
    checklist: [
      "Define the evaluation scenarios in advance, including the hardest projection the hospital performs regularly",
      "Use phantoms of representative thickness rather than thin volunteers for image quality comparison",
      "Demonstrate a true lateral through thick anatomy if spinal work is intended",
      "Test the full movement range against a theatre table with the attachments actually used",
      "Measure dose rate and dose-area product for equivalent image quality across candidate systems",
      "Test the lowest pulse rate available and assess whether it remains clinically usable",
      "Move each system along the real route between theatres, through the real doors, with the real staff",
      "Have the actual user groups operate the system, not only the lead clinician",
      "Test PACS export and dose report transfer end to end, not as a claim",
      "Assess ergonomics: monitor position, control layout, brake and steering behaviour, cable management",
      "Score against the published criteria immediately after each evaluation, before the next system is seen",
      "Review the supplier's local service capability, engineer coverage and parts holding as scored criteria",
    ],
    specs: {
      title: "Evaluation criteria weighting example",
      rows: [
        { label: "Clinical performance on defined scenarios", value: "Highest weight" },
        { label: "Dose performance at equivalent image quality", value: "High weight" },
        { label: "Generator and thermal capability", value: "High weight" },
        { label: "Mobility and ergonomics in real theatres", value: "Significant weight" },
        { label: "Service capability and support horizon", value: "Significant weight" },
        { label: "Integration and dose reporting", value: "Moderate weight" },
        { label: "Training provision", value: "Moderate weight" },
        { label: "Total cost of ownership", value: "Scored separately against lifecycle model" },
      ],
    },
  },
  {
    type: "tableInsight",
    expertCommentary: "Thin volunteers make every system look excellent",
    clinicalInterpretation:
      "Image quality differences between C-arms appear mainly in thick anatomy, steep obliquity and low dose rate — exactly the conditions a demonstration on a slim volunteer avoids. Evaluations conducted that way reliably fail to distinguish the systems.",
    hospitalRecommendation:
      "Specify the phantom thickness and projections for evaluation in the tender documents so every supplier is assessed identically, and reject demonstrations that substitute easier conditions.",
  },
  {
    type: "h2",
    id: "cost",
    text: "Cost of Ownership Beyond the Purchase",
    number: 5,
    body: "The purchase price is a minority of lifetime cost for a heavily used C-arm, and the omitted items are predictable.",
  },
  {
    type: "table",
    headers: ["Cost element", "Notes", "Commonly omitted?"],
    rows: [
      ["Purchase or lease cost", "The visible figure", "No"],
      ["Service contract", "Level chosen should reflect shared-asset downtime cost", "Sometimes underspecified"],
      ["X-ray tube replacement", "Dominant single component cost; usage-driven", "Frequently"],
      ["Detector or image intensifier replacement", "High value; impact damage rarely covered as wear", "Frequently"],
      ["Battery replacement", "Planned consumable on supported systems", "Usually"],
      ["Protective equipment", "Aprons, thyroid shields, mobile shields for full teams", "Usually"],
      ["Shielding assessment and any remedial work", "Per theatre, per intended workload", "Often"],
      ["Acceptance testing and physics survey", "Required before clinical use", "Often"],
      ["Quality control programme", "Ongoing physics and engineering time", "Often"],
      ["Training — initial and refresher", "Multiple specialties and staff turnover", "Usually"],
      ["Networking and PACS integration", "Configuration and licensing", "Sometimes"],
      ["Downtime cost", "Concentrated because several theatres depend on one asset", "Almost always"],
      ["Decommissioning and disposal", "Data erasure, disposal evidence", "Almost always"],
    ],
  },
  {
    type: "p",
    text: "Two of these deserve emphasis. Tube replacement dominates component cost and scales with use, so a system bought for one theatre's workload and used across four will reach it sooner than the model predicted. Downtime cost is concentrated: because a single C-arm supports multiple theatres, one failure can affect several lists, which is why a higher service response level is often cheaper than the cancellations it prevents.",
  },
  {
    type: "h2",
    id: "refurbished",
    text: "New Versus Certified Refurbished",
    number: 6,
    body: "C-arms are among the modalities where certified refurbished equipment most often represents genuine value, because the clinical requirement in general theatre work is stable.",
  },
  {
    type: "table",
    headers: ["Consideration", "What to verify", "Decision impact"],
    rows: [
      ["Support horizon", "Declared end of support and parts availability after purchase", "Determines usable service life"],
      ["Tube status", "Usage history and remaining expected life, in writing", "The largest single cost risk"],
      ["Detector or intensifier condition", "Measured performance, not visual inspection", "Image quality and dose efficiency"],
      ["Refurbishment scope", "What was replaced, what was tested, to what standard", "Reliability expectation"],
      ["Warranty", "Term, coverage and parts included", "Risk transfer"],
      ["Installed base and engineer competence", "Local support depth for the platform", "Downtime duration"],
      ["Software version", "Current, supported and patchable", "Cybersecurity and integration"],
      ["Dose performance", "Verified at acceptance against current expectations", "Clinical and safety acceptability"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Refurbished suits stable requirements, not capability gaps",
    text: "If the reason for buying is that the department cannot perform work it needs to perform, refurbished equipment of the same generation does not solve the problem. If the reason is availability, reliability or fleet expansion for stable work, it frequently solves it at materially lower cost.",
  },
  {
    type: "h2",
    id: "delivery",
    text: "Delivery, Commissioning and Training",
    number: 7,
    body: "The purchase is not complete at delivery. Everything that determines clinical availability is agreed before the order and delivered after it.",
  },
  {
    type: "requirements",
    checklist: [
      "Confirm shielding assessment for every theatre where the system will be used, before first clinical use",
      "Confirm dedicated power provision and protective earthing in each theatre",
      "Verify the delivery and daily transport route physically, including doors, thresholds and lifts",
      "Complete acceptance testing and a physics dose survey with documented results",
      "Register the system on the radiation authorisation and update the radiation risk assessment",
      "Configure and test DICOM export, dose reporting and PACS integration end to end",
      "Configure dose modes and presets by procedure type before the first list, not during it",
      "Deliver training to every user group, with attendance recorded and competence signed off",
      "Schedule refresher training at a defined interval to cover staff turnover",
      "Enrol the system in the preventive maintenance and quality control programme from day one",
      "Agree spares holding, service response and escalation route in writing",
      "Record the asset, warranty dates, support horizon and contract terms in the asset register",
    ],
    specs: {
      title: "Pre-first-use gate",
      rows: [
        { label: "Shielding assessed", value: "Every intended theatre" },
        { label: "Acceptance testing", value: "Complete with documented results" },
        { label: "Dose survey", value: "Performed by medical physics" },
        { label: "Radiation authorisation", value: "Updated for the new asset" },
        { label: "PACS and dose reporting", value: "Tested end to end" },
        { label: "Presets configured", value: "By procedure type" },
        { label: "Training", value: "All user groups, competence recorded" },
        { label: "Service arrangement", value: "Active, with escalation route documented" },
      ],
    },
  },
  {
    type: "faq",
    items: [
      {
        q: "How many C-arms does a hospital need?",
        a: "It is determined by combined case volume across all intended specialties, theatre geography and tolerable downtime, not by theatre count alone. Where a single system's utilisation leaves no slack for maintenance or a failure, a second system is a clinical availability decision rather than a luxury.",
      },
      {
        q: "Is a flat-panel system always the better purchase?",
        a: "Not always. Flat panel offers distortion-free geometry and better dose efficiency, which matters for vascular, spinal and measurement-dependent work. For high-volume routine fracture and pain work, a well-specified image-intensifier system with strong service support can deliver more clinical value per unit of capital.",
      },
      {
        q: "What is the most common specification mistake?",
        a: "Underspecifying generator output and anode heat capacity because the requirement was written from average cases rather than from the heaviest patients and longest procedures the hospital actually performs.",
      },
      {
        q: "Should the service contract be bought with the system?",
        a: "The service arrangement should be priced and agreed as part of the same decision, because it materially affects total cost and because negotiating leverage is highest before the order. Whether it is purchased immediately depends on warranty terms, but it should never be left undefined.",
      },
      {
        q: "How should suppliers be compared on service rather than price?",
        a: "Score local engineer coverage for the specific platform, parts holding location, contracted response and repair times, escalation route, and the remedy if performance is not met. These are verifiable commitments, and they predict downtime far better than the headline contract price.",
      },
      {
        q: "Can a mobile C-arm substitute for a fixed angiography lab?",
        a: "For selected procedures, yes. For a sustained endovascular service, no — generator power, cooling, detector size and positional precision differ materially. Using a mobile system as a permanent substitute constrains the clinical service and shortens the asset's life through overuse.",
      },
      {
        q: "What documentation should be secured before payment?",
        a: "Acceptance test and dose survey results, declared support and parts availability horizon, warranty terms, service response commitments, training records, configuration and preset documentation, and confirmation of PACS and dose reporting integration.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Buying a mobile C-arm this year?",
    subheading:
      "AbuFarha Medical supports hospitals from casemix assessment and specification through evaluation, installation, commissioning, training and lifecycle service.",
    technology: "C-Arms",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Procurement review", name: "AbuFarha Projects & Tenders", credential: "Capital imaging procurement" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Fluoroscopy installation and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel:
      "IEC equipment standards, medical device lifecycle management guidance, manufacturer technical documentation and AbuFarha Medical procurement and service experience",
    disclaimer:
      "Procurement rules, radiation authorisation requirements and acceptance testing obligations vary by jurisdiction. Confirm requirements with your procurement authority, radiation protection adviser and regulator.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Equipment standards",
        items: [
          { label: "IEC 60601-2-43 — interventional X-ray equipment requirements" },
          { label: "IEC 60601-1-3 — radiation protection requirements for diagnostic X-ray equipment" },
        ],
      },
      {
        title: "Procurement and lifecycle",
        items: [
          { label: "WHO medical device technical series — procurement and lifecycle management" },
          { label: "Healthcare asset management guidance on total cost of ownership" },
        ],
      },
      {
        title: "Acceptance and quality control",
        items: [
          { label: "National acceptance testing and quality control protocols for fluoroscopy systems" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as guidance is revised.",
  },
  {
    type: "takeaways",
    items: [
      "Count intended cases across every specialty that will share the system before writing any specification.",
      "Decide system class clinically first; it eliminates most of the market and makes the tender a fair comparison.",
      "Specify generator output, anode heat capacity, free space and pulse rates as numbers, not adjectives.",
      "Require the declared support and parts availability horizon in writing.",
      "Evaluate on representative phantom thickness and the hardest routine projection, never on a slim volunteer.",
      "Tube replacement dominates component cost and scales with use; shared systems reach it sooner than modelled.",
      "Downtime cost is concentrated across multiple theatres, which usually justifies a higher service response level.",
      "Secure shielding assessment, acceptance testing, dose survey, integration and training before first clinical use.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "A C-arm purchase succeeds or fails in the two weeks before the specification is issued.",
  },
  {
    type: "p",
    text: "Hospitals that count their combined casemix, agree a class clinically, specify measurable parameters, evaluate on their own hardest projection and secure commissioning and training in writing end up with a system that is available when a trauma list needs it and capable when a spinal case requires it. Hospitals that begin with a brochure end up with a system that satisfies one specialty and constrains the rest — for the whole of its service life.",
  },
];
