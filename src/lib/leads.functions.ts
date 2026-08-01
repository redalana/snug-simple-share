/**
 * Lead capture — real server-side persistence for the Contact form and the
 * Request-a-Quote modal.
 *
 * The `leads` table is locked down (RLS on, no policies, no anon/authenticated
 * grants), so writes happen here through the service-role client after the
 * payload has been validated and the spam honeypot checked.
 */
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const optional = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));

const leadSchema = z.object({
  source: z.enum(["contact", "quote"]),
  fullName: z.string().trim().min(1).max(120),
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
});

export type LeadInput = z.input<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: LeadInput) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot filled → silently accept without storing anything.
    if (data.botField && data.botField.trim() !== "") {
      return { ok: true as const };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("leads").insert({
      source: data.source,
      full_name: data.fullName,
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
    });

    if (error) {
      console.error("[leads] insert failed:", error.message);
      throw new Error("Could not save your request. Please try again.");
    }

    return { ok: true as const };
  });
