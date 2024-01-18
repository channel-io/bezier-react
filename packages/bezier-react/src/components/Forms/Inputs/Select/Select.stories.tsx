import React from 'react'

import { CalendarIcon } from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { getObjectFromEnum } from '~/src/utils/story'

import { Text } from '~/src/components/Text'

import { Select } from './Select'
import {
  type SelectProps,
  SelectSize,
} from './Select.types'

const meta: Meta<SelectProps & {
  wrapperSize: number
}> = {
  component: Select,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: getObjectFromEnum(SelectSize),
    },
    wrapperSize: {
      control: {
        type: 'number',
      },
      defaultValue: 200,
    },
  },
}
export default meta

const Template: StoryFn<SelectProps & { wrapperSize: number }> = ({
  wrapperSize,
  ...args
}) => (
  <div style={{ width: wrapperSize }}>
    <Select {...args} />
  </div>
)

export const Primary = {
  render: Template,

  args: {
    placeholder: '날짜를 선택해주세요',
    text: '2022. 7. 14.',
    leftContent: CalendarIcon,
    rightContent: <Text marginLeft={4}>일</Text>,
    disabled: false,
    readOnly: false,
    withoutChevron: false,
    hasError: false,
    size: SelectSize.M,
  },
}
