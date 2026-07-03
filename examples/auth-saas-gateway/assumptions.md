# Assumptions

| ID | Assumption | Impact if wrong | Status | Related views |
|---|---|---|---|---|
| A-001 | One organization may own multiple projects and upstream APIs. | Tenant and project boundaries must change. | open | Context, container structure |
| A-002 | A machine credential belongs to exactly one project. | Credential and authorization relationships must change. | open | Container structure, credential lifecycle |
| A-003 | Usage reservation occurs before forwarding a request upstream. | Entitlement flow and billing correctness model must change. | open | Access request flow |
| A-004 | Usage events may be delivered more than once. | Idempotency and ledger rules must change. | open | Access request flow, logical data |
| A-005 | Payment processing remains outside the platform boundary. | The system boundary and commercial containers must change. | open | Context, container structure |
