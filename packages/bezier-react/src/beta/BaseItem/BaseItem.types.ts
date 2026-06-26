import type { ReactNode } from 'react'

import type { BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  LeadingTrailingContentProps,
  SizeProps,
  VariantProps,
} from '~/src/types/props'

export type BaseItemSize = 'm'

export type BaseItemVariant = 'neutral' | 'destructive'

export type BaseItemSideContent = BezierIcon | ReactNode

/**
 * Visual foundation for row-like components.
 *
 * `BaseItem` does not provide menu, option, or button semantics by itself.
 * Purpose-built components such as `DropdownMenuItem` should own roles,
 * keyboard interaction, and selection behavior.
 */
interface BaseItemOwnProps
  extends LeadingTrailingContentProps<BaseItemSideContent> {
  /**
   * Additional content below the main content.
   */
  description?: ReactNode
}

export interface BaseItemProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    DisableProps,
    ActivatableProps,
    SizeProps<BaseItemSize>,
    VariantProps<BaseItemVariant>,
    BaseItemOwnProps {}
