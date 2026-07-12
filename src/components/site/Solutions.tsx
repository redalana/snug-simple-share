import { motion } from "framer-motion";
import { ArrowUpRight, HeartPulse, ScanLine, Bone, Zap, type LucideIcon } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import cathlab from "@/assets/hero-cathlab.jpg";
import mri from "@/assets/sol-mri.jpg";
import petct from "@/assets/sol-petct.jpg";
import ct from "@/assets/sol-ct.jpg";
import carm from "@/assets/sol-carm.jpg";
import mammo from "@/assets/sol-mammo.jpg";

type Sol = { title: string; desc: string; img?: string; span?: string; icon?: LucideIcon };

const SOLUTIONS: Sol[] = [
  { title: "Cath Lab Systems", desc: "Advanced imaging for interventional cardiology procedures.", img: cathlab, span: "lg:col-span-2 lg:row-span-2" },
  { title: "MRI Scanners", desc: "High-field magnetic resonance imaging.", img: mri },
  { title: "PET/CT Scanners", desc: "Molecular & functional imaging.", img: petct },
  { title: "CT Scanners", desc: "Fast, high-resolution diagnostics.", img: ct },
  { title: "C-Arm Systems", desc: "Mobile surgical fluoroscopy.", img: carm },
  { title: "Mammography Systems", desc: "Digital & 3D women's imaging.", img: mammo, span: "lg:col-span-2" },
  { title: "Drug-Eluting Stents (DES)", desc: "Interventional cardiology consumables.", icon: HeartPulse },
  { title: "X-Ray Systems", desc: "Digital radiography solutions.", icon: ScanLine },
  { title: "Bone Densitometers (DEXA)", desc: "Precise bone density assessment.", icon: Bone },
  { title: "Lithotripsy (ESWL)", desc: "Non-invasive stone treatment.", icon: Zap },
];

function Card({ s }: { s: Sol }) {
  const Icon = s.icon;
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`group relative flex min-h-[180px] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-ink text-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.15)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_54px_-24px_rgba(15,23,42,0.5)] ${s.span ?? ""}`}
    >
      {s.img ? (
        <>
          <img
            src={s.img}
            alt={s.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white to-secondary" />
          <div
            className="absolute inset-0 opacity-[0.4] transition-opacity duration-500 group-hover:opacity-70"
            style={{
              backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1.4px)",
              backgroundSize: "16px 16px",
              maskImage: "linear-gradient(to top left, black, transparent 70%)",
              WebkitMaskImage: "linear-gradient(to top left, black, transparent 70%)",
            }}
          />
          {Icon && (
            <Icon
              className="absolute -right-3 -top-3 h-24 w-24 text-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/[0.16]"
              strokeWidth={1.25}
            />
          )}
          {Icon && (
            <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
          )}
          <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-primary-dark transition-transform duration-300 group-hover:scale-x-100" />
        </>
      )}
      <div className={`relative z-10 p-5 ${s.img ? "" : "text-ink"}`}>
        <h3 className="font-display text-lg font-bold">{s.title}</h3>
        <p className={`mt-1 text-sm ${s.img ? "text-white/75" : "text-muted-foreground"}`}>{s.desc}</p>
      </div>
      <span
        className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white ${
          s.img ? "bg-white/15 text-white backdrop-blur" : "bg-primary/10 text-primary opacity-0 group-hover:opacity-100"
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
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow index="01">Explore Our Solutions</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-[2rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[2.45rem]">
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
