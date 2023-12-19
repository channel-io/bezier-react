import React from 'react'

import type {
  Meta,
  StoryFn,
  StoryObj,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import {
  Button,
  ButtonStyleVariant,
} from '~/src/components/Button'
import {
  LegacySpacer,
  LegacyStackItem,
} from '~/src/components/LegacyStack'

import { ButtonGroup } from './ButtonGroup'
import mdx from './ButtonGroup.mdx'
import type ButtonGroupProps from './ButtonGroup.types'

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  parameters: {
    docs: {
      page: mdx,
    },
  },
}
export default meta

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
`

const Template: StoryFn<ButtonGroupProps> = (props) => (
  <Wrapper>
    <LegacySpacer />
    <LegacyStackItem>
      <ButtonGroup {...props}>
        <Button text="취소" styleVariant={ButtonStyleVariant.Secondary} />
        <Button text="확인" styleVariant={ButtonStyleVariant.Primary} />
      </ButtonGroup>
    </LegacyStackItem>
    <LegacySpacer />
  </Wrapper>
)

export const Playground: StoryObj<ButtonGroupProps> = {
  render: Template,

  args: {
    withoutSpacing: false,
  },
}
