/* eslint-disable no-template-curly-in-string */
import {
  type CallExpression,
  Node,
  type SourceFile,
  SyntaxKind,
  type ts,
} from 'ts-morph'

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

const hasTransitionFoundation = (text: string) => text.includes('getTransitionsCSS')

const replaceTransitionsCSS = (sourceFile: SourceFile) => {
  const oldSourceFileText = sourceFile.getText()
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const transitionCallExpression = node
        .getDescendantsOfKind(SyntaxKind.CallExpression)
        .find(v => hasTransitionFoundation(v.getText()))

      if (!transitionCallExpression) { return }

      const transitionArrowFunction = node
        .getDescendantsOfKind(SyntaxKind.ArrowFunction)
        .filter(v => v.getDescendantsOfKind(SyntaxKind.BindingElement).length === 1)
        .reverse()
        .find(v => hasTransitionFoundation(v.getText()))

      const transitionStyle = getTransitionStyle(transitionCallExpression)

      if (!transitionStyle) { return }

      node.replaceWithText(
        node.getText()
          .replace(`\${${transitionArrowFunction?.getText()}};\n` ?? '', transitionStyle)
          .replace(`\${${transitionArrowFunction?.getText()}}\n` ?? '', transitionStyle),
      )
    }
  })
  return oldSourceFileText !== sourceFile.getText()
}

const transform = (sourceFile: SourceFile) => {
  try {
    return replaceTransitionsCSS(sourceFile)
  } catch (e) {
    console.log(e)
  }
}

export default transform
