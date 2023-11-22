import type {
  Named,
  Transform,
} from 'style-dictionary'

import { endsWithNumber } from './utils'

type CustomTransform = Named<Transform<unknown>>

export const customFontRem: CustomTransform = {
  name: 'custom/font/rem',
  type: 'value',
  transitive: true,
  matcher(token) {
    const { attributes: { category, type } = {} } = token
    return category === 'font' && (type === 'size' || type === 'line-height')
  },
  transformer(token, options) {
    return `${token.value / ((options && options.basePxFontSize) || 16)}rem`
  },
}

export const customRadiusPx: CustomTransform = {
  name: 'custom/radius/px',
  type: 'value',
  transitive: true,
  matcher(token) {
    const { attributes: { category } = {} } = token
    return category === 'radius'
  },
  transformer(token) {
    return endsWithNumber(token.value) ? `${token.value}px` : token.value
  },
}
