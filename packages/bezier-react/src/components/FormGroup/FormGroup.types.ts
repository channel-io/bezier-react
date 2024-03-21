import type { BezierComponentProps, ChildrenProps } from '~/src/types/props'

import type { StackProps } from '~/src/components/Stack'

export interface FormGroupProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    Partial<Pick<StackProps, 'direction' | 'spacing'>> {}
