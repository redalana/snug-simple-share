import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  ClipboardList,
  Settings,
  Cookie,
  Users,
  Lock,
  CalendarClock,
  UserCog,
  ExternalLink,
  RefreshCw,
  Mail,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import heroImg from "@/assets/hero-cathlab.jpg";

const TITLE = "Privacy Policy | AbuFarha Medical Supplies";
const DESC =
  "How AbuFarha Medical Supplies collects, uses, stores and protects information provided through our website and business communications.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.home },
      { property: "og:url", content: SITE_URL + "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/privacy-policy" }],
  }),
  component: PrivacyRoute,
});

type Section = {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: React.ReactNode;
};

const SECTIONS: Section[] = [
  {
    Icon: ShieldCheck,
    title: "Introduction",
    body: (
      <>
        <p>
          AbuFarha Medical Supplies is committed to protecting the privacy of our website visitors,
          customers and business partners.
        </p>
        <p>
          This Privacy Policy explains what information we collect, how it is used and the choices
          available regarding your personal information.
        </p>
        <p>By using our website, you agree to the practices described in this Privacy Policy.</p>
      </>
    ),
  },
  {
    Icon: ClipboardList,
    title: "Information We Collect",
    body: (
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="mb-2">
            We may collect information that you voluntarily provide, including:
          </p>
          <ul className="space-y-1.5">
            {[
              "Full Name",
              "Company Name",
              "Email Address",
              "Phone Number",
              "Country",
              "Message or Inquiry Details",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2">
            We may also collect limited technical information automatically, such as:
          </p>
          <ul className="space-y-1.5">
            {[
              "IP Address",
              "Browser Type",
              "Device Information",
              "Operating System",
              "Pages Visited",
              "Date and Time of Visit",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    Icon: Settings,
    title: "How We Use Your Information",
    body: (
      <>
        <p className="mb-2">Your information may be used to:</p>
        <ul className="space-y-1.5">
          {[
            "Respond to inquiries",
            "Prepare quotations",
            "Communicate regarding products or services",
            "Improve our website and customer experience",
            "Maintain website security",
            "Comply with legal obligations",
          ].map((i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {i}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    Icon: Cookie,
    title: "Cookies",
    body: (
      <>
        <p>
          Our website may use cookies and similar technologies to improve browsing performance and
          enhance the user experience.
        </p>
        <p>Cookies help us understand website usage and improve functionality.</p>
        <p>You may disable cookies through your browser settings at any time.</p>
      </>
    ),
  },
  {
    Icon: Users,
    title: "Information Sharing",
    body: (
      <>
        <p>
          AbuFarha Medical Supplies does not sell personal information. Information may only be
          shared when necessary:
        </p>
        <ul className="mt-2 space-y-1.5">
          {[
            "With trusted service providers supporting website operations.",
            "When required by applicable laws or legal authorities.",
            "To protect our legal rights and website security.",
          ].map((i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {i}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    Icon: Lock,
    title: "Data Security",
    body: (
      <>
        <p>
          We implement reasonable technical and organizational measures to protect personal
          information against unauthorized access, loss, misuse or disclosure.
        </p>
        <p>However, no internet transmission can be guaranteed to be completely secure.</p>
      </>
    ),
  },
  {
    Icon: CalendarClock,
    title: "Data Retention",
    body: (
      <>
        <p className="mb-2">Personal information is retained only for as long as necessary to:</p>
        <ul className="space-y-1.5">
          {[
            "Respond to inquiries.",
            "Provide requested services.",
            "Meet legal or regulatory obligations.",
            "Maintain business records where appropriate.",
          ].map((i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {i}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    Icon: UserCog,
    title: "Your Rights",
    body: (
      <>
        <p className="mb-2">Depending on applicable laws, you may have the right to:</p>
        <ul className="space-y-1.5">
          {[
            "Request access to your personal data.",
            "Request correction of inaccurate information.",
            "Request deletion of personal data where legally permitted.",
            "Object to certain processing activities.",
            "Withdraw consent where applicable.",
          ].map((i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {i}
            </li>
          ))}
        </ul>
        <p className="mt-3">Requests may be submitted using the contact information below.</p>
      </>
    ),
  },
  {
    Icon: ExternalLink,
    title: "Third-Party Links",
    body: (
      <>
        <p>Our website may contain links to external websites.</p>
        <p>We are not responsible for the privacy practices or content of third-party websites.</p>
        <p>
          Users are encouraged to review the privacy policies of any external websites they visit.
        </p>
      </>
    ),
  },
  {
    Icon: RefreshCw,
    title: "Updates to this Policy",
    body: (
      <>
        <p>This Privacy Policy may be updated periodically.</p>
        <p>Changes become effective immediately upon publication on this page.</p>
        <p>Users are encouraged to review this page regularly.</p>
      </>
    ),
  },
  {
    Icon: Mail,
    title: "Contact Us",
    body: (
      <>
        <p>
          For questions regarding this Privacy Policy, please contact us at{" "}
          <a
            href="mailto:info@abufarhamedical.com"
            className="font-semibold text-primary hover:underline"
          >
            info@abufarhamedical.com
          </a>{" "}
          or +962 6 4026063.
        </p>
      </>
    ),
  },
];

function PrivacyRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        <PageHero
          eyebrow="Legal"
          breadcrumb="Privacy Policy"
          title="Privacy Policy"
          description="Protecting your privacy is important to AbuFarha Medical Supplies. This Privacy Policy explains how we collect, use, store and protect the information you provide when using our website."
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
                      <span className="font-display text-lg font-black text-primary">
                        {String(i + 1)}.
                      </span>
                      <h2 className="font-display text-xl font-black tracking-tight text-foreground">
                        {title}
                      </h2>
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
