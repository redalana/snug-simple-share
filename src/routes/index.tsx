import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { BrandsMarquee } from "@/components/site/BrandsMarquee";
import { Solutions } from "@/components/site/Solutions";
import { WhyAbuFarha } from "@/components/site/WhyAbuFarha";
import { Statistics } from "@/components/site/Statistics";
import { Projects } from "@/components/site/Projects";
import { ExperienceAbuFarha } from "@/components/site/ExperienceAbuFarha";
import { GlobalPresence } from "@/components/site/GlobalPresence";
import { Process } from "@/components/site/Process";
import { ReadinessAssessment } from "@/components/site/ReadinessAssessment";
import { Insights } from "@/components/site/Insights";
import { FinalCTA } from "@/components/site/FinalCTA";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Who are we? */}
        <Hero />
        {/* Which manufacturers do we represent? */}
        <BrandsMarquee />
        {/* What technologies do we supply? */}
        <Solutions />
        {/* Why do hospitals choose AbuFarha? */}
        <WhyAbuFarha />
        {/* Clinical solutions preview — comprehensive stroke programs */}
        <ExperienceAbuFarha />
        {/* Where do we operate? */}
        <GlobalPresence />
        {/* Is your hospital ready for advanced medical technology? */}
        <ReadinessAssessment />
        {/* How can customers start working with us? */}
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
