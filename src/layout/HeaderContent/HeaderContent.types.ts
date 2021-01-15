/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface HeaderContent extends UIComponentProps {
  mainHeader?: React.ReactElement
  coverableHeader?: React.ReactElement
}
