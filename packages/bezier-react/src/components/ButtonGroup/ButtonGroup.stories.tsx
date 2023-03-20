/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import type { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from '~/src/foundation'
import { getTitle } from '~/src/utils/storyUtils'
import { Button, ButtonStyleVariant } from '~/src/components/Button'
import { Spacer, StackItem } from '~/src/components/Stack'
import { ButtonGroup } from './ButtonGroup'
import ButtonGroupProps from './ButtonGroup.types'
import mdx from './ButtonGroup.mdx'

export default {
  title: getTitle(base),
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
