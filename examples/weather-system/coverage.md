# Weather System Coverage

## Coverage matrix

| Abstraction level | Structure | Data | Flow | Behavior | Deployment |
|---|---|---|---|---|---|
| Context | approved | not-applicable | deferred | not-applicable | not-applicable |
| Container | approved | deferred | reviewed | reviewed | deferred |
| Component | deferred | deferred | deferred | deferred | deferred |
| Code | deferred | deferred | deferred | deferred | not-applicable |

## Planned and completed views

| Priority | Level | Concern | Notation | Tool | Purpose | Status |
|---:|---|---|---|---|---|---|
| 1 | context | structure | c4 | LikeC4 | Show visitors, the Weather System, and the external provider | approved |
| 2 | container | structure | c4 | LikeC4 | Show the web app, API, worker, cache, and queue | approved |
| 3 | container | behavior | sequence | LikeC4 dynamic view | Explain a forecast request with cache hit or refresh | reviewed |
| 4 | container | flow | data-flow | D2 | Show forecast, command, and result movement | reviewed |
| 5 | container | behavior | state-machine | D2 | Define the refresh job lifecycle and retry path | reviewed |

## Deferred views

### Context flow

Deferred because the context structure already communicates the only important external exchange for this small example.

### Container data

Deferred because no persistent domain model is required for the example. The cache record can be documented later if implementation work requires it.

### Deployment

Deferred because hosting platform, regions, scaling targets, and network topology are intentionally unspecified.

### Component and code levels

Deferred because the system is small and no container currently requires internal decomposition for understanding or implementation planning.

## Coverage rationale

The selected views cover:

- system boundary and external dependency,
- logical runtime structure,
- primary user request behavior,
- asynchronous refresh flow,
- refresh job states and retry behavior.

Additional views would add detail without materially improving the current example.
