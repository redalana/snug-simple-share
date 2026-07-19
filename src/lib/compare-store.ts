import { useEffect, useState } from "react";

const KEY = "af_compare_slugs";
export const MAX_COMPARE = 4;

type Listener = (slugs: string[]) => void;
const listeners = new Set<Listener>();

function read(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function write(next: string[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* noop */
  }
  listeners.forEach((l) => l(next));
}

export function getCompare() {
  return read();
}

export function toggleCompare(slug: string): boolean {
  const cur = read();
  if (cur.includes(slug)) {
    write(cur.filter((s) => s !== slug));
    return false;
  }
  if (cur.length >= MAX_COMPARE) return false;
  write([...cur, slug]);
  return true;
}

export function removeCompare(slug: string) {
  write(read().filter((s) => s !== slug));
}

export function clearCompare() {
  write([]);
}

export function useCompare() {
  // Start empty on both server and first client render to avoid hydration
  // mismatch; hydrate from localStorage in useEffect.
  const [slugs, setSlugs] = useState<string[]>([]);
  useEffect(() => {
    setSlugs(read());
    const l: Listener = (s) => setSlugs(s);
    listeners.add(l);
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setSlugs(read());
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(l);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  return slugs;
}
