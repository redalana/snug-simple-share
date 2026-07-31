/**
 * Service knowledge — "Technical Support: Escalation and Fault Response"
 */

import type { ContentBlock, TocItem } from "../blog";

export const TECH_SUPPORT_TOC: TocItem[] = [
  { id: "model", title: "What Technical Support Actually Is" },
  { id: "tiers", title: "Support Tiers and Escalation" },
  { id: "triage", title: "First-Line Triage Before the Call" },
  { id: "reporting", title: "Reporting a Fault Well" },
  { id: "agreements", title: "Reading a Support Agreement" },
  { id: "learning", title: "Closing the Loop After a Fault" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const TECH_SUPPORT_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Technical support is the mechanism that converts a fault into a restored service. AbuFarha Medical provides technical support, fault response and escalation for the systems it supplies, alongside preventive maintenance and spare parts supply.",
      "Most avoidable downtime is lost in the first hour and in the handover between the department and the engineer: a fault described imprecisely, a system state not recorded, an error message not captured, or an escalation route nobody could name. Structured support recovers that time.",
      "This guide describes how support tiers work, what departments should triage themselves, how to report a fault so it can be resolved on the first attempt, and what to look for in a support agreement.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Support model and tiers, escalation routes, first-line triage, fault reporting discipline, support agreement terms and post-fault review",
    audience:
      "Department managers, radiographers and technologists, biomedical engineering teams, service contract owners",
    readingTime: "10 min read",
    technology: "Technical Support",
  },
  {
    type: "h2",
    id: "model",
    text: "What Technical Support Actually Is",
    number: 1,
    body: "A defined path from fault detection to verified clinical release.",
  },
  {
    type: "p",
    text: "Support is not a phone number. It is a sequence: detection, first-line triage, logged report, remote or on-site diagnosis, parts decision, repair, performance verification, and formal release back to clinical use. A weak link anywhere in that chain shows up as downtime, regardless of how strong the rest is.",
  },
  {
    type: "h2",
    id: "tiers",
    text: "Support Tiers and Escalation",
    number: 2,
  },
  {
    type: "table",
    headers: ["Tier", "Who resolves it", "Typical scope"],
    rows: [
      ["First line", "Department operators and superusers", "Operator errors, workflow issues, restarts, consumables, obvious physical causes"],
      ["Second line", "Hospital biomedical engineering", "Diagnosis from system logs, known fault procedures, part fitting within competency"],
      ["Third line", "Supplier field service engineer", "Subsystem faults, calibration, part replacement requiring specialist access"],
      ["Manufacturer support", "OEM specialist channel", "Design-level faults, software escalation, unresolved recurring issues"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Escalation should be explicit and time-bound: each tier holds an issue for a defined period before passing it upward with the evidence gathered.",
    clinicalInterpretation:
      "Undefined escalation is the reason many faults sit unresolved while everyone believes someone else owns them.",
    hospitalRecommendation:
      "Publish the escalation chain, with names and time limits per tier, inside the room where the equipment is used.",
  },
  {
    type: "h2",
    id: "triage",
    text: "First-Line Triage Before the Call",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Establish whether the fault is reproducible, intermittent or occurred once.",
      "Record the exact error text or code and the operation in progress when it appeared.",
      "Check whether it affects all protocols and all patients, or one specific configuration — this single distinction often localises the fault.",
      "Verify the obvious external causes: power, network, coupling or contact, accessory condition, consumable status.",
      "Confirm whether anything changed recently — a software update, an accessory swap, a room change or new staff.",
      "Establish clinical urgency: is the system unusable, degraded, or usable with a workaround?",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Never clear evidence before reporting",
    text: "Photograph error screens, note timestamps and leave the system in its faulted state where safe. A cleared fault with no record frequently means the engineer arrives to diagnose nothing.",
  },
  {
    type: "h2",
    id: "reporting",
    text: "Reporting a Fault Well",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "System identity: model, serial number and location — not \"the scanner in radiology\".",
      "What was being done, what happened, and what was expected instead.",
      "Exact error text, codes and timestamps.",
      "Frequency and reproducibility, plus any pattern by protocol, accessory or operator.",
      "Triage already performed, so it is not repeated.",
      "Clinical impact and urgency, stated explicitly rather than implied.",
      "A named contact in the department who can be reached and who knows the case.",
    ],
  },
  {
    type: "h2",
    id: "agreements",
    text: "Reading a Support Agreement",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Response definition: is the commitment a contact response, a remote diagnosis or an engineer on site?",
      "Coverage hours, and what happens outside them for a service that operates outside them.",
      "Parts availability commitments for named critical components — response without parts does not restore a service.",
      "What is included versus chargeable: labour, travel, parts, software updates, consumables.",
      "Remote support provision, which shortens diagnosis substantially where connectivity is permitted.",
      "Reporting obligations: what service data the hospital receives, and how often.",
      "Escalation and unresolved-fault provisions, including recurring-fault handling.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Match coverage to clinical hours",
    text: "A service running emergency lists at night cannot be supported by an agreement covering office hours only. Coverage windows should mirror the clinical operating pattern, not the administrative one.",
  },
  {
    type: "h2",
    id: "learning",
    text: "Closing the Loop After a Fault",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "Record cause, action and downtime duration — not just \"repaired\".",
      "Verify performance before clinical release, with measurement where the fault affected image quality, dose or safety functions.",
      "Ask whether the fault was preventable by maintenance, training or environment; feed the answer into the maintenance plan.",
      "Review recurring faults as a pattern rather than as a sequence of unrelated events.",
      "Update the critical-parts list and the first-line triage guidance when a fault reveals a gap.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical provides technical support, fault response, escalation and remote diagnostics for the systems it supplies, backed by preventive maintenance, spare parts supply and operator and engineer training.",
  },
  {
    type: "faq",
    items: [
      {
        q: "What should a department do before calling support?",
        a: "Complete first-line triage: capture the exact error, establish reproducibility and scope, check external causes and recent changes, and state clinical urgency. That work usually halves resolution time.",
      },
      {
        q: "What is the difference between response time and restoration time?",
        a: "Response time is when support engages; restoration time is when the system returns to clinical use. Restoration depends on parts availability, which is why parts commitments belong in the agreement.",
      },
      {
        q: "Should the system be restarted before reporting a fault?",
        a: "Where safe and clinically necessary, yes — but capture the error text, codes and state first. A restart that erases the evidence often postpones diagnosis rather than resolving it.",
      },
      {
        q: "How should recurring faults be handled?",
        a: "As a single case with accumulated evidence, escalated as a pattern. Repeated first-line repairs on the same fault indicate an unresolved root cause.",
      },
      {
        q: "Is remote support worthwhile?",
        a: "Yes, where connectivity is permitted. Remote log access shortens diagnosis considerably and frequently avoids a visit altogether or ensures the right part arrives with the engineer.",
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
    text: "Fault response is a process a hospital can improve on its own side: triage before calling, report precisely, escalate on defined time limits, verify performance before release, and review causes afterwards. Combined with an agreement whose coverage and parts commitments match the clinical operating pattern, that discipline is what keeps availability high.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Field service and fault response practice" },
      { role: "Operational review", name: "AbuFarha Service Operations", credential: "Support escalation and uptime governance" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Field service practice synthesis",
    disclaimer:
      "Educational guidance on technical support and escalation. It does not replace manufacturer service documentation or contractual terms.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer service documentation and fault code references for installed systems." },
      { label: "Institutional service logs, downtime records and escalation procedures." },
      { label: "Service agreement documentation including response and parts commitments." },
    ],
  },
];
