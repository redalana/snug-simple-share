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
    type: "introduction" as never,
    paragraphs: [],
  },
];
