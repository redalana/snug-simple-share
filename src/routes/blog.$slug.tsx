import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BlogArticlePage } from "@/components/site/BlogArticlePage";
import { getArticle } from "@/lib/blog";
import { SITE_URL, absUrl } from "@/lib/seo";

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
    const articlePath = `/blog/${article.slug}`;
    const faq = article.content.find((block) => block.type === "faq");
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.metaDescription,
        datePublished: article.publishedDate,
        dateModified: article.lastUpdated ?? article.publishedDate,
        author: { "@type": "Organization", name: "AbuFarha Biomedical Engineering Team" },
        publisher: { "@type": "Organization", name: "AbuFarha Medical" },
        mainEntityOfPage: articlePath,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
          { "@type": "ListItem", position: 3, name: article.title, item: articlePath },
        ],
      },
      ...(faq?.type === "faq"
        ? [{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.items.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }]
        : []),
    ];
    return {
      meta: [
        { title },
        { name: "description", content: article.metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: article.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE_URL}${articlePath}` },
        { property: "og:image", content: absUrl(article.coverImage) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: article.metaDescription },
        { name: "twitter:image", content: absUrl(article.coverImage) },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}${articlePath}` }],
      scripts: schemas.map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      })),
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
