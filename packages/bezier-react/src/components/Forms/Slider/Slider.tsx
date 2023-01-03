/* External dependencies */
import React, {
  forwardRef,
  useState,
  useCallback,
  useEffect,
} from 'react'
import {
  noop,
} from 'lodash-es'
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as ToolTipPrimitive from '@radix-ui/react-tooltip'

/* Internal dependencies */
import {
  Typography,
} from 'Foundation'
import { Text } from 'Components/Text'
import SliderProps from './Slider.types'
import * as Styled from './Slider.styled'

export const SLIDER_TEST_ID = 'bezier-react-slider'
export const SLIDER_THUMB_TEST_ID = 'bezier-react-slider-thumb'

function SliderTooltip({
  value,
}: {
  value: number
}) {
  return (
    <ToolTipPrimitive.Portal>
      <Styled.TooltipContent
        key={value}
        sideOffset={10}
      >
        <Text typo={Typography.Size14}>
          { value }
        </Text>
      </Styled.TooltipContent>
    </ToolTipPrimitive.Portal>
  )
}

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
  const [open, setOpen] = useState<{ 0: boolean, 1: boolean }>({ 0: false, 1: false })

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

  const openTooltipOf = useCallback((idx: number) => {
    setOpen(prev => ({ ...prev, [idx]: true }))
  }, [])

  const closeTooltipOf = useCallback((idx: number) => {
    setOpen(prev => ({ ...prev, [idx]: false }))
  }, [])

  const makeHandleFocus: (idx: number) => React.FocusEventHandler<HTMLElement> = useCallback((idx: number) => () => {
    if (!disabled) {
      openTooltipOf(idx)
    }
  }, [
    disabled,
    openTooltipOf,
  ])

  const makeHandleBlur: (idx: number) => React.FocusEventHandler<HTMLElement> = useCallback((idx: number) => () => {
    if (!disabled) {
      closeTooltipOf(idx)
    }
  }, [
    disabled,
    closeTooltipOf,
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
        <ToolTipPrimitive.Provider>
          { currentValue.map((v, i) => (
            <ToolTipPrimitive.Root
              open={open[i]}
              // eslint-disable-next-line react/no-array-index-key
              key={`slider-thumb-${i}`}
            >
              <ToolTipPrimitive.Trigger asChild>
                <Styled.SliderThumb
                  onFocus={makeHandleFocus(i)}
                  onBlur={makeHandleBlur(i)}
                  onPointerDown={handlePointerDown}
                  onPointerUp={handlePointerUp}
                  data-testid={SLIDER_THUMB_TEST_ID}
                />
              </ToolTipPrimitive.Trigger>

              <SliderTooltip value={currentValue[i]} />
            </ToolTipPrimitive.Root>
          )) }
        </ToolTipPrimitive.Provider>
      </Styled.SliderRoot>
    </SliderPrimitive.Root>
  )
})
