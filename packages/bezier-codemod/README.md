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

**`v2-enum-member-to-string-literal`**

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

  margin-bottom: ${({ foundation }) => foundation?.spacing.s6};

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

  margin-bottom: 16px;

  transition: color var(--transition-s);
`;
```

### Interpolation to CSS Variable

**`v2-interpolation-to-css-variable`**

Replace various interpolation such as `Typography`, `ZIndex`, `InputWrapperStyle`, `Rounding` to css variable
For example:

```tsx
import {
  styled,
  Typography,
  inputWrapperStyle,
  focusedInputWrapperStyle,
  erroredInputWrapperStyle,
  ZIndex,
  Rounding,
} from "@channel.io/bezier-react";

const Wrapper = styled.div`
  ${Typography.Size11};

  ${inputWrapperStyle};

  ${({ focus }) => focus && focusedInputWrapperStyle};

  ${erroredInputWrapperStyle};

  ${inputPlaceholderStyle};

  z-index: ${ZIndex.Hide};

  ${Rounding.round12};
`;
```

Transforms into:

```tsx
import { styled } from "@channel.io/bezier-react";

const Wrapper = styled.div`
  /* NOTE: Do not use font-related css variables below separately, use Text component instead */
  font-size: var(--typography-size-11-font-size);
  line-height: var(--typography-size-11-line-height);

  box-shadow: var(--input-box-shadow);

  ${({ focus }) =>
    focus &&
    css`
      box-shadow: var(--input-box-shadow-focused);
    `};

  box-shadow: var(--input-box-shadow-invalid);

  &::placeholder {
    color: var(--txt-black-dark);
  }

  z-index: var(--z-index-hidden);

  overflow: hidden;
  border-radius: var(--radius-12);
`;
```

It also handles when `ZIndex` is used in object.

```tsx
import { ZIndex } from "@channel.io/bezier-react";

export const OVERLAY_POSITION1 = {
  zIndex: ZIndex.Modal,
};
```

Transforms into:

```tsx
export const OVERLAY_POSITION1 = {
  zIndex: "var(--z-index-modal)",
};
```

### import directly from styled-components

**`v2-import-from-bezier-to-styled-components`**

Switch library to import `styled`, `css`, `StyleSheetManager`, `keyframes`, `createGlobalStyle`, `ServerStyleSheet` object from `@channel.io/bezier-react` to `styled-components`
For example:

```tsx
import { styled, Button, css } from "@channel.io/bezier-react";

export const Wrapper = styled(Button)`
  ${css`
    background: red;
  `}
`;
```

Transforms into:

```tsx
import styled, { css } from "styled-components";
import { Button } from "@channel.io/bezier-react";

export const Wrapper = styled(Button)`
  ${css`
    background: red;
  `}
`;
```

### Add `Legacy` prefix to components to be deprecated and remove `Alpha` prefix from experimental components

`v2-remove-alpha-from-alpha-components`

Components to be deprecated

- `Stack`
- `HStack`
- `VStack`
- `StackItem`
- `Spacer`

Experimental components

- `AlphaStack`
- `AlphaCenter`

For example:

```tsx
import {
  VStack,
  StackItem,
  AlphaStack,
  AlphaCenter,
} from "@channel.io/bezier-react";

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

function Baz() {
  return (
    <AlphaCenter>
      <div />
    </AlphaCenter>
  );
}
```

Transforms into:

```tsx
import {
  LegacyVStack,
  LegacyStackItem,
  Stack,
  Center,
} from "@channel.io/bezier-react";

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

function Baz() {
  return (
    <Center>
      <div />
    </Center>
  );
}
```

### Change interface of `Text`

`v2-text-component-interface`

Replace `Typography` enum with string literal and change `marginAll` property to short.

For example:

```tsx
import { Text, styled, Typography } from "@channel.io/bezier-react";

function Foo() {
  return (
    <Text typo={Typography.Size13} marginAll={4}>
      title
    </Text>
  );
}

const Title = styled(Text).attrs({
  typo: Typography.Size13,
  marginAll: 4,
})``;
```

Transforms into:

```tsx
import { Text, styled } from "@channel.io/bezier-react";

function Foo() {
  return (
    <Text typo="13" margin={4}>
      title
    </Text>
  );
}

const Title = styled(Text).attrs({
  typo: "13",
  margin: 4,
})``;
```
