import type {
  BezierComponentProps,
  ChildrenProps,
} from '~/src/types/ComponentProps'

interface AlphaSmoothCornersBoxOptions {
  borderRadius?: number | string
  margin?: number
  shadow?: string
  shadowBlur?: number
  backgroundColor?: string
  backgroundImage?: string
}

export interface AlphaSmoothCornersBoxProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLElement>,
  AlphaSmoothCornersBoxOptions {}
