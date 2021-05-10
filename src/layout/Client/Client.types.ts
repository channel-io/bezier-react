/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'
import { LayoutState } from '../redux/LayoutReducer'

export default interface ClientProps extends UIComponentProps {
  layoutInitialState: LayoutState
  children: React.ReactElement
}
