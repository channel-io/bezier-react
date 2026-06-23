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

export type BaseItemSize = 'm' | 'l'

export type BaseItemVariant = 'neutral' | 'destructive'

export type BaseItemSideContent = BezierIcon | ReactNode

/**
 * Visual foundation for row-like components.
 *
 * `BaseItem` does not provide menu, option, or button semantics by itself.
 * Purpose-built components such as `DropdownMenuItem` should own roles,
 * keyboard interaction, and selection behavior.
 */
interface BaseItemOwnProps {
  /**
   * Additional content below the main content.
   */
  description?: ReactNode
  /**
   * Content on the left.
   */
  leadingContent?: BaseItemSideContent
  /**
   * Content on the right.
   */
  trailingContent?: BaseItemSideContent
}

export interface BaseItemProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    DisableProps,
    ActivatableProps,
    SizeProps<BaseItemSize>,
    VariantProps<BaseItemVariant>,
    BaseItemOwnProps {}
