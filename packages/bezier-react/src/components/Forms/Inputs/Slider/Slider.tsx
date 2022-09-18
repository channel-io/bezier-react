/* External dependencies */
import React, { forwardRef, useCallback } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

/* Internal dependencies */
import useFormFieldProps from 'Components/Forms/useFormFieldProps'
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
    min = 0,
    max = 10,
    step = 1,
    onValueChange,
    minStepsBetweenThumbs = 0,
    ...rest
  }: SliderProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const {
    disabled,
    ...ownProps
  } = useFormFieldProps(rest)

  const handleDragStart: React.DragEventHandler<HTMLSpanElement> = useCallback(() => {
    onThumbDragStart?.(value ?? [])
  }, [
    onThumbDragStart,
    value,
  ])
  const handleDragEnd: React.DragEventHandler<HTMLSpanElement> = useCallback(() => {
    onThumbDragEnd?.(value ?? [])
  }, [
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
        {...ownProps}
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
