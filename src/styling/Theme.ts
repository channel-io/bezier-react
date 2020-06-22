/* External dependencies */
import * as StyledComponents from 'styled-components'

/* Internal dependencies */
import Palette from './Palette'

export default interface Theme {
  palette: any
}

export const DefaultTheme: Theme = {
  palette: Palette.Default,
}

export const DarkTheme: Theme = {
  palette: Palette.Dark,
}

export const {
  ThemeProvider,
} = StyledComponents as StyledComponents.ThemedStyledComponentsModule<Theme>
