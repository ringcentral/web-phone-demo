# Issue tracker: GitHub

Issues and specs for this repo live as GitHub issues. Use the `gh` CLI for all operations.

## Conventions

- **Create an issue**: `gh issue create --title "..." --body "..."`
- **Read an issue**: `gh issue view <number> --comments`, including its labels.
- **List issues**: `gh issue list --state open --json number,title,body,labels,comments`
- **Comment on an issue**: `gh issue comment <number> --body "..."`
- **Apply or remove labels**: `gh issue edit <number> --add-label "..."` or `--remove-label "..."`
- **Close an issue**: `gh issue close <number> --comment "..."`

Infer the repository from `git remote -v`; `gh` does this automatically inside the clone.

## Pull requests as a triage surface

**PRs as a request surface: no.**

GitHub shares one number space across issues and pull requests. Resolve an ambiguous `#42` with `gh pr view 42`, then fall back to `gh issue view 42`.

## Skill terminology

When a skill says “publish to the issue tracker,” create a GitHub issue.

When a skill says “fetch the relevant ticket,” run `gh issue view <number> --comments`.

## Wayfinding

A wayfinding map is one issue whose tickets are linked as GitHub sub-issues.

- Label maps `wayfinder:map`.
- Label child tickets `wayfinder:research`, `wayfinder:prototype`, `wayfinder:grilling`, or `wayfinder:task`.
- Represent blockers with GitHub’s native issue dependencies.
- Claim work with `gh issue edit <number> --add-assignee @me`.
- Resolve work by commenting with the result and closing the issue.
