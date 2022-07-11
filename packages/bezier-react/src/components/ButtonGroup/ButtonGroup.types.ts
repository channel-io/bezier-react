import type {
  BezierComponentProps,
  ChildrenProps,
} from 'Types/ComponentProps'

interface ButtonOptions {
  /**
   * Determines whether there is a 6px gap between the buttons.
   * @default true
   */
  hasGap?: boolean
}

export default interface ButtonGroupProps extends
  BezierComponentProps,
  ButtonOptions,
  ChildrenProps {}
