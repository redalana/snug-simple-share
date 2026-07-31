/**
 * Service knowledge — "Clinical Training for Imaging Teams"
 */

import type { ContentBlock, TocItem } from "../blog";

export const CLINICAL_TRAINING_TOC: TocItem[] = [
  { id: "why", title: "Why Training Is a Capital Decision" },
  { id: "scope", title: "What Training Must Cover" },
  { id: "levels", title: "Training Levels by Role" },
  { id: "timing", title: "Timing Around Installation" },
  { id: "competency", title: "Competency Records and Reassessment" },
  { id: "measuring", title: "Measuring Whether Training Worked" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const CLINICAL_TRAINING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Clinical training converts installed capability into clinical output. AbuFarha Medical delivers application and operator training as part of every system supply, alongside installation, commissioning and ongoing biomedical engineering support.",
      "Equipment purchased without training is routinely operated at a fraction of its capability: default protocols stay unmodified, advanced acquisition options go unused, dose is higher than necessary, and avoidable repeat examinations consume the throughput the investment was meant to create.",
      "This guide sets out what clinical training should cover, how it should be sequenced around installation, and how a hospital can verify that it produced a measurable change in practice rather than a signed attendance sheet.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Training scope, role-based training levels, sequencing around installation, competency records and outcome measurement",
    audience:
      "Imaging and theatre department managers, radiographers and technologists, clinical leads, biomedical engineering teams, procurement committees",
    readingTime: "10 min read",
    technology: "Clinical Training",
  },
  {
    type: "h2",
    id: "why",
    text: "Why Training Is a Capital Decision",
    number: 1,
    body: "Training determines how much of the purchased capability reaches patients.",
  },
  {
    type: "p",
    text: "The capability difference between a well-trained and an untrained team on the same system is larger than the capability difference between most competing systems. That makes training part of the equipment business case rather than a departmental extra — and it makes training scope a term to negotiate at purchase, when it has commercial weight, rather than after handover when it does not.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Negotiate training at order, not at handover",
    text: "Training days, refresher sessions and the trainee list are far easier to secure while the purchase is being agreed. Specify the number of sessions, the roles covered and the refresher timing in the order documentation.",
  },
  {
    type: "h2",
    id: "scope",
    text: "What Training Must Cover",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Safe operation: safety systems, emergency procedures, patient screening and the specific hazards of the modality.",
      "Protocol use and protocol modification, including who is authorised to change a protocol and how a change is documented.",
      "Image quality: what good looks like on this system, and the systematic order in which to investigate when it degrades.",
      "Dose or exposure management where applicable, including the operator levers that actually change dose.",
      "Workflow integration: patient identification, worklist handling, archiving, prior retrieval and reporting handover.",
      "First-line fault recognition: what the operator should attempt, what must be escalated, and what must never be attempted.",
      "Documentation: what is recorded per examination, and why the record matters for audit and service.",
    ],
  },
  {
    type: "h2",
    id: "levels",
    text: "Training Levels by Role",
    number: 3,
  },
  {
    type: "table",
    headers: ["Role", "Training focus", "Depth required"],
    rows: [
      ["Radiographer / technologist", "Daily operation, positioning, protocol use, quality control", "Full operational competency, assessed"],
      ["Clinical lead / reporting clinician", "Capability envelope, protocol governance, image interpretation implications", "Sufficient to govern protocol decisions"],
      ["Superuser", "Advanced options, protocol authoring, troubleshooting first line", "Deep; the department's internal reference point"],
      ["Biomedical engineer", "Preventive maintenance scope, fault triage, service interfaces, safety checks", "Technical, with escalation boundaries defined"],
      ["Department manager", "Utilisation, throughput assumptions, service and training obligations", "Operational rather than technical"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "The superuser role is the highest-leverage investment: one deeply trained operator raises the standard of every shift they work on.",
    clinicalInterpretation:
      "Departments without an identified superuser tend to drift back to default protocols within months of installation.",
    hospitalRecommendation:
      "Name superusers before training is delivered, and protect their time to support colleagues afterwards.",
  },
  {
    type: "h2",
    id: "timing",
    text: "Timing Around Installation",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Pre-installation briefing so the team understands what is arriving and what will change in their workflow.",
      "Applications training immediately at clinical go-live, when the system is available and the learning is applied the same day.",
      "A follow-up session several weeks later, once the team has accumulated real questions from real cases — this is where advanced capability is genuinely adopted.",
      "Refresher training on a defined cycle, and mandatory induction training for new staff rather than informal peer handover.",
      "Additional training triggered by software upgrades that change workflow or protocol behaviour.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Single-event training decays",
    text: "Training delivered only at go-live is the most common reason advanced capability is never used. The second session, weeks later, is usually the one that changes practice.",
  },
  {
    type: "h2",
    id: "competency",
    text: "Competency Records and Reassessment",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Records held per staff member and per system, not per department — staff move and systems differ.",
      "Assessed competency rather than attendance, with a defined standard for what independent operation requires.",
      "A named process for staff who join after the installation programme has finished.",
      "Reassessment on a defined interval, and after any extended absence from the modality.",
      "Records available for accreditation, radiation protection audit and incident investigation.",
    ],
  },
  {
    type: "h2",
    id: "measuring",
    text: "Measuring Whether Training Worked",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Technical repeat and reject rates before and after training.",
      "Use of advanced protocols and acquisition options, measured from system logs rather than assumed.",
      "Dose or exposure indices trending toward local reference levels where the modality uses ionising radiation.",
      "Examination time distribution, which reflects positioning and workflow confidence.",
      "First-line fault resolution rate — how often the department solves an issue without a service call.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical delivers clinical and operator training alongside installation and commissioning, and supports departments with refresher sessions, superuser development and engineer training as part of the ongoing service relationship.",
  },
  {
    type: "faq",
    items: [
      {
        q: "How much training should be included with a new system?",
        a: "Enough for assessed independent operation by every staff member who will use it, plus a follow-up session after several weeks of clinical use and a defined refresher cycle. Specify it in the order rather than after handover.",
      },
      {
        q: "Who should be trained first?",
        a: "Named superusers and the biomedical engineer, followed by the wider operator group. Superusers become the department's internal support layer, which reduces both downtime and dependence on external visits.",
      },
      {
        q: "Is training required after a software upgrade?",
        a: "Whenever the upgrade changes workflow, protocol behaviour or safety-relevant functions. Treating upgrades as purely technical events is how protocol drift and avoidable errors begin.",
      },
      {
        q: "How is training effectiveness demonstrated?",
        a: "Through measurable change: repeat rates, advanced protocol usage from system logs, dose indices, examination times and first-line fault resolution — not through attendance records.",
      },
      {
        q: "Does AbuFarha Medical train biomedical engineers as well as clinical staff?",
        a: "Yes. Engineer training covers preventive maintenance scope, fault triage, safety checks and clearly defined escalation boundaries alongside clinical operator training.",
      },
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
    text: "Training is what turns an installed system into clinical capability. Specify it at order, sequence it around go-live with a genuine follow-up session, record assessed competency per person, and measure the result in repeat rates and protocol usage. Departments that do this use what they bought; departments that do not run premium equipment on default settings.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Imaging applications training practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Engineer training and commissioning support" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Field applications and service practice synthesis",
    disclaimer:
      "Educational guidance on clinical training programmes. It does not replace manufacturer training requirements or local governance policy.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer operator and applications training documentation for installed systems." },
      { label: "Institutional competency frameworks and training records." },
      { label: "Departmental quality assurance data including repeat and reject rate audits." },
    ],
  },
];
