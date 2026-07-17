# 12 — Glossary

## Terms

| Term | Definition |
|---|---|
| **Approved work** | Any code, layout, content, or design that has been shipped or explicitly signed off. Protected from modification without permission. |
| **Breakpoint override** | A `sm:` / `md:` / `lg:` scoped style that changes behavior only at that width, leaving desktop untouched. |
| **Desktop locked** | The convention that once desktop is approved, no responsive fix may modify shared desktop styles. |
| **Design token** | A named, semantic value (color, spacing, radius, shadow) defined once in `src/styles.css` and consumed everywhere. |
| **Enterprise Question** | *"Would I ship this to a Fortune 500 medical company?"* — the final self-review gate. |
| **Exception** | An approved deviation from a handbook rule, recorded in [11](./11-exceptions-register.md). |
| **Golden Rule** | Never assume, invent, approximate, redesign without permission, or replace approved work. |
| **Leaf route** | A route file that renders actual page content (as opposed to a layout that only renders `<Outlet />`). |
| **Minimum Change Principle** | The best solution changes the fewest files, components, styles, and dependencies while solving the problem completely. |
| **Mode** | A task classification (Build, Fix, Improve, Refactor, Responsive, SEO, Performance, Accessibility, QA, Release) that dictates allowed and forbidden actions. |
| **Regression** | Any unintended change to previously working functionality or approved visual output. |
| **Risk score** | LOW / MEDIUM / HIGH — determines whether a change requires approval before implementation. |
| **Root cause** | The underlying reason for a bug, reached via the Five Whys — not the surface symptom. |
| **Single source of truth** | The canonical location for a piece of data or a design decision. Duplication of either is forbidden. |
| **Source of truth (desktop)** | Approved desktop design and layout — the reference against which regressions are measured. |

## Mode Matrix

See [01 — Decision Engine](./01-decision-engine.md#mode-matrix) for the full table.

## Abbreviations

| Abbr | Meaning |
|---|---|
| **DoD** | Definition of Done ([09](./09-definition-of-done.md)) |
| **QA** | Quality Assurance ([08](./08-qa-checklist.md)) |
| **A11y** | Accessibility |
| **SSR** | Server-Side Rendering |
| **RLS** | Row-Level Security (Supabase) |
| **CLS** | Cumulative Layout Shift |
| **RPC** | Remote Procedure Call (server function) |

---

**Next:** [13 — Prompts](./13-prompts.md)
