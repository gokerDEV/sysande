# Cross-View Consistency Review

Use this prompt after the planned views have been drafted and individually reviewed, or whenever a major architecture decision changes multiple views.

The objective is to find contradictions across the system model and documentation. Do not create new views merely to complete the coverage matrix.

## Inputs

Review all available:

- approved discovery summary,
- coverage matrix,
- glossary and terminology,
- assumptions,
- decisions,
- shared LikeC4 model,
- D2 and other DSL sources,
- generated diagrams,
- deployment and integration documentation.

Treat source DSL and approved records as authoritative over generated images.

## Review rules

1. Compare views by shared element identity, not visual similarity.
2. Preserve explicitly approved differences in level or purpose.
3. Do not require every detail to appear in every view.
4. Report only meaningful contradictions, omissions, or ambiguities.
5. Distinguish confirmed defects from possible risks.
6. Do not silently repair architecture decisions.
7. Ask the user when two approved sources conflict and no authority is defined.

## Consistency checks

### Identity and terminology

- The same element uses the same name and identifier across views.
- Synonyms and abbreviations are defined and used consistently.
- External and internal elements are not confused.
- Data, events, commands, states, and protocols use stable names.

### Abstraction and containment

- Context views contain systems and actors rather than internal components.
- Container views use runnable or deployable applications and data stores consistently.
- Components belong to the correct container.
- Code-level details do not leak into higher-level views without a stated reason.
- Parent-child relationships remain consistent across zoom levels.

### Relationships

- Relationship direction and purpose agree across structure, flow, and behavior views.
- Sequence messages correspond to relationships that are possible in the structural model.
- Data flows have valid sources and destinations.
- Deployment connections support the logical communication shown elsewhere.
- Technologies and protocols do not contradict one another.

### Data

- Data ownership and storage locations are consistent.
- Sensitive, regulated, or personal data classifications do not change between views.
- Data transformations and formats are compatible along the full flow.
- Retention, deletion, and audit responsibilities are not contradictory when documented.

### Behavior and lifecycle

- Sequence outcomes are compatible with state transitions.
- Error, retry, cancellation, timeout, and terminal states agree across behavioral views.
- Events and commands have clear producers and consumers.
- Asynchronous behavior is not represented as synchronous elsewhere without explanation.

### Deployment and boundaries

- Every deployed software element maps to a logical system, container, or component.
- Trust boundaries and network zones are consistent with data and communication flows.
- External dependencies remain outside the controlled boundary.
- Availability, scaling, and redundancy assumptions agree with the deployment design.

### Coverage and documentation

- Coverage statuses match the actual state of the files.
- Every planned view has a stated purpose, notation, tool, and source.
- Deferred and not-applicable cells have a clear rationale when needed.
- Generated SVG files can be traced back to their source DSL.
- Assumptions and decisions referenced by views are recorded.

## Produce

### Review summary

State whether the model is:

- consistent,
- consistent with warnings,
- inconsistent.

### Findings

For each finding provide:

- severity: `error`, `warning`, or `note`,
- category,
- affected views or files,
- conflicting statements or elements,
- recommended resolution,
- whether user confirmation is required.

### Unresolved conflicts

List conflicts that cannot be resolved from the current material. Ask focused questions for these only.

### Required updates

List exact files or views that should be updated. Do not rewrite them unless the user asks to proceed.

### Coverage update

Recommend status changes only when supported by the review:

- return a view to `draft` when a material contradiction exists,
- keep it `reviewed` when only non-blocking warnings remain,
- retain `approved` when no material change is required.

### Final documentation inventory

List the current source DSL files, generated outputs, decisions, assumptions, and unresolved items.
