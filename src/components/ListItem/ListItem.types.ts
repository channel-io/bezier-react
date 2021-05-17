/* Internal dependencies */
import React from 'react'
import { SemanticNames } from '../../foundation/Colors/Theme'
import ActivableElement from '../../types/ActivatableElement'
import { ContentComponentProps } from '../../types/ComponentProps'
import OptionItem from '../../types/OptionItem'
import { IconName } from '../Icon'

export enum ListItemSize {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

export default interface ListItemProps extends ContentComponentProps, ActivableElement, OptionItem {
  iconClassName?: string
  contentClassName?: string
  size?: ListItemSize
  name?: string
  href?: string
  hide?: boolean
  nested?: boolean
  leftContent?: React.ReactNode
  leftIcon?: IconName
  leftIconColor?: SemanticNames
  disableIconActive?: boolean
  descriptionMaxLines?: number
  content?: React.ReactNode
  description?: React.ReactNode
  rightContent?: React.ReactNode
  onClick?: (e: React.MouseEvent, name?: string) => void
  onMouseDown?: (e: React.MouseEvent) => void
  onMouseEnter?: (e: React.MouseEvent) => void
  onMouseLeave?: (e: React.MouseEvent) => void
}
