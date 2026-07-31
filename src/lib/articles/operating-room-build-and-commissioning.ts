/**
 * Operating Room cluster — "Operating Room Build and Commissioning"
 */

import type { ContentBlock, TocItem } from "../blog";

export const OR_BUILD_COMMISSIONING_TOC: TocItem[] = [
  { id: "scope", title: "Scope: Equipment Fit-Out, Not Construction" },
  { id: "sequencing", title: "Sequencing With the Building Contractor" },
  { id: "installation", title: "Installation Stages" },
  { id: "coordination", title: "Coordination Points That Cause Delay" },
  { id: "acceptance", title: "Acceptance Testing Before Clinical Release" },
  { id: "training", title: "Training and Handover" },
  { id: "documentation", title: "Documentation and Sign-Off" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const OR_BUILD_COMMISSIONING_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Bringing a new or renovated operating room into clinical use is a coordinated equipment fit-out, installation and commissioning programme layered onto the building works, not a construction project in its own right. AbuFarha Medical supplies, installs and commissions operating room equipment and coordinates that work with the building contractor, estates team and clinical stakeholders, and does not undertake hospital construction itself.",
      "The equipment fit-out has its own critical path inside the wider building programme: services must be roughed in to the equipment's actual requirements, installation cannot begin until specific finishing trades are complete, and clinical release depends on acceptance testing that can only happen once installation is finished. Treating the equipment fit-out as an afterthought to the building programme is the most common cause of delayed opening dates.",
      "This guide sets out how operating room equipment installation and commissioning should be sequenced against the building contractor's programme, the coordination points that most often cause delay, and what must be confirmed before the room is released for clinical use.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Equipment fit-out scope, sequencing with construction, installation stages, coordination points, acceptance testing, training and handover, documentation",
    audience:
      "Project managers, estates and facilities teams, building contractors, theatre managers, biomedical engineering, clinical leads",
    readingTime: "12 min read",
    technology: "Operating Room",
  },
  {
    type: "h2",
    id: "scope",
    text: "Scope: Equipment Fit-Out, Not Construction",
    number: 1,
    body: "AbuFarha Medical's role is equipment supply, installation, commissioning and acceptance testing, coordinated with the building contractor.",
  },
  {
    type: "p",
    text: "The building contractor delivers the shell, structural work, ventilation, containment and fixed services of the room. AbuFarha Medical's scope sits within that envelope: supplying, installing and commissioning the operating table, lighting, imaging, integration and associated theatre equipment, and coordinating the interface points — power, gases, data, ceiling fixings and control signals — with the contractor's programme. Confusing the two scopes at project outset is a recurring source of gaps in responsibility.",
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Fix the interface schedule early",
    text: "Agree a written interface schedule at project start stating exactly which party delivers each service to which point: for example, the contractor terminates a data outlet at a wall box, and the equipment installer runs and terminates the cable from there. Undefined interfaces are where responsibility gaps and delay both originate.",
  },
  {
    type: "h2",
    id: "sequencing",
    text: "Sequencing With the Building Contractor",
    number: 2,
  },
  {
    type: "ul",
    items: [
      "Equipment specifications finalised before service rough-in, so power, gas and data points are positioned and sized correctly the first time.",
      "Ceiling and structural provisions for pendants or fixed imaging confirmed before the ceiling is closed.",
      "Floor finishes and containment completed before heavy equipment is moved in, to avoid damage and recontamination.",
      "Room commissioning by the building contractor — air changes, pressure differentials, surface finishes — completed and verified before equipment installation begins.",
      "A single combined programme showing both building and equipment milestones, held by the project manager rather than by either party alone.",
    ],
  },
  {
    type: "h2",
    id: "installation",
    text: "Installation Stages",
    number: 3,
  },
  {
    type: "table",
    headers: ["Stage", "Activity", "Dependency"],
    rows: [
      ["Pre-installation survey", "Confirm room readiness and service points against the equipment specification", "Room commissioned by building contractor"],
      ["Delivery and positioning", "Bring equipment into the room and position per the agreed layout", "Access route and floor finishes complete"],
      ["Mechanical and electrical connection", "Connect power, gases, data and structural fixings", "Interface points delivered per schedule"],
      ["Calibration and functional test", "Verify equipment performs to manufacturer specification", "Installation complete and stable power available"],
      ["Integration test", "Confirm displays, recording and network integration function together", "All connected systems installed"],
      ["Acceptance testing", "Formal verification against agreed criteria, results recorded", "All prior stages signed off"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Integration testing is frequently the stage that reveals problems, because individual items pass their own functional tests while the combined system has not previously been exercised together.",
    clinicalInterpretation:
      "A room can appear ready because each piece of equipment works in isolation, while the combined workflow the clinical team actually uses has not been verified.",
    hospitalRecommendation:
      "Schedule integration testing as a distinct stage with its own sign-off, not as an assumed by-product of individual equipment testing.",
  },
  {
    type: "h2",
    id: "coordination",
    text: "Coordination Points That Cause Delay",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Service points positioned to a generic layout rather than the confirmed equipment footprint.",
      "Ceiling structural provision decided before pendant and imaging positions are finalised.",
      "Building commissioning incomplete when equipment installation is scheduled to begin.",
      "Access routes or door widths inadequate for the largest item of equipment, discovered at delivery rather than at design.",
      "Power capacity or earthing arrangements sized to the building's general requirement rather than the specific equipment load.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Do not schedule equipment installation into an unfinished room",
    text: "Installing sensitive equipment before dust-generating finishing work and building commissioning are complete risks contamination and damage, and can invalidate the baseline performance verification that acceptance testing depends on.",
  },
  {
    type: "h2",
    id: "acceptance",
    text: "Acceptance Testing Before Clinical Release",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Performance verification of each item against manufacturer specification, with measured results recorded as the installation baseline.",
      "Safety testing, including electrical safety and, where imaging is installed, radiation protection verification and shielding sign-off.",
      "Integrated system testing of displays, recording, communication and control functions together.",
      "A rehearsal of representative procedures with the clinical team, confirming layout, sightlines and workflow in practice.",
      "A documented list of any outstanding items, each with an owner and a closure date, before release for clinical use.",
    ],
  },
  {
    type: "h2",
    id: "training",
    text: "Training and Handover",
    number: 6,
  },
  {
    type: "p",
    text: "Operator and application training for surgical, anaesthetic, nursing and, where relevant, radiography staff should be completed before the room takes its first live case, with competency recorded against a defined standard. Handover to the hospital includes the maintenance schedule, escalation route for faults, and the critical spare parts list, so the support structure is active from the first day of clinical use rather than assembled after a fault occurs.",
  },
  {
    type: "h2",
    id: "documentation",
    text: "Documentation and Sign-Off",
    number: 7,
  },
  {
    type: "ul",
    items: [
      "As-installed records for every item, including serial numbers, software versions and configuration settings.",
      "Acceptance test results retained as the baseline for future performance comparison.",
      "User and, where applicable, service manuals provided in a location accessible to the department and biomedical engineering.",
      "A formal clinical release document, signed by the responsible clinical and engineering leads, with any outstanding items listed.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical delivers the equipment supply, installation, commissioning and acceptance testing for operating room fit-out projects, working to an agreed interface schedule with the building contractor, and hands over with training, maintenance schedules and spare parts provision in place.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Does AbuFarha Medical construct operating rooms?",
        a: "No. AbuFarha Medical supplies, installs and commissions operating room equipment, coordinating its work with the building contractor who delivers the structural and building services scope. The two scopes are distinct and should be defined as such in the project programme.",
      },
      {
        q: "When should equipment specifications be finalised relative to construction?",
        a: "Before service rough-in. Power, gas, data and structural provisions should be sized and positioned to the confirmed equipment footprint rather than a generic assumption, since correcting rough-in after the fact causes significant delay and cost.",
      },
      {
        q: "What is an interface schedule and why does it matter?",
        a: "It is a written document stating exactly which party delivers each service connection to which point. It removes ambiguity about responsibility at the boundary between building works and equipment installation, which is where most coordination failures occur.",
      },
      {
        q: "Why is a full-team rehearsal part of acceptance testing?",
        a: "Individual equipment tests confirm each item works in isolation. A rehearsal of representative procedures with the full clinical team is the only way to confirm the combined layout, sightlines and workflow function together before real cases are scheduled.",
      },
      {
        q: "What should be in place before the first clinical case?",
        a: "Completed acceptance testing with recorded results, radiation protection sign-off where imaging is installed, staff training with recorded competency, and an active maintenance schedule and escalation route.",
      },
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
    text: "Operating room build and commissioning succeeds when the equipment fit-out is planned as a coordinated programme against the building contractor's works, governed by a clear interface schedule, and closed out with structured acceptance testing, a full-team rehearsal and recorded training before clinical release.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Clinical review", name: "AbuFarha Clinical Editorial Board", credential: "Theatre and interventional service practice" },
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Theatre equipment installation and commissioning" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Project delivery and commissioning practice synthesis",
    disclaimer:
      "Educational guidance on operating room equipment installation and commissioning. It does not replace project-specific construction documentation, manufacturer site planning requirements or local regulatory requirements.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer installation and commissioning documentation for theatre equipment." },
      { label: "Institutional project delivery and interface management records for theatre fit-out programmes." },
      { label: "Acceptance testing and radiation protection verification records for intraoperative imaging installations." },
    ],
  },
];
