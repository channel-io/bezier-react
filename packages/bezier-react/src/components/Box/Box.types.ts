import {
  type BezierComponentProps,
  type ChildrenProps,
  type LayoutProps,
  type MarginProps,
  type PolymorphicProps,
} from '~/src/types/props'

type Display = 'block' | 'inline' | 'inline-block'

interface BoxOwnProps {
  /**
   * Display type of the box.
   */
  display?: Display
}

/**
 * @deprecated These components are deprecated. Use beta components from `@channel.io/bezier-react/beta` instead.
 */
export interface BoxProps
  extends BezierComponentProps<'div'>,
    PolymorphicProps,
    ChildrenProps,
    LayoutProps,
    MarginProps,
    BoxOwnProps {}
