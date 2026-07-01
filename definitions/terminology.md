# sysande Terminology

This glossary defines the terms used by sysande. Project-specific terms should be added separately and must not redefine these concepts silently.

## Core terms

### Abstraction level

The degree of detail at which the system is examined.

sysande uses:

- `context`
- `container`
- `component`
- `code`

### Concern

The aspect of the system being examined.

sysande uses:

- `structure`
- `data`
- `flow`
- `behavior`
- `deployment`

### Notation

The visual or textual convention used to express a view, such as C4, sequence, state machine, data-flow, ERD, or deployment notation.

Notation is not the same as concern. For example, `behavior` is a concern, while `sequence` and `state-machine` are notations.

### Tool

The software or DSL used to author, validate, render, or publish a view. Examples include LikeC4 and D2.

### View

A purposeful representation of a selected part of the system from one abstraction level and one concern, expressed with a chosen notation and tool.

A view should have:

- a clear purpose,
- an abstraction level,
- a concern,
- a notation,
- a selected tool,
- a source file,
- a coverage status.

### Coverage

The planned and actual documentation of the system across abstraction levels and concerns.

Coverage describes what is useful, missing, deferred, reviewed, approved, or not applicable. It is not a compliance score.

### Coverage cell

One intersection in the coverage matrix, such as `container × behavior` or `code × data`.

A coverage cell may contain zero, one, or several views.

### Coverage plan

The reviewed list of views that should be created for the current system and project phase.

### Source DSL

The editable textual source used to define a model or diagram. It is the source of truth for generated visual outputs.

### Generated output

A rendered artifact such as SVG, animated SVG, PNG, or PDF. Generated output is documentation, not the source of truth.

## Abstraction terms

### Context

The system as a whole, its direct users or actors, and the external systems with which it interacts.

### Container

A runnable or deployable application, service, worker, user interface, or data store within a software system.

In this context, container does not necessarily mean a Docker or operating-system container.

### Component

A major logical responsibility or cohesive part inside a selected container. A component is not assumed to be independently deployable.

### Code

Implementation-level structures such as classes, interfaces, modules, packages, schemas, tables, and algorithms.

## Concern terms

### Structure

The elements that exist, their responsibilities, containment, and relationships.

### Data

The information the system stores, exchanges, transforms, owns, or governs, including entities, schemas, stores, and classifications.

### Flow

The movement of data, work, commands, events, or artifacts between elements.

### Behavior

The system's time-dependent operation, including interactions, event sequences, lifecycle states, transitions, retries, errors, and timeouts.

### Deployment

The runtime environment in which software operates, including nodes, zones, networks, clusters, environments, and mappings from logical elements to runtime locations.

## Model terms

### Actor

A person, role, organization, device, or external agent that interacts with the system.

### Stakeholder

A person, role, or organization affected by or responsible for the system, whether or not they interact with it directly.

### System boundary

The boundary that defines which responsibilities belong to the system and which remain external.

### Trust boundary

A boundary across which the security assumptions, ownership, control, or level of trust changes.

### External system

A software system, service, device, or organization outside the selected system boundary.

### Element

A named model item such as an actor, system, container, component, data store, state, or deployment node.

### Identifier

A stable machine-readable name used to reference an element across source files and views.

### Relationship

A directed or undirected connection between elements with an explicit meaning, such as uses, sends, reads, stores, triggers, or deploys to.

### Shared model

A reusable definition of architectural elements and relationships referenced by multiple views.

## Process terms

### Init

The first conversation phase in which the AI gathers enough information to understand the system and the design task.

### Discovery

The process of clarifying purpose, actors, boundaries, scope, external dependencies, constraints, quality priorities, and existing materials.

### Discovery summary

The user-reviewed description produced after discovery and before coverage planning.

### Review

The process of checking a view against confirmed facts, assumptions, decisions, notation semantics, and related views.

### Consistency review

A cross-view review that checks identity, terminology, containment, relationships, data, behavior, deployment, and coverage status.

### Confirmed fact

Information explicitly supplied or approved by the user or an authoritative project source.

### Assumption

A provisional statement used to continue design when information is incomplete. Assumptions must remain visible until confirmed or rejected.

### Open question

An unresolved issue that may require user input or further evidence.

### Decision

A design choice that has been explicitly accepted and recorded, ideally with its rationale and consequences.

## Coverage statuses

### `not-applicable`

The coverage cell does not provide useful information for the current system or project scope.

### `deferred`

The view may be useful later but is intentionally postponed.

### `missing`

A useful view has been identified but has not yet been planned or created.

### `planned`

The view has been selected for creation, but design has not started.

### `draft`

A source exists, but unresolved design or review issues remain.

### `reviewed`

The user has reviewed the view; final approval may still be pending.

### `approved`

The user has explicitly approved the view in its current form.

Approval is project-level acceptance, not certification against an external standard.

## Output terms

### Static SVG

An SVG diagram without time-dependent visual behavior.

### Animated SVG

An SVG diagram with meaningful animation used to explain flow, sequence, or state change.

### Theme

A reusable set of visual rules for shapes, typography, spacing, colors, boundaries, relationships, and animation.

A theme controls presentation, not architectural meaning.

### Semantic animation

Animation whose behavior is derived from the meaning of a view, such as data moving along a flow, messages appearing in order, or an active state transition being highlighted.

### Source of truth

The authoritative editable source used to maintain the design. In sysande, this should normally be the source DSL and the reviewed supporting records, not a generated image.
