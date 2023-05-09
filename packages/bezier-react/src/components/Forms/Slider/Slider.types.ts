import type { SliderProps as SliderPrimitiveProps } from '@radix-ui/react-slider'

import type { BezierComponentProps } from '~/src/types/ComponentProps'

interface SliderOptions {
  /**
   * Width of the slider.
   * @default 36
   */
  width?: React.CSSProperties['width']

  /**
   * When array of number `guide` is provided, guide mark will be shown above track regard to given value(s).
   */
  guide?: number[]
}

export default interface SliderProps extends
  BezierComponentProps,
  SliderPrimitiveProps,
  SliderOptions {}
