import type { ContentBlock, TocItem } from "../blog";
import solCt from "@/assets/sol-ct.jpg";

export const CT_ROOM_PLANNING_AND_SHIELDING_TOC: TocItem[] = [
  { id: "overview", title: "Why CT Siting Decisions Are Made Before the Scanner Is Chosen" },
  { id: "room-sizing", title: "Room Size, Clearances and Workflow Layout" },
  { id: "structural-loading", title: "Structural Loading and Floor Requirements" },
  { id: "shielding-concepts", title: "Radiation Shielding: Concepts and Calculation Inputs" },
  { id: "control-room", title: "Control Room Design and Sightlines" },
  { id: "hvac-heat-load", title: "HVAC, Heat Load and Environmental Control" },
  { id: "power-quality", title: "Power Quality, Distribution and UPS" },
  { id: "cable-routing", title: "Cable Routing and Low-Voltage Infrastructure" },
  { id: "delivery-access", title: "Delivery Access and Rigging Logistics" },
  { id: "commissioning-acceptance", title: "Commissioning and Acceptance Testing" },
  { id: "project-governance", title: "Project Governance and Common Delays" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const CT_ROOM_PLANNING_AND_SHIELDING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solCt,
    imageAlt: "Empty CT suite under construction showing shielded walls, control room window and conduit routing before scanner installation",
    paragraphs: [
      "A CT scanner is comparatively forgiving to site by comparison with an MRI magnet — there is no permanent magnetic field, no fringe-field mapping, and no cryogen venting to plan for — but that relative simplicity leads many project teams to under-scope CT room planning, treating it as a smaller version of the MRI project rather than a discipline with its own specific requirements. Radiation shielding calculated for the actual workload and room geometry, structural floor loading for a gantry and table that can weigh well over a tonne, precise control-room sightlines, and power quality suited to a load profile with sharp peak current draw during acquisition are all decisions that must be made before construction begins, not adjusted afterward.",
      "Unlike a piece of general radiology equipment, a CT scanner's siting requirements are driven jointly by physics (the radiation shielding calculation), structural engineering (floor and sometimes ceiling loading), mechanical and electrical building services (heat rejection and power quality), and pure project logistics (how a gantry weighing well over a tonne actually reaches its final position inside an existing hospital building). Getting any one of these wrong after construction is complete is materially more expensive to correct than addressing it at the design stage, which is why experienced CT projects begin the site survey and shielding design in parallel with, or even before, final scanner model selection.",
      "This guide sets out the site planning disciplines a hospital project team, architect and biomedical engineering partner need to work through together: room sizing and workflow layout, structural loading, the concepts behind a radiation shielding design (without substituting for the qualified medical physicist's formal calculation), control room design, HVAC and heat load, power quality and UPS provision, cable routing, delivery and rigging access, and the commissioning and acceptance testing that confirms the finished installation actually performs as designed.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "CT room sizing and layout, structural floor loading, radiation shielding calculation concepts, control room sightlines, HVAC and heat load, power quality and UPS, cable routing, delivery access and rigging, and commissioning acceptance testing",
    audience:
      "Hospital facility planners, project managers, architects, medical physicists, biomedical engineers and radiology department leadership",
    readingTime: "17 min read",
    technology: "Computed Tomography (CT) Room Planning and Shielding",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "Why CT Siting Decisions Are Made Before the Scanner Is Chosen",
    body: "The structural, radiation-protection and building-services requirements for a CT suite are largely fixed by room geometry and workload, which means the site survey and shielding design should start alongside — not after — the equipment selection process.",
  },
  {
    type: "ul",
    items: [
      "Shielding is calculated from workload and occupancy of adjacent spaces, not from a generic wall specification, so the same room can require different shielding depending on whether the space next door is an unoccupied corridor or a staffed office.",
      "Retrofitting shielding or structural reinforcement into a finished room is dramatically more disruptive and costly than specifying it correctly during design, often requiring wall demolition or floor works around a scanner that may already be operational.",
      "Delivery and rigging access is frequently the most underestimated constraint in hospital CT projects, because gantries and tables are large, heavy, and rarely fit through standard hospital corridors or doorways without a pre-planned route.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "Room dimensions should be set from the specific scanner's footprint plus workflow clearances, not from a generic 'CT room' template applied without checking the chosen model's actual service and access envelopes.",
      "A qualified medical physicist or radiation protection adviser must calculate shielding thickness from actual workload, use factors and occupancy — generic thickness tables are a starting estimate only, not a substitute for the formal calculation.",
      "Floor loading for CT is a genuine structural engineering question, particularly on upper floors or over basements, and must be checked against the actual point loads of the gantry and table, not just average floor loading capacity.",
      "The control room window and console layout should give the operator direct, unobstructed sightlines to the patient and access to the room door, which shapes room layout as much as the shielding calculation does.",
      "CT heat rejection and power quality are equipment-specific and load-profile-specific; assuming standard hospital HVAC and power infrastructure will suffice is one of the most common causes of post-installation performance issues.",
      "Delivery and rigging logistics should be mapped in detail against the specific building's corridors, doorways, lifts and floor loading along the entire delivery route, not just the final room.",
      "Acceptance testing against IEC and national regulatory performance standards is what confirms the finished installation, not just the scanner itself, meets its design specification before clinical use begins.",
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
        credential: "Field service engineers for CT, MRI, cath lab and PET/CT installations",
      },
      {
        role: "Technical editor",
        name: "AbuFarha Knowledge Center Editorial Team",
        credential: "Medical technology editors, Amman, Jordan",
      },
      {
        role: "Facility planning specialist",
        name: "AbuFarha Projects & Installation Team",
        credential: "Site survey, siting design and installation project management",
      },
    ],
    lastReviewed: "July 2026",
    nextReview: "July 2027",
    version: "1.0",
    evidenceLevel:
      "Level A — international standards, peer-reviewed literature and manufacturer documentation",
    disclaimer:
      "This article is written for hospital decision-makers, facility planners and biomedical engineers as educational reference material. It is not a substitute for a qualified medical physicist's formal shielding calculation, a structural engineer's assessment, or manufacturer site planning documentation, all of which are required for an actual installation.",
  },
  {
    type: "h2",
    id: "room-sizing",
    number: 2,
    text: "Room Size, Clearances and Workflow Layout",
    body: "Room size is driven by the scanner's physical footprint, required service clearances around the gantry, patient transfer space, and the workflow sequence a technologist follows during a typical examination.",
  },
  {
    type: "p",
    text: "Manufacturers publish a site planning guide for each scanner model specifying minimum room dimensions, gantry-to-wall clearances for service access, ceiling height (particularly where a ceiling-mounted injector or lighting system is used), and door width and height needed to move the gantry and table into the room during installation. These figures vary meaningfully between manufacturers and even between models from the same manufacturer, so early engagement with the specific site planning documentation for the scanner under consideration — rather than a generic industry rule of thumb — is essential before architectural drawings are finalised.",
  },
  {
    type: "p",
    text: "Beyond the equipment footprint, workflow layout should account for patient transfer from wheelchair or stretcher, contrast injector positioning and cabling, emergency access to the patient from multiple sides of the table, and clear sightlines from the control room. Adjacent spaces typically include a technologist control area, a change room or holding bay for outpatients, and increasingly, in departments performing significant contrast-enhanced volume, a dedicated recovery or observation area for post-contrast monitoring.",
  },
  {
    type: "table",
    caption: "Typical CT suite space allocations to plan around",
    headers: ["Space", "Primary function", "Key layout consideration"],
    rows: [
      ["Scan room", "Gantry, table and patient positioning", "Manufacturer-specified minimum dimensions plus service clearance on all access sides"],
      ["Control room", "Console, dose monitoring and technologist workstation", "Direct sightline to patient and door; adjacent to but shielded from the scan room"],
      ["Equipment/technical room", "Power distribution, chiller or cooling unit, UPS", "Sized per manufacturer technical specification; may require independent HVAC"],
      ["Patient preparation/holding", "Changing, cannulation, contrast screening", "Located for easy access to the scan room without crossing public circulation"],
      ["Contrast recovery/observation", "Monitoring after contrast administration", "Increasingly included in higher-volume contrast-enhanced CT services"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The most frequent room-sizing error is designing to a generic published minimum room size rather than the specific scanner model's site planning drawing, which can differ by clinically significant margins between vendors and between standard and wide-bore configurations.",
    clinicalInterpretation: "A room sized to the minimum footprint with no margin leaves no room for future workflow changes such as adding an injector, a mobile ultrasound unit for guided procedures, or additional monitoring equipment for higher-acuity patients.",
    hospitalRecommendation: "Request the manufacturer's specific site planning guide for the exact model and configuration under consideration before finalising architectural drawings, and build in a reasonable margin beyond the stated minimum wherever the building envelope allows.",
  },
  {
    type: "h2",
    id: "structural-loading",
    number: 3,
    text: "Structural Loading and Floor Requirements",
    body: "CT gantries and tables represent substantial concentrated point loads, and floor structural adequacy must be verified against the manufacturer's actual load data, especially on suspended floors, upper storeys or spaces over basements and plant rooms.",
  },
  {
    type: "p",
    text: "Manufacturer technical documentation specifies total system weight, the distribution of that weight across gantry and table mounting points, and often a dynamic loading allowance to account for gantry rotation during acquisition. A structural engineer should review these figures against the actual floor construction of the intended room — reinforced concrete slab, composite deck, or suspended floor over an existing basement — rather than relying on a general assumption that hospital floors are adequate for medical equipment, since floor loading capacity varies considerably across a building depending on original design intent and current age.",
  },
  {
    type: "p",
    text: "Ground-floor or slab-on-grade installations generally present fewer structural challenges than upper-floor retrofits, which is one of several reasons many hospitals site heavy imaging equipment such as CT at or near ground level where possible. Where an upper-floor location is unavoidable, options include localised structural reinforcement, load-spreading plates beneath the gantry mounting points, or relocating the equipment room to a structural bay with greater inherent capacity — all of which should be resolved at design stage, since retrofitting structural reinforcement beneath an installed scanner is highly disruptive.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Vibration, not just static weight, matters for image quality",
    text: "Beyond static load-bearing capacity, floor stiffness and vibration isolation from nearby mechanical plant, lifts or heavy foot traffic can affect image quality on sensitive detector systems. Site surveys for CT installations, particularly on upper floors near mechanical rooms, should include a vibration assessment alongside the structural loading review.",
  },
  {
    type: "h2",
    id: "shielding-concepts",
    number: 4,
    text: "Radiation Shielding: Concepts and Calculation Inputs",
    body: "CT radiation shielding design follows the same underlying physics and regulatory framework as other diagnostic x-ray shielding — workload, use factor, occupancy factor and distance — but CT's higher workload and scatter characteristics typically demand more substantial primary and secondary barriers than a general radiography room.",
  },
  {
    type: "p",
    text: "A qualified expert, typically a medical physicist or radiation protection adviser, performs the formal shielding calculation using methodologies described in publications such as NCRP Report 147 (or equivalent national guidance) and increasingly informed by IAEA and national regulatory shielding design requirements. The calculation inputs include workload (the anticipated number and type of examinations per week, since CT workload is generally higher and more consistently distributed across gantry angles than projection radiography), the use factor for each barrier direction, the occupancy factor of the space beyond each barrier (a staffed office is treated very differently from an unoccupied stairwell), and the distance from the x-ray source to the point being protected.",
  },
  {
    type: "p",
    text: "Because CT involves continuous rotation of the x-ray tube around the patient, the primary beam sweeps through all barrier directions during a single acquisition, and CT shielding design typically treats all four walls, the floor below and the ceiling above as potential primary-beam-facing barriers rather than assuming a fixed beam direction as some general radiography calculations do. This is a key reason CT shielding requirements, expressed in lead-equivalent thickness or an equivalent concrete thickness, are frequently higher and more uniformly distributed across the room's barriers than a general x-ray room designed around a limited number of fixed tube orientations.",
  },
  {
    type: "comparison",
    title: "Key inputs to a formal CT shielding calculation",
    headers: ["Input", "What it captures", "Why it matters for CT specifically"],
    rows: [
      ["Workload", "Anticipated examination volume and type per unit time", "CT workload is typically higher and more consistent across gantry angles than radiography"],
      ["Use factor", "Fraction of workload directed toward a specific barrier", "Because the tube rotates continuously, CT often treats all barriers as fully exposed"],
      ["Occupancy factor", "How much time people spend in the adjacent space", "A staffed adjacent office requires materially more shielding than an unoccupied corridor"],
      ["Distance", "Separation between the x-ray source and the point of interest beyond the barrier", "Inverse-square reduction means room layout choices directly affect required barrier thickness"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Shielding thickness quoted from a generic industry table without a site-specific workload and occupancy assessment is a common source of either over-specification (unnecessary construction cost) or under-specification (a compliance gap discovered only at post-installation radiation survey).",
    clinicalInterpretation: "The same CT room design can require noticeably different shielding depending purely on what sits beyond each wall — an adjacent unoccupied plant room requires far less protection than an adjacent staffed nursing station or a paediatric ward, even at identical distance.",
    hospitalRecommendation: "Commission the formal shielding calculation early enough in the design process that its output — barrier material and thickness by wall, floor and ceiling — can still be incorporated into structural and architectural drawings without triggering redesign.",
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Post-installation radiation survey is not optional",
    text: "Regardless of how the shielding calculation was performed, a qualified expert should conduct a post-installation radiation survey to confirm that as-built barriers achieve the design protection level, since construction variances — a barrier material substitution, a door or window not built to specification, or an undocumented penetration for cabling — can silently compromise a correctly calculated design.",
  },
  {
    type: "h2",
    id: "control-room",
    number: 5,
    text: "Control Room Design and Sightlines",
    body: "The control room must give the technologist unobstructed visual and, where required, audio contact with the patient at all times, while remaining a shielded space appropriate for continuous occupancy during acquisition.",
  },
  {
    type: "p",
    text: "A shielded viewing window, sized and positioned to give a direct line of sight to the patient's head, torso and the table's full range of motion, is standard in CT control room design, and its lead-equivalent glazing specification is derived from the same shielding calculation as the surrounding walls. Console positioning within the control room should allow the technologist to operate the scanner while maintaining that sightline, rather than facing away from the window toward the console, which is a layout error that undermines patient monitoring during acquisition.",
  },
  {
    type: "p",
    text: "Two-way intercom communication between control room and scan room is standard, supplementing but not replacing the visual sightline, particularly for patient instructions such as breath-hold commands during acquisition. Control room door placement relative to the scan room door also matters operationally: technologists need rapid physical access to the patient in the event of a contrast reaction or other emergency, so an unnecessarily circuitous route between the two rooms should be avoided in the layout.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Plan the control room around emergency response, not just routine scanning",
    text: "During a contrast reaction or patient deterioration, the technologist needs to reach the patient within seconds. Control room layouts that require walking around console furniture, through a separate corridor, or through a locked intermediate door to reach the scan room create an entirely avoidable delay in an emergency and should be identified and corrected during design review, not discovered during a real event.",
  },
  {
    type: "h2",
    id: "hvac-heat-load",
    number: 6,
    text: "HVAC, Heat Load and Environmental Control",
    body: "CT scanners generate substantial heat during operation, particularly from the x-ray tube and gantry electronics, and require dedicated environmental control sized to the specific system's heat rejection specification rather than standard hospital room HVAC provision.",
  },
  {
    type: "p",
    text: "Manufacturer technical specifications state the scanner's heat output, typically expressed in BTU/hour or kW, for both the gantry/scan room and any separate equipment or technical room housing power distribution and cooling components, and HVAC design should be sized directly from these figures rather than a generic assumption carried over from a different equipment type. Temperature and humidity stability requirements, also specified by the manufacturer, are generally tighter than typical clinical space comfort conditioning, because electronic component reliability and image quality consistency both depend on a stable thermal environment.",
  },
  {
    type: "p",
    text: "Many modern CT systems use a closed-loop chiller or the facility's central chilled water supply rather than purely air-cooled rejection, particularly for higher-end configurations, and the technical room housing this equipment needs its own environmental control independent of the scan room's conditioning. HVAC design should also consider redundancy: a single point of cooling failure that allows scan room or equipment room temperature to exceed the manufacturer's specified range can trigger automatic scanner shutdown to protect the system, resulting in unplanned clinical downtime.",
  },
  {
    type: "table",
    caption: "Environmental control considerations for a CT installation",
    headers: ["System element", "Typical requirement basis", "Consequence if under-specified"],
    rows: [
      ["Scan room cooling", "Manufacturer heat rejection specification for the gantry and table", "Elevated room temperature, potential automatic scanner protective shutdown"],
      ["Equipment/technical room cooling", "Heat output of power distribution, chiller and auxiliary electronics", "Component reliability issues and premature equipment wear"],
      ["Humidity control", "Manufacturer-specified operating range", "Static discharge risk or condensation-related electronic faults"],
      ["Cooling redundancy", "Facility risk tolerance for unplanned downtime", "Full scanner outage during a single HVAC or chiller failure"],
    ],
  },
  {
    type: "h2",
    id: "power-quality",
    number: 7,
    text: "Power Quality, Distribution and UPS",
    body: "CT scanners draw sharply peaked current during x-ray generation, and the electrical supply must be sized and conditioned to handle that load profile without voltage fluctuations that could disrupt image quality or system stability.",
  },
  {
    type: "p",
    text: "Manufacturer electrical specifications define required voltage, phase configuration, maximum instantaneous and average current draw, and permissible line impedance and voltage drop under peak load, and a qualified electrical engineer should verify the facility's supply against these figures, including confirming that the incoming supply is not shared with other equipment whose own load fluctuations could push voltage outside the scanner's tolerance during simultaneous operation. Dedicated circuits from the facility's distribution board to the scanner's power distribution unit are standard practice rather than sharing a circuit with general department loads.",
  },
  {
    type: "p",
    text: "An uninterruptible power supply (UPS) sized appropriately for the CT system protects against transient voltage disturbances and, depending on capacity, can allow an orderly, controlled shutdown or brief continued operation during a mains outage, though most UPS provisions for CT are sized for graceful shutdown protection rather than sustained full-load operation during an extended outage. Facilities with unreliable grid supply or frequent voltage fluctuations should discuss additional line conditioning or a larger UPS capacity with the equipment manufacturer during the site planning phase, since retrofitting adequate power conditioning after repeated scanner faults is a reactive and more costly path than specifying it upfront.",
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Confirm power specification before, not after, contract signature",
    text: "Electrical site requirements differ meaningfully between scanner models and configurations, and a facility's existing electrical infrastructure may need upgrading to meet a specific model's peak demand. This should be assessed and costed during the procurement phase, since electrical infrastructure work discovered after equipment delivery routinely causes the most significant installation timeline delays.",
  },
  {
    type: "h2",
    id: "cable-routing",
    number: 8,
    text: "Cable Routing and Low-Voltage Infrastructure",
    body: "Beyond high-voltage power, a CT installation requires carefully planned conduit and cable pathways for control signals, networking, dose monitoring integration and intercom systems, most of which must be installed before walls and floors are finished.",
  },
  {
    type: "p",
    text: "Conduit routes between the gantry, table, control console and power distribution unit are specified in the manufacturer's site planning drawings, typically running beneath the floor or within a service trench, and must be installed to the correct diameter, bend radius and separation from electrical power conduit to avoid electromagnetic interference with control and imaging signals. Because these pathways are usually embedded in the floor slab or behind finished walls, errors discovered after construction are costly to correct, making early and precise coordination between the equipment vendor's technical drawings and the electrical contractor's installation drawings essential.",
  },
  {
    type: "p",
    text: "Network cabling connecting the scanner to PACS, the radiology information system, and dose monitoring software should be planned with adequate bandwidth and redundancy for the data volumes modern CT systems generate, particularly for high-resolution or high-frequency multi-phase acquisitions. Structured cabling standards and hospital IT department involvement from the earliest design stage help ensure the imaging network integrates cleanly with the broader hospital network rather than being treated as an isolated afterthought once construction is complete.",
  },
  {
    type: "h2",
    id: "delivery-access",
    number: 9,
    text: "Delivery Access and Rigging Logistics",
    body: "Moving a CT gantry and table from the delivery vehicle to their final position inside an existing hospital building is a distinct logistical project in its own right, and the delivery route should be surveyed in as much detail as the final room.",
  },
  {
    type: "p",
    text: "The rigging route — from loading dock or temporary access point, through corridors, doorways, lifts and any ramps or thresholds, to the final room — must be checked against the equipment's dimensions and weight at every point, not just the destination room's doorway. Corridor turning radii, doorway widths and heights, lift internal dimensions and weight capacity, and floor loading along the entire route (not only the final installation point) are all potential bottlenecks, and even a single undersized doorway or an underrated lift discovered on delivery day can halt an installation and require costly temporary structural works or an entirely different route.",
  },
  {
    type: "p",
    text: "For upper-floor installations without an adequately sized freight lift, options include temporary removal of a window or wall panel with a crane lift directly into the building, or in some cases, delivery before the building envelope is fully enclosed during new construction — both of which require early planning, appropriate permits and coordination with structural engineers, since they are far harder to arrange retroactively once construction has progressed. Facilities undertaking a CT replacement in an existing occupied department also need a removal plan for the outgoing scanner, coordinated with clinical scheduling to minimise service disruption.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Delivery route errors that recur across hospital projects",
    items: [
      "Surveying only the final room's door dimensions and assuming the rest of the route is adequate without measurement",
      "Failing to verify lift weight capacity against the actual rigged weight of the equipment, including protective packaging and rigging equipment",
      "Not accounting for floor loading along corridors and lift lobbies, which may differ from the final room's structural specification",
      "Scheduling delivery without coordinating building access, security and other clinical activity, causing avoidable delays on delivery day",
    ],
  },
  {
    type: "h2",
    id: "commissioning-acceptance",
    number: 10,
    text: "Commissioning and Acceptance Testing",
    body: "Commissioning confirms that the completed installation — scanner, shielding, power, environmental control and network integration together — performs to specification before the first patient is scanned, and acceptance testing provides the documented evidence of that performance.",
  },
  {
    type: "p",
    text: "Acceptance testing typically follows a structured sequence: verification that facility conditions (power, environmental, structural) match the specification the equipment was designed for; manufacturer-performed installation and functional testing of the scanner itself; and independent medical physics acceptance testing against relevant performance standards, commonly referencing IEC 61223 series test methods for constancy and acceptance testing of CT equipment and applicable national regulatory testing requirements, alongside image quality, CT number accuracy, noise, slice thickness and dose output verification.",
  },
  {
    type: "p",
    text: "The post-installation radiation survey referenced earlier in this guide is normally completed as part of this same commissioning phase, confirming that the as-built shielding achieves its design protection level under actual operating conditions. Only once all of these elements — facility infrastructure verification, manufacturer functional testing, independent physics acceptance testing and the radiation survey — are complete and documented should the department proceed to clinical use, and many regulatory frameworks require this documentation to be retained and available for inspection throughout the equipment's operational life.",
  },
  {
    type: "table",
    caption: "Core elements of CT commissioning and acceptance",
    headers: ["Stage", "Performed by", "Confirms"],
    rows: [
      ["Facility infrastructure verification", "Electrical, mechanical and structural engineers", "Power, HVAC and structural conditions match manufacturer specification"],
      ["Manufacturer installation and functional testing", "Vendor field service engineers", "Scanner hardware and software function correctly as installed"],
      ["Independent medical physics acceptance testing", "Qualified medical physicist", "Image quality, dose output and safety performance meet IEC and regulatory standards"],
      ["Post-installation radiation survey", "Qualified medical physicist / radiation protection adviser", "As-built shielding achieves the design protection level"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Keep the commissioning file as a living compliance record",
    text: "The complete commissioning documentation set — facility verification, functional testing reports, acceptance testing results and the radiation survey — should be retained in an accessible compliance file for the life of the installation, since it is frequently required during regulatory inspection, accreditation review, or when investigating a later performance or safety question.",
  },
  {
    type: "h2",
    id: "project-governance",
    number: 11,
    text: "Project Governance and Common Delays",
    body: "Most CT siting project delays trace back to a small set of recurring coordination failures between clinical, architectural, structural, electrical and vendor teams rather than to the underlying engineering difficulty of any single discipline.",
  },
  {
    type: "ul",
    items: [
      "Finalising architectural drawings before the specific scanner model and its site planning guide are confirmed, requiring rework once actual dimensions and clearances are known",
      "Commissioning the shielding calculation late, after structural and architectural drawings are already fixed, forcing compromises or costly late-stage design changes",
      "Underestimating electrical infrastructure upgrade scope and cost, discovered only once actual site electrical conditions are surveyed against the scanner's specification",
      "Treating delivery and rigging logistics as a delivery-day problem rather than a design-stage constraint requiring route survey and, where needed, permits well in advance",
      "Sequencing commissioning and acceptance testing at the very end of the project timeline with no contingency, so any finding requiring rework directly delays the planned go-live date",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Run shielding design, structural review and rigging survey in parallel with equipment selection",
    text: "The single most effective governance change available to a CT project team is starting the medical physics shielding calculation, the structural engineering review and the delivery route survey as soon as a shortlist of candidate scanner models is available, rather than sequencing them strictly after a final purchase decision. Because site planning parameters differ between models, running these in parallel with procurement — rather than after it — is what keeps the overall project timeline realistic.",
  },
  {
    type: "faq",
    items: [
      { q: "How much space does a CT scanner room actually need?", a: "Minimum room dimensions are specified by the manufacturer's site planning guide for the exact model and configuration, and vary meaningfully between vendors and between standard and wide-bore systems. There is no single universal figure; the specific site planning documentation should always be consulted before finalising room dimensions." },
      { q: "Who is qualified to calculate CT room shielding requirements?", a: "A qualified medical physicist or radiation protection adviser performs the formal shielding calculation, using workload, use factor, occupancy factor and distance data specific to the site, following methodologies such as those in NCRP Report 147 or equivalent national guidance." },
      { q: "Can an existing x-ray room be converted into a CT room?", a: "Sometimes, but the room's existing shielding, structural loading capacity, and electrical and HVAC infrastructure must all be reassessed against the CT scanner's specific requirements rather than assumed adequate simply because it previously housed imaging equipment, since CT typically has higher workload and different structural and power demands than general radiography." },
      { q: "Why does CT shielding often need to cover the floor and ceiling as well as the walls?", a: "Because the x-ray tube rotates continuously around the patient during acquisition, the primary beam sweeps through all directions during a scan, so CT shielding calculations typically treat all four walls, the floor below and the ceiling above as potential primary-beam-facing barriers, unlike some fixed-orientation radiography setups." },
      { q: "What happens if the floor cannot support a CT scanner's weight?", a: "Options include localised structural reinforcement, load-spreading plates beneath the mounting points, or relocating the installation to a structural bay or floor with adequate capacity. This should be identified during the structural engineering review at design stage, since retrofitting reinforcement beneath an installed scanner is highly disruptive." },
      { q: "Does a CT scanner need its own dedicated electrical circuit?", a: "Yes, dedicated circuits from the facility distribution board sized to the manufacturer's peak and average current specifications are standard practice, avoiding shared circuits whose independent load fluctuations could push supply voltage outside the scanner's operating tolerance." },
      { q: "Is a UPS required for a CT installation?", a: "Most CT installations include a UPS sized for transient protection and an orderly shutdown during a mains disturbance, though capacity requirements vary by manufacturer and facility power reliability; sites with unstable grid supply should discuss additional capacity or conditioning with the manufacturer during planning." },
      { q: "What is the difference between manufacturer installation testing and medical physics acceptance testing?", a: "Manufacturer installation and functional testing confirms the scanner hardware and software operate correctly as installed. Independent medical physics acceptance testing is a separate verification, typically referencing IEC and national standards, confirming image quality, dose output and safety performance meet required specifications before clinical use begins." },
      { q: "How early should delivery and rigging logistics be planned?", a: "As early as the site survey stage, ideally alongside equipment selection, since the full delivery route — corridors, doorways, lifts, floor loading — needs to be checked against the specific equipment's dimensions and weight well before a delivery date is scheduled." },
      { q: "Can a CT scanner be installed on an upper floor of a hospital?", a: "Yes, but it requires explicit structural engineering verification of floor loading along the entire delivery route and at the final location, confirmation of adequate lift capacity or an alternative rigging method such as a crane lift through a temporary building opening, and often more careful HVAC and vibration planning than a ground-floor installation." },
      { q: "What building services besides electricity does a CT room need?", a: "Dedicated HVAC sized to the scanner's specific heat rejection and humidity control requirements, structured network cabling for PACS and dose monitoring integration, and often a separate technical or equipment room with its own environmental control for power distribution and cooling components." },
      { q: "Why is the control room sightline to the patient so important?", a: "The technologist must be able to visually monitor the patient throughout the acquisition, particularly during contrast administration, and respond rapidly in an emergency such as a contrast reaction. Poor sightline design or an obstructed path between control room and scan room can materially delay emergency response." },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    number: 12,
    text: "Conclusion",
    body: "Successful CT siting is the product of coordinated engineering disciplines working from the specific scanner's actual technical requirements, planned early and in parallel rather than resolved sequentially after major design decisions are already fixed.",
  },
  {
    type: "p",
    text: "None of the individual requirements covered in this guide — room dimensions, structural loading, radiation shielding, control room layout, HVAC, power quality, cable routing, delivery logistics or commissioning testing — is unusually difficult in isolation. What consistently makes CT installation projects run late or over budget is treating them as sequential, siloed tasks rather than a coordinated design process anchored to the specific scanner model's actual technical documentation from the earliest possible stage. Hospitals that engage medical physics, structural engineering and the equipment vendor's site planning team in parallel, well before construction begins, are the ones that reach a smooth, on-schedule commissioning and clinical go-live.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Shielding and radiation protection",
        items: [
          { label: "NCRP Report No. 147 — Structural Shielding Design for Medical X-Ray Imaging Facilities", url: "https://ncrponline.org" },
          { label: "IAEA — Radiation Protection of Patients (RPOP): facility design guidance", url: "https://www.iaea.org" },
          { label: "ICRP — Publications on radiological protection in medicine", url: "https://www.icrp.org" },
        ],
      },
      {
        title: "Equipment, acceptance and facility standards",
        items: [
          { label: "IEC 60601 series — Medical electrical equipment safety and performance standards", url: "https://www.iec.ch" },
          { label: "AAPM — CT acceptance testing and quality assurance reports", url: "https://www.aapm.org" },
          { label: "ACR — CT accreditation programme requirements", url: "https://www.acr.org" },
          { label: "ASHRAE — HVAC design guidance for health care facilities", url: "https://www.ashrae.org" },
        ],
      },
    ],
    note: "Room dimensions, floor loading, heat rejection and electrical requirements are equipment-specific: always design against the selected scanner model's current manufacturer site-planning documentation, and confirm the edition of each standard adopted in the project's jurisdiction.",
  },
  {
    type: "articleCta",
    heading: "Planning a new CT installation or department renovation?",
    subheading: "AbuFarha's biomedical engineering and projects team supports hospitals through site survey, shielding coordination, structural and power planning, and installation logistics from initial design through commissioning.",
    technology: "Computed Tomography (CT)",
  },
];
