import React, {
  useCallback,
  useState,
} from 'react'

import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { getObjectFromEnum } from '~/src/utils/storyUtils'

import TextArea from './TextArea'
import type TextAreaProps from './TextArea.types'
import { TextAreaHeight } from './TextArea.types'

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  argTypes: {
    minRows: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(TextAreaHeight),
      },
    },
    maxRows: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(TextAreaHeight),
      },
    },
  },
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
    [],
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
    minRows: TextAreaHeight.Row6,
    maxRows: TextAreaHeight.Row10,
    placeholder: 'say hi to autoResizable textarea!',
  },
}
