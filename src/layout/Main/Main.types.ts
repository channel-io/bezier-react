/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface MainProps extends UIComponentProps {
  content: React.ReactElement
  contentHeader: React.ReactElement
  coverableHeader: React.ReactElement
  sidePanel: React.ReactElement
  sideView: React.ReactElement
}
