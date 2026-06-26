import {
  type BezierComponentProps,
  type ChildrenProps,
  type LayoutProps,
  type MarginProps,
} from '~/src/types/props'

type Display = 'flex' | 'inline-flex'

interface CenterOwnProps {
  /**
   * Display type of the center.
   * @default 'flex'
   */
  display?: Display
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface CenterProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    LayoutProps,
    MarginProps,
    CenterOwnProps {}
