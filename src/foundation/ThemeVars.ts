/* External dependencies */
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { createGlobalStyle } from './FoundationStyledComponent'

type ThemeRecord = Record<string, string>

function generateCSSVar(theme?: ThemeRecord, prefix?: string) {
  if (!theme) { return undefined }
  const prefixString = !isEmpty(prefix) ? `${prefix}-` : ''
  return Object.entries(theme).reduce((varObj, [key, color]) => ({
    ...varObj,
    [`--${prefixString}${key}`]: color,
  }), {} as ThemeRecord)
}

export const ThemeVars = createGlobalStyle`
  :root {
    ${({ foundation }) => generateCSSVar(foundation?.theme)}
    ${({ foundation }) => generateCSSVar(foundation?.subTheme, 'inverted')}
  }
`
