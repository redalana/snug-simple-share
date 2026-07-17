import { Hero } from "./turnkey/Hero";
import { DepartmentNav } from "./turnkey/DepartmentNav";
import { TurnkeyJourney } from "./turnkey/TurnkeyJourney";
import { DepartmentComponents } from "./turnkey/DepartmentComponents";
import { FeaturedProjects } from "./turnkey/FeaturedProjects";
import { GlobalPresence } from "./turnkey/GlobalPresence";
import { SupportEcosystem } from "./turnkey/SupportEcosystem";
import { FAQ } from "./turnkey/FAQ";
import { FinalCTA } from "./turnkey/FinalCTA";

export function TurnkeyPage() {
  return (
    <div className="bg-background">
      <Hero />
      <DepartmentNav />
      <TurnkeyJourney />
      <DepartmentComponents />
      <FeaturedProjects />
      <GlobalPresence />
      <SupportEcosystem />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
