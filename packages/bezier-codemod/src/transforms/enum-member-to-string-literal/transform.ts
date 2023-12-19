import {
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

type EnumTransforms = Record<string, Record<string, string>>

export function transformEnumMemberToStringLiteral(sourceFile: SourceFile, enumTransforms: EnumTransforms) {
  const transformedEnumNames: string[] = []

  sourceFile
    .getDescendantsOfKind(SyntaxKind.PropertyAccessExpression)
    .forEach((node) => {
      const firstIdentifier = node.getFirstChildByKind(SyntaxKind.Identifier)
      const lastIdentifier = node.getLastChildByKind(SyntaxKind.Identifier)

      const enumName = firstIdentifier?.getText()
      const enumValue = lastIdentifier?.getText()

      if (!enumName || !enumValue) { return }
      if (!Object.keys(enumTransforms).includes(enumName)) { return }

      const newEnumMemberValue = enumTransforms[enumName]?.[enumValue]
      const ancestor = node.getFirstAncestor()

      if (!newEnumMemberValue) { return }

      if (ancestor?.isKind(SyntaxKind.JsxExpression)) {
        ancestor.replaceWithText(`'${newEnumMemberValue}'`)
      } else {
        node.replaceWithText(`'${newEnumMemberValue}'`)
      }

      transformedEnumNames.push(enumName)
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
