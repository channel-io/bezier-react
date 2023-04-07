import React, {
  useCallback,
  useState,
} from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

import {
  getObjectFromEnum,
  getTitle,
} from '~/src/utils/storyUtils'

import TextArea from './TextArea'
import type TextAreaProps from './TextArea.types'
import { TextAreaHeight } from './TextArea.types'

export default {
  title: getTitle(base),
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
} as Meta

const Template: Story<TextAreaProps> = (args) => {
  const [value, setValue] = useState('12345')

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // eslint-disable-next-line no-console
    console.log(e)
    setValue(e.target.value)
  }, [])

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

export const Primary = Template.bind({})

Primary.args = {
  autoFocus: true,
  readOnly: false,
  disabled: false,
  hasError: false,
  minRows: TextAreaHeight.Row6,
  maxRows: TextAreaHeight.Row10,
  placeholder: 'say hi to autoResizable textarea!',
}
