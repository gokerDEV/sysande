# sysande Workflow

sysande guides a human and an AI assistant through system analysis and design without replacing established modeling tools.

## Principles

1. Work iteratively with the user.
2. Ask only the questions needed for the current decision.
3. Separate confirmed facts, assumptions, and open questions.
4. Plan coverage before generating diagrams.
5. Design one view at a time.
6. Reuse existing element names and identifiers across views.
7. Keep each diagram at a consistent abstraction level.
8. Use the most suitable established notation and tool.
9. Keep source DSL files beside generated outputs.
10. Finish with a cross-view consistency review.

## Process

### 1. Init

Ask the questions in `prompts/00-init.md` iteratively. Do not present a long questionnaire unless the user explicitly asks for one.

### 2. Discovery summary

Produce:

- system purpose,
- primary actors,
- system boundary,
- external systems,
- in-scope capabilities,
- out-of-scope capabilities,
- constraints,
- quality priorities,
- confirmed facts,
- assumptions,
- unresolved questions.

Ask the user to correct the summary.

### 3. Coverage planning

Use `definitions/coverage.md` and `prompts/02-coverage-plan.md`.

Do not mark every cell as required. Recommend only views that materially improve understanding, implementation, risk analysis, communication, or long-term documentation.

Ask the user to approve or revise the plan before creating diagrams.

### 4. View design

For each approved coverage cell:

1. State the abstraction level, concern, notation, tool, and purpose.
2. Ask the minimum necessary questions.
3. Draft the source DSL.
4. List assumptions and unresolved points.
5. Review the result with the user.
6. Revise it before moving to another view.
7. Update the coverage status.

### 5. Tool selection

Prefer:

- LikeC4 for a shared architecture model and C4-oriented context, container, component, dynamic, and deployment views.
- D2 for data-flow, state-machine, ERD, custom diagrams, visual themes, and animated SVG.

Existing valid project tooling takes precedence over these defaults.

### 6. Consistency review

Check:

- element names and identifiers,
- system and trust boundaries,
- relationship directions and labels,
- technologies and protocols,
- data names and classifications,
- lifecycle states,
- external-system definitions,
- abstraction-level consistency,
- contradictions between structure, flow, behavior, and deployment views.

### 7. Documentation output

Keep together:

- source DSL,
- generated SVG or animated SVG,
- assumptions,
- decisions,
- coverage status,
- review notes.

Generated diagrams are documentation outputs, not the source of truth.
