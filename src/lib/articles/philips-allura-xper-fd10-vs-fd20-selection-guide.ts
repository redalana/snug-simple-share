/**
 * Philips Allura Xper FD10 vs FD20 — Philips manufacturer cluster (selection).
 * Grounded strictly in the Allura Xper systems present in the AbuFarha portfolio.
 */

import type { ContentBlock, TocItem } from "../blog";

export const PHILIPS_FD10_VS_FD20_TOC: TocItem[] = [
  { id: "overview", title: "Overview: What the FD Number Means" },
  { id: "detector", title: "Detector Size and Anatomical Coverage" },
  { id: "clinical", title: "Clinical Suitability by Casemix" },
  { id: "comparison", title: "FD10 vs FD20 Side by Side" },
  { id: "room", title: "Room, Power and Layout Consequences" },
  { id: "lifecycle", title: "Service, Parts and Lifecycle Considerations" },
  { id: "decision", title: "A Casemix-Led Decision Framework" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PHILIPS_FD10_VS_FD20_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Within the Philips Allura Xper family of interventional angiography systems, the number after \"FD\" describes the flat detector diagonal in centimetres, not the generation of the system. An Allura Xper FD10 carries a detector of roughly 10 cm class diagonal geometry intended for cardiac work; an Allura Xper FD20 carries a substantially larger detector intended to cover vascular and body anatomy in a single field.",
      "That single dimension shapes almost every downstream decision: which procedures the room can support, how many runs a case needs, how much contrast is used, what the room must measure, and which service scope a hospital should buy. Choosing between the two is therefore a casemix decision, not a budget decision.",
      "This guide explains the practical difference between the FD10 and FD20 configurations that AbuFarha Medical supplies, installs and services, and gives a decision framework a cardiology or radiology department can defend to a tender committee.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Detector geometry, anatomical coverage, procedure suitability, room and infrastructure impact, service scope and a casemix-led selection framework for Philips Allura Xper FD10 and FD20 cath labs",
    audience:
      "Interventional cardiologists and radiologists, cath lab managers, biomedical engineering teams, procurement and tender committees",
    readingTime: "13 min read",
    technology: "Cath Lab Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Overview: What the FD Number Means",
    number: 1,
    body: "FD denotes flat detector size — the defining specification of an interventional room.",
  },
  {
    type: "p",
    text: "Philips Allura Xper systems replaced image intensifiers with flat dynamic detectors, and the family is named by detector diagonal. The AbuFarha portfolio includes Philips Allura Xper FD10 monoplane and biplane systems, Philips Allura Xper FD10/10 biplane systems, Philips Allura Xper FD20 monoplane systems and Philips Allura FD20/10 biplane systems. In every case the detector determines the field of view available per exposure, and the field of view determines whether an anatomical territory can be imaged in one run or must be imaged in several.",
  },
  {
    type: "ul",
    items: [
      "FD10 class detectors are optimised for the heart: a compact field, high frame-rate cardiac acquisition and tight geometry around the patient's chest.",
      "FD20 class detectors cover larger anatomy: abdominal aorta, iliacs, runoff vessels, and interventional oncology or neuro territories where a wide field reduces the number of acquisitions.",
      "Biplane designations such as FD10/10 and FD20/10 describe two detectors — a frontal and a lateral plane — acquiring simultaneously.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "The detector decides the number of runs, not just the picture",
    text: "A wider detector is rarely about prettier images. It is about covering a vessel territory in fewer acquisitions, which lowers cumulative contrast volume, shortens procedure time and reduces total fluoroscopy exposure for long peripheral cases.",
  },
  {
    type: "h2",
    id: "detector",
    text: "Detector Size and Anatomical Coverage",
    number: 2,
    body: "Coverage per exposure is the specification that changes clinical workflow.",
  },
  {
    type: "p",
    text: "Coronary angiography is a small-field task. The coronary tree fits comfortably inside an FD10 class field at the working angulations used in diagnostic and interventional cardiology, and the smaller detector allows the C-arm to be positioned close to the patient without collision, which matters in steep cranial and lateral projections. Peripheral and body work is the opposite case: an FD20 class field can capture a pelvic or femoral segment in one exposure, and stepping through a runoff study requires fewer stations.",
  },
  {
    type: "p",
    text: "This is why hospitals with a mixed vascular and cardiac programme frequently end up with two rooms of different geometry rather than one compromise room. Where only one room is affordable, the FD20 monoplane is generally the more flexible platform because it can perform cardiac work adequately while remaining capable in peripheral territory, whereas an FD10 room cannot be widened later.",
  },
  {
    type: "h2",
    id: "clinical",
    text: "Clinical Suitability by Casemix",
    number: 3,
    body: "Map procedures to geometry before comparing prices.",
  },
  {
    type: "table",
    headers: ["Programme", "Typical procedures", "Preferred Allura Xper configuration"],
    rows: [
      ["Diagnostic and interventional cardiology", "Coronary angiography, PCI, right heart studies", "FD10 monoplane"],
      ["Structural and complex cardiac", "Complex PCI, CTO, device work requiring dual projections", "FD10/10 biplane"],
      ["Peripheral vascular", "Iliac, femoral, runoff, dialysis access", "FD20 monoplane"],
      ["Combined vascular and neuro", "Carotid, cerebral, embolisation with lateral projection needs", "FD20/10 biplane"],
      ["Single-room district hospital", "Predominantly cardiac with occasional peripheral work", "FD20 monoplane as the flexible compromise"],
    ],
    caption:
      "Configuration guidance derived from the Philips Allura Xper systems in the AbuFarha portfolio; final selection must follow a documented casemix review.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Departments almost always over-specify plane count and under-specify detector size. A second plane accelerates a narrow set of complex procedures; detector size affects every peripheral case the room will ever perform.",
    clinicalInterpretation:
      "If fewer than one in ten planned cases genuinely require simultaneous orthogonal acquisition, a monoplane room with the correct detector size will serve the programme better than a biplane room with a small one.",
    hospitalRecommendation:
      "Bring twelve months of procedure logs to the specification meeting and classify each case by required field size and plane count before any vendor discussion begins.",
  },
  {
    type: "h2",
    id: "comparison",
    text: "FD10 vs FD20 Side by Side",
    number: 4,
    body: "The practical trade-offs, stated plainly.",
  },
  {
    type: "comparison",
    title: "Allura Xper FD10 versus FD20 in service",
    headers: ["Consideration", "Allura Xper FD10 class", "Allura Xper FD20 class"],
    rows: [
      ["Primary intent", "Cardiac interventional imaging", "Vascular, body and mixed interventional imaging"],
      ["Field per exposure", "Compact — matched to the coronary tree", "Wide — covers large vessel segments"],
      ["Peripheral runoff studies", "Possible but requires more stations", "Fewer stations, less contrast per study"],
      ["Steep angulation clearance", "Generally easier around the chest", "Requires more disciplined positioning"],
      ["Room footprint", "Smaller minimum room", "Larger room and control space"],
      ["Upgrade flexibility", "Detector size is fixed for the room's life", "Serves a wider casemix as the programme grows"],
    ],
    caption:
      "Comparative characteristics of the two detector classes as deployed and serviced in the field.",
  },
  {
    type: "h2",
    id: "room",
    text: "Room, Power and Layout Consequences",
    number: 5,
    body: "Detector choice changes the building, not only the equipment order.",
  },
  {
    type: "p",
    text: "A larger detector implies a larger C-arm envelope, wider clearance for table travel and, for biplane rooms, permanent floor and ceiling provision for the lateral plane. Radiation shielding is calculated from workload and geometry, so a room performing long peripheral runs needs shielding designed for that workload rather than for coronary casemix. Power quality, uninterruptible supply for the control and imaging chain, and cooling capacity for the generator and detector electronics must all be confirmed before civil works begin.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Fix geometry before pouring concrete",
    text: "Once the room shell is built, detector class is effectively locked. The lowest-cost moment to correct a specification error is during the installation and commissioning planning stage — never after handover.",
  },
  {
    type: "h2",
    id: "lifecycle",
    text: "Service, Parts and Lifecycle Considerations",
    number: 6,
    body: "Ownership cost follows the imaging chain and the service scope.",
  },
  {
    type: "ul",
    items: [
      "X-ray tube life is driven by workload and case mix; long peripheral programmes load the tube differently from short coronary lists.",
      "Flat detector replacement is the single largest unplanned cost in an interventional room and should be addressed explicitly in the service agreement.",
      "Preventive maintenance schedules cover the generator, detector, table, collimator, monitors and mechanical positioner — with documented dose and image-quality constancy testing.",
      "Technical support response times and spare-part availability determine real uptime more than any headline specification.",
      "Clinical training on the acquisition and dose-management workflow protects image quality after the applications team leaves.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs, commissions, trains on and maintains Philips Allura Xper systems, so the same organisation that specifies the detector class is accountable for its uptime. That continuity matters most in the first year, when acquisition protocols are still being tuned to local casemix.",
  },
  {
    type: "h2",
    id: "decision",
    text: "A Casemix-Led Decision Framework",
    number: 7,
    body: "Five questions that settle the choice.",
  },
  {
    type: "ul",
    items: [
      "What proportion of planned annual cases require a field wider than the coronary tree? Above roughly one in five, specify FD20 class.",
      "What proportion genuinely require simultaneous orthogonal projections? Below one in ten, monoplane is sufficient.",
      "Is a second interventional room planned within five years? If yes, differentiate the rooms rather than duplicating them.",
      "Does the available room shell physically accept the larger envelope and its shielding requirement?",
      "Does the service scope include detector and tube cover for the expected workload, not an average workload?",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is the Allura Xper FD20 simply a newer system than the FD10?",
        a: "No. The number is the flat detector diagonal class, not a generation marker. FD10 and FD20 systems were supplied in parallel for different clinical intents, and both appear in service today.",
      },
      {
        q: "Can an FD10 room be upgraded to a larger detector later?",
        a: "In practice no. Detector geometry is integral to the C-arm and room design, so field size should be treated as a permanent decision made at specification stage.",
      },
      {
        q: "Does a biplane room reduce contrast volume?",
        a: "For selected complex procedures, yes, because two projections are acquired from one injection. Across a general cardiac list the benefit is much smaller than departments expect.",
      },
      {
        q: "Which configuration suits a hospital starting an interventional programme?",
        a: "Most new programmes are best served by a single monoplane room matched to their dominant casemix, with the detector class chosen for the widest anatomy they intend to treat in the next five years.",
      },
      {
        q: "How is image quality maintained over the room's life?",
        a: "Through scheduled preventive maintenance with documented constancy testing, disciplined use of the system's dose and acquisition protocols, and prompt technical support when image-quality drift is first observed rather than after it affects reporting.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "FD10 and FD20 denote flat detector size class, not system generation.",
      "Detector size determines anatomical coverage per exposure, which drives contrast volume, procedure time and case suitability.",
      "FD10 class geometry suits cardiac programmes; FD20 class geometry suits vascular, body and mixed programmes.",
      "Plane count is usually over-specified while detector size is under-specified.",
      "Room shell, shielding and service scope must be planned around the chosen geometry before civil works start.",
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
    text: "Selecting between Philips Allura Xper FD10 and FD20 configurations is a clinical planning exercise with permanent consequences. Departments that classify their real casemix by field size and plane requirement before entering procurement consistently end up with rooms that remain appropriate a decade later; those that select on price or plane count alone rarely do. AbuFarha Medical supports that decision with specification review, installation and commissioning, applications training and long-term maintenance of the installed system.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Interventional practice and quality",
        items: [
          { label: "World Health Organization — diagnostic imaging and radiation safety resources", url: "https://www.who.int/" },
          { label: "International Atomic Energy Agency — interventional cardiology radiation protection", url: "https://www.iaea.org/" },
        ],
      },
      {
        title: "Equipment standards",
        items: [
          { label: "International Electrotechnical Commission — IEC 60601 series for interventional X-ray equipment", url: "https://www.iec.ch/" },
          { label: "American Association of Physicists in Medicine — interventional fluoroscopy quality control", url: "https://www.aapm.org/" },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          { label: "Philips — Allura Xper interventional system documentation", url: "https://www.philips.com/healthcare" },
        ],
      },
    ],
    note: "Configuration details must always be confirmed against the specific system's published technical documentation and its installed configuration record.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Interventional cardiology and vascular imaging practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Cath lab installation, commissioning and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer documentation and field service practice synthesis",
    disclaimer:
      "Educational procurement guidance. It does not replace manufacturer technical documentation, medical physics assessment or regulatory requirements.",
  },
];
