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
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  return (
    <Styled.SliderWrapper
      ref={forwardedRef}
      width={width}
      {...rest}
    >
      <Styled.SliderTrack>
        <Styled.SliderRange />
      </Styled.SliderTrack>
      <Styled.SliderThumb />
    </Styled.SliderWrapper>
  )
}

export default forwardRef(Slider)
