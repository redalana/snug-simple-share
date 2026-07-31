/**
 * Richard Wolf manufacturer cluster —
 * "Richard Wolf Piezolith 3000 plus: System Guide"
 */

import type { ContentBlock, TocItem } from "../blog";

export const PIEZOLITH_3000_TOC: TocItem[] = [
  { id: "platform", title: "What the Piezolith 3000 plus Is" },
  { id: "piezo", title: "Why Piezoelectric Generation Behaves Differently" },
  { id: "localisation", title: "Integrated Ultrasound Localisation" },
  { id: "workflow", title: "Session Workflow" },
  { id: "portable", title: "Piezolith 3000 Portable" },
  { id: "planning", title: "Room, Service and Training" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const PIEZOLITH_3000_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "The Richard Wolf Piezolith 3000 plus is a piezoelectric extracorporeal shock wave lithotripsy (ESWL) system with integrated ultrasound stone localisation. AbuFarha Medical supplies, installs, commissions and services Piezolith systems, including the Piezolith 3000 Portable configuration.",
      "Piezoelectric lithotripsy occupies a distinct position among shock wave generation principles. A large array of piezo elements fires simultaneously onto a common focus, producing a very tight focal volume with comparatively low pressure at the skin entry surface. The clinical consequence is a treatment that is generally well tolerated with limited analgesia — at the price of demanding accurate localisation.",
      "This guide explains the platform, what its generation principle implies clinically and operationally, how a session runs, and what a lithotripsy service must plan for.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Piezoelectric shock wave generation, integrated ultrasound localisation, session workflow, portable configuration, service and training requirements",
    audience:
      "Urologists and urology theatre teams, sonographers, biomedical engineering teams, service planners",
    readingTime: "12 min read",
    technology: "Lithotripsy Systems",
  },
  {
    type: "h2",
    id: "platform",
    text: "What the Piezolith 3000 plus Is",
    number: 1,
    body: "A piezoelectric lithotripter with ultrasound localisation built into the therapy head arrangement.",
  },
  {
    type: "p",
    text: "The system generates focused shock waves from a piezo element array coupled to the patient through a water cushion, positions the patient on a treatment table with adjustable axes, and localises the target stone with ultrasound. Energy level, pulse rate and total pulse count are set at the control console, and cumulative impulse count is recorded as the primary service metric.",
  },
  {
    type: "h2",
    id: "piezo",
    text: "Why Piezoelectric Generation Behaves Differently",
    number: 2,
  },
  {
    type: "table",
    headers: ["Property", "Piezoelectric behaviour", "Practical consequence"],
    rows: [
      ["Focal volume", "Very tight", "Less tissue exposed; localisation accuracy becomes critical"],
      ["Skin entry pressure", "Comparatively low", "Generally well tolerated with limited analgesia"],
      ["Source consumables", "No spark electrode to replace", "Simpler consumable picture than electrohydraulic systems"],
      ["Energy delivery", "Large element array fired to a common focus", "Output stability across the service life of the array"],
      ["Session technique", "Rewards precise coupling and positioning", "Coupling faults show up as poor fragmentation, not as errors"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "A tight focus is a clinical asset only when localisation and patient stability keep the stone inside it throughout the session.",
    clinicalInterpretation:
      "Sessions that fragment poorly on a piezoelectric system are more often localisation or coupling problems than energy problems.",
    hospitalRecommendation:
      "Train operators explicitly on coupling technique and mid-session re-localisation; do not treat energy escalation as the first response to poor fragmentation.",
  },
  {
    type: "h2",
    id: "localisation",
    text: "Integrated Ultrasound Localisation",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Ultrasound localisation involves no ionising radiation, which simplifies the room's radiation protection profile relative to fluoroscopy-equipped lithotripters.",
      "Continuous imaging during treatment allows fragmentation progress and stone movement to be monitored rather than assumed.",
      "Respiration and patient movement displace the stone relative to the focal point, so re-verification during the session is part of technique.",
      "Ultrasound depends on an acoustic window; stones obscured by bowel gas or bone are the recognised limitation of ultrasound-only localisation.",
      "Operator sonographic skill is a genuine determinant of treatment success and should be reflected in training and competency records.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Coupling is measured in fragmentation, not in feel",
    text: "Trapped air in the coupling interface absorbs energy before it reaches the patient. Establishing clean contact — and re-checking it after repositioning — is the highest-yield operator habit on any lithotripter.",
  },
  {
    type: "h2",
    id: "workflow",
    text: "Session Workflow",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Case selection against stone size, location, composition where known, anatomy and clearance prospects.",
      "Preparation and positioning per local protocol, with analgesia as required.",
      "Coupling: cushion contact established carefully and verified before treatment starts.",
      "Localisation: the stone is brought into the focal volume under ultrasound guidance.",
      "Treatment: energy stepped progressively at a controlled pulse rate, with periodic re-localisation.",
      "Documentation: energy settings, pulse count and cumulative impulse count recorded for each session.",
      "Follow-up imaging to confirm clearance, with retreatment planned where required.",
    ],
  },
  {
    type: "h2",
    id: "portable",
    text: "Piezolith 3000 Portable",
    number: 5,
  },
  {
    type: "p",
    text: "The portable configuration addresses services that cannot dedicate a room to lithotripsy full-time, or that operate across more than one site. The clinical principle is identical; the differences are logistical — transport, setup time, the water and coupling arrangement at each location, and the need for consistent protocol documentation across sites. A portable system does not reduce the training or maintenance obligation; it distributes it.",
  },
  {
    type: "knowledgeBox",
    variant: "did-you-know",
    title: "Portability shifts cost, it does not remove it",
    text: "Shared or mobile lithotripsy improves utilisation of the capital asset, but adds setup labour, transport risk and cross-site governance. Both models can be economic — the choice follows caseload distribution.",
  },
  {
    type: "h2",
    id: "planning",
    text: "Room, Service and Training",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Space for the treatment table with full positioning travel, the therapy head, imaging and staff working positions on both sides of the patient.",
      "Water quality and treatment-water management per the manufacturer's specification.",
      "Electrical supply and environmental conditions appropriate to the generator and imaging subsystems.",
      "Preventive maintenance keyed to cumulative impulse count as well as elapsed time.",
      "Consumables and accessories relevant to the configuration — cushions and coupling media in particular.",
      "Operator training covering both shock wave protocol and ultrasound localisation, with maintained competency records.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies, installs, commissions and supports Richard Wolf lithotripsy systems, including the Piezolith 3000 plus and Piezolith 3000 Portable, with the biomedical engineering, spare parts and training programmes a urology treatment service depends on.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Does piezoelectric lithotripsy require general anaesthesia?",
        a: "Frequently not. Low skin entry pressure means treatment is often delivered with limited analgesia, though the anaesthetic approach remains a local clinical protocol decision.",
      },
      {
        q: "Is ultrasound-only localisation a limitation?",
        a: "It is radiation-free and allows continuous monitoring, but depends on an acoustic window. Stones obscured by bowel gas or bone may be better localised fluoroscopically, which is a case-selection consideration.",
      },
      {
        q: "What is the main service metric for a piezoelectric lithotripter?",
        a: "Cumulative impulse count, which indicates how much of the source's service life has been consumed. It should be recorded per session and reviewed at each maintenance visit.",
      },
      {
        q: "How does the portable configuration differ clinically?",
        a: "It does not differ in treatment principle. The differences are logistical — transport, setup, water management at each site and cross-site protocol governance.",
      },
      {
        q: "What should be verified when acquiring a pre-owned Piezolith?",
        a: "Cumulative impulse count, therapy head and array condition, ultrasound subsystem performance, completeness of cushions and accessories, software version and the full service record.",
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
    text: "The Piezolith 3000 plus trades a demand for localisation accuracy against a tight focus and good patient tolerance. Services that invest in coupling technique, ultrasound skill and impulse-based maintenance get consistent fragmentation from it; services that treat it as a power setting do not.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Urology treatment service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Lithotripsy installation and preventive maintenance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Manufacturer documentation and field service practice synthesis",
    disclaimer:
      "Educational guidance on piezoelectric lithotripsy systems. It does not replace manufacturer documentation or clinical judgement.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer technical documentation and operating instructions for installed lithotripsy systems." },
      { label: "Institutional urology treatment protocols and quality assurance records." },
      { label: "Service records including cumulative impulse count and preventive maintenance history." },
    ],
  },
];
