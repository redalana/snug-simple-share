import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServicesPage } from "@/components/site/ServicesPage";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import { serviceJsonLd, itemListJsonLd } from "@/config/companyFacts";

const SERVICES = [
  {
    name: "Medical Equipment Installation & Commissioning",
    description:
      "OEM-certified installation, site acceptance testing and commissioning for imaging, cath lab, ultrasound and patient monitoring systems.",
    serviceType: "Installation",
  },
  {
    name: "Preventive & Corrective Maintenance",
    description:
      "Scheduled preventive maintenance and rapid corrective service to keep critical medical equipment operating to manufacturer specification.",
    serviceType: "Maintenance",
  },
  {
    name: "Calibration & Performance Verification",
    description:
      "OEM-aligned calibration and QA testing for imaging and diagnostic equipment.",
    serviceType: "Calibration",
  },
  {
    name: "Clinical & Biomedical Training",
    description:
      "Structured clinical and technical training programs for radiographers, biomedical engineers and clinicians.",
    serviceType: "Training",
  },
  {
    name: "24/7 Technical Support",
    description:
      "Round-the-clock technical support, remote diagnostics and spare-parts logistics across Africa and the Middle East.",
    serviceType: "Support",
  },
];

const TITLE = "Medical Equipment Services | AbuFarha Medical Equipment";
const DESC =
  "OEM-certified installation, preventive & corrective maintenance, calibration, upgrades and 24/7 support for imaging, cath lab, ultrasound and patient monitoring systems across the Middle East, Africa and Central Asia.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.services },
      { name: "twitter:image", content: OG_IMAGES.services },
      { property: "og:url", content: SITE_URL + "/services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          itemListJsonLd(
            SERVICES.map((s) => ({ name: s.name, url: SITE_URL + "/services" })),
            "AbuFarha Medical Services",
          ),
        ),
      },
      ...SERVICES.map((s) => ({
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd({ ...s, url: SITE_URL + "/services" }),
        ),
      })),
    ],
  }),
  component: ServicesRoute,
});

function ServicesRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[calc(96*var(--desktop-px-unit))]">
        <ServicesPage />
      </main>
      <Footer />
    </div>
  );
}
