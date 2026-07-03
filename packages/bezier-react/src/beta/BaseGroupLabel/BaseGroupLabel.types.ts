import type { ReactNode } from 'react'

import type { TextProps } from '~/src/beta/Text'
import type { BezierComponentProps, ContentProps } from '~/src/types/props'

export type BaseGroupLabelVariant = 'neutral-dark' | 'neutral-light'

interface BaseGroupLabelOwnProps extends ContentProps<ReactNode> {
  /**
   * Visual variant of the group label.
   * @default 'neutral-dark'
   */
  variant?: BaseGroupLabelVariant
  /**
   * Primary visible content of the group label.
   */
  content: ReactNode
  /**
   * Tooltip content rendered next to the group label.
   */
  help?: ReactNode
  /**
   * Content rendered at the end of the group label.
   */
  trailingContent?: ReactNode
  /**
   * Element type used when `content` is a string.
   * @default 'span'
   */
  contentAs?: TextProps['as']
  /**
   * id applied to the primary content element.
   */
  contentId?: string
}

export interface BaseGroupLabelProps
  extends Omit<
      BezierComponentProps<'div'>,
      keyof BaseGroupLabelOwnProps | 'children'
    >,
    BaseGroupLabelOwnProps {}
