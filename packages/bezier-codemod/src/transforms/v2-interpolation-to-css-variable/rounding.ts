/* eslint-disable no-template-curly-in-string */
import { type SourceFile, ts } from 'ts-morph'

import { interpolationTransform } from '../../shared/interpolation.js'
import { removeUnusedNamedImport } from '../../utils/import.js'

const rounds = [1, 3, 4, 6, 8, 12, 16, 20, 32]
const roundStyle = (round: number) =>
  round === 1 ? '1px' : `var(--radius-${round})`
const cssVariableByInterpolation = rounds.reduce(
  (acc, value) => ({
    ...acc,
    [`Rounding.round${value}`]: `overflow: hidden;\n  border-radius: ${roundStyle(value)};`,
  }),
  {}
)

const replaceRadiusInterpolation = (sourceFile: SourceFile) => {
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

export default replaceRadiusInterpolation
