import { useState } from 'react'

import { PlusIcon, TrashIcon } from '@channel.io/bezier-icons'
import { act, fireEvent, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'
import { Button } from '~/src/v3/Button'
import { IconButton } from '~/src/v3/IconButton'
import { OVERLAY_TEST_ID } from '~/src/v3/Overlay/Overlay'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenu'

describe('DropdownMenu', () => {
  it('opens with DropdownMenuTrigger and selects an item', async () => {
    const user = userEvent.setup()
    const onSelect = jest.fn()

    const { getByRole, queryByRole } = render(
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            label="More"
            variant="outlined"
            semantic="secondary"
          />
        </DropdownMenuTrigger>
        <DropdownMenuItem
          content="Edit"
          onSelect={onSelect}
        />
        <DropdownMenuItem content="Archive" />
      </DropdownMenu>
    )

    await user.click(getByRole('button', { name: 'More' }))

    await waitFor(() => {
      expect(getByRole('menuitem', { name: 'Edit' })).toHaveFocus()
    })
    await user.keyboard('{ArrowDown}')

    expect(getByRole('menuitem', { name: 'Archive' })).toHaveFocus()
    await user.click(getByRole('menuitem', { name: 'Edit' }))

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(queryByRole('menu')).not.toBeInTheDocument()
  })

  it('does not render DropdownMenuTrigger inside the menu content', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <DropdownMenu>
        <DropdownMenuTrigger>
          <IconButton
            aria-label="More"
            content={PlusIcon}
          />
        </DropdownMenuTrigger>
        <DropdownMenuItem content="Open" />
      </DropdownMenu>
    )

    await user.click(getByRole('button', { name: 'More' }))

    expect(
      within(getByRole('menu')).queryByRole('button', { name: 'More' })
    ).not.toBeInTheDocument()
  })

  it('supports controlled target based usage', async () => {
    const user = userEvent.setup()
    const onHide = jest.fn()

    function TestComponent() {
      const [show, setShow] = useState(true)

      return (
        <>
          <button type="button">Target</button>
          <DropdownMenu
            show={show}
            target={document.body}
            onHide={() => {
              onHide()
              setShow(false)
            }}
          >
            <DropdownMenuItem content="Open" />
          </DropdownMenu>
        </>
      )
    }

    const { getByRole, queryByRole } = render(<TestComponent />)

    await user.keyboard('{Escape}')

    expect(onHide).toHaveBeenCalledTimes(1)
    await waitFor(() => {
      expect(queryByRole('menu')).not.toBeInTheDocument()
    })
    expect(getByRole('button', { name: 'Target' })).toBeInTheDocument()
  })

  it('moves focus with arrow keys and skips disabled items', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <DropdownMenu defaultShow>
        <DropdownMenuItem content="First" />
        <DropdownMenuItem
          content="Second"
          disabled
        />
        <DropdownMenuItem content="Third" />
      </DropdownMenu>
    )

    const firstItem = getByRole('menuitem', { name: 'First' })
    const thirdItem = getByRole('menuitem', { name: 'Third' })

    firstItem.focus()
    await user.keyboard('{ArrowDown}')

    expect(thirdItem).toHaveFocus()
  })

  it('selects the focused item with Enter and closes the menu', async () => {
    const user = userEvent.setup()
    const onSelect = jest.fn()

    const { getByRole, queryByRole } = render(
      <DropdownMenu defaultShow>
        <DropdownMenuItem
          content="Open"
          onSelect={onSelect}
        />
      </DropdownMenu>
    )

    const item = getByRole('menuitem', { name: 'Open' })

    act(() => {
      item.focus()
    })
    await user.keyboard('{Enter}')

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(queryByRole('menu')).not.toBeInTheDocument()
  })

  it('renders separators outside menuitem collection', () => {
    const { getAllByRole, getByRole } = render(
      <DropdownMenu
        show
        target={document.body}
      >
        <DropdownMenuItem content="Copy" />
        <DropdownMenuSeparator />
        <DropdownMenuItem
          content="Delete"
          variant="destructive"
          leadingContent={TrashIcon}
        />
      </DropdownMenu>
    )

    expect(getAllByRole('menuitem')).toHaveLength(2)
    expect(getByRole('separator')).toBeInTheDocument()
  })

  it('opens submenu from keyboard', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <DropdownMenu
        show
        target={document.body}
      >
        <DropdownMenuSub>
          <DropdownMenuSubTrigger content="Move to" />
          <DropdownMenuSubContent>
            <DropdownMenuItem content="Inbox" />
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenu>
    )

    act(() => {
      getByRole('menuitem', { name: 'Move to' }).focus()
    })
    await user.keyboard('{ArrowRight}')

    await waitFor(() => {
      expect(getByRole('menuitem', { name: 'Inbox' })).toHaveFocus()
    })
  })

  it('closes submenu when pointer leaves both sub trigger and sub content', async () => {
    const { getByRole, queryByRole } = render(
      <DropdownMenu
        show
        target={document.body}
      >
        <DropdownMenuSub>
          <DropdownMenuSubTrigger content="Move to" />
          <DropdownMenuSubContent>
            <DropdownMenuItem content="Inbox" />
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenu>
    )

    const trigger = getByRole('menuitem', { name: 'Move to' })

    fireEvent.pointerEnter(trigger)
    expect(getByRole('menuitem', { name: 'Inbox' })).toBeInTheDocument()

    fireEvent.pointerLeave(trigger, { relatedTarget: document.body })

    await waitFor(() => {
      expect(
        queryByRole('menuitem', { name: 'Inbox' })
      ).not.toBeInTheDocument()
    })
  })

  it('closes submenu with ArrowLeft and returns focus to sub trigger', async () => {
    const user = userEvent.setup()

    const { getAllByTestId, getByRole, queryByRole } = render(
      <DropdownMenu
        show
        target={document.body}
      >
        <DropdownMenuSub>
          <DropdownMenuSubTrigger content="Move to" />
          <DropdownMenuSubContent>
            <DropdownMenuItem content="Inbox" />
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenu>
    )

    const trigger = getByRole('menuitem', { name: 'Move to' })

    act(() => {
      trigger.focus()
    })
    await user.keyboard('{ArrowRight}')
    const submenuItem = getByRole('menuitem', { name: 'Inbox' })

    act(() => {
      submenuItem.focus()
    })
    fireEvent.keyDown(getAllByTestId(OVERLAY_TEST_ID)[1], { key: 'ArrowLeft' })

    await waitFor(() => {
      expect(
        queryByRole('menuitem', { name: 'Inbox' })
      ).not.toBeInTheDocument()
    })
    expect(trigger).toHaveFocus()
  })

  it('keeps the menu open when closeOnSelect is false', async () => {
    const user = userEvent.setup()
    const onSelect = jest.fn()

    const { getByRole } = render(
      <DropdownMenu defaultShow>
        <DropdownMenuItem
          content="Toggle option"
          closeOnSelect={false}
          onSelect={onSelect}
        />
      </DropdownMenu>
    )

    await user.click(getByRole('menuitem', { name: 'Toggle option' }))

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(getByRole('menu')).toBeInTheDocument()
  })

  it('passes active state to Bezier trigger components while open', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <DropdownMenu>
        <DropdownMenuTrigger>
          <IconButton
            aria-label="More"
            content={PlusIcon}
          />
        </DropdownMenuTrigger>
        <DropdownMenuItem content="Open" />
      </DropdownMenu>
    )

    const trigger = getByRole('button', { name: 'More' })
    await user.click(trigger)

    expect(trigger).toHaveAttribute('data-state', 'open')
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
  })
})
