/* eslint-disable no-template-curly-in-string */
import {
  Node,
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

const getRound = (text: string) => text.match(/round(\d+)/)?.[1]

const isRoundingTheme = (text: string) => text.includes('foundation?.rounding')

const replaceRound = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const roundArrowFunctions = node
        .getDescendantsOfKind(SyntaxKind.ArrowFunction)
        .filter(v => isRoundingTheme(v.getText()))
        .filter(v => v.getDescendantsOfKind(SyntaxKind.BindingElement).length === 1)
        .map(v => v.getText())

      roundArrowFunctions.forEach(text => {
        node.replaceWithText(
          node.getText()
            .replace(`\${${text}}`, `border-radius: var(--radius-${getRound(text)});`)
            .replaceAll(';;', ';'),
        )
      })
    }
  })
  return oldSourceFileText !== sourceFile.getText()
}

const transform = (sourceFile: SourceFile) => {
  try {
    return replaceRound(sourceFile)
  } catch (e) {
    console.log(e)
  }
}

export default transform
