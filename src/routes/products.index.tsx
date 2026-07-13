import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PortfolioBrowser } from "@/components/site/PortfolioBrowser";

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
      { property: "og:url", content: "/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[112px]">
        <PortfolioBrowser />
      </main>
      <Footer />
    </div>
  );
}
