import type {
  Named,
  Transform,
} from 'style-dictionary'

import { extractNumber } from './utils'

type CustomTransform = Named<Transform<unknown>>

export const customFontRem: CustomTransform = {
  name: 'custom/font/rem',
  type: 'value',
  transitive: true,
  matcher(token) {
    const { attributes: { category, type } = {} } = token
    return category === 'font' && (type === 'size' || type === 'lineHeight')
  },
  transformer(token, options) {
    return `${parseFloat(extractNumber(token.value) ?? '') / ((options && options.basePxFontSize) || 16)}rem`
  },
}

