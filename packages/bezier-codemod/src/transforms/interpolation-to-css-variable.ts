/* eslint-disable no-template-curly-in-string */
import {
  type SourceFile,
  SyntaxKind,
  ts,
} from 'ts-morph'

import {
  getImportDeclaration,
  hasNamedImport,
  removeUnusedNamedImport,
} from '../utils/import.js'

const WARNING_COMMENT = '// NOTE: Do not use font-related css variables below separately, use Text component instead'
const getFontSize = (num: number) => `font-size: var(--typography-size-${num}-font-size);`
const getLineHeight = (num: number) => `line-height: var(--typography-size-${num}-line-height);`
const getLetterSpacing = (num: number) => `letter-spacing: var(--typography-size-${num}-letter-spacing);`

const cssVariableByInterpolation = {
  inputTextStyle: 'color: var(--txt-black-darkest);',
  inputWrapperStyle: 'box-shadow: var(--input-box-shadow);',
  focusedInputWrapperStyle: 'box-shadow: var(--input-box-shadow-focused);',
  erroredInputWrapperStyle: 'box-shadow: var(--input-box-shadow-invalid);',
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

const replaceTemplateExpression = (sourceFile: SourceFile) => {
  sourceFile
    .getDescendantsOfKind(SyntaxKind.TemplateExpression).forEach((node) => {
      for (const [mixin, cssVariable] of Object.entries(cssVariableByInterpolation)) {
        if (!node.wasForgotten() && node.getText().includes(`\${${mixin}}`)) {
          node.replaceWithText(
            node.getText()
              .replaceAll(
                `\${${mixin}}`, cssVariable,
              )
              .replaceAll(';;', ';'),
          )
        }

        const bezierReactImport = getImportDeclaration(sourceFile, '@channel.io/bezier-react')
        const hasCssImport = hasNamedImport(sourceFile, 'css')

        if (!node.wasForgotten() && node.getText().includes(mixin)) {
          if (!hasCssImport) {
            if (bezierReactImport) {
              bezierReactImport.addNamedImport('css')
            } else {
              sourceFile.insertImportDeclaration(0, {
                namedImports: ['css'],
                moduleSpecifier: '@channel.io/bezier-react',
              })
            }
          }

          node.replaceWithText(
            node
              .getText()
              .replaceAll(mixin, `css\`\n  ${cssVariable};\n\``)
              .replaceAll(';;', ';'),
          )
        }
      }
    })
}

const replaceInterpolation = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()

  replaceTemplateExpression(sourceFile)

  const isChanged = sourceFile.getText() !== oldSourceFileText
  if (isChanged) {
    removeUnusedNamedImport(sourceFile)
    sourceFile.formatText({
      semicolons: ts.SemicolonPreference.Remove,
    })
  }
  return isChanged
}

export default replaceInterpolation
