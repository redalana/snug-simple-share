import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  Globe,
  Lock,
  Package,
  FileText,
  UserCheck,
  ExternalLink,
  AlertTriangle,
  RefreshCw,
  Mail,
  MapPin,
  Phone,
  Globe2,
  Send,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import heroImg from "@/assets/sol-mri.jpg";

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

type Section = {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: React.ReactNode;
};

const SECTIONS: Section[] = [
  {
    Icon: CheckCircle2,
    title: "Acceptance of Terms",
    body: (
      <p>
        By accessing and using this website, you accept and agree to be bound by these Terms &
        Conditions and all applicable laws and regulations. If you do not agree with any part of
        these terms, please do not use this website.
      </p>
    ),
  },
  {
    Icon: Globe,
    title: "Website Purpose",
    body: (
      <p>
        This website is designed to provide information about our products, services, solutions,
        and company. The information is for general purposes only and may be updated or changed
        without prior notice.
      </p>
    ),
  },
  {
    Icon: Lock,
    title: "Intellectual Property",
    body: (
      <>
        <p>
          All content on this website, including text, graphics, logos, images, and software, is
          the property of AbuFarha Medical Supplies or its content suppliers and is protected by
          copyright and intellectual property laws.
        </p>
        <p>
          You may not copy, reproduce, distribute, or use any content without our prior written
          permission.
        </p>
      </>
    ),
  },
  {
    Icon: Package,
    title: "Product Information",
    body: (
      <>
        <p>
          Product specifications, availability, and configurations may vary depending on the
          manufacturer and market.
        </p>
        <p>
          Images are for illustrative purposes only and may not represent the exact product.
        </p>
        <p>Please contact our sales team for the most accurate and up-to-date information.</p>
      </>
    ),
  },
  {
    Icon: FileText,
    title: "Quotations & Pricing",
    body: (
      <>
        <p>
          All prices and quotations are provided exclusively by our sales team and are subject to
          change without prior notice.
        </p>
        <p>A request for quotation does not constitute an offer or acceptance.</p>
        <p>Final prices are confirmed at the time of order.</p>
      </>
    ),
  },
  {
    Icon: UserCheck,
    title: "User Responsibilities",
    body: (
      <>
        <p>You agree to use this website only for lawful purposes.</p>
        <p>
          You must not attempt to interfere with the website's security or functionality.
        </p>
        <p>
          You agree not to submit false, misleading, or fraudulent information through any form or
          communication.
        </p>
      </>
    ),
  },
  {
    Icon: ExternalLink,
    title: "External Links",
    body: (
      <>
        <p>This website may contain links to external websites.</p>
        <p>
          AbuFarha Medical Supplies is not responsible for the content, privacy practices, or
          accuracy of any external websites.
        </p>
        <p>We encourage you to review the terms and policies of any third-party websites you visit.</p>
      </>
    ),
  },
  {
    Icon: AlertTriangle,
    title: "Disclaimer",
    body: (
      <>
        <p>
          All information on this website is provided "as is" without warranty of any kind.
        </p>
        <p>
          We do not guarantee that the website will be error-free, secure, or uninterrupted.
        </p>
        <p>
          We are not liable for any loss or damage resulting from the use of this website or
          reliance on its content.
        </p>
      </>
    ),
  },
  {
    Icon: RefreshCw,
    title: "Changes to Terms",
    body: (
      <>
        <p>
          We reserve the right to modify or update these Terms & Conditions at any time without
          prior notice.
        </p>
        <p>Changes will be effective immediately upon posting on this page.</p>
        <p>We encourage you to review this page regularly.</p>
      </>
    ),
  },
  {
    Icon: Mail,
    title: "Contact Information",
    body: (
      <p>
        If you have any questions or concerns regarding these Terms & Conditions, please contact
        us using the information provided below.
      </p>
    ),
  },
];

type ContactCard = {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  lines: React.ReactNode[];
};

const CONTACTS: ContactCard[] = [
  {
    Icon: MapPin,
    title: "Address",
    lines: ["AbuFarha Medical Supplies", "Queen Rania St.", "Amman, Jordan"],
  },
  {
    Icon: Phone,
    title: "Phone",
    lines: [
      <span key="p1" className="whitespace-nowrap">+962 6 4026063</span>,
      <span key="p2" className="whitespace-nowrap">+962 79 9741318</span>,
    ],
  },
  {
    Icon: Mail,
    title: "Email",
    lines: [
      <a
        key="e"
        href="mailto:info@abufarhamedical.com"
        className="whitespace-nowrap hover:text-primary"
      >
        info@abufarhamedical.com
      </a>,
    ],
  },
  {
    Icon: Globe2,
    title: "Website",
    lines: [
      <span key="w" className="whitespace-nowrap">www.abufarhamedical.com</span>,
    ],
  },
];

function TermsRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[calc(96*var(--desktop-px-unit))]">
        <PageHero
          eyebrow=""
          breadcrumb="Terms & Conditions"
          title="Terms & Conditions"
          description="Please read these Terms & Conditions carefully before using the AbuFarha Medical Supplies website or submitting an inquiry."
          backgroundImage={heroImg}
          lastUpdated="July 2026"
        />

        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
            {/* Important Notice */}
            <div className="rounded-xl border border-primary/25 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/5 text-primary">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-lg font-black tracking-tight text-foreground">
                    Important Notice
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    By accessing or using this website, you agree to comply with these Terms &
                    Conditions. If you do not agree with any part of these terms, please
                    discontinue using this website.
                  </p>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {SECTIONS.map(({ Icon, title, body }, i) => (
                <article
                  key={title}
                  className="group flex gap-5 rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-7"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-base font-black text-foreground">
                        {i + 1}.
                      </span>
                      <h3 className="font-display text-[17px] font-black tracking-tight text-foreground">
                        {title}
                      </h3>
                    </div>
                    <div className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-muted-foreground">
                      {body}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Contact section */}
            <div className="mt-14 border-t border-border pt-10">
              <h2 className="text-center font-display text-2xl font-black tracking-tight text-foreground">
                <span className="relative inline-block">
                  We're here to help
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-1/2 h-[3px] w-16 -translate-x-1/2 rounded-full bg-primary"
                  />
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-muted-foreground">
                If you have any questions about these Terms & Conditions, please reach out to us.
              </p>

              <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {CONTACTS.map(({ Icon, title, lines }) => (
                  <div
                    key={title}
                    className="flex min-h-[180px] flex-col items-start justify-start gap-4 rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>
                      <div className="font-display text-[15px] font-black text-foreground">
                        {title}
                      </div>
                    </div>
                    <div className="min-w-0 space-y-1 text-[14px] leading-relaxed text-muted-foreground">
                      {lines.map((l, i) => (
                        <div key={i}>{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Send className="h-4 w-4" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
