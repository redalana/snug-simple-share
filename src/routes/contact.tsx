import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactPage } from "@/components/site/ContactPage";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — AbuFarha Medical Supplies" },
      {
        name: "description",
        content:
          "Talk to AbuFarha Medical Supplies about medical equipment, installation, training and after-sales support across Africa and the Middle East.",
      },
      { property: "og:title", content: "Contact AbuFarha Medical Supplies" },
      {
        property: "og:description",
        content:
          "Reach our sales, support and WhatsApp teams — typical response within one business day.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/contact" },
      { property: "og:image", content: OG_IMAGES.contact },
      { name: "twitter:image", content: OG_IMAGES.contact },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/contact" }],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
