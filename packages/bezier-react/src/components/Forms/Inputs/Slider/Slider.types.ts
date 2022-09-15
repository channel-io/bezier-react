/* External dependencies */
import type { SliderProps as SliderPrimitiveProps } from '@radix-ui/react-slider'

/* Internal dependencies */
import type { BezierComponentProps } from 'Types/ComponentProps'

interface SliderOptions {
  /**
   * CSS Width of entier slider.
   * If given value is number or doesn't end with proper unit, `defaultUnit` is suffixed to given value.
   *
   * @see src/utils/styleUtils.ts
   * @default 36
   */
  width?: number | string

  /**
   * When array of number `guide` is provided, guide mark will be shown above track regard to given value(s).
   */
  guide?: number[]

  /**
   * If `showTooltip` is true, the tooltip with current value will be shown above thumb when dragging.
   *
   * @default true
   */
  showTooltip?: boolean
}

export default interface SliderProps extends
  BezierComponentProps,
  SliderPrimitiveProps,
  SliderOptions {}
