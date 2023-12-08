/* eslint-disable no-template-curly-in-string */
import {
  Node,
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

const getColor = (text: string) => text.match(/\['([a-z-]+)'\]/)?.[1] ?? ''

const isFoundationTheme = (text: string) => text.includes('foundation?.theme') && text.endsWith(']') && !text.includes('getBorder')

const replaceTheme = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const themeArrowFunctions = node
        .getDescendantsOfKind(SyntaxKind.ArrowFunction)
        .filter(v => isFoundationTheme(v.getText()))
        .filter(v => v.getDescendantsOfKind(SyntaxKind.BindingElement).length === 1)
        .map(v => v.getText())

      themeArrowFunctions.forEach(text => {
        node.replaceWithText(
          node.getText()
            .replace(`\${${text}}`, `var(--${getColor(text)})`),
        )
      })
    }
  })
  return sourceFile.getText() !== oldSourceFileText
}

const transform = (sourceFile: SourceFile) => {
  try {
    return replaceTheme(sourceFile)
  } catch (e) {
    console.log(e)
  }
}

export default transform
