import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { onQuoteModalState } from "@/lib/quote-modal";

/**
 * Homepage-only floating pill stacked above the floating Quote button
 * (quote base 84/100px + quote height + 12px gap). Scrolls to #our-people.
 */
export function FloatingTeamButton() {
  const [footerLift, setFooterLift] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => onQuoteModalState(setModalOpen), []);

  useEffect(() => {
    const compute = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      const overlap = window.innerHeight - footer.getBoundingClientRect().top;
      setFooterLift(Math.max(0, overlap + 40));
    };
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    compute();
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  const goToTeam = () => {
    const el = document.getElementById("our-people");
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        .af-team-wrap { --af-team-base: 140px; }
        @media (min-width: 640px) { .af-team-wrap { --af-team-base: 148px; } }
        @media (min-width: 1024px) { .af-team-wrap { --af-team-base: 164px; } }
      `}</style>
      <aside
        aria-label="Meet our team"
        aria-hidden={modalOpen}
        className={`af-team-wrap fixed right-4 z-[90] transition-all duration-300 ease-out sm:right-6 ${modalOpen ? "pointer-events-none opacity-0 translate-y-2" : "opacity-100"}`}
        style={{
          bottom: `calc(var(--af-team-base) + env(safe-area-inset-bottom, 0px) + var(--af-cookie-bar, 0px) + ${footerLift}px)`,
        }}
      >
        <button
          type="button"
          onClick={goToTeam}
          aria-label="Meet our team"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-3 text-sm font-semibold text-primary shadow-[0_8px_20px_-8px_rgba(15,23,42,0.35)] transition-all duration-[220ms] ease-out hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 sm:px-5 sm:py-3.5"
        >
          <Users className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          <span className="hidden sm:inline">Meet Our Team</span>
          <span className="sm:hidden">Team</span>
        </button>
      </aside>
    </>
  );
}
