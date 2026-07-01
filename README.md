# sysande

**System analysis and design with humans and AI.**

sysande is a small, open-source definition repository for AI-assisted system analysis, architecture design, and documentation. It does not introduce a new modeling language, renderer, or standard. Instead, it guides people and AI through an iterative, coverage-driven workflow using established tools such as [LikeC4](https://likec4.dev/) and [D2](https://d2lang.com/).

## What sysande provides

- a coverage matrix for planning system-design views,
- an iterative question-and-answer workflow,
- reusable prompts for AI-assisted design,
- recommendations for selecting existing DSLs and tools,
- an open D2 theme for consistent static and animated diagrams.

## What sysande is not

- a new architecture DSL,
- a diagram renderer,
- a modeling standard,
- an AI service,
- a replacement for C4, LikeC4, D2, UML, BPMN, or ERD tools.

## Start here

When working with an AI assistant, use this prompt:

```text
Use sysande to help me design this system.
Read llms.txt, definitions/workflow.md, and definitions/coverage.md.
Start with the init questions. Do not generate diagrams before the initial coverage plan is reviewed.
```

Then follow the workflow:

1. Discover the system through iterative questions.
2. Summarize scope, actors, constraints, assumptions, and open questions.
3. Create and review the coverage plan.
4. Design one view at a time.
5. Use established tools and DSLs.
6. Review cross-view consistency.
7. Publish source DSL files and generated diagrams together.

## Coverage model

| Abstraction level | Structure | Data | Flow | Behavior | Deployment |
|---|---|---|---|---|---|
| Context | C4 Context | — | Context Flow | — | — |
| Container | C4 Container | Logical Data | Data Flow | Sequence / State | Deployment |
| Component | C4 Component | Domain Model | Activity / Data Flow | Sequence / State | Runtime Mapping |
| Code | Class / Package | ERD | Algorithm Flow | State / Sequence | — |

Not every cell must be completed. sysande helps identify which views materially improve understanding and implementation.

## Preferred tools

- **LikeC4** for shared architectural models and C4-oriented structural views.
- **D2** for data-flow, state-machine, custom diagrams, themes, and animated SVG.

## Repository structure

- `definitions/` — workflow and coverage definitions
- `prompts/` — reusable AI prompts
- `templates/` — project documentation templates
- `themes/` — open diagram themes
- `examples/` — example system-design projects
- `llms.txt` — compact AI entry point

## License

MIT
