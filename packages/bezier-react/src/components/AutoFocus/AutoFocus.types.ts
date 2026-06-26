import { type ChildrenProps } from '~/src/types/props'

interface AutoFocusOptions {
  /**
   * Focuses on the child element when this property is true.
   * @default true
   */
  when?: boolean
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface AutoFocusProps
  extends ChildrenProps,
    React.HTMLAttributes<HTMLElement>,
    AutoFocusOptions {}
