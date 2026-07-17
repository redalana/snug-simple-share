import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { PROJECTS } from "./data";

export function FeaturedProjects() {
  const [start, setStart] = useState(0);
  const perView = 4;
  const max = Math.max(0, PROJECTS.length - perView);
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_3fr] lg:items-end lg:gap-12">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-primary">
              Proven Excellence <ArrowRight className="h-3 w-3" />
            </p>
            <h2 className="mt-4 font-display text-[34px] font-extrabold leading-[1.05] sm:text-[40px]">
              Projects That<br />Make a Difference
            </h2>
            <a
              href="/projects"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_28px_50px_-24px_rgba(0,0,0,0.2)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold text-foreground shadow-sm">
                    {p.country}
                  </span>
                </div>
                <div className="p-5">
                  <div className="font-display text-[15px] font-bold leading-tight text-foreground">
                    {p.title}
                  </div>
                  <div className="mt-1 text-[13px] text-muted-foreground">{p.scope}</div>
                  <div className="mt-4 flex items-center gap-3 border-t border-black/5 pt-3 text-[11px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-primary/10 text-primary">
                        <Heart className="h-2.5 w-2.5" />
                      </span>
                      {p.tag}
                    </span>
                    <span className="h-3 w-px bg-black/10" />
                    <span>{p.year}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end gap-2">
          <button
            onClick={() => setStart(Math.max(0, start - 1))}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground hover:border-foreground disabled:opacity-40"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setStart(Math.min(max, start + 1))}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground hover:border-foreground disabled:opacity-40"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
