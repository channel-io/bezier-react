/* Internal dependencies */
import {
  Theme,
  Colors,
  Transition,
  Rounding,
  Elevation,
} from './index'

const BaseTheme = {
  transition: Transition,
  rounding: Rounding,
  elevation: Elevation,
}

export const LightTheme: Theme = {
  ...BaseTheme,
  colors: Colors.Light,
}

export const DarkTheme: Theme = {
  ...BaseTheme,
  colors: Colors.Dark,
}
