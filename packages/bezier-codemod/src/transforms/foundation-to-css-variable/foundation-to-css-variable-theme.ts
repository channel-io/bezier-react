/* eslint-disable no-template-curly-in-string */
import {
  Node,
  type SourceFile,
} from 'ts-morph'

import { getArrowFunctionsWithOneArgument } from '../utils/function.js'

const getColor = (text: string) => text.match(/\['([a-z-]+)'\]/)?.[1] ?? ''

const isFoundationTheme = (node: Node) => node.getText().includes('foundation?.theme') && !node.getText().includes('getBorder')

const replaceTheme = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const themeArrowFunctions = getArrowFunctionsWithOneArgument(node, isFoundationTheme)

      themeArrowFunctions
        .map(v => v.getText())
        .forEach(text => {
          const color = getColor(text)

          if (color) {
            node.replaceWithText(
              node.getText()
                .replace(`\${${text}}`, `var(--${getColor(text)})`),
            )
          }
        })
    }
  })
  return sourceFile.getText() !== oldSourceFileText
}

export default replaceTheme
