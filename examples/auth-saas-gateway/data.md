# Logical Data View

| Record | Owner | Key relationships | Purpose |
|---|---|---|---|
| Organization | Management API | Owns projects and memberships | Tenant boundary |
| Membership | Identity & Session Service | Links portal user to organization and role | Human authorization context |
| Project | Management API | Belongs to one organization; owns routes and credentials | Managed API product boundary |
| Route Policy | Credential & Authorization Service | Belongs to one project; references required scopes | Gateway authorization rule |
| Machine Credential | Credential & Authorization Service | Belongs to one project and client identity | Machine authentication |
| Access Plan | Entitlement & Usage Service | Defines usage units and commercial rules | Access definition |
| Entitlement | Entitlement & Usage Service | Links subject or project to an active plan | Current access right |
| Usage Reservation | Entitlement & Usage Service | References entitlement, request, project, and credential | Atomic hold before forwarding |
| Usage Transaction | Usage Ledger | Finalizes or releases one reservation | Auditable consumption history |
| Audit Event | Audit Store | References actor, tenant, project, action, and outcome | Security and administrative trace |

## Ownership rules

- Every project belongs to exactly one organization.
- Every route policy and machine credential belongs to exactly one project.
- Every reservation references one entitlement and one gateway request identity.
- Every usage transaction references one reservation identity.
- Duplicate finalization events must resolve to the same usage transaction.
- Audit records do not replace the usage ledger.
