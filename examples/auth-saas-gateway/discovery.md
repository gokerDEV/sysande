# Discovery Summary

## System purpose

The Auth SaaS Gateway provides managed authentication, authorization, entitlement enforcement, and request routing for organizations that expose one or more upstream APIs.

It separates portal access for human users from API access for machine clients and records billable or quota-based usage at the gateway boundary.

## Primary actors and stakeholders

| Name | Role | Goal | Direct interaction |
|---|---|---|---|
| Organization administrator | Customer administrator | Configure projects, upstream APIs, access plans, identities, and credentials | Yes |
| Portal user | Human customer or team member | Sign in and manage permitted resources | Yes |
| API client | Machine consumer | Call an upstream API using an issued credential | Yes |
| Platform operator | Service operator | Operate the platform and investigate failures | Yes |
| Upstream API owner | Customer stakeholder | Protect and monetize an upstream API | Indirect |

## System boundary

### Inside the boundary

- management portal,
- management API,
- identity and session service,
- credential and authorization service,
- gateway request path,
- entitlement and usage service,
- usage ledger,
- configuration store,
- event delivery for asynchronous usage processing,
- audit and operational records.

### Outside the boundary

- upstream business logic,
- external identity providers,
- payment processing,
- customer accounting and tax systems,
- email or messaging delivery,
- client application implementation.

## External systems

| External system | Purpose | Direction |
|---|---|---|
| Identity Provider | Authenticates portal users | Platform ↔ Identity Provider |
| Payment Provider | Confirms purchases and subscription events | Platform ↔ Payment Provider |
| Notification Provider | Sends account and quota notifications | Platform → Provider |
| Upstream API | Executes customer business operations | Gateway ↔ Upstream API |

## Core capabilities

- tenant and project management,
- upstream API registration,
- human sign-in and session management,
- machine credential issuance and revocation,
- scope and policy management,
- access-plan and entitlement management,
- request authentication and authorization,
- atomic usage reservation before upstream access,
- usage confirmation or release after the upstream result,
- usage and audit reporting.

## Constraints

### Security and privacy

- tenant isolation is mandatory,
- portal sessions and machine credentials have different purposes and lifecycles,
- internal identity headers must not be trusted from callers,
- secrets and credentials must be revocable,
- every billable request must be traceable to a tenant, project, credential, and usage record.

### Reliability

- entitlement enforcement must remain correct under concurrent requests,
- duplicate usage events must not create duplicate charges,
- upstream failure must have a defined effect on reserved usage,
- gateway failures must not silently bypass authorization.

### Scope

- this example documents the system only,
- no programming language, framework, database product, or deployment provider is selected.

## Quality priorities

1. Security
2. Billing and quota correctness
3. Tenant isolation
4. Reliability
5. Auditability
6. Low gateway latency
7. Maintainability

## Confirmed facts for the example

- The platform is multi-tenant.
- Human portal access and machine API access are separate authentication contexts.
- API access is mediated by a gateway.
- Access depends on both authorization policy and active entitlement.
- Usage is reserved before forwarding the request.
- Usage is finalized or released after the upstream outcome.
- Payment processing remains external.

## Assumptions

- One organization may manage multiple projects and upstream APIs.
- A machine credential belongs to exactly one project.
- Usage units are defined per access plan.
- The gateway can identify the target route before entitlement reservation.
- Asynchronous events may be delivered more than once.

## Open questions

- Which purchase models are supported: subscription, prepaid quota, time-based access, or combinations?
- Are end-user identities delegated by customers or managed directly by the platform?
- How long may a reservation remain pending before automatic release?
- Which upstream outcomes consume usage?
- Is regional data residency required?
