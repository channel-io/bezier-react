/* eslint-disable no-template-curly-in-string */
import {
  type SourceFile,
  SyntaxKind,
  ts,
} from 'ts-morph'

const cssVariableByMixin = {
  inputTextStyle: 'color: var(--txt-black-darkest);',
  inputWrapperStyle: 'box-shadow: var(--input-box-shadow);',
  focusedInputWrapperStyle: 'box-shadow: var(--input-box-shadow-focused);',
  erroredInputWrapperStyle: 'box-shadow: var(--input-box-shadow-invalid);',
}

const replaceMixin = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()

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

        const bezierReactImport = sourceFile.getImportDeclarations().find((declaration) => declaration.getModuleSpecifier().getLiteralValue() === '@channel.io/bezier-react')
        const hasCssImport = sourceFile.getImportDeclarations().flatMap((declaration) => declaration.getNamedImports()).some((namedImport) => namedImport.getText() === 'css')

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

  const isChanged = sourceFile.getText() !== oldSourceFileText
  if (isChanged) {
    sourceFile
      .getImportDeclarations()
      .find((declaration) => declaration.getModuleSpecifier().getLiteralValue() === '@channel.io/bezier-react')
      ?.getNamedImports()
      .filter(v => Object.keys(cssVariableByMixin).includes(v.getText()))
      .forEach(v => v.remove())

    sourceFile.formatText({
      semicolons: ts.SemicolonPreference.Remove,
    })
  }
  return isChanged
}

export default replaceMixin
