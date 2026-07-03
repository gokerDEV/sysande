# Terminology

- Organization: top-level tenant and ownership boundary.
- Project: a managed API product or environment within one organization.
- Upstream API: external business API reached through the gateway.
- Portal user: human user who manages organizations, projects, plans, or reports.
- API client: machine consumer that calls an upstream API through the gateway.
- Machine credential: revocable credential issued to one API client for one project.
- Scope: named permission required by a route or operation.
- Access plan: policy defining allowed access and usage units.
- Entitlement: active right granted under an access plan.
- Usage reservation: temporary atomic hold created before an upstream request is forwarded.
- Usage finalization: confirmation that a reserved unit is consumed.
- Usage release: cancellation of a reservation when usage should not be consumed.
- Usage ledger: auditable record of reservations, confirmations, releases, and adjustments.
