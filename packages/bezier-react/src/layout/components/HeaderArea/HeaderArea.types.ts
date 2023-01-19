/* Internal dependencies */
import { BezierComponentProps } from '~/src/types/ComponentProps'

interface HeaderAreaOptions {
  hasHeader: boolean
  showSideView: boolean
  ContentHeaderComponent: React.ComponentType
  CoverableHeaderComponent?: React.ComponentType
}

export default interface HeaderAreaProps extends
  BezierComponentProps,
  HeaderAreaOptions {}
