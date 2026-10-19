import { createFileRoute } from "@tanstack/react-router";
import { ClinicalProgramPage } from "@/components/site/ClinicalProgramPage";
import { getClinicalProgram } from "@/lib/clinical-programs";
import { programHead } from "@/lib/clinical-program-head";

const PROGRAM = getClinicalProgram("/programs/interventional-neurology");

export const Route = createFileRoute("/programs/interventional-neurology")({
  head: () => programHead(PROGRAM, "interventionalNeurology"),
  component: ProgramRoute,
});

function ProgramRoute() {
  return <ClinicalProgramPage program={PROGRAM} />;
}
