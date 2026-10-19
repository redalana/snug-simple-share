import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StrokeCareProgram } from "@/components/site/StrokeCareProgram";
import { VisitAbuFarha } from "@/components/site/stroke/VisitAbuFarha";
import { ExploreRelatedKnowledge } from "@/components/site/knowledge/ExploreRelatedKnowledge";
import type { ClinicalProgram } from "@/lib/clinical-programs";

/** Shared page shell for every `/programs/*` page (Stroke Care layout). */
export function ClinicalProgramPage({ program }: { program: ClinicalProgram }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        <div className="mx-auto max-w-[94rem] px-6 lg:px-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
        </div>
        <VisitAbuFarha program={program} />
        <StrokeCareProgram program={program} />
        <ExploreRelatedKnowledge refs={program.knowledgeRef} preset="clinical" />
      </main>
      <Footer />
    </div>
  );
}
