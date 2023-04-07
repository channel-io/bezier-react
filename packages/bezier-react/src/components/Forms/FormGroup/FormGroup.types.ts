import type {
  BezierComponentProps,
  ChildrenProps,
} from '~/src/types/ComponentProps'

import type { StackProps } from '~/src/components/Stack'

interface FormGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  Partial<Pick<StackProps, 'direction' | 'spacing'>>,
  React.HTMLAttributes<HTMLDivElement> {}

export default FormGroupProps
