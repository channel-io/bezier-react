/* Internal dependencies */
import type { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'
import type { StackProps } from 'Components/Stack'

interface FormGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  Partial<Pick<StackProps, 'direction' | 'spacing'>>,
  React.HTMLAttributes<HTMLDivElement> {}

export default FormGroupProps
