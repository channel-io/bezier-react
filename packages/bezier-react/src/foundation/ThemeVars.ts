/* External dependencies */
import { type AnyStyledComponent } from 'styled-components'

/* Internal dependencies */
import { isEmpty } from '~/src/utils/typeUtils'
import { createGlobalStyle } from './FoundationStyledComponent'

type ThemeRecord = Record<string, string>

export interface ThemeVarsAdditionalType {
  scope?: AnyStyledComponent
}

function generateCSSVar(theme?: ThemeRecord, prefix?: string) {
  if (!theme) { return undefined }
  const prefixString = !isEmpty(prefix) ? `${prefix}-` : ''
  return Object.entries(theme).reduce((varObj, [key, color]) => ({
    ...varObj,
    [`--${prefixString}${key}`]: color,
  }), {} as ThemeRecord)
}

export const ThemeVars = createGlobalStyle<ThemeVarsAdditionalType>`
  ${({ scope }) => scope ?? ':root'} {
    ${({ foundation }) => generateCSSVar(foundation?.theme)}
    ${({ foundation }) => generateCSSVar(foundation?.subTheme, 'inverted')}
  }
`
