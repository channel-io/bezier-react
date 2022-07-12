/* External dependencies */
import type { SeparatorProps as SeparatorPrimitiveProps } from '@radix-ui/react-separator'

/* Internal dependencies */
import type { BezierComponentProps } from 'Types/ComponentProps'

interface DividerOptions {
  withoutSideIndent?: boolean
  withoutParallelIndent?: boolean
}

export default interface DividerProps extends
  BezierComponentProps,
  SeparatorPrimitiveProps,
  DividerOptions {}
