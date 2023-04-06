/* External dependencies */
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'

/* Internal dependencies */
import { noop } from '~/src/utils/functionUtils'

import type SliderProps from './Slider.types'

import * as Styled from './Slider.styled'

export const SLIDER_TEST_ID = 'bezier-react-slider'
export const SLIDER_THUMB_TEST_ID = 'bezier-react-slider-thumb'

export const Slider = forwardRef(function Slider(
  {
    width = 36,
    guide,
    onThumbPointerDown = noop,
    onThumbPointerUp = noop,
    defaultValue = [5],
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
  const [currentValue, setCurrentValue] = useState<number[]>(value ?? defaultValue)

  useEffect(function updateCurrentValue() {
    if (value) {
      setCurrentValue(value)
      onValueChange(value)
    }
  }, [
    value,
    onValueChange,
  ])

  const handleValueChange: (value: number[]) => void = useCallback((_value) => {
    setCurrentValue(_value)
    onValueChange(_value)
  }, [onValueChange])

  const handlePointerDown: React.PointerEventHandler<HTMLElement> = useCallback(() => {
    if (!disabled) {
      onThumbPointerDown(currentValue)
    }
  }, [
    disabled,
    onThumbPointerDown,
    currentValue,
  ])

  const handlePointerUp: React.PointerEventHandler<HTMLElement> = useCallback(() => {
    if (!disabled) {
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
        { currentValue.map((v, i) => (
          <SliderPrimitive.Thumb
            asChild
            // eslint-disable-next-line react/no-array-index-key
            key={`slider-thumb-${i}`}
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
