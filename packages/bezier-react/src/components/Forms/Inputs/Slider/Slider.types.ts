/* External dependencies */
import type { SliderProps as SliderPrimitiveProps } from '@radix-ui/react-slider'

/* Internal dependencies */
import type { BezierComponentProps } from 'Types/ComponentProps'

interface SliderOptions {
  /**
   * CSS Width of entier slider.
   * If given value is number or doesn't end with proper unit, `defaultUnit` is suffixed to given value.
   *
   * @see /packages/bezier-react/src/utils/styleUtils.ts
   * @default 36
   */
  width?: number | string

  /**
   * When array of number `guide` is provided, guide mark will be shown above track regard to given value(s).
   */
  guide?: number[]

  /**
   * Callback of slider thumb's `ondragstart` event.
   */
  onThumbDragStart?: (value: number[]) => void

  /**
   * Callback of slider thumb's `ondragend` event.
   */
  onThumbDragEnd?: (value: number[]) => void
}

export default interface SliderProps extends
  BezierComponentProps,
  SliderPrimitiveProps,
  SliderOptions {}
