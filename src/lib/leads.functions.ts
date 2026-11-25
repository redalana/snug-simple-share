/**
 * Lead capture — real server-side persistence for every website form
 * (Contact, Request-a-Quote modal, product-page quote, After Sales / Services
 * service requests, newsletter sign-ups).
 *
 * The `leads` table is locked down (RLS on, no policies, no anon/authenticated
 * grants), so writes happen here through the service-role client after the
 * payload has been validated and the spam checks have passed.
 *
 * Callers MUST only show success when this returns `{ ok: true }`.
 */
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const optional = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

export const LEAD_SOURCES = ["contact", "quote", "service", "newsletter"] as const;

const leadSchema = z
  .object({
    source: z.enum(LEAD_SOURCES),
    fullName: z.string().trim().max(120).optional().or(z.literal("")),
    email: z.string().trim().email().max(255),
    phone: optional(40),
    customerProfile: optional(80),
    organization: optional(160),
    country: optional(80),
    city: optional(80),
    department: optional(120),
    interest: optional(120),
    product: optional(160),
    preferredContact: optional(40),
    message: z.string().trim().max(2000).optional().or(z.literal("")),
    consent: z.literal(true),
    pagePath: optional(300),
    // Spam honeypot — must stay empty. Real users never see this field.
    botField: z.string().max(200).optional(),
  })
  .refine((d) => d.source === "newsletter" || (d.fullName ?? "").length > 0, {
    message: "Full name is required.",
    path: ["fullName"],
  });

export type LeadInput = z.input<typeof leadSchema>;
export type LeadResult =
  | { ok: true; duplicate?: boolean }
  | { ok: false; reason: "rate_limited" | "failed"; message: string };

/** Max submissions from one visitor fingerprint inside the window. */
export const RATE_LIMIT_MAX = 5;
export const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

async function sha256(input: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: LeadInput) => leadSchema.parse(data))
  .handler(async ({ data }): Promise<LeadResult> => {
    // Honeypot filled → silently accept without storing anything.
    if (data.botField && data.botField.trim() !== "") {
      return { ok: true };
    }

    const { getRequestHeader, getRequestIP } = await import("@tanstack/react-start/server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // One-way fingerprint (never the raw IP) used only for spam throttling.
    const ip =
      getRequestHeader("cf-connecting-ip") ||
      getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ||
      getRequestIP() ||
      "";
    const ua = getRequestHeader("user-agent") || "";
    const ipHash = ip ? await sha256(`af-leads:${ip}:${ua}`) : null;

    if (ipHash) {
      const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();
      const { count } = await supabaseAdmin
        .from("leads")
        .select("id", { count: "exact", head: true })
        .eq("ip_hash", ipHash)
        .gte("created_at", since);
      if ((count ?? 0) >= RATE_LIMIT_MAX) {
        return {
          ok: false,
          reason: "rate_limited",
          message:
            "We've received several submissions from you in a short time. Please wait a few minutes and try again, or contact us by phone or WhatsApp.",
        };
      }
    }

    // Newsletter: one stored sign-up per email address.
    if (data.source === "newsletter") {
      const { count } = await supabaseAdmin
        .from("leads")
        .select("id", { count: "exact", head: true })
        .eq("source", "newsletter")
        .ilike("email", data.email);
      if ((count ?? 0) > 0) return { ok: true, duplicate: true };
    }

    const { error } = await supabaseAdmin.from("leads").insert({
      source: data.source,
      full_name: data.fullName || null,
      email: data.email,
      phone: data.phone || null,
      customer_profile: data.customerProfile || null,
      organization: data.organization || null,
      country: data.country || null,
      city: data.city || null,
      department: data.department || null,
      interest: data.interest || null,
      product: data.product || null,
      preferred_contact: data.preferredContact || null,
      message: data.message || null,
      consent: data.consent,
      page_path: data.pagePath || null,
      ip_hash: ipHash,
    });

    if (error) {
      console.error("[leads] insert failed:", error.message);
      return {
        ok: false,
        reason: "failed",
        message: "We couldn't save your request. Please try again, or contact us by phone or WhatsApp.",
      };
    }

    return { ok: true };
  });
