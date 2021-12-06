/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from 'Foundation'
import { getTitle } from 'Utils/storyUtils'
import { StatusProps, StatusType } from './Status.types'
import Status from './Status'

export default {
  title: getTitle(base),
  component: Status,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: StatusType,
      },
    },
  },
} as Meta

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-grey-light']};
`

const Template: Story<StatusProps> = (args) => (
  <Wrapper>
    <Status {...args} />
  </Wrapper>
)

export const Primary: Story<StatusProps> = Template.bind({})
Primary.args = {
  type: StatusType.Online,
}
