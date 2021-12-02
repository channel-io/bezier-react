/* Internal dependencies */
import { TextProps } from '../../Text'
import { ChildrenComponentProps } from '../../../types/ComponentProps'

export default interface FormLabelProps extends Omit<ChildrenComponentProps, 'as'>, TextProps {
  htmlFor?: string
  help?: React.ReactNode
}
