/* External dependencies */
import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

/* Internal dependencies */
import {
  getObjectFromEnum,
  getTitle,
} from '~/src/utils/storyUtils'

import { CalendarIcon } from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import Select from './Select'
import type SelectProps from './Select.types'
import { SelectSize } from './Select.types'

export default {
  title: getTitle(base),
  component: Select,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(SelectSize),
      },
    },
    wrapperSize: {
      control: {
        type: 'number',
      },
      defaultValue: 200,
    },
  },
} as Meta

const Template: Story<SelectProps & { wrapperSize: number }> = ({ wrapperSize, ...args }) => (
  <div style={{ width: wrapperSize }}>
    <Select {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  placeholder: '날짜를 선택해주세요',
  text: '2022. 7. 14.',
  leftContent: CalendarIcon,
  rightContent: (<Text marginLeft={4}>일</Text>),
  disabled: false,
  readOnly: false,
  withoutChevron: false,
  hasError: false,
  size: SelectSize.M,
}
