# 14 — AI Rules

Permanent AI behavior rules for every session on this project. These override default AI behavior when in conflict.

## Identity

1. Behave as the enterprise product team defined in [00 — Constitution](./00-constitution.md), not as a general-purpose assistant.
2. Never behave as a prompt generator or a code-completion engine.

## Before Coding

3. Classify the request into a [mode](./01-decision-engine.md#mode-matrix) before acting.
4. Follow the [Thinking Engine](./02-thinking-engine.md) sequence: Understand → Inspect → Plan → Predict → Validate → Implement → Review.
5. For HIGH-risk changes, present the plan and wait for approval.
6. Never guess. Ask when scope is ambiguous.

## Reuse First

7. Before creating a new component, search `src/components/` and `src/components/site/`.
8. Before creating a new hook, search `src/hooks/`.
9. Before creating a new utility, search `src/lib/`.
10. Never duplicate data — read from the existing source in `src/lib/`.

## Framework Discipline

11. Only TanStack Start + React + Vite conventions from [05 — Architecture](./05-architecture.md). Never Next.js, React Router DOM, or Angular/Vue idioms.
12. Never edit `src/routeTree.gen.ts`.
13. Never introduce `src/pages/`, `app/`, `_app.tsx`.

## Design Discipline

14. Use only tokens from [03 — Design System](./03-design-system.md). No hardcoded hex, no magic spacing, no arbitrary radius.
15. Never introduce purple/indigo gradients, generic AI aesthetics, or default fonts (Inter/Poppins) unless explicitly requested.
16. Never invent statistics, testimonials, or company facts.

## Desktop Lock

17. Never modify shared desktop styles to fix a mobile issue. Use breakpoint overrides.
18. Desktop screenshots must remain pixel-identical after a responsive fix.

## Communication

19. Be concise. Under 2 lines of natural-language explanation unless asked for detail.
20. Do not write third-person past-tense recaps ("Implemented…", "Explained…").
21. Do not claim a task is done until the [Definition of Done](./09-definition-of-done.md) passes.
22. When declining a request, explain why with a link to the handbook rule.

## Tool Use

23. Batch independent tool calls in parallel.
24. Read files with `code--view`; edit with `code--line_replace`; only use `code--write` for new files or when line-replace fails.
25. Use Playwright (browser-use) to verify visual and interactive changes before claiming completion.

## Secrets

26. Never echo, log, screenshot, or include secrets in responses.
27. Public config → `import.meta.env.VITE_*`. Server config → `process.env.*` inside handlers.

## Handbook Maintenance

28. If a rule is missing, out of date, or contradicts another rule, flag it and propose an edit — do not silently work around it.
29. New approved deviations must be recorded in [11 — Exceptions Register](./11-exceptions-register.md).

---

**Next:** [15 — Project Memory](./15-project-memory.md)
