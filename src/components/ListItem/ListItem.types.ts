/* Internal dependencies */
import React from 'react'
import type {
  BezierComponentProps,
  ContentProps,
  VariantProps,
  DisableProps,
  ActivatableProps,
  OptionItemProps,
  SideContentProps,
  AdditionalStyleProps,
} from 'Types/ComponentProps'
import type { IconName } from 'Components/Icon'

export enum ListItemSize {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

export enum ListItemVariant {
  Blue = 'blue',
  Red = 'red',
  Green = 'green',
  Cobalt = 'cobalt',
  Monochrome = 'monochrome',
}

type MouseHandler = React.MouseEventHandler

interface ListItemOptions {
  size?: ListItemSize
  name?: string
  href?: string
  hide?: boolean
  nested?: boolean
  leftIcon?: IconName
  focused?: boolean
  disableIconActive?: boolean
  descriptionMaxLines?: number
  description?: React.ReactNode
  onClick?: (e: React.MouseEvent, name?: string) => void
  onMouseDown?: MouseHandler
  onMouseEnter?: MouseHandler
  onMouseLeave?: MouseHandler
}

export default interface ListItemProps extends
  BezierComponentProps,
  ContentProps,
  SideContentProps,
  VariantProps<ListItemVariant>,
  DisableProps,
  ActivatableProps,
  OptionItemProps,
  AdditionalStyleProps<['icon', 'content']>,
  ListItemOptions {}
