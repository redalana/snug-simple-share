import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardList, Wrench, GraduationCap, LifeBuoy } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { ExperienceAbuFarha } from "@/components/site/ExperienceAbuFarha";
import { Eyebrow } from "@/components/site/Eyebrow";
import { SECTION_CONTAINER } from "@/components/site/section-grid";
import { CLINICAL_SOLUTIONS } from "@/lib/clinical-solutions";
import { SITE_URL } from "@/lib/seo";

const TITLE = "Complete Care Pathways | Clinical Programs | AbuFarha Medical";
const DESC =
  "Explore AbuFarha Medical's clinical programs — stroke, neuro imaging, interventional neurology, neuro ICU and rehabilitation — supplied, installed, commissioned and supported as one connected pathway.";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/programs` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/programs` }],
  }),
  component: ProgramsHub,
});

const STEPS = [
  { Icon: ClipboardList, title: "Planning", text: "Equipment specification and room planning with your clinical and biomedical teams." },
  { Icon: Wrench, title: "Installation & commissioning", text: "Installed, tested and handed over by our engineers before the first patient." },
  { Icon: GraduationCap, title: "Training", text: "Application and user training for the clinical and technical staff." },
  { Icon: LifeBuoy, title: "Lifecycle support", text: "Preventive maintenance and spare-part supply for the installed technology." },
];

function ProgramsHub() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        <PageHero
          eyebrow="Clinical Solutions"
          title="Complete Care Pathways."
          breadcrumb="Clinical Programs"
          description="Clinical care is a connected pathway, not a single device. Each program brings together the medical technology, implementation and technical support a department needs — planned, installed, commissioned and maintained as one consistent standard."
          backgroundImage={CLINICAL_SOLUTIONS[0].image.src}
        />

        <ExperienceAbuFarha embedded />

        <section aria-labelledby="approach-heading" className="bg-secondary/30 py-14 lg:py-20">
          <div className={SECTION_CONTAINER}>
            <Eyebrow>Connected Approach</Eyebrow>
            <h2
              id="approach-heading"
              className="mt-5 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              One partner across every step of the pathway.
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(({ Icon, title, text }) => (
                <li key={title} className="min-w-0 rounded-2xl border border-border/70 bg-white p-6">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
              >
                Discuss your program
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                to="/hospital-readiness-assessment"
                className="inline-flex min-h-12 items-center rounded-xl border border-border bg-white px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:border-primary/40 hover:text-primary"
              >
                Start a readiness assessment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
