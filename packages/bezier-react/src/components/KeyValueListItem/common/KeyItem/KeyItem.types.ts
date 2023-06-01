import type React from 'react'

import {
  type BezierIcon,
  type IconName,
} from '@channel.io/bezier-icons'

import type {
  BezierComponentProps,
  ChildrenProps,
} from '~/src/types/ComponentProps'

interface KeyItemOptions {
  keyIcon?: IconName | BezierIcon | React.ReactNode
}

export interface KeyItemProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  KeyItemOptions {}
