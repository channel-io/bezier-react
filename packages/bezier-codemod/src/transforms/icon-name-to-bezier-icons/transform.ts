import {
  type Expression,
  type ImportDeclaration,
  type JsxAttribute,
  type JsxSelfClosingElement,
  Node,
  type SourceFile,
  StringLiteral,
  SyntaxKind,
  ts,
} from 'ts-morph'

type ComponentName = string
type Attributes = string[]

const transformationTargets: Array<[ComponentName, Attributes]> = [
  ['Button', ['leftContent', 'rightContent']],
  ['Banner', ['icon', 'actionIcon']],
]

const regex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

const getComponentsToMigrate = (sourceFile: SourceFile) => (component: string) => sourceFile
  .getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement)
  .filter((jsxElement) => {
    const tagName = jsxElement.getTagNameNode()
    return tagName.getText().includes(component)
  })

const bezierIconFromName = (iconName: string) => {
  const words = iconName.split('-')
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  const bezierIcon = `${capitalizedWords.join('')}Icon`
  return bezierIcon
}

const isIconName = (maybeIconName: string) => regex.test(maybeIconName)

const isStringLiteral = (expression: Expression): expression is StringLiteral => expression.getKindName() === StringLiteral.name

const isBezierIconImport = (declaration: ImportDeclaration) => declaration.getModuleSpecifier().getLiteralValue() === '@channel.io/bezier-icons'

const isReactImport = (declaration: ImportDeclaration) => declaration.getModuleSpecifier().getLiteralValue() === 'react'

const isBezierReactImport = (declaration: ImportDeclaration) => declaration.getModuleSpecifier().getLiteralValue() === '@channel.io/bezier-react'

const addIconImport = (sourceFile: SourceFile) => (icon: string) => {
  const statements = sourceFile.getStatementsWithComments()
  const bezierReactImport = statements.findIndex((statement) => Node.isImportDeclaration(statement) && isBezierReactImport(statement))
  const reactImportIndex = statements.findIndex((statement) => Node.isImportDeclaration(statement) && isReactImport(statement))
  const bezierIconImport = sourceFile.getImportDeclarations().find(isBezierIconImport)
  const importIndex = bezierReactImport > -1 ? bezierReactImport + 1 : reactImportIndex + 1

  if (!bezierIconImport) {
    sourceFile.insertImportDeclaration(importIndex, {
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

    sourceFile.formatText({
      semicolons: ts.SemicolonPreference.Remove,
    })

    leftContentAttribute?.setInitializer(`{${bezierIcon}}`)

    return true
  }

  return false
}

const iconNameToBezierIcon = (sourceFile: SourceFile) => transformationTargets.reduce((acc, [component, attributes]) => {
  const components = getComponentsToMigrate(sourceFile)(component)

  const migratedComponents = components.reduce((_acc, cur) => {
    const isMigrated = attributes
      .map(attribute => changeIconNameToBezierIcon(sourceFile)(cur, attribute))
      .some(v => v) ? 1 : 0
    return acc + isMigrated
  }, 0)

  return acc + migratedComponents
}, 0) > 0

export default iconNameToBezierIcon
