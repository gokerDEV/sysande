# sysande AI Guidelines

When a user asks you to design a system via sysande or work within this repository, follow these guidelines to ensure consistency, tool compatibility, and useful system-design output.

sysande produces documentation and diagrams only. Do not generate implementation source code, package manifests, build configuration, framework scaffolds, or infrastructure code unless the user explicitly moves outside sysande scope.

## 1. Initial Context

Always start by reading:

- `llms.txt` for the high-level sysande rules.
- `definitions/workflow.md` to understand the iterative Q&A process.
- `definitions/scope.md` to understand what sysande does and does not produce.
- `definitions/c4-output.md` for C4 / Structurizr / LikeC4 output rules.
- `prompts/00-init.md` to begin the discovery phase.

## 2. C4 Modeling with Structurizr and LikeC4

When generating C4 structural views:

- Prefer Structurizr DSL when the user needs a rapid start or copy-paste preview in Structurizr Playground.
- Use a complete `workspace` with `model` and `views` sections for Structurizr DSL.
- Make Structurizr DSL copy-paste friendly for https://playground.structurizr.com/.
- Use LikeC4 when the project benefits from a repo-native shared model workflow or already uses LikeC4.
- Do not present LikeC4 as the only C4 option. Use the wording **C4 / Structurizr / LikeC4**.
- Keep stable identifiers across views.
- Do not create implementation code for the C4 code level. Code level means design documentation such as class, package, module, schema, or algorithm views.

## 3. Diagramming with D2

When generating `.d2` files for behavior, data flow, state machines, ERD, or custom diagrams:

- Quote labels and descriptions if they contain spaces or special characters.
- Use `shape: sequence_diagram` for sequence-style diagrams.
- Keep `.d2` files as source-of-truth documentation artifacts.
- Use D2 for non-C4 diagrams or when custom layout, themes, or animation provide value.

Example label style:

```d2
Identity: "Identity & Session Service"
```

## 4. General Rules

- Do not generate diagrams until the coverage plan has been approved by the user.
- Do not generate every possible diagram.
- Design one view at a time.
- Keep the generated `.dsl`, `.d2`, `.c4`, and `.likec4` files as source of truth.
- Follow the abstraction levels defined in the sysande coverage matrix.
- Keep assumptions, decisions, open questions, and confirmed facts separate.
