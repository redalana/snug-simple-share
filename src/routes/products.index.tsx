import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PortfolioBrowser } from "@/components/site/PortfolioBrowser";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Medical Technology Portfolio | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Browse certified medical systems from leading global manufacturers — Cath Lab, MRI, CT, PET/CT, X-Ray and more — for hospitals, clinics and healthcare providers.",
      },
      { property: "og:title", content: "Medical Technology Portfolio | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Discover and compare certified medical systems from Philips, Siemens, GE and Canon Medical.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.productsIndex },
      { name: "twitter:image", content: OG_IMAGES.productsIndex },
      { property: "og:url", content: SITE_URL + "/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[calc(96*var(--desktop-px-unit))]">
        <PortfolioBrowser />
      </main>
      <Footer />
    </div>
  );
}
