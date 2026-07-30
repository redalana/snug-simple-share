import type { ContentBlock, TocItem } from "@/lib/blog";
import solMri from "@/assets/sol-mri.jpg";

export const OPEN_VS_CLOSED_BORE_MRI_SYSTEMS_TOC: TocItem[] = [
  { id: "overview", title: "Open vs Closed-Bore: The Core Trade-Off" },
  { id: "geometries", title: "The Three Geometries: Closed, Wide-Bore and Open" },
  { id: "claustrophobia", title: "Claustrophobia and Non-Completion Rates" },
  { id: "bariatric-paediatric", title: "Bariatric and Paediatric Access" },
  { id: "image-quality", title: "Image Quality and Field Strength Trade-Offs" },
  { id: "coils-sequences", title: "Coil and Sequence Limitations on Open Systems" },
  { id: "sedation-anaesthesia", title: "Sedation and Anaesthesia Costs Avoided" },
  { id: "patient-journey", title: "The Patient Journey: Open vs Closed" },
  { id: "siting-footprint", title: "Siting Footprint and Building Requirements" },
  { id: "running-costs", title: "Running Cost Differences" },
  { id: "throughput", title: "Throughput and Case-Mix Reality" },
  { id: "who-should-buy", title: "Who Should Buy Which System" },
  { id: "mixed-fleet", title: "Mixing a Two-Scanner Service" },
  { id: "procurement", title: "Procurement Checklist" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const OPEN_VS_CLOSED_BORE_MRI_SYSTEMS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solMri,
    imageAlt: "Wide-bore closed MRI scanner with a short, open-feeling magnet tunnel",
    paragraphs: [
      "The choice between an open and a closed-bore MRI system is not a simple upgrade decision — it is a trade-off between three things a hospital cannot maximise simultaneously: diagnostic image quality, patient access, and running cost. Closed cylindrical magnets at 1.5T and 3T deliver the highest signal-to-noise ratio, the broadest sequence library and the fastest scans, but their narrow, deep tunnels exclude or distress a meaningful share of the population that needs imaging most: the anxious, the bariatric, the very young, and patients who simply cannot lie still in a confined space. Open and low-field systems solve the access problem but concede resolution, scan speed and, on some designs, several clinically important sequence families.",
      "This is not an academic debate. Non-completion of a scheduled MRI scan because a patient cannot tolerate the bore is a recurring, costly failure mode in departments that have optimised entirely for image quality. It wastes a slot, delays diagnosis, and frequently converts into a sedated or anaesthetised re-attempt with its own cost, staffing and safety burden. Conversely, a department built entirely around open, low-field imaging will struggle to deliver the mpMRI prostate studies, high-resolution neuro-oncology follow-up or fast cardiac sequences that referring specialists now expect as standard.",
      "This guide sets out the real differences between closed, wide-bore and open designs; quantifies where each geometry wins and loses on comfort, image quality and cost; and addresses the question most hospital boards actually need answered — should we buy one system or two, and if two, how should the case mix be split between them.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Open vs closed-bore MRI geometry, claustrophobia management, bariatric and paediatric access, image quality trade-offs, sedation cost avoidance, siting and running costs, and two-scanner service design",
    audience:
      "Hospital directors, radiology service managers, procurement teams and referring clinicians planning MRI capacity",
    readingTime: "16 min read",
    technology: "Magnetic Resonance Imaging (MRI) — Open and Closed-Bore Systems",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "Open vs Closed-Bore: The Core Trade-Off",
    body: "Bore geometry and field strength are linked engineering decisions: shrinking the magnet or opening its sides to improve patient access almost always costs signal-to-noise ratio, which must be recovered through longer scan times, weaker resolution, or both.",
  },
  {
    type: "ul",
    items: [
      "Bore diameter and field strength are not independent variables chosen for comfort alone — a wider or open gap between magnet poles reduces achievable field homogeneity and strength, which is why open systems have historically topped out at 0.3T–0.7T while closed cylindrical bores now reach 3T.",
      "Non-completion is a hidden capacity cost, not just a patient experience issue: a claustrophobic patient who aborts a scan at minute six still consumed the room, the technologist's time and the appointment slot, and typically needs re-booking with sedation — often doubling the effective cost of that single study.",
      "The wide-bore closed magnet (70 cm) has quietly become the de facto compromise for most general hospitals, recovering a large share of the comfort benefit of open systems while keeping 1.5T or 3T image quality, at the cost of a modestly larger and heavier installation than a legacy 60 cm bore.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "Closed cylindrical bores (1.5T–3T) remain the reference standard for image quality; open/low-field systems (0.3T–0.6T) trade resolution and speed for access and comfort.",
      "Wide-bore (70 cm) closed magnets recover much of the comfort benefit of open designs without sacrificing field strength, and are now the default specification for general hospital MRI.",
      "Claustrophobia affects a clinically significant minority of referrals and is a leading cause of scan non-completion and re-booking under sedation.",
      "Bariatric weight and girth limits, and paediatric behavioural tolerance, are access problems open and wide-bore systems solve structurally rather than through sedation.",
      "Open low-field systems have real coil and sequence limitations — diffusion, spectroscopy and some cardiac and functional sequences are constrained or unavailable on many platforms.",
      "A two-scanner service that pairs a 1.5T/3T closed system with an open or wide-bore low-field unit can route case mix intelligently and materially reduce sedation and anaesthesia spend.",
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
    id: "geometries",
    number: 2,
    text: "The Three Geometries: Closed, Wide-Bore and Open",
    body: "Three distinct magnet architectures now compete for the same referral base, each with a different comfort-versus-performance compromise.",
  },
  { type: "h3", text: "Closed cylindrical (standard 60 cm bore)" },
  {
    type: "p",
    text: "The traditional superconducting tunnel magnet, typically 1.5T or 3T, with a 60 cm patient bore and a tunnel length of 1.5–2 metres. It delivers the field homogeneity, gradient performance and coil ecosystem needed for the full clinical sequence library, but the depth and narrowness of the tunnel are the primary trigger for claustrophobic anxiety and the hard limit on patient girth.",
  },
  { type: "h3", text: "Wide-bore closed (70 cm bore)" },
  {
    type: "p",
    text: "The same cylindrical, superconducting architecture at 1.5T or 3T, but with a 70 cm bore and, on most current platforms, a shorter, more flared tunnel opening and brighter in-bore lighting and ventilation. Image quality is essentially unchanged from the standard-bore equivalent. Patient tolerance improves markedly because the extra 10 cm and the shorter effective tunnel reduce the sensation of confinement, and it accommodates a materially higher table weight limit and greater girth.",
  },
  { type: "h3", text: "Open (C-shaped, double-doughnut or vertical-field)" },
  {
    type: "p",
    text: "Open systems remove the enclosing tunnel entirely, using either a C-shaped permanent or resistive magnet, a vertical double-doughnut configuration, or a short, very wide low-field tunnel. Field strengths are typically 0.3T–0.55T, occasionally up to 0.7T on newer resistive designs. Patients are not enclosed on all sides, family members can often remain beside the table, and there is effectively no girth or claustrophobia barrier. The cost is lower signal-to-noise ratio, longer scan times, and a narrower sequence and coil portfolio.",
  },
  {
    type: "diagram",
    id: "field-strength-decision",
    title: "Bore geometry and field strength decision path",
    purpose: "Helps a service planning team map a target patient population and clinical case mix onto the closed, wide-bore or open decision.",
    alt: "Decision-tree diagram starting from patient population characteristics (claustrophobia prevalence, bariatric referral volume, paediatric caseload, need for advanced neuro or prostate imaging) and branching to a recommended magnet geometry: standard closed bore for high-acuity neuro/oncology case mix, wide-bore closed for general hospital case mix with moderate comfort demand, and open/low-field for high claustrophobia, bariatric or paediatric-dominant case mix.",
    caption: "Figure 1 — Decision path for choosing between closed, wide-bore and open MRI geometry based on referral case mix.",
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Bore length matters as much as bore diameter",
    text: "Patient distress correlates more closely with how far the head or chest sits inside the tunnel than with the raw diameter figure. Many wide-bore 1.5T and 3T systems now use shorter magnets and off-isocentre table positioning for head and extremity studies, keeping the patient's face closer to open air even though the bore itself is still 70 cm — a design detail worth specifically asking about during vendor demonstrations.",
  },
  {
    type: "h2",
    id: "claustrophobia",
    number: 3,
    text: "Claustrophobia and Non-Completion Rates",
    body: "Claustrophobic anxiety is common enough in the referred population that it must be planned for structurally, not treated as an occasional exception.",
  },
  {
    type: "p",
    text: "Claustrophobia and related situational anxiety are reported across a meaningful minority of patients referred for MRI, and published series consistently identify it as one of the leading causes of scan discontinuation or non-completion in standard closed-bore departments. The reaction is rarely predictable from the referral alone: prior negative experience, confined-space history, current anxiety state and simple unfamiliarity with the procedure all contribute, and screening questionnaires only partially identify at-risk patients before they are on the table.",
  },
  {
    type: "p",
    text: "The operational consequence is not merely patient discomfort. A discontinued scan still occupies the appointment slot, the technologist's time and often part of a coil set, and it typically converts into either a rebooked appointment with anxiolytic premedication, a sedated re-attempt, or referral to an alternate wide-bore or open site — each of which adds cost, delay and scheduling complexity to a single diagnostic episode.",
  },
  {
    type: "stats",
    items: [
      { value: "1 in 10", label: "approximate proportion of MRI referrals reporting significant claustrophobic anxiety in published radiology series", source: "Peer-reviewed radiology and psychology literature" },
      { value: "Minutes 1–10", label: "window in which most claustrophobia-driven scan aborts occur, usually early in the acquisition" },
      { value: "2x", label: "typical effective cost of a scan that requires a sedated or anaesthetised re-attempt after an initial non-completion" },
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Non-pharmacological measures reduce non-completion first",
    items: [
      "Pre-scan bore familiarisation, including a short in-room orientation or video, measurably reduces anxiety-driven aborts",
      "Feet-first positioning for lower-body and spine studies keeps the head outside or near the bore entrance",
      "In-bore mirrors, wide-angle video goggles and two-way audio reduce the sensation of enclosure without changing hardware",
      "A prone or blindfolded technique is effective for a subset of patients and costs nothing beyond staff training",
      "Escalate to prescribed anxiolytic premedication or a wide-bore/open booking only after non-pharmacological options have been tried",
    ],
  },
  {
    type: "h2",
    id: "bariatric-paediatric",
    number: 4,
    text: "Bariatric and Paediatric Access",
    body: "Bore diameter, table weight limit and gantry aperture set a hard structural ceiling on which patients a scanner can image at all, independent of any comfort measure.",
  },
  {
    type: "p",
    text: "Standard 60 cm closed bores typically carry table weight limits around 130–200 kg and effectively exclude patients whose girth exceeds the bore regardless of weight. As global bariatric referral volumes rise, this is no longer a marginal population: a hospital with only a standard-bore magnet will routinely have to divert, refer out, or simply decline bariatric patients who need MRI for orthopaedic, abdominal or oncological indications. Wide-bore 70 cm systems raise table weight limits to 200–250 kg on most current platforms and materially increase the proportion of bariatric patients who can be imaged with standard coils and positioning. Open systems, with no enclosing tunnel, remove the girth constraint almost entirely, though table weight limits still apply and vary by design.",
  },
  {
    type: "p",
    text: "Paediatric access is a different but related problem: it is behavioural rather than dimensional. Young children frequently cannot remain still for the 20–45 minutes a diagnostic closed-bore study requires, and the confined, loud environment provokes distress even in children without diagnosed anxiety. The default clinical solution has long been sedation or general anaesthesia, particularly under school age. Open and wide-bore systems reduce — but do not eliminate — this requirement, since a caregiver can often remain within arm's reach and the perceived enclosure is lower; several paediatric radiology programmes report meaningfully lower sedation rates on wide-bore or open systems for children able to cooperate with coaching.",
  },
  {
    type: "callout",
    variant: "clinical",
    title: "Weight limits are a safety spec, not just a comfort spec",
    text: "Exceeding a scanner's rated table weight limit is a mechanical safety issue affecting table motor load and patient positioning stability, not only an image-quality concern. Bariatric capability must be verified against the manufacturer's rated limit for the specific table and coil configuration in use, not assumed from the magnet's marketing bore size.",
  },
  {
    type: "h2",
    id: "image-quality",
    number: 5,
    text: "Image Quality and Field Strength Trade-Offs",
    body: "Signal-to-noise ratio scales with field strength, so the access gains of open and wide-bore low-field systems are paid for in resolution, contrast sensitivity or acquisition time.",
  },
  {
    type: "comparison",
    title: "Image quality and clinical scope by geometry",
    headers: ["Geometry", "Typical field strength", "Image quality profile", "Best-suited clinical scope"],
    rows: [
      [
        "Standard closed bore",
        "1.5T–3T",
        "Reference-standard SNR and resolution; full sequence library",
        "Neuro-oncology, MSK detail, prostate mpMRI, cardiac MRI, advanced neuro-functional studies",
      ],
      [
        "Wide-bore closed",
        "1.5T–3T",
        "Equivalent to standard bore at the same field strength; negligible quality trade-off",
        "General hospital case mix, including bariatric and moderately anxious patients requiring full-quality studies",
      ],
      [
        "Open / low-field",
        "0.3T–0.7T",
        "Lower SNR, longer scan times, coarser resolution; adequate for many routine indications",
        "MSK screening, general abdominal and spine imaging, claustrophobic, bariatric or paediatric patients where a lower-detail study is diagnostically sufficient",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The wide-bore row is the one procurement teams most often underweight: it delivers almost the full access benefit historically associated with open systems while giving up essentially nothing on image quality, which is why it has become the default general-hospital specification rather than a premium option.",
    clinicalInterpretation: "Open low-field systems are diagnostically adequate for a genuinely large share of MSK, spine and general abdominal referrals, but should not be the sole platform for prostate mpMRI, small-vessel neuro pathology or advanced cardiac work, where SNR directly limits diagnostic confidence.",
    hospitalRecommendation: "Match field strength to the funded clinical programme rather than buying the highest field strength available; a hospital with a genuine bariatric or paediatric access problem gains more from a wide-bore or open second system than from a second high-field magnet.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "SNR loss compounds with acquisition time trade-offs",
    text: "Lower field strength reduces baseline SNR roughly in proportion to field, and departments recover diagnostic quality by lengthening acquisition time, averaging more signal, or accepting coarser resolution. This is why an open 0.4T system can produce clinically usable images but rarely matches a 1.5T scan time for an equivalent study — the comfort benefit is real, but so is the throughput cost per study.",
  },
  {
    type: "h2",
    id: "coils-sequences",
    number: 6,
    text: "Coil and Sequence Limitations on Open Systems",
    body: "Beyond raw field strength, open systems typically ship with a narrower coil range and cannot support several sequence families that depend on high gradient performance or field homogeneity.",
  },
  {
    type: "ul",
    items: [
      "Diffusion-weighted and diffusion tensor imaging are gradient-performance dependent and are limited or unavailable on many open platforms, restricting their use in acute stroke and some oncology protocols.",
      "High-resolution small-part and cartilage-sensitive sequences used in orthopaedic and sports-medicine imaging generally require the finer gradient linearity and stronger field of a 1.5T or 3T system to match specialist reporting expectations.",
      "MR spectroscopy and functional MRI depend on field strength and homogeneity levels that most open low-field systems cannot reach, and are effectively closed-bore-only capabilities.",
      "Dedicated multi-channel phased-array coils for cardiac, breast and neurovascular imaging are less commonly available or lower channel-count on open platforms, constraining parallel imaging acceleration.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "procurement",
    title: "Ask for the coil list before comparing bore size",
    text: "Vendors will readily quote bore diameter and field strength; the coil complement is where clinical scope is actually decided. Request the full coil list, channel counts and supported sequence packages for the exact configuration being quoted, not the platform's general marketing specification, before assuming an open or wide-bore system can cover a given clinical programme.",
  },
  {
    type: "h2",
    id: "sedation-anaesthesia",
    number: 7,
    text: "Sedation and Anaesthesia Costs Avoided",
    body: "Structural access improvements reduce reliance on sedation and general anaesthesia, avoiding a cost and safety burden that is frequently under-costed when comparing scanner options.",
  },
  {
    type: "p",
    text: "Sedated or anaesthetised MRI carries direct costs — anaesthetist or sedation-trained staff time, monitoring equipment, recovery bay capacity, fasting logistics and, for general anaesthesia, theatre-grade consumables — that are rarely built into a simple per-scan cost comparison between scanner types. It also carries clinical risk: airway management inside a magnet room requires MR-conditional equipment and strict safety zoning, and paediatric general anaesthesia in particular carries recognised risks that departments actively try to minimise through non-pharmacological and open/wide-bore alternatives where clinically appropriate.",
  },
  {
    type: "p",
    text: "A department that structurally reduces its sedation rate — through wide-bore access, open-system availability, or both — recovers slot capacity as well as cost, because a cooperative unsedated patient can typically be scanned, repositioned and discharged in a fraction of the time a sedated case requires once anaesthetic recovery is included. This is one of the more defensible, quantifiable arguments for investing in comfort-oriented geometry rather than treating it as a soft patient-experience benefit.",
  },
  {
    type: "knowledgeBox",
    variant: "quick-facts",
    title: "Where sedation avoidance pays for itself",
    items: [
      "Paediatric imaging: wide-bore and open access with caregiver presence and coaching reduces the population needing general anaesthesia",
      "Bariatric patients: avoids the compounded risk and cost of anaesthetising a patient with a body habitus that itself raises anaesthetic risk",
      "Claustrophobic adults: many require only non-pharmacological measures or oral anxiolytics on a wide-bore system, versus sedation on a standard bore",
      "Recovery bay throughput: unsedated studies free recovery capacity that would otherwise be occupied post-sedation",
    ],
  },
  {
    type: "h2",
    id: "patient-journey",
    number: 8,
    text: "The Patient Journey: Open vs Closed",
    body: "Mapping the full patient journey shows exactly where geometry changes outcomes — at screening, positioning, and mid-scan tolerance — rather than only at the moment of entering the bore.",
  },
  {
    type: "diagram",
    id: "patient-journey",
    title: "Patient journey through an MRI appointment — closed vs open/wide-bore pathway",
    purpose: "Compares the patient-facing steps of a standard closed-bore appointment against a wide-bore or open pathway, highlighting the points at which anxiety, girth or age can cause diversion, sedation or non-completion.",
    alt: "Parallel patient-journey flow diagrams. Top path (standard closed bore): booking and screening, changing and coil fitting, positioning feet- or head-first into a narrow tunnel, a mid-scan anxiety or girth checkpoint that may divert to sedation or an aborted scan, acquisition, and exit. Bottom path (wide-bore or open): booking and screening, changing and coil fitting, positioning with a shorter or open tunnel and optional caregiver presence, a mid-scan tolerance checkpoint with a much lower diversion rate, acquisition at a longer average scan time, and exit.",
    caption: "Figure 2 — The patient journey compared across closed and open/wide-bore pathways, showing where non-completion risk concentrates.",
  },
  {
    type: "p",
    text: "The comparison shows that the two pathways are identical up to the point of positioning, and diverge sharply at the mid-scan tolerance checkpoint — the minute range in which most claustrophobia-driven aborts occur. A wide-bore or open pathway does not eliminate this checkpoint but substantially lowers the probability of diversion, at the structural cost of a longer average acquisition time on genuinely open, low-field systems.",
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Design the booking pathway around the checkpoint, not just the bore",
    text: "Departments that screen for claustrophobia and bariatric or paediatric access needs at the referral or booking stage — rather than discovering them on the table — can route the patient to the correct scanner or the correct premedication in advance, which is where most of the non-completion reduction actually comes from.",
  },
  {
    type: "h2",
    id: "siting-footprint",
    number: 9,
    text: "Siting Footprint and Building Requirements",
    body: "Open and closed systems place broadly similar demands on RF shielding and safety zoning, but differ meaningfully in magnet weight, fringe field shape and room footprint.",
  },
  {
    type: "table",
    caption: "Siting and footprint comparison by geometry",
    headers: ["Factor", "Standard/wide-bore closed", "Open (permanent or resistive)"],
    rows: [
      [
        "Typical magnet weight",
        "3–6 tonnes (superconducting)",
        "4–10+ tonnes for C-shaped permanent designs; lighter for resistive open systems",
      ],
      [
        "Room footprint",
        "Compact, roughly rectangular; footprint driven by bore length and fringe field",
        "Often larger floor footprint due to the open magnet gap and access clearance around the table",
      ],
      [
        "Fringe field shape",
        "Roughly ellipsoidal along the bore axis; well-documented four-zone modelling",
        "More laterally spread on C-shaped designs, sometimes easing overhead shielding but complicating lateral zoning",
      ],
      [
        "Cryogen dependency",
        "Superconducting; requires helium and a quench vent path",
        "Permanent-magnet open systems need no cryogen; resistive open systems need water cooling but no helium",
      ],
      [
        "RF shielding",
        "Full Faraday enclosure required, as for any MRI",
        "Full Faraday enclosure required, as for any MRI — no reduction versus closed systems",
      ],
      [
        "Floor loading",
        "Significant; structural survey required",
        "Often equally or more significant given magnet weight; structural survey required",
      ],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The popular assumption that open systems are structurally lighter and easier to site is not reliable — permanent-magnet open systems are often heavier than a superconducting closed magnet of similar field strength, because the magnetic circuit is completed through iron rather than a compact superconducting coil.",
    clinicalInterpretation: "Not directly clinical, but siting delays caused by an unexpected structural survey outcome translate directly into delayed service start and lost referral volume.",
    hospitalRecommendation: "Commission a structural, electrical and shielding survey before finalising the choice between geometries; do not assume open equals a simpler build, and price the survey into the project timeline regardless of which system is selected.",
  },
  {
    type: "diagram",
    id: "room-planning",
    title: "Room planning comparison — closed wide-bore suite vs open MRI suite",
    purpose: "Shows how equipment room adjacency, access clearance around the table and fringe-field shielding differ between a wide-bore closed suite and a C-shaped open suite.",
    alt: "Two floor-plan diagrams side by side. Left: a wide-bore closed MRI suite with a compact magnet room, adjacent equipment room and a rectangular four-zone safety layout along the bore axis. Right: an open MRI suite with a wider magnet footprint, additional clearance around the table for caregiver access, and a more laterally distributed fringe-field boundary requiring shielding extended to the sides of the room.",
    caption: "Figure 3 — Comparative room planning for a wide-bore closed suite and an open MRI suite.",
  },
  {
    type: "h2",
    id: "running-costs",
    number: 10,
    text: "Running Cost Differences",
    body: "Open, cryogen-free systems can materially reduce recurring helium and power costs, but the comparison must be normalised against scan volume and throughput, not cost per scanner alone.",
  },
  {
    type: "p",
    text: "Permanent-magnet open systems require no helium and no continuous cryogenic cooling, removing helium top-up spend and cold-head/compressor maintenance from the running cost base entirely. Power draw is also typically lower than a superconducting system's gradient and RF chain at full duty cycle, though resistive open designs consume continuous power to sustain the magnetic field, which is a different but not necessarily smaller cost. Closed superconducting systems, by contrast, carry helium (or sealed-magnet servicing), cold-head replacement intervals, and higher-capacity chilled-water provisioning as recurring cost lines, indicative figures for which should always be obtained from the specific manufacturer's service contract rather than assumed generically.",
  },
  {
    type: "p",
    text: "The complicating factor is throughput. An open, low-field system's longer average scan time means fewer studies per session for an equivalent case mix, so a lower running cost per scanner can still translate into a higher running cost per completed diagnostic study if the case mix does not suit the lower field strength. Running cost comparisons are only meaningful when expressed per completed study for the intended clinical programme, not per scanner-hour.",
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Comparing running costs per scanner instead of per study",
    text: "A frequent procurement error is comparing indicative annual running costs of an open system against a closed system without correcting for the lower daily study count the open system will realistically achieve, which can erase or reverse the apparent cost advantage once staffing, facility overhead and case mix are included.",
  },
  {
    type: "h2",
    id: "throughput",
    number: 11,
    text: "Throughput and Case-Mix Reality",
    body: "Field strength drives acquisition speed, so a department's achievable daily study count depends heavily on which geometry is doing the scanning and which studies are routed to it.",
  },
  {
    type: "p",
    text: "A 1.5T or 3T closed or wide-bore system can typically complete a general diagnostic study, including positioning and coil setup, within 20–30 minutes, supporting roughly 12–20 studies per single shift depending on protocol discipline. An open low-field system doing the same anatomical study commonly needs 35–50 minutes or more, reducing single-shift throughput to roughly 8–14 studies, and specific advanced protocols may not be achievable at all. This is not a flaw in the open system; it is the direct, expected consequence of lower SNR requiring longer signal averaging, and it must be built into staffing and scheduling models rather than treated as underperformance.",
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Schedule by expected acquisition time, not a single universal slot length",
    text: "Departments running a two-scanner fleet get the most out of both systems by scheduling slot lengths specific to each magnet and study type, rather than a single hospital-wide default slot — a mismatch here is one of the most common causes of chronic overruns on the open or low-field system.",
  },
  {
    type: "h2",
    id: "who-should-buy",
    number: 12,
    text: "Who Should Buy Which System",
    body: "The right single-system choice depends on referral case mix, specialist demand and the realistic size of the claustrophobic, bariatric and paediatric population a given hospital serves.",
  },
  {
    type: "requirements",
    checklist: [
      "Estimate the proportion of current and anticipated referrals that are neuro-oncology, prostate mpMRI, cardiac or advanced MSK — these favour a standard or wide-bore closed system at 1.5T or 3T",
      "Estimate the proportion of referrals from bariatric surgery, orthopaedic and general abdominal services where a lower-resolution study is diagnostically adequate",
      "Quantify current sedation and anaesthesia spend attributable to claustrophobia or paediatric non-cooperation",
      "Confirm whether specialist reporting radiologists will accept low-field images for the intended case mix before committing to an open-only strategy",
      "Model realistic daily throughput for each geometry against actual referral volume, not vendor headline figures",
    ],
    specs: {
      title: "Indicative geometry fit by hospital profile",
      rows: [
        { label: "Tertiary/academic centre with neuro, oncology, prostate mpMRI demand", value: "Standard or wide-bore closed 1.5T/3T as primary system" },
        { label: "General district hospital, broad case mix, moderate bariatric referral", value: "Wide-bore closed 1.5T as primary system" },
        { label: "High bariatric, paediatric or claustrophobic referral volume, limited advanced imaging demand", value: "Open or low-field system as primary or sole system may be justified" },
        { label: "Any hospital with both a specialist programme and a significant access-limited population", value: "Two-scanner mixed fleet — see next section" },
      ],
    },
  },
  {
    type: "quote",
    text: "The question is rarely which geometry is better in the abstract — it is which geometry matches the referrals actually walking through the department's door, and whether the reporting radiologists can work with the resulting image quality.",
    cite: "AbuFarha Clinical Advisory Panel",
  },
  {
    type: "h2",
    id: "mixed-fleet",
    number: 13,
    text: "Mixing a Two-Scanner Service",
    body: "A department large enough to support two MRI systems gains the most by deliberately pairing a high-field closed system with an open or wide-bore low-field unit and routing referrals by clinical need rather than by availability.",
  },
  {
    type: "p",
    text: "In a well-designed two-scanner service, the closed 1.5T or 3T system is protected for studies that genuinely require its SNR and sequence range — neuro-oncology follow-up, prostate mpMRI, cardiac MRI, advanced MSK and any study a reporting radiologist has specified as field-strength-dependent. The second system, whether open or wide-bore low-field, absorbs the volume that does not need that level of detail: routine spine and joint MSK screening, general abdominal follow-up, and — critically — the claustrophobic, bariatric and paediatric caseload that would otherwise consume disproportionate time, sedation resources and non-completion risk on the primary magnet.",
  },
  {
    type: "p",
    text: "This split protects the high-field system's throughput for its highest-value case mix, reduces aggregate sedation and anaesthesia spend, and gives the department a genuine fallback when one magnet is down for maintenance — a resilience benefit that is easy to overlook when systems are purchased purely on a case-by-case clinical justification rather than as a planned fleet.",
  },
  {
    type: "diagram",
    id: "hospital-workflow",
    title: "Referral routing logic in a two-scanner MRI service",
    purpose: "Shows how a booking or scheduling team should triage incoming MRI referrals between a high-field closed system and an open or wide-bore low-field system.",
    alt: "Workflow diagram showing an incoming MRI referral being triaged by clinical indication and patient factors: referrals for neuro-oncology, prostate mpMRI, cardiac or advanced MSK route to the high-field closed system; referrals flagged for claustrophobia, bariatric habitus, paediatric age or general MSK/abdominal screening route to the open or wide-bore low-field system; a feedback loop allows the reporting radiologist to request escalation to the high-field system if the low-field study is diagnostically insufficient.",
    caption: "Figure 4 — Referral routing logic for a mixed high-field and open/low-field two-scanner MRI service.",
  },
  {
    type: "roi",
    paragraph: "A mixed two-scanner fleet is typically justified once a hospital's combined referral volume and access-limited case mix are large enough to keep both systems reasonably utilised; the return comes less from raw scanner throughput than from avoided sedation costs, reduced non-completion re-bookings, and protected high-field capacity for the specialist studies that carry the highest clinical and reputational value.",
    bullets: [
      "Avoided sedation and anaesthesia costs for a defined share of paediatric and claustrophobic referrals",
      "Reduced non-completion and re-booking losses on the primary high-field system",
      "Protected slot availability on the high-field system for specialist mpMRI, neuro and cardiac referrals that drive specialist reputation and referral growth",
      "Built-in service resilience — one system can absorb urgent cases if the other is down for planned or unplanned maintenance",
    ],
    callout: {
      title: "Before committing to a second scanner",
      lines: [
        "Confirm the access-limited referral volume is large enough to justify a dedicated second system rather than premedication protocols on the existing scanner",
        "Model combined staffing, since a second modality still requires trained technologists and, for sedation cases, anaesthesia support",
        "Verify PACS, RIS and protocol governance can manage two distinct image-quality profiles without confusing reporting radiologists",
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "safety-alert",
    title: "Two magnets means two independently managed safety zones",
    text: "Each MRI system, open or closed, requires its own fully compliant four-zone safety programme, screening protocol and trained MR safety officer coverage. Running two scanners does not allow safety governance to be shared loosely between rooms; each site must be independently commissioned and audited.",
  },
  {
    type: "h2",
    id: "procurement",
    number: 14,
    text: "Procurement Checklist",
    body: "A structured procurement checklist prevents the most common error in this category — buying on bore diameter and field strength alone without verifying coil scope, throughput and total running cost.",
  },
  {
    type: "ul",
    items: [
      "Request the full coil complement, channel counts and supported sequence packages for the exact quoted configuration, not the platform's general specification sheet.",
      "Obtain the manufacturer's rated table weight limit and bore clearance for the specific table and coil combination intended for bariatric use.",
      "Require indicative, clearly labelled typical running cost ranges covering helium or cooling servicing, power consumption and preventive maintenance, normalised to expected annual study volume.",
      "Confirm realistic average scan times for the hospital's actual case mix from reference sites, not vendor best-case figures.",
      "Verify local service and parts support for the specific geometry — open and low-field systems have a smaller global installed base and can have longer parts lead times in some regions.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "future-technology",
    title: "High-performance low-field systems are narrowing the gap",
    text: "A newer generation of 0.55T systems using modern gradient and reconstruction technology, including AI-based denoising, is closing part of the historical image-quality gap between low-field and 1.5T for several routine indications, while retaining much of the comfort and running-cost benefit of a lower-field, smaller-footprint system. This is a genuine trend worth monitoring during any multi-year procurement planning cycle, though it does not yet replace 1.5T/3T for the highest-acuity studies.",
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Do not let bore comfort dictate diagnostic scope alone",
    text: "A hospital that selects an open, low-field system purely to solve a comfort or throughput problem must confirm — in writing, with the reporting radiologists — that the intended clinical programme's diagnostic requirements can actually be met at that field strength. Retrofitting a specialist programme onto an underpowered magnet after purchase is a common and costly planning failure.",
  },
  {
    type: "h2",
    id: "faq",
    number: 15,
    text: "Frequently Asked Questions",
    body: "Common, practical questions hospital teams ask when comparing open and closed-bore MRI options.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is an open MRI scan lower quality than a closed MRI scan?",
        a: "Generally yes, because open systems run at lower field strength, giving lower signal-to-noise ratio and typically coarser resolution or longer scan times. For many routine MSK, spine and abdominal indications the difference is not clinically significant, but for prostate mpMRI, advanced neuro-oncology and cardiac imaging, a high-field closed system remains preferable.",
      },
      {
        q: "Can a wide-bore closed MRI replace an open MRI for claustrophobic patients?",
        a: "For many patients, yes — the shorter, wider tunnel and improved lighting and ventilation reduce anxiety enough to complete the scan without sedation. A minority of severely claustrophobic patients will still require an open system or premedication regardless of bore width.",
      },
      {
        q: "What weight can a wide-bore MRI system accommodate?",
        a: "Most current wide-bore 70 cm systems have table weight limits in the 200–250 kg range, compared with roughly 130–200 kg on many standard 60 cm bores, though the exact limit must be confirmed against the specific manufacturer's rated specification for the table and coil configuration in use.",
      },
      {
        q: "Do open MRI systems still need liquid helium?",
        a: "Permanent-magnet open systems need no helium at all. Resistive open systems use continuous electrical current and water cooling rather than cryogens. Only superconducting systems, whether closed or the rarer superconducting open designs, require helium.",
      },
      {
        q: "How much longer does an open MRI scan take compared with a closed system?",
        a: "As an indicative range, an equivalent study can take roughly 1.5 to 2 times longer on a low-field open system than on a 1.5T closed or wide-bore system, because lower signal-to-noise ratio must be recovered through longer signal averaging.",
      },
      {
        q: "Can children avoid general anaesthesia on an open MRI system?",
        a: "Many children who cannot tolerate a standard closed bore can be scanned unsedated on an open or wide-bore system, particularly with caregiver presence and pre-scan coaching, though younger or more anxious children may still require sedation regardless of geometry.",
      },
      {
        q: "Is a bariatric patient always better served by an open MRI system?",
        a: "Not necessarily — a wide-bore closed 1.5T system often provides both sufficient girth clearance and full diagnostic image quality for bariatric patients, and should be tried first where available; an open system becomes necessary mainly when girth exceeds even the wide bore's clearance.",
      },
      {
        q: "What sequences are typically unavailable on open low-field systems?",
        a: "Diffusion-weighted and diffusion tensor imaging, MR spectroscopy, functional MRI and some high-resolution cartilage or small-part sequences are limited or unavailable on many open low-field platforms, because they depend on gradient performance and field homogeneity that low-field magnets cannot reach.",
      },
      {
        q: "Does an open MRI system have a smaller room footprint than a closed system?",
        a: "Not always. Permanent-magnet open systems can be heavier and require a wider floor footprint than a compact superconducting closed magnet, so siting assumptions should be verified with a structural and shielding survey rather than assumed from geometry alone.",
      },
      {
        q: "Should a hospital buy one open scanner and one closed scanner instead of two closed scanners?",
        a: "For hospitals with a significant claustrophobic, bariatric or paediatric referral volume alongside genuine demand for specialist high-field studies, a mixed fleet often delivers better overall outcomes than two identical closed systems, because it protects high-field capacity while structurally solving the access problem.",
      },
      {
        q: "Are running costs actually lower on an open MRI system?",
        a: "Per scanner, often yes, because there is no helium and typically lower power draw. Per completed diagnostic study, the advantage can shrink or disappear because open systems complete fewer studies per session; running costs should always be compared per study for the intended case mix.",
      },
      {
        q: "Can an open MRI system be upgraded to a higher field strength later?",
        a: "Generally no — the magnet architecture of most open systems is fixed at purchase and cannot be field-upgraded to a materially higher field strength in the way some closed-system software and coil packages can be upgraded. Field strength should be treated as a permanent decision at the time of purchase.",
      },
      {
        q: "Do reporting radiologists need different training for open, low-field images?",
        a: "Radiologists experienced with high-field imaging generally adapt quickly to reading low-field studies but should be specifically oriented to the different noise and contrast characteristics, and departments should confirm reporting comfort with low-field images before committing a specialist programme to an open system.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    number: 16,
    text: "Conclusion",
    body: "Open, wide-bore and closed MRI systems each solve a different part of the diagnostic imaging problem, and the strongest services deploy them deliberately rather than defaulting to whichever geometry was purchased first.",
  },
  {
    type: "p",
    text: "There is no universally correct answer to open versus closed-bore MRI — only a correct answer for a specific hospital's referral case mix, specialist ambitions, and the size of its claustrophobic, bariatric and paediatric population. A wide-bore closed system is now the sensible default for most general hospitals, recovering much of the comfort benefit of open geometry without a meaningful image-quality cost. Open, low-field systems remain the right choice where access constraints dominate the case mix, or as the second system in a deliberately mixed two-scanner fleet that protects high-field capacity for the studies that need it most. Whichever path is chosen, the decision should be driven by a documented case-mix analysis and a realistic throughput and running-cost model — not by bore diameter alone.",
  },
  {
    type: "referenceGroups",
    note: "References are provided for professional orientation. Always follow the current edition of each standard, the applicable national regulations, and the manufacturer's instructions for use for your specific system.",
    groups: [
      {
        title: "Medical guidelines",
        items: [
          {
            label: "American College of Radiology. ACR Manual on MR Safety — MR personnel, four-zone access control and patient screening practice.",
          },
          {
            label: "ACR–NASCI–SPR. Practice Parameter for the Performance and Interpretation of Magnetic Resonance Imaging.",
          },
        ],
      },
      {
        title: "Scientific publications",
        items: [
          {
            label: "Peer-reviewed radiology and psychology literature on MRI-related claustrophobia prevalence and non-completion rates.",
          },
          {
            label: "Peer-reviewed comparative literature on 0.55T and open low-field imaging performance for routine musculoskeletal and abdominal indications.",
          },
        ],
      },
      {
        title: "Regulatory authorities",
        items: [
          {
            label: "U.S. Food and Drug Administration. MRI (Magnetic Resonance Imaging) — device safety and labelling guidance.",
          },
          {
            label: "UK Medicines and Healthcare products Regulatory Agency (MHRA). Safety guidelines for magnetic resonance imaging equipment in clinical use.",
          },
          {
            label: "European Commission. Medical Device Regulation (EU) 2017/745 — requirements for placing MR systems on the EU market.",
          },
        ],
      },
      {
        title: "International standards",
        items: [
          {
            label: "IEC 60601-2-33. Particular requirements for the basic safety and essential performance of magnetic resonance equipment for medical diagnosis.",
          },
          {
            label: "ASTM F2503. Standard Practice for Marking Medical Devices and Other Items for Safety in the Magnetic Resonance Environment.",
          },
          {
            label: "NEMA MS series. Standards for determination of signal-to-noise ratio, image uniformity and geometric distortion in diagnostic MR imaging.",
          },
        ],
      },
      {
        title: "Manufacturer documentation",
        items: [
          {
            label: "Siemens Healthineers, GE HealthCare, Philips, Canon Medical Systems and Hitachi/Fujifilm Healthcare — open, wide-bore and low-field system siting guides and instructions for use.",
          },
          {
            label: "Manufacturer preventive maintenance schedules, table weight limit specifications and coil compatibility documentation for the installed platform.",
          },
        ],
      },
      {
        title: "Medical societies",
        items: [
          {
            label: "International Society for Magnetic Resonance in Medicine (ISMRM) — low-field and open MRI applications resources.",
          },
          {
            label: "Radiological Society of North America (RSNA) — clinical MRI education material.",
          },
          {
            label: "European Society of Radiology (ESR) — imaging referral guidelines and quality standards.",
          },
        ],
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Planning an open, wide-bore or mixed MRI fleet?",
    subheading: "Our clinical applications team and biomedical engineers advise hospitals across Africa and the Middle East on geometry selection, siting, service planning and total cost of ownership.",
    technology: "MRI",
  },
];
