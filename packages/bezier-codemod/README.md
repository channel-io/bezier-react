# Bezier Codemod

Codemod transformations to help upgrade your using Bezier design system.

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
import React from 'react'
import { AllIcon, Button, CheckIcon as CheckIconSource, Icon, type IconName, IconSize } from '@channel.io/bezier-react'

import Foo from './foo'
```

Transforms into:

```tsx
import React from 'react'
import { AllIcon, CheckIcon as CheckIconSource, type IconName } from '@channel.io/bezier-icons'
import { Button, Icon, IconSize } from '@channel.io/bezier-react'

import Foo from './foo'
```
