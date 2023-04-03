/* Internal dependencies */
import { type ChildrenProps } from '~/src/types/ComponentProps'

interface AutoFocusOptions {
  /**
   * Focuses on the child element when this property is true.
   * @default true
   */
  when?: boolean
}

export interface AutoFocusProps extends
  ChildrenProps,
  React.HTMLAttributes<HTMLElement>,
  AutoFocusOptions {}
