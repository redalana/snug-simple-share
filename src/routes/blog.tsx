import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BlogPage } from "@/components/site/BlogPage";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — AbuFarha Medical Equipment" },
      {
        name: "description",
        content:
          "Guides, technology deep-dives and clinical insights on medical equipment, imaging, turnkey projects and after-sales support from AbuFarha Medical.",
      },
      { property: "og:title", content: "AbuFarha Medical — Blog & Insights" },
      {
        property: "og:description",
        content:
          "Perspectives on medical equipment, imaging technology, biomedical engineering and healthcare operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogRoute,
});

function BlogRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BlogPage />
      </main>
      <Footer />
    </div>
  );
}
