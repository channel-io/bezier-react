import {
  type AlphaBezierComponentProps,
  type ChildrenProps,
  type MarginProps,
  type PolymorphicProps,
} from '~/src/types/ComponentProps'
import { type SemanticColor } from '~/src/types/Token'

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

type TextElementType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'label'
  | 'small'
  | 'em'
  | 'i'
  | 'b'
  | 'strong'
  | 'legend'
  | 'div'

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
   * If it is a number type, it means the maximum number of lines.
   * @default false
   */
  truncated?: boolean | number
  /**
   * Horizontal alignment of the text.
   */
  align?: TextAlign
}

export interface TextProps extends
  AlphaBezierComponentProps,
  Omit<React.HTMLAttributes<HTMLElement>, keyof TextOwnProps>,
  PolymorphicProps<TextElementType>,
  ChildrenProps,
  MarginProps,
  TextOwnProps {}
