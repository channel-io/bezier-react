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

import { styled } from '~/src/foundation'

import { Avatar } from '~/src/components/Avatars/Avatar'
import { ButtonGroup } from '~/src/components/ButtonGroup'
import {
  LegacyHStack,
  LegacyStackItem,
  LegacyVStack,
} from '~/src/components/LegacyStack'
import { ListItem } from '~/src/components/ListItem'
import {
  Overlay,
  OverlayPosition,
} from '~/src/components/Overlay'
import { SectionLabel } from '~/src/components/SectionLabel'
import { StatusType } from '~/src/components/Status'
import { Text } from '~/src/components/Text'

import { Button } from './Button'
import mdx from './Button.mdx'
import type { ButtonProps } from './Button.types'
import {
  ButtonColorVariant,
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
    size: {
      control: {
        type: 'radio',
      },
      options: Object.values(ButtonSize),
    },
    styleVariant: {
      control: {
        type: 'radio',
      },
      options: Object.values(ButtonStyleVariant),
    },
    colorVariant: {
      control: {
        type: 'radio',
      },
      options: Object.values(ButtonColorVariant),
    },
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
    size: ButtonSize.M,
    styleVariant: ButtonStyleVariant.Primary,
    colorVariant: ButtonColorVariant.Blue,
  },
}

export const WithCustomComponent: StoryObj<ButtonProps> = {
  args: {
    text: 'Set Manager',
    leftContent: (
      <Avatar name="test" avatarUrl="https://source.unsplash.com/random" />
    ),
    size: ButtonSize.M,
    styleVariant: ButtonStyleVariant.Primary,
    colorVariant: ButtonColorVariant.Blue,
  },
}

