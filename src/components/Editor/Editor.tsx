/* External dependencies */
import React, {
  createContext,
  forwardRef,
  useMemo,
  useEffect,
  useRef,
} from 'react'
import { DOMParser, ResolvedPos } from 'prosemirror-model'
import { isEmpty } from 'lodash-es'
import 'prosemirror-view/style/prosemirror.css'

/* Internal dependencies */
import useMergeRefs from '../../hooks/useMergeRefs'
import EditorBuilder from './utils/EditorBuilder'
import { blocksToPMNodes } from './utils/Parsers'
import { ReactNodeViewProvider } from './utils/ReactNodeView'
import { EditorProps } from './Editor.types'
import { StyledEditorInput } from './Editor.styled'

const BuilderContext = createContext(new EditorBuilder())

function Editor(
  {
    initialBlocks,
    children,
  }: EditorProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  const reactNodeViewProvider = useMemo(() => new ReactNodeViewProvider(), [])
  const editorBuilder: EditorBuilder = useMemo(() => new EditorBuilder(), [])

  const editorRef = useRef<HTMLDivElement | null>(null)
  const mergedRef = useMergeRefs<HTMLDivElement>(editorRef, forwardedRef)

  useEffect(() => {
    const schema = editorBuilder.createSchema()
    const doc = (() => {
      if (initialBlocks) {
        const content = blocksToPMNodes(initialBlocks, schema)
        if (content.length > 0) {
          return schema.node('doc', undefined, content)
        }
      }

      return undefined
    })()

    editorBuilder.build(editorRef.current!, reactNodeViewProvider, schema, {
      dispatchTransaction: (transaction) => {
        // const prevState = editorBuilder.editor!.state
        const newState = editorBuilder.editor!.state.apply(transaction)
        editorBuilder.updateState(newState)

        // selection 만 바뀌는 경우에도 transaction 이 발생하지만, 이 경우에는 onChange 는 불필요하므로
        // doc 이 분명하게 바꾼 경우에만 onChange 발생
        // if (prevState.doc !== newState.doc) {
        //   onChangeRef.current(newState)
        // }
      },
      handleDOMEvents: {
        // blur: () => {
        //   onBlurRef.current()
        //   return false
        // },
        // focus: () => {
        //   onFocusRef.current()
        //   return false
        // },
      },
      clipboardTextParser: (pastedText: string, context: ResolvedPos) => {
        /**
         * ClipBoard 로 부터 Text 를 파싱할 경우,
         * ProseMirror 기본 동작은 newline 을 모두 무시함.
         * 따라서 newline 을 지켜주는 parser 를 새로 구성함.
         * 참조: https://prosemirror.net/docs/ref/#view.EditorProps.clipboardTextParser
         */
        const dom = window.document.createElement('div')

        pastedText
          .trim()
          .split('\n')
          .forEach(block => {
            if (isEmpty(block)) {
              dom.appendChild(document.createElement('p'))
            } else {
              dom.appendChild(document.createElement('p')).textContent = block
            }
          })

        return DOMParser
          .fromSchema(editorBuilder.editor!.state.schema)
          .parseSlice(dom, {
            preserveWhitespace: true,
            context,
          })
      },
      // clipboardTextSerializer: nodeToText,
    }, doc)

    return () => {
      reactNodeViewProvider.clear()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BuilderContext.Provider value={editorBuilder}>
      <StyledEditorInput ref={mergedRef}/>
      { children }
    </BuilderContext.Provider>
  )
}

export default forwardRef(Editor)
