import React, { useState } from 'react'

import {
  ArrowRightIcon,
  CalendarIcon,
  CancelIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EditIcon,
  HeartFilledIcon,
  LightningIcon,
  OpenInNewIcon,
  PeopleIcon,
  PlayIcon,
  PlusIcon,
  TagIcon,
  TrashIcon,
  TriangleDownIcon,
  VideocamIcon,
} from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryObj,
} from '@storybook/react'

import { Avatar } from '~/src/components/Avatar'
import { Box } from '~/src/components/Box'
import { ButtonGroup } from '~/src/components/ButtonGroup'
import { Center } from '~/src/components/Center'
import {
  LegacyHStack,
  LegacyStackItem,
  LegacyVStack,
} from '~/src/components/LegacyStack'
import { ListItem } from '~/src/components/ListItem'
import { Overlay } from '~/src/components/Overlay'
import { SectionLabel } from '~/src/components/SectionLabel'
import { Text } from '~/src/components/Text'

import { Button } from './Button'
import mdx from './Button.mdx'
import type {
  ButtonProps,
  ButtonSize,
  ButtonStyleVariant,
} from './Button.types'

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
}
export default meta

export const Playground: StoryObj<ButtonProps> = {
  args: {
    text: 'Invite',
    disabled: false,
    active: false,
    loading: false,
    leftContent: PlusIcon,
    rightContent: ArrowRightIcon,
    size: 'm',
    styleVariant: 'primary',
    colorVariant: 'blue',
  },
}

export const WithCustomComponent: StoryObj<ButtonProps> = {
  args: {
    text: 'Set Manager',
    leftContent: (
      <Avatar name="test" avatarUrl="https://source.unsplash.com/random" />
    ),
    size: 'm',
    styleVariant: 'primary',
    colorVariant: 'blue',
  },
}

