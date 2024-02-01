import type React from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  BezierComponentProps,
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
  Omit<BezierComponentProps, keyof ContentProps>,
  ContentProps,
  PolymorphicProps,
  SizeProps<ListItemSize>,
  VariantProps<ListItemVariant>,
  SideContentProps<React.ReactNode | BezierIcon, React.ReactNode>,
  LinkProps,
  DisableProps,
  ActivatableProps,
  ListItemOwnProps {}
