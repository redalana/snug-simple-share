/**
 * Persistent Article Registry (Operating Manual §52).
 *
 * The registry is the source of truth for content production. It is DERIVED
 * from the existing single sources of truth — `src/lib/blog.ts` (articles),
 * `src/lib/products.ts` (categories + manufacturers), `content/services.ts`
 * (services) and the knowledge graph in `content/*` — so it can never drift
 * from what the site actually publishes, and it invents nothing.
 *
 * Production rules enforced here:
 *   §29 Knowledge Coverage Validation  → coverageReport()
 *   §53 Duplicate Prevention           → validateCandidate()
 *   §54 Semantic Duplicate Detection   → findSemanticDuplicates()
 *   §55 Keyword Cannibalization        → validateCandidate()
 *   §24 Search Intent Distribution     → intentDistribution()
 */

import { ARTICLES, ARTICLE_SLUG_ALIASES } from "@/lib/blog";
import { ALL_MANUFACTURERS, PRIMARY_CATEGORIES } from "@/lib/products";
import { SERVICES } from "./services";
import { inferArticleCategory, inferManufacturers, type ArticleCategory } from "./taxonomy";

/* ------------------------------------------------------------------ */
/*  Registry model                                                     */
/* ------------------------------------------------------------------ */

/** Primary search intent — exactly one per article (§23). */
export const SEARCH_INTENTS = [
  "Informational",
  "Commercial Investigation",
  "Transactional",
  "Procurement",
  "Installation",
  "Maintenance",
  "Troubleshooting",
] as const;
export type SearchIntent = (typeof SEARCH_INTENTS)[number];

/** Buyer-journey stage — exactly one per article (§25). */
export const JOURNEY_STAGES = [
  "Awareness",
  "Research",
  "Technology Evaluation",
  "Vendor Evaluation",
  "Budget Planning",
  "Procurement",
  "Installation",
  "Training",
  "Maintenance",
  "Upgrade",
  "Replacement",
] as const;
export type JourneyStage = (typeof JOURNEY_STAGES)[number];

/** Editorial tier: A = flagship spec, B = legacy entry pending upgrade. */
export type EditorialTier = "A" | "B";

export type RegistryEntry = {
  id: string;
  slug: string;
  title: string;
  /** Modality/topic label as published. */
  cluster: string;
  /** Editorial category inferred from the article's own fields. */
  category: ArticleCategory;
  manufacturers: string[];
  intent: SearchIntent;
  journeyStage: JourneyStage;
  tier: EditorialTier;
  publishedDate: string;
  lastUpdated?: string;
  /** Normalised title tokens, used for semantic duplicate detection. */
  signature: string[];
};

/* ------------------------------------------------------------------ */
/*  Derivation                                                         */
/* ------------------------------------------------------------------ */

/**
 * Published article category labels are editorial; product categories are
 * canonical. This map normalises the former onto the latter so coverage
 * reporting measures real gaps instead of label drift. Every value must be a
 * member of `PRIMARY_CATEGORIES`.
 */
const CLUSTER_ALIASES: Record<string, (typeof PRIMARY_CATEGORIES)[number]> = {
  "Cath Lab": "Cath Lab Systems",
  "C-Arm Systems": "C-Arms",
  "Mammography Systems": "Mammography",
  "PET/CT": "PET/CT Scanners",
};

function normaliseCluster(label: string): string {
  return CLUSTER_ALIASES[label] ?? label;
}


const STOP_WORDS = new Set([
  "the","a","an","and","or","for","of","to","in","on","with","your","what","is",
  "are","how","why","from","guide","complete","practical","ultimate","hospital",
  "hospitals","medical","abufarha","every","into","that","this","it",
]);

function signatureOf(...parts: string[]): string[] {
  const tokens = parts
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t));
  return [...new Set(tokens)].sort();
}

