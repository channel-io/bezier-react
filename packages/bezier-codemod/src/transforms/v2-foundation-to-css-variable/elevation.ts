/* eslint-disable no-template-curly-in-string */
import { Node, type SourceFile } from 'ts-morph'

import { getArrowFunctionsWithOneArgument } from '../../utils/function.js'

const getElevationNum = (text: string) => text.match(/ev(\d+)/)?.[1]

const bgColorByElevationNum = (ev?: string) => {
  switch (ev) {
    case '1':
    case '2':
      return 'bg-white-low'
    case '3':
    case '4':
    case '5':
    case '6':
    default:
      return 'bg-white-high'
  }
}

const getCssVarCode = (arrowFn: string) => {
  const ev = getElevationNum(arrowFn)
  let css = ''
  css += `background-color: var(--${bgColorByElevationNum(ev)});\n`
  css += `  box-shadow: var(--ev-${getElevationNum(arrowFn)});`

  return css
}

const isElevationTheme = (node: Node) =>
  node.getText().includes('foundation?.elevation') ||
  node.getText().includes('foundation.elevation')

const replaceElevation = (sourceFile: SourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (Node.isTemplateExpression(node)) {
      const elevationArrowFunctions = getArrowFunctionsWithOneArgument(
        node,
        isElevationTheme
      )
      elevationArrowFunctions
        .map((v) => v.getText())
        .forEach((text) => {
          node.replaceWithText(
            node
              .getText()
              .replace(`\${${text}}`, getCssVarCode(text))
              .replaceAll(';;', ';')
          )
        })
    }
  })
}

export default replaceElevation
