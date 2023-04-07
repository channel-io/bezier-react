import { type SemanticNames } from '~/src/foundation'

interface CalculateBgColorProps {
  focused: boolean
  hasError: boolean
  readOnly: boolean
}

export function getTextAreaBgColorSemanticName({
  focused,
  hasError,
  readOnly,
}: CalculateBgColorProps): SemanticNames {
  if (readOnly) { return 'bg-grey-lighter' }
  if (focused || hasError) { return 'bg-white-normal' }
  return 'bg-grey-lightest'
}
