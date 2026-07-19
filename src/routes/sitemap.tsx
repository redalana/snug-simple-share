import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Package,
  Wrench,
  Building2,
  BookOpen,
  Headphones,
  Scale,
  MessageCircle,
  Send,
  Phone,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import heroImg from "@/assets/sol-ct.jpg";

const TITLE = "Sitemap | AbuFarha Medical Supplies";
const DESC =
  "Browse the complete AbuFarha Medical Supplies website including products, services, support, legal pages and company information.";

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

type Group = {
  Icon: typeof Package;
  title: string;
  links: { label: string; to: string }[];
};

const GROUPS: Group[] = [
  {
    Icon: Package,
    title: "Products",
    links: [
      { label: "Cath Lab Systems", to: "/products/cath-lab" },
      { label: "MRI Systems", to: "/products/mri-scanners" },
      { label: "CT Scanners", to: "/products" },
      { label: "PET/CT Scanners", to: "/products/pet-ct-scanners" },
      { label: "X-Ray Systems", to: "/products/x-ray-systems" },
      { label: "C-Arms", to: "/products/c-arm-systems" },
      { label: "Mammography Systems", to: "/products/mammography-systems" },
      { label: "Bone Densitometers (DEXA)", to: "/products/bone-densitometers" },
      { label: "Lithotripsy (ESWL)", to: "/products/lithotripsy-eswl" },
      { label: "Others", to: "/products/others" },
    ],
  },
  {
    Icon: Wrench,
    title: "Services",
    links: [
      { label: "Installation & Commissioning", to: "/services" },
      { label: "Biomedical Engineering", to: "/services" },
      { label: "Clinical Training", to: "/services" },
      { label: "Preventive Maintenance", to: "/after-sales" },
      { label: "Corrective Maintenance", to: "/after-sales" },
      { label: "Spare Parts", to: "/after-sales" },
      { label: "Technical Support", to: "/after-sales" },
      { label: "Warranty Support", to: "/after-sales" },
    ],
  },
  {
    Icon: Building2,
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Turnkey Solutions", to: "/turnkey" },
      { label: "Brands", to: "/brands" },
      { label: "Global Presence", to: "/projects" },
      { label: "Why Choose AbuFarha", to: "/about" },
      { label: "Knowledge Center", to: "/blog" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    Icon: BookOpen,
    title: "Knowledge Center",
    links: [
      { label: "Articles", to: "/blog" },
      { label: "News", to: "/blog" },
      { label: "Resources", to: "/blog" },
      { label: "Case Studies", to: "/blog" },
      { label: "Events", to: "/blog" },
    ],
  },
  {
    Icon: Headphones,
    title: "Support",
    links: [
      { label: "Warranty", to: "/after-sales" },
      { label: "After Sales", to: "/after-sales" },
      { label: "Service Contracts", to: "/after-sales" },
      { label: "Technical Support", to: "/after-sales" },
      { label: "FAQs", to: "/faqs" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    Icon: Scale,
    title: "Legal",
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
          description="Navigate the AbuFarha Medical Supplies website quickly and easily."
          backgroundImage={heroImg}
        />

        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {GROUPS.map(({ Icon, title, links }, i) => (
                <article
                  key={title}
                  className="group flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-7"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-base font-black text-foreground">
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      <h2 className="font-display text-[17px] font-black tracking-tight text-foreground">
                        {title}
                      </h2>
                    </div>
                  </div>

                  <div
                    aria-hidden
                    className="my-5 h-px w-full bg-border/70"
                  />

                  <ul className="space-y-2.5 text-[14.5px]">
                    {links.map((l) => (
                      <li key={l.label + l.to}>
                        <Link
                          to={l.to}
                          className="group/link inline-flex items-center text-muted-foreground transition-colors hover:text-primary"
                        >
                          <span className="border-b border-transparent transition-colors group-hover/link:border-primary">
                            {l.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* Still need help */}
            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-primary/20">
                    <MessageCircle className="h-7 w-7 text-primary" aria-hidden />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-black tracking-tight text-foreground sm:text-2xl">
                      Still need help?
                    </h2>
                    <p className="mt-1 max-w-xl text-sm text-muted-foreground sm:text-[15px]">
                      Our team is ready to assist you with any questions or
                      project requirements.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" aria-hidden />
                    Contact Us
                  </Link>
                  <a
                    href="tel:+96264026063"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
