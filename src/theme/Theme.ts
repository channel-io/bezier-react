/* External dependencies */
import * as StyledComponents from 'styled-components'

/* Internal dependencies */
import { DefaultPalette, DarkPalette } from './Palette'
import { DefaultTypo } from './Typography'

export default interface Theme {
  palette: any
  typography: any
}

export const DefaultTheme: Theme = {
  palette: DefaultPalette,
  typography: DefaultTypo,
}

export const DarkTheme: Theme = {
  palette: DarkPalette,
  typography: DefaultTypo,
}

export const {
  ThemeProvider: ChThemeProvider,
} = StyledComponents as StyledComponents.ThemedStyledComponentsModule<Theme>
