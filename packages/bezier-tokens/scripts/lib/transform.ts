import type { Named, Transform } from 'style-dictionary'
import tinycolor from 'tinycolor2'

import { extractNumber, toCSSDimension } from './utils'

type CustomTransform = Named<Transform<unknown>>
type Transforms = Record<string, CustomTransform>

export const CSSTransforms = {
  alphaNamespace: {
    name: 'custom/alpha/namespace',
    type: 'name',
    matcher: (token) => token.filePath.startsWith('src/alpha'),
    transformer: ({ name }) => `alpha-${name}`,
  },
  fontRem: {
    name: 'custom/css/font/rem',
    type: 'value',
    transitive: true,
    matcher: (token) =>
      token.attributes?.category === 'font' && token.type === 'dimension',
    transformer: ({ value }: { value: string }, options) =>
      `${parseFloat(extractNumber(value) ?? '') / ((options && options.basePxFontSize) || 16)}rem`,
  },
  fontFamily: {
    name: 'custom/css/font/family',
    type: 'value',
    transitive: true,
    matcher: (token) => token.type === 'fontFamily',
    transformer: ({ value }: { value: string[] }) =>
      /**
       * @see {@link https://stackoverflow.com/questions/13751412/why-would-font-names-need-quotes}
       */
      value.map((fontFamily) => `'${fontFamily}'`).join(', '),
  },
  cubicBezier: {
    name: 'custom/css/cubicBezier',
    type: 'value',
    transitive: true,
    matcher: (token) => token.type === 'cubicBezier',
    transformer: ({
      value: [x1, y1, x2, y2],
    }: {
      value: [number, number, number, number]
    }) => `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`,
  },
  shadow: {
    name: 'custom/css/shadow',
    type: 'value',
    transitive: true,
    matcher: (token) => token.type === 'shadow',
    transformer: ({ value }) => {
      function transform(shadow?: {
        offsetX?: string
        offsetY?: string
        blur?: string
        spread?: string
        color: string
        type: 'dropShadow' | 'innerShadow'
      }) {
        if (typeof shadow !== 'object') {
          return shadow
        }
        const { offsetX, offsetY, blur, spread, color, type } = shadow
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
  },
  transition: {
    name: 'custom/css/transition',
    type: 'value',
    transitive: true,
    matcher: (token) => token.type === 'transition',
    transformer: ({
      value: { duration, timingFunction, delay },
    }: {
      value: {
        duration: string
        timingFunction?: string
        delay?: string
      }
    }) => `${duration} ${timingFunction || ''}${delay || ''}`.trim(),
  },
  gradient: {
    name: 'custom/css/gradient',
    type: 'value',
    transitive: true,
    matcher: (token) => token.type === 'gradient',
    transformer: ({
      value,
    }: {
      value: Array<{ color: string; position: string }>
    }) =>
      `linear-gradient(90deg, ${value
        .map(({ color, position }) => `${color} ${position}`)
        .join(', ')})`,
  },
} satisfies Transforms

export const HoveredColorTransforms = {
  nameTransform: {
    name: 'custom/css/hovered',
    type: 'name',
    matcher: ({ type, filePath }) =>
      filePath.startsWith('src/alpha') && type === 'color',
    transformer: ({ name, filePath }) => {
      return filePath.includes('functional')
        ? `alpha-${name}-hovered`
        : `alpha-${name}`
    },
  },
  makeHoveredColor: {
    name: 'custom/css/hovered-dark',
    type: 'value',
    transitive: true,
    matcher: ({ type, filePath }) =>
      type === 'color' && filePath.includes('functional'),
    transformer: ({ value, filePath }) => {
      return filePath.includes('dark-theme')
        ? getHoveredColor(value, 'dark')
        : getHoveredColor(value, 'light')
    },
  },
} satisfies Transforms

const clip = (value: number) => Math.min(Math.max(value, 0), 1)

function getHoveredColor(value: string, theme: 'dark' | 'light') {
  const color = tinycolor(value)
  const { h, s, l, a } = color.toHsl()

  let alpha = a
  let lightness = l
  let saturation = s

  if (a === 0) {
    alpha = 0.1
  } else if (a < 0.2) {
    alpha = alpha * 1.5
  }

  if (theme === 'light') {
    if (l <= 0.17) {
      lightness = (l + 0.07) * 1.1
      saturation += 0.05
    } else {
      lightness *= 0.93
      saturation -= 0.03
    }
  } else {
    if (l >= 0.83) {
      lightness = (lightness - 0.2) * 0.98
      saturation -= 0.03
    } else {
      lightness = (lightness + 0.04) * 1.005
      saturation += 0.05
    }
  }

  if (s <= 0.1 || s >= 0.9) {
    saturation = s
  }

  const res = tinycolor.fromRatio({
    h,
    s: clip(saturation),
    l: clip(lightness),
    a: clip(alpha),
  })

  return res.toHex8String()
}
