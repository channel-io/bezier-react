import {
  type CommentStatement,
  type ImportDeclaration,
  type ImportSpecifier,
  type ImportSpecifierStructure,
  Node,
  type OptionalKind,
  type SourceFile,
  ts,
} from 'ts-morph'

const iconSourceNamePattern = /^[A-Z][a-zA-Z]*Icon$/
const iconUtilNames = ['isBezierIcon', 'createBezierIcon']
const iconTypeNames = ['IconSource', 'BezierIcon', 'IconName']
const iconModuleNames = [...iconUtilNames, ...iconTypeNames]

function iconsToBezierIcons(sourceFile: SourceFile): void {
  let bezierReactImportDeclaration: ImportDeclaration | undefined
  let bezierReactImportDeclarationIndex: number = 0

  let metImportDeclaration = false
  const topLevelCommentStatements: CommentStatement[] = []

  sourceFile.getStatementsWithComments().some((statement, index) => {
    if (!metImportDeclaration && Node.isCommentNode(statement)) {
      topLevelCommentStatements.push(statement)
      return false
    }

    if (!Node.isImportDeclaration(statement)) {
      return false
    }

    metImportDeclaration = true
    const importDeclaration = statement

    if (importDeclaration.getModuleSpecifier().getLiteralValue() !== '@channel.io/bezier-react') {
      return false
    }

    bezierReactImportDeclaration = importDeclaration
    bezierReactImportDeclarationIndex = index
    return true
  })

  if (bezierReactImportDeclaration) {
    const namedImports = bezierReactImportDeclaration.getNamedImports()
    const importSpecifiersToRemove: ImportSpecifier[] = []
    const clonedImportSpecifierStructures: OptionalKind<ImportSpecifierStructure>[] = []

    namedImports.forEach((importSpecifier) => {
      const importSpecifierName = importSpecifier.getName()

      if (iconSourceNamePattern.test(importSpecifierName) || iconModuleNames.includes(importSpecifierName)) {
        importSpecifiersToRemove.push(importSpecifier)
      }
    })

    importSpecifiersToRemove.forEach((importSpecifier) => {
      clonedImportSpecifierStructures.push(importSpecifier.getStructure())
      importSpecifier.remove()
    })

    if (bezierReactImportDeclaration.getNamedImports().length === 0) {
      bezierReactImportDeclaration.remove()
    }

    if (clonedImportSpecifierStructures.length > 0) {
      sourceFile.insertImportDeclaration(bezierReactImportDeclarationIndex, {
        namedImports: clonedImportSpecifierStructures,
        moduleSpecifier: '@channel.io/bezier-icons',
      })
    }

    // TODO: Not working
    sourceFile.insertStatements(0, topLevelCommentStatements.map((statement) => statement.getText()))

    sourceFile.formatText({
      semicolons: ts.SemicolonPreference.Remove,
    })
  }
}

export default iconsToBezierIcons
