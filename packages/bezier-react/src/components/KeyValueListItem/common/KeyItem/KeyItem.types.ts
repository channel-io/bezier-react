/* External dependencies */
import React from 'react'

/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import type { BezierIcon, IconName } from 'Components/Icon'

interface KeyItemOptions {
  keyIcon?: IconName | BezierIcon | React.ReactNode
}

export interface KeyItemProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  KeyItemOptions {}
