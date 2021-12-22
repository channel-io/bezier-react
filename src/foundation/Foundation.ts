/* Internal dependencies */
import {
  Theme,
  Transition,
  Rounding,
  Elevation,
  Border,
  Spacing,
} from './index'

export interface Foundation {
  theme: Theme
  subTheme?: Theme
  spacing: typeof Spacing
  transition: typeof Transition
  rounding: typeof Rounding
  elevation: typeof Elevation
  border: typeof Border
}
