# Auth SaaS Gateway Example

This example demonstrates a complete sysande analysis and design package for a multi-tenant authentication and API gateway SaaS.

The example is documentation-only. It contains no application code, framework choice, package manifest, or implementation scaffold.

## System summary

The platform allows organizations to:

- register one or more upstream APIs,
- define access plans and usage limits,
- authenticate human users and machine clients,
- issue credentials and scopes,
- route authorized requests through a managed gateway,
- measure usage,
- enforce entitlements,
- expose usage and subscription information through a management portal.

## Files

- `discovery.md` — approved system summary
- `coverage.md` — selected views and statuses
- `assumptions.md` — provisional statements
- `decisions.md` — accepted design choices
- `terminology.md` — shared domain terms
- `architecture/model.c4` — shared LikeC4 model and structural views
- `architecture/flows/access-request.d2` — gateway access flow
- `architecture/behavior/portal-login.d2` — human login sequence
- `architecture/behavior/credential-lifecycle.d2` — machine credential lifecycle
- `architecture/behavior/entitlement-check.d2` — entitlement and usage reservation sequence

## Selected coverage

| Level | Structure | Data | Flow | Behavior | Deployment |
|---|---|---|---|---|---|
| Context | approved | not-applicable | deferred | not-applicable | not-applicable |
| Container | approved | reviewed | approved | reviewed | deferred |
| Component | deferred | deferred | deferred | deferred | deferred |

The example intentionally stops at reviewed documentation and diagrams.
