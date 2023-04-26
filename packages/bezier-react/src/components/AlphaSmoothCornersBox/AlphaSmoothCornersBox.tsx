import React, {
  forwardRef,
  useMemo,
} from 'react'

import {
  FeatureType,
  useFeatureFlag,
} from '~/src/features'

import { type AlphaSmoothCornersBoxProps } from './AlphaSmoothCornersBox.types'

import * as Styled from './AlphaSmoothCornersBox.styled'

export const AlphaSmoothCornersBox = forwardRef(function AlphaSmoothCornersBox({
  children,
  borderRadius,
  margin,
  shadow,
  shadowBlur,
  backgroundColor,
  backgroundImage,
  style: styleProp,
  ...rest
}: AlphaSmoothCornersBoxProps) {
  const isSmoothCornersEnabled = useFeatureFlag(FeatureType.SmoothCorners)

  const style = useMemo(() => ({
    ...styleProp,
    '--bezier-react-alpha-smooth-corners-box-border-radius': borderRadius,
    '--bezier-react-alpha-smooth-corners-box-border-radius-type': typeof borderRadius,
    '--bezier-react-alpha-smooth-corners-box-margin': margin,
    // NOTE: (@ed) Calculated in javascript because it doesn't work via CSS calc().
    '--bezier-react-alpha-smooth-corners-box-padding': (shadowBlur ?? 0) * 2,
    '--bezier-react-alpha-smooth-corners-box-shadow': shadow,
    '--bezier-react-alpha-smooth-corners-box-shadow-blur': shadowBlur,
    '--bezier-react-alpha-smooth-corners-box-background-color': backgroundColor,
    '--bezier-react-alpha-smooth-corners-box-background-image': backgroundImage ? `url(${backgroundImage})` : undefined,
  }), [
    styleProp,
    borderRadius,
    margin,
    shadow,
    shadowBlur,
    backgroundColor,
    backgroundImage,
  ])

  return (
    <Styled.Box
      {...rest}
      style={style}
      data-state={isSmoothCornersEnabled ? 'enabled' : 'disabled'}
    >
      { children }
    </Styled.Box>
  )
})
