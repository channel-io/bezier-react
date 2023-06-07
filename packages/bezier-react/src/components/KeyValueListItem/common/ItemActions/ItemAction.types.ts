import type React from 'react'

import {
  type BezierIcon,
  type IconName,
} from '@channel.io/bezier-icons'

import type {
  AdditionalColorProps,
  BezierComponentProps,
  ChildrenProps,
} from '~/src/types/ComponentProps'

export type ItemActionWithIcon = {
  icon: IconName | BezierIcon
  tooltip?: string
  show?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
} & AdditionalColorProps<['icon', 'hoverBackground', 'hoverIcon']>

export type KeyValueListItemActionProps = ItemActionWithIcon | React.ReactElement

interface ItemActionOptions {
  actions?: KeyValueListItemActionProps | KeyValueListItemActionProps[]
}

export interface ItemActionProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  ItemActionOptions {}
