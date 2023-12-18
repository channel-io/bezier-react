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
  cssVar,
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
    '--b-alpha-smooth-corners-box-shadow-blur-radius': `${shadow?.blurRadius ?? 0}px`,
    '--b-alpha-smooth-corners-box-shadow-spread-radius': `${shadowSpreadRadius}px`,
    '--b-alpha-smooth-corners-box-shadow-color': cssVar(shadow?.color),
    /**
     * NOTE: Calculate in javascript because it cannot access calculated values via CSS calc() in the paint worklet.
     * @see {@link ~/src/features/SmoothCorners/smoothCornersScript.ts}
     */
    '--b-alpha-smooth-corners-box-padding': `${shadowSpreadRadius * 2}px`,
    '--b-alpha-smooth-corners-box-margin': `${margin ?? 0}px`,
    '--b-alpha-smooth-corners-box-background-color': cssVar(backgroundColor),
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
