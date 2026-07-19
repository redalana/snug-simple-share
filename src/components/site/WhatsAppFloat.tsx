import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const WA_URL =
  "https://wa.me/962799741318?text=Hello%20AbuFarha%20Medical%20Supplies,%20I%20would%20like%20to%20inquire%20about%20your%20medical%20equipment.";
const TOOLTIP_STORAGE_KEY = "af_wa_tooltip_dismissed";

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const footerObserver = useRef<IntersectionObserver | null>(null);
  const [nearFooter, setNearFooter] = useState(false);

  // Tooltip: desktop only, appears after a delay, auto-hides, remembers dismissal.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;
    try {
      if (sessionStorage.getItem(TOOLTIP_STORAGE_KEY) === "1") return;
    } catch {
      /* noop */
    }
    const showT = window.setTimeout(() => setShowTooltip(true), 2500);
    const hideT = window.setTimeout(() => setShowTooltip(false), 10000);
    return () => {
      window.clearTimeout(showT);
      window.clearTimeout(hideT);
    };
  }, []);

  // Avoid overlapping the footer: watch the site footer and lift the button when it enters view.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const footer = document.querySelector("footer");
    if (!footer) return;
    footerObserver.current = new IntersectionObserver(
      (entries) => setNearFooter(entries[0]?.isIntersecting ?? false),
      { rootMargin: "0px 0px -20px 0px", threshold: 0 },
    );
    footerObserver.current.observe(footer);
    return () => footerObserver.current?.disconnect();
  }, []);

  const dismissTooltip = () => {
    setShowTooltip(false);
    try {
      sessionStorage.setItem(TOOLTIP_STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
  };

  return (
    <>
      <style>{`
        @keyframes af-wa-pulse {
          0%, 88%, 100% { box-shadow: 0 10px 25px -8px rgba(37,211,102,0.55), 0 0 0 0 rgba(37,211,102,0.55); }
          92% { box-shadow: 0 10px 25px -8px rgba(37,211,102,0.55), 0 0 0 14px rgba(37,211,102,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .af-wa-btn { animation: none !important; }
        }
      `}</style>
      <div
        className="fixed left-6 z-[90] flex items-end gap-3 transition-[bottom] duration-300 ease-out"
        style={{ bottom: nearFooter ? "calc(24px + 80px)" : "24px" }}
      >
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          onClick={dismissTooltip}
          className="af-wa-btn group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-8px_rgba(37,211,102,0.55)] transition-transform duration-200 ease-out hover:scale-[1.08] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:h-[60px] sm:w-[60px]"
          style={{ animation: "af-wa-pulse 6s ease-in-out infinite" }}
        >
          <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
        </a>

        {showTooltip && (
          <div
            role="status"
            className="hidden animate-fade-in items-start gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-[0_20px_45px_-20px_rgba(15,23,42,0.35)] lg:flex"
          >
            <div className="min-w-0">
              <div className="text-sm font-semibold text-foreground">Need help?</div>
              <div className="text-xs text-muted-foreground">Chat with us on WhatsApp</div>
            </div>
            <button
              type="button"
              onClick={dismissTooltip}
              aria-label="Dismiss WhatsApp tooltip"
              className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
