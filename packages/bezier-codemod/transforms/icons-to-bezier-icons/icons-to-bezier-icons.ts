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
const iconModuleNames = ['isBezierIcon', 'createBezierIcon', 'IconSource', 'BezierIcon', 'IconName']

interface CollectResult {
  bezierReactImportDeclaration: ImportDeclaration
  bezierReactImportDeclarationIndex: number
  topLevelCommentStatements: CommentStatement[]
}

const collect = async (sourceFile: SourceFile): Promise<CollectResult> => {
  let bezierReactImportDeclaration: ImportDeclaration | undefined
  let bezierReactImportDeclarationIndex: number = 0
  const topLevelCommentStatements: CommentStatement[] = []

  let metImportDeclaration = false

  sourceFile.getStatementsWithComments().some((statement, index) => {
    if (Node.isCommentNode(statement) && !metImportDeclaration) {
      topLevelCommentStatements.push(statement)
      return false
    }

    if (Node.isImportDeclaration(statement)) {
      metImportDeclaration = true

      if (statement.getModuleSpecifier().getLiteralValue() === '@channel.io/bezier-react') {
        bezierReactImportDeclaration = statement
        bezierReactImportDeclarationIndex = index
        return true
      }
    }

    return false
  })

  if (!bezierReactImportDeclaration) {
    throw new Error('Not subject to migration.')
  }

  return {
    bezierReactImportDeclaration,
    bezierReactImportDeclarationIndex,
    topLevelCommentStatements,
  }
}

const migrate = (sourceFile: SourceFile) => async ({
  bezierReactImportDeclaration,
  bezierReactImportDeclarationIndex,
  topLevelCommentStatements,
}: CollectResult): Promise<void> => {
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

    // TODO: Not working
    sourceFile.insertStatements(0,
      topLevelCommentStatements.map((statement) => statement.getText()),
    )

    return
  }

  throw new Error('Not subject to migration.')
}

async function iconsToBezierIcons(sourceFile: SourceFile) {
  await collect(sourceFile)
    .then(migrate(sourceFile))
    .then(() => {
      sourceFile.formatText({
        semicolons: ts.SemicolonPreference.Remove,
      })
    })
}

export default iconsToBezierIcons
