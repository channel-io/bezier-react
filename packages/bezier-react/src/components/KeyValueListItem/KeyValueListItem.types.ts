/* External dependencies */
import React from 'react'
import type { IconName } from '@channel.io/bezier-react-icons'

/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps, AdditionalStylableProps, AdditionalColorProps } from 'Types/ComponentProps'

export type KeyValueActionProps = {
  icon: IconName
  tooltip?: string
  show?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
} & AdditionalColorProps<['icon', 'hoverBackground', 'hoverIcon']> | React.ReactElement

interface KeyValueListItemOptions {
  multiline?: boolean
  keyIcon?: IconName | React.ReactNode
  keyContent?: React.ReactNode
  actions?: KeyValueActionProps | KeyValueActionProps[]
}

export interface KeyValueListItemProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  AdditionalStylableProps<['valueWrapper', 'keyWrapper']>,
  KeyValueListItemOptions {}
