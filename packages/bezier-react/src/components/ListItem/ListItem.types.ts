import type React from 'react'

import {
  type BezierIcon,
  type IconName,
} from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  AdditionalStylableProps,
  BezierComponentProps,
  ContentProps,
  DisableProps,
  LinkProps,
  OptionItemProps,
  SideContentProps,
  SizeProps,
  VariantProps,
} from '~/src/types/ComponentProps'

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

type MouseEventHandler = React.MouseEventHandler

interface ListItemOptions {
  name?: string
  hide?: boolean
  nested?: boolean
  leftIcon?: IconName | BezierIcon
  focused?: boolean
  disableIconActive?: boolean
  descriptionMaxLines?: number
  description?: React.ReactNode
  onClick?: (e: React.MouseEvent, name?: string) => void
  onMouseDown?: MouseEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
}

export default interface ListItemProps extends
  BezierComponentProps,
  SizeProps<ListItemSize>,
  VariantProps<ListItemVariant>,
  ContentProps,
  SideContentProps,
  LinkProps,
  DisableProps,
  ActivatableProps,
  OptionItemProps,
  AdditionalStylableProps<['icon', 'content']>,
  ListItemOptions {}
