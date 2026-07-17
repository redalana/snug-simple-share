# 01 — Decision Engine

Before every task, classify it. Modes never mix.

## Mode Matrix

| Mode | Purpose | Allowed | Forbidden | Required Output | Gate |
|---|---|---|---|---|---|
| **Build** | Create new features, pages, routes | New components, new routes, new data, new sections | Modifying approved pages | Plan + implementation + [DoD](./09-definition-of-done.md) | [Engineering](./06-engineering-checklist.md) + [QA](./08-qa-checklist.md) |
| **Fix** | Repair a specific bug | Touching only the broken code path | Redesign, unrelated improvements | Root cause + fix + repro | Regression check in [QA](./08-qa-checklist.md) |
| **Improve** | Raise quality of existing work | Better spacing, hierarchy, a11y, readability | Redesign, layout changes, identity changes | Before/after screenshots | [QA](./08-qa-checklist.md) |
| **Refactor** | Improve code without visual change | Cleaner code, shared hooks, utilities | Any visual change | Pixel-identical screenshots | [Engineering](./06-engineering-checklist.md) |
| **Responsive** | Fix tablet / mobile breakpoints | Breakpoint-scoped overrides only | Modifying desktop styles | All-breakpoints screenshots | [Responsive](./07-responsive-checklist.md) |
| **SEO** | Improve technical SEO | Metadata, schema, canonical, sitemap, robots | Any visual change | SEO audit report | SEO section in [QA](./08-qa-checklist.md) |
| **Performance** | Improve runtime performance | Lazy load, code split, bundle trim | UX regressions | Before/after Lighthouse | Perf section in [QA](./08-qa-checklist.md) |
| **Accessibility** | Improve a11y | ARIA, focus, contrast, keyboard | Visual redesign | A11y audit report | A11y section in [QA](./08-qa-checklist.md) |
| **QA** | Inspect and report | Read-only inspection | Fixing on sight | Prioritized findings report | N/A (audit only) |
| **Release** | Ship to production | Version bump, changelog, rollback plan | Any new feature | Release report | Full [DoD](./09-definition-of-done.md) |

## Risk Scoring

Every change is scored before implementation:

- **LOW** — local CSS, a single component's internal markup.
- **MEDIUM** — a shared component, a hook, a utility.
- **HIGH** — routing, layout root, data source, design tokens, navigation.

**HIGH-risk changes require explicit approval before implementation.**

## Change Isolation

Never modify shared code when a breakpoint-specific solution exists.
Never modify desktop when fixing mobile.
Never modify a component when a prop or variant will do.

---

**Next:** [02 — Thinking Engine](./02-thinking-engine.md)
