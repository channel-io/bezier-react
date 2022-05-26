/* External dependencies */
import React from 'react'

/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import type { IconName } from 'Components/Icon'

interface KeyItemOptions {
  keyIcon?: IconName | React.ReactNode
}

export interface KeyItemProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  KeyItemOptions {}
