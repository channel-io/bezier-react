# Stylelint Bezier

Stylelint configuration for Bezier design system.

## Installation

### npm

```bash
npm i -D @channel.io/stylelint-bezier
```

### yarn

```bash
yarn add -D @channel.io/stylelint-bezier
```

## Usage

Extend @channel.io/stylelint-bezier in your stylelint config.

```json
{
  "extends": ["@channel.io/stylelint-bezier"]
}
```

## Rules

### validate-token

Disallows use of tokens not in bezier-tokens. If you want to use css variable other than bezier design token, you can set a specific prefix and add it to ignorePrefix.

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

## Version Matchups

| @channel.io/stylelint-bezier | @channel.io/bezier-react |
| ---------------------------- | ------------------------ |
| 0.1.0                        | 2.2.4                    |
| 0.2.4                        | 2.3.3                    |