/** Intent is inferred from the article's own slug/title — never invented. */
function inferIntent(slug: string, title: string): SearchIntent {
  const t = `${slug} ${title}`.toLowerCase();
  if (/artefact|artifact|troubleshoot|failure|fault|error/.test(t)) return "Troubleshooting";
  if (/maintenance|service-contract|helium|tube-life|calibration|uptime|reliability/.test(t))
    return "Maintenance";
  if (/install|commission|siting|room-planning|shielding|acceptance/.test(t))
    return "Installation";
  if (/procure|tender|vendor|budget|cost|ownership|tco|roi|planning-a-new/.test(t))
    return "Procurement";
  if (/refurbished|buying|quote|request|brochure|for-sale|supplier/.test(t))
    return "Transactional";
  if (/\bvs\b|versus|choosing|compare|comparison|which|selection|evaluat/.test(t))
    return "Commercial Investigation";
  return "Informational";
}

/** Journey stage follows from intent plus explicit lifecycle signals. */
function inferStage(slug: string, title: string, intent: SearchIntent): JourneyStage {
  const t = `${slug} ${title}`.toLowerCase();
  if (/replace|end-of-life|decommission/.test(t)) return "Replacement";
  if (/upgrade|retrofit|migration/.test(t)) return "Upgrade";
  if (/training|staff-competency/.test(t)) return "Training";
  switch (intent) {
    case "Installation":
      return "Installation";
    case "Maintenance":
    case "Troubleshooting":
      return "Maintenance";
    case "Procurement":
      return /budget|cost|ownership|tco|roi/.test(t) ? "Budget Planning" : "Procurement";
    case "Transactional":
      return "Vendor Evaluation";
    case "Commercial Investigation":
      return "Technology Evaluation";
    default:
      return /^what-is|explained|introduction/.test(slug) ? "Awareness" : "Research";
  }
}

/**
 * Tier A articles ship hand-authored content blocks; Tier B entries fall back
 * to the generic generator and still owe a flagship upgrade (§62).
 */
function tierOf(article: (typeof ARTICLES)[number]): EditorialTier {
  const hasKnowledgeBlocks = article.content.some((b) =>
    ["knowledgeBox", "diagram", "tableInsight", "editorialBoard", "references"].includes(b.type),
  );
  return hasKnowledgeBlocks ? "A" : "B";
}

export const REGISTRY: RegistryEntry[] = ARTICLES.map((article) => ({
  id: `article:${article.slug}`,
  slug: article.slug,
  title: article.title,
  cluster: article.category,
  category: inferArticleCategory({
    slug: article.slug,
    title: article.title,
    category: article.category,
    excerpt: article.excerpt,
  }),
  manufacturers: inferManufacturers(article.title, article.excerpt, article.metaDescription),
  intent: inferIntent(article.slug, article.title),
  journeyStage: inferStage(
    article.slug,
    article.title,
    inferIntent(article.slug, article.title),
  ),
  tier: tierOf(article),
  publishedDate: article.publishedDate,
  lastUpdated: article.lastUpdated,
  signature: signatureOf(article.slug, article.title),
}));

const BY_SLUG = new Map(REGISTRY.map((e) => [e.slug, e]));

export function getRegistryEntry(slug: string): RegistryEntry | undefined {
  return BY_SLUG.get(ARTICLE_SLUG_ALIASES[slug] ?? slug);
}

/* ------------------------------------------------------------------ */
/*  §53 / §54 / §55 — duplicate + cannibalization prevention           */
/* ------------------------------------------------------------------ */

function jaccard(a: string[], b: string[]): number {
  const setB = new Set(b);
  const shared = a.filter((t) => setB.has(t)).length;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : shared / union;
}

/** Overlap at or above this ratio means the two pages chase one opportunity. */
export const SEMANTIC_DUPLICATE_THRESHOLD = 0.5;

export type DuplicateMatch = { slug: string; title: string; similarity: number };

export function findSemanticDuplicates(
  candidate: { slug: string; title: string },
  threshold = SEMANTIC_DUPLICATE_THRESHOLD,
): DuplicateMatch[] {
  const signature = signatureOf(candidate.slug, candidate.title);
  return REGISTRY.filter((e) => e.slug !== candidate.slug)
    .map((e) => ({ slug: e.slug, title: e.title, similarity: jaccard(signature, e.signature) }))
    .filter((m) => m.similarity >= threshold)
    .sort((a, b) => b.similarity - a.similarity);
}

