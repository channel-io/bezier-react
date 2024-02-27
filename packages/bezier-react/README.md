# Bezier React

Bezier React is a React components library that implements Bezier design system.

## Installation

### npm

```bash
npm i @channel.io/bezier-react
```

### yarn

```bash
yarn add @channel.io/bezier-react
```

### pnpm

```bash
pnpm install @channel.io/bezier-react
```

## Usage

### 1. CSS import

In order to use bezier-react's styles, you need to import CSS. If you're using the module bundler, you can import CSS directly from within your JavaScript file.

```tsx
import "@channel.io/bezier-react/styles.css"
```

Or if you're not using the module bundler, you can add the CSS directly to your HTML. We recommend referring to your styles file and copy-pasting it. As bezier-react updates, your styles should update with it.

```html
<link rel="stylesheet" href="styles.css" />
```

### 2. Wrap `AppProvider`

Wrap `AppProvider` at the root of your application. If necessary, you can change the theme by specifying the `themeName` property.

```tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider, Text } from '@channel.io/bezier-react'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <AppProvider themeName="dark">
    <Text as="h1">Hello World</Text>
  </AppProvider>,
)
```

### 3. Font import

Import font from CDN of Channel Corp. Or you can import it from [Google Fonts](https://fonts.google.com/specimen/Inter).

```html
<link rel="preconnect" href="https://cf.channel.io" />
<link rel="stylesheet" href="https://cf.channel.io/asset/font/Inter/inter.css" />
```

## Contributing

See [contribution guide](https://github.com/channel-io/bezier-react/wiki/Contribute).

## Maintainers

This package is mainly contributed by Channel Corp. Although feel free to contribution, or raise concerns!
