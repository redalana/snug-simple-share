import { motion } from "framer-motion";
import { MapPin, Building2, Layers } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

type Project = {
  img: string;
  name: string;
  loc: string;
  type: string;
  scope: string;
  desc: string;
};

const PROJECTS: Project[] = [
  {
    img: p1,
    name: "King Fahad Cardiac Center",
    loc: "Riyadh, Saudi Arabia",
    type: "Cath Lab",
    scope: "Turnkey Installation",
    desc: "Philips Allura Xper FD10 Cath Lab — full supply, installation & commissioning with complete biomedical engineering handover and clinical applications training.",
  },
  {
    img: p2,
    name: "Aster Hospital",
    loc: "Dubai, UAE",
    type: "Multi-Modality",
    scope: "8 Departments Equipped",
    desc: "Comprehensive multi-department equipment supply and installation across imaging, cardiology and diagnostics, with a unified after-sales support plan.",
  },
  {
    img: p3,
    name: "Nile Medical Center",
    loc: "Cairo, Egypt",
    type: "Diagnostic Imaging",
    scope: "MRI & CT Installation",
    desc: "MRI and CT scanner supply, installation and commissioning — including site readiness engineering, shielding coordination and operator training.",
  },
];

export function ProjectsGrid() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="max-w-2xl">
          <Eyebrow index="01">Case Studies</Eyebrow>
          <h1 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.85rem]">
            Projects Delivered Across Africa &amp; the Middle East
          </h1>
          <p className="mt-5 text-[16px] leading-[1.75] text-muted-foreground">
            A selection of hospitals and medical centers where AbuFarha has
            supplied, installed, commissioned and supported advanced medical
            technology.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.4)]"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={proj.img}
                  alt={proj.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow">
                  Case Study
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {proj.loc}
                </p>
                <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-primary">
                  {proj.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {proj.desc}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    <Building2 className="h-3 w-3" /> {proj.type}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    <Layers className="h-3 w-3 text-primary" /> {proj.scope}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
