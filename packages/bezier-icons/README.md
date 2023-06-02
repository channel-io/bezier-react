# Bezier Icons

Bezier Icons is a icon library that implements Bezier design system.

## Installation

1. (Recommend) Install `@channel.io/bezier-react` if you haven’t already.
2. Install `@channel.io/bezier-icons` as a dependency.

### npm

```bash
npm i @channel.io/bezier-icons
```

### yarn

```bash
yarn add @channel.io/bezier-icons
```

## Usage

All icons are available as individual React components. We recommend using them with the `Icon` component from our `@channel.io/bezier-react` library.

```tsx
import { Icon } from '@channel.io/bezier-react'
import { AllIcon } from '@channel.io/bezier-icons'

function Component() {
  return (
    <div>
      <Icon source={AllIcon} />
    </div>
  );
}
```

You can also use them individually.

```tsx
import { AllIcon } from '@channel.io/bezier-icons'

function Component() {
  return (
    <div>
      <AllIcon />
    </div>
  );
}
```

If you need to validate the icon source component, use the utility function `isBezierIcon`.

```tsx
import { isBezierIcon, AllIcon } from '@channel.io/bezier-icons'

console.log(isBezierIcon(AllIcon)) // true
console.log(isBezierIcon(<svg />)) // false
```

## Contributing

See [contribution guide](../../CONTRIBUTING.md).

## Maintainers

This package is mainly contributed by Channel Corp. Although feel free to contribution, or raise concerns!
