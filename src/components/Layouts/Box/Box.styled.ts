/* External dependencies */
import { CSSObject } from 'styled-components'

/* Internal dependencies */
import { styled } from 'Foundation'
import { sanitizeInvalidCSSProps, convertColorProps, convertSizingProps } from './utils'
import { BoxProps } from './Box.types'

// NOTE(@ed): Style Object를 받는 방식으로만 구현 시, Interpolation을 적용하기 어려워 styled HOC를 사용하여 한 번 더 extend 했습니다.
const BaseBox = styled.div<CSSObject>(sanitizeInvalidCSSProps)

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
