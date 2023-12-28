import type { SeparatorProps as SeparatorPrimitiveProps } from '@radix-ui/react-separator'

import type { AlphaBezierComponentProps } from '~/src/types/ComponentProps'

interface DividerOwnProps {
  /**
   * If true, the divider will be rendered without side padding,
   * which stands for the padding on the left and right sides of the horizontal divider,
   * and the top and bottom sides of the vertical divider.
   *
   * @default false
   */
  withoutSideIndent?: boolean

  /**
   * If true, the divider will be rendered without parallel padding,
   * which stands for the padding on the top and bottom sides of the horizontal divider,
   * and the left and right sides of the vertical divider.
   *
   * @default false
   */
  withoutParallelIndent?: boolean

  /**
   * If true, the divider will be rendered without padding,
   *
   * @default false
   */
  withoutIndent?: boolean
}

export interface DividerProps extends
  AlphaBezierComponentProps,
  SeparatorPrimitiveProps,
  DividerOwnProps {}
