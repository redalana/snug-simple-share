import type { ContentBlock, TocItem } from "../blog";
import solCt from "@/assets/sol-ct.jpg";

export const CT_IMAGE_ARTEFACTS_TROUBLESHOOTING_TOC: TocItem[] = [
  { id: "overview", title: "Why CT Artefacts Matter" },
  { id: "beam-hardening", title: "Beam Hardening Artefact" },
  { id: "metal-artefact", title: "Metal Artefact" },
  { id: "motion-artefact", title: "Patient and Physiological Motion Artefact" },
  { id: "ring-artefact", title: "Ring Artefact" },
  { id: "streak-artefact", title: "Streak Artefact" },
  { id: "cone-beam", title: "Cone-Beam Artefact" },
  { id: "partial-volume", title: "Partial Volume Averaging" },
  { id: "photon-starvation", title: "Photon Starvation and Noise Streaking" },
  { id: "truncation", title: "Truncation (Off-FOV) Artefact" },
  { id: "helical-misregistration", title: "Helical and Misregistration Artefact" },
  { id: "classification-framework", title: "Engineering Fault vs Protocol Issue: A Decision Framework" },
  { id: "qa-programme", title: "Daily and Periodic QA That Catches Drift Early" },
  { id: "fault-isolation-workflow", title: "Systematic Fault-Isolation Workflow" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const CT_IMAGE_ARTEFACTS_TROUBLESHOOTING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    image: solCt,
    imageAlt: "CT technologist reviewing a reconstructed axial image for artefact at a diagnostic workstation",
    paragraphs: [
      "A CT image is a mathematical reconstruction built from tens of thousands of individual attenuation measurements, and every stage of that chain — X-ray spectrum, detector calibration, patient physiology, gantry mechanics, reconstruction algorithm — can leave a distinctive fingerprint on the final slice. Radiologists and technologists call these fingerprints artefacts: image features that do not correspond to real anatomy. Some are unavoidable physics that must be recognised and worked around with protocol choices; others are genuine engineering faults — a drifting detector channel, a failing slip-ring contact, a miscalibrated tube — that require a service engineer and cannot be fixed by changing kV or pitch.",
      "Confusing the two costs real money and real risk. A technologist who reprotocols around what is actually a detector fault will keep reproducing the same artefact on every subsequent patient while the underlying hardware degrades further. A service engineer called out for what is actually a straightforward patient-motion or truncation artefact wastes a visit that could have been resolved by the technologist in the scan room. Worse, an artefact misread as pathology — or pathology masked by an artefact — is a direct patient safety issue.",
      "This guide works through the CT artefact families in the order a technologist is most likely to encounter them, explains the underlying physics precisely but without unnecessary derivation, and — critically — classifies each one as a patient factor, a protocol choice, or a hardware fault, because that classification determines who acts on it and how quickly. It closes with a QA programme and a fault-isolation workflow that turn artefact knowledge into a reliable day-to-day service discipline.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "CT artefact physics, beam hardening and metal artefact correction, motion and cone-beam artefact, ring and streak artefact diagnosis, engineering-fault classification, QA phantom testing, systematic fault isolation",
    audience:
      "CT technologists, radiologists, biomedical engineers and imaging department managers",
    readingTime: "18 min read",
    technology: "Computed Tomography (CT)",
  },
  {
    type: "h2",
    id: "overview",
    number: 1,
    text: "Why CT Artefacts Matter",
    body: "An artefact is any image feature that does not represent the anatomy scanned. In CT, artefacts can mimic disease, obscure real pathology, or simply be a persistent quality complaint — and the corrective action differs sharply depending on the cause.",
  },
  {
    type: "ul",
    items: [
      "The single most useful diagnostic habit in CT troubleshooting is asking whether the artefact reproduces on every patient, on a phantom scan, and across every protocol — a fault that appears on a uniform water phantom with no patient in the bore is unambiguous hardware; one that only appears with a specific patient body habitus or breath-hold pattern is very rarely a machine fault.",
      "Several CT artefacts are diagnostically informative rather than purely a nuisance to eliminate — beam hardening cupping is expected and correctable, and a technologist who recognises it does not chase a phantom hardware call.",
      "Detector and tube degradation in CT is almost always gradual, not sudden — a slowly drifting detector channel or a tube with early anode wear produces a subtle ring or streak long before it fails outright, which is why a structured QA programme, not incident reports from radiologists, should be the first line of detection.",
    ],
  },
  {
    type: "takeaways",
    items: [
      "Classify every artefact as patient/physics, protocol, or hardware before troubleshooting — the corrective action and who performs it differ completely between the three.",
      "Beam hardening, partial volume averaging and cone-beam artefact are physics that protocol and reconstruction settings can reduce but never fully eliminate — they are not engineering faults.",
      "Ring artefact is a detector-calibration signature almost every time; it is a service engineer's problem, not a protocol fix.",
      "Metal artefact is unavoidable in the presence of dense implants but is heavily reducible with metal artefact reduction (MAR) algorithms, higher kVp, and orientation choices.",
      "Photon starvation streaking through dense anatomy (shoulders, pelvis in large patients) is corrected with automatic exposure control, higher mA, iterative reconstruction, or dual-energy techniques — not by assuming detector failure.",
      "A weekly-to-monthly phantom QA programme, aligned with AAPM and IEC guidance, catches detector and calibration drift long before it becomes a reported clinical image-quality complaint.",
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
        credential: "CT applications training and protocol optimisation",
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
    id: "beam-hardening",
    number: 2,
    text: "Beam Hardening Artefact",
    body: "Beam hardening arises because a polychromatic X-ray beam preferentially loses its lower-energy photons as it passes through tissue, shifting the mean beam energy upward and producing cupping and streaking that is physics, not a fault.",
  },
  {
    type: "p",
    text: "A clinical CT tube emits a spectrum of photon energies, not a single energy. As that spectrum traverses tissue, low-energy photons are attenuated preferentially because attenuation coefficients fall with increasing photon energy, so the beam's average energy rises — it 'hardens' — as it penetrates deeper. Because reconstruction algorithms assume a simplified attenuation relationship, this energy shift is misread as reduced attenuation along paths that pass through more tissue, producing the classic 'cupping' artefact in homogeneous objects (a bowl-shaped dip in Hounsfield units toward the centre of large uniform structures) and dark banding between two dense structures such as the petrous bones or between the femoral heads.",
  },
  {
    type: "p",
    text: "Recognition is straightforward once you know the signature: cupping in a large uniform phantom or a large patient's abdomen, or dark streaks specifically between two adjacent dense/bony structures. Modern scanners apply beam-hardening correction algorithms during reconstruction, and additional bowtie filtration shapes the beam to reduce the effect further, but neither eliminates it completely in every geometry.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Beam hardening is corrected, never eliminated — do not chase it as a fault",
    text: "A residual cupping or interpetrous banding artefact on an otherwise normally functioning scanner is expected physics, not evidence of tube or detector failure. Confirm correction algorithms and bowtie filter are active per protocol before considering any service action; a scanner that shows dramatically worse beam hardening than its own historical baseline, however, warrants a calibration check.",
  },
  {
    type: "h2",
    id: "metal-artefact",
    number: 3,
    text: "Metal Artefact",
    body: "Dense metal implants attenuate the beam so heavily that they cause severe photon starvation, beam hardening and edge effects simultaneously, producing the familiar dark and bright streaking radiating from hip, spine or dental hardware.",
  },
  {
    type: "p",
    text: "Metal such as titanium, stainless steel or dental amalgam attenuates far more strongly than any soft tissue or bone, driving some detector channels toward complete photon starvation along that ray path. The reconstruction algorithm, faced with data that violates its underlying physical assumptions, produces bright and dark streaks radiating outward from the implant, and can also distort the shape of the metal itself. This is compounded by beam hardening across the same dense path.",
  },
  {
    type: "h3",
    text: "Reduction strategies",
  },
  {
    type: "ul",
    items: [
      "Metal artefact reduction (MAR) algorithms — vendor-specific iterative or projection-completion methods that identify and interpolate over the corrupted metal trace before reconstruction",
      "Increasing kVp to raise mean photon energy, which reduces the fraction of photons fully absorbed by the implant",
      "Reducing pitch and increasing mA in the affected region, or using dedicated metal-artefact protocols where available",
      "Thinner reconstructed slices and adjusted reconstruction kernel to limit partial volume compounding around the implant",
      "Angling the gantry or repositioning the patient, where clinically feasible, to move the implant's long axis out of the primary imaging plane",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "MAR is a protocol and reconstruction choice, not a hardware fix",
    text: "Metal artefact around a known implant is expected and is managed with acquisition protocol and MAR reconstruction — it should never trigger a service call. A service engineer should only be involved if streaking of similar severity appears around ordinary anatomy with no metal present, which points to a different underlying cause.",
  },
  {
    type: "h2",
    id: "motion-artefact",
    number: 4,
    text: "Patient and Physiological Motion Artefact",
    body: "Motion during acquisition — voluntary patient movement, respiration, cardiac motion or peristalsis — produces blurring, doubling and streaking, and is almost always a patient or protocol factor rather than a machine fault.",
  },
  {
    type: "p",
    text: "Because CT acquires projection data over a finite time as the gantry rotates (and, in helical scanning, as the table advances), any patient motion during that window misaligns the projections used for reconstruction. The result ranges from simple blurring of edges to overt double-contour ghosting of an organ boundary, and streaking radiating from a moving high-contrast edge such as the diaphragm or a pulsatile vessel. Cardiac motion in non-gated chest or abdominal CT is a common and predictable source of blurring around the heart border and adjacent lung.",
  },
  {
    type: "table",
    caption: "Motion artefact sources and corrective actions",
    headers: ["Source", "Typical appearance", "Corrective action", "Category"],
    rows: [
      ["Gross voluntary movement", "Sharp discontinuity, banding across the whole image", "Patient coaching, immobilisation, repeat acquisition", "Patient factor"],
      ["Respiratory motion", "Blurred diaphragm and lung bases, stair-step discontinuity in helical scans", "Breath-hold instruction, faster rotation time, respiratory gating where available", "Protocol"],
      ["Cardiac pulsation", "Blurring/doubling of aortic root, cardiac border", "ECG gating or higher temporal resolution acquisition for cardiac studies", "Protocol"],
      ["Peristalsis / bowel motion", "Blurred bowel wall in prolonged acquisitions", "Antispasmodic premedication where clinically indicated, faster acquisition", "Protocol"],
      ["Tremor or involuntary movement (e.g. Parkinsonian, paediatric)", "Fine blurring across the study", "Sedation policy per institutional protocol, faster scan, immobilisation aids", "Patient factor"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Motion is the most frequent single cause of a repeat CT scan, and it is entirely outside the scanner's engineering integrity.",
    clinicalInterpretation: "Distinguishing true motion blur from a genuine finding matters most at organ borders and in vascular studies, where a moving edge can mimic a dissection flap or an intimal irregularity.",
    hospitalRecommendation: "Invest in technologist coaching and immobilisation aids before assuming faster gantry rotation alone solves a motion problem — patient preparation is the highest-yield, lowest-cost intervention.",
  },
  {
    type: "h2",
    id: "ring-artefact",
    number: 5,
    text: "Ring Artefact",
    body: "Ring artefact appears as one or more concentric circles centred on the axis of rotation and is, in the overwhelming majority of cases, a genuine detector calibration fault requiring engineering intervention.",
  },
  {
    type: "p",
    text: "In third-generation (rotate-rotate) CT geometry, a single miscalibrated or drifting detector channel samples the same angular position relative to the isocentre on every rotation, so a small error in that one channel's response is repeated identically at every projection angle. When reconstructed, that consistent single-channel error maps to a full circle (or partial arc) centred on the rotation axis rather than a randomly placed artefact. The ring's radius corresponds directly to the position of the faulty detector element, which is diagnostically useful information for a service engineer isolating the failing channel.",
  },
  {
    type: "callout",
    variant: "important",
    title: "Ring artefact is not a protocol issue",
    text: "Changing kVp, mA, pitch or reconstruction kernel will not remove a true ring artefact, because the cause sits in the detector hardware and calibration table, not in the acquisition parameters. Persistent full or partial rings on both phantom and patient images should be escalated to a service engineer for detector recalibration or element replacement.",
  },
  {
    type: "h3",
    text: "Confirming the diagnosis before calling for service",
  },
  {
    type: "ul",
    items: [
      "Scan a uniform water or air phantom — a true detector-related ring will appear identically on the phantom with no patient present, which rules out any patient-related explanation",
      "Note whether the ring is a complete circle (single channel error) or a partial arc (intermittent or angle-dependent fault)",
      "Compare against the scanner's own daily QA air-calibration log — most modern systems flag channel drift automatically before it becomes visible on clinical images",
      "Recalibration (air calibration) resolves many early-stage ring artefacts; persistent rings after recalibration usually indicate a detector element or DAS channel requiring replacement",
    ],
  },
  {
    type: "h2",
    id: "streak-artefact",
    number: 6,
    text: "Streak Artefact",
    body: "Streaks are linear or radiating bright-and-dark lines that can arise from multiple distinct causes — photon starvation, motion, metal, or an intermittent electronic fault — so accurate classification requires checking which mechanism is actually at work before deciding on a fix.",
  },
  {
    type: "p",
    text: "Unlike ring artefact, which has one dominant cause, 'streaking' is a family of appearances with several possible origins: undersampling (too few projections, or view aliasing at high-contrast edges), photon starvation through dense anatomy, patient motion, or an intermittently failing detector or data-acquisition-system (DAS) channel. The corrective action is completely different for each, which makes streak artefact one of the most commonly misdiagnosed CT artefacts.",
  },
  {
    type: "table",
    caption: "Differentiating streak artefact causes",
    headers: ["Appearance clue", "Likely cause", "Confirms with", "Category"],
    rows: [
      ["Streaks confined to dense anatomy (shoulders, pelvis) in a large patient", "Photon starvation", "Reproducible on similarly sized phantom or large-patient scans only", "Protocol/patient"],
      ["Streaks radiating from a specific metal object", "Metal artefact / beam hardening", "Streaks disappear when the object is removed or absent in adjacent slices", "Physics/protocol"],
      ["Fine tangential streaks near a high-contrast sharp edge", "View aliasing / undersampling", "Reduced with higher mA or reduced pitch on the same anatomy", "Protocol"],
      ["Random, non-reproducible streaks that shift position between scans", "Intermittent electronic fault (DAS or detector channel)", "Reproduces on phantom scans without a patient present", "Hardware fault"],
      ["Consistent linear streak in a fixed location across many unrelated patients", "Fixed detector or generator fault", "Confirmed on phantom, does not vary with protocol", "Hardware fault"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The diagnostic key to streak artefact is reproducibility on a phantom: physics-based streaks depend on patient anatomy and disappear on a uniform phantom, while true hardware streaks persist regardless of what is in the bore.",
    clinicalInterpretation: "Streaks through dense pelvic or shoulder anatomy are frequently misread by less experienced staff as scanner malfunction when they are in fact a predictable consequence of photon starvation in a large patient.",
    hospitalRecommendation: "Standardise a two-minute phantom check as the first troubleshooting step for any reported streak artefact before logging a service ticket — it correctly routes the majority of cases to either a protocol adjustment or a genuine engineering fault.",
  },
  {
    type: "h2",
    id: "cone-beam",
    number: 7,
    text: "Cone-Beam Artefact",
    body: "Multi-detector-row scanners with wide z-axis coverage use a diverging (cone-shaped) X-ray beam rather than the simpler fan-beam geometry of single-slice scanners, and the outer detector rows sample oblique paths that violate the simplifying assumptions of fan-beam reconstruction.",
  },
  {
    type: "p",
    text: "As detector row count and cone angle increase, rays reaching the outermost rows travel at an increasing angle relative to the central imaging plane. Reconstruction algorithms designed around simpler two-dimensional fan-beam geometry treat these oblique rays approximately, and near sharply changing high-contrast structures oriented along the z-axis — the skull base, the shoulders, dense bone-air interfaces — this produces streaking and blurring that increases toward the edges of the detector array and is most visible on the outer detector rows' contribution to the reconstructed slab.",
  },
  {
    type: "p",
    text: "Cone-beam artefact is inherent to the geometry of wide-coverage multi-detector CT and is managed, not eliminated, through dedicated cone-beam reconstruction algorithms (such as Feldkamp-type and its iterative refinements) that model the true divergent ray geometry rather than approximating it. It is a design and reconstruction-software characteristic, not a fault that develops in service, though it can be worsened by a genuine detector row calibration problem — which is why a persistent asymmetric worsening localised to specific rows, rather than a symmetric edge effect, should still prompt an engineering check.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Cone angle is a direct trade-off against coverage speed",
    text: "Wider detector arrays cover more anatomy per rotation, which is why they exist, but the wider the array, the larger the cone angle and the more reconstruction has to compensate at the outer rows. This is a fixed engineering trade-off inherent to the detector design a hospital selects, not something a protocol change can remove after the fact.",
  },
  {
    type: "h2",
    id: "partial-volume",
    number: 8,
    text: "Partial Volume Averaging",
    body: "When a voxel contains a mixture of tissues with different attenuation, the reconstructed value is an average of all of them, which can hide small lesions or falsely suggest tissue at the boundary between two structures.",
  },
  {
    type: "p",
    text: "Partial volume averaging is not an artefact in the sense of a distortion or streak; it is an inherent limitation of finite voxel size. A small lesion smaller than the slice thickness, or a structure that only partially fills a voxel at its edge, is blended with the surrounding tissue's attenuation value, which can make a low-attenuation lesion appear falsely denser (or vice versa) and can blur the true boundary of a structure such as a renal cyst or a lung nodule. The classic example is the apparent 'pseudo-enhancement' or attenuation shift seen when a small structure sits at an oblique angle through the slice.",
  },
  {
    type: "h3",
    text: "Managing partial volume effects",
  },
  {
    type: "ul",
    items: [
      "Thinner reconstructed slices reduce the volume averaged into each voxel, at the cost of increased image noise for a fixed dose",
      "Isotropic acquisition with multiplanar reformatting lets a structure be re-examined in the plane where it is least affected by partial volume",
      "Awareness during interpretation — a lesion suspected of being altered by partial volume should be re-measured on thinner slices or a different plane before a size or density conclusion is drawn",
    ],
  },
  {
    type: "callout",
    variant: "note",
    title: "Partial volume averaging is universal physics, not a fault of any kind",
    text: "Every CT system exhibits partial volume averaging because it is a direct consequence of finite voxel size, not a hardware limitation specific to any scanner. The only lever available is slice thickness and reconstruction plane, chosen according to clinical need and radiation dose constraints.",
  },
  {
    type: "h2",
    id: "photon-starvation",
    number: 9,
    text: "Photon Starvation and Noise Streaking",
    body: "When too few photons reach the detector along a heavily attenuating path, the resulting measurement is dominated by quantum noise rather than true signal, producing characteristic streaking through the densest anatomy in the largest patients.",
  },
  {
    type: "p",
    text: "Photon starvation occurs where the attenuation path is so long and dense — through the shoulders, the pelvis of a large patient, or around dense metal — that very few photons survive to reach the detector along that ray. With so few photons, statistical (quantum) noise dominates the measurement, and this noisy data propagates through reconstruction as streaking oriented along the direction of greatest attenuation. It is worst at low mA settings, at low kVp, and in larger patients, and it is one of the most common preventable image-quality complaints in a busy department.",
  },
  {
    type: "table",
    caption: "Photon starvation: mitigation options",
    headers: ["Mitigation", "Mechanism", "Trade-off"],
    rows: [
      ["Automatic exposure control (AEC / tube current modulation)", "Increases mA automatically through denser body regions", "Increases dose in that region, generally still net-favourable"],
      ["Higher kVp", "More penetrating beam reaches the detector with fewer photons absorbed", "Reduces soft-tissue contrast if raised excessively"],
      ["Iterative reconstruction", "Statistically models noise rather than filtering it linearly, preserving detail at lower dose", "Can alter image texture; requires radiologist familiarisation"],
      ["Dual-energy or spectral CT", "Uses two energy datasets to better separate true signal from noise and material composition", "Higher system cost and more complex protocol management"],
      ["Bowtie filter and pre-patient shaping", "Reduces dose to thinner peripheral body regions, preserving flux to the centre", "Fixed by scanner design and patient centring accuracy"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Photon starvation is frequently reported to biomedical engineering as a suspected tube or detector fault when it is in fact a predictable consequence of patient size interacting with a fixed technique chart.",
    clinicalInterpretation: "Streaking that appears only in the largest patients and only through the densest body regions is very rarely evidence of hardware failure; streaking of similar severity in an average-sized patient through soft tissue is not explained by photon starvation and should prompt investigation.",
    hospitalRecommendation: "Confirm AEC is enabled and appropriately configured for body region before assuming any component failure, and review technique charts periodically against the actual patient population the department serves.",
  },
  {
    type: "h2",
    id: "truncation",
    number: 10,
    text: "Truncation (Off-FOV) Artefact",
    body: "When part of the patient extends beyond the scanner's reconstruction field of view, the missing projection data produces bright banding or distorted anatomy at the edge of the reconstructed image.",
  },
  {
    type: "p",
    text: "Reconstruction algorithms assume that the complete attenuating object has been captured within the scan field of view. When a patient's arms, a large body habitus, or external equipment such as an arm board extend beyond that field, the projection data for those outer regions is incomplete, and the algorithm cannot correctly reconstruct the truncated area. The typical result is a bright rim or streak at the edge of the field of view and distorted or falsely elevated attenuation values near the image periphery, which can compromise dose calculations in radiotherapy planning CT in particular.",
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Truncation is a positioning and field-of-view decision, not a fault",
    text: "Positioning the patient's arms outside the scan plane where clinically appropriate, selecting an adequately large reconstruction field of view for the patient's body habitus, and using extended field-of-view reconstruction algorithms where available are the correct responses. It is a workflow and protocol correction, never a service call.",
  },
  {
    type: "h2",
    id: "helical-misregistration",
    number: 11,
    text: "Helical and Misregistration Artefact",
    body: "Helical (spiral) acquisition interpolates between projections acquired as the table moves continuously through the gantry, and errors in this interpolation — or a genuine table-motion mechanical fault — produce characteristic z-axis blurring or stair-step discontinuities.",
  },
  {
    type: "p",
    text: "In helical scanning, no single gantry rotation captures a complete planar dataset at one table position; instead, the reconstruction interpolates data from adjacent rotations to synthesise each image plane. At high pitch, rapid anatomical change along the z-axis (such as the aortic arch or a rapidly branching vessel), or irregular table motion, this interpolation can under-represent fast-changing structures, producing z-axis blurring, a 'windmill' pattern of streaks radiating from high-contrast edges, or, in genuine mechanical fault cases, a visible step discontinuity at fixed table positions.",
  },
  {
    type: "callout",
    variant: "important",
    title: "A fixed, repeatable step discontinuity is a table or slip-ring fault",
    text: "Windmill-pattern streaking that varies with pitch selection is expected helical reconstruction physics and is reduced by adjusting pitch or using a dedicated wide-detector acquisition. A step artefact that appears at the same fixed table position on every scan, regardless of protocol, points to a table-drive or slip-ring contact fault and requires immediate engineering investigation, since it also implies positional accuracy is compromised for every study.",
  },
  {
    type: "h2",
    id: "classification-framework",
    number: 12,
    text: "Engineering Fault vs Protocol Issue: A Decision Framework",
    body: "Every artefact in this guide falls into one of three categories, and the single most efficient troubleshooting improvement a department can make is training staff to make this classification before escalating.",
  },
  {
    type: "comparison",
    title: "CT artefact classification at a glance",
    headers: ["Artefact", "Primary category", "Who resolves it", "Typical fix"],
    rows: [
      ["Beam hardening (cupping/banding)", "Physics — partially correctable", "Technologist / applications", "Confirm correction algorithms and bowtie filter active"],
      ["Metal artefact", "Physics — reducible", "Technologist", "MAR algorithm, kVp/mA adjustment, positioning"],
      ["Motion artefact", "Patient/protocol", "Technologist", "Coaching, immobilisation, gating, faster acquisition"],
      ["Ring artefact", "Hardware fault", "Biomedical engineer", "Detector recalibration or channel replacement"],
      ["Streak — dense anatomy", "Protocol/patient", "Technologist", "AEC, higher mA/kVp, iterative reconstruction"],
      ["Streak — random/non-reproducible", "Hardware fault", "Biomedical engineer", "DAS/detector channel diagnostics"],
      ["Cone-beam artefact", "Physics — inherent to geometry", "Applications/engineer if asymmetric", "Cone-beam reconstruction algorithm; escalate only if row-specific"],
      ["Partial volume averaging", "Physics — inherent", "Technologist/radiologist", "Thinner slices, reformats, plane selection"],
      ["Photon starvation", "Protocol/patient", "Technologist", "AEC, higher kVp/mA, iterative reconstruction"],
      ["Truncation", "Protocol/positioning", "Technologist", "Patient positioning, larger FOV, extended-FOV reconstruction"],
      ["Fixed step discontinuity", "Hardware fault", "Biomedical engineer", "Table drive / slip-ring diagnostics"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "The recurring diagnostic principle across every row of this table is reproducibility: physics and protocol artefacts change with patient, position or technique; genuine hardware faults reproduce identically on a phantom with nothing else changed.",
    clinicalInterpretation: "Radiologists who understand this classification are far less likely to request unnecessary repeat scans for artefacts that are expected physics, and far more likely to flag a genuine, persistent fault early.",
    hospitalRecommendation: "Build this classification directly into technologist training and into the department's service-request form, requiring a phantom reproducibility check to be documented before any hardware service ticket is opened.",
  },
  {
    type: "h2",
    id: "qa-programme",
    number: 13,
    text: "Daily and Periodic QA That Catches Drift Early",
    body: "A structured quality-assurance phantom programme, aligned with AAPM and IEC guidance, is the only reliable way to catch detector, tube and calibration drift before it becomes a reported clinical complaint or, worse, a diagnostic error.",
  },
  {
    type: "requirements",
    checklist: [
      "Daily air calibration (warm-up scans) before the first patient of the day, per manufacturer protocol",
      "Weekly or monthly water-phantom uniformity, noise and CT-number accuracy checks per AAPM/IEC guidance",
      "Periodic spatial resolution and low-contrast detectability phantom testing at defined intervals",
      "Documented dose index (CTDIvol) verification against the scanner's displayed value",
      "Trend logging of QA results over time, not just pass/fail, so gradual drift is visible before it fails a threshold",
    ],
    specs: {
      title: "Typical QA cadence",
      rows: [
        { label: "Daily", value: "Air calibration / warm-up, visual image check" },
        { label: "Weekly", value: "Uniformity, noise, CT number accuracy on phantom" },
        { label: "Monthly/quarterly", value: "Spatial resolution, low-contrast detectability, dose verification" },
        { label: "Annual", value: "Full acceptance-style QA, independent medical physics survey" },
      ],
    },
  },
  {
    type: "knowledgeBox",
    variant: "expert-recommendation",
    title: "Trend the numbers, do not just pass or fail them",
    text: "A uniformity or noise measurement that passes threshold but has moved steadily over several weeks is an early warning of detector or tube drift long before it fails outright. Departments that log QA results as trend data, not simple pass/fail checkboxes, catch faults earlier and with far less clinical disruption than those that only react to a failed test.",
  },
  {
    type: "h2",
    id: "fault-isolation-workflow",
    number: 14,
    text: "Systematic Fault-Isolation Workflow",
    body: "A disciplined, ordered troubleshooting sequence resolves the majority of reported artefacts without an unnecessary service call, and correctly routes the remainder to the engineer with useful diagnostic information already gathered.",
  },
  {
    type: "ul",
    items: [
      "Step 1 — Reproduce and document: capture the artefact, note the protocol, patient size, kVp/mA, pitch and reconstruction kernel used.",
      "Step 2 — Scan a uniform phantom with identical acquisition parameters: if the artefact disappears, the cause is patient- or protocol-related; if it persists identically, suspect hardware.",
      "Step 3 — Vary one parameter at a time on the phantom (kVp, mA, pitch, kernel) to see whether the artefact's severity changes, which narrows the physics category.",
      "Step 4 — Check the scanner's own QA and calibration logs for the relevant time period before assuming a new fault; many artefacts correlate with a recent calibration event or software update.",
      "Step 5 — If hardware is suspected, note whether the artefact is a full ring, a partial arc, a fixed-position streak, or randomly positioned — this single observation dramatically narrows the likely failing component for the service engineer.",
      "Step 6 — Escalate to the service engineer with the phantom images, parameter log and QA trend attached, rather than a verbal description alone, to reduce diagnostic time on site.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Avoid these common misclassification errors",
    items: [
      "Assuming any streak through dense pelvic or shoulder anatomy is a hardware fault without first checking whether AEC and technique are appropriately configured",
      "Chasing beam-hardening cupping in a large uniform phantom as a calibration fault when it is expected, correctable physics",
      "Attempting to fix a true ring artefact by changing acquisition parameters instead of recalibrating the detector",
      "Logging a service ticket for windmill helical streaking without first checking whether pitch adjustment resolves it",
      "Failing to check whether an artefact reproduces on a phantom before escalating — the single fastest way to correctly classify almost any CT artefact",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is beam hardening a sign my CT scanner needs service?",
        a: "No. Beam hardening cupping and interpetrous banding are expected consequences of using a polychromatic X-ray beam and are partially corrected, never eliminated, by reconstruction algorithms and bowtie filtration. It only warrants investigation if it is markedly worse than the scanner's own historical baseline.",
      },
      {
        q: "How can I tell if a streak artefact is hardware or a protocol issue?",
        a: "Scan a uniform water or air phantom with the same acquisition parameters. If the streak disappears with no patient present, the cause is patient- or protocol-related — most commonly photon starvation through dense anatomy, motion, or metal. If it persists identically on the phantom, it is a hardware fault requiring a service engineer.",
      },
      {
        q: "What causes ring artefact and can a technologist fix it?",
        a: "Ring artefact is caused by a miscalibrated or drifting detector channel that produces the same error at every projection angle, mapping to a circle centred on the rotation axis. Basic air recalibration sometimes resolves early-stage rings, but persistent rings after recalibration require a service engineer to replace or recalibrate the affected detector element.",
      },
      {
        q: "Does metal artefact mean the scan is not diagnostic?",
        a: "Not necessarily. Modern metal artefact reduction (MAR) algorithms, combined with higher kVp and appropriate positioning, substantially reduce streaking around implants, and diagnostic image quality away from the immediate implant region is usually preserved. The degree of residual artefact depends on implant composition, size and orientation.",
      },
      {
        q: "Why do larger patients show more streak artefact through the pelvis and shoulders?",
        a: "Larger patients present a longer, denser attenuation path, so fewer photons survive to reach the detector along that path — a phenomenon called photon starvation. This produces noise-dominated streaking that automatic exposure control, higher mA or kVp, and iterative reconstruction can substantially mitigate but not fully remove.",
      },
      {
        q: "What is the difference between cone-beam artefact and ring artefact?",
        a: "Cone-beam artefact is an inherent geometric consequence of wide-coverage multi-detector-row scanners using a diverging beam, appearing as streaking and blurring near sharp z-axis structures, and it is managed with dedicated cone-beam reconstruction algorithms. Ring artefact is a detector calibration fault appearing as concentric circles centred on the rotation axis, and it requires engineering correction.",
      },
      {
        q: "Can motion artefact be mistaken for pathology?",
        a: "Yes. Blurring or doubling at organ borders from respiratory or cardiac motion can mimic findings such as a dissection flap or an irregular margin, which is why radiologists routinely correlate suspicious edge findings with the acquisition technique and, where in doubt, request a repeat or gated acquisition.",
      },
      {
        q: "What is truncation artefact and how is it prevented?",
        a: "Truncation occurs when part of the patient extends beyond the reconstruction field of view, producing bright banding or distorted attenuation at the image periphery. It is prevented by correct patient positioning, selecting an adequately large field of view for the patient's body habitus, and using extended-field-of-view reconstruction where available.",
      },
      {
        q: "How often should CT QA phantom testing be performed?",
        a: "Cadence varies by institution and regulatory jurisdiction, but a typical structure includes daily air calibration and warm-up, weekly to monthly phantom checks of uniformity, noise and CT-number accuracy, periodic spatial resolution and low-contrast detectability testing, and an annual comprehensive medical physics survey.",
      },
      {
        q: "Is partial volume averaging something that can be fixed?",
        a: "It cannot be eliminated because it results from finite voxel size, but it can be reduced by using thinner reconstructed slices and by reviewing structures in multiple reformatted planes, at the cost of increased image noise for a fixed radiation dose.",
      },
      {
        q: "What should a technologist do before escalating an artefact to biomedical engineering?",
        a: "Reproduce and document the artefact, scan a uniform phantom with identical parameters, and check whether the artefact persists on the phantom. If it does, escalate with the phantom images, acquisition parameters and any relevant QA trend data attached, which substantially shortens the engineer's diagnostic time on site.",
      },
      {
        q: "Why does a fixed step discontinuity in helical scans indicate a mechanical fault?",
        a: "Ordinary helical interpolation artefact varies with pitch and appears as windmill-pattern streaking near rapidly changing anatomy; a step artefact that appears at the same fixed table position regardless of protocol indicates the table drive or slip-ring contact is not moving or communicating consistently, which also compromises positional accuracy for every subsequent study.",
      },
      {
        q: "Do dual-energy and spectral CT reduce artefacts compared with conventional single-energy CT?",
        a: "Dual-energy and spectral techniques can improve differentiation of beam-hardening and metal-related effects because they separate material composition using two energy datasets, which particularly benefits metal artefact reduction and photon-starvation mitigation, though they do not eliminate the underlying physics and add system cost and protocol complexity.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Always test artefact reproducibility on a phantom before deciding whether the cause is physics, protocol or hardware.",
      "Beam hardening, cone-beam effects and partial volume averaging are inherent physics — manage them with protocol and reconstruction, do not chase them as faults.",
      "Ring artefact and fixed-position step discontinuities are hardware signatures that require a service engineer, not a protocol change.",
      "Photon starvation and truncation are usually solved with technique, positioning and field-of-view choices, not equipment repair.",
      "A structured, trended QA phantom programme catches detector and calibration drift long before it reaches a clinical image-quality complaint.",
    ],
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Standards and regulatory guidance",
        items: [
          { label: "IEC 61223-3-5 — Evaluation and routine testing in medical imaging departments: acceptance and constancy tests for CT", url: "https://www.iec.ch" },
          { label: "AAPM Report — CT quality control and phantom testing guidance", url: "https://www.aapm.org" },
          { label: "American College of Radiology (ACR) CT Accreditation Program requirements", url: "https://www.acraccreditation.org" },
          { label: "NEMA XR standards for CT performance specification and reporting", url: "https://www.nema.org" },
          { label: "IAEA guidance on quality assurance and dose optimisation in diagnostic radiology", url: "https://www.iaea.org" },
        ],
      },
      {
        title: "Radiation protection references",
        items: [
          { label: "ICRP publications on radiological protection in medical imaging", url: "https://www.icrp.org" },
          { label: "WHO guidance on medical imaging and radiation safety", url: "https://www.who.int" },
        ],
      },
    ],
    note: "This article summarises widely published engineering and clinical physics principles for educational purposes. Institutions should consult current national regulations, manufacturer instructions for use, and their qualified medical physicist for site-specific QA programme design.",
  },
  {
    type: "h2",
    id: "conclusion",
    number: 15,
    text: "Conclusion",
    body: "Reliable CT image quality is a joint outcome of physics literacy, protocol discipline and engineering maintenance — and knowing which of the three is responsible for a given artefact is the skill that keeps a department both diagnostically confident and operationally efficient.",
  },
  {
    type: "p",
    text: "No CT system, however well maintained, produces artefact-free images in every clinical scenario — beam hardening, cone-beam geometry and partial volume averaging are permanent features of how CT physics works, and metal, motion and photon starvation are permanent features of the patients being scanned. What separates a well-run department from one that wastes engineering time and clinical confidence is a shared, disciplined framework for classifying every artefact before acting on it: reproduce it, test it on a phantom, and only then decide whether the fix belongs to the technologist, the protocol, or the service engineer.",
  },
  {
    type: "articleCta",
    heading: "Need a second opinion on a persistent CT image-quality issue?",
    subheading: "AbuFarha Medical Supplies' biomedical engineering team supports CT installation, preventive maintenance and image-quality troubleshooting across the systems we deploy.",
    technology: "Computed Tomography (CT)",
  },
];
