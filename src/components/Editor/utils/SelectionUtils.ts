/* External dependencies */
import { EditorState } from 'prosemirror-state'
import { Node as ProseMirrorNode } from 'prosemirror-model'

/* Internal dependencies */
import { NodeType } from '../Editor.types'

const LIST_ITEM_DEFAULT_OFFSET = 3

interface GetNodeFromSelectionReturn {
  parentNode: ProseMirrorNode
  node: ProseMirrorNode | null
  start: number
  end: number
}

export function getNodeFromSelection(editorState: EditorState): GetNodeFromSelectionReturn {
  const selection = editorState.selection
  const resolvedPosOfStart = editorState.doc.resolve(selection.from)
  const resolvedPosOfEnd = editorState.doc.resolve(selection.to)
  const paragraphOffset = editorState.doc.childBefore(selection.from).offset
  const currentInfoOfStart = resolvedPosOfStart.parent.childBefore(resolvedPosOfStart.parentOffset)
  const currentInfoOfEnd = resolvedPosOfEnd.parent.childBefore(resolvedPosOfEnd.parentOffset)
  const currentNodeOfStart = currentInfoOfStart.node
  const currentNodeOfEnd = currentInfoOfEnd.node
  const parentNode = resolvedPosOfStart.node(1)

  if (
    !currentNodeOfStart ||
    !currentNodeOfEnd ||
    currentNodeOfStart !== currentNodeOfEnd
  ) {
    return {
      parentNode,
      node: null,
      start: 0,
      end: 0,
    }
  }

  const isListItem = resolvedPosOfStart.node(resolvedPosOfStart.depth - 1).type.name === NodeType.ListItem

  if (isListItem) {
    const listItemOffset = resolvedPosOfStart.node(1).childBefore(selection.from - paragraphOffset).offset
    return {
      parentNode,
      node: currentNodeOfStart,
      start: paragraphOffset + listItemOffset + currentInfoOfStart.offset + LIST_ITEM_DEFAULT_OFFSET,
      end: paragraphOffset + listItemOffset + currentInfoOfStart.offset + currentNodeOfStart.nodeSize + LIST_ITEM_DEFAULT_OFFSET,
    }
  }

  return {
    parentNode,
    node: currentNodeOfStart,
    start: paragraphOffset + currentInfoOfStart.offset + 1,
    end: paragraphOffset + currentInfoOfStart.offset + currentNodeOfStart.nodeSize + 1,
  }
}
