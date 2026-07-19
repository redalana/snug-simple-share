import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { BrandsMarquee } from "@/components/site/BrandsMarquee";
import { Solutions } from "@/components/site/Solutions";
import { WhyAbuFarha } from "@/components/site/WhyAbuFarha";
import { Projects } from "@/components/site/Projects";
import { ExperienceAbuFarha } from "@/components/site/ExperienceAbuFarha";
import { GlobalPresence } from "@/components/site/GlobalPresence";
import { Process } from "@/components/site/Process";
import { ReadinessTeaser } from "@/components/site/ReadinessTeaser";
import { FinalCTA } from "@/components/site/FinalCTA";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import { COPY } from "@/config/companyFacts";

const HOME_TITLE = "AbuFarha Medical Equipment | Advanced Medical Technology Solutions";
const HOME_DESC = COPY.metaDescription;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGES.home },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
      { name: "twitter:image", content: OG_IMAGES.home },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        {/* Who are we? */}
        <Hero />
        {/* Which manufacturers do we represent? */}
        <BrandsMarquee />
        {/* What technologies do we supply? */}
        <Solutions />
        {/* Why do hospitals choose AbuFarha? */}
        <WhyAbuFarha />
        {/* Featured case studies */}
        <Projects />
        {/* Clinical solutions preview — comprehensive stroke programs */}
        <ExperienceAbuFarha />
        {/* Where do we operate? */}
        <GlobalPresence />
        {/* How do we work? */}
        <Process />
        {/* Is your hospital ready for advanced medical technology? */}
        <ReadinessTeaser />
        {/* How can customers start working with us? */}
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
