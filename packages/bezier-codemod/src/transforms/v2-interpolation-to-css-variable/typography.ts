/* eslint-disable no-template-curly-in-string */
import {
  type SourceFile,
  ts,
} from 'ts-morph'

import { interpolationTransform } from '../../shared/interpolation.js'
import { removeUnusedNamedImport } from '../../utils/import.js'

const WARNING_COMMENT = '/* NOTE: Do not use font-related css variables below separately, use Text component instead */'
const getFontSize = (num: number) => `font-size: var(--typography-size-${num}-font-size);`
const getLineHeight = (num: number) => `line-height: var(--typography-size-${num}-line-height);`
const getLetterSpacing = (num: number) => `letter-spacing: var(--typography-size-${num}-letter-spacing);`

const cssVariableByInterpolation = {
  'Typography.Size11': `${WARNING_COMMENT}\n  ${getFontSize(11)}\n  ${getLineHeight(11)}`,
  'Typography.Size12': `${WARNING_COMMENT}\n  ${getFontSize(12)}\n  ${getLineHeight(12)}`,
  'Typography.Size13': `${WARNING_COMMENT}\n  ${getFontSize(13)}\n  ${getLineHeight(13)}`,
  'Typography.Size14': `${WARNING_COMMENT}\n  ${getFontSize(14)}\n  ${getLineHeight(14)}`,
  'Typography.Size15': `${WARNING_COMMENT}\n  ${getFontSize(15)}\n  ${getLineHeight(15)}\n  ${getLetterSpacing(15)}`,
  'Typography.Size16': `${WARNING_COMMENT}\n  ${getFontSize(16)}\n  ${getLineHeight(16)}\n  ${getLetterSpacing(16)}`,
  'Typography.Size17': `${WARNING_COMMENT}\n  ${getFontSize(17)}\n  ${getLineHeight(17)}\n  ${getLetterSpacing(17)}`,
  'Typography.Size18': `${WARNING_COMMENT}\n  ${getFontSize(18)}\n  ${getLineHeight(18)}`,
  'Typography.Size22': `${WARNING_COMMENT}\n  ${getFontSize(22)}\n  ${getLineHeight(22)}\n  ${getLetterSpacing(22)}`,
  'Typography.Size24': `${WARNING_COMMENT}\n  ${getFontSize(24)}\n  ${getLineHeight(24)}\n  ${getLetterSpacing(24)}`,
  'Typography.Size30': `${WARNING_COMMENT}\n  ${getFontSize(30)}\n  ${getLineHeight(30)}\n  ${getLetterSpacing(30)}`,
  'Typography.Size36': `${WARNING_COMMENT}\n  ${getFontSize(36)}\n  ${getLineHeight(36)}\n  ${getLetterSpacing(36)}`,
}

const replaceTypographyInterpolation = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()

  interpolationTransform(sourceFile, cssVariableByInterpolation)

  const isChanged = sourceFile.getText() !== oldSourceFileText
  if (isChanged) {
    removeUnusedNamedImport(sourceFile, ['@channel.io/bezier-react'])
    sourceFile.formatText({
      semicolons: ts.SemicolonPreference.Remove,
    })
  }
  return isChanged
}

export default replaceTypographyInterpolation
