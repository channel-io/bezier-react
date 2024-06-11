import { type PropsWithChildren } from 'react'

import {
  type BezierComponentProps,
  type PolymorphicProps,
} from '~/src/types/props'

type Value<T> = T extends 'single' ? string : string[]

interface ToggleButtonGroupOwnProps<T extends string = 'single' | 'multiple'> {
  type: T
  /**
   * The controlled value of the selected button.
   */
  value?: Value<T>

  /**
   * The value of the selected button when initially rendered.
   * Use when you **do not need to control** state of button group.
   */
  defaultValue?: Value<T>

  /**
   * The reading direction of the button group.
   * @default 'ltr'
   */
  dir?: 'ltr' | 'rtl'

  /**
   * Event handler called when the selected state of an button changes.
   */
  onValueChange?: T extends 'single'
    ? (value: string) => void
    : (value: string[]) => void
}

export interface ToggleButtonSingleGroupProps
  extends Omit<BezierComponentProps<'div'>, keyof ToggleButtonGroupOwnProps>,
    PropsWithChildren,
    PolymorphicProps,
    ToggleButtonGroupOwnProps<'single'> {}

export interface ToggleButtonMultipleGroupProps
  extends Omit<BezierComponentProps<'div'>, keyof ToggleButtonGroupOwnProps>,
    PropsWithChildren,
    PolymorphicProps,
    ToggleButtonGroupOwnProps<'multiple'> {}
