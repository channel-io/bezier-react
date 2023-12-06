import type {
  Named,
  Transform,
} from 'style-dictionary'

import {
  extractNumber,
  toCSSDimension,
} from './utils'

type CustomTransform = Named<Transform<unknown>>

export const customFontRem: CustomTransform = {
  name: 'custom/font/rem',
  type: 'value',
  transitive: true,
  matcher: ({ attributes: { category, type } = {} }) =>
    category === 'font' && (type === 'size' || type === 'line-height'),
  transformer: ({ value }: { value: string }, options) =>
    `${
      parseFloat(extractNumber(value) ?? '') /
      ((options && options.basePxFontSize) || 16)
    }rem`,
}

export const customFontFamily: CustomTransform = {
  name: 'custom/font/family',
  type: 'value',
  transitive: true,
  matcher: ({ $type }) => $type === 'fontFamily',
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
  matcher: ({ $type }) => $type === 'cubicBezier',
  transformer: ({
    value: [x1, y1, x2, y2],
  }: {
    value: [number, number, number, number]
  }) => `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`,
}

export const customShadow: CustomTransform = {
  name: 'custom/css/shadow',
  type: 'value',
  transitive: true,
  matcher: ({ type }) => type === 'shadow',
  transformer: ({ value }) => {
    function transform(shadow?: {
      offsetX?: string
      offsetY?: string
      blur?: string
      spread?: string
      color?: string
      type?: string
    }) {
      if (typeof shadow !== 'object') {
        return shadow
      }
      const { offsetX, offsetY, blur, spread } = shadow
      const { color, type } = shadow
      return `${type === 'innerShadow' ? 'inset ' : ''}${
        offsetX ? toCSSDimension(offsetX) : 0
      } ${offsetY ? toCSSDimension(offsetY) : 0} ${
        blur ? toCSSDimension(blur) : 0
      }${spread ? ` ${toCSSDimension(spread)} ` : ' '}${
        color || 'rgba(0, 0, 0, 1)'
      }`.trim()
    }

    return Array.isArray(value)
      ? value.map((v) => transform(v)).join(', ')
      : transform(value)
  },
}
