/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface MainProps extends UIComponentProps {
  contentHeader: React.ComponentType
  coverableHeader: React.ComponentType
  sidePanel: React.ReactElement
  sideView: React.ReactElement
}
