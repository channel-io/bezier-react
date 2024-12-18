import {
  ChannelBtnFilledIcon,
  type IconName,
  icons,
} from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import { camelCase } from '~/src/utils/string'

import { AlphaIconButton } from '~/src/components/AlphaIconButton'
import { Stack } from '~/src/components/Stack'
import { Tooltip } from '~/src/components/Tooltip'

import { Icon } from './Icon'
import { type IconProps } from './Icon.types'

const meta: Meta<typeof Icon> = {
  component: Icon,
}

export default meta

export const Primary: StoryObj<IconProps> = {
  args: {
    source: ChannelBtnFilledIcon,
    size: '24',
    color: 'fg-black-darker',
  },
}

const pascalCase = (str: string) =>
  camelCase(str).replace(/^./, (char) => char.toUpperCase())

const iconNames = Object.keys(icons) as IconName[]

export const IconGallery: StoryObj = {
  render: () => (
    <Stack
      direction="horizontal"
      wrap
      spacing={16}
      padding={16}
    >
      {iconNames.map((iconName) => (
        <Stack
          key={iconName}
          direction="vertical"
          align="center"
          spacing={4}
          width={40}
          height={40}
          borderRadius="6"
        >
          <Tooltip content={pascalCase(iconName)}>
            <AlphaIconButton
              size="m"
              content={icons[iconName]}
              variant="tertiary"
              color="dark-grey"
            />
          </Tooltip>
        </Stack>
      ))}
    </Stack>
  ),
}
