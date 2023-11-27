import React, {
  forwardRef,
  useMemo,
} from 'react'

import {
  FeatureType,
  useFeatureFlag,
} from '~/src/features'
import {
  cssUrl,
  cssVarName,
  cssVarValue,
  px,
} from '~/src/utils/style'

import { type AlphaSmoothCornersBoxProps } from './AlphaSmoothCornersBox.types'

import * as Styled from './AlphaSmoothCornersBox.styled'

const cv = cssVarName('alpha-smooth-corners-box')

/**
 * `AlphaSmoothCornersBox` is a simple `div` element with smooth corners.
 * It is available by enabling the `SmoothCornersFeature`.
 *
 * @example
 *
 * ```tsx
 * <FeatureProvider features={[SmoothCornersFeature]}>
 *   <AlphaSmoothCornersBox />
 * </FeatureProvider>
 * ```
 */
export const AlphaSmoothCornersBox = forwardRef<HTMLElement, AlphaSmoothCornersBoxProps>(function AlphaSmoothCornersBox({
  children,
  disabled,
  borderRadius,
  margin,
  shadow,
  backgroundColor,
  backgroundImage,
  style: styleProp,
  ...rest
}, forwardedRef) {
  const smoothCornersEnabled = useFeatureFlag(FeatureType.SmoothCorners)
  const enabled = !disabled && smoothCornersEnabled

  const shadowSpreadRadius = shadow?.spreadRadius ?? 0

  const style = useMemo(() => ({
    ...styleProp,
    [cv('border-radius')]: borderRadius,
    [cv('border-radius-type')]: typeof borderRadius,
    [cv('shadow-offset-x')]: shadow?.offsetX,
    [cv('shadow-offset-y')]: shadow?.offsetY,
    [cv('shadow-blur-radius')]: px(shadow?.blurRadius ?? 0),
    [cv('shadow-spread-radius')]: px(shadowSpreadRadius),
    [cv('shadow-color')]: cssVarValue(shadow?.color),
    /**
     * NOTE: Calculate in javascript because it cannot access calculated values via CSS calc() in the paint worklet.
     * @see {@link ~/src/features/SmoothCorners/smoothCornersScript.ts}
     */
    [cv('padding')]: px(shadowSpreadRadius * 2),
    [cv('margin')]: px(margin ?? 0),
    [cv('background-color')]: cssVarValue(backgroundColor),
    [cv('background-image')]: cssUrl(backgroundImage),
  }), [
    styleProp,
    borderRadius,
    margin,
    shadow,
    shadowSpreadRadius,
    backgroundColor,
    backgroundImage,
  ])

  return (
    <Styled.Box
      {...rest}
      ref={forwardedRef}
      style={style}
      data-state={enabled ? 'enabled' : 'disabled'}
    >
      { children }
    </Styled.Box>
  )
})
