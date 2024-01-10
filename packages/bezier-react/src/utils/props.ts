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
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  ...rest
}: Props): [MarginProps, Omit<Props, keyof MarginProps>] => [
    {
      margin,
      marginX,
      marginY,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
    },
    rest,
  ]

export const splitByLayoutProps = <Props extends LayoutProps>({
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
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
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
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
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: MarginProps) => (
  {
    style: {
      '--b-margin': cssDimension(margin),
      '--b-margin-x': cssDimension(marginX),
      '--b-margin-y': cssDimension(marginY),
      '--b-margin-top': cssDimension(marginTop),
      '--b-margin-right': cssDimension(marginRight),
      '--b-margin-bottom': cssDimension(marginBottom),
      '--b-margin-left': cssDimension(marginLeft),
    },
    className: marginStyles.margin,
  }
)

export const getLayoutStyles = ({
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
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
      '--b-padding': cssDimension(padding),
      '--b-padding-x': cssDimension(paddingX),
      '--b-padding-y': cssDimension(paddingY),
      '--b-padding-top': cssDimension(paddingTop),
      '--b-padding-right': cssDimension(paddingRight),
      '--b-padding-bottom': cssDimension(paddingBottom),
      '--b-padding-left': cssDimension(paddingLeft),
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
      '--b-shrink': shrink,
      '--b-grow': grow,
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
      overflow && layoutStyles[`overflow-${overflow}`],
      overflowX && layoutStyles[`overflow-x-${overflowX}`],
      overflowY && layoutStyles[`overflow-y-${overflowY}`],
    ),
  }
)
