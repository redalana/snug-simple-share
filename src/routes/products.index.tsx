import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PortfolioBrowser } from "@/components/site/PortfolioBrowser";
import { SITE_URL, OG_IMAGES, breadcrumbJsonLd } from "@/lib/seo";
import { itemListJsonLd } from "@/config/companyFacts";

/** Category landing pages that exist as real routes — used for the ItemList. */
const CATEGORY_ROUTES: { name: string; url: string }[] = [
  { name: "Cath Lab Systems", url: `${SITE_URL}/products/cath-lab` },
  { name: "MRI Scanners", url: `${SITE_URL}/products/mri-scanners` },
  { name: "CT Scanners", url: `${SITE_URL}/products/ct-scanners` },
  { name: "PET/CT Scanners", url: `${SITE_URL}/products/pet-ct-scanners` },
  { name: "C-Arm Systems", url: `${SITE_URL}/products/c-arm-systems` },
  { name: "X-Ray Systems", url: `${SITE_URL}/products/x-ray-systems` },
  { name: "Mammography Systems", url: `${SITE_URL}/products/mammography-systems` },
  { name: "Bone Densitometers (DEXA)", url: `${SITE_URL}/products/bone-densitometers` },
  { name: "Lithotripsy (ESWL) Systems", url: `${SITE_URL}/products/lithotripsy-eswl` },
  { name: "Drug-Eluting Stents", url: `${SITE_URL}/products/drug-eluting-stents` },
  { name: "Other Medical Systems", url: `${SITE_URL}/products/others` },
];

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          itemListJsonLd(CATEGORY_ROUTES, "AbuFarha Medical — Equipment Categories"),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
        ),
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        <PortfolioBrowser />
      </main>
      <Footer />
    </div>
  );
}
