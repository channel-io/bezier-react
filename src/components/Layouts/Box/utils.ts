/* External dependencies */
import { CSSObject } from 'styled-components'
import { isNil, isNumber, isString, omit } from 'lodash-es'

/* Internal dependencies */
import { Foundation } from 'Foundation'
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import { BoxProps } from './Box.types'

const bezierPropKeys: Array<keyof BezierComponentProps | keyof ChildrenProps | 'data-testid'> = [
  'as',
  'data-testid',
  'className',
  'children',
]

const customStylePropKeys: Array<keyof BoxProps> = [
  'p',
  'pv',
  'paddingVertical',
  'ph',
  'paddingHorizontal',
  'pt',
  'pr',
  'pb',
  'pl',
  'm',
  'mv',
  'marginVertical',
  'mh',
  'marginHorizontal',
  'mt',
  'mr',
  'mb',
  'ml',
  'w',
  'width',
  'maxW',
  'minW',
  'h',
  'height',
  'maxH',
  'minH',
  'bg',
  'backgroundColor',
  'color',
  'typo',
  'bold',
  'italic',
  'truncated',
]

const omittedPropKeys = [...bezierPropKeys, ...customStylePropKeys]

/**
 * @link https://styled-components.com/docs/advanced#style-objects
 * @description Style Objects로 prop을 전달받으면서 불필요한 prop도 함께 섞여 들어옵니다. 이를 삭제합니다.
 */
export function sanitizeInvalidCSSProps(props: CSSObject) {
  return omit(props, omittedPropKeys)
}

export function convertColorProps(foundation?: Foundation, ...values: unknown[]) {
  for (const index in values) {
    if (Object.prototype.hasOwnProperty.call(values, index)) {
      const eachValue = values[index]
      if (!isNil(eachValue)) {
        if (isString(eachValue)) {
          return foundation?.theme?.[eachValue] ?? eachValue
        }
      }
    }
  }
  return undefined
}

export function convertSizingProps(foundation?: Foundation, ...values: unknown[]) {
  for (const index in values) {
    if (Object.prototype.hasOwnProperty.call(values, index)) {
      const eachValue = values[index]
      if (!isNil(eachValue)) {
        if (isNumber(eachValue)) {
          return eachValue === 0 ? eachValue : `${eachValue}px`
        }
        if (isString(eachValue)) {
          return foundation?.spacing?.[eachValue] ?? eachValue
        }
      }
    }
  }
  return undefined
}
