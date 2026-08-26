# Stylelint Bezier

Stylelint configuration for Bezier design system.

## Installation

### npm

```bash
npm i -D @channel.io/stylelint-bezier postcss@^8.5.1 postcss-styled-syntax@^0.7.2 stylelint@^16.14.1
```

### yarn

```bash
yarn add -D @channel.io/stylelint-bezier postcss@^8.5.1 postcss-styled-syntax@^0.7.2 stylelint@^16.14.1
```

## Usage

Extend @channel.io/stylelint-bezier in your stylelint config.

```json
{
  "extends": ["@channel.io/stylelint-bezier"]
}
```

The package configures `postcss-styled-syntax` for TypeScript and TSX files.
`postcss@^8.5.1`, `postcss-styled-syntax@^0.7.2`, and
`stylelint@>=16.14.1` are required peer dependencies and must be installed by
the consuming project. Stylelint loads the custom syntax from the consumer
environment and shares the compatible PostCSS host.

## Rules

### validate-token

Disallows use of tokens not in the beta(v3) bezier-tokens set. It also reports beta tokens marked as deprecated in bezier-tokens metadata as warnings.

If you want to use css variable other than bezier design token, you can set a specific prefix and add it to ignorePrefix.

```tsx
{
  rule: {
    'bezier/validate-token': [
      true,
      {
        ignorePrefix: ['b-'],
        severity: 'warning',
      },
    ],
  }
}
```

Deprecated beta tokens should keep their token value but add `deprecated` or `$deprecated` metadata in the token JSON source.

```json
{
  "color": {
    "example": {
      "value": "#000000",
      "$deprecated": "Use color-text-neutral instead."
    }
  }
}
```

### Opt-in Bezier rules

The package registers the following rules without enabling them. Consumers own
activation and severity; extending this package continues to enable only
`bezier/validate-token`.

- `bezier/no-internal-selector`
- `bezier/no-component-style-override`
- `bezier/prefer-layout-component`
- `bezier/require-suppression-reason`

`no-component-style-override` reads the installed
`@channel.io/bezier-react/manifest.json` contract only when that rule is
enabled. Product aliases and product-specific exception policy are not part of
this package.

## Version Matchups

| @channel.io/stylelint-bezier | @channel.io/bezier-react |
| ---------------------------- | ------------------------ |
| 0.1.0                        | 2.2.4                    |
| 0.2.4                        | 2.3.3                    |
