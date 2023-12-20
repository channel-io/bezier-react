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

**`v2-foundation-to-css-variable`**

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

  overflow: hidden;
  border-radius: var(--radius-12);

  border-color: var(--bdr-black-light);
  border-style: none none solid none;
  border-width: 0.5px;

  background-color: var(--bg-white-low);
  box-shadow: var(--ev-1);

  transition: color var(--transition-s);
`;
```

### Interpolation to CSS Variable

**`v2-input-interpolation-to-css-variable`**

Replace input interpolation to css variable
For example:

```tsx
import {
  styled,
  inputWrapperStyle,
  focusedInputWrapperStyle,
  erroredInputWrapperStyle,
} from "@channel.io/bezier-react";

const Wrapper = styled.div`
  ${inputWrapperStyle};

  ${({ focus }) => focus && focusedInputWrapperStyle};
`;
```

Transforms into:

```tsx
import { styled } from "@channel.io/bezier-react";

const Wrapper = styled.div`
  box-shadow: var(--input-box-shadow);

  ${({ focus }) =>
    focus &&
    css`
      box-shadow: var(--input-box-shadow-focused);
    `};
`;
```

**`v2-typography-interpolation-to-css-variable`**

Replace typography interpolation to css variable
For example:

```tsx
import { styled, Typography } from "@channel.io/bezier-react";

const Wrapper = styled.div`
  ${Typography.Size11};
`;
```

Transforms into:

```tsx
import { styled } from "@channel.io/bezier-react";

const Wrapper = styled.div`
  /* NOTE: Do not use font-related css variables below separately, use Text component instead */
  font-size: var(--typography-size-11-font-size);
  line-height: var(--typography-size-11-line-height);
`;
```

**`v2-z-index-interpolation-to-css-variable`**

Replace z-index interpolation to css variable
For example:

```tsx
import { ZIndex, styled } from "@channel.io/bezier-react";

const OVERLAY_POSITION = {
  zIndex: ZIndex.Modal,
};

const Wrapper = styled.div`
  z-index: ${ZIndex.Hide};
`;
```

Transforms into:

```tsx
import { styled } from "@channel.io/bezier-react";

const OVERLAY_POSITION = {
  zIndex: "var(--z-index-modal)",
};

const Wrapper = styled.div`
  z-index: var(--z-index-hidden);
`;
```

### Styled from @channel.io/bezier-react to styled-components

**`v2-styled-to-styled-components`**

Switch library to import `styled` object from `@channel.io/bezier-react` to `styled-components`
For example:

```tsx
import { styled, Button } from "@channel.io/bezier-react";

export const Wrapper = styled(Button)``;
```

Transforms into:

```tsx
import styled from "styled-components";
import { Button } from "@channel.io/bezier-react";

export const Wrapper = styled(Button)``;
```

### Remove Alpha prefix from `AlphaStack` and add Legacy prefix to `Stack`

`v2-remove-alpha-from-alpha-stack`

Deprecates current `Stack`, `HStack`, `VStack`, `StackItem`, `Spacer` components and supports `AlphaStack` instead, removing "Alpha" prefix.

For example:

```tsx
import { VStack, StackItem, AlphaStack } from "@channel.io/bezier-react";

function Foo() {
  return (
    <VStack>
      <StackItem>
        <div />
      </StackItem>
      <StackItem>
        <div />
      </StackItem>
    </VStack>
  );
}

function Bar() {
  return (
    <AlphaStack direction="horizontal">
      <div />
      <div />
    </AlphaStack>
  );
}
```

Transforms into:

```tsx
import { LegacyVStack, LegacyStackItem, Stack } from "@channel.io/bezier-react";

function Foo() {
  return (
    <LegacyVStack>
      <LegacyStackItem>
        <div />
      </LegacyStackItem>
      <LegacyStackItem>
        <div />
      </LegacyStackItem>
    </LegacyVStack>
  );
}

function Bar() {
  return (
    <Stack direction="horizontal">
      <div />
      <div />
    </Stack>
  );
}
```

### Change interface of `Text`

`v2-text-component-interface`

Replace `Typography` enum with string literal and change properties related to margin to be shorthand. **Notice that this transforms all `Typography` enum in styled component, so `v2-typography-interpolation-to-css-variable` should be applied first.**

For example:

```tsx
import { Text, styled, Typography } from "@channel.io/bezier-react";

function Foo() {
  return (
    <Text typo={Typography.Size13} marginLeft={4}>
      title
    </Text>
  );
}

const Title = styled(Text).attrs({
  typo: Typography.Size13,
  marginLeft: 4,
})``;
```

Transforms into:

```tsx
import { Text, styled } from "@channel.io/bezier-react";

function Foo() {
  return (
    <Text typo="13" ml={4}>
      title
    </Text>
  );
}

const Title = styled(Text).attrs({
  typo: "13",
  ml: 4,
})``;
```
