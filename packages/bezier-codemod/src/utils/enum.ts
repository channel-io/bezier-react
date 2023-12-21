import {
  type PropertyAccessExpression,
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

import { getNamedImport } from './import.js'

type Name = string
type Member = string
type Value = string
export type EnumTransformMap = Record<Name, Record<Member, Value>>

export const renameEnumMember = (node: PropertyAccessExpression, to: string) => {
  const ancestor = node.getFirstAncestor()

  if (ancestor?.isKind(SyntaxKind.JsxExpression)) {
    ancestor.replaceWithText(`'${to}'`)
  } else {
    node.replaceWithText(`'${to}'`)
  }
}

// add bezier-react import context, and move to shared directory
export const transformEnumMemberToStringLiteral = (sourceFile: SourceFile, enumTransforms: EnumTransformMap) => {
  const transformedEnumNames: string[] = []

  Object
    .keys(enumTransforms)
    .forEach((enumName) => {
      if (getNamedImport(sourceFile, enumName)) {
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
      }
    })

  if (transformedEnumNames.length > 0) {
    sourceFile.fixUnusedIdentifiers()
    return true
  }

  return undefined
}
