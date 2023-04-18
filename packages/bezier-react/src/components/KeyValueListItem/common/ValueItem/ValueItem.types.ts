import type React from 'react'

import type {
  BezierComponentProps,
  ChildrenProps,
} from '~/src/types/ComponentProps'

interface ValueItemOptions {
  multiline?: boolean
}

export interface ValueItemProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  ValueItemOptions {}

