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
git -C app fetch origin
git -C app checkout --detach origin/main   # the commit that landed — see below
git add app
git commit -m "Point at the app submodule's current commit"
git push
```

**Only ever record a commit that is on the submodule's `origin/main`.** Recording one that exists only locally is how
`/app` came to point at `faf0ed23` for years — a commit amended away before it was ever pushed, so it existed nowhere
and GitHub 404'd it. That trap is now routine rather than rare: `app` lands through a merge queue that *rebases*, so
once your PR merges, the SHA your branch still holds is not the SHA that landed. Read it off `origin/main`, never off
your own HEAD.

Do that in your own worktree. The primary checkout's submodule folders are shared and often hold another agent's
uncommitted edits, and recording a pointer is never worth moving those aside for.

**Record it on every merge, even with other agents mid-flight.** The number goes stale again with the next merge —
but there is nearly always another PR open, so holding out for a quiet moment means never doing it at all, and a
pointer months behind is worse than one an hour behind. Bump it; the next agent bumps it again.

## Working alongside other agents

Several agents often work in this repo at once, each in its own worktree under `.claude/worktrees/`, and several may be
pushing to the *same* submodule. Before starting, check `git worktree list` and the submodule's `git log --oneline -5`
and `git status`; rebase onto what has already landed rather than assuming your copy is current.

A submodule's working tree frequently holds another agent's uncommitted edits. Never move those aside — no stash, no
checkout, no merging over them. Push your own branch and let the other agent land theirs.
