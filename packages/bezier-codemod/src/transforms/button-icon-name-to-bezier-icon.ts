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

type ComponentName = string
type Attributes = string[]

const meta: Array<[ComponentName, Attributes]> = [
  ['Button', ['leftContent', 'rightContent']],
]

const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

const getComponentsToMigrate = (sourceFile: SourceFile) => (component: string) => sourceFile
  .getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement)
  .filter((jsxElement) => {
    const tagName = jsxElement.getTagNameNode()
    return tagName.getText().includes(component)
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

const changeIconNameToBezierIcon = (sourceFile: SourceFile) => (jsxElement: JsxSelfClosingElement, attribute: string) => {
  const leftContentAttribute = jsxElement.getAttribute(attribute) as JsxAttribute | undefined

  const expression = leftContentAttribute?.getInitializer()

  if (expression && isStringLiteral(expression) && isIconName(expression.getLiteralValue())) {
    const bezierIcon = bezierIconFromName(expression.getLiteralValue())

    addIconImport(sourceFile)(bezierIcon)

    leftContentAttribute?.setInitializer(`{${bezierIcon}}`)

    return true
  }

  return false
}

export const iconNameInButtonToBezierIcon = (sourceFile: SourceFile) => meta.reduce((acc, [component, attributes]) => {
  const components = getComponentsToMigrate(sourceFile)(component)

  let total = 0
  for (const _component of components) {
    for (const attribute of attributes) {
      total += changeIconNameToBezierIcon(sourceFile)(_component, attribute) ? 1 : 0
    }
  }

  return acc + total
}, 0)
