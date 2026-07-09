import { useCallback, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

import {
  ArchiveIcon,
  ArrowRightUpSmallIcon,
  CheckIcon,
  EditIcon,
  PlusIcon,
  SendForwardIcon,
  TrashIcon,
} from '@channel.io/bezier-icons'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '~/src/beta/Button'
import { IconButton } from '~/src/beta/IconButton'
import { Text } from '~/src/beta/Text'

import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenu'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Beta components/DropdownMenu',
  component: DropdownMenu,
  decorators: [
    (Story) => (
      <div style={{ minHeight: 320 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Q4eonbJMKogZHuzUGxETuQ/%F0%9F%9A%A7-Web-Components?node-id=3624-271&m=dev',
    },
  },
}

export default meta

type Story = StoryObj<typeof DropdownMenu>

function ControlledMenu({
  children,
  label = 'Open menu',
  maxHeight,
}: {
  children: ReactNode
  label?: string
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
        label={label}
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
      <DropdownMenuItem
        content="Go to README"
        leadingContent={ArrowRightUpSmallIcon}
        href="?path=/docs/readme--docs"
        target="_top"
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

export const ItemContent: Story = {
  render: () => (
    <ControlledMenu>
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
      <DropdownMenuItem
        content="Archive"
        leadingContent={ArchiveIcon}
        disabled
      />
    </ControlledMenu>
  ),
}

export const GroupsAndSubmenus: Story = {
  render: () => (
    <ControlledMenu>
      <DropdownMenuGroup label="File">
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
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup label="Danger zone">
        <DropdownMenuItem
          content="Delete"
          variant="destructive"
          leadingContent={TrashIcon}
        />
      </DropdownMenuGroup>
    </ControlledMenu>
  ),
}

export const ControlledTarget: Story = {
  render: () => (
    <ControlledMenu label="Open controlled menu">
      <DropdownMenuItem
        content="Rename"
        leadingContent={EditIcon}
      />
      <DropdownMenuItem
        content="Archive"
        leadingContent={ArchiveIcon}
      />
      <DropdownMenuItem
        content="Delete"
        variant="destructive"
        leadingContent={TrashIcon}
      />
    </ControlledMenu>
  ),
}

export const Scrollable: Story = {
  render: () => (
    <ControlledMenu maxHeight={180}>
      {Array.from({ length: 12 }, (_, index) => (
        <DropdownMenuItem
          key={index}
          content={`Menu item ${index + 1}`}
        />
      ))}
    </ControlledMenu>
  ),
}
