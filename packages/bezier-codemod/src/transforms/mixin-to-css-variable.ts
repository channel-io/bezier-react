/* eslint-disable no-template-curly-in-string */
import {
  type SourceFile,
  SyntaxKind,
  ts,
} from 'ts-morph'

import {
  getImportDeclaration,
  hasNamedImport,
  removeNamedImport,
} from '../utils/import.js'

const cssVariableByMixin = {
  inputTextStyle: 'color: var(--txt-black-darkest);',
  inputWrapperStyle: 'box-shadow: var(--input-box-shadow);',
  focusedInputWrapperStyle: 'box-shadow: var(--input-box-shadow-focused);',
  erroredInputWrapperStyle: 'box-shadow: var(--input-box-shadow-invalid);',
}

const replaceTemplateExpression = (sourceFile: SourceFile) => {
  sourceFile
    .getDescendantsOfKind(SyntaxKind.TemplateExpression).forEach((node) => {
      for (const [mixin, cssVariable] of Object.entries(cssVariableByMixin)) {
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

const removeMixinImports = (sourceFile: SourceFile) => {
  Object.keys(cssVariableByMixin)
    .forEach(v => removeNamedImport(sourceFile, v))
}

const replaceMixin = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()

  replaceTemplateExpression(sourceFile)

  const isChanged = sourceFile.getText() !== oldSourceFileText
  if (isChanged) {
    removeMixinImports(sourceFile)
    sourceFile.formatText({
      semicolons: ts.SemicolonPreference.Remove,
    })
  }
  return isChanged
}

export default replaceMixin
