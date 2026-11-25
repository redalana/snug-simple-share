import { Hero } from "./after-sales/Hero";
import { RemoteDiagnostics } from "./after-sales/RemoteDiagnostics";
import { SupportJourney } from "./after-sales/SupportJourney";
import { EquipmentGallery } from "./after-sales/EquipmentGallery";
import { Engineering } from "./after-sales/Engineering";
import { PartsLogistics } from "./after-sales/PartsLogistics";
import { RequestService } from "./after-sales/RequestService";
import { FAQ } from "./after-sales/FAQ";
import { FinalCTA } from "./after-sales/FinalCTA";

export function AfterSalesPage() {
  return (
    <>
      <Hero />
      {/* OperationsDashboard hidden: its figures (46 engineers, 128 tickets,
          2.4 h response, 2,350+ parts, 98%) are not verified and contradict
          companyFacts.ts. Re-enable only with real, approved data. */}
      <RemoteDiagnostics />
      <SupportJourney />
      <EquipmentGallery />
      <Engineering />
      <PartsLogistics />
      <RequestService />
      <FAQ />
      <FinalCTA />
    </>
  );
}
