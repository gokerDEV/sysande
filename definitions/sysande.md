# sysande Definition

sysande is a small, open-source definition repository for AI-assisted system analysis and design.

It is designed to help a human and an AI assistant plan, discuss, review, and document a system using established architecture and diagramming tools.

sysande is intentionally lightweight. It does not define a new modeling standard, diagramming language, renderer, editor, or AI service.

## Purpose

sysande provides a repeatable process for:

- discovering the system through iterative questions,
- separating confirmed facts from assumptions,
- planning useful architectural coverage,
- designing one view at a time,
- choosing an appropriate existing notation and tool,
- reviewing each view with the user,
- checking consistency across all views,
- publishing source DSL files together with generated documentation.

## Core idea

System documentation is organized using two primary dimensions:

1. **Abstraction level** — how closely the system is being examined.
2. **Concern** — which aspect of the system is being examined.

A third property identifies the notation used for the selected view.

Example:

```text
level: container
concern: behavior
notation: state-machine
```

The abstraction level and concern identify the place of the view in the coverage matrix. The notation identifies how the view is expressed.

## Abstraction levels

sysande uses the familiar C4-style progression:

- **Context** — the system, its users, and external systems.
- **Container** — runnable or deployable applications and data stores.
- **Component** — major responsibilities inside a selected container.
- **Code** — implementation-level structures such as classes, packages, modules, and schemas.

These levels are used as a practical planning structure. sysande does not claim formal conformance with the C4 model.

## Concerns

sysande uses five broad concerns:

- **Structure** — what exists and how elements are related.
- **Data** — what information exists and how it is organized.
- **Flow** — how information or work moves through the system.
- **Behavior** — how the system reacts over time, exchanges messages, or changes state.
- **Deployment** — where software runs and how runtime nodes are connected.

## Coverage

The coverage matrix combines abstraction levels and concerns. It is used to decide which views are useful, missing, deferred, or unnecessary.

Coverage is not a compliance checklist. A good system design may require only a small subset of the matrix.

## Preferred tools

sysande recommends existing tools rather than replacing them.

- **LikeC4** is preferred for shared architecture models and C4-oriented structural, dynamic, and deployment views.
- **D2** is preferred for data-flow, state-machine, ERD, custom diagrams, reusable themes, and animated SVG output.

Existing valid project tooling always takes precedence over these defaults.

## Source of truth

Editable source DSL files are the source of truth.

Generated outputs such as SVG, animated SVG, PNG, or PDF are documentation artifacts. They must remain traceable to their source files.

## Interaction model

The AI assistant should:

1. ask focused questions iteratively,
2. summarize the system before diagramming,
3. propose a coverage plan,
4. wait for user approval,
5. design one view at a time,
6. review each view with the user,
7. preserve identifiers and terminology,
8. run a final cross-view consistency review.

## Design principles

- Prefer the smallest useful set of views.
- Do not generate diagrams merely to fill the matrix.
- Do not invent requirements to complete a template.
- Do not mix abstraction levels without a clear reason.
- Do not translate a valid existing model without a concrete benefit.
- Keep facts, assumptions, decisions, and open questions separate.
- Keep animation meaningful and optional.
- Make every diagram understandable without animation.
- Favor open, inspectable, and editable files.

## Non-goals

sysande is not:

- a new architecture notation,
- a replacement for C4, UML, BPMN, ERD, LikeC4, D2, or Structurizr,
- a diagram renderer,
- a visual editor,
- a hosted collaboration platform,
- a certification framework,
- an automated architecture authority.

## Repository role

The public repository acts as:

- a human-readable guide,
- an AI-readable definition,
- a reusable prompt collection,
- a coverage template library,
- a source of open diagram themes,
- a set of worked examples.
