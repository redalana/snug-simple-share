import { useEffect, useState, type ReactNode } from "react";

/**
 * Renders children only after client-side hydration. Used to gate
 * React Three Fiber canvases which cannot SSR and to allow low-end /
 * reduced-motion devices to fall back to a static poster.
 */
export function ClientOnly3D({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia?.("(max-width: calc(640*var(--desktop-px-unit)))").matches;
    if (reduced || mobile) return; // keep static fallback
    setReady(true);
  }, []);
  return <>{ready ? children : fallback}</>;
}
