import {
  type ImportDeclaration,
  type ImportSpecifier,
  type ImportSpecifierStructure,
  Node,
  type OptionalKind,
  type SourceFile,
  ts,
} from 'ts-morph'

const iconSourceNamePattern = /^[A-Z][a-zA-Z]*Icon$/
const iconModuleNames = ['isBezierIcon', 'createBezierIcon', 'IconSource', 'BezierIcon', 'IconName']

interface CollectResult {
  bezierReactImportDeclaration: ImportDeclaration
  bezierReactImportDeclarationIndex: number
}

const collect = (sourceFile: SourceFile): CollectResult | null => {
  let bezierReactImportDeclaration: ImportDeclaration | undefined
  let bezierReactImportDeclarationIndex: number = 0

  sourceFile.getStatementsWithComments().some((statement, index) => {
    if (!Node.isImportDeclaration(statement)) {
      return false
    }

    const isBezierReactImport = statement.getModuleSpecifier().getLiteralValue() === '@channel.io/bezier-react'

    if (isBezierReactImport) {
      bezierReactImportDeclaration = statement
      bezierReactImportDeclarationIndex = index
      return true
    }

    return false
  })

  if (!bezierReactImportDeclaration) {
    return null
  }

  return {
    bezierReactImportDeclaration,
    bezierReactImportDeclarationIndex,
  }
}

const migrate = (sourceFile: SourceFile) => ({
  bezierReactImportDeclaration,
  bezierReactImportDeclarationIndex,
}: CollectResult): void => {
  const bezierReactNamedImports = bezierReactImportDeclaration.getNamedImports()

  const bezierReactImportsToRemove: ImportSpecifier[] = []
  const bezierIconsImportsToInsert: OptionalKind<ImportSpecifierStructure>[] = []

  bezierReactNamedImports.forEach((namedImport) => {
    const importName = namedImport.getName()
    const isImportNameToRemove = iconSourceNamePattern.test(importName) || iconModuleNames.includes(importName)

    if (isImportNameToRemove) {
      bezierReactImportsToRemove.push(namedImport)
    }
  })

  bezierReactImportsToRemove.forEach((namedImport) => {
    bezierIconsImportsToInsert.push(namedImport.getStructure())
    namedImport.remove()
  })

  const isEmptyBezierReactImport = bezierReactImportDeclaration.getNamedImports().length === 0

  if (isEmptyBezierReactImport) {
    bezierReactImportDeclaration.remove()
  }

  if (bezierIconsImportsToInsert.length > 0) {
    sourceFile.insertImportDeclaration(bezierReactImportDeclarationIndex, {
      namedImports: bezierIconsImportsToInsert,
      moduleSpecifier: '@channel.io/bezier-icons',
    })

    sourceFile.formatText({
      semicolons: ts.SemicolonPreference.Remove,
    })
  }
}

function iconsToBezierIcons(sourceFile: SourceFile) {
  const collectResult = collect(sourceFile)

  if (collectResult) {
    migrate(sourceFile)(collectResult)
  }
}

export default iconsToBezierIcons
