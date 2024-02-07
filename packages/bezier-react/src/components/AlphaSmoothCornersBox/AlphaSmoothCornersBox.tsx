import React, { forwardRef } from 'react'

import classNames from 'classnames'

import {
  cssUrl,
  cssVar,
  px,
} from '~/src/utils/style'

import {
  FeatureType,
  useFeatureFlag,
} from '~/src/components/FeatureProvider'

import { type AlphaSmoothCornersBoxProps } from './AlphaSmoothCornersBox.types'

import styles from './AlphaSmoothCornersBox.module.scss'

/**
 * `AlphaSmoothCornersBox` is a simple `div` element with smooth corners.
 * It is available by enabling the `SmoothCornersFeature`.
 * @example
 *
 * ```tsx
 * <AppProvider features={[SmoothCornersFeature]}>
 *   <AlphaSmoothCornersBox />
 * </AppProvider>
 * ```
 */
export const AlphaSmoothCornersBox = forwardRef<HTMLDivElement, AlphaSmoothCornersBoxProps>(function AlphaSmoothCornersBox({
  children,
  style,
  className,
  disabled,
  borderRadius,
  margin,
  shadow,
  backgroundColor,
  backgroundImage,
  ...rest
}, forwardedRef) {
  const shadowBlurRadius = shadow?.blurRadius ?? 0
  const shadowSpreadRadius = shadow?.spreadRadius ?? 0

  return (
    <div
      {...rest}
      ref={forwardedRef}
      style={{
        ...style,
        '--b-smooth-corners-box-border-radius': borderRadius,
        '--b-smooth-corners-box-shadow-offset-x': px(shadow?.offsetX),
        '--b-smooth-corners-box-shadow-offset-y': px(shadow?.offsetY),
        '--b-smooth-corners-box-shadow-blur-radius': `${shadowBlurRadius}px`,
        '--b-smooth-corners-box-shadow-spread-radius': `${shadowSpreadRadius}px`,
        '--b-smooth-corners-box-shadow-color': cssVar(shadow?.color),
        /**
         * NOTE: Calculate in javascript because it cannot access calculated values via CSS calc() in the paint worklet.
         * @see {@link ~/src/features/SmoothCorners/smoothCornersScript.ts}
         */
        '--b-smooth-corners-box-padding': `${Math.max(shadowBlurRadius, shadowSpreadRadius) * 2}px`,
        '--b-smooth-corners-box-margin': `${margin ?? 0}px`,
        '--b-smooth-corners-box-background-color': cssVar(backgroundColor),
        '--b-smooth-corners-box-background-image': cssUrl(backgroundImage),
      } as React.CSSProperties}
      className={classNames(
        styles.SmoothCornersBox,
        className,
      )}
      data-state={
        useFeatureFlag(FeatureType.SmoothCorners) && !disabled
          ? 'enabled'
          : 'disabled'
      }
    >
      { children }
    </div>
  )
})
