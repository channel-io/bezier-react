import {
  getDocument,
  getWindow,
} from 'ssr-window'

export const document = getDocument()

export const window = getWindow()

export const getRootElement = () => document.body

export const ariaAttr = (condition?: boolean) => (condition ? true : undefined)
