import type { BezierComponentProps, ChildrenProps } from '~/src/types/props'

type FormGroupDirection = 'horizontal' | 'vertical'

export interface FormGroupProps
  extends BezierComponentProps<'div'>,
    ChildrenProps {
  direction?: FormGroupDirection
  spacing?: string | number
}
