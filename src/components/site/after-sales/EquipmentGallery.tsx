import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EQUIPMENT, type EquipmentItem } from "./data";

function EquipmentCard({ item, index }: { item: EquipmentItem; index: number }) {
  return (
    <motion.a
      href={item.href}
      aria-label={`View ${item.name} in our product portfolio`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: (index % 4) * 0.05 }}
      className="group block min-w-0 overflow-hidden rounded-2xl bg-ink shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_55px_-20px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/5 to-transparent transition-colors duration-300 group-hover:from-ink/85 group-hover:via-ink/15" />
      </div>

      <div className="grid min-h-[96px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-ink px-5 py-4 sm:px-6">
        <h3 className="min-w-0 font-display text-[1.35rem] font-extrabold leading-tight text-white sm:text-[1.5rem]">
          {item.name}
        </h3>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-[transform,background-color] duration-300 group-hover:translate-x-1 group-hover:bg-primary">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </motion.a>
  );
}

export function EquipmentGallery() {
  return (
    <section className="relative bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Equipment We Support
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Every modality.
              <br />
              Every major brand.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Siemens, Philips, GE Healthcare, Canon, Hologic and more — our
            engineers are certified across the full portfolio of diagnostic and
            interventional systems we deliver.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {EQUIPMENT.map((item, index) => (
            <EquipmentCard key={item.name} item={item} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
}
