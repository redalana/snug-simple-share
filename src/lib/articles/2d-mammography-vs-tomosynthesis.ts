/**
 * 2D mammography vs tomosynthesis — Mammography cluster (comparison).
 */

import type { ContentBlock, TocItem } from "../blog";

export const MAMMO_2D_VS_DBT_TOC: TocItem[] = [
  { id: "overview", title: "The Real Question" },
  { id: "comparison", title: "Direct Comparison" },
  { id: "performance", title: "Detection, Recall and Density" },
  { id: "calcifications", title: "Calcifications and Synthetic 2D" },
  { id: "operations", title: "Operational Consequences" },
  { id: "protocols", title: "Protocol Options" },
  { id: "decision", title: "Which to Choose" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const MAMMO_2D_VS_DBT_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "The comparison between conventional two-dimensional mammography and digital breast tomosynthesis is often framed as old versus new. That framing is misleading. Both are projection-based low-energy X-ray techniques on the same platform; the difference is whether the breast is represented as a single superimposed image or as a stack of thin sections.",
      "That difference resolves one specific failure mode — overlapping tissue — and leaves others untouched. It also imposes real operational costs in reading time, data volume and biopsy capability. Whether it is worth adopting depends on the population being screened and the capacity of the service to absorb those costs.",
      "This guide compares the two techniques on the dimensions that matter clinically and operationally, and gives a decision framework for services choosing between them.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Technique comparison, detection and recall performance, breast density effects, calcification assessment and synthetic 2D, operational impact, protocol options and decision guidance",
    audience:
      "Radiologists and breast service managers, screening programme leads, medical physics, procurement teams",
    readingTime: "13 min read",
    technology: "Mammography Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "The Real Question",
    number: 1,
    body: "The question is not which produces better images, but which produces a better service for a given population and capacity.",
  },
  {
    type: "ul",
    items: [
      "Both techniques use the same low-energy spectra, compression and detector technology.",
      "Tomosynthesis adds limited-angle acquisition and reconstruction into thin sections.",
      "The clinical gain is reduced superimposition, which affects both false positives and false negatives.",
      "The operational cost is reading time, data volume and the need for guided biopsy capability.",
      "Dose is comparable per acquisition; combined 2D plus tomosynthesis is what raises it.",
      "The benefit is population-dependent, being greatest where breast density is high.",
    ],
  },
  {
    type: "h2",
    id: "comparison",
    text: "Direct Comparison",
    number: 2,
    body: "Compare across clinical, dose and operational dimensions together.",
  },
  {
    type: "table",
    headers: ["Dimension", "2D digital mammography", "Digital breast tomosynthesis"],
    rows: [
      ["Tissue superimposition", "Present; principal limitation", "Substantially reduced"],
      ["Mass and distortion conspicuity", "Good; degraded in dense tissue", "Improved, particularly in dense tissue"],
      ["Microcalcification assessment", "Excellent", "Comparable; 2D or synthetic 2D remains valuable"],
      ["Recall rate", "Higher, driven by overlap-related findings", "Generally lower"],
      ["Cancer detection rate", "Baseline", "Generally higher, especially invasive cancers"],
      ["Dose per acquisition", "Baseline", "Broadly comparable on modern systems"],
      ["Acquisition time under compression", "Short", "Longer; more motion-sensitive"],
      ["Reading time", "Short", "Substantially longer"],
      ["Data volume per examination", "Modest", "Order-of-magnitude larger"],
      ["Biopsy requirement", "Conventional stereotactic sufficient", "Tomosynthesis-guided biopsy needed for tomosynthesis-only findings"],
      ["Capital and IT cost", "Lower", "Higher, mainly in storage and workstations"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "One clinical gain, several operational costs",
    clinicalInterpretation:
      "Tomosynthesis reliably improves the assessment of masses and distortions and reduces recall for overlapping normal tissue. It does not improve calcification detection, does not remove the effect of density on sensitivity, and does not shorten anything.",
    hospitalRecommendation:
      "Adopt tomosynthesis where the population has substantial dense-breast prevalence, recall rate is a concern, and reading capacity plus IT infrastructure can absorb the load. Otherwise a well-run 2D service with excellent positioning outperforms a poorly resourced tomosynthesis service.",
  },
  {
    type: "h2",
    id: "performance",
    text: "Detection, Recall and Density",
    number: 3,
    body: "Benefit magnitude varies systematically with breast composition.",
  },
  {
    type: "table",
    headers: ["Breast composition", "2D performance", "Tomosynthesis effect"],
    rows: [
      ["Predominantly fatty", "Already high sensitivity", "Marginal gain; recall may still fall"],
      ["Scattered fibroglandular", "Good, occasional overlap ambiguity", "Moderate gain in recall reduction"],
      ["Heterogeneously dense", "Overlap frequently limits assessment", "Substantial gain in detection and recall"],
      ["Extremely dense", "Sensitivity materially reduced", "Meaningful gain, though sensitivity remains limited"],
      ["Post-surgical or distorted", "Difficult to interpret", "Helpful in separating scar from recurrence"],
      ["Implants present", "Requires specific technique", "Benefit depends on technique and system capability"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "Tomosynthesis reduces overlap, not density",
    text: "Dense tissue attenuates similarly to many lesions regardless of how the breast is sectioned. Tomosynthesis separates structures in depth and thereby improves conspicuity, but it does not make dense breasts behave like fatty breasts, and it does not remove the rationale for supplementary imaging pathways where they exist.",
  },
  {
    type: "h2",
    id: "calcifications",
    text: "Calcifications and Synthetic 2D",
    number: 4,
    body: "Calcification assessment is the one area where projection imaging retains a distinct role.",
  },
  {
    type: "ul",
    items: [
      "Calcification clusters are often better appreciated on a projection image than on individual thin sections.",
      "Tomosynthesis sections can distribute a cluster across several slices, reducing its gestalt appearance.",
      "This is the main reason a 2D-type image remains part of the examination.",
      "Synthetic 2D reconstructed from the tomosynthesis data provides that projection view without additional exposure.",
      "Large-scale evidence supports synthetic 2D as an acceptable substitute for true 2D, including for calcifications.",
      "Radiologists require training on synthetic 2D appearances, which differ subtly from true 2D.",
      "High-contrast coarse calcifications also generate out-of-plane artefacts in tomosynthesis reconstructions.",
    ],
  },
  {
    type: "h2",
    id: "operations",
    text: "Operational Consequences",
    number: 5,
    body: "The costs of tomosynthesis fall almost entirely outside the acquisition room.",
  },
  {
    type: "table",
    headers: ["Area", "Consequence", "Requirement"],
    rows: [
      ["Reading capacity", "Fewer cases per session, compounded by double reading", "Recalculate sessions and staffing before go-live"],
      ["PACS storage", "Large increase in data per examination", "Storage capacity and retention policy planning"],
      ["Network and workstations", "Large studies must load and scroll instantly", "Hardware and bandwidth specified for tomosynthesis"],
      ["Biopsy pathway", "Findings visible only on tomosynthesis must be sampled", "Tomosynthesis-guided biopsy capability"],
      ["Training", "Reader training on tomosynthesis and synthetic 2D", "Structured programme, not vendor demonstration"],
      ["Quality assurance", "Additional reconstruction and dose tests", "Physics acceptance and expanded QA programme"],
      ["Patient experience", "Longer compression during acquisition", "Communication and technique to limit motion"],
      ["Programme reporting", "Indicators shift after adoption", "Audit recall and detection across the transition"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Adopting tomosynthesis without reading capacity",
    text: "The predictable result is reading backlogs, overrunning sessions and pressure to read faster — which erodes the accuracy gain the technology was bought for. Reading capacity is not a secondary consideration; it is the primary implementation constraint.",
  },
  {
    type: "h2",
    id: "protocols",
    text: "Protocol Options",
    number: 6,
    body: "Three practical configurations, with different dose and workload profiles.",
  },
  {
    type: "table",
    headers: ["Protocol", "Dose", "Assessment"],
    rows: [
      ["2D only", "Lowest", "Established baseline; efficient reading; overlap limitation remains"],
      ["Tomosynthesis + synthetic 2D", "Comparable to 2D only", "The usual target configuration; requires reader training"],
      ["Combined true 2D + tomosynthesis", "Approximately double", "Reasonable transition arrangement; not a permanent state"],
      ["Tomosynthesis for selected groups", "Targeted", "Used where capacity is limited; requires clear selection criteria"],
      ["Tomosynthesis in diagnostic work only", "Targeted", "Common first step before screening adoption"],
    ],
  },
  {
    type: "h2",
    id: "decision",
    text: "Which to Choose",
    number: 7,
    body: "Decide from population, capacity and pathway completeness.",
  },
  {
    type: "ul",
    items: [
      "Choose tomosynthesis where dense-breast prevalence is substantial and recall rate is a service concern.",
      "Choose tomosynthesis where diagnostic problem-solving volume is high and characterisation matters.",
      "Choose 2D where reading capacity is already constrained and cannot be expanded — a fast, well-positioned 2D service beats a delayed tomosynthesis service.",
      "Buy a tomosynthesis-capable platform even when starting in 2D, with the upgrade cost agreed in writing.",
      "Do not adopt tomosynthesis for screening without tomosynthesis-guided biopsy capability.",
      "Confirm PACS storage and workstation performance before committing, not afterwards.",
      "If starting with combined acquisition, set an explicit review date for moving to synthetic 2D.",
      "Audit recall, detection and reading times across the transition so the effect is measured, not assumed.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Is 2D mammography obsolete?",
        a: "No. It remains an effective, well-validated screening and diagnostic technique, and a well-run 2D service with excellent positioning and reading conditions performs strongly. Tomosynthesis improves on it, at a real operational cost.",
      },
      {
        q: "Does tomosynthesis eliminate the need for a 2D image?",
        a: "Not in practice. A projection-type image remains valuable for calcification assessment and for comparison with prior examinations, which is why synthetic 2D is generated from the tomosynthesis data.",
      },
      {
        q: "Which patients benefit most?",
        a: "Those with heterogeneously or extremely dense breasts, where superimposition most limits conventional mammography, and those with post-surgical distortion requiring characterisation.",
      },
      {
        q: "Is combined 2D and tomosynthesis ever justified?",
        a: "As a transition arrangement while readers build confidence in synthetic 2D, yes. As a permanent protocol it doubles dose and reading volume for benefit that synthetic 2D largely provides.",
      },
      {
        q: "What single factor should decide the choice?",
        a: "Whether the service can resource the reading time, IT infrastructure and guided biopsy capability that tomosynthesis requires. If it can, tomosynthesis is generally the better clinical choice; if it cannot, adopting it will degrade the service it was meant to improve.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Choosing between 2D and tomosynthesis for your service?",
    subheading:
      "AbuFarha Medical supplies digital mammography and tomosynthesis systems and supports services with capacity modelling, IT planning and reader training.",
    technology: "Mammography Systems",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Applications", credential: "Breast imaging applications and reader training" },
      { role: "Technical review", name: "AbuFarha Biomedical Engineering", credential: "Mammography and tomosynthesis installation and QA" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Published prospective screening trials, European and national screening guidance, and IEC equipment standards",
    disclaimer:
      "Protocol choice and screening programme requirements are jurisdiction-specific. Follow your national screening programme, regulator and medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Evidence base",
        items: [
          { label: "Published prospective screening trials comparing tomosynthesis with digital mammography" },
          { label: "Systematic reviews of synthetic 2D versus digital mammography" },
        ],
      },
      {
        title: "Programme guidance",
        items: [
          { label: "European guidelines for quality assurance in breast cancer screening and diagnosis" },
          { label: "National screening programme guidance on tomosynthesis adoption" },
        ],
      },
      {
        title: "Equipment standards",
        items: [
          { label: "IEC 60601-2-45 for mammographic and tomosynthesis X-ray equipment" },
          { label: "National diagnostic reference levels for mammography and tomosynthesis" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as evidence and programmes evolve.",
  },
  {
    type: "takeaways",
    items: [
      "Tomosynthesis resolves superimposition; it does not improve calcification detection or negate breast density.",
      "Detection generally rises and recall generally falls, with the largest gains in dense breasts.",
      "Dose per acquisition is comparable; combined true 2D plus tomosynthesis is what doubles it.",
      "Synthetic 2D provides the projection view without extra exposure, with reader training.",
      "Reading time, PACS storage and workstation performance are the real adoption constraints.",
      "Screening with tomosynthesis requires tomosynthesis-guided biopsy to complete the pathway.",
      "A well-resourced 2D service outperforms an under-resourced tomosynthesis service.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "Tomosynthesis is the better technique; whether it is the better service depends on what surrounds it.",
  },
  {
    type: "p",
    text: "Services with reading capacity, IT headroom and guided biopsy capability should adopt it and will see recall and detection improve. Services without those should buy a tomosynthesis-capable platform, run excellent 2D in the meantime, and switch when the surrounding capacity exists.",
  },
];
