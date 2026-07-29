import { createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductDetail } from "@/components/site/ProductDetail";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { SITE_URL, absUrl, breadcrumbJsonLd } from "@/lib/seo";

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
          { name: "robots", content: "noindex, follow" },
        ],
      };
    }
    const { product } = loaderData;
    const title = product.seoTitle ?? `${product.name} | AbuFarha Medical`;
    const desc =
      product.seoDescription ??
      `${product.name} — ${product.subtitle}. ${product.status}, ${product.warranty}. Request a quote from AbuFarha Medical Equipment.`;
    const url = `${SITE_URL}/products/${params.slug}`;
    const image = absUrl(product.image);
    const gallery = (product.gallery ?? [product.image]).map((src) => absUrl(src));
    const itemCondition =
      product.status === "Brand New"
        ? "https://schema.org/NewCondition"
        : "https://schema.org/RefurbishedCondition";

    const productSchema = {
      "@context": "https://schema.org",
      "@type": ["Product", "MedicalDevice"],
      "@id": `${url}#product`,
      name: product.name,
      url,
      category: product.category,
      brand: { "@type": "Brand", name: product.brand },
      manufacturer: { "@type": "Organization", name: product.brand },
      model: product.model,
      sku: product.slug,
      image: gallery,
      description: product.description ?? desc,
      countryOfOrigin: { "@type": "Country", name: product.country },
      productionDate: String(product.year),
      itemCondition,
      isSimilarTo: getRelatedProducts(product, 3).map((r) => ({
        "@type": "Product",
        name: r.name,
        url: `${SITE_URL}/products/${r.slug}`,
      })),
      additionalProperty: [
        { "@type": "PropertyValue", name: "Condition", value: product.status },
        { "@type": "PropertyValue", name: "System Type", value: product.systemType },
        { "@type": "PropertyValue", name: "Year of Manufacture", value: String(product.year) },
        ...product.snapshot.map((s) => ({
          "@type": "PropertyValue",
          name: s.label,
          value: s.value,
        })),
      ],
      ...(product.specialty.length
        ? {
            relevantSpecialty: product.specialty.map((s) => ({
              "@type": "MedicalSpecialty",
              name: s,
            })),
          }
        : {}),
      offers: {
        "@type": "Offer",
        url,
        availability: product.sold ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
        itemCondition,
        availableDeliveryMethod: "https://schema.org/OnSitePickup",
        seller: { "@id": `${SITE_URL}/#organization` },
        areaServed: ["Africa", "Middle East"],
      },
    };

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "og:image:alt", content: product.imageAlt ?? product.name },
        { property: "og:site_name", content: "AbuFarha Medical" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(productSchema) },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: product.name, path: `/products/${params.slug}` },
            ]),
          ),
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
      <main
        id="main-content"
        className="mx-auto flex max-w-[100rem] flex-col items-center gap-6 px-6 py-32 text-center lg:px-10"
      >
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
        The medical system you&apos;re looking for isn&apos;t available. Explore our full catalog of
        certified medical technologies.
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
      <main id="main-content" className="pt-[calc(96*var(--desktop-px-unit))]">
        <ProductDetail product={product} slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
