/* External dependencies */
import { createGlobalStyle } from 'styled-components'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Foundation } from './Foundation'

type ThemeRecord = Record<string, string>

function generateCSSVar(theme?: ThemeRecord, prefix?: string) {
  if (!theme) { return undefined }
  const prefixString = !isEmpty(prefix) ? `${prefix}-` : ''
  return Object.entries(theme).reduce((varObj, [key, color]) => ({
    ...varObj,
    [`--${prefixString}${key}`]: color,
  }), {} as ThemeRecord)
}

const ThemeVars = createGlobalStyle<{ foundation?: Foundation }>`
  :root {
    ${({ foundation }) => generateCSSVar(foundation?.theme)}
    ${({ foundation }) => generateCSSVar(foundation?.subTheme, 'inverted')}
  }
`

export default ThemeVars
