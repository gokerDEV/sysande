# Architecture Review

## Overall assessment

The generated architecture is a plausible first sketch for an API gateway SaaS, but it is not yet a validated design for the user's actual product.

## Positive aspects

- Clear separation between management, authentication, proxying, billing, persistence, and telemetry.
- Use of an event bus for asynchronous usage processing.
- Separate structural, flow, and behavior diagrams.
- Recognition that gateway routing may be driven by OpenAPI metadata.

## Major issues

### 1. Product definition is unresolved

The phrase "proxy usage/time sales platform" can describe several products:

- a managed API gateway service,
- a marketplace for metered API access,
- a proxy access subscription service,
- a platform where customers attach their own upstream APIs,
- a time-based or quota-based access product.

The generated design selected one interpretation without discovery.

### 2. Independent LikeC4 models

The context, container, and component files redefine the same conceptual elements independently.

A better LikeC4 project should define each element once in a shared model and create multiple views over those stable identifiers.

Risk:

- duplicate identities,
- naming drift,
- contradictory relationships,
- difficult cross-view consistency checks.

### 3. Premature component decomposition

The Proxy Engine component view was created before the container model was reviewed.

Component-level detail should remain deferred until a concrete question requires it.

### 4. Commercial domain is compressed

`Billing & Quota Engine` hides several possible responsibilities:

- plan and price management,
- order or purchase,
- payment processing,
- entitlement activation,
- quota reservation,
- usage ledger,
- refunds and cancellations,
- invoices and tax,
- expiration and renewal.

These concepts must be discovered before deciding whether they belong in one container.

### 5. Quota race condition

The generated flow checks quota before the upstream call but deducts usage asynchronously afterward.

With concurrent requests, several requests may all pass against the same remaining quota.

A real design must choose a consistency model, for example:

- atomic decrement,
- synchronous reservation and confirmation,
- token bucket at the gateway with durable reconciliation.

### 6. Authentication models are mixed

The diagrams combine:

- social login with HttpOnly session cookies for human portal users,
- bearer JWT authorization for API traffic.

These are valid together, but they require distinct actors, credentials, token purposes, and lifecycles.

Questions still required:

- Is the API consumer a person or a machine client?
- Are API keys supported?
- Is OAuth client credentials supported?
- Are portal sessions and gateway tokens separate?
- How are tenant and project bindings enforced?

### 7. Event and ledger guarantees are undefined

The telemetry event bus implies asynchronous processing, but the design does not define:

- delivery semantics,
- duplicate handling,
- idempotency keys,
- ordering,
- reconciliation,
- failure recovery.

These are critical for billable usage.

### 8. D2 theme not used

The generated D2 files do not import or apply the sysande default theme.

This means the response discovered D2 as a tool but did not follow the reusable theme guidance.

## Code-level concerns

The generated gateway implementation should be treated as illustrative only.

Key gaps include:

- exact string matching does not support OpenAPI templated paths,
- OpenAPI security alternatives are flattened incorrectly,
- JWT issuer, audience, algorithm, token type, and key rotation are not checked,
- incoming headers are forwarded without a defined sanitization policy,
- upstream SSRF controls are absent,
- timeouts and body limits are absent,
- quota enforcement is not implemented,
- the event bus is represented only by console logging,
- the implementation covers only a small subset of the modeled platform.

## Current status recommendation

| View | Recommended status |
|---|---|
| Context structure | draft |
| Container structure | draft |
| Proxy component structure | deferred or draft |
| Data flow | draft |
| Auth sequence | draft |
| OpenAPI ingestion sequence | draft |
| Code | experimental, outside approved sysande design |
