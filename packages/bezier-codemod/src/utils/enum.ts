import {
  type PropertyAccessExpression,
  SyntaxKind,
} from 'ts-morph'

export const renameEnumMember = (node: PropertyAccessExpression, to: string) => {
  const ancestor = node.getFirstAncestor()

  if (ancestor?.isKind(SyntaxKind.JsxExpression)) {
    ancestor.replaceWithText(`'${to}'`)
  } else {
    node.replaceWithText(`'${to}'`)
  }
}
