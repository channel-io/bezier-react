import { type PropsWithChildren } from 'react'

import {
  type BezierComponentProps,
  type PolymorphicProps,
} from '~/src/types/props'

import { type ToggleButtonProps } from '~/src/components/AlphaToggleButton/ToggleButton.types'

type Value<T> = T extends 'single' ? string : string[]

interface ToggleButtonGroupOwnProps<T extends string = 'single' | 'multiple'> {
  /**
   * Shape of `ToggleButtonComponent` rendered as children.
   * @default 'capsule'
   */
  shape?: ToggleButtonProps['shape']

  /**
   * If true, the button group will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean

  /**
   * Determines whether a single or multiple buttons can be selected at a time.
   * @default 'single'
   */
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
