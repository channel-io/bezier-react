/* External dependencies */
import React from 'react'
import type { IconName } from '@channel.io/bezier-react-icons'

/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'

interface KeyItemOptions {
  keyIcon?: IconName | React.ReactNode
}

export interface KeyItemProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  KeyItemOptions {}
