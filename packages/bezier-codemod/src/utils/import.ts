import { type SourceFile } from 'ts-morph'

export const getImportDeclaration = (sourceFile: SourceFile, specifier: string) =>
  sourceFile
    .getImportDeclarations()
    .find((declaration) => declaration.getModuleSpecifier().getLiteralValue() === specifier)

export const getNamedImport = (sourceFile: SourceFile, namedImport: string) =>
  sourceFile
    .getImportDeclarations()
    .flatMap((declaration) => declaration.getNamedImports())
    .find((importSpecifier) => importSpecifier.getText() === namedImport)

export const hasNamedImport = (sourceFile: SourceFile, namedImport: string) =>
  !!getNamedImport(sourceFile, namedImport)

export const removeNamedImport = (sourceFile: SourceFile, namedImport: string) =>
  getNamedImport(sourceFile, namedImport)?.remove()
