# Review a View

Use this prompt after a draft view has been produced.

The objective is to review the design with the user, correct the source DSL, and update the coverage status without expanding scope unnecessarily.

## Inputs

Review together:

- the view definition,
- source DSL,
- rendered output when available,
- relevant confirmed facts,
- assumptions,
- open questions,
- related views already approved or reviewed.

## Review rules

1. Review the source model, not only the visual appearance.
2. Do not treat a visually attractive diagram as technically correct.
3. Preserve approved names, identifiers, boundaries, and decisions.
4. Do not introduce unrelated architecture changes during review.
5. Separate factual corrections from style preferences.
6. Record new assumptions and decisions explicitly.
7. Keep the view focused on its stated purpose and abstraction level.
8. Update related views only when a confirmed change creates a real inconsistency.

## Review dimensions

### Scope and purpose

- Does the view answer the question it was created to answer?
- Is anything important missing for that purpose?
- Is anything shown that belongs in another view or abstraction level?

### Elements and boundaries

- Are actors, systems, containers, components, data stores, states, or runtime nodes correctly classified?
- Are system, trust, organization, and deployment boundaries correct?
- Is containment correct?

### Relationships and behavior

- Are relationship directions correct?
- Are labels specific and meaningful?
- Are protocols, events, data, and conditions confirmed?
- Are alternate, error, retry, timeout, and terminal paths represented where necessary?

### Terminology and consistency

- Do names and identifiers match the shared model and glossary?
- Are descriptions and technologies consistent with other reviewed views?
- Does the diagram conflict with an approved decision or assumption?

### Notation and tool usage

- Is the selected notation suitable for the concern?
- Does the source follow the selected DSL's semantics?
- Is animation used only when it adds meaning?
- Is the diagram understandable without animation?

### Readability

- Is the visual hierarchy clear?
- Are labels concise and readable?
- Are crossings, density, color, and grouping controlled?
- Would splitting the view improve clarity without losing context?

## Produce

### Findings

Classify each finding as:

- `correction` — conflicts with confirmed information,
- `clarification` — meaning is ambiguous,
- `consistency` — conflicts with another view or shared model,
- `scope` — belongs elsewhere or exceeds the view purpose,
- `presentation` — visual or readability improvement.

### Proposed revisions

List only concrete revisions. Explain any change that affects another view or an approved decision.

### Revised source DSL

Provide the complete revised source block when changes are accepted. Do not return a partial fragment unless the user explicitly requests a patch.

### Updated records

List changes required in:

- assumptions,
- decisions,
- terminology,
- related views,
- coverage status.

### Coverage status

Use:

- `draft` when unresolved design issues remain,
- `reviewed` when the user has reviewed the view but final approval is pending,
- `approved` only when the user explicitly approves it.

End by asking the user to approve the revision or identify remaining corrections.
