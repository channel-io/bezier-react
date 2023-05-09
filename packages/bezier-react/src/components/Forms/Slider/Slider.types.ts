import type {
  BezierComponentProps,
  DisableProps,
} from '~/src/types/ComponentProps'

interface SliderOptions {
  /**
   * Width of the slider.
   * @default 36
   */
  width?: React.CSSProperties['width']
  /**
   * When array of number `guide` is provided, guide mark will be shown above track regard to given value(s).
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
   * Event handler called when the value changes.
   */
  onValueChange?: (value: number[]) => void
  /**
   * Event handler called when the value changes at the end of an interaction.
   * Useful when you only need to capture a final value (e.g. to update a backend service).
   */
  onValueCommit?: (value: number[]) => void
}

export default interface SliderProps extends
  BezierComponentProps,
  DisableProps,
  Omit<React.HTMLAttributes<HTMLSpanElement>, keyof SliderOptions>,
  SliderOptions {}
