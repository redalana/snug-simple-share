import { createFileRoute } from "@tanstack/react-router";
import { ClinicalProgramPage } from "@/components/site/ClinicalProgramPage";
import { getClinicalProgram } from "@/lib/clinical-programs";
import { programHead } from "@/lib/clinical-program-head";

const PROGRAM = getClinicalProgram("/programs/rehabilitation");

export const Route = createFileRoute("/programs/rehabilitation")({
  head: () => programHead(PROGRAM, "rehabilitation"),
  component: ProgramRoute,
});

function ProgramRoute() {
  return <ClinicalProgramPage program={PROGRAM} />;
}