export const OverviewCTA: StoryObj<{}> = {
  render: () => (
    <LegacyHStack justify="center" spacing={6}>
      <LegacyStackItem>
        <Button
          disabled
          text="Cancel"
          colorVariant={ButtonColorVariant.MonochromeLight}
          styleVariant={ButtonStyleVariant.Secondary}
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Button
          leftContent={OpenInNewIcon}
          text="Open link"
          colorVariant={ButtonColorVariant.Blue}
          styleVariant={ButtonStyleVariant.Secondary}
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Button
          leftContent={CheckIcon}
          text="Publish"
          colorVariant={ButtonColorVariant.Green}
          styleVariant={ButtonStyleVariant.Primary}
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
          colorVariant={ButtonColorVariant.Cobalt}
          styleVariant={ButtonStyleVariant.Floating}
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
        colorVariant={ButtonColorVariant.MonochromeLight}
        styleVariant={ButtonStyleVariant.Secondary}
      />
      <Button
        leftContent={PlayIcon}
        text="퍼블리시"
        colorVariant={ButtonColorVariant.Green}
        styleVariant={ButtonStyleVariant.Primary}
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
        colorVariant={ButtonColorVariant.MonochromeLight}
        styleVariant={ButtonStyleVariant.Secondary}
      />
      <Button
        text="임시 저장"
        colorVariant={ButtonColorVariant.Blue}
        styleVariant={ButtonStyleVariant.Secondary}
      />
      <Button
        leftContent={PlayIcon}
        text="퍼블리시"
        colorVariant={ButtonColorVariant.Green}
        styleVariant={ButtonStyleVariant.Primary}
      />
      <Button
        leftContent={CancelIcon}
        colorVariant={ButtonColorVariant.MonochromeLight}
        styleVariant={ButtonStyleVariant.Tertiary}
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
          styleVariant={ButtonStyleVariant.Tertiary}
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Button
          text="See guide"
          rightContent={ArrowRightIcon}
          styleVariant={ButtonStyleVariant.Tertiary}
        />
      </LegacyStackItem>
      <LegacyStackItem>
        <Button
          leftContent={OpenInNewIcon}
          text="See guide"
          styleVariant={ButtonStyleVariant.Tertiary}
        />
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Usage (as web link)',
}

const Card = styled.div`
  width: 360px;
  padding: 6px;
  ${({ foundation }) => foundation?.elevation.ev3()}
  ${({ foundation }) => foundation?.rounding.round12}
`

export const UsageComposite: StoryObj<{}> = {
  render: () => (
    <LegacyHStack justify="center">
      <LegacyStackItem>
        <Card>
          <LegacyVStack align="stretch">
            <LegacyStackItem>
              <SectionLabel
                leftContent={{ icon: PeopleIcon }}
                content="태그 ∙ 2"
                rightContent={(
                  <Button
                    size={ButtonSize.XS}
                    leftContent={ChevronDownIcon}
                    styleVariant={ButtonStyleVariant.Tertiary}
                    colorVariant={ButtonColorVariant.MonochromeLight}
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
                        size={ButtonSize.XS}
                        leftContent={EditIcon}
                        styleVariant={ButtonStyleVariant.Tertiary}
                        colorVariant={ButtonColorVariant.MonochromeLight}
                      />
                    </LegacyStackItem>
                    <LegacyStackItem>
                      <Button
                        size={ButtonSize.XS}
                        leftContent={CancelIcon}
                        styleVariant={ButtonStyleVariant.Tertiary}
                        colorVariant={ButtonColorVariant.MonochromeLight}
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
                        size={ButtonSize.XS}
                        leftContent={EditIcon}
                        styleVariant={ButtonStyleVariant.Tertiary}
                        colorVariant={ButtonColorVariant.MonochromeLight}
                      />
                    </LegacyStackItem>
                    <LegacyStackItem>
                      <Button
                        size={ButtonSize.XS}
                        leftContent={CancelIcon}
                        styleVariant={ButtonStyleVariant.Tertiary}
                        colorVariant={ButtonColorVariant.MonochromeLight}
                      />
                    </LegacyStackItem>
                  </LegacyHStack>
                )}
              />
            </LegacyStackItem>
          </LegacyVStack>
        </Card>
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
          colorVariant={ButtonColorVariant.Green}
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
          colorVariant={ButtonColorVariant.MonochromeLight}
          styleVariant={ButtonStyleVariant.Secondary}
        />
      </LegacyStackItem>
    </LegacyHStack>
  ),

  name: 'Usage (icon only button)',
}

const AlertBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: var(--bgtxt-red-dark);
  border-radius: 50%;
`

export const UsageVariousContentsCustom: StoryObj<{}> = {
  render: () => (
    <LegacyHStack justify="center">
      <LegacyStackItem>
        <Button
          leftContent={(
            <Avatar
              name="channel"
              avatarUrl="https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png"
              status={StatusType.Online}
            />
          )}
          text="New messages"
          rightContent={(
            <AlertBadge>
              <Text typo="13" color="txt-white-normal">
                1
              </Text>
            </AlertBadge>
          )}
          colorVariant={ButtonColorVariant.Red}
          styleVariant={ButtonStyleVariant.Floating}
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
      colorVariant={ButtonColorVariant.Cobalt}
      styleVariant={ButtonStyleVariant.Primary}
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

const Dropdown = styled.div`
  width: 200px;
  padding: 6px;
  ${({ foundation }) => foundation?.elevation.ev2()}
  ${({ foundation }) => foundation?.rounding.round8}
`

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
        colorVariant={ButtonColorVariant.MonochromeLight}
        styleVariant={ButtonStyleVariant.Tertiary}
        onClick={() => setIsOpen(true)}
      />
      <Overlay
        show={isOpen}
        onHide={() => setIsOpen(false)}
        target={target}
        container={container}
        position={OverlayPosition.BottomLeft}
        marginY={6}
      >
        <Dropdown>
          <Text typo="13" marginLeft={6}>Dropdown content</Text>
        </Dropdown>
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
              colorVariant={ButtonColorVariant.Blue}
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
              colorVariant={ButtonColorVariant.Red}
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
              colorVariant={ButtonColorVariant.Green}
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
              colorVariant={ButtonColorVariant.Cobalt}
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
              colorVariant={ButtonColorVariant.Orange}
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
              colorVariant={ButtonColorVariant.Pink}
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
              colorVariant={ButtonColorVariant.Purple}
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
              colorVariant={ButtonColorVariant.MonochromeDark}
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
              colorVariant={ButtonColorVariant.MonochromeLight}
            />
          </LegacyStackItem>
        </LegacyHStack>
      </LegacyStackItem>
    </LegacyVStack>
  ),

  name: 'Color variants',
}

export const VariantsStyle: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={16} align="start">
      { Object.entries(ButtonStyleVariant).map(([key, styleVariant]) => (
        <LegacyStackItem key={styleVariant}>
          <LegacyHStack spacing={24} align="center">
            <LegacyStackItem size={80}>
              <Text typo="13">{ key }</Text>
            </LegacyStackItem>
            <LegacyStackItem>
              <Button
                leftContent={PlusIcon}
                rightContent={ChevronRightIcon}
                text="Invite"
                colorVariant={ButtonColorVariant.Blue}
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

export const VariantsSize: StoryObj<{}> = {
  render: () => (
    <LegacyVStack spacing={16} align="start">
      { Object.entries(ButtonSize).map(([key, size]) => (
        <LegacyStackItem key={key}>
          <LegacyHStack spacing={24} align="center">
            <LegacyStackItem size={80}>
              <Text typo="13">{ key }</Text>
            </LegacyStackItem>
            <LegacyStackItem>
              <Button
                leftContent={CalendarIcon}
                rightContent={TriangleDownIcon}
                text="Join"
                size={size}
                colorVariant={ButtonColorVariant.Blue}
              />
            </LegacyStackItem>
          </LegacyHStack>
        </LegacyStackItem>
      )) }
    </LegacyVStack>
  ),

  name: 'Size variants',
}
