import React, { forwardRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'

import { noop } from '~/src/utils/functionUtils'
import { isNil } from '~/src/utils/typeUtils'

import type SliderProps from './Slider.types'

import * as Styled from './Slider.styled'

export const SLIDER_TEST_ID = 'bezier-react-slider'
export const SLIDER_THUMB_TEST_ID = 'bezier-react-slider-thumb'

const DEFAULT_VALUE: number[] = [5]

export const Slider = forwardRef(function Slider(
  {
    width = 36,
    guide,
    defaultValue = DEFAULT_VALUE,
    value,
    disabled = false,
    min = 0,
    max = 10,
    step = 1,
    onValueChange = noop,
    minStepsBetweenThumbs = 0,
    ...rest
  }: SliderProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const targetValue = isNil(value) ? defaultValue : value

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
        disabled={disabled}
        ref={forwardedRef}
        data-testid={SLIDER_TEST_ID}
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
            key={`slider-guide-${guideValue}`}
            min={min}
            max={max}
            guideValue={guideValue}
          />
        )) }
        { targetValue.map((v, i) => (
          <SliderPrimitive.Thumb
            asChild
            // eslint-disable-next-line react/no-array-index-key
            key={`slider-thumb-${i}`}
          >
            <Styled.SliderThumb
              data-testid={SLIDER_THUMB_TEST_ID}
            />
          </SliderPrimitive.Thumb>
        )) }
      </Styled.SliderRoot>
    </SliderPrimitive.Root>
  )
})
