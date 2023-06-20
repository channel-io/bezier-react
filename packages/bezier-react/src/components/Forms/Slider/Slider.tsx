import React, {
  forwardRef,
  memo,
  useCallback,
} from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'

import { isNumber } from '~/src/utils/typeUtils'

import {
  Tooltip,
  TooltipPosition,
  type TooltipProps,
} from '~/src/components/Tooltip'

import type SliderProps from './Slider.types'

import * as Styled from './Slider.styled'

export const SLIDER_TEST_ID = 'bezier-react-slider'

const SliderGuide = memo<Record<'min' | 'max' | 'value', number>>(function SliderGuide({
  min,
  max,
  value,
}) {
  return (
    <Styled.SliderGuide
      style={{
        '--bezier-slider-guide-left': `${(value / (max - min)) * 100}%`,
      } as React.CSSProperties}
    />
  )
})

/* NOTE: Props are injected at runtime by `SliderPrimitive.Thumb`. */
const SliderThumb = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function SliderThumb(
  props,
  forwardedRef,
) {
  const value = props?.['aria-valuenow']

  // NOTE: Prevents the tooltip from closing when the thumb is clicked.
  const onPointerDownOutside = useCallback<Required<TooltipProps>['onPointerDownOutside']>((e) => {
    e.preventDefault()
  }, [])

  return (
    <Tooltip
      content={value}
      offset={6}
      placement={TooltipPosition.TopCenter}
      onPointerDownOutside={onPointerDownOutside}
    >
      <Styled.SliderThumb
        ref={forwardedRef}
        {...props}
      />
    </Tooltip>
  )
})

/**
 * An input component where the user selects a value from within a given range.
 * The value of the slider is shown in a tooltip, and in some cases you can add a guide scale.
 *
 * @example
 *
 * ```tsx
 * const [value, setValue] = useState([1])
 * // Controlled
 * <Slider
 *   value={value}
 *   onValueChange={setValue}
 * />
 * // Uncontrolled
 * <Slider defaultValue={[1]} />
 * ```
 */
export const Slider = forwardRef<HTMLSpanElement, SliderProps>(function Slider({
  style,
  width = 36,
  guide,
  defaultValue = [0],
  value,
  disabled = false,
  min = 0,
  max = 10,
  step = 1,
  minStepsBetweenThumbs = 0,
  ...rest
}, forwardedRef) {
  const targetValue = value || defaultValue

  return (
    <Styled.SliderPrimitiveRoot
      style={{
        ...style,
        '--bezier-slider-width': isNumber(width) ? `${width}px` : width,
      }}
      data-testid={SLIDER_TEST_ID}
      ref={forwardedRef}
      orientation="horizontal"
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      minStepsBetweenThumbs={minStepsBetweenThumbs}
      {...rest}
    >
      <Styled.SliderPrimitiveTrack>
        <Styled.SliderPrimitiveRange />

        { guide && (
          <Styled.GuideContainer>
            { guide.map((guideValue) => (
              <SliderGuide
                key={`slider-guide-${guideValue}`}
                min={min}
                max={max}
                value={guideValue}
              />
            )) }
          </Styled.GuideContainer>
        ) }
      </Styled.SliderPrimitiveTrack>

      { targetValue.map((_, i) => (
        <SliderPrimitive.Thumb
          // eslint-disable-next-line react/no-array-index-key
          key={`slider-thumb-${i}`}
          asChild
        >
          <SliderThumb />
        </SliderPrimitive.Thumb>
      )) }
    </Styled.SliderPrimitiveRoot>
  )
})
