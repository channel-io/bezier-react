import { type Node, SyntaxKind } from 'ts-morph'

export const getArrowFunctionsWithOneArgument = (
  node: Node,
  predicate: (node: Node) => boolean
) =>
  node
    .getDescendantsOfKind(SyntaxKind.ArrowFunction)
    .filter(
      (v) => v.getDescendantsOfKind(SyntaxKind.ArrowFunction).length === 0
    )
    .filter(
      (v) => v.getDescendantsOfKind(SyntaxKind.BindingElement).length === 1
    )
    .filter(predicate)
