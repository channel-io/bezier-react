import { ChannelBtnFilledIcon, icons } from '@channel.io/bezier-icons'
import { type Meta, type StoryObj } from '@storybook/react'

import { type BetaSemanticColor } from '~/src/types/beta-tokens'
import { HStack } from '~/src/v3/HStack'
import { Text } from '~/src/v3/Text'
import { VStack } from '~/src/v3/VStack'

import { Icon } from './Icon'
import { type IconProps, type IconSize } from './Icon.types'

const SIZES: IconSize[] = ['10', '12', '16', '20', '24', '36', '44']

const COLORS: BetaSemanticColor[] = [
  'icon-neutral',
  'icon-neutral-heavier',
  'icon-accent-blue',
  'icon-accent-cobalt',
  'icon-accent-teal',
  'icon-accent-green',
  'icon-accent-olive',
  'icon-accent-yellow',
  'icon-accent-orange',
  'icon-accent-red',
  'icon-accent-pink',
  'icon-accent-purple',
  'icon-accent-navy',
]

const meta: Meta<typeof Icon> = {
  title: 'V3 components/Icon',
  component: Icon,
  args: {
    source: 'channel-btn-filled' as unknown as IconProps['source'],
    size: '24',
    color: 'icon-neutral',
  },
  argTypes: {
    source: {
      control: 'select',
      options: Object.keys(icons),
      mapping: icons,
    },
    size: {
      control: 'select',
      options: SIZES,
      table: {
        defaultValue: { summary: '"24"' },
      },
    },
    // `color` accepts any beta semantic color token (`V3ColorProps`), so it is
    // left as a free-text control rather than a restricted option list.
    color: {
      control: 'text',
      table: {
        defaultValue: { summary: '"icon-neutral"' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Icon>

/**
 * Adjust `source` / `size` / `color` with the controls panel.
 */
export const Primary: Story = {}

/**
 * Each size (based on the `icon-neutral` color).
 */
export const Sizes: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <VStack spacing={12}>
      {SIZES.map((size) => (
        <HStack
          key={size}
          align="center"
          spacing={24}
        >
          <Text
            typo="12"
            color="text-neutral"
            style={{ width: 32 }}
          >
            {size}
          </Text>
          <Icon
            source={ChannelBtnFilledIcon}
            size={size}
            color="icon-neutral"
          />
        </HStack>
      ))}
    </VStack>
  ),
}

/**
 * Each color (based on the `l` size).
 */
export const Colors: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <VStack spacing={12}>
      {COLORS.map((color) => (
        <HStack
          key={color}
          align="center"
          spacing={24}
        >
          <Text
            typo="12"
            color="text-neutral"
            style={{ width: 160 }}
          >
            {color}
          </Text>
          <Icon
            source={ChannelBtnFilledIcon}
            size="36"
            color={color}
          />
        </HStack>
      ))}
    </VStack>
  ),
}

/**
 * Every icon available in `@channel.io/bezier-icons`.
 */
export const AllIcons: Story = {
  tags: ['!autodocs'],
  parameters: { controls: { disable: true } },
  render: () => (
    <HStack
      wrap
      spacing={8}
    >
      {Object.entries(icons).map(([name, source]) => (
        <VStack
          key={name}
          display="inline-flex"
          align="center"
          justify="center"
          wrap
          spacing={12}
          width={120}
          height={120}
        >
          <Icon
            source={source}
            size="24"
            color="icon-neutral-heavier"
          />
          <Text
            typo="12"
            color="text-neutral"
            align="center"
            style={{ wordBreak: 'break-word' }}
          >
            {name}
          </Text>
        </VStack>
      ))}
    </HStack>
  ),
}
