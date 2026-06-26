import {
  type BezierComponentProps,
  type ColorProps,
  type SizeProps,
} from '~/src/types/props'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export type SpinnerSize = 'xl' | 'l' | 'm' | 's' | 'xs'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface SpinnerProps
  extends Omit<BezierComponentProps<'div'>, keyof ColorProps>,
    SizeProps<SpinnerSize>,
    ColorProps {}
