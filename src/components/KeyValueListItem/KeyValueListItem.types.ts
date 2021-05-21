/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { SemanticNames } from '../../foundation'
import { ChildrenComponentProps } from '../../types/ComponentProps'
import InjectedInterpolation from '../../types/InjectedInterpolation'
import { IconName } from '../Icon'

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
  keyIcon?: IconName
  keyContent?: string
  actions?: KeyValueActionProps | KeyValueActionProps[]
  className?: string
  valueWrapperInterpolation?: InjectedInterpolation
  keyWrapperInterpolation?: InjectedInterpolation
}
