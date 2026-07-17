# 13 — Prompts

Reusable prompt templates. Copy, fill in the `<…>` placeholders, send.

Every template references the same handbook so behavior stays consistent across sessions.

---

## BUILD

```
MODE: BUILD

Objective:
<what to build>

Constraints:
- Follow LOVABLE OS v2.0.
- Reuse existing components in src/components/ and src/components/site/.
- Data must read from a single source of truth in src/lib/.
- Desktop-locked pages are protected — do not modify approved work.
- TanStack Start + React + Vite conventions (see 05-architecture.md).

Deliverable:
1. Short plan (files affected, components affected, risk score).
2. Implementation.
3. Definition of Done confirmation.

Stop before implementation if the plan is HIGH risk.
```

---

## FIX

```
MODE: FIX

Bug:
<observed behavior>

Expected:
<expected behavior>

Constraints:
- Follow LOVABLE OS v2.0.
- Fix only what is broken. No redesign, no unrelated improvements.
- Root cause via Five Whys — never patch a symptom.
- Fix the category, not only the reported instance.

Deliverable:
1. Root cause explanation.
2. Fix.
3. Reproduction steps and verification.
```

---

## IMPROVE

```
MODE: IMPROVE

Target:
<page / component>

Objective:
Improve <UX / a11y / readability / hierarchy> without redesigning.

Constraints:
- Preserve layout, identity, typography, spacing rhythm, and content.
- Desktop is locked.
- Report before implementing.

Deliverable:
1. Improvement report (issues + proposed changes).
2. On approval: implementation.
3. Before/after screenshots.
```

---

## REFACTOR

```
MODE: REFACTOR

Target:
<file / component / module>

Objective:
Clean up code without changing visual output.

Constraints:
- Visual output must be pixel-identical before and after.
- No behavioral change.
- Follow src/ folder conventions.

Deliverable:
1. Refactor plan.
2. Implementation.
3. Pixel-comparison confirmation.
```

---

## RESPONSIVE

```
MODE: RESPONSIVE

Target:
<page(s)>

Objective:
Fix responsive issues at <breakpoints>.

Constraints:
- Desktop is locked. Never modify shared desktop styles.
- Use sm: / md: / lg: overrides only.
- Follow 07-responsive-checklist.md.

Deliverable:
1. Per-breakpoint report.
2. On approval: implementation.
3. All-breakpoints screenshot pass.
```

---

## QA

```
MODE: QA

Scope:
<pages / features>

Objective:
Audit only. Do not fix.

Deliverable:
Prioritized findings (P0/P1/P2/P3), each with:
- Location
- Severity
- Cause
- Recommendation

Use 08-qa-checklist.md as the audit template.
```

---

## SEO

```
MODE: SEO

Scope:
<routes>

Objective:
Audit and (on approval) implement technical SEO.

Constraints:
- No visual changes.
- Follow 05-architecture.md head() rules.
- Canonical + og:image only on leaf routes.

Deliverable:
1. SEO audit (metadata, canonical, OG, structured data, sitemap, robots).
2. On approval: implementation.
3. Verification.
```

---

## PERFORMANCE

```
MODE: PERFORMANCE

Scope:
<routes / assets>

Objective:
Audit and (on approval) optimize.

Deliverable:
1. Audit (bundle, images, fonts, hydration, Core Web Vitals).
2. On approval: implementation.
3. Before/after Lighthouse.
```

---

## ACCESSIBILITY

```
MODE: ACCESSIBILITY

Scope:
<routes / components>

Objective:
Audit and (on approval) fix.

Deliverable:
1. A11y audit (keyboard, ARIA, contrast, focus, forms, images).
2. On approval: implementation.
3. Keyboard walkthrough verification.
```

---

## RELEASE

```
MODE: RELEASE

Version:
vX.Y.Z

Scope:
<what is shipping>

Deliverable:
1. Full Definition of Done pass (see 09-definition-of-done.md).
2. Release report per 10-release-manual.md template.
3. Rollback plan.
```

---

**Next:** [14 — AI Rules](./14-ai-rules.md)
