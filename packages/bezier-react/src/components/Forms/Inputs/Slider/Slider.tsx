/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import useFormFieldProps from 'Components/Forms/useFormFieldProps'
import SliderProps from './Slider.types'
import * as Styled from './Slider.styled'

function Slider(
  {
    width = 36,
    ...rest
  }: SliderProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const {
    disabled,
    ...ownProps
  } = useFormFieldProps(rest)

  return (
    <Styled.SliderWrapper
      ref={forwardedRef}
      width={width}
      disabled={disabled}
      {...ownProps}
    >
      <Styled.SliderTrack>
        <Styled.SliderRange />
      </Styled.SliderTrack>
      <Styled.SliderThumb
        disabled={disabled}
      />
    </Styled.SliderWrapper>
  )
}

export default forwardRef(Slider)
