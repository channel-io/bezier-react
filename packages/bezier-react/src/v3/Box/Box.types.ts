import type {
  BezierComponentProps,
  ChildrenProps,
  PolymorphicProps,
  V3LayoutProps,
  V3MarginProps,
} from '~/src/types/props'

type Display = 'block' | 'inline' | 'inline-block'

interface BoxOwnProps {
  /**
   * Display type of the box.
   */
  display?: Display
}

export interface BoxProps
  extends Omit<BezierComponentProps<'div'>, keyof BoxOwnProps>,
    PolymorphicProps,
    ChildrenProps,
    V3MarginProps,
    V3LayoutProps,
    BoxOwnProps {}
