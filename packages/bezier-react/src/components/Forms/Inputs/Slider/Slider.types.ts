/* Internal dependencies */
import type {
  BezierComponentProps,
} from 'Types/ComponentProps'

interface SliderOptions {
  // TODO (@aru): add jsdoc
  width?: number | string
}

export default interface SliderProps extends
  BezierComponentProps,
  SliderOptions {}
