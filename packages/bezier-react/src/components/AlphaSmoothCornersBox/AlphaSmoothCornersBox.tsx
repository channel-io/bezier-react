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
  cssVarValue,
  px,
} from '~/src/utils/style'

import { type AlphaSmoothCornersBoxProps } from './AlphaSmoothCornersBox.types'

import * as Styled from './AlphaSmoothCornersBox.styled'

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
    '--b-alpha-smooth-corners-box-border-radius': borderRadius,
    '--b-alpha-smooth-corners-box-border-radius-type': typeof borderRadius,
    '--b-alpha-smooth-corners-box-shadow-offset-x': shadow?.offsetX,
    '--b-alpha-smooth-corners-box-shadow-offset-y': shadow?.offsetY,
    '--b-alpha-smooth-corners-box-shadow-blur-radius': px(shadow?.blurRadius ?? 0),
    '--b-alpha-smooth-corners-box-shadow-spread-radius': px(shadowSpreadRadius),
    '--b-alpha-smooth-corners-box-shadow-color': cssVarValue(shadow?.color),
    /**
     * NOTE: Calculate in javascript because it cannot access calculated values via CSS calc() in the paint worklet.
     * @see {@link ~/src/features/SmoothCorners/smoothCornersScript.ts}
     */
    '--b-alpha-smooth-corners-box-padding': px(shadowSpreadRadius * 2),
    '--b-alpha-smooth-corners-box-margin': px(margin ?? 0),
    '--b-alpha-smooth-corners-box-background-color': cssVarValue(backgroundColor),
    '--b-alpha-smooth-corners-box-background-image': cssUrl(backgroundImage),
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
