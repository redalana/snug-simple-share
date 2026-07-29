import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BlogPage } from "@/components/site/BlogPage";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import { KNOWLEDGE_SORTS, type KnowledgeSort } from "@/lib/content";

/** Knowledge Center filter state lives in the URL so any filter combination is
 *  shareable: /blog?category=buying-guides&technology=mri&manufacturer=philips */
type BlogSearch = {
  category?: string;
  technology?: string;
  manufacturer?: string;
  specialty?: string;
  tag?: string;
  q?: string;
  sort?: KnowledgeSort;
  page?: number;
};

const str = (value: unknown) =>
  typeof value === "string" && value.trim() ? value.trim() : undefined;

export const Route = createFileRoute("/blog/")({
  validateSearch: (search: Record<string, unknown>): BlogSearch => {
    const sort = str(search.sort);
    const page = Number(search.page);
    return {
      category: str(search.category),
      technology: str(search.technology),
      manufacturer: str(search.manufacturer),
      specialty: str(search.specialty),
      tag: str(search.tag),
      q: str(search.q),
      sort: KNOWLEDGE_SORTS.includes(sort as KnowledgeSort) ? (sort as KnowledgeSort) : undefined,
      page: Number.isFinite(page) && page > 1 ? Math.floor(page) : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Healthcare Knowledge Center — AbuFarha Medical Equipment" },
      {
        name: "description",
        content:
          "Evidence-based clinical articles, healthcare technology insights, buying guides, educational resources, and expert knowledge for hospitals, physicians and biomedical engineers across Africa and the Middle East.",
      },
      { property: "og:title", content: "Healthcare Knowledge Center — AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Evidence-based clinical articles, healthcare technology insights and expert knowledge for healthcare professionals across Africa and the Middle East.",
      },
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
      <main id="main-content">
        <BlogPage />
      </main>
      <Footer />
    </div>
  );
}
