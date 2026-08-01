import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

import { Hero } from "./contact/Hero";
import { ContactBar } from "./contact/ContactBar";
import { ContactForm } from "./ContactForm";
import { OfficeMap } from "./contact/OfficeMap";
import { StatsStrip } from "./contact/StatsStrip";
import { FaqSection } from "./contact/FaqSection";
import { VisitAbuFarha } from "./stroke/VisitAbuFarha";

export function ContactPage() {
  const locationHash = useRouterState({ select: (state) => state.location.hash });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (locationHash !== "contact-form" && locationHash !== "#contact-form") return;
    const id = window.setTimeout(() => {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(id);
  }, [locationHash]);

  return (
    <>
      <Hero />
      <VisitAbuFarha />
      <ContactBar />
      {/* Same component as the Homepage quote section — one shared form. */}
      <ContactForm />
      <OfficeMap />
      <StatsStrip />
      <FaqSection />
    </>
  );
}
