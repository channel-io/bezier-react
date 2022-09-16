/* External dependencies */
import React, { forwardRef } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

/* Internal dependencies */
import SliderProps from './Slider.types'
import * as Styled from './Slider.styled'

function Slider(
  {
    width = 36,
    guide,
    defaultValue = [5],
    value,
    disabled = false,
    min = 0,
    max = 10,
    step = 1,
    onValueChange,
    minStepsBetweenThumbs = 0,
    ...rest
  }: SliderProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  return (
    <SliderPrimitive.Root
      asChild
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      onValueChange={onValueChange}
      minStepsBetweenThumbs={minStepsBetweenThumbs}
    >
      <Styled.SliderRoot
        width={width}
        ref={forwardedRef}
        {...rest}
      >
        <SliderPrimitive.Track asChild>
          <Styled.SliderTrack>
            <SliderPrimitive.Range asChild>
              <Styled.SliderRange />
            </SliderPrimitive.Range>
          </Styled.SliderTrack>
        </SliderPrimitive.Track>
        { guide?.map((guideValue) => (
          <Styled.SliderGuide
            min={min}
            max={max}
            guideValue={guideValue}
          />
        )) }
        { defaultValue.map((v) => (
          <SliderPrimitive.Thumb asChild key={`slider-thumb-${v}`}>
            <Styled.SliderThumb />
          </SliderPrimitive.Thumb>
        )) }
      </Styled.SliderRoot>
    </SliderPrimitive.Root>
  )
}

export default forwardRef(Slider)
