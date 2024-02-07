import {
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

import { renameEnumMember } from '../utils/enum.js'
import {
  hasNamedImportInImportDeclaration,
  removeUnusedNamedImport,
} from '../utils/import.js'

type Name = string
type Member = string
type Value = string
export type EnumTransformMap = Record<Name, Record<Member, Value>>

export const transformEnumToStringLiteralInBezier = (sourceFile: SourceFile, enumTransforms: EnumTransformMap) => {
  const transformedEnumNames: string[] = []

  Object
    .keys(enumTransforms)
    .forEach((enumName) => {
      // if (hasNamedImportInImportDeclaration(sourceFile, enumName, '@channel.io/bezier-react')) {
        sourceFile
          .getDescendantsOfKind(SyntaxKind.PropertyAccessExpression)
          .filter((node) => node.getFirstChildByKind(SyntaxKind.Identifier)?.getText() === enumName)
          .forEach((node) => {
            const enumValue = node.getLastChildByKind(SyntaxKind.Identifier)?.getText()
            if (enumValue) {
              renameEnumMember(node, enumTransforms[enumName][enumValue])
              transformedEnumNames.push(enumName)
            }
          })
      // }
    })

  if (transformedEnumNames.length > 0) {
    // removeUnusedNamedImport(sourceFile, ['@channel.io/bezier-react'])
    removeUnusedNamedImport(sourceFile)
    return true
  }

  return undefined
}
