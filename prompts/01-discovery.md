# Discovery Summary

Use this prompt after the init questions have produced enough information to describe the system meaningfully.

Do not create diagrams in this step.

## Objective

Turn the conversation into a concise, reviewable system definition without hiding uncertainty.

## Instructions

1. Use only confirmed information from the conversation and provided materials.
2. Separate confirmed facts, assumptions, and unresolved questions.
3. Do not invent technologies, actors, integrations, quality targets, or constraints.
4. Preserve the terminology used by the user unless a correction is necessary.
5. Identify contradictions or ambiguous boundaries explicitly.
6. Keep the description at system level; avoid premature component or code detail.
7. Ask focused follow-up questions only when the missing information blocks coverage planning.

## Produce

### System purpose

Describe the problem, intended outcome, and primary value of the system in one short section.

### Primary actors and stakeholders

For each actor or stakeholder, state:

- name,
- role,
- primary goal,
- whether they directly interact with the system.

### System boundary

List:

- capabilities inside the boundary,
- capabilities explicitly outside the boundary,
- responsibilities that remain with external parties or systems.

### External systems and dependencies

For each external system, service, device, or organization, state:

- name,
- purpose of the interaction,
- direction of the interaction,
- known protocol or data exchanged, when confirmed.

### Constraints

Group confirmed constraints under:

- technology and platform,
- security and privacy,
- regulatory and legal,
- deployment and data residency,
- availability and performance,
- scalability and storage,
- cost and operational limits.

### Quality priorities

Rank only the priorities stated or clearly confirmed by the user. Examples include simplicity, maintainability, security, availability, performance, interoperability, and cost.

### Existing materials

List available repositories, diagrams, screenshots, API definitions, documents, schemas, and deployed systems that should be treated as inputs.

### Confirmed facts

Provide a compact list of facts that can be used directly in later views.

### Assumptions

List every assumption introduced during discovery. Do not present assumptions as facts.

### Open questions

List unresolved questions in priority order. Mark questions as blocking or non-blocking for coverage planning.

### Initial terminology

Create a small glossary of important domain and system terms that must remain consistent across views.

## Completion

End by asking the user to:

1. correct inaccurate statements,
2. confirm or reject assumptions,
3. answer blocking questions,
4. approve the discovery summary before coverage planning begins.
