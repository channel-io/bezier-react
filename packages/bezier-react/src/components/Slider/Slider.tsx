import React, {
  type CSSProperties,
  forwardRef,
  memo,
} from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import classNames from 'classnames'

import { cssDimension } from '~/src/utils/style'

import { Tooltip } from '~/src/components/Tooltip'

import { type SliderProps } from './Slider.types'

import styles from './Slider.module.scss'

export const SLIDER_TEST_ID = 'bezier-slider'

const SliderGuide = memo<Record<'min' | 'max' | 'value', number>>(function SliderGuide({
  min,
  max,
  value,
}) {
  return (
    <div
      className={styles.SliderGuide}
      style={{
        '--b-slider-guide-left': `${(value / (max - min)) * 100}%`,
      } as React.CSSProperties}
    />
  )
})

/* NOTE: Props are injected at runtime by `SliderPrimitive.Thumb`. */
const SliderThumb = forwardRef<HTMLDivElement, Pick<SliderProps, 'disableTooltip'> & React.HTMLAttributes<HTMLDivElement>>(function SliderThumb({
  disableTooltip,
  ...rest
}, forwardedRef) {
  const value = rest?.['aria-valuenow']

  if (disableTooltip) {
    return (
      <div
        ref={forwardedRef}
        className={styles.SliderThumb}
        {...rest}
      />
    )
  }

  return (
    <Tooltip
      content={value}
      offset={6}
      placement="top-center"
      onPointerDownOutside={e => e.preventDefault()}
    >
      <div
        ref={forwardedRef}
        className={styles.SliderThumb}
        {...rest}
      />
    </Tooltip>
  )
})

/**
 * An input component where the user selects a value from within a given range.
 * The value of the slider is shown in a tooltip, and in some cases you can add a guide scale.
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
  className,
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
  dir = 'ltr',
  disableTooltip = false,
  ...rest
}, forwardedRef) {
  const targetValue = value || defaultValue

  return (
    <SliderPrimitive.Root
      style={{
        '--b-slider-width': cssDimension(width),
        ...style,
      } as CSSProperties}
      className={classNames(
        styles.Slider,
        className,
      )}
      ref={forwardedRef}
      orientation="horizontal"
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      dir={dir}
      minStepsBetweenThumbs={minStepsBetweenThumbs}
      data-testid={SLIDER_TEST_ID}
      {...rest}
    >
      <SliderPrimitive.Track className={styles.SliderPrimitiveTrack}>
        <SliderPrimitive.Range className={styles.SliderPrimitiveRange} />

        { guide && (
          <div className={styles.GuideContainer}>
            { guide.map((guideValue) => (
              <SliderGuide
                key={`slider-guide-${guideValue}`}
                min={min}
                max={max}
                value={guideValue}
              />
            )) }
          </div>
        ) }
      </SliderPrimitive.Track>

      { targetValue.map((_, i) => (
        <SliderPrimitive.Thumb
          // eslint-disable-next-line react/no-array-index-key
          key={`slider-thumb-${i}`}
          asChild
        >
          <SliderThumb disableTooltip={disableTooltip} />
        </SliderPrimitive.Thumb>
      )) }
    </SliderPrimitive.Root>
  )
})
