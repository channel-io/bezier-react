/* External dependencies */
import {
  getWindow,
  getDocument,
} from 'ssr-window'

export const document = getDocument()

export const window = getWindow()

export const getRootElement = () =>
  document.getElementById!('main') ||
  document.getElementById!('root') ||
  document.getElementById!('__next') as HTMLElement

export const ariaAttr = (condition?: boolean) => (condition ? true : undefined)
