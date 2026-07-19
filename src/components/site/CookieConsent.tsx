import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, Settings2, X } from "lucide-react";

const STORAGE_KEY = "af_cookie_consent_v1";
type Prefs = { necessary: true; analytics: boolean; marketing: boolean; functional: boolean };

function readPrefs(): Prefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Prefs) : null;
  } catch {
    return null;
  }
}

function savePrefs(p: Prefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* noop */
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ necessary: true, analytics: false, marketing: false, functional: false });

  useEffect(() => {
    const existing = readPrefs();
    if (!existing) setVisible(true);
  }, []);

  const acceptAll = () => {
    const p: Prefs = { necessary: true, analytics: true, marketing: true, functional: true };
    savePrefs(p);
    setVisible(false);
  };
  const rejectNonEssential = () => {
    const p: Prefs = { necessary: true, analytics: false, marketing: false, functional: false };
    savePrefs(p);
    setVisible(false);
  };
  const savePreferences = () => {
    savePrefs(prefs);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[95] p-3 sm:p-4">
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-white/95 p-4 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)] backdrop-blur sm:p-6">
        {!showCustom ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
              <Cookie className="h-5 w-5" />
            </div>
            <div className="flex-1 text-sm text-foreground/90">
              <div className="font-display text-base font-bold text-foreground">We value your privacy</div>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                We use cookies to improve your experience, analyze traffic, and personalize content. Read our{" "}
                <Link to="/privacy-policy" className="font-semibold text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={() => setShowCustom(true)} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:border-primary">
                <Settings2 className="h-3.5 w-3.5" /> Customize
              </button>
              <button onClick={rejectNonEssential} className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:border-primary">
                Reject Non-Essential
              </button>
              <button onClick={acceptAll} className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-dark">
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-display text-lg font-bold text-foreground">Cookie preferences</div>
                <p className="mt-1 text-xs text-muted-foreground">Choose which categories of cookies to allow. You can change this at any time.</p>
              </div>
              <button onClick={() => setShowCustom(false)} aria-label="Close preferences" className="grid h-7 w-7 place-items-center rounded-full text-muted-foreground hover:bg-secondary">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {([
                { k: "necessary", label: "Necessary", desc: "Required for the site to function.", locked: true },
                { k: "analytics", label: "Analytics", desc: "Help us measure and improve.", locked: false },
                { k: "marketing", label: "Marketing", desc: "Personalized content and campaigns.", locked: false },
                { k: "functional", label: "Functional", desc: "Enhanced features and preferences.", locked: false },
              ] as const).map((row) => {
                const checked = row.locked ? true : (prefs as Record<string, boolean>)[row.k];
                return (
                  <label key={row.k} className={`flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-3 ${row.locked ? "opacity-80" : "cursor-pointer"}`}>
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 accent-[color:var(--primary)]"
                      disabled={row.locked}
                      checked={checked}
                      onChange={(e) => setPrefs((p) => ({ ...p, [row.k]: e.target.checked }))}
                    />
                    <span>
                      <span className="block text-sm font-semibold text-foreground">{row.label}</span>
                      <span className="block text-xs text-muted-foreground">{row.desc}</span>
                    </span>
                  </label>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
              <Link to="/privacy-policy" className="mr-auto text-xs font-semibold text-primary hover:underline">
                Privacy Policy
              </Link>
              <button onClick={rejectNonEssential} className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:border-primary">
                Reject Non-Essential
              </button>
              <button onClick={savePreferences} className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary-dark">
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
