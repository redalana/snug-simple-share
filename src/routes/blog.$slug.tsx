import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BlogArticlePage } from "@/components/site/BlogArticlePage";
import { getArticle } from "@/lib/blog";
import { SITE_URL, absUrl, isoDate, breadcrumbJsonLd } from "@/lib/seo";
import { COMPANY } from "@/config/companyFacts";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) {
      return {
        meta: [
          { title: "Article not found — AbuFarha Medical" },
          { name: "robots", content: "noindex, follow" },
        ],
      };
    }
    const title = article.seoTitle ?? `${article.title} — AbuFarha Medical`;
    const articlePath = `/blog/${article.slug}`;
    const articleUrl = absUrl(articlePath);
    const published = isoDate(article.publishedDate);
    const modified = isoDate(article.lastUpdated) ?? published;
    const faq = article.content.find((block) => block.type === "faq");
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: article.title,
        description: article.metaDescription,
        image: [absUrl(article.coverImage)],
        ...(published ? { datePublished: published } : {}),
        ...(modified ? { dateModified: modified } : {}),
        author: {
          "@type": "Person",
          name: article.author.name,
          jobTitle: article.author.role,
          worksFor: { "@id": `${COMPANY.website}/#organization` },
        },
        publisher: { "@id": `${COMPANY.website}/#organization` },
        isPartOf: { "@id": `${COMPANY.website}/#website` },
        articleSection: article.category,
        keywords: [article.category, ...article.title.split(/\s+/).slice(0, 6)].join(", "),
        inLanguage: "en",
        mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Knowledge Center", path: "/blog" },
        { name: article.title, path: articlePath },
      ]),
      ...(faq?.type === "faq"
        ? [
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ]
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
        { property: "og:image:alt", content: article.title },
        { property: "og:site_name", content: "AbuFarha Medical" },
        ...(published ? [{ property: "article:published_time", content: published }] : []),
        ...(modified ? [{ property: "article:modified_time", content: modified }] : []),
        { property: "article:section", content: article.category },
        { property: "article:author", content: article.author.name },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: article.metaDescription },
        { name: "twitter:image", content: absUrl(article.coverImage) },
        { name: "author", content: article.author.name },
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
      <main id="main-content">
        <BlogArticlePage slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
