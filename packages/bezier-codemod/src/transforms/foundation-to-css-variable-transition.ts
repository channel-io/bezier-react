/* eslint-disable no-template-curly-in-string */
import {
  type CallExpression,
  Node,
  type SourceFile,
  SyntaxKind,
  type ts,
} from 'ts-morph'

import { getArrowFunctionsWithOneArgument } from '../utils/function.js'

const cssVarByDuration: Record<string, string> = {
  'TransitionDuration.S': 'var(--transition-duration-s)',
  'TransitionDuration.M': 'var(--transition-duration-m)',
  'TransitionDuration.L': 'var(--transition-duration-l)',
}

const getTransitionStyle = (transitionCallExpression: CallExpression<ts.CallExpression>) => {
  const firstArg = transitionCallExpression.getArguments()[0]

  if (!firstArg.getText().includes("'")) { return null }

  const properties = (Node.isArrayLiteralExpression(firstArg) ? firstArg.getElements().map(v => v.getText()) : [firstArg.getText()])
    .map(text => text.slice(1, -1))
  const duration = transitionCallExpression.getArguments()[1]?.getText() ?? 'TransitionDuration.S'
  const thirdArg = transitionCallExpression.getArguments()[2]?.getText()
  const delay = thirdArg ? ` ${thirdArg}ms` : ''

  if (!cssVarByDuration[duration]) { return null }

  const transitionStyle = `transition: ${properties.map((property) => `${property} ${cssVarByDuration[duration]} cubic-bezier(.3,0,0,1)${delay}`).join(', ')};\n`

  return transitionStyle
}

const hasTransitionFoundation = (node: Node) => node.getText().includes('getTransitionsCSS')

const replaceTransitionsCSS = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const transitionCallExpression = node
        .getDescendantsOfKind(SyntaxKind.CallExpression)
        .find(hasTransitionFoundation)

      if (!transitionCallExpression) { return }

      const transitionArrowFunctions = getArrowFunctionsWithOneArgument(
        node, hasTransitionFoundation,
      )
      const transitionStyle = getTransitionStyle(transitionCallExpression)

      if (!transitionStyle) { return }

      transitionArrowFunctions
        .map(v => v.getText())
        .forEach((text) => {
          node.replaceWithText(
            node.getText()
              .replace(`\${${text}};\n` ?? '', transitionStyle)
              .replace(`\${${text}}\n` ?? '', transitionStyle),
          )
        })
    }
  })
  return oldSourceFileText !== sourceFile.getText()
}

export default replaceTransitionsCSS
