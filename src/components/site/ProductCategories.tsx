import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Eyebrow } from "./Eyebrow";

import cathlab from "@/assets/hero-cathlab.jpg";
import des from "@/assets/sol-des.jpg";
import petct from "@/assets/sol-petct.jpg";
import mri from "@/assets/sol-mri.jpg";
import carm from "@/assets/sol-carm.jpg";
import xray from "@/assets/sol-xray.jpg";
import mammo from "@/assets/sol-mammo.jpg";
import dexa from "@/assets/sol-dexa.jpg";
import eswl from "@/assets/sol-eswl.jpg";
import others from "@/assets/sol-ultrasound.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

type Category = { title: string; href: string; image: string; alt: string };

const CATEGORIES: Category[] = [
  {
    title: "Cath Lab",
    href: "/products/cath-lab",
    image: cathlab,
    alt: "Interventional cath lab suite supplied by AbuFarha Medical",
  },
  {
    title: "Drug-Eluting Stents (DES)",
    href: "/products/drug-eluting-stents",
    image: des,
    alt: "Drug-eluting coronary stent system supplied by AbuFarha Medical",
  },
  {
    title: "PET/CT Scanners",
    href: "/products/pet-ct-scanners",
    image: petct,
    alt: "Digital PET/CT molecular imaging system supported by AbuFarha Medical",
  },
  {
    title: "MRI Scanners",
    href: "/products/mri-scanners",
    image: mri,
    alt: "MRI scanner suite installed and serviced by AbuFarha Medical",
  },
  {
    title: "C-Arm Systems",
    href: "/products/c-arm-systems",
    image: carm,
    alt: "Mobile surgical C-arm fluoroscopy system supplied by AbuFarha Medical",
  },
  {
    title: "X-Ray Systems",
    href: "/products/x-ray-systems",
    image: xray,
    alt: "Digital radiography X-ray room installed by AbuFarha Medical",
  },
  {
    title: "Mammography Systems",
    href: "/products/mammography-systems",
    image: mammo,
    alt: "Digital mammography system supplied by AbuFarha Medical",
  },
  {
    title: "Bone Densitometers (DEXA)",
    href: "/products/bone-densitometers",
    image: dexa,
    alt: "DEXA bone densitometry system supplied by AbuFarha Medical",
  },
  {
    title: "Lithotripsy (ESWL)",
    href: "/products/lithotripsy-eswl",
    image: eswl,
    alt: "Extracorporeal shockwave lithotripsy system supported by AbuFarha Medical",
  },
  {
    title: "Others",
    href: "/products/others",
    image: others,
    alt: "Additional medical equipment categories supplied by AbuFarha Medical",
  },
];

/**
 * "Our Categories" — premium interactive category grid linking each product
 * family to its dedicated landing page.
 */
export function ProductCategories() {
  return (
    <section
      id="our-categories"
      aria-labelledby="our-categories-heading"
      className="relative overflow-hidden bg-background py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="max-w-[52ch]">
          <Eyebrow>Our Categories</Eyebrow>
          <h2
            id="our-categories-heading"
            className="mt-4 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[2.45rem]"
          >
            Explore our medical equipment categories
          </h2>
          <p className="mt-4 text-base leading-[1.7] text-muted-foreground/90">
            Certified imaging, interventional and diagnostic technologies — each supplied,
            installed, commissioned and supported by our biomedical engineering team.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {CATEGORIES.map((c, i) => (
            <motion.li
              key={c.href}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.05, ease: EASE }}
              className="min-w-0"
            >
              <Link
                to={c.href}
                className="group flex h-full flex-col overflow-hidden rounded-[1.15rem] border border-border/70 bg-card shadow-[0_10px_28px_-20px_rgba(15,23,42,0.45)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_26px_46px_-24px_rgba(15,23,42,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-secondary">
                  <img
                    src={c.image}
                    alt={c.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-2 px-4 py-4">
                  <span className="block h-[3px] w-8 rounded-full bg-primary transition-all duration-300 ease-out group-hover:w-14" />
                  <span className="flex min-w-0 items-start gap-1.5">
                    <span className="line-clamp-2 min-h-[2.6em] min-w-0 text-sm font-bold leading-[1.3] text-ink [overflow-wrap:anywhere]">
                      {c.title}
                    </span>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
