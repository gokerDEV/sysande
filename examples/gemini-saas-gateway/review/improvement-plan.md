# Improvement Plan

This test should be used as a regression case for improving sysande's public instructions.

## Objective

When an AI receives only the sysande URL and a short product idea, its first response should begin discovery rather than generate architecture, code, files, or archives.

## Required documentation changes

### 1. Add mandatory first-response behavior

Place this near the beginning of `llms.txt`, `llms-full.txt`, `definitions/workflow.md`, and `prompts/00-init.md`:

```text
MANDATORY STARTING BEHAVIOR

When a user asks to design a system with sysande:

1. Do not generate diagrams.
2. Do not generate implementation code.
3. Do not create files or archives.
4. Do not choose a technology stack.
5. Ask only the first focused discovery question group.
6. Wait for the user's answer.

Skipping these gates is not a valid sysande workflow.
```

### 2. Define phase gates

Recommended phases:

```text
init
→ discovery-review
→ coverage-review
→ view-design
→ view-review
→ consistency-review
→ implementation-optional
```

Each response should identify:

- current phase,
- next approval gate,
- artifacts currently allowed.

Example:

```text
sysande phase: init
next gate: discovery summary approval
artifacts allowed: none
```

### 3. Add implementation boundary

```text
sysande stops at reviewed design documentation by default.

Do not generate implementation code unless:
- the relevant design views are approved, and
- the user explicitly requests implementation.
```

### 4. Strengthen the LikeC4 rule

```text
For one LikeC4 project:
- define each element exactly once,
- keep shared model declarations reusable,
- create multiple views over the same identifiers,
- do not create independent context, container, and component models for the same system.
```

### 5. Strengthen coverage output

Every planned view should include:

```yaml
level:
concern:
notation:
tool:
purpose:
status:
source:
dependsOn:
questions:
```

`Defined` should not be accepted as a coverage status.

### 6. Add an invalid-response example

Document this as an anti-pattern:

```text
Invalid sysande response:
- assumes the product definition,
- generates all diagrams immediately,
- chooses a stack without discovery,
- writes implementation code,
- creates an archive,
- marks views complete before user review.
```

## Regression test

Use the same short prompt with multiple AI systems:

```text
Use https://gokerdev.github.io/sysande/ to help me design an auth + gateway based platform for selling proxy usage/time.
```

A passing first response must:

- acknowledge sysande,
- ask at most five focused discovery questions,
- clarify what is being sold and who connects the upstream service,
- produce no architecture proposal,
- produce no diagram source,
- produce no implementation code,
- wait for the user's answers.

## Follow-up work

After the documentation changes:

1. rerun the Gemini test,
2. preserve the new response beside this example,
3. compare old and new behavior,
4. repeat with ChatGPT and Claude,
5. update the instructions only when failures reveal a general ambiguity.
