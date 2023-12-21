/* eslint-disable no-template-curly-in-string */
import {
  Node,
  type SourceFile,
} from 'ts-morph'

import { getArrowFunctionsWithOneArgument } from '../../utils/function.js'

const getRound = (text: string) => text.match(/round(\d+)/)?.[1]

const isRoundingTheme = (node: Node) => node.getText().includes('foundation?.rounding')

const getRoundStyle = (text: string) => {
  let roundStyle = ''
  roundStyle += 'overflow: hidden;\n'
  roundStyle += `  border-radius: var(--radius-${getRound(text)});`
  return roundStyle
}

const replaceRound = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const roundArrowFunctions = getArrowFunctionsWithOneArgument(
        node, isRoundingTheme,
      )
      roundArrowFunctions
        .map((v) => v.getText())
        .forEach(text => {
          node.replaceWithText(
            node.getText()
              .replace(`\${${text}}`, getRoundStyle(text))
              .replaceAll(';;', ';'),
          )
        })
    }
  })
  return oldSourceFileText !== sourceFile.getText()
}

export default replaceRound
