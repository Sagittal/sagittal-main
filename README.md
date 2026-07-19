# sagittal-main

code for the Sagittal notation system

## development

When cloning, use:

```shell
git clone --recurse-submodules git@github.com:Sagittal/sagittal-main.git
cd sagittal-main
git submodule foreach git checkout main
```

in order to get all the submodules set up properly.

You will need to install Node on your system.

### submodules

The `/general` folder is for the `npm` package `@sagittal/general`, which contains general utilities for the Sagittal
notation system's related code (general math and music functions, helpers for Node and the browser, types, IO, etc.).

This is a dependency of the package `@sagittal/system`, which contains the logic of Sagittal itself: actual
implementations of Sagittal notations, accidental parsing, useful metrics, comma naming, and finding and analyzing
commas using Sagittal-specific properties.

Both of these packages are dependencies of the web app itself, which lives in `/app`, and a series of command-line
scripts that live in subdirectories of the `/scripts` folder.

The `/docs` directory is a GitBook, so that's a totally separate thing.

The remaining subdirectories (`/bravura`, `/scala`, `/wincompose`) simply contain data helpful to other applications.

#### finishing a change inside a submodule

This repo does not store a submodule's contents, only a note of which commit that folder should be at. Commit and push
inside the submodule and this repo says nothing about it — until you look at `git status` here and find:

```shell
 M app
```

which is not a stray edit. It means the `/app` folder has moved past the commit recorded for it. So the last step of any
change to a submodule is to record where it now is:

```shell
git -C app push          # from inside the submodule, as usual
git add app              # from here, in sagittal-main
git commit -m "Point at the app submodule's current commit"
git push
```

Skip it and the recorded commit goes stale, which is how `/app` came to point at `faf0ed23` — a commit that had been
amended away before it was ever pushed, so GitHub gave a 404 for it for years. Only record a commit you have pushed;
recording a local-only one is exactly how that happens.

When several people or agents are pushing to the same submodule at once, leave this until they have all landed —
otherwise the number is stale again by the next push.

### per scripts submodule

Run `npm i`. To see a list of available scripts, run `npm run`.

If you see a script you're interested in, learn its options with `npm run [script] -- --help`.

### additional helpful setup

Run Jasmine tests written in TypeScript with Webstorm by adding the following to `Node options`
in the Jasmine run configuration template: `-r ts-node/register/transpile-only`.

To set a new context for the run configuration, set a hotkey for `Run context configuration`.
To re-run the existing configuration, set a hotkey for `Run`.

Use the **DejaVu Sans Mono** font because it makes key characters such as "⟩" and subscript numbers actually monospace.
Then also set your fallback font to **Bravura**, so the unicode characters for Sagittal symbols such as "" will
display. You may need to uncheck "Only show monospaced fonts" to get Bravura to appear in the list.

You may need to run `npm config set script-shell "C:\Program Files\Git\bin\sh.exe"`; otherwise, characters like '⟩' may
not output properly.
