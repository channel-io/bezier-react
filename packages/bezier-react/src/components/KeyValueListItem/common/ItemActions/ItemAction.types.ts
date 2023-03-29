/* External dependencies */
import type React from 'react'

/* Internal dependencies */
import type {
  BezierComponentProps,
  ChildrenProps,
  AdditionalColorProps,
} from '~/src/types/ComponentProps'
import type {
  BezierIcon,
  IconName,
} from '~/src/components/Icon'

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
