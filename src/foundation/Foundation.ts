/* Internal dependencies */
import { Theme } from './Colors'
import { Spacing } from './Spacing'
import { Transition } from './Transition'
import { Rounding } from './Rounding'
import { Elevation } from './Elevation'
import { Border } from './Border'

export interface Foundation {
  theme: Theme
  subTheme?: Theme
  spacing: typeof Spacing
  transition: typeof Transition
  rounding: typeof Rounding
  elevation: typeof Elevation
  border: typeof Border
}
