/* External dependencies */
import React, { useRef, useCallback } from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import Editor from './Editor'
import { EditorRef } from './Editor.types'

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
