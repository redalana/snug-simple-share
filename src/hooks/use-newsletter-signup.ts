import { useState, type FormEvent } from "react";
import { submitLead } from "@/lib/leads.functions";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Shared email-only newsletter form state (Blog page + article pages).
 * Saves to the same enquiries store as every other form; success is shown
 * only after the server confirms the sign-up was stored.
 */
export function useNewsletterSignup() {
  const [email, setEmail] = useState("");
  const [botField, setBotField] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setSuccess(false);
      setMessage("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const result = await submitLead({
        data: {
          source: "newsletter",
          email: value,
          consent: true,
          pagePath: typeof window !== "undefined" ? window.location.pathname : "",
          botField,
        },
      });
      if (!result.ok) {
        setSuccess(false);
        setMessage(result.message);
        return;
      }
      setSuccess(true);
      setMessage(
        result.duplicate
          ? "This email is already on our newsletter list."
          : "Thank you — your email has been added to our newsletter list.",
      );
      setEmail("");
    } catch {
      setSuccess(false);
      setMessage("We couldn't save your sign-up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { email, setEmail, botField, setBotField, loading, message, success, submit };
}
