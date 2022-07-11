/* Internal dependencies */
import type { BezierComponentProps } from 'Types/ComponentProps'
import type { FormComponentProps } from 'Components/Forms'

interface SliderOptions {
  // TODO (@aru): add jsdoc
  width?: number | string
}

export default interface SliderProps extends
  BezierComponentProps,
  FormComponentProps,
  SliderOptions {}
