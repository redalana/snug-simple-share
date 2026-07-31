/**
 * Digital breast tomosynthesis explained — Mammography cluster (technology).
 */

import type { ContentBlock, TocItem } from "../blog";

export const DBT_TOC: TocItem[] = [
  { id: "overview", title: "What Tomosynthesis Is" },
  { id: "how", title: "How Acquisition and Reconstruction Work" },
  { id: "evidence", title: "Clinical Benefit and Evidence" },
  { id: "dose", title: "Dose and Synthetic 2D Imaging" },
  { id: "workflow", title: "Reading Workflow and Storage" },
  { id: "implementation", title: "Implementing Tomosynthesis" },
  { id: "limits", title: "Limitations and Misconceptions" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const DBT_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Digital breast tomosynthesis addresses the single greatest weakness of conventional mammography: superimposition. In a two-dimensional projection, normal fibroglandular tissue can mimic a lesion and a real lesion can be concealed by overlying tissue. Tomosynthesis acquires multiple low-dose projections across a small angular range and reconstructs thin sections through the breast, largely removing that ambiguity.",
      "Its clinical effect is therefore twofold: fewer women recalled for findings that turn out to be overlapping normal tissue, and better characterisation of lesions that are real. Both matter in a screening programme, where recall carries anxiety, cost and capacity consequences.",
      "This guide explains the acquisition and reconstruction process, what the evidence supports, how synthetic 2D imaging keeps dose acceptable, and what implementing tomosynthesis actually demands of reading time, storage and training.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Acquisition and reconstruction principles, clinical benefit, dose and synthetic 2D, reading workflow and storage impact, implementation requirements and limitations",
    audience:
      "Radiologists and mammographers, breast service managers, medical physics, IT and procurement teams",
    readingTime: "14 min read",
    technology: "Mammography Systems",
  },
  {
    type: "h2",
    id: "overview",
    text: "What Tomosynthesis Is",
    number: 1,
    body: "A limited-angle tomographic technique that produces thin sections rather than a single projection.",
  },
  {
    type: "ul",
    items: [
      "The X-ray tube moves through a limited arc while the compressed breast remains stationary.",
      "A series of low-dose projection images is acquired across that arc.",
      "Reconstruction produces sections, typically one millimetre apart, through the breast volume.",
      "Overlapping structures are separated in depth, reducing tissue superimposition.",
      "In-plane resolution remains high; depth resolution is limited by the small angular range.",
      "It is not cross-sectional imaging in the CT sense — the angular coverage is far smaller.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "clinical-insight",
    title: "The problem being solved is overlap, not resolution",
    text: "Tomosynthesis does not make mammography sharper. It makes findings separable in depth, which converts a large proportion of ambiguous overlapping-tissue appearances into confidently normal ones — and reveals a proportion of masses that projection imaging obscured.",
  },
  {
    type: "h2",
    id: "how",
    text: "How Acquisition and Reconstruction Work",
    number: 2,
    body: "The angular range, number of projections and reconstruction method define system behaviour.",
  },
  {
    type: "table",
    headers: ["Parameter", "What it controls", "Practical effect"],
    rows: [
      ["Angular range of tube travel", "Depth separation capability", "Wider range improves depth resolution; increases acquisition time"],
      ["Number of projections", "Noise distribution across the volume", "More projections spread dose but can increase motion sensitivity"],
      ["Total dose per acquisition", "Image quality across the volume", "Constrained by screening dose expectations"],
      ["Reconstruction algorithm", "Artefact behaviour and lesion conspicuity", "Iterative methods generally reduce out-of-plane artefact"],
      ["Section thickness and spacing", "Number of images to read", "Directly drives reading time and storage volume"],
      ["Acquisition time under compression", "Motion risk", "Longer acquisitions are more susceptible to patient movement"],
      ["Synthetic 2D generation", "Whether a separate 2D exposure is needed", "Avoids doubling dose in combined protocols"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary: "Acquisition time is a clinical parameter",
    clinicalInterpretation:
      "Because the breast remains compressed throughout the sweep, longer acquisitions increase both discomfort and motion blur. Motion in tomosynthesis degrades the reconstruction across sections, not just one image.",
    hospitalRecommendation:
      "Include measured acquisition time under compression in the evaluation, and test on real patients across a range of breast sizes rather than accepting phantom timings.",
  },
  {
    type: "h2",
    id: "evidence",
    text: "Clinical Benefit and Evidence",
    number: 3,
    body: "The benefit pattern is consistent across large studies, with the magnitude varying by population and reading model.",
  },
  {
    type: "table",
    headers: ["Outcome", "Observed effect", "Interpretation"],
    rows: [
      ["Recall rate", "Generally reduced compared with 2D alone", "Fewer recalls for superimposed normal tissue"],
      ["Cancer detection", "Increased detection, particularly of invasive cancers", "Improved conspicuity of masses and distortions"],
      ["Dense breasts", "Larger relative benefit", "Superimposition is the dominant limitation in dense tissue"],
      ["Microcalcification assessment", "Comparable; 2D or synthetic 2D remains important", "Calcification clusters are often better appreciated on projection images"],
      ["Interval cancers", "Some evidence of reduction; varies by programme", "Depends on screening interval and population"],
      ["Reading time", "Consistently increased", "The main operational cost of adoption"],
      ["Biopsy yield", "Improved characterisation before biopsy", "Fewer benign biopsies in some settings"],
    ],
  },
  {
    type: "h2",
    id: "dose",
    text: "Dose and Synthetic 2D Imaging",
    number: 4,
    body: "The dose question is settled by how the protocol is configured, not by the technology itself.",
  },
  {
    type: "ul",
    items: [
      "A tomosynthesis acquisition delivers dose broadly comparable to a single 2D acquisition on modern systems.",
      "Acquiring both true 2D and tomosynthesis approximately doubles dose, which is why combined protocols are scrutinised.",
      "Synthetic 2D images reconstructed from the tomosynthesis data provide a projection-like image with no additional exposure.",
      "Synthetic 2D has been shown to be an acceptable substitute for true 2D in many programmes, including for calcification assessment.",
      "Programme dose audit should compare like with like: per-view dose and total examination dose.",
      "Dose must remain within national diagnostic reference levels for the technique in use.",
      "Where a programme mandates 2D, synthetic 2D is the route to adopting tomosynthesis without a dose penalty.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "common-mistakes",
    title: "Running combined 2D plus tomosynthesis indefinitely",
    text: "Combined acquisition is a reasonable transition arrangement while radiologists build confidence in synthetic 2D. Left in place permanently, it doubles dose and reading volume for a benefit that synthetic 2D largely provides. Set a defined review point when adopting it.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "Reading Workflow and Storage",
    number: 5,
    body: "The operational impact of tomosynthesis falls on reading and IT, not on acquisition.",
  },
  {
    type: "table",
    headers: ["Area", "Impact", "Mitigation"],
    rows: [
      ["Reading time per case", "Substantially longer than 2D", "Reading session planning, workstation tools, cine review"],
      ["Reading list capacity", "Fewer cases per session", "Recalculate sessions before go-live, not after"],
      ["Workstation performance", "Large volumes must load and scroll instantly", "Specify hardware and network for tomosynthesis, not 2D"],
      ["Display requirements", "High-luminance calibrated displays essential", "Include in the capital case"],
      ["PACS storage", "Order-of-magnitude increase in data per examination", "Plan capacity and retention policy in advance"],
      ["Network bandwidth", "Large studies across the network, including remote reading", "Test remote reading before committing"],
      ["Prior comparison", "Comparing tomosynthesis with 2D priors", "Hanging protocols configured deliberately"],
      ["Double reading and arbitration", "Doubles the reading time increase", "Model the effect on programme capacity"],
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Storage and bandwidth decide whether adoption feels successful",
    text: "The most common practical complaint after tomosynthesis go-live is not image quality but slow loading and scrolling. Specify workstation hardware, network capacity and PACS storage for tomosynthesis data volumes at procurement, because retrofitting is disruptive and expensive.",
  },
  {
    type: "h2",
    id: "implementation",
    text: "Implementing Tomosynthesis",
    number: 6,
    body: "Treat adoption as a service change with a training and capacity plan.",
  },
  {
    type: "ul",
    items: [
      "Decide the protocol: tomosynthesis with synthetic 2D, or combined, with a review date if combined.",
      "Recalculate reading capacity and adjust session planning before the first patient.",
      "Train radiologists specifically in tomosynthesis reading, including out-of-plane artefacts and calcification assessment.",
      "Train mammographers in acquisition, motion avoidance and compression under a longer exposure.",
      "Confirm workstation, display, network and storage readiness with a live volume test.",
      "Update quality assurance to include tomosynthesis-specific tests and physics acceptance.",
      "Ensure biopsy capability aligns: tomosynthesis-guided biopsy where findings are visible only on tomosynthesis.",
      "Audit recall rate, detection and reading times before and after adoption.",
      "Update patient information and consent material where the examination changes.",
    ],
  },
  {
    type: "h2",
    id: "limits",
    text: "Limitations and Misconceptions",
    number: 7,
    body: "Tomosynthesis is a substantial improvement, not a resolution of every limitation.",
  },
  {
    type: "ul",
    items: [
      "Depth resolution is limited by the small angular range; sections are not isotropic like CT.",
      "Out-of-plane artefacts from high-contrast structures such as coarse calcifications remain visible.",
      "Motion during the sweep degrades multiple sections and can require a repeat.",
      "It does not replace ultrasound, MRI or biopsy in the diagnostic pathway.",
      "It does not eliminate the effect of breast density on sensitivity, only reduces superimposition.",
      "It increases reading burden permanently, which must be resourced rather than absorbed.",
      "Findings visible only on tomosynthesis require guided biopsy capability to act on.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "Does tomosynthesis double the radiation dose?",
        a: "Not by itself. A tomosynthesis acquisition is broadly comparable to a 2D acquisition on modern systems. Dose approximately doubles only when true 2D and tomosynthesis are both acquired, which is why synthetic 2D is used instead.",
      },
      {
        q: "Is synthetic 2D good enough to replace true 2D?",
        a: "Large-scale evidence supports synthetic 2D as an acceptable replacement in screening, including for calcification assessment, provided radiologists are trained on its appearance. Many programmes adopt combined imaging briefly and then transition.",
      },
      {
        q: "How much longer does reading take?",
        a: "Meaningfully longer per case, and the effect compounds under double reading. The practical consequence is fewer cases per reading session, which must be planned for before go-live rather than discovered afterwards.",
      },
      {
        q: "Do we need tomosynthesis-guided biopsy?",
        a: "If tomosynthesis is used clinically, yes in practice. Lesions seen only on tomosynthesis cannot be reliably targeted with conventional stereotactic technique, and a service that can detect but not sample them has an incomplete pathway.",
      },
      {
        q: "Who benefits most from tomosynthesis?",
        a: "Patients with dense breasts, where superimposition most limits conventional mammography, and screening programmes concerned about recall rates. Benefit is smaller in predominantly fatty breasts where projection imaging already performs well.",
      },
    ],
  },
  {
    type: "articleCta",
    heading: "Adopting tomosynthesis in your breast service?",
    subheading:
      "AbuFarha Medical supplies and installs digital breast tomosynthesis systems and supports services with physics acceptance, workflow planning and reader training.",
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
    evidenceLevel: "European and national breast screening guidance, published prospective screening trials of tomosynthesis, and IEC equipment standards",
    disclaimer:
      "Protocol choice, dose reference levels and screening programme requirements are jurisdiction-specific. Follow your national screening programme and medical physics expert.",
  },
  {
    type: "referenceGroups",
    groups: [
      {
        title: "Screening guidance",
        items: [
          { label: "European guidelines for quality assurance in breast cancer screening and diagnosis" },
          { label: "National breast screening programme guidance on tomosynthesis use" },
        ],
      },
      {
        title: "Evidence base",
        items: [
          { label: "Published prospective screening trials comparing tomosynthesis with digital mammography" },
          { label: "Systematic reviews of synthetic 2D versus digital mammography" },
        ],
      },
      {
        title: "Equipment and QA standards",
        items: [
          { label: "IEC 60601-2-45 for mammographic and tomosynthesis X-ray equipment" },
          { label: "National quality assurance protocols for digital breast tomosynthesis" },
        ],
      },
    ],
    note: "References are cited as authority classes rather than deep links so the article remains accurate as evidence and programmes evolve.",
  },
  {
    type: "takeaways",
    items: [
      "Tomosynthesis separates overlapping tissue in depth; it does not increase resolution.",
      "It generally reduces recall and increases cancer detection, with the largest benefit in dense breasts.",
      "Dose is comparable to 2D per acquisition; combined 2D plus tomosynthesis is what doubles it.",
      "Synthetic 2D is the route to adoption without a dose penalty, with reader training.",
      "Reading time increases permanently and must be resourced in session planning.",
      "Workstation, network and PACS storage must be specified for tomosynthesis data volumes.",
      "Tomosynthesis-guided biopsy is needed to act on findings visible only on tomosynthesis.",
    ],
  },
  {
    type: "h2",
    id: "conclusion",
    text: "Conclusion",
    number: 8,
    body: "Tomosynthesis is a genuine improvement whose cost is operational rather than clinical.",
  },
  {
    type: "p",
    text: "Services that plan reading capacity, IT infrastructure, reader training and biopsy capability before go-live realise the recall and detection benefits smoothly. Services that install the hardware and adjust afterwards spend their first year managing slow workstations, overrunning reading sessions and findings they cannot sample.",
  },
];
