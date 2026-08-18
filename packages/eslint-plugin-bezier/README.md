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
