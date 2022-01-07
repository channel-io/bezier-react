/* Internal dependencies */
import { createGlobalStyle } from 'styled-components'
import { LightTheme, DarkTheme } from './Colors/Theme/presets'

type ThemeRecord = Record<string, string>

export const BEZIER_ROOT_CLASSNAME = 'bezier-react-root'

function generateCSSVar(theme: ThemeRecord) {
  return Object.entries(theme).reduce((varObj, [key, color]) => ({
    ...varObj,
    [`--${key}`]: color,
  }), {} as ThemeRecord)
}

const ThemeVars = createGlobalStyle`
  :root {
    .${BEZIER_ROOT_CLASSNAME} {
      ${generateCSSVar(LightTheme)}
    }

    .${BEZIER_ROOT_CLASSNAME}.dark {
      ${generateCSSVar(DarkTheme)}
    }
  }
`

export default ThemeVars
