/**
 * Service knowledge — "Spare Parts Supply and Uptime"
 */

import type { ContentBlock, TocItem } from "../blog";

export const SPARE_PARTS_TOC: TocItem[] = [
  { id: "principle", title: "Why Parts Strategy Decides Uptime" },
  { id: "classes", title: "Classifying Parts by Consequence" },
  { id: "stocking", title: "What to Hold Locally" },
  { id: "leadtime", title: "Lead Time Is the Real Specification" },
  { id: "quality", title: "Parts Provenance and Quality" },
  { id: "governance", title: "Governance and Records" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

export const SPARE_PARTS_CONTENT: ContentBlock[] = [
  {
    type: "intro",
    paragraphs: [
      "Availability of medical imaging equipment is decided less by how often it fails than by how quickly it is restored — and restoration time is dominated by parts. AbuFarha Medical supplies spare parts alongside preventive maintenance and technical support for the systems it installs.",
      "A department can hold a comprehensive maintenance contract and still lose weeks of clinical capacity because one component had a long lead time and no local stock. Parts strategy is therefore an uptime decision, not a stores decision.",
      "This guide sets out how to classify parts by clinical consequence, what is worth holding locally, why lead time is the specification that matters, and how to govern provenance and records.",
    ],
  },
  {
    type: "keyFacts",
    covers:
      "Parts strategy and uptime, consequence-based classification, local stocking decisions, lead time management, provenance and documentation",
    audience:
      "Biomedical engineering teams, department managers, procurement and stores functions, finance and capital planning",
    readingTime: "10 min read",
    technology: "Spare Parts Supply",
  },
  {
    type: "h2",
    id: "principle",
    text: "Why Parts Strategy Decides Uptime",
    number: 1,
    body: "Restoration time, not failure frequency, determines lost clinical capacity.",
  },
  {
    type: "p",
    text: "Downtime consists of diagnosis time, parts time and repair time. On modern systems, diagnosis and repair are usually measured in hours while parts can be measured in weeks. Any serious availability target therefore has to be expressed as a parts commitment, not only as an engineer response time.",
  },
  {
    type: "knowledgeBox",
    variant: "warning",
    title: "Response time without parts is a visit, not a repair",
    text: "A four-hour engineer response followed by a three-week part is a three-week outage. Always read the parts availability clause together with the response clause.",
  },
  {
    type: "h2",
    id: "classes",
    text: "Classifying Parts by Consequence",
    number: 2,
  },
  {
    type: "table",
    headers: ["Class", "Examples of consequence", "Strategy"],
    rows: [
      ["Service-stopping, long lead", "System cannot image at all; part sourced internationally", "Hold locally or secure a written stocked-part commitment"],
      ["Service-stopping, short lead", "System down but part reliably available quickly", "Rely on supply chain; verify the lead time claim"],
      ["Capability-limiting", "System works with reduced function or one option unavailable", "Plan replacement at next scheduled visit"],
      ["Consumable and wear", "Predictable replacement on a known cycle", "Forecast and order on schedule, not on failure"],
      ["Cosmetic and ancillary", "No clinical effect", "Batch with other work"],
    ],
  },
  {
    type: "tableInsight",
    expertCommentary:
      "Classification should be by clinical consequence and lead time together — a cheap part with a long lead time can be more critical than an expensive one held in country.",
    clinicalInterpretation:
      "Cancelled lists are the true cost unit; a part's price is rarely the dominant number in that calculation.",
    hospitalRecommendation:
      "Build the critical-parts list per system with engineering and the clinical service jointly, and review it annually.",
  },
  {
    type: "h2",
    id: "stocking",
    text: "What to Hold Locally",
    number: 3,
  },
  {
    type: "ul",
    items: [
      "Parts that stop the service entirely and cannot be delivered within the acceptable outage window.",
      "Wear items with predictable replacement cycles, held at a level matched to that cycle.",
      "Items shared across several installed systems, where one holding covers multiple risks.",
      "Parts with known supply volatility or end-of-production status for the installed generation.",
      "Items required for safety-related functions, where operating without them is not permissible.",
    ],
  },
  {
    type: "p",
    text: "Holding stock ties up capital and some components have shelf-life or storage requirements. The decision is therefore explicit: the cost of holding a part against the cost of the outage it prevents, assessed per system rather than as a blanket policy.",
  },
  {
    type: "h2",
    id: "leadtime",
    text: "Lead Time Is the Real Specification",
    number: 4,
  },
  {
    type: "ul",
    items: [
      "Ask for realistic lead times per critical part in writing, including customs and logistics for imported items — not catalogue availability.",
      "Distinguish stocked-in-country from stocked-at-factory; the difference is usually the whole outage.",
      "Confirm what happens when a part is unavailable: loan equipment, alternative capacity, or an escalation route.",
      "Track actual versus quoted lead times over time; the record is more useful than the promise.",
      "Reassess supportability as systems age — thinning parts supply is an early replacement-planning signal.",
    ],
  },
  {
    type: "h2",
    id: "quality",
    text: "Parts Provenance and Quality",
    number: 5,
  },
  {
    type: "ul",
    items: [
      "Establish provenance for every part fitted: new, manufacturer-refurbished or reclaimed, and from which supply route.",
      "Ensure documentation accompanies the part, because service records support accreditation and incident investigation.",
      "Verify that safety-relevant and image-chain components meet the manufacturer's specification for the system.",
      "Confirm calibration or verification requirements after fitting — some components require measured performance testing before clinical release.",
      "Record serial numbers and fitting dates so failure patterns can be identified across the estate.",
    ],
  },
  {
    type: "knowledgeBox",
    variant: "engineer-note",
    title: "Post-fit verification is part of the repair",
    text: "A fitted part is not a completed repair until performance has been verified and the system formally released back to clinical use. Skipping that step transfers risk to the first patient.",
  },
  {
    type: "h2",
    id: "governance",
    text: "Governance and Records",
    number: 6,
  },
  {
    type: "ul",
    items: [
      "An asset register linking each system to its critical-parts list, service history and supportability status.",
      "Recorded downtime cause and duration per event, so the parts strategy is refined from evidence.",
      "Annual review of holdings against actual consumption to avoid stocking obsolete items.",
      "Clear ownership: who authorises an order, who receives it, and who verifies performance after fitting.",
      "Budget visibility, so parts spend is planned rather than treated as an unexpected event each year.",
    ],
  },
  {
    type: "p",
    text: "AbuFarha Medical supplies spare parts for the systems it installs, and works with hospital engineering teams to define critical-parts lists, holding levels and escalation routes as part of the preventive maintenance and technical support relationship.",
  },
  {
    type: "faq",
    items: [
      {
        q: "Should a hospital hold its own spare parts stock?",
        a: "For parts that stop the service and cannot be delivered inside the acceptable outage window, yes. For parts with reliably short lead times, holding stock adds cost without adding availability.",
      },
      {
        q: "What is the most commonly under-managed part category?",
        a: "Predictable wear items. They fail on a known cycle yet are frequently ordered reactively, converting a planned replacement into an unplanned outage.",
      },
      {
        q: "How should parts availability be written into a service agreement?",
        a: "As explicit lead-time commitments for named critical parts, together with a defined action when a part is unavailable — not as a generic best-efforts statement.",
      },
      {
        q: "Does fitting a refurbished part affect compliance?",
        a: "What matters is that the part meets the manufacturer's specification for the system, that provenance is documented, and that required performance verification is completed before clinical release.",
      },
      {
        q: "How does parts supply relate to replacement planning?",
        a: "Lengthening lead times and thinning availability for a system generation are early signals that replacement should enter the capital plan, independent of current fault rates.",
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
    text: "Uptime is bought with parts strategy as much as with engineering skill. Classify parts by consequence and lead time, hold what the outage window demands, write lead times into agreements, and document provenance and post-fit verification. Availability then becomes a managed number rather than an annual surprise.",
  },
  {
    type: "editorialBoard",
    reviewers: [
      { role: "Engineering review", name: "AbuFarha Biomedical Engineering", credential: "Spare parts supply and field service practice" },
      { role: "Operational review", name: "AbuFarha Service Operations", credential: "Uptime governance and logistics" },
    ],
    lastReviewed: "July 31, 2026",
    nextReview: "July 31, 2027",
    version: "1.0",
    evidenceLevel: "Field service and logistics practice synthesis",
    disclaimer:
      "Educational guidance on spare parts strategy. It does not replace manufacturer service documentation or local procurement policy.",
  },
  {
    type: "references",
    items: [
      { label: "Manufacturer service documentation and parts catalogues for installed systems." },
      { label: "Institutional asset registers, downtime logs and service history records." },
      { label: "Supplier lead-time commitments and service agreement documentation." },
    ],
  },
];
