/* Internal dependencies */
import type { Foundation } from './Foundation'
import { Themes } from './Colors'
import { Spacing } from './Spacing'
import { Transition } from './Transition'
import { Rounding } from './Rounding'
import { Elevation } from './Elevation'
import { Border } from './Border'

const BaseFoundation = {
  spacing: Spacing,
  transition: Transition,
  rounding: Rounding,
  elevation: Elevation,
  border: Border,
}

export const LightFoundation: Foundation = {
  ...BaseFoundation,
  theme: Themes.LightTheme,
  subTheme: Themes.DarkTheme,
}

export const DarkFoundation: Foundation = {
  ...BaseFoundation,
  theme: Themes.DarkTheme,
  subTheme: Themes.LightTheme,
}
