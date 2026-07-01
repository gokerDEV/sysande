# Coverage Planning

Review the approved discovery summary and `definitions/coverage.md`.

Create an initial coverage plan. Do not generate diagrams in this step.

## Rules

- Do not mark every cell as required.
- Recommend only views that materially improve understanding, implementation, risk identification, communication, onboarding, operations, or long-term documentation.
- Prefer the smallest useful set of views.
- Defer component and code views until a concrete need exists.
- Reuse established notations and tools.
- Respect existing project tooling.

## For every considered view provide

- abstraction level,
- concern,
- notation,
- preferred tool,
- purpose,
- status,
- questions that must be answered first.

## Default tool guidance

- LikeC4: shared architecture model and C4-oriented structural, dynamic, and deployment views.
- D2: data-flow, state-machine, ERD, custom diagrams, themes, and animated SVG.

## Output

1. A coverage matrix using these statuses:
   - not-applicable
   - deferred
   - missing
   - planned
   - draft
   - reviewed
   - approved
2. A prioritized list of proposed views.
3. A short rationale for each proposed view.
4. Assumptions and unresolved questions.
5. A request for the user to approve or revise the plan.

Do not proceed to diagram creation until the user approves the plan.
