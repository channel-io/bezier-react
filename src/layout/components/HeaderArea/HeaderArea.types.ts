/* Internal dependencies */
import { UIComponentProps } from 'Types/ComponentProps'

export default interface HeaderAreaProps extends UIComponentProps {
  hasHeader: boolean
  ContentHeaderComponent: React.ComponentType
  CoverableHeaderComponent?: React.ComponentType
}
