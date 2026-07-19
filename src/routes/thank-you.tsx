import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, Mail } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { z } from "zod";

const search = z.object({
  source: z.enum(["contact", "quote", "demo", "newsletter"]).optional(),
});

export const Route = createFileRoute("/thank-you")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Thank You | AbuFarha Medical Supplies" },
      { name: "description", content: "Your request has been received. Our team will contact you within 24 hours." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouPage,
});

const COPY: Record<string, { title: string; body: string; eta: string }> = {
  contact: {
    title: "Message received",
    body: "Thank you for reaching out to AbuFarha Medical Supplies.",
    eta: "Within 24 business hours",
  },
  quote: {
    title: "Quotation request received",
    body: "Our specialists are preparing a tailored proposal for your requirements.",
    eta: "Within 24 business hours",
  },
  demo: {
    title: "Demo request received",
    body: "A product specialist will coordinate the demo with your team.",
    eta: "Within 1–2 business days",
  },
  newsletter: {
    title: "You're subscribed",
    body: "You'll receive AbuFarha clinical insights and product updates.",
    eta: "Next edition — monthly",
  },
};

function ThankYouPage() {
  const { source } = Route.useSearch();
  const c = COPY[source ?? "contact"] ?? COPY.contact;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-14">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="h-9 w-9" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            {c.title}
          </h1>
          <p className="mt-3 text-base text-muted-foreground">{c.body}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <Clock className="h-4 w-4" /> Response Time
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">{c.eta}</div>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <Mail className="h-4 w-4" /> Next Step
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">Check your inbox for confirmation</div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark">
              Back Home
            </Link>
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary">
              Browse Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/blog" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary">
              Continue Browsing
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
