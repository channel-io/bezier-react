/* Internal dependencies */
import { BezierComponentProps } from 'Types/ComponentProps'

interface DividerOptions {
  orientation: 'horizontal' | 'vertical'
  withoutSideIndent?: boolean
}

export default interface DividerProps extends
  BezierComponentProps,
  DividerOptions {}

export interface StyledDividerProps extends
  Pick<DividerProps, 'withoutSideIndent' | 'interpolation'> {}
