# Design a View

Use this prompt only after the discovery summary and coverage plan have been reviewed by the user.

Design one approved coverage view at a time.

## Inputs

Before starting, identify:

- abstraction level,
- concern,
- notation,
- selected tool or DSL,
- purpose of the view,
- current coverage status,
- existing shared model elements and identifiers,
- relevant confirmed facts, assumptions, decisions, and open questions.

## Rules

1. Stay within the selected abstraction level.
2. Include only elements needed for the stated purpose.
3. Reuse existing names and identifiers exactly.
4. Do not recreate a shared architectural element under a new identifier.
5. Do not invent relationships, protocols, technologies, data types, states, or responsibilities.
6. Ask the minimum number of focused questions required to produce a useful draft.
7. Prefer an established notation and its accepted semantics.
8. Use the selected tool's native DSL when practical.
9. Do not convert an existing valid model to another DSL without a concrete benefit.
10. Keep source DSL as the editable source of truth; generated SVG is an output.

## Tool guidance

### LikeC4

Prefer LikeC4 when the view depends on a shared architecture model, especially for:

- context structure,
- container structure,
- component structure,
- C4 dynamic views,
- deployment views.

Reuse model declarations and create views separately where possible.

### D2

Prefer D2 when the view requires:

- data-flow presentation,
- state-machine presentation,
- ERD or custom notation,
- reusable sysande visual themes,
- static or animated SVG output.

Apply animation only where it communicates meaningful flow, sequence, or state change.

## View-specific checks

### Structure

- Are boundaries and containment clear?
- Are responsibilities described?
- Are relationships directional and labeled?
- Are implementation details appropriate for the selected level?

### Data

- Are entities, stores, schemas, and data ownership clear?
- Are cardinalities or dependencies shown only when confirmed?
- Are sensitive or regulated data categories identified where relevant?

### Flow

- Are source, destination, transformed data, and direction clear?
- Are control flow and data flow kept distinguishable?
- Are trust-boundary crossings visible where relevant?

### Behavior

- Is time or event order explicit?
- Are alternate, failure, retry, timeout, and terminal paths represented when relevant?
- Are state transitions triggered by named events or conditions?

### Deployment

- Are runtime nodes, zones, environments, and network boundaries clear?
- Is the mapping between logical elements and runtime locations explicit?
- Are scaling and redundancy represented only when confirmed?

## Output format

### View definition

- Level:
- Concern:
- Notation:
- Tool:
- Purpose:
- Status: draft

### Questions resolved in this iteration

### Confirmed elements and relationships

### Assumptions

### Open questions

### Source DSL

Provide one complete, internally consistent source block in the selected DSL.

### Rendering instructions

State:

- expected output format,
- selected theme,
- animation profile, if applicable,
- required rendering or validation command when known.

### Review checklist

Ask the user to review:

- missing or unnecessary elements,
- incorrect boundaries,
- incorrect relationship direction or labels,
- unsupported assumptions,
- terminology inconsistencies,
- abstraction-level violations.

Do not move to another coverage view until this draft has been reviewed.
