# Bezier React

Bezier React is a React components library that implements Bezier design system.

## Installation

### npm

```bash
npm i @channel.io/bezier-react styled-components@5
npm i -D @types/styled-components@5
```

### yarn

```bash
yarn add @channel.io/bezier-react styled-components@5
yarn add -D @types/styled-components@5
```

### pnpm

```bash
pnpm install @channel.io/bezier-react styled-components@5
pnpm install -D @types/styled-components@5
```

**bezier-react has [styled-components](https://styled-components.com/) as peer dependency** so don't forget to install it.

## Usage

1. Wrap `BezierProvider` at the root of your application.
2. Pass the `foundation` value like `LightFoundation` or `DarkFoundation`.

```tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BezierProvider, LightFoundation, Text } from '@channel.io/bezier-react'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <BezierProvider foundation={LightFoundation}>
    <Text as="h1">Hello World</Text>
  </BezierProvider>,
)
```

## Contributing

See [contribution guide](../../CONTRIBUTING.md).

## Maintainers

This package is mainly contributed by Channel Corp. Although feel free to contribution, or raise concerns!
