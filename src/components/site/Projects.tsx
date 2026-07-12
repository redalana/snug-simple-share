import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Featured Projects
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Delivering Excellence Across Africa &amp; the Middle East
            </h2>
          </div>
          <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-bold text-primary">
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Featured large */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-2xl bg-ink text-white shadow-lg"
          >
            <img
              src={p1}
              alt="King Fahad Cardiac Center"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="relative z-10 p-7">
              <span className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold text-white/70">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Riyadh, Saudi Arabia
              </span>
              <h3 className="font-display text-2xl font-extrabold">King Fahad Cardiac Center</h3>
              <p className="mt-1 text-sm text-white/75">
                Philips Allura Xper FD10 Cath Lab — full supply, installation &amp; commissioning.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                View Case Study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.a>

          {/* Two smaller */}
          <div className="grid gap-4">
            {[
              { img: p2, name: "Aster Hospital", loc: "Dubai, UAE", dept: "Multiple Departments" },
              { img: p3, name: "Nile Medical Center", loc: "Cairo, Egypt", dept: "MRI & CT Systems" },
            ].map((proj) => (
              <motion.a
                href="#contact"
                key={proj.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group flex items-center gap-5 overflow-hidden rounded-2xl border border-border bg-white p-3 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-28 w-40 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={proj.img}
                    alt={proj.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{proj.name}</h3>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary" /> {proj.loc}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{proj.dept}</p>
                </div>
                <ArrowRight className="ml-auto mr-3 h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
