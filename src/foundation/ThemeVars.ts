/* Internal dependencies */
import { createGlobalStyle } from 'styled-components'
import { LightTheme, DarkTheme } from './Colors/Theme/presets'

type ThemeRecord = Record<string, string>

export const THEME_CLASSNAMES = {
  DARK: 'dark',
} as const

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

    .${BEZIER_ROOT_CLASSNAME}.${THEME_CLASSNAMES.DARK} {
      ${generateCSSVar(DarkTheme)}
    }
  }
`

export default ThemeVars
