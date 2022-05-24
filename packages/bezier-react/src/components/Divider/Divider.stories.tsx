/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from 'Foundation'
import { getTitle } from 'Utils/storyUtils'
import { ListItem } from 'Components/ListItem'
import Divider from './Divider'
import DividerProps from './Divider.types'

export default {
  title: getTitle(base),
  component: Divider,
  argTypes: {
    orientation: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
  },
} as Meta

interface WrapperProps {
  direction?: 'column' | 'row'
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  flex-direction: ${({ direction = 'column' }) => direction};
  width: 200px;
  height: 200px;
`

const Template: Story<DividerProps> = props => (
  <Wrapper>
    <Divider {...props} />
  </Wrapper>
)

export const Primary: Story<DividerProps> = Template.bind({})
Primary.args = {
  orientation: 'horizontal',
  withoutSideIndent: false,
}

const CompositionTemplate: Story<DividerProps> = ({ orientation, ...rest }) => (
  <Wrapper direction={orientation === 'horizontal' ? 'column' : 'row'}>
    <ListItem content="Channel" />
    <Divider
      orientation={orientation}
      {...rest}
    />
    <ListItem content="Bezier" />
  </Wrapper>
)

export const Composition: Story<DividerProps> = CompositionTemplate.bind({})
Composition.args = {
  orientation: 'horizontal',
  withoutSideIndent: false,
}
