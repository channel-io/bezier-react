'use client'

import {
  type CSSProperties,
  forwardRef,
  memo,
} from 'react'
import * as React from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import classNames from 'classnames'

import { cssDimension } from '~/src/utils/style'
import { Tooltip } from '~/src/v3/Tooltip'

import { type SliderProps } from './Slider.types'

import styles from './Slider.module.scss'

export const SLIDER_TEST_ID = 'bezier-v3-slider'

const SliderGuide = memo<Record<'min' | 'max' | 'value', number>>(
  function SliderGuide({ min, max, value }) {
    return (
      <div
        className={styles.SliderGuide}
        style={
          {
            '--b-v3-slider-guide-left': `${((value - min) / (max - min)) * 100}%`,
          } as React.CSSProperties
        }
      />
    )
  }
)

const SliderThumb = forwardRef<
  HTMLDivElement,
  Pick<SliderProps, 'disableTooltip'> & React.HTMLAttributes<HTMLDivElement>
>(function SliderThumb({ disableTooltip, ...rest }, forwardedRef) {
  const value = rest['aria-valuenow']

  const thumb = (
    <div
      ref={forwardedRef}
      className={styles.SliderThumb}
      {...rest}
    />
  )

  if (disableTooltip) {
    return thumb
  }

  return (
    <Tooltip
      content={value}
      offset={6}
      placement="top-center"
      onPointerDownOutside={(event) => event.preventDefault()}
    >
      {thumb}
    </Tooltip>
  )
})

/**
 * `Slider` allows users to select one or more values within a range.
 */
export const Slider = forwardRef<HTMLSpanElement, SliderProps>(function Slider(
  {
    className,
    style,
    width = 120,
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
  },
  forwardedRef
) {
  const targetValue = value ?? defaultValue

  return (
    <SliderPrimitive.Root
      style={
        {
          '--b-v3-slider-width': cssDimension(width),
          ...style,
        } as CSSProperties
      }
      className={classNames(styles.Slider, className)}
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

        {guide && (
          <div className={styles.GuideContainer}>
            {guide.map((guideValue) => (
              <SliderGuide
                key={`slider-guide-${guideValue}`}
                min={min}
                max={max}
                value={guideValue}
              />
            ))}
          </div>
        )}
      </SliderPrimitive.Track>

      {targetValue.map((_, index) => (
        <SliderPrimitive.Thumb
          // eslint-disable-next-line react/no-array-index-key
          key={`slider-thumb-${index}`}
          asChild
        >
          <SliderThumb disableTooltip={disableTooltip} />
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  )
})
