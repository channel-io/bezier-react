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
  | 'small'
  | 'em'
  | 'i'
  | 'b'
  | 'strong'
  | 'legend'
  | 'span'
  | 'label'
  | 'div'

interface TextOwnProps {
  typo?: Typography
  color?: SemanticColor
  bold?: boolean
  italic?: boolean
  truncated?: boolean
}

export interface TextProps extends
  AlphaBezierComponentProps,
  Omit<React.HTMLAttributes<HTMLElement>, keyof TextOwnProps>,
  PolymorphicProps<TextElementType>,
  ChildrenProps,
  MarginProps,
  TextOwnProps {}
