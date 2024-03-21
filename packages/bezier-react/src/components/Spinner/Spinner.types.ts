import {
  type BezierComponentProps,
  type ColorProps,
  type SizeProps,
} from '~/src/types/props'

export type SpinnerSize = 'xl' | 'l' | 'm' | 's' | 'xs'

export interface SpinnerProps
  extends Omit<BezierComponentProps<'div'>, keyof ColorProps>,
    SizeProps<SpinnerSize>,
    ColorProps {}
