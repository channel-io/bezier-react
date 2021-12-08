/* Internal dependencies */
import { ChildrenComponentProps } from 'Types/ComponentProps'
import { TextProps } from 'Components/Text'

export default interface FormLabelProps extends Omit<ChildrenComponentProps, 'as'>, TextProps {
  htmlFor?: string
  help?: React.ReactNode
}
