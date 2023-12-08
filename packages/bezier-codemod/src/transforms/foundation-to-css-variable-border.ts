/* eslint-disable no-template-curly-in-string */
import {
  type CallExpression,
  Node,
  type SourceFile,
  SyntaxKind,
  type ts,
} from 'ts-morph'

import { getArrowFunctionsWithOneArgument } from '../utils/function.js'

const getBorderStyle = (borderCallExpression: CallExpression<ts.CallExpression>) => {
  const thinkNess = borderCallExpression
    .getArguments()
    .find(Node.isNumericLiteral)
    ?.getText()

  const color = borderCallExpression
    .getArguments()
    .find(Node.isElementAccessExpression)
    ?.getArgumentExpression()
    ?.getText()
    .slice(1, -1)

  const borderDirection = borderCallExpression
    .getArguments()
    .find(Node.isObjectLiteralExpression)

  const hasTop = borderDirection?.getProperty('top')?.getText() !== 'top: false'
  const hasRight = borderDirection?.getProperty('right')?.getText() !== 'right: false'
  const hasBottom = borderDirection?.getProperty('bottom')?.getText() !== 'bottom: false'
  const hasLeft = borderDirection?.getProperty('left')?.getText() !== 'left: false'

  let borderStyle = ''
  let hasAdded = false

  if (!thinkNess || !color) { return null }

  if (hasTop && hasRight && hasBottom && hasLeft) { borderStyle += `border: ${thinkNess}px solid var(--${color});\n` } else {
    if (hasTop) {
      if (hasAdded) { borderStyle += '  ' }
      hasAdded = true
      borderStyle += `border-top: ${thinkNess}px solid var(--${color});\n`
    }
    if (hasRight) {
      if (hasAdded) { borderStyle += '  ' }
      hasAdded = true
      borderStyle += `border-right: ${thinkNess}px solid var(--${color});\n`
    }
    if (hasBottom) {
      if (hasAdded) { borderStyle += '  ' }
      hasAdded = true
      borderStyle += `border-bottom: ${thinkNess}px solid var(--${color});\n`
    }
    if (hasLeft) {
      if (hasAdded) { borderStyle += '  ' }
      hasAdded = true
      borderStyle += `border-left: ${thinkNess}px solid var(--${color});\n`
    }
  }

  return borderStyle
}

const hasBorderFoundation = (node: Node) => node.getText().includes('getBorder')

const replaceBorder = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const borderCallExpression = node
        .getDescendantsOfKind(SyntaxKind.CallExpression)
        .find(hasBorderFoundation)

      if (!borderCallExpression) { return }

      const borderArrowFunctions = getArrowFunctionsWithOneArgument(
        node, hasBorderFoundation,
      )
      const borderStyle = getBorderStyle(borderCallExpression)

      if (!borderStyle) { return }

      borderArrowFunctions
        .map((v) => v.getText())
        .forEach((text) => {
          node.replaceWithText(
            node.getText()
              .replace(`\${${text}};\n` ?? '', borderStyle)
              .replace(`\${${text}}\n` ?? '', borderStyle),
          )
        })
    }
  })
  return sourceFile.getText() !== oldSourceFileText
}

const transform = (sourceFile: SourceFile) => {
  try {
    return replaceBorder(sourceFile)
  } catch (e) {
    console.log(e)
  }
}

export default transform
