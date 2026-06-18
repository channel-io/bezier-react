import { Fragment, useState } from 'react'

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

  it('flattens Fragment children before splitting trigger and menu items', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <DropdownMenu>
        <Fragment>
          <DropdownMenuTrigger>
            <IconButton
              aria-label="More"
              content={PlusIcon}
            />
          </DropdownMenuTrigger>
          <DropdownMenuItem content="Open" />
        </Fragment>
      </DropdownMenu>
    )

    await user.click(getByRole('button', { name: 'More' }))

    expect(getByRole('menuitem', { name: 'Open' })).toBeInTheDocument()
  })

  it('returns null when DropdownMenuTrigger does not receive a valid element', () => {
    const { queryByText } = render(
      <DropdownMenu>
        <DropdownMenuTrigger>More</DropdownMenuTrigger>
        <DropdownMenuItem content="Open" />
      </DropdownMenu>
    )

    expect(queryByText('More')).not.toBeInTheDocument()
  })

  it('opens from a native trigger by keyboard and passes DOM active state', async () => {
    const user = userEvent.setup()
    const onKeyDown = jest.fn()

    const { getByRole } = render(
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button
            type="button"
            onKeyDown={onKeyDown}
          >
            More
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuItem content="Open" />
      </DropdownMenu>
    )

    const trigger = getByRole('button', { name: 'More' })

    await user.tab()
    await user.keyboard('{ArrowDown}')

    expect(onKeyDown).toHaveBeenCalled()
    expect(trigger).toHaveAttribute('data-active', 'true')
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(getByRole('menuitem', { name: 'Open' })).toHaveFocus()
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

  it('moves focus with ArrowUp, Home, and End keys', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <DropdownMenu defaultShow>
        <DropdownMenuItem content="First" />
        <DropdownMenuItem content="Second" />
        <DropdownMenuItem content="Third" />
      </DropdownMenu>
    )

    const firstItem = getByRole('menuitem', { name: 'First' })
    const secondItem = getByRole('menuitem', { name: 'Second' })
    const thirdItem = getByRole('menuitem', { name: 'Third' })

    secondItem.focus()
    await user.keyboard('{Home}')
    expect(firstItem).toHaveFocus()

    await user.keyboard('{End}')
    expect(thirdItem).toHaveFocus()

    await user.keyboard('{ArrowUp}')
    expect(secondItem).toHaveFocus()
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

  it('selects the focused item with Space', async () => {
    const user = userEvent.setup()
    const onSelect = jest.fn()

    const { getByRole } = render(
      <DropdownMenu defaultShow>
        <DropdownMenuItem
          content="Open"
          onSelect={onSelect}
        />
      </DropdownMenu>
    )

    act(() => {
      getByRole('menuitem', { name: 'Open' }).focus()
    })
    await user.keyboard('[Space]')

    expect(onSelect).toHaveBeenCalledTimes(1)
  })

  it('does not select disabled items', async () => {
    const user = userEvent.setup()
    const onSelect = jest.fn()

    const { getByRole } = render(
      <DropdownMenu defaultShow>
        <DropdownMenuItem
          content="Open"
          disabled
          onSelect={onSelect}
        />
      </DropdownMenu>
    )

    await user.click(getByRole('menuitem', { name: 'Open' }))

    expect(onSelect).not.toHaveBeenCalled()
    expect(getByRole('menu')).toBeInTheDocument()
  })

  it('keeps the menu open when selection is prevented', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <DropdownMenu defaultShow>
        <DropdownMenuItem
          content="Open"
          onSelect={(event) => event.preventDefault()}
        />
      </DropdownMenu>
    )

    await user.click(getByRole('menuitem', { name: 'Open' }))

    expect(getByRole('menu')).toBeInTheDocument()
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

  it('does not open submenu when sub trigger keyboard event is prevented', async () => {
    const user = userEvent.setup()

    const { getByRole, queryByRole } = render(
      <DropdownMenu
        show
        target={document.body}
      >
        <DropdownMenuSub>
          <DropdownMenuSubTrigger
            content="Move to"
            onKeyDown={(event) => event.preventDefault()}
          />
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

    expect(queryByRole('menuitem', { name: 'Inbox' })).not.toBeInTheDocument()
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

  it('keeps submenu open while pointer moves from trigger to sub content', async () => {
    const { getAllByTestId, getByRole } = render(
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
    const subContentOverlay = getAllByTestId(OVERLAY_TEST_ID)[1]

    fireEvent.pointerLeave(trigger, { relatedTarget: subContentOverlay })
    fireEvent.pointerEnter(subContentOverlay)
    fireEvent.pointerLeave(subContentOverlay, { relatedTarget: trigger })

    expect(getByRole('menuitem', { name: 'Inbox' })).toBeInTheDocument()
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
