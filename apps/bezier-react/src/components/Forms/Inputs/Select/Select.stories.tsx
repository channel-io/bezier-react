/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getObjectFromEnum, getTitle } from 'Utils/storyUtils'
import { Text } from 'Components/Text'
import Select from './Select'
import SelectProps, { SelectSize } from './Select.types'

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
  leftContent: 'calendar',
  rightContent: (<Text marginLeft={4}>일</Text>),
  disabled: false,
  readOnly: false,
  withoutChevron: false,
  hasError: false,
  size: SelectSize.M,
}
