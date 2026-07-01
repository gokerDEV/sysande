# System Design Coverage

Coverage is the central planning mechanism in sysande. It combines an abstraction level with an architectural concern and recommends an established notation or view type.

## Base matrix

| Abstraction level | Structure | Data | Flow | Behavior | Deployment |
|---|---|---|---|---|---|
| Context | C4 Context | Not normally needed | Context Flow | Not normally needed | Not normally needed |
| Container | C4 Container | Logical Data | Data Flow | Sequence / State | Deployment |
| Component | C4 Component | Domain Model | Activity / Data Flow | Sequence / State | Runtime Mapping |
| Code | Class / Package | ERD | Algorithm Flow | State / Sequence | Not normally needed |

The matrix is a design aid, not a compliance checklist. Not every cell must be completed.

## Abstraction levels

- **Context** — the system, its users, and external systems.
- **Container** — deployable or runnable applications and data stores.
- **Component** — major responsibilities inside a selected container.
- **Code** — classes, modules, packages, schemas, and implementation-level structures.

## Concerns

- **Structure** — what exists and how elements are related.
- **Data** — what information exists and how it is organized.
- **Flow** — how information or work moves through the system.
- **Behavior** — how the system reacts over time, exchanges messages, or changes state.
- **Deployment** — where software runs and how runtime nodes are connected.

## Status values

Use one status for every considered cell:

- `not-applicable`
- `deferred`
- `missing`
- `planned`
- `draft`
- `reviewed`
- `approved`

These statuses describe project progress. They do not certify conformity to a standard.

## View definition

Every planned view should state:

- abstraction level,
- concern,
- notation,
- selected tool,
- purpose,
- status.

Example:

```yaml
level: container
concern: behavior
notation: state-machine
tool: d2
purpose: Define the analysis job lifecycle, retries, and terminal states.
status: planned
```

## Selection guidance

Recommend a view only when it materially improves one or more of:

- system understanding,
- implementation decisions,
- risk identification,
- communication,
- onboarding,
- operational readiness,
- long-term documentation.

Avoid generating diagrams merely to fill the matrix.
