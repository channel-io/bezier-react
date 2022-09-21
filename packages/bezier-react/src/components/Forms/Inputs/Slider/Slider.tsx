/* External dependencies */
import React, { forwardRef, useCallback } from 'react'
import { isFunction } from 'lodash-es'
import * as SliderPrimitive from '@radix-ui/react-slider'

/* Internal dependencies */
import SliderProps from './Slider.types'
import * as Styled from './Slider.styled'

export const SLIDER_TEST_ID = 'bezier-react-slider'
export const SLIDER_THUMB_TEST_ID = 'bezier-react-slider-thumb'

function Slider(
  {
    width = 36,
    guide,
    onThumbDragStart,
    onThumbDragEnd,
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
  const handleDragStart: React.DragEventHandler<HTMLElement> = useCallback(() => {
    if (!disabled && isFunction(onThumbDragStart)) {
      onThumbDragStart(value ?? [])
    }
  }, [
    disabled,
    onThumbDragStart,
    value,
  ])
  const handleDragEnd: React.DragEventHandler<HTMLElement> = useCallback(() => {
    if (!disabled && isFunction(onThumbDragEnd)) {
      onThumbDragEnd(value ?? [])
    }
  }, [
    disabled,
    onThumbDragEnd,
    value,
  ])

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
        { defaultValue.map((v) => (
          <SliderPrimitive.Thumb
            asChild
            key={`slider-thumb-${v}`}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <Styled.SliderThumb
              data-testid={SLIDER_THUMB_TEST_ID}
            />
          </SliderPrimitive.Thumb>
        )) }
      </Styled.SliderRoot>
    </SliderPrimitive.Root>
  )
}

export default forwardRef(Slider)
