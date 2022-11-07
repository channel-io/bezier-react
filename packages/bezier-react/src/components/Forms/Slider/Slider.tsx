/* External dependencies */
import React, { forwardRef, useState, useCallback } from 'react'
import { isFunction } from 'lodash-es'
import * as SliderPrimitive from '@radix-ui/react-slider'

/* Internal dependencies */
import SliderProps from './Slider.types'
import * as Styled from './Slider.styled'

export const SLIDER_TEST_ID = 'bezier-react-slider'
export const SLIDER_THUMB_TEST_ID = 'bezier-react-slider-thumb'

export const Slider = forwardRef(function Slider(
  {
    width = 36,
    guide,
    onThumbPointerDown,
    onThumbPointerUp,
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
  const [currentValue, setCurrentValue] = useState<number[]>(value ?? defaultValue)

  const handleValueChange: (value: number[]) => void = useCallback((_value) => {
    setCurrentValue(_value)
    if (isFunction(onValueChange)) {
      onValueChange(_value)
    }
  }, [onValueChange])
  const handlePointerDown: React.PointerEventHandler<HTMLElement> = useCallback(() => {
    if (!disabled && isFunction(onThumbPointerDown)) {
      onThumbPointerDown(currentValue)
    }
  }, [
    disabled,
    onThumbPointerDown,
    currentValue,
  ])
  const handlePointerUp: React.PointerEventHandler<HTMLElement> = useCallback(() => {
    if (!disabled && isFunction(onThumbPointerUp)) {
      onThumbPointerUp(currentValue)
    }
  }, [
    disabled,
    onThumbPointerUp,
    currentValue,
  ])

  return (
    <SliderPrimitive.Root
      asChild
      defaultValue={defaultValue}
      value={currentValue}
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      onValueChange={handleValueChange}
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
        { defaultValue.map((v) => (
          <SliderPrimitive.Thumb
            asChild
            key={`slider-thumb-${v}`}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
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
