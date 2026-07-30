import type { ContentBlock, TocItem } from "@/lib/blog";
import solMri from "@/assets/sol-mri.jpg";

export const MRI_MAGNET_TYPES_EXPLAINED_TOC: TocItem[] = [
  { id: "overview", title: "The Magnet Is the Scanner" },
  { id: "superconducting-physics", title: "Superconducting Magnet Physics" },
  { id: "niobium-titanium-windings", title: "Niobium-Titanium Windings" },
  { id: "cryostat-design", title: "The Cryostat: Keeping the Coil at 4 K" },
  { id: "shielding", title: "Active vs Passive Magnetic Shielding" },
  { id: "permanent-magnets", title: "Permanent Magnets and Open Architecture" },
  { id: "resistive-magnets", title: "Resistive Electromagnets" },
  { id: "homogeneity-shimming", title: "Field Homogeneity and Shimming" },
  { id: "ramping-quenching", title: "Ramping, Persistent Mode and Quenching" },
  { id: "bore-diameter", title: "Bore Diameter and Wide-Bore Design" },
  { id: "siting-implications", title: "Siting Implications by Magnet Type" },
  { id: "running-costs", title: "Running-Cost Implications by Magnet Type" },
  { id: "helium-supply", title: "Helium Supply and Zero Boil-Off Technology" },
  { id: "safety-considerations", title: "Magnet-Specific Safety Considerations" },
  { id: "selection-guidance", title: "Selection Guidance by Hospital Profile" },
  { id: "future", title: "Where Magnet Technology Is Heading" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MRI_MAGNET_TYPES_EXPLAINED_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solMri,
    imageAlt: "Superconducting MRI magnet cross-section during hospital installation",
    paragraphs: [
      "Every diagnostic property of an MRI system — its signal-to-noise ratio, its spatial resolution, its scan speed, its tolerance of metal implants, and a large share of its lifetime cost — traces back to a single design decision: which type of magnet generates the static field. Superconducting, permanent and resistive magnets are not simply different price points on the same technology; they are different physics, different construction, different failure modes and different long-term obligations for the hospital that hosts them.",
      "For most procurement teams the magnet is a black box behind a plastic cover, but the choice of magnet type determines whether the department needs a helium supply contract or none at all, whether the floor must bear an extra several tonnes, whether the room needs a quench pipe routed to open air, and whether running costs are dominated by cryogen and electricity or are close to negligible. Getting this wrong is expensive in ways that only become visible years after commissioning.",
      "This guide explains how each magnet type is built and how it behaves in clinical service: the superconducting niobium-titanium coil and its cryostat, active and passive shielding strategies, permanent and resistive open designs, the practical meaning of field homogeneity and shimming, what actually happens during ramping and during a quench, why bore diameter matters clinically as much as physically, and how siting and running costs differ enough between the three technologies to change a hospital's entire business case.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Magnet physics and construction, superconducting windings, cryostats, shielding, permanent and resistive designs, homogeneity, shimming, ramping, quenching, bore diameter, siting and running costs",
    audience:
      "Hospital directors, procurement managers, biomedical engineers, radiology department heads and facilities planners",
    readingTime: "17 min read",
    technology: "MRI Magnet Systems",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "The Magnet Is the Scanner",
    body: "Three magnet technologies compete in clinical MRI today — superconducting, permanent and resistive — and each represents a different trade-off between field strength, field stability, running cost and physical footprint.",
  },
  {
    type: "ul",
    items: [
      "Field strength and field stability are not the same property. A permanent magnet can hold a perfectly stable field for decades with zero power input, but only at low field strengths (typically up to about 0.4T); a superconducting magnet reaches 1.5T–3T and beyond with excellent stability, but only by maintaining a coil at liquid-helium temperature indefinitely.",
      "The magnet type a hospital chooses locks in its cost structure for 10–15 years before a single patient is scanned. Superconducting systems trade a helium and cryogenics commitment for diagnostic performance; permanent and resistive systems trade some performance for a running-cost profile close to any other piece of capital equipment.",
      "Shielding strategy, not coil design alone, decides how much building a magnet needs. Two magnets of identical field strength can require siting footprints that differ by a factor of two or more depending on whether the fringe field is actively cancelled by opposing coils or passively contained by steel.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "Superconducting magnets dominate 1.5T and 3T clinical imaging because persistent current gives both high field and excellent long-term stability.",
      "Niobium-titanium wire loses all electrical resistance below about 9.8 K and is operated near 4 K inside a liquid-helium (or now often helium-free) cryostat.",
      "Active shielding uses a second, opposing coil to cancel the fringe field at short range; passive shielding uses steel plate. Active shielding is now standard because it shrinks the room.",
      "Permanent and resistive open magnets trade field strength for zero cryogen dependency, open patient access and materially lower running costs.",
      "Homogeneity is restored after installation by passive and active shimming, and must be periodically re-verified — magnets drift as nearby steel structures and equipment change.",
      "A quench is a safety event, not a routine one; modern zero boil-off and low-helium-inventory magnets have changed but not eliminated this risk profile.",
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
    id: "superconducting-physics",
    number: 2,
    text: "Superconducting Magnet Physics",
    body: "Superconductivity allows an electrical current to flow with zero resistance, which is what makes a stable, high-strength clinical magnetic field practical at all.",
  },
  {
    type: "p",
    text: "In an ordinary resistive coil, sustaining a large current requires continuous power input, and that power is dissipated as heat proportional to resistance. Below a critical temperature, certain alloys lose electrical resistance entirely. A current induced in a closed superconducting loop under these conditions will, in principle, flow forever without any external power source, because there is no resistive loss to overcome. This persistent-current property is the entire basis of superconducting MRI: once the magnet is ramped to its operating field, the power supply is disconnected and the coil sustains full field on its own.",
  },
  {
    type: "p",
    text: "Clinical MRI magnets are wound as long solenoids using kilometres of superconducting wire, cooled to their operating temperature, then energised gradually by an external power supply until the desired field strength is reached. The two leads are then closed into a superconducting switch that shorts the circuit, and the external supply is removed. From that point the magnet exists in what engineers call persistent mode — the same current loops indefinitely as long as the coil remains below its critical temperature.",
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Why superconductivity buys diagnostic quality, not just field strength",
    text: "A persistent, resistance-free current is inherently far more stable than any current a power supply could regulate directly, because there is no electronic noise, ripple or drift once the switch is closed. This is why superconducting systems achieve the field stability that fine-detail sequences — diffusion, spectroscopy, functional MRI — depend on, independent of raw field strength.",
  },
  {
    type: "h2",
    id: "niobium-titanium-windings",
    number: 3,
    text: "Niobium-Titanium Windings",
    body: "Nearly every clinical superconducting MRI magnet is wound from niobium-titanium (NbTi) alloy wire embedded in a copper matrix, chosen for its practical combination of critical temperature, ductility and cost.",
  },
  { type: "h3", text: "Why niobium-titanium" },
  {
    type: "p",
    text: "NbTi becomes superconducting below approximately 9.8 K and can carry high current densities at the roughly 4 K operating temperature achieved by liquid helium or modern closed-cycle refrigeration. Unlike brittle high-temperature superconducting ceramics, NbTi wire is ductile and can be drawn, twisted and wound into the precise multi-layer solenoid geometry a clinical magnet requires, then formed into a rigid, epoxy-impregnated coil assembly capable of withstanding enormous internal magnetic forces without moving.",
  },
  { type: "h3", text: "Wire and coil construction" },
  {
    type: "p",
    text: "Individual NbTi filaments, each only micrometres across, are embedded in a copper matrix that provides mechanical support and, critically, a low-resistance path for current to flow through if a small region briefly loses superconductivity — protecting the wire from immediately burning out. Many filaments are twisted together into a composite wire, which is then wound into several coaxial solenoid sections carefully positioned and current-balanced to produce a highly uniform field over the imaging volume rather than simply a strong one.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Copper is a safety feature, not filler",
    text: "The copper matrix surrounding NbTi filaments exists specifically to protect the coil during a localised loss of superconductivity. If a small section of wire warms past its critical temperature, current can briefly divert into the copper rather than dumping all its energy into the resistive NbTi at that spot, buying time for protection circuits to react before a full quench propagates.",
  },
  {
    type: "h2",
    id: "cryostat-design",
    number: 4,
    text: "The Cryostat: Keeping the Coil at 4 K",
    body: "The cryostat is the vacuum-insulated vessel that keeps the superconducting coil near absolute zero while the room around it stays at normal temperature, and its design has changed more than any other magnet subsystem over the past two decades.",
  },
  {
    type: "p",
    text: "A traditional cryostat surrounds the coil with a bath of liquid helium at approximately 4.2 K, itself enclosed by a vacuum jacket and one or more radiation shields cooled to intermediate temperatures by a mechanical cold head, all designed to minimise heat leak into the coldest region. Historically these systems required periodic helium top-ups because some boil-off was unavoidable, and a cold-head or chiller failure would allow the helium bath to warm and boil away over hours to days.",
  },
  {
    type: "p",
    text: "Modern zero boil-off (ZBO) and low-helium or helium-free designs use a two-stage cold head to recondense helium vapour before it can escape, or replace the liquid bath almost entirely with conduction cooling of the coil itself, reducing total helium inventory from several thousand litres to as little as a few litres in the newest sealed magnets. This has transformed the running-cost and siting profile of superconducting MRI: less helium at risk means smaller consequences from a quench, lower topping-up cost, and in some designs no dedicated helium fill port at all.",
  },
  {
    type: "diagram",
    id: "mri-anatomy",
    title: "MRI machine anatomy — cross-section of a superconducting system",
    purpose: "Shows the physical relationship between the magnet windings, cryostat, shim coils, gradient coils, RF body coil and patient bore, so procurement and facilities teams can locate exactly which subsystem this article is discussing at any point.",
    alt: "Cross-sectional diagram of a superconducting MRI scanner showing, from outside inwards, the outer vacuum vessel, the magnet windings inside the liquid-helium cryostat, radiation shields, shim coils, gradient coils, the RF transmit body coil and the patient bore, with labels for the quench pipe, cold head, RF-shielded room and equipment room.",
    caption: "Figure 1 — Anatomy of a superconducting MRI magnet. The coil itself occupies only the outer ring of the assembly; the majority of the cross-section is cryostat, shielding and gradient hardware.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Helium inventory has fallen by roughly two orders of magnitude",
    text: "A conventional 1.5T magnet from the 1990s might hold 1,500–2,000 litres of liquid helium. Contemporary sealed, low-helium magnets from major manufacturers can operate with under 10 litres, recondensed continuously in a closed loop, drastically reducing both consumption and the volume that must be vented in the rare event of a quench.",
  },
  {
    type: "h2",
    id: "shielding",
    number: 5,
    text: "Active vs Passive Magnetic Shielding",
    body: "Every clinical magnet produces a fringe field that extends well beyond the bore, and it must be controlled so that it does not interfere with pacemakers, credit cards, computer monitors or adjacent rooms; active and passive shielding are the two engineering approaches to that problem.",
  },
  {
    type: "table",
    caption: "Active versus passive magnetic shielding",
    headers: ["Approach", "How it works", "Effect on siting", "Trade-off"],
    rows: [
      [
        "Active shielding",
        "A second, larger-diameter coaxial coil carries current in the opposite sense to the main coil, cancelling most of the fringe field at a given radius",
        "Shrinks the 0.5 mT and 5 gauss safety-line footprint substantially, allowing smaller rooms and shorter distances to adjacent occupied spaces",
        "Adds coil complexity, weight and stored energy to the magnet, and increases the amount of superconducting wire and cryogenic surface area required",
      ],
      [
        "Passive shielding",
        "Steel plate or laminate bolted to the room's walls, floor and ceiling redirects and contains the fringe field by providing a low-reluctance path for field lines",
        "Requires a larger room footprint for a given contained-field boundary, and adds substantial structural steel weight to the building",
        "Adds no complexity to the magnet itself, but shifts cost and weight onto the building; retrofitting shielding after construction is disruptive",
      ],
      [
        "Combined shielding",
        "A modestly actively shielded magnet paired with a lighter passive steel liner",
        "Balances room size against structural loading, common on wide-bore and 3T systems where fringe fields are otherwise large",
        "Requires coordinated design between the OEM's magnet engineers and the site's structural engineers",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Active shielding has become the default on nearly all new superconducting systems because it converts a building problem into a magnet-manufacturing problem, and manufacturers can solve that more predictably than a hospital's facilities team can solve an unplanned steel retrofit.",
    clinicalInterpretation: "Shielding strategy has no direct effect on image quality; it is entirely a safety and siting consideration governing where the 0.5 mT controlled-access line and 5 gauss (0.5 mT) line for implanted devices fall relative to walls, floors above and below, and adjacent corridors.",
    hospitalRecommendation: "Confirm the specific shielding approach, resulting fringe-field footprint and any structural floor-loading implications during the site survey, before committing to a room location — moving a magnet after the fact is a major, avoidable expense.",
  },
  {
    type: "callout",
    variant: "important",
    title: "Fringe field extends in three dimensions",
    text: "The 0.5 mT safety boundary is not confined to the floor plan; it extends upward and downward through the building. Any room directly above or below a magnet room — including on a different clinical service line — must be assessed for fringe-field exposure just as carefully as adjacent rooms on the same floor.",
  },
  {
    type: "h2",
    id: "permanent-magnets",
    number: 6,
    text: "Permanent Magnets and Open Architecture",
    body: "Permanent magnets generate their static field from blocks of magnetised material rather than an electric current, delivering a stable low-to-mid field with an open, C-shaped or double-donut geometry and none of the cryogen dependency of a superconducting system.",
  },
  {
    type: "p",
    text: "A permanent MRI magnet typically consists of two large pole faces — often built from neodymium-iron-boron or ferrite blocks — mounted above and below the patient and joined by a steel yoke that completes the magnetic circuit. Because the field is generated by the intrinsic magnetisation of the material rather than by current flow, there is no ramping, no quench risk and no cryogen of any kind. The trade-off is field strength: permanent designs are practically limited to around 0.2T–0.4T because achieving higher fields would require an impractically large and heavy magnet structure.",
  },
  {
    type: "p",
    text: "The open, vertical-field geometry of most permanent systems is itself a clinical advantage independent of field strength: patients who cannot tolerate a closed bore because of claustrophobia, severe obesity, or the need for interventional access during the scan can often be accommodated on an open permanent system when a closed-bore superconducting magnet is not an option.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Permanent magnets and floor loading",
    text: "The steel yoke and magnet blocks in a permanent system are extremely heavy — often 10 to 20 tonnes concentrated over a small footprint — which can exceed the load rating of upper-floor rooms in existing buildings. Ground-floor or structurally reinforced siting is frequently required and should be confirmed early in any retrofit project.",
  },
  {
    type: "h2",
    id: "resistive-magnets",
    number: 7,
    text: "Resistive Electromagnets",
    body: "Resistive magnets generate their field with an ordinary electromagnet coil carrying current at room temperature, trading continuous electrical running cost for the complete absence of cryogenic infrastructure.",
  },
  {
    type: "p",
    text: "A resistive electromagnet has no persistent-mode advantage: the coil has ordinary electrical resistance, so sustaining the field requires a continuous, substantial power supply for as long as the magnet is in use, and that power is dissipated as heat that must be actively removed by water cooling. This limits achievable field strength to roughly 0.2T–0.3T in practice, since higher fields would demand power and cooling well beyond what is practical for a hospital installation.",
  },
  {
    type: "p",
    text: "Resistive systems can be switched fully off between uses, which is not possible with a superconducting magnet and only theoretically possible (by physical remagnetisation) with a permanent one. This makes resistive open magnets attractive in settings where electricity is available but reliable, uninterrupted supply for a permanently energised magnet is a concern, or where the lowest possible upfront and cryogenic-free installation cost is the priority.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Resistive systems shift cost from capital to electricity",
    text: "Because a resistive magnet draws continuous power whenever imaging, its lifetime electricity cost is a materially larger share of total cost of ownership than for a superconducting system, where the magnet itself draws almost no power once ramped. Procurement teams should model electricity tariffs over the expected service life, not just the purchase price, before comparing resistive against superconducting options for a low-field programme.",
  },
  {
    type: "h2",
    id: "homogeneity-shimming",
    number: 8,
    text: "Field Homogeneity and Shimming",
    body: "A clinically usable magnet must produce a field uniform to a few parts per million over the imaging volume, and achieving that uniformity — shimming — is a distinct engineering discipline from generating the field strength itself.",
  },
  {
    type: "p",
    text: "No magnet, of any type, is manufactured with sufficient inherent uniformity for clinical imaging. Manufacturing tolerances in the coil or magnet blocks, and the influence of nearby steel structure in the building itself, all distort the field. Homogeneity is restored in two stages: passive shimming, where small pieces of steel are placed at calculated positions around the bore to locally correct field distortions, and active shimming, where a set of dedicated shim coils carry small, precisely controlled currents that correct residual inhomogeneity electronically and can be re-tuned per patient or per protocol.",
  },
  {
    type: "p",
    text: "Passive shimming is performed once at installation, using field-mapping measurements to calculate exact shim-plate placement, and is periodically re-verified because homogeneity can drift if nearby ferromagnetic structures change — a new steel beam, an adjacent MRI-incompatible trolley left too close, or building renovation work can all measurably perturb a magnet's field. Active shimming happens automatically before most clinical sequences, correcting for the patient's own tissue and any remaining hardware asymmetry.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Homogeneity is not a one-time achievement",
    items: [
      "Assuming commissioning-day field maps remain valid indefinitely without periodic re-verification",
      "Storing or wheeling ferromagnetic equipment near the bore between scans, subtly shifting local shim",
      "Ignoring building changes (structural steel, new equipment rooms, lifts) near the magnet room after installation",
      "Skipping active shim re-optimisation on protocols most sensitive to inhomogeneity, such as fat-saturation and spectroscopy sequences",
    ],
  },
  {
    type: "h2",
    id: "ramping-quenching",
    number: 9,
    text: "Ramping, Persistent Mode and Quenching",
    body: "Ramping is the controlled process of bringing a superconducting magnet up to field at installation, and quenching is the sudden, uncontrolled loss of superconductivity that every site must be engineered to handle safely, however rarely it occurs.",
  },
  { type: "h3", text: "Ramping" },
  {
    type: "p",
    text: "During commissioning, an external power supply gradually increases current through the coil over several hours, following a carefully controlled ramp rate designed to limit mechanical and thermal stress on the windings. Once the target field is reached, the persistent-current switch closes the circuit on itself and the external supply is disconnected — from that moment the magnet sustains its own field indefinitely without further power input. Ramping down is only performed deliberately, for relocation, major service work, or decommissioning, since bringing a magnet back up to field is itself a multi-hour, specialist procedure with its own cost and helium implications on older designs.",
  },
  { type: "h3", text: "Quenching" },
  {
    type: "p",
    text: "A quench occurs when a portion of the superconducting coil warms above its critical temperature — through a cooling system failure, a mechanical disturbance, or occasionally as an emergency safety measure deliberately triggered to stop a dangerous ferromagnetic object being pulled into the bore. Once any section loses superconductivity, its resistance reappears and the stored magnetic energy is dumped almost instantly as heat, boiling the surrounding helium violently and forcing it through the quench pipe to open air outside the building within seconds.",
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Quench venting is a life-safety system",
    text: "Helium gas displaces oxygen and can cause asphyxiation in a confined space if a quench vent is blocked, undersized or improperly routed. The quench pipe must terminate safely outdoors, be protected against blockage, and be verified as part of routine facilities inspection — this is one of the few MRI safety systems that can matter in seconds, not minutes.",
  },
  {
    type: "p",
    text: "After a quench, all helium (in a wet-bore design) or a substantial share of the coolant capacity (in ZBO designs) must be replaced and the magnet re-ramped from zero — a process that typically takes the scanner out of service for one to several days and carries a real, though indicative, cost that should be built into any long-term service contract discussion rather than treated as a hypothetical.",
  },
  {
    type: "h2",
    id: "bore-diameter",
    number: 10,
    text: "Bore Diameter and Wide-Bore Design",
    body: "Bore diameter affects patient comfort, positioning flexibility and, at the margins, achievable homogeneity, and the industry's shift from 60 cm to 70 cm wide-bore has become close to a standard expectation for new systems.",
  },
  {
    type: "p",
    text: "Standard-bore superconducting systems have historically used a 60 cm internal diameter, sufficient for the great majority of patients but restrictive for larger body habitus, some interventional setups, and patients who experience claustrophobia. Wide-bore systems, now available at 70 cm across most 1.5T and many 3T platforms, ease patient positioning, extend usable weight limits, and materially reduce claustrophobia-related scan aborts and required sedation, at a modest cost in magnet engineering complexity because the coil and gradient set must maintain homogeneity over a larger internal diameter.",
  },
  {
    type: "p",
    text: "Bore diameter is independent of magnet type in principle, but is most relevant to superconducting and resistive closed-bore systems; permanent open magnets solve the same access and comfort problem geometrically, by removing the tunnel entirely rather than widening it.",
  },
  {
    type: "diagram",
    id: "field-strength-decision",
    title: "Magnet type and field strength decision pathway",
    purpose: "Helps hospital planners connect clinical programme requirements to the magnet type and field strength that can realistically deliver them, before a site survey narrows the choice further.",
    alt: "Decision-flow diagram starting from clinical programme requirements (general radiology, neuro/oncology/MSK detail, bariatric or claustrophobic patients, budget-constrained low-field screening), branching to recommended magnet type and field strength: superconducting 1.5T, superconducting 3T, permanent open low-field, or resistive open low-field, with siting and running-cost notes at each branch.",
    caption: "Figure 2 — A simplified decision pathway from clinical need to magnet type; final selection should always be confirmed against a site-specific engineering survey.",
  },
  {
    type: "h2",
    id: "siting-implications",
    number: 11,
    text: "Siting Implications by Magnet Type",
    body: "The three magnet types impose meaningfully different demands on the room, the building structure and the surrounding safety zones, and these differences should be assessed before, not after, a room is chosen.",
  },
  {
    type: "comparison",
    title: "Siting comparison by magnet type",
    headers: ["Magnet type", "Structural load", "Fringe-field footprint", "Cryogen infrastructure", "Room flexibility"],
    rows: [
      [
        "Superconducting (1.5T/3T)",
        "Moderate to high; magnet weight typically several tonnes, concentrated",
        "Actively shielded designs keep this compact; unshielded legacy magnets need a large exclusion zone",
        "Quench pipe to outside air required; helium fill access needed periodically or at service",
        "Least flexible — once sited, relocation is a major, specialist undertaking",
      ],
      [
        "Permanent (open, low-field)",
        "Very high; concentrated yoke and pole weight often 10-20 tonnes",
        "Small, since field strength is inherently low and largely self-contained by the yoke",
        "None",
        "Ground-floor or reinforced-floor siting is usually required; otherwise straightforward",
      ],
      [
        "Resistive (open, low-field)",
        "Low to moderate",
        "Small, comparable to permanent systems at similar field strength",
        "None, but requires robust water cooling and a substantial continuous electrical supply",
        "Most flexible of the three; easiest to site in constrained or existing buildings",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Structural loading and fringe field are frequently assessed separately by different consultants, but they interact: a magnet sited to satisfy the fringe-field boundary may sit directly over a floor that cannot bear its weight, or vice versa, and both constraints must be resolved together in the same site survey.",
    clinicalInterpretation: "None of these siting differences affect diagnostic image quality directly, but a poorly sited magnet room — undersized quench vent, inadequate floor reinforcement, fringe field encroaching on a neighbouring ward — can delay commissioning by months.",
    hospitalRecommendation: "Commission a joint structural and magnetic site survey before finalising room selection, and require the equipment supplier to sign off on the fringe-field and floor-loading calculations for the specific magnet model being purchased, not a generic model of the same field strength.",
  },
  {
    type: "h2",
    id: "running-costs",
    number: 12,
    text: "Running-Cost Implications by Magnet Type",
    body: "Running costs diverge sharply by magnet type, and the difference is large enough to change which technology is financially viable for a given hospital's imaging volume.",
  },
  {
    type: "table",
    caption: "Indicative running-cost drivers by magnet type (typical ranges; site- and market-specific)",
    headers: ["Cost driver", "Superconducting", "Permanent", "Resistive"],
    rows: [
      [
        "Electricity for the magnet itself",
        "Minimal once ramped (persistent mode); power is consumed by gradients, RF chain and cooling, not the main field",
        "None — no current required to sustain the field",
        "Continuous and substantial for as long as the magnet is energised",
      ],
      [
        "Cryogen (helium)",
        "Periodic top-up on older wet-bore designs; near-zero on modern low-helium/ZBO systems, but non-zero risk of a costly quench refill",
        "None",
        "None",
      ],
      [
        "Cooling infrastructure",
        "Dedicated chiller and cold-head service contract required",
        "Minimal; passive systems need little active cooling",
        "Substantial water-cooling system required for the resistive coil",
      ],
      [
        "Service and parts",
        "Highest, reflecting cryogenic and gradient complexity; typically the largest annual service line",
        "Lower; fewer active subsystems to fail",
        "Moderate; power supply and cooling components are the main wear items",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The headline capital price of a magnet is a poor predictor of total cost of ownership. A superconducting 1.5T system typically carries the highest service contract value of the three technologies, but also the highest clinical throughput and revenue-generating capability per hour, which is the correct basis for comparison.",
    clinicalInterpretation: "Running-cost differences have no bearing on diagnostic accuracy directly, but a hospital that cannot sustain a magnet's service and cryogen obligations will see its effective image quality and uptime fall as deferred maintenance accumulates.",
    hospitalRecommendation: "Model total cost of ownership over at least ten years, including cryogen, electricity, service contract tier, and expected quench or major-component risk, before comparing magnet types on capital price alone.",
  },
  {
    type: "callout",
    variant: "clinical",
    title: "Indicative, not fixed, figures",
    text: "All cost figures in this article are typical market ranges for illustrative planning purposes only. Actual costs vary by country, electricity tariff, helium market pricing, manufacturer, service contract tier and site-specific factors, and should always be confirmed with current supplier quotations.",
  },
  {
    type: "h2",
    id: "helium-supply",
    number: 13,
    text: "Helium Supply and Zero Boil-Off Technology",
    body: "Global helium supply has been volatile for over a decade, and this has been one of the strongest drivers of the industry-wide shift toward low-helium and zero boil-off superconducting magnet designs.",
  },
  {
    type: "p",
    text: "Helium is a finite, non-renewable natural resource extracted primarily as a by-product of specific natural gas fields, and periodic global supply shortages have driven sustained price volatility over the past fifteen years. For hospitals operating older wet-bore magnets that require periodic top-ups, this volatility translates directly into unpredictable running costs and, in severe shortages, into difficulty securing supply at all.",
  },
  {
    type: "p",
    text: "Zero boil-off and sealed low-helium magnet designs directly address this by recondensing helium vapour in a closed loop rather than venting it, reducing ongoing consumption toward zero under normal operation. This does not eliminate the need for a helium reserve — a quench still requires a substantial helium refill even on a low-inventory system, and cold-head failures still risk gradual boil-off — but it removes helium price volatility as a routine, recurring line item in the operating budget.",
  },
  {
    type: "knowledgeBox",
    variant: "future-technology",
    title: "Helium-free and cryogen-recycling designs",
    text: "The newest generation of clinical magnets from several major manufacturers now operates with only a few litres of helium sealed permanently within the cryostat, cooled by conduction from a cold head rather than immersion in a liquid bath, moving the industry closer to a magnet that never requires a helium delivery for its entire service life.",
  },
  {
    type: "h2",
    id: "safety-considerations",
    number: 14,
    text: "Magnet-Specific Safety Considerations",
    body: "Each magnet type carries a distinct safety profile that shapes access control, staff training and emergency procedures, beyond the general ferromagnetic-object hazards common to all MRI.",
  },
  {
    type: "diagram",
    id: "safety-zones",
    title: "MRI safety zones around a superconducting magnet",
    purpose: "Illustrates how the standard four-zone access model maps onto the physical fringe-field boundaries generated by an actively shielded superconducting magnet, for staff and facilities training purposes.",
    alt: "Concentric zone diagram showing Zone I (public access), Zone II (transition/screening), Zone III (restricted, controlled access, 0.5 mT line), and Zone IV (the magnet room itself), overlaid on a floor plan of an MRI suite with the magnet at the centre and the fringe-field contour lines marked.",
    caption: "Figure 3 — The four-zone safety model applied to a shielded superconducting magnet room; permanent and resistive open systems use the same model but with a smaller Zone III footprint.",
  },
  {
    type: "ul",
    items: [
      "Superconducting systems require quench-vent inspection, cryogen-level monitoring, and staff trained specifically in quench emergency procedure, in addition to standard ferromagnetic screening.",
      "Permanent and resistive systems remove quench risk entirely but do not remove the static-field hazard to implanted devices and ferromagnetic objects; the four-zone access model and screening protocol still apply in full, only at reduced field strength and reduced footprint.",
      "Resistive systems introduce a distinct hazard profile around their cooling water system and continuous high electrical load, which should be included in facilities risk assessment alongside standard MRI safety planning.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Safety training should be magnet-type specific",
    text: "Generic MRI safety training covers ferromagnetic screening and the four-zone model well, but staff working with a superconducting system additionally need quench-response drills, while staff on permanent or resistive open systems need training on the site's specific weight-bearing table limits and cooling-system alarms. A single generic safety module for all magnet types under-prepares staff for the failure modes specific to their own equipment.",
  },
  {
    type: "h2",
    id: "selection-guidance",
    number: 15,
    text: "Selection Guidance by Hospital Profile",
    body: "The right magnet type follows from clinical programme, patient population, building constraints and financial model far more than from any abstract preference for higher field strength.",
  },
  {
    type: "table",
    caption: "Magnet type selection by hospital profile",
    headers: ["Hospital profile", "Recommended magnet type", "Rationale"],
    rows: [
      [
        "General tertiary or teaching hospital, broad case mix",
        "Superconducting 1.5T, wide-bore",
        "Balances image quality, throughput, protocol maturity and implant compatibility across the widest range of clinical indications",
      ],
      [
        "Neuroscience, oncology, prostate or research-active centre",
        "Superconducting 3T",
        "Higher SNR supports advanced neuro, prostate mpMRI and functional sequences that materially change management",
      ],
      [
        "Community hospital or diagnostic centre with constrained capital and cryogen logistics",
        "Permanent low-field open magnet",
        "Low running cost, no cryogen supply chain, adequate for general musculoskeletal and routine screening indications",
      ],
      [
        "Bariatric, paediatric or high claustrophobia caseload",
        "Permanent open magnet or wide-bore superconducting",
        "Open geometry or larger bore materially reduces scan aborts, sedation need and repeat imaging",
      ],
      [
        "New build with unstable grid power or limited electrical infrastructure",
        "Superconducting (persistent mode reduces exposure to power interruption) or permanent (no power dependency)",
        "Resistive systems are least tolerant of unreliable continuous power supply",
      ],
      [
        "Existing building with limited floor loading capacity",
        "Resistive open magnet",
        "Lowest structural weight of the three technologies, easiest retrofit into constrained existing space",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "No single magnet type is universally superior; the correct choice is the one matched to a specific, funded clinical programme and a realistic assessment of the building and utility infrastructure available.",
    clinicalInterpretation: "A mismatch between magnet type and clinical ambition is common — installing a 3T system without a funded neuro or oncology programme to use its extra capability, or installing a low-field open magnet where advanced neuro imaging is the core service line, both waste capital relative to what was actually needed.",
    hospitalRecommendation: "Define the clinical programme and expected case mix in writing before selecting field strength or magnet type, and treat field strength as a downstream consequence of that programme, not an independent purchasing decision.",
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Match magnet type to a five-year plan, not a single tender",
    text: "Because relocating or upgrading a magnet is disruptive and costly, the selection decision should account for the clinical programme a hospital intends to run in five years, not only the case mix at the time of purchase — particularly relevant when planning for future subspecialty growth such as prostate mpMRI or cardiac MRI services.",
  },
  {
    type: "h2",
    id: "future",
    number: 16,
    text: "Where Magnet Technology Is Heading",
    body: "The clearest long-term trends across all three magnet families are reduced dependency on scarce cryogen, lighter and more compact permanent-magnet materials, and wider bores achieved without loss of homogeneity.",
  },
  {
    type: "p",
    text: "On the superconducting side, helium-free and ultra-low-helium sealed magnets are steadily displacing traditional wet-bore designs across new installations, and early-stage high-temperature superconducting materials — which could in principle operate at higher temperatures with simpler cooling — remain an active area of research, though niobium-titanium remains the clinical standard today. On the permanent-magnet side, improved rare-earth magnet materials and more efficient yoke geometries are gradually narrowing the achievable field range upward while reducing overall system weight. Across all magnet types, wide-bore geometry, active shimming sophistication and AI-assisted image reconstruction are collectively allowing lower-field systems to close part of the image-quality gap with higher-field systems for selected clinical indications.",
  },
  {
    type: "knowledgeBox",
    variant: "future-technology",
    title: "Deployable, lighter-weight low-field systems",
    text: "A new generation of ultra-compact, very-low-field permanent-magnet systems is emerging for portable and point-of-care use, extending MRI into settings — bedside neuro-critical care, remote clinics — that were previously impractical for any magnet type, though these remain a distinct clinical niche rather than a replacement for departmental imaging.",
  },
  {
    type: "h2",
    id: "faq",
    number: 17,
    text: "Frequently Asked Questions",
    body: "Answers to the questions procurement and clinical teams most often ask when comparing magnet types.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Why do almost all high-field MRI systems use superconducting magnets?",
        a: "Only a persistent, resistance-free current can sustain the very high, extremely stable field required for 1.5T and 3T imaging without continuous, impractically large power input. Permanent and resistive designs are physically limited to much lower field strengths.",
      },
      {
        q: "Do permanent magnets ever wear out or lose field strength?",
        a: "High-quality permanent magnet materials are extremely stable over decades under normal conditions, though gradual, very slow demagnetisation can occur, and field homogeneity must still be periodically re-verified and reshimmed as with any magnet type.",
      },
      {
        q: "Is a quench dangerous to patients or staff?",
        a: "A quench itself is primarily a helium-venting and asphyxiation risk if the vent pipe is blocked or undersized, which is why quench vent integrity is inspected regularly. Properly designed and maintained systems route helium safely outside within seconds, and quenches are rare events, not routine occurrences.",
      },
      {
        q: "Can a superconducting magnet be switched off like a resistive one?",
        a: "Not casually. Ramping down requires a controlled procedure and, on older wet-bore designs, results in loss of the cooled helium bath; ramping back up takes hours and, historically, a fresh helium fill. It is done only for major service, relocation or decommissioning.",
      },
      {
        q: "Why do wide-bore magnets matter clinically?",
        a: "A 70 cm bore accommodates larger patients, reduces claustrophobia-related scan aborts and sedation requirements, and eases positioning for interventional or elderly patients, without changing the underlying magnet physics or field strength.",
      },
      {
        q: "What is the practical difference between active and passive shielding?",
        a: "Active shielding uses an opposing coil within the magnet to cancel the fringe field at short range, shrinking the required room size. Passive shielding uses steel plate around the room to contain the field, requiring more space and structural steel but less magnet complexity.",
      },
      {
        q: "How often does a magnet need reshimming?",
        a: "Passive shimming is normally set once at commissioning and re-verified periodically, or after any significant nearby structural or equipment change. Active shimming is typically performed automatically before many clinical sequences and requires no manual intervention in routine use.",
      },
      {
        q: "Are open permanent-magnet systems suitable for neuroimaging?",
        a: "They can perform adequate routine neuroimaging at low field strength, but lack the signal-to-noise ratio for advanced sequences such as diffusion tensor imaging, functional MRI or high-resolution small-structure detail that a 1.5T or 3T superconducting system provides.",
      },
      {
        q: "What determines whether a building can host a given magnet type?",
        a: "Structural floor loading capacity, the size of the fringe-field exclusion zone required, availability of a route for a quench vent (superconducting only), and electrical supply capacity (resistive especially) are the primary siting constraints, and should be assessed jointly, not separately.",
      },
      {
        q: "Does field strength alone determine image quality?",
        a: "No. Field strength primarily governs signal-to-noise ratio, but coil quality, gradient performance, shimming, sequence design and reconstruction software all materially affect the images clinicians actually read.",
      },
      {
        q: "Is helium supply still a major running-cost concern for new systems?",
        a: "Less than it used to be. Modern zero boil-off and low-helium sealed magnets have greatly reduced routine helium consumption, though a full helium refill following a quench remains a real, non-trivial cost that should be planned for.",
      },
      {
        q: "Can a hospital upgrade from a permanent or resistive magnet to superconducting later?",
        a: "This generally requires a new magnet installation rather than an upgrade of existing hardware, since the underlying physics, room shielding, structural and cryogenic requirements differ fundamentally between the technologies.",
      },
      {
        q: "How does bore diameter interact with field homogeneity?",
        a: "Widening the bore while maintaining the same level of homogeneity over a larger volume requires more sophisticated coil and shim design; this is one reason wide-bore systems took longer to reach 3T than 1.5T in the product roadmaps of most manufacturers.",
      },
    ],
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Medical guidelines",
        items: [
          { label: "American College of Radiology (ACR) Manual on MR Safety" },
          { label: "European Society of Radiology (ESR) guidance on MRI safety and quality" },
        ],
      },
      {
        title: "Scientific publications",
        items: [
          { label: "Peer-reviewed literature on superconducting magnet design and NbTi wire performance, published in medical physics and applied superconductivity journals" },
        ],
      },
      {
        title: "Regulatory authorities",
        items: [
          { label: "U.S. Food and Drug Administration (FDA) guidance on MRI equipment safety" },
          { label: "UK Medicines and Healthcare products Regulatory Agency (MHRA) MRI safety guidance" },
        ],
      },
      {
        title: "International standards",
        items: [
          { label: "IEC 60601-2-33 — Particular requirements for the basic safety and essential performance of magnetic resonance equipment for medical diagnosis" },
          { label: "EU Medical Device Regulation (EU MDR)" },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          { label: "OEM magnet siting and installation planning guides (site-specific instructions for use)" },
        ],
      },
      {
        title: "Medical societies",
        items: [
          { label: "Radiological Society of North America (RSNA)" },
          { label: "International Society for Magnetic Resonance in Medicine (ISMRM)" },
        ],
      },
    ],
    note: "Cited as reference categories for further reading. Consult current published versions and the specific manufacturer's instructions for use for any procurement or clinical decision.",
  },
  {
    type: "h2",
    id: "conclusion",
    number: 18,
    text: "Conclusion",
    body: "Superconducting, permanent and resistive magnets are three genuinely different technologies, each matched to a different clinical ambition, building constraint and cost model — and choosing correctly means starting from the clinical programme, not the magnet.",
  },
  {
    type: "p",
    text: "Superconducting magnets remain the standard for hospitals whose clinical programme demands 1.5T or 3T performance, at the cost of a cryogenic and shielding infrastructure commitment that has become steadily lighter with zero boil-off and low-helium designs. Permanent and resistive open magnets remain the right answer where running-cost simplicity, open patient access or building constraints matter more than peak field strength. AbuFarha Medical supplies, installs, commissions, trains and services all three magnet families, and can support hospitals through the site survey, siting and selection process needed to match magnet type to clinical need.",
  },
  {
    type: "articleCta",
    heading: "Planning an MRI installation or upgrade?",
    subheading: "Talk to AbuFarha Medical about site surveys, magnet selection and full-service installation, commissioning and after-sales support.",
    technology: "MRI",
  },
];
