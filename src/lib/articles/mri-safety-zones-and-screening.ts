import type { ContentBlock, TocItem } from "@/lib/blog";
import solMri from "@/assets/sol-mri.jpg";

export const MRI_SAFETY_ZONES_AND_SCREENING_TOC: TocItem[] = [
  { id: "overview", title: "The Four-Zone Model in Context" },
  { id: "acr-zones", title: "The ACR Four-Zone Model in Detail" },
  { id: "mr-labelling", title: "MR Safe, MR Conditional and MR Unsafe" },
  { id: "projectile-risk", title: "Projectile Risk and the Static Field" },
  { id: "implants-devices", title: "Implants and Devices: Screening Categories" },
  { id: "screening-forms", title: "Screening Forms and Workflows" },
  { id: "staff-roles", title: "Staff Roles: MR Medical Director, MRSO, MRSE" },
  { id: "sar-heating", title: "SAR and RF Heating Limits" },
  { id: "acoustic-noise", title: "Acoustic Noise Limits" },
  { id: "cryogen-quench", title: "Cryogen Quench Response" },
  { id: "emergency-procedures", title: "Emergency and Code-Blue Procedures" },
  { id: "gadolinium-safety", title: "Gadolinium and Contrast Safety" },
  { id: "pregnancy-paediatric", title: "Pregnancy and Paediatric Considerations" },
  { id: "incident-reporting", title: "Incident Reporting and Governance" },
  { id: "training-competency", title: "Training and Competency Assurance" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MRI_SAFETY_ZONES_AND_SCREENING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solMri,
    imageAlt: "Controlled-access MRI suite entrance with warning signage marking the transition into the magnetic field environment",
    paragraphs: [
      "An MRI scanner is unlike any other piece of hospital equipment in one crucial respect: its principal hazard, the static magnetic field, cannot be switched off. A CT room is safe to enter the moment the console is idle; an MRI magnet room is never safe to enter casually, whether the scanner is mid-examination, powered down for maintenance, or sitting silent overnight. This single fact — a permanently energised, invisible, room-filling force — is why MRI safety cannot be left to individual vigilance alone. It has to be built into architecture, staffing structure and paperwork before a single patient is ever screened.",
      "The American College of Radiology's four-zone access model exists precisely because signage and good intentions are not sufficient controls for a hazard that a person cannot see, hear or feel until it is already acting on a ferromagnetic object in their pocket, on a stretcher, or embedded in their own body. Around that architectural model sits a second layer of controls: MR safety labelling for every device and implant that might enter the field, a written two-stage screening workflow for every patient and escort, defined safety roles with legal and clinical accountability, and quantitative limits on radiofrequency heating and acoustic exposure that are enforced automatically by the scanner but must be understood by the people operating it.",
      "This protocol reference brings those layers together for hospital teams building or auditing an MRI safety programme: the zone model itself, MR safe/conditional/unsafe labelling, projectile risk, implant screening categories, the staff roles the ACR and IEC frameworks require, SAR and acoustic exposure limits, the cryogen quench response, code-blue procedures inside a magnetic environment, and the incident-reporting discipline that turns near-misses into permanent fixes rather than repeated close calls.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "The ACR four-zone model, MR safety labelling, implant screening, safety staff roles, SAR and acoustic limits, quench response and emergency procedures, and incident reporting",
    audience:
      "Radiology directors, MR safety officers, hospital safety committees, technologists, biomedical engineers and facility planners",
    readingTime: "18 min read",
    technology: "Magnetic Resonance Imaging (MRI) Safety",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "The Four-Zone Model in Context",
    body: "MRI safety is architectural before it is procedural: because the magnet is always on, access itself — not switch state — is the control that keeps people safe.",
  },
  {
    type: "ul",
    items: [
      "The controlling hazard is force, not radiation. Unlike CT or fluoroscopy, MRI has no dose to minimise; the risk is mechanical — a ferromagnetic object accelerating toward the bore, or heating induced in a conductive implant — which means the safety programme looks completely different from a radiation protection programme.",
      "Most reported incidents are screening failures, not equipment failures. Analyses of MR safety events consistently show that projectile events, burns and quench-related injuries trace back to an undocumented implant, an unscreened accompanying person, or ferromagnetic equipment brought into Zone IV — rarely to a malfunctioning scanner.",
      "Safety authority must sit with a named, trained individual, not a rotating roster. The ACR framework assigns clear, non-delegable authority to specific roles precisely because diffuse responsibility is what allows screening gaps to persist across shifts.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "The four-zone model controls access physically, because the magnetic field cannot be switched off for convenience or emergency.",
      "MR Safe, MR Conditional and MR Unsafe are legally defined labelling categories, not marketing terms — conditional devices carry specific field, SAR and positioning limits that must be checked every time.",
      "Screening is a two-stage, written process performed at booking and again at the Zone III/IV threshold, never a single verbal check.",
      "The MR Medical Director, MRSO and MRSE roles carry distinct, documented responsibilities under ACR guidance and should never be merged into one undocumented function.",
      "SAR and acoustic noise are hard, scanner-enforced limits, but they only protect patients if implant and hearing-protection data are entered correctly.",
      "A quench is a rare, high-consequence event requiring a rehearsed drill, not a document that exists only on paper.",
      "Every near-miss and incident should be logged in a structured register; the pattern across events matters more than any single event.",
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
    id: "acr-zones",
    number: 2,
    text: "The ACR Four-Zone Model in Detail",
    body: "The ACR divides the MR environment into four concentric zones of increasing hazard and increasing access control, from the public waiting area to the magnet room itself.",
  },
  {
    type: "p",
    text: "Zone I is freely accessible, unrestricted public space — the general hospital corridor or car park, where no magnetic field is present and no screening is required. Zone II is the interface between the public and the controlled MR environment: typically a reception, interview and changing area where patients and escorts are greeted, where the first stage of written screening takes place, and where personal effects are secured before anyone proceeds further.",
  },
  {
    type: "p",
    text: "Zone III is where the programme becomes genuinely restrictive. It is a physically secured, access-controlled area — locked doors, keycard or biometric entry, or continuous staff supervision — because the fringe field here can already exert meaningful force on ferromagnetic objects and can interfere with active implants such as pacemakers. Only screened patients, screened escorts and trained MR personnel may enter Zone III unsupervised; anyone else must be personally escorted. Zone IV is the magnet room itself, physically located within Zone III, under direct and continuous supervision by MR personnel at all times it is accessible. Nothing enters Zone IV — person, object, trolley or piece of equipment — without a documented determination of MR safety status.",
  },
  {
    type: "diagram",
    id: "safety-zones",
    title: "The ACR four-zone MRI safety model",
    purpose: "Establishes the architectural basis of MRI safety for facility planners, security staff, referring clinicians and new technologists.",
    alt: "Concentric zone diagram of the ACR four-zone MRI safety model: Zone I freely accessible public space with no field present; Zone II the reception, interview and first-stage written screening area; Zone III a physically secured, access-controlled area where the fringe field becomes hazardous and only screened, escorted or trained individuals may enter; and Zone IV the magnet room itself, located within Zone III, under direct and continuous supervision at all times.",
    caption: "Figure 1 — The four-zone model. Because the magnet cannot be switched off, safety is enforced by architecture and access control rather than by procedure alone.",
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "The 5 gauss line is the practical Zone III boundary",
    text: "Regulatory guidance uses the 5 gauss (0.5 mT) fringe-field contour as the threshold above which active implants such as pacemakers and neurostimulators may malfunction, and it is common practice to align the outer boundary of Zone III with this line. The line must be verified by field mapping after installation, not assumed from manufacturer drawings, because room geometry, adjacent structural steel and shielding all shift its real position.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Where zone discipline typically breaks down",
    items: [
      "Housekeeping, portering or maintenance staff entering Zone III unescorted because they were never enrolled in zone-access training",
      "Zone III doors propped open during busy periods, effectively merging Zone II and Zone III",
      "Ferromagnetic cleaning equipment, floor buffers or tool trolleys brought into Zone III without an MR-safety check",
      "New clinical staff assuming Zone IV is safe whenever the scanner display shows no active scan in progress",
    ],
  },
  {
    type: "h2",
    id: "mr-labelling",
    number: 3,
    text: "MR Safe, MR Conditional and MR Unsafe",
    body: "ASTM F2503 defines three legally recognised MR safety labels for devices and implants; every item that might enter Zone III or IV must be assessed against one of them before the patient is scanned.",
  },
  {
    type: "table",
    caption: "MR safety labelling categories under ASTM F2503",
    headers: ["Label", "Meaning", "Practical implication"],
    rows: [
      [
        "MR Safe",
        "Poses no known hazard in any MR environment — typically non-conductive, non-metallic, non-magnetic items",
        "May enter Zone IV without further evaluation, e.g. plastic patient positioning aids",
      ],
      [
        "MR Conditional",
        "Demonstrated safe under specific, defined conditions — field strength, spatial gradient, SAR limit, scan region, duration",
        "Must be checked against its specific conditions every time; safe at 1.5T does not imply safe at 3T",
      ],
      [
        "MR Unsafe",
        "Poses a known hazard in all MR environments — typically ferromagnetic",
        "Must never enter Zone III unless positively identified and controlled; contraindicates scanning if implanted and undocumented",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "MR Conditional is the label that generates the most real-world error, because staff frequently read it as a permanent green light rather than as a set of conditions that must be re-verified against the specific scanner and protocol in use.",
    clinicalInterpretation: "A device conditional at 1.5T with a whole-body SAR limit of 2 W/kg is not automatically safe at 3T or under a high-SAR sequence; the implant card or manufacturer database entry must be checked against the actual examination parameters, not assumed from memory.",
    hospitalRecommendation: "Maintain implant manufacturer contact details and a subscription to a recognised MR-conditional device database at the technologist workstation, and require the specific conditions to be transcribed into the patient record before scanning, not just the word 'conditional'.",
  },
  {
    type: "knowledgeBox",
    variant: "quick-facts",
    title: "Labelling at a glance",
    items: [
      "Labels apply to the device in a specific configuration — a different lead length or generator model can change the category entirely",
      "Colour-coded pictograms (green MR Safe, yellow MR Conditional, red MR Unsafe) are standardised under ASTM F2503 for quick visual recognition",
      "Absence of a label is not equivalent to MR Safe — it means unassessed, and unassessed devices should be treated as MR Unsafe until verified",
      "Manufacturer instructions for use are the authoritative source; departmental memory or a colleague's recollection is not",
    ],
  },
  {
    type: "h2",
    id: "projectile-risk",
    number: 4,
    text: "Projectile Risk and the Static Field",
    body: "Ferromagnetic objects experience a translational force and torque that increase sharply as they approach the bore, which is why projectile incidents happen fast and close to the magnet, not gradually across the room.",
  },
  {
    type: "p",
    text: "The static field's spatial gradient — not its peak strength — determines projectile force, and that gradient is steepest in the last one to two metres before the bore. An object that feels like a light pull at the Zone III threshold can accelerate to lethal velocity in the final approach. Reported projectile injuries and fatalities have involved oxygen cylinders, floor buffers, IV poles, wheelchairs, hairpins, tool trolleys and even firearms carried by uninformed visitors — almost never scanner faults.",
  },
  {
    type: "ul",
    items: [
      "Ferromagnetic detection systems at the Zone III/IV threshold catch objects that written screening misses, and are recommended as a supplementary control, not a replacement for screening",
      "Every item routinely required in Zone IV — oxygen cylinders, monitors, infusion pumps, stretchers, wheelchairs, fire extinguishers — must be sourced in an MR-Conditional or MR-Safe non-ferromagnetic version and never substituted for convenience",
      "Loose objects in staff pockets (scissors, badge reels with metal clips, pens, keys) are a recurring, underestimated source of minor projectile events",
      "Visitors and non-clinical staff are the highest-risk population, because they have not internalised the hazard the way MR personnel have",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Oxygen cylinders are a recurring fatal-incident category",
    text: "Standard steel oxygen cylinders are among the most frequently implicated objects in fatal MRI projectile events worldwide. Only non-ferromagnetic, MR-Conditional cylinders correctly labelled and dedicated to the MR environment may be brought past Zone III, and they should be physically distinguishable — by colour or tagging — from general-ward cylinders so staff cannot substitute one for the other under pressure.",
  },
  {
    type: "callout",
    variant: "important",
    title: "Force rises fastest closest to the bore",
    text: "A ferromagnetic object may feel manageable at the doorway and become uncontrollable within the final metre of approach. Screening failures are rarely noticed until it is too late to intervene by hand.",
  },
  {
    type: "h2",
    id: "implants-devices",
    number: 5,
    text: "Implants and Devices: Screening Categories",
    body: "Implants fall into broad risk categories that determine whether scanning proceeds routinely, under specific conditions, or not at all without further clinical evaluation.",
  },
  {
    type: "comparison",
    title: "Common implant and device categories for MR screening",
    headers: ["Category", "Examples", "Typical screening posture"],
    rows: [
      [
        "Cardiac implantable electronic devices",
        "Pacemakers, implantable cardioverter-defibrillators, loop recorders",
        "Modern MR-Conditional devices can be scanned under a defined protocol with cardiology/device-clinic involvement; legacy non-conditional devices require case-by-case risk-benefit review",
      ],
      [
        "Neurostimulation devices",
        "Deep brain stimulators, spinal cord stimulators, vagal nerve stimulators",
        "Scan only under manufacturer-specific conditional parameters, often with the device set to a defined mode beforehand",
      ],
      [
        "Cochlear and otologic implants",
        "Cochlear implants, some ossicular prostheses",
        "Many require magnet removal or are contraindicated depending on model; verify against the specific device generation",
      ],
      [
        "Aneurysm clips and vascular devices",
        "Intracranial aneurysm clips, coils, stents, IVC filters",
        "Modern clips are largely non-ferromagnetic and conditional, but undocumented or older clips are treated as a contraindication",
      ],
      [
        "Orthopaedic hardware",
        "Joint replacements, plates, screws, external fixators",
        "Generally MR-Conditional and low risk once healed, but external fixators and some older alloys require specific checks",
      ],
      [
        "Metallic foreign bodies",
        "Shrapnel, welding or grinding fragments, especially intraocular",
        "Intraocular metallic fragments are a recognised contraindication until excluded by orbital imaging; occupational history must be asked directly",
      ],
      [
        "Transdermal patches and cosmetic items",
        "Metallic-backed patches, permanent make-up, some tattoo pigments",
        "Remove metallic-backed patches before scanning to prevent localised RF heating; note tattoos in older or dense pigment for possible mild heating sensation",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The single most consequential category on this table is the undocumented cardiac device or neurostimulator, because the consequence of getting it wrong ranges from device malfunction to lead heating and tissue injury.",
    clinicalInterpretation: "A device-clinic or cardiology sign-off pathway for CIEDs should be a standing arrangement, not something arranged ad hoc for each request, because urgent MRI referrals in patients with cardiac devices are common in stroke and oncology pathways.",
    hospitalRecommendation: "Build a single-page, easily accessible implant risk matrix into the screening workflow so technologists are not relying on memory for categories that appear infrequently but carry high consequence when mishandled.",
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Treat 'I'm not sure what type it is' as a stop, not a judgement call",
    text: "When a patient cannot describe their implant precisely, obtain the implant card, contact the implanting centre or device manufacturer, or arrange a plain radiograph to identify hardware type before proceeding. Scanning on an assumption is the single most avoidable category of MR safety incident.",
  },
  {
    type: "h2",
    id: "screening-forms",
    number: 6,
    text: "Screening Forms and Workflows",
    body: "Screening is deliberately duplicated: once in writing at booking, and again verbally and in writing at the Zone III threshold, because information changes and recall is unreliable.",
  },
  {
    type: "ul",
    items: [
      "Stage one — booking and referral: a written screening form covering implants, prior surgery, occupational metal exposure, pregnancy status, renal function where contrast is planned, and claustrophobia history, completed before the appointment is confirmed",
      "Stage two — arrival at Zone II/III: the patient changes into non-metallic clothing, removes all metal objects and jewellery, and a trained member of staff conducts a second, verbal review of the same form face to face",
      "Escort and accompanying-person screening: anyone entering Zone III or IV with the patient — a parent, interpreter or carer — completes the same written screening, with no exceptions for perceived low risk",
      "Documentation of MR-conditional verification: for any implant, the specific device model, the conditions of use, and the confirming source (implant card, manufacturer database, device clinic) are recorded in the patient record, not just a checkbox",
      "Sign-off: the technologist who performed the final check signs and dates the form before the patient enters Zone IV",
    ],
  },
  {
    type: "diagram",
    id: "patient-journey",
    title: "MRI safety screening workflow",
    purpose: "Shows the two mandatory screening checkpoints and where implant verification and documentation occur in the patient pathway.",
    alt: "Flow diagram of the MRI screening workflow: referral and booking with first written screening form, arrival and changing with removal of metal and non-metallic clothing, second verbal and written screening at the Zone III threshold performed by a trained technologist, implant verification against manufacturer conditions where applicable, documented sign-off, and entry to Zone IV only after all steps are complete.",
    caption: "Figure 2 — Screening workflow. The two checkpoints are deliberately redundant; each catches information the other can miss.",
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Design the form so a 'yes' answer cannot be skipped past",
    items: [
      "Use a structured form with distinct yes/no/unsure fields for each implant category, not a single open free-text box",
      "Route any 'yes' or 'unsure' answer to a mandatory secondary review before the appointment is confirmed",
      "Keep the same form format across booking and arrival stages so discrepancies between the two are immediately visible",
      "Store completed forms with the imaging record for the same retention period as the clinical report",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Language and comprehension matter as much as form design",
    text: "A screening form is only as good as the patient's understanding of it. Provide translated versions for common languages in the served population, use plain-language implant illustrations rather than only medical terminology, and arrange qualified interpretation rather than relying on an accompanying family member for safety-critical questions.",
  },
  {
    type: "h2",
    id: "staff-roles",
    number: 7,
    text: "Staff Roles: MR Medical Director, MRSO, MRSE",
    body: "The ACR framework assigns three distinct safety roles with non-overlapping, documented responsibilities so that authority for MR safety never becomes diffuse.",
  },
  {
    type: "table",
    caption: "Core MR safety roles under the ACR framework",
    headers: ["Role", "Typical background", "Core responsibility"],
    rows: [
      [
        "MR Medical Director (MRMD)",
        "Radiologist with MR safety training and site authority",
        "Holds overall clinical and safety authority for the MR programme, adjudicates complex implant risk-benefit decisions, and approves site-specific safety policy",
      ],
      [
        "MR Safety Officer (MRSO)",
        "Senior technologist, physicist or nurse with dedicated MR safety training and certification",
        "Manages day-to-day safety policy, screening compliance, staff training records, incident review and zone access control",
      ],
      [
        "MR Safety Expert (MRSE)",
        "Medical physicist or qualified engineer with MR physics expertise",
        "Advises on siting, fringe-field mapping, SAR and acoustic verification, equipment MR-compatibility assessment and technical incident investigation",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Smaller departments sometimes attempt to compress these three roles into one person's informal responsibility; the framework separates them deliberately because clinical judgement, operational policing and technical physics expertise rarely sit competently in one individual.",
    clinicalInterpretation: "The MRMD's role matters most in genuinely ambiguous cases — an urgent scan request for a patient with a legacy, undocumented cardiac device — where a documented risk-benefit decision by a named clinical authority protects both the patient and the department.",
    hospitalRecommendation: "Name all three roles explicitly in departmental policy even where one qualified individual covers more than one function, and ensure each function has defined deputies so safety authority never lapses during leave or turnover.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Budget MR safety training as an ongoing line item, not a one-off cost",
    text: "MRSO and MRSE certification typically requires initial coursework followed by periodic renewal, and both roles benefit from vendor-run refresher sessions whenever new sequences, coils or software are commissioned. Procurement plans that fund initial training but not renewal quietly erode the safety programme within a few years of go-live.",
  },
  {
    type: "h2",
    id: "sar-heating",
    number: 8,
    text: "SAR and RF Heating Limits",
    body: "Specific absorption rate (SAR) quantifies RF energy deposited in tissue during scanning, and IEC 60601-2-33 sets whole-body and localised limits the scanner enforces automatically — provided patient data and implant conditions are entered correctly.",
  },
  {
    type: "p",
    text: "Every RF pulse deposits energy as heat. The scanner calculates SAR in watts per kilogram from patient weight, the sequence in use and the coil configuration, and will not run a sequence that exceeds the regulatory operating-mode limit for that patient. This protection depends entirely on accurate patient weight entry — an underestimated weight silently under-calculates SAR and removes a genuine safety margin, while an overestimated weight can unnecessarily force sequence modification.",
  },
  {
    type: "ul",
    items: [
      "Normal operating mode caps whole-body SAR at 2 W/kg averaged over the whole body and higher localised limits for the head, consistent with IEC 60601-2-33",
      "First-level controlled mode permits higher SAR under direct medical supervision, appropriate only for specific clinical justifications",
      "Localised heating around conductive implants, loops formed by monitoring leads, and skin-to-skin contact points are a separate hazard from whole-body SAR and are addressed by correct patient positioning, not by the SAR calculation alone",
      "MR-Conditional implants often carry their own, lower SAR ceiling that must be respected in addition to the scanner's general limit",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Cabling loops are a common, avoidable burn source",
    text: "ECG leads, pulse oximetry cables and coil cables that touch skin-to-skin or form a loop can concentrate induced RF current and cause a localised burn even when whole-body SAR is well within limits. Positioning cables in a straight line without loops, and placing padding between cables and skin, prevents the majority of reported RF burn incidents.",
  },
  {
    type: "callout",
    variant: "important",
    text: "Never estimate patient weight. An inaccurate weight entry undermines the SAR safety margin the scanner is designed to enforce.",
  },
  {
    type: "h2",
    id: "acoustic-noise",
    number: 9,
    text: "Acoustic Noise Limits",
    body: "Rapid gradient switching produces Lorentz-force vibration audible as loud knocking, and regulatory sound-pressure limits combined with hearing protection are mandatory controls, not optional comfort measures.",
  },
  {
    type: "p",
    text: "Gradient coils can generate peak sound pressure levels exceeding 100 dB during aggressive sequences, comparable to industrial machinery noise. IEC 60601-2-33 sets maximum permitted sound-pressure levels for MR equipment and requires manufacturers to declare acoustic output; hospitals are responsible for ensuring every patient and anyone remaining in the room during scanning wears adequate hearing protection, whether earplugs, headphones or both, matched to the declared sequence noise level.",
  },
  {
    type: "ul",
    items: [
      "Hearing protection is mandatory for every patient without exception, including sedated and paediatric patients",
      "Anyone accompanying a patient into Zone IV during scanning — a parent, an anaesthetist — must also wear hearing protection",
      "Communication systems (intercom, squeeze-ball alarm) must remain functional through hearing protection so the patient can alert staff at any time",
      "Departments running high-duty-cycle research or advanced clinical sequences should periodically verify declared acoustic output against actual measured levels as part of acceptance and annual testing",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "quick-facts",
    title: "Acoustic noise, quickly",
    items: [
      "Loudness scales with gradient slew rate and duty cycle, not with field strength alone",
      "Combined earplugs and headphones give the greatest attenuation for high-noise sequences",
      "Silent or quiet-sequence options exist on modern platforms and reduce noise substantially for anxious or paediatric patients",
      "A patient alarm (squeeze ball) must always be functional and explained before the scan begins",
    ],
  },
  {
    type: "h2",
    id: "cryogen-quench",
    number: 10,
    text: "Cryogen Quench Response",
    body: "A quench is the sudden, uncontrolled loss of superconductivity, releasing the magnet's stored energy and boiling off its liquid helium almost instantly — a rare event that the safety programme must nonetheless be rehearsed to handle.",
  },
  {
    type: "p",
    text: "In normal operation, the magnet coil is superconducting and carries current with effectively zero resistance at cryogenic temperature. If any part of the winding loses superconductivity — from a mechanical disturbance, cryogen loss, or occasionally as a deliberate emergency action — resistive heating cascades through the coil, rapidly boiling the remaining liquid helium into gas. Properly designed systems vent this gas through a dedicated quench pipe to open air outside the building. The residual field then collapses over a period of minutes.",
  },
  {
    type: "ul",
    items: [
      "A functioning quench vent is the single most important engineering control: if it is blocked, undersized or improperly sealed, escaping helium gas can displace oxygen inside the magnet room, creating an asphyxiation hazard",
      "Oxygen depletion monitors with audible alarm must be installed and tested in every magnet room and should trigger evacuation if oxygen concentration falls below the safe threshold",
      "Emergency (manual) quench is a deliberate action reserved for freeing a person pinned by a ferromagnetic projectile or another immediate life-threatening situation — it is not a routine shutdown procedure, and it carries a significant re-ramp cost and lead time",
      "After any quench, the room must be evacuated and ventilated, oxygen levels confirmed safe, and the system re-ramped and re-commissioned by trained service engineers before clinical use resumes",
    ],
  },
  {
    type: "diagram",
    id: "hospital-workflow",
    title: "Quench event response sequence",
    purpose: "Documents the sequence of actions from quench onset to safe re-entry, clarifying who acts and in what order.",
    alt: "Sequential flow diagram of quench response: quench onset detected by alarm or visible venting, immediate evacuation of the magnet room, oxygen monitor confirmation before re-entry, ventilation of the room, notification of the MR Safety Officer and facilities team, engineering assessment and cryogen resupply, and formal re-commissioning before clinical scanning resumes.",
    caption: "Figure 3 — Quench response sequence. Re-entry is gated on a confirmed oxygen reading, never on visual judgement alone.",
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Never re-enter a post-quench room on visual judgement alone",
    text: "Escaping helium is odourless, colourless and lighter than air, so a room can appear entirely normal while oxygen concentration near the ceiling is dangerously low. Re-entry must always be gated on a confirmed, calibrated oxygen monitor reading, not on the absence of visible venting or on how long has apparently passed.",
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Rehearse the quench drill annually, not just document it",
    items: [
      "Run a documented tabletop or physical drill at least annually with all MR and emergency-response staff",
      "Confirm the oxygen monitor calibration and alarm function as part of routine preventive maintenance",
      "Post the quench pipe exterior discharge location clearly for facilities and fire-service awareness",
      "Include the quench procedure in new-starter MR safety orientation, not only in the policy folder",
    ],
  },
  {
    type: "h2",
    id: "emergency-procedures",
    number: 11,
    text: "Emergency and Code-Blue Procedures",
    body: "Because the magnet cannot be switched off, cardiac arrest and other medical emergencies inside the MR suite require a procedure that removes the patient from the field rather than bringing standard resuscitation equipment into it.",
  },
  {
    type: "p",
    text: "A code-blue response inside Zone IV follows a different sequence from anywhere else in the hospital. The patient is moved, on a non-ferromagnetic MR-Conditional trolley wherever possible, out of Zone IV into a designated resuscitation area in Zone III or beyond before standard advanced life support equipment — defibrillator, oxygen cylinder, crash cart — is applied. Basic life support (airway management, chest compressions) can and should begin immediately using MR-safe technique while the move is arranged, but full equipment-based resuscitation should not be attempted inside the magnet room with non-conditional devices.",
  },
  {
    type: "ul",
    items: [
      "Every MR suite should have a clearly signed, pre-designated resuscitation point immediately outside Zone IV, stocked with standard (non-MR) emergency equipment",
      "MR-Conditional monitoring and life-support equipment used inside Zone IV must be clearly and permanently identified, kept exclusively for MR use, and never interchanged with general ward stock",
      "All MR staff, not only technologists, require documented code-blue drill training specific to the MR environment, refreshed at a defined interval",
      "The emergency stop / rundown unit (manual quench switch) location must be known to every trained staff member and reserved for genuine life-threatening entrapment, not general emergencies",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Standard crash carts must never cross the Zone IV threshold",
    text: "A standard hospital crash cart, defibrillator or oxygen cylinder is almost certainly MR Unsafe. Bringing one into the magnet room during the panic of a genuine emergency is a well-documented cause of secondary projectile injury. The correct action is always to move the patient out, not to bring the equipment in.",
  },
  {
    type: "callout",
    variant: "clinical",
    title: "In an emergency",
    text: "Move the patient out of Zone IV for resuscitation. Basic life support may begin immediately with MR-safe technique; full equipment-based resuscitation happens outside the magnet room.",
  },
  {
    type: "h2",
    id: "gadolinium-safety",
    number: 12,
    text: "Gadolinium and Contrast Safety",
    body: "Gadolinium-based contrast agents are generally well tolerated but require renal function screening, informed consent practice and awareness of rare but serious reactions.",
  },
  {
    type: "ul",
    items: [
      "Renal function (eGFR) should be checked before contrast administration in patients with known or suspected renal impairment, given the historical association between gadolinium and nephrogenic systemic fibrosis in severe renal disease",
      "Macrocyclic gadolinium agents are generally preferred over older linear agents due to greater chelate stability and lower rates of gadolinium retention",
      "Acute hypersensitivity reactions, while uncommon, require the same emergency preparedness (documented protocol, resuscitation equipment access, trained staff) as any contrast administration in radiology",
      "Pregnancy and breastfeeding status should be established before contrast administration, following institutional and manufacturer guidance",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Gadolinium retention is a governance issue, not only a clinical one",
    text: "Regulatory bodies including the FDA and EMA have required labelling updates addressing gadolinium retention in brain and body tissue after repeated administration. Departments should document agent choice, dose and administration in a way that supports future audit, and should follow current agency guidance on preferred agent classes rather than historical departmental habit.",
  },
  {
    type: "h2",
    id: "pregnancy-paediatric",
    number: 13,
    text: "Pregnancy and Paediatric Considerations",
    body: "MRI has an excellent safety record in pregnancy at diagnostic field strengths, but screening and risk-benefit discussion still follow specific pathways for pregnant patients and children.",
  },
  {
    type: "p",
    text: "Current guidance from bodies including the ACR does not identify a proven risk to the fetus from clinical MRI at 1.5T or 3T, and MRI is often the preferred alternative to CT when imaging is required in pregnancy. Gadolinium-based contrast, however, is used in pregnancy only when the diagnostic benefit clearly outweighs the theoretical risk of fetal gadolinium exposure, and this decision should be documented with the requesting clinician.",
  },
  {
    type: "ul",
    items: [
      "Pregnancy status should be asked directly and confidentially at both screening stages, not assumed from documentation alone",
      "Paediatric patients require weight-accurate SAR calculation, age-appropriate hearing protection, and often sedation or anaesthesia planning with its own separate safety checklist",
      "Accompanying parents in Zone IV during a paediatric scan must complete full screening themselves, with no informal exception for family members",
      "Child-friendly preparation (mock scanner sessions, visual schedules) materially reduces motion and repeat-scan rates in this population",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Sedation pathways need their own governance, layered onto MR safety",
    text: "Paediatric and anxious adult sedation for MRI introduces airway and monitoring requirements in addition to standard MR screening. Ensure sedation equipment used in Zone IV is MR-Conditional, that recovery space exists outside the magnet room, and that anaesthesia staff working in the MR environment complete the same zone-access training as radiology staff.",
  },
  {
    type: "h2",
    id: "incident-reporting",
    number: 14,
    text: "Incident Reporting and Governance",
    body: "A structured incident and near-miss register turns individual close calls into department-wide corrective action, and is a defining feature of a mature MR safety programme.",
  },
  {
    type: "ul",
    items: [
      "Log every incident and near-miss — projectile events, burns, undocumented implants discovered late, quench events, screening discrepancies — in a single structured register, not scattered in individual memory or informal conversation",
      "Review the register at a fixed interval (monthly is typical) at a safety committee meeting chaired by the MR Medical Director or MRSO",
      "Distinguish root cause from immediate cause: an undocumented pacemaker is the immediate cause of a near-miss, but the root cause is usually a gap in the screening workflow or a missing device-clinic sign-off pathway",
      "Report device-related adverse events to the relevant regulatory authority (for example, FDA MedWatch or MHRA Yellow Card) in addition to internal review, where the event meets reporting thresholds",
      "Feed corrective actions back into training material and screening forms so the same gap does not recur across shifts or staff turnover",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "A healthy incident register has more near-misses than incidents",
    text: "A programme reporting zero near-misses is far more likely to have a reporting culture problem than a genuinely flawless workflow. Encourage low-blame, structured near-miss reporting explicitly, and review trends over time rather than treating each event in isolation.",
  },
  {
    type: "knowledgeBox",
    variant: "future-technology",
    title: "Ferromagnetic detection and RFID screening are becoming standard, not optional",
    text: "Walk-through and hand-held ferromagnetic detection systems, and RFID-tagged implant registries linked to the electronic patient record, are increasingly deployed as supplementary controls in higher-volume MR departments. They do not replace written screening but materially reduce the residual risk from human recall error.",
  },
  {
    type: "h2",
    id: "training-competency",
    number: 15,
    text: "Training and Competency Assurance",
    body: "MR safety competency must be assigned by role, documented, and refreshed on a fixed schedule rather than assumed to persist indefinitely after initial orientation.",
  },
  {
    type: "requirements",
    checklist: [
      "Defined MR safety training tiers matching the ACR's Level 1 (general awareness for all staff and non-MR personnel who may enter Zone III) and Level 2 (MR personnel with independent zone-access and screening authority)",
      "Named MRMD, MRSO and MRSE with documented deputies for periods of leave or turnover",
      "Annual refresher training for all Level 2 MR personnel, including a live or tabletop quench and code-blue drill",
      "Orientation training for all non-MR staff who may legitimately enter Zone III — housekeeping, portering, facilities, security",
      "A current, accessible implant risk reference and manufacturer database subscription available at the point of screening",
      "A documented, auditable training record for every individual with Zone III or IV access",
    ],
    specs: {
      title: "Typical role-based competency requirements",
      rows: [
        { label: "MR Level 1 (general staff)", value: "Awareness orientation on zone hazards and access rules" },
        { label: "MR Level 2 (technologists, radiologists)", value: "Full screening, implant assessment and emergency response training" },
        { label: "MRSO", value: "Dedicated MR safety officer certification with periodic renewal" },
        { label: "MRSE", value: "Medical physics or engineering qualification with MR-specific safety expertise" },
        { label: "Drill frequency", value: "At least annual quench and code-blue rehearsal" },
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Fund training renewal in every service and installation contract",
    text: "When commissioning a new MRI system or upgrading software, request that MR safety refresher training for the department be included in the scope, since new coils, sequences and software revisions can materially change SAR behaviour and safety-relevant workflows.",
  },
  {
    type: "h2",
    id: "faq",
    number: 16,
    text: "Frequently Asked Questions",
    body: "Direct answers to the questions hospital teams most often raise when building or auditing an MR safety programme.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Why can't the MRI magnet simply be switched off in an emergency?",
        a: "A superconducting magnet carries persistent current with no external power source once ramped, so there is no switch to turn off. The only way to remove the field quickly is an emergency quench, which is a drastic, costly action reserved for genuine entrapment, not a routine emergency response.",
      },
      {
        q: "What is the difference between Zone III and Zone IV?",
        a: "Zone III is the physically secured, access-controlled area surrounding the magnet room where the fringe field is already hazardous; Zone IV is the magnet room itself, located within Zone III, and requires direct, continuous supervision whenever it is accessible.",
      },
      {
        q: "Is a pacemaker always a contraindication to MRI?",
        a: "No. Many modern cardiac devices are MR-Conditional and can be scanned safely under a defined protocol, often with device-clinic involvement to set the device to a safe mode before and after the scan. Legacy, non-conditional or undocumented devices require individual risk-benefit assessment by the MR Medical Director.",
      },
      {
        q: "What does MR Conditional actually guarantee?",
        a: "It guarantees safety only under the specific conditions tested and documented by the manufacturer — a defined field strength, spatial gradient, SAR limit and scan region. It does not guarantee safety at a different field strength or under different scan parameters.",
      },
      {
        q: "Who is legally responsible for MRI safety in a hospital?",
        a: "Responsibility is distributed by design across the MR Medical Director (clinical authority), the MR Safety Officer (day-to-day policy and compliance) and the MR Safety Expert (technical physics assessment), so that no single informal role carries the entire safety programme.",
      },
      {
        q: "How is SAR kept within safe limits?",
        a: "The scanner automatically calculates specific absorption rate from the patient's weight, the pulse sequence and coil configuration, and will not run a sequence that exceeds regulatory limits for the selected operating mode. Accurate weight entry is essential for this calculation to be meaningful.",
      },
      {
        q: "Do all patients need hearing protection?",
        a: "Yes, without exception, because gradient-induced acoustic noise can exceed 100 dB during some sequences. This includes sedated, anaesthetised and paediatric patients, and anyone accompanying them into the magnet room during scanning.",
      },
      {
        q: "What should staff do if a quench occurs?",
        a: "Evacuate the magnet room immediately, do not re-enter until a calibrated oxygen monitor confirms safe oxygen levels, notify the MR Safety Officer and facilities team, and arrange engineering assessment and re-commissioning before resuming clinical scanning.",
      },
      {
        q: "Can standard hospital resuscitation equipment be used inside the magnet room?",
        a: "No. Standard crash carts, defibrillators and oxygen cylinders are almost always MR Unsafe. The correct emergency response is to move the patient out of Zone IV to a designated resuscitation area, beginning basic life support with MR-safe technique while the move is arranged.",
      },
      {
        q: "How often should the implant screening form be updated?",
        a: "Review the form whenever new implant categories emerge in clinical practice, after any incident or near-miss traced to a screening gap, and at a minimum on an annual policy review cycle aligned with MR safety training renewal.",
      },
      {
        q: "Is MRI safe during pregnancy?",
        a: "Current guidance does not identify a proven fetal risk from clinical MRI at standard diagnostic field strengths, and MRI is frequently preferred over CT in pregnancy when imaging is clinically indicated. Gadolinium contrast in pregnancy is reserved for cases where diagnostic benefit clearly outweighs theoretical risk.",
      },
      {
        q: "What is the most common root cause of MRI safety incidents?",
        a: "Analyses consistently point to screening and access-control failures — an undocumented implant, an unscreened accompanying person, or ferromagnetic equipment brought into Zone III — rather than equipment malfunction.",
      },
      {
        q: "Do visitors and non-clinical staff need MR safety training?",
        a: "Anyone who may enter Zone III, including housekeeping, portering, facilities and security staff, requires at least general MR safety awareness (ACR Level 1) training, because untrained visitors are a disproportionately high-risk population for projectile incidents.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    number: 17,
    text: "Conclusion",
    body: "A mature MRI safety programme treats the magnet's permanence as the starting design constraint, not an inconvenience to work around.",
  },
  {
    type: "p",
    text: "Every element covered here — the four-zone architecture, MR safety labelling, two-stage screening, named safety roles, SAR and acoustic limits, quench readiness and structured incident reporting — exists because the underlying hazard cannot be neutralised by switching the equipment off. Hospitals that build these controls into their physical layout, staffing structure and documentation from the outset consistently avoid the projectile events, burns and near-misses that dominate published MR safety incident reviews. AbuFarha Medical's applications and biomedical engineering teams support hospitals in translating these standards into site-specific policy, staff training and siting decisions during installation and throughout the service life of the system.",
  },
  {
    type: "referenceGroups",
    note: "References are provided for professional orientation. Always follow the current edition of each standard, the applicable national regulations, and the manufacturer's instructions for use for your specific system.",
    groups: [
      {
        title: "Medical guidelines",
        items: [
          {
            label:
              "American College of Radiology. ACR Manual on MR Safety — four-zone access model, MR personnel roles and screening practice.",
          },
          {
            label:
              "ACR–NASCI–SPR. Practice Parameter for the Performance and Interpretation of Magnetic Resonance Imaging.",
          },
          {
            label:
              "European Society of Urogenital Radiology. Guidelines on Contrast Agents — gadolinium-based agent safety.",
          },
        ],
      },
      {
        title: "Scientific publications",
        items: [
          {
            label:
              "Kanal E. et al. ACR guidance document on MR safe practices — implant risk categories and screening methodology. Peer-reviewed radiology literature.",
          },
          {
            label:
              "Shellock F.G. Reference literature on MR safety of implants, devices and foreign bodies. Peer-reviewed and manufacturer-verified implant safety database.",
          },
        ],
      },
      {
        title: "Regulatory authorities",
        items: [
          {
            label:
              "U.S. Food and Drug Administration. MRI (Magnetic Resonance Imaging) — device safety, labelling guidance and MedWatch adverse event reporting.",
          },
          {
            label:
              "UK Medicines and Healthcare products Regulatory Agency (MHRA). Safety guidelines for magnetic resonance imaging equipment in clinical use, and the Yellow Card adverse event reporting scheme.",
          },
          {
            label:
              "European Commission. Medical Device Regulation (EU) 2017/745 — requirements for placing MR systems and MR-conditional devices on the EU market.",
          },
        ],
      },
      {
        title: "International standards",
        items: [
          {
            label:
              "IEC 60601-2-33. Particular requirements for the basic safety and essential performance of magnetic resonance equipment for medical diagnosis, including SAR and acoustic noise limits.",
          },
          {
            label:
              "ASTM F2503. Standard Practice for Marking Medical Devices and Other Items for Safety in the Magnetic Resonance Environment.",
          },
          {
            label:
              "ASTM F2182 and F2119. Standard test methods for measurement of RF-induced heating and image artefacts of passive implants in the MR environment.",
          },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          {
            label:
              "Siemens Healthineers, GE HealthCare, Philips, Canon Medical Systems and Fujifilm Healthcare — MR safety manuals, quench-vent design specifications and instructions for use for the installed platform.",
          },
          {
            label:
              "Cardiac implantable electronic device and neurostimulator manufacturers — MR-Conditional labelling and device-specific scan conditions.",
          },
        ],
      },
      {
        title: "Medical societies",
        items: [
          {
            label:
              "International Society for Magnetic Resonance in Medicine (ISMRM) — MR safety committee resources.",
          },
          {
            label: "Radiological Society of North America (RSNA) — clinical MR safety education material.",
          },
          {
            label:
              "European Society of Radiology (ESR) — imaging referral guidelines and MR safety quality standards.",
          },
          {
            label:
              "Heart Rhythm Society (HRS) — consensus guidance on MRI in patients with cardiac implantable electronic devices.",
          },
        ],
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Building or auditing your MRI safety programme?",
    subheading:
      "Our biomedical engineering and applications teams help hospitals across Africa and the Middle East design compliant zone layouts, screening workflows and staff training for new and existing MRI installations.",
    technology: "MRI",
  },
];
