/* External dependencies */
import { useContext, useEffect } from 'react'
import { MarkSpec } from 'prosemirror-model'
import { toggleMark } from 'prosemirror-commands'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'

/* Internal dependencies */
import { BuilderContext } from '../Editor'

export const boldMarkSpec: MarkSpec = {
  inclusive: true,
  toDOM: () => (['b', 0]),
  parseDOM: [{ tag: 'strong' }, { tag: 'b' }],
}

export default function Bold() {
  const editorBuilder = useContext(BuilderContext)

  useEffect(() => {
    editorBuilder.marks.bold = boldMarkSpec

    const toggleBold = (state: EditorState, dispatch: EditorView['dispatch']) => {
      toggleMark(editorBuilder.editor?.state.schema.marks.bold)(state, dispatch)
    }

    editorBuilder.keyMaps['Mod-b'] = toggleBold
    editorBuilder.keyMaps['Mod-B'] = toggleBold

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
