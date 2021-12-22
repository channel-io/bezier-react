/* External dependencies */
import { CSSObject } from 'styled-components'
import { isNil, isNumber, isString, omit } from 'lodash-es'

/* Internal dependencies */
import { styled, Foundation } from 'Foundation'
import { BoxProps } from './Box.types'

const customProps: Array<keyof BoxProps | 'data-testid'> = [
  // Bezier Props
  'as',
  'data-testid',
  'className',
  'children',
  // Custom Style Props
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

function convertColorProps(foundation?: Foundation, ...values: unknown[]) {
  for (const index in values) {
    if (Object.prototype.hasOwnProperty.call(values, index)) {
      const eachValue = values[index]
      if (!isNil(eachValue)) {
        if (isNumber(eachValue)) { return eachValue }
        if (isString(eachValue)) { return foundation?.theme?.[eachValue] ?? eachValue }
      }
    }
  }
  return undefined
}

function convertSizingProps(foundation?: Foundation, ...values: unknown[]) {
  for (const index in values) {
    if (Object.prototype.hasOwnProperty.call(values, index)) {
      const eachValue = values[index]
      if (!isNil(eachValue)) {
        if (isNumber(eachValue)) { return eachValue }
        if (isString(eachValue)) { return foundation?.spacing?.[eachValue] ?? eachValue }
      }
    }
  }
  return undefined
}

/** NOTE(@ed):
 * - cf. https://styled-components.com/docs/advanced#style-objects
 * - Style Objects를 받는 방식으로만 구현 시, Interpolation을 적용하기 어려워 styled HOC를 사용하여 한 번 더 extend 했습니다.
 * - Style Objects로 prop을 전달받으면서 불필요한 prop도 함께 섞여들어옵니다. 이를 삭제합니다.
 */
const BaseBox = styled.div<CSSObject>(props => omit(props, customProps))

export const Box = styled<(props: BoxProps) => React.ReactElement>(BaseBox)`
  /* Margin */
  margin-top: ${({ foundation, mt, mh, m }) => convertSizingProps(foundation, mt, mh, m)};
  margin-right: ${({ foundation, mr, mv, m }) => convertSizingProps(foundation, mr, mv, m)};
  margin-bottom: ${({ foundation, mb, mh, m }) => convertSizingProps(foundation, mb, mh, m)};
  margin-left: ${({ foundation, ml, mv, m }) => convertSizingProps(foundation, ml, mv, m)};

  /* Padding */
  padding-top: ${({ foundation, pt, ph, p }) => convertSizingProps(foundation, pt, ph, p)};
  padding-right: ${({ foundation, pr, pv, p }) => convertSizingProps(foundation, pr, pv, p)};
  padding-bottom: ${({ foundation, pb, ph, p }) => convertSizingProps(foundation, pb, ph, p)};
  padding-left: ${({ foundation, pl, pv, p }) => convertSizingProps(foundation, pl, pv, p)};

  /* Width & Height */
  width: ${({ foundation, w, width }) => convertSizingProps(foundation, w, width)};
  max-width: ${({ foundation, maxW }) => convertSizingProps(foundation, maxW)};
  min-width: ${({ foundation, minW }) => convertSizingProps(foundation, minW)};
  height: ${({ foundation, h, height }) => convertSizingProps(foundation, h, height)};
  max-height: ${({ foundation, maxH }) => convertSizingProps(foundation, maxH)};
  min-height: ${({ foundation, minH }) => convertSizingProps(foundation, minH)};

  /* Color */
  background-color: ${({ foundation, bg, backgroundColor }) => convertColorProps(foundation, bg, backgroundColor)};
  color: ${({ foundation, color }) => convertColorProps(foundation, color)};

  /* Font */
  ${({ typo }) => typo}
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};

  /* Interpolation */
  ${({ interpolation }) => interpolation}
`
