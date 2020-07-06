/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'

export default interface GlobalHeaderProps extends Omit<ChildrenComponentProps, 'as'> {
  isWindows?: boolean
}
