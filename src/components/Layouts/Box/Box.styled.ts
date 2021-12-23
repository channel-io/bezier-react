/* External dependencies */
import { CSSObject } from 'styled-components'

/* Internal dependencies */
import { styled, css } from 'Foundation'
import { getSanitizedCSSObject, convertColorProps, convertSizingProps } from './utils'
import { BoxProps } from './Box.types'

// NOTE(@ed): Style Object를 받는 방식으로만 구현 시, Interpolation을 적용하기 어려워 styled HOC를 사용하여 한 번 더 extend 했습니다.
const BaseBox = styled.div<CSSObject>(getSanitizedCSSObject)

export const Box = styled<(props: BoxProps) => React.ReactElement>(BaseBox)`
  /* Position */
  ${({
    foundation,
    t,
    top,
    r,
    right,
    b,
    bottom,
    l,
    left,
  }) => css`
    top: ${convertSizingProps(foundation, t, top)};
    right: ${convertSizingProps(foundation, r, right)};
    bottom: ${convertSizingProps(foundation, b, bottom)};
    left: ${convertSizingProps(foundation, l, left)};
  `}

  /* Padding */
  ${({
    foundation,
    p,
    padding,
    pv,
    paddingVertical,
    ph,
    paddingHorizontal,
    pt,
    paddingTop,
    pr,
    paddingRight,
    pb,
    paddingBottom,
    pl,
    paddingLeft,
  }) => css`
    padding-top: ${convertSizingProps(foundation, pt, paddingTop, ph, paddingHorizontal, p, padding)};
    padding-right: ${convertSizingProps(foundation, pr, paddingRight, pv, paddingVertical, p, padding)};
    padding-bottom: ${convertSizingProps(foundation, pb, paddingBottom, ph, paddingHorizontal, p, padding)};
    padding-left: ${convertSizingProps(foundation, pl, paddingLeft, pv, paddingVertical, p, padding)};
  `}

  /* Margin */
  ${({
    foundation,
    m,
    margin,
    mv,
    marginVertical,
    mh,
    marginHorizontal,
    mt,
    marginTop,
    mr,
    marginRight,
    mb,
    marginBottom,
    ml,
    marginLeft,
  }) => css`
    margin-top: ${convertSizingProps(foundation, mt, marginTop, mh, marginHorizontal, m, margin)};
    margin-right: ${convertSizingProps(foundation, mr, marginRight, mv, marginVertical, m, margin)};
    margin-bottom: ${convertSizingProps(foundation, mb, marginBottom, mh, marginHorizontal, m, margin)};
    margin-left: ${convertSizingProps(foundation, ml, marginLeft, mv, marginVertical, m, margin)};
  `}

  /* Width & Height */
  ${({
    foundation,
    w,
    width,
    maxW,
    maxWidth,
    minW,
    minWidth,
    h,
    height,
    maxH,
    maxHeight,
    minH,
    minHeight,
  }) => css`
    width: ${convertSizingProps(foundation, w, width)};
    max-width: ${convertSizingProps(foundation, maxW, maxWidth)};
    min-width: ${convertSizingProps(foundation, minW, minWidth)};
    height: ${convertSizingProps(foundation, h, height)};
    max-height: ${convertSizingProps(foundation, maxH, maxHeight)};
    min-height: ${convertSizingProps(foundation, minH, minHeight)};
  `}

  /* Color */
  ${({
    foundation,
    bg,
    backgroundColor,
    color,
  }) => css`
    background-color: ${convertColorProps(foundation, bg, backgroundColor)};
    color: ${convertColorProps(foundation, color)};
  `}

  /* Font */
  ${({
    typo,
    bold,
    italic,
  }) => css`
    ${typo}
    font-style: ${italic ? 'italic' : 'normal'};
    font-weight: ${bold ? 'bold' : 'normal'};
  `}

  /* Interpolation */
  ${({ interpolation }) => interpolation}
`
