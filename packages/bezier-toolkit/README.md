# `@channel.io/bezier-toolkit`

Repo-local CLI and library for reading Bezier manifests from packages installed in a consumer repository.

Install the Toolkit with the React, icon, and token packages whose manifests it
will inspect. Pin the resolved versions in the consumer lockfile.

```sh
yarn add --exact @channel.io/bezier-react@next @channel.io/bezier-icons@next @channel.io/bezier-tokens@next
yarn add --dev --exact @channel.io/bezier-toolkit@next
```

```sh
yarn bezier lookup Tabs
yarn bezier doctor
yarn bezier version
```

Every command emits deterministic JSON. `lookup` reads
`@channel.io/bezier-react/manifest.json`,
`@channel.io/bezier-icons/manifest.json`, and
`@channel.io/bezier-tokens/manifest.json` through Node package resolution rooted at
the consumer working directory.

The Toolkit does not read a Bezier source checkout, a bundled catalog, Pilot
fixtures, or a global Homebrew installation. Missing packages and unsupported
manifest schema majors are reported explicitly by `doctor`.
