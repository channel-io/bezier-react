/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import type { StackProps } from 'Components/Stack'

interface FormGroupOptions {
  direction?: StackProps['direction']
  role?: string
}

interface FormGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  Omit<StackProps, 'direction'>,
  FormGroupOptions {}

export default FormGroupProps
