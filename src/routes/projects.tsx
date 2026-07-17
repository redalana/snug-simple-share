import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProjectsGrid } from "@/components/site/ProjectsGrid";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Featured Projects & Case Studies | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Explore AbuFarha Medical's delivered projects across Africa and the Middle East — cath labs, imaging systems and multi-department hospital installations, supplied, installed and supported end to end.",
      },
      { property: "og:title", content: "Featured Projects & Case Studies | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Hospitals and medical centers where AbuFarha supplied, installed, commissioned and supported advanced medical technology.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/projects" },
      { property: "og:image", content: OG_IMAGES.projects },
      { name: "twitter:image", content: OG_IMAGES.projects },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[96px]">
        <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
        </div>
        <ProjectsGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
