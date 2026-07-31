/**
 * PET/CT oncology staging protocols — PET/CT cluster (supporting, clinical).
 */

import type { ContentBlock, TocItem } from "../blog";

export const PET_CT_ONCOLOGY_STAGING_TOC: TocItem[] = [
  { id: "overview", title: "What Staging PET/CT Is For" },
  { id: "preparation", title: "Patient Preparation" },
  { id: "acquisition", title: "Acquisition Protocol Design" },
  { id: "indications", title: "Indication-Specific Protocols" },
  { id: "response", title: "Response Assessment and Reporting Criteria" },
  { id: "pitfalls", title: "Pitfalls and False Positives" },
  { id: "quantification", title: "Keeping SUV Comparable Between Scans" },
  { id: "governance", title: "Protocol Governance" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PET_CT_ONCOLOGY_STAGING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Most PET/CT capacity in the world is used for oncology, and most oncology PET/CT is used to answer three questions: where is the disease, has it spread, and is the treatment working. Answering them reliably depends less on the scanner's headline specification than on the consistency of the protocol used to acquire and report the study.",
      "A staging scan performed with an uncontrolled blood glucose, a variable uptake time or a different reconstruction from the previous examination cannot be compared with that previous examination. The number changes, the disease does not, and the clinical decision is made on noise.",
      "This guide sets out how oncology PET/CT protocols are built: patient preparation, acquisition parameters, indication-specific variations, the response criteria used to report them, the pitfalls that generate false positives, and the governance that keeps quantification comparable over years of follow-up.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Preparation and glucose control, uptake time, acquisition and reconstruction parameters, indication-specific protocols, response criteria, false positives, SUV comparability, protocol governance",
    audience:
      "Nuclear medicine physicians, radiologists, technologists, medical physicists, oncology service leads and hospital quality teams",
    readingTime: "16 min read",
    technology: "PET/CT Scanners",
  },
  {
    type: "h2",
    id: "overview",
    text: "What Staging PET/CT Is For",
    number: 1,
    body: "Staging PET/CT exists to change management. Its value comes from finding disease that anatomical imaging cannot characterise, and from excluding disease confidently enough to justify aggressive local treatment.",
  },
  {
    type: "ul",
    items: [
      "Initial staging — establishing the extent of disease before a treatment decision, particularly whether distant metastases make curative local therapy futile.",
      "Restaging — reassessing extent after treatment, or when a marker rises or a symptom appears.",
      "Response assessment — comparing metabolic activity before and after therapy, often earlier than anatomical change becomes visible.",
      "Radiotherapy planning — defining metabolically active volumes for target delineation.",
      "Characterisation — distinguishing a metabolically active lesion from a benign anatomical finding.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "important",
    title: "Comparability is the clinical product",
    text: "A single SUV value in isolation rarely decides anything. What decides management is the change between two studies. That makes protocol consistency — same preparation, same uptake time, same reconstruction, same scanner calibration — a clinical requirement rather than an administrative preference.",
  },
  {
    type: "h2",
    id: "preparation",
    text: "Patient Preparation",
    number: 2,
    body: "For FDG studies the tracer competes with glucose. Preparation exists to make sure the tracer wins, and to suppress the physiological uptake that would otherwise obscure disease.",
  },
  {
    type: "table",
    headers: ["Step", "Purpose", "Failure mode if skipped"],
    rows: [
      ["Fasting before injection", "Lowers serum glucose and insulin so FDG is taken up by tumour rather than muscle", "Diffuse muscle and myocardial uptake; reduced tumour contrast"],
      ["Blood glucose measurement", "Documents that uptake conditions are within the accepted range", "Uninterpretable or non-comparable study; wasted tracer dose"],
      ["Avoiding exercise beforehand", "Prevents skeletal muscle uptake", "Muscle activity mimicking or masking nodal disease"],
      ["Warmth before and after injection", "Suppresses brown adipose tissue activation", "Symmetrical neck, supraclavicular and paravertebral uptake misread as nodal disease"],
      ["Hydration and voiding before acquisition", "Clears activity from the urinary tract", "Bladder and collecting-system activity obscuring pelvic disease"],
      ["Medication and diabetes review", "Timing of insulin and oral agents relative to injection", "Insulin-driven muscle uptake; failed study"],
      ["Uptake rest period", "Allows tracer distribution to reach the protocol time point", "Non-comparable SUV between examinations"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "Record the conditions, not just the result",
    text: "Serum glucose, injected activity, injection time, acquisition start time and patient weight should appear in the record for every study. Without them a later reader cannot judge whether a change in SUV reflects biology or preparation.",
  },
  {
    type: "h2",
    id: "acquisition",
    text: "Acquisition Protocol Design",
    number: 3,
    body: "The acquisition protocol defines coverage, timing, the role of the CT component and the reconstruction that produces the numbers the report relies on.",
  },
  {
    type: "ul",
    items: [
      "Coverage — the standard oncology survey runs skull base to mid-thigh; melanoma, sarcoma and some lymphomas need true whole-body coverage including the extremities.",
      "Arm position — arms up reduces truncation and beam-hardening artefact for torso imaging, but head and neck studies are acquired arms down.",
      "Uptake time — a fixed interval between injection and acquisition start, applied consistently, because FDG in tumour continues to accumulate over time.",
      "Bed time or count statistics — matched to patient habitus so image noise stays comparable rather than degrading in larger patients.",
      "CT component — a low-dose CT for attenuation correction and localisation, or a diagnostic-quality contrast-enhanced CT when the same study must also serve as the anatomical examination.",
      "Reconstruction — one clinical reconstruction fixed for quantification, with any additional high-resolution or point-spread-function reconstruction used for reading rather than for reported SUV.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Two CT roles, two dose levels",
    text: "The attenuation-correction CT is a low-dose acquisition whose only jobs are correction and localisation. A diagnostic CT within the same appointment is a separate decision with its own dose and contrast justification. Deciding which one a given indication needs — before the patient arrives — prevents both unnecessary dose and repeat imaging.",
  },
  {
    type: "h2",
    id: "indications",
    text: "Indication-Specific Protocols",
    number: 4,
    body: "The generic oncology survey is a starting point. Individual indications need defined deviations, agreed in advance with the referring specialty.",
  },
  {
    type: "table",
    headers: ["Indication", "Protocol adaptation", "Reason"],
    rows: [
      ["Lymphoma", "Whole-body coverage; consistent uptake time; visual five-point scale reporting", "Response is graded against liver and mediastinal reference activity across serial scans"],
      ["Lung cancer", "Skull base to mid-thigh; consider dedicated brain imaging or MRI separately", "Nodal and distant staging changes surgical candidacy; brain metastases need dedicated assessment"],
      ["Head and neck cancer", "Arms down; dedicated high-resolution field over the neck", "Small nodal disease and dental artefact demand local resolution"],
      ["Colorectal cancer", "Contrast-enhanced CT component where hepatic resection is contemplated", "Liver lesion characterisation drives operability"],
      ["Melanoma and sarcoma", "True whole-body including limbs", "Distant and in-transit disease occurs outside the standard survey range"],
      ["Prostate cancer", "PSMA-targeted tracer rather than FDG; delayed or diuretic protocols as agreed", "FDG performs poorly in most prostate disease; urinary activity obscures the pelvis"],
      ["Neuroendocrine tumours", "Somatostatin-receptor tracer; withhold long-acting analogues per agreed interval", "Receptor-targeted imaging is the appropriate biology, and analogues block the target"],
      ["Radiotherapy planning", "Immobilised in treatment position, flat couch top, matched coordinates", "Volumes must transfer to the planning system without geometric error"],
    ],
  },
  {
    type: "h2",
    id: "response",
    text: "Response Assessment and Reporting Criteria",
    number: 5,
    body: "Structured criteria exist so that different readers reach the same conclusion from the same images, and so that oncology trials and routine care use the same language.",
  },
  {
    type: "ul",
    items: [
      "Visual five-point scoring against liver and mediastinal blood-pool reference activity, widely used in lymphoma, grades residual activity rather than measuring it.",
      "Quantitative frameworks compare the metabolic activity of a defined target lesion set before and after treatment, using consistent measurement rules.",
      "A report should state the criteria used, the reference lesions, the measurement method and the comparison study — not simply an SUV value.",
      "Complete metabolic response, partial response, stable metabolic disease and progressive metabolic disease should be used with the definitions the local protocol adopts, consistently across a patient's pathway.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Timing after treatment matters",
    text: "Imaging too soon after chemotherapy, radiotherapy or surgery produces inflammatory uptake that is easily mistaken for residual disease, and post-chemotherapy marrow stimulation can produce diffuse skeletal activity. Response scans should be scheduled at the interval the treatment protocol specifies, and the report should state the interval.",
  },
  {
    type: "h2",
    id: "pitfalls",
    text: "Pitfalls and False Positives",
    number: 6,
    body: "FDG marks glucose metabolism, and many benign processes are metabolically active. Recognising the recurring patterns is the difference between a useful report and an unnecessary biopsy.",
  },
  {
    type: "table",
    headers: ["Finding", "Benign explanation", "How it is resolved"],
    rows: [
      ["Symmetrical neck and supraclavicular uptake", "Brown adipose tissue", "Correlate with fat density on CT; keep the patient warm before injection"],
      ["Diffuse muscle activity", "Insulin effect, recent exercise or tension", "Review preparation record; repeat with corrected preparation if critical"],
      ["Bowel activity", "Physiological, metformin-related or inflammatory", "Pattern recognition, CT correlation and medication review"],
      ["Nodal uptake after infection or vaccination", "Reactive lymphadenopathy", "Clinical history, laterality, interval follow-up"],
      ["Focal marrow or splenic activity", "Growth-factor or post-chemotherapy stimulation", "Treatment timeline correlation"],
      ["Uptake at a surgical or biopsy site", "Healing and inflammation", "Anatomical correlation and appropriate interval"],
      ["Thyroid or parotid activity", "Thyroiditis, benign nodules, sialadenitis", "Ultrasound or dedicated assessment where clinically relevant"],
      ["Absent uptake in known disease", "Low-grade or mucinous tumour, small lesion below resolution, hyperglycaemia", "Recognise tracer limitations; do not report as disease-free without qualification"],
    ],
  },
  {
    type: "h2",
    id: "quantification",
    text: "Keeping SUV Comparable Between Scans",
    number: 7,
    body: "SUV is a normalised concentration, not a physical constant. It responds to calibration, timing, patient size normalisation and reconstruction as much as to biology.",
  },
  {
    type: "ul",
    items: [
      "Maintain scanner quantitative calibration against a traceable source on the schedule the physics programme defines, and record the result.",
      "Keep the injection-to-acquisition interval fixed within the tolerance the protocol states.",
      "Use one reconstruction for reported quantification, and document it in the report or the protocol reference.",
      "Use consistent normalisation — body weight, lean body mass or body surface area — and never mix conventions within a patient's series.",
      "Where possible perform serial studies on the same scanner; where that is impossible, note the change of system in the report.",
      "Participate in a quantitative harmonisation or accreditation scheme if serial oncology response reporting or trial work is undertaken.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "planning-tip",
    title: "A practical rule for serial reporting",
    text: "If any of preparation, uptake time, reconstruction or scanner has changed between two studies, say so in the report and interpret the change in activity with explicit caution. A stated limitation is clinically safer than an unqualified number.",
  },
  {
    type: "h2",
    id: "governance",
    text: "Protocol Governance",
    number: 8,
    body: "Protocols drift. Staff change, software is upgraded, and individual preferences accumulate until two technologists scan the same indication differently. Governance is what prevents that.",
  },
  {
    type: "ul",
    items: [
      "A written protocol document per indication, version-controlled, owned by a named clinician and physicist.",
      "Review after every software upgrade, because reconstruction changes can shift SUV without any visible image change.",
      "Regular audit of preparation compliance, glucose records, uptake time variance and repeat rates.",
      "A documented change process, so a protocol modification is a decision with a date rather than an undocumented habit.",
      "Technologist training and competency records tied to the current protocol version.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "How long should a patient fast before an FDG PET/CT?",
        a: "Local protocols follow national and professional guidance, typically a defined fasting period of several hours with only water permitted, together with a documented serum glucose measurement before injection. The purpose is to reduce competing glucose and circulating insulin so that tracer uptake reflects tumour metabolism rather than muscle activity.",
      },
      {
        q: "Why is uptake time so important?",
        a: "FDG continues to accumulate in tumour tissue over time while it clears from background, so measured activity depends on when the acquisition starts. If one study is acquired earlier after injection than the next, the apparent change in SUV may be entirely due to timing rather than treatment effect.",
      },
      {
        q: "What is the standard coverage for an oncology PET/CT?",
        a: "Skull base to mid-thigh is the standard survey for most solid tumours and covers the great majority of metastatic sites. Melanoma, sarcoma and some lymphoma protocols extend to true whole-body coverage including the limbs, because disease occurs outside the standard range.",
      },
      {
        q: "Does the CT part need contrast?",
        a: "Not always. A low-dose non-contrast CT is sufficient for attenuation correction and anatomical localisation. A diagnostic contrast-enhanced CT is added when the same appointment must also deliver the anatomical staging examination — for example when hepatic lesion characterisation will determine operability — and is justified separately.",
      },
      {
        q: "Can PET/CT distinguish infection from cancer?",
        a: "Not reliably on uptake intensity alone, because both are metabolically active. Distinction relies on pattern, distribution, anatomical correlation on CT, clinical history and, where necessary, interval follow-up or tissue sampling. Reports should state where this ambiguity exists rather than resolving it by assumption.",
      },
      {
        q: "Why do some tumours not show on FDG PET/CT?",
        a: "Some tumour types are not markedly glucose-avid — including many well-differentiated, mucinous and low-grade tumours — and lesions below the effective spatial resolution of the system may not be detected regardless of avidity. Uncontrolled hyperglycaemia also reduces tumour contrast. In several of these situations a targeted tracer is the appropriate examination instead.",
      },
      {
        q: "How soon after chemotherapy should a response scan be performed?",
        a: "At the interval the treatment protocol specifies, because treatment-related inflammation produces uptake that mimics residual disease. Scanning early risks a false impression of persistent disease; the interval actually used should always be recorded in the report.",
      },
      {
        q: "Should serial scans be performed on the same scanner?",
        a: "Where practical, yes. Differences in calibration, reconstruction and resolution between systems shift measured activity, so same-scanner follow-up removes a source of apparent change. When a different system must be used, the report should note it and interpret quantitative change accordingly.",
      },
      {
        q: "Who should own PET/CT protocols in a hospital?",
        a: "A named nuclear medicine physician together with a medical physics expert, with version-controlled documents, review after every software upgrade, and periodic audit of preparation compliance and timing variance. Without single ownership, protocols diverge quietly and serial comparability is lost.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Building or expanding a PET/CT service?",
    subheading:
      "AbuFarha Medical supplies, installs, commissions and supports PET/CT systems, and works with clinical and physics teams on quantitative calibration, protocol setup and long-term service cover.",
    technology: "PET/CT Scanners",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Oncology imaging pathways" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "PET/CT quantification and system performance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "International professional-society procedure guidelines and response-assessment criteria",
    disclaimer:
      "This article describes internationally recognised protocol principles for educational purposes. Clinical protocols, preparation rules, injected activities and reporting criteria must follow national regulation, professional-society guidance and local governance.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Procedure guidelines",
        items: [
          { label: "EANM procedure guidelines for tumour imaging with FDG PET/CT" },
          { label: "SNMMI procedure standards for FDG PET/CT in oncology" },
        ],
      },
      {
        title: "Response assessment",
        items: [
          { label: "Deauville five-point scale for lymphoma response assessment" },
          { label: "PERCIST and related metabolic response criteria" },
        ],
      },
      {
        title: "Quantification and harmonisation",
        items: [
          { label: "NEMA NU 2 — performance measurements of positron emission tomographs" },
          { label: "EANM Research Ltd (EARL) accreditation guidance on quantitative harmonisation" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as guidance is revised.",
  },
  {
    type: "takeaways",
    items: [
      "Oncology PET/CT changes management by staging, restaging, assessing response and guiding radiotherapy — all of which depend on comparability between studies.",
      "Preparation controls the study: fasting, glucose measurement, warmth, hydration, voiding and a fixed uptake time.",
      "Protocols must be indication-specific — coverage, arm position, tracer choice and CT role all vary.",
      "Structured response criteria and stated measurement methods make reports reproducible between readers.",
      "Benign metabolic activity is common; recognising the recurring false-positive patterns prevents unnecessary intervention.",
      "Quantitative comparability requires calibration, fixed reconstruction, consistent normalisation and, ideally, the same scanner.",
      "Version-controlled protocol governance with named clinical and physics ownership is what stops silent drift.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 9,
    body: "A PET/CT service earns clinical trust through consistency. The scanner determines what is theoretically detectable; the protocol determines what is actually reported, and whether this month's study can be compared with last quarter's.",
  },
  {
    type: "p",
    text: "Hospitals that invest in written, indication-specific protocols, disciplined preparation, stable reconstruction settings and documented quantitative calibration get reports that oncologists act on. Those that do not accumulate numbers that cannot be compared, and decisions made in spite of the imaging rather than because of it.",
  },
];

