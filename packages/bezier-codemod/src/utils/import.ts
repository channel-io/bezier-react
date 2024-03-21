import { type SourceFile, SyntaxKind } from 'ts-morph'

export const getImportDeclaration = (
  sourceFile: SourceFile,
  specifier: string
) =>
  sourceFile
    .getImportDeclarations()
    .find(
      (declaration) =>
        declaration.getModuleSpecifier().getLiteralValue() === specifier
    )

export const getImportDeclarations = (
  sourceFile: SourceFile,
  specifier: string
) =>
  sourceFile
    .getImportDeclarations()
    .filter(
      (declaration) =>
        declaration.getModuleSpecifier().getLiteralValue() === specifier
    )

export const hasNamedImportInImportDeclaration = (
  sourceFile: SourceFile,
  namedImport: string,
  moduleName: string
) => {
  const importDeclarations = getImportDeclarations(sourceFile, moduleName)
  return importDeclarations
    .flatMap((v) => v?.getNamedImports())
    .map((v) => v.getText())
    .includes(namedImport)
}

export const getNamedImport = (sourceFile: SourceFile, namedImport: string) =>
  sourceFile
    .getImportDeclarations()
    .flatMap((declaration) => declaration.getNamedImports())
    .find((importSpecifier) => importSpecifier.getName() === namedImport)

export const hasNamedImport = (sourceFile: SourceFile, namedImport: string) =>
  !!getNamedImport(sourceFile, namedImport)

export const removeNamedImport = (
  sourceFile: SourceFile,
  namedImport: string
) => getNamedImport(sourceFile, namedImport)?.remove()

export const removeUnusedNamedImport = (
  sourceFile: SourceFile,
  importDeclarations?: string[]
) => {
  const trimQuoteAtBothEnds = (text: string) =>
    text.match(/^['"](.*)['"]$/)?.[1]

  sourceFile
    .getImportDeclarations()
    .flatMap((declaration) => declaration.getNamedImports())
    .filter(
      (v) =>
        sourceFile
          .getDescendantsOfKind(SyntaxKind.Identifier)
          .filter((_v) => _v.getText() === v.getText()).length === 1
    )
    .forEach((v) => v.remove())

  if (importDeclarations) {
    sourceFile
      .getImportDeclarations()
      .filter((v) =>
        importDeclarations.includes(
          trimQuoteAtBothEnds(v.getModuleSpecifier().getText()) ?? ''
        )
      )
      .forEach((v) => {
        if (!v.getImportClause()) {
          v.remove()
        }
      })
  }
}

export const renameNamedImport = (
  sourceFile: SourceFile,
  targets: string[],
  renameFn: (name: string) => string
) => {
  targets.forEach((target) => {
    if (hasNamedImport(sourceFile, target)) {
      const importSpecifier = getNamedImport(sourceFile, target)
      const alias = importSpecifier?.getAliasNode()
      if (alias) {
        importSpecifier?.replaceWithText(
          `${renameFn(target)} as ${alias.getText()}`
        )
      } else {
        importSpecifier?.replaceWithText(renameFn(target))
        sourceFile
          .getDescendantsOfKind(SyntaxKind.Identifier)
          .filter((v) => v.getText() === target)
          .forEach((v) => v.replaceWithText(renameFn(target)))
      }
    }
  })
}
