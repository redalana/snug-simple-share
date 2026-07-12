import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { BrandsMarquee } from "@/components/site/BrandsMarquee";
import { Solutions } from "@/components/site/Solutions";
import { BeyondEquipment } from "@/components/site/BeyondEquipment";
import { GlobalPresence } from "@/components/site/GlobalPresence";
import { WhyAbuFarha } from "@/components/site/WhyAbuFarha";
import { Process } from "@/components/site/Process";
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
        {/* What makes AbuFarha different from every other supplier? */}
        <BeyondEquipment />
        {/* Where do we operate? */}
        <GlobalPresence />
        {/* Why should customers choose AbuFarha? */}
        <WhyAbuFarha />
        {/* How do we deliver? */}
        <Process />
        {/* How can customers start working with us? */}
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
