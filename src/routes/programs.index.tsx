import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Headphones,
  Home as HomeIcon,
  LayoutGrid,
  Settings,
  Users,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CLINICAL_PROGRAMS, getProgramSolution } from "@/lib/clinical-programs";
import { SITE_URL } from "@/lib/seo";
import heroImg from "@/assets/sol-mri.jpg";

const TITLE = "Clinical Programs | Complete Care Pathways | AbuFarha Medical";
const DESC =
  "Explore AbuFarha's clinical programs — Stroke Care, Neuro Imaging, Interventional Neurology, Neuro ICU and Rehabilitation — with equipment supply, installation, training and support.";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/programs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/programs" }],
  }),
  component: ProgramsDirectory,
});

const PILLARS = [
  { icon: Settings, title: "Medical Technology", copy: "Equipment for each step of care" },
  { icon: Users, title: "Implementation & Training", copy: "With your clinical and technical teams" },
  { icon: Headphones, title: "Long-Term Support", copy: "For the life of the installed technology" },
];

const STEPS = [
  { icon: ClipboardList, title: "Planning", copy: "Assess needs and plan the solution" },
  { icon: Settings, title: "Implementation", copy: "Installation and commissioning" },
  { icon: GraduationCap, title: "Training", copy: "For clinical and technical teams" },
  { icon: Wrench, title: "Ongoing Support", copy: "Maintenance and technical support" },
];

function ProgramsDirectory() {
  const programs = useMemo(
    () => CLINICAL_PROGRAMS.map((p) => ({ program: p, solution: getProgramSolution(p) })),
    [],
  );
  const [filter, setFilter] = useState<string>("all");
  const visible = programs.filter(({ program }) => filter === "all" || program.path === filter);

  const pill = (active: boolean) =>
    `inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ${
      active
        ? "border-primary bg-primary text-primary-foreground"
        : "border-border bg-background text-ink hover:border-primary/40 hover:text-primary"
    }`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary/30">
          <div className="relative mx-auto grid max-w-[87.5rem] gap-8 px-6 py-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:px-10 lg:py-10">
            <div className="min-w-0">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="inline-flex items-center gap-1 hover:text-primary">
                  <HomeIcon className="h-3.5 w-3.5" aria-hidden /> Home
                </Link>
                <span className="opacity-40">/</span>
                <span className="font-medium text-ink">Clinical Programs</span>
              </nav>
              <p className="mt-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                <span aria-hidden className="h-px w-8 bg-primary" /> Clinical Solutions
              </p>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.4rem]">
                Complete Care <span className="text-primary">Pathways.</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Integrated clinical programs, medical technology, implementation and technical
                support for every step of the neurological care pathway.
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {PILLARS.map(({ icon: Icon, title, copy }) => (
                  <li key={title} className="flex min-w-0 items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-ink">{title}</span>
                      <span className="block text-xs leading-snug text-muted-foreground">{copy}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[14rem] overflow-hidden rounded-3xl lg:min-h-0">
              <img
                src={heroImg}
                alt="MRI suite used in neurological imaging programs"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Directory */}
        <section aria-labelledby="programs-dir" className="mx-auto max-w-[87.5rem] px-6 py-8 lg:px-10">
          <h2 id="programs-dir" className="sr-only">
            All clinical programs
          </h2>
          <div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter programs">
              <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")} className={pill(filter === "all")}>
                <LayoutGrid className="h-4 w-4" aria-hidden /> All Programs
              </button>
              {programs.map(({ program, solution }) => (
                <button
                  key={program.path}
                  type="button"
                  aria-pressed={filter === program.path}
                  onClick={() => setFilter(program.path)}
                  className={pill(filter === program.path)}
                >
                  {program.name}
                </button>
              ))}
            </div>
          </div>

          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map(({ program, solution }) => (
              <li key={program.path} className="min-w-0">
                <Link
                  to={program.path}
                  aria-label={`${program.name} program`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={solution.image.src}
                      alt={solution.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-extrabold text-ink">{program.name}</h3>
                    <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                      {program.intro}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {solution.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-ink">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                          <span className="min-w-0">{h}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-primary">
                      Explore {program.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Approach + CTA */}
        <section className="bg-secondary/30">
          <div className="mx-auto grid max-w-[87.5rem] items-center gap-8 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)] lg:px-10">
            <div className="min-w-0">
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                <span aria-hidden className="h-px w-8 bg-primary" /> Our Approach
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink">
                A Connected <span className="block text-primary">Care Pathway.</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We work with healthcare providers to plan, implement and support integrated
                neurological care programs.
              </p>
            </div>
            <ol className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STEPS.map(({ icon: Icon, title, copy }) => (
                <li key={title} className="flex min-w-0 flex-col items-center text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="mt-3 text-sm font-bold text-ink">{title}</span>
                  <span className="mt-1 text-xs text-muted-foreground">{copy}</span>
                </li>
              ))}
            </ol>
            <div className="min-w-0 rounded-2xl bg-primary p-6 text-primary-foreground">
              <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-90">Let's discuss your program</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold">Talk to Our Team</h2>
              <p className="mt-2 text-sm opacity-90">
                Share your requirements and get recommendations for your clinical program.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Discuss Your Program <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
