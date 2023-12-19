import {
  Node,
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

type EnumTransforms = Record<string, Record<string, string>>

export function transformEnumMemberToStringLiteral(sourceFile: SourceFile, enumTransforms: EnumTransforms) {
  const transformedEnumNames: string[] = []

  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.PropertyAccessExpression)) {
      const firstIdentifier = node.getFirstChildByKind(SyntaxKind.Identifier)
      const lastIdentifier = node.getLastChildByKind(SyntaxKind.Identifier)

      if (firstIdentifier && lastIdentifier) {
        const declarationSymbol = firstIdentifier.getSymbol()
        const memberSymbol = lastIdentifier.getSymbol()
        const memberValueDeclaration = memberSymbol?.getValueDeclaration()

        if (Node.isEnumMember(memberValueDeclaration)) {
          const enumName = declarationSymbol?.getName()
          const enumMember = memberSymbol?.getName()

          if (enumName && enumMember) {
            const newEnumMemberValue = enumTransforms[enumName][enumMember]
            const ancestor = node.getFirstAncestor()
            if (ancestor?.isKind(SyntaxKind.JsxExpression)) {
              ancestor.replaceWithText(`'${newEnumMemberValue}'`)
            } else {
              node.replaceWithText(`'${newEnumMemberValue}'`)
            }

            transformedEnumNames.push(enumName)
          }
        }
      }
    }
  })

  if (transformedEnumNames.length > 0) {
    sourceFile.fixUnusedIdentifiers()
    return true
  }

  return undefined
}

function enumMemberToStringLiteral(sourceFile: SourceFile): true | void {
  const enumTransforms: EnumTransforms = {
    ProgressBarSize: {
      M: 'm',
      S: 's',
    },
    ProgressBarVariant: {
      Green: 'green',
      GreenAlt: 'green-alt',
      Monochrome: 'monochrome',
    },
  }
  return transformEnumMemberToStringLiteral(sourceFile, enumTransforms)
}

export default enumMemberToStringLiteral