export type CandidateVerdict =
  | { ok: true }
  | { ok: false; reason: string; conflicts: DuplicateMatch[] };

/**
 * Gate every new article through this before writing it. A candidate is
 * rejected when its slug already exists, when a retired alias points
 * elsewhere, or when it duplicates an existing page's meaning + intent +
 * journey stage (the cannibalization signature).
 */
export function validateCandidate(candidate: {
  slug: string;
  title: string;
  intent: SearchIntent;
  journeyStage: JourneyStage;
  cluster: string;
}): CandidateVerdict {
  if (BY_SLUG.has(candidate.slug)) {
    return { ok: false, reason: "Slug already published.", conflicts: [] };
  }
  if (ARTICLE_SLUG_ALIASES[candidate.slug]) {
    return { ok: false, reason: "Slug is a retired alias.", conflicts: [] };
  }
  const semantic = findSemanticDuplicates(candidate);
  if (semantic.length > 0) {
    return { ok: false, reason: "Semantic duplicate of an existing page.", conflicts: semantic };
  }
  const cannibal = REGISTRY.filter(
    (e) =>
      e.cluster === candidate.cluster &&
      e.intent === candidate.intent &&
      e.journeyStage === candidate.journeyStage,
  ).map((e) => ({ slug: e.slug, title: e.title, similarity: 1 }));
  if (cannibal.length > 0) {
    return {
      ok: false,
      reason: `Cluster "${candidate.cluster}" already covers ${candidate.intent} / ${candidate.journeyStage}.`,
      conflicts: cannibal,
    };
  }
  return { ok: true };
}

/* ------------------------------------------------------------------ */
/*  §24 / §29 — distribution + coverage validation                     */
/* ------------------------------------------------------------------ */

/** Target intent mix from §24, expressed as percentages. */
export const INTENT_TARGETS: Record<SearchIntent, number> = {
  Informational: 20,
  "Commercial Investigation": 20,
  Transactional: 20,
  Procurement: 15,
  Installation: 10,
  Maintenance: 10,
  Troubleshooting: 5,
};

export function intentDistribution() {
  const total = REGISTRY.length || 1;
  return SEARCH_INTENTS.map((intent) => {
    const count = REGISTRY.filter((e) => e.intent === intent).length;
    const actual = Math.round((count / total) * 1000) / 10;
    return { intent, count, actual, target: INTENT_TARGETS[intent], delta: actual - INTENT_TARGETS[intent] };
  });
}

export function coverageReport() {
  const byCluster = (label: string) => REGISTRY.filter((e) => e.cluster === label);
  return {
    total: REGISTRY.length,
    tierA: REGISTRY.filter((e) => e.tier === "A").length,
    tierB: REGISTRY.filter((e) => e.tier === "B").length,
    categories: PRIMARY_CATEGORIES.map((label) => ({
      label,
      articles: byCluster(label).length,
      flagship: byCluster(label).filter((e) => e.tier === "A").length,
    })),
    manufacturers: ALL_MANUFACTURERS.map((label) => ({
      label,
      articles: REGISTRY.filter((e) => e.manufacturers.includes(label)).length,
    })),
    services: SERVICES.map((service) => ({
      slug: service.slug,
      title: service.title,
      articles: REGISTRY.filter((e) => jaccard(e.signature, signatureOf(service.title)) >= 0.3)
        .length,
    })),
    journeyStages: JOURNEY_STAGES.map((stage) => ({
      stage,
      articles: REGISTRY.filter((e) => e.journeyStage === stage).length,
    })),
    intents: intentDistribution(),
  };
}

/** Clusters with no pillar-tier article yet — the next production priority. */
export function missingPillars(): string[] {
  return PRIMARY_CATEGORIES.filter(
    (label) => !REGISTRY.some((e) => e.cluster === label && e.tier === "A"),
  );
}
