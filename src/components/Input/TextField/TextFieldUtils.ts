/* Internal dependencies */
import { SemanticNames } from '../../../foundation/Colors/Theme'
import { TextFieldVariant } from './TextField.types'

export function getProperTextFieldBgColor(variant: TextFieldVariant, readOnly: boolean): SemanticNames {
  if (variant === TextFieldVariant.Primary && readOnly) { return 'bg-grey-lighter' }
  if (variant === TextFieldVariant.Secondary) { return 'bg-black-lightest' }
  return 'bg-white-normal'
}

export function getProperTextFieldInputColor(disabled: boolean, readOnly: boolean): SemanticNames {
  if (disabled) { return 'txt-black-dark' }
  if (readOnly) { return 'txt-black-darker' }
  return 'txt-black-darkest'
}
