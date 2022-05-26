/* External dependencies */
import React from 'react'

/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'

interface ValueItemOptions {
  multiline?: boolean
}

export interface ValueItemProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  ValueItemOptions {}

