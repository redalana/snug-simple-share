/**
 * PET/CT total cost of ownership — PET/CT cluster (cost).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PET_CT_TCO_TOC: TocItem[] = [
  { id: "overview", title: "Why PET/CT Cost Models Fail" },
  { id: "capital", title: "Capital and Configuration" },
  { id: "infrastructure", title: "Construction and Infrastructure" },
  { id: "tracer", title: "Tracer: The Cost That Decays" },
  { id: "service", title: "Service, Parts and Detector Cover" },
  { id: "staffing", title: "Staffing and Physics" },
  { id: "model", title: "A Ten-Year Model Structure" },
  { id: "levers", title: "Levers That Actually Change the Number" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PET_CT_TCO_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "PET/CT is one of the few imaging investments where the purchase price is a minority of lifetime cost. A hospital that budgets for the scanner and treats everything else as an operating detail will be surprised twice: once during construction and once every working day thereafter, when tracer is delivered whether or not the patients arrive.",
      "The distinguishing feature of PET/CT economics is a consumable that cannot be stored. Unused dose is not inventory; it decays. That converts scheduling discipline and referral reliability from management preferences into direct financial variables.",
      "This guide sets out the cost structure of a PET/CT service over ten years — capital, construction, tracer, service, staffing and physics — the model structure to build, and the small number of decisions that materially change the total.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Capital and configuration choices, construction and shielding, tracer economics and decay loss, service contract scope, staffing and physics, ten-year model structure, cost-reduction levers",
    audience:
      "Hospital executives, finance and procurement teams, nuclear medicine service leads, biomedical engineering managers and healthcare planners",
    readingTime: "16 min read",
    technology: "PET/CT Scanners",
  },
  {
    type: "h2",
    id: "overview",
    text: "Why PET/CT Cost Models Fail",
    number: 1,
    body: "Most flawed PET/CT business cases share the same three errors, and all three are avoidable at the modelling stage.",
  },
  {
    type: "ul",
    items: [
      "Modelling the scanner and omitting the suite — uptake rooms, hot lab, decay store, shielding and cooling plant are project costs, not fit-out details.",
      "Assuming tracer cost scales with patients scanned. It scales with tracer ordered, and ordering happens before the patient list is confirmed.",
      "Assuming utilisation. A model built on a full list produces a comfortable cost per study; a service with a thin referral base and no marketing produces a very different one.",
    ],
  },

  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Cost per study is the only comparable metric",
    text: "Total ten-year cost divided by realistically achievable studies is the figure to compare between configurations and vendors. A cheaper system that scans fewer patients per session, or that idles because tracer supply is unreliable, can easily have a higher cost per study than a more expensive one.",
  },
  {
    type: "h2",
    id: "capital",
    text: "Capital and Configuration",
    number: 2,
    body: "PET/CT capital cost varies more widely than most modalities because detector technology and axial coverage differ enormously between entry and flagship configurations.",
  },
  {
    type: "table",
    headers: ["Configuration choice", "Cost effect", "Operational consequence"],
    rows: [
      ["Detector technology and time-of-flight performance", "Significant capital increase", "Better image quality at lower activity or shorter acquisition; can raise sessions per day"],
      ["Axial field of view (detector rings)", "Higher capital with greater coverage", "Fewer bed positions per patient, shorter scan time, higher throughput"],
      ["CT subsystem slice count and capability", "Moderate increase", "Determines whether the CT can also serve as a diagnostic examination"],
      ["Cardiac and neurology software packages", "Incremental licence cost", "Enables indications beyond oncology and improves utilisation"],
      ["Quantitative harmonisation and QA tooling", "Modest", "Required for credible serial response reporting and accreditation"],
      ["Refurbished versus new", "Materially lower capital", "Shorter remaining life, narrower software path, requires strict supplier and parts due diligence"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Axial coverage buys time, and time buys patients",
    text: "Longer axial coverage reduces the number of bed positions needed for a whole-body survey, which shortens each acquisition. Where uptake room capacity is the real limit, that gain is partly wasted — so coverage and room programme should be specified together rather than separately.",
  },
  {
    type: "h2",
    id: "infrastructure",
    text: "Construction and Infrastructure",
    number: 3,
    body: "Construction is where PET/CT projects most often exceed budget, because the works are driven by radiation protection and heat rejection rather than by floor area.",
  },
  {
    type: "table",
    headers: ["Element", "Driver", "Notes"],
    rows: [
      ["Shielding design and construction", "511 keV photon energy and planned workload", "Often concrete-thickness driven; must consider rooms above and below; designed by a qualified medical physics expert"],
      ["Uptake rooms", "Intended daily throughput", "Uptake takes about an hour per patient while acquisition takes minutes; room count sets capacity"],
      ["Dedicated injected-patient toilet", "Regulatory and contamination control", "Cleanable surfaces, direct access from uptake area"],
      ["Hot lab", "Unsealed source dispensing", "Shielded dispensing facility, dose calibrator, L-block, lockable storage, records"],
      ["Waste decay store", "Licence conditions", "Shielded, access-controlled, inventory-managed"],
      ["Structural strengthening", "Gantry and shielding mass", "Written verification of point loads before order confirmation"],
      ["Delivery route works", "Crate dimensions and weights", "Loading bay, corridors, turning circles, lift capacity, doorways — surveyed, not assumed"],
      ["Cooling and power", "Continuous heat rejection from detector and reconstruction hardware", "Resilient cooling is the single most common cause of avoidable downtime in hot climates"],
      ["Licensing and physics fees", "Regulatory review", "Frequently the longest item on the programme, not the largest"],
    ],
  },
  {
    type: "h2",
    id: "tracer",
    text: "Tracer: The Cost That Decays",
    number: 4,
    body: "This line separates PET/CT from every other imaging modality. The consumable has a half-life, and the clock starts at the cyclotron.",
  },
  {
    type: "ul",
    items: [
      "Activity is lost in transit. The longer the delivery route, the more activity must be produced and paid for to deliver the required dose at injection time.",
      "Unused dose cannot be returned or stored. A cancellation converts a paid consumable into waste.",
      "Batch scheduling drives session structure — the list is built around delivery windows rather than around clinic convenience.",
      "A failed batch cancels a session. Contractual contingency arrangements have direct financial value.",
      "Targeted tracers beyond FDG carry higher unit cost and often more restricted supply, but open higher-value indications.",
      "Patient no-shows are more expensive than in any other modality, because dose has already been dispensed.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Model tracer on ordered activity, not on patients scanned",
    text: "Build the tracer line from delivery schedule, activity ordered per delivery, transit decay and expected cancellation rate. Modelling it as a simple per-patient consumable understates cost in every service that has not yet reached full utilisation — which is most services in their first two years.",
  },
  {
    type: "h2",
    id: "service",
    text: "Service, Parts and Detector Cover",
    number: 5,
    body: "PET/CT service contracts are among the most expensive in diagnostic imaging, and the scope differences between quotations are more significant than the price differences.",
  },
  {
    type: "table",
    headers: ["Contract element", "Why it matters", "What to confirm in writing"],
    rows: [
      ["Detector and electronics cover", "The highest-value failure mode on the system", "Explicit inclusion, not an exclusion buried in the schedule"],
      ["CT tube cover", "A consumable with finite life on the CT subsystem", "Whether replacement is included, pro-rated or excluded"],
      ["Cooling and chiller responsibility", "A frequent cause of downtime", "Boundary between vendor scope and hospital estate scope"],
      ["Response and repair time", "Determines lost sessions per fault", "Committed on-site response, escalation path and remedy for breach"],
      ["Preventive maintenance and QA support", "Protects quantitative calibration", "Visit frequency, scope, and whether physics QA support is included"],
      ["Software updates and version path", "Reconstruction changes affect SUV comparability", "Included updates, and notification before quantitative behaviour changes"],
      ["Parts availability and end of support", "Determines usable life", "Declared support horizon for this configuration"],
      ["Uptime guarantee", "Converts reliability into a contractual obligation", "Definition of uptime, measurement method and credits"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Comparing service prices without comparing scope",
    text: "Two PET/CT service quotations differing by a wide margin frequently differ on detector cover, CT tube treatment, cooling responsibility and response time. Normalise the scope first, then compare the price — otherwise the cheaper contract simply relocates cost to the year a detector module fails.",
  },
  {
    type: "h2",
    id: "staffing",
    text: "Staffing and Physics",
    number: 6,
    body: "PET/CT does not run on technologist time alone. It requires scheduling discipline, radiopharmacy handling and continuing medical physics involvement.",
  },
  {
    type: "ul",
    items: [
      "Nuclear medicine physician reporting capacity, including time for structured response reporting.",
      "Technologists trained in unsealed source handling, patient preparation and quantitative protocol compliance.",
      "Radiopharmacy or hot lab staffing for receipt, assay, dispensing and record keeping.",
      "Medical physics support for shielding verification, acceptance testing, quantitative calibration, QA programme and licence compliance.",
      "Administrative capacity for confirmation calls and transport coordination — a direct control on wasted dose.",
      "Continuing training after each software upgrade, because reconstruction changes can shift reported values.",
    ],
  },
  {
    type: "h2",
    id: "model",
    text: "A Ten-Year Model Structure",
    number: 7,
    body: "Build the model in these blocks, with the assumptions visible and each one owned by a named person who can defend it.",
  },
  {
    type: "table",
    headers: ["Block", "Contents", "Assumption to state explicitly"],
    rows: [
      ["Year 0 — capital", "System, software licences, QA phantoms, installation, training", "Configuration and included licences"],
      ["Year 0 — works", "Shielding, uptake rooms, hot lab, decay store, structural works, delivery route, cooling and power", "Design workload used for shielding, cooling redundancy level"],
      ["Year 0 — regulatory", "Licence application, physics design review, acceptance testing", "Licensing duration and its effect on revenue start"],
      ["Years 1-10 — tracer", "Activity ordered per delivery, deliveries per week, transit decay, cancellation loss, tracer mix", "Utilisation ramp by year, not steady state from day one"],
      ["Years 1-10 — service", "Contract cost, CT tube provision, chiller maintenance, out-of-scope allowance", "Scope normalised across vendors"],
      ["Years 1-10 — staffing", "Physician, technologist, radiopharmacy, physics, administrative", "Whether posts are new or reallocated"],
      ["Years 1-10 — energy and estate", "Continuous power and cooling load, estate recharge", "Local tariff and cooling efficiency"],
      ["Years 1-10 — QA and accreditation", "Physics QA programme, harmonisation or accreditation scheme fees", "Whether serial response reporting is offered"],
      ["Year 5-8 — refresh", "Major software or hardware refresh, tube replacement if excluded", "Support horizon and refresh policy"],
      ["Output", "Total ten-year cost, cost per achievable study, break-even utilisation", "Realistic achievable studies, not theoretical capacity"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Model a ramp, and model a bad year",
    text: "Run three scenarios: a realistic utilisation ramp over the first three years, a full-utilisation steady state, and a downside case with a lower referral rate and one extended unplanned downtime episode. If the service only survives the optimistic case, the business case is not yet finished.",
  },
  {
    type: "h2",
    id: "levers",
    text: "Levers That Actually Change the Number",
    number: 8,
    body: "Only a handful of decisions move the ten-year total meaningfully. Most negotiation energy is spent elsewhere.",
  },
  {
    type: "ul",
    items: [
      "Utilisation — the dominant lever. Referral pathway development, oncology multidisciplinary team engagement and realistic list construction beat every discount available at purchase.",
      "Cancellation and no-show control — confirmation calls, transport coordination and same-day standby lists directly reduce wasted dose.",
      "Tracer supply terms — transit time, batch contingency, pricing structure and access to targeted tracers.",
      "Service scope, not service price — detector cover, CT tube treatment and committed response time.",
      "Uptake room capacity — the cheapest way to raise throughput once the scanner is fast enough.",
      "Cooling resilience — a modest capital item that removes one of the most common causes of lost sessions.",
      "Indication breadth — cardiac and neurology capability keeps the system busy when oncology lists fluctuate.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "What is the largest cost in a PET/CT service over ten years?",
        a: "It varies with utilisation, but in a busy service the combination of tracer supply and the service contract typically exceeds the original capital cost over a ten-year horizon. In an underused service the largest cost is effectively the idle capital and the tracer that decayed unused.",
      },
      {
        q: "Why is tracer cost treated differently from other consumables?",
        a: "Because it decays. Activity is lost in transit and cannot be stored, so cost is driven by the activity ordered against a delivery schedule rather than by the number of patients ultimately scanned. Cancellations therefore convert a paid consumable directly into waste.",
      },
      {
        q: "How much should be budgeted for construction?",
        a: "It must be quantified project by project, because it is driven by shielding design for the planned workload, the number of uptake rooms, the hot lab and decay store, structural strengthening, delivery route works and cooling plant. What matters is that these appear as project costs in the model, not as unquantified fit-out.",
      },
      {
        q: "Is a refurbished PET/CT a sound way to reduce cost?",
        a: "It can be, where the supplier is credible, the refurbishment is documented, parts and software support horizons are declared in writing, and installation and acceptance testing are performed to the same standard as for a new system. The saving is on capital only; construction, tracer, staffing and physics costs are unchanged.",
      },
      {
        q: "What service contract scope items are most often disputed?",
        a: "Detector and electronics cover, CT tube replacement, responsibility for the chiller or cooling plant, committed on-site response time, and whether software updates that change reconstruction behaviour are included. All five should be explicit in the contract schedule before comparing prices.",
      },
      {
        q: "How does uptake room capacity affect cost per study?",
        a: "Uptake takes roughly an hour per patient while acquisition takes minutes, so uptake room count often sets daily throughput. Adding an uptake room is usually far cheaper per additional study than any scanner configuration upgrade, which makes it one of the highest-return items in the room programme.",
      },
      {
        q: "What downtime cost should be modelled?",
        a: "Model lost sessions rather than lost hours, and include the tracer already ordered for a cancelled session. A fault that removes one working day removes both the day's revenue and that day's dispensed activity, which is why committed response time has direct financial value.",
      },
      {
        q: "When does a PET/CT break even?",
        a: "The break-even point depends on reimbursement level, utilisation and the ramp rate of referrals, so it must be calculated locally. The useful discipline is to state the number of studies per week at which the service covers its full cost, and then to test honestly whether the referral base can supply that number.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Building a PET/CT business case?",
    subheading:
      "AbuFarha Medical supplies, installs, commissions and supports PET/CT systems and works with hospital finance and clinical teams on configuration, infrastructure scope and long-term service planning.",
    technology: "PET/CT Scanners",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Commercial review", name: "AbuFarha Projects & Procurement", credential: "Imaging capital project scoping" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "PET/CT installation, commissioning and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Hospital capital project practice, manufacturer installation documentation and radiation protection guidance",
    disclaimer:
      "No prices are quoted because equipment, construction, tracer and labour costs vary by market, configuration and year. This article describes the cost structure and model discipline; all figures must be obtained from current quotations for your project.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Facility and radiation protection",
        items: [
          { label: "IAEA guidance on nuclear medicine facility design and radiation protection" },
          { label: "National radiation protection guidance on PET facility shielding and licensing" },
        ],
      },
      {
        title: "Performance and quality assurance",
        items: [
          { label: "NEMA NU 2 — performance measurements of positron emission tomographs" },
          { label: "EANM / EARL guidance on quantitative harmonisation and accreditation" },
        ],
      },
      {
        title: "Installation and infrastructure",
        items: [
          { label: "IEC 60364-7-710 — electrical installations in medical locations" },
          { label: "Manufacturer pre-installation, structural load, cooling and delivery documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "PET/CT lifetime cost is dominated by tracer supply and service, not by the purchase price.",
      "Tracer is a consumable that decays: model it on activity ordered against a delivery schedule, including transit loss and cancellations.",
      "Construction — shielding, uptake rooms, hot lab, decay store, structure, delivery route and cooling — belongs in the capital model.",
      "Service contracts must be normalised on scope before price: detector cover, CT tube, cooling responsibility and response time.",
      "Staffing includes radiopharmacy handling, physics support and the administrative work that prevents wasted dose.",
      "Utilisation is the dominant lever on cost per study; uptake room capacity and cooling resilience are the cheapest structural improvements.",
      "Model a ramp and a downside case, and state the break-even study volume explicitly.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "A PET/CT business case is credible when it shows the whole system: the suite, the supply chain, the service scope, the workforce and a realistic referral ramp.",
  },
  {
    type: "p",
    text: "Hospitals that model PET/CT this way negotiate on the terms that matter — tracer supply, service scope and uptake capacity — and open services that reach sustainable utilisation. Hospitals that model only the scanner discover the rest of the cost structure one invoice at a time.",
  },
];
