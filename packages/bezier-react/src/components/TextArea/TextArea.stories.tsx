import { useCallback, useState } from 'react'
import * as React from 'react'

import { type Meta, type StoryFn } from '@storybook/react'

import { TextArea } from './TextArea'
import type { TextAreaProps } from './TextArea.types'

const meta: Meta<typeof TextArea> = {
  component: TextArea,
}
export default meta

const Template: StoryFn<TextAreaProps> = (args) => {
  const [value, setValue] = useState('12345')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // eslint-disable-next-line no-console
      console.log(e)
      setValue(e.target.value)
    },
    []
  )

  return (
    <div style={{ width: 500 }}>
      <TextArea
        value={value}
        onChange={handleChange}
        {...args}
      />
    </div>
  )
}

export const Primary = {
  render: Template,

  args: {
    autoFocus: true,
    readOnly: false,
    disabled: false,
    hasError: false,
    minRows: '6',
    maxRows: '10',
    placeholder: 'say hi to autoResizable textarea!',
  },
}
