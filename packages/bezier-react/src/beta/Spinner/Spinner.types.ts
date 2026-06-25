import type {
  BetaColorProps,
  BezierComponentProps,
  SizeProps,
} from '~/src/types/props'

export type SpinnerSize =
  | '10'
  | '12'
  | '16'
  | '20'
  | '24'
  | '30'
  | '36'
  | '42'
  | '48'

export interface SpinnerProps
  extends Omit<BezierComponentProps<'div'>, keyof BetaColorProps>,
    SizeProps<SpinnerSize>,
    BetaColorProps {}
