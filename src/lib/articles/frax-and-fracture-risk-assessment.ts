/**
 * Bone Densitometers (DEXA) cluster — "FRAX and Fracture Risk Assessment"
 */

import type { ContentBlock, TocItem } from "../blog";

export const FRAX_RISK_TOC: TocItem[] = [
  { id: "why", title: "Why Density Alone Is Not Risk" },
  { id: "inputs", title: "How Fracture Risk Tools Combine Inputs" },
  { id: "densitometry-role", title: "The Role of the DEXA Measurement" },
  { id: "workflow", title: "Integrating Risk Assessment Into the Densitometry Pathway" },
  { id: "limitations", title: "Limitations and Common Misuse" },
  { id: "governance", title: "Governance and Reporting" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const FRAX_RISK_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "A bone mineral density measurement tells a clinician where a patient sits relative to a reference population; it does not, by itself, say how likely that patient is to fracture in the next decade. Fracture risk assessment tools combine the densitometry result with independently weighted clinical risk factors to produce that estimate, and AbuFarha Medical's role in supporting bone densitometry services extends to helping departments configure their systems and workflows so that this combined assessment can be produced consistently at the point of reporting.",
      "Fracture risk tools are now embedded in most osteoporosis management pathways, but they are frequently misunderstood as a replacement for the T-score rather than a complement to it. Getting the relationship right matters clinically, because patients with the same T-score can have very different absolute fracture risk depending on age, prior fracture history and other factors.",
      "This article explains how fracture risk assessment tools work in relation to the densitometry measurement, how a service should integrate risk calculation into its reporting workflow, and where the limitations of these tools lie.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "The relationship between bone mineral density and absolute fracture risk, the structure of fracture risk assessment tools, workflow integration at the point of DEXA reporting, and reporting governance",
    audience:
      "Rheumatologists and endocrinologists, radiologists, densitometry technologists, primary care clinicians using risk tools, service planners",
    readingTime: "12 min read",
    technology: "Bone Densitometers (DEXA)",
  },
  {
    type: "h2",
    id: "why",
    text: "Why Density Alone Is Not Risk",
    number: 1,
  },
  {
    type: "p",
    text: "Bone mineral density is the strongest single predictor of fracture available from a single measurement, but it is a statistical predictor operating alongside other independent factors. Age is itself a powerful and largely independent fracture predictor: an older patient and a younger patient with an identical T-score do not carry the same absolute risk, because skeletal fragility, fall risk and bone quality beyond mineral content all change with age. A prior fragility fracture likewise raises risk substantially regardless of the current density value. Reporting a T-score without this context risks both under- and over-treatment.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Two patients, one T-score, different risk",
    text: "A 55-year-old and an 80-year-old with the same femoral neck T-score do not share the same ten-year fracture probability. Absolute risk rises with age even at a fixed density value, which is exactly what a fracture risk tool is designed to capture.",
  },
  {
    type: "h2",
    id: "inputs",
    text: "How Fracture Risk Tools Combine Inputs",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Age and sex, which independently affect baseline fracture probability.",
      "Prior fragility fracture history, one of the strongest independent risk factors identified in the literature.",
      "Parental history of hip fracture.",
      "Current smoking status and level of alcohol consumption.",
      "Long-term oral corticosteroid use and, where included, other secondary causes of bone loss such as rheumatoid arthritis.",
      "Body mass index, as a modifying factor.",
      "Femoral neck bone mineral density, entered as the T-score or the underlying density value depending on the tool.",
    ],
  },
  {
    type: "p",
    text: "These inputs are combined using models built from long-term population cohort data to produce an estimated probability of major osteoporotic fracture and of hip fracture specifically over a ten-year horizon. The output is a probability, not a diagnostic category, and it is intended to inform — not replace — clinical judgement about whether to treat.",
  },
  {
    type: "h2",
    id: "densitometry-role",
    text: "The Role of the DEXA Measurement",
    number: 3,
  },
  {
    type: "table",
    headers: ["Element", "Source", "Effect on the risk estimate"],
    rows: [
      ["Femoral neck BMD or T-score", "DEXA measurement", "Refines the risk estimate; the tool can be run without it but is more precise with it"],
      ["Clinical risk factors", "Patient history, taken at the point of care", "Set the baseline probability before density is incorporated"],
      ["Reference population used by the tool", "Population-specific model", "Determines whether the absolute probability is appropriately calibrated for the patient's population"],
      ["Treatment thresholds applied locally", "National or institutional guidance", "Converts the probability into an action, not a property of the tool itself"],
    ],
    caption: "How the densitometry measurement fits within a fracture risk assessment calculation.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The femoral neck value is the site most fracture risk tools are validated against; using a different site's T-score in its place is a common but inappropriate substitution.",
    clinicalInterpretation:
      "A risk estimate calculated without a BMD input is still usable clinically but is less discriminating than one incorporating the measured value.",
    hospitalRecommendation:
      "Ensure reporting software either calculates or clearly presents the femoral neck value needed for risk tool entry, so clinicians are not required to look it up separately.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "Integrating Risk Assessment Into the Densitometry Pathway",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Capture the clinical risk factors needed for the tool at the time of scan booking or scanning, rather than leaving this to the reporting clinician to reconstruct later.",
      "Ensure the femoral neck result is clearly presented in the report in the form the locally used risk tool requires.",
      "Where the reporting system supports it, calculate the risk estimate automatically alongside the density result rather than as a separate manual step.",
      "Present the risk estimate alongside, not instead of, the T-score and Z-score, since the underlying density result remains part of the clinical record.",
      "Route patients whose calculated risk crosses a locally agreed action threshold into a defined management pathway.",
      "Recalculate risk at appropriate intervals, since age and clinical status change over time even without a repeat scan.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Automated calculation depends on correct configuration",
    text: "Where a system or reporting package offers automatic fracture risk calculation, verify during commissioning that the correct femoral neck reference range and units are configured. An incorrect configuration produces a plausible but wrong probability.",
  },
  {
    type: "h2",
    id: "limitations",
    text: "Limitations and Common Misuse",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Fracture risk tools are validated in specific age ranges and are not intended for use outside them, including in most paediatric and premenopausal populations.",
      "The tools estimate risk without treatment; they are not designed to model risk reduction from an intervention already in progress.",
      "Population calibration matters: a tool calibrated on one population may not transfer numerically to a different population without adjustment.",
      "Vertebral fracture identified only on morphology assessment, rather than by clinical history, may not be reflected in a risk calculation based on reported fracture history alone.",
      "Treating the calculated probability as a precise number rather than an estimate with meaningful uncertainty overstates its precision.",
      "Using a T-score from a site other than femoral neck as a substitute input where the tool specifies femoral neck.",
    ],
  },
  {
    type: "h2",
    id: "governance",
    text: "Governance and Reporting",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Agree locally which fracture risk tool is used and document the version and reference population in service protocols.",
      "State in the report whether the risk estimate is with or without BMD input, since the two produce different probabilities.",
      "Define locally agreed action thresholds with the referring specialties rather than leaving interpretation to individual reporting clinicians.",
      "Review risk tool configuration whenever reporting software is updated.",
      "Record the risk category alongside the density result in the patient's longitudinal record for future comparison.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supports densitometry services in configuring reporting software correctly for fracture risk calculation, verifying reference ranges and units during commissioning, and training reporting staff and technologists on how the measurement and the risk estimate fit together in the clinical workflow.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Does a normal T-score mean fracture risk is low?",
        a: "Not necessarily. Age, prior fracture and other clinical factors can produce meaningful fracture risk even at a T-score in the normal or osteopenic range, which is why risk tools exist alongside the density score.",
      },
      {
        q: "Can fracture risk be estimated without a DEXA scan?",
        a: "Most tools can run without a bone density value, using clinical risk factors alone, but the estimate is less discriminating than one that incorporates a measured femoral neck value.",
      },
      {
        q: "Which BMD site should be entered into a risk tool?",
        a: "The femoral neck value, since this is the site most fracture risk tools are validated against. Substituting another site's score is not equivalent.",
      },
      {
        q: "Should treatment be based on the calculated risk alone?",
        a: "The calculated probability informs, but does not replace, clinical judgement and locally agreed management thresholds, which should be applied by the treating clinician.",
      },
      {
        q: "How often should fracture risk be recalculated?",
        a: "At clinically appropriate intervals, since age and risk factor status change over time even in the absence of a repeat scan, and following any new fragility fracture.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "Bone density is one input among several independent factors that together determine absolute fracture risk.",
      "Fracture risk tools combine age, prior fracture, secondary causes and other factors with the femoral neck BMD value.",
      "Risk estimates should be presented alongside, not instead of, the T-score and Z-score in the report.",
      "Correct configuration of reference ranges and units in reporting software is essential for automated risk calculation.",
      "Locally agreed action thresholds, not the raw probability, should determine the clinical pathway a patient follows.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 7,
  },
  {
    type: "p",
    text: "Fracture risk assessment converts a density measurement into an actionable clinical estimate by placing it alongside the independent risk factors that shape a patient's true probability of fracture. Densitometry services that capture the necessary clinical inputs, configure their reporting workflow correctly and apply agreed thresholds turn a single number into a decision-support tool clinicians can trust.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Clinical practice",
        items: [
          { label: "World Health Organization — osteoporosis diagnostic criteria and fracture risk", url: "https://www.who.int/" },
          { label: "International Osteoporosis Foundation — fracture risk assessment resources", url: "https://www.osteoporosis.foundation/" },
        ],
      },
      {
        title: "Physics and reporting practice",
        items: [
          { label: "American Association of Physicists in Medicine — densitometry reporting practice", url: "https://www.aapm.org/" },
        ],
      },
    ],
    note: "Fracture risk tool selection, calibration and locally applied treatment thresholds must follow national clinical guidance applicable to the service.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Bone health and fracture risk practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Densitometry reporting system configuration" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Clinical guidance and reporting practice synthesis",
    disclaimer:
      "Educational guidance. It does not replace national clinical guidelines, fracture risk tool documentation or individual clinical judgement.",
  },
];
