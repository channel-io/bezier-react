/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps } from '~/src/types/ComponentProps'
import type { StackProps } from '~/src/components/Stack'

interface FormGroupOptions {
  role?: string
}

interface FormGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  Partial<Pick<StackProps, 'direction' | 'spacing'>>,
  FormGroupOptions {}

export default FormGroupProps
