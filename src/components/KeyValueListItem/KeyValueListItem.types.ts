/* External dependencies */
import React from 'react'

/* Internal dependencies */
import type { SemanticNames } from 'Foundation'
import type { ChildrenComponentProps } from 'Types/ComponentProps'
import type { InjectedInterpolation } from 'Types/Foundation'
import type { IconName } from 'Components/Icon'

export type KeyValueActionProps = {
  icon: IconName
  iconColor?: SemanticNames
  hoverBackgroundColor?: SemanticNames
  hoverIconColor?: SemanticNames
  tooltip?: string
  show?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
} | React.ReactElement

export interface KeyValueListItemProps extends ChildrenComponentProps, React.HTMLAttributes<HTMLDivElement> {
  multiline?: boolean
  keyIcon?: IconName | React.ReactNode
  keyContent?: React.ReactNode
  actions?: KeyValueActionProps | KeyValueActionProps[]
  className?: string
  valueWrapperInterpolation?: InjectedInterpolation
  keyWrapperInterpolation?: InjectedInterpolation
}
