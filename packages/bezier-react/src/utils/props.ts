import classNames from 'classnames'

import {
  type BezierComponentProps,
  type LayoutProps,
  type MarginProps,
} from '~/src/types/ComponentProps'
import { TokenPrefix } from '~/src/types/Token'

// NOTE: 'typescript-plugin-css-modules' does not support path alias
/* eslint-disable no-restricted-imports */
import layoutStyles from '../styles/components/layout.module.scss'
import marginStyles from '../styles/components/margin.module.scss'
/* eslint-enable no-restricted-imports */

import {
  cssDimension,
  cssVar,
  tokenCssVar,
} from './style'
import { isNumber } from './type'

export const splitByBezierComponentProps = <
  Props extends BezierComponentProps,
>({
    as,
    testId,
    style,
    className,
    interpolation,
    ...rest
  }: Props): [BezierComponentProps, Omit<Props, keyof BezierComponentProps>] => [
    {
      as,
      testId,
      style,
      className,
      interpolation,
    },
    rest,
  ]

export const splitByMarginProps = <Props extends MarginProps>({
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  ...rest
}: Props): [MarginProps, Omit<Props, keyof MarginProps>] => [
    {
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
    },
    rest,
  ]

export const splitByLayoutProps = <Props extends LayoutProps>({
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  width,
  height,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  position,
  inset,
  top,
  right,
  bottom,
  left,
  shrink,
  grow,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  elevation,
  zIndex,
  overflow,
  overflowX,
  overflowY,
  ...rest
}: Props): [LayoutProps, Omit<Props, keyof LayoutProps>] => [
    {
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      width,
      height,
      maxWidth,
      minWidth,
      maxHeight,
      minHeight,
      position,
      inset,
      top,
      right,
      bottom,
      left,
      shrink,
      grow,
      backgroundColor,
      borderColor,
      borderRadius,
      borderWidth,
      borderTopWidth,
      borderRightWidth,
      borderBottomWidth,
      borderLeftWidth,
      elevation,
      zIndex,
      overflow,
      overflowX,
      overflowY,
    },
    rest,
  ]

export const getMarginStyles = ({
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
}: MarginProps) => (
  {
    style: {
      '--b-margin': cssDimension(m),
      '--b-margin-x': cssDimension(mx),
      '--b-margin-y': cssDimension(my),
      '--b-margin-top': cssDimension(mt),
      '--b-margin-right': cssDimension(mr),
      '--b-margin-bottom': cssDimension(mb),
      '--b-margin-left': cssDimension(ml),
    },
    className: marginStyles.margin,
  }
)

export const getLayoutStyles = ({
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  width,
  height,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  position,
  inset,
  top,
  right,
  bottom,
  left,
  shrink,
  grow,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  elevation,
  zIndex,
  overflow,
  overflowX,
  overflowY,
}: LayoutProps) => (
  {
    style: {
      '--b-padding': cssDimension(p),
      '--b-padding-x': cssDimension(px),
      '--b-padding-y': cssDimension(py),
      '--b-padding-top': cssDimension(pt),
      '--b-padding-right': cssDimension(pr),
      '--b-padding-bottom': cssDimension(pb),
      '--b-padding-left': cssDimension(pl),
      '--b-width': cssDimension(width),
      '--b-height': cssDimension(height),
      '--b-max-width': cssDimension(maxWidth),
      '--b-min-width': cssDimension(minWidth),
      '--b-max-height': cssDimension(maxHeight),
      '--b-min-height': cssDimension(minHeight),
      '--b-inset': cssDimension(inset),
      '--b-top': cssDimension(top),
      '--b-right': cssDimension(right),
      '--b-bottom': cssDimension(bottom),
      '--b-left': cssDimension(left),
      '--b-background-color': cssVar(backgroundColor),
      '--b-border-color': cssVar(borderColor),
      '--b-border-radius': tokenCssVar(borderRadius && `${TokenPrefix.Radius}-${borderRadius}`),
      '--b-border-width': cssDimension(borderWidth),
      '--b-border-top-width': cssDimension(borderTopWidth),
      '--b-border-right-width': cssDimension(borderRightWidth),
      '--b-border-bottom-width': cssDimension(borderBottomWidth),
      '--b-border-left-width': cssDimension(borderLeftWidth),
      '--b-elevation': tokenCssVar(elevation && `${TokenPrefix.Elevation}-${elevation}`),
      '--b-z-index': tokenCssVar(zIndex && `${TokenPrefix.ZIndex}-${zIndex}`),
    },
    className: classNames(
      layoutStyles.layout,
      position && layoutStyles[`position-${position}`],
      isNumber(shrink) && layoutStyles[`shrink-${shrink}`],
      isNumber(grow) && layoutStyles[`grow-${grow}`],
      overflow && layoutStyles[`overflow-${overflow}`],
      overflowX && layoutStyles[`overflow-x-${overflowX}`],
      overflowY && layoutStyles[`overflow-y-${overflowY}`],
    ),
  }
)
