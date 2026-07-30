import type { ContentBlock, TocItem } from "@/lib/blog";
import solMri from "@/assets/sol-mri.jpg";

export const MRI_TOTAL_COST_OF_OWNERSHIP_TOC: TocItem[] = [
  { id: "overview", title: "Capital Price vs Lifecycle Cost" },
  { id: "site-preparation", title: "Site Preparation and Room Build" },
  { id: "shielding", title: "RF Shielding and Magnetic Fringe-Field Containment" },
  { id: "cooling-power", title: "Cooling, Chillers and Electrical Power" },
  { id: "cryogen", title: "Cryogen Strategy and Helium Cost" },
  { id: "service-contracts", title: "Service Contract Tiers" },
  { id: "coils", title: "Coil Replacement and Digital Coil Lifecycle" },
  { id: "software", title: "Software Upgrades and Licensing" },
  { id: "staffing", title: "Staffing Cost Across the System's Life" },
  { id: "consumables", title: "Consumables and Recurring Clinical Supplies" },
  { id: "downtime", title: "The True Cost of Downtime" },
  { id: "utilisation", title: "Utilisation and Break-Even Modelling" },
  { id: "financing", title: "Financing and Lease Options" },
  { id: "market-ranges", title: "Indicative Market Ranges" },
  { id: "budgeting-framework", title: "Building a Five-Year Budget" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MRI_TOTAL_COST_OF_OWNERSHIP_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solMri,
    imageAlt: "MRI suite equipment room showing chiller and power infrastructure supporting a superconducting scanner",
    paragraphs: [
      "The purchase price of an MRI scanner is the number that appears in a board presentation, but it is rarely more than half of what the system will actually cost a hospital over its working life. Site preparation, RF shielding, cooling, power upgrades, service contracts, coil replacement, software licensing, staffing and consumables all accrue year after year, and several of them — chiller failures, coil damage, unplanned downtime — arrive unpredictably rather than on a schedule anyone budgeted for.",
      "This is not a reason to avoid MRI. It is a reason to plan for it properly. Hospitals that model total cost of ownership before signing a purchase order make better decisions about field strength, service tier and financing structure, and they rarely face the unbudgeted variation orders that derail smaller institutions mid-project. Hospitals that model only the capital price routinely discover the room, the chiller and the first major service event only after the contract is signed.",
      "This guide sets out every material cost line across the lifecycle of an MRI installation — from the first structural survey to the coil replacement schedule a decade later — and shows how to build a break-even model around realistic utilisation. Every figure quoted is an indicative market range, not a quotation; actual costs depend on field strength, country, building condition, currency and the specific commercial terms a supplier offers. AbuFarha Medical supplies, installs, commissions, trains and services MRI systems and does not construct hospital buildings; site and civil works are coordinated with the hospital's appointed contractors.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Capital vs lifecycle cost, site preparation, shielding, cooling and power, service contracts, cryogen and chiller costs, coil replacement, software upgrades, staffing, consumables, downtime cost, utilisation modelling, financing options and indicative market ranges",
    audience:
      "Hospital directors, finance officers, procurement managers, biomedical engineers and radiology department heads",
    readingTime: "17 min read",
    technology: "Magnetic Resonance Imaging (MRI)",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "Capital Price vs Lifecycle Cost",
    body: "The purchase price of the scanner itself typically represents 45 to 60 percent of what a hospital spends on the system across its first ten years; the remainder is site build, service, consumables and staffing.",
  },
  {
    type: "ul",
    items: [
      "Capital and lifecycle cost move on different timelines: the capital outlay is a single decision, but service contracts, coil replacement and cryogen management are recurring commitments that compound with currency movement and parts inflation over a 10 to 15 year service life.",
      "Two hospitals buying the identical scanner model can face materially different total costs, because site condition (an existing shell versus new-build shielding), local power quality, and the chosen service contract tier change the recurring cost base far more than the equipment price does.",
      "The single largest lifecycle risk is not any one cost line — it is under-utilisation. A scanner financed and staffed for 18 patients a day but running at 8 carries the same fixed costs against half the revenue, which is the most common reason MRI programmes fail financially rather than clinically.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "Budget the total cost of ownership, not the purchase price — site build, shielding, cooling and power can add a substantial fraction of the capital cost before the scanner ever images a patient.",
      "Service contract tier is a lifecycle decision, not an afterthought; parts, labour and cryogen cover materially change annual spend and predictability.",
      "Coils and software are recurring capital items, not one-time accessories — plan replacement and upgrade cycles into the budget from year one.",
      "Downtime cost is driven by lost clinical throughput and referral leakage, not just the repair invoice, and is usually far larger than hospitals initially estimate.",
      "A break-even model built on realistic (not optimistic) utilisation is the single most useful planning tool before signing a purchase or lease agreement.",
      "All cost figures in this guide are indicative market ranges for planning purposes only, not quotations — final costs depend on site, country, currency and commercial terms.",
    ],
  },
  {
    type: "editorialBoard",
    reviewers: [
      {
        role: "Medical reviewer",
        name: "AbuFarha Clinical Advisory Panel",
        credential: "Consultant radiologists advising on diagnostic imaging pathways",
      },
      {
        role: "Biomedical engineer",
        name: "AbuFarha Biomedical Engineering Team",
        credential: "Field service engineers for MRI, CT, cath lab and PET/CT installations",
      },
      {
        role: "Technical editor",
        name: "AbuFarha Knowledge Center Editorial Team",
        credential: "Medical technology editors, Amman, Jordan",
      },
      {
        role: "Clinical applications specialist",
        name: "AbuFarha Applications & Training Team",
        credential: "MR applications training and protocol optimisation",
      },
    ],
    lastReviewed: "July 2026",
    nextReview: "July 2027",
    version: "1.0",
    evidenceLevel:
      "Level A — international standards, peer-reviewed literature and manufacturer documentation",
    disclaimer:
      "This article is written for hospital decision-makers, clinicians and biomedical engineers as educational reference material. It is not a substitute for professional medical advice, diagnosis or treatment, nor for manufacturer instructions for use, national regulations or site-specific engineering assessment.",
  },
  {
    type: "h2",
    id: "site-preparation",
    number: 2,
    text: "Site Preparation and Room Build",
    body: "Site preparation is the cost line most frequently under-budgeted, because it depends on the existing building far more than on the scanner model chosen.",
  },
  {
    type: "p",
    text: "A viable MRI site requires structural floor loading capable of carrying a multi-tonne magnet plus its shielded enclosure, a delivery route wide enough for the magnet crate (or a knock-out panel and crane access where it is not), vibration isolation from lifts, plant rooms and traffic, and enough floor area for the magnet room, equipment room, control room and patient changing space combined. Retrofitting an existing radiology suite is almost always more expensive per square metre than shielding a purpose-built shell, because existing structure, ducting and doorways rarely align with MRI requirements.",
  },
  {
    type: "requirements",
    checklist: [
      "Independent structural survey confirming floor loading for the specific magnet model",
      "Confirmed delivery route with door widths, corridor turns, ceiling height and crane or rigging plan",
      "Vibration survey identifying nearby lifts, plant rooms, generators and traffic sources",
      "Fringe-field mapping to confirm the 5 gauss line stays within controlled space",
      "Electrical single-line diagram confirming available capacity before ordering",
      "HVAC capacity assessment for both the magnet room and the equipment room",
    ],
    specs: {
      title: "Typical room build components",
      rows: [
        { label: "Magnet room shell", value: "Reinforced floor, dedicated HVAC, acoustic treatment" },
        { label: "RF shielded enclosure", value: "Continuous copper/steel Faraday cage with sealed door" },
        { label: "Quench vent", value: "Dedicated pipe routed to open air away from occupied space" },
        { label: "Equipment room", value: "Houses gradient amplifiers, RF chain, chiller interface" },
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Commission the structural and fringe-field survey before the tender closes",
    text: "Floor loading, delivery route, vibration sources and available electrical capacity should be surveyed while suppliers are still competing for the contract. A survey performed after the purchase order is signed converts every adverse finding into a change order billed at the hospital's expense, and it removes any leverage to negotiate around it.",
  },
  {
    type: "h2",
    id: "shielding",
    number: 3,
    text: "RF Shielding and Magnetic Fringe-Field Containment",
    body: "RF shielding excludes ambient radio interference from the magnet room, while fringe-field containment keeps the hazardous static field away from uncontrolled areas — both are non-negotiable engineering requirements, not optional upgrades.",
  },
  {
    type: "p",
    text: "The RF shielded room is a continuous conductive enclosure — typically copper or galvanised steel sheet — with a sealed RF door, waveguides for ventilation ducting, and filtered penetration panels for every cable and pipe entering the room. Any gap, degraded door seal or unfiltered penetration allows ambient RF energy in, which appears as artefact across the entire image because of how k-space reconstruction works. Fringe-field containment is a separate concern: the static magnetic field extends beyond the bore in three dimensions, and the 5 gauss line — the boundary beyond which the field is considered safe for the general public and for most electronic equipment — must be contained within the controlled area, sometimes requiring additional passive steel shielding if the room sits close to a corridor, car park or neighbouring building.",
  },
  {
    type: "diagram",
    id: "room-planning",
    title: "MRI room planning — shielding, cooling and power zones",
    purpose: "Shows how the RF shielded enclosure, equipment room, chiller plant and electrical supply relate spatially, so facilities teams can plan civil works accurately.",
    alt: "Floor plan diagram showing the RF-shielded magnet room at the centre with a sealed RF door and waveguide penetrations, an adjoining equipment room housing gradient amplifiers and the RF chain, a chiller plant connection routed from outside the building, and a dedicated electrical supply panel feeding the equipment room.",
    caption: "Figure 1 — Room planning zones. Cooling and power routes must be agreed before the shielding contractor begins work, since penetrations cannot be added afterward without breaching the enclosure.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Door seal integrity is a recurring fault, not a one-time installation item",
    text: "RF door seals wear with mechanical cycling and are the most common source of shielding-related artefact discovered months or years after installation, not at commissioning. Include RF integrity testing in the annual preventive maintenance schedule rather than assuming a shielded room stays shielded indefinitely.",
  },
  {
    type: "h2",
    id: "cooling-power",
    number: 4,
    text: "Cooling, Chillers and Electrical Power",
    body: "Gradient amplifiers and the cryocooler generate substantial heat, and the magnet's cold head depends on a stable chilled-water supply — cooling failures are one of the leading causes of unplanned MRI downtime.",
  },
  {
    type: "p",
    text: "A dedicated chiller (or connection to an existing central chilled-water plant with adequate reserve capacity) supplies the cold head compressor and, on many systems, the gradient amplifier cabinet. Chiller undersizing or unreliability is a common and expensive mistake: if the chiller cannot maintain the cold head's operating temperature, helium boil-off accelerates, and in a sustained failure the system can quench. Electrical supply must be sized and power-quality-conditioned for the gradient system's high peak current draws; voltage sags and harmonic distortion from a poorly conditioned supply cause image artefact and, over time, component wear in the gradient amplifiers.",
  },
  {
    type: "table",
    caption: "Cooling and power planning considerations",
    headers: ["Requirement", "Why it matters", "Common failure mode if under-specified"],
    rows: [
      ["Dedicated or reserved chiller capacity", "Maintains cold head temperature for continuous superconductivity", "Accelerated helium boil-off, quench risk"],
      ["Redundant chiller circuit or backup", "Avoids single point of failure for a 24/7 cryogenic load", "Full unplanned downtime during chiller service or failure"],
      ["Dedicated electrical feeder", "Gradient amplifiers draw high transient current", "Voltage sag artefact, nuisance trips"],
      ["Uninterruptible power for control systems", "Prevents corrupted shutdowns during brief outages", "Software corruption, extended recovery time"],
      ["Backup generator coverage (where mains is unreliable)", "Keeps cryocooler running through extended outages", "Cold head stoppage and cryogen loss during grid failures"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Cooling and power are rarely the glamorous line items in a capital proposal, yet they account for a disproportionate share of unplanned service calls once a system is in clinical use.",
    clinicalInterpretation: "A chiller or power interruption does not usually damage image quality gradually — it produces sudden, hospital-wide scan cancellations, which is why cooling redundancy has a direct clinical availability impact.",
    hospitalRecommendation: "Specify chiller redundancy and generator coverage for the cryocooler circuit in the tender, even where it adds capital cost, because the alternative cost is measured in cancelled patient days.",
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Grid reliability should shape the power design, not just the electrical spec sheet",
    text: "In regions with frequent grid instability, protecting the cryocooler circuit with backup generator capacity is often more cost-effective over the system's life than repeatedly funding emergency helium top-ups and re-ramp procedures after cold-head stoppages.",
  },
  {
    type: "h2",
    id: "cryogen",
    number: 5,
    text: "Cryogen Strategy and Helium Cost",
    body: "Modern superconducting magnets use a closed-loop cryocooler and hold a sealed helium volume for the system's life, but cryogen management remains a distinct, ongoing cost and risk category.",
  },
  {
    type: "p",
    text: "Older-generation and some legacy magnet designs required periodic helium top-ups as the cryostat slowly boiled off gas over years; modern zero-boil-off and low-helium designs have substantially reduced this, some holding as little as a few litres of helium sealed for the life of the magnet rather than the thousands of litres older systems held. Even with a modern design, cryogen risk has not disappeared: a cold-head failure, a chiller interruption or a quench still requires professional helium handling, and a full re-fill after a quench is a significant planned cost event that should be reflected in the service contract rather than treated as a surprise.",
  },
  {
    type: "knowledgeBox",
    variant: "quick-facts",
    title: "Cryogen facts worth knowing before you budget",
    items: [
      "A quench is rare in a well-maintained system but not eliminated by modern zero-boil-off designs — it can still be triggered by cold-head failure or emergency shutdown",
      "Re-ramping a quenched magnet requires a specialist field engineer, a substantial helium fill, and days of downtime before recommissioning and re-shimming",
      "Helium is a finite, price-volatile global commodity; a service contract that fixes cryogen cost removes a meaningful budgeting uncertainty",
      "Zero-boil-off systems still depend entirely on an uninterrupted cold-head power and cooling supply — reduced helium volume does not reduce sensitivity to cooling failure",
    ],
  },
  {
    type: "h2",
    id: "service-contracts",
    number: 6,
    text: "Service Contract Tiers",
    body: "Service contracts range from basic remote support to comprehensive parts-and-labour cover including cryogen; the tier chosen is one of the largest controllable levers on both annual cost and clinical uptime.",
  },
  {
    type: "comparison",
    title: "Common MRI service contract tiers",
    headers: ["Tier", "Typical inclusions", "Best suited to", "Trade-offs"],
    rows: [
      [
        "Time-and-materials",
        "Pay per call-out, parts and labour billed separately",
        "Very low-utilisation sites willing to accept unpredictable cost and slower response",
        "No cost predictability; response time is not contractually guaranteed",
      ],
      [
        "Preventive maintenance only",
        "Scheduled inspections and calibration, no parts or emergency labour cover",
        "Sites with in-house biomedical engineering capacity",
        "Major component failures (gradient amplifier, cold head) remain fully exposed",
      ],
      [
        "Comprehensive parts and labour",
        "Scheduled maintenance, unlimited emergency call-outs, most parts included",
        "Most general hospitals running standard clinical loads",
        "Higher annual fee, but the most predictable and widely used tier",
      ],
      [
        "Full-cover with cryogen and coils",
        "As above plus cryogen top-ups/quench cover and coil replacement",
        "High-utilisation or single-scanner sites where downtime cost is severe",
        "Highest annual cost, but removes nearly all unplanned capital exposure",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The jump from preventive-maintenance-only to comprehensive cover is where most hospitals see the clearest return, because gradient amplifiers, RF chains and cold heads are the components most likely to fail expensively and unpredictably.",
    clinicalInterpretation: "Response time commitments in the contract matter as much as parts coverage — a comprehensive contract with a slow guaranteed response still produces long clinical outages.",
    hospitalRecommendation: "Negotiate the contractual response time and the location of the nearest field engineer explicitly, and verify local parts stock before comparing headline annual fees between tiers.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Questions to ask before signing any service tier",
    items: [
      "What is the guaranteed response time, and is it measured from call logged or engineer on-site?",
      "Which specific parts are excluded from the contract (coils, cryogen, consumable filters)?",
      "Is preventive maintenance frequency specified by visit count, or by hours worked?",
      "What happens contractually if the guaranteed response time is missed repeatedly?",
      "Can the contract be re-tiered mid-term as utilisation grows?",
    ],
  },
  {
    type: "h2",
    id: "coils",
    number: 7,
    text: "Coil Replacement and Digital Coil Lifecycle",
    body: "Receive coils are the accessory most frequently damaged in daily use and the component with the single largest direct effect on image quality — budgeting their replacement cycle is essential, not optional.",
  },
  {
    type: "p",
    text: "Coil cables flex with every patient positioning cycle, and cable fatigue is the leading cause of coil failure. High-utilisation coil families — spine, head-and-neck, body, knee — typically need replacement or major repair within five to eight years of continuous clinical use, sometimes sooner in busy departments with less careful handling discipline. Because coils are usually priced and warrantied separately from the main system, hospitals that do not plan a coil replacement reserve often discover the cost only when a heavily used coil fails and an entire exam type drops off the daily schedule.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Coil handling discipline extends useful life meaningfully",
    items: [
      "Log every coil by serial number and assign it a named storage position",
      "Inspect cables and connectors weekly for kinks, exposed shielding or connector wear",
      "Never place a coil on the floor or leave it on the table during patient transfer",
      "Keep one spare of the highest-utilisation coil family on site where lead times exceed two weeks",
    ],
  },
  {
    type: "callout",
    variant: "important",
    title: "Treat coils as a recurring capital line, not a one-time accessory purchase",
    text: "A realistic five- to ten-year budget should include at least one full replacement cycle for the highest-utilisation coils, priced at commissioning rather than assumed to be covered indefinitely under a standard service contract.",
  },
  {
    type: "h2",
    id: "software",
    number: 8,
    text: "Software Upgrades and Licensing",
    body: "Reconstruction software, deep-learning image enhancement and workflow tools are increasingly licensed separately from the base system and typically follow their own upgrade cadence.",
  },
  {
    type: "p",
    text: "Manufacturers release major software platform versions on multi-year cycles, and not every upgrade is included free of charge under a standard service contract — this varies significantly by manufacturer and contract terms and must be confirmed explicitly rather than assumed. Deep-learning reconstruction, advanced quantitative packages and certain workflow automation tools are frequently sold as separate licences, sometimes per-scanner and sometimes per-seat for the reporting workstation. A hospital that budgets only the base platform license can find that the throughput gains it expected from AI-accelerated protocols require an additional, unbudgeted licence fee.",
  },
  {
    type: "knowledgeBox",
    variant: "future-technology",
    title: "AI reconstruction licensing is now a recurring line, not a one-off purchase",
    text: "Deep-learning reconstruction packages that cut scan time meaningfully at equivalent image quality are increasingly sold as subscription or per-upgrade licences rather than a permanent one-time purchase. Confirm the licensing model — perpetual, subscription or per-major-version — before including expected throughput gains in a break-even model.",
  },
  {
    type: "h2",
    id: "staffing",
    number: 9,
    text: "Staffing Cost Across the System's Life",
    body: "Staffing is usually the largest recurring cost of running an MRI service over its lifetime, larger than the service contract in most general hospitals, and it is frequently modelled at initial hiring levels rather than at steady-state.",
  },
  {
    type: "ul",
    items: [
      "MRI technologist staffing must cover the full clinical day plus training time, and running a second shift to lift utilisation requires a second full technologist team, not simply extended opening hours.",
      "Applications training is a recurring, not one-time, cost — protocol libraries, software versions and technologist turnover all require periodic refresher training to keep advanced sequences in routine use.",
      "Radiologist reporting capacity must scale with scanning volume; a hospital that increases scanning throughput without adding reporting capacity simply relocates the bottleneck downstream of the magnet.",
      "Biomedical engineering staffing (in-house or via the service contract) affects both routine maintenance quality and the speed of first-line fault triage before an external engineer is required.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Fund a second cohort of applications training before adding a second shift",
    text: "Adding scanning hours without a proportionate increase in trained technologist capacity and reporting radiologist time typically produces protocol drift and reporting backlog rather than the throughput gain the extra shift was meant to deliver.",
  },
  {
    type: "h2",
    id: "consumables",
    number: 10,
    text: "Consumables and Recurring Clinical Supplies",
    body: "Consumables are individually inexpensive but recur with every patient and scale directly with volume, making them a meaningful line in a high-utilisation department's annual budget.",
  },
  {
    type: "ul",
    items: [
      "Gadolinium-based contrast agents, priced per dose and consumed on a substantial share of studies depending on case mix",
      "IV cannulation supplies, hearing protection and single-use patient positioning aids",
      "Coil covers, cleaning and infection-control consumables required between patients",
      "Print and PACS storage costs, where relevant to the hospital's imaging IT contract",
      "Quality assurance phantoms and their periodic replacement",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Contrast cost tracks case mix, not scanner throughput alone",
    text: "A department weighted toward oncology follow-up and MR angiography will consume meaningfully more contrast per patient than one weighted toward musculoskeletal and neuro-degenerative work, so consumables budgets should be built from the expected referral mix rather than a flat per-scan average.",
  },
  {
    type: "h2",
    id: "downtime",
    number: 11,
    text: "The True Cost of Downtime",
    body: "The cost of an outage is rarely the repair invoice; it is the lost clinical throughput, delayed diagnoses, and referral leakage to competing facilities that accumulate for every day the scanner is unavailable.",
  },
  {
    type: "p",
    text: "A single day of unplanned downtime on a busy 1.5T scanner can represent the loss of 12 to 20 patient slots, each carrying both a direct revenue value and, more importantly in many settings, a delayed diagnosis for a patient already in a clinical pathway. Referral behaviour compounds the loss: referring clinicians who experience repeated cancellations tend to redirect future referrals elsewhere, and that volume does not automatically return once the scanner is repaired. This is why the true cost of downtime should be modelled against contribution margin per slot and pathway impact, not simply the engineer call-out fee.",
  },
  {
    type: "stats",
    items: [
      { value: "12-20", label: "Typical patient slots lost per unplanned downtime day on a busy 1.5T scanner (indicative)" },
      { value: "48-72 hrs", label: "Typical parts lead time for a major component failure without local stock (indicative)" },
      { value: "days-weeks", label: "Typical recovery time after a quench, including re-ramp, re-shim and requalification" },
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Downtime cost is usually under-estimated in three specific ways",
    items: [
      "Counting only the repair invoice and ignoring lost contribution margin from cancelled slots",
      "Ignoring referral leakage — clinicians redirecting future volume after repeated cancellations",
      "Failing to price the requalification and re-shimming time after a major repair, not just the parts-fitting time",
    ],
  },
  {
    type: "h2",
    id: "utilisation",
    number: 12,
    text: "Utilisation and Break-Even Modelling",
    body: "A break-even model built on realistic, not optimistic, utilisation is the single most useful planning tool a hospital can build before committing capital to an MRI programme.",
  },
  {
    type: "p",
    text: "The model has three moving parts: fixed annual cost (financing or depreciation, the service contract, staffing and facility overhead), variable cost per patient (contrast, consumables and a proportionate share of coil and cryogen reserve), and net revenue or reimbursement per patient. Dividing fixed annual cost by contribution margin per patient (revenue per patient minus variable cost per patient) gives the break-even patient volume. Comparing that figure honestly against achievable slots per day, days per year and realistic occupancy — not theoretical capacity — is what separates a sound business case from an optimistic one.",
  },
  {
    type: "table",
    caption: "Illustrative break-even structure for a single 1.5T scanner (indicative figures for methodology only)",
    headers: ["Cost category", "Approximate annual share", "Notes"],
    rows: [
      ["Financing or depreciation", "30-40%", "Depends heavily on financing structure and system age"],
      ["Service contract", "15-25%", "Varies by tier chosen"],
      ["Staffing", "25-35%", "Usually the largest single recurring line"],
      ["Facility overhead (power, cooling, space)", "5-10%", "Rises with utility price volatility"],
      ["Consumables and coil/cryogen reserve", "5-10%", "Scales with patient volume and case mix"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Because staffing and financing dominate the cost base, break-even volume is driven far more by how many productive hours the scanner runs per day than by any single equipment cost line.",
    clinicalInterpretation: "A department that cannot fill scheduled slots consistently will struggle to reach break-even even with a favourable purchase price, because the fixed-cost share of the model does not fall with lower volume.",
    hospitalRecommendation: "Model break-even at conservative utilisation (60-70% of theoretical slot capacity) before approving the business case, and treat any plan assuming near-100% utilisation from year one as high risk.",
  },
  {
    type: "diagram",
    id: "field-strength-decision",
    title: "MRI utilisation and break-even decision path",
    purpose: "Walks a finance team through the sequence of questions needed to test whether a proposed MRI programme is likely to reach break-even at realistic volumes.",
    alt: "Decision flow beginning with estimating achievable daily slots at conservative utilisation, then calculating annual fixed cost from financing, service contract and staffing, then comparing against contribution margin per patient to derive break-even volume, and finally stress-testing the result against a lower utilisation scenario and a service-tier change.",
    caption: "Figure 2 — Break-even decision path. Stress-testing against a lower-utilisation scenario is the step most business cases skip.",
  },
  {
    type: "roi",
    paragraph:
      "A simplified return-on-investment view frames the MRI decision the way a finance committee will ultimately evaluate it: fixed annual cost against realistic patient volume and margin per patient, with the payback period tested against both a base case and a conservative downside case.",
    bullets: [
      "Model fixed annual cost as financing/depreciation plus service contract plus staffing plus facility overhead",
      "Model contribution margin per patient as net revenue per patient minus contrast, consumables and coil/cryogen reserve",
      "Calculate break-even volume as fixed annual cost divided by contribution margin per patient",
      "Stress-test at 60-70% of theoretical capacity before approving the business case, not at optimistic full utilisation",
      "Recalculate payback whenever the service contract tier, financing structure or case mix changes materially",
    ],
    callout: {
      title: "Why this matters",
      lines: [
        "Programmes that model break-even only at optimistic utilisation are the ones most likely to face a funding crisis in year two or three.",
        "A conservative model that still clears break-even is a far stronger basis for board approval than an optimistic one that barely does.",
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Rebuild the break-even model annually",
    text: "Service contract renewal, currency movement, case-mix shifts and new competing capacity in the referral area all move the inputs to the break-even model. Treat it as a living document reviewed at least once a year, not a one-time exercise performed only at the purchase decision.",
  },
  {
    type: "h2",
    id: "financing",
    number: 13,
    text: "Financing and Lease Options",
    body: "How an MRI system is financed changes both the cash-flow profile and the effective total cost, and the right structure depends on the hospital's balance sheet and utilisation confidence, not on the equipment itself.",
  },
  {
    type: "comparison",
    title: "Common MRI financing structures",
    headers: ["Structure", "How it works", "Best suited to", "Trade-offs"],
    rows: [
      [
        "Outright capital purchase",
        "Full payment at acquisition, owned outright",
        "Hospitals with strong capital reserves and confident utilisation forecasts",
        "Largest upfront cash outlay; full residual value retained",
      ],
      [
        "Finance lease",
        "Fixed payments over a term, ownership transfers at term end",
        "Hospitals wanting predictable payments while building toward ownership",
        "Total cost over the term usually exceeds outright purchase",
      ],
      [
        "Operating lease / rental",
        "Payments for use only, system returned or refreshed at term end",
        "Hospitals wanting to preserve capital or upgrade technology on a cycle",
        "No equity built in the asset; renewal terms must be negotiated again",
      ],
      [
        "Pay-per-scan / managed service models",
        "Provider retains ownership; hospital pays per completed study",
        "Sites wanting to align cost directly with realised volume and reduce utilisation risk",
        "Per-scan cost is typically higher than owned-asset cost at high, stable volumes",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The right financing structure is a function of confidence in utilisation, not of the equipment's list price — a hospital certain of high, stable demand usually does better owning the asset outright over the medium term.",
    clinicalInterpretation: "Financing structure has no direct clinical effect, but cash-flow strain from an unsuitable structure can indirectly affect service contract tier choice and staffing levels, which do affect clinical availability.",
    hospitalRecommendation: "Match the financing structure to the confidence level in the utilisation forecast: pay-per-scan or operating lease for a new or uncertain programme, ownership or finance lease once demand is proven.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Read the residual value and refresh terms carefully",
    items: [
      "Confirm who bears the cost of a major component failure during a lease term",
      "Check whether the service contract is bundled into lease payments or billed separately",
      "Clarify the technology refresh cycle if the structure includes a mid-term upgrade option",
      "Model total cost across the full term, not just the monthly payment figure",
    ],
  },
  {
    type: "h2",
    id: "market-ranges",
    number: 14,
    text: "Indicative Market Ranges",
    body: "The figures below are indicative market ranges intended for planning conversations only; they are not quotations and vary substantially by country, currency, field strength, site condition and commercial terms.",
  },
  {
    type: "table",
    caption: "Indicative MRI lifecycle cost ranges (for planning discussion only, not a quotation)",
    headers: ["Cost category", "Indicative range", "Key variables"],
    rows: [
      ["1.5T system purchase price", "Indicative — varies widely by manufacturer, configuration and new vs refurbished status", "Field strength, bore size, coil complement, new vs refurbished"],
      ["3T system purchase price", "Indicative — typically higher than 1.5T for an equivalent configuration tier", "Advanced sequence packages, coil complement"],
      ["Site preparation and shielding", "Indicative — can range from a modest fraction to a substantial fraction of system price depending on existing shell condition", "New-build vs retrofit, structural condition, delivery access"],
      ["Annual comprehensive service contract", "Indicative — typically a mid-single-digit to low-double-digit percentage of system price per year", "Contract tier, response time terms, cryogen and coil inclusion"],
      ["Coil replacement (per major coil)", "Indicative — varies by coil family and channel count", "Coil type, technology generation"],
      ["Major software platform upgrade", "Indicative — ranges from included-in-contract to a significant separate licence fee", "Manufacturer policy, contract terms, feature set"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Every figure in this table is deliberately presented as a range for planning conversation, not as a price — actual costs must come from a specific, dated commercial quotation for the site and configuration in question.",
    clinicalInterpretation: "There is no clinical implication to these ranges directly, but under-budgeting site preparation is the most common reason a funded clinical programme is delayed after the equipment has already been ordered.",
    hospitalRecommendation: "Use these ranges only to sanity-check a quotation's completeness — confirm that site preparation, shielding, service tier and coil complement are all explicitly priced before comparing suppliers on headline system cost alone.",
  },
  {
    type: "callout",
    variant: "important",
    title: "These are indicative ranges, not prices",
    text: "Every cost figure in this article is presented as an indicative market range for budgeting conversations. Request a written, dated, site-specific quotation before making any financial commitment.",
  },
  {
    type: "h2",
    id: "budgeting-framework",
    number: 15,
    text: "Building a Five-Year Budget",
    body: "A defensible five-year MRI budget lists every cost line explicitly rather than folding site build, coils and software into a single 'other costs' contingency figure.",
  },
  {
    type: "ul",
    items: [
      "Year 0: capital purchase or lease initiation, site preparation, shielding, cooling and power upgrades, commissioning and initial applications training.",
      "Years 1-3: comprehensive service contract, consumables scaling with realised (not planned) utilisation, staffing at steady-state levels including refresher training.",
      "Years 3-5: first major coil replacement cycle, likely software platform upgrade decision point, service contract renewal negotiation, reassessment of financing structure if utilisation has outperformed or underperformed the original model.",
      "Throughout: a maintained reserve for unplanned downtime and cryogen events, sized against the break-even model rather than an arbitrary contingency percentage.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Build the budget in the same currency as major recurring costs where possible",
    text: "Service contracts and parts are frequently priced in a hard currency even when patient revenue is collected locally. Where this mismatch exists, model currency risk explicitly in the five-year budget rather than assuming today's exchange rate holds for the contract term.",
  },
  {
    type: "h2",
    id: "conclusion",
    number: 16,
    text: "Conclusion",
    body: "Total cost of ownership, not purchase price, is the number that determines whether an MRI programme is sustainable — and it rewards hospitals that plan every line item before signing, not after.",
  },
  {
    type: "p",
    text: "The scanner is the most visible line item in an MRI business case, but site preparation, shielding, cooling, power, service contracts, coils, software, staffing and consumables together usually outweigh it across the system's working life. Building a realistic, conservative break-even model before committing capital — and revisiting that model every year — is what separates hospitals that run a financially sustainable MRI service from those that discover the true cost only after the equipment has already arrived.",
  },
  {
    type: "h2",
    id: "faq",
    number: 17,
    text: "Frequently Asked Questions",
    body: "Practical answers to the cost and budgeting questions hospital finance and procurement teams ask most often.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Does the purchase price include site preparation and shielding?",
        a: "Almost never. Site preparation, RF shielding, quench venting, cooling and electrical upgrades are typically scoped and priced separately, and vary enormously depending on whether the room is new-build or a retrofit. Always request these as an explicit line item.",
      },
      {
        q: "How much does an MRI service contract typically cost per year?",
        a: "It varies by tier, but comprehensive parts-and-labour contracts are commonly quoted as a percentage of system price per year, with full-cover contracts including cryogen and coils priced higher. Treat any figure quoted elsewhere as indicative until confirmed in writing for the specific system.",
      },
      {
        q: "Do modern MRI scanners still need helium top-ups?",
        a: "Many modern zero-boil-off and low-helium magnet designs hold a sealed helium volume for the system's life and rarely need top-ups under normal operation. Older designs and post-quench refills still require substantial helium handling, which should be addressed explicitly in the service contract.",
      },
      {
        q: "How often do MRI receive coils need replacing?",
        a: "High-utilisation coils commonly need replacement or major repair within five to eight years of continuous clinical use, sooner with heavy use or handling damage. Cable fatigue from repeated flexing is the leading failure mode, so a replacement reserve should be planned from commissioning.",
      },
      {
        q: "Is a refurbished MRI system a good way to reduce total cost of ownership?",
        a: "A well-certified refurbished system can meaningfully reduce capital cost, but the same site preparation, shielding, service contract and coil budgeting still apply in full. Request documentation of what was replaced, tested and certified before assuming any component is under fresh warranty.",
      },
      {
        q: "What is the biggest hidden cost in an MRI project?",
        a: "Site preparation is the cost most frequently under-budgeted, because it depends on the existing building rather than the scanner model. A structural, delivery-route and fringe-field survey performed before the tender closes is the best protection against this.",
      },
      {
        q: "How is downtime cost actually calculated?",
        a: "Downtime cost should be modelled as lost contribution margin from cancelled patient slots plus the risk of referral leakage to competing facilities, not just the engineer call-out fee. This is usually larger than hospitals initially estimate and is a strong argument for investing in cooling and power redundancy.",
      },
      {
        q: "What utilisation level is needed to reach break-even?",
        a: "Break-even volume depends on fixed cost structure and margin per patient, but a conservative model should be built at 60-70% of theoretical daily slot capacity, not full capacity. If break-even still clears at that conservative level, the business case is materially stronger.",
      },
      {
        q: "Should software upgrades be assumed to be free under a service contract?",
        a: "No. Major platform version upgrades and advanced feature licences such as deep-learning reconstruction are frequently sold separately from the base service contract. Confirm the licensing model in writing before assuming an upgrade is included.",
      },
      {
        q: "Is leasing or purchasing outright cheaper over five years?",
        a: "It depends on confidence in utilisation. Outright purchase or a finance lease usually produces a lower total cost at high, stable, proven demand, while an operating lease or pay-per-scan model better protects a hospital with an uncertain or new referral base, at a higher cost per scan.",
      },
      {
        q: "How much staffing does a single MRI scanner realistically require?",
        a: "A single shift typically needs a trained technologist team plus radiologist reporting capacity matched to volume, with applications training refreshed periodically. Adding a second shift to raise throughput generally requires a second technologist team, not just extended hours for the same staff.",
      },
      {
        q: "What happens financially if a quench occurs outside the service contract's cryogen cover?",
        a: "A quench without cryogen cover exposes the hospital to a substantial helium re-fill cost plus a specialist re-ramp and re-shim service call, on top of the clinical downtime while the system is unavailable. This is the strongest argument for including cryogen cover in the service tier for a single-scanner site.",
      },
      {
        q: "Do consumable costs vary significantly between hospitals with the same scanner?",
        a: "Yes. Consumables track referral case mix, not scanner model — a department weighted toward contrast-heavy oncology and angiography work will spend meaningfully more per patient on contrast agents than one weighted toward musculoskeletal and neurological imaging.",
      },
    ],
  },
  {
    type: "referenceGroups",
    note: "References are provided for professional orientation. Always follow the current edition of each standard, the applicable national regulations, and the manufacturer's instructions for use for your specific system.",
    groups: [
      {
        title: "Medical guidelines",
        items: [
          { label: "American College of Radiology. ACR Manual on MR Safety." },
          { label: "ACR-NASCI-SPR. Practice Parameter for the Performance and Interpretation of Magnetic Resonance Imaging." },
        ],
      },
      {
        title: "Scientific publications",
        items: [
          { label: "Peer-reviewed radiology and health-economics literature on MRI utilisation, throughput and cost-effectiveness (see RSNA and ISMRM journal archives)." },
        ],
      },
      {
        title: "Regulatory authorities",
        items: [
          { label: "U.S. Food and Drug Administration (FDA). Medical device regulatory guidance for MRI systems." },
          { label: "UK Medicines and Healthcare products Regulatory Agency (MHRA). Guidance on MRI safety and equipment management." },
        ],
      },
      {
        title: "International standards",
        items: [
          { label: "IEC 60601-2-33. Particular requirements for the basic safety and essential performance of magnetic resonance equipment for medical diagnosis." },
          { label: "EU Medical Device Regulation (MDR) 2017/745." },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          { label: "Manufacturer site planning guides and instructions for use (IFU) for the specific MRI platform under consideration." },
        ],
      },
      {
        title: "Medical societies",
        items: [
          { label: "European Society of Radiology (ESR). Position papers on imaging service sustainability and equipment lifecycle." },
          { label: "International Society for Magnetic Resonance in Medicine (ISMRM)." },
        ],
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning an MRI budget beyond the purchase price?",
    subheading:
      "Our biomedical engineers and applications team help hospitals model site preparation, service contract tiers, coil and software lifecycle, and realistic break-even utilisation before capital is committed.",
    technology: "MRI",
  },
];
