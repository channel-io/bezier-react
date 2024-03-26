import classNames from 'classnames'

import {
  type FormFieldSize,
  type LayoutProps,
  type MarginProps,
} from '~/src/types/props'
import { type Elevation, type Radius, type ZIndex } from '~/src/types/tokens'
import { cssDimension, tokenCssVar } from '~/src/utils/style'

// NOTE: 'typescript-plugin-css-modules' does not support path alias
/* eslint-disable no-restricted-imports */
import elevationStyles from '../styles/components/elevation.module.scss'
import formFieldSizeStyles from '../styles/components/form-field-size.module.scss'
import layoutStyles from '../styles/components/layout.module.scss'
import marginStyles from '../styles/components/margin.module.scss'
import radiusStyles from '../styles/components/radius.module.scss'
import zIndexStyles from '../styles/components/z-index.module.scss'
/* eslint-enable no-restricted-imports */

export const splitByMarginProps = <Props extends MarginProps>({
  margin,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  ...rest
}: Props): [MarginProps, Omit<Props, keyof MarginProps>] => [
  {
    margin,
    marginHorizontal,
    marginVertical,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  },
  rest,
]

export const splitByLayoutProps = <Props extends LayoutProps>({
  padding,
  paddingHorizontal,
  paddingVertical,
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
    paddingHorizontal,
    paddingVertical,
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

function getElevationClassName(elevation: Elevation) {
  return elevationStyles[`elevation-${elevation}`]
}

function getRadiusClassName(radius: Radius) {
  return radiusStyles[`radius-${radius}`]
}

export function getZIndexClassName(zIndex: ZIndex) {
  return zIndexStyles[`z-index-${zIndex}`]
}

export const getMarginStyles = ({
  margin,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: MarginProps) => ({
  style: {
    '--b-margin': cssDimension(margin),
    '--b-margin-horizontal': cssDimension(marginHorizontal),
    '--b-margin-vertical': cssDimension(marginVertical),
    '--b-margin-top': cssDimension(marginTop),
    '--b-margin-right': cssDimension(marginRight),
    '--b-margin-bottom': cssDimension(marginBottom),
    '--b-margin-left': cssDimension(marginLeft),
  },
  className: marginStyles.margin,
})

export const getLayoutStyles = ({
  padding,
  paddingHorizontal,
  paddingVertical,
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
}: LayoutProps) => ({
  style: {
    '--b-padding': cssDimension(padding),
    '--b-padding-horizontal': cssDimension(paddingHorizontal),
    '--b-padding-vertical': cssDimension(paddingVertical),
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
    '--b-background-color': tokenCssVar(backgroundColor),
    '--b-border-color': tokenCssVar(borderColor),
    '--b-border-width': cssDimension(borderWidth),
    '--b-border-top-width': cssDimension(borderTopWidth),
    '--b-border-right-width': cssDimension(borderRightWidth),
    '--b-border-bottom-width': cssDimension(borderBottomWidth),
    '--b-border-left-width': cssDimension(borderLeftWidth),
  },
  className: classNames(
    layoutStyles.layout,
    position && layoutStyles[`position-${position}`],
    overflow && layoutStyles[`overflow-${overflow}`],
    overflowX && layoutStyles[`overflow-x-${overflowX}`],
    overflowY && layoutStyles[`overflow-y-${overflowY}`],
    elevation && getElevationClassName(elevation),
    borderRadius && getRadiusClassName(borderRadius),
    zIndex && getZIndexClassName(zIndex)
  ),
})

export function getFormFieldSizeClassName(size: FormFieldSize) {
  return formFieldSizeStyles[`size-${size}`]
}
