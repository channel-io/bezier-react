# Bezier Codemod

Codemod transformations to help upgrade app using Bezier design system.

## Usage

In your terminal, navigate into your project's folder, then run:

```bash
npx @channel.io/bezier-codemod
```

## Transformations

### Icons to Bezier icons

**`icons-to-bezier-icons`**

Update the import syntax for the icon source moved from `@channel.io/bezier-react` to `@channel.io/bezier-icons`.

For example:

```tsx
import React from "react";
import {
  AllIcon,
  Button,
  CheckIcon as CheckIconSource,
  Icon,
  type IconName,
  IconSize,
} from "@channel.io/bezier-react";

import Foo from "./foo";
```

Transforms into:

```tsx
import React from "react";
import {
  AllIcon,
  CheckIcon as CheckIconSource,
  type IconName,
} from "@channel.io/bezier-icons";
import { Button, Icon, IconSize } from "@channel.io/bezier-react";

import Foo from "./foo";
```

### Enum Member to String Literal

**`enum-member-to-string-literal`**

Replace deprecated enum usage to string literal.

For example:

```tsx
import {
  ProgressBar,
  ProgressBarSize,
  ProgressBarVariant,
} from "@channel.io/bezier-react";

export default () => (
  <ProgressBar
    width="100%"
    size={ProgressBarSize.M}
    variant={ProgressBarVariant.GreenAlt}
    value={uploadProgressPercentage / 100}
  />
);
```

Transforms into:

```tsx
import { ProgressBar } from "@channel.io/bezier-react";

export default () => (
  <ProgressBar
    width="100%"
    size="m"
    variant="green-alt"
    value={uploadProgressPercentage / 100}
  />
);
```

### Foundation to CSS Variable

**`foundation-to-css-variable`**

Replace foundation to css variable
You can also use individual transform function such as `foundation-to-css-theme`, `foundation-to-css-rounding`, and so on.

For example:

```tsx
import { styled } from "@channel.io/bezier-react";

const Wrapper = styled.div`
  color: ${({ foundation }) => foundation?.theme?.["txt-black-dark"]};
  ${({ foundation }) => foundation?.rounding.round12};
  ${({ foundation }) =>
    foundation?.border?.getBorder(0.5, foundation.theme["bdr-black-light"], {
      top: false,
      right: false,
      left: false,
    })};
  ${({ foundation }) => foundation?.elevation?.ev1()};
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS("color")};
`;
```

Transforms into:

```tsx
import { styled } from "@channel.io/bezier-react";

const Wrapper = styled.div`
  color: var(--txt-black-dark);
  border-radius: var(--radius-12);
  border-bottom: 0.5px solid var(--bdr-black-light);
  background-color: var(--bg-white-low);
  box-shadow: var(--ev-1);
  transition: color var(--transition-s);
`;
```
