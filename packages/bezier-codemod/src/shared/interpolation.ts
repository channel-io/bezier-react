/* eslint-disable no-template-curly-in-string */
import {
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

import {
  getImportDeclaration,
  hasNamedImport,
} from '../utils/import.js'

export const interpolationTransform = (sourceFile: SourceFile, fromToObj: Record<string, string>) => {
  sourceFile
    .getDescendantsOfKind(SyntaxKind.TemplateExpression).forEach((node) => {
      for (const [from, to] of Object.entries(fromToObj)) {
        if (!node.wasForgotten() && node.getText().includes(`\${${from}}`)) {
          node.replaceWithText(
            node.getText()
              .replaceAll(
                `\${${from}}`, to,
              )
              .replaceAll(';;', ';'),
          )
        }

        const bezierReactImport = getImportDeclaration(sourceFile, '@channel.io/bezier-react')
        const hasCssImport = hasNamedImport(sourceFile, 'css')

        if (!node.wasForgotten() && node.getText().includes(`${from}}`)) {
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
              .replaceAll(from, `css\`\n  ${to};\n\``)
              .replaceAll(';;', ';'),
          )
        }
      }
    })
}
