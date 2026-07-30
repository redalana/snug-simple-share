import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroCathlab from "@/assets/hero-cathlab.jpg";
import solMri from "@/assets/sol-mri.jpg";
import solCt from "@/assets/sol-ct.jpg";
import solPetct from "@/assets/sol-petct.jpg";
import solMammo from "@/assets/sol-mammo.jpg";
import solCarm from "@/assets/sol-carm.jpg";
import solXray from "@/assets/sol-xray.jpg";
import solDexa from "@/assets/sol-dexa.jpg";
import solEswl from "@/assets/sol-eswl.jpg";
import beyondCathlab from "@/assets/beyond-cathlab.jpg";
import whyCathlab from "@/assets/why-cathlab.jpg";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

const CATEGORIES = [
  { name: "Cath Lab", count: "42 systems", image: heroCathlab },
  { name: "MRI", count: "38 systems", image: solMri },
  { name: "CT", count: "45 systems", image: solCt },
  { name: "PET/CT", count: "18 systems", image: solPetct },
  { name: "Women Healthcare", count: "26 systems", image: solMammo },
  { name: "Ultrasound", count: "34 systems", image: whyCathlab },
  { name: "X-Ray", count: "40 systems", image: solXray },
  { name: "C-Arms", count: "22 systems", image: solCarm },
  { name: "Mammography", count: "19 systems", image: solMammo },
  { name: "Operating Room", count: "28 systems", image: beyondCathlab },
  { name: "Bone Densitometry", count: "12 systems", image: solDexa },
  { name: "Lithotripsy", count: "9 systems", image: solEswl },
];

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Medical Technology Categories | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Explore all medical technology categories offered by AbuFarha Medical — from Cath Lab and MRI to Operating Room and Ultrasound systems for healthcare providers.",
      },
      { property: "og:title", content: "Medical Technology Categories | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Browse every category of certified medical systems available through AbuFarha Medical.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/categories" },
      { property: "og:image", content: OG_IMAGES.categories },
      { name: "twitter:image", content: OG_IMAGES.categories },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/categories" }],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        {/* HERO */}
        <section className="border-b border-border/60 bg-secondary">
          <div className="mx-auto max-w-[100rem] px-6 py-16 lg:px-10 lg:py-20">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to portfolio
            </Link>
            <span className="mt-6 inline-block h-1 w-12 rounded-full bg-primary" />
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Medical Technology Categories
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Explore our complete range of certified medical technology categories, curated for
              hospitals, clinics and healthcare providers.
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="mx-auto max-w-[100rem] px-6 py-12 lg:px-10 lg:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/products"
                  className="group block overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_10px_30px_-20px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.28)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                        {cat.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{cat.count}</p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
