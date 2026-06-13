import type { BaseTextInputProps, TextInputRef } from '~/src/v3/BaseTextInput'

interface SearchOwnProps {
  /**
   * If `allowClear` is true, the clear button will be shown when the input has a value.
   * @default false
   */
  allowClear?: boolean
}

type OmittedBaseTextInputProps =
  | 'type'
  | 'leadingSlot'
  | 'trailingSlot'
  | 'withoutLeadingSlotWrapper'
  | 'withoutTrailingSlotWrapper'
  | 'hasError'
  | 'readOnly'
  | 'required'

export interface SearchProps
  extends Omit<BaseTextInputProps, OmittedBaseTextInputProps>,
    SearchOwnProps {}

export type { TextInputRef as SearchRef }
