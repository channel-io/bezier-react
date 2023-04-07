import type { SliderProps as SliderPrimitiveProps } from '@radix-ui/react-slider'

import type { BezierComponentProps } from '~/src/types/ComponentProps'

interface SliderOptions {
  /**
   * CSS Width of entire slider.
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
   * Callback of slider thumb's `onpointerdown` event.
   */
  onThumbPointerDown?: (value: number[]) => void

  /**
   * Callback of slider thumb's `onpointerup` event.
   */
  onThumbPointerUp?: (value: number[]) => void
}

export default interface SliderProps extends
  BezierComponentProps,
  SliderPrimitiveProps,
  SliderOptions {}
