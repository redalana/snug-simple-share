/**
 * The automatic relationship engine.
 *
 * Relationships are never hand-maintained. Two items are related when their
 * normalised taxonomy facets overlap; the amount of overlap becomes a
 * relevance score, and results are returned strongest-first.
 *
 * Weights are intentionally ordered by how strongly each facet signals topical
 * identity: technology (the modality) is the primary axis of this site, so it
 * dominates; manufacturer and specialty are strong secondary axes; tags break
 * ties.
 */

import type { ContentItem, ContentType, ScoredContentItem } from "./types";

export const RELATION_WEIGHTS = {
  technology: 10,
  manufacturer: 6,
  clinicalApplication: 5,
  specialty: 4,
  country: 2,
  equipmentType: 3,
  primaryCategory: 3,
  tag: 1,
  explicit: 25,
  featured: 0.5,
} as const;

function overlap<T>(a: readonly T[], b: readonly T[]): number {
  if (!a.length || !b.length) return 0;
  const set = new Set(b);
  let n = 0;
  for (const v of a) if (set.has(v)) n++;
  return n;
}

function lower(values: readonly string[]): string[] {
  return values.map((v) => v.toLowerCase());
}

/** Score how strongly `candidate` relates to `subject`. 0 means unrelated. */
export function relevanceScore(subject: ContentItem, candidate: ContentItem): number {
  if (subject.id === candidate.id) return 0;

  let score = 0;
  score += overlap(subject.technologies, candidate.technologies) * RELATION_WEIGHTS.technology;
  score += overlap(subject.manufacturers, candidate.manufacturers) * RELATION_WEIGHTS.manufacturer;
  score += overlap(lower(subject.specialties), lower(candidate.specialties)) * RELATION_WEIGHTS.specialty;
  score +=
    overlap(lower(subject.equipmentTypes), lower(candidate.equipmentTypes)) *
    RELATION_WEIGHTS.equipmentType;
  score +=
    overlap(subject.clinicalApplications ?? [], candidate.clinicalApplications ?? []) *
    RELATION_WEIGHTS.clinicalApplication;
  score += overlap(subject.countries ?? [], candidate.countries ?? []) * RELATION_WEIGHTS.country;
  score += overlap(subject.tags, candidate.tags) * RELATION_WEIGHTS.tag;

  if (
    subject.primaryCategory &&
    candidate.primaryCategory &&
    subject.primaryCategory.toLowerCase() === candidate.primaryCategory.toLowerCase()
  ) {
    score += RELATION_WEIGHTS.primaryCategory;
  }

  // Explicit, author-declared relations always outrank inferred ones.
  const explicit =
    (candidate.type === "product" && subject.relatedProducts?.includes(candidate.slug)) ||
    (candidate.type === "service" &&
      (subject.relatedServices?.includes(candidate.slug) ||
        subject.relatedServices?.some((s) => s.toLowerCase() === candidate.title.toLowerCase()))) ||
    (candidate.type === "article" && subject.relatedArticles?.includes(candidate.slug));
  if (explicit) score += RELATION_WEIGHTS.explicit;

  if (score > 0 && candidate.featured) score += RELATION_WEIGHTS.featured;

  return score;
}

/**
 * Rank a pool of candidates against a subject item.
 * Ties are broken deterministically by title so SSR and client agree.
 */
export function rankRelated(
  subject: ContentItem,
  pool: readonly ContentItem[],
  options: { type?: ContentType; limit?: number; minScore?: number } = {},
): ScoredContentItem[] {
  const { type, limit, minScore = 1 } = options;
  const scored: ScoredContentItem[] = [];

  for (const candidate of pool) {
    if (type && candidate.type !== type) continue;
    const relevance = relevanceScore(subject, candidate);
    if (relevance >= minScore) scored.push({ ...candidate, relevance });
  }

  scored.sort((a, b) => b.relevance - a.relevance || a.title.localeCompare(b.title));
  return typeof limit === "number" ? scored.slice(0, limit) : scored;
}
