import { createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductDetail } from "@/components/site/ProductDetail";
import { getProductBySlug } from "@/lib/products";
import { SITE_URL, absUrl } from "@/lib/seo";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "System Not Found | AbuFarha Medical" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const desc = `${product.name} — ${product.subtitle}. ${product.status}, ${product.warranty}. Request a quote from AbuFarha Medical Equipment.`;
    return {
      meta: [
        { title: `${product.name} | AbuFarha Medical` },
        { name: "description", content: desc },
        { property: "og:title", content: `${product.name} | AbuFarha Medical` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `${SITE_URL}/products/${params.slug}` },
        { property: "og:image", content: absUrl(product.image) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: absUrl(product.image) },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/products/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            category: product.category,
            brand: { "@type": "Brand", name: product.brand },
            image: product.image,
            description: desc,
            countryOfOrigin: product.country,
          }),
        },
      ],
    };
  },
  component: ProductDetailPage,
  errorComponent: ({ error }) => (
    <SimpleShell>
      <p className="text-sm text-muted-foreground" role="alert">
        {error.message}
      </p>
    </SimpleShell>
  ),
  notFoundComponent: () => <NotFoundView />,
});

function SimpleShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="mx-auto flex max-w-[100rem] flex-col items-center gap-6 px-6 py-32 text-center lg:px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function NotFoundView() {
  const router = useRouter();
  return (
    <SimpleShell>
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground">
        System not found
      </h1>
      <p className="max-w-md text-muted-foreground">
        The medical system you&apos;re looking for isn&apos;t available. Explore our full
        catalog of certified medical technologies.
      </p>
      <button
        onClick={() => router.navigate({ to: "/products" })}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
      >
        Browse Medical Systems
      </button>
    </SimpleShell>
  );
}

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const { slug } = Route.useParams();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[112px]">
        <ProductDetail product={product} slug={slug} />
      </main>
      <Footer />
    </div>
  );
}

