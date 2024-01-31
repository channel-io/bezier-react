import type {
  AlphaBezierComponentProps,
  ChildrenProps,
  DisableProps,
} from '~/src/types/props'
import { type SemanticColor } from '~/src/types/tokens'

/**
 * NOTE: The `inset` property is not currently supported.
 */
interface BoxShadow {
  /**
   * The value specifies the horizontal distance. Negative values place the shadow to the left of the element.
   * @default 0
   */
  offsetX?: number
  /**
   * The value specifies the vertical distance. Negative values place the shadow above the element.
   * @default 0
   */
  offsetY?: number
  /**
   * The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed.
   * @default 0
   */
  blurRadius?: number
  /**
   * Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink.
   * @default 0
   */
  spreadRadius?: number
  /**
   * The color of the shadow.
   * @default transparent
   */
  color?: SemanticColor
}

interface AlphaSmoothCornersBoxOwnProps {
  /**
   * Rounds the corners of an element's outer border edge.
   * @default 0
   */
  borderRadius: number | string
  /**
   * Shadow effects around an element's frame.
   */
  shadow?: BoxShadow
  /**
   * The margin area on all four sides of an element.
   * @default 0
   */
  margin?: number
  /**
   * The background color of an element.
   * @default 'transparent'
   */
  backgroundColor?: SemanticColor
  /**
   * The background image url of an element.
   */
  backgroundImage?: string
}

export interface AlphaSmoothCornersBoxProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  DisableProps,
  React.HTMLAttributes<HTMLDivElement>,
  AlphaSmoothCornersBoxOwnProps {}
