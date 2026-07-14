import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BlogArticlePage } from "@/components/site/BlogArticlePage";
import { getArticle } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) {
      return {
        meta: [
          { title: "Article not found — AbuFarha Medical" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = article.seoTitle ?? `${article.title} — AbuFarha Medical`;
    return {
      meta: [
        { title },
        { name: "description", content: article.metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: article.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:image", content: article.coverImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: article.coverImage },
      ],
    };
  },
  component: ArticleRoute,
});

function ArticleRoute() {
  const { slug } = Route.useParams();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BlogArticlePage slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
