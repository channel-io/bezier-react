import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Button } from '~/src/beta/Button'
import { VStack } from '~/src/beta/VStack'

import { ButtonGroup } from './ButtonGroup'
import { type ButtonGroupProps } from './ButtonGroup.types'



const meta: Meta<typeof ButtonGroup> = {
  title: 'Beta components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    justify: {
      control: {
        type: 'radio',
      },
      options: ['start', 'center', 'end', 'stretch', 'between'],
    },
  },
}

export default meta

const Template: StoryFn<ButtonGroupProps> = ({ ...args }) => (
  <ButtonGroup {...args}>
    <Button
      label="Cancel"
      semantic="secondary"
    />
    <Button label="Confirm" />
  </ButtonGroup>
)

export const Primary: StoryObj<ButtonGroupProps> = {
  render: Template,

  args: {
    justify: 'center',
    withoutSpacing: false,
  },
}

export const WithoutSpacing: StoryObj<ButtonGroupProps> = {
  render: Template,

  args: {
    justify: 'center',
    withoutSpacing: true,
  },
}

export const FullWidth: StoryObj<ButtonGroupProps> = {
  render: (args) => (
    <VStack
      spacing={12}
      width={320}
    >
      <ButtonGroup
        {...args}
        style={{ width: '100%' }}
      >
        <Button
          label="Cancel"
          semantic="secondary"
          style={{ flex: 1 }}
        />
        <Button
          label="Confirm"
          style={{ flex: 1 }}
        />
      </ButtonGroup>
    </VStack>
  ),

  args: {
    justify: 'center',
    withoutSpacing: false,
  },
}
