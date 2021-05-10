/* External dependencies */
import React from 'react'
import { SemanticNames } from '../../foundation'
import InjectedInterpolation, { WithInterpolation } from '../../types/InjectedInterpolation'
import { IconName } from '../Icon'

/* Internal dependencies */

export type KeyValueActionProps = {
  icon: IconName
  iconColor?: SemanticNames
  hoverBackgroundColor?: SemanticNames
  hoverIconColor?: SemanticNames
  tooltip?: string
  show?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
} | React.ReactElement

export interface KeyValueListItemProps extends WithInterpolation {
  multiline?: boolean
  keyIcon?: IconName
  keyContent?: string
  actions?: KeyValueActionProps | KeyValueActionProps[]
  className?: string
  valueWrapperInterpolation?: InjectedInterpolation
  keyWrapperInterpolation?: InjectedInterpolation
  testId?: string
  children?: React.ReactNode
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void
}
