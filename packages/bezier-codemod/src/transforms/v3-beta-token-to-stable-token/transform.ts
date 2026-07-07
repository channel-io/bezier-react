import { type SourceFile, SyntaxKind } from 'ts-morph'

const MODULE_SPECIFIER_MAP: Record<string, string> = {
  '@channel.io/bezier-tokens/beta': '@channel.io/bezier-tokens',
  '@channel.io/bezier-tokens/dist/beta/css/styles.css':
    '@channel.io/bezier-tokens/css/styles.css',
  '@channel.io/bezier-tokens/dist/beta/scss':
    '@channel.io/bezier-tokens/dist/scss',
}

const IDENTIFIER_MAP: Record<string, string> = {
  betaTokens: 'tokens',
  BetaTokenProvider: 'TokenProvider',
  useBetaTokens: 'useTokens',

  BetaThemeName: 'ThemeName',
  BetaGlobalToken: 'GlobalToken',
  BetaSemanticToken: 'SemanticToken',
  BetaFlattenGlobalToken: 'FlattenGlobalToken',
  BetaFlattenSemanticToken: 'FlattenSemanticToken',
  BetaFlattenAllToken: 'FlattenAllToken',
  BetaGlobalColor: 'GlobalColor',
  BetaTypographyFontWeight: 'TypographyFontWeight',
  BetaSemanticColor: 'SemanticColor',
  BetaTextSemanticColor: 'TextSemanticColor',
  BetaIconSemanticColor: 'IconSemanticColor',
  BetaBackgroundSemanticColor: 'BackgroundSemanticColor',
  BetaBorderSemanticColor: 'BorderSemanticColor',
  BetaStateSemanticColor: 'StateSemanticColor',
  BetaElevationSemanticColor: 'ElevationSemanticColor',
  BetaRadius: 'Radius',
  BetaOpacity: 'Opacity',
  BetaElevation: 'Elevation',
  BetaZIndex: 'ZIndex',
}

const getMapValue = (map: Record<string, string>, key: string) =>
  Object.prototype.hasOwnProperty.call(map, key) ? map[key] : undefined

const renameStringLiteral = (text: string) => {
  const renamedModuleSpecifier = getMapValue(MODULE_SPECIFIER_MAP, text)
  if (renamedModuleSpecifier) {
    return renamedModuleSpecifier
  }

  return text
    .replaceAll(
      '@channel.io/bezier-tokens/beta/css/',
      '@channel.io/bezier-tokens/css/'
    )
    .replaceAll(
      '@channel.io/bezier-tokens/beta/scss',
      '@channel.io/bezier-tokens/scss'
    )
    .replaceAll(
      '@channel.io/bezier-tokens/dist/beta/css/',
      '@channel.io/bezier-tokens/css/'
    )
    .replaceAll(
      '@channel.io/bezier-tokens/dist/beta/scss',
      '@channel.io/bezier-tokens/dist/scss'
    )
}

const getRenamedIdentifier = (identifier: string) =>
  getMapValue(IDENTIFIER_MAP, identifier)

const replaceModuleSpecifiers = (sourceFile: SourceFile) => {
  sourceFile.getImportDeclarations().forEach((declaration) => {
    declaration.setModuleSpecifier(
      renameStringLiteral(declaration.getModuleSpecifierValue())
    )
  })

  sourceFile.getExportDeclarations().forEach((declaration) => {
    const moduleSpecifier = declaration.getModuleSpecifierValue()
    if (moduleSpecifier) {
      declaration.setModuleSpecifier(renameStringLiteral(moduleSpecifier))
    }
  })

  sourceFile.getDescendantsOfKind(SyntaxKind.StringLiteral).forEach((node) => {
    const oldValue = node.getLiteralValue()
    const newValue = renameStringLiteral(oldValue)
    if (newValue !== oldValue) {
      node.setLiteralValue(newValue)
    }
  })
}

const renameImportSpecifierReferences = (sourceFile: SourceFile) => {
  sourceFile
    .getImportDeclarations()
    .flatMap((declaration) => declaration.getNamedImports())
    .forEach((specifier) => {
      const importedName = specifier.getName()
      const renamedImportedName = getRenamedIdentifier(importedName)
      if (!renamedImportedName) {
        return
      }

      const alias = specifier.getAliasNode()?.getText()
      const typePrefix = specifier.isTypeOnly() ? 'type ' : ''
      if (alias) {
        specifier.replaceWithText(
          `${typePrefix}${renamedImportedName} as ${alias}`
        )
        return
      }

      const nameNode = specifier.getNameNode()
      if (nameNode.getKind() === SyntaxKind.Identifier) {
        nameNode
          .asKindOrThrow(SyntaxKind.Identifier)
          .findReferencesAsNodes()
          .filter((node) => node !== nameNode)
          .forEach((node) => node.replaceWithText(renamedImportedName))
      }

      specifier.replaceWithText(`${typePrefix}${renamedImportedName}`)
    })
}

const renameExportSpecifierReferences = (sourceFile: SourceFile) => {
  sourceFile
    .getExportDeclarations()
    .flatMap((declaration) => declaration.getNamedExports())
    .forEach((specifier) => {
      const exportedName = specifier.getName()
      const renamedExportedName = getRenamedIdentifier(exportedName)
      if (!renamedExportedName) {
        return
      }

      const alias = specifier.getAliasNode()?.getText()
      const typePrefix = specifier.isTypeOnly() ? 'type ' : ''
      if (alias) {
        specifier.replaceWithText(
          `${typePrefix}${renamedExportedName} as ${alias}`
        )
        return
      }

      const nameNode = specifier.getNameNode()
      if (nameNode.getKind() === SyntaxKind.Identifier) {
        nameNode
          .asKindOrThrow(SyntaxKind.Identifier)
          .findReferencesAsNodes()
          .filter((node) => node !== nameNode)
          .forEach((node) => node.replaceWithText(renamedExportedName))
      }

      specifier.replaceWithText(`${typePrefix}${renamedExportedName}`)
    })
}

const transform = (sourceFile: SourceFile) => {
  replaceModuleSpecifiers(sourceFile)
  renameImportSpecifierReferences(sourceFile)
  renameExportSpecifierReferences(sourceFile)
}

export default transform
