# Bezier Tokens

Bezier Tokens is a design tokens library that implements Bezier design system.

## Installation

```bash
npm i -D @channel.io/bezier-tokens
```

## Usage

### JavaScript

You can access and use values by token group.

```ts
import { tokens } from '@channel.io/bezier-tokens'

console.log(tokens.global.color['blue-300']) // "#..."
console.log(tokens.lightTheme.color['bg-black-dark']) // "#..."
```

### CSS

Provide all design tokens as CSS variables. If you want to apply dark theme tokens, add the `data-bezier-theme="dark"` attribute to the parent element. The default is light theme tokens, which can also be applied by adding the `data-bezier-theme="light"` attribute to the parent element.

```ts
import '@channel.io/bezier-tokens/css/styles.css'

div {
  background: var(--bg-black-dark);
}
```

## Contributing

See [contribution guide](https://github.com/channel-io/bezier-react/wiki/Contribute).

## Maintainers

This package is mainly contributed by Channel Corp. Although feel free to contribution, or raise concerns!
