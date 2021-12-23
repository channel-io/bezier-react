/* External dependencies */
import { CSSObject } from 'styled-components'

/* Internal dependencies */
import { styled, css } from 'Foundation'
import {
  getSanitizedCSSObject,
  convertThemeProps,
  convertSpacingProps,
  convertSizingProps,
} from './utils'
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
    top: ${convertSpacingProps(foundation, t, top)};
    right: ${convertSpacingProps(foundation, r, right)};
    bottom: ${convertSpacingProps(foundation, b, bottom)};
    left: ${convertSpacingProps(foundation, l, left)};
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
    padding-top: ${convertSpacingProps(foundation, pt, paddingTop, ph, paddingHorizontal, p, padding)};
    padding-right: ${convertSpacingProps(foundation, pr, paddingRight, pv, paddingVertical, p, padding)};
    padding-bottom: ${convertSpacingProps(foundation, pb, paddingBottom, ph, paddingHorizontal, p, padding)};
    padding-left: ${convertSpacingProps(foundation, pl, paddingLeft, pv, paddingVertical, p, padding)};
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
    margin-top: ${convertSpacingProps(foundation, mt, marginTop, mh, marginHorizontal, m, margin)};
    margin-right: ${convertSpacingProps(foundation, mr, marginRight, mv, marginVertical, m, margin)};
    margin-bottom: ${convertSpacingProps(foundation, mb, marginBottom, mh, marginHorizontal, m, margin)};
    margin-left: ${convertSpacingProps(foundation, ml, marginLeft, mv, marginVertical, m, margin)};
  `}

  /* Width & Height */
  ${({
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
    width: ${convertSizingProps(w, width)};
    max-width: ${convertSizingProps(maxW, maxWidth)};
    min-width: ${convertSizingProps(minW, minWidth)};
    height: ${convertSizingProps(h, height)};
    max-height: ${convertSizingProps(maxH, maxHeight)};
    min-height: ${convertSizingProps(minH, minHeight)};
  `}

  /* Color */
  ${({
    foundation,
    bg,
    backgroundColor,
    color,
  }) => css`
    background-color: ${convertThemeProps(foundation, bg, backgroundColor)};
    color: ${convertThemeProps(foundation, color)};
  `}

  /* Font */
  ${({
    typo,
    bold,
    italic,
  }) => css`
    ${typo}
    ${bold && css`font-weight: bold;`}
    ${italic && css`font-style: italic;`}
  `}

  /* Interpolation */
  ${({ interpolation }) => interpolation}
`
