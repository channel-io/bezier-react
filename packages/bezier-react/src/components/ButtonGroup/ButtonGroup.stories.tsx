/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from 'Foundation'
import { getTitle } from 'Utils/storyUtils'
import Button from 'Components/Button/Button'
import { ButtonStyleVariant } from 'Components/Button/Button.types'
import { Spacer, StackItem } from 'Components/Stack'
import ButtonGroup from './ButtonGroup'
import ButtonGroupProps from './ButtonGroup.types'

export default {
  title: getTitle(base),
  component: ButtonGroup,
  argTypes: {
  },
} as Meta

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
`

const Template: Story<ButtonGroupProps> = (props) => (
  <Wrapper>
    <Spacer />
    <StackItem>
      <ButtonGroup {...props} align="center">
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

export const Primary: Story<ButtonGroupProps> = Template.bind({})
Primary.args = {
  hasSpacing: true,
}

const CompositionTemplate: Story<ButtonGroupProps> = (props) => (
  <Wrapper>
    <Spacer />
    <StackItem>
      <ButtonGroup {...props} align="center">
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

export const Composition: Story<ButtonGroupProps> = CompositionTemplate.bind({})
