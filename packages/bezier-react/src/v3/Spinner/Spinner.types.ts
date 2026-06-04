import type { BetaSemanticColor } from '~/src/types/beta-tokens'
import type { BezierComponentProps, SizeProps } from '~/src/types/props'

export type SpinnerSize = 'xl' | 'l' | 'm' | 's' | 'xs'

interface SpinnerOwnProps {
  /**
   * TODO(@timo): Use ColorProps after legacy token unions are removed.
   */
  color?: BetaSemanticColor
}

export interface SpinnerProps
  extends Omit<BezierComponentProps<'div'>, keyof SpinnerOwnProps>,
    SizeProps<SpinnerSize>,
    SpinnerOwnProps {}
