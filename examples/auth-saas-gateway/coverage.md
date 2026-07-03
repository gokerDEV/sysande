# Coverage Plan

| Level | Structure | Data | Flow | Behavior | Deployment |
|---|---|---|---|---|---|
| Context | approved | not-applicable | deferred | not-applicable | not-applicable |
| Container | approved | reviewed | approved | reviewed | deferred |
| Component | deferred | deferred | deferred | deferred | deferred |

## Selected views

| Priority | Level | Concern | Notation | Tool | Purpose | Status |
|---:|---|---|---|---|---|---|
| 1 | context | structure | C4 context | LikeC4 | Define actors, system boundary, and external systems | approved |
| 2 | container | structure | C4 container | LikeC4 | Define the major logical responsibilities inside the platform | approved |
| 3 | container | flow | data flow | D2 | Show authentication, entitlement reservation, proxying, and usage finalization | approved |
| 4 | container | behavior | sequence | D2 | Separate human portal login from machine API access | reviewed |
| 5 | container | behavior | state machine | D2 | Define credential lifecycle and revocation | reviewed |
| 6 | container | data | logical data | documentation | Define the principal records and ownership boundaries | reviewed |

## Deferred views

- **Context flow:** the context structure already communicates the external exchanges required for this example.
- **Deployment:** hosting topology, regions, network zones, and scaling targets are not yet confirmed.
- **Component views:** internal decomposition is not required to explain the current system responsibilities.

## Coverage rationale

The selected views answer the primary design questions:

- Who uses the platform?
- What is inside and outside its boundary?
- Which logical containers hold each responsibility?
- How is a gateway request admitted or rejected?
- How are billable usage and concurrent requests handled?
- How do human sessions differ from machine credentials?
- Which records belong to a tenant, project, credential, entitlement, and usage transaction?
