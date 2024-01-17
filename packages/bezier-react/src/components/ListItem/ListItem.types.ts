import type React from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  AdditionalStylableProps,
  AlphaBezierComponentProps,
  ContentProps,
  DisableProps,
  LinkProps,
  PolymorphicProps,
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

interface ListItemOwnProps {
  name?: string
  leftIcon?: BezierIcon
  focused?: boolean
  description?: React.ReactNode
  descriptionMaxLines?: number
  onClick?: (e: React.MouseEvent, name?: string) => void
}

export interface ListItemProps extends
  AlphaBezierComponentProps,
  PolymorphicProps,
  SizeProps<ListItemSize>,
  VariantProps<ListItemVariant>,
  ContentProps,
  SideContentProps,
  LinkProps,
  DisableProps,
  Pick<ActivatableProps, 'active' | 'activeClassName'>,
  // TODO: AlphaAdditionalStylableProps
  AdditionalStylableProps<['icon', 'content']>,
  Omit<React.HTMLAttributes<HTMLElement>, 'onClick' | 'content'>,
  ListItemOwnProps {}
