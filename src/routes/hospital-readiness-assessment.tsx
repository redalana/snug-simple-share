import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ReadinessAssessment } from "@/components/site/ReadinessAssessment";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/hospital-readiness-assessment")({
  head: () => ({
    meta: [
      { title: "Hospital Readiness Assessment | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Assess your hospital's facility, clinical and operational readiness before investing in advanced medical technology. AbuFarha's readiness checklist helps you go live on schedule.",
      },
      { property: "og:title", content: "Hospital Readiness Assessment | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "A structured facility, clinical and operational readiness checklist so hospitals avoid late modifications and install advanced medical technology on schedule.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/hospital-readiness-assessment" },
      { property: "og:image", content: OG_IMAGES.hospitalReadiness },
      { name: "twitter:image", content: OG_IMAGES.hospitalReadiness },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/hospital-readiness-assessment" }],
  }),
  component: ReadinessPage,
});

function ReadinessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
        </div>
        <ReadinessAssessment />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
