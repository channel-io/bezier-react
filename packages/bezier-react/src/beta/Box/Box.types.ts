import type {
  BetaLayoutProps,
  BetaMarginProps,
  BezierComponentProps,
  ChildrenProps,
  PolymorphicProps,
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
    BetaMarginProps,
    BetaLayoutProps,
    BoxOwnProps {}
