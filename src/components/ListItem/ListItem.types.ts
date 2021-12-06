/* Internal dependencies */
import React from 'react'
import ActivableElement from 'Types/ActivatableElement'
import { ContentComponentProps } from 'Types/ComponentProps'
import OptionItem from 'Types/OptionItem'
import { IconName } from 'Components/Icon'

export enum ListItemSize {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

export enum ListItemColorVariant {
  Blue = 'blue',
  Red = 'red',
  Green = 'green',
  Cobalt = 'cobalt',
  Monochrome = 'monochrome',
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
  colorVariant?: ListItemColorVariant
  focused?: boolean
  disabled?: boolean
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
