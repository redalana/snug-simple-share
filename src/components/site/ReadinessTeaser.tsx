import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ReadinessTeaser() {
  return (
    <section id="readiness" className="relative overflow-hidden bg-white py-20 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit))), linear-gradient(to bottom, var(--color-ink) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit)))",
          backgroundSize: "calc(48*var(--desktop-px-unit)) calc(48*var(--desktop-px-unit))",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center justify-center rounded-2xl bg-primary/[0.07] p-3 text-primary ring-1 ring-primary/10">
            <ClipboardCheck className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <div className="mt-6 flex justify-center">
            <Eyebrow index="06" align="center">Hospital Readiness</Eyebrow>
          </div>
          <h2 className="mt-5 font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[2.85rem]">
            Hospital Readiness Assessment
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[calc(16*var(--desktop-px-unit))] leading-[1.75] text-muted-foreground">
            Most installation delays come from the building, not the equipment.
            Check your facility, clinical and operational readiness before you
            invest — so your new technology goes live on schedule.
          </p>
          <Link
            to="/hospital-readiness-assessment"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_10px_24px_-10px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Start Your Assessment
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
