import type { ReactElement } from 'react'

import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import {
  Collapsible,
  CollapsibleClose,
  CollapsibleContent,
  CollapsibleTrigger,
} from '.'

describe('Collapsible', () => {
  it('does not render content by default', () => {
    const { queryByText } = render(
      <Collapsible>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    )

    expect(queryByText('Content')).not.toBeInTheDocument()
  })

  it('toggles content with a trigger element', async () => {
    const user = userEvent.setup()

    const { getByRole, queryByText } = render(
      <Collapsible>
        <CollapsibleTrigger>
          <button type="button">Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    )

    const trigger = getByRole('button', { name: 'Toggle' })

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await user.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(queryByText('Content')).toBeInTheDocument()
  })

  it('supports render function trigger', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <Collapsible>
        <CollapsibleTrigger>
          {({ open, triggerProps }) => (
            <button {...triggerProps}>{open ? 'Close' : 'Open'}</button>
          )}
        </CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    )

    await user.click(getByRole('button', { name: 'Open' }))

    expect(getByRole('button', { name: 'Close' })).toHaveAttribute(
      'aria-expanded',
      'true'
    )
  })

  it('supports closing from content', async () => {
    const user = userEvent.setup()

    const { getByRole, queryByText } = render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>
          <button type="button">Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <span>Content</span>
          <CollapsibleClose>
            <button type="button">Close</button>
          </CollapsibleClose>
        </CollapsibleContent>
      </Collapsible>
    )

    await user.click(getByRole('button', { name: 'Close' }))

    expect(queryByText('Content')).not.toBeInTheDocument()
  })

  it('calls onOpenChange in controlled mode', async () => {
    const user = userEvent.setup()
    const onOpenChange = jest.fn()

    const { getByRole } = render(
      <Collapsible
        open={false}
        onOpenChange={onOpenChange}
      >
        <CollapsibleTrigger>
          <button type="button">Toggle</button>
        </CollapsibleTrigger>
      </Collapsible>
    )

    await user.click(getByRole('button', { name: 'Toggle' }))

    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup()
    const onOpenChange = jest.fn()

    const { getByRole, queryByText } = render(
      <Collapsible
        disabled
        defaultOpen
        onOpenChange={onOpenChange}
      >
        <CollapsibleTrigger>
          <button type="button">Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <span>Content</span>
          <CollapsibleClose>
            <button type="button">Close</button>
          </CollapsibleClose>
        </CollapsibleContent>
      </Collapsible>
    )

    const trigger = getByRole('button', { name: 'Toggle' })

    await user.click(trigger)
    await user.click(getByRole('button', { name: 'Close' }))

    expect(trigger).toBeDisabled()
    expect(queryByText('Content')).toBeInTheDocument()
    expect(onOpenChange).not.toHaveBeenCalled()
  })

  it('supports non-button trigger keyboard interaction', async () => {
    const user = userEvent.setup()
    const onKeyDown = jest.fn()

    const { getByRole, queryByText } = render(
      <Collapsible>
        <CollapsibleTrigger onKeyDown={onKeyDown}>
          <div>Toggle</div>
        </CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    )

    const trigger = getByRole('button', { name: 'Toggle' })

    expect(trigger).toHaveAttribute('tabindex', '0')

    trigger.focus()
    await user.keyboard('{Enter}')

    expect(onKeyDown).toHaveBeenCalled()
    expect(queryByText('Content')).toBeInTheDocument()
  })

  it('keeps non-button trigger closed when keydown is prevented', async () => {
    const user = userEvent.setup()

    const { getByRole, queryByText } = render(
      <Collapsible>
        <CollapsibleTrigger>
          <div onKeyDown={(event) => event.preventDefault()}>Toggle</div>
        </CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    )

    const trigger = getByRole('button', { name: 'Toggle' })

    trigger.focus()
    await user.keyboard('{Enter}')

    expect(queryByText('Content')).not.toBeInTheDocument()
  })

  it('renders nothing for invalid trigger or close children', () => {
    const invalidChild = null as unknown as ReactElement

    const { queryByRole, queryByText } = render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>{invalidChild}</CollapsibleTrigger>
        <CollapsibleContent>
          <span>Content</span>
          <CollapsibleClose>{invalidChild}</CollapsibleClose>
        </CollapsibleContent>
      </Collapsible>
    )

    expect(queryByRole('button')).not.toBeInTheDocument()
    expect(queryByText('Content')).toBeInTheDocument()
  })
})
