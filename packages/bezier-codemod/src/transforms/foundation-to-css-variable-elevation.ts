/* eslint-disable no-template-curly-in-string */
import {
  Node,
  SyntaxKind,
  type SourceFile,
} from 'ts-morph'

const getElevation = (text: string) => text.match(/ev(\d+)/)?.[1]

const isElevationTheme = (text: string) =>
  text.includes('foundation?.elevation') || text.includes('foundation.elevation')

const replaceElevation = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const elevationArrowFunctions = node
        .getDescendantsOfKind(SyntaxKind.ArrowFunction)
        .filter(v => v.getDescendantsOfKind(SyntaxKind.BindingElement).length === 1)
        .map(v => v.getText())
        .filter(isElevationTheme)

      elevationArrowFunctions.forEach(text => {
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

const transform = (sourceFile: SourceFile) => {
  // replaceTransitionsCSS should precede replaceTheme
  try {
    return replaceElevation(sourceFile)
  } catch (e) {
    console.log(e)
  }
}

export default transform
