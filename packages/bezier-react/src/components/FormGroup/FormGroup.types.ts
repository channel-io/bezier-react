import type {
  AlphaBezierComponentProps,
  ChildrenProps,
} from '~/src/types/props'

import type { StackProps } from '~/src/components/Stack'

export interface FormGroupProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  Partial<Pick<StackProps, 'direction' | 'spacing'>>,
  React.HTMLAttributes<HTMLDivElement> {}
