import type {
  BaseSelectCommonProps,
  BaseSelectGroupProps,
  BaseSelectOptionData,
  BaseSelectOptionProps,
  BaseSelectOptionSideContent,
  BaseSelectTriggerProps,
  BaseSelectTriggerRenderProps,
  BaseSelectTriggerSize,
  BaseSelectTriggerVisualProps,
  BaseSelectValue,
} from '~/src/v3/BaseSelect/BaseSelect.types'

export type SelectValue = BaseSelectValue

export type SelectTriggerSize = BaseSelectTriggerSize

export type SelectOptionSideContent = BaseSelectOptionSideContent

export type SelectOptionData<Value extends SelectValue = SelectValue> =
  BaseSelectOptionData<Value>

export interface SelectProps<Value extends SelectValue = SelectValue>
  extends BaseSelectCommonProps,
    BaseSelectTriggerVisualProps {
  value?: Value | null
  defaultValue?: Value | null
  onValueChange?: (value: Value) => void
}

export interface SelectGroupProps extends BaseSelectGroupProps {}

export type SelectOptionProps<Value extends SelectValue = SelectValue> =
  BaseSelectOptionProps<Value>

export interface SelectTriggerRenderProps<
  Value extends SelectValue = SelectValue,
> extends BaseSelectTriggerRenderProps<Value> {}

export interface SelectTriggerProps<Value extends SelectValue = SelectValue>
  extends BaseSelectTriggerProps<Value> {}
