# sysande

**System analysis and design with humans and AI.**

sysande is a small, open-source definition repository for AI-assisted system analysis, architecture design, and documentation. It does not introduce a new modeling language, renderer, implementation framework, or standard. Instead, it helps people and AI make a rapid start, plan the right coverage, and move toward a cleaner system design using established tools such as C4 / Structurizr / LikeC4 and D2.

## What sysande provides

- a coverage matrix for planning system-design views,
- an iterative question-and-answer workflow,
- reusable prompts for AI-assisted analysis and design,
- guidance for C4 / Structurizr / LikeC4 structural views,
- guidance for D2 flow, behavior, state, ERD, custom, and animated diagrams,
- templates for assumptions, decisions, review, and consistency documentation.

## What sysande is not

- an implementation framework,
- a source-code generator,
- a framework or technology-stack selector,
- a new architecture DSL,
- a diagram renderer,
- a modeling standard,
- an AI service,
- a replacement for C4, Structurizr, LikeC4, D2, UML, BPMN, or ERD tools.

## Start here

When working with an AI assistant, use this prompt:

```text
Use sysande to help me design this system.
Read llms.txt, definitions/workflow.md, definitions/coverage.md, definitions/scope.md, and definitions/c4-output.md.
Start with the init questions.
Do not generate diagrams before the initial coverage plan is reviewed.
Do not generate implementation source code, package manifests, build config, or framework scaffolds.
```

Then follow the workflow:

1. Discover the system through iterative questions.
2. Summarize scope, actors, constraints, assumptions, and open questions.
3. Create and review the coverage plan.
4. Design one view at a time.
5. Use established documentation and diagramming tools.
6. Review cross-view consistency.
7. Publish source DSL files and generated diagrams together.

## Coverage model

| Abstraction level | Structure | Data | Flow | Behavior | Deployment |
|---|---|---|---|---|---|
| Context | C4 Context | — | Context Flow | — | — |
| Container | C4 Container | Logical Data | Data Flow | Sequence / State | Deployment |
| Component | C4 Component | Domain Model | Activity / Data Flow | Sequence / State | Runtime Mapping |
| Code | Class / Package | ERD | Algorithm Flow | State / Sequence | — |

The code level is still a design-documentation level. It can include class, package, module, schema, or algorithm views, but sysande does not generate implementation source code.

Not every cell must be completed. sysande helps identify which views materially improve understanding, design communication, review, onboarding, and long-term documentation.

## Preferred tools

- **C4 / Structurizr** for rapid structural architecture views that can be pasted into [Structurizr Playground](https://playground.structurizr.com/).
- **C4 / LikeC4** for repo-native shared architecture models when that workflow is useful.
- **D2** for data-flow, state-machine, sequence-style behavior, ERD, custom diagrams, themes, and animated SVG.

## Local Setup & Previews

If you are new to C4, Structurizr, LikeC4, or D2, you can preview diagrams locally or in the browser.

### Structurizr Playground

For a rapid C4 start, copy a Structurizr DSL `workspace` into [Structurizr Playground](https://playground.structurizr.com/) and preview the generated context, container, component, or code-level views.

### Visual Studio Code Extensions

For local editing and previews:

- [LikeC4 (likec4.likec4-vscode)](https://marketplace.visualstudio.com/items?itemName=likec4.likec4-vscode)
- [D2 (Terrastruct.d2)](https://marketplace.visualstudio.com/items?itemName=Terrastruct.d2)

### Previewing LikeC4 (`.c4` / `.likec4`)

You can use the LikeC4 extension's built-in preview, or you can serve diagrams in your browser with live reload:

```bash
npx likec4 start
```

### Previewing D2 (`.d2`)

Use the Terrastruct D2 extension preview or the D2 CLI. The extension requires the D2 system binary to be installed.

## Repository structure

- `definitions/` — workflow, scope, coverage, and output definitions
- `prompts/` — reusable AI prompts
- `templates/` — project documentation templates
- `themes/` — open diagram themes
- `examples/` — example system-design projects
- `llms.txt` — compact AI entry point
- `AGENTS.md` — repository-specific AI guidance

## License

MIT
