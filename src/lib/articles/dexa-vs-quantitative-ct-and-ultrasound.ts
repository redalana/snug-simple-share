/**
 * Bone Densitometers (DEXA) cluster — "DEXA vs Quantitative CT and Quantitative Ultrasound"
 */

import type { ContentBlock, TocItem } from "../blog";

export const DEXA_VS_QCT_QUS_TOC: TocItem[] = [
  { id: "overview", title: "Three Methods, One Clinical Question" },
  { id: "dexa", title: "DEXA: The Reference Standard" },
  { id: "qct", title: "Quantitative CT: Volumetric Density" },
  { id: "qus", title: "Quantitative Ultrasound: Portable Screening" },
  { id: "comparison", title: "Side-by-Side Comparison" },
  { id: "choosing", title: "Choosing the Right Method for the Service" },
  { id: "integration", title: "Can the Methods Be Combined" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DEXA_VS_QCT_QUS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Bone mineral density can be estimated by more than one imaging technology, and departments planning a bone health service are sometimes asked to choose between dual-energy X-ray absorptiometry, quantitative computed tomography and quantitative ultrasound. AbuFarha Medical supplies and services DEXA systems and supports departments in understanding how these technologies compare so that the method selected matches the clinical pathway it is meant to serve.",
      "The three methods are not interchangeable substitutes for one another. They differ in what they measure, how they are validated, what infrastructure they require and what role they play in an established clinical pathway. Choosing between them, or deciding to use more than one, should follow from the clinical question being asked rather than from equipment availability alone.",
      "This guide compares the three technologies on physical principle, clinical validation, infrastructure requirements and appropriate use, to support informed service planning.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "The physical principles and clinical roles of DEXA, quantitative CT and quantitative ultrasound, their comparative strengths and limitations, and guidance on selecting or combining methods for a bone health service",
    audience:
      "Radiologists and rheumatologists, service planners, medical physicists, procurement committees, primary care and community screening programme leads",
    readingTime: "13 min read",
    technology: "Bone Densitometers (DEXA)",
  },
  {
    type: "h2",
    id: "overview",
    text: "Three Methods, One Clinical Question",
    number: 1,
  },
  {
    type: "p",
    text: "Each technology attempts to characterise skeletal fragility, but they do so with different physical measurements and different levels of clinical validation. DEXA measures areal bone mineral density using dual-energy X-ray absorptiometry and is the method against which the internationally used diagnostic thresholds for osteoporosis were established. Quantitative CT measures true volumetric bone density using standard CT acquisition with a calibration phantom. Quantitative ultrasound estimates properties of peripheral bone, typically the heel, using the speed and attenuation of ultrasound waves, without ionising radiation.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Diagnostic thresholds are method-specific",
    text: "The internationally used T-score diagnostic categories for osteoporosis were derived from DEXA measurement and are not directly transferable to quantitative CT or quantitative ultrasound results without method-specific interpretation.",
  },
  {
    type: "h2",
    id: "dexa",
    text: "DEXA: The Reference Standard",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Measures areal bone mineral density at the standard clinical sites — lumbar spine, hip and forearm.",
      "Is the method underlying the internationally used T-score diagnostic categories for osteoporosis.",
      "Delivers very low radiation dose relative to other X-ray-based imaging.",
      "Has the largest body of longitudinal outcome and fracture-prediction data of the three methods.",
      "Requires a dedicated fixed-room installation and a trained operator for reproducible positioning.",
    ],
  },
  {
    type: "h2",
    id: "qct",
    text: "Quantitative CT: Volumetric Density",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Measures true volumetric bone mineral density, separately assessing trabecular and cortical bone, which DEXA's areal measurement cannot distinguish.",
      "Can be performed opportunistically on CT scans acquired for other clinical indications, when appropriate calibration is in place.",
      "Delivers substantially higher radiation dose than DEXA, consistent with standard CT acquisition.",
      "Is not the basis of the internationally used T-score diagnostic categories, and its results require method-specific reference data and interpretation.",
      "Has a role in specific circumstances such as severe spinal degenerative change or vascular calcification, where DEXA's areal spine measurement is unreliable.",
    ],
  },
  {
    type: "h2",
    id: "qus",
    text: "Quantitative Ultrasound: Portable Screening",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Uses no ionising radiation, measuring ultrasound transmission characteristics through peripheral bone, most commonly the heel.",
      "Equipment is portable and lower cost than DEXA or CT, suiting community and screening settings.",
      "Provides a risk-indicative result rather than a diagnostic bone mineral density measurement equivalent to central DEXA.",
      "Is used in some pathways as a triage tool to identify patients who warrant referral for a diagnostic DEXA scan.",
      "Is not validated as a substitute for DEXA in diagnosing osteoporosis or in monitoring treatment response.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Ultrasound is a triage tool, not a diagnosis",
    text: "Quantitative ultrasound results should not be reported using the DEXA T-score diagnostic categories. A pathway using ultrasound for screening should route positive or borderline results to a diagnostic DEXA scan rather than proceeding directly to a diagnosis of osteoporosis.",
  },
  {
    type: "h2",
    id: "comparison",
    text: "Side-by-Side Comparison",
    number: 5,
  },
  {
    type: "table",
    headers: ["Attribute", "DEXA", "Quantitative CT", "Quantitative ultrasound"],
    rows: [
      ["Measurement type", "Areal bone mineral density", "Volumetric bone mineral density", "Ultrasound transmission properties of peripheral bone"],
      ["Radiation dose", "Very low", "Substantially higher, standard CT dose", "None"],
      ["Diagnostic classification basis", "Basis of the internationally used T-score categories", "Requires separate method-specific reference data", "Not equivalent to DEXA diagnostic categories"],
      ["Typical setting", "Dedicated fixed-room hospital or clinic installation", "Hospital CT department, often opportunistic use", "Portable; hospital, community or screening setting"],
      ["Established role", "Diagnosis, monitoring, treatment response", "Selected cases with spinal artefact or need for volumetric assessment", "Population screening and triage"],
      ["Longitudinal monitoring suitability", "Established, with precision assessment", "Limited compared with DEXA", "Not established for treatment monitoring"],
    ],
    caption: "Comparative characteristics of DEXA, quantitative CT and quantitative ultrasound for bone assessment.",
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The three methods answer different clinical questions rather than competing versions of the same measurement, and comparing them purely on cost or radiation dose misses their differing evidence bases.",
    clinicalInterpretation:
      "A screening-positive quantitative ultrasound result should prompt a diagnostic DEXA scan rather than a treatment decision on its own.",
    hospitalRecommendation:
      "Define, in the service pathway documentation, exactly which method is used for diagnosis, which for monitoring, and which for population screening, so referring clinicians are not left to infer this.",
  },
  {
    type: "h2",
    id: "choosing",
    text: "Choosing the Right Method for the Service",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "If the service needs to diagnose osteoporosis and monitor treatment response, DEXA is the established method with the supporting evidence base and diagnostic framework.",
      "If a patient has severe spinal degenerative change or vascular calcification affecting DEXA spine interpretation, quantitative CT may add clinically useful information in that specific case.",
      "If the goal is population-level screening or triage in a community or resource-limited setting, quantitative ultrasound can identify patients for referral to diagnostic DEXA.",
      "If opportunistic assessment from CT scans already acquired for other indications is planned, quantitative CT calibration and reference data must be established as a distinct workflow, not assumed from routine CT.",
      "Whatever the choice, define the referral pathway between methods in advance rather than allowing ad hoc substitution.",
    ],
  },
  {
    type: "h2",
    id: "integration",
    text: "Can the Methods Be Combined",
    number: 7,
  },
  {
    type: "p",
    text: "In practice, the methods are frequently used together rather than as alternatives. A community programme may use quantitative ultrasound to identify higher-risk individuals, refer them for diagnostic DEXA, and reserve quantitative CT for the specific subset of patients whose spinal DEXA result is compromised by degenerative change or severe vascular calcification. This layered approach uses each method within its area of established validation rather than asking any one technology to perform a role it was not validated for.",
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies and services DEXA systems and supports departments in defining referral pathways between screening and diagnostic bone assessment methods, drawing on installation and applications experience across bone health services.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Can quantitative ultrasound replace DEXA for osteoporosis diagnosis?",
        a: "No. It is used as a screening or triage tool in most pathways, with diagnostic decisions based on DEXA measurement.",
      },
      {
        q: "Why would a patient need quantitative CT instead of DEXA?",
        a: "Typically where severe spinal degenerative change or vascular calcification makes the DEXA spine measurement unreliable, and a volumetric or site-specific assessment is clinically needed.",
      },
      {
        q: "Does quantitative CT expose the patient to more radiation than DEXA?",
        a: "Yes, substantially more, consistent with standard CT acquisition, which is one reason it is not used as a first-line or routine monitoring method.",
      },
      {
        q: "Are T-scores from the three methods interchangeable?",
        a: "No. The internationally used T-score diagnostic categories were derived from DEXA measurement and do not transfer directly to results from quantitative CT or quantitative ultrasound.",
      },
      {
        q: "Is quantitative ultrasound suitable for monitoring treatment response?",
        a: "It is not established for this purpose. Treatment monitoring relies on DEXA measurement compared against the service's documented least significant change.",
      },
    ],
  },
  {
    type: "takeaways",
    items: [
      "DEXA remains the reference method underlying the internationally used osteoporosis diagnostic categories and treatment monitoring.",
      "Quantitative CT offers volumetric, site-specific density assessment at substantially higher radiation dose, useful in specific compromised cases.",
      "Quantitative ultrasound is a radiation-free screening and triage tool, not a diagnostic substitute for DEXA.",
      "Results from the three methods are not numerically interchangeable and require method-specific interpretation.",
      "A layered pathway using each method within its validated role is more defensible than substituting one for another.",
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
    text: "DEXA, quantitative CT and quantitative ultrasound each have a defined and different place in bone health assessment. Services that map their patient pathway to the method validated for each step, rather than treating the technologies as interchangeable, deliver diagnoses and monitoring that clinicians can rely on.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Clinical practice",
        items: [
          { label: "World Health Organization — osteoporosis diagnostic criteria", url: "https://www.who.int/" },
          { label: "International Osteoporosis Foundation — bone assessment technology resources", url: "https://www.osteoporosis.foundation/" },
        ],
      },
      {
        title: "Physics and methodology",
        items: [
          { label: "International Atomic Energy Agency — bone densitometry and quantitative imaging guidance", url: "https://www.iaea.org/" },
        ],
      },
    ],
    note: "Method selection, reference data and pathway design must follow national clinical guidance and the validated indications for each technology.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Bone health service and pathway design" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Bone densitometry systems and imaging equipment" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Clinical guidance and comparative technology synthesis",
    disclaimer:
      "Educational guidance comparing bone assessment technologies. It does not replace national clinical guidelines or manufacturer documentation.",
  },
];
