/**
 * Hitachi manufacturer cluster — "Hitachi Aperto Inspire Open MRI: System Guide"
 */

import type { ContentBlock, TocItem } from "../blog";

export const APERTO_INSPIRE_TOC: TocItem[] = [
  { id: "platform", title: "What the Aperto Inspire Is" },
  { id: "open-design", title: "Why Open-Bore Design Matters" },
  { id: "clinical", title: "Clinical Scope" },
  { id: "siting", title: "Siting and Installation" },
  { id: "operations", title: "Operating a Lower-Field Open System" },
  { id: "service", title: "Service and Lifecycle" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const APERTO_INSPIRE_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "The Hitachi Aperto Inspire is an open-design MRI system built on a permanent magnet rather than a superconducting magnet. AbuFarha Medical supplies, installs, commissions and services Aperto Inspire systems.",
      "Open MRI exists to solve an access problem rather than a physics problem. Patients who cannot tolerate a closed bore — through claustrophobia, body habitus, paediatric anxiety or positioning constraints — are otherwise either sedated, scanned poorly, or not scanned at all. An open system converts those patients from exclusions into examinations.",
      "This guide explains what the platform is, where it fits clinically, what its siting profile looks like compared with superconducting systems, and how it is operated and maintained.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Open permanent-magnet architecture, patient access advantages, clinical scope, siting profile, operating considerations and lifecycle service",
    audience:
      "Radiologists and MRI radiographers, outpatient and orthopaedic service planners, biomedical engineering teams, capital procurement committees",
    readingTime: "12 min read",
    technology: "MRI Scanners",
  },
  {
    type: "h2",
    id: "platform",
    text: "What the Aperto Inspire Is",
    number: 1,
    body: "A permanent-magnet MRI system with an open patient aperture.",
  },
  {
    type: "p",
    text: "Instead of a cylindrical superconducting magnet cooled by liquid helium, the system uses a permanent magnet arrangement with the patient positioned in an open gap. The immediate consequences are architectural: no cryogen supply, no quench pipe, a smaller fringe field footprint, and a patient environment that is open on both sides rather than enclosed.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "No helium changes the whole service model",
    text: "Permanent-magnet MRI removes cryogen deliveries, quench-pipe infrastructure and cold-head maintenance from the operating picture — a substantial simplification for sites without established helium logistics.",
  },
  {
    type: "h2",
    id: "open-design",
    text: "Why Open-Bore Design Matters",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Claustrophobic patients complete examinations that would otherwise be abandoned or require sedation.",
      "Larger patients can be positioned where a closed bore is dimensionally impractical.",
      "Paediatric patients can be accompanied and reassured within sight and reach of a parent or carer.",
      "Some positioning approaches for limbs and joints are easier in an open aperture.",
      "Cancelled and abandoned examinations are a real cost; open access reduces them measurably in the patient groups that generate them.",
    ],
  },
  {
    type: "h2",
    id: "clinical",
    text: "Clinical Scope",
    number: 3,
  },
  {
    type: "table",
    headers: ["Application", "Fit for an open lower-field system", "Note"],
    rows: [
      ["Spine imaging", "Strong", "High-volume outpatient indication and a core use case"],
      ["Musculoskeletal joints", "Strong", "Positioning flexibility is a practical advantage"],
      ["Routine neuro imaging", "Suitable", "Sequence times are longer than at higher field"],
      ["Body imaging", "Selective", "Breath-hold and motion sensitivity require protocol care"],
      ["Advanced functional and spectroscopic work", "Not the platform's purpose", "High-field superconducting systems remain the reference for these"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Open lower-field MRI is a complementary capability, not a substitute for a high-field system in a tertiary imaging department.",
    clinicalInterpretation:
      "For spine and musculoskeletal outpatient workload — the bulk of many MRI lists — diagnostic adequacy is routinely achievable.",
    hospitalRecommendation:
      "Define the referral protocol that routes cases to the open system deliberately, rather than using it as overflow capacity.",
  },
  {
    type: "h2",
    id: "siting",
    text: "Siting and Installation",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Radiofrequency shielding is still required; MRI of any field strength needs a controlled RF environment.",
      "Fringe field extent is smaller than for a comparable superconducting magnet, which often makes siting feasible in buildings where a high-field system is not.",
      "Floor loading must be confirmed: permanent magnets are heavy, and the load is concentrated.",
      "MRI safety zoning, screening and access control apply in full — an open magnet is permanently at field and never \"off\".",
      "Environmental stability matters: permanent magnets are temperature-sensitive, so room climate control is a performance requirement, not a comfort one.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Always-on field, always-on discipline",
    text: "Because the magnet cannot be ramped down like a superconducting system in routine practice, ferromagnetic screening and Zone control must be enforced with exactly the same rigour as at high field.",
  },
  {
    type: "h2",
    id: "operations",
    text: "Operating a Lower-Field Open System",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Sequence times are longer for equivalent signal-to-noise; list templates must reflect real acquisition times rather than high-field assumptions.",
      "Coil selection and positioning have proportionally greater influence on image quality than at high field.",
      "Protocol libraries should be built for the platform, not copied from a superconducting system.",
      "Patient communication is a throughput tool: settled patients move faster than sedated ones.",
      "Room temperature stability should be monitored, because drift shows up as image quality variation.",
    ],
  },
  {
    type: "h2",
    id: "service",
    text: "Service and Lifecycle",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Preventive maintenance covering gradient and RF subsystems, coils, patient table mechanics and cooling.",
      "Coil inventory management: coils are the most frequently damaged and most performance-critical accessories on any MRI system.",
      "No cryogen logistics, but continued attention to environmental control and power quality.",
      "Software supportability confirmation, including version level and available update path.",
      "Radiographer training and MRI safety competency records, refreshed on a defined cycle.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs, commissions and supports Hitachi MRI systems including the Aperto Inspire, and provides the biomedical engineering, spare parts and MRI safety training a magnetic resonance service requires.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Is an open MRI diagnostically inferior to a closed system?",
        a: "It is different rather than uniformly inferior. Lower field strength means longer acquisitions for equivalent signal, so protocol design matters more — but for spine and musculoskeletal work, diagnostic examinations are routinely achieved.",
      },
      {
        q: "Does a permanent-magnet MRI need liquid helium?",
        a: "No. That is one of its principal operational advantages: no cryogen deliveries, no quench pipe and no cold-head service regime.",
      },
      {
        q: "Can the magnet be switched off for safety?",
        a: "Not in routine practice. A permanent magnet is always at field, so ferromagnetic screening and MRI zoning must be enforced continuously.",
      },
      {
        q: "What room does an Aperto Inspire need?",
        a: "An RF-shielded room with confirmed floor loading, stable temperature control, MRI safety zoning and controlled access. The fringe field footprint is typically smaller than for a superconducting magnet of comparable purpose.",
      },
      {
        q: "Who benefits most from an open system?",
        a: "Claustrophobic patients, larger patients, anxious paediatric patients and services with heavy spine and musculoskeletal outpatient workload.",
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
    text: "The Aperto Inspire earns its place by converting difficult patients into completed examinations and by removing cryogen infrastructure from the operating model. Specify it against a defined referral profile, build protocols for the platform itself, and enforce MRI safety exactly as at high field.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Magnetic resonance service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "MRI siting, installation and preventive maintenance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer documentation and field service practice synthesis",
    disclaimer:
      "Educational guidance on open permanent-magnet MRI systems. It does not replace manufacturer documentation, MRI safety policy or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer technical documentation and operating instructions for installed MRI systems." },
      { label: "Institutional MRI safety policy, screening procedures and zoning documentation." },
      { label: "National guidance on magnetic resonance safety and controlled access areas." },
    ],
  },
];
