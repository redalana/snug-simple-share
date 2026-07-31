/**
 * Stereotactic breast biopsy guide — Mammography cluster (clinical procedure).
 */

import type { ContentBlock, TocItem } from "../blog";

export const STEREOTACTIC_BIOPSY_TOC: TocItem[] = [
  { id: "overview", title: "What Stereotactic Biopsy Is For" },
  { id: "how", title: "How Stereotactic Targeting Works" },
  { id: "platforms", title: "Platforms: Upright, Prone and Tomosynthesis-Guided" },
  { id: "devices", title: "Needle and Vacuum Device Selection" },
  { id: "workflow", title: "Procedure Workflow" },
  { id: "complications", title: "Complications and Failure Modes" },
  { id: "equipping", title: "Equipping and Staffing the Service" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const STEREOTACTIC_BIOPSY_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Stereotactic breast biopsy exists to sample findings that only mammography can see. A cluster of microcalcifications, a subtle architectural distortion or a mass without an ultrasound correlate cannot be reliably targeted by ultrasound guidance; it must be located using the imaging modality that detected it.",
      "The technique works by triangulation: two angled projections of the same target allow its depth to be calculated, so a needle can be advanced to a computed coordinate rather than to a visual estimate. With tomosynthesis guidance, the depth is read directly from the reconstructed sections, which is both faster and more tolerant of difficult targets.",
      "This guide covers targeting principles, platform and device selection, the procedural workflow that determines success, the failure modes to anticipate, and what a hospital needs in place before offering the service.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Indications, stereotactic and tomosynthesis-guided targeting principles, platform types, needle and vacuum device selection, procedure workflow, complications and service requirements",
    audience:
      "Radiologists, mammographers, breast service managers, biomedical engineers and procurement teams",
    readingTime: "14 min read",
    technology: "Mammography Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "What Stereotactic Biopsy Is For",
    number: 1,
    body: "It samples mammographic findings that have no reliable ultrasound target.",
  },
  {
    type: "ul",
    items: [
      "Suspicious microcalcification clusters, the most common indication by a wide margin.",
      "Architectural distortion visible mammographically without a sonographic correlate.",
      "Masses or asymmetries seen on mammography or tomosynthesis but not on ultrasound.",
      "Findings visible only on tomosynthesis, which require tomosynthesis-guided targeting.",
      "Marker clip placement to identify a sampled site for future imaging or surgery.",
      "Confirmation of concordance where imaging and pathology must be correlated precisely.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "The modality that sees it must guide it",
    text: "Attempting ultrasound guidance for a calcification cluster with no sonographic correlate risks sampling the wrong tissue and returning a falsely reassuring benign result. Where mammography is the only modality demonstrating the finding, mammographic guidance is the correct approach.",
  },
  {
    type: "h2",
    id: "how",
    text: "How Stereotactic Targeting Works",
    number: 2,
    body: "Depth is computed from the parallax between two angled projections, or read from tomosynthesis sections.",
  },
  {
    type: "table",
    headers: ["Step", "Conventional stereotactic", "Tomosynthesis-guided"],
    rows: [
      ["Target identification", "Scout image with the lesion in the aperture", "Scout tomosynthesis sweep"],
      ["Depth determination", "Paired angled projections; parallax shift computed", "Read directly from the section number"],
      ["Targeting time", "Longer; requires two usable projections", "Faster; a single sweep is usually sufficient"],
      ["Difficult targets", "Fails where the lesion is not visible on both projections", "More tolerant of faint or posterior targets"],
      ["Patient movement sensitivity", "High — movement between projections invalidates coordinates", "Lower, but movement still degrades the sweep"],
      ["Dose", "Two additional projections per targeting cycle", "One sweep, comparable or lower overall"],
      ["Applicability", "Cannot target tomosynthesis-only findings", "Required for tomosynthesis-only findings"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Why tomosynthesis guidance has become preferred",
    clinicalInterpretation:
      "Tomosynthesis guidance shortens procedure time, reduces targeting failures for faint calcifications and posterior lesions, and is the only reliable way to sample findings that were detected on tomosynthesis in the first place.",
    hospitalRecommendation:
      "Any service performing screening or diagnostic tomosynthesis should plan for tomosynthesis-guided biopsy capability. Detecting lesions that cannot then be sampled creates an incomplete and clinically uncomfortable pathway.",
  },
  {
    type: "h2",
    id: "platforms",
    text: "Platforms: Upright, Prone and Tomosynthesis-Guided",
    number: 3,
    body: "Platform choice affects access, patient tolerance, vasovagal risk and room utilisation.",
  },
  {
    type: "table",
    headers: ["Platform", "Advantages", "Limitations"],
    rows: [
      ["Upright add-on to the mammography unit", "No dedicated room; lower capital cost; familiar geometry", "Vasovagal episodes more likely; access to posterior lesions harder"],
      ["Dedicated prone table", "Excellent patient tolerance; low vasovagal risk; good access", "Dedicated room and high capital cost; occupies space when idle"],
      ["Tomosynthesis-guided upright", "Fast targeting; handles tomosynthesis-only findings", "Requires compatible system and licence"],
      ["Lateral arm attachments", "Access to very posterior and axillary targets", "Additional set-up complexity"],
      ["Specimen radiography unit", "Immediate confirmation that calcifications were retrieved", "Extra device to fund and maintain"],
    ],
  },
  {
    type: "h2",
    id: "devices",
    text: "Needle and Vacuum Device Selection",
    number: 4,
    body: "For calcifications, vacuum-assisted sampling is the standard because sample volume determines diagnostic accuracy.",
  },
  {
    type: "ul",
    items: [
      "Vacuum-assisted biopsy devices retrieve substantially more tissue per insertion than core needles, which matters for calcification yield.",
      "Larger gauge devices improve calcification retrieval and reduce underestimation of disease extent.",
      "Single-insertion multi-sample designs reduce repositioning and procedure time.",
      "Marker clip deployment through the same device is essential where the finding may be removed entirely.",
      "Device compatibility with the chosen platform and needle guide must be confirmed before purchase.",
      "Consumable cost per case is a significant recurring budget line and should be modelled at business-case stage.",
      "Specimen radiography of the retrieved cores confirms that the targeted calcifications are present.",
      "Local anaesthetic technique and haemostasis provision are part of the device set-up, not afterthoughts.",
    ],
  },
  {
    type: "h2",
    id: "workflow",
    text: "Procedure Workflow",
    number: 5,
    body: "Most failures are preventable through preparation and positioning rather than technique.",
  },
  {
    type: "table",
    headers: ["Stage", "Key actions", "Common pitfall"],
    rows: [
      ["Pre-procedure review", "Confirm the target on current imaging and agree the approach", "Targeting a lesion better suited to ultrasound guidance"],
      ["Consent and anticoagulation check", "Discuss risks; review medication", "Unassessed anticoagulation causing haematoma"],
      ["Positioning", "Optimise access and stability; consider prone platform for anxious patients", "Poor access leading to an aborted procedure"],
      ["Scout and targeting", "Confirm the lesion is within the aperture; compute or read depth", "Lesion at the aperture edge, invalidating targeting"],
      ["Anaesthesia", "Adequate local anaesthetic including the deep track", "Patient movement due to inadequate anaesthesia"],
      ["Sampling", "Vacuum-assisted sampling with documented sample count", "Insufficient volume for calcification diagnosis"],
      ["Specimen radiography", "Confirm calcifications in the retrieved tissue", "Ending the procedure without confirming retrieval"],
      ["Marker placement and post-imaging", "Deploy clip; image to document position", "Clip migration undocumented"],
      ["Haemostasis and aftercare", "Compression, instructions, contact route", "Inadequate written aftercare"],
      ["Pathology correlation", "Multidisciplinary review of concordance", "Discordant benign result accepted without review"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Accepting a discordant benign result",
    text: "A benign histology result for an imaging finding that remains suspicious — or where specimen radiography did not confirm retrieval of the targeted calcifications — must be reviewed in the multidisciplinary meeting, not filed. Radiological-pathological concordance is a mandatory step, not a formality.",
  },
  {
    type: "h2",
    id: "complications",
    text: "Complications and Failure Modes",
    number: 6,
    body: "Complications are uncommon; procedural failures are more frequent and largely avoidable.",
  },
  {
    type: "table",
    headers: ["Event", "Cause", "Prevention"],
    rows: [
      ["Vasovagal episode", "Upright positioning, anxiety, pain", "Prone platform where available; preparation and communication"],
      ["Haematoma", "Vascular injury, anticoagulation, inadequate compression", "Medication review, careful technique, adequate compression"],
      ["Inadequate sampling of calcifications", "Insufficient volume or mistargeting", "Vacuum-assisted device, specimen radiography confirmation"],
      ["Targeting failure", "Lesion not visible on both projections or at aperture edge", "Tomosynthesis guidance; repositioning"],
      ["Patient movement", "Inadequate anaesthesia or discomfort", "Adequate anaesthesia and a tolerable position"],
      ["Marker clip migration", "Tissue displacement after vacuum sampling", "Post-procedure imaging documenting actual clip position"],
      ["Infection", "Rare; break in aseptic technique", "Standard aseptic technique and aftercare instructions"],
      ["Underestimation of disease", "Small sample volume in heterogeneous lesions", "Larger gauge devices and adequate sample counts"],
    ],
  },
  {
    type: "h2",
    id: "equipping",
    text: "Equipping and Staffing the Service",
    number: 7,
    body: "Biopsy capability is a service commitment, not an accessory purchase.",
  },
  {
    type: "ul",
    items: [
      "Platform choice — upright add-on or prone table — matched to expected case volume and room availability.",
      "Tomosynthesis-guided capability where tomosynthesis is used clinically.",
      "Vacuum-assisted biopsy device with a reliable consumable supply chain.",
      "Specimen radiography capability for calcification confirmation.",
      "Marker clip range appropriate to the cases undertaken.",
      "Trained radiologists maintaining sufficient procedural volume for competence.",
      "Trained mammographers and an assisting practitioner for each procedure.",
      "Room provision with privacy, patient recovery space and resuscitation access.",
      "Pathology pathway with agreed specimen handling and reporting timescales.",
      "Multidisciplinary meeting for concordance review and outcome audit.",
      "Audit of technical success, retrieval confirmation, underestimation and complication rates.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "When is stereotactic biopsy preferred over ultrasound-guided biopsy?",
        a: "When the finding is visible on mammography or tomosynthesis but has no reliable ultrasound correlate — most commonly microcalcification clusters and architectural distortion. Where a clear sonographic correlate exists, ultrasound guidance is usually faster and better tolerated.",
      },
      {
        q: "Is a prone table necessary?",
        a: "Not necessary, but advantageous. Prone tables substantially reduce vasovagal episodes and improve access to some targets. Upright add-on systems are appropriate for lower volumes and where a dedicated room cannot be justified.",
      },
      {
        q: "Why is vacuum-assisted sampling used rather than core needle?",
        a: "Because calcification diagnosis depends on retrieving enough representative tissue. Vacuum-assisted devices retrieve substantially more tissue per insertion, improving calcification yield and reducing underestimation of disease extent.",
      },
      {
        q: "Why perform specimen radiography?",
        a: "To confirm that the targeted calcifications are actually present in the retrieved tissue. Without it, a benign result may reflect a missed target rather than benign disease, and the discordance may go unrecognised.",
      },
      {
        q: "Do we need tomosynthesis-guided biopsy if we have tomosynthesis screening?",
        a: "In practice, yes. Findings detected only on tomosynthesis cannot be reliably targeted with conventional stereotactic technique, so a service that screens with tomosynthesis but cannot sample tomosynthesis-only findings has a gap in its pathway.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Adding stereotactic or tomosynthesis-guided biopsy?",
    subheading:
      "AbuFarha Medical supplies mammography biopsy platforms, vacuum-assisted devices and specimen radiography, with installation, training and service support.",
    technology: "Mammography Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Breast intervention applications and training" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Mammography and biopsy platform installation and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "European and national breast screening and diagnosis guidelines, specialty society guidance on breast intervention, and manufacturer documentation",
    disclaimer:
      "Biopsy technique, device selection, consent requirements and anticoagulation management are institution- and jurisdiction-specific. Follow local clinical protocols and multidisciplinary governance.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Clinical guidance",
        items: [
          { label: "European guidelines for quality assurance in breast cancer screening and diagnosis" },
          { label: "Specialty society guidance on image-guided breast biopsy and needle localisation" },
        ],
      },
      {
        title: "Equipment standards",
        items: [
          { label: "IEC 60601-2-45 for mammographic and tomosynthesis X-ray equipment" },
          { label: "Manufacturer documentation for biopsy platforms and vacuum-assisted devices" },
        ],
      },
      {
        title: "Quality and audit",
        items: [
          { label: "National breast screening programme standards for interventional procedures" },
          { label: "Guidance on radiological-pathological concordance and multidisciplinary review" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as guidance is revised.",
  },
  {
    type: "takeaways",
    items: [
      "Findings visible only mammographically must be sampled under mammographic guidance.",
      "Tomosynthesis guidance is faster, handles difficult targets better, and is required for tomosynthesis-only findings.",
      "Prone platforms reduce vasovagal episodes; upright add-ons suit lower volumes and constrained space.",
      "Vacuum-assisted sampling is standard for calcifications because retrieved volume drives accuracy.",
      "Specimen radiography confirming calcification retrieval is a core step, not an optional extra.",
      "Post-procedure imaging must document actual marker clip position.",
      "Discordant benign results require multidisciplinary review, never filing.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "A breast service that can detect a finding must be able to sample it accurately and confirm that it did.",
  },
  {
    type: "p",
    text: "Platform choice, device selection, retrieval confirmation, marker documentation and concordance review together determine whether a stereotactic biopsy service produces reliable answers. Equipment alone produces procedures; the surrounding discipline produces diagnoses.",
  },
];
