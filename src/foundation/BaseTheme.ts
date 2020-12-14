/* Internal dependencies */
import { Theme } from './Theme'
import { Colors } from './Colors'
import { Transition } from './Transition'
import { Rounding } from './Rounding'
import { Elevation } from './Elevation'
import { Border } from './Border'

const BaseTheme = {
  transition: Transition,
  rounding: Rounding,
  elevation: Elevation,
  border: Border,
}

export const LightTheme: Theme = {
  ...BaseTheme,
  colors: Colors.Light,
}

export const DarkTheme: Theme = {
  ...BaseTheme,
  colors: Colors.Dark,
}
