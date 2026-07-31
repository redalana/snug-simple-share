/**
 * DEXA supporting article — T-scores and Z-scores explained.
 */

import type { ContentBlock, TocItem } from "../blog";

export const DEXA_SCORES_TOC: TocItem[] = [
  { id: "why", title: "Why Raw Density Values Are Not Reported Alone" },
  { id: "t-score", title: "The T-Score: Comparison Against Peak Bone Mass" },
  { id: "z-score", title: "The Z-Score: Age-Matched Comparison" },
  { id: "which", title: "Which Score Applies to Which Patient" },
  { id: "reference", title: "Reference Databases and Why They Matter" },
  { id: "pitfalls", title: "Interpretation Pitfalls" },
  { id: "reporting", title: "Reporting Conventions" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DEXA_SCORES_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A bone density report contains an absolute measurement in grams per square centimetre, but clinical decisions are made on two comparative scores derived from it: the T-score and the Z-score. Both express how far a patient's measurement sits from a reference population, in standard deviations. They answer different questions, and applying the wrong one to the wrong patient produces a misleading report.",
      "This matters operationally as well as clinically. The score a system reports depends on the reference database configured in its software, so two systems can produce different classifications from the same measurement if configured differently.",
      "This guide explains both scores, when each applies, how reference databases affect them, and the interpretation errors that most commonly appear in densitometry reporting.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "The rationale for comparative scoring, T-score and Z-score definitions, patient groups to which each applies, reference database configuration effects, interpretation pitfalls and reporting conventions",
    audience:
      "Radiologists, rheumatologists and endocrinologists, densitometry technologists, medical physicists, clinical governance leads",
    readingTime: "12 min read",
    technology: "Bone Densitometers (DEXA)",
  },
  {
    type: "h2",
    id: "why",
    text: "Why Raw Density Values Are Not Reported Alone",
    number: 1,
  },
  {
    type: "p",
    text: "Areal bone mineral density depends on the size of the bone measured as well as its mineral content, and normal values differ by sex, age and measurement site. An absolute value therefore carries no clinical meaning on its own. Expressing the measurement as a number of standard deviations from a defined reference population converts it into something comparable across patients and across services — which is what a diagnostic classification requires.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Standard deviations, not percentages",
    text: "Both scores are expressed in standard deviations. Percentage-of-normal figures were used historically but are no longer the basis of diagnostic classification, because standard-deviation scoring behaves consistently across sites and populations.",
  },
  {
    type: "h2",
    id: "t-score",
    text: "The T-Score: Comparison Against Peak Bone Mass",
    number: 2,
  },
  {
    type: "p",
    text: "The T-score compares the patient's measurement with the mean of a healthy young adult reference population at peak bone mass, expressed in standard deviations. Because fracture risk relates to how far bone density has fallen from its peak, this comparison is the basis of the internationally used diagnostic categories for osteoporosis in appropriate patient groups.",
  },
  {
    type: "table",
    headers: ["T-score range", "Diagnostic category", "Typical clinical response"],
    rows: [
      ["−1.0 and above", "Normal bone density", "Lifestyle advice; rescan interval per risk factors"],
      ["Between −1.0 and −2.5", "Low bone mass (osteopenia)", "Risk factor assessment; fracture risk tool; consider treatment in higher-risk patients"],
      ["−2.5 and below", "Osteoporosis", "Treatment consideration and fracture prevention pathway"],
      ["−2.5 or below with fragility fracture", "Severe (established) osteoporosis", "Treatment and secondary fracture prevention"],
    ],
    caption: "Conventional T-score diagnostic categories used in appropriate patient groups. Clinical action always incorporates risk factors, not the score alone.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The categories are a classification convention, not a treatment threshold. Many patients treated for high fracture risk sit in the osteopenic range once clinical risk factors are considered.",
    clinicalInterpretation:
      "A patient with a prior fragility fracture is at high risk regardless of where the T-score falls, and should be managed accordingly.",
    hospitalRecommendation:
      "Report the score with the clinical risk context and, where used locally, an accompanying fracture risk assessment rather than the classification alone.",
  },
  {
    type: "h2",
    id: "z-score",
    text: "The Z-Score: Age-Matched Comparison",
    number: 3,
  },
  {
    type: "p",
    text: "The Z-score compares the patient's measurement with the mean for a population matched for age and sex. It answers a different question: is this density unusual for someone of this age? That question is the relevant one where comparison with young adult peak mass is inappropriate — in children and adolescents, in premenopausal women and in younger men.",
  },
  {
    type: "ul",
    items: [
      "A Z-score at or below −2.0 is conventionally described as below the expected range for age and prompts investigation for secondary causes.",
      "Z-scores are the appropriate primary score in paediatric and adolescent reporting, where the diagnostic categories built on T-scores do not apply.",
      "In older adults, a Z-score near zero simply means the patient resembles their age group — which may still represent substantial fracture risk.",
    ],
  },
  {
    type: "h2",
    id: "which",
    text: "Which Score Applies to Which Patient",
    number: 4,
  },
  {
    type: "table",
    headers: ["Patient group", "Primary score", "Reason"],
    rows: [
      ["Postmenopausal women", "T-score", "Diagnostic categories are validated in this group"],
      ["Men aged 50 and over", "T-score", "Comparable diagnostic use with sex-specific reference data"],
      ["Premenopausal women", "Z-score", "Peak-mass comparison is not the clinically relevant question"],
      ["Men under 50", "Z-score", "Age-matched comparison is more informative"],
      ["Children and adolescents", "Z-score", "Skeletal growth makes peak-mass comparison invalid"],
    ],
    caption: "Score selection by patient group, following widely adopted densitometry reporting conventions.",
  },
  {
    type: "h2",
    id: "reference",
    text: "Reference Databases and Why They Matter",
    number: 5,
  },
  {
    type: "p",
    text: "Every score depends on the reference dataset installed in the analysis software. Databases differ by population studied, by sex-specific data used for male patients and by the site data applied. Two departments measuring the same patient can therefore report different T-scores if they use different reference configurations. This is a configuration governance issue that belongs to the department, jointly with medical physics.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Record the reference configuration",
    text: "Document which reference database version is in use and verify it after software updates and service interventions. Silent reference changes alter reported classifications without any change in the patient.",
  },
  {
    type: "h2",
    id: "pitfalls",
    text: "Interpretation Pitfalls",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Degenerative spinal change, vertebral fracture and aortic calcification can raise apparent spinal density and mask bone loss; the hip measurement is often more reliable in older patients.",
      "Comparing scans acquired with different region-of-interest placement produces spurious change; analysis must be matched to the baseline.",
      "Comparing scans from different systems without cross-calibration mixes instrumental and biological differences.",
      "Interpreting change smaller than the service's least significant change as real progression or response.",
      "Applying T-score diagnostic categories to premenopausal women, younger men or children.",
      "Ignoring vertebral levels excluded from analysis, which changes the reported spinal value.",
    ],
  },
  {
    type: "h2",
    id: "reporting",
    text: "Reporting Conventions",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "State the sites measured, the values obtained, and which score is being used as the basis of interpretation.",
      "Identify excluded vertebral levels or regions and the reason for exclusion.",
      "Where a comparison is made, state the prior scan date, the system used and whether analysis was matched.",
      "Express change against the service's least significant change rather than as a bare percentage.",
      "Note technical factors limiting interpretation, including positioning difficulty or artefact.",
      "Include the fracture-risk context where local pathways use a formal risk assessment tool.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Can a patient have a normal T-score and still be at high fracture risk?",
        a: "Yes. Prior fragility fracture, corticosteroid use, age and other clinical factors raise risk independently of bone density, which is why risk assessment combines both.",
      },
      {
        q: "Why is the spine sometimes less reliable than the hip?",
        a: "Degenerative change, vertebral collapse and vascular calcification add apparent density to the spinal measurement in older patients, which can mask real bone loss.",
      },
      {
        q: "Should male patients be scored against male reference data?",
        a: "Reference selection should follow the national guidance the service operates under, and the chosen configuration must be documented and applied consistently.",
      },
      {
        q: "How much change is meaningful on follow-up?",
        a: "Only change exceeding the service's own least significant change, which is derived from a formal operator precision assessment.",
      },
      {
        q: "Do the diagnostic categories apply to forearm measurements?",
        a: "Forearm measurement is used when axial sites are unusable, and site-specific reporting conventions apply. It is not interchangeable with spine or hip values.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "T-scores compare against young adult peak bone mass and underpin osteoporosis classification in appropriate groups.",
      "Z-scores compare against age-matched peers and are the primary score in younger patients and children.",
      "Reported scores depend on the reference database configured in the system's software.",
      "Spinal measurements can be falsely elevated by degenerative change in older patients.",
      "Follow-up interpretation requires matched analysis and the service's own least significant change.",
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
    text: "Understanding the two scores is what turns a densitometry measurement into clinical information. Services that document their reference configuration, match follow-up analysis to baseline and report change against a measured precision limit produce densitometry that clinicians can rely on for treatment decisions.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Clinical practice",
        items: [
          { label: "World Health Organization — osteoporosis diagnostic criteria", url: "https://www.who.int/" },
          { label: "International Osteoporosis Foundation — densitometry reporting resources", url: "https://www.osteoporosis.foundation/" },
        ],
      },
      {
        title: "Physics and quality assurance",
        items: [
          { label: "International Atomic Energy Agency — bone densitometry quality assurance", url: "https://www.iaea.org/" },
          { label: "American Association of Physicists in Medicine — densitometry precision and QC", url: "https://www.aapm.org/" },
        ],
      },
    ],
    note: "Diagnostic thresholds, reference database selection and reporting conventions must follow national guidance applicable to the service.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Bone health and densitometry reporting practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Densitometry calibration and software configuration" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Clinical guidance and quality assurance practice synthesis",
    disclaimer:
      "Educational guidance on densitometry score interpretation. It does not replace national clinical guidelines or manufacturer documentation.",
  },
];
