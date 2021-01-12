/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface HeaderAreaProps extends UIComponentProps {
  hasHeader: boolean
  contentHeader: React.ReactElement
  coverableHeader: React.ReactElement
}
