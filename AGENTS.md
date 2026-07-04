# sysande AI Guidelines

When a user asks you to "design a system via sysande" or work within this repository, follow these guidelines to ensure consistency and tool compatibility.

## 1. Initial Context
Always start by reading:
- `llms.txt` for the high-level sysande rules.
- `definitions/workflow.md` to understand the iterative Q&A process.
- `prompts/00-init.md` to begin the discovery phase.

## 2. Diagramming with D2
When generating `.d2` files (e.g., for behavior, data flow, or sequence diagrams):
- **Quote your labels:** To ensure compatibility with the official Terrastruct D2 VS Code extension, **always wrap labels and descriptions in double quotes** if they contain spaces or special characters (like `&`).
  - *Correct:* `Identity: "Identity & Session Service"`
  - *Incorrect:* `Identity: Identity & Session Service`
- **Sequence Diagrams:** Use `shape: sequence_diagram` at the top of the file, and ensure all actor definitions and messages use quoted labels.
- **Example:** See `examples/auth-saas-gateway/architecture/behavior/portal-login.d2` for a valid, extension-compatible D2 file.

## 3. Architecture Modeling with LikeC4
When generating `.c4` or `.likec4` files (e.g., for context, container, and component structure):
- **Syntax:** Follow standard LikeC4 syntax with clearly separated `specification`, `model`, and `views` blocks.
- **View Names:** Do not use reserved keywords (like `context` or `containers`) as the names of your views. Instead, use specific camelCase names.
  - *Correct:* `view platformContext of platform { ... }`
  - *Incorrect:* `view context of platform { ... }`
- **Example:** See `examples/auth-saas-gateway/architecture/model.c4` for a valid, extension-compatible LikeC4 model.

## 4. General Rules
- Do not generate diagrams until the coverage plan has been approved by the user.
- Keep the generated `.d2` and `.c4` files as the source of truth.
- Follow the abstraction levels defined in the sysande coverage matrix.
