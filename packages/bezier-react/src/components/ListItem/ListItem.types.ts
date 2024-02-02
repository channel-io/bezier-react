import type React from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  AlphaBezierComponentProps,
  ContentProps,
  DisableProps,
  LinkProps,
  PolymorphicProps,
  SideContentProps,
  SizeProps,
  VariantProps,
} from '~/src/types/props'

export enum ListItemSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
}

export enum ListItemVariant {
  Blue = 'blue',
  Red = 'red',
  Green = 'green',
  Cobalt = 'cobalt',
  Monochrome = 'monochrome',
}

interface ListItemOwnProps {
  focused?: boolean
  description?: React.ReactNode
  descriptionMaxLines?: number
}

export interface ListItemProps extends
  AlphaBezierComponentProps,
  PolymorphicProps,
  SizeProps<ListItemSize>,
  VariantProps<ListItemVariant>,
  ContentProps,
  SideContentProps<React.ReactNode | BezierIcon, React.ReactNode>,
  LinkProps,
  DisableProps,
  ActivatableProps,
  Omit<React.HTMLAttributes<HTMLElement>, 'content'>,
  ListItemOwnProps {}
