import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import heroImg from "@/assets/aftersales-hero.jpg";
import { cn } from "@/lib/utils";

const TITLE = "Frequently Asked Questions | AbuFarha Medical Supplies";
const DESC =
  "Answers to common questions about AbuFarha Medical Supplies — products, turnkey projects, installation, training, warranty and after-sales support.";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.afterSales },
      { property: "og:url", content: SITE_URL + "/faqs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/faqs" }],
  }),
  component: FaqsRoute,
});

type QA = { q: string; a: React.ReactNode };
type Group = { title: string; items: QA[] };

const GROUPS: Group[] = [
  {
    title: "About AbuFarha",
    items: [
      { q: "Who is AbuFarha Medical Supplies?", a: "AbuFarha Medical Supplies is a specialist medical equipment supplier, engineering, installation, commissioning, training and long-term support company serving healthcare providers across Africa and the Middle East since 1999." },
      { q: "Which regions do you serve?", a: "We serve hospitals and healthcare providers across Africa, the Middle East and emerging healthcare markets. Our head office is located in Amman, Jordan." },
      { q: "Which brands do you represent?", a: (<>We work with world-class manufacturers including Siemens Healthineers, Canon Medical, Philips and other leading OEMs. See our <Link to="/brands" className="text-primary hover:underline">Brands</Link> page for the complete list.</>) },
    ],
  },
  {
    title: "Products & Solutions",
    items: [
      { q: "What types of medical equipment do you supply?", a: (<>We supply Cath Lab Systems, MRI, CT, PET/CT, C-Arms, X-Ray Systems, Mammography, Bone Densitometry, Lithotripsy (ESWL) and specialty solutions. Browse the full portfolio on our <Link to="/products" className="text-primary hover:underline">Products</Link> page.</>) },
      { q: "Do you supply new and refurbished equipment?", a: "Yes. We supply both new equipment and professionally refurbished systems that undergo thorough inspection, testing and quality assurance before delivery." },
      { q: "Do all products come with a warranty?", a: "Yes. Every system we deliver includes a standard manufacturer-backed warranty. Extended service agreements are available on request." },
    ],
  },
  {
    title: "Turnkey Projects",
    items: [
      { q: "What is a turnkey healthcare project?", a: "A turnkey project covers planning, equipment supply, installation, commissioning, staff training and long-term support — delivered end-to-end so hospitals can go live without coordinating multiple vendors." },
      { q: "Do you build hospitals?", a: "No. AbuFarha Medical Supplies does not construct hospital buildings. We deliver medical equipment, biomedical engineering, installation, commissioning, training and support for departments such as cardiology, radiology and imaging." },
    ],
  },
  {
    title: "After-Sales Support",
    items: [
      { q: "What after-sales services do you provide?", a: (<>Preventive maintenance, corrective maintenance, spare parts logistics, remote diagnostics, technical support and clinical training. See our <Link to="/after-sales" className="text-primary hover:underline">After Sales</Link> page for details.</>) },
      { q: "How can I request service or spare parts?", a: (<>Submit a request through our <Link to="/after-sales" className="text-primary hover:underline">After Sales</Link> page or contact us directly at info@abufarhamedical.com.</>) },
    ],
  },
  {
    title: "Working With Us",
    items: [
      { q: "How do I request a quotation?", a: (<>Use the <Link to="/contact" className="text-primary hover:underline">Contact</Link> page or the Request a Quote button in the header. Provide as much detail as possible about your project requirements so our team can respond with an accurate proposal.</>) },
      { q: "How long does it take to receive a response?", a: "Our team typically responds to inquiries within one to two business days." },
    ],
  },
];

function FaqsRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[calc(96*var(--desktop-px-unit))]">
        <PageHero
          eyebrow="Support"
          breadcrumb="FAQs"
          title="Frequently Asked Questions"
          description="Answers to the questions we hear most from hospitals, procurement teams and biomedical engineers. Can't find what you're looking for? Contact our team directly."
          backgroundImage={heroImg}
        />
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            {GROUPS.map((group) => (
              <div key={group.title} className="mb-10">
                <h2 className="mb-4 font-display text-xl font-black tracking-tight text-foreground">
                  {group.title}
                </h2>
                <div className="divide-y divide-border/70 rounded-2xl border border-border/70 bg-white">
                  {group.items.map((qa) => (
                    <FaqRow key={qa.q} qa={qa} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FaqRow({ qa }: { qa: QA }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground">{qa.q}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-primary transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? (
        <div className="px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground">{qa.a}</div>
      ) : null}
    </div>
  );
}
