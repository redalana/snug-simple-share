# ROADMAP

Planned improvements to LOVABLE OS. Not commitments — a candidate list reviewed at each version bump.

---

## Near-term (v2.1 — v2.3)

- **Automated link + anchor linter.** A CI script that fails the build when any `docs/lovable-os/**` link is broken (currently validated manually — see [VALIDATION](./VALIDATION.md)).
- **Machine-readable Mode Matrix.** Export [01 Decision Engine](./01-decision-engine.md) as a JSON/YAML file that tools (and AI agents) can consume programmatically.
- **Per-section changelogs.** Local `_history.md` fragments per section, aggregated into the root [CHANGELOG](./CHANGELOG.md).
- **Playwright QA harness.** A repeatable script under `/tmp/browser/` that runs the [Responsive Checklist](./07-responsive-checklist.md) across all breakpoints on every route.
- **Lighthouse budget file.** A `lighthouse-budgets.json` referenced by [08 QA / Performance](./08-qa-checklist.md#performance-qa).

## Medium-term (v2.4 — v2.9)

- **Content style guide.** A dedicated section covering medical tone, voice, terminology, translation guidelines.
- **Localization playbook.** Rules for adding a new language (Arabic-first RTL considerations, translation source of truth, fallback rules).
- **Analytics conventions.** Event naming, PII rules, consent handling.
- **Security appendix.** Threat model, auth boundaries, secret rotation, dependency scanning cadence.
- **Design token export.** Generate a Figma-consumable token file from `src/styles.css`.

## Long-term (v3.0 candidates)

- **Multi-project handbook.** Split project-specific memory ([15](./15-project-memory.md)) from the reusable core so this handbook can seed other Lovable projects.
- **Rule test suite.** For each rule, a minimal repro test that fails when the rule is violated (e.g. a lint rule for `text-white`, a route-scan test for `og:image` on leaves only).
- **Handbook diff assistant.** An AI workflow that reviews PRs to `docs/lovable-os/` for consistency, duplication, and orphaned links.
- **Governance council.** Named owners per section (design / engineering / QA / release) with formal review authority.

---

## Proposal Process

To propose a roadmap item:

1. Open a PR that appends to this file under the correct time horizon.
2. Include: problem, proposed solution, owner discipline, estimated effort (S/M/L).
3. Reference any related section.

Promotion to a version: at each release, the Release Manager selects roadmap items to include, adds them to [CHANGELOG](./CHANGELOG.md), and removes them from this file.
