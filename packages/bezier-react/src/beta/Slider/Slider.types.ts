import type { BezierComponentProps, DisableProps } from '~/src/types/props'

interface SliderOwnProps {
  /**
   * Width of the slider.
   * If the value is a number, `px` is suffixed to the given value.
   * @default 120
   */
  width?: React.CSSProperties['width']
  /**
   * Guide values rendered above the track.
   */
  guide?: number[]
  /**
   * The value of the slider when initially rendered.
   * Use when you do not need to control the state of the slider.
   * @default [0]
   */
  defaultValue?: number[]
  /**
   * The controlled value of the slider.
   * Must be used in conjunction with `onValueChange`.
   */
  value?: number[]
  /**
   * The name of the slider.
   * Submitted with its owning form as part of a name/value pair.
   */
  name?: string
  /**
   * The minimum value for the range.
   * @default 0
   */
  min?: number
  /**
   * The maximum value for the range.
   * @default 10
   */
  max?: number
  /**
   * The stepping interval.
   * @default 1
   */
  step?: number
  /**
   * The minimum permitted steps between multiple thumbs.
   * @default 0
   */
  minStepsBetweenThumbs?: number
  /**
   * Whether to hide the tooltip for thumbs.
   * @default false
   */
  disableTooltip?: boolean
  /**
   * The reading direction of the slider.
   * @default 'ltr'
   */
  dir?: 'ltr' | 'rtl'
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: number[]) => void
  /**
   * Event handler called when the value changes at the end of an interaction.
   */
  onValueCommit?: (value: number[]) => void
}

export interface SliderProps
  extends Omit<BezierComponentProps<'span'>, keyof SliderOwnProps>,
    DisableProps,
    SliderOwnProps {}
