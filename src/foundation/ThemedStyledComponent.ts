/* External dependencies */
import * as StyledComponents from 'styled-components'

/* Internal dependencies */
import { Theme } from './index'

export const {
  default: styled,
  css,
  ThemeProvider,
} = StyledComponents as StyledComponents.ThemedStyledComponentsModule<Theme>
