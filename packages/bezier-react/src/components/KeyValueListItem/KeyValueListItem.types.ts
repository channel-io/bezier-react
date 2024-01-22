import type React from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  AlphaBezierComponentProps,
  ChildrenProps,
} from '~/src/types/ComponentProps'

export type ItemActionWithIcon = {
  icon: BezierIcon
  tooltip?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type KeyValueListItemAction = ItemActionWithIcon | React.ReactElement

interface KeyValueListItemOwnProps {
  keyIcon?: BezierIcon | React.ReactNode
  keyContent?: React.ReactNode
  actions?: KeyValueListItemAction | KeyValueListItemAction[]
  onClickKey?: React.MouseEventHandler<HTMLDivElement>
  onClickValue?: React.MouseEventHandler<HTMLDivElement>
}

export interface KeyValueListItemProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  KeyValueListItemOwnProps {}
