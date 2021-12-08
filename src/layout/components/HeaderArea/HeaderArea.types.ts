/* Internal dependencies */
import { BezierComponentProps } from 'Types/ComponentProps'

export default interface HeaderAreaProps extends BezierComponentProps {
  hasHeader: boolean
  ContentHeaderComponent: React.ComponentType
  CoverableHeaderComponent?: React.ComponentType
}
