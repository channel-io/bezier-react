/* External dependencies */
import React from 'react'
import type { IconName } from '@channel.io/bezier-react-icons'

/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps, AdditionalColorProps } from 'Types/ComponentProps'

export type KeyValueListItemActionProps = {
  icon: IconName
  tooltip?: string
  show?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
} & AdditionalColorProps<['icon', 'hoverBackground', 'hoverIcon']> | React.ReactElement

interface ItemActionOptions {
  actions?: KeyValueListItemActionProps | KeyValueListItemActionProps[]
}

export interface ItemActionProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  ItemActionOptions {}
