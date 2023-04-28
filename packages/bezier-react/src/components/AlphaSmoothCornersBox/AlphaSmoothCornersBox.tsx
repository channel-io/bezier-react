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
} from '~/src/utils/styleUtils'

import { type AlphaSmoothCornersBoxProps } from './AlphaSmoothCornersBox.types'

import * as Styled from './AlphaSmoothCornersBox.styled'

export const AlphaSmoothCornersBox = forwardRef<HTMLElement, AlphaSmoothCornersBoxProps>(function AlphaSmoothCornersBox({
  children,
  borderRadius,
  margin,
  shadow,
  backgroundColor,
  backgroundImage,
  style: styleProp,
  ...rest
}, forwardedRef) {
  const isSmoothCornersEnabled = useFeatureFlag(FeatureType.SmoothCorners)

  const style = useMemo(() => ({
    ...styleProp,
    '--bezier-react-alpha-smooth-corners-box-border-radius': borderRadius,
    '--bezier-react-alpha-smooth-corners-box-border-radius-type': typeof borderRadius,
    '--bezier-react-alpha-smooth-corners-box-shadow-offset-x': shadow?.offsetX,
    '--bezier-react-alpha-smooth-corners-box-shadow-offset-y': shadow?.offsetY,
    '--bezier-react-alpha-smooth-corners-box-shadow-blur-radius': shadow?.blurRadius,
    '--bezier-react-alpha-smooth-corners-box-shadow-spread-radius': `${shadow?.spreadRadius ?? 0}px`,
    '--bezier-react-alpha-smooth-corners-box-shadow-color': cssVar(shadow?.color),
    /**
     * NOTE: Calculate in javascript because it cannot access calculated values via CSS calc() in the paint worklet.
     * @see {@link ~/src/features/SmoothCorners/smoothCornersScript.ts}
     */
    '--bezier-react-alpha-smooth-corners-box-padding': `${(shadow?.spreadRadius ?? 0) * 2}px`,
    '--bezier-react-alpha-smooth-corners-box-margin': margin,
    '--bezier-react-alpha-smooth-corners-box-background-color': cssVar(backgroundColor),
    '--bezier-react-alpha-smooth-corners-box-background-image': cssUrl(backgroundImage),
  }), [
    styleProp,
    borderRadius,
    margin,
    shadow,
    backgroundColor,
    backgroundImage,
  ])

  return (
    <Styled.Box
      {...rest}
      ref={forwardedRef}
      style={style}
      data-state={isSmoothCornersEnabled ? 'enabled' : 'disabled'}
    >
      { children }
    </Styled.Box>
  )
})
