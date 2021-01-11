/* Internal dependencies */
import {
  Theme,
  Transition,
  Rounding,
  Elevation,
  Border,
} from './index'

export interface Foundation {
  theme: Theme
  transition: typeof Transition
  rounding: typeof Rounding
  elevation: typeof Elevation
  border: typeof Border
  isDarkMode?: boolean
}
