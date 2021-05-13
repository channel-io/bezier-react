/* Internal dependencies */
import { ChildrenComponentProps } from '../../types/ComponentProps'
import { LayoutState } from '../redux/LayoutReducer'

export default interface ClientProps extends ChildrenComponentProps {
  layoutInitialState: LayoutState
}
