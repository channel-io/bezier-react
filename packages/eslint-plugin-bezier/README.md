# `@channel.io/eslint-plugin-bezier`

Opt-in ESLint rules derived from the installed
`@channel.io/bezier-react/manifest.json` public contract.

```sh
yarn add --dev --exact @channel.io/eslint-plugin-bezier@next
```

The package exports rules only. It does not export a recommended preset or
choose severity for consumers.

```js
module.exports = {
  plugins: ['@channel.io/bezier'],
  rules: {
    '@channel.io/bezier/no-private-entrypoint': 'error',
    '@channel.io/bezier/no-orphan-compound-child': 'error',
    '@channel.io/bezier/no-unsafe-prop-type-escape': 'error',
    '@channel.io/bezier/no-internal-descendant-selector': 'error',
    '@channel.io/bezier/review-unresolved-compound-owner': 'warn',
    '@channel.io/bezier/prefer-layout-component': 'warn',
  },
}
```

Flat config can register the same plugin object explicitly. Product-specific
aliases, activation, severity, and CI warning policy remain consumer-owned.

## Rules

- `no-legacy-root-import`, `no-private-entrypoint`: public entrypoint boundary
- `no-orphan-compound-child`: manifest-declared compound ownership
- `review-unresolved-compound-owner`: advisory for dynamic wrapper ancestry
- `no-unsafe-prop-type-escape`, `no-public-style-prop-bypass`: preserve public prop contracts
- `no-native-control-bypass`: native control review
- `prefer-layout-component`, `prefer-text-for-plain-text`: conservative migration candidates
- `no-icon-wrapper-in-owner-slot`, `no-inline-svg`, `no-icon-like-glyph`, `no-manual-icon-styled-template`: installed icon ownership
- `no-internal-descendant-selector`: private descendant ownership in styled Bezier components
- `require-suppression-reason`: narrow, reasoned exceptions

Product aliases, raw color and typography policy, activation, severity, and CI
warning policy remain consumer-owned.

Cross-file TypeScript wrapper-origin tracing uses the consumer's installed
`@typescript-eslint/parser`. When it is unavailable, unresolved wrappers stay
advisory instead of being guessed as blocking errors.

## Static wrapper coverage

`no-native-control-bypass` also reviews native controls constructed with
`styled-components` template literals: `styled.button`, `styled('button')`,
static `.attrs({ type: 'checkbox' })`, and lexical local aliases of the imported
`styled` binding. A shadowed identifier named `styled` is not treated as the
library. Styling a beta `Button` is allowed. Dynamic tags, computed members,
function-valued attrs, and styles constructed without a template literal are
outside this check; no diagnostic does not establish that they use Bezier.

`no-legacy-root-import` additionally reports a rendered imported wrapper when a
static dependency reaches a legacy root component. The warning identifies the
used local component and origin (for example,
`@channel.io/bezier-react:Checkbox`). It follows named/default imports,
namespace members and local aliases, barrel re-exports, function components,
React `memo`/`forwardRef`/`createElement`, and styled templates. It analyzes only
the requested export and reachable render dependencies; an unrelated legacy
export in the same package does not produce a warning. Cyclic export graphs
terminate without assuming unresolved paths are safe.

Package lookup starts from the consumer file using Node resolution. For a root
package import, an owning package's `src/index` is preferred when present (the
workspace source must correspond to its installed build); otherwise the resolved
source entry is parsed. Relative source files are followed directly, including
`.js` import paths that refer to TypeScript source. There is no node_modules
inventory scan. Parsing is cached only for the current file analysis.

This is source-based evidence, not runtime or type-checker analysis. CommonJS
`require`/`module.exports` graphs, tsconfig path aliases, dynamic imports,
arbitrary higher-order functions, computed property access, class render
methods, and packages containing only unreadable/minified build artifacts can
remain unresolved. A missing optional parser or failed source resolution also
leaves the wrapper unresolved. The legacy rule emits no wrapper diagnostic for
those paths; it does **not** certify their migration or safety. Consumers that
need complete coverage must review those dependencies separately.
