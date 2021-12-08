/* External dependencies */
import React from 'react'

/* Internal dependencies */
import type { SemanticNames } from 'Foundation'
import type { BezierComponentProps, ChildrenProps, AdditionalStylableProps } from 'Types/ComponentProps'
import type { IconName } from 'Components/Icon'

export type KeyValueActionProps = {
  icon: IconName
  iconColor?: SemanticNames
  hoverBackgroundColor?: SemanticNames
  hoverIconColor?: SemanticNames
  tooltip?: string
  show?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
} | React.ReactElement

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
