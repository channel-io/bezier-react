import { type AnyStyledComponent } from 'styled-components'

import { isEmpty } from '~/src/utils/typeUtils'

import { createGlobalStyle } from './FoundationStyledComponent'

type ThemeRecord = Record<string, string>

export interface ThemeVarsAdditionalType {
  scope?: AnyStyledComponent | string
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
  ${({ scope }) => scope ?? ':root, :host'} {
    ${({ foundation }) => generateCSSVar(foundation?.theme)}
    ${({ foundation }) => generateCSSVar(foundation?.subTheme, 'inverted')}
  }
`
