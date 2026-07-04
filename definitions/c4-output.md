# C4 Output Guidance

sysande supports C4-level system design documentation across context, container, component, and code levels.

The code level is a design/documentation level. It does not mean implementation source code generation.

## Default C4 output

For C4 structural views, prefer a copy-paste friendly Structurizr DSL workspace unless the user asks for another C4-compatible tool.

The default C4 output should be usable in:

- Structurizr Playground: https://playground.structurizr.com/
- Structurizr tooling and DSL workflows

## Alternative C4 output

LikeC4 is also supported when the project benefits from:

- a repo-friendly shared architecture model,
- local editor preview,
- developer-oriented architecture modeling,
- existing LikeC4 project structure,
- richer local documentation workflows.

Use the wording **C4 / Structurizr / LikeC4** when describing structural architecture options.

## Rules for Structurizr DSL

When Structurizr DSL is selected:

- generate a complete `workspace` block,
- include `model` and `views` sections,
- use stable identifiers,
- include at least one relevant view,
- add `autolayout` where useful,
- avoid implementation source code,
- ensure the result can be copied into Structurizr Playground for preview.

## Rules for LikeC4

When LikeC4 is selected:

- reuse stable element identifiers,
- avoid redefining the same conceptual element in separate files,
- keep shared model semantics consistent across views,
- use LikeC4 only when it offers a concrete benefit over a simple Playground-compatible Structurizr DSL output.

## Tool selection summary

- Use **Structurizr DSL** for rapid C4 start and Playground preview.
- Use **LikeC4** for repo-native shared model workflows.
- Use **D2** for data-flow, state-machine, sequence-style behavior, ERD, custom diagrams, themes, and animated SVG.
