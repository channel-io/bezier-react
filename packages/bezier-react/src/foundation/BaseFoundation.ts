import {
  BetaDarkTheme,
  BetaLightTheme,
} from './BetaTokens'
import { Border } from './Border'
import { Themes } from './Colors'
import { Elevation } from './Elevation'
import { type Foundation } from './Foundation'
import { Rounding } from './Rounding'
import { Spacing } from './Spacing'
import { Transition } from './Transition'

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
  betaTheme: BetaLightTheme,
  betaSubTheme: BetaDarkTheme,
}

export const DarkFoundation: Foundation = {
  ...BaseFoundation,
  theme: Themes.DarkTheme,
  subTheme: Themes.LightTheme,
  betaTheme: BetaDarkTheme,
  betaSubTheme: BetaLightTheme,
}
