import {
  type Expression,
  type ImportDeclaration,
  type JsxAttribute,
  type JsxSelfClosingElement,
  Node,
  type SourceFile,
  StringLiteral,
  SyntaxKind,
} from 'ts-morph'

const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

const getButtons = (sourceFile: SourceFile) => sourceFile
  .getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement)
  .filter((jsxElement) => {
    const tagName = jsxElement.getTagNameNode()
    return tagName.getText().includes('Button')
  })

const isIconName = (maybeIconName: string) => regex.test(maybeIconName)

const bezierIconFromName = (iconName: string) => {
  const words = iconName.split('-')
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  const bezierIcon = `${capitalizedWords.join('')}Icon`
  return bezierIcon
}

const isStringLiteral = (expression: Expression): expression is StringLiteral => expression.getKindName() === StringLiteral.name

const isBezierIconImport = (declaration: ImportDeclaration) => declaration.getModuleSpecifier().getLiteralValue() === '@channel.io/bezier-icons'

const isReactImport = (declaration: ImportDeclaration) => declaration.getModuleSpecifier().getLiteralValue() === 'react'

const addIconImport = (sourceFile: SourceFile) => (icon: string) => {
  const reactImportIndex = sourceFile.getStatementsWithComments().findIndex((statement) => Node.isImportDeclaration(statement) && isReactImport(statement))
  const bezierIconImport = sourceFile.getImportDeclarations().find(isBezierIconImport)

  if (!bezierIconImport) {
    sourceFile.insertImportDeclaration(reactImportIndex + 1, {
      namedImports: [icon],
      moduleSpecifier: '@channel.io/bezier-icons',
    })
  } else if (bezierIconImport.getNamedImports().every(v => v.getName() !== icon)) {
    bezierIconImport.addNamedImport({
      name: icon,
    })
  }
}

export const changeIconNameToBezierIcon = (sourceFile: SourceFile) => (jsxElement: JsxSelfClosingElement) => {
  const leftContentAttribute = jsxElement.getAttribute('leftContent') as JsxAttribute | undefined

  const expression = leftContentAttribute?.getInitializer()

  if (expression && isStringLiteral(expression) && isIconName(expression.getLiteralValue())) {
    const bezierIcon = bezierIconFromName(expression.getLiteralValue())

    addIconImport(sourceFile)(bezierIcon)

    leftContentAttribute?.setInitializer(`{${bezierIcon}}`)
  }
}

export const iconNameInButtonToBezierIcon = (sourceFile: SourceFile) => {
  const buttons = getButtons(sourceFile)
  buttons.map(changeIconNameToBezierIcon(sourceFile))

  return buttons.length > 0
}
