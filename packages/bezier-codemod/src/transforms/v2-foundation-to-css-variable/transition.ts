/* eslint-disable no-template-curly-in-string */
import {
  type CallExpression,
  Node,
  type SourceFile,
  SyntaxKind,
  type ts,
} from 'ts-morph'

import { getArrowFunctionsWithOneArgument } from '../../utils/function.js'
import { removeUnusedNamedImport } from '../../utils/import.js'

const cssVarByDuration: Record<string, string> = {
  'TransitionDuration.S': 'var(--transition-s)',
  'TransitionDuration.M': 'var(--transition-m)',
  'TransitionDuration.L': 'var(--transition-l)',
}

const getTransitionStyle = (
  transitionCallExpression: CallExpression<ts.CallExpression>
) => {
  const firstArg = transitionCallExpression.getArguments()[0]

  if (!firstArg.getText().includes("'")) {
    return null
  }

  const properties = (
    Node.isArrayLiteralExpression(firstArg)
      ? firstArg.getElements().map((v) => v.getText())
      : [firstArg.getText()]
  ).map((text) => text.slice(1, -1))
  const duration =
    transitionCallExpression.getArguments()[1]?.getText() ??
    'TransitionDuration.S'
  const thirdArg = transitionCallExpression.getArguments()[2]?.getText()
  const delay = thirdArg ? ` ${thirdArg}ms` : ''

  if (!cssVarByDuration[duration]) {
    return null
  }

  const transitionStyle = `transition: ${properties.map((property) => `${property} ${cssVarByDuration[duration]}${delay}`).join(', ')};\n`

  return transitionStyle
}

const hasTransitionFoundation = (node: Node) =>
  node.getText().includes('getTransitionsCSS')

const replaceTransitionsCSS = (sourceFile: SourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const oldSourceFile = sourceFile.getText()
      const transitionCallExpression = node
        .getDescendantsOfKind(SyntaxKind.CallExpression)
        .find(hasTransitionFoundation)

      if (!transitionCallExpression) {
        return
      }

      const transitionArrowFunctions = getArrowFunctionsWithOneArgument(
        node,
        hasTransitionFoundation
      )
      const transitionStyle = getTransitionStyle(transitionCallExpression)

      if (!transitionStyle) {
        return
      }

      transitionArrowFunctions
        .map((v) => v.getText())
        .forEach((text) => {
          node.replaceWithText(
            node
              .getText()
              .replace(`\${${text}};\n`, transitionStyle)
              .replace(`\${${text}}\n`, transitionStyle)
          )
        })

      if (oldSourceFile !== sourceFile.getText()) {
        removeUnusedNamedImport(sourceFile, ['@channel.io/bezier-react'])
      }
    }
  })
}

export default replaceTransitionsCSS
