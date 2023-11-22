import type {
  Named,
  Transform,
} from 'style-dictionary'

type CustomTransform = Named<Transform<unknown>>

export const customFontPxToRem: CustomTransform = {
  name: 'custom/font/pxToRem',
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
