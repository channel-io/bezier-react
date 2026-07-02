import {
  type BetaTextSemanticColor,
  type BetaTypographyFontWeight,
} from '~/src/types/beta-tokens'
import {
  type BezierComponentProps,
  type ChildrenProps,
  type MarginProps,
  type PolymorphicProps,
} from '~/src/types/props'

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
  color?: BetaTextSemanticColor
  /**
   * Whether the text is bold.
   * @default false
   */
  bold?: boolean
  /**
   * Font weight of the text.
   * If `bold` and `fontWeight` are used together, `fontWeight` takes precedence.
   */
  fontWeight?: BetaTypographyFontWeight
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
