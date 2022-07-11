/* External dependencies */
import type { SliderProps as SliderPrimitiveProps } from '@radix-ui/react-slider'

/* Internal dependencies */
import type { BezierComponentProps } from 'Types/ComponentProps'

interface SliderOptions {
  // TODO (@aru): add jsdoc
  width?: number | string
  guide?: number[]
  showTooltip?: boolean
}

export default interface SliderProps extends
  BezierComponentProps,
  SliderPrimitiveProps,
  SliderOptions {}
