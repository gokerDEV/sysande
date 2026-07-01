# Weather System Example

This example demonstrates the complete sysande workflow for a small online weather forecast system.

The system lets users search for a location and view a current forecast. Forecast data is retrieved from an external weather provider and cached to reduce latency and provider usage.

## Example goals

- show how discovery is recorded,
- create a minimal coverage plan,
- use LikeC4 for the shared architecture model,
- use D2 for data flow and state-machine views,
- keep assumptions and decisions visible,
- avoid unnecessary component and code-level diagrams.

## Files

- `discovery.md` — reviewed system summary
- `coverage.md` — selected views and statuses
- `assumptions.md` — provisional statements
- `decisions.md` — accepted design choices
- `architecture/model.c4` — shared LikeC4 architecture model and views
- `architecture/flows/forecast-flow.d2` — container-level data flow
- `architecture/behavior/refresh-job-lifecycle.d2` — refresh job state machine

## Selected coverage

| Level | Structure | Data | Flow | Behavior | Deployment |
|---|---|---|---|---|---|
| Context | approved | not-applicable | deferred | not-applicable | not-applicable |
| Container | approved | deferred | reviewed | reviewed | deferred |
| Component | deferred | deferred | deferred | deferred | deferred |
| Code | deferred | deferred | deferred | deferred | not-applicable |

## Tool selection

- LikeC4 is used for the context, container, and dynamic request views because the same architectural elements are reused.
- D2 is used for the data-flow and state-machine views because these benefit from custom presentation and optional animation.

## Suggested validation

Validate and render the LikeC4 source with the current LikeC4 CLI.

Validate and render the D2 sources with the current D2 CLI. The D2 files import the sysande default theme from the repository root.

Generated images are intentionally not committed in this first example. The source DSL files remain the source of truth.
