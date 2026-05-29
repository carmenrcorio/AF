<!-- Title: use Conventional Commits, e.g. "feat: phone-verified signup" -->

## What & why
<!-- What does this change do, and why? Link any issue or ADR. -->

## How it was tested
<!-- Steps, automated tests added, and the security deny-case you proved. -->

## Checklist (Definition of Done)
- [ ] Follows `docs/ENGINEERING.md` and `SECURITY.md`
- [ ] CI is green (build / type-check / audit; tests where applicable)
- [ ] Tests cover new logic **including the security deny-case**
- [ ] Any new table/column has **RLS in the same migration**
- [ ] No secrets committed; no PII or secrets in logs; no `NEXT_PUBLIC_` secret leakage
- [ ] **CHANGELOG.md updated** in this PR
- [ ] Accessibility considered (keyboard, contrast, labels)

## Security impact
<!-- New data collected? New auth/authorization path? New external input? If "none," say why. -->
