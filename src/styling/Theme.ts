/* External dependencies */
import * as StyledComponents from 'styled-components'

/* Internal dependencies */
import BaseColors, { Colors } from './Colors'

export default interface Theme {
  colors: Colors
}

export const LightTheme: Theme = {
  colors: BaseColors.LightColors,
}

export const DarkTheme: Theme = {
  colors: BaseColors.DarkColors,
}

export const {
  ThemeProvider,
} = StyledComponents as StyledComponents.ThemedStyledComponentsModule<Theme>
