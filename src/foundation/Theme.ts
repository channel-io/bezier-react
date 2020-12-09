/* Internal dependencies */
import {
  Color,
  Transition,
  Rounding,
  Elevation,
} from '../index'

export interface Theme {
  colors: Color
  transition: typeof Transition
  rounding: typeof Rounding
  elevation: typeof Elevation
}
