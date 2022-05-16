/* Internal dependencies */
import type { Theme } from './Colors'
import type { Spacing } from './Spacing'
import type { Transition } from './Transition'
import type { Rounding } from './Rounding'
import type { Elevation } from './Elevation'
import type { Border } from './Border'

export interface Foundation {
  theme: Theme
  subTheme?: Theme
  spacing: typeof Spacing
  transition: typeof Transition
  rounding: typeof Rounding
  elevation: typeof Elevation
  border: typeof Border
}
