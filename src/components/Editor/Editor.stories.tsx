/* External dependencies */
import React, { useRef, useCallback } from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import BlocksParserContextType from '../../types/BlocksParserContextType'
import Bold from './plugins/Bold'
import { EditorRef } from './Editor.types'
import { Editor, Parser, BlocksParserContext } from './index'

export default {
  title: getTitle(base),
  component: Editor,
  argTypes: {
    onChange: { action: 'onChange' },
  },
}

const Template = (args) => {
  const editorRef = useRef<EditorRef>(null)

  // eslint-disable-next-line no-console
  const handleGet = useCallback(() => console.log(editorRef.current.getContents()), [editorRef])
  const handleClear = useCallback(() => editorRef.current.clearContents(), [editorRef])

  return (
    <>
      <Editor {...args} ref={editorRef}/>
      <button onClick={handleGet} type="button">
        get message
      </button>
      <button onClick={handleClear} type="button">
        clear message
      </button>
    </>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  initialBlocks: [{ type: 'text', value: 'hello, world!' }],
}

const TemplateWithBold = (args) => (
  <Editor {...args}>
    <Bold/>
  </Editor>
)

export const PrimaryWithBold = TemplateWithBold.bind({})

function NodeReplacer(context: BlocksParserContext) {
  const mapChildReplace = (childContext: BlocksParserContext) =>
    childContext.children.map(child => NodeReplacer(child))

  const { type } = context

  switch (type) {
    case BlocksParserContextType.Root: {
      return (
        <>
          { mapChildReplace(context) }
        </>
      )
    }

    case BlocksParserContextType.Text: {
      return (
        <span>
          { context.value }
        </span>
      )
    }

    case BlocksParserContextType.Bold: {
      return (
        <b>
          { mapChildReplace(context) }
        </b>
      )
    }

    default: {
      return null
    }
  }
}

const NodeReplacerTemplate = (args) => (NodeReplacer(Parser.parseBlockDefault(args.blocks[0].value).context))
export const PrimaryReplacer = NodeReplacerTemplate.bind({})
PrimaryReplacer.args = {
  blocks: [
    {
      type: 'text',
      value: 'hello <b>helelelelo</b> hafl',
    },
  ],
}
