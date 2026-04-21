import { type BetaSemanticColor } from '~/src/types/beta-tokens'
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
type TextFontWeight = 400 | 500 | 600 | 700

interface TextOwnProps {
  /**
   * Typography style of the text.
   * @default '15'
   */
  typo?: Typography
  /**
   * Color of the text. If no value is specified, it inherits the color of the parent element.
   */
  color?: SemanticColor | BetaSemanticColor
  /**
   * Whether the text is bold.
   * @default false
   */
  bold?: boolean
  /**
   * Font weight of the text.
   * If `bold` and `fontWeight` are used together, `fontWeight` takes precedence.
   * This prop is currently intended for internal Bezier component usage.
   * @internal
   */
  fontWeight?: TextFontWeight
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
