import { createFileRoute } from "@tanstack/react-router";
import { FileText, Globe, Copyright, ShoppingBag, Ban, ShieldAlert, ExternalLink, Gavel, RefreshCw, Mail } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import heroImg from "@/assets/abufarha-hq.jpg";

const TITLE = "Terms & Conditions | AbuFarha Medical Supplies";
const DESC =
  "The terms governing the use of the AbuFarha Medical Supplies website and the information, products and services presented on it.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.about },
      { property: "og:url", content: SITE_URL + "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/terms" }],
  }),
  component: TermsRoute,
});

const SECTIONS = [
  {
    Icon: FileText,
    title: "Acceptance of Terms",
    body: (
      <>
        <p>By accessing or using the AbuFarha Medical Supplies website, you agree to be bound by these Terms & Conditions and all applicable laws and regulations.</p>
        <p>If you do not agree with any part of these terms, you must not use this website.</p>
      </>
    ),
  },
  {
    Icon: Globe,
    title: "Use of the Website",
    body: (
      <>
        <p>This website is intended for informational purposes about AbuFarha Medical Supplies, our products, services and projects.</p>
        <p>Users agree to use the website only for lawful purposes and in a manner that does not infringe the rights of others.</p>
      </>
    ),
  },
  {
    Icon: Copyright,
    title: "Intellectual Property",
    body: (
      <>
        <p>All content on this website — including text, graphics, logos, images, product photography and layout — is the property of AbuFarha Medical Supplies or its content suppliers and is protected by applicable intellectual property laws.</p>
        <p>Reproduction, distribution or modification of any content without prior written permission is prohibited.</p>
      </>
    ),
  },
  {
    Icon: ShoppingBag,
    title: "Products & Services",
    body: (
      <>
        <p>Product specifications, availability and configurations are subject to change without notice.</p>
        <p>All quotations are non-binding until formally confirmed in writing by AbuFarha Medical Supplies.</p>
        <p>Images are for illustrative purposes and may not reflect the exact configuration delivered.</p>
      </>
    ),
  },
  {
    Icon: Ban,
    title: "Prohibited Activities",
    body: (
      <>
        <p className="mb-2">You agree not to:</p>
        <ul className="space-y-1.5">
          {["Use the website in any way that could damage or impair it.","Attempt to gain unauthorized access to any part of the website or its systems.","Use automated tools to scrape or collect content without permission.","Misrepresent your identity or affiliation with any person or entity."].map((i) => (
            <li key={i} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{i}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    Icon: ShieldAlert,
    title: "Limitation of Liability",
    body: (
      <>
        <p>AbuFarha Medical Supplies makes reasonable efforts to keep information on this website accurate and up to date but does not warrant its completeness or accuracy.</p>
        <p>To the fullest extent permitted by law, AbuFarha Medical Supplies shall not be liable for any indirect or consequential damages arising from the use of this website.</p>
      </>
    ),
  },
  {
    Icon: ExternalLink,
    title: "Third-Party Links",
    body: (
      <>
        <p>This website may include links to external websites for reference or convenience.</p>
        <p>AbuFarha Medical Supplies is not responsible for the content, policies or practices of any linked third-party sites.</p>
      </>
    ),
  },
  {
    Icon: Gavel,
    title: "Governing Law",
    body: (
      <>
        <p>These Terms & Conditions are governed by the laws of the Hashemite Kingdom of Jordan.</p>
        <p>Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Amman, Jordan.</p>
      </>
    ),
  },
  {
    Icon: RefreshCw,
    title: "Changes to these Terms",
    body: (
      <>
        <p>AbuFarha Medical Supplies reserves the right to update or modify these Terms & Conditions at any time.</p>
        <p>Changes become effective upon publication on this page.</p>
      </>
    ),
  },
  {
    Icon: Mail,
    title: "Contact Us",
    body: (
      <p>
        Questions regarding these Terms & Conditions may be directed to{" "}
        <a href="mailto:info@abufarhamedical.com" className="font-semibold text-primary hover:underline">
          info@abufarhamedical.com
        </a>{" "}or +962 6 4026063.
      </p>
    ),
  },
];

function TermsRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[calc(96*var(--desktop-px-unit))]">
        <PageHero
          eyebrow="Legal"
          breadcrumb="Terms & Conditions"
          title="Terms & Conditions"
          description="These Terms & Conditions govern the use of the AbuFarha Medical Supplies website and the information, products and services presented on it. Please read them carefully before using the website."
          backgroundImage={heroImg}
          lastUpdated="July 2026"
        />
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              {SECTIONS.map(({ Icon, title, body }, i) => (
                <article key={title} className="flex gap-5 border-b border-border/70 pb-8">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-lg font-black text-primary">{String(i + 1)}.</span>
                      <h2 className="font-display text-xl font-black tracking-tight text-foreground">{title}</h2>
                    </div>
                    <div className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
                      {body}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
