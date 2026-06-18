import { useCallback, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

import {
  ArchiveIcon,
  CheckIcon,
  EditIcon,
  PlusIcon,
  SendForwardIcon,
  TrashIcon,
} from '@channel.io/bezier-icons'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '~/src/v3/Button'
import { IconButton } from '~/src/v3/IconButton'
import { Text } from '~/src/v3/Text'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenu'

const meta: Meta<typeof DropdownMenu> = {
  title: 'V3 components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Q4eonbJMKogZHuzUGxETuQ/%F0%9F%9A%A7-Web-Components?node-id=3624-271&m=dev',
    },
  },
}

export default meta

type Story = StoryObj<typeof DropdownMenu>

function DropdownMenuExample({
  children,
  maxHeight,
}: {
  children: ReactNode
  maxHeight?: CSSProperties['maxHeight']
}) {
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState<HTMLButtonElement | null>(null)
  const setTargetRef = useCallback((element: HTMLButtonElement | null) => {
    setTarget(element)
  }, [])

  return (
    <>
      <Button
        ref={setTargetRef}
        label="Open menu"
        variant="outlined"
        semantic="secondary"
        leadingContent={PlusIcon}
        active={show}
        aria-haspopup="menu"
        aria-expanded={show}
        onClick={() => setShow((prev) => !prev)}
      />
      <DropdownMenu
        show={show}
        target={target}
        maxHeight={maxHeight}
        onHide={() => setShow(false)}
      >
        {children}
      </DropdownMenu>
    </>
  )
}

function ControlledWithExternalTriggerExample() {
  const [show, setShow] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button
        ref={triggerRef}
        label="Open menu"
        variant="outlined"
        semantic="secondary"
        active={show}
        aria-haspopup="menu"
        aria-expanded={show}
        onClick={() => setShow((prev) => !prev)}
      />
      <DropdownMenu
        show={show}
        target={triggerRef.current}
        onHide={() => setShow(false)}
      >
        <DropdownMenuItem
          content="Rename"
          leadingContent={EditIcon}
        />
        <DropdownMenuItem
          content="Archive"
          leadingContent={ArchiveIcon}
        />
      </DropdownMenu>
    </>
  )
}

export const WithTrigger: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IconButton
          aria-label="More"
          content={PlusIcon}
          variant="outlined"
          semantic="secondary"
        />
      </DropdownMenuTrigger>

      <DropdownMenuItem
        content="Edit"
        leadingContent={EditIcon}
        onSelect={() => {}}
      />
      <DropdownMenuItem
        content="Archive"
        leadingContent={ArchiveIcon}
        onSelect={() => {}}
      />
      <DropdownMenuSeparator />
      <DropdownMenuItem
        content="Delete"
        variant="destructive"
        leadingContent={TrashIcon}
        onSelect={() => {}}
      />
    </DropdownMenu>
  ),
}

export const ControlledWithExternalTrigger: Story = {
  render: () => <ControlledWithExternalTriggerExample />,
}

export const RichContent: Story = {
  render: () => (
    <DropdownMenuExample>
      <DropdownMenuItem
        content={
          <Text typo="14">
            Move to <Text color="text-accent-blue">priority inbox</Text>
          </Text>
        }
        leadingContent={CheckIcon}
        trailingContent={
          <Text
            typo="12"
            color="text-neutral-lighter"
          >
            ⌘K
          </Text>
        }
        description={
          <Text
            typo="12"
            color="text-neutral-light"
          >
            Rich text can be used for inline emphasis.
          </Text>
        }
      />
    </DropdownMenuExample>
  ),
}

export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenuExample>
      <DropdownMenuItem
        content="Edit"
        leadingContent={EditIcon}
      />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger
          content="Move to"
          leadingContent={SendForwardIcon}
        />
        <DropdownMenuSubContent>
          <DropdownMenuItem content="Inbox" />
          <DropdownMenuItem content="Archive" />
          <DropdownMenuItem content="Trash" />
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        content="Delete"
        variant="destructive"
        leadingContent={TrashIcon}
      />
    </DropdownMenuExample>
  ),
}

export const DisabledAndDestructive: Story = {
  render: () => (
    <DropdownMenuExample>
      <DropdownMenuItem
        content="Edit"
        leadingContent={EditIcon}
      />
      <DropdownMenuItem
        content="Archive"
        leadingContent={ArchiveIcon}
        disabled
      />
      <DropdownMenuSeparator />
      <DropdownMenuItem
        content="Delete"
        variant="destructive"
        leadingContent={TrashIcon}
      />
    </DropdownMenuExample>
  ),
}

export const Scrollable: Story = {
  render: () => (
    <DropdownMenuExample maxHeight={180}>
      {Array.from({ length: 12 }, (_, index) => (
        <DropdownMenuItem
          key={index}
          content={`Menu item ${index + 1}`}
        />
      ))}
    </DropdownMenuExample>
  ),
}
