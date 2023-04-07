import { type Border } from './Border'
import { type Theme } from './Colors'
import { type Elevation } from './Elevation'
import { type Rounding } from './Rounding'
import { type Spacing } from './Spacing'
import { type Transition } from './Transition'

export interface Foundation {
  theme: Theme
  subTheme?: Theme
  spacing: typeof Spacing
  transition: typeof Transition
  rounding: typeof Rounding
  elevation: typeof Elevation
  border: typeof Border
}
