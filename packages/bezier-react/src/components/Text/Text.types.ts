import {
  type BezierComponentProps,
  type ChildrenProps,
  type MarginProps,
  type PolymorphicProps,
} from '~/src/types/props'
import { type SemanticColor } from '~/src/types/tokens'

type Typography =
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '22'
  | '24'
  | '30'
  | '36'

type TextAlign = 'left' | 'center' | 'right'

interface TextOwnProps {
  /**
   * Typography style of the text.
   * @default '15'
   */
  typo?: Typography
  /**
   * Color of the text. If no value is specified, it inherits the color of the parent element.
   */
  color?: SemanticColor
  /**
   * Whether the text is bold.
   * @default false
   */
  bold?: boolean
  /**
   * Whether the text is italic.
   * @default false
   */
  italic?: boolean
  /**
   * Whether the text is truncated.
   * If it is a positive integer, it means the maximum number of lines.
   * @default false
   */
  truncated?: boolean | number
  /**
   * Horizontal alignment of the text.
   */
  align?: TextAlign
}

export interface TextProps
  extends Omit<BezierComponentProps, keyof TextOwnProps>,
    PolymorphicProps,
    ChildrenProps,
    MarginProps,
    TextOwnProps {}
