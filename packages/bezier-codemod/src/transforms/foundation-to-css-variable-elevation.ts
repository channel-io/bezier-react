/* eslint-disable no-template-curly-in-string */
import {
  Node,
  type SourceFile,
} from 'ts-morph'

import { getArrowFunctionsWithOneArgument } from '../utils/function.js'

const getElevation = (text: string) => text.match(/ev(\d+)/)?.[1]

const isElevationTheme = (node: Node) =>
  node.getText().includes('foundation?.elevation') || node.getText().includes('foundation.elevation')

const replaceElevation = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const elevationArrowFunctions = getArrowFunctionsWithOneArgument(
        node, isElevationTheme,
      )
      elevationArrowFunctions
        .map((v => v.getText()))
        .forEach(text => {
          node.replaceWithText(
            node.getText()
              .replace(`\${${text}}`, `box-shadow: var(--ev-${getElevation(text)});`)
              .replaceAll(';;', ';'),
          )
        })
    }
  })
  return sourceFile.getText() !== oldSourceFileText
}

export default replaceElevation
