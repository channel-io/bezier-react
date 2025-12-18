import type { Named, Transform } from 'style-dictionary'

import { extractNumber, toCSSDimension, toPx } from './utils'

type CustomTransform = Named<Transform<unknown>>
type Transforms = Record<string, CustomTransform>

export const CSSTransforms = {
  alphaNamespace: {
    name: 'custom/alpha/namespace',
    type: 'name',
    matcher: (token) => token.filePath.startsWith('src/alpha/'),
    transformer: ({ name }) => `alpha-${name}`,
  },
  betaNamespace: {
    name: 'custom/beta/namespace',
    type: 'name',
    matcher: (token) => token.filePath.startsWith('src/beta/'),
    transformer: ({ name }) => `beta-${name}`,
  },
  removeNormalSuffix: {
    name: 'custom/remove-normal-suffix',
    type: 'name',
    matcher: (token) => {
      /** TODO: Remove beta condition in the next major release. */
      if (!token.filePath.startsWith('src/beta/')) {
        return false
      }
      const path = token.path || []
      const lastSegment = path[path.length - 1]
      return lastSegment === 'normal' && path.length > 1
    },
    transformer: ({ name }) => {
      return name.replace(/-normal$/, '')
    },
  },
  dimensionPx: {
    name: 'custom/css/dimension/beta-px',
    type: 'value',
    transitive: true,
    matcher: (token) =>
      /** TODO: Remove beta condition in the next major release. */
      token.type === 'dimension' && token.filePath.startsWith('src/beta/'),
    transformer: ({ value }) => {
      if (typeof value !== 'string') {
        return value as string
      }
      const trimmed = value.trim()
      if (/^-?(?:0|0\.0+)?$/.test(trimmed)) {
        return '0'
      }
      return toPx(trimmed)
    },
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
