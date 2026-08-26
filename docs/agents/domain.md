# Domain Docs

How engineering skills consume this repository’s domain documentation.

## Before exploring

Read these when they exist:

- `CONTEXT.md` at the repository root.
- Relevant ADRs under `docs/adr/`.

If they do not exist, proceed silently. The domain-modeling skill creates them when terminology or architectural decisions need to be recorded.

## Layout

```text
/
├── CONTEXT.md
├── docs/adr/
└── src/
```

## Vocabulary

Use terminology defined in `CONTEXT.md`. If a required concept is missing, reconsider whether new terminology is necessary or record the gap for domain modeling.

## ADR conflicts

Explicitly identify proposals that contradict an existing ADR instead of silently overriding it.
