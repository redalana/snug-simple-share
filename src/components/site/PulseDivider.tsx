import { motion } from "framer-motion";

/**
 * The AbuFarha signature: a single heartbeat that travels across the page,
 * stitching one section into the next. It is the same pulse that appears in
 * the stats band and the closing CTA — used deliberately here as connective
 * tissue so the homepage reads as one continuous experience, not a stack of
 * sections. A living cardiac line is unmistakably medical, and unmistakably
 * AbuFarha.
 */
export function PulseDivider({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const stroke = tone === "dark" ? "text-white/40" : "text-primary/45";
  const lineBg = tone === "dark" ? "bg-white/10" : "bg-border";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      aria-hidden
    >
      {/* faint baseline the pulse rides along */}
      <span className={`absolute inset-x-0 top-1/2 h-px -translate-y-1/2 ${lineBg}`} />
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className={`relative h-14 w-full ${stroke}`}
      >
        <motion.path
          d="M0 30 H470 l14-22 12 40 10-30 9 12 8-6 h647"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      {/* the beat itself — a bright node that pulses on the spike */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: 0.9, type: "spring", stiffness: 240 }}
        className="absolute left-[41%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_6px_color-mix(in_oklab,var(--primary)_22%,transparent)]"
      />
    </div>
  );
}
