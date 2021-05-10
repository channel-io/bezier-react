/* External dependencies */
import { EditorView, DirectEditorProps } from 'prosemirror-view'
import {
  EditorState,
  Plugin,
  Transaction,
} from 'prosemirror-state'
import {
  Schema,
  NodeSpec,
  MarkSpec,
  Node as ProsemirrorNode,
} from 'prosemirror-model'
import { InputRule } from 'prosemirror-inputrules'
import { keymap } from 'prosemirror-keymap'
import {
  chainCommands,
  createParagraphNear,
  liftEmptyBlock,
  splitBlock,
} from 'prosemirror-commands'
import { mapValues, last } from 'lodash-es'

/* Internal dependencies */
import { NodeType } from '../Editor.types'
import { ReactNodeView, ReactNodeViewProvider } from './ReactNodeView'
import { getNodeFromSelection } from './SelectionUtils'

type Dispatch = (tr: Transaction<any>) => void

type TriggerCallback = (active: boolean, searchWord: string, state: EditorState) => void

const newLineCommand = chainCommands(createParagraphNear, liftEmptyBlock, splitBlock)

export default class EditorBuilder {
  schema: Schema | undefined

  plugins: Plugin[] = []

  editor: EditorView | null = null

  nodes: { [key: string]: NodeSpec } = {
    doc: {
      content: 'block+',
    },
    paragraph: {
      content: 'inline*',
      group: 'block',
      parseDOM: [
        { tag: 'p' },
        { tag: 'span:empty' },
        /**
         * TODO: 주석 번역
         * NOTE: 두 개 이상의 연속되는 br 은 온전히 하나의 줄을 차지할 수 있으므로,
         * p 태그로 변환해도 됩니다. 하지만 단일 br 은 단순 문단 분리의 동작을 수행해야 하는데,
         * 현재의 Prosemirror parseRule 에서는 해당 동작을 구현할 수 있는 방법이 없습니다.
         * 그래서 임시로 br 태그를 직접 렌더링하고, PMNodesToBlocksVisitor 에서 처리하도록 수정합니다.
         *
         * 이 방법의 문제는, br 로 연결된 모든 텍스트가 단일 paragraph로 인식되는 것으로,
         * 예기치 않은 동작을 할 수 있습니다.
         *
         * 아래 옵션은 연속하는 br 을 p 로 변환하는 parseRule 입니다.
         * { tag: 'br + br' },
         */
      ],
      toDOM: () => (['p', 0]),
    },
    text: {
      group: 'inline',
      marks: '_',
    },
  }

  marks: { [key: string]: MarkSpec } = {}

  keyMaps: { [key: string]: (state: EditorState, dispatch: Dispatch) => void } = {}

  nodeViews: { [key: string]: new(node: ProsemirrorNode, provider: ReactNodeViewProvider) => ReactNodeView } = {}

  inputRules: InputRule[] = []

  widgetItems: any[] = []

  triggers: { [key: string]: TriggerCallback } = {}

  onUpdates: Set<(state: EditorState) => void> = new Set()

  createSchema() {
    const { nodes, marks } = this

    return new Schema({
      nodes,
      marks,
    })
  }

  createState(schema?: Schema, doc?: ProsemirrorNode) {
    const { plugins } = this

    return EditorState.create({
      doc,
      schema,
      plugins,
    })
  }

  build(
    target: HTMLElement,
    provider: ReactNodeViewProvider,
    schema: Schema,
    props: Partial<DirectEditorProps>,
    doc?: ProsemirrorNode,
  ) {
    const { nodeViews } = this

    this.plugins.push(keymap({
      ...this.keyMaps,
      Enter: newLineCommand,
    }))

    this.editor = new EditorView(target, {
      ...props,
      state: this.createState(schema, doc),
      nodeViews: mapValues(nodeViews, (NodeView) => (node: ProsemirrorNode) => new NodeView(node, provider)),
    })

    this.schema = schema
  }

  updateTrigger(state: EditorState) {
    const triggerWords = Object.keys(this.triggers)
    const { from, to, $from: { nodeBefore } } = state.selection
    const { parentNode } = getNodeFromSelection(state)

    if (
      (from === to) &&
      nodeBefore?.isText &&
      parentNode &&
      (parentNode.type.name !== NodeType.ListItem) &&
      to
    ) {
      const { text } = nodeBefore
      const options = text?.split(/(\s+)/g) || []
      const lastString = last(options) || ''

      triggerWords.forEach(trigger => {
        if (lastString.startsWith(trigger)) {
          this.triggers[trigger](true, lastString, state)
          return
        }

        this.triggers[trigger](false, '', state)
      })
      return
    }

    triggerWords.forEach(trigger => {
      this.triggers[trigger](false, '', state)
    })
  }

  updateState(state: EditorState) {
    this.editor!.updateState(state)
    this.onUpdates.forEach(update => {
      update(state)
    })
    this.updateTrigger(state)
  }

  /**
   * TODO: 주석 번역
   * NOTE: 새로운 state 를 만들어 update 하면 각 Plugin 에서 update 를 추적할 수 없기 때문에,
   * 명시적으로 의미 없는 update 를 한 번 더 발생시켜 update 를 알림
   */
  reset() {
    this.updateState(this.createState(this.schema))

    if (this.editor) {
      this.updateState(this.editor.state)
    }
  }

  getSchema() {
    return this.editor?.state.schema
  }

  addTriggerCallback(trigger: string, callback: TriggerCallback) {
    this.triggers[trigger] = callback
  }

  removeTriggerCallback(trigger: string) {
    delete this.triggers[trigger]
  }

  addUpdateCallback(callback: (state: EditorState) => void) {
    this.onUpdates.add(callback)
  }

  removeUpdateCallback(callback: (state: EditorState) => void) {
    this.onUpdates.delete(callback)
  }
}
