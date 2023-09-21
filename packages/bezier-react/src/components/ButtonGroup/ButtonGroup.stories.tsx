import React from 'react'

import type {
  Meta,
  Story,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import {
  Button,
  ButtonStyleVariant,
} from '~/src/components/Button'
import {
  Spacer,
  StackItem,
} from '~/src/components/Stack'

import { ButtonGroup } from './ButtonGroup'
import mdx from './ButtonGroup.mdx'
import type ButtonGroupProps from './ButtonGroup.types'

export default {
  component: ButtonGroup,
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
`

const Template: Story<ButtonGroupProps> = (props) => (
  <Wrapper>
    <Spacer />
    <StackItem>
      <ButtonGroup {...props}>
        <Button
          text="취소"
          styleVariant={ButtonStyleVariant.Secondary}
        />
        <Button
          text="확인"
          styleVariant={ButtonStyleVariant.Primary}
        />
      </ButtonGroup>
    </StackItem>
    <Spacer />
  </Wrapper>
)

export const Playground: Story<ButtonGroupProps> = Template.bind({})
Playground.args = {
  withoutSpacing: false,
}
