import { type Meta, type StoryFn } from '@storybook/react'

import { Center } from '~/src/components/Center'

import { LegacyTooltip } from './LegacyTooltip'
import { type LegacyTooltipProps } from './LegacyTooltip.types'

const meta: Meta<typeof LegacyTooltip> = {
  component: LegacyTooltip,
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    offset: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1,
      },
    },
    delayShow: {
      control: {
        type: 'range',
        min: 0,
        max: 5000,
        step: 100,
      },
    },
    delayHide: {
      control: {
        type: 'range',
        min: 0,
        max: 5000,
        step: 100,
      },
    },
  },
}
export default meta

const Template: StoryFn<LegacyTooltipProps> = (props) => (
  <LegacyTooltip {...props}>
    <Center
      width={100}
      height={40}
      backgroundColor="bg-black-dark"
      borderRadius="4"
    >
      Target
    </Center>
  </LegacyTooltip>
)

export const Primary = {
  render: Template,

  args: {
    // eslint-disable-next-line max-len
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    lazy: true,
    placement: 'bottom-center',
    offset: 4,
    disabled: false,
    keepInContainer: false,
    allowHover: false,
    delayShow: 0,
    delayHide: 0,
  },
}
