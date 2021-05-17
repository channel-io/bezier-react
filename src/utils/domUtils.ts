/* External dependencies */
import { getDocument } from 'ssr-window'

const document = getDocument()

export const rootElement =
  document.getElementById!('main') ||
  document.getElementById!('root') ||
  document.getElementById!('__next') as HTMLElement
