/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface HeaderAreaProps extends UIComponentProps {
  hasHeader: boolean
  mainHeader: React.ReactElement
  coverableHeader: React.ReactElement
}
