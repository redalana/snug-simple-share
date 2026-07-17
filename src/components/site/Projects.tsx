import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building2, Layers } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Eyebrow } from "./Eyebrow";
import p1 from "@/assets/project-1.jpg";

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow index="02">Featured Project</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Delivering Excellence Across Africa &amp; the Middle East
            </h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Single highlighted case study */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl bg-ink text-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.15)] ring-1 ring-black/5 transition-all duration-300 hover:shadow-[0_40px_80px_-32px_rgba(15,23,42,0.55)]"
        >
          <img
            src={p1}
            alt="King Fahad Cardiac Center"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <span className="absolute left-7 top-7 z-10 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
            Featured Project
          </span>
          <div className="relative z-10 max-w-2xl p-7 lg:p-10">
            <span className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold text-white/70">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Riyadh, Saudi Arabia
            </span>
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
              King Fahad Cardiac Center
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/75">
              Philips Allura Xper FD10 Cath Lab — full supply, installation &amp;
              commissioning delivered on schedule with complete biomedical
              engineering handover and clinical applications training.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/85 ring-1 ring-white/15 backdrop-blur">
                <Building2 className="h-3.5 w-3.5 text-primary" /> Cath Lab
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/85 ring-1 ring-white/15 backdrop-blur">
                <Layers className="h-3.5 w-3.5 text-primary" /> Turnkey Installation
              </span>
            </div>
            <Link
              to="/projects"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
            >
              View Case Study
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
