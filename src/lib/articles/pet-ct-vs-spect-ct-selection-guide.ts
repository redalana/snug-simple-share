/**
 * PET/CT vs SPECT/CT selection guide — PET/CT cluster (comparison).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PET_CT_VS_SPECT_CT_TOC: TocItem[] = [
  { id: "overview", title: "Two Different Physics, Two Different Services" },
  { id: "physics", title: "How Each Modality Forms an Image" },
  { id: "comparison", title: "Side-by-Side Comparison" },
  { id: "clinical", title: "Where Each One Is the Right Answer" },
  { id: "infrastructure", title: "Infrastructure and Supply Chain" },
  { id: "economics", title: "Economics and Utilisation" },
  { id: "decision", title: "A Decision Framework" },
  { id: "sequencing", title: "Sequencing: Which One First" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PET_CT_VS_SPECT_CT_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Hospitals building a nuclear medicine service usually have to decide between SPECT/CT and PET/CT, or decide which of them to acquire first. The two are often discussed as if PET/CT were simply the better version of SPECT/CT. They are not the same kind of investment.",
      "They use different radionuclides, different detection physics, different supply chains, different licensing burdens and different staffing. Each answers clinical questions the other answers poorly, and each fails in a different way when the surrounding infrastructure is not in place.",
      "This guide compares the two on physics, clinical capability, infrastructure, supply chain and economics, then sets out a decision framework and a sequencing recommendation for services building capability from a low base.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Detection physics, quantification, clinical indications, tracer supply chain, licensing and shielding, staffing, cost of ownership, decision framework and acquisition sequencing",
    audience:
      "Hospital executives, nuclear medicine and radiology leads, medical physicists, biomedical engineers and healthcare planners",
    readingTime: "15 min read",
    technology: "PET/CT Scanners",
  },
  {
    type: "h2",
    id: "overview",
    text: "Two Different Physics, Two Different Services",
    number: 1,
    body: "Both modalities image the distribution of an injected radiopharmaceutical and fuse it with CT for anatomy and attenuation correction. That is where the similarity ends.",
  },
  {
    type: "ul",
    items: [
      "SPECT/CT detects single gamma photons emitted by radionuclides such as technetium-99m, using collimated detector heads that rotate around the patient.",
      "PET/CT detects pairs of 511 keV photons produced when a positron annihilates, using a full ring of detectors and electronic coincidence timing instead of physical collimation.",
      "PET's coincidence detection gives far higher sensitivity and better spatial resolution; SPECT's collimation discards most emitted photons by design.",
      "SPECT radiopharmaceuticals are generally longer-lived and easier to supply; most PET tracers have half-lives measured in minutes to a couple of hours.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Collimation is the fundamental difference",
    text: "A SPECT collimator determines direction by absorbing every photon that does not arrive along an accepted path — which means throwing away the overwhelming majority of the signal. PET establishes direction electronically, by timing two photons that arrive together. That single design difference explains PET's higher sensitivity, its shorter acquisitions and its far higher hardware cost.",
  },
  {
    type: "h2",
    id: "physics",
    text: "How Each Modality Forms an Image",
    number: 2,
    body: "Understanding the mechanism explains the capability differences, and also the failure modes each system exhibits in service.",
  },
  {
    type: "table",
    headers: ["Aspect", "SPECT/CT", "PET/CT"],
    rows: [
      ["Emission", "Single gamma photon", "Two 511 keV photons emitted back to back"],
      ["Direction determination", "Physical lead collimator", "Electronic coincidence detection"],
      ["Detector geometry", "One to three rotating heads", "Full detector ring, multiple rings axially"],
      ["Typical spatial resolution", "Coarser; dependent on collimator and distance", "Finer, and largely independent of position within the field"],
      ["Sensitivity", "Low — most photons rejected by collimation", "High — no physical collimation loss"],
      ["Quantification", "Possible with modern systems and careful correction", "Routine and standardised through SUV"],
      ["Typical acquisition time", "Longer per field of view", "Shorter per bed position, but with an uptake wait beforehand"],
      ["CT role", "Attenuation correction and localisation", "Attenuation correction, localisation, optionally diagnostic CT"],
    ],
  },
  {
    type: "h2",
    id: "comparison",
    text: "Side-by-Side Comparison",
    number: 3,
    body: "For a procurement decision the relevant comparison is not resolution alone but the whole service each modality requires and delivers.",
  },
  {
    type: "comparison",
    title: "SPECT/CT vs PET/CT as hospital services",
    headers: ["Dimension", "SPECT/CT", "PET/CT"],
    rows: [
      ["Capital cost", "Substantially lower", "Substantially higher"],
      ["Room and shielding", "Conventional nuclear medicine room and hot lab", "Controlled area designed for 511 keV, uptake rooms, dedicated patient toilet, decay store"],
      ["Tracer supply", "Generator-based or regionally delivered; hours to days of usable life", "Cyclotron-dependent delivery on a fixed daily schedule; minutes to hours of usable life"],
      ["Missed delivery consequence", "Often rescheduled within the day", "Session lost; activity cannot be stored"],
      ["Staffing", "Nuclear medicine technologists and physician time", "Same, plus tighter scheduling discipline and greater physics support"],
      ["Throughput per session", "Moderate; long acquisitions", "High acquisition speed, limited by uptake room capacity"],
      ["Breadth of routine indications", "Bone, cardiac perfusion, renal, thyroid, parathyroid, lymphatic, infection", "Oncology staging and response, PSMA and receptor imaging, cardiac viability, neurology"],
      ["Quantitative response reporting", "Limited routine role", "Core clinical product"],
      ["Service and maintenance", "Lower complexity, fewer detector channels", "Detector ring, coincidence electronics and cooling dependency"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The decisive difference in practice is not image quality but supply chain rigidity. A SPECT service tolerates a delayed delivery; a PET service loses the session.",
    clinicalInterpretation:
      "PET/CT is the modality of choice for oncology staging, response assessment and receptor-targeted imaging. SPECT/CT remains the workhorse for bone, perfusion, renal, endocrine and infection imaging, and is often the higher-volume service.",
    hospitalRecommendation:
      "Do not treat these as alternatives competing for one budget line. Establish which clinical questions your case mix actually generates, verify tracer supply feasibility, and sequence the acquisitions accordingly.",
  },
  {
    type: "h2",
    id: "clinical",
    text: "Where Each One Is the Right Answer",
    number: 4,
    body: "The clinical division of labour is well established internationally, and it should drive the decision far more than a specification comparison.",
  },
  {
    type: "table",
    headers: ["Clinical question", "Preferred modality", "Reason"],
    rows: [
      ["Oncology staging and restaging of most solid tumours", "PET/CT", "Whole-body metabolic survey with quantifiable, comparable measurements"],
      ["Treatment response assessment", "PET/CT", "Metabolic change precedes anatomical change and is graded with established criteria"],
      ["Prostate cancer recurrence localisation", "PET/CT", "Receptor-targeted tracers detect small-volume disease"],
      ["Neuroendocrine tumour receptor imaging and therapy selection", "PET/CT", "Somatostatin-receptor imaging supports theranostic pathways"],
      ["Bone metastasis screening in high-volume, cost-sensitive settings", "SPECT/CT", "Bone scintigraphy remains an efficient, widely available survey"],
      ["Myocardial perfusion imaging", "SPECT/CT", "Established, high-throughput, well-reimbursed and widely staffed"],
      ["Renal function and drainage assessment", "SPECT/CT", "Dedicated dynamic renal agents with no PET equivalent in routine use"],
      ["Thyroid and parathyroid localisation", "SPECT/CT", "Established agents and protocols; hybrid CT localisation for surgical planning"],
      ["Sentinel node and lymphatic mapping", "SPECT/CT", "Standard technique in surgical planning"],
      ["Prosthetic joint and orthopaedic infection", "SPECT/CT", "Labelled leucocyte and bone-marrow techniques"],
      ["Cardiac viability where perfusion imaging is equivocal", "PET/CT", "Metabolic assessment of viable but hypoperfused myocardium"],
      ["Dementia differentiation and epilepsy focus localisation", "PET/CT", "Metabolic brain imaging with better resolution and quantification"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "They are complements, not substitutes",
    text: "In mature services SPECT/CT usually carries the larger patient volume while PET/CT carries the higher-value oncology decisions. A hospital that replaces a planned SPECT/CT with a PET/CT does not upgrade its nuclear medicine service — it removes routine capability and adds a service it may not yet be able to supply with tracer.",
  },
  {
    type: "h2",
    id: "infrastructure",
    text: "Infrastructure and Supply Chain",
    number: 5,
    body: "This is where PET/CT projects most often fail, and where the difference between the two modalities is largest.",
  },
  {
    type: "ul",
    items: [
      "Shielding — SPECT/CT works within conventional nuclear medicine shielding; PET requires a design for 511 keV photons in which the injected patient is a significant mobile source.",
      "Room programme — PET requires uptake rooms, a dedicated injected-patient toilet and a decay store; uptake capacity, not scan speed, sets daily throughput.",
      "Hot lab — both need one, but PET dispensing works against a decaying clock and demands tighter workflow and higher shielding at the L-block.",
      "Tracer supply — SPECT often uses a generator or a delivery with hours of useful life; PET depends on a cyclotron supply route whose transit time consumes a measurable fraction of the tracer.",
      "Cooling — the PET detector ring and reconstruction hardware require resilient technical-room cooling, a leading cause of downtime in hot climates.",
      "Licensing and physics — both need an unsealed-source licence and physics support; PET requires more of both, and PET licence review commonly takes longer than the building work.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Verify tracer supply before signing for PET/CT",
    text: "A PET/CT with no reliable route to same-day tracer is an idle asset. Confirm in writing the supplying cyclotron, delivery schedule, transit time, contingency arrangements on a failed batch, and the tracer portfolio available beyond FDG. This is a documented supply agreement, not a verbal assurance.",
  },
  {
    type: "h2",
    id: "economics",
    text: "Economics and Utilisation",
    number: 6,
    body: "The two modalities have different cost structures, not just different price tags.",
  },
  {
    type: "table",
    headers: ["Cost element", "SPECT/CT", "PET/CT"],
    rows: [
      ["Capital", "Lower", "Higher, with a wide range driven by detector technology and axial coverage"],
      ["Construction and shielding", "Moderate", "High — controlled area, uptake rooms, decay store, cooling plant"],
      ["Consumable per study", "Lower tracer cost, longer shelf life", "Higher tracer cost, no shelf life, dose lost to decay"],
      ["Annual service contract", "Lower", "Higher; detector and electronics cover matters"],
      ["Staffing", "Established technologist model", "Similar staffing with tighter scheduling and greater physics input"],
      ["Utilisation risk", "Wasted capacity", "Wasted capacity plus wasted tracer on every no-show"],
      ["Revenue per study", "Lower", "Higher where PET/CT is reimbursed"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "The no-show cost is asymmetric",
    text: "When a SPECT patient does not attend, capacity is lost. When a PET patient does not attend, the dispensed activity is also lost and cannot be reused. Confirmation calls, transport coordination and realistic scheduling therefore have direct financial value in a PET service.",
  },
  {
    type: "h2",
    id: "decision",
    text: "A Decision Framework",
    number: 7,
    body: "Work through these questions in order. The first negative answer usually settles the decision.",
  },
  {
    type: "ul",
    items: [
      "Case mix — how many oncology staging and response studies per week does your actual referral base generate, and how many bone, perfusion, renal and endocrine studies?",
      "Tracer supply — is there a documented same-day delivery route for PET tracer, with contingency? If not, PET/CT is premature regardless of clinical demand.",
      "Estate — can a controlled area with uptake rooms, dedicated toilet and decay store be built, and will the structure and delivery route accept the equipment?",
      "Licensing timeline — how long will the regulator take, and does that fit the project programme?",
      "Workforce — are nuclear medicine physician, technologist and medical physics capacity available, or must they be recruited and trained first?",
      "Reimbursement — is PET/CT reimbursed in your market at a level that supports the tracer and service cost?",
      "Service cover — is a manufacturer-authorised engineering and parts capability reachable within an acceptable response time?",
    ],
  },
  {
    type: "h2",
    id: "sequencing",
    text: "Sequencing: Which One First",
    number: 8,
    body: "For a hospital building nuclear medicine capability from a low base, sequence matters more than choice.",
  },
  {
    type: "ul",
    items: [
      "Start with SPECT/CT when there is no existing nuclear medicine service. It establishes the licence, the hot lab, the radiation protection programme, the technologist workforce and the referral habit at far lower risk.",
      "Add PET/CT once tracer supply is contractually secured, oncology referral volume is demonstrated, and physics and technologist capacity exist.",
      "Choose PET/CT first only when the service is explicitly an oncology centre with committed referral volume and a secured tracer route — for example a hospital co-located with, or contracted to, a cyclotron.",
      "Plan the PET suite footprint during the SPECT project where the estate allows, so the later installation does not require rebuilding what was just completed.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is PET/CT simply better than SPECT/CT?",
        a: "No. PET/CT has higher sensitivity, finer resolution and routine quantification, which makes it the modality of choice for oncology staging, response assessment and receptor-targeted imaging. SPECT/CT remains the appropriate and usually higher-volume modality for bone, myocardial perfusion, renal, thyroid, parathyroid, lymphatic and infection imaging, for which there is no routine PET equivalent in most services.",
      },
      {
        q: "Why is PET more sensitive?",
        a: "SPECT determines the direction of an emitted photon with a physical lead collimator, which absorbs the vast majority of photons. PET determines direction electronically by detecting the two 511 keV photons produced in each annihilation event in coincidence, so it does not discard the signal to establish geometry.",
      },
      {
        q: "Can one hybrid system do both?",
        a: "No. The detector geometry, electronics and timing requirements are fundamentally different. Services that need both capabilities purchase both systems, usually within one nuclear medicine department that shares the hot lab, licence and staffing.",
      },
      {
        q: "Which is cheaper to run?",
        a: "SPECT/CT, on essentially every line: lower capital, simpler shielding, cheaper and longer-lived tracers, lower service contract cost and less exposure to wasted dose. PET/CT can still be the better investment where oncology volume and reimbursement support it.",
      },
      {
        q: "What is the single biggest risk in a PET/CT project?",
        a: "Tracer supply. Most PET tracers cannot be stored, so a system without a reliable same-day delivery route and a documented contingency arrangement will sit idle for reasons that have nothing to do with the scanner.",
      },
      {
        q: "Does SPECT/CT allow quantification?",
        a: "Modern SPECT/CT systems with CT-based attenuation, scatter and resolution correction do support quantitative measurement, and it is used in specific applications such as dosimetry. It is not, however, the routine standardised clinical currency that SUV has become in PET reporting.",
      },
      {
        q: "If we can only build one room now, which should it be?",
        a: "For a hospital with no existing nuclear medicine service, SPECT/CT — it establishes the licence, hot lab, workforce and referral base at lower risk. PET/CT first is justified when the service is explicitly an oncology centre with demonstrated referral volume and a secured tracer supply.",
      },
      {
        q: "Do the two share infrastructure?",
        a: "Partly. Licence, radiation protection programme, hot lab, waste handling and staffing can be shared within one department, which is a real argument for planning both in one estate strategy. PET still requires its own controlled area, uptake rooms, dedicated patient toilet and shielding designed for 511 keV.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Deciding between SPECT/CT and PET/CT?",
    subheading:
      "AbuFarha Medical supplies, installs, commissions and supports nuclear medicine imaging systems, and helps hospital teams test tracer supply, estate and workforce feasibility before they commit.",
    technology: "PET/CT Scanners",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Nuclear medicine service planning" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Hybrid imaging installation and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "International professional-society guidance and hybrid imaging installation practice",
    disclaimer:
      "Clinical indications, licensing requirements and reimbursement differ by country. This comparison describes internationally recognised practice and must be applied against national regulation and local service conditions.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Clinical guidance",
        items: [
          { label: "EANM and SNMMI procedure guidelines for PET/CT and SPECT/CT imaging" },
          { label: "National appropriate-use guidance for hybrid nuclear medicine imaging" },
        ],
      },
      {
        title: "Performance standards",
        items: [
          { label: "NEMA NU 2 — performance measurements of positron emission tomographs" },
          { label: "NEMA NU 1 — performance measurements of gamma cameras" },
        ],
      },
      {
        title: "Facility and radiation protection",
        items: [
          { label: "IAEA guidance on nuclear medicine facility design and radiation protection" },
          { label: "Manufacturer pre-installation, shielding and cooling documentation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as guidance is revised.",
  },
  {
    type: "takeaways",
    items: [
      "PET and SPECT differ in detection physics: electronic coincidence versus physical collimation, which explains PET's higher sensitivity and cost.",
      "PET/CT owns oncology staging, response assessment and receptor-targeted imaging; SPECT/CT owns bone, perfusion, renal, endocrine, lymphatic and infection imaging.",
      "They are complements rather than substitutes, and mature departments run both.",
      "PET's decisive constraint is tracer supply — an unstorable consumable on a fixed daily schedule.",
      "PET requires a controlled area designed for 511 keV, uptake rooms, a dedicated patient toilet and a decay store; uptake capacity sets throughput.",
      "For a service starting from zero, SPECT/CT first establishes licence, hot lab, workforce and referrals at lower risk.",
      "PET/CT first is justified for dedicated oncology centres with proven volume and a contracted tracer route.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "The choice between SPECT/CT and PET/CT is a service design decision, not a specification contest. Each modality answers a different set of clinical questions and imposes a different operational discipline.",
  },
  {
    type: "p",
    text: "Hospitals that decide on the basis of case mix, tracer supply feasibility, estate, licensing timeline and workforce end up with systems that run. Hospitals that decide on the basis of which technology sounds more advanced end up with an expensive room waiting for a delivery that was never contracted.",
  },
];
