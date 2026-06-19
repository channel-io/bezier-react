import { fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'
import { SectionItem } from '~/src/v3/Section'

import {
  CollapsibleSection,
  CollapsibleSectionTrigger,
} from './CollapsibleSection'

describe('CollapsibleSection', () => {
  it('renders a labelled collapsible section', async () => {
    const { getByRole, getByTestId, getByText } = render(
      <CollapsibleSection defaultOpen>
        <CollapsibleSectionTrigger content="General" />
        <SectionItem content="Profile" />
      </CollapsibleSection>
    )

    const section = getByTestId('bezier-v3-section')
    const trigger = getByRole('button', { name: 'General' })

    await waitFor(() => {
      expect(section).toHaveAttribute('aria-labelledby')
    })
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(getByText('Profile')).toBeInTheDocument()
  })

  it('toggles section content with pointer and keyboard', async () => {
    const user = userEvent.setup()

    const { getByRole, queryByText } = render(
      <CollapsibleSection defaultOpen>
        <CollapsibleSectionTrigger content="General" />
        <SectionItem content="Profile" />
      </CollapsibleSection>
    )

    const trigger = getByRole('button', { name: 'General' })

    await user.click(trigger)

    expect(queryByText('Profile')).not.toBeInTheDocument()

    trigger.focus()
    fireEvent.keyDown(trigger, { key: 'ArrowDown' })

    expect(queryByText('Profile')).not.toBeInTheDocument()

    await user.keyboard('{Enter}')

    expect(queryByText('Profile')).toBeInTheDocument()
  })

  it('finds trigger inside fragments', () => {
    const { getByRole, getByText } = render(
      <CollapsibleSection defaultOpen>
        <>
          <CollapsibleSectionTrigger content="General" />
          <SectionItem content="Profile" />
        </>
      </CollapsibleSection>
    )

    expect(getByRole('button', { name: 'General' })).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    expect(getByText('Profile')).toBeInTheDocument()
  })

  it('does not toggle with disabled trigger', async () => {
    const user = userEvent.setup()

    const { getByRole, queryByText } = render(
      <CollapsibleSection defaultOpen>
        <CollapsibleSectionTrigger
          content="General"
          disabled
        />
        <SectionItem content="Profile" />
      </CollapsibleSection>
    )

    const trigger = getByRole('button', { name: 'General' })

    await user.click(trigger)
    fireEvent.keyDown(trigger, { key: 'Enter' })

    expect(trigger).toHaveAttribute('aria-disabled', 'true')
    expect(trigger).toHaveAttribute('tabindex', '-1')
    expect(queryByText('Profile')).toBeInTheDocument()
  })
})
