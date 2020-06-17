/* External dependencies */
import * as StyledComponents from 'styled-components'

/* Internal dependencies */
import Palette from './Palette'
import Typography from './Typography'

export default interface Theme {
  palette: any
  typo: any
}

export const DefaultTheme: Theme = {
  palette: Palette.Default,
  typo: Typography.Default,
}

export const DarkTheme: Theme = {
  palette: Palette.Dark,
  typo: Typography.Default,
}

export const {
  ThemeProvider: ChThemeProvider,
} = StyledComponents as StyledComponents.ThemedStyledComponentsModule<Theme>
