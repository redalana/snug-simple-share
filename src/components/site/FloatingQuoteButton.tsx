import { useEffect, useRef, useState } from "react";
import { FileText } from "lucide-react";
import { openQuoteModal, onQuoteModalState } from "@/lib/quote-modal";

/**
 * Sits 20px above the floating WhatsApp button (which uses --af-wa-base
 * of 90px mobile / 120px desktop). Total offset = base + 60px (WA button)
 * + 20px gap.
 */
export function FloatingQuoteButton() {
  const [footerLift, setFooterLift] = useState(0);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const footer = document.querySelector("footer");
    if (!footer) return;

    const compute = () => {
      const rect = footer.getBoundingClientRect();
      const vh = window.innerHeight;
      const overlap = vh - rect.top;
      setFooterLift(Math.max(0, overlap + 40));
    };
    observer.current = new IntersectionObserver(compute, {
      threshold: [0, 0.01, 0.1, 0.25, 0.5, 0.75, 1],
    });
    observer.current.observe(footer);
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    compute();
    return () => {
      observer.current?.disconnect();
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <>
      <style>{`
        .af-quote-wrap { --af-quote-base: 170px; }
        @media (min-width: 1024px) { .af-quote-wrap { --af-quote-base: 200px; } }
      `}</style>
      <div
        className="af-quote-wrap fixed right-4 z-[90] transition-[bottom] duration-300 ease-out sm:right-6"
        style={{ bottom: `calc(var(--af-quote-base) + ${footerLift}px)` }}
      >
        <button
          type="button"
          onClick={() => openQuoteModal({ source: "floating" })}
          aria-label="Request a quote"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_-10px_var(--primary)] transition-all duration-[220ms] ease-out hover:scale-[1.04] hover:shadow-[0_16px_36px_-10px_var(--primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 sm:px-5 sm:py-3.5"
        >
          <FileText className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          <span className="hidden sm:inline">Request a Quote</span>
          <span className="sm:hidden">Quote</span>
        </button>
      </div>
    </>
  );
}
