/* External dependencies */
import React from 'react'

/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps, AdditionalColorProps } from 'Types/ComponentProps'
import type { BezierIcon } from 'Components/Icon'

export type KeyValueListItemActionProps = {
  icon: BezierIcon
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
