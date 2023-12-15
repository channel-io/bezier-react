import {
  type BezierComponentProps,
  type LayoutProps,
  type MarginProps,
} from '~/src/types/ComponentProps'
import { TokenPrefix } from '~/src/types/Token'

import { split } from './object'
import {
  cssVarName,
  cssVarValue,
  tokenCssVarValue,
} from './style'

const bezierComponentProps: Array<keyof BezierComponentProps> = [
  'as',
  'testId',
  'style',
  'className',
  'interpolation',
]

const marginProps: Array<keyof MarginProps> = [
  'm',
  'mx',
  'my',
  'mt',
  'mr',
  'mb',
  'ml',
]

const layoutProps: Array<keyof LayoutProps> = [
  'p',
  'px',
  'py',
  'pt',
  'pr',
  'pb',
  'pl',
  'width',
  'height',
  'maxWidth',
  'minWidth',
  'maxHeight',
  'minHeight',
  'position',
  'inset',
  'top',
  'right',
  'bottom',
  'left',
  'shrink',
  'grow',
  'bgColor',
  'borderColor',
  'borderRadius',
  'borderWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderStyle',
  'elevation',
  'zIndex',
  'overflow',
  'overflowX',
  'overflowY',
]

export const splitByBezierComponentProps = <Props extends BezierComponentProps>(props: Props) =>
  split(props, bezierComponentProps)

export const splitByMarginProps = <Props extends MarginProps>(props: Props) =>
  split(props, marginProps)

export const splitByLayoutProps = <Props extends LayoutProps>(props: Props) =>
  split(props, layoutProps)

const cv = cssVarName()

export function getMarginStyle<Props extends MarginProps>(props: Props) {
  const { m, mx, my, mt, mr, mb, ml } = props
  return {
    [cv('margin-all')]: m,
    [cv('margin-x')]: mx,
    [cv('margin-y')]: my,
    [cv('margin-top')]: mt,
    [cv('margin-right')]: mr,
    [cv('margin-bottom')]: mb,
    [cv('margin-left')]: ml,
  }
}

export function getLayoutStyle<Props extends LayoutProps>(props: Props) {
  const {
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
    bgColor,
    borderColor,
    borderRadius,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderStyle,
    elevation,
    zIndex,
    overflow,
    overflowX,
    overflowY,
  } = props
  return {
    [cv('padding-all')]: p,
    [cv('padding-x')]: px,
    [cv('padding-y')]: py,
    [cv('padding-top')]: pt,
    [cv('padding-right')]: pr,
    [cv('padding-bottom')]: pb,
    [cv('padding-left')]: pl,
    [cv('width')]: width,
    [cv('height')]: height,
    [cv('max-width')]: maxWidth,
    [cv('min-width')]: minWidth,
    [cv('max-height')]: maxHeight,
    [cv('min-height')]: minHeight,
    [cv('position')]: position,
    [cv('inset')]: inset,
    [cv('top')]: top,
    [cv('right')]: right,
    [cv('bottom')]: bottom,
    [cv('left')]: left,
    [cv('shrink')]: shrink,
    [cv('grow')]: grow,
    [cv('bg-color')]: cssVarValue(bgColor),
    [cv('border-color')]: cssVarValue(borderColor),
    [cv('border-radius')]: tokenCssVarValue(borderRadius && `${TokenPrefix.Radius}-${borderRadius}`),
    [cv('border-width')]: borderWidth,
    [cv('border-top-width')]: borderTopWidth,
    [cv('border-right-width')]: borderRightWidth,
    [cv('border-bottom-width')]: borderBottomWidth,
    [cv('border-left-width')]: borderLeftWidth,
    [cv('border-style')]: borderStyle,
    [cv('elevation')]: tokenCssVarValue(elevation && `${TokenPrefix.Elevation}-${elevation}`),
    [cv('z-index')]: tokenCssVarValue(zIndex && `${TokenPrefix.ZIndex}-${zIndex}`),
    [cv('overflow')]: overflow,
    [cv('overflow-x')]: overflowX,
    [cv('overflow-y')]: overflowY,
  }
}
