import type { ContentBlock, TocItem } from "@/lib/blog";
import solMri from "@/assets/sol-mri.jpg";

export const MRI_INSTALLATION_AND_COMMISSIONING_TOC: TocItem[] = [
  { id: "overview", title: "From Purchase Order to First Patient" },
  { id: "project-timeline", title: "The Realistic Project Timeline" },
  { id: "pre-installation-survey", title: "The Pre-Installation Survey" },
  { id: "logistics-rigging", title: "Logistics and Rigging: Moving a Magnet" },
  { id: "magnet-placement", title: "Magnet Placement and Room Closure" },
  { id: "ramping", title: "Ramping the Magnet" },
  { id: "shimming", title: "Shimming: Making the Field Uniform" },
  { id: "rf-shield-testing", title: "RF Shield Integrity Testing" },
  { id: "acceptance-testing", title: "Acceptance Testing and Phantom QA" },
  { id: "accreditation-prep", title: "ACR-Style Accreditation Preparation" },
  { id: "applications-training", title: "Applications Training and Protocol Build" },
  { id: "competency-signoff", title: "Staff Competency Sign-Off" },
  { id: "handover-documentation", title: "Handover Documentation" },
  { id: "warranty-start", title: "Warranty Start and First Patient" },
  { id: "delays", title: "Typical Delays and How to Avoid Them" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MRI_INSTALLATION_AND_COMMISSIONING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solMri,
    imageAlt: "MRI magnet being positioned into a hospital imaging suite during installation",
    paragraphs: [
      "Buying an MRI scanner is a procurement decision. Getting it from the delivery truck to a functioning, accredited clinical service is a project — one that typically runs eight to sixteen weeks after the magnet reaches site, involves structural engineers, riggers, cryogen specialists, RF shielding contractors, physicists and applications trainers, and can fail at any one of a dozen handoff points. Hospitals that treat installation as a footnote to the purchase contract are the ones that experience the longest, costliest delays.",
      "This guide walks through the sequence AbuFarha Medical follows on every MRI installation and commissioning project: the pre-installation survey that should happen before a purchase order is even signed, the physical logistics of moving a several-tonne superconducting magnet into a hospital, the ramping and shimming process that turns an inert cylinder into a working field, the shield-integrity and phantom testing that prove the room and the system meet specification, and the training and sign-off steps that stand between a technically working scanner and one a hospital is actually permitted, and competent, to use on patients.",
      "None of this is exotic. It is disciplined, sequential project management applied to a piece of equipment that is unforgiving of shortcuts — a magnet that is ramped cannot simply be paused, a shield that leaks by a few decibels will show up as artefact on every scan, and a technologist who has not been signed off on a protocol should not be running it independently. Understanding the sequence, and where projects usually lose weeks, is what lets a hospital plan realistically and negotiate its contract terms with its eyes open.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Installation project timeline, site survey, rigging and logistics, magnet ramping and shimming, RF shield testing, acceptance testing, accreditation preparation, training and handover",
    audience:
      "Hospital project managers, radiology department heads, facilities engineers, biomedical engineers and procurement teams",
    readingTime: "17 min read",
    technology: "Magnetic Resonance Imaging (MRI)",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "From Purchase Order to First Patient",
    body: "An MRI installation is a defined sequence of civil, mechanical, cryogenic, electromagnetic and clinical milestones, each of which gates the next — meaning a delay anywhere in the chain delays the scan date, not just that one task.",
  },
  {
    type: "ul",
    items: [
      "The critical path usually runs through civil works and shielding, not through the scanner itself — magnets ship on a known schedule, but room construction, structural reinforcement and power upgrades are frequently the true bottleneck and are the items least visible to a hospital board.",
      "Ramping and shimming are largely fixed-duration physics, not schedule-compressible tasks; pushing to shorten them risks a poorly shimmed field that shows up months later as inconsistent image quality across protocols.",
      "The single most underestimated task on the entire project is applications training and protocol build — a scanner can be clinically and electromagnetically perfect and still deliver poor diagnostic yield for months if technologists are only given generic factory protocols.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "The pre-installation survey belongs before the purchase order, not after — it determines room feasibility, cost and true delivery date.",
      "Rigging and magnet placement are a one-time, largely irreversible event; route and floor-loading verification must be done in person, not from drawings alone.",
      "Ramping is quick; shimming and RF-shield verification are the steps that actually determine long-term image quality.",
      "Acceptance testing against manufacturer and NEMA/ACR specification, not a subjective 'it looks fine', is what should trigger payment milestones and warranty start.",
      "Accreditation readiness (ACR-style phantom QA, protocol documentation) should be built into commissioning, not treated as a separate project afterwards.",
      "Staff competency sign-off, not merely attendance at training, should gate independent scanning — untrained staff are the leading cause of early clinical incidents.",
      "Most real-world delays originate in civil works, power supply and customs/logistics — plan float into the schedule for these, not for the scanner itself.",
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
    id: "project-timeline",
    number: 2,
    text: "The Realistic Project Timeline",
    body: "A typical MRI installation, from signed purchase order to first patient scan, runs four to nine months depending on whether the room already exists, with roughly eight to sixteen weeks between magnet delivery and clinical go-live.",
  },
  {
    type: "table",
    caption: "Typical MRI installation and commissioning timeline",
    headers: ["Phase", "Typical duration", "Key dependency"],
    rows: [
      ["Pre-installation survey and room design", "2–4 weeks", "Access to as-built drawings and a site visit"],
      ["Civil works: shielding, floor reinforcement, power, HVAC", "6–14 weeks", "Longest and most variable phase; often the true critical path"],
      ["Manufacturing, shipping and customs clearance", "8–16 weeks", "Runs in parallel with civil works when planned correctly"],
      ["Delivery, rigging and magnet placement", "1–3 days", "Verified route, crane access and floor loading"],
      ["Ramping", "1–2 days", "Cryogen delivery and cold-head stabilisation"],
      ["Shimming (passive and active)", "2–5 days", "Stable ambient conditions and completed room closure"],
      ["RF shield integrity and EMI testing", "1–2 days", "Room fully closed, doors and waveguides fitted"],
      ["Acceptance testing and phantom QA", "3–5 days", "Manufacturer service engineer and physicist availability"],
      ["Applications training and protocol build", "2–4 weeks", "Radiologist and technologist availability on site"],
      ["Accreditation preparation (if pursued)", "4–8 weeks, can overlap training", "Accreditation body phantom scan scheduling"],
      ["Competency sign-off and handover", "3–5 days", "Completion of training and successful supervised scans"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Civil works and customs clearance are the two phases with the widest variance, and both can run in parallel with the roughly ten to fourteen weeks it typically takes to manufacture or refurbish and ship a system — a hospital that starts civil works only after the magnet arrives has planned the project in the wrong order.",
    clinicalInterpretation: "Every week saved in the clinical phases (training, protocol build) is a week the department is scanning revenue-generating patients with confidence; rushing these phases instead saves little time and creates a longer tail of image-quality and safety issues.",
    hospitalRecommendation: "Contract for a single named project manager who owns the whole sequence end to end, and require a written, dated milestone schedule as part of the purchase agreement — not a general assurance that installation will be 'coordinated'.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Run civil works and manufacturing in parallel",
    text: "Because room construction and system manufacturing/shipping take comparable time, the two should start on the same day the contract is signed, not sequentially. Hospitals that wait for the scanner to arrive before beginning shielding and power works routinely lose two to three months for no engineering reason.",
  },
  {
    type: "h2",
    id: "pre-installation-survey",
    number: 3,
    text: "The Pre-Installation Survey",
    body: "The site survey is a structured engineering assessment — structural, electrical, magnetic and logistical — that should be completed before the purchase order is finalised, not after.",
  },
  { type: "h3", text: "What the survey checks" },
  {
    type: "p",
    text: "A competent MRI site survey covers floor loading capacity along the entire delivery route and at the final resting point (a typical 1.5T magnet weighs 3.5 to 5.5 tonnes, more with shielding); the delivery path itself, including door widths, corridor turning radii, lift capacity or the need for a crane and building-envelope opening; existing or planned RF shielding continuity; separation from vibration sources such as lifts, generators and heavy traffic; and stray-field mapping to confirm the 0.5 mT (5 gauss) exclusion line falls within controlled space, both within the building and, importantly, on adjacent floors above and below.",
  },
  {
    type: "p",
    text: "It also verifies electrical supply (typically a dedicated three-phase feed with defined short-circuit capacity and harmonic limits), chilled-water or dedicated air-cooling capacity for the gradient and RF systems, HVAC sized for the equipment room heat load, and a viable route for the helium quench pipe to atmosphere at a safe location away from air intakes and pedestrian areas.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Survey before, not after, purchase",
    text: "A survey performed after a purchase order is signed can only tell a hospital what it will cost to make an unsuitable room work — sometimes materially more than the scanner itself once structural reinforcement, an oversized power upgrade or a longer quench run is required. Surveying before committing capital lets the hospital either fix the room's economics into the decision or select a different location.",
  },
  {
    type: "requirements",
    checklist: [
      "Confirmed floor loading along the full delivery route and at final position",
      "Verified delivery path: door widths, corridor turns, lift or crane access",
      "Stray-field (5 gauss line) mapping including floors above and below",
      "Dedicated three-phase power supply sized to peak gradient duty cycle",
      "Chilled-water or air-cooling capacity for gradient and RF electronics",
      "Viable, code-compliant quench pipe route to a safe exterior discharge point",
      "Confirmed continuous RF shielding plan with no unaccounted penetrations",
    ],
    specs: {
      title: "Typical 1.5T siting envelope",
      rows: [
        { label: "Magnet room clear area", value: "~30–35 m²" },
        { label: "Equipment room", value: "~15–20 m²" },
        { label: "Magnet weight (unshielded)", value: "3.5–5.5 tonnes" },
        { label: "Minimum ceiling height for rigging", value: "Manufacturer-specific, verify in survey" },
        { label: "Dedicated power supply", value: "Three-phase, manufacturer-specified kVA" },
      ],
    },
  },
  {
    type: "h2",
    id: "logistics-rigging",
    number: 4,
    text: "Logistics and Rigging: Moving a Magnet",
    body: "Delivering a superconducting magnet is a one-time, largely irreversible logistics event that must be planned to centimetre-level tolerance well before the delivery date.",
  },
  {
    type: "p",
    text: "Depending on the building, the magnet arrives by flatbed and is moved on air skates or a hydraulic dolly through a verified corridor route, lifted by crane through a temporary building-envelope opening, or, in ground-floor or purpose-built sites, rolled directly into position. Each method requires its own permits, road closures or crane certifications, and all must be confirmed with the actual rigging contractor — not assumed from architectural drawings, which frequently omit as-built obstructions such as relocated ductwork, sprinkler heads or structural columns.",
  },
  {
    type: "p",
    text: "A pre-rigging walk-through with the crane or rigging team, the manufacturer's field engineer and hospital facilities staff should happen at least two weeks before delivery, confirming exact dimensions, temporary protection of finished floors and walls, and a fallback plan if weather or an access obstruction forces a delay.",
  },
  {
    type: "diagram",
    id: "hospital-workflow",
    title: "How an MRI installation project intersects hospital operations",
    purpose: "Shows how installation activities — delivery, rigging, ramping, testing, training — sequence against ongoing hospital operations and departmental readiness, so project managers can plan around live clinical areas.",
    alt: "Workflow diagram showing parallel tracks: hospital operations (department scheduling, staff rostering, patient communication) running alongside the installation project track (site preparation, delivery and rigging, ramping and shimming, testing, training), converging at a go-live milestone before first patient scan.",
    caption: "Figure 1 — Hospital workflow during installation. Departmental readiness (staffing, scheduling, referrer communication) must converge with technical readiness at the same go-live date.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "The most common rigging mistake",
    items: [
      "Relying on architectural drawings instead of a physical route walk-through",
      "Not confirming floor loading at intermediate points, only at the final resting position",
      "Scheduling delivery before shielding and structural works are actually complete",
      "Failing to protect finished flooring, lifts and door frames during transit",
      "Not having a documented contingency plan if the primary delivery route is blocked on the day",
    ],
  },
  {
    type: "h2",
    id: "magnet-placement",
    number: 5,
    text: "Magnet Placement and Room Closure",
    body: "Once positioned, the magnet is precisely levelled and aligned to the room's magnetic and structural reference points before shielding, gradient coils and RF hardware are finally closed up around it.",
  },
  {
    type: "p",
    text: "Placement tolerance is tight — typically a few millimetres — because the shim set, gradient coil housing and RF body coil are all manufactured to fit a specific magnet position within the room. After placement, the copper or steel RF shield is closed, waveguides and filtered penetrations for power, network and medical gas lines are sealed, and the room is pressure- and continuity-tested before any electromagnetic commissioning begins.",
  },
  {
    type: "callout",
    variant: "important",
    title: "Room closure is a gate, not a formality",
    text: "No ramping, shimming or RF testing can proceed until the room is fully closed and shield continuity is verified. Attempting to shortcut this sequence to save time on a compressed schedule almost always produces a system that must be re-shimmed or re-shielded later, at greater cost.",
  },
  {
    type: "h2",
    id: "ramping",
    number: 6,
    text: "Ramping the Magnet",
    body: "Ramping is the process of energising the superconducting windings to their operating field strength by injecting current while the magnet is cooled to liquid-helium temperature, after which the current flows persistently with no further power input.",
  },
  {
    type: "p",
    text: "Before ramping, the cryostat is cooled by the cold head over roughly 24 to 48 hours, and liquid helium is topped up to the required level (sealed, low-helium magnets arrive largely pre-filled from the factory). The manufacturer's field engineer then injects current in controlled steps, monitoring voltage, temperature and pressure at each stage, until the magnet reaches full field — typically 1.5T or 3T. The ramp itself usually takes a matter of hours, though the surrounding cryogenic stabilisation adds a day or two either side.",
  },
  {
    type: "p",
    text: "Once ramped, the magnet is never powered down again during normal operation. A deliberate rundown is only performed for major service work or relocation, and an uncontrolled loss of field — a quench — is an abnormal event that vents helium through the quench pipe and requires a full, costly re-ramp.",
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Oxygen monitoring must be live before ramping",
    text: "Because a quench releases a large volume of helium gas that displaces oxygen, the room's oxygen-deficiency monitor and quench-vent path must be tested and functional before the magnet is ramped, not scheduled as a later task. This is a life-safety control, not a commissioning nicety.",
  },
  {
    type: "h2",
    id: "shimming",
    number: 7,
    text: "Shimming: Making the Field Uniform",
    body: "Shimming corrects small field distortions caused by the building's steel, the magnet's own manufacturing tolerances and local ferromagnetic objects, so the field is uniform enough across the imaging volume to produce distortion-free images.",
  },
  {
    type: "p",
    text: "Passive shimming uses small steel shim trays inserted into the magnet bore at calculated positions to compensate for gross inhomogeneity; active shimming then uses the built-in shim coils, driven by small currents, to fine-tune the field further, often automatically recalculated for each patient and each scan volume during routine use. Site-level passive and active shimming, however, is a one-time calibration performed at commissioning, mapping the field with a probe or phantom and iterating corrections until homogeneity falls within the manufacturer's specified parts-per-million tolerance across the imaging volume.",
  },
  {
    type: "p",
    text: "Shimming is sensitive to the surrounding steel structure of the building, so it must be performed after the room is in its final state — including any structural steel, door hardware and fixed equipment — and it is one of the reasons a magnet cannot simply be shimmed once at the factory and assumed correct on site.",
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Poor shimming shows up as fat-suppression failure",
    text: "Field inhomogeneity is often invisible on a basic image but degrades fat-saturation and spectroscopic sequences first, because these techniques depend on a precise frequency separation between fat and water signal. Inconsistent fat suppression across the field of view months after installation is a classic, underappreciated symptom of an incomplete site shim.",
  },
  {
    type: "h2",
    id: "rf-shield-testing",
    number: 8,
    text: "RF Shield Integrity Testing",
    body: "The magnet room must function as a continuous Faraday cage; RF shield integrity testing quantifies attenuation across the relevant frequency range to confirm no external radio interference can reach the receive coils.",
  },
  {
    type: "p",
    text: "A calibrated signal generator and antenna transmit test signals from outside the shielded enclosure across a frequency sweep that includes the scanner's Larmor frequency (approximately 64 MHz at 1.5T, 128 MHz at 3T) while a receiving antenna and spectrum analyser inside the room measure attenuation. Results are compared against the manufacturer's specified minimum attenuation, commonly in the region of 100 dB at the resonant frequency, with door seals, waveguides and penetration filters tested individually as well as the room as a whole.",
  },
  {
    type: "p",
    text: "Common failure points are RF door contact fingers that have lost spring tension, waveguides used for cable penetrations that exceed their cutoff length-to-diameter ratio, and filtered penetrations for power or network lines that were installed without the specified feedthrough filters. Each of these produces the same clinical symptom regardless of cause: band-like or zipper artefacts, most visible as noise stripes across the phase-encode direction of the image.",
  },
  {
    type: "diagram",
    id: "safety-zones",
    title: "RF shield boundary and controlled-zone relationship",
    purpose: "Clarifies that the RF-shielded enclosure and the four-zone MR safety access model are distinct but overlapping controls, both of which must be verified before clinical use.",
    alt: "Diagram showing the RF-shielded magnet room boundary (copper/steel enclosure with tested door seals and waveguides) nested within the wider four-zone MR safety access control area (Zone I public access, Zone II transition, Zone III restricted MR personnel only, Zone IV magnet room itself).",
    caption: "Figure 2 — RF shielding excludes electromagnetic interference; the four-zone model controls physical and ferromagnetic access. Both must be verified independently before go-live.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Re-test the shield after any penetration work",
    text: "Any subsequent building work that adds or modifies a penetration through the shielded room — a new data cable, a relocated medical gas line, an electrical modification — should trigger a re-test of RF shield integrity. Shield degradation is a leading cause of image artefact that appears well after a successful initial commissioning.",
  },
  {
    type: "h2",
    id: "acceptance-testing",
    number: 9,
    text: "Acceptance Testing and Phantom QA",
    body: "Acceptance testing is the formal, documented verification that the installed system meets the manufacturer's published performance specification, using standardised phantoms and measurement protocols — and it is the milestone that should trigger contractual payment and warranty start.",
  },
  {
    type: "table",
    caption: "Core acceptance and phantom QA measurements",
    headers: ["Measurement", "What it verifies", "Typical tool"],
    rows: [
      ["Signal-to-noise ratio (SNR)", "Overall system sensitivity per coil and sequence", "NEMA/manufacturer uniform phantom"],
      ["Image uniformity", "Consistency of signal across the field of view", "Large uniform phantom, percent integral uniformity"],
      ["Geometric accuracy / distortion", "Spatial accuracy for surgical and radiotherapy planning use", "Grid or geometric-distortion phantom"],
      ["Slice thickness and position accuracy", "Correct slice selection and gradient calibration", "Ramp or wedge phantom"],
      ["High-contrast spatial resolution", "Ability to resolve fine anatomical detail", "Resolution insert phantom"],
      ["Ghosting ratio", "Absence of motion/gradient-induced ghost artefact", "Uniform phantom, phase-encode direction analysis"],
      ["RF and gradient safety checks", "SAR limiting, acoustic noise limits, gradient slew safety cutoffs", "Manufacturer service software"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "These are largely the same parameters an ACR or equivalent accreditation body will later require, which is why building phantom QA into acceptance testing rather than treating it as a separate later exercise saves real time on the accreditation timeline.",
    clinicalInterpretation: "Acceptance results become the baseline against which every future annual QA and service visit is compared, so any deviation later in the system's life can be quantified against a known-good starting point rather than guessed at.",
    hospitalRecommendation: "Require the acceptance test report, including raw phantom images and measured values against specification, as a signed deliverable before releasing final payment — a verbal confirmation that 'testing passed' is not sufficient documentation.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Tie payment milestones to acceptance testing, not delivery",
    text: "Structure the purchase contract so a meaningful final payment tranche is contingent on a passed, documented acceptance test — not simply on the magnet arriving on site. This gives the hospital real commercial leverage if commissioning uncovers a shielding, power or performance shortfall.",
  },
  {
    type: "h2",
    id: "accreditation-prep",
    number: 10,
    text: "ACR-Style Accreditation Preparation",
    body: "Where a hospital pursues external accreditation of its MRI service, most programmes (modelled on or aligned with the American College of Radiology's MRI accreditation programme) require documented phantom QA, a defined clinical image review and evidence of a qualified medical physicist's oversight.",
  },
  {
    type: "p",
    text: "Typical requirements include monthly phantom QA using a standardised ACR-type phantom measuring geometric accuracy, resolution, slice thickness, image uniformity, ghosting and low-contrast detectability; submission of clinical images across required anatomical protocols for expert review; documented equipment performance evaluation, usually annually, by a qualified medical physicist; and a quality control programme with named responsible staff and documented corrective-action procedures.",
  },
  {
    type: "p",
    text: "Because several of these measurements overlap directly with vendor acceptance testing, the most efficient path is to establish the phantom QA programme and staff responsibilities during commissioning itself, so the first several months of compliant monthly data already exist by the time formal accreditation is submitted.",
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Start the QA logbook on day one",
    text: "Begin the monthly phantom QA logbook the same week clinical scanning starts, even before formally applying for accreditation. A gap in QA history is one of the most common reasons an accreditation submission is returned for additional data.",
  },
  {
    type: "h2",
    id: "applications-training",
    number: 11,
    text: "Applications Training and Protocol Build",
    body: "Applications training converts a generic factory system into a working clinical service by building a site-specific protocol library and teaching technologists and radiologists to use it — and it is the single most impactful step for realised image quality.",
  },
  {
    type: "p",
    text: "A structured programme typically runs two to four weeks and covers system operation and coil handling; protocol customisation for the hospital's actual case mix (neuro, spine, MSK, abdominal, cardiac, breast as applicable) rather than reliance on unmodified factory defaults; workflow integration with RIS/PACS and reporting systems; contrast administration procedures and safety screening workflow; and troubleshooting of common artefacts, including recognising when an issue is technique-related versus a service fault.",
  },
  {
    type: "p",
    text: "Protocol build should always start from the hospital's actual referral pattern and radiologist preference, adjusted for the installed coil set and gradient performance, rather than importing an unmodified protocol library from a different site with a different patient population and different clinical priorities.",
  },
  {
    type: "diagram",
    id: "exam-timeline",
    title: "A typical MRI examination timeline once trained protocols are in use",
    purpose: "Shows how a well-built, trained protocol translates into predictable per-patient scan duration, illustrating why protocol quality directly drives departmental throughput.",
    alt: "Timeline diagram of a single MRI examination: patient screening and preparation, coil positioning, scout/localiser sequence, sequential diagnostic sequences (e.g. T1, T2, FLAIR, diffusion, contrast-enhanced series where indicated), image review, and patient exit, with typical minute markers from arrival to table exit.",
    caption: "Figure 3 — A representative exam timeline. Protocols built and trained for the local case mix keep each stage within its planned duration; generic, untrained protocols routinely run over.",
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Train on the accreditation phantom too",
    text: "Include the ACR-type or manufacturer phantom scanning procedure explicitly in applications training, not just clinical protocols. Technologists who have never been shown how to position and scan the accreditation phantom correctly are a common, avoidable reason QA submissions are rejected.",
  },
  {
    type: "knowledgeBox",
    variant: "future-technology",
    title: "AI reconstruction changes protocol timing",
    text: "Deep-learning reconstruction and accelerated acquisition are now routinely built into initial protocols rather than added later, meaningfully shortening scan times at equivalent image quality. Training should cover these tools from day one so departments realise the throughput benefit immediately rather than adopting it as a retrofit months later.",
  },
  {
    type: "h2",
    id: "competency-signoff",
    number: 12,
    text: "Staff Competency Sign-Off",
    body: "Attendance at training is not the same as competency; independent scanning should only be authorised after each technologist and radiologist has demonstrated supervised, satisfactory performance against a defined checklist.",
  },
  {
    type: "p",
    text: "A defensible sign-off process typically requires each technologist to independently complete a defined number of supervised scans across the core protocol set, correctly perform patient screening and safety zone control, demonstrate coil selection and positioning competency, and show they can recognise and respond appropriately to common artefacts and adverse events (including a simulated emergency or quench-response drill). Only once this is documented and signed by both the trainer and department head should the technologist be authorised for unsupervised operation.",
  },
  {
    type: "callout",
    variant: "clinical",
    title: "Untrained staff are a leading source of early incidents",
    text: "The period immediately after go-live, when enthusiasm to start scanning is highest and formal competency documentation is often incomplete, is statistically when avoidable safety incidents and screening failures are most likely. A written sign-off gate, not a target date, should be what authorises independent scanning.",
  },
  {
    type: "h2",
    id: "handover-documentation",
    number: 13,
    text: "Handover Documentation",
    body: "A complete handover package gives the hospital everything it needs to operate, maintain and eventually service or upgrade the system without depending on informal knowledge held only by the installation team.",
  },
  {
    type: "requirements",
    checklist: [
      "Signed acceptance test report with raw phantom data and measured values",
      "RF shield integrity test report",
      "As-built site drawings including shielding, power and quench-vent routing",
      "Full coil inventory with serial numbers and condition record",
      "Protocol library documentation and rationale for site-specific adjustments",
      "Preventive maintenance schedule and spare-parts list",
      "Safety documentation: zone plan, screening forms, emergency and quench-response procedure",
      "Training records and competency sign-off sheets for every operator",
      "Warranty terms, service contact escalation path and response-time commitments",
    ],
    specs: {
      title: "Handover package ownership",
      rows: [
        { label: "Retained by hospital biomedical department", value: "As-built drawings, PM schedule, safety documentation" },
        { label: "Retained by radiology department", value: "Protocol library, training records, QA logbook" },
        { label: "Shared with service provider", value: "Acceptance report, coil inventory, warranty terms" },
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "quick-facts",
    title: "Handover is a deliverable, not an event",
    items: [
      "Request the full documentation package in electronic, searchable format",
      "Confirm the biomedical engineering team has physically walked through the equipment room, not just received a manual",
      "Verify the escalation contact list includes named individuals and out-of-hours numbers, not only a general helpdesk",
    ],
  },
  {
    type: "h2",
    id: "warranty-start",
    number: 14,
    text: "Warranty Start and First Patient",
    body: "Warranty terms should begin at successful, documented acceptance — not at delivery, not at ramping, and not at an arbitrary calendar date — so the hospital is fully covered through the entire commissioning process.",
  },
  {
    type: "p",
    text: "Standard system warranties typically run twelve to twenty-four months from acceptance and cover parts and labour for defects, with cryogen (helium) supply, preventive maintenance visits and coil wear sometimes covered separately or as optional extensions — this should be confirmed explicitly in the contract rather than assumed. The first patient scan should only occur after acceptance testing has passed, staff competency sign-off is complete, and safety zone signage, screening procedures and emergency response plans are all active.",
  },
  {
    type: "callout",
    variant: "note",
    title: "First patient is a milestone, not a race",
    text: "There is often commercial and clinical pressure to scan the first patient as soon as the magnet is ramped. Resist this: first patient should follow, not precede, completed acceptance testing, shield verification and competency sign-off.",
  },
  {
    type: "h2",
    id: "delays",
    number: 15,
    text: "Typical Delays and How to Avoid Them",
    body: "The great majority of MRI installation delays trace back to a small number of recurring causes, nearly all of which are avoidable with earlier planning rather than better equipment.",
  },
  {
    type: "table",
    caption: "Common causes of installation delay and mitigation",
    headers: ["Delay cause", "Typical impact", "Mitigation"],
    rows: [
      ["Site survey performed too late or omitted", "Discovery of structural, power or access issues after purchase", "Mandate survey before final purchase commitment"],
      ["Civil works started only after magnet delivery", "Weeks to months of magnet sitting idle on site", "Run civil works in parallel with manufacturing/shipping"],
      ["Customs clearance delays for the magnet or ancillary equipment", "Unpredictable multi-week slippage", "Engage customs broker early; pre-clear documentation"],
      ["Incomplete RF shielding at time of scheduled testing", "Delayed ramping and shimming", "Schedule shield contractor completion with float before commissioning date"],
      ["Power supply not upgraded or unstable", "Failed acceptance testing, gradient faults", "Confirm and test power quality during civil works, not after"],
      ["Training scheduled too compressed", "Poor protocol quality, low early throughput", "Allow the full two to four week programme; do not compress to meet a launch date"],
      ["Incomplete handover documentation", "Slower fault resolution once in service", "Make documentation a signed, payment-linked deliverable"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Every recurring delay cause in this table originates in a task that is not the scanner itself — civil works, power, customs, training capacity. Vendors are frequently blamed for delays that actually sit with hospital-side or building-side dependencies.",
    clinicalInterpretation: "Delays that shorten the training and protocol-build phase, specifically, have a longer-lasting clinical cost than delays elsewhere in the schedule, because they degrade image quality and throughput for months after the scanner is technically live.",
    hospitalRecommendation: "Build explicit schedule float into civil works, power upgrades and customs clearance rather than into the clinical training phase, and resist any pressure to compress applications training to protect an announced opening date.",
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Do not compress shimming or shield testing",
    text: "Of every phase in the project, shimming and RF shield testing are the least tolerant of schedule compression, because both depend on the room being in its genuinely final physical state. Attempting them early, before shielding, doors and fixed steel are finished, produces results that must be repeated in full later.",
  },
  {
    type: "h2",
    id: "faq",
    number: 16,
    text: "Frequently Asked Questions",
    body: "Practical answers to the questions hospital project teams most often ask once installation planning begins.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How long does an MRI installation actually take from delivery to first patient?",
        a: "Typically eight to sixteen weeks from the magnet reaching site to the first clinical scan, assuming the room is already built and shielded. If civil works still need to be completed after delivery, the total project extends by several additional months.",
      },
      {
        q: "Can the site survey be done from architectural drawings alone?",
        a: "No. Drawings frequently omit as-built changes such as relocated ductwork or added structural elements. A physical site visit by a qualified surveyor is required to confirm floor loading, delivery route and shielding continuity before a purchase decision is finalised.",
      },
      {
        q: "Why can't ramping and shimming be done before the room is finished?",
        a: "Shimming corrects for the specific magnetic influence of the surrounding steel and fixed equipment, so it can only be finalised once the room is in its true final state. Performing it earlier produces a shim that must be redone once construction finishes.",
      },
      {
        q: "What happens if the RF shield fails its integrity test?",
        a: "Ramping and clinical use are held until the fault — commonly a door seal, waveguide or unfiltered penetration — is identified and corrected, and the shield is re-tested. Scanning with a failed shield produces persistent artefact and should never proceed.",
      },
      {
        q: "Who performs acceptance testing?",
        a: "Typically the manufacturer's field service engineer, sometimes alongside an independent medical physicist engaged by the hospital, using standardised phantoms and manufacturer specification limits. Independent physicist involvement is common where accreditation is planned.",
      },
      {
        q: "Is ACR accreditation mandatory?",
        a: "Requirements vary by country and payer; it is mandatory in some jurisdictions and reimbursement schemes and voluntary elsewhere, but even where voluntary it is widely regarded as a quality benchmark and is often required by referring networks or insurers.",
      },
      {
        q: "How much applications training is really needed?",
        a: "A structured two to four week programme covering system operation, protocol build for the hospital's actual case mix, and safety workflow is typical. Shorter programmes usually leave technologists dependent on unmodified factory protocols for months afterwards.",
      },
      {
        q: "When does the warranty period start?",
        a: "It should start at successful, documented acceptance testing — not at delivery or ramping — so the hospital remains covered throughout the entire commissioning process. This should be stated explicitly in the purchase contract.",
      },
      {
        q: "What is the single most common cause of installation delay?",
        a: "Civil works — shielding, structural reinforcement and power upgrades — started too late, usually because they were scheduled after magnet delivery rather than in parallel with manufacturing and shipping.",
      },
      {
        q: "Can a hospital scan patients before staff competency sign-off is complete?",
        a: "It should not. Independent scanning should only begin once each technologist has completed supervised scans across the core protocol set and demonstrated safety-zone and screening competency, documented with a signed checklist.",
      },
      {
        q: "What documentation should the hospital insist on at handover?",
        a: "At minimum: the signed acceptance test report, RF shield test report, as-built drawings, coil inventory, protocol library documentation, preventive maintenance schedule, safety and emergency procedures, and training/competency records.",
      },
      {
        q: "Does a refurbished MRI system follow the same commissioning process?",
        a: "Yes — ramping, shimming, RF shield testing and acceptance testing are performed at the new site regardless of whether the magnet is new or refurbished, because siting conditions and field interaction are entirely site-specific.",
      },
      {
        q: "What causes a quench during commissioning, and is it dangerous?",
        a: "A quench is a sudden loss of superconductivity that vents helium through the quench pipe; during commissioning it is rare and usually related to a cryogenic system fault. It is a recognised hazard that is why oxygen monitoring and a certified quench-vent path must be verified and functional before ramping.",
      },
      {
        q: "How soon after go-live should the first phantom QA scan be logged?",
        a: "Within the first week of clinical operation, so the monthly QA logbook required for ongoing quality control and any future accreditation submission begins accumulating data immediately rather than starting months later.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    number: 17,
    text: "Conclusion",
    body: "A successful MRI installation is the product of sequencing, not speed — each phase gates the next, and the projects that go smoothly are the ones planned that way from the purchase order onward.",
  },
  {
    type: "p",
    text: "The technical steps — survey, rigging, ramping, shimming, shield testing, acceptance testing — are well established and predictable when given the time they require. The steps that most often separate a strong launch from a troubled one are the ones closest to people: a site survey done honestly before purchase, civil works started early enough to run in parallel with manufacturing, and applications training given the full two to four weeks it needs rather than compressed to protect an announced opening date. A hospital that plans for that sequence, and holds its supplier to documented, milestone-linked deliverables at each gate, converts what can be an eight-month source of anxiety into a scanner that is genuinely ready — technically, clinically and administratively — for its first patient.",
  },
  {
    type: "referenceGroups",
    note: "References are provided for professional orientation. Always follow the current edition of each standard, the applicable national regulations, and the manufacturer's instructions for use for your specific system.",
    groups: [
      {
        title: "Medical guidelines",
        items: [
          { label: "American College of Radiology. ACR Manual on MR Safety — MR personnel, four-zone access control and screening practice." },
          { label: "American College of Radiology. MRI Accreditation Program Requirements — phantom QA, clinical image review and medical physicist oversight." },
          { label: "ACR–NASCI–SPR. Practice Parameter for the Performance and Interpretation of Magnetic Resonance Imaging." },
        ],
      },
      {
        title: "Scientific publications",
        items: [
          { label: "Price R.R. et al. Quality control methods in diagnostic radiology. American Association of Physicists in Medicine report on MR quality control." },
          { label: "Peer-reviewed literature on RF shielding effectiveness and electromagnetic interference in diagnostic MR suites." },
        ],
      },
      {
        title: "Regulatory authorities",
        items: [
          { label: "U.S. Food and Drug Administration. MRI (Magnetic Resonance Imaging) — device safety and labelling guidance." },
          { label: "European Commission. Medical Device Regulation (EU) 2017/745 — requirements for placing MR systems on the EU market." },
          { label: "MHRA. Safety Guidelines for Magnetic Resonance Imaging Equipment in Clinical Use." },
        ],
      },
      {
        title: "International standards",
        items: [
          { label: "IEC 60601-2-33. Particular requirements for the basic safety and essential performance of magnetic resonance equipment for medical diagnosis." },
          { label: "NEMA MS series. Standards for determination of signal-to-noise ratio, image uniformity and geometric distortion in diagnostic MR imaging." },
          { label: "ASTM F2503. Standard Practice for Marking Medical Devices and Other Items for Safety in the Magnetic Resonance Environment." },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          { label: "Siemens Healthineers, GE HealthCare, Philips, Canon Medical Systems and Fujifilm Healthcare — system siting planning guides and installation/acceptance procedures for the installed platform." },
          { label: "Manufacturer commissioning checklists, cryogen handling procedures and quench-vent design specifications." },
        ],
      },
      {
        title: "Medical societies",
        items: [
          { label: "International Society for Magnetic Resonance in Medicine (ISMRM) — MR safety and quality assurance resources." },
          { label: "Radiological Society of North America (RSNA) — clinical MRI education and quality improvement material." },
          { label: "European Society of Radiology (ESR) — imaging quality standards and accreditation-aligned guidance." },
        ],
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning an MRI installation or upgrade?",
    subheading:
      "Our project managers, biomedical engineers and applications specialists coordinate every phase — from site survey to accreditation-ready commissioning — for hospitals across Africa and the Middle East.",
    technology: "MRI",
  },
];
