import {
  type BezierComponentProps,
  type ColorProps,
  type SizeProps,
} from '~/src/types/props'

type SpinnerSize = 's' | 'm'

interface SpinnerOwnProps {
  /**
   * The style variant of Spinner.
   * @default 'secondary'
   */
  variant?: 'primary' | 'secondary' | 'on-overlay'
}

export interface SpinnerProps
  extends Omit<BezierComponentProps<'span'>, keyof ColorProps>,
    SizeProps<SpinnerSize>,
    ColorProps,
    SpinnerOwnProps {}
