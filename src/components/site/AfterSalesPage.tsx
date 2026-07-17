import { Hero } from "./after-sales/Hero";
import { OperationsDashboard } from "./after-sales/OperationsDashboard";
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
      <OperationsDashboard />
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
