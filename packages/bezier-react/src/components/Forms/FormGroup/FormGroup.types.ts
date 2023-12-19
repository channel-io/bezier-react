import type {
  AlphaBezierComponentProps,
  ChildrenProps,
} from '~/src/types/ComponentProps'

import type { StackProps } from '~/src/components/Stack'

interface FormGroupProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  Partial<Pick<StackProps, 'direction' | 'spacing' | 'wrap'>>,
  React.HTMLAttributes<HTMLDivElement> {}

export default FormGroupProps
