import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { BrandsMarquee } from "@/components/site/BrandsMarquee";
import { Solutions } from "@/components/site/Solutions";
import { WhyAbuFarha } from "@/components/site/WhyAbuFarha";
import { Stats } from "@/components/site/Stats";
import { Projects } from "@/components/site/Projects";
import { GlobalPresence } from "@/components/site/GlobalPresence";
import { Process } from "@/components/site/Process";
import { FinalCTA } from "@/components/site/FinalCTA";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { PulseDivider } from "@/components/site/PulseDivider";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BrandsMarquee />
        <Solutions />
        <WhyAbuFarha />
        <div className="bg-white">
          <div className="mx-auto max-w-5xl px-6">
            <PulseDivider className="py-2" />
          </div>
        </div>
        <Stats />
        <Projects />
        <GlobalPresence />
        <Process />
        <div className="bg-secondary/50">
          <div className="mx-auto max-w-5xl px-6">
            <PulseDivider className="py-2" />
          </div>
        </div>
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
