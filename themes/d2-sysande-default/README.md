# sysande Default D2 Theme

This open theme provides a restrained visual baseline for system-design diagrams generated with D2.

## Principles

- readable without animation,
- low visual noise,
- consistent element categories,
- strong system and trust boundaries,
- restrained use of color,
- printable on light backgrounds,
- animation reserved for meaningful flow or state changes.

## Usage

Import the theme before defining the diagram:

```d2
...@theme.d2

user: User {
  class: actor
}

api: Secure API {
  class: service
}

user -> api: Request {
  class: data-flow
}
```

Depending on the D2 version and project layout, import syntax or supported style properties may differ. Validate the source with the project's installed D2 version before publishing generated outputs.

## Semantic animation guidance

- Keep structural relationships static.
- Animate data-flow edges when movement is relevant.
- Reveal sequence messages in order.
- Highlight active state transitions.
- Keep ER diagrams static by default.
- Never require animation to understand the diagram.

## License

MIT, as part of sysande.
