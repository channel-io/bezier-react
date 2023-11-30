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
  matcher: ({ attributes: { category, type } = {} }) =>
    category === 'font' && (type === 'size' || type === 'lineHeight'),
  transformer: ({ value }: { value: string }, options) =>
    `${parseFloat(extractNumber(value) ?? '') / ((options && options.basePxFontSize) || 16)}rem`,
}

export const customFontFamily: CustomTransform = {
  name: 'custom/font/family',
  type: 'value',
  transitive: true,
  matcher: ({ attributes: { category, type } = {} }) =>
    category === 'font' && type === 'family',
  transformer: ({ value }: { value: string[] }) =>
    /**
     * @see {@link https://stackoverflow.com/questions/13751412/why-would-font-names-need-quotes}
     */
    value.map((fontFamily) => `'${fontFamily}'`).join(', '),
}

export const customCubicBezier: CustomTransform = {
  name: 'custom/cubicBezier',
  type: 'value',
  transitive: true,
  matcher: ({ attributes: { category } = {} }) =>
    category === 'cubicBezier',
  transformer: ({ value: [x1, y1, x2, y2] }: { value: [number, number, number, number] }) =>
    `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`,
}
