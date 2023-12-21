import {
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

type Name = string
type Member = string
type Value = string
export type EnumTransformMap = Record<Name, Record<Member, Value>>

export const transformEnumMemberToStringLiteral = (sourceFile: SourceFile, enumTransforms: EnumTransformMap) => {
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
