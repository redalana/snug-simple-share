import type { ContentBlock, TocItem } from "../blog";
import solCt from "@/assets/sol-ct.jpg";

export const REFURBISHED_CT_SCANNERS_GUIDE_TOC: TocItem[] = [
  { id: "overview", title: "What \"Refurbished\" Means for a CT Scanner" },
  { id: "refurbishment-process", title: "Inside a Professional CT Refurbishment Programme" },
  { id: "tube-hours", title: "Tube Hours and Remaining Life Assessment" },
  { id: "inspection-checklist", title: "The Buyer's Inspection Checklist" },
  { id: "documentation-regulatory", title: "Documentation and Regulatory Considerations" },
  { id: "software-licences", title: "Software Licences and Reconstruction Packages" },
  { id: "warranty-support", title: "Warranty Structures and Support Expectations" },
  { id: "cost-comparison", title: "Total Cost: Refurbished vs New" },
  { id: "siting-installation", title: "Siting and Reinstallation Considerations" },
  { id: "vendor-selection", title: "Choosing a Refurbishment Partner" },
  { id: "when-new-is-better", title: "When New Is the Better Decision" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const REFURBISHED_CT_SCANNERS_GUIDE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solCt,
    imageAlt: "Refurbished CT scanner gantry being recommissioned in a hospital imaging suite",
    paragraphs: [
      "A properly refurbished CT scanner is a de-installed system that has been stripped down, bench-tested component by component, had wear items renewed or replaced, reassembled, recalibrated and validated against the same acceptance criteria applied to a new installation — sold with a documented service history and a fresh warranty. A poorly refurbished CT scanner is a used gantry of unknown tube history, sold on price with no verifiable test data behind it. Both are marketed with the same word, and the difference between them is decided entirely by the paperwork the seller is willing to produce before the sale, not by how clean the cabinet looks.",
      "For many hospitals across Africa, the Middle East and other price-sensitive markets, a well-graded refurbished CT scanner is a legitimate and often the only realistic route to modern imaging capability within budget and delivery timelines that new-system pricing and lead times cannot match. What separates a sound purchase from an expensive mistake is the buyer's ability to verify tube condition, demand real inspection data, confirm software licensing, and structure a warranty and support arrangement that reflects the fact that a CT tube is a consumable with a finite, purchase-relevant remaining life.",
      "This guide is written for hospital administrators, procurement committees and biomedical engineering teams evaluating a refurbished CT purchase. It covers what professional refurbishment involves, how to assess tube hours and remaining life, the inspection checklist a buyer should insist on, documentation and regulatory considerations, what a defensible warranty and support arrangement looks like, and the circumstances under which a new system is genuinely the better financial decision. AbuFarha Medical supplies, installs, commissions, trains on and services refurbished and new imaging equipment; it does not construct hospital buildings, and any facility works referenced here sit within a turnkey project delivered alongside licensed contractors.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "CT refurbishment processes, tube hours and remaining life assessment, inspection checklists, documentation and regulatory considerations, warranty structures, total cost of ownership and the new-versus-refurbished decision",
    audience:
      "Hospital administrators, procurement managers, radiology directors and biomedical engineers evaluating refurbished CT purchases",
    readingTime: "16 min read",
    technology: "Refurbished Computed Tomography (CT) systems",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "What \"Refurbished\" Means for a CT Scanner",
    body: "Refurbished is a spectrum of engineering effort, not a fixed quality standard, and for CT specifically the tube's condition is the one variable that most determines whether the label reflects genuine value.",
  },
  {
    type: "ul",
    items: [
      "The word \"refurbished\" has no universal regulatory definition, so two CT scanners advertised identically can differ enormously — one may have had its tube, detector and generator fully bench-tested with worn items replaced, the other may only have been cleaned and repainted with the original tube left untouched regardless of remaining life.",
      "Unlike an MRI magnet, a CT gantry has no single catastrophic-risk component comparable to a quench, but it does have one component with a hard, measurable, purchase-relevant expiry: the X-ray tube, whose remaining heat-unit capacity should be treated as a line item in the purchase price, not an afterthought.",
      "A system's true remaining useful life is set by three independent factors running in parallel — tube remaining life, detector and generator condition, and manufacturer parts-support end-of-life — and the shortest of the three sets the realistic ownership horizon, regardless of the scanner's headline age.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "\"Refurbished\" describes a process, not a fixed quality level — insist on a documented, component-level scope of work.",
      "Tube hours and remaining heat-unit capacity are the single highest-value data point in a refurbished CT purchase; ask for the log, not an estimate.",
      "A verified detector and generator test report is worth more at negotiation than a lower headline price.",
      "Software licences and reconstruction packages do not automatically transfer with the hardware — confirm entitlement in writing before committing funds.",
      "Manufacturer parts-support end-of-life, not scanner age, is usually the real ceiling on a system's practical service life.",
      "A refurbished CT scanner typically costs a fraction of new list price but still requires equivalent siting, shielding and power investment.",
    ],
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Medical reviewer", name: "AbuFarha Clinical Advisory Panel", credential: "Consultant radiologists advising on diagnostic imaging pathways" },
      { role: "Biomedical engineer", name: "AbuFarha Biomedical Engineering Team", credential: "Field service engineers for MRI, CT, cath lab and PET/CT installations" },
      { role: "Technical editor", name: "AbuFarha Knowledge Center Editorial Team", credential: "Medical technology editors, Amman, Jordan" },
      { role: "Clinical applications specialist", name: "AbuFarha Applications & Training Team", credential: "CT applications training and protocol optimisation" },
    ],
    lastReviewed: "July 2026",
    nextReview: "July 2027",
    version: "1.0",
    evidenceLevel: "Level A — international standards, peer-reviewed literature and manufacturer documentation",
    disclaimer:
      "This article is written for hospital decision-makers, clinicians and biomedical engineers as educational reference material. It is not a substitute for professional medical advice, diagnosis or treatment, nor for manufacturer instructions for use, national regulations or site-specific engineering assessment.",
  },
  {
    type: "h2",
    id: "refurbishment-process",
    number: 2,
    text: "Inside a Professional CT Refurbishment Programme",
    image: solCt,
    imagePosition: "right",
    imageAlt: "Engineer bench-testing a CT generator component during refurbishment",
    body: "A defensible refurbishment programme follows a documented sequence from de-installation through to acceptance testing at the new site, and every stage should produce a paper trail the buyer can request.",
  },
  { type: "h3", text: "De-installation and Transport" },
  {
    type: "p",
    text: "Professional de-installation involves careful disassembly of the gantry, table, generator cabinet and console by technicians trained on the specific platform, with the tube and detector protected against shock and vibration during transit. A gantry that has been dropped, tilted beyond rated limits, or exposed to condensation can suffer bearing or detector damage that is not visible externally but shows up as calibration failure or noise at the new site.",
  },
  { type: "h3", text: "Bench Testing and Component Renewal" },
  {
    type: "p",
    text: "At the refurbishment facility, the generator, detector array, slip ring and cooling systems are tested against original manufacturer specification, and the tube's accumulated heat units and rotation cycles are checked against its rated capacity. A credible refurbisher will replace the tube outright if its remaining life does not meet an agreed threshold, or price the system accordingly if the existing tube is retained with disclosed remaining life. Wear items such as slip-ring brushes, filters and cooling components are commonly renewed regardless of test outcome because their replacement cost is modest relative to the risk of early failure after resale.",
  },
  { type: "h3", text: "Cosmetic and Mechanical Refresh" },
  {
    type: "p",
    text: "Gantry covers, table surfaces and cabling are refinished or replaced to remove visible wear. This stage is cosmetically important for patient experience but clinically the least significant — a pristine exterior should never substitute for verified tube, detector and generator test data.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Ask for the work order, not the brochure",
    text: "A credible refurbisher can produce a component-by-component work order showing what was tested, what passed, what was replaced, the tube's accumulated heat units at time of sale, and why. If a supplier cannot produce this document, treat the word \"refurbished\" as marketing language rather than an engineering claim.",
  },
  { type: "h3", text: "Reinstallation and Acceptance Testing" },
  {
    type: "p",
    text: "At the destination hospital, the system is reassembled, calibrated and put through the same acceptance test protocol used for a new installation — CT number accuracy, image uniformity, spatial resolution, low-contrast detectability, dose output verification and safety interlock testing. This acceptance testing, not the refurbishment work itself, is the buyer's real proof of performance and should be witnessed by the hospital's own biomedical engineering staff wherever possible.",
  },
  {
    type: "diagram",
    id: "scanning-process",
    title: "The refurbishment pathway from de-installation to clinical acceptance",
    purpose: "Shows every stage a professionally refurbished CT system passes through, so buyers can map a supplier's quoted scope of work against an accepted end-to-end standard.",
    alt: "Flow diagram showing six sequential stages: controlled de-installation at the source site, monitored transport, bench testing and component renewal including tube heat-unit assessment at the refurbishment facility, cosmetic and mechanical refresh, reinstallation and calibration at the destination hospital, and final acceptance testing against manufacturer specification.",
    caption: "Figure 1 — The CT refurbishment pathway. Skipping tube-life verification or acceptance testing is the most common source of early failures in refurbished systems.",
  },
  {
    type: "callout",
    variant: "important",
    title: "Refurbishment is a process claim, not a condition claim",
    text: "A CT system is only as \"refurbished\" as the work actually performed on it. Two systems of identical age and model can have completely different remaining service lives depending on which components were bench-tested, repaired or renewed, and whether the tube was replaced or retained.",
  },
  {
    type: "h2",
    id: "tube-hours",
    number: 3,
    text: "Tube Hours and Remaining Life Assessment",
    body: "The X-ray tube is the one component in a refurbished CT purchase that a buyer can and must verify quantitatively, because its remaining life is a hard number, not a subjective condition assessment.",
  },
  {
    type: "p",
    text: "Every CT tube accumulates heat units and rotation-start cycles over its working life, and this data is logged by the system itself. A refurbisher or seller should be able to export this log and state, in writing, the accumulated heat units against the tube's rated capacity, along with whether the tube is original to the gantry or has already been replaced once during the system's service life. A buyer purchasing a system with a tube already at a high percentage of its rated life is, in effect, purchasing a near-term tube replacement cost that should be reflected in the negotiated price or addressed by requiring tube replacement as a condition of sale.",
  },
  {
    type: "table",
    caption: "Tube condition scenarios and their purchase implications",
    headers: ["Tube condition disclosed", "Purchase implication", "Recommended buyer action"],
    rows: [
      [
        "New or low-hour replacement tube fitted during refurbishment",
        "Full remaining tube life available, lowest near-term replacement risk",
        "Confirm tube installation date and accumulated heat units at time of sale in writing",
      ],
      [
        "Original tube retained, moderate accumulated heat units",
        "Meaningful remaining life but should be priced into negotiation and monitored from day one",
        "Request the full heat-unit log and set an internal replacement-planning threshold immediately after installation",
      ],
      [
        "Original tube retained, high accumulated heat units, undisclosed until requested",
        "High near-term replacement risk, often understated in the asking price",
        "Require tube replacement as a condition of sale or renegotiate price to reflect the near-term capital exposure",
      ],
      [
        "No heat-unit data available from seller",
        "Unverifiable risk — treat as worst case for budgeting",
        "Decline to proceed without data, or commission independent verification before final payment",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Tube condition is the CT equivalent of magnet ramp history in an MRI purchase — the one variable a buyer cannot infer from a cosmetic inspection and must instead obtain as hard data from the seller.",
    clinicalInterpretation: "A refurbished CT scanner can pass every acceptance test on day one regardless of tube condition, since a worn but still-functional tube produces normal images right up until it fails.",
    hospitalRecommendation: "Make disclosure of the full tube heat-unit log a non-negotiable condition of any refurbished CT quotation, and have your biomedical engineering team independently project remaining life before agreeing a price.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "What to request about tube history",
    items: [
      "Total accumulated heat units and rotation-start cycles against rated tube capacity",
      "Tube installation date and whether it is the original tube or a prior replacement",
      "Any documented tube-related fault history on the system",
      "The refurbisher's stated remaining-life estimate and the assumptions behind it",
      "Confirmation of tube model compatibility and continued market availability for future replacement",
    ],
  },
  {
    type: "h2",
    id: "inspection-checklist",
    number: 4,
    text: "The Buyer's Inspection Checklist",
    body: "Beyond the tube, a structured inspection checklist covering the detector, generator, gantry mechanics and console protects the buyer from relying on a seller's summary grade alone.",
  },
  {
    type: "requirements",
    checklist: [
      "Independent or witnessed detector calibration and uniformity test results",
      "Generator output verification against rated kV and mA specification",
      "Gantry rotation speed and vibration/noise assessment at rated rotation speed",
      "Slip-ring or contactless data transfer system inspection report",
      "Table mechanism load test and positioning accuracy check",
      "Full acceptance test report using the same protocol applied to new installations",
      "Cosmetic condition assessment treated as secondary to, not a substitute for, the technical test results",
    ],
    specs: {
      title: "Minimum documentation a buyer should receive before final payment",
      rows: [
        { label: "Component work order", value: "Itemised list of what was tested, replaced and why" },
        { label: "Tube heat-unit log", value: "Accumulated heat units and rotation cycles against rated life" },
        { label: "Acceptance test report", value: "CT number accuracy, uniformity, resolution, dose output" },
        { label: "Software licence confirmation", value: "Written entitlement for all reconstruction and clinical packages included" },
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Inspection mistakes buyers repeat",
    items: [
      "Accepting a supplier's grade label without an independent or witnessed inspection report",
      "Treating cosmetic condition of the gantry cover as a proxy for tube or generator condition",
      "Skipping a request for the tube heat-unit log because the seller describes the tube as 'good condition'",
      "Comparing price across sellers without comparing the underlying scope of work and disclosed component data",
    ],
  },
  {
    type: "h2",
    id: "documentation-regulatory",
    number: 5,
    text: "Documentation and Regulatory Considerations",
    body: "A refurbished CT scanner must satisfy the same import, radiation safety licensing and facility registration requirements as a new system, and missing documentation can delay clinical use by months even after the equipment itself has arrived.",
  },
  {
    type: "p",
    text: "Import and customs clearance for medical X-ray equipment typically requires manufacturer certification of conformity, and many national radiation protection authorities require a declaration of the equipment's technical specification and prior use history before issuing an operating licence. Buyers should confirm early in the procurement process which specific import and radiation-licensing documents the national regulator requires for a used or refurbished X-ray source, since requirements for previously used radiation-emitting equipment sometimes differ from those for new equipment.",
  },
  {
    type: "ul",
    items: [
      "Confirm the refurbisher can supply a certificate of conformity or equivalent technical declaration recognised by the destination country's regulator.",
      "Confirm the country of origin's export requirements for used medical radiation equipment, which can add lead time to shipment.",
      "Radiation safety licensing at the destination site (facility registration, shielding survey, radiation safety officer sign-off) applies identically whether the system is new or refurbished and should be planned on the same timeline.",
      "Retain all refurbishment and acceptance testing documentation as part of the facility's permanent equipment record, since regulators and accreditation bodies may request it during future inspections.",
    ],
  },
  {
    type: "callout",
    variant: "important",
    title: "Documentation gaps are a common cause of delayed go-live",
    text: "Hospitals sometimes complete a refurbished CT purchase and installation only to find clinical use is delayed by weeks while missing conformity or import documentation is chased retroactively. Confirming the full documentation package before shipment, not after arrival, avoids this delay.",
  },
  {
    type: "h2",
    id: "software-licences",
    number: 6,
    text: "Software Licences and Reconstruction Packages",
    body: "Reconstruction algorithms, dose-reduction packages, cardiac or perfusion applications and workstation licences are frequently sold as separate, non-transferable entitlements even when bundled with the hardware sale.",
  },
  {
    type: "p",
    text: "Many manufacturers licence advanced reconstruction software — iterative or model-based reconstruction, low-dose packages, cardiac gating, perfusion analysis — separately from the base hardware, and licence transfer to a new owner is not automatic. A refurbished system advertised with a specific feature set should have that entitlement confirmed in writing by the manufacturer or an authorised reseller before purchase, since re-licensing after the fact can be costly or, in some cases, unavailable for an older platform generation.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Confirm software entitlement before, not after, payment",
    items: [
      "Request written confirmation from the manufacturer or authorised distributor of which software packages transfer with the specific unit",
      "Clarify whether any packages require a separate re-licensing fee at the new site",
      "Confirm workstation and PACS interface licensing separately from the scanner console software",
      "Verify continued availability of software updates and cybersecurity patches for the platform's software version",
    ],
  },
  {
    type: "h2",
    id: "warranty-support",
    number: 7,
    text: "Warranty Structures and Support Expectations",
    body: "A refurbished CT warranty should explicitly address the tube, since it is the component most likely to require attention early in the ownership period, rather than treating it identically to lower-risk components.",
  },
  {
    type: "table",
    caption: "Typical refurbished CT warranty structures",
    headers: ["Warranty element", "What a well-structured warranty should specify", "Common gap to check for"],
    rows: [
      [
        "Tube coverage",
        "Explicit tube warranty period or pro-rated replacement formula tied to accumulated heat units",
        "Tube excluded entirely or covered only for a very short initial period",
      ],
      [
        "Parts and labour",
        "Defined coverage period comparable to a new-system warranty for major subsystems",
        "Ambiguous language covering 'defects' without naming specific components",
      ],
      [
        "Response time",
        "Named response and resolution windows consistent with the hospital's clinical criticality",
        "No defined response time, leaving resolution timing entirely at the supplier's discretion",
      ],
      [
        "Software support",
        "Confirmed access to software updates and technical support for the installed version",
        "Support tied to a software version that is already near end-of-life",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "A refurbished CT warranty that is silent on tube coverage is not neutral — it defaults to the buyer bearing full tube replacement risk from day one, which for a heavily used tube can materially change the real cost of the purchase.",
    clinicalInterpretation: "Buyers frequently compare warranty length in months without checking what the warranty actually excludes; a twelve-month warranty that excludes the tube offers materially less protection than an equally long warranty that includes it.",
    hospitalRecommendation: "Request the warranty document itself, not a summary, and have biomedical engineering confirm tube coverage terms explicitly before signing.",
  },
  {
    type: "h2",
    id: "cost-comparison",
    number: 8,
    text: "Total Cost: Refurbished vs New",
    body: "The purchase price gap between refurbished and new is real and often substantial, but siting, shielding, power and ongoing service costs are broadly comparable between the two, and tube economics can narrow the gap over the ownership period.",
  },
  {
    type: "ul",
    items: [
      "Refurbished CT purchase price is typically a fraction of new-system list price, but this gap should be evaluated against remaining tube life, software entitlement completeness and the warranty structure rather than headline price alone.",
      "Siting requirements — room shielding, power supply, HVAC and structural considerations — apply almost identically to a refurbished and a new CT installation of comparable specification, so this cost should not be assumed away when comparing options.",
      "Ongoing service contract cost is generally comparable across new and refurbished systems on the same platform, though parts availability windows may be shorter for an older refurbished model, which can affect long-term service cost and risk.",
      "A refurbished system nearing the end of manufacturer parts support may offer attractive upfront savings but a shorter realistic ownership horizon, changing the effective cost per year of clinical service.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Model cost per year of remaining useful life, not just purchase price",
    text: "Divide the total expected cost of ownership — purchase price, siting, warranty gaps, projected tube replacement and service contract cost — by the realistic remaining years of clinical service the system can deliver. This comparison is a far more reliable procurement decision tool than comparing purchase price alone.",
  },
  {
    type: "h2",
    id: "siting-installation",
    number: 9,
    text: "Siting and Reinstallation Considerations",
    body: "A refurbished CT scanner requires the same room shielding, power supply and structural planning as a new system, and site readiness — not the equipment itself — is frequently the actual critical path to go-live.",
  },
  {
    type: "p",
    text: "Radiation shielding design depends on workload, room geometry and adjacent occupancy, and must be calculated and verified for the specific installation regardless of whether the scanner is new or refurbished. Power supply and HVAC requirements are set by the scanner model's specification, not by its refurbishment status. Hospitals should commission a site survey early in the procurement timeline so that any structural, electrical or shielding gap is identified and addressed well before the scanner itself is due to arrive.",
  },
  {
    type: "callout",
    variant: "note",
    title: "Site readiness is usually the longer lead-time item",
    text: "In many refurbished CT projects, the equipment can be sourced and shipped faster than a hospital can complete shielding construction, electrical upgrades and regulatory site approval. Sequencing the site survey and construction work in parallel with equipment sourcing, rather than after it, is the single most effective way to shorten overall project timelines.",
  },
  {
    type: "h2",
    id: "vendor-selection",
    number: 10,
    text: "Choosing a Refurbishment Partner",
    body: "The refurbishment partner matters as much as the specific unit, since the same gantry model can be sold by two different suppliers with very different scopes of work, warranty terms and post-sale support capability.",
  },
  {
    type: "ul",
    items: [
      "Ask for references from hospitals that have purchased the same scanner model and grade from the supplier previously, and verify the outcome directly where possible.",
      "Confirm the supplier's own in-house or contracted service capability at the destination country — a refurbisher with no local support presence transfers all future service risk back onto the hospital.",
      "Verify the supplier's ability to source future consumables and spare parts, particularly a replacement tube, for the specific platform generation being purchased.",
      "Prefer suppliers who proactively disclose tube hours, test data and software entitlement without being asked, as a signal of overall transparency.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Regional support presence changes real-world outcomes",
    text: "Two refurbished systems can be mechanically identical, but the hospital that buys from a supplier with local biomedical engineering presence and stocked spares typically experiences materially shorter downtime over the ownership period than one relying on a supplier without regional support infrastructure.",
  },
  {
    type: "h2",
    id: "when-new-is-better",
    number: 11,
    text: "When New Is the Better Decision",
    body: "Refurbished is a sound strategy in many circumstances, but there are situations where a new system is the more defensible financial and clinical decision despite the higher purchase price.",
  },
  {
    type: "table",
    caption: "Scenarios favouring new over refurbished",
    headers: ["Scenario", "Why new is usually preferable"],
    rows: [
      [
        "High-volume trauma or emergency CT workload",
        "Tube wear accelerates with volume, shortening the effective remaining life of a used tube disproportionately and increasing near-term replacement risk",
        
      ],
      [
        "Need for the latest reconstruction, dose-reduction or advanced clinical applications",
        "Newest software packages and detector generations are frequently unavailable or only partially available on older refurbished platforms",
      ],
      [
        "Long-term single-site ownership horizon of 10+ years planned",
        "A new system maximises the years remaining before manufacturer parts-support end-of-life, spreading the higher purchase cost over a longer service life",
      ],
      [
        "Limited in-house biomedical engineering capacity to manage tube-life monitoring",
        "New-system warranties typically cover tube replacement for a defined initial period, reducing the monitoring burden during early ownership",
      ],
      [
        "Regulatory or accreditation requirement favouring current-generation equipment",
        "Some accreditation bodies or specialised programmes specify minimum technology generations that older refurbished platforms may not meet",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The decision is rarely binary in absolute terms — it is a function of workload intensity, planned ownership horizon and in-house engineering capability, all of which should be modelled explicitly rather than decided on price alone.",
    clinicalInterpretation: "A refurbished system performing well in a moderate-volume outpatient setting could perform poorly, from a downtime perspective, if redeployed into a high-volume trauma workload it was never sized for.",
    hospitalRecommendation: "Match the refurbishment grade and tube condition to the intended clinical workload explicitly during procurement, rather than assuming any refurbished unit is interchangeable across use cases.",
  },
  {
    type: "h2",
    id: "faq",
    number: 12,
    text: "Frequently Asked Questions",
    body: "Common questions hospital teams raise when evaluating a refurbished CT purchase.",
  },
  {
    type: "faq",
    items: [
      {
        q: "What does \"refurbished\" actually guarantee on a CT scanner?",
        a: "Nothing by the word alone — it has no universal regulatory definition. The buyer must request and verify the specific scope of work performed, including tube condition, detector and generator test results, and software licensing, rather than relying on the label.",
      },
      {
        q: "How can I verify a refurbished CT tube's remaining life?",
        a: "Request the tube's accumulated heat-unit and rotation-cycle log from the seller and compare it against the manufacturer's rated tube capacity. If this data cannot be produced, treat remaining life as unverified and budget for near-term replacement as a precaution.",
      },
      {
        q: "Is it normal for a refurbished CT scanner to keep its original tube?",
        a: "Yes, provided the tube's remaining life is disclosed and priced accordingly. A refurbisher retaining a low-hour original tube is not a problem; the issue arises only when tube condition is undisclosed or misrepresented.",
      },
      {
        q: "Do software licences transfer automatically with a refurbished CT purchase?",
        a: "Not necessarily. Many advanced reconstruction and clinical application packages are licensed separately from the hardware and may require confirmation or a re-licensing fee from the manufacturer before they can be used at the new site.",
      },
      {
        q: "What regulatory documents are needed to import a refurbished CT scanner?",
        a: "Requirements vary by country but typically include a certificate of conformity or technical declaration, export documentation from the country of origin, and facility radiation-safety licensing at the destination site. These should be confirmed with the national regulator early in procurement.",
      },
      {
        q: "How much cheaper is a refurbished CT scanner compared to new?",
        a: "The gap varies considerably by platform, grade and market, and should always be evaluated against remaining tube life, software completeness and warranty terms rather than treated as a fixed percentage.",
      },
      {
        q: "What warranty length should I expect on a refurbished CT scanner?",
        a: "Warranty length varies by supplier and grade; the more important factor is whether the warranty explicitly covers the tube, since a warranty silent on tube coverage typically excludes the component most likely to require attention early in ownership.",
      },
      {
        q: "Does a refurbished CT scanner need the same room shielding as a new one?",
        a: "Yes. Shielding requirements are determined by workload, room geometry and the scanner's radiation output specification, not by whether the unit is new or refurbished, and must be calculated and verified for every installation.",
      },
      {
        q: "What inspection should I insist on before final payment?",
        a: "At minimum: a component-level work order, the tube heat-unit log, a full acceptance test report covering CT number accuracy, uniformity, resolution and dose output, and written confirmation of software licence entitlement.",
      },
      {
        q: "When is a new CT scanner clearly the better choice?",
        a: "New is generally preferable for high-volume trauma workloads that accelerate tube wear, when the latest reconstruction or dose-reduction software is clinically required, when a long single-site ownership horizon is planned, or when in-house biomedical engineering capacity to monitor tube life is limited.",
      },
      {
        q: "Can a refurbished CT scanner meet hospital accreditation requirements?",
        a: "Generally yes, provided it passes the same acceptance testing, dose calibration and safety inspection required of any CT system, though some specialised accreditation programmes may specify minimum technology generations worth checking in advance.",
      },
      {
        q: "How do I compare refurbishment grades across different suppliers?",
        a: "Grade names such as Premium, Standard or Economy are not standardised across the industry. Always request the itemised scope of work behind the grade for the specific unit being quoted and compare that document, not the grade label, across suppliers.",
      },
    ],
  },
  {
    type: "referenceGroups",
    note: "References are provided for professional orientation. Always follow the current edition of each standard, applicable national regulations, and the manufacturer's instructions for use and service documentation for your specific system.",
    groups: [
      {
        title: "Medical physics and QA guidance",
        items: [
          { label: "American Association of Physicists in Medicine (AAPM). CT quality control and acceptance testing guidance documents." },
          { label: "International Atomic Energy Agency (IAEA). Quality assurance and dosimetry guidance for computed tomography." },
        ],
      },
      {
        title: "Radiation protection and equipment standards",
        items: [
          { label: "International Commission on Radiological Protection (ICRP). Recommendations on radiological protection in medical imaging." },
          { label: "IEC 60601-2-44. Particular requirements for the safety of X-ray equipment for computed tomography." },
          { label: "World Health Organization (WHO). Guidance on medical device donations and refurbished medical equipment considerations for health facilities." },
        ],
      },
      {
        title: "Engineering literature",
        items: [
          { label: "Clinical engineering literature on refurbished medical imaging equipment lifecycle management and total cost of ownership modelling." },
        ],
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    number: 13,
    text: "Conclusion",
    body: "A refurbished CT scanner can be an excellent, clinically sound investment when the purchase decision is grounded in verified tube data, a documented component-level scope of work, confirmed software entitlement and a warranty that names its exclusions honestly.",
  },
  {
    type: "p",
    text: "The buyers who get the best outcome from refurbished CT procurement are the ones who treat the tube's heat-unit log as the single most important document in the transaction, insist on acceptance testing equivalent to a new installation, and model total cost of ownership rather than comparing purchase price alone. Where workload intensity, ownership horizon or software requirements point toward new equipment instead, that is also a legitimate and sometimes the more cost-effective conclusion — the goal is an evidence-based decision, not a default preference for either option.",
  },
  {
    type: "articleCta",
    heading: "Evaluating a refurbished CT purchase?",
    subheading:
      "Our biomedical engineering team helps hospitals across Africa and the Middle East verify tube condition, review refurbishment documentation and structure warranty and service terms before purchase.",
    technology: "CT",
  },
];
