import type { ContentBlock, TocItem } from "@/lib/blog";
import solMri from "@/assets/sol-mri.jpg";

export const MRI_ROOM_PLANNING_AND_SITING_TOC: TocItem[] = [
  { id: "overview", title: "Siting: The Project Before the Project" },
  { id: "fringe-field", title: "Fringe Field and the 5 Gauss Line" },
  { id: "shielding", title: "Magnetic and RF Shielding" },
  { id: "floor-loading", title: "Floor Loading and Structural Capacity" },
  { id: "delivery-rigging", title: "Delivery Route and Rigging" },
  { id: "quench-pipe", title: "Quench Pipe Routing" },
  { id: "hvac-humidity", title: "HVAC, Cooling and Humidity Control" },
  { id: "power-quality", title: "Power Quality and UPS" },
  { id: "equipment-room", title: "The Equipment Room" },
  { id: "control-room", title: "Control Room Sightlines and Layout" },
  { id: "vibration-ferrous", title: "Vibration and Ferrous Traffic Surveys" },
  { id: "patient-flow", title: "Patient Flow and Accessibility" },
  { id: "space-envelope", title: "Typical Space Envelopes and Cost Drivers" },
  { id: "commissioning", title: "Commissioning and Acceptance Testing" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MRI_ROOM_PLANNING_AND_SITING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solMri,
    imageAlt: "MRI suite under construction showing shielded room and equipment corridor",
    paragraphs: [
      "Every successful MRI installation is decided months before the scanner arrives, in a site survey and a stack of engineering drawings that most clinical staff never see. The magnet does not care about the hospital's opening date; it cares about floor loading, fringe field contours, quench vent routing, RF integrity and a chilled-water loop that never fails. Get any one of these wrong and the consequence is not cosmetic — it is a failed acceptance test, a re-poured floor slab, a re-routed vent, or a scanner that images beautifully for six months and then develops persistent banding artefact that no amount of service visits can fully explain.",
      "Room planning and siting sits at the boundary between construction and medical equipment, and that boundary is exactly where projects go wrong. Architects and structural engineers understand loads and services; they do not, by default, understand fringe field contours, quench gas physics or Faraday cage continuity. Equipment suppliers understand the scanner's siting requirements in detail but do not pour concrete, run ductwork or lay conduit. The projects that finish on time are the ones where both sides work from the same site-specific engineering package from day one, not the ones where a generic 'MRI room' shell is built first and the vendor is asked to make the scanner fit afterwards.",
      "This guide sets out what a hospital planning team, architect and facilities engineer must get right before a single cable is pulled: fringe field and access control, shielding, structural loading, delivery and rigging, quench venting, environmental control, power quality, room layout and the acceptance tests that prove the finished suite actually meets the manufacturer's specification. AbuFarha Medical supplies, installs, commissions, trains staff on and services the imaging equipment itself; the building, structural and civil works described here are delivered by the hospital's architects, structural engineers and civil contractors, working from the site-specific data package the equipment supplier provides.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Fringe field management, shielding, structural loading, rigging, quench venting, HVAC, power quality, room layout, patient flow, cost drivers and commissioning tests for MRI suites",
    audience:
      "Hospital planning committees, architects, structural and mechanical engineers, biomedical engineers and procurement teams",
    readingTime: "17 min read",
    technology: "Magnetic Resonance Imaging (MRI) — Facility Planning",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "Siting: The Project Before the Project",
    body: "MRI siting is the set of structural, magnetic, electrical and environmental engineering decisions that must be finalised before construction starts, because retrofitting any of them after the shell is built is disproportionately expensive.",
  },
  {
    type: "ul",
    items: [
      "The single most common cause of siting rework is sequencing: ordering the building shell, or even the shielding package, before the specific magnet model, its fringe field map and its exact room dimensions are locked with the equipment supplier.",
      "Siting requirements are not identical across manufacturers or even across models from the same manufacturer — magnet length, cryostat design, gradient duty cycle and quench vent diameter all vary, so a siting plan built around a generic '1.5T room' template routinely fails acceptance for the actual system ordered.",
      "Civil and structural works (foundations, floor loading, the building shell, shaft routing) are delivered by the hospital's construction team; the equipment supplier's role is to issue the site-specific technical data, review drawings against it, and commission the scanner once the room is ready — a division of responsibility that must be contractually explicit from the outset.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "Lock the exact magnet model before finalising room dimensions, structural loading and shielding — siting data varies by model, not just by field strength.",
      "The 5 gauss line and the four-zone access model must be established on the architectural drawing before adjacent room uses are assigned.",
      "RF shielding is a continuous Faraday enclosure; a single unsealed penetration or degraded door gasket can compromise image quality hospital-wide.",
      "Floor loading, delivery route and rigging capacity must be verified for the specific magnet's shipping weight, not an assumed average.",
      "The quench pipe is a life-safety system, not a service afterthought — its routing and termination must be engineered and inspected, not improvised on site.",
      "Commissioning acceptance testing is what actually proves the room meets specification; nothing should be considered final until those tests pass.",
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
    id: "fringe-field",
    number: 2,
    text: "Fringe Field and the 5 Gauss Line",
    body: "The fringe field is the residual magnetic field that extends beyond the bore in every direction, and its 5 gauss contour is the internationally recognised boundary for uncontrolled public access.",
  },
  {
    type: "p",
    text: "A superconducting magnet's field does not stop at the wall of the scan room. It falls off with distance but remains measurable for several metres in every direction — including through floors and ceilings into rooms above and below. The 5 gauss (0.5 mT) line is the threshold beyond which the field is considered safe for the general public, including anyone with a cardiac implantable device; inside that line, access must be controlled. Modern actively shielded magnets confine the 5 gauss contour close to the bore, but 'close' still typically means several metres axially and laterally, and the exact shape is asymmetric and model-specific.",
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "The fringe field respects no floor slab",
    text: "A 5 gauss contour that extends two metres beyond the magnet room wall will also extend vertically into the storey above or below unless that structure is far enough away or additional shielding is added. Store rooms, corridors, or offices directly above or below the magnet must be checked against the manufacturer's fringe field map, not assumed safe by default.",
  },
  {
    type: "h3", text: "The Four-Zone Access Model",
  },
  {
    type: "p",
    text: "International MR safety guidance (based on the ACR MR safety framework and echoed in national equivalents) divides the suite into four zones of progressively restricted access: Zone I is publicly accessible; Zone II is the transition and screening area where patients are interviewed and screened; Zone III is restricted to screened personnel and patients, controlled to prevent unscreened persons or ferromagnetic objects entering; Zone IV is the scan room itself, always considered to be within the fringe field. Siting drawings must show all four zones, the 5 gauss line, and the physical access controls — locked doors, interlocks, ferromagnetic detection — that enforce each boundary.",
  },
  {
    type: "diagram",
    id: "safety-zones",
    title: "The four MRI access zones and the 5 gauss line",
    purpose: "Shows how the fringe field contour maps onto the physical access-control zones so architects place adjacent rooms and doors correctly.",
    alt: "Diagram of concentric MRI safety zones I through IV overlaid with a 5 gauss fringe field contour around the magnet bore, showing Zone II screening desk, Zone III restricted corridor with ferromagnetic detector, and Zone IV scan room boundary aligned with the 5 gauss line.",
    caption: "Figure 1 — The four-zone access model, anchored to the manufacturer's site-specific 5 gauss contour.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Get the fringe field map before you draw a single wall",
    text: "Request the manufacturer's site-specific fringe field drawing for the exact model and configuration ordered — not a generic brochure diagram — before finalising the layout of adjacent rooms. Server rooms, image-intensifier equipment, cardiac monitors and staff with implants must all sit outside the relevant contour lines.",
  },
  {
    type: "h2",
    id: "shielding",
    number: 3,
    text: "Magnetic and RF Shielding",
    body: "Two separate shielding problems exist in every MRI room: containing or managing the static fringe field, and excluding external radiofrequency interference from the imaging signal.",
  },
  {
    type: "p",
    text: "RF shielding forms a continuous Faraday cage around the scan room — typically copper sheet or a fine copper mesh bonded into the walls, floor and ceiling, with a shielded door, RF-filtered penetrations for every cable, and waveguides for any ducting. Because the receive coils detect signals in the same frequency range as FM radio, television, and increasingly Wi-Fi and cellular traffic, any break in that enclosure — a degraded door gasket, an unfiltered penetration, a poorly bonded seam — lets external RF energy in as image noise, typically visible as banding or zipper artefact across the whole field of view.",
  },
  {
    type: "p",
    text: "Magnetic shielding is a separate consideration, used when the fringe field would otherwise extend into occupied or sensitive areas that cannot be relocated or restricted. Passive shielding (steel plate built into walls, floor or ceiling) or, less commonly, active shielding can pull the 5 gauss contour in tighter than the magnet's self-shielding achieves alone. It adds cost and weight and must be engineered by the shielding contractor working directly from the manufacturer's field data, not estimated generically.",
  },
  {
    type: "table",
    caption: "RF versus magnetic shielding — what each protects and how it fails",
    headers: ["Shielding type", "What it protects", "Typical construction", "Common failure mode"],
    rows: [
      ["RF (Faraday cage)", "Image quality — excludes external radio interference", "Copper sheet or mesh continuous envelope, RF door, filtered penetrations, waveguides", "Door seal wear, unsealed later penetrations by other trades, damaged mesh continuity"],
      ["Passive magnetic", "Adjacent occupied spaces from fringe field exposure", "Structural steel plate in walls/floor/ceiling, sized to manufacturer's field map", "Under-specified thickness, gaps at penetrations, added after fringe field data changes"],
      ["Active magnetic (rare)", "Fringe field containment in severely space-constrained sites", "Compensating coils driven by a control system", "Higher capital and maintenance cost; single point of failure if uncontrolled"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "RF shielding failures are far more common in practice than magnetic shielding failures, because RF integrity can be silently compromised months after handover by other trades drilling for cable trays, sprinkler heads or lighting without re-sealing the enclosure.",
    clinicalInterpretation: "Persistent, unexplained banding or zipper artefact that appears well after a scanner has been running cleanly for months should trigger an RF integrity survey before any assumption is made about a hardware fault.",
    hospitalRecommendation: "Write RF shield integrity testing into the annual preventive maintenance contract, and require any subsequent trade working near the shielded envelope to obtain sign-off from the equipment supplier before penetrating any wall, floor or ceiling panel.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "The shielding contractor and the equipment supplier must share drawings",
    items: [
      "Awarding the RF shielding package to a contractor who has never seen the specific magnet's site data",
      "Finalising the shielded envelope before the door swing, waveguide count and penetration schedule are confirmed with the equipment supplier",
      "Allowing electrical or mechanical trades to core-drill the shielded envelope after copper continuity has been tested and signed off",
      "Treating the RF door as a standard hardware item rather than a calibrated, tested component with its own maintenance schedule",
    ],
  },
  {
    type: "h2",
    id: "floor-loading",
    number: 4,
    text: "Floor Loading and Structural Capacity",
    body: "A superconducting MRI magnet, cryogen load, patient table and shielding together can weigh several tonnes, concentrated on a footprint the structural design must be verified to carry.",
  },
  {
    type: "p",
    text: "Total installed weight for a typical 1.5T or 3T system, including the magnet, cryostat, gradient coil, patient table and any structural shielding, commonly falls in a broad range from roughly 4 to 8 tonnes depending on model and shielding, though the manufacturer's site planning guide always gives the definitive figure — both total weight and the distributed and point loading pattern across the magnet's feet. Existing upper-floor structures, and even some ground-floor slabs over basements or car parks, frequently require structural reinforcement, additional load-spreading steelwork, or relocation of the suite to a slab-on-grade location once the real numbers are checked.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Point loads matter more than average floor pressure",
    text: "Magnet weight is rarely distributed evenly; it concentrates on a small number of support feet or a base frame. A structural engineer must check point loading at those specific locations against the slab's actual capacity, not simply divide total weight by room area and compare it to a generic superimposed load allowance.",
  },
  {
    type: "callout",
    variant: "important",
    title: "Verify structural capacity before the magnet is ordered",
    text: "Confirming floor loading is a pre-contract step, not a construction-phase discovery. A structural survey that reveals inadequate capacity after equipment has been ordered can add months and significant unplanned reinforcement cost to a project.",
  },
  {
    type: "h2",
    id: "delivery-rigging",
    number: 5,
    text: "Delivery Route and Rigging",
    body: "Getting a multi-tonne magnet from the delivery vehicle to its final position often requires a dedicated rigging study, temporary openings, and sequencing that must be planned before the building envelope is closed.",
  },
  {
    type: "p",
    text: "Many MRI suites, particularly retrofits inside existing hospital buildings, cannot receive the magnet through a standard door or corridor. Common solutions include a temporary wall or window opening sized and structurally braced for crane or rigging access, a dedicated rigging path with reinforced flooring along the route, or delivery before the building envelope is fully closed so the magnet enters before walls and roof are completed. Each option has cost, sequencing and structural implications that must be resolved at design stage, because discovering the delivery route will not work after the building is finished typically means either partial demolition or an expensive specialist rigging solution.",
  },
  {
    type: "ul",
    items: [
      "Turning radii and corridor widths along the entire delivery path must be checked against the magnet's crated dimensions, not just the final room opening.",
      "Crane access, ground bearing capacity for outriggers, and overhead clearance (power lines, canopies) must be surveyed for the specific rigging plan, especially on constrained urban sites.",
      "Delivery sequencing should be fixed in the master construction programme early, since magnet delivery is frequently the single hardest date to move once booked with the manufacturer's logistics team.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Commission a rigging study as its own deliverable",
    text: "For any retrofit or upper-floor installation, commission a dedicated rigging and delivery study from a qualified rigging contractor, using the exact magnet's certified shipping dimensions and weight, well before the construction programme is fixed.",
  },
  {
    type: "h2",
    id: "quench-pipe",
    number: 6,
    text: "Quench Pipe Routing",
    body: "The quench pipe safely vents helium gas to the outside atmosphere if the magnet ever loses superconductivity, and its routing is a life-safety design problem, not a mechanical afterthought.",
  },
  {
    type: "p",
    text: "A quench is the rapid, sometimes spontaneous loss of superconductivity in the magnet windings, which converts the stored magnetic energy into heat and boils off the liquid helium bath almost instantly. In a room without a quench pipe — or with one that is blocked, undersized or improperly terminated — the expanding helium gas could displace breathable oxygen from the scan room in seconds, and could also cause a dangerous positive-pressure event severe enough to obstruct a door. A correctly engineered quench pipe vents that gas directly outside the building, well away from air intakes, pedestrian areas and operable windows, with a burst disc and route sized precisely to the manufacturer's specification.",
  },
  {
    type: "diagram",
    id: "room-planning",
    title: "MRI suite room planning diagram",
    purpose: "Shows how the scan room, equipment room, control room, quench pipe route and access zones relate spatially, so architects and MEP engineers plan services against one consistent layout.",
    alt: "Floor plan diagram of a complete MRI suite showing the shielded scan room with magnet and 5 gauss contour, the adjoining equipment room with gradient amplifiers and chiller connection, the control room positioned for direct sightline into the scan room through a shielded window, the quench pipe routed vertically through a dedicated shaft to an external roof-level termination, the patient change and screening area in Zone II, and the delivery/rigging access route into the scan room.",
    caption: "Figure 2 — A typical MRI suite layout, showing how the quench route, control room sightline and equipment room connect to the shielded scan room.",
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Never route a quench pipe through occupied space without engineering sign-off",
    text: "The pipe run, its supports, its termination point and its burst-disc rating must all be specified and inspected against the manufacturer's engineering data. A quench pipe is not a generic mechanical vent and must never be modified, extended or re-routed without the equipment supplier's review.",
  },
  {
    type: "h3", text: "Oxygen Monitoring" },
  {
    type: "p",
    text: "Even with a correctly engineered quench pipe, most MRI suites also install a fixed oxygen deficiency monitor inside the scan room, wired to an audible and visual alarm, as a defence-in-depth measure against a compromised or underperforming vent path. This is a low-cost addition at construction stage and a difficult retrofit once the room is finished and occupied.",
  },
  {
    type: "h2",
    id: "hvac-humidity",
    number: 7,
    text: "HVAC, Cooling and Humidity Control",
    body: "The scan room and equipment room have distinct, demanding environmental requirements driven by heat load from the gradient and RF systems and by the electronics' sensitivity to condensation and static.",
  },
  {
    type: "p",
    text: "Gradient amplifiers and RF power stages generate substantial heat during scanning, and the equipment room housing them typically needs continuous, dedicated cooling capacity — sized to the manufacturer's specified heat rejection figures, not shared opportunistically with general hospital HVAC. Most manufacturers also specify a chilled-water loop for the magnet's cold head and compressor, independent of the building's comfort cooling, with defined flow rate, temperature and reliability requirements; interruption of that loop for more than a short specified window can allow helium boil-off to accelerate.",
  },
  {
    type: "p",
    text: "Relative humidity in the scan and equipment rooms must be held within the manufacturer's specified band, typically in the region of 40 to 60 percent, because excess humidity risks condensation on cold surfaces and electronics, while very low humidity increases static discharge risk near sensitive components. Temperature is similarly specified within a narrow tolerance band for the equipment room specifically, tighter than typical hospital comfort cooling design targets.",
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Design HVAC redundancy around the chiller, not the comfort system",
    text: "Because chiller failure directly threatens the cryogenic system, specify N+1 redundancy or a backup cooling path for the magnet's chilled-water loop specifically, separate from the general building HVAC redundancy strategy that serves patient comfort areas.",
  },
  {
    type: "h2",
    id: "power-quality",
    number: 8,
    text: "Power Quality and UPS",
    body: "MRI gradient and RF systems are sensitive to voltage sags, harmonics and transients, so dedicated, conditioned power supply and an appropriately scoped UPS are standard requirements, not optional extras.",
  },
  {
    type: "p",
    text: "A dedicated feeder and transformer sized to the scanner's peak and average demand, isolated from large intermittent loads elsewhere in the hospital such as lifts, laundry or imaging equipment with high inrush current, materially reduces nuisance faults and image artefact caused by voltage transients. A UPS is typically specified to protect the console, reconstruction computer and critical control electronics through short outages and to allow an orderly, controlled shutdown rather than an abrupt loss of power, which can force a lengthy re-initialisation or, in a worst case, contribute to magnet instability.",
  },
  {
    type: "table",
    caption: "Power quality requirements commonly specified for MRI installations",
    headers: ["Parameter", "Typical requirement", "Why it matters"],
    rows: [
      ["Dedicated feeder", "Isolated from high-inrush loads (lifts, laundry, other imaging kit)", "Prevents voltage sags and transients coupling into gradient/RF electronics"],
      ["Voltage regulation", "Within manufacturer's tolerance band, typically a few percent", "Gradient amplifiers and RF chain are sensitive to sustained deviation"],
      ["Harmonic distortion", "Limited total harmonic distortion at the point of connection", "Excess harmonics can affect image quality and equipment longevity"],
      ["UPS coverage", "Console, reconstruction engine and critical controls, sized for orderly shutdown", "Protects against data loss and uncontrolled shutdown during outages"],
      ["Earthing/grounding", "Dedicated, low-impedance reference per manufacturer spec", "Poor grounding is a frequent, hard-to-diagnose source of image artefact"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Power-related siting issues are among the least visible at handover and among the most common causes of intermittent, hard-to-reproduce artefact months into clinical operation.",
    clinicalInterpretation: "Intermittent artefact that correlates with time of day, or with the operation of other high-draw hospital equipment, should prompt a power quality survey before any component is replaced.",
    hospitalRecommendation: "Commission an independent power quality audit at the point of connection before equipment installation, and repeat it if intermittent artefact appears after other building loads change.",
  },
  {
    type: "h2",
    id: "equipment-room",
    number: 9,
    text: "The Equipment Room",
    body: "The equipment room houses the gradient amplifiers, RF power electronics, computer racks and cooling interfaces, and its size, access and environment are as tightly specified as the scan room itself.",
  },
  {
    type: "p",
    text: "Positioned immediately adjacent to the scan room to keep cable runs short, the equipment room needs sufficient floor area for rack clearance and maintenance access, a raised floor or cable tray system for the dense cabling between the two rooms, and its own dedicated cooling as described above. Access for service engineers must not require passing through the scan room during a live examination, and door widths must accommodate rack and amplifier replacement without dismantling the room.",
  },
  {
    type: "knowledgeBox",
    variant: "quick-facts",
    title: "Equipment room essentials",
    items: [
      "Independent, continuously running cooling sized to manufacturer heat-rejection data",
      "Cable pathway to the scan room sized for the full penetration schedule, with spare capacity for future upgrades",
      "Service access that does not require entering the magnet room during scanning",
      "Fire suppression compatible with sensitive electronics — not a standard sprinkler-only solution",
    ],
  },
  {
    type: "h2",
    id: "control-room",
    number: 10,
    text: "Control Room Sightlines and Layout",
    body: "The control room must give the technologist a direct, unobstructed view of the patient in the bore at all times, alongside acoustic and RF-shielded communication with the scan room.",
  },
  {
    type: "p",
    text: "Regulatory and accreditation guidance consistently requires direct visual observation of the patient throughout the examination, normally achieved through a shielded observation window positioned so the technologist can see the patient's head or the table position without leaving the console. Where structural or layout constraints make a direct window impossible, a shielded camera system can supplement but should not simply replace direct sightline where a window is achievable. The console position should also allow the technologist to see the room door and, ideally, the Zone III approach, supporting both patient monitoring and access control from a single seated position.",
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Sightline first, furniture second",
    text: "Fix the control room window position and console sightline before finalising cabinetry, monitor arrangement or workstation furniture layout — a technologist who must lean or stand to see the patient will do so inconsistently under workload pressure.",
  },
  {
    type: "h2",
    id: "vibration-ferrous",
    number: 11,
    text: "Vibration and Ferrous Traffic Surveys",
    body: "External vibration sources and moving ferromagnetic objects near the magnet can both degrade image quality, and both must be surveyed at the proposed site before construction, not discovered afterwards.",
  },
  {
    type: "p",
    text: "MRI systems are sensitive to mechanical vibration transmitted through the building structure from lifts, plant rooms, nearby rail lines, road traffic or even large HVAC fans, which can manifest as subtle blurring or ghosting in high-resolution sequences. A vibration survey measuring ambient site conditions against the manufacturer's tolerance envelope should be carried out at the proposed location before finalising room position, since moving the room a few metres or isolating the structure can be far cheaper than remediating vibration after installation.",
  },
  {
    type: "p",
    text: "Separately, a ferrous traffic survey assesses whether moving ferromagnetic masses near the site — lifts, trolleys, cars in an adjacent car park, trains — will disturb field homogeneity enough to appear as image artefact, since a magnet's shim is calibrated to the static local environment at commissioning. Sites near vehicle ramps, lift shafts or rail lines warrant this survey explicitly rather than assuming the manufacturer's standard shim tolerance will absorb the disturbance.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "A field-homogeneity shim is calibrated to its surroundings",
    text: "The magnet is passively and actively shimmed for homogeneity at commissioning based on the specific steel and ferromagnetic mass distribution around it at that time. Significant new ferromagnetic structures built nearby afterwards — an extension, new lift, or car park — can require re-shimming.",
  },
  {
    type: "h2",
    id: "patient-flow",
    number: 12,
    text: "Patient Flow and Accessibility",
    body: "Layout must support a one-way, dignified patient journey from reception through screening and changing to the scan room, with full accessibility for wheelchairs, trolleys and bariatric patients.",
  },
  {
    type: "p",
    text: "A well-planned suite separates ambulatory outpatients from inpatient trolley and wheelchair traffic where volumes justify it, provides private changing and screening space in Zone II before any patient enters Zone III, and avoids requiring patients or trolleys to pass back through public waiting areas after changing. Corridor widths, door clearances and turning space must accommodate trolleys, wheelchairs and bariatric equipment, and at least one accessible changing room and toilet should be provided within the suite rather than at a distance.",
  },
  {
    type: "ul",
    items: [
      "Screening (Zone II) should be a calm, private space away from the general waiting area, since the safety questionnaire often surfaces sensitive medical history and implant details.",
      "Anaesthetic and recovery provision, where paediatric or claustrophobic sedation caseloads justify it, needs its own space adjacent to but outside Zone IV, with MR-conditional monitoring equipment.",
      "Emergency evacuation routes from the scan room must not rely on doors that could be obstructed by a quench-related pressure event, reinforcing why quench venting is engineered rather than assumed.",
    ],
  },
  {
    type: "diagram",
    id: "patient-journey",
    title: "Patient journey through the MRI suite",
    purpose: "Traces the physical route a patient takes from arrival to discharge, mapped against the four access zones, to check layout supports a one-way, dignified flow.",
    alt: "Diagram tracing a patient's path from Zone I reception through Zone II screening and changing, into Zone III waiting, and finally Zone IV scan room, with a return path that avoids re-crossing public areas while still changed into a gown.",
    caption: "Figure 3 — Patient flow mapped against the four MRI access zones, from arrival to discharge.",
  },
  {
    type: "h2",
    id: "space-envelope",
    number: 13,
    text: "Typical Space Envelopes and Cost Drivers",
    body: "Total suite area, shielding scope, structural works and services complexity are the main drivers of siting cost, and all figures should be treated as indicative market ranges rather than fixed prices.",
  },
  {
    type: "p",
    text: "A complete MRI suite — scan room, equipment room, control room, patient change and waiting space, and circulation — typically occupies somewhere in the region of 80 to 140 square metres depending on system footprint, bore length and whether the site is a new build or a retrofit inside an existing structure. Retrofits inside older buildings are almost always more expensive per square metre than new-build shell-and-core space, because they usually require structural reinforcement, a bespoke delivery route and reworking of existing services that a purpose-built room would not need.",
  },
  {
    type: "comparison",
    title: "Indicative cost drivers in MRI room siting (illustrative ranges only)",
    headers: ["Cost driver", "New build", "Retrofit / existing structure", "Notes"],
    rows: [
      ["RF shielding", "Moderate — planned into the shell", "Higher — must work around existing structure", "Door and penetration count is the biggest variable"],
      ["Structural reinforcement", "Usually minor if designed in from the start", "Often significant, especially on upper floors", "Driven by the specific magnet's point loads"],
      ["Delivery and rigging", "Lower — access planned pre-completion", "Can be substantial if temporary openings are needed", "Scales with site accessibility, not just magnet weight"],
      ["HVAC and chilled water", "Integrated into base building design", "Frequently requires new dedicated plant", "Independent chiller loop for the magnet is near-universal"],
      ["Quench pipe routing", "Straightforward if planned early", "Can require a new shaft or external routing", "Route length and termination location both affect cost"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Retrofit projects consistently show the widest cost variance because so much depends on what the existing building can and cannot accommodate without alteration.",
    clinicalInterpretation: "Delayed imaging capacity has a real clinical cost in diagnostic turnaround, which is a reason to resolve siting feasibility early rather than choosing a site on convenience alone.",
    hospitalRecommendation: "Commission a feasibility and siting study before committing capital budget to a specific room, and treat every cost figure at that stage as an indicative range pending detailed structural, electrical and shielding surveys.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Ask for siting data as part of the equipment quotation",
    text: "Request the manufacturer's full site planning guide — dimensions, weights, fringe field map, power, cooling and quench specifications — as part of the equipment proposal, before finalising the architectural brief, so the room design and the equipment specification are never developed in isolation.",
  },
  {
    type: "h2",
    id: "commissioning",
    number: 14,
    text: "Commissioning and Acceptance Testing",
    body: "Commissioning is the formal process of verifying the completed room and installed scanner meet the manufacturer's specification and the hospital's clinical requirements before first patient use.",
  },
  {
    type: "p",
    text: "Acceptance testing typically covers RF shield integrity (measured attenuation across the relevant frequency range), magnetic field homogeneity after shimming, gradient linearity and performance, image quality phantom testing (signal-to-noise ratio, geometric distortion, slice thickness and uniformity), quench pipe and oxygen monitor function verification, power quality measurement under load, and confirmation that fringe field measurements on site match the predicted 5 gauss contour used for zone planning. Only after these tests pass, and are documented, should the room be considered ready for clinical use.",
  },
  {
    type: "requirements",
    checklist: [
      "RF shield attenuation test across the full relevant frequency range, with a signed test report",
      "Magnetic field homogeneity verified after final shimming, referenced against manufacturer tolerance",
      "Gradient performance and linearity check",
      "Image quality phantom testing — SNR, uniformity, geometric accuracy, spatial resolution",
      "Quench pipe function and oxygen deficiency monitor verification",
      "Fringe field measurement on site compared against the predicted 5 gauss contour",
      "Power quality measurement under simulated clinical load",
      "Documented sign-off from structural, electrical, mechanical and RF shielding contractors",
    ],
    specs: {
      title: "Typical acceptance testing scope",
      rows: [
        { label: "RF shield attenuation", value: "Tested across manufacturer-specified frequency range" },
        { label: "Field homogeneity", value: "Verified post-shim against manufacturer tolerance" },
        { label: "Image quality phantom", value: "SNR, uniformity, distortion, slice profile" },
        { label: "Safety systems", value: "Quench vent, oxygen monitor, emergency stop, door interlocks" },
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Do not scan patients before every acceptance test is signed off",
    text: "Partial commissioning — for example, clinical scanning beginning before RF shield attenuation testing or fringe field verification is complete — risks both diagnostic image quality and patient and staff safety, and can complicate warranty and regulatory compliance.",
  },
  {
    type: "knowledgeBox",
    variant: "future-technology",
    title: "Helium-efficient and compact-footprint systems are easing siting constraints",
    text: "Newer sealed or low-helium-consumption magnet designs, along with more efficient shielding materials, are gradually reducing quench-related risk profiles and shrinking overall suite footprints — but they do not remove the need for a full, model-specific siting study.",
  },
  {
    type: "quote",
    text: "The scanner is only as good as the room it sits in — homogeneity, RF integrity and safe cryogen handling are engineered into the building before the magnet ever arrives.",
    cite: "AbuFarha Biomedical Engineering Team",
  },
  {
    type: "h2",
    id: "faq",
    number: 15,
    text: "Frequently Asked Questions",
    body: "Practical answers to the questions hospital planning teams and architects most often raise during MRI siting.",
  },
  {
    type: "faq",
    items: [
      {
        q: "What is the 5 gauss line and why does it matter for room layout?",
        a: "It is the boundary beyond which the fringe magnetic field is considered safe for uncontrolled public access, including for people with cardiac implants. Any space inside that contour, including rooms above or below the scan room, must be treated as restricted access under the four-zone model.",
      },
      {
        q: "Does AbuFarha Medical construct the MRI room or building?",
        a: "No. AbuFarha Medical supplies, installs, commissions, trains staff on and services the imaging equipment itself. The building, structural, civil and shielding construction works are delivered by the hospital's architects, structural engineers and civil contractors, working from the site-specific technical data the equipment supplier provides.",
      },
      {
        q: "Can an existing hospital room be converted into an MRI suite?",
        a: "Often yes, but it requires a full feasibility study covering structural loading, delivery route, fringe field impact on adjacent spaces, and shielding scope, since retrofits are frequently more complex and costly than new-build shell space.",
      },
      {
        q: "How heavy is a typical MRI magnet, and does that always require structural reinforcement?",
        a: "Total installed weight commonly falls in a broad range of roughly 4 to 8 tonnes depending on model, but the manufacturer's specific site data — including point loading at support locations — must be checked against the actual floor structure rather than relying on an assumed average.",
      },
      {
        q: "Why does the quench pipe matter if quenches are rare?",
        a: "A quench, while uncommon, releases the entire stored cryogen volume almost instantly. A correctly engineered and inspected vent prevents oxygen displacement and pressure hazards in the room; this is a life-safety system that must never be improvised or modified without engineering review.",
      },
      {
        q: "What humidity and temperature range does an MRI room need?",
        a: "Manufacturers typically specify relative humidity in the region of 40 to 60 percent and a tight temperature tolerance band, more demanding than standard hospital comfort cooling, particularly in the equipment room housing gradient and RF electronics.",
      },
      {
        q: "Why does the equipment room need its own dedicated cooling?",
        a: "Gradient amplifiers and RF power electronics generate substantial, continuous heat during scanning that general building HVAC is rarely sized or controlled precisely enough to manage reliably, so a dedicated cooling loop is standard practice.",
      },
      {
        q: "What is a ferrous traffic survey and when is it needed?",
        a: "It assesses whether moving ferromagnetic masses near the proposed site — lifts, vehicles, trains — could disturb the magnet's field homogeneity enough to cause image artefact. It is particularly important for sites near vehicle ramps, car parks, lift shafts or rail lines.",
      },
      {
        q: "Can a camera replace the control room window for patient observation?",
        a: "A shielded camera can supplement observation, but direct visual sightline through a shielded window is the preferred and generally expected standard wherever the layout allows it, since it supports continuous, unmediated patient monitoring.",
      },
      {
        q: "Why does MRI need a dedicated electrical feeder?",
        a: "Gradient and RF systems are sensitive to voltage sags, transients and harmonic distortion, which are more likely on a feeder shared with high-inrush loads such as lifts or laundry equipment. A dedicated, conditioned supply reduces nuisance faults and protects image quality.",
      },
      {
        q: "How early should a vibration survey be carried out?",
        a: "Before the room location is finalised. Moving the proposed room a short distance, or specifying structural isolation, is far cheaper at design stage than attempting to remediate vibration-related artefact after the magnet is installed.",
      },
      {
        q: "What happens during commissioning acceptance testing?",
        a: "Engineers test RF shield attenuation, field homogeneity, gradient performance, image quality with phantoms, quench and oxygen monitor function, on-site fringe field measurements and power quality under load, producing signed documentation before the room is released for clinical use.",
      },
      {
        q: "How much floor area does a typical MRI suite need?",
        a: "A complete suite including scan room, equipment room, control room and patient areas typically needs roughly 80 to 140 square metres, though exact requirements depend on the specific system, bore length and whether the project is new build or retrofit.",
      },
    ],
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Medical guidelines",
        items: [
          { label: "American College of Radiology (ACR) — Manual on MR Safety" },
          { label: "European Society of Radiology (ESR) — MRI safety and quality guidance" },
        ],
      },
      {
        title: "Scientific publications",
        items: [
          { label: "Kanal E, et al. — ACR guidance document on MR safe practices, Journal of Magnetic Resonance Imaging" },
          { label: "RSNA / ISMRM published proceedings on MR facility siting and safety" },
        ],
      },
      {
        title: "Regulatory authorities",
        items: [
          { label: "U.S. Food and Drug Administration (FDA) — MRI safety guidance for industry and staff" },
          { label: "UK Medicines and Healthcare products Regulatory Agency (MHRA) — MRI safety guidelines" },
        ],
      },
      {
        title: "International standards",
        items: [
          { label: "IEC 60601-2-33 — Particular requirements for the basic safety and essential performance of MR equipment for medical diagnosis" },
          { label: "IEC 60601-1 — General requirements for basic safety and essential performance" },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          { label: "Manufacturer site planning and installation guides (magnet-specific fringe field, weight, power, cooling and quench specifications)" },
        ],
      },
      {
        title: "Medical societies",
        items: [
          { label: "International Society for Magnetic Resonance in Medicine (ISMRM)" },
          { label: "Radiological Society of North America (RSNA)" },
        ],
      },
    ],
    note: "This article summarises widely published guidance and standard engineering practice. Always confirm current requirements with the equipment manufacturer's site planning guide and applicable national regulations before finalising a design.",
  },
  {
    type: "h2",
    id: "conclusion",
    number: 16,
    text: "Conclusion",
    body: "MRI siting succeeds when structural, electrical, mechanical, shielding and safety requirements are resolved together, early, against the specific magnet ordered — not layered onto a generic room after the fact.",
  },
  {
    type: "p",
    text: "None of the requirements covered here — fringe field management, shielding integrity, structural loading, delivery logistics, quench venting, environmental control, power quality, layout and commissioning — is optional or negotiable after the fact. Each is testable, each has a documented specification, and each is far cheaper to get right at design stage than to remediate after handover. Hospitals that treat siting as an engineering discipline in its own right, resourced and sequenced properly alongside the equipment purchase, are the ones that open on schedule with a scanner performing to its full specification from day one.",
  },
  {
    type: "articleCta",
    heading: "Planning an MRI installation?",
    subheading: "AbuFarha Medical supplies, installs, commissions and services MRI systems, and works alongside your architects and structural engineers with the site-specific technical data needed to get the room right the first time.",
    technology: "MRI",
  },
];
