# `@channel.io/bezier-toolkit`

Repo-local CLI and library for reading Bezier manifests from packages installed in a consumer repository.

Install the Toolkit with `@channel.io/bezier-react` and
`@channel.io/bezier-icons`, whose manifests it will inspect. Pin the resolved
versions in the consumer lockfile. You do not need to install
`@channel.io/bezier-tokens` separately: the Toolkit reads the token package that
the installed `@channel.io/bezier-react` depends on.

```sh
yarn add --exact @channel.io/bezier-react@next @channel.io/bezier-icons@next
yarn add --dev --exact @channel.io/bezier-toolkit@next
```

```sh
yarn bezier lookup Tabs
yarn bezier doctor
yarn bezier version
```

Every command emits deterministic JSON. The Toolkit resolves
`@channel.io/bezier-react/manifest.json` and
`@channel.io/bezier-icons/manifest.json` from the consumer working directory.
It then resolves `@channel.io/bezier-tokens/manifest.json` through that resolved
`@channel.io/bezier-react` package, so the catalog uses the same token package as
React even when the dependency is nested or provided by Yarn Plug'n'Play.

The three validated manifests are merged into one in-memory catalog. Its cache
key includes package versions, source commits, schema versions, and resolved
manifest paths. `lookup` searches names, aliases, deprecations, replacements,
and component semantics; `doctor` reports environment, lockfile, manifest,
provenance, and compatibility diagnostics; `version` prints the resolved
Toolkit and Bezier package tuple.

The Toolkit does not read a Bezier source checkout, a bundled catalog, Pilot
fixtures, or a global Homebrew installation. Missing packages and unsupported
manifest schema majors are reported explicitly by `doctor`.
