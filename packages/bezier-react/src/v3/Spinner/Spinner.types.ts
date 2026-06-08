import type {
  BezierComponentProps,
  SizeProps,
  V3ColorProps,
} from '~/src/types/props'

export type SpinnerSize = 'xl' | 'l' | 'm' | 's' | 'xs'

export interface SpinnerProps
  extends Omit<BezierComponentProps<'div'>, keyof V3ColorProps>,
    SizeProps<SpinnerSize>,
    V3ColorProps {}
