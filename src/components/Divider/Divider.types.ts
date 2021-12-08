/* Internal dependencies */
import { UIComponentProps } from 'Types/ComponentProps'

export default interface DividerProps extends UIComponentProps {
  orientation: 'horizontal' | 'vertical'
  withoutSideIndent?: boolean
}

export interface StyledDividerProps extends Pick<DividerProps, 'withoutSideIndent' | 'interpolation'> {}
