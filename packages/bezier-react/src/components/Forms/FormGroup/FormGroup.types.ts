/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import type { StackProps } from 'Components/Stack'

interface FormGroupOptions {
  role?: string
}

interface FormGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  Partial<Pick<StackProps, 'direction' | 'spacing'>>,
  FormGroupOptions {}

export default FormGroupProps
