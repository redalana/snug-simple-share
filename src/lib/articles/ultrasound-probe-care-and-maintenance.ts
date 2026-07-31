/**
 * Ultrasound probe care and maintenance — Ultrasound cluster (maintenance).
 */

import type { ContentBlock, TocItem } from "../blog";

export const US_PROBE_CARE_TOC: TocItem[] = [
  { id: "why", title: "Why Probes Dominate Ultrasound Lifetime Cost" },
  { id: "failures", title: "How Probes Actually Fail" },
  { id: "daily", title: "Daily Handling and Cleaning" },
  { id: "reprocessing", title: "Reprocessing by Level of Use" },
  { id: "testing", title: "Testing and Early Detection" },
  { id: "programme", title: "Building a Probe Care Programme" },
  { id: "contracts", title: "Cover, Repair and Replacement Decisions" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const US_PROBE_CARE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "In ultrasound, the transducer is both the most fragile component and the one that determines image quality. A system with a degraded probe is not a system with a small defect; it is a system producing unreliable studies while appearing to work normally. Because probes are handled dozens of times a day, cleaned with chemicals, dropped occasionally and stored casually, they are also the single largest recurring cost in ultrasound ownership.",
      "Probe care is therefore not housekeeping. It is a clinical quality control and a financial control at the same time, and it is one of the few maintenance programmes where correct daily behaviour visibly changes the annual budget.",
      "This guide explains how probes fail, what daily and periodic care should look like, how to detect degradation before it affects reporting, and how to decide between repair, replacement and service cover.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Probe failure mechanisms, handling and cleaning discipline, reprocessing levels, degradation testing, a practical care programme, and repair versus replacement economics",
    audience:
      "Sonographers and clinical ultrasound users, biomedical engineering teams, infection prevention leads, department managers",
    readingTime: "13 min read",
    technology: "Ultrasound Systems",
  },
  {
    type: "h2",
    id: "why",
    text: "Why Probes Dominate Ultrasound Lifetime Cost",
    number: 1,
    body: "The console usually outlives several probes.",
  },
  {
    type: "p",
    text: "A modern ultrasound console is a comparatively protected device: it sits on a cart, it is not handled, and its electronics are stable. The probes attached to it live an entirely different life. They are gripped, flexed at the cable strain relief, wiped with disinfectant, exposed to gel, occasionally dropped, and stored in whatever holder is nearest. Over a system's service life it is common for probe repair and replacement to exceed every other maintenance category combined, which makes probe handling the highest-return behaviour change available to an ultrasound department.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Ask what the service agreement covers before signing",
    text: "Probe cover is the clause that decides real annual cost. Confirm whether accidental damage, cable and connector faults, and internal-use probes are included, excluded, or capped per year.",
  },
  {
    type: "h2",
    id: "failures",
    text: "How Probes Actually Fail",
    number: 2,
    body: "Most failures are mechanical or chemical, not electronic.",
  },
  {
    type: "table",
    headers: ["Failure mode", "Typical cause", "How it presents"],
    rows: [
      ["Element dropout", "Impact from a drop or knock; delamination", "Vertical band of missing or degraded data in the image"],
      ["Lens wear or crazing", "Abrasive cleaning, incompatible disinfectant", "General loss of near-field detail, hazy image"],
      ["Membrane damage on internal probes", "Chemical incompatibility, mechanical stress", "Fluid ingress risk and an infection-control breach"],
      ["Cable conductor fracture", "Repeated sharp bending, running the cart over the cable", "Intermittent dropout, image changing when the cable is moved"],
      ["Strain relief failure", "Flexing at the probe or connector neck", "Visible cracking; progresses to conductor failure"],
      ["Connector pin damage", "Forced or careless connection, contamination", "Probe not recognised, or noise in the image"],
      ["Fluid ingress", "Cleaning above the permitted immersion line", "Erratic behaviour, corrosion, unsafe device"],
      ["Acoustic lens debonding", "Age, heat cycling, chemical attack", "Progressive sensitivity loss with depth"],
    ],
  },
  {
    type: "p",
    text: "Two implications follow. First, a large share of failures is preventable by handling and cleaning behaviour rather than by engineering intervention. Second, most failures degrade image quality gradually, so they are far more likely to be discovered by a deliberate test than by a clinician noticing a change mid-study.",
  },
  {
    type: "h2",
    id: "daily",
    text: "Daily Handling and Cleaning",
    number: 3,
    body: "Short rules, applied consistently, prevent most damage.",
  },
  {
    type: "table",
    headers: ["Practice", "Rule", "Reason"],
    rows: [
      ["Holders", "Return the probe to its holder between patients, every time", "Drops overwhelmingly happen from couches and trolleys"],
      ["Cable routing", "Keep cable off the floor and clear of cart wheels", "Wheel crush is a leading cause of conductor fracture"],
      ["Bending", "Never coil tightly or bend sharply at the strain relief", "Fatigue fracture accumulates invisibly"],
      ["Gel removal", "Wipe gel immediately after each use", "Dried gel encourages abrasive cleaning later"],
      ["Cleaning agents", "Only agents approved for that probe model", "Unapproved chemicals attack lens and membrane"],
      ["Cleaning technique", "Soft wipe; no abrasive pads or scrubbing", "Lens surface damage is irreversible"],
      ["Immersion", "Never above the manufacturer's marked line", "Fluid ingress condemns the probe"],
      ["Connection", "Align and seat the connector without force; lock it", "Bent pins cause recognition faults and noise"],
      ["Storage", "Hanging or supported storage, not loose in a drawer", "Contact damage and cable kinking"],
      ["Inspection", "Visual check of lens, housing, cable and connector each session", "Finds damage before it becomes a clinical problem"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "The three habits that cost the most",
    text: "Leaving a probe resting on the couch, driving the cart over its own cable, and using whichever disinfectant wipe is in the room. Each is trivial to change and each accounts for repeated, expensive probe replacement.",
  },
  {
    type: "h2",
    id: "reprocessing",
    text: "Reprocessing by Level of Use",
    number: 4,
    body: "The required level follows the contact, not the probe.",
  },
  {
    type: "p",
    text: "Reprocessing requirements are determined by what the probe contacts. Probes used on intact skin sit at the lowest level and require cleaning and low-level disinfection. Probes used on non-intact skin, or in procedures breaching the skin, require a higher level. Probes used for internal examinations require high-level disinfection using a method explicitly approved for the specific probe model. Sterile covers and sterile gel are required for procedural work, but a cover is never a substitute for reprocessing — covers can and do fail.",
  },
  {
    type: "table",
    headers: ["Use", "Reprocessing level", "Additional requirements"],
    rows: [
      ["Intact skin, diagnostic scanning", "Clean plus low-level disinfection", "Approved wipe or solution for the model"],
      ["Non-intact skin or wounds", "Higher-level disinfection per local policy", "Single-use covers and sterile gel where indicated"],
      ["Needle-guided or vascular access procedures", "Per local procedural policy", "Sterile cover, sterile gel, aseptic technique"],
      ["Internal examinations", "High-level disinfection by an approved method", "Traceable cycle records; probe-specific validation"],
      ["Intraoperative probes", "Manufacturer-specified sterilisation route", "Only methods listed for that model"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Traceability is part of the process",
    text: "For high-level disinfection, the record linking probe, patient, cycle and operator is what makes the process auditable. A reprocessing method without records cannot be defended after an incident.",
  },
  {
    type: "h2",
    id: "testing",
    text: "Testing and Early Detection",
    number: 5,
    body: "Look for degradation deliberately; it will not announce itself.",
  },
  {
    type: "p",
    text: "Gradual sensitivity loss is invisible to users who see it develop day by day. Periodic testing closes that gap. Two complementary approaches work: structured visual inspection of every probe on a fixed interval, and repeatable imaging checks that can be compared against a commissioning baseline. Element dropout is often detectable with a simple, consistent method — imaging a uniform target and looking for vertical bands — provided settings and technique are held constant between checks.",
  },
  {
    type: "table",
    headers: ["Check", "Interval", "Finding that triggers action"],
    rows: [
      ["Visual inspection of lens, housing, cable, connector", "Each session", "Any crack, crazing, cut or exposed conductor: remove from use"],
      ["Uniform-target image compared with baseline", "Periodic, per local policy", "New vertical band or focal dropout: engineering assessment"],
      ["Depth and sensitivity comparison against baseline", "Periodic", "Reduced penetration at fixed settings: assess for degradation"],
      ["Electrical safety and leakage testing", "Per local schedule", "Any failure: withdraw immediately"],
      ["Internal-probe integrity check", "Before each reprocessing cycle per policy", "Membrane compromise: withdraw and report"],
      ["Fleet inventory reconciliation", "Periodic", "Unaccounted probe: investigate before replacement is ordered"],
    ],
  },
  {
    type: "h2",
    id: "programme",
    text: "Building a Probe Care Programme",
    number: 6,
    body: "Ownership, records and training turn rules into behaviour.",
  },
  {
    type: "p",
    text: "A working programme has five components: an inventory in which every probe is an identified asset, a named owner for probe condition in each area, a written handling and reprocessing standard displayed where probes are used, a fixed testing interval with retained records, and induction training that covers handling explicitly rather than assuming it. Where probes move between rooms or departments, the inventory and the ownership rule matter more, not less — unowned probes are the ones that get damaged and the ones that disappear.",
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Report damage without blame",
    text: "Accidental drops are inevitable; concealment is what turns a repairable probe into a clinical risk. A no-blame reporting route gets damaged probes out of use immediately, which is the outcome that matters.",
  },
  {
    type: "h2",
    id: "contracts",
    text: "Cover, Repair and Replacement Decisions",
    number: 7,
    body: "Decide the economics before the probe fails, not after.",
  },
  {
    type: "p",
    text: "Options normally include manufacturer replacement, manufacturer or third-party repair where permitted, and inclusion of probes in a service agreement. Each has trade-offs in cost, turnaround, image performance after repair and warranty implications. What matters most operationally is turnaround with a defined loan arrangement: a department with a single probe of a given type and no loan provision has a single point of failure for an entire examination category. That risk is cheaper to remove at contract negotiation than to absorb as cancelled lists.",
  },
  {
    type: "table",
    headers: ["Decision factor", "Question to answer", "Why it matters"],
    rows: [
      ["Criticality", "Is this the only probe for a whole examination type?", "Determines whether loan cover is essential"],
      ["Turnaround", "How long is the department without the probe?", "Converts directly to cancelled or deferred studies"],
      ["Repair scope", "Which failures are repairable for this model?", "Cable and connector faults often are; element damage often is not"],
      ["Post-repair performance", "Is performance verified against a baseline?", "Prevents returning a degraded probe to clinical use"],
      ["Cover terms", "Accidental damage included, excluded or capped?", "The main driver of unbudgeted spend"],
      ["Fleet standardisation", "Can probes be shared across compatible systems?", "Reduces the number of single points of failure"],
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "What is the most common cause of probe failure?",
        a: "Mechanical damage and cable damage — drops from couches and trolleys, cart wheels crossing the cable, and fatigue at the strain relief — followed by chemical damage from unapproved cleaning agents.",
      },
      {
        q: "How is element dropout recognised?",
        a: "As a vertical band of missing or degraded information that stays in the same position within the image regardless of what is being scanned. Comparing against a baseline image of a uniform target makes it obvious.",
      },
      {
        q: "Can any hospital disinfectant wipe be used on probes?",
        a: "No. Only agents listed as compatible in that probe model's instructions may be used. Incompatible chemicals damage the acoustic lens and membranes, degrade image quality and can void warranty cover.",
      },
      {
        q: "Does a probe cover remove the need for high-level disinfection?",
        a: "No. Covers reduce contamination but can fail, so they supplement rather than replace the reprocessing level required by the type of contact.",
      },
      {
        q: "How often should probes be tested?",
        a: "Visual inspection every session, with periodic comparative image checks and electrical safety testing at intervals set by local policy and the maintenance schedule.",
      },
      {
        q: "Repair or replace?",
        a: "It depends on the failure mode, the model's repairability, verified performance after repair, and turnaround. Cable and connector faults are frequently repairable; impact damage to elements frequently is not.",
      },
      {
        q: "Should probes be included in the service contract?",
        a: "For most departments, yes — probe events dominate ultrasound maintenance spend. Confirm whether accidental damage is covered and whether loan probes are provided during repair.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "Protect the transducer and the system looks after itself.",
  },
  {
    type: "p",
    text: "Ultrasound reliability is largely probe reliability. Holders used every time, cables kept off the floor, only approved cleaning agents, reprocessing matched to the type of contact, deliberate periodic testing against a baseline, and a service agreement with clear probe cover and loan provision — that short list controls both the image quality the department reports on and the largest recurring line in its maintenance budget.",
  },
  {
    type: "articleCta",
    heading: "Need ultrasound probe service or replacement support?",
    subheading:
      "AbuFarha Medical Supplies provides ultrasound probe supply, service coordination, preventive maintenance and user training.",
    technology: "Ultrasound Systems",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Infection prevention and reprocessing",
        items: [
          { label: "World Health Organization — decontamination and infection prevention", url: "https://www.who.int/" },
          { label: "World Federation for Ultrasound in Medicine and Biology — probe reprocessing statements", url: "https://wfumb.info/" },
        ],
      },
      {
        title: "Equipment standards and quality control",
        items: [
          { label: "International Electrotechnical Commission — ultrasonic equipment and safety standards", url: "https://www.iec.ch/" },
          { label: "American Association of Physicists in Medicine — ultrasound quality control resources", url: "https://www.aapm.org/" },
        ],
      },
    ],
    note: "Reprocessing methods and agents must be confirmed against each probe model's published instructions and local infection-prevention policy.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Diagnostic ultrasound practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Ultrasound service and transducer management" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Maintenance and infection-prevention practice synthesis",
    disclaimer:
      "Educational guidance for equipment care. It does not replace manufacturer instructions, local infection-prevention policy or regulatory requirements.",
  },
];
