/* Internal dependencies */
import React from 'react'
import type { ContentComponentProps, ActivatableProps, OptionItemProps } from 'Types/ComponentProps'
import type { IconName } from 'Components/Icon'

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

export default interface ListItemProps extends ContentComponentProps, ActivatableProps, OptionItemProps {
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
