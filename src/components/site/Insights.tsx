import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import featured from "@/assets/project-1.jpg";
import a1 from "@/assets/sol-mri.jpg";
import a2 from "@/assets/sol-ct.jpg";
import a3 from "@/assets/beyond-cathlab.jpg";

const FEATURED = {
  img: featured,
  category: "Clinical Insight",
  date: "June 2026",
  title: "Building a Complete Stroke Program: Beyond the Equipment",
  excerpt:
    "Successful stroke care depends on imaging, workflow, engineering and support working as one ecosystem. Here is what hospital leaders should plan for.",
};

const SECONDARY = [
  {
    img: a1,
    category: "Technology",
    date: "May 2026",
    title: "Choosing Between 1.5T and 3T MRI for Your Hospital",
  },
  {
    img: a2,
    category: "Operations",
    date: "April 2026",
    title: "Reducing CT Downtime with Preventive Maintenance",
  },
  {
    img: a3,
    category: "Engineering",
    date: "March 2026",
    title: "Why Site Readiness Determines Installation Success",
  },
];

export function Insights() {
  return (
    <section id="insights" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow index="07">Latest Insights</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Perspectives on Medical Technology &amp; Care
            </h2>
          </div>
          <a href="/contact" className="group inline-flex items-center gap-2 text-sm font-bold text-primary">
            View All Articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Featured article */}
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex min-h-[calc(380*var(--desktop-px-unit))] flex-col justify-end overflow-hidden rounded-2xl bg-ink text-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.15)] ring-1 ring-black/5 transition-all duration-300 hover:shadow-[0_40px_80px_-32px_rgba(15,23,42,0.55)]"
          >
            <img
              src={FEATURED.img}
              alt={FEATURED.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
            <div className="relative z-10 p-7">
              <div className="mb-3 flex items-center gap-3 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-wider">
                <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">
                  {FEATURED.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-white/70">
                  <Calendar className="h-3.5 w-3.5" /> {FEATURED.date}
                </span>
              </div>
              <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                {FEATURED.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75">
                {FEATURED.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.a>

          {/* Secondary articles */}
          <div className="grid gap-4">
            {SECONDARY.map((article) => (
              <motion.a
                href="/contact"
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group flex items-center gap-5 overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.12)] ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.4)]"
              >
                <div className="h-24 w-32 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={article.img}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0">
                  <div className="mb-1.5 flex items-center gap-2.5 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-wider">
                    <span className="text-primary">{article.category}</span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {article.date}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                </div>
                <ArrowUpRight className="ml-auto mr-2 h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
