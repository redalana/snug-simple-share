/**
 * Tiny memoisation primitives for the content / knowledge-graph layer.
 *
 * The graph is derived entirely from static module data, so every derivation
 * is pure and safe to cache for the lifetime of the module. Caching happens
 * here — not inside each helper — so that graph construction and query results
 * are computed at most once per process (per SSR worker, per browser tab).
 */

/** Defer an expensive derivation until first use, then reuse it forever. */
export function lazy<T>(factory: () => T): () => T {
  let computed = false;
  let value: T;
  return () => {
    if (!computed) {
      value = factory();
      computed = true;
    }
    return value;
  };
}

/** Memoise a single-argument pure function keyed by a string. */
export function memoize1<A extends string, R>(fn: (arg: A) => R): (arg: A) => R {
  const cache = new Map<A, R>();
  return (arg: A) => {
    if (cache.has(arg)) return cache.get(arg)!;
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}

/** Memoise a function of several arguments using a caller-supplied key. */
export function memoizeKeyed<Args extends unknown[], R>(
  fn: (...args: Args) => R,
  keyOf: (...args: Args) => string,
): (...args: Args) => R {
  const cache = new Map<string, R>();
  return (...args: Args) => {
    const key = keyOf(...args);
    if (cache.has(key)) return cache.get(key)!;
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
