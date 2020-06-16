/* External dependencies */
import * as StyledComponents from 'styled-components'

/* Internal dependencies */
import Palette, { DefaultPalette, DarkPalette } from './Palette'
import Typography, { DefaultTypo } from './Typography'

export default interface Theme {
  palette: Palette
  typography: Typography
}

export const DefaultTheme: Theme = {
  palette: DefaultPalette,
  typography: DefaultTypo,
}

export const DarkTheme: Theme = {
  palette: DarkPalette,
  typography: DefaultTypo,
}

const {
  ThemeProvider,
} = StyledComponents as StyledComponents.ThemedStyledComponentsModule<Theme>

export const ChThemeProvider = ThemeProvider
