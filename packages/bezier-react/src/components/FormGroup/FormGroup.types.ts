import type { BezierComponentProps, ChildrenProps } from '~/src/types/props'

import type { StackProps } from '~/src/components/Stack'

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface FormGroupProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    Partial<Pick<StackProps, 'direction' | 'spacing'>> {}
