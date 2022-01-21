/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'

interface FormGroupOptions {
  gap?: number
  direction?: 'column' | 'row'
}

interface FormGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  FormGroupOptions {}

export default FormGroupProps
