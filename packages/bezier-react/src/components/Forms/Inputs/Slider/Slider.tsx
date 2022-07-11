/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import SliderProps from './Slider.types'
import * as Styled from './Slider.styled'

function Slider(
  {
    width = 36,
    guide = [5],
    // TODO (@aru): Tooltip
    // showTooltip = true,
    defaultValue = [5],
    value,
    disabled = false,
    min = 0,
    max = 10,
    step = 1,
    onValueChange,
    ...rest
  }: SliderProps,
  forwardedRef: React.Ref<any>, // TODO: resolve any
) {
  return (
    <Styled.SliderRoot
      width={width}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      onValueChange={onValueChange}
      ref={forwardedRef}
      {...rest}
    >
      <Styled.SliderTrack>
        <Styled.SliderRange />
      </Styled.SliderTrack>
      { guide?.map((guideValue) => (
        <Styled.SliderGuide
          min={min}
          max={max}
          guideValue={guideValue}
        />
      )) }
      <Styled.SliderThumb />
    </Styled.SliderRoot>
  )
}

export default forwardRef(Slider)
