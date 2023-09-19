import {
  Node,
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

function transformEnumMemberToStringLiteral(sourceFile: SourceFile) {
  const enumNames: string[] = []

  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.PropertyAccessExpression)) {
      const firstIdentifier = node.getFirstChildByKind(SyntaxKind.Identifier)
      const lastIdentifier = node.getLastChildByKind(SyntaxKind.Identifier)

      if (firstIdentifier && lastIdentifier) {
        const declarationSymbol = firstIdentifier.getSymbol()
        const memberValueDeclaration = lastIdentifier.getSymbol()?.getValueDeclaration()

        if (Node.isEnumMember(memberValueDeclaration)) {
          const enumUsage = node.getFirstAncestorByKind(SyntaxKind.JsxExpression)
          const enumName = declarationSymbol?.getName()
          const enumMemberValue = memberValueDeclaration.getInitializer()?.getText()

          if (enumUsage && enumName && enumMemberValue) {
            enumUsage.replaceWithText(`'${enumMemberValue.slice(1, -1)}'`)
            enumNames.push(enumName)
          }
        }
      }
    }
  })

  if (enumNames.length > 0) {
    sourceFile.fixUnusedIdentifiers()
    return true
  }

  return undefined
}

function enumMemberToStringLiteral(sourceFile: SourceFile): true | void {
  return transformEnumMemberToStringLiteral(sourceFile)
}

export default enumMemberToStringLiteral
