/* External dependencies */
import * as StyledComponents from 'styled-components'

/* Internal dependencies */
import Transition from './Transition'
import BaseColors, { Colors } from './Colors/index'

export default interface Theme {
  colors: Colors
  transition: typeof Transition
}

export const LightTheme: Theme = {
  colors: BaseColors.Light,
  transition: Transition,
}

export const DarkTheme: Theme = {
  colors: BaseColors.Dark,
  transition: Transition,
}

export const {
  default: styled,
  css,
  ThemeProvider,
} = StyledComponents as StyledComponents.ThemedStyledComponentsModule<Theme>
