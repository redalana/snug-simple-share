/**
 * Full-text projection of an article's content blocks.
 *
 * Manufacturer detection and the search index both need the article body, not
 * just its title and excerpt — brand names appear inside comparison tables,
 * reference lists and prose. The collector walks the block tree generically so
 * new block shapes are covered automatically, and it preserves original casing
 * because brand matching is case-sensitive for short names such as "GE".
 */

import type { Article, ContentBlock } from "@/lib/blog";

const MAX_DEPTH = 8;

function collect(value: unknown, out: string[], depth = 0): void {
  if (depth > MAX_DEPTH || value == null) return;
  if (typeof value === "string") {
    out.push(value);
    return;
  }
  if (Array.isArray(value)) {
    for (const v of value) collect(v, out, depth + 1);
    return;
  }
  if (typeof value === "object") {
    for (const v of Object.values(value as Record<string, unknown>)) collect(v, out, depth + 1);
  }
}

/** Every string in an article's content blocks, in document order. */
export function blocksText(blocks: readonly ContentBlock[]): string {
  const out: string[] = [];
  collect(blocks, out);
  return out.join(" ");
}

/** Title, summary, metadata and full body text of an article, casing preserved. */
export function articleFullText(article: Article): string {
  return [
    article.title,
    article.seoTitle ?? "",
    article.excerpt,
    article.metaDescription,
    article.focus ?? "",
    article.category,
    blocksText(article.content),
  ].join(" ");
}
