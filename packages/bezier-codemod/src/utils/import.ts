import {
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

export const getImportDeclaration = (sourceFile: SourceFile, specifier: string) =>
  sourceFile
    .getImportDeclarations()
    .find((declaration) => declaration.getModuleSpecifier().getLiteralValue() === specifier)

export const removeImportDeclarationWithoutImport = (sourceFile: SourceFile) => {
  sourceFile
    .getDescendantsOfKind(SyntaxKind.ImportDeclaration)
    .filter((v) => v.getDescendantsOfKind(SyntaxKind.ImportClause).length === 0)
    .forEach((v) => {
      v.remove()
    })
}

export const getNamedImport = (sourceFile: SourceFile, namedImport: string) =>
  sourceFile
    .getImportDeclarations()
    .flatMap((declaration) => declaration.getNamedImports())
    .find((importSpecifier) => importSpecifier.getText() === namedImport)

export const hasNamedImport = (sourceFile: SourceFile, namedImport: string) =>
  !!getNamedImport(sourceFile, namedImport)

export const removeNamedImport = (sourceFile: SourceFile, namedImport: string) =>
  getNamedImport(sourceFile, namedImport)?.remove()
