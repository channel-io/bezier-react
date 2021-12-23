/* External dependencies */
import { CSSObject } from 'styled-components'
import { isNil, isNumber, isString, omit } from 'lodash-es'

/* Internal dependencies */
import { Foundation } from 'Foundation'
import { formatCSSNumber } from 'Utils/styleUtils'
import { omittedPropKeys } from './const'

/**
 * @link https://styled-components.com/docs/advanced#style-objects
 * @description Style Objects로 prop을 전달받으면서 불필요한 prop도 함께 섞여 들어옵니다. 이를 삭제합니다.
 */
export function getSanitizedCSSObject(props: CSSObject) {
  return omit(props, omittedPropKeys)
}

export function convertThemeProps(foundation?: Foundation, ...values: unknown[]) {
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

export function convertSpacingProps(foundation?: Foundation, ...values: unknown[]) {
  for (const index in values) {
    if (Object.prototype.hasOwnProperty.call(values, index)) {
      const eachValue = values[index]
      if (!isNil(eachValue)) {
        if (isNumber(eachValue)) {
          return formatCSSNumber(eachValue)
        }
        if (isString(eachValue)) {
          return foundation?.spacing?.[eachValue] ?? eachValue
        }
      }
    }
  }
  return undefined
}

export function convertSizingProps(...values: unknown[]) {
  for (const index in values) {
    if (Object.prototype.hasOwnProperty.call(values, index)) {
      const eachValue = values[index]
      if (!isNil(eachValue)) {
        if (isNumber(eachValue)) {
          return formatCSSNumber(eachValue)
        }
        // NOTE(@ed): box-sizing 관련 Foundation이 추가된다면, 여기에 추가할 수 있습니다.
        if (isString(eachValue)) {
          return eachValue
        }
      }
    }
  }
  return undefined
}
