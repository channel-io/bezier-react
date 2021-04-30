/* Internal dependencies */
import React from 'react'
import { SemanticNames } from '../../../foundation/Colors/Theme'
import ActivableElement from '../../../types/ActivatableElement'
import { ContentComponentProps } from '../../../types/ComponentProps'
import OptionItem from '../../../types/OptionItem'
import { IconName } from '../../Icon'

export enum ListItemSize {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

export default interface ListItemProps extends ContentComponentProps, OptionItem, ActivableElement {
  iconClassName?: string
  contentClassName?: string
  size?: ListItemSize
  name?: string
  href?: string
  hide?: boolean
  nested?: boolean
  onClick?: (e: any, name?: string) => void
  leftIcon?: IconName | React.ReactNode
  leftIconColor?: SemanticNames
  disableIconActive?: boolean
  descriptionMaxLines?: number
  content?: React.ReactNode
  description?: React.ReactNode
  rightContent?: React.ReactNode
  paddingLeft?: number
}
