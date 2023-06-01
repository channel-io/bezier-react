import type React from 'react'

import {
  type BezierIcon,
  type IconName,
} from '@channel.io/bezier-icons'

import type {
  AdditionalStylableProps,
  BezierComponentProps,
  ChildrenProps,
} from '~/src/types/ComponentProps'

import { type KeyValueListItemActionProps } from './common'

interface KeyValueListItemOptions {
  keyIcon?: IconName | BezierIcon | React.ReactNode
  keyContent?: React.ReactNode
  actions?: KeyValueListItemActionProps | KeyValueListItemActionProps[]
}

export interface KeyValueListItemProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  AdditionalStylableProps<['valueWrapper', 'keyWrapper']>,
  KeyValueListItemOptions {
  onClickKey?: (e: React.MouseEvent<HTMLDivElement>) => void
  onClickValue?: (e: React.MouseEvent<HTMLDivElement>) => void
}
