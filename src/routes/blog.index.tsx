import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BlogPage } from "@/components/site/BlogPage";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Healthcare Knowledge Center — AbuFarha Medical Equipment" },
      {
        name: "description",
        content:
          "Evidence-based clinical articles, healthcare technology insights, buying guides, educational resources, and expert knowledge for hospitals, physicians and biomedical engineers across Africa and the Middle East.",
      },
      { property: "og:title", content: "Healthcare Knowledge Center — AbuFarha Medical" },
      { property: "og:description", content: "Evidence-based clinical articles, healthcare technology insights and expert knowledge for healthcare professionals across Africa and the Middle East." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.blog },
      { name: "twitter:image", content: OG_IMAGES.blog },
      { property: "og:url", content: SITE_URL + "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/blog" }],
  }),
  component: BlogRoute,
});

function BlogRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content"><BlogPage /></main>
      <Footer />
    </div>
  );
}