const KEY = "af_recently_viewed_products";
const MAX = 4;

export function getRecentlyViewed(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function pushRecentlyViewed(slug: string) {
  if (typeof window === "undefined" || !slug) return;
  try {
    const prev = getRecentlyViewed().filter((s) => s !== slug);
    const next = [slug, ...prev].slice(0, MAX + 1);
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* noop */
  }
}
