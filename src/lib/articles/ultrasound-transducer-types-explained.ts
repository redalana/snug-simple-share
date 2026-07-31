/**
 * Ultrasound transducer types explained — Ultrasound cluster (supporting).
 */

import type { ContentBlock, TocItem } from "../blog";

export const US_TRANSDUCERS_TOC: TocItem[] = [
  { id: "overview", title: "Why the Probe Decides the Examination" },
  { id: "principles", title: "How a Transducer Works" },
  { id: "families", title: "The Transducer Families" },
  { id: "frequency", title: "Frequency, Depth and Resolution" },
  { id: "selection", title: "Selecting a Probe by Examination" },
  { id: "care", title: "Handling, Cleaning and Failure Modes" },
  { id: "procurement", title: "Specifying a Probe Set" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const US_TRANSDUCERS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "In ultrasound, the transducer is not an accessory to the system — it is the imaging device. The console processes and displays what the probe delivers, and no amount of processing recovers information the probe never acquired. This is why two departments with identical consoles can have very different diagnostic capability: their probe sets are different.",
      "Probes differ along three axes that matter clinically: the shape of the field they produce, the frequency range they operate over, and the footprint that determines where they can be placed on the body. Understanding those three axes is enough to select correctly in almost every routine situation.",
      "This guide explains how transducers work, describes each family and its role, sets out how frequency governs the depth-versus-resolution trade-off, and covers the handling and procurement decisions that determine how long a probe set survives.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Transducer construction and operation, the main probe families, frequency and resolution trade-offs, selection by examination type, handling and cleaning, failure modes and probe-set specification",
    audience:
      "Sonographers and clinicians performing ultrasound, biomedical engineers, procurement teams and department managers",
    readingTime: "13 min read",
    technology: "Ultrasound Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Why the Probe Decides the Examination",
    number: 1,
    body: "Capability is set at the probe, then constrained by everything downstream.",
  },
  {
    type: "ul",
    items: [
      "The probe determines achievable spatial resolution through its frequency and aperture.",
      "The field shape determines whether the relevant anatomy fits in the image at all.",
      "The footprint determines whether an acoustic window can be reached — between ribs, or inside a cavity.",
      "Element count and array design influence beam control and therefore image uniformity.",
      "A degraded probe cannot be compensated for by console settings.",
      "Probe availability, not console capability, is usually what limits a department's examination range.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Specify probes before consoles",
    text: "Define the probe set your casemix requires, then choose the console that supports it well. Purchasing a high-specification console with an inadequate probe set is the most common configuration error in ultrasound procurement.",
  },
  {
    type: "h2",
    id: "principles",
    text: "How a Transducer Works",
    number: 2,
    body: "A piezoelectric array that both transmits and listens.",
  },
  {
    type: "table",
    headers: ["Element", "Role", "Effect on imaging"],
    rows: [
      ["Piezoelectric array", "Converts electrical pulses to sound and echoes back to signal", "Determines bandwidth and sensitivity"],
      ["Matching layer", "Improves acoustic coupling into tissue", "Improves transmission efficiency"],
      ["Backing (damping) layer", "Shortens the emitted pulse", "Shorter pulse improves axial resolution"],
      ["Acoustic lens", "Shapes the beam in the elevation plane", "Affects slice thickness"],
      ["Array geometry", "Linear, curved or phased arrangement", "Determines field shape and steering ability"],
      ["Cable and connector", "Carries many independent channels", "A common mechanical failure point"],
      ["Housing and seal", "Protects the array and permits cleaning", "Seal integrity governs disinfection safety"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Most clinically significant probe failures originate in the cable, connector or housing seal rather than in the array itself. They are mechanical, cumulative and largely preventable.",
    clinicalInterpretation:
      "Progressive element loss appears as persistent vertical dropout in a fixed position, which can be mistaken for a system fault or ignored as image noise.",
    hospitalRecommendation:
      "Include a scheduled probe inspection and a simple image-uniformity check in the departmental quality programme, and remove probes with confirmed dropout from clinical use.",
  },
  {
    type: "h2",
    id: "families",
    text: "The Transducer Families",
    number: 3,
    body: "Each family exists to solve a specific access and field-shape problem.",
  },
  {
    type: "table",
    headers: ["Family", "Field shape", "Typical frequency band", "Principal applications"],
    rows: [
      ["Curvilinear / convex", "Diverging sector, wide at depth", "Low to mid", "Abdominal, obstetric, general imaging"],
      ["Linear", "Rectangular, uniform width", "High", "Vascular, musculoskeletal, small parts, procedural guidance"],
      ["Phased array", "Sector from a small footprint", "Low to mid", "Cardiac imaging, intercostal and transcranial windows"],
      ["Microconvex", "Small-radius sector", "Mid to high", "Neonatal, paediatric and confined-window imaging"],
      ["Endocavity", "Wide sector from an elongated shaft", "Mid to high", "Transvaginal and transrectal imaging"],
      ["Transoesophageal", "Sector from an intracorporeal position", "Mid to high", "Detailed cardiac and intra-procedural imaging"],
      ["Matrix / volume", "Electronically steered volume", "Application dependent", "Three- and four-dimensional acquisition"],
      ["Intraoperative and specialty", "Purpose-shaped fields", "Mid to high", "Surgical, laparoscopic and vascular access work"],
      ["Pencil / continuous-wave", "Non-imaging single line", "Low", "High-velocity Doppler measurement"],
    ],
  },
  {
    type: "h2",
    id: "frequency",
    text: "Frequency, Depth and Resolution",
    number: 4,
    body: "One trade-off explains most probe-selection decisions.",
  },
  {
    type: "ul",
    items: [
      "Higher frequency shortens wavelength, improving axial resolution and fine detail.",
      "Higher frequency also increases attenuation, so penetration falls.",
      "Lower frequency penetrates further at the cost of resolution.",
      "Broadband probes cover a range, allowing frequency to be traded within one probe — but not without limit.",
      "Harmonic imaging uses higher harmonic frequencies generated in tissue to improve contrast at usable depth.",
      "Elevation resolution, determined by the lens or matrix design, is often the limiting factor in small-structure imaging.",
      "Focus and aperture settings alter lateral resolution at a chosen depth and are part of technique, not fixed properties.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Match frequency to target depth first",
    text: "Before adjusting gain or processing, confirm the probe frequency suits the depth of the target. A superficial structure scanned with a low-frequency abdominal probe will look poor no matter how the console is optimised.",
  },
  {
    type: "h2",
    id: "selection",
    text: "Selecting a Probe by Examination",
    number: 5,
    body: "A practical mapping from clinical task to probe family.",
  },
  {
    type: "table",
    headers: ["Examination", "Primary probe", "Alternative or adjunct"],
    rows: [
      ["General abdominal", "Curvilinear", "Linear for superficial structures; phased array for difficult windows"],
      ["Obstetric — routine", "Curvilinear", "Endocavity in early pregnancy where indicated"],
      ["Gynaecological pelvic", "Endocavity", "Curvilinear transabdominal for overview"],
      ["Echocardiography", "Phased array", "Continuous-wave pencil probe for high velocities; transoesophageal for detail"],
      ["Peripheral vascular", "Linear", "Curvilinear for deep vessels and large habitus"],
      ["Musculoskeletal", "Linear high frequency", "Small-footprint linear for irregular surfaces"],
      ["Thyroid, breast and small parts", "Linear high frequency", "Standoff technique for very superficial lesions"],
      ["Neonatal and paediatric", "Microconvex or linear", "Frequency selected for small body depth"],
      ["Vascular access and nerve blocks", "Linear", "Small footprint for confined sites"],
      ["Drainage and biopsy guidance", "Curvilinear or linear by depth", "Needle guide accessories where used"],
      ["Point-of-care focused assessment", "Curvilinear plus linear minimum", "Phased array where cardiac views are needed"],
    ],
  },
  {
    type: "h2",
    id: "care",
    text: "Handling, Cleaning and Failure Modes",
    number: 6,
    body: "Probe life is determined more by handling than by usage hours.",
  },
  {
    type: "table",
    headers: ["Failure mode", "Cause", "Prevention"],
    rows: [
      ["Element dropout", "Impact from a drop, or array damage", "Probe holders in use, cable management, staff training"],
      ["Cable conductor break", "Repeated flexing, running over cables with the cart", "Support cables, never wrap tightly, keep off the floor"],
      ["Connector pin damage", "Forcing connections, frequent swapping", "Correct connection technique; minimise unnecessary swaps"],
      ["Lens delamination", "Incorrect cleaning agents or excessive heat", "Use only manufacturer-approved agents and methods"],
      ["Housing seal failure", "Ageing, chemical attack, mechanical damage", "Regular inspection; withdraw from use if suspected"],
      ["Fluid ingress", "Immersion beyond the permitted line, seal failure", "Follow immersion limits exactly"],
      ["Cross-contamination risk", "Incorrect reprocessing level for the contact type", "Documented reprocessing protocol per probe type"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Reprocessing level follows contact type",
    text: "Probes contacting intact skin, mucous membranes or sterile tissue require different reprocessing levels. Applying a general surface-wipe protocol to an endocavity probe is both an infection-control failure and, in most jurisdictions, a regulatory one.",
  },
  {
    type: "h2",
    id: "procurement",
    text: "Specifying a Probe Set",
    number: 7,
    body: "The probe set is the specification that determines clinical scope.",
  },
  {
    type: "ul",
    items: [
      "List the examinations to be performed, by department and expected volume.",
      "Derive the required field shapes, frequency ranges and footprints from that list.",
      "Confirm each named probe model is included in the quotation, not merely compatible.",
      "Check the number of active probe ports; ports determine how many probes are usable without swapping.",
      "Confirm which probes are needed simultaneously in the same session to avoid a bottleneck.",
      "Include probe holders, needle guides, covers and any required disinfection accessories.",
      "Budget a probe replacement cycle; probes are recurring cost in practice.",
      "Confirm probe coverage explicitly in the service contract, as probe failure is a leading downtime cause.",
      "Test the exact probe models on volunteers before award, not equivalent models.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Procurement errors that limit clinical scope",
    items: [
      "Buying a high-end console with a two-probe set that cannot cover the casemix.",
      "Assuming a probe is included because it appeared in the demonstration.",
      "Overlooking port count, forcing constant probe swapping in busy lists.",
      "Excluding probes from service coverage.",
      "Omitting reprocessing accessories for endocavity probes.",
      "Failing to plan a replacement budget for probes damaged in normal use.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Which ultrasound probe is the most useful overall?",
        a: "For general imaging the curvilinear probe covers the widest range of abdominal and obstetric work, and a high-frequency linear probe covers superficial, vascular and procedural imaging. Most general departments regard those two as the minimum viable set, adding a phased array where cardiac imaging is performed.",
      },
      {
        q: "Why does a high-frequency probe give poor images of deep structures?",
        a: "Because attenuation increases with frequency. The higher the frequency, the more the beam is absorbed and scattered before reaching depth, so returning echoes from deep structures are too weak to form a useful image. Depth requires lower frequency and accepts lower resolution.",
      },
      {
        q: "What causes vertical dark lines in an ultrasound image?",
        a: "Most often element or channel dropout in the transducer, or a broken conductor in the cable. The distinguishing feature is that the defect stays in the same position on the image regardless of what is being scanned. Confirm by scanning a uniform target and, if present, withdraw the probe from clinical use.",
      },
      {
        q: "How should probes be cleaned?",
        a: "Strictly according to the manufacturer's instructions for that specific probe, with the reprocessing level determined by what the probe contacts. Approved agents, contact times and immersion limits vary between models, and using unapproved agents is a common cause of lens and seal damage.",
      },
      {
        q: "How many probe ports should a system have?",
        a: "Enough that the probes needed within a single examination session can remain connected. Frequent swapping lengthens examinations and is a leading cause of connector damage, so port count is a practical workflow specification rather than a technical detail.",
      },
      {
        q: "Are probes covered by service contracts?",
        a: "Not automatically. Probe coverage is frequently excluded or limited, and because probes are the most commonly damaged component this is one of the most important inclusions to confirm in writing before signing.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "The probe set is the clinical specification.",
  },
  {
    type: "p",
    text: "Transducer choice determines field shape, achievable resolution and physical access — the three things that decide whether an examination is diagnostic. Select by target depth and access window rather than by habit, protect probes as the fragile precision instruments they are, and specify the probe set explicitly in procurement with service coverage and a replacement budget attached. A modest console with the right, well-maintained probes will outperform a premium console with the wrong ones.",
  },
  {
    type: "articleCta",
    heading: "Need the right probe set for your casemix?",
    subheading:
      "AbuFarha Medical Supplies supports ultrasound configuration, probe supply, applications training and service across supported brands.",
    technology: "Ultrasound Systems",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Equipment standards",
        items: [
          { label: "International Electrotechnical Commission — ultrasonic equipment standards", url: "https://www.iec.ch/" },
          { label: "World Federation for Ultrasound in Medicine and Biology — safety and practice statements", url: "https://wfumb.info/" },
        ],
      },
      {
        title: "Reprocessing and infection control",
        items: [
          { label: "World Health Organization — infection prevention and control guidance", url: "https://www.who.int/" },
          { label: "World Health Organization — decontamination and reprocessing of medical devices", url: "https://www.who.int/" },
        ],
      },
    ],
    note: "Manufacturer instructions for each probe model take precedence over any general guidance summarised here.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Diagnostic ultrasound" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Probe service and lifecycle" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Educational synthesis and service practice",
    disclaimer:
      "Educational content. Always follow the manufacturer's instructions for probe use, cleaning and reprocessing.",
  },
];
