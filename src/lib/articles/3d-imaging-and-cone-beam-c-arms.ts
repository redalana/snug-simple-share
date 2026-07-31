/**
 * 3D imaging and cone beam C-arms — C-Arm cluster (technology).
 */

import type { ContentBlock, TocItem } from "../blog";

export const C_ARM_3D_TOC: TocItem[] = [
  { id: "overview", title: "What 3D C-Arm Imaging Adds" },
  { id: "how", title: "How Cone Beam Acquisition Works" },
  { id: "applications", title: "Clinical Applications" },
  { id: "limits", title: "Limitations Compared With CT" },
  { id: "dose", title: "Dose and Radiation Protection" },
  { id: "specification", title: "Specifying a 3D-Capable System" },
  { id: "workflow", title: "Theatre Workflow and Navigation" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const C_ARM_3D_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A 3D-capable mobile C-arm rotates its imaging chain around the patient, acquires a series of projection images and reconstructs a volume that can be reviewed in axial, coronal and sagittal planes on the theatre monitor. It answers a question two-dimensional fluoroscopy cannot: what does this construct look like in cross-section, before the patient leaves the operating table.",
      "The clinical value is concentrated in a small number of high-consequence decisions — pedicle screw position, articular reduction, fragment placement, device deployment — where discovering a malposition postoperatively means a second procedure.",
      "This guide explains how cone beam acquisition works on a mobile platform, where it genuinely changes management, where it falls short of diagnostic CT, and how to specify and use it without accumulating unnecessary dose.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Cone beam acquisition principles, clinical applications, limitations versus CT, dose considerations, specification criteria and theatre workflow with navigation",
    audience:
      "Surgeons and interventionalists, theatre teams, radiographers, biomedical engineers and procurement teams",
    readingTime: "13 min read",
    technology: "C-Arm Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "What 3D C-Arm Imaging Adds",
    number: 1,
    body: "The benefit is intraoperative confirmation, not diagnostic imaging.",
  },
  {
    type: "ul",
    items: [
      "Cross-sectional verification of implant position while correction is still possible.",
      "Assessment of articular surface reduction that overlapping two-dimensional projections cannot resolve.",
      "Confirmation of device or fragment position in complex anatomy such as pelvis, spine and hindfoot.",
      "A dataset that can register to a navigation system for instrument tracking.",
      "Documentation of the intraoperative result within the procedure record.",
      "Reduction in unplanned return-to-theatre for revision of malpositioned hardware.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "The value is measured in avoided revisions",
    text: "3D intraoperative imaging is justified where the alternative to checking now is discovering a problem on a postoperative CT and returning to theatre. In services where that scenario is rare, a 3D-capable system adds cost and dose without changing outcomes.",
  },
  {
    type: "h2",
    id: "how",
    text: "How Cone Beam Acquisition Works",
    number: 2,
    body: "A motorised orbital sweep replaces the rotating gantry of a conventional CT scanner.",
  },
  {
    type: "table",
    headers: ["Stage", "What happens", "Practical consequence"],
    rows: [
      ["Positioning and isocentring", "The anatomy of interest is centred in the rotation path", "Poor centring is the most common cause of an unusable volume"],
      ["Orbital sweep", "The C-arm rotates through a defined arc collecting projections", "Requires unobstructed clearance around the patient and table"],
      ["Projection acquisition", "Tens to hundreds of pulsed images are captured", "Determines acquisition time and dose"],
      ["Reconstruction", "A cone beam algorithm builds a volume", "Reconstruction time affects theatre tempo"],
      ["Review", "Multiplanar review on the theatre monitor", "Display quality and viewing conditions matter more than usual"],
      ["Optional registration", "The volume is registered to a navigation system", "Requires reference markers and a stable patient"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Clearance and centring are the whole game",
    clinicalInterpretation:
      "Unlike a CT gantry, a mobile C-arm sweep must be physically rehearsed. Table components, retractors, cables, drapes and staff all intrude into the rotation path, and any collision aborts the acquisition after the dose has already been delivered.",
    hospitalRecommendation:
      "Make a dry-run sweep without radiation a mandatory step in the local protocol, with the anatomy centred and the full arc confirmed clear before any exposure.",
  },
  {
    type: "h2",
    id: "applications",
    text: "Clinical Applications",
    number: 3,
    body: "Adoption is strongest where two-dimensional projections are known to be unreliable.",
  },
  {
    type: "table",
    headers: ["Application", "What 3D resolves", "Typical impact"],
    rows: [
      ["Spinal instrumentation", "Pedicle screw breach and trajectory in cross-section", "Intraoperative revision instead of postoperative return"],
      ["Pelvic and acetabular fixation", "Screw position relative to joint and canal", "Avoids intra-articular hardware"],
      ["Complex articular fractures", "Step-off and gap at the joint surface", "Improved reduction quality"],
      ["Hindfoot and wrist fixation", "Small-bone alignment obscured by overlap", "Fewer malreductions"],
      ["Craniomaxillofacial reconstruction", "Symmetry and implant seating", "Reduced secondary correction"],
      ["Selected endovascular and device work", "Device position relative to vessel wall and branches", "Confirmation without transfer to CT"],
      ["Navigation-assisted procedures", "A registered intraoperative dataset", "Enables instrument tracking on current anatomy"],
    ],
  },
  {
    type: "h2",
    id: "limits",
    text: "Limitations Compared With CT",
    number: 4,
    body: "Cone beam volumes are geometrically useful and physically inferior to diagnostic CT.",
  },
  {
    type: "ul",
    items: [
      "Soft-tissue contrast is limited; these volumes answer bone and device questions, not soft-tissue questions.",
      "Scatter and truncation artefacts are more pronounced than in fan-beam CT.",
      "Metal artefact is significant precisely where implants are being assessed.",
      "The reconstructed field of view is small relative to CT and must be centred accurately.",
      "Hounsfield-unit accuracy is not comparable to diagnostic CT, so quantitative use is inappropriate.",
      "Acquisition requires patient stillness and full mechanical clearance, which theatre conditions complicate.",
      "A cone beam volume does not replace a clinically indicated postoperative diagnostic CT.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Using intraoperative 3D as a diagnostic study",
    text: "These datasets are intended for intraoperative verification. Reporting them as diagnostic cross-sectional imaging, or relying on them to exclude soft-tissue injury, misrepresents their physical performance and creates clinical and governance risk.",
  },
  {
    type: "h2",
    id: "dose",
    text: "Dose and Radiation Protection",
    number: 5,
    body: "A 3D sweep delivers substantially more dose than a fluoroscopic run and must be justified each time.",
  },
  {
    type: "table",
    headers: ["Control", "Practice", "Effect"],
    rows: [
      ["Justification", "A defined clinical question before each acquisition", "Prevents routine, habitual scanning"],
      ["Protocol selection", "Low-dose protocols where geometry alone is required", "Large dose reduction with adequate answer"],
      ["Number of sweeps", "One planned confirmatory sweep, not repeated attempts", "Failed sweeps are pure dose"],
      ["Centring and clearance", "Dry run before exposure", "Avoids repeat acquisitions"],
      ["Collimation and field size", "Smallest volume that contains the question", "Reduces dose and scatter"],
      ["Staff position", "Staff step back or leave the immediate area during the sweep", "Sweep scatter is delivered from all angles"],
      ["Dose recording", "Capture dose data for every 3D acquisition", "Enables audit and protocol optimisation"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Sweep scatter is not directional",
    text: "During an orbital sweep the beam passes through the patient from every angle in the arc, so the usual habit of standing on the intensifier side offers no protection. Local rules should require staff to withdraw to the greatest practical distance or behind shielding for the duration of the sweep.",
  },
  {
    type: "h2",
    id: "specification",
    text: "Specifying a 3D-Capable System",
    number: 6,
    body: "Specify from the anatomy to be imaged, then verify on a phantom.",
  },
  {
    type: "ul",
    items: [
      "Reconstructed volume dimensions, stated in centimetres, adequate for the target anatomy.",
      "Motorised orbital range and the physical clearance required around table and patient.",
      "Acquisition time and reconstruction time, both measured in the theatre, not quoted.",
      "Available dose protocols and the measured dose per sweep for each.",
      "Metal artefact reduction capability, demonstrated on a phantom containing your implants.",
      "Isocentring aids and repeat-position capability.",
      "Navigation interface compatibility with the systems already in use.",
      "PACS export of the volume in a format your archive accepts and can display.",
      "Table compatibility — carbon fibre extension, radiolucent range and clearance.",
      "Training provision for the theatre teams who will actually run the sweep.",
    ],
  },
  {
    type: "h2",
    id: "workflow",
    text: "Theatre Workflow and Navigation",
    number: 7,
    body: "3D imaging succeeds or fails on the ten minutes of workflow around it.",
  },
  {
    type: "ul",
    items: [
      "Agree at the start of the case whether a sweep is planned, and at what point in the procedure.",
      "Position the table and patient for sweep clearance during initial set-up, not after fixation.",
      "Assign one person to manage cables, drapes and the rotation path.",
      "Rehearse the arc without radiation immediately before the acquisition.",
      "Pause ventilation or stabilise the patient as agreed with anaesthesia during acquisition.",
      "Review the volume systematically against the specific clinical question, then act on it.",
      "Export the volume to PACS with the case record; theatre-only storage loses it.",
      "Where navigation is used, protect the reference frame from movement for the rest of the case.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is a 3D C-arm the same as intraoperative CT?",
        a: "No. Cone beam imaging on a C-arm gives a limited-field volume with lower soft-tissue contrast and less quantitative accuracy than a diagnostic CT scanner. It is designed for intraoperative geometric verification, not for diagnostic cross-sectional imaging.",
      },
      {
        q: "Which specialties benefit most?",
        a: "Spinal instrumentation, pelvic and acetabular fixation, complex articular and small-bone fractures, and craniomaxillofacial reconstruction, because in all of them two-dimensional projections are unreliable and a malposition means a second operation.",
      },
      {
        q: "How much extra dose does a sweep add?",
        a: "Substantially more than a fluoroscopic run and considerably less than an unnecessary diagnostic CT. The correct comparison is against the postoperative imaging and possible revision it replaces, and the acquisition must still be justified individually.",
      },
      {
        q: "Do we need navigation to make 3D worthwhile?",
        a: "No. Confirmatory volumes deliver clinical value on their own. Navigation adds instrument tracking against a current dataset and requires additional discipline in reference frame handling and registration.",
      },
      {
        q: "What is the most common reason a sweep fails?",
        a: "Poor centring or a physical collision in the rotation path. Both are eliminated by a mandatory radiation-free dry run and by planning sweep clearance during patient positioning rather than mid-procedure.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Evaluating 3D-capable C-arms for your theatres?",
    subheading:
      "AbuFarha Medical supplies, installs and supports 3D-capable mobile C-arm systems, including phantom evaluation, navigation integration and theatre training.",
    technology: "C-Arm Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Intraoperative imaging applications and training" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "C-arm installation, 3D commissioning and service" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "IEC equipment standards, ICRP guidance on fluoroscopically guided procedures and manufacturer documentation",
    disclaimer:
      "Protocols, dose levels and justification requirements for intraoperative 3D imaging are jurisdiction- and institution-specific. Follow your radiation protection adviser and medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Radiation protection",
        items: [
          { label: "ICRP guidance on radiological protection in fluoroscopically guided procedures" },
          { label: "National radiation protection requirements for intraoperative imaging" },
        ],
      },
      {
        title: "Equipment standards",
        items: [
          { label: "IEC 60601-2-43 for interventional X-ray equipment" },
          { label: "IEC 61223 series — routine testing in medical imaging" },
        ],
      },
      {
        title: "Clinical practice",
        items: [
          { label: "Specialty society guidance on intraoperative imaging and navigation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as standards are revised.",
  },
  {
    type: "takeaways",
    items: [
      "3D C-arm imaging is intraoperative verification, not diagnostic cross-sectional imaging.",
      "Value concentrates where malposition would otherwise mean a return to theatre.",
      "Centring and full mechanical clearance decide whether a sweep succeeds; rehearse without radiation.",
      "Soft-tissue contrast, field of view and quantitative accuracy are all inferior to CT.",
      "Sweep scatter comes from all angles — staff must withdraw, not just stand on one side.",
      "Specify reconstructed volume size, dose protocols and metal artefact handling, then verify on a phantom with your implants.",
      "Export volumes to PACS; datasets kept only in theatre are effectively lost.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "3D capability is worth buying where the casemix contains decisions that cross-sections change.",
  },
  {
    type: "p",
    text: "Used with a clear clinical question, a rehearsed sweep, a low-dose protocol and reliable export, intraoperative cone beam imaging prevents revisions and documents results. Used habitually, it adds dose, time and cost without altering a single operative decision.",
  },
];
