/* Internal dependencies */
import { BezierComponentProps } from '../../../types/ComponentProps'

export default interface HeaderAreaProps extends BezierComponentProps {
  hasHeader: boolean
  ContentHeaderComponent: React.ComponentType
  CoverableHeaderComponent?: React.ComponentType
}
