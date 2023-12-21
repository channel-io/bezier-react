/* eslint-disable no-template-curly-in-string */
import { type SourceFile } from 'ts-morph'

import { transformEnumMemberToStringLiteral } from '../../shared/enum.js'
import { interpolationTransform } from '../../shared/interpolation.js'
import { removeUnusedNamedImport } from '../../utils/import.js'

const cssVariableByInterpolation = {
  'ZIndex.Hide': 'var(--z-index-hidden);',
  'ZIndex.Auto': 'var(--z-index-auto);',
  'ZIndex.Base': 'var(--z-index-base);',
  'ZIndex.Float': 'var(--z-index-float);',
  'ZIndex.Overlay': 'var(--z-index-overlay);',
  'ZIndex.Modal': 'var(--z-index-modal);',
  'ZIndex.Toast': 'var(--z-index-toast);',
  'ZIndex.Tooltip': 'var(--z-index-tooltip);',
  'ZIndex.Important': 'var(--z-index-important);',
}

const replaceZIndexInterpolation = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()

  interpolationTransform(sourceFile, cssVariableByInterpolation)
  transformEnumMemberToStringLiteral(sourceFile, {
    ZIndex: {
      Hide: 'var(--z-index-hidden)',
      Base: 'var(--z-index-base)',
      Float: 'var(--z-index-float)',
      Overlay: 'var(--z-index-overlay)',
      Modal: 'var(--z-index-modal)',
      Toast: 'var(--z-index-toast)',
      Tooltip: 'var(--z-index-tooltip)',
      Important: 'var(--z-index-important)',
    },
  })

  const isChanged = sourceFile.getText() !== oldSourceFileText
  if (isChanged) {
    removeUnusedNamedImport(sourceFile)
  }
  return isChanged
}

export default replaceZIndexInterpolation
