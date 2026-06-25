import type {
  BaseMultiSelectTriggerProps,
  BaseMultiSelectTriggerRenderProps,
  BaseSelectCommonProps,
  BaseSelectGroupProps,
  BaseSelectOptionData,
  BaseSelectOptionProps,
  BaseSelectOptionSideContent,
  BaseSelectTriggerSize,
  BaseSelectTriggerVisualProps,
  BaseSelectValue,
} from '~/src/v3/BaseSelect/BaseSelect.types'

export type MultiSelectValue = BaseSelectValue

export type MultiSelectTriggerSize = BaseSelectTriggerSize

export type MultiSelectOptionSideContent = BaseSelectOptionSideContent

export type MultiSelectSelectedValuesOverflow = 'wrap' | 'ellipsis'

export type MultiSelectOptionData<
  Value extends MultiSelectValue = MultiSelectValue,
> = BaseSelectOptionData<Value>

export interface MultiSelectProps<
  Value extends MultiSelectValue = MultiSelectValue,
> extends BaseSelectCommonProps,
    BaseSelectTriggerVisualProps {
  value?: readonly Value[]
  defaultValue?: readonly Value[]
  onValueChange?: (value: readonly Value[]) => void
  /**
   * Controls how selected values overflow in the default trigger.
   *
   * `wrap` shows selected values across multiple lines. `ellipsis` keeps them
   * on one line, showing as many values as the trigger width allows while
   * reserving room for a `+n` summary of hidden selected values.
   * @default 'wrap'
   */
  selectedValuesOverflow?: MultiSelectSelectedValuesOverflow
}

export interface MultiSelectGroupProps extends BaseSelectGroupProps {}

export type MultiSelectOptionProps<
  Value extends MultiSelectValue = MultiSelectValue,
> = BaseSelectOptionProps<Value>

export interface MultiSelectTriggerRenderProps<
  Value extends MultiSelectValue = MultiSelectValue,
> extends BaseMultiSelectTriggerRenderProps<Value> {}

export interface MultiSelectTriggerProps<
  Value extends MultiSelectValue = MultiSelectValue,
> extends BaseMultiSelectTriggerProps<Value> {}
