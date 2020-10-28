/* External dependencies */
import { EditorState } from 'prosemirror-state'
import { Node as ProsemirrorNode } from 'prosemirror-model'

function some(node: ProsemirrorNode, checker: (node: ProsemirrorNode) => boolean) {
  const { childCount } = node

  for (let i = 0; i < childCount; i += 1) {
    const children = node.child(i)
    if (checker(children)) {
      return true
    }
  }

  return false
}

function checkParagraph(node: ProsemirrorNode): boolean {
  if (node.isText) {
    return node.textContent.trim().length > 0
  }

  if (['emoji', 'mention', 'variable'].includes(node.type.name)) {
    return true
  }

  return false
}

function checkBlock(node: ProsemirrorNode) {
  if (node.type.name === 'paragraph') {
    return some(node, checkParagraph)
  }

  if (node.type.name === 'codeBlock') {
    return node.textContent.trim().length > 0
  }

  if (node.type.name === 'listItem') {
    return some(node, checkBlock)
  }

  if (node.type.name === 'bulletList') {
    return some(node, checkBlock)
  }

  return false
}

function isFill({ doc }: EditorState): boolean {
  return some(doc, checkBlock)
}

export default isFill
