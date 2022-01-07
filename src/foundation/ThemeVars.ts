/* External dependencies */
import { createGlobalStyle } from 'styled-components'

/* Internal dependencies */
import { Foundation } from './index'

type ThemeRecord = Record<string, string>

export const BEZIER_ROOT_CLASSNAME = 'bezier-react-root'

function generateCSSVar(theme?: ThemeRecord) {
  if (!theme) { return undefined }
  return Object.entries(theme).reduce((varObj, [key, color]) => ({
    ...varObj,
    [`--${key}`]: color,
  }), {} as ThemeRecord)
}

const ThemeVars = createGlobalStyle<{ foundation?: Foundation }>`
  :root {
    .${BEZIER_ROOT_CLASSNAME} {
      ${({ foundation }) => generateCSSVar(foundation?.theme)}
    }
  }
`

export default ThemeVars
