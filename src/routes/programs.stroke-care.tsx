import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StrokeCareProgram } from "@/components/site/StrokeCareProgram";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/programs/stroke-care")({
  head: () => ({
    meta: [
      { title: "Comprehensive Stroke Programs | AbuFarha Medical" },
      {
        name: "description",
        content:
          "How AbuFarha helps hospitals build complete stroke programs — precision neurovascular imaging, integrated clinical workflows, biomedical engineering and lifetime technical support.",
      },
      { property: "og:title", content: "Comprehensive Stroke Programs | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "A stroke program is an ecosystem, not a single device. Explore how AbuFarha plans, engineers, implements and supports advanced stroke care.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/programs/stroke-care" },
      { property: "og:image", content: OG_IMAGES.strokeCare },
      { name: "twitter:image", content: OG_IMAGES.strokeCare },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/programs/stroke-care" }],
  }),
  component: StrokeCarePage,
});

function StrokeCarePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[96px]">
        <div className="mx-auto max-w-[94rem] px-6 lg:px-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
        </div>
        <StrokeCareProgram />
      </main>
      <Footer />
    </div>
  );
}
