/* Internal dependencies */
import { ChildrenComponentProps } from 'Types/ComponentProps'

export default interface GlobalHeaderProps extends Omit<ChildrenComponentProps, 'as'> {
  isWindows?: boolean
}
