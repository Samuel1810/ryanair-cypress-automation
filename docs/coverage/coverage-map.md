# Coverage Map — Ryanair Cypress Automation Tests

## Scope overview
This repository intentionally contains a **minimal E2E suite** focused on one high-value booking flow
(Lisbon → Madrid) to demonstrate QA decision-making on a real-world airline UI.

---

## Covered scenario

| ID | Flow | Risk | What is validated | Automated? | Evidence |
|---|---|---:|---|---|---|
| TC001 | Booking flow (Lisbon → Madrid) | High | Flight search, date selection, fare choice, passenger details, extras flow up to login request | ✅ Yes | `cypress/e2e/purchase/TC001-successful-purchase.cy.js` |

---

## Intentional gaps (out of scope)

| Area | Risk | Why it is not covered |
|---|---:|---|
| Payment completion | High | Not suitable for demo automation; unstable and may involve sensitive steps |
| Multiple routes / destinations | Medium | Route fixed by design to keep scope focused |
| Extensive negative cases | Medium | Would increase maintenance without proportional portfolio value |
| Cross-browser / mobile | Medium | Belongs to a different test initiative |
| Performance / security / a11y | Medium | Out of scope for this repository |

---

## QA decision summary
- One core flow was chosen to maximize signal while keeping the suite stable.
- Dynamic dates are used to reduce test obsolescence.
- The repository prioritizes **clarity and decision-making** over coverage volume.
