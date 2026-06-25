import { CheckIcon } from '@channel.io/bezier-icons'
import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'
import textStyles from '~/src/v3/Text/Text.module.scss'

import {
  SECTION_ITEM_TEST_ID,
  SECTION_TEST_ID,
  Section,
  SectionItem,
  SectionLabel,
} from './Section'

describe('Section', () => {
  it('renders a labelled section', async () => {
    const { getByTestId, getByRole, getByText } = render(
      <Section>
        <SectionLabel content="General" />
        <SectionItem content="Profile" />
      </Section>
    )

    const section = getByTestId(SECTION_TEST_ID)
    const heading = getByRole('heading', { name: 'General' })

    await waitFor(() => {
      expect(section).toHaveAttribute('aria-labelledby', heading.id)
    })
    expect(getByText('Profile')).toBeInTheDocument()
  })

  it('renders label side content and help', () => {
    const { container, getByTestId, getByText } = render(
      <Section>
        <SectionLabel
          content="General"
          leadingContent={CheckIcon}
          trailingContent="Optional"
          help="Help content"
        />
      </Section>
    )

    expect(getByTestId(SECTION_TEST_ID)).toBeInTheDocument()
    expect(getByText('Optional')).toBeInTheDocument()
    expect(container.querySelectorAll('svg')).toHaveLength(2)
  })

  it('preserves an explicit aria-labelledby value', () => {
    const { getByTestId } = render(
      <>
        <h2 id="external-label">External label</h2>
        <Section aria-labelledby="external-label">
          <SectionLabel content="General" />
          <SectionItem content="Profile" />
        </Section>
      </>
    )

    expect(getByTestId(SECTION_TEST_ID)).toHaveAttribute(
      'aria-labelledby',
      'external-label'
    )
  })

  it('renders a button item when onClick is provided', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()

    const { getByRole } = render(
      <SectionItem
        content="Create"
        onClick={onClick}
      />
    )

    await user.click(getByRole('button', { name: 'Create' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when a button item is disabled', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()

    const { getByRole } = render(
      <SectionItem
        content="Create"
        disabled
        onClick={onClick}
      />
    )

    await user.click(getByRole('button', { name: 'Create' }))

    expect(onClick).not.toHaveBeenCalled()
  })

  it('renders an anchor item when href is provided', () => {
    const { getByRole } = render(
      <SectionItem
        content="Billing"
        href="/billing"
      />
    )

    expect(getByRole('link', { name: 'Billing' })).toHaveAttribute(
      'href',
      '/billing'
    )
  })

  it('renders a non-interactive item by default', () => {
    const { getByTestId, queryByRole } = render(
      <SectionItem content="Read only" />
    )

    expect(getByTestId(SECTION_ITEM_TEST_ID).tagName).toBe('DIV')
    expect(queryByRole('button')).not.toBeInTheDocument()
    expect(queryByRole('link')).not.toBeInTheDocument()
  })

  it('renders icon side content as decorative', () => {
    const { container } = render(
      <SectionItem
        content="Done"
        leadingContent={CheckIcon}
      />
    )

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders rich side content and multiline descriptions', () => {
    const { getAllByText, getByText } = render(
      <SectionItem
        content="Notification"
        description={'First line\nSecond line'}
        leadingContent={<span>Leading content</span>}
      />
    )

    expect(getByText('Leading content')).toBeInTheDocument()
    expect(
      getAllByText(
        (_content, element) => element?.textContent === 'First lineSecond line'
      )
    ).not.toHaveLength(0)
    expect(getByText('First line', { exact: false })).not.toHaveClass(
      textStyles['multi-line-truncated']
    )
  })

  it('prevents disabled anchor item interaction', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()

    const { getByRole } = render(
      <div onClick={onClick}>
        <SectionItem
          content="Billing"
          disabled
          href="/billing"
        />
      </div>
    )

    const link = getByRole('link', { name: 'Billing' })

    await user.click(link)

    expect(link).toHaveAttribute('tabindex', '-1')
    expect(onClick).not.toHaveBeenCalled()
  })
})
