/**
 * Mammography preventive maintenance and QC — Mammography cluster (maintenance).
 */

import type { ContentBlock, TocItem } from "../blog";

export const MAMMO_PM_TOC: TocItem[] = [
  { id: "overview", title: "Why Mammography QC Is Different" },
  { id: "layers", title: "The Three Layers of Testing" },
  { id: "daily", title: "Daily and Weekly Tests" },
  { id: "physics", title: "Periodic Physics Testing" },
  { id: "engineering", title: "Preventive Maintenance and Wear Parts" },
  { id: "displays", title: "Displays and Reading Conditions" },
  { id: "records", title: "Records, Trending and Escalation" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MAMMO_PM_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Mammography is the only routine imaging examination in which the target abnormality may be a few hundred microns across and only marginally more attenuating than the tissue around it. That leaves almost no tolerance for drift. A degradation that would be invisible in general radiography — a small loss of contrast, a slowly failing detector element, a compression paddle that no longer sits parallel — can remove exactly the finding the examination exists to detect.",
      "For that reason mammography quality control is prescriptive rather than discretionary, and it is shared between three groups: radiographers who test daily, medical physicists who test periodically, and service engineers who maintain the hardware. When any one layer lapses, the other two cannot compensate.",
      "This guide sets out what each layer tests, how the results should be trended, and when a result should stop the list rather than be recorded and ignored.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Testing layers and responsibilities, daily and weekly radiographer tests, periodic physics testing, engineering preventive maintenance, display quality control, record keeping, trending and escalation thresholds",
    audience:
      "Radiographers and superintendents, medical physicists, biomedical engineers, quality managers and radiology leadership",
    readingTime: "14 min read",
    technology: "Mammography Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "Why Mammography QC Is Different",
    number: 1,
    body: "The detection task sets the tolerance, and the tolerance is unusually tight.",
  },
  {
    type: "ul",
    items: [
      "Lesion contrast is inherently low because breast tissue components attenuate similarly at mammographic energies.",
      "Microcalcifications are near the limit of spatial resolution, so small losses in sharpness are clinically significant.",
      "Screening populations are asymptomatic, so a missed finding may not present again for a full screening interval.",
      "Automatic exposure control behaviour determines both image quality and dose across a wide range of breast thickness.",
      "Compression performance affects dose, sharpness and tissue separation simultaneously.",
      "Reading is performed on soft-copy displays, which drift and must therefore be included in the programme.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Quality control is part of the clinical pathway",
    text: "A screening programme's sensitivity is a property of the whole chain — acquisition, processing, display and reading. Quality control is not an administrative overhead attached to that chain; it is the mechanism that keeps it performing.",
  },
  {
    type: "h2",
    id: "layers",
    text: "The Three Layers of Testing",
    number: 2,
    body: "Each layer answers a different question and none substitutes for another.",
  },
  {
    type: "table",
    headers: ["Layer", "Owner", "Question answered", "Typical frequency"],
    rows: [
      ["Routine quality control", "Radiographer or QC lead", "Has anything changed since yesterday?", "Daily and weekly"],
      ["Physics testing", "Medical physicist", "Does performance still meet specification and national protocol?", "Periodic, and after major service"],
      ["Preventive maintenance", "Service engineer", "Is the hardware within mechanical and electrical tolerance?", "Per manufacturer schedule"],
      ["Display quality control", "Radiographer or IT with physics oversight", "Are reading conditions still calibrated?", "Routine plus periodic"],
      ["Clinical image audit", "Radiologists and radiographers", "Are positioning and technique adequate in practice?", "Ongoing sample review"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Services that experience quality incidents rarely lack tests. They lack ownership: the daily test is performed but nobody is accountable for acting on the trend, and the physics report is filed without a corrective-action loop.",
    clinicalInterpretation:
      "Undetected drift shows up clinically as rising repeat rates, inconsistent image appearance between units and, eventually, reduced confidence in reporting.",
    hospitalRecommendation:
      "Name one accountable quality-control lead per unit, define the pass, investigate and stop thresholds in writing, and review trends at a monthly quality meeting with physics and engineering present.",
  },
  {
    type: "h2",
    id: "daily",
    text: "Daily and Weekly Tests",
    number: 3,
    body: "Short, repeatable tests whose value comes from being done consistently and trended.",
  },
  {
    type: "table",
    headers: ["Test", "What it detects", "Action if out of tolerance"],
    rows: [
      ["Detector flat-field / uniformity", "Dead or drifting detector elements, dust, calibration drift", "Repeat; if confirmed, stop clinical use and call service"],
      ["Signal and noise from a standard phantom exposure", "Detector or generator output drift", "Investigate; compare against baseline trend"],
      ["Phantom image quality review", "Loss of contrast or resolution affecting small structures", "Stop list if detail loss is confirmed"],
      ["Automatic exposure control consistency", "Drift in exposure selection across thickness", "Physics investigation before further screening"],
      ["Compression force and paddle condition", "Force calibration drift, cracked or non-parallel paddles", "Withdraw paddle; recalibrate or replace"],
      ["Visual and mechanical inspection", "Cable damage, loose covers, worn face shields", "Repair before use if patient safety is affected"],
      ["Viewing conditions check", "Ambient light change, display fault", "Correct before reporting continues"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "best-practice",
    title: "Test before the first patient",
    text: "Routine tests performed at the end of the day tell you that the images already acquired may have been degraded. Performed before the first patient, the same tests prevent the degraded examinations from happening at all.",
  },
  {
    type: "h2",
    id: "physics",
    text: "Periodic Physics Testing",
    number: 4,
    body: "The measurement layer that anchors the daily tests to an absolute standard.",
  },
  {
    type: "ul",
    items: [
      "Tube output, reproducibility, linearity and beam quality measurement.",
      "Automatic exposure control performance across a range of simulated breast thicknesses and compositions.",
      "Average glandular dose estimation for representative breast equivalents.",
      "Spatial resolution and contrast-detail performance assessment.",
      "Detector response, uniformity and artefact survey at a deeper level than the daily test.",
      "Geometry, collimation, alignment and, where fitted, tomosynthesis reconstruction performance.",
      "Compression force calibration and paddle alignment verification.",
      "Re-establishment of baselines after any repair or component replacement that could affect performance.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Repair changes the baseline",
    text: "Replacing a tube, detector or generator board invalidates existing baselines. Physics testing after major component replacement is not optional paperwork — without it, subsequent daily trends are being compared against a system that no longer exists.",
  },
  {
    type: "h2",
    id: "engineering",
    text: "Preventive Maintenance and Wear Parts",
    number: 5,
    body: "Mammography hardware fails in predictable, mechanical ways.",
  },
  {
    type: "table",
    headers: ["Item", "Failure mode", "Preventive approach"],
    rows: [
      ["Compression paddles", "Cracking, deformation, loss of parallelism", "Inspect daily; replace rather than repair"],
      ["Compression drive", "Force calibration drift, motor wear", "Scheduled calibration and lubrication per manufacturer"],
      ["X-ray tube", "Output drift and eventual end of life", "Monitor output trend; plan replacement before failure"],
      ["Detector", "Element loss, calibration drift", "Scheduled recalibration; uniformity trending"],
      ["Anti-scatter grid", "Physical damage, line artefacts", "Handle carefully; inspect on artefact reports"],
      ["Gantry rotation and locks", "Mechanical wear, positioning imprecision", "Scheduled mechanical inspection"],
      ["Face shields and accessories", "Scratching and cracking", "Replace as consumables"],
      ["Workstation and archive links", "Software drift, storage exhaustion", "Include in scheduled IT maintenance"],
    ],
  },
  {
    type: "h2",
    id: "displays",
    text: "Displays and Reading Conditions",
    number: 6,
    body: "An uncalibrated display can hide a finding that the acquisition captured perfectly.",
  },
  {
    type: "ul",
    items: [
      "Reading displays must be of diagnostic specification and calibrated to a defined grayscale response.",
      "Calibration must be verified routinely and recalibrated when it drifts.",
      "Ambient illumination in the reading area must be controlled and kept consistent.",
      "Display uniformity and artefact checks should be part of the routine programme.",
      "Any display used for primary reporting is in scope, including remote reporting stations.",
      "Records of display quality control should sit alongside the equipment records, not in a separate IT system.",
    ],
  },
  {
    type: "h2",
    id: "records",
    text: "Records, Trending and Escalation",
    number: 7,
    body: "A number recorded without a threshold is not quality control.",
  },
  {
    type: "table",
    headers: ["Result band", "Meaning", "Required response"],
    rows: [
      ["Within tolerance", "Performance consistent with baseline", "Record and continue"],
      ["Trend drifting toward limit", "Change in progress but still acceptable", "Notify physics and engineering; increase test frequency"],
      ["Outside investigation limit", "Performance change requires explanation", "Investigate before further routine screening"],
      ["Outside suspension limit", "Clinical performance may be compromised", "Stop clinical use; service intervention and physics re-test"],
      ["Post-repair", "Baseline no longer valid", "Physics re-test and new baselines before clinical use"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Programme failures to avoid",
    items: [
      "Recording results without defined investigation and suspension thresholds.",
      "Filing physics reports without a documented corrective-action loop.",
      "Excluding reporting displays from the programme because they are owned by IT.",
      "Continuing to screen after a confirmed uniformity failure because the list is full.",
      "Relying on a single trained individual, so the programme lapses during leave.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Who is responsible for mammography quality control?",
        a: "Responsibility is shared. Radiographers or a named quality-control lead perform routine daily and weekly tests, a medical physicist performs periodic measurement-based testing, and the service engineer performs scheduled preventive maintenance. Overall accountability sits with the service's clinical lead and quality manager.",
      },
      {
        q: "How often should mammography quality control be performed?",
        a: "Routine tests are performed daily or weekly according to the applicable national protocol and the manufacturer's instructions; physics testing is periodic and additionally required after major repairs. The exact frequencies are set by the protocol your service operates under, so follow that document rather than a generic schedule.",
      },
      {
        q: "What should happen if a daily test fails?",
        a: "Repeat the test to exclude setup error. If the failure is confirmed and it falls outside the suspension limit, stop clinical use, escalate to service and physics, and do not resume until the fault is corrected and performance re-verified. Failures between investigation and suspension limits require documented investigation but not necessarily immediate suspension.",
      },
      {
        q: "Does tomosynthesis need additional quality control?",
        a: "Yes. In addition to the two-dimensional tests, tomosynthesis requires assessment of reconstruction performance, slice-related artefacts and, where synthetic two-dimensional images are used clinically, verification that those images are fit for interpretation.",
      },
      {
        q: "Why are reading displays included in the equipment programme?",
        a: "Because the display is part of the imaging chain. A correctly acquired image interpreted on a drifted or poorly calibrated display can lose exactly the low-contrast information the examination was performed to obtain. Display quality control therefore belongs with the acquisition programme, not separately with general IT.",
      },
      {
        q: "How does maintenance relate to dose?",
        a: "Directly. Automatic exposure control drift, detector calibration drift and compression force error all change the exposure delivered for a given breast. Maintaining the system within tolerance is how a service keeps dose as low as reasonably practicable while preserving image quality.",
      },
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "Mammography quality is maintained by routine, not by intervention.",
  },
  {
    type: "p",
    text: "The programme that works is unremarkable: a short set of tests done before the first patient every day, trended against baselines; periodic physics measurement that anchors those trends; scheduled engineering maintenance of the mechanical and electrical parts that predictably wear; and displays treated as part of the imaging chain. Add written investigation and suspension thresholds, name one accountable owner, and review the trend monthly. That combination detects drift while it is still a maintenance issue rather than a clinical one.",
  },
  {
    type: "articleCta",
    heading: "Need mammography service and QC support?",
    subheading:
      "AbuFarha Medical Supplies provides preventive maintenance, spare parts, applications support and biomedical engineering training for mammography systems.",
    technology: "Mammography Systems",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Quality assurance frameworks",
        items: [
          { label: "World Health Organization — quality systems in diagnostic imaging", url: "https://www.who.int/" },
          { label: "International Atomic Energy Agency — quality assurance programmes for diagnostic radiology", url: "https://www.iaea.org/" },
        ],
      },
      {
        title: "Equipment standards",
        items: [
          { label: "International Electrotechnical Commission — mammographic equipment standards", url: "https://www.iec.ch/" },
          { label: "International Commission on Radiological Protection — medical exposure guidance", url: "https://www.icrp.org/" },
        ],
      },
    ],
    note: "Follow the national quality-control protocol applicable to your service and the manufacturer's documented procedures; these references provide context only.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Breast imaging" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Imaging equipment maintenance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Guidance synthesis and service practice",
    disclaimer:
      "Educational content. Applicable national quality-control protocols and manufacturer instructions take precedence over anything stated here.",
  },
];
