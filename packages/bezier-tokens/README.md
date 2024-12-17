# Bezier Tokens

Bezier Tokens is a design tokens library that implements Bezier design system.

## Installation

```bash
npm i -D @channel.io/bezier-tokens
```

## Usage

### CSS

Provide all design tokens as CSS variables. If you want to apply dark theme tokens, add the `data-bezier-theme="dark"` attribute to the parent element. The default is light theme tokens, which can also be applied by adding the `data-bezier-theme="light"` attribute to the parent element.

```ts
import '@channel.io/bezier-tokens/css/styles.css'
```

```html
<div data-bezier-theme="light">
  <div class="foo" />
  <div data-bezier-theme="dark">
    <div class="foo" />
  </div>
</div>
```

```css
.foo {
  background-color: var(--bg-black-dark);
}
```

### SCSS

While CSS variables are recommended, you can also use SCSS variables directly if you need to.

```scss
@use "sass:map";
@use "pkg:@channel.io/bezier-tokens" as *;

div {
  border-radius: map.get($tokens, "global", "radius", "4"); // ...px
  background-color: map.get($tokens, "light-theme", "bg", "black", "dark"); // #...
}
```

### JavaScript

You can access and use values by token group.

```ts
import { tokens } from '@channel.io/bezier-tokens'

console.log(tokens.global.color['blue-300']) // "#..."
console.log(tokens.lightTheme.color['bg-black-dark']) // "#..."
```

## Contributing

See [contribution guide](https://github.com/channel-io/bezier-react/wiki/Contribute).

## Maintainers

This package is mainly contributed by Channel Corp. Although feel free to contribution, or raise concerns!
