/* Internal dependencies */
import {
  Color,
  Transition,
  Rounding,
  Elevation,
  Border,
} from './index'

export interface Theme {
  colors: Color
  transition: typeof Transition
  rounding: typeof Rounding
  elevation: typeof Elevation
  border: typeof Border
}
