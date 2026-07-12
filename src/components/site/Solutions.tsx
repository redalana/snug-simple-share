import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import cathlab from "@/assets/hero-cathlab.jpg";
import mri from "@/assets/sol-mri.jpg";
import petct from "@/assets/sol-petct.jpg";
import ct from "@/assets/sol-ct.jpg";
import carm from "@/assets/sol-carm.jpg";
import mammo from "@/assets/sol-mammo.jpg";
import des from "@/assets/sol-des.jpg";
import xray from "@/assets/sol-xray.jpg";
import dexa from "@/assets/sol-dexa.jpg";
import eswl from "@/assets/sol-eswl.jpg";

type Sol = { title: string; desc: string; img: string; span?: string; featured?: boolean };

const SOLUTIONS: Sol[] = [
  { title: "Cath Lab", desc: "Interventional cardiology imaging.", img: cathlab, span: "lg:col-span-2 lg:row-span-2", featured: true },
  { title: "MRI Scanners", desc: "High-field magnetic resonance.", img: mri },
  { title: "PET/CT Scanners", desc: "Molecular & functional imaging.", img: petct },
  { title: "CT Scanners", desc: "Fast, high-resolution diagnostics.", img: ct },
  { title: "C-Arm Systems", desc: "Mobile surgical fluoroscopy.", img: carm },
  { title: "Mammography", desc: "Digital & 3D women's imaging.", img: mammo, span: "lg:col-span-2" },
  { title: "Stents (DES)", desc: "Cardiology consumables.", img: des },
  { title: "X-Ray Systems", desc: "Digital radiography.", img: xray },
  { title: "Bone Density (DEXA)", desc: "Precise bone assessment.", img: dexa },
  { title: "Lithotripsy (ESWL)", desc: "Non-invasive stone treatment.", img: eswl },
];

function Card({ s }: { s: Sol }) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`group relative flex min-h-[180px] flex-col justify-end overflow-hidden rounded-2xl bg-ink text-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.15)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_54px_-24px_rgba(15,23,42,0.5)] ${s.span ?? ""}`}
    >
      <img
        src={s.img}
        alt={s.title}
        loading="lazy"
        width={1024}
        height={768}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {/* subtle inset edge for a unified premium frame */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

      {s.featured && (
        <span className="absolute left-5 top-5 z-10 inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
          Featured
        </span>
      )}

      <div className={`relative z-10 ${s.featured ? "p-6 sm:p-7" : "p-5"}`}>
        <h3 className={`font-display font-bold leading-tight ${s.featured ? "text-2xl sm:text-3xl" : "text-lg"}`}>
          {s.title}
        </h3>
        <p className={`mt-1.5 text-white/75 ${s.featured ? "max-w-sm text-[15px]" : "text-sm"}`}>
          {s.desc}
        </p>
      </div>

      <span className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-all duration-300 group-hover:bg-primary group-hover:text-white">
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
