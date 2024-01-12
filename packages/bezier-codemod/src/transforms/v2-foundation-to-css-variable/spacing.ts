/* eslint-disable no-template-curly-in-string */
import {
  Node,
  type SourceFile,
} from 'ts-morph'

import { getArrowFunctionsWithOneArgument } from '../../utils/function.js'

const spacingToPx: Record<string, string> = {
  s1: '2px',
  s2: '4px',
  s3: '6px',
  s4: '8px',
  s5: '12px',
  s6: '16px',
  s7: '20px',
  s8: '24px',
  s9: '30px',
  s10: '44px',
}

const getSpacing = (text: string) => text.match(/spacing\.?([\w]+)/)?.[1]

const isFoundationSpacing = (node: Node) => node.getText().includes('{ foundation }) => foundation?.spacing.')

const replaceSpacing = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const themeArrowFunctions = getArrowFunctionsWithOneArgument(node, isFoundationSpacing)

      themeArrowFunctions
        .map(v => v.getText())
        .forEach(text => {
          const spacing = getSpacing(text)

          if (spacing && spacingToPx[spacing]) {
            node.replaceWithText(
              node.getText()
                .replace(`\${${text}}`, spacingToPx[spacing]),
            )
          }
        })
    }
  })
  return sourceFile.getText() !== oldSourceFileText
}

export default replaceSpacing
