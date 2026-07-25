import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Phone } from "lucide-react";
import { FAQS, FAQ_CATS, type FaqCat } from "./data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<FaqCat>("All");

  const filtered = FAQS.map((f, i) => ({ ...f, i })).filter((f) => {
    const matchCat = cat === "All" || f.cat === cat;
    const q = query.trim().toLowerCase();
    const matchQ = !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  return (
    <section className="relative bg-[#f6f4f0] py-16 lg:py-20">
      <div className="mx-auto max-w-[80rem] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.28em] text-primary">
              Knowledge Center
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-[3.5rem]">
              Everything
              <br />
              you need
              <br />
              to know.
            </h2>
            <p className="mt-6 max-w-md text-[calc(15.5*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
              Answers to the most common questions from biomedical engineers, procurement teams and
              hospital directors.
            </p>

            {/* still need help */}
            <div className="mt-10 rounded-2xl border border-border bg-white p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.15)]">
              <div className="text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.22em] text-primary">
                Still Need Help?
              </div>
              <div className="mt-2 font-display text-xl font-bold text-foreground">
                Talk to an engineer directly.
              </div>
              <p className="mt-2 text-[calc(13*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
                Our support engineers are on call around the clock for any technical or clinical
                question.
              </p>
              <a
                href="tel:+96264026063"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[calc(13*var(--desktop-px-unit))] font-bold text-white transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> Talk to an Engineer
              </a>
            </div>
          </div>

          <div>
            {/* Search + categories */}
            <div className="mb-6 rounded-2xl border border-border bg-white p-3 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-3 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions — e.g. warranty, parts, training"
                  className="w-full bg-transparent py-3 text-[calc(14.5*var(--desktop-px-unit))] text-foreground outline-none placeholder:text-muted-foreground/70"
                />
              </div>
            </div>
            <div className="mb-8 flex flex-wrap gap-2">
              {FAQ_CATS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={`rounded-full border px-4 py-1.5 text-[calc(12*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.14em] transition-all ${
                    cat === c
                      ? "border-ink bg-ink text-white"
                      : "border-border bg-white text-foreground hover:border-foreground/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-white/50 p-10 text-center text-[calc(14*var(--desktop-px-unit))] text-muted-foreground">
                No questions match your search. Try a different keyword.
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map(({ q, a, cat: fcat, i }) => {
                  const isOpen = open === i;
                  return (
                    <div
                      key={q}
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "border-primary/30 bg-white shadow-[0_25px_60px_-30px_rgba(0,0,0,0.28)]"
                          : "border-border bg-white/70 hover:border-foreground/25 hover:bg-white hover:shadow-[0_15px_40px_-25px_rgba(0,0,0,0.2)]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-6 px-7 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        <div className="min-w-0">
                          <div className="text-[calc(10.5*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.2em] text-primary">
                            {fcat}
                          </div>
                          <div className="mt-1.5 text-[calc(17.5*var(--desktop-px-unit))] font-semibold leading-snug text-foreground sm:text-[calc(19*var(--desktop-px-unit))]">
                            {q}
                          </div>
                        </div>
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen ? "rotate-180 bg-primary text-white" : "bg-muted text-foreground"
                          }`}
                        >
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-8 text-[calc(15.5*var(--desktop-px-unit))] leading-[1.75] text-muted-foreground">
                          {a}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
