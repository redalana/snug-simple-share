import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProjectsExperiencePage } from "@/components/site/projects-experience/ProjectsExperiencePage";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

const TITLE = "Projects & Experience | AbuFarha Medical Equipment";
const DESC =
  "Regional healthcare infrastructure projects across Africa and the Middle East — cath labs, imaging systems, women's healthcare, turnkey departments, installation, training and long-term support delivered by AbuFarha Medical.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/projects" },
      { property: "og:image", content: OG_IMAGES.projects },
      { name: "twitter:image", content: OG_IMAGES.projects },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/projects" }],
  }),
  component: ProjectsRoute,
});

function ProjectsRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[calc(96*var(--desktop-px-unit))]">
        <ProjectsExperiencePage />
      </main>
      <Footer />
    </div>
  );
}
