import { createFileRoute } from "@tanstack/react-router";
import { ClinicalProgramPage } from "@/components/site/ClinicalProgramPage";
import { getClinicalProgram } from "@/lib/clinical-programs";
import { programHead } from "@/lib/clinical-program-head";

const PROGRAM = getClinicalProgram("/programs/stroke-care");

export const Route = createFileRoute("/programs/stroke-care")({
  head: () => programHead(PROGRAM, "strokeCare"),
  component: ProgramRoute,
});

function ProgramRoute() {
  return <ClinicalProgramPage program={PROGRAM} />;
}
