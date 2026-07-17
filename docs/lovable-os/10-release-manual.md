# 10 — Release Manual

Never deploy because development finished. Deploy because quality is verified.

## Release Pipeline

```
Plan → Develop → Self-Review → Engineering → Responsive → QA → Approval → Release → Post-Release Review
```

Each gate corresponds to a checklist:

| Gate | Owner |
|---|---|
| Engineering | [06](./06-engineering-checklist.md) |
| Responsive | [07](./07-responsive-checklist.md) |
| QA | [08](./08-qa-checklist.md) |
| Definition of Done | [09](./09-definition-of-done.md) |

## Versioning

Semantic versioning:

- **MAJOR** — breaking change (v1 → v2)
- **MINOR** — new feature (v2.1 → v2.2)
- **PATCH** — bug fix (v2.2.0 → v2.2.1)

Never deploy an unnamed version.

## Release Report Template

Every deployment produces a report:

```
Version:            vX.Y.Z
Date:               YYYY-MM-DD
Scope:              <what changed>
Files changed:      <count / list>
Components changed: <list>
Risk level:         LOW / MEDIUM / HIGH
Known limitations:  <if any>
QA status:          PASS / FAIL
Performance status: PASS / FAIL
SEO status:         PASS / FAIL
Accessibility:      PASS / FAIL
Regression:         PASS / FAIL
Approver:           <name>
Rollback plan:      <how to revert>
```

## Rollback Plan

Every release must be reversible.

- Note the last known-good deployment.
- Document the revert command / process.
- If a release fails post-deploy: rollback first, analyze after.

## Post-Release Review

After every deploy, verify in production:

- [ ] Site loads
- [ ] Navigation works
- [ ] Forms submit
- [ ] Images load
- [ ] Analytics active
- [ ] SEO metadata rendered
- [ ] No production-only bugs

## Approval Gate

The following changes require explicit approval **before** implementation:

- Navigation
- Layout
- Shared components
- Routing
- Data source shape
- Design tokens
- Anything scored [HIGH risk](./01-decision-engine.md#risk-scoring)

## Golden Release Rule

A release is successful not because it has more features, but because users experience fewer problems.

---

**Next:** [11 — Exceptions Register](./11-exceptions-register.md)
