# Architecture Decisions

## D-001 — Separate human and machine authentication

- **Status:** accepted
- **Decision:** Human portal sessions and machine API credentials are modeled as separate authentication contexts.
- **Rationale:** They have different actors, lifecycles, revocation needs, and security boundaries.
- **Consequences:** Portal login and gateway access require separate behavior views.

## D-002 — Reserve usage before upstream access

- **Status:** accepted
- **Decision:** The gateway reserves the required usage unit before forwarding an admitted request.
- **Rationale:** An asynchronous deduction after the request would allow concurrent requests to exceed the remaining entitlement.
- **Consequences:** Reservations require atomicity, expiration, confirmation, and release rules.

## D-003 — Keep the usage ledger idempotent

- **Status:** accepted
- **Decision:** Every usage reservation and finalization has a stable identity, and duplicate events must not create duplicate consumption.
- **Rationale:** Asynchronous delivery and retries may repeat messages.
- **Consequences:** Usage records require unique identifiers and explicit state transitions.

## D-004 — Keep payment processing external

- **Status:** accepted
- **Decision:** The platform receives verified purchase and subscription outcomes from an external payment provider.
- **Rationale:** Payment processing is not the primary responsibility of the Auth SaaS Gateway.
- **Consequences:** Webhook validation and entitlement activation are inside the boundary; card processing is outside it.
