import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import cathlab from "@/assets/hero-cathlab.jpg";
import mri from "@/assets/sol-mri.jpg";
import petct from "@/assets/sol-petct.jpg";
import ct from "@/assets/sol-ct.jpg";
import carm from "@/assets/sol-carm.jpg";
import mammo from "@/assets/sol-mammo.jpg";

type Sol = { title: string; desc: string; img?: string; span?: string };

const SOLUTIONS: Sol[] = [
  { title: "Cath Lab Systems", desc: "Advanced imaging for interventional cardiology procedures.", img: cathlab, span: "lg:col-span-2 lg:row-span-2" },
  { title: "MRI Scanners", desc: "High-field magnetic resonance imaging.", img: mri },
  { title: "PET/CT Scanners", desc: "Molecular & functional imaging.", img: petct },
  { title: "CT Scanners", desc: "Fast, high-resolution diagnostics.", img: ct },
  { title: "C-Arm Systems", desc: "Mobile surgical fluoroscopy.", img: carm },
  { title: "Mammography Systems", desc: "Digital & 3D women's imaging.", img: mammo, span: "lg:col-span-2" },
  { title: "Drug-Eluting Stents (DES)", desc: "Interventional cardiology consumables." },
  { title: "X-Ray Systems", desc: "Digital radiography solutions." },
  { title: "Bone Densitometers (DEXA)", desc: "Precise bone density assessment." },
  { title: "Lithotripsy (ESWL)", desc: "Non-invasive stone treatment." },
];

function Card({ s }: { s: Sol }) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`group relative flex min-h-[180px] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-ink text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-24px_rgba(15,23,42,0.5)] ${s.span ?? ""}`}
    >
      {s.img ? (
        <>
          <img
            src={s.img}
            alt={s.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-white" />
      )}
      <div className={`relative z-10 p-5 ${s.img ? "" : "text-ink"}`}>
        <h3 className="font-display text-lg font-bold">{s.title}</h3>
        <p className={`mt-1 text-sm ${s.img ? "text-white/75" : "text-muted-foreground"}`}>{s.desc}</p>
      </div>
      <span
        className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white ${
          s.img ? "bg-white/15 text-white backdrop-blur" : "bg-primary/10 text-primary"
        }`}
      >
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
      </span>
    </motion.a>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Explore Our Solutions
            </span>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold text-ink sm:text-4xl">
              Advanced Solutions for Every Department
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            View All Categories
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((s) => (
            <Card key={s.title} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
