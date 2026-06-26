import type React from 'react'

import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  BezierComponentProps,
  ContentProps,
  DisableProps,
  InteractiveStyleProps,
  LinkProps,
  PolymorphicProps,
  SideContentProps,
  SizeProps,
  VariantProps,
} from '~/src/types/props'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type ListItemSize = 'xs' | 's' | 'm' | 'l'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type ListItemVariant = 'blue' | 'red' | 'green' | 'cobalt' | 'monochrome'

interface ListItemOwnProps {
  description?: React.ReactNode
  descriptionMaxLines?: number
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface ListItemProps
  extends Omit<BezierComponentProps, keyof ContentProps>,
    ContentProps,
    PolymorphicProps,
    SizeProps<ListItemSize>,
    VariantProps<ListItemVariant>,
    SideContentProps<React.ReactNode | BezierIcon, React.ReactNode>,
    LinkProps,
    DisableProps,
    ActivatableProps,
    InteractiveStyleProps,
    ListItemOwnProps {}
