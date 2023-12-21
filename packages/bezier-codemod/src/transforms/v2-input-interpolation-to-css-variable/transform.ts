/* eslint-disable no-template-curly-in-string */
import {
  type SourceFile,
  ts,
} from 'ts-morph'

import { interpolationTransform } from '../../shared/interpolation.js'
import { removeUnusedNamedImport } from '../../utils/import.js'

const cssVariableByInterpolation = {
  inputTextStyle: 'color: var(--txt-black-darkest);',
  inputWrapperStyle: 'box-shadow: var(--input-box-shadow);',
  focusedInputWrapperStyle: 'box-shadow: var(--input-box-shadow-focused);',
  erroredInputWrapperStyle: 'box-shadow: var(--input-box-shadow-invalid);',
}

const replaceInputInterpolation = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()

  interpolationTransform(sourceFile, cssVariableByInterpolation)

  const isChanged = sourceFile.getText() !== oldSourceFileText
  if (isChanged) {
    removeUnusedNamedImport(sourceFile)
    sourceFile.formatText({
      semicolons: ts.SemicolonPreference.Remove,
    })
  }
  return isChanged
}

export default replaceInputInterpolation
