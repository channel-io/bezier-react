import type {
  BezierComponentProps,
  ChildrenProps,
} from '~/src/types/ComponentProps'

import type { LegacyStackProps } from '~/src/components/LegacyStack'

interface FormGroupProps extends
  BezierComponentProps,
  ChildrenProps,
  Partial<Pick<LegacyStackProps, 'direction' | 'spacing'>>,
  React.HTMLAttributes<HTMLDivElement> {}

export default FormGroupProps
