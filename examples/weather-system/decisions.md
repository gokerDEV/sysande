# Weather System Decisions

## Decision register

| ID | Decision | Status | Related views |
|---|---|---|---|
| D-001 | Use a shared forecast cache between the API and refresh worker. | accepted | Container structure, data flow |
| D-002 | Refresh stale or missing forecast data asynchronously. | accepted | Sequence, data flow, job lifecycle |
| D-003 | Return usable stale data when provider refresh fails. | accepted | Sequence, job lifecycle |

## D-001 — Shared forecast cache

- **Status:** accepted
- **Context:** The API must respond quickly while the worker updates forecasts independently.
- **Decision:** The API and refresh worker use the same logical forecast cache.
- **Rationale:** This keeps read latency low and lets refresh work happen asynchronously.
- **Alternatives considered:** API-local cache; direct provider call for every request.
- **Consequences:** Cache keys, freshness metadata, and write consistency must be defined during implementation.
- **Related views:** Container structure, forecast data flow.

## D-002 — Asynchronous refresh

- **Status:** accepted
- **Context:** Provider calls may be slower and more failure-prone than cached reads.
- **Decision:** Stale or missing data creates a refresh job that is processed by a worker.
- **Rationale:** User-facing requests remain fast and external-provider calls are isolated from request handling.
- **Alternatives considered:** Synchronous refresh inside the API request.
- **Consequences:** The system requires a queue, worker, job lifecycle, retry policy, and idempotent cache updates.
- **Related views:** Request sequence, data flow, refresh job lifecycle.

## D-003 — Stale-data fallback

- **Status:** accepted
- **Context:** The external provider may be temporarily unavailable.
- **Decision:** When stale cached data exists, it may be returned with freshness information while refresh is attempted.
- **Rationale:** Partial freshness is preferable to complete unavailability for this example.
- **Alternatives considered:** Return an error whenever the provider cannot refresh data.
- **Consequences:** The response contract must expose freshness or last-updated information.
- **Related views:** Request sequence, refresh job lifecycle.
