import {
  type ImportDeclaration,
  type ImportSpecifier,
  type ImportSpecifierStructure,
  Node,
  type OptionalKind,
  type SourceFile,
  SyntaxKind,
  ts,
} from 'ts-morph'

function transformEnumToLiteral(sourceFile: SourceFile) {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.EnumMember)) {
      const enumName = node.getFirstAncestorByKind(SyntaxKind.EnumDeclaration)
      if (enumName) {
        const enumUsage = node.getFirstAncestorByKind(SyntaxKind.PropertyAccessExpression)
        if (enumUsage) {
          const enumMemberName = node.getText()
          // const enumNameStr = enumName.getName()
          enumUsage.replaceWithText(`'${enumMemberName}'`)
        }
      }
    }
  })
}

function transformEnumImports(sourceFile: SourceFile) {
  sourceFile.getImportDeclarations().forEach((importDeclaration) => {
    const importSpecifier = importDeclaration.getNamedImports()[0]
    if (importSpecifier) {
      const importedSymbol = importSpecifier.getSymbol()
      if (importedSymbol) {
        const enumDeclaration = importedSymbol.getDeclarations()[0]
        if (enumDeclaration) {
          const usedInFile = sourceFile.forEachDescendantAsArray(
            (node) => node.getText() === enumDeclaration.getName(),
          ).length > 0
          if (!usedInFile) {
            importDeclaration.remove()
          }
        }
      }
    }
  })
}

function enumToStringLiteral(sourceFile: SourceFile): true | void {
  transformEnumToLiteral(sourceFile)
  transformEnumImports(sourceFile)
}

export default enumToStringLiteral
