/* External dependencies */
import React, { useState } from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

/* Internal dependencies */
import {
  styled,
  Typography,
} from '~/src/foundation'

import { getTitle } from '~/src/utils/storyUtils'

import { Avatar } from '~/src/components/Avatars/Avatar'
import { ButtonGroup } from '~/src/components/ButtonGroup'
import { TagIcon } from '~/src/components/Icon'
import { ListItem } from '~/src/components/ListItem'
import {
  Overlay,
  OverlayPosition,
} from '~/src/components/Overlay'
import { SectionLabel } from '~/src/components/SectionLabel'
import {
  HStack,
  StackItem,
  VStack,
} from '~/src/components/Stack'
import { StatusType } from '~/src/components/Status'
import { Text } from '~/src/components/Text'

import { Button } from './Button'
import mdx from './Button.mdx'
import type ButtonProps from './Button.types'
import {
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from './Button.types'

export default {
  title: getTitle(base),
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
        options: [
          ...Object.values(ButtonSize),
        ],
      },
    },
    styleVariant: {
      control: {
        type: 'radio',
        options: [
          ...Object.values(ButtonStyleVariant),
        ],
      },
    },
    colorVariant: {
      control: {
        type: 'radio',
        options: [
          ...Object.values(ButtonColorVariant),
        ],
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Playground: Story<ButtonProps> = Template.bind({})

Playground.args = {
  text: 'Invite',
  disabled: false,
  active: false,
  loading: false,
  leftContent: 'plus',
  rightContent: 'arrow-right',
  size: ButtonSize.M,
  styleVariant: ButtonStyleVariant.Primary,
  colorVariant: ButtonColorVariant.Blue,
}

export const WithCustomComponent: Story<ButtonProps> = Template.bind({})

WithCustomComponent.args = {
  text: 'Set Manager',
  leftContent: <Avatar name="test" avatarUrl="https://source.unsplash.com/random" />,
  size: ButtonSize.M,
  styleVariant: ButtonStyleVariant.Primary,
  colorVariant: ButtonColorVariant.Blue,
}

export const OverviewCTA: Story<{}> = () => (
  <HStack justify="center" spacing={6}>
    <StackItem>
      <Button
        disabled
        text="Cancel"
        colorVariant={ButtonColorVariant.MonochromeLight}
        styleVariant={ButtonStyleVariant.Secondary}
      />
    </StackItem>
    <StackItem>
      <Button
        leftContent="open-in-new"
        text="Open link"
        colorVariant={ButtonColorVariant.Blue}
        styleVariant={ButtonStyleVariant.Secondary}
      />
    </StackItem>
    <StackItem>
      <Button
        leftContent="check"
        text="Publish"
        colorVariant={ButtonColorVariant.Green}
        styleVariant={ButtonStyleVariant.Primary}
      />
    </StackItem>
  </HStack>
)

OverviewCTA.storyName = 'Overview (as CTA)'

export const OverviewFloating: Story<{}> = () => (
  <HStack justify="center">
    <StackItem>
      <Button
        leftContent="chevron-down"
        text="New messages"
        colorVariant={ButtonColorVariant.Cobalt}
        styleVariant={ButtonStyleVariant.Floating}
      />
    </StackItem>
  </HStack>
)

OverviewFloating.storyName = 'Overview (as floating button)'

export const UsageCTA: Story<{}> = () => (
  <ButtonGroup>
    <Button
      text="취소"
      colorVariant={ButtonColorVariant.MonochromeLight}
      styleVariant={ButtonStyleVariant.Secondary}
    />
    <Button
      leftContent="play"
      text="퍼블리시"
      colorVariant={ButtonColorVariant.Green}
      styleVariant={ButtonStyleVariant.Primary}
    />
  </ButtonGroup>
)

UsageCTA.storyName = 'Usage (as CTA)'

export const UsageCTA2: Story<{}> = () => (
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
      leftContent="play"
      text="퍼블리시"
      colorVariant={ButtonColorVariant.Green}
      styleVariant={ButtonStyleVariant.Primary}
    />
    <Button
      leftContent="cancel"
      colorVariant={ButtonColorVariant.MonochromeLight}
      styleVariant={ButtonStyleVariant.Tertiary}
    />
  </ButtonGroup>
)

UsageCTA2.storyName = 'Usage (as CTA 2)'

export const UsageWebLinks: Story<{}> = () => (
  <HStack justify="center" spacing={6}>
    <StackItem>
      <Button
        leftContent="open-in-new"
        text="See guide"
        rightContent="arrow-right"
        styleVariant={ButtonStyleVariant.Tertiary}
      />
    </StackItem>
    <StackItem>
      <Button
        text="See guide"
        rightContent="arrow-right"
        styleVariant={ButtonStyleVariant.Tertiary}
      />
    </StackItem>
    <StackItem>
      <Button
        leftContent="open-in-new"
        text="See guide"
        styleVariant={ButtonStyleVariant.Tertiary}
      />
    </StackItem>
  </HStack>
)

UsageWebLinks.storyName = 'Usage (as web link)'

const Card = styled.div`
  width: 360px;
  padding: 6px;
  ${({ foundation }) => foundation?.elevation.ev3()}
  ${({ foundation }) => foundation?.rounding.round12}
`

export const UsageComposite: Story<{}> = () => (
  <HStack justify="center">
    <StackItem>
      <Card>
        <VStack align="stretch">
          <StackItem>
            <SectionLabel
              leftContent={{ icon: 'people' }}
              content="태그 ∙ 2"
              rightContent={(
                <Button
                  size={ButtonSize.XS}
                  leftContent="chevron-down"
                  styleVariant={ButtonStyleVariant.Tertiary}
                  colorVariant={ButtonColorVariant.MonochromeLight}
                />
              )}
            />
          </StackItem>
          <StackItem>
            <ListItem
              leftIcon={TagIcon}
              content="KR/Product"
              rightContent={(
                <HStack>
                  <StackItem>
                    <Button
                      size={ButtonSize.XS}
                      leftContent="edit"
                      styleVariant={ButtonStyleVariant.Tertiary}
                      colorVariant={ButtonColorVariant.MonochromeLight}
                    />
                  </StackItem>
                  <StackItem>
                    <Button
                      size={ButtonSize.XS}
                      leftContent="cancel"
                      styleVariant={ButtonStyleVariant.Tertiary}
                      colorVariant={ButtonColorVariant.MonochromeLight}
                    />
                  </StackItem>
                </HStack>
              )}
            />
          </StackItem>
          <StackItem>
            <ListItem
              leftIcon={TagIcon}
              content="KR/Design"
              rightContent={(
                <HStack>
                  <StackItem>
                    <Button
                      size={ButtonSize.XS}
                      leftContent="edit"
                      styleVariant={ButtonStyleVariant.Tertiary}
                      colorVariant={ButtonColorVariant.MonochromeLight}
                    />
                  </StackItem>
                  <StackItem>
                    <Button
                      size={ButtonSize.XS}
                      leftContent="cancel"
                      styleVariant={ButtonStyleVariant.Tertiary}
                      colorVariant={ButtonColorVariant.MonochromeLight}
                    />
                  </StackItem>
                </HStack>
              )}
            />
          </StackItem>
        </VStack>
      </Card>
    </StackItem>
  </HStack>
)

UsageComposite.storyName = 'Usage (in composite components)'

export const UsageVariousContentsComposite: Story<{}> = () => (
  <HStack justify="center">
    <StackItem>
      <Button
        leftContent="play"
        text="퍼블리시"
        rightContent="arrow-right"
        colorVariant={ButtonColorVariant.Green}
      />
    </StackItem>
  </HStack>
)

UsageVariousContentsComposite.storyName = 'Usage (with left/right contents)'

export const UsageVariousContentsIconOnly: Story<{}> = () => (
  <HStack justify="center">
    <StackItem>
      <Button
        leftContent="plus"
        colorVariant={ButtonColorVariant.MonochromeLight}
        styleVariant={ButtonStyleVariant.Secondary}
      />
    </StackItem>
  </HStack>
)

UsageVariousContentsIconOnly.storyName = 'Usage (icon only button)'

const AlertBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: var(--bgtxt-red-dark);
  border-radius: 50%;
`

export const UsageVariousContentsCustom: Story<{}> = () => (
  <HStack justify="center">
    <StackItem>
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
            <Text typo={Typography.Size13} color="txt-white-normal">1</Text>
          </AlertBadge>
        )}
        colorVariant={ButtonColorVariant.Red}
        styleVariant={ButtonStyleVariant.Floating}
      />
    </StackItem>
  </HStack>
)

UsageVariousContentsCustom.storyName = 'Usage (with custom contents)'

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
      leftContent="play"
      text="Click Me!"
      colorVariant={ButtonColorVariant.Cobalt}
      styleVariant={ButtonStyleVariant.Primary}
      loading={isFetching}
      disabled={isFetching}
      onClick={handleClick}
    />
  )
}

export const UsageAsync: Story<{}> = () => (
  <HStack justify="center">
    <StackItem>
      <AsyncActionButton />
    </StackItem>
  </HStack>
)

UsageAsync.storyName = 'Usage (with asyncrhonous actions)'

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
        rightContent="triangle-down"
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
          <Text typo={Typography.Size13} marginLeft={6}>Dropdown content</Text>
        </Dropdown>
      </Overlay>
    </div>
  )
}

export const UsageDropdown: Story<{}> = () => (
  <HStack justify="center">
    <StackItem>
      <OpenDropdownButton />
    </StackItem>
  </HStack>
)

UsageDropdown.storyName = 'Usage (with dropdown)'

export const VariantsColor: Story<{}> = () => (
  <VStack spacing={16} align="start">
    <StackItem>
      <HStack spacing={24} align="center">
        <StackItem size={80}>
          <Text typo={Typography.Size13}>Blue</Text>
        </StackItem>
        <StackItem>
          <Button leftContent="plus" text="Invite" colorVariant={ButtonColorVariant.Blue} />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={24} align="center">
        <StackItem size={80}>
          <Text typo={Typography.Size13}>Red</Text>
        </StackItem>
        <StackItem>
          <Button leftContent="trash" text="Remove" colorVariant={ButtonColorVariant.Red} />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={24} align="center">
        <StackItem size={80}>
          <Text typo={Typography.Size13}>Green</Text>
        </StackItem>
        <StackItem>
          <Button leftContent="play" text="Publish" colorVariant={ButtonColorVariant.Green} />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={24} align="center">
        <StackItem size={80}>
          <Text typo={Typography.Size13}>Cobalt</Text>
        </StackItem>
        <StackItem>
          <Button leftContent="videocam" text="Join" colorVariant={ButtonColorVariant.Cobalt} />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={24} align="center">
        <StackItem size={80}>
          <Text typo={Typography.Size13}>Orange</Text>
        </StackItem>
        <StackItem>
          <Button leftContent="heart-filled" text="Warn" colorVariant={ButtonColorVariant.Orange} />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={24} align="center">
        <StackItem size={80}>
          <Text typo={Typography.Size13}>Pink</Text>
        </StackItem>
        <StackItem>
          <Button leftContent="videocam" text="Pink" colorVariant={ButtonColorVariant.Pink} />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={24} align="center">
        <StackItem size={80}>
          <Text typo={Typography.Size13}>Purple</Text>
        </StackItem>
        <StackItem>
          <Button leftContent="videocam" text="Purple" colorVariant={ButtonColorVariant.Purple} />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={24} align="center">
        <StackItem size={80}>
          <Text typo={Typography.Size13}>Monochrome Dark</Text>
        </StackItem>
        <StackItem>
          <Button leftContent="lightning" text="Dark" colorVariant={ButtonColorVariant.MonochromeDark} />
        </StackItem>
      </HStack>
    </StackItem>
    <StackItem>
      <HStack spacing={24} align="center">
        <StackItem size={80}>
          <Text typo={Typography.Size13}>Monochrome Light</Text>
        </StackItem>
        <StackItem>
          <Button leftContent="lightning" text="Light alpha" colorVariant={ButtonColorVariant.MonochromeLight} />
        </StackItem>
      </HStack>
    </StackItem>
  </VStack>
)

VariantsColor.storyName = 'Color variants'

export const VariantsStyle: Story<{}> = () => (
  <VStack spacing={16} align="start">
    { Object.entries(ButtonStyleVariant)
      .map(([key, styleVariant]) => (
        <StackItem key={styleVariant}>
          <HStack spacing={24} align="center">
            <StackItem size={80}>
              <Text typo={Typography.Size13}>{ key }</Text>
            </StackItem>
            <StackItem>
              <Button
                leftContent="plus"
                rightContent="chevron-right"
                text="Invite"
                colorVariant={ButtonColorVariant.Blue}
                styleVariant={styleVariant}
              />
            </StackItem>
          </HStack>
        </StackItem>
      )) }
  </VStack>
)

VariantsStyle.storyName = 'Style variants'

export const VariantsSize: Story<{}> = () => (
  <VStack spacing={16} align="start">
    { Object.entries(ButtonSize)
      .map(([key, size]) => (
        <StackItem key={key}>
          <HStack spacing={24} align="center">
            <StackItem size={80}>
              <Text typo={Typography.Size13}>{ key }</Text>
            </StackItem>
            <StackItem>
              <Button
                leftContent="calendar"
                rightContent="triangle-down"
                text="Join"
                size={size}
                colorVariant={ButtonColorVariant.Blue}
              />
            </StackItem>
          </HStack>
        </StackItem>
      )) }
  </VStack>
)

VariantsSize.storyName = 'Size variants'
