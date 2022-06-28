export const flatten = <T>(a: T[], b: T[]) => [...a, ...b]

export const isComponentNode = (node: SceneNode): node is ComponentNode => node.type === 'COMPONENT'

export const findAllComponentNode = (rootNode: SceneNode) => {
  const result: ComponentNode[] = []
  function findComponentNode(node: SceneNode) {
    if (isComponentNode(node)) {
      result.push(node)
      return
    }
    if ('children' in node) {
      node.children.forEach(findComponentNode)
    }
  }
  findComponentNode(rootNode)
  return result
}
