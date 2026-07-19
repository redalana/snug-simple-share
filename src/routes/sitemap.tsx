import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import heroImg from "@/assets/abufarha-hq.jpg";

const TITLE = "Sitemap | AbuFarha Medical Supplies";
const DESC =
  "Complete map of the AbuFarha Medical Supplies website — every product category, service, program, brand and support page in one place.";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.home },
      { property: "og:url", content: SITE_URL + "/sitemap" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/sitemap" }],
  }),
  component: SitemapRoute,
});

type Group = { title: string; links: { label: string; to: string }[] };

const GROUPS: Group[] = [
  {
    title: "Main",
    links: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Turnkey Projects", to: "/turnkey" },
      { label: "Services", to: "/services" },
      { label: "After Sales", to: "/after-sales" },
      { label: "Brands", to: "/brands" },
      { label: "Projects & Experience", to: "/projects" },
      { label: "Knowledge Center", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "All Products", to: "/products" },
      { label: "Cath Lab Systems", to: "/products/cath-lab" },
      { label: "MRI Scanners", to: "/products/mri-scanners" },
      { label: "PET/CT Scanners", to: "/products/pet-ct-scanners" },
      { label: "C-Arm Systems", to: "/products/c-arm-systems" },
      { label: "X-Ray Systems", to: "/products/x-ray-systems" },
      { label: "Mammography Systems", to: "/products/mammography-systems" },
      { label: "Bone Densitometers", to: "/products/bone-densitometers" },
      { label: "Lithotripsy (ESWL)", to: "/products/lithotripsy-eswl" },
      { label: "Drug-Eluting Stents", to: "/products/drug-eluting-stents" },
      { label: "Other Solutions", to: "/products/others" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Stroke Care Program", to: "/programs/stroke-care" },
      { label: "Hospital Readiness Assessment", to: "/hospital-readiness-assessment" },
      { label: "Categories Overview", to: "/categories" },
    ],
  },
  {
    title: "Legal & Support",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "FAQs", to: "/faqs" },
      { label: "Sitemap", to: "/sitemap" },
    ],
  },
];

function SitemapRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[calc(96*var(--desktop-px-unit))]">
        <PageHero
          eyebrow="Navigation"
          breadcrumb="Sitemap"
          title="Sitemap"
          description="A complete overview of every section, product category, program and support resource on the AbuFarha Medical Supplies website."
          backgroundImage={heroImg}
        />
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {GROUPS.map((g) => (
                <div key={g.title} className="rounded-2xl border border-border/70 bg-white p-6">
                  <h2 className="font-display text-lg font-black uppercase tracking-[0.16em] text-primary">
                    {g.title}
                  </h2>
                  <ul className="mt-4 space-y-2.5 text-[15px]">
                    {g.links.map((l) => (
                      <li key={l.to}>
                        <Link
                          to={l.to}
                          className="inline-block text-muted-foreground transition-colors hover:text-primary"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
