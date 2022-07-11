/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import SliderProps from './Slider.types'
import * as Styled from './Slider.styled'

function Slider(
  {
    width = 36,
    ...rest
  }: SliderProps,
  forwardedRef: React.Ref<any>, // TODO: resolve any
) {
  return (
    <Styled.SliderRoot
      width={width}
      ref={forwardedRef}
      {...rest}
    >
      <Styled.SliderTrack>
        <Styled.SliderRange />
      </Styled.SliderTrack>
      <Styled.SliderThumb />
    </Styled.SliderRoot>
  )
}

export default forwardRef(Slider)
