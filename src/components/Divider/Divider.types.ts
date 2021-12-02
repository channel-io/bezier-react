/* Internal dependencies */
import { BezierComponentProps } from '../../types/ComponentProps'

export default interface DividerProps extends BezierComponentProps {
  orientation: 'horizontal' | 'vertical'
  withoutSideIndent?: boolean
}

export interface StyledDividerProps extends Pick<DividerProps, 'withoutSideIndent' | 'interpolation'> {}
