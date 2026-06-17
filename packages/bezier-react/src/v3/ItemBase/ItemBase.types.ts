import type { ReactNode } from 'react'

import type { BezierIcon } from '@channel.io/bezier-icons'

import type {
  ActivatableProps,
  BezierComponentProps,
  ChildrenProps,
  DisableProps,
  SizeProps,
  VariantProps,
} from '~/src/types/props'

export type ItemBaseSize = 'm' | 'l'

export type ItemBaseVariant = 'neutral' | 'destructive'

export type ItemBaseSideContent = BezierIcon | ReactNode

/**
 * Visual foundation for row-like components.
 *
 * `ItemBase` does not provide menu, option, or button semantics by itself.
 * Purpose-built components such as `DropdownMenuItem` should own roles,
 * keyboard interaction, and selection behavior.
 */
interface ItemBaseOwnProps {
  /**
   * Additional content below the main content.
   */
  description?: ReactNode
  /**
   * Content on the left.
   */
  leadingContent?: ItemBaseSideContent
  /**
   * Content on the right.
   */
  trailingContent?: ItemBaseSideContent
}

export interface ItemBaseProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    DisableProps,
    ActivatableProps,
    SizeProps<ItemBaseSize>,
    VariantProps<ItemBaseVariant>,
    ItemBaseOwnProps {}
