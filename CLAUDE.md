# sagittal-main — instructions for agents

This repo is a monorepo of git submodules: `/app`, `/general`, `/system`, `/docs`, and each of the `/scripts/*`
projects is its own repository. `/bravura`, `/scala` and `/wincompose` are plain data folders.

## Finishing a change inside a submodule

**Record the submodule's new commit here as the last step of the change.** This repo stores only a note of which
commit each submodule folder should be at, so committing and pushing inside the submodule leaves this repo pointing at
the old one. `git status` then shows

```
 M app
```

which reads like a stray edit but means the folder has moved past what is recorded for it. Finish with:

```shell
git -C app push          # push the submodule first
git add app              # then record it here
git commit -m "Point at the app submodule's current commit"
git push
```

**Only ever record a commit you have already pushed.** Recording a local-only commit is how `/app` came to point at
`faf0ed23` for years — a commit amended away before it was ever pushed, so it existed nowhere and GitHub 404'd it.

**When several agents are pushing to the same submodule at once, leave this until they have all landed.** The number
goes stale again with the next push, so bumping it mid-flight just produces churn — and a bump that lands while
another agent is mid-push can record a commit that is about to be rewritten.

## Working alongside other agents

Several agents often work in this repo at once, each in its own worktree under `.claude/worktrees/`, and several may be
pushing to the *same* submodule. Before starting, check `git worktree list` and the submodule's `git log --oneline -5`
and `git status`; rebase onto what has already landed rather than assuming your copy is current.

A submodule's working tree frequently holds another agent's uncommitted edits. Never move those aside — no stash, no
checkout, no merging over them. Push your own branch and let the other agent land theirs.