export const OverviewCTA: StoryObj<{}> = {
  render: () => (
    <LegacyHStack justify="center" spacing={6}>
      <LegacyStackItem>
        <Button
          disabled
          text="Cancel"
          colorVariant="monochrome-light"
          styleVariant="secondary"
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Button
          leftContent={OpenInNewIcon}
          text="Open link"
          colorVariant="blue"
          styleVariant="secondary"
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Button
          leftContent={CheckIcon}
          text="Publish"
          colorVariant="green"
          styleVariant="primary"
        />
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Overview (as CTA)',
}

export const OverviewFloating: StoryObj<{}> = {
  render: () => (
    <LegacyHStack justify="center">
      <LegacyStackItem>
        <Button
          leftContent={ChevronDownIcon}
          text="New messages"
          colorVariant="cobalt"
          styleVariant="floating"
        />
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Overview (as floating button)',
}

export const UsageCTA: StoryObj<{}> = {
  render: () => (
    <ButtonGroup>
      <Button
        text="취소"
        colorVariant="monochrome-light"
        styleVariant="secondary"
      />
      <Button
        leftContent={PlayIcon}
        text="퍼블리시"
        colorVariant="green"
        styleVariant="primary"
      />
    </ButtonGroup>
  ),

  name: 'Usage (as CTA)',
}

export const UsageCTA2: StoryObj<{}> = {
  render: () => (
    <ButtonGroup>
      <Button
        text="임시 저장 삭제"
        disabled
        colorVariant="monochrome-light"
        styleVariant="secondary"
      />
      <Button
        text="임시 저장"
        colorVariant="blue"
        styleVariant="secondary"
      />
      <Button
        leftContent={PlayIcon}
        text="퍼블리시"
        colorVariant="green"
        styleVariant="primary"
      />
      <Button
        leftContent={CancelIcon}
        colorVariant="monochrome-light"
        styleVariant="tertiary"
      />
    </ButtonGroup>
  ),

  name: 'Usage (as CTA 2)',
}

export const UsageWebLinks: StoryObj<{}> = {
  render: () => (
    <LegacyHStack justify="center" spacing={6}>
      <LegacyStackItem>
        <Button
          leftContent={OpenInNewIcon}
          text="See guide"
          rightContent={ArrowRightIcon}
          styleVariant="tertiary"
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Button
          text="See guide"
          rightContent={ArrowRightIcon}
          styleVariant="tertiary"
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Button
          leftContent={OpenInNewIcon}
          text="See guide"
          styleVariant="tertiary"
        />
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Usage (as web link)',
}

export const UsageComposite: StoryObj<{}> = {
  render: () => (
    <LegacyHStack justify="center">
      <LegacyStackItem>
        <Box
          width={360}
          padding={6}
          elevation="3"
          borderRadius="12"
        >
          <LegacyVStack align="stretch">
            <LegacyStackItem>
              <SectionLabel
                leftContent={PeopleIcon}
                content="태그 ∙ 2"
                rightContent={(
                  <Button
                    size="xs"
                    leftContent={ChevronDownIcon}
                    styleVariant="tertiary"
                    colorVariant="monochrome-light"
                  />
                )}
              />
            </LegacyStackItem>
            <LegacyStackItem>
              <ListItem
                leftContent={TagIcon}
                content="KR/Product"
                rightContent={(
                  <LegacyHStack>
                    <LegacyStackItem>
                      <Button
                        size="xs"
                        leftContent={EditIcon}
                        styleVariant="tertiary"
                        colorVariant="monochrome-light"
                      />
                    </LegacyStackItem>
                    <LegacyStackItem>
                      <Button
                        size="xs"
                        leftContent={CancelIcon}
                        styleVariant="tertiary"
                        colorVariant="monochrome-light"
                      />
                    </LegacyStackItem>
                  </LegacyHStack>
                )}
              />
            </LegacyStackItem>
            <LegacyStackItem>
              <ListItem
                leftContent={TagIcon}
                content="KR/Design"
                rightContent={(
                  <LegacyHStack>
                    <LegacyStackItem>
                      <Button
                        size="xs"
                        leftContent={EditIcon}
                        styleVariant="tertiary"
                        colorVariant="monochrome-light"
                      />
                    </LegacyStackItem>
                    <LegacyStackItem>
                      <Button
                        size="xs"
                        leftContent={CancelIcon}
                        styleVariant="tertiary"
                        colorVariant="monochrome-light"
                      />
                    </LegacyStackItem>
                  </LegacyHStack>
                )}
              />
            </LegacyStackItem>
          </LegacyVStack>
        </Box>
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Usage (in composite components)',
}

export const UsageVariousContentsComposite: StoryObj<{}> = {
  render: () => (
    <LegacyHStack justify="center">
      <LegacyStackItem>
        <Button
          leftContent={PlayIcon}
          text="퍼블리시"
          rightContent={ArrowRightIcon}
          colorVariant="green"
        />
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Usage (with left/right contents)',
}

export const UsageVariousContentsIconOnly: StoryObj<{}> = {
  render: () => (
    <LegacyHStack justify="center">
      <LegacyStackItem>
        <Button
          leftContent={PlusIcon}
          colorVariant="monochrome-light"
          styleVariant="secondary"
        />
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Usage (icon only button)',
}

export const UsageVariousContentsCustom: StoryObj<{}> = {
  render: () => (
    <LegacyHStack justify="center">
      <LegacyStackItem>
        <Button
          leftContent={(
            <Avatar
              name="channel"
              avatarUrl="https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png"
              status="online"
            />
          )}
          text="New messages"
          rightContent={(
            <Center
              style={{ borderRadius: '50%' }}
              width={20}
              height={20}
              backgroundColor="bgtxt-red-dark"
            >
              <Text typo="13" color="txt-white-normal">
                1
              </Text>
            </Center>
          )}
          colorVariant="red"
          styleVariant="floating"
        />
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Usage (with custom contents)',
}

const AsyncActionButton = () => {
  const [isFetching, setFetching] = useState(false)
  const handleClick = () => {
    setFetching(true)
    setTimeout(() => {
      setFetching(false)
    }, 1000)
  }
  return (
    <Button
      leftContent={PlayIcon}
      text="Click Me!"
      colorVariant="cobalt"
      styleVariant="primary"
      loading={isFetching}
      disabled={isFetching}
      onClick={handleClick}
    />
  )
}

export const UsageAsync: StoryObj<{}> = {
  render: () => (
    <LegacyHStack justify="center">
      <LegacyStackItem>
        <AsyncActionButton />
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Usage (with asyncrhonous actions)',
}

const OpenDropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const [container, setContainer] = useState<HTMLElement | null>(null)
  return (
    <div style={{ position: 'relative' }} ref={setContainer}>
      <Button
        ref={setTarget}
        text="Select"
        rightContent={TriangleDownIcon}
        active={isOpen}
        colorVariant="monochrome-light"
        styleVariant="tertiary"
        onClick={() => setIsOpen(true)}
      />
      <Overlay
        show={isOpen}
        onHide={() => setIsOpen(false)}
        target={target}
        container={container}
        position="bottom-left"
        marginY={6}
      >
        <Box
          width={200}
          padding={6}
          elevation="2"
          borderRadius="8"
        >
          <Text typo="13" marginLeft={6}>Dropdown content</Text>
        </Box>
      </Overlay>
    </div>
  )
}

export const UsageDropdown: StoryObj<{}> = {
  render: () => (
    <LegacyHStack justify="center">
      <LegacyStackItem>
        <OpenDropdownButton />
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Usage (with dropdown)',
}

export const VariantsColor: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={16} align="start">
      <LegacyStackItem>
        <LegacyHStack spacing={24} align="center">
          <LegacyStackItem size={80}>
            <Text typo="13">Blue</Text>
          </LegacyStackItem>
          <LegacyStackItem>
            <Button
              leftContent={PlusIcon}
              text="Invite"
              colorVariant="blue"
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack spacing={24} align="center">
          <LegacyStackItem size={80}>
            <Text typo="13">Red</Text>
          </LegacyStackItem>
          <LegacyStackItem>
            <Button
              leftContent={TrashIcon}
              text="Remove"
              colorVariant="red"
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack spacing={24} align="center">
          <LegacyStackItem size={80}>
            <Text typo="13">Green</Text>
          </LegacyStackItem>
          <LegacyStackItem>
            <Button
              leftContent={PlayIcon}
              text="Publish"
              colorVariant="green"
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack spacing={24} align="center">
          <LegacyStackItem size={80}>
            <Text typo="13">Cobalt</Text>
          </LegacyStackItem>
          <LegacyStackItem>
            <Button
              leftContent={VideocamIcon}
              text="Join"
              colorVariant="cobalt"
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack spacing={24} align="center">
          <LegacyStackItem size={80}>
            <Text typo="13">Orange</Text>
          </LegacyStackItem>
          <LegacyStackItem>
            <Button
              leftContent={HeartFilledIcon}
              text="Warn"
              colorVariant="orange"
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack spacing={24} align="center">
          <LegacyStackItem size={80}>
            <Text typo="13">Pink</Text>
          </LegacyStackItem>
          <LegacyStackItem>
            <Button
              leftContent={VideocamIcon}
              text="Pink"
              colorVariant="pink"
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack spacing={24} align="center">
          <LegacyStackItem size={80}>
            <Text typo="13">Purple</Text>
          </LegacyStackItem>
          <LegacyStackItem>
            <Button
              leftContent={VideocamIcon}
              text="Purple"
              colorVariant="purple"
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack spacing={24} align="center">
          <LegacyStackItem size={80}>
            <Text typo="13">Monochrome Dark</Text>
          </LegacyStackItem>
          <LegacyStackItem>
            <Button
              leftContent={LightningIcon}
              text="Dark"
              colorVariant="monochrome-dark"
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
      <LegacyStackItem>
        <LegacyHStack spacing={24} align="center">
          <LegacyStackItem size={80}>
            <Text typo="13">Monochrome Light</Text>
          </LegacyStackItem>
          <LegacyStackItem>
            <Button
              leftContent={LightningIcon}
              text="Light alpha"
              colorVariant="monochrome-light"
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Color variants',
}

const buttonStyleVariants: ButtonStyleVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'floating',
  'floating-alt',
]

export const VariantsStyle: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={16} align="start">
      { buttonStyleVariants.map((styleVariant) => (
        <LegacyStackItem key={styleVariant}>
          <LegacyHStack spacing={24} align="center">
            <LegacyStackItem size={80}>
              <Text typo="13">{ styleVariant }</Text>
            </LegacyStackItem>
            <LegacyStackItem>
              <Button
                leftContent={PlusIcon}
                rightContent={ChevronRightIcon}
                text="Invite"
                colorVariant="blue"
                styleVariant={styleVariant}
              />
            </LegacyStackItem>
          </LegacyHStack>
        </LegacyStackItem>
      )) }
    </LegacyVStack>
  ),

  name: 'Style variants',
}

const buttonSizes: ButtonSize[] = ['xs', 's', 'm', 'l', 'xl']

export const VariantsSize: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={16} align="start">
      { buttonSizes.map((size) => (
        <LegacyStackItem key={size}>
          <LegacyHStack spacing={24} align="center">
            <LegacyStackItem size={80}>
              <Text typo="13">{ size }</Text>
            </LegacyStackItem>
            <LegacyStackItem>
              <Button
                leftContent={CalendarIcon}
                rightContent={TriangleDownIcon}
                text="Join"
                size={size}
                colorVariant="blue"
              />
            </LegacyStackItem>
          </LegacyHStack>
        </LegacyStackItem>
      )) }
    </LegacyVStack>
  ),

  name: 'Size variants',
}
