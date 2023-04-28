import { type SemanticNames } from '~/src/foundation'

import type {
  BezierComponentProps,
  ChildrenProps,
} from '~/src/types/ComponentProps'

/**
 * NOTE: The `inset` property is not currently supported.
 */
export interface BoxShadow {
  offsetX?: number
  offsetY?: number
  blurRadius?: number
  spreadRadius?: number
  color?: SemanticNames
}

interface AlphaSmoothCornersBoxOptions {
  borderRadius?: number | string
  shadow?: BoxShadow
  margin?: number
  backgroundColor?: SemanticNames
  backgroundImage?: string
}

export interface AlphaSmoothCornersBoxProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLElement>,
  AlphaSmoothCornersBoxOptions {}
