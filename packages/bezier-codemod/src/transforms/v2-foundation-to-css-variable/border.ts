/* eslint-disable no-template-curly-in-string */
import {
  type CallExpression,
  Node,
  type SourceFile,
  SyntaxKind,
  type ts,
} from 'ts-morph'

import { getArrowFunctionsWithOneArgument } from '../../utils/function.js'

const getBorderStyle = (
  borderCallExpression: CallExpression<ts.CallExpression>
) => {
  const width = borderCallExpression
    .getArguments()
    .find(Node.isNumericLiteral)
    ?.getText()

  const color = borderCallExpression
    .getArguments()
    .find(Node.isElementAccessExpression)
    ?.getArgumentExpression()
    ?.getText()
    .slice(1, -1)

  if (!color || !width) {
    return null
  }

  const borderDirection = borderCallExpression
    .getArguments()
    .find(Node.isObjectLiteralExpression)

  const hasBorders = ['top', 'right', 'bottom', 'left'].map(
    (value) =>
      borderDirection?.getProperty(value)?.getText() !== `${value}: false`
  )

  let borderStyle = ''

  if (hasBorders.every((v) => v)) {
    borderStyle = `border: ${width}px solid var(--${color});\n`
  } else {
    borderStyle += `border-color: var(--${color});\n`
    borderStyle += `  border-style: ${hasBorders
      .map((hasBorder) => (hasBorder ? 'solid' : 'none'))
      .join(' ')};\n`
    borderStyle += `  border-width: ${width}px;\n`
  }

  return borderStyle
}

const hasBorderFoundation = (node: Node) => node.getText().includes('getBorder')

const replaceBorder = (sourceFile: SourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const borderCallExpression = node
        .getDescendantsOfKind(SyntaxKind.CallExpression)
        .find(hasBorderFoundation)

      if (!borderCallExpression) {
        return
      }

      const borderArrowFunctions = getArrowFunctionsWithOneArgument(
        node,
        hasBorderFoundation
      )
      const borderStyle = getBorderStyle(borderCallExpression)

      if (!borderStyle) {
        return
      }

      borderArrowFunctions
        .map((v) => v.getText())
        .forEach((text) => {
          node.replaceWithText(
            node
              .getText()
              .replace(`\${${text}};\n`, borderStyle)
              .replace(`\${${text}}\n`, borderStyle)
          )
        })
    }
  })
}

export default replaceBorder
