import {
  createElement,
  forwardRef,
} from 'react'

import classNames from 'classnames'

import {
  type LayoutProps,
  type MarginProps,
} from '~/src/types/ComponentProps'
import { TokenPrefix } from '~/src/types/Token'
import {
  splitByLayoutProps,
  splitByMarginProps,
} from '~/src/utils/props'
import {
  cssVarName,
  cssVarValue,
  tokenCssVarValue,
} from '~/src/utils/style'

import sharedStyles from '~/src/components/shared.module.scss'

import { type BoxProps } from './Box.types'

import styles from './Box.module.scss'

const cv = cssVarName()

function getPrefixedClassName<Prop extends string, Prefix extends string>(prop: Prop, prefix: Prefix) {
  return `${prefix}-${prop}` as const
}

function getMarginStyle<Props extends MarginProps>(props: Props) {
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

function getLayoutStyle<Props extends LayoutProps>(props: Props) {
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

export const Box = forwardRef<HTMLElement, BoxProps>(function Box(props, forwardedRef) {
  const [marginProps, withoutMarginProps] = splitByMarginProps(props)
  const [layoutProps, ownProps] = splitByLayoutProps(withoutMarginProps)
  const {
    children,
    style,
    className,
    as = 'div',
    display = 'block',
    ...rest
  } = ownProps

  return createElement(as, {
    ref: forwardedRef,
    style: {
      ...getMarginStyle(marginProps),
      ...getLayoutStyle(layoutProps),
      ...style,
    },
    className: classNames(
      sharedStyles.margin,
      sharedStyles.layout,
      styles.Box,
      styles[getPrefixedClassName(display, 'display')],
      className,
    ),
    ...rest,
  }, children)
})
